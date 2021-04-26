<template>
  <div class="rounded-sm relative border-box">
    <slot />
  </div>
</template>
<style scoped>
  /* .border-box {
    border: 4px solid var(--color-secondary);
    box-shadow: 4px 4px 0px var(--bg-primary),
                8px 8px 0px var(--color-secondary),
                12px 12px 0px var(--bg-primary),
                16px 16px 0px var(--color-secondary),
                20px 20px 0px var(--bg-primary),
                24px 24px 0px var(--color-secondary),
                28px 28px 0px var(--bg-primary),
                32px 32px 0px var(--color-secondary),
                36px 36px 0px var(--bg-primary),
                40px 40px 0px var(--color-secondary)
    ;
  } */
  .border-box {
    box-shadow: none;
  }
</style>
