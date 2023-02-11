<template>
  <div class="psychology-knowledge">
    <PsychologyItem
      v-for="(item, index) in psychologyList"
      :key="index"
      :item="item"
      class="psychology-knowledge-item"
    />
  </div>
</template>

<script>
import PsychologyItem from "@/components/PsychologyItem";
import { mapState } from "vuex";
export default {
  components: {
    PsychologyItem,
  },
  mounted() {
    this.$store.state.psychology.psychologyList.length ||
      this.$store.dispatch("getPsychologyList");
  },
  computed: {
    ...mapState({
      psychologyList: (state) => state.psychology.psychologyList,
    }),
  },
};
</script>

<style lang="less" scoped>
.psychology-knowledge {
  padding: 30px;
  width: 80%;
  margin: auto;
  min-width: min-content;
  @media screen and (min-width: 864px) {
    width: 70%;
  }
}
</style>