//  #번호는 진행 순서.

// #1
console.log(" console.log()은 해당 내용을 콘솔에 띄우는 역할을 한다. ");

// #2
let something;
console.log("let변수의 : " + something);

// #3
const player = {
    name: "jeong",
    point: 10,
    fat: true,
};
console.log("---list 값에 대한 변화.---");
console.log("player :" + player);
console.log("player.name: " + player.name);
console.log("player['name']: " + player["name"]);

// #4
player.fat = false;
console.log("player.fat의 변화: " + player.fat);

//--------------------------------------------------------------

// #1
const player_A = {
    name: "jeong",
    sayHello: function (otherPersonName) {
        console.log("hello!" + otherPersonName);
    },
};

console.log("--- 함수 매개변수로 참조. ---");
console.log(player_A.name);
player_A.sayHello(player_A.name);

//--------------------------------------------------------------
