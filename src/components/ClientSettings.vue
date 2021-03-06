<template>
  <q-modal v-model='status' @hide="closeHandler">
    <q-modal-layout>
      <q-toolbar slot="header" color='dark'>
        <q-toolbar-title>
          MQTT client
        </q-toolbar-title>
      </q-toolbar>
      <div style="margin: 20px;" :style="{ height: $q.platform.is.mobile ? 'calc(100% - 100px)' : '50vh', width: $q.platform.is.mobile ? 'calc(100% - 40px)' : '50vw'}">
        <q-input color="dark"  v-model="currentSettings.clientName" float-label="MQTT client name" :error="!currentSettings.clientName"/>
        <q-input color="dark"  v-model="currentSettings.clientId" float-label="Client ID" :error="!currentSettings.clientId" :after="[{icon: 'mdi-refresh', handler () { currentSettings.clientId = `mqtt-tiles-${Math.random().toString(16).substr(2, 8)}` }}]"/>
        <q-input color="dark"  v-model="currentSettings.host" float-label="Host" :error="!currentSettings.host || (currentSettings.host.indexOf('ws:') === 0)" :after="[{icon: 'mdi-alert-outline', handler: hostErrorHandler, error: true}]"/>
        <q-input color="dark"  v-model="currentSettings.keepalive" type="number" float-label="Keep alive"/>
        <q-select color="dark" v-model="currentSettings.protocolVersion" :options="[{label: '3.1.1', value: 4}, {label: '5.0', value: 5}]" float-label="Version of MQTT"/>
        <q-checkbox style="height: 56px" color="dark" class="q-mr-sm" v-model="currentSettings.clean" :label="currentSettings.protocolVersion === 5 ? 'Clean start' : 'Clean session'"/>
        <q-input style="display: inline-flex; width: calc(100% - 115px)" color="dark" v-if="currentSettings.protocolVersion === 5" v-model="currentSettings.properties.sessionExpiryInterval" type="number" float-label="Session expiry interval" clearable :clear-value="undefined"/>
        <q-input color="dark" v-model="currentSettings.username" float-label="Username" :clear-value="undefined" :after="[{icon: 'mdi-login', handler: flespiLoginHandler, condition: currentSettings.host.indexOf('flespi') !== -1}]"/>
        <q-input color="dark" v-model="currentSettings.password" float-label="Password" :clear-value="undefined"/>
        <q-collapsible v-if="currentSettings.protocolVersion === 5" class="q-mt-md q-mb-sm bg-grey-4" label="Subscribe User Properties">
          <div>
            <q-list v-if="currentSettings.userProperties">
              <q-item v-for="(value, name) in currentSettings.userProperties" :key="`${name}: ${value}`">
                <q-icon class="q-mr-sm cursor-pointer" size='1rem' @click.native="removeUserProperty(name)" name="mdi-close-circle"/>
                <span>{{`${name}: ${value}`}}</span>
              </q-item>
            </q-list>
            <q-input color="dark" v-model="userProperty.name" float-label="User property name"/>
            <q-input color="dark" v-model="userProperty.value" float-label="User property value"/>
            <q-btn :disable="!userProperty.name || !userProperty.value" style="width: 100%" class="q-mt-sm" color="dark" @click="addUserProperty">Add</q-btn>
          </div>
        </q-collapsible>
      </div>
      <q-toolbar slot="footer" color='dark'>
        <q-toolbar-title>
        </q-toolbar-title>
        <q-btn flat dense class="q-mr-sm" @click="closeHandler">Close</q-btn>
        <q-btn flat dense :disable="!validateCurrentSettings" @click="saveSettingsHandler">{{settings ? 'Update' : 'Save'}}</q-btn>
      </q-toolbar>
    </q-modal-layout>
  </q-modal>
</template>

<style>
</style>

<script>
import merge from 'lodash/merge'
import { defaultClient } from '../constants/defaultes.js'

export default {
  name: 'ClientSettings',
  props: ['value', 'settings'],
  data () {
    let defaultSettings = defaultClient()
    return {
      defaultSettings,
      currentSettings: this.settings ? merge({}, defaultSettings, this.settings) : merge({}, defaultSettings),
      userProperty: {
        name: '',
        value: ''
      }
    }
  },
  computed: {
    validateCurrentSettings () {
      return !!this.currentSettings.clientId &&
        (!!this.currentSettings.host && !(this.currentSettings.host.indexOf('ws:') === 0))
    },
    status () { return this.value }
  },
  methods: {
    saveSettingsHandler () {
      this.$emit('save', this.currentSettings)
      this.closeHandler()
      this.$nextTick(() => {
        this.defaultSettings.clientId = `mqtt-tiles-${Math.random().toString(16).substr(2, 8)}`
        this.currentSettings = merge({}, this.defaultSettings)
      })
    },
    closeHandler () {
      this.$emit('input', false)
      this.$emit('hide')
    },
    hostErrorHandler () {
      this.$q.notify({
        message: 'Host must be not empty and only over secured sockets'
      })
    },
    addUserProperty () {
      if (!this.currentSettings.userProperties) {
        this.$set(this.currentSettings, 'userProperties', {})
      }
      this.$set(this.currentSettings.userProperties, this.userProperty.name, this.userProperty.value)
      this.userProperty = {
        value: '',
        name: ''
      }
    },
    removeUserProperty (name) {
      this.$delete(this.currentSettings.userProperties, name)
      if (!Object.keys(this.currentSettings.userProperties).length) {
        this.$set(this.currentSettings, 'userProperties', null)
      }
    },
    flespiLoginHandler () {
      let tokenHandler = (event) => {
        if (typeof event.data === 'string' && ~event.data.indexOf('FlespiToken')) {
          this.currentSettings.username = event.data
          window.removeEventListener('message', tokenHandler)
        }
      }
      window.addEventListener('message', tokenHandler)
      this.openWindow(`https://flespi.io/login/#/providers`)
    },
    openWindow (url, title) {
      title = title || 'auth'
      let w = 500, h = 600
      let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
      let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

      let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
      let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

      let left = ((width / 2) - (w / 2)) + dualScreenLeft
      let top = ((height / 2) - (h / 2)) + dualScreenTop
      let newWindow = window.open(url, title, 'toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus()
      }
    }
  },
  watch: {
    settings (settings) {
      this.currentSettings = merge({}, this.defaultSettings, settings)
    }
  }
}
</script>
