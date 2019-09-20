<template>
    <div class="pl-loading-delta" :class="[`pl-loading-delta-color-${color}`]">
        <div class="pl-loading-delta-tag pl-loading-tag" v-for="i in tagSizes" :key="i" :class="[`pl-loading-tag-${i}`]"></div>
    </div>
</template>

<script>
    export default {
        name: "pl-loading-delta",
        props: {
            color: {type: String, default: 'info'},
        },
        data() {
            return {
                tagNum: 5,
            }
        },
        computed: {
            tagSizes() {
                const ret = []
                for (let i = 0; i < this.tagNum; i++) ret.push(i)
                return ret
            },
        },
    }
</script>

<style lang="scss">

    $tagNum: 5;

    .pl-loading-delta {
        vertical-align: middle;
        $size: plVar(icon-size);
        height: $size;
        width: $size;

        display: inline-flex;
        align-items: stretch;
        justify-content: space-between;

        .pl-loading-tag {
            transform-origin: bottom;
            width: calc((100% / #{$tagNum}) - #{$tagNum/3}px);
            @for $i from 1 through $tagNum {
                &.pl-loading-tag-#{$i - 1} {
                    animation: pl-loading-delta-tag 1s linear infinite #{$i*0.1}s;
                }
            }
        }

        @keyframes pl-loading-delta-tag {
            0% {
                transform: scaleY(1);
                opacity: 1;
            }
            50% {
                transform: scaleY(0);
                opacity: 0;
            }
            100% {
                transform: scaleY(1);
                opacity: 1;
            }
        }

        @include pl-colors(pl-loading-delta) {
            .pl-loading-tag {
                background-color: $colorDeep;
            }
        }

        &.pl-loading-alpha-color-white {
            .pl-loading-tag {
                background-color: white;
            }
        }
    }
</style>