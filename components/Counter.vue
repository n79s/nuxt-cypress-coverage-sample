<template>
  <div>
    <div>
      <button data-counter-count-button @click="handleClick">click</button>
    </div>
    <div>
      <input v-model="count" data-counter-input-value />
    </div>
    <div>
      <span>isLarge: </span><span data-counter-message>{{ isLarge }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    isLarge() {
      return this.count > 5 ? 'large' : 'small'
    },
  },
  methods: {
    handleClick() {
      this.count++
    },
  },
}
</script>

<style></style>
