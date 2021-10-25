# Area Data

Convert [Vant Area](https://www.npmjs.com/package/@vant/area-data) into [Element UI](https://www.npmjs.com/package/element-ui) Cascader Component data format.

## Install

`npm i @urcloud/area-data -D`

## Usage

Via commonjs

```js
const getAreaTree = require('@urcloud/area-data').getAreaTree
const areaList = getAreaTree()
```

Via cdn

```html
<script src="https://cdn.jsdelivr.net/npm/@urcloud/area-data/dist/index.umd.js"></script>
<script>
  const getAreaTree = AreaData.getAreaTree
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
