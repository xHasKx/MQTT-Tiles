<template>
  <div class="dash__board">
    <settings
      v-if="settingsModel"
      v-model="settingsModel"
      :settings="currentSettings"
      @save="saveSettingsHandler"
      @hide="hideSettingsHandler"
    />
    <q-btn fab color="dark" @click="openSettings" icon="mdi-plus" class="absolute button--add">
      <q-tooltip>Add new widget</q-tooltip>
    </q-btn>
    <q-toolbar color="white">
      <q-btn round flat color="dark" icon="mdi-arrow-left" @click="$emit('close')">
        <q-tooltip>Back to boards list</q-tooltip>
      </q-btn>
      <q-toolbar-title class="text-dark">{{board.name}}</q-toolbar-title>
    </q-toolbar>
    <div class="widgets__wrapper scroll">
      <div style="width: 100%; position: relative;" v-if="board.widgetsIndexes.length">
        <grid-layout
          :layout.sync="board.layout"
          :col-num="colNum"
          :row-height="rowHeight"
          :is-draggable="isDragable"
          :is-resizable="true"
          :is-mirrored="true"
          :vertical-compact="false"
          :margin="[10, 10]"
          :use-css-transforms="true"
          :responsive="true"
        >
            <grid-item v-for="(widgetIndex, index) in board.widgetsIndexes"
              :key="widgetIndex"
              :x="board.layout[index].x"
              :y="board.layout[index].y"
              :w="board.layout[index].w"
              :h="board.layout[index].h"
              :i="board.layout[index].i"
              :minW="widgets[widgetIndex].settings.minWidth || 1"
              :minH="widgets[widgetIndex].settings.minHeight || 1"
              dragIgnoreFrom=".widget__content, i, button, a"
              @resized="resizeHandler"
            >
              <component
                :is="widgets[widgetIndex].type"
                :item="widgets[widgetIndex]"
                :value="values[widgetIndex]"
                :index="widgetIndex"
                :in-shortcuts="Boolean(board.shortcutsIndexes.includes(widgetIndex))"
                @action="(data) => { $emit('action', data) }"
                @update="editWidgetSettings(widgetIndex)"
                @delete="$emit('delete:widget', {widgetId: widgetIndex, settings: widgets[widgetIndex]})"
                @fast-bind="$emit('fast-bind', widgetIndex)"
              />
            </grid-item>
        </grid-layout>
      </div>
      <div v-else class="text-center text-grey-8 q-mt-md" style="font-size: 2rem;">
        <div class="text-bold">The board is empty</div>
        <div><q-btn color="dark" icon="mdi-plus-circle-outline" label="Add widget" @click="openSettings" /></div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
  .button--add
    bottom 16px
    right 16px
    z-index 1
  .dash__board
    position relative
    .widgets__wrapper
      height calc(100% - 50px)
      padding-bottom 82px
      position relative
</style>

<script>
import Settings from './widgets/Settings'
import VueGridLayout from 'vue-grid-layout'
import Switcher from './widgets/swither/View'
import Informer from './widgets/informer/View'
import Clicker from './widgets/clicker/View'
export default {
  name: 'Board',
  props: ['board', 'widgets', 'values'],
  data () {
    return {
      settingsModel: false,
      currentSettings: undefined,
      editedWidgetId: undefined,
      editedWidgetTopics: undefined,
      colNum: 12,
      rowHeight: 100,
      isDragable: true
    }
  },
  methods: {
    openSettings () {
      this.settingsModel = true
    },
    hideSettingsHandler () {
      this.currentSettings = undefined
      this.editedWidgetId = undefined
      this.editedWidgetTopics = undefined
    },
    saveSettingsHandler (settings) {
      if (this.editedWidgetId !== undefined) {
        this.$emit('edit:widget', {settings, widgetId: this.editedWidgetId, topics: this.editedWidgetTopics})
      } else {
        this.$emit('add:widget', settings)
      }
    },
    editWidgetSettings (widgetId) {
      this.currentSettings = this.widgets[widgetId]
      this.editedWidgetId = widgetId
      this.editedWidgetTopics = [...this.currentSettings.topics]
      this.openSettings()
    },
    resizeHandler (index, height, width) {
      this.$emit('resized', { index, height, width })
    }
  },
  components: {
    Settings,
    Switcher,
    Informer,
    Clicker,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  }
}
</script>