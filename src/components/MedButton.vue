<template>
    <div>
       <button class='ctrbtn' @click="$router.push(link)" :disabled="disabled"> <slot/> </button>
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
