<template>
    <div>
    <transition name="fade" mode="out-in" appear>
       <button class='ctrbtn' @click="$router.push(link)" :disabled="disabled"> <slot/> </button>
    </transition>
    </div>
</template>

<script>
export default {
    name: 'MedButton',
    props: {
        link: {
            type: String,
            required: true,
        },
      disabled: {
          type: Boolean,
      }
    },
}
</script>
