var canvas, backgroundimg ;
var gameState = 0;
var playerCount, database, form1, player1, game1;
function setup(){
canvas = createCanvas(400,400);
database = firebase.database();
var game1 = new game();
game1.getState();
game1.start();
}
function draw(){

} 