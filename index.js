
var h1_text=["Player-1 To Play","Player-2 To Play"];

let getRandomInt=((max) =>{
    return Math.floor(Math.random() * Math.floor(max));
  });



let reset_func=(()=>{
    document.getElementById("score-player1").innerHTML=0;
    document.getElementById("score-player2").innerHTML=0;


    var index=getRandomInt(2);
    var text = h1_text[index];
    document.getElementById("current_player").innerHTML=text;

    var text1 = document.getElementById("current_player").textContent;
    if(text1===h1_text[0]){
        document.getElementById("player1-btn").disabled = false;
        document.getElementById("player2-btn").disabled = true;
        document.getElementById("reset-btn").disabled = true;
    }
    else{
        document.getElementById("player1-btn").disabled = true;
        document.getElementById("player2-btn").disabled = false;
        document.getElementById("reset-btn").disabled = true;
    }

    document.getElementById("result").innerText="";
});



let images=["./Dice_images/dice_1.PNG","./Dice_images/dice_2.PNG","./Dice_images/dice_3.PNG",
"./Dice_images/dice_4.PNG","./Dice_images/dice_5.PNG","./Dice_images/dice_6.PNG"];

let result1=0;
let result2=0;

let rtext1="Congratulations  Player 1 win ";
let rtext2="Congratulations  Player 2 win";



let roll_1=(()=>{
            
            let dice_value=Math.floor(Math.random()*6);
            document.querySelector("#dice_image").setAttribute("src",images[dice_value]);
            dice_value+=1;
            result1+=dice_value;
            document.getElementById("score-player1").innerText=result1; 
            document.getElementById("current_player").innerText=h1_text[1];        
            document.getElementById("player1-btn").disabled = true;
            document.getElementById("player2-btn").disabled = false;
            if(result1>=30){
                document.getElementById("result").innerText=rtext1;
                document.getElementById("player1-btn").disabled = true;
                document.getElementById("player2-btn").disabled = true;
                result1=0;
                result2=0;
                document.getElementById("reset-btn").disabled = false;
            }
            
});



let roll_2=(()=>{
     
            let dice_value=Math.floor(Math.random()*6);
            document.querySelector("#dice_image").setAttribute("src",images[dice_value]);
            dice_value+=1;
            result2+=dice_value;
            document.getElementById("score-player2").innerText=result2;
            document.getElementById("current_player").innerText=h1_text[0];  
            document.getElementById("player1-btn").disabled = false;
            document.getElementById("player2-btn").disabled = true;
            if(result2>=30){
                document.getElementById("result").innerText=rtext2;
                document.getElementById("player1-btn").disabled = true;
                document.getElementById("player2-btn").disabled = true;
                result1=0;
                result2=0;
                document.getElementById("reset-btn").disabled = false;
            }
            
});



    

   