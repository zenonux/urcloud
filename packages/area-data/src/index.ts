import { areaList } from "@vant/area-data";

interface VantArea {
  province_list: Record<number, any>;
  city_list: Record<number, any>;
  county_list: Record<number, any>;
}
interface Option {
  label: string;
  value: string;
  children?: Option[];
}

const transform = (areaData: VantArea, addAll = false) => {
   let quanItem:Option={
    label:'全部',
    value:''
  }
  let map = {};
  let arr = addAll ? [{...quanItem}] : [];
  Object.keys(areaData.province_list).forEach((key, index) => {
    let item = {
      label: areaData.province_list[key],
      value: key,
      children: addAll
        ? [
            {
              ...quanItem
            }
          ]
        : [],
    };
    map[key] = index;
    arr.push(item);
  });

  let cityLength = {};
  Object.keys(areaData.city_list).forEach((key) => {
    let item = {
      label: areaData.city_list[key],
      value: key,
      children: addAll
        ? [
           {
              ...quanItem
           }
          ]
        : [],
    };
    let provinceCode = Number(item.value.substr(0, 2) + "0000");
    let provinceIndex =addAll ? map[provinceCode] + 1 : map[provinceCode] ;
    arr[provinceIndex].children.push(item);
    cityLength[provinceCode] = cityLength[provinceCode] || 0;
    map[key] = cityLength[provinceCode];
    cityLength[provinceCode]++;
  });

  Object.keys(areaData.county_list).forEach((key) => {
    let item = {
      label: areaData.county_list[key],
      value: key,
    };
    let provinceCode = Number(item.value.substr(0, 2) + "0000");
    let provinceIndex =addAll ? map[provinceCode] + 1 : map[provinceCode] ;
    let cityCode = Number(item.value.substr(0, 4) + "00");
    let cityIndex = addAll ? map[cityCode] + 1 : map[cityCode] ;
    arr[provinceIndex].children[cityIndex].children.push(item);
  });
  return arr;
};



export const getAreaTree = (addAll = false) => {
  return transform(areaList, addAll);
};
