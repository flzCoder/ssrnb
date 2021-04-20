<template>
  <div>
    <Nuxt />
  </div>
</template>
<script type="text/javascript">
export default {
  middleware: async (ctx) => {
    console.log('layout middleware');
  }
}
</script>
