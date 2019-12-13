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
            <dd
              v-for="(item, index) in $store.state.home.hotPlace.slice(0, 5)"
              :key="index"
            >
              {{ item.name }}
            </dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item, index) in searchList" :key="index">
              {{ item.name }}
            </dd>
          </dl>
        </div>
        <p class="suggset">
          <a
            href="#"
            v-for="(item, index) in $store.state.home.hotPlace.slice(0, 5)"
            :key="index"
          >
            {{ item.name }}
          </a>
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
import _ from 'lodash'
export default {
  name: 'SearchBar',
  data() {
    return {
      search: '',
      isFocus: false,
      searchList: []
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
    handleInput: _.debounce(async function() {
      const self = this
      const city = self.$store.state.geo.position.city.replace('市', '')
      self.searchList = []
      const {
        status,
        data: { top }
      } = await self.$axios.get('/search/top', {
        params: {
          input: self.search,
          city
        }
      })
      console.log(status)
      if (status === 200) {
        self.searchList = top.slice(0, 10)
      } else {
        self.searchList = []
      }
    }, 300)
  }
}
</script>

<style lang="scss">
.el-icon-search {
  color: #000000;
}
</style>
