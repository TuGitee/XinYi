<template>
  <div class="search-illness">
    <div class="search-illness-header">
      <div class="search-illness-header-image"></div>
      <div class="search-illness-header-search">
        <div class="search-illness-header-search-input">
          <i class="search-illness-header-search-input-icon"></i>
          <input
            type="text"
            v-model="keyword"
            class="search-illness-header-search-input-key"
            placeholder="请输入疾病名称"
            @keydown.enter="handleSearch"
          />
        </div>

        <button
          @click="handleSearch"
          class="search-illness-header-search-button"
        >
          搜索
        </button>
      </div>

      <div class="search-illness-header-maybe" v-if="maybeList.length">
        <div class="search-illness-header-maybe-title"><b>您可能想搜</b></div>
        <ul class="search-illness-header-maybe-list">
          <li
            class="search-illness-header-maybe-list-item"
            v-for="(item, index) in maybeList"
          >
            <router-link
              :to="{
                name: 'IllnessDetail',
                params: {
                  illnessId: item.id,
                },
              }"
              class="search-illness-header-maybe-list-item-link"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <hr v-if="maybeList.length" class="search-illness-header-hr" />
      <div class="search-illness-header-history">
        <div class="search-illness-header-history-title"><b>历史搜索</b></div>
        <ul
          class="search-illness-header-history-list"
          v-if="historyList.length"
        >
          <li
            class="search-illness-header-history-list-item"
            v-for="(item, index) in historyList"
            :key="index"
          >
            <router-link
              :to="{
                name: 'IllnessDetail',
                params: {
                  illnessId: item.id,
                },
              }"
              class="search-illness-header-history-list-item-link"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="search-illness-content">
      <div class="search-illness-content-visit">
        <div class="search-illness-content-visit-title">浏览历史</div>
        <button
          class="search-illness-content-visit-clearall"
          @click="clearAll"
          v-if="historyList.length !== 0"
        >
          点击清空所有历史记录
        </button>
        <ul class="search-illness-content-visit-list">
          <VisitItem
            v-for="(item, index) in historyList"
            :item="item"
            :index="index"
            :key="item.id"
          ></VisitItem>
          <li
            class="search-illness-content-visit-list-warning"
            v-if="historyList.length === 0"
          >
            暂无历史记录
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VisitItem from "@/components/VisitItem";
import { mapGetters } from "vuex";
export default {
  name: "SearchIllness",
  data() {
    return {
      keyword: "",
      maybeList: [],
      historyList:
        (localStorage.getItem("historyList") &&
          JSON.parse(localStorage.getItem("historyList"))) ||
        [],
      isSearch: true,
    };
  },
  computed: {
    ...mapGetters({
      illnessList: "illnessList",
    }),
  },
  components: {
    VisitItem,
  },
  methods: {
    handleSearch() {
      const {illnessList}  = this
      if (this.isSearch) {
        this.isSearch = false;
        setTimeout(() => {
          this.isSearch = true;
        }, 300);
      } else {
        return;
      }
      let illnessId = illnessList.find(
        (item) => item.name === this.keyword
      )?.id;
      illnessId &&
        this.$router.push({
          name: "IllnessDetail",
          params: {
            illnessId,
          },
        });
      const reg = new RegExp(
        `^.*${this.keyword
          .split("")
          .map((item) => `(?=.*${item}.*)`)
          .join("")}.*$`
      );
      this.maybeList = illnessList
        .sort(() => Math.random() - 0.5)
        .filter((item) => item.name.match(reg))
        .splice(0, 5);
      if (this.maybeList.length === 0) {
        this.maybeList = illnessList.splice(0, 5);
      }
    },
    clearAll() {
      this.historyList = [];
      localStorage.setItem("historyList", JSON.stringify(this.historyList));
    },
  },
  mounted() {
    this.$bus.$on("clearHistoryItem", (index) => {
      this.historyList.splice(index, 1);
      localStorage.setItem("historyList", JSON.stringify(this.historyList));
    });
  },
};
</script>

<style lang="less" scoped>
.search-illness {
  margin: 0 auto;
  &-header {
    width: 70%;
    margin: 0 auto 100px;
    min-width: min-content;
    &-image {
      width: 200px;
      height: 200px;
      margin: 50px auto;
      background: url(../../assets/logo.png) no-repeat 0 0;
      background-size: 100% 100%;
    }
    &-search {
      display: flex;
      &-input {
        flex: 1;
        position: relative;

        &-icon {
          height: 26px;
          width: 26px;
          color: @color;
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          background: url(../../assets/logo.png) no-repeat 0 0;
          background-size: 26px 26px;
        }
        &-key {
          width: 100%;
          height: 40px;
          border: 1px solid @color;
          border-radius: 10px;
          padding: 0 20px 0 44px;
          line-height: 1;
        }
      }
      &-button {
        width: fit-content;
        padding: 10px 20px;
        border: 1px solid @color;
        outline: none;
        border-radius: 10px;
        margin-left: 10px;
        background-color: @white;
        color: @color;
        white-space: nowrap;

        &:hover {
          background-color: @color;
          color: @white;
        }

        &:active {
          filter: brightness(1.1);
        }
      }
    }
    &-history,
    &-maybe {
      display: flex;
      line-height: 20px;
      margin-top: 10px;
      width: fit-content;
      white-space: nowrap;
      &-title {
        font-size: 16px;
        color: #333;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-list {
        margin-left: 10px;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        line-height: 2;
        &-item {
          margin: 5px;
          font-size: 14px;
          color: #666;
          padding: 5px 10px;
          border-radius: 10px;
          background-color: @color-light;
          &-link {
            color: #666;
            &:hover {
              color: @color;
            }
            &:active {
              color: @color-dark;
            }
          }
        }
      }
    }
    &-hr {
      margin: 20px 0;
      border: 1px solid #eee;
    }
  }
  &-content {
    padding: 10px;
    width: 70%;
    margin: auto;
    min-width: min-content;
    &-visit {
      &-title {
        position: relative;
        font-size: 16px;
        line-height: 1;
        text-align: left;
        width: fit-content;
        padding: 16px 20px;
        background-color: @color-light;
        color: @color-dark;

        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: @color;
        }
      }
      &-clearall {
        display: block;
        width: 90%;
        min-width: fit-content;
        padding: 10px;
        border: 1px solid @color;
        outline: none;
        border-radius: 10px;
        margin: 26px auto;
        background-color: @white;
        color: @color;
        white-space: nowrap;

        &:hover {
          background-color: @color;
          color: @white;
        }

        &:active {
          filter: brightness(1.1);
        }
      }
      &-list {
        margin-top: 10px;
        border-left: 2px solid @color;

        &-warning {
          padding: 10px;
          color: @color-dark;
        }
      }
    }
  }
  @media screen and(max-width: 618px) {
    &-header,
    &-content {
      width: 80%;
    }
  }
}
</style>