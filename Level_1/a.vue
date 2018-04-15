<template>
  <button @click="emitMyEvent">emit</button>
</template>

<script>
export default {
  data() {
      return {
          hello: 'i am component a',
      }
  },
  methods: {
      emitMyEvent() {
          this.$emit('my-event', this.hello)
      }
  }
}
</script>
