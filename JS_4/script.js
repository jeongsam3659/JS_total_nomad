const clock = document.querySelector("h2#clock");

function getClock() {
    //날짜값 가져오기
    const date = new Date();
    //date.get시간 >> String >>padStart();
    //padStart(글자수, "비어있는 공간에 채울 단어")
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

//setInterval(실행 함수, );
// 1000 = 1초
getClock();
setInterval(getClock, 1000);

/*
    Uncaught TypeError: Cannot set properties of null (setting 'innerText')
    >> 받아와야하는 아이디 값을 제대로 받아왔는지 확인.

*/
