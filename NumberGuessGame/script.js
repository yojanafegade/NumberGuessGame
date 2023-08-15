
let step=document.querySelector(".enteredNum");
let message = document.querySelector(".num_game_result");
let n=Math.floor(Math.random()*100+1);

let count=0;
  

   
function clickHandler(){
            count++;
            step.innerHTML=count;
            let number=document.getElementById("input").value;
            if(n<number)
            {
                message.innerHTML="Your number is larger than ours dude!😂";
            }
            else if(number<n)
            {
                message.innerHTML=("Your number is smaller than ours dude!😒");
            }
            else{
                message.innerHTML=("Winner is here!\n YAYYY!😁");
            }
}
function changeColor(){
    if(count%2==0)
    {
        document.querySelector(".card").style.backgroundColor="#7f50dd";
        document.querySelector("body").style.backgroundColor="pink";
    }
    else {
        document.querySelector(".card").style.backgroundColor="#e0bd35";
        document.querySelector("body").style.backgroundColor="#b688e7";
    }
    }
  



