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
	this.clicking=false;

	this.addPair=function(inputValue, src1, src2){
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
		card1.cardImageF.src = src1;
		card1.cardImageB.src = 'img/tile.png';

		card2.type="number";
		card2.cardState="shown"; //shown, hidden, peaked
		card2.value=inputValue;
		card2.cardBack="";
		card2.cardFront="";
		card2.top=0;
		card2.left=0;
		card2.colNum=1;
		card2.rowNum=1;
		card2.cardImageF.src = src2;
		card2.cardImageB.src = 'img/tile.png';

		this.cards.push(card1);
		this.cards.push(card2);
	};


	this.match=function(){
	};

	this.flipCardAt=function(x,y){
		if(this.clicking===false){
			console.log('flipping');
			this.clicking=true;
			for (var i = 0; i < this.cards.length; i++) {
				var iTop = this.cards[i].top;
				var iLeft = this.cards[i].left;
				var iHeight = this.cards[i].height;
				var iWidth = this.cards[i].width;
				var iBottom = iTop + iHeight;
				var iRight = iLeft +iWidth;

				console.log('*** Clicked X=' + x + ' Y=' + y + ' ***');

				if ((x < iRight) && (x > iLeft) && (y > iTop) && (y < iBottom)) {
					this.cards[i].cardState="shown";
					this.cards[i].draw();
					//console.log(i);
				   console.log('clicked on  ' + this.cards[i].value);
				}
			}
			this.clicking=false;
		}
	};

	this.newGame=function(){
		this.refillDeck();
		shuffleArray(this.cards);

		var rowCur = 1;
		var rowMax = 4;
		var colCur = 1;
		var colMax = 4;

		var imageH = 50; //height and width to be figured out dynamicly later
		var imageW = 50;

		var curCard = 0;

		for(rowCur=0;rowCur<rowMax;rowCur++){
			for(colCur=0;colCur<colMax;colCur++){
				this.cards[curCard].top = rowCur*imageH;
				this.cards[curCard].left = colCur*imageW;
				this.cards[curCard].rowNum = rowCur;
				this.cards[curCard].colNum = colCur;

				this.cards[curCard].draw();
				curCard++;
			}
		}
		//USER_SESSION.activeGame = this;
	};

	this.refillDeck=function(){
		//4x4 grid = 16 spots = 8 pairs
		this.addPair("A",'img/tileA.png','img/tileA.png');
		this.addPair("B",'img/tileB.png','img/tileB.png');
		this.addPair("C",'img/tileC.png','img/tileC.png');
		this.addPair("D",'img/tileD.png','img/tileD.png');
		this.addPair("E",'img/tileE.png','img/tileE.png');
		this.addPair("F",'img/tileF.png','img/tileF.png');
		this.addPair("G",'img/tileG.png','img/tileG.png');
		this.addPair("H",'img/tileH.png','img/tileH.png');

	};



}





function Card() {
	this.type="";
	this.colNum=0;
	this.rowNum=0;
	this.top=0;
	this.left=0;
	this.height=50;
	this.width=50;
	this.cardState="";
	this.value="";
	this.cardBack="";
	this.cardFront="";

	this.cardImageF = new Image();
	this.cardImageB = new Image();

	//this.cardImage = new Image();



	this.compare=function(c){

		};

	this.draw=function(){
			var ctx  = $("#thecanvas")[0].getContext("2d");
			if (this.cardState="Hidden") {
				ctx.drawImage(this.cardImageF,this.left,this.top);
			} else {
				ctx.drawImage(this.cardImageF,this.left,this.top);
			}

		};

}


/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    //return array;
}

$('#thecanvas').click(function (e) {
    var clickedX = e.pageX - this.offsetLeft;
    var clickedY = e.pageY - this.offsetTop;


	USER_SESSION.activeGame.flipCardAt(clickedX, clickedY);

});


$(document).ready(function() {
	//javascript functions go here

	var ctx  = $("#thecanvas")[0].getContext("2d");
	ctx.fillStyle = "#0011FF";
	//ctx.fillRect(0,0,100,100);

	$("#thecanvas")[0].height = 400;
	$("#thecanvas")[0].height = 400;

	USER_SESSION = new UserSession();
	USER_SESSION.difficulty = ALL_DIFS[0];
	USER_SESSION.activeGame = new Game();
	USER_SESSION.activeGame.newGame();




});
