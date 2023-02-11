<template>
  <div class="normal-illness">
    <h2 class="normal-illness-title">常见疾病</h2>
    <IllnessRouter
      v-for="(item, key, index) in categoryDetail"
      :item="item"
      :key="index"
      :index="index + 1"
      :title="key"
    />
  </div>
</template>

<script>
import IllnessRouter from "@/components/IllnessRouter";
import { mapGetters } from "vuex";
export default {
  name: "NormalIllness",
  data() {
    return {};
  },
  components: {
    IllnessRouter,
  },
  computed: {
    ...mapGetters({
      categoryDetail: "categoryDetail",
    }),
  },
  mounted() {
    const keys = Object.keys(this.$store.state.illness.categoryDetail);
    keys.length === 0 && this.$store.dispatch("getCategoryDetail");
  },
};
</script>

<style lang="less" scoped>
.normal-illness {
  padding: 20px;
  margin: 0 auto;
  &-title {
    width: fit-content;
    padding: 0 20px;
    font-size: 26px;
    line-height: 2;
    font-weight: bold;
    color: @font-color-dark;
    font-family: "楷体";
    border: 2px dashed @color;
    margin: 10px auto 20px;
    border-radius: 10px;
    user-select: none;
  }
}
</style>