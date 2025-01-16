let movie_name="pushpa";

let guess=prompt("Guess a Movie Name: ");

while((guess!=movie_name)&&(guess!="quit")){
    guess=prompt("Your Guess is Wrong !!!")
}

if(guess==movie_name){
    document.write("Congrats Your Guess is Correct !!");
}
else{
    document.write("You Quitted The Game");
}
