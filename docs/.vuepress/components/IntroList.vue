<template>
  <div class="intro-list">
    <h3 class="intro-list__title">{{title}}</h3>
    <slot />
  </div>
</template>

<script>
import IntroItem from "./IntroItem";

export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    IntroItem
  }
};
</script>

<style lang="less" scoped>
@pc-narrow: 959px;
@mobile-wide: 719px;
@mobile: 419px;

.intro-list {
  padding: 20px;
  font-size: 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: @pc-narrow) {
    padding: 2rem;
  }

  @media (max-width: @mobile) {
    padding: 1.5rem;
  }

  .intro-list__title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    margin-top: 0;
    width: 100%;
  }
}
</style>