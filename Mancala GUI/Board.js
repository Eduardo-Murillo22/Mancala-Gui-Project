function setBrd(){ 
    for(var i = 0; i < 12;i++){
        var btn = document.getElementById(i);
        
        btn.innerHTML = "2";
    }     
    
}

function Start(){
    
    setBrd();
    
    var btn0 = document.getElementById("0");
    var btn1 = document.getElementById("1");
    var btn2 = document.getElementById("2");
    var btn3 = document.getElementById("3");
    var btn4 = document.getElementById("4");
    var btn5 = document.getElementById("5");
    var btn6 = document.getElementById("6");
    var btn7 = document.getElementById("7");
    var btn8 = document.getElementById("8");
    var btn9 = document.getElementById("9");
    var btn10 = document.getElementById("10");
    var btn11 = document.getElementById("11");
    
    
    var buttons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11];

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            // do something when the button is clicked
            console.log("Button " + i + " clicked");
        });
    }
    
}
    
        
//function Play() {
//
//
//const p1={
//    min = 0,
//    max = 5
//}
//const p2={
//    min = 6,
//    max = 11
//}
//
//
//int c = 0;
//        bool cont = true;
//setBoard(board);
//dBrd(board, p1, p2);
//
//do {
//    cont = false; //shall the game continue?
//    //Player one turn
//    turn(p1, p2, board, c);
//    cont = brdCheck(p1.min, p1.max, board);
//    if (!cont) {
//        addRocks(p2, board);
//    }
//
//    //Player two turn
//    if (cont) {
//        turn(p2, p1, board, c);
//        cont = brdCheck(p2.min, p2.max, board);
//        if (!cont) {
//            addRocks(p1, board);
//        }
//    }
//} while (cont);
//
//dBrd(board, p1, p2);
//
////Determining winner
//cout << "The game is over!\n";
//p1.points == p2.points ? cout << "It's a tie!" :
//        p1.points > p2.points ? cout << "Player 1 " << p1.name << " wins!" : cout << "Player 2 " << p2.name << " wins!";
//
//if (p1.points > p2.points) {
//    storePoints(p1);
//}
//if (p1.points < p2.points) {
//    storePoints(p2);
//    }
//
//}

