# China Area Data

[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]
[![License][license-image]][license-url]

[npm-image]: https://img.shields.io/npm/v/@urcloud/china-area-data.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@urcloud/china-area-data
[david-image]: https://img.shields.io/david/urcloud/china-area-data.svg?style=flat-square
[david-url]: https://david-dm.org/urcloud/china-area-data
[license-url]: https://github.com/zenonux/china-area-data/blob/master/LICENCE
[license-image]: https://img.shields.io/npm/l/@urcloud/china-area-data.svg

Convert [Vant Area](https://www.npmjs.com/package/@vant/area-data) into [Element UI](https://www.npmjs.com/package/element-ui) Cascader Component data format.

## Install

`npm i @urcloud/china-area-data -D`

## Usage

Via commonjs

```js
const getAreaTree = require('@urcloud/china-area-data').getAreaTree
const areaList = getAreaTree()
```

Via cdn

```html
<script src="https://cdn.jsdelivr.net/npm/@urcloud/china-area-data/dist/index.umd.js"></script>
<script>
  const getAreaTree = ChinaAreaData.getAreaTree
  const areaList = getAreaTree()
</script>
```

## Output

```
[
 {
    label:'北京市',
    value:'110000',
    children:[
      {
        label:'北京市',
        value:'110100',
        children:[
          {
            lable:'东城区',
            value:'110101'
          },
          ...
        ]
      },
      ...
    ]
  },
  ...
]
```

## Methods

### getAreaTree(addAll:boolean)

parameters:

- addAll:false
