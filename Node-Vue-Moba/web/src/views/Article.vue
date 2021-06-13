<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <router-link class="iconfont icon-Active fs-xl text-blue" to="/"></router-link>
      <strong class="fs-lg text-blue pl-2">{{model.title}}</strong>
      <div class="text-gray fs-xs">2021-06-12</div>
    </div>
    <div v-html="model.body" class="pl-3 pr-4 fs-xl body"></div>

    <div class="px-3 border-top py-2 border-top">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
        class="py-3" 
        tag="div" 
        v-for="item in model.related"
        :to="`/articles/${item._id}`" 
        :key="item._id">
        {{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { require: true }
  },
  data () {
    return {
      model: null
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  watch: {
    id () {
      this.fetch()
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article {
  .icon-Active{
    font-size: 2rem;
    text-decoration: none
  }
  .ellipsis {
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .body {
    img {
      width: 100%;
      height: auto
    }
  }
}
</style>
