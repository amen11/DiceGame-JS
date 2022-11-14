'use strict';

const dice = document.querySelector(".dice");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const newg = document.querySelector(".btn--new");
const score0=document.querySelector("#score--0");
const score1=document.querySelector("#score--1");
const current0=document.querySelector("#current--0");
const current1=document.querySelector("#current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const name0=document.querySelector("#name--0");
const name1=document.querySelector("#name--1");

let compteur=0;
let sc0=0;
let sc1=0;

dice.style.display ="none";

function randInt() {
  return Math.floor(Math.random() * 6) + 1;
}

function DiceImg(num) {
  let rndice = `dice-${num}.png`;
  dice.setAttribute("src", rndice);
}

roll.addEventListener("click",()=>{
    let random=randInt();
    compteur+=random;
    dice.style.display="block";
    DiceImg(random);
    if(random!==1){
        if(player1.classList.contains("player--active")){
            current0.textContent=compteur;
        }else {current1.textContent=compteur;}
    } else {
    compteur = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
    }
})

hold.addEventListener("click",()=>{
    if(player1.classList.contains("player--active")){
        sc0+=compteur;
        score0.textContent=sc0;
        current0.textContent=0;
        if(sc0>=20){
          player1.classList.add('player--winner');
          name0.textContent="WINNER";
          name1.textContent="LOSER";
          roll.disabled=true;
          hold.disabled=true;

        }
    }else{
        sc1+=compteur;
        score1.textContent=sc1;
        current1.textContent=0;
        if(sc1>=20){
          player2.classList.add("player--winner");
          name0.textContent="LOSER";
          name1.textContent="WINNER";
          roll.disabled=true;
          hold.disabled=true;
                }
    }
    compteur=0;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
})

function reset() {
  dice.style.display = "none";
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  name0.textContent="Player 1 ";
  name1.textContent="Player 2 ";
  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  sc0 = 0;
  sc1 = 0;
  compteur = 0;
  if (!player1.classList.contains("player--active")) {
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
  }
  roll.disabled=false;
  hold.disabled=false;
}
newg.addEventListener("click", () => {
  reset();
});
