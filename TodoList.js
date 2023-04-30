/*
const addBtn = document.querySelector('button') // "추가" 버튼
let addValue = document.querySelector('input'); // <input>
let result = document.getElementById('result'); // <li>

// 할 일 목록 추가
addBtn.addEventListener('submit', addList); //<form> tag의 event는 'submit'
function addList() {
    let list = document.createElement("li"); // DOM객체 생성
    list.innerHTML = addValue.value; // <input>에 입력된 값을 DOM객체에 할당
    result.appendChild(list); // 동적 추가된 목록의 위치 설정
}
*/

// <form> 태그, 화살표 함수 피드백 후 수정
const todoList = document.querySelector("form");
let addInput = document.querySelector("input");
let addList = document.getElementById("result")

todoList.addEventListener("submit", (e) => {
    e.preventDefault();
    let list = document.createElement("li");
    list.innerHTML = addInput.value;
    addList.appendChild(list);
})