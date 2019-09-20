<template>
    <div class="pl-loading-beta" :class="[`pl-loading-beta-color-${color}`]">
        <span class="pl-loading-beta-tag" :class="[`pl-loading-beta-tag-${i}`]" v-for="i in tagNum" :key="i"><span class="pl-loading-tag" :class="[`pl-loading-tag-${i}`]"></span></span>
    </div>
</template>

<script>
    export default {
        name: "pl-loading-beta",
        props: {
            color: {type: String, default: 'info'},
        },
        data() {
            return {
                p_tagNum: 10,
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
    $tagNum: 10;

    .pl-loading-beta {
        display: inline-block;
        vertical-align: middle;
        height: $size;
        width: $size;
        position: relative;

        .pl-loading-beta-tag {
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
                &.pl-loading-beta-tag-#{$i} {
                    transform: rotate(($i - 1)*(360 / $tagNum)*1deg);
                    animation: pl-loading-beta-tag 1s linear infinite #{-1 + $i / $tagNum}s;
                }
            }

            @keyframes pl-loading-beta-tag {
                0% {
                    opacity: 1;
                }
                @for $i from 1 through 11 {
                    #{$i / $tagNum * 100}% {
                        opacity: 1 - $i / $tagNum;
                    }
                }
                100% {
                    opacity: 1;
                }
            }

            @for $i from 1 through $tagNum {
                .pl-loading-tag-#{$i} {
                    animation: pl-loading-tag 1s linear infinite #{-1 + $i / $tagNum}s;
                }
            }

            @keyframes pl-loading-tag {
                0% {
                    transform: scale(1);
                }
                @for $i from 1 through 11 {
                    #{$i / $tagNum * 100}% {
                        transform: scale((1 - $i / $tagNum)*0.75 +0.25);
                    }
                }
                100% {
                    transform: scale(1);
                }
            }

            .pl-loading-tag {
                height: $tagSize;
                width: $tagSize;
                border-radius: $tagSize;
            }
        }

        @include pl-colors(pl-loading-beta) {
            .pl-loading-tag {
                background-color: $colorDeep;
            }
        }

        &.pl-loading-beta-color-white {
            .pl-loading-tag {
                background-color: white;
            }
        }
    }
</style>