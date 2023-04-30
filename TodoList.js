const addBtn = document.getElementById('addBtn'); // "추가" 버튼
let addValue = document.getElementById('todo'); // <input>
let result = document.getElementById('result'); // <li>

// 할 일 목록 추가
addBtn.addEventListener('click', addList);
function addList() {
    let list = document.createElement("li"); // DOM객체 생성
    list.innerHTML = addValue.value; // <input>에 입력된 값을 DOM객체에 할당
    result.appendChild(list); // 동적 추가된 목록의 위치 설정
}