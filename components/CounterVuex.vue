<template>
  <div>
    <div>
      <button data-counter-count-button @click="handleClick">click</button>
    </div>
    <div>
      <span data-counter-input-value>{{ vcounter }}</span>
    </div>
    <div>
      <span>isLarge: </span><span data-counter-message>{{ isLarge }}</span>
    </div>
    <hr style="margin: 10px;" />
    <div>
      <button data-counter-api-button @click="apiCall">api click</button>
    </div>
    <div>
      {{ apiresult }}
    </div>
    <div>
      <button data-counter-apipost-button @click="handleClickPost">
        api post click
      </button>
    </div>
    <div>
      {{ apipostresult }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      postdata: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    }
  },
  computed: {
    ...mapGetters({
      vcounter: 'vcounter',
      apiresult: 'apiresult',
      apipostresult: 'apipostresult',
    }),
    isLarge() {
      return this.vcounter > 5 ? 'large' : 'small'
    },
  },
  methods: {
    ...mapActions({
      setCounter: 'setCounter',
      addCounter: 'addCounter',
      apiCall: 'apiCall',
      apiCallPost: 'apiCallPost',
    }),
    handleClick() {
      this.addCounter(2)
    },
    handleClickPost(args) {
      this.apiCallPost(this.postdata)
    },
  },
}
</script>
