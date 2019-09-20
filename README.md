# plain-loading

A loading component base on Vue.js

一个基于Vue.js的loading加载动画组件

[Github Page demo](https://martsforever.github.io/plain-loading/index.html)
<br>
[Gitee Page demo](http://martsforever.gitee.io/plain-loading/)

# Install

```
npm i plain-loading -S
```

# Basic Usage

## import library

```javascript
import Vue from 'vue'
import PlainLoading from 'plain-loading'
import 'plain-loading/dist/PlainLoading.css'

Vue.use(PlainLoading)
```

## basic usage

```html
<pl-loading/>
```

## custom size

```html
<pl-loading style="font-size: 36px"/>
```

## loading type

```html
/*default type is alpha*/
<pl-loading type="alpha"/>
<pl-loading type="beta"/>
<pl-loading type="gamma"/>
<pl-loading type="delta"/>
```

## colors

```html
/*default color is info*/
<pl-loading color="primary"/>
<pl-loading color="success"/>
<pl-loading color="warn"/>
<pl-loading color="error"/>
<pl-loading color="info"/>
```

## custom color


```html
<div class="box">
    <pl-loading/>
</div>
```

```scss
.box{
  .pl-loading-tag{
    background-color: #A64B00;
  }
}
```

# More

[Github](https://github.com/martSforever/plain-loading)
<br>
[Gitee](https://gitee.com/martsforever/plain-loading)