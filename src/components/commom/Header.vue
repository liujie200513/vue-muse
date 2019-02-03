<template>
<mu-appbar style="width: 100%;" color="primary">
  <mu-button icon slot="left">
    <mu-icon value="account_box"></mu-icon>
  </mu-button>
  {{title}}
  <mu-menu slot="right" >
    <mu-button icon flat><mu-icon value="menu"></mu-icon></mu-button>
    <mu-list class="mu-list" slot="content">
      <mu-list-item to="/login" button>
        <mu-list-item-content>
          <mu-list-item-title >退出</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-content>
          <mu-list-item-title>帮助</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-menu>
</mu-appbar>
</template>

<script>
export default {
  name: 'Header',
  props: {
    headerTitle: String
  },
  data () {
    return {
      title: this.headerTitle
    }
  },
  methods: {
  }
}
</script>
<style lang="css" scoped>
.mu-appbar{
    position: fixed;
    top: 2px;
}
.mu-item-title{
  font-size: 14px;
}
</style>
