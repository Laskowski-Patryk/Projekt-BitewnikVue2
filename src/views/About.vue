<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>

export default {
  components: {
  },
  beforeCreate: function() {          // do body background w global.css
        document.body.className = 'about';
    }
}
</script>
