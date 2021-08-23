const arr1=["cat","fat"]

const arr2=["fat","cat"]

const arr3=["true","false"]

const joinarr=[...arr1,...arr2,...arr3]
const uniquearr=[...new Set(joinarr)]
console.log(uniquearr)