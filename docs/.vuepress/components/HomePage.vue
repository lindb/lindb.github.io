<template>
  <div class="lindb-home-container">
    <div class="lindb-banner">
      <home-background-canvas />

      <div class="lindb-banner-content">
        <h3 class="lindb-intro__title">{{title}}</h3>
        <div class="lindb-intro__text">
          <template v-if="intro && intro.length > 0">
            <p
              v-for="item in intro"
              :key="item"
            >
              {{ item }}
            </p>
          </template>
        </div>

        <div class="lindb-intro__btn-group">
          <a href="docs/introduction/overview"><button class="lindb-intro__btn primary">{{startText}}</button></a>
        </div>
      </div>
    </div>
    <!-- <div class="lindb-content"></div> -->
  </div>
</template>

<script>
import IntroList from "./IntroList.vue";
import LinFooter from "./LinFooter.vue";
import HomeBackgroundCanvas from "./HomeBackgroundCanvas.vue";

export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    intro: {
      type: Array,
      default: function() {
        return [];
      }
    },
    startText: {
      type: String,
      default: ""
    }
  },
  components: {
    IntroList,
    LinFooter,
    HomeBackgroundCanvas
  }
};
</script>

<style lang="less">
.home-page {
  .content__default {
    max-width: unset !important;
    padding: unset !important;
  }

  .page {
    padding: 0;

    footer {
      display: none;
    }
  }
}
</style>

<style lang="less" scoped>

.lindb-home-container {
  @pc-narrow: 959px;
  @mobile-wide: 719px;
  @mobile: 419px;
  @mobile-narrow: 350px;

  .lindb-banner {
    position: relative;
    height: 400px;

    // @media (max-width: @pc-narrow) {
    //   height: 420px;
    // }

    // @media (max-width: @mobile) {
    //   height: 350px;
    // }

    .lindb-banner-content {
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      padding: 0 20px;

      @media (max-width: @mobile-wide) {
        margin-top: 70px;
      }

      .lindb-intro__logo {
        height: 50%;
        max-width: unset !important;
        display: inline-block;
      }

      .lindb-intro__btn-group {
        text-align: center;
        margin: 0.8rem 0;

        &.github {
          height: 40px;

          span {
            margin: 0 5px;
          }
        }

        .lindb-intro__btn {
          appearance: none;
          color: #606266;
          background: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          font-weight: bold;
          padding: 0.8em 1.1em;
          border-radius: 4px;
          display: inline-block;
          width: 160px;
          margin: 0 10px;
          cursor: pointer;
          transition: all 0.3s;
          line-height: 1.3rem;
          border-style: solid;

          &:focus {
            outline: none;
          }

          &:active {
            border-style: solid;
          }

          &:hover {
            color: #35a6c9;
          }

          &.primary {
            color: #fff;
            background-color: var(--c-brand);
            border-color: var(--c-brand);

            &:hover {
              color: #fff;
              background: darken(#3aa675, 5%);
            }
          }
          &.secondary {
            color: #1866d4;
            background-color: var(--c-bg);
            border-color: #1866d4;
         }

          @media (max-width: @mobile-narrow) {
            margin: 0 5px;
          }
        }
      }

      .lindb-intro__title {
        font-size: 36px;
        display: inline-block;
        // color: #022c63;
        padding: 0 2rem;
        margin: 0.2em 0;
        // text-align: center;
        // text-align: right;

        @media (max-width: @mobile-wide) {
          text-align: center;
        }

        @media (max-width: @mobile-narrow) {
          font-size: 30px;
        }
      }

      .lindb-intro__text {
        display: inline-block;
        font-size: 1.2rem;
        padding: 0.5rem 2rem;
        text-indent: 2em;
        margin: 0;
        // color: rgba(#022c63, 0.8);
        font-weight: bold;

        p {
          margin: 0;
          line-height: 1.8;
        }

        @media (max-width: @mobile-wide) {
          font-size: 1rem;
          padding: 1rem 0.8rem;
        }

        @media (max-width: @mobile) {
          font-size: 0.9rem;
        }

        @media (max-width: @mobile-narrow) {
          p {
            line-height: 1.5;
          }
        }
      }
    }
  }

  .lindb-content {
    max-width: 750px;
    margin: 0 auto;

    @media (max-width: @pc-narrow) {
      padding: 2rem;
    }

    @media (max-width: @mobile) {
      padding: 1.5rem;
    }
  }
}
</style>