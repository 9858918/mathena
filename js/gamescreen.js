var ALL_DIFS = [new Difficulty("Easy",1,4), new Difficulty("Medium",1,2), new Difficulty("Hard",1,0) ];
var USER_SESSION;



function UserSession() {
	this.difficulty;
	this.userId;
	this.activeGame;



}

function Difficulty(name, level, maxDupes) {
	this.name=name;
	this.level=level;
	this.maxDupes=maxDupes;


}


function Game() {
	this.cards=[];
	this.cardHeight=0;
	this.cardWidth=0;

	this.addPair=function(inputValue){
	//This is where we add a pair
	var card1 = new Card();
	var card2 = new Card();




	card1.type="number";
	card1.cardState="shown"; //shown, hidden, peaked
	card1.value=inputValue;
	card1.cardBack="";
	card1.cardFront="";
	card1.top=0;
	card1.left=0;
	card1.colNum=1;
	card1.rowNum=1;


	this.cards.push(card1);





	};


	this.match=function(){
		};

	this.newGame=function(){
		};

	this.refillDeck=function(){



		};



}





function Card() {
	this.type="";
	this.colNum=0;
	this.rowNum=0;
	this.top=0;
	this.left=0;
	this.cardState="";
	this.value="";
	this.cardBack="";
	this.cardFront="";

	this.compare=function(c){
		};

	this.draw=function(){
		};




}



$(document).ready(function() {
	//javascript functions go here
	var ctx  = $("#thecanvas")[0].getContext("2d");
	ctx.fillStyle = "#0011FF";
	ctx.fillRect(0,0,100,100);

	$("#thecanvas")[0].height = 100;

	USER_SESSION = new UserSession();
	var a = new Game();

	USER_SESSION.activeGame = a;
	USER_SESSION.difficulty = ALL_DIFS[0];



});
