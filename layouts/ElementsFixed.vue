<template>
    <div>
        <div class="fixed bottom-0 flex justify-between md:ml-2 lg:ml-8 hidden md:block">
            <div class="flex flex-col items-center w-20">
                <div class="flex flex-col items-center justify-between text-gray-500">
                    <a v-for="(item, index) in items" data-aos="fade-down" :data-aos-delay="(index + 2) + '00'" :key="index" :href="item.href" target="_blank" class="outline-dashed">
                        <i :class="['fa', 'fa-' + item.icon, 'btn-main-hover', 'p-4', 'text-xl']"></i>
                    </a>
                </div>
                <div data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-delay="700" class="h-24 w-px bg-gray-500 mt-6"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { 
                    href: 'https://github.com/simplementeleo',
                    icon: 'github'
                },
                { 
                    href: 'https://www.linkedin.com/in/augusto-d%C3%ADaz-6752251aa/',
                    icon: 'linkedin'
                },
                { 
                    href: 'https://codepen.io/codezardi/',
                    icon: 'codepen'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .btn-cv {
        border: 1px solid var(--color-secondary);
    }
</style>