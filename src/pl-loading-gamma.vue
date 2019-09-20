<template>
    <div class="pl-loading-gamma" :class="[`pl-loading-gamma-color-${color}`]">
        <span class="pl-loading-gamma-tag" :class="[`pl-loading-gamma-tag-${i}`]" v-for="i in tagNum" :key="i">
            <span class="pl-loading-tag" :class="[`pl-loading-tag-${i}`]"></span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "pl-loading-gamma",
        props: {
            color: {type: String, default: 'info'},
        },
        data() {
            return {
                p_tagNum: 5,
            }
        },
        computed: {
            tagNum() {
                const ret = []
                for (let i = 0; i < this.p_tagNum; i++) ret.push(i + 1)
                return ret
            },
        },
    }
</script>

<style lang="scss">

    $size: plVar(icon-size);
    $tagSize: $size/5;
    $tagNum: 5;


    .pl-loading-gamma {
        display: inline-block;
        vertical-align: middle;
        height: $size;
        width: $size;
        position: relative;
        animation: pl-loading-gamma 5s linear infinite;

        @keyframes pl-loading-gamma {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .pl-loading-gamma-tag {
            position: absolute;
            height: 50%;
            width: $tagSize;
            left: ($size - $tagSize)/2;
            transform-origin: bottom;
            display: inline-flex;
            flex-direction: column;
            justify-content: flex-start;

            .pl-loading-tag {
                display: inline-block;
            }

            @for $i from 1 through $tagNum {
                &.pl-loading-gamma-tag-#{$i} {
                    animation: pl-loading-gamma-tag 2s cubic-bezier(.31, .64, .47, .81) infinite #{$i*0.1}s;
                }
            }

            @keyframes pl-loading-gamma-tag {
                0% {
                    transform: rotate(0deg);
                }
                85% {
                    transform: rotate(360deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

            @for $i from 1 through $tagNum {
                .pl-loading-tag-#{$i} {
                    transform: scale((1 - $i / $tagNum)*0.5+0.5);
                }
            }


            .pl-loading-tag {
                height: $tagSize;
                width: $tagSize;
                border-radius: $tagSize;
            }
        }

        @include pl-colors(pl-loading-gamma) {
            .pl-loading-tag {
                background-color: $colorDeep;
            }
        }

        &.pl-loading-gamma-color-white {
            .pl-loading-tag {
                background-color: white;
            }
        }
    }
</style>