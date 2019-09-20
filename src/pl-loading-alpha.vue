<template>
    <div class="pl-loading-alpha" :class="[`pl-loading-alpha-color-${color}`]">
        <span class="pl-loading-alpha-tag"><span class="pl-loading-tag" v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i"></span></span>
    </div>
</template>

<script>
    export default {
        name: "pl-loading-alpha",
        props: {
            color: {type: String, default: 'info'},
        },
    }
</script>

<style lang="scss">
    .pl-loading-alpha {
        display: inline-block;
        vertical-align: middle;
        $size: plVar(icon-size);
        height: $size;
        width: $size;

        .pl-loading-alpha-tag {
            $centerRadius: (0.5*$size)/1.2;
            $itemWidth: (0.35*$size)/1.2;
            $itemHeight: (0.1*$size)/1.2;
            $width: $centerRadius + $itemWidth * 2;
            $height: $width;

            width: $width;
            height: $height;
            position: relative;
            display: block;

            .pl-loading-tag {
                display: inline-block;
                width: $itemWidth;
                height: $itemHeight;
                margin-top: $itemHeight / 2 * -1;
                margin-left: $centerRadius / 2;
                top: 50%;
                left: 50%;
                position: absolute;
                transform-origin: ($centerRadius / 2 * -1) ($itemHeight / 2);
                border-radius: 1px;
                @for $i from 1 through 12 {
                    &:nth-child(#{$i}) {
                        transform: rotate(($i - 1) * 30deg);
                        animation: pl-loading-alpha-tag 1s linear infinite #{-1 + $i / 12}s;
                    }
                }
                @keyframes pl-loading-alpha-tag {
                    0% {
                        opacity: 1;
                    }
                    @for $i from 1 through 11 {
                        #{$i / 12 * 100}% {
                            opacity: 1 - $i / 12;
                        }
                    }
                    100% {
                        opacity: 1;
                    }
                }
            }
        }

        @include pl-colors(pl-loading-alpha) {
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