<template>
    <div>
        <div class="text-gray-300 mb-10 console">
          <span class="text-sm md:text-lg"> 0{{ n }}. </span>
         <span class="text-2xl md:text-4xl"> {{ title }} </span> 
        </div>
    </div>
</template>
<script>
export default {
    props: ['n', 'title'],
    name: 'title-section'
}
</script>
<style scoped>
 span:nth-child(1) {
    color: var(--color-secondary);
  }
</style>