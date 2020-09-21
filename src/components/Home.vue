<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    // 退出功能
    logout() {
      // 清空token
      window.sessionStorage.clear()
      // 跳转至登录页
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less"></style>
