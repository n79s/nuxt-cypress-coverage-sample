import Vue from 'vue'

if (window.Cypress) {
  window.$allComponents = []

  Vue.mixin({
    mounted() {
      if (this.$vnode) {
        if (String(this.$vnode.tag).includes('pages'))
          window.$allComponents.push(this)
      }
    },
  })
}
