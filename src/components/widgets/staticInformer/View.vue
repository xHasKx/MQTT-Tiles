<template>
  <q-card flat inline class="widget__static-informer" style="width: 100%; height: 100%;" :class="[`bg-${item.color}-1`]">
    <q-item class="q-px-sm q-pt-sm q-pb-none" style="min-height: 0px;">
      <q-item-main class="ellipsis" :class="[`text-${item.color}-7`]" style="font-size: .9rem">
        {{item.name}}
      </q-item-main>
      <transition name="block">
        <q-item-side v-if="!blocked" style="min-width: 20px;">
          <q-btn size="0.9rem" class="q-pa-none" style="min-height: 1rem;" dense flat icon="mdi-dots-vertical" :color="`${item.color}-7`">
            <q-popover anchor="top right" self="top right" :offset="[8, 8]" style="box-shadow: none;">
              <div class="q-pa-sm" :class="[`bg-${item.color}-1`]">
                <q-btn v-close-overlay size="0.9rem" class="q-pa-none q-mr-xs" style="min-height: 1rem;" icon="mdi-content-duplicate" @click="$emit('duplicate')" dense flat :color="`${item.color}-7`">
                  <q-tooltip>Duplicate</q-tooltip>
                </q-btn>
                <q-btn v-close-overlay size="0.9rem" class="q-pa-none q-mr-xs" style="min-height: 1rem;" icon="mdi-settings" @click="$emit('update')" dense flat :color="`${item.color}-7`">
                  <q-tooltip>Edit</q-tooltip>
                </q-btn>
                <q-btn v-close-overlay size="0.9rem" class="q-pa-none q-mr-xs" style="min-height: 1rem;" icon="mdi-delete-outline" @click="$emit('delete')" dense flat color="red">
                  <q-tooltip>Remove</q-tooltip>
                </q-btn>
                <q-btn v-close-overlay size="0.9rem" class="q-pa-none" style="min-height: 1rem;" icon="mdi-close" dense flat :color="`${item.color}-7`"/>
              </div>
            </q-popover>
          </q-btn>
        </q-item-side>
      </transition>
    </q-item>
    <q-card-media class="widget__content scroll" :class="[`bg-${item.color}-1`]" style="height: calc(100% - 44px);">
      <div class="sattic-informer__payload-wrapper">
        <text-view class="static-informer__payload text-dark" :text="text" :title="text" :settings="item.settings" :show-tooltip="false" />
      </div>
    </q-card-media>
  </q-card>
</template>

<style lang="stylus">
  .static-informer__payload-wrapper
    align-items center
    vertical-align middle
    width 100%
  .static-informer__payload
    font-size 1.2rem
    word-break break-all
    display block
    padding 2px 4px
  .block-leave-to
    transition all .2s ease-in-out
    opacity 0
  .block-leave
    transition all .2s ease-in-out
    opacity 1
  .block-enter
    transition all .2s ease-in-out
    opacity 0
  .block-enter-to
    transition all .2s ease-in-out
    opacity 1
</style>

<script>
import { WIDGET_STATUS_DISABLED } from '../../../constants'
import TextView from '../TextView'
import getValueByTopic from '../../../mixins/getValueByTopic.js'
import timestamp from '../../../mixins/timestamp.js'
export default {
  name: 'StaticInformer',
  props: ['item', 'index', 'mini', 'in-shortcuts', 'value', 'blocked'],
  data () {
    return {
      WIDGET_STATUS_DISABLED
    }
  },
  methods: {
    showTooltip () {
      if (this.$q.platform.is.mobile) {
        this.$refs.tooltip.toogle()
      }
    }
  },
  computed: {
    text () {
      return this.item.settings.text
    }
  },
  components: { TextView },
  mixins: [getValueByTopic, timestamp]
}
</script>
