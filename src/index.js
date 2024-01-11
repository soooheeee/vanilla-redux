// 해당 element의 id를 넣어서 사용
// get(가져오다) element(요소) byId(id로 부터) 즉, id로부터 요소를 가져온다라는 말
// 태그 안에 id값을 이용해서 오브젝트에 접근할 수 있다.
// getElementbyId는 document의 내장함수이므로, document.getElementbyId라고 사용
// 변수 add에다가 id가 add(뒤에)인 요소의 정보를 담는 것
// https://itpangpang.tistory.com/229
const add = document.getElementById("add"); 
const minus = document.getElementById("minus");
// 내 문서 내의 첫 번째 span태그를 찾아 numebr에 반환해줌
// https://8156217.tistory.com/67
// "span" 이기 때문에 첫번째 span 태그에 해당되게 한다.
// #id, .클래스 등등
const number = document.querySelector("span"); 
console.log(add)
let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count; 
  // number안에 text값들을 가져온다. 
};
const handleAdd = () => {
  // console.log("add");
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  // console.log("minus")
  count = count - 1;
  updateText();
};

// 이벤트를 실행할 타겟.addEventListener('이벤트타입',실행할함수)
// 이벤트타겟(eventTarget)은 해당 이벤트를 적용할 DOM을 가져와 준다.
// https://velog.io/@a_in/-addeventeistener-javascript
add.addEventListener("click", handleAdd); 
minus.addEventListener("click", handleMinus);
