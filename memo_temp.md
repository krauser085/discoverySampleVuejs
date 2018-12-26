# Component Options
    - props
        - component 인스턴스 안에서 부모로 부터 받아온 prop 안의 프로퍼티값을 변경할 수는 있다. 하지만 warning 과 함께 부모의 값이 변경되는 것은 아니기 때문에 vue 설계 구조상 props 를 자식 엘레먼트가 직접 변경하는 것은 안하는게 좋을 듯.
    - bind
        - bind 모든 component 가 동일한 bind 객체를 공유하고 있기 때문에 새로운 객체를 return 해 줘야 한다.
        - **bad**
```javascript
default export {
  data() {
    return data()
  }
}
```
        - **good**
```javascript
default export {
  data() {
    return {
      something
    }
  }
}
```