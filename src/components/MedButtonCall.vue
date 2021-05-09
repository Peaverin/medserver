<template>
    <div>
       <button class='ctrbtn' id='calltoaction' @click="$router.push(link)" :disabled="disabled"> <slot/> </button>
    </div>
</template>

<script>
export default {
    name: 'MedButtonCall',
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
