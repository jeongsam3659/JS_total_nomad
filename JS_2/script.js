//
const loginform = document.querySelector("#loginform");
const logininput = document.querySelector("#loginform input");
const answer = document.querySelector("#answer");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

//로컬스토리지 Key / Value로 저장
function loginSubmit(event) {
    event.preventDefault();
    //현재 이벤트의 기본동작을 중단.(submit)
    const username = logininput.value;
    console.log("username : " + username); //값 확인용 로그
    localStorage.setItem(USERNAME_KEY, username);
    loginform.classList.add(HIDDEN_CLASS);

    answerOutput(username);
}

function answerOutput(username) {
    answer.innerText = `${username} 님. 안녕하세요.`;
    answer.classList.remove(HIDDEN_CLASS);
}

//스토리지 값 유무 확인 후 형식hidden 해제.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    loginform.classList.remove(HIDDEN_CLASS);
    loginform.addEventListener("submit", loginSubmit);
} else {
    console.log(savedUsername); //값 확인용로그
    answerOutput(savedUsername);
}

// 스토리지 리셋버튼
const btnReset = document.querySelector("#btn_reset");

function storageReset() {
    localStorage.clear();
    alert(" -- storage Reset --");
    window.location.reload(); //창 새로고침
}
btnReset.addEventListener("click", storageReset);
