<template>
    <article id="app">
        <section class="app-head">
            <label class="app-head-content">
                Martsforever
            </label>
        </section>
        <section class="app-desc">
            <label class="app-desc-title">plain-loading</label>
            <label class="app-desc-desc">A loading component based on Vue.js</label>
        </section>
        <section class="app-toolbar">
            <a class="app-toolbar-item app-toolbar-item-active">Example</a>
            <a class="app-toolbar-item" href="https://www.npmjs.com/package/plain-loading" target="_blank">Install</a>
            <a class="app-toolbar-item" href="https://github.com/martSforever/plain-loading" target="_blank">Github</a>
        </section>
        <section class="app-body">
            <div class="demo">
                <div class="demo-title">Basic Usage</div>
                <div class="demo-content">
                    <pl-loading/>
                    <pl-loading type="beta"/>
                    <pl-loading type="gamma"/>
                    <pl-loading type="delta"/>
                </div>
            </div>

            <div class="demo">
                <div class="demo-title">Change Size By FontSize</div>
                <div class="demo-content">
                    <pl-loading style="font-size: 36px"/>
                    <pl-loading type="beta" style="font-size: 36px"/>
                    <pl-loading type="gamma" style="font-size: 36px"/>
                    <pl-loading type="delta" style="font-size: 36px"/>
                </div>
            </div>

            <div class="demo">
                <div class="demo-title">Loading Color</div>
                <div class="demo-content">
                    <div v-for="color in ['primary','success','warn','error','info']" :key="color">
                        <pl-loading :color="color"/>
                        <pl-loading type="beta" :color="color"/>
                        <pl-loading type="gamma" :color="color"/>
                        <pl-loading type="delta" :color="color"/>
                    </div>
                </div>
            </div>

            <div class="demo">
                <div class="demo-title">Custom Color By Css</div>
                <div class="demo-content custom-color">
                    <pl-loading/>
                    <pl-loading type="beta"/>
                    <pl-loading type="gamma"/>
                    <pl-loading type="delta"/>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
    export default {
        name: 'app',
        components: {}
    }
</script>

<style lang="scss">
    html, body, #app {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    #app {
        .app-head {
            height: 64px;
            background-color: #12b4a5;
            display: flex;
            align-items: center;
            justify-content: center;

            .app-head-content {
                width: 1000px;
                color: white;
                font-size: 27px;
                font-family: Arial;
            }
        }

        .app-desc {
            background-color: #f6f6f6;
            padding: 40px 0;
            letter-spacing: 1px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .app-desc-title {
                color: #333;
                font-size: 36px;
                margin-bottom: 20px;
            }

            .app-desc-text {
                color: #999;
                height: 44px;
                line-height: 44px;
            }
        }

        .app-toolbar {
            display: flex;
            justify-content: center;
            padding: 20px 0;
            user-select: none;

            .app-toolbar-item {
                cursor: pointer;
                padding: 9px 16px;
                text-decoration: none;
                color: #333;
                border-radius: 3px;

                &:not(:last-child) {
                    margin-right: 16px;
                }

                &:hover {
                    background-color: #f6f6f6;
                }

                &:active {
                    background: #e2e2e2;
                }

                &.app-toolbar-item-active {
                    background-color: #12b4a5;
                    color: white;
                }
            }
        }

        .app-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 50px;

            .demo {
                .demo-title {
                    font-size: 14px;
                    font-family: Arial;
                }

                .demo-content {
                    padding: 20px 0;
                }
            }
        }

        .custom-color {
            display: flex;
            justify-content: center;
            .pl-loading-tag {
                background-color: #FF7400;
            }
        }
    }
</style>
