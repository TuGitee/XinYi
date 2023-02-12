<template>
  <div class="start-page">
    <div class="start-page-carousel" ref="carousel">
      <div
        v-for="index in 3"
        :key="index"
        class="start-page-carousel-item"
        :class="{ active: index === activeIndex+1 }"
      >
        <img
          :src="require(`./images/start${index}_pc.png`)"
          :alt="`start${index}`"
          class="start-page-carousel-item-pc"
        />
        <img
          :src="require(`./images/start${index}_mobile.png`)"
          :alt="`start${index}`"
          class="start-page-carousel-item-mobile"
        />
      </div>
    </div>
    <button class="start-page-skip" @click="goSkip">跳过</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      timer: null,
    };
  },
  methods: {
    goSkip() {
      clearInterval(this.timer);
      this.$router.push("/function-introduction");
    },
  },
  mounted() {
    this.$refs.carousel.style.left = 0;
    this.timer = setInterval(() => {
      this.activeIndex++;
      this.$refs.carousel.style.left =
        parseInt(this.$refs.carousel.style.left) - 100 + "vw";

      if (
        parseInt(this.$refs.carousel.style.left) <=
        this.$refs.carousel.children.length * 100 * -1
      ) {
        clearInterval(this.timer);
        this.$router.push("/search-illness");
      }
    }, 3000);
  },
};
</script>

<style lang="less" scoped>
.start-page {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  &-carousel {
    display: flex;
    flex-direction: row;
    width: 300%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    &-item {
      width: 100%;
      height: 100%;
      opacity: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (max-width: 480px) {
        &-pc {
          display: none;
        }
      }
      @media (min-width: 480px) {
        &-mobile {
          display: none;
        }
      }
    }
  }
  .active {
    opacity: 1;
  }
  &-skip {
    position: absolute;
    top: calc(constant(safe-area-inset-top) + 10px);
    top: calc(env(safe-area-inset-top) + 10px);
    right: 10px;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: @color;
    color: @white;
    border-radius: 5px;
    border: none;
  }
}
</style>