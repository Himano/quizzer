const startMenu = document.querySelector(".startMenu");
const startGame = document.querySelector(".startGame");
const quiz = document.querySelector(".quiz");
const country = document.querySelector(".country");
const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");

let a1 =  "";
let a2 = "";
let a3 = "";
let a4 = "";
let correct = "";

let success = 0;
let fail = 0;





function setAlternatives() {



    var nums = [1,2,3,4],//all numbers to be randomized
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
 
var cards = document.getElementsByClassName("alt")

   for(var i = 0; i < cards.length; i++){

  cards[i].classList.add(`a${ranNums[i]}`)

a1 = document.querySelector(".a1")
a2 = document.querySelector(".a2")
a3 = document.querySelector(".a3")
a4 = document.querySelector(".a4")
      
} 




}






function startGameFunction() {

startMenu.setAttribute("id", "hidden")
startGame.removeAttribute("id","hidden")

}

function gameType(category) {
    
    if( fail < 10 && success < 10) {
        startGame.setAttribute("id", "hidden")
        quiz.removeAttribute("id", "hidden")
        
        let w1 ="";
        let w2 ="";
        let w3 ="";
    
        let item = list[Math.floor(Math.random()*list.length)];
        country.innerHTML = item.country;
        correct = item.city;
        console.log(correct)
    
    
        let wrong1 = list[Math.floor(Math.random()*list.length)];
        w1 = wrong1.city
    
        let wrong2 =list[Math.floor(Math.random()*list.length)];
        w2 = wrong2.city
    
        let wrong3 =list[Math.floor(Math.random()*list.length)];
        w3 = wrong3.city
    
        a1.innerHTML = correct;
        a2.innerHTML = w1;
        a3.innerHTML = w2;
        a4.innerHTML = w3;

        console.log(fail)
        console.log(success)


        var changeUp = document.getElementsByClassName("alt")
      
        for (var i = 0; i < changeUp.length; i++){
            changeUp[i].classList.remove("a1","a2","a3","a4")
        }


    } else {
        alert("Game is over your score is xxx")
    }
    
    
    

}

function checkAns(){
    var target = event.target || event.srcElement;
    
    if (target.innerHTML === correct) {
        console.log("Correct!")
        success = success + 1;
        console.log(success)

    }else {
        console.log("Wrong!")
        fail = fail + 1;
    }

    right.innerHTML = success;
    wrong.innerHTML = fail;

    gameType();
    setAlternatives()


}


setAlternatives()