<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <a href="#">
          <img src="@/assets/img/logo.png" alt="美团" />
        </a>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
          ></el-input>
          <button class="el-button el-button--primary">
            <i class="el-icon-search" />
          </button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              {{ item }}
            </dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item, index) in searchList" :key="index">
              {{ item }}
            </dd>
          </dl>
        </div>
        <p class="suggset">
          <a href="#">水立方嬉水乐园</a>
          <a href="#">故宫博物院 故宫</a>
          <a href="#">八达岭长城</a>
          <a href="#">太平洋海底世界博览馆</a>
          <a href="#">北京欢乐谷</a>
          <a href="#">北京海洋馆</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund" />
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single" />
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue" />
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'SearchBar',
  data() {
    return {
      search: '',
      isFocus: false,
      hotPlaceList: ['火锅', '火锅', '火锅', '火锅', '火锅'],
      searchList: ['故宫', '故宫', '故宫', '故宫', '故宫', '故宫']
    }
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    handleFocus() {
      this.isFocus = true
    },
    handleBlur() {
      const self = this
      setTimeout(() => {
        self.isFocus = false
      }, 200)
    },
    handleInput() {
      console.log('input')
    }
  }
}
</script>

<style lang="scss">
.el-icon-search {
  color: #000000;
}
</style>
