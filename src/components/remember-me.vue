<template>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="remember_me"
      unchecked-value="dont_remember"
    >
    Remember me
    </b-form-checkbox>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: 'dont_remember'
      }
    }
  }
</script>

