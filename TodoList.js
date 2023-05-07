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
const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const addButton = (a, b) => {
  a.innerHTML = b;
  ul.append(a);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    alert("할 일을 입력해 주세요."); // 값을 입력 안했을 때 alert
  } else {
    let list = document.createElement("li");
    const complete = document.createElement("input");
    const insert = document.createElement("button");
    const erase = document.createElement("button");
    // 체크박스 생성
    complete.type = "checkbox";
    ul.appendChild(complete);
    // 할일 목록 생성
    addButton(list, input.value);
    input.value = ""; // 입력 후 빈값으로 초기화
    // 수정, 삭제 버튼 생성
    addButton(insert, "수정");
    addButton(erase, "삭제");
  }
});

// 취소선...만들고싶은데....
complete.addEventListener("change", () => {
  if (complete.checked === true) {
    list.style.textDecoration = "line-through";
  } else {
    list.style.textDecoration = "";
  }
});
