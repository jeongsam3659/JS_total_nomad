const rsForm = document.getElementById("js-form");
const rsResult = document.getElementById("js-result");
const maxNum = document.getElementById("maxNumber");

function actionRandomNum(e) {
    e.preventDefault();
    const inPlayerNum = rsForm.querySelector("input");
    //input칸이 비었을 경우
    if (maxNum.value === "") {
        maxNum.focus();
        console.log("최대 범위 input칸이 비어있습니다.");
        return;
    }

    if (inPlayerNum.value === "") {
        inPlayerNum.focus();
        console.log("플레이어 input칸이 비어있습니다.");
        return;
    }

    const max = maxNum.value;
    //랜덤 수(올림)
    const random = Math.ceil(Math.random() * max);
    console.log("random값 : ", random);
    //플레이어 수를 10진수화
    const userNum = parseInt(inPlayerNum.value, 10);
    console.log("플레이값 : ", userNum);
    //결과 태그
    const resultSpan = rsResult.querySelector("#html");

    resultSpan.innerHTML = `
    당신의 선택은 : ${userNum}, <br/>
    랜덤 수 값: ${random}. <br/>
    <strong>
        ${userNum === random ? "정답!" : "떙!"}
    </strong>
    `;
}

rsForm.addEventListener("submit", actionRandomNum);

/*
    Quest1
    최대범위의 수가 비어있을때는 console.log()와 focus가 정상적으로 작동하는데
    최대범위의수가 있는 상태에서 플레이어예상수(inputNum)이 비어있을때 action이 작동하지 않느다.

    ------------------- // ------------------
    해결
    중복 if문이 아닌 개별 if으로 진행.

    if(1)최대범위수 return > if(2)플레이어 예상수 return > 본 기능 실행.
*/
