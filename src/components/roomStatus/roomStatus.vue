<template>
  <div>
    <login-header header-title="房态"/>
    <mu-container class="mu-container">
      <mu-form :model="form" class="mu-demo-form" label-position="left">
         <mu-form-item prop="input" label="搜索">
      <mu-text-field v-model="form.input"></mu-text-field>
    </mu-form-item>
    </mu-form>
     <!-- <mu-flex justify-content="center">
        <mu-grid-list class="gridlist-demo" cols = 4 cell-height=80>
         <mu-grid-tile v-for="(tile, index) in list" :key="index">
            <span slot="title">{{tile.title}}</span>
            <span slot="subTitle">by <b>{{tile.author}}</b></span>
         </mu-grid-tile>
       </mu-grid-list>
      </mu-flex> -->
      <div class="flex-container">
         <div class="flex-item" v-for="(tile, index) in list" :key="index">
            233
         </div>
      </div>
    </mu-container>
    <bottom-nav />
  </div>
</template>
<script>
import LoginHeader from '../commom/Header'
import BottomNav from '../commom//BottomNav'
export default {
  name: 'RoomStatus',
  components: {
    LoginHeader,
    BottomNav
  },
  data () {
    return {
      list: [{
        title: 'Burger',
        author: 'Linyu'
      }, {
        title: 'Camera',
        author: 'ruolin'
      }, {
        title: 'Hats',
        author: 'kakali'
      }, {
        title: 'Honey',
        author: 'yuyang'
      }, {
        title: 'Morning',
        author: 'mokayi'
      }, {
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        title: 'water',
        author: 'TDDyyyyyyy'
      },
      {
        title: 'Breakfast',
        author: 'Myron'
      }, {
        title: 'Burger',
        author: 'Linyu'
      }, {
        title: 'Camera',
        author: 'ruolin'
      }, {
        title: 'Hats',
        author: 'kakali'
      }, {
        title: 'Honey',
        author: 'yuyang'
      }, {
        title: 'Morning',
        author: 'mokayi'
      }, {
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        title: 'water',
        author: 'TDDyyyyyyy'
      }, {
        title: 'Breakfast',
        author: 'Myron'
      }, {
        title: 'Burger',
        author: 'Linyu'
      }, {
        title: 'Camera',
        author: 'ruolin'
      }, {
        title: 'Hats',
        author: 'kakali'
      }, {
        title: 'Honey',
        author: 'yuyang'
      }, {
        title: 'Morning',
        author: 'mokayi'
      }, {
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        title: 'water',
        author: 'TDDyyyyyyy'
      }, {
        title: 'Breakfast',
        author: 'Myron'
      }, {
        title: 'Burger',
        author: 'Linyu'
      }, {
        title: 'Camera',
        author: 'ruolin'
      }, {
        title: 'Hats',
        author: 'kakali'
      }, {
        title: 'Honey',
        author: 'yuyang'
      }, {
        title: 'Morning',
        author: 'mokayi'
      }, {
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        title: 'water',
        author: 'TDDyyyyyyy'
      }],
      form: {
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.flex-container{
     display: flex;
     flex-wrap:wrap;
     justify-content:flex-start;
     align-items:center;
     height: 400px;
     background: red;
     overflow: auto;
}
.flex-item{
    margin: 5px;
    height: 60px;
    width: 74px;
    background: greenyellow;
    flex:0 0 22%;
}
.gridlist-demo{
  width: 98%;
  height: 400px;
  overflow-y: auto;
}
.mu-demo-form {
  width: 100%;
  max-width: 340px;
}
.mu-container{
    flex: 1;
  align-items:center;
}
</style>
