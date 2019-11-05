# rem-flexible（Original name is amfe-flexible）

Firstly, Let's show respect to original author.

This package published with some minor changes, The main function flexible can be passed two optional arguments. The first is design width, The second is pixel per rem.

[Classic edition (0.3.2)](https://github.com/shinvey/lib-flexible/tree/master)

> 由于`viewport`单位得到众多浏览器的兼容，`lib-flexible`这个过渡方案已经可以放弃使用，不管是现在的版本还是以前的版本，都存有一定的问题。建议大家开始使用`viewport`来替代此方案。`vw`的兼容方案可以参阅《[如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)》一文。

## Usage

### 选择unpkg

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<script src="//unpkg.com/rem-flexible@2.1.0/dist/index.min.js"></script>
<script>
  // 设计稿宽度为750px，每1rem等于100px
  flexible(750, 100)
</script>
```

### 选择npm包

```bash
npm i @dwdjs/rem
```

HTML中引入

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<script src="./node_modules/@dwdjs/rem/dist/index.min.js"></script>
<script>
  // 设计稿宽度为750px，每1rem等于100px
  flexible(750, 100)
</script>
```

在es6项目中引入

```js
import flexible from '@dwdjs/rem'
flexible(750, 100)
````

You can inline this file with [inline-source](https://npmjs.org/package/inline-source).

#### Develop

Use [postcss-adaptive](https://www.npmjs.com/package/postcss-adaptive).

## License

(The MIT License)

Copyright (c) 2016 Alibaba MFE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
