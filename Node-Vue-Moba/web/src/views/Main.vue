<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <!-- <img src="../assets/images/logo.png" height="30"> -->
      <i class="sprite-logo"></i>
      <div class="px-2 flex-grow-1">
        <div class="text-white fs-md">王者荣耀</div>
        <div class="text-gray-1 fs-sm pt-1">团队成就更多</div>
      </div>
      <!-- <button type="button" class="btn bg-primary">立即下载</button> -->
      <i class="sprite-download"></i>
    </div>
    
    <div class="bg-primary pt-3 pb-2">
      <div class="nav d-flex text-white jc-around pb-1">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
