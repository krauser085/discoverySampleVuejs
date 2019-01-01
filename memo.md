# 알게된 내용 정리

# Component 관련
1. Component Options
    - created()
        - 초기화시 상태를 설정할 수 있는 함수
    - props
        - 상위 Parent로 부터 값을 가져온다. parent 가 인스턴스를 생성하면서 인수를 넘겨주는 느낌
        - 전달 되는 인수들은 배열 형식으로 전달 되어야 함.
        - component 인스턴스 안에서 부모로 부터 받아온 prop 안의 프로퍼티값을 변경할 수는 있다. 하지만 warning 과 함께 부모의 값이 변경되는 것은 아니기 때문에 vue 설계 구조상 props 를 자식 엘레먼트가 직접 변경하는 것은 안하는게 좋을 듯.
    - data
        - component 인스턴스의 프로퍼티 데이터
        - 반드시 function 타입으로 선언되어야 한다.
        - 모든 component 가 동일한 data 객체를 공유하고 있기 때문에 새로운 객체를 return 값으로 돌려 주어야야 한다.
        - **bad**
        ```javascript
        default export {
            data() {
                return data
            }
        }
        ```
        - **good**
        ```javascript
        default export {
            data() {
                return { something }
            }
        }
        ```
    - watch
        - 인스턴스의 프로퍼티(props, data 등) 를 감시할 수 있다.
        - 인수로 변경 후 값과 변경 전 값을 가져옴
    - 그 외
        - 중복되는 프로퍼티 명을 설정할 수 없다 => 결과 에러
            - 예: props 로 가져오는 프로퍼티와 data 에서 선언한 프로퍼티 명이 같은 경우 에러 발생
    - Tag 에서 사용할 수 있는 옵션들
        - v-bind: 단방향 바인드. 인스턴스 프로퍼티 값을 해당 tag의 프로퍼티나 값으로 실시간으로 전달한다.
        - v-model: 양방향 바인드. 인스턴스 프로퍼티 값을 해당 tag의 값으로 실시간으로 전달하고 tag의 값이 변경될 때 인스턴스의 프로퍼티도 같이 변경된다. form 의 input tag 같은 곳에서 많이 사용
        - v-if: if 비교식의 결과에 따라 해당태그를 표시하거나 감추거나 할 수 있다.
            - **ex)**
            ```html
            <div v-if="a > 0">
                {{ a }} 는 0 보다 크다
            </div>
            <div v-if-else="a < 0">
                {{ a }} 는 0 보다 작다
            </div>
            <div else>
                {{ a }} 는 0 이다
            </div>
            ```
# Style 관련

# Vue-router 사용
    - 설치하기
        ```bash
        npm install vue-router
        ```