var player1_name = localStorage.getItem("player_name1");
var player2_name = localStorage.getItem("player_name2");
document.getElementById("name1").innerHTML=player1_name + " :  ";
document.getElementById("name2").innerHTML=player2_name + " :  ";
var player1_score = 0;
var player2_score = 0;
document.getElementById("score1").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;
var ques_turn = player1_name;
var ans_turn = player2_name;
document.getElementById("ques_player").innerHTML = " " + "ques turn : " + player1_name;
document.getElementById("ans_player").innerHTML = " " + "ans turn : " + player2_name;
function send(){
 var get_word= document.getElementById("the_word_to_be_sent").value;
 word = get_word.toLowerCase();
 first_letter= word.charAt(1);
 console.log(first_letter);
 midle_letter = Math.floor(word.length/2);
 midle_letter = word.charAt(midle_letter);
 last_letter =  word.length-1;
 last_letter = word.charAt(last_letter);
 remove_word1 = word.replace(first_letter,"_");
 remove_word1 = remove_word1.replace(midle_letter,"_");
 remove_word1 = remove_word1.replace(last_letter,"_");
 console.log(remove_word1);
 var row="<h3>" + remove_word1 + "</h3><br>";
 var imp="<input id='ans' class='form-control'><br>";
 var check= "<button type='button'id='check' onclick='check()'>Check</button>";
 document.getElementById("output").innerHTML=row + imp  +check;
 document.getElementById("the_word_to_be_sent").value = "";
}
function check(){
get_correct_answer = document.getElementById("the_word_to_be_sent").value;
var answer = get_correct_answer.toLowerCase();
if(answer == word){
if(ans_turn == player1_name){
player1_score = player1_score + 1;
console.log(player1_score);
document.getElementById("score1").innerHTML=player1_score;
ques_turn = player1_name;
ans_turn = player2_name;
document.getElementById("ques_player").innerHTML = " " + "ques turn : " + ans_turn;
document.getElementById("ans_player").innerHTML = " " + "ans turn : " + ques_turn;
}
else if(ans_turn == player2_name){
    player2_score = player2_score + 1;
    console.log(player2_score);     
document.getElementById("score2").innerHTML=player2_score;
ques_turn = player2_name;
ans_turn = player1_name;
document.getElementById("ques_player").innerHTML = " " + "ques turn : " + ans_turn;
document.getElementById("ans_player").innerHTML = " " + "ans turn : " + ques_turn;
}
}
if(answer != word){
    if(ans_turn == player1_name){
        //player1_score = player1_score - 1;
        document.getElementById("score1").innerHTML=player1_score;
        ques_turn = player1_name;
        ans_turn = player2_name;
        document.getElementById("ques_player").innerHTML = " " + "ques turn : " + ans_turn;
        document.getElementById("ans_player").innerHTML = " " + "ans turn : " + ques_turn;
        }
        else if(ans_turn == player2_name){
            //player2_score = player2_score - 1;
        document.getElementById("score2").innerHTML=player2_score;
        ques_turn = player2_name;
        ans_turn = player1_name;
        document.getElementById("ques_player").innerHTML = " " + "ques turn : " + ans_turn;
        document.getElementById("ans_player").innerHTML = " " + "ans turn : " + ques_turn;
    }
}
 document.getElementById("output").innerHTML="";
}