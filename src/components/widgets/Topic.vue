<template>
  <div class="row">
    <q-input autofocus class="col-8" color="dark" v-model="currentValue.topicTemplate" @input="currentValue.topicFilter = currentValue.topicTemplate" float-label="Topic" :error="!validateTopic(currentValue.topicFilter)"/>
    <q-select class="col-4" color="dark" v-model="currentValue.payloadType" float-label="Payload type" :options="payloadTypeOptions"/>
    <variables-helper class="col-12" v-if="board && board.settings.variables && board.settings.variables.length" :variables="board.settings.variables" @add="(variable) => currentValue.topicTemplate += variable"/>
    <q-field class="col-12" helper="You can set path in result JSON. Path started from root of object. Example: names[0].value" v-if="currentValue.payloadType === WIDGET_PAYLOAD_TYPE_JSON" >
      <q-input color="dark" v-model="currentValue.payloadField" float-label="Payload path"/>
    </q-field>
    <q-field class="col-12" helper="Value`s label gets from resilt JSON by path. Example: names[0].label" v-if="config && config.needLabel && currentValue.payloadType === WIDGET_PAYLOAD_TYPE_JSON" >
      <q-input color="dark" v-model="currentValue.payloadNameField" float-label="Value`s label"/>
    </q-field>
  </div>
</template>

<script>
import validateTopic from '../../mixins/validateTopic.js'
import VariablesHelper from './VariablesHelper'
import {
  WIDGET_PAYLOAD_TYPE_STRING,
  WIDGET_PAYLOAD_TYPE_JSON
} from '../../constants'
export default {
  name: 'Topic',
  props: ['value', 'board', 'config'],
  /* config = { needLabel } */
  data () {
    let defaultTopic = {
        topicTemplate: '',
        topicFilter: '',
        payloadType: 0,
        payloadField: '',
        payloadNameField: ''
      },
      currentValue = Object.assign({}, this.defaultTopic, this.value)
    if (!currentValue.topicTemplate) {
      currentValue.topicTemplate = currentValue.topicFilter
    }
    return {
      defaultTopic,
      currentValue,
      WIDGET_PAYLOAD_TYPE_STRING,
      WIDGET_PAYLOAD_TYPE_JSON,
      payloadTypeOptions: [
        { label: 'String', value: WIDGET_PAYLOAD_TYPE_STRING },
        { label: 'JSON', value: WIDGET_PAYLOAD_TYPE_JSON }
      ]
    }
  },
  watch: {
    currentValue: {
      deep: true,
      handler (val) { this.$emit('input', val) }
    }
  },
  mixins: [validateTopic],
  components: { VariablesHelper }
}
</script>
