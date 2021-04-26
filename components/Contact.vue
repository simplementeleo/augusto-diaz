<template>
    <div>
        <container-y class="mb-56">
            <title-section n="3" title="Contactame" class="mx-auto text-center"/>
            <p class="text-center max-w-xl mx-auto text-base sm:text-lg">Estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tenga una pregunta o simplemente quiera saludar, ¡haré todo lo posible para responderle!</p>
            <div :class="[formActive ? ['max-w-sm', 'mx-auto', 'border-dashed', 'p-5', 'md:p-10', 'mt-12'] : 'w-full']">
                <form v-if="formActive" class="flex flex-col mx-auto">
                    <input maxlength="20" class="outline-dashed  p-4 text-gray-500 mt-5" type="text" placeholder="Nombre">
                    <input maxlength="20" class="outline-dashed  p-4 text-gray-500 mt-5" type="text" placeholder="Correo">
                    <textarea class="outline-dashed  p-4 text-gray-500 mt-5" placeholder="Escribe tu mensaje aquí..." cols="18" rows="10" maxlength="300"></textarea>
                </form>
               <button v-if="!formActive" class="btn-main transform hover:-translate-y-1 rounded-md py-3 px-10 duration-300 block mt-10 mx-auto outline-dashed" @click="formActive = !formActive">
                    Di Hola!
               </button>
                <button v-else class="btn-main transform hover:-translate-y-1 rounded-md py-3 px-10 duration-300 block mt-10 mx-auto outline-dashed">
                    Enviar
               </button>
            </div>
        </container-y>
    </div>
</template>
<script>
import ContainerY from '../components/Utilities/Container-y'
import TitleSection from '../components/Utilities/Title'
export default {
    data() {
        return {
            formActive: false
        }
    },
    components: {
        ContainerY,
        TitleSection
    }
}
</script>
<style scoped>
    .btn-main {
        color: var(--color-secondary);
        border: .5px solid var(--color-secondary);
    }
    input[type="text"], textarea {
        background: #0000;
        border-bottom: 2px dashed var(--color-secondary);
    }
    .border-dashed {
        transition: all .3s ease-in-out;
        border: 2px dashed var(--color-secondary);
    }
</style>
