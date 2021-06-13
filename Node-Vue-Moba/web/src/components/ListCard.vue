<template>
    <m-card :title="title" :icon="icon">
        <div class="nav jc-between">
          <div class="nav-item" :class="{active: active === i}"
          v-for="(category, i) in categories" :key="i"
          @click="$refs.list.swiper.slideTo(i)">
            <div class="nav-link">{{category.name}}</div>
          </div>
        </div>
  
        <div class="pt-2">
          <!-- vue中的ref 相当于HTML中的id -->
          <swiper ref="list" :options="{autoHeight: true}"
          @slide-change="() => active = $refs.list.swiper.realIndex">
            <swiper-slide v-for="(category, i) in categories" :key="i">
                <!-- 具名插槽，需要向待插入元素传值 -->
                <slot name="items" :category="category"></slot>
            </swiper-slide>
            <!-- <swiper-slide>
              <div class="py-2 d-flex" v-for="n in 5" :key="n">
                <span class="card-news fs-sm mr-1">新闻</span>
                <span class="flex-grow-1">叮！你有一份来自久诚的生日趴邀请~</span>
                <span>06/09</span>
              </div>
            </swiper-slide> -->
          </swiper>
        </div>
      </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, require: true},
    title: { type: String, require: true},
    categories: { type: Array, require: true}
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>