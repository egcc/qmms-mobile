<template>
  <span slot="label" class="icon-wrap">
    <span class="red">{{requiredText}}</span>
    <span class="icon" :class="[icon]"></span>
  </span>
</template>

<script>
  export default {
    // props: ['required', 'fontClass'],
    props: {
      required: Boolean,
      fontClass: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        icon: this.fontClass
      }
    },
    computed: {
      requiredText: function () {
        return this.required ? '*' : ''
      }
    }
  }
</script>

<style>
.icon-wrap{
  display: block;
  padding-right: 10px;
}

.icon {
    color: #9b9b9b;
}
</style>
