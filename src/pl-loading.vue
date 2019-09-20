<template>
    <component :is="`pl-loading-${type}`" :color="color" class="pl-loading"/>
</template>

<script>
    import PlLoadingAlpha from "./pl-loading-alpha";
    import PlLoadingBeta from "./pl-loading-beta";
    import PlLoadingGamma from "./pl-loading-gamma";
    import PlLoadingDelta from "./pl-loading-delta";

    export default {
        name: "pl-loading",
        components: {PlLoadingDelta, PlLoadingGamma, PlLoadingBeta, PlLoadingAlpha},
        props: {
            type: {type: String, default: 'alpha'},
            color: {type: String, default: 'info'},
        },
    }
</script>

<style lang="scss">

</style>