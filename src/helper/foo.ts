// src/esm/module.mjs
interface numObj {
  value: number
}
export default function foo(obj:numObj):void {
  console.log(obj)
  if(obj.value){
    obj.value++;
  }
  alert('Hello World')
}