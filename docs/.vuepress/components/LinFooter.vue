<template>
  <div class="lindb-footer">
    <div class="footer-text">Copyright © {{new Date().getFullYear()}} LinDB. All Rights Reserved.</div>
    <div class="footer-links">
	  <a target="_blank" href="https://github.com/lindb/lindb">
	    <i class="iconfont icongithub-fill"></i>
	  </a>
	  <a target="_blank" href="https://twitter.com/lindb_io">
		<i class="iconfont icontwitter-fill"></i>
	  </a>
	</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.lindb-footer {
  display: flex;
  line-height: 1.2;
  padding: 1.2em;
  margin: 0 30px;
  text-align: center;
  font-size: 16px;
  border-top: 1px solid var(--c-border);
  justify-content: center;
  align-items: center;
}
.footer-text{
	flex: 0 0 90%
}
.footer-links a{
  color: inherit;
  text-decoration: none;
}
.footer-links i{
  font-size: 24px;
  margin-right: 8px;
  color: inherit;
  text-decoration: none;
}
</style>
