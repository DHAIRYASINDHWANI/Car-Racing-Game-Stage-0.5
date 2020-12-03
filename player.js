class player{
    constructor(){
    }
    getCount(){
        //to get the playercount 
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
    updateCount(count){
        //to update the playercount 
        database.ref('/').update({
            playerCount:count
        })
    }
    update(name){
        //to create new entries in database 
var playerIndex = "player" + playerCount;
database.ref(playerIndex).set({
    name:name
})
    }
}