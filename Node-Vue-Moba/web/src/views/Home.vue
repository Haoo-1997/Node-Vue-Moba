<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/d55431ae165c8a35a83bc48c980e36d3.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/43fc869b076085eb3b721e0e0620b46f.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/9b90cd4e9eb7286cada258c4ca7b4ab6.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-news"></i>
          <div class="py-2 fs-sm">爆料站</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-story"></i>
          <div class="py-2 fs-sm">故事站</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-store"></i>
          <div class="py-2 fs-sm">周边商场</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-experience"></i>
          <div class="py-2 fs-sm">体验服</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-newcomer"></i>
          <div class="py-2 fs-sm">新人专区</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-inherited"></i>
          <div class="py-2 fs-sm">荣耀传承</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-camp"></i>
          <div class="py-2 fs-sm">王者营地</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-public"></i>
          <div class="py-2 fs-sm">公众号</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite-version"></i>
          <div class="py-2 fs-sm">版本介绍</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-setting"></i>
          <div class="py-2 fs-sm">对局环境</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-ip"></i>
          <div class="py-2 fs-sm">IP共创计划</div>
        </div>
        <div class="nav-item mb-3 mt-2">
          <i class="sprite sprite-interactive"></i>
          <div class="py-2 fs-sm">创意互动营</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <div class="card p-3 bg-white mt-3">
      <div class="card-header d-flex ai-center">
        <i class="iconfont icon-menu fs-xs"></i>
        <div class="fs-xl flex-grow-1 px-2">新闻资讯</div>
        <i class="iconfont icon-ellipsis text-gray-1"></i>
      </div>
      <div class="car-body">

      </div>
    </div>
  <p>aaaa</p>
  <p>aaaa</p>
  <p>aaaa</p>
  <p>aaaa</p>
  <p>aaaa</p>
  <p>aaaa</p>
  <p>aaaa</p>
  <p>aaaa</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
        swiperOptions: {
          loop: true,
          autoplay: true,
          pagination: {
            el: '.pagination-home'
          },
          // Some Swiper option/callback...
        }
      }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, 'white');
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}

.nav-icons {
  /* border-top: 0.0769rem solid $border-color;
  border-bottom: 0.0769rem solid $border-color; */
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(1),  &:nth-child(5),  &:nth-child(9) {
      border-left: none;
    }
  }
}
</style>