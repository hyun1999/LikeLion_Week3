//HTML에서 id="todo-form"을 가진 요소를 불러와 toDoForm이라는 변수에 할당 
const toDoForm = document.getElementById("todo-form");
  
//HTML에서 id="todo-form"에서 input 요소를 불러와 toDoInput이라는 변수에 할당
//구체적인 요소를 불러올 때 querySelector의 필요성을 볼 수 있는 예시!
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
function saveToDos() {
  //[quiz] 값 추가 : 'localStorage'를 참고하여 값 추가하기
  //값을 문자열 객체로 저장하기 위하여 JSON.stringify 사용
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
function completedTodo(event) {
  const is_checked = li.firstChild.checked;

  //[quiz] 체크 박스가 체크가 되었다면 if 부분이 실행, 아니면 else 부분 실행
  if (is_checked === true) {
    li.style.textDecoration = "line-through";
    li.style.color = "grey";
function completedTodo(event) {

function paintToDo(newTodo) {
  //[quiz] appendChild() vs createElement() 비교하고 채워놓기
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  checkbox.addEventListener("click", completedTodo);
function handleToDoSubmit(event) {
  event.preventDefault();

  //[quiz] toDoInput의 값을 불러와 newTodo에 할당.
  const newTodo = toDoInput.value;

  //값을 저장 받은 후, 엔터의 내용들을 지워준다.
  toDoInput.value = "";
function handleToDoSubmit(event) {
toDoForm.addEventListener("submit", handleToDoSubmit);

//[quiz] localStorage에서 값 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

//savedToDos가 localStorage에 존재한다면,
if (savedToDos !== null) {
if (savedToDos !== null) {

  //
  parsedToDos.forEach(paintToDo);
}//HTML에서 id="todo-form"을 가진 요소를 불러와 toDoForm이라는 변수에 할당 
const toDoForm = document.getElementById("todo-form");
  
//HTML에서 id="todo-form"에서 input 요소를 불러와 toDoInput이라는 변수에 할당
//구체적인 요소를 불러올 때 querySelector의 필요성을 볼 수 있는 예시!
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
function saveToDos() {
  //[quiz] 값 추가 : 'localStorage'를 참고하여 값 추가하기
  //값을 문자열 객체로 저장하기 위하여 JSON.stringify 사용
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
function completedTodo(event) {
  const is_checked = li.firstChild.checked;

  //[quiz] 체크 박스가 체크가 되었다면 if 부분이 실행, 아니면 else 부분 실행
  if (is_checked === true) {
    li.style.textDecoration = "line-through";
    li.style.color = "grey";
  } else {
function completedTodo(event) {

function paintToDo(newTodo) {
  //[quiz] appendChild() vs createElement() 비교하고 채워놓기
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  checkbox.addEventListener("click", completedTodo);
function handleToDoSubmit(event) {
  event.preventDefault();

  //[quiz] toDoInput의 값을 불러와 newTodo에 할당.
  const newTodo = toDoInput.value;

  //값을 저장 받은 후, 엔터의 내용들을 지워준다.
  toDoInput.value = "";
function handleToDoSubmit(event) {
toDoForm.addEventListener("submit", handleToDoSubmit);

//[quiz] localStorage에서 값 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

//savedToDos가 localStorage에 존재한다면,
if (savedToDos !== null) {
 if (savedToDos !== null) {

  //
  parsedToDos.forEach(paintToDo);
}
}