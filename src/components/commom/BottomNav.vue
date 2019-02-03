<template>
<mu-container class="mu-container">
  <mu-bottom-nav>
    <mu-bottom-nav-item title="房态" icon="restore"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="报表" icon="favorite"></mu-bottom-nav-item>
  </mu-bottom-nav>
</mu-container>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
  }
}
</script>
<style lang="css" scoped>
.mu-container{
  position: fixed;
  bottom: 10px;
  }
</style>
