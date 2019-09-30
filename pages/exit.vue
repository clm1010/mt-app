<template>
  <div></div>
</template>
<script>
export default {
  // 选择自定义模板
  layout: 'blank',
  name: 'Exit',
  middleware: async (ctx) => {
    const { status, data } = await ctx.$axios.get('/users/exit')

    if (status === 200 && data && data.code === -1) {
      window.location.href = '/'
    }
  }
}
</script>

<style lang="scss"></style>
