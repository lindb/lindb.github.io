<template>
  <div class="intro-item">
    <i v-if="icon" class="iconfont" :class="icon"></i>
    <div class="intro-item__content">
      <h4 class="intro-item__title">{{title}}</h4>
      <div class="intro-item__summary">{{summary}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    summary: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
  }
};
</script>

<style lang="less" scoped>
@mobile-wide: 719px;

.intro-item {
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  padding: 2rem 1rem;
  display: inline-flex;

  @media (max-width: @mobile-wide) {
    width: 100%;
  }

  .iconfont {
    font-size: 30px;
    margin-right: 0.6em;
    // color: #35a6c9;
    color: var(--c-brand);
  }

  .intro-item__content {
    .intro-item__title {
      margin-top: 0.2em;
      font-size: 1.3rem;
      font-weight: bold;
    }

    .intro-item__summary {
      font-size: 1rem;
    }
  }
}
</style>