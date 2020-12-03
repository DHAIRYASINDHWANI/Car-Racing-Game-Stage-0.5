class game{
    constructor(){
    }
    getState() {
        //to read the Gamestate from database
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value",function(data){
      gameState = data.val();
    })
    }
    update(state){
        //will update the gamestate in database to a value passed it it inside the parenthesis
      database.ref('/').update({
          gameState:state
      })
    }
    start(){
        //will start the game & display it on the screen 
      if(gameState === 0){
          player1 = new player();
          player1.getCount();
          form1 = new form();
          form1.display();
      }
    }
}