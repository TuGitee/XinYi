<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <div class="nav-bar-left-logo">
        <img src="../../assets/logo.png" alt="logo" />
      </div>
      <div class="nav-bar-left-title">
        <router-link class="nav-bar-left-title-home" to="/">心翼</router-link>
      </div>
      <div class="nav-bar-left-music">
        <img
          src="@/assets/image/music/play.png"
          alt="music"
          @click="handleMusic"
          :class="isMusicActive ? 'music-run' : 'music-pause'"
        />
      </div>
    </div>
    <div class="nav-bar-right" ref="nav">
      <div
        class="nav-bar-right-item"
        v-for="(item, index) in NavRoutes"
        :key="index"
      >
        <router-link :to="{ name: item.name }" replace>{{
          item.meta.title
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavRoutes from "@/router/NavRoutes";
export default {
  name: "NavBar",
  data() {
    return {
      NavRoutes,
      isMusicActive: false,
    };
  },
  methods: {
    handleMusic() {
      this.isMusicActive = !this.isMusicActive;
      const music = document.querySelector(".music");
      if (this.isMusicActive) {
        music.play();
      } else {
        music.pause();
      }
    },
  },
  mounted() {
    const music = document.querySelector(".music");
    if (music.paused) {
      this.isMusicActive = false;
    } else {
      this.isMusicActive = true;
    }
    document.body.addEventListener(
      "mousedown",
      () => {
        if (music.paused)
          music
            .play()
            .then(() => {
              music.muted = false;
              this.isMusicActive = true;
            })
            .catch(() => {
              this.isMusicActive = false;
            });
      },
      { once: true }
    );
    document.body.addEventListener(
      "touchstart",
      () => {
        if (music.paused)
          music
            .play()
            .then(() => {
              music.muted = false;
              this.isMusicActive = true;
            })
            .catch(() => {
              this.isMusicActive = false;
            });
      },
      { once: true }
    );
  },
};
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background: linear-gradient(45deg, #fed5b8, #c2b3ff, #ffbdec);
  box-shadow: 0 1px 20px -10px @color-dark;
  position: fixed;
  width: 100%;
  z-index: 999;
  min-width: fit-content;
  box-sizing: content-box;
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);

  &-left {
    display: flex;
    align-items: center;
    min-width: fit-content;
    height: 60px;
    margin: 0 50px;
    &-logo {
      width: 40px;
      height: 40px;
      margin-left: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-title {
      margin: 0 16px;
      font-size: 26px;
      font-weight: 400;
      font-family: "隶书";
      white-space: nowrap;
      &-home {
        color: @color;
        text-shadow: 0 0 10px @white;
      }
    }
    &-music {
      margin-left: 10px;
      height: 30px;
      width: 30px;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        animation: music 2s infinite linear;

        &.music-active {
          animation-play-state: running;
        }
        &.music-pause {
          animation-play-state: paused;
        }
        @keyframes music {
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
  &-right {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: fit-content;
    margin-left: 20px;
    flex-wrap: wrap;
    &-item {
      margin-right: 20px;
      height: 60px;
      font-size: 16px;
      display: flex;
      align-items: center;
      &:last-child a {
        border-radius: 10px;
        background-color: @color;
        color: @white;
        padding: 10px 20px;
        text-decoration: none;
        &:hover {
          background-color: @color;
          color: @white;
        }
      }
      &:not(:last-child) a {
        display: block;
        line-height: 60px;
        color: @font-color;
        white-space: nowrap;
      }
    }
  }
}
</style>