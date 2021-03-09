//  Where the possibilities of two players can win

var winningPlaces = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["1","5","9"],
    ["3","5","7"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"]
];

// console.log(winningPlaces[0]);

// For keeping the exchange between the players
var flag = true ;
var playerX = [];
var playerY =[];

// Main function handle the click event
$('.cell').on('click' , function(){

//  console.log($(this).attr('id'));
//  console.log($(this).hasClass('click'));

document.getElementById('audio').play();
// hasClass & addClass make sure that the player will not click the cell twice 
 if(!$(this).hasClass('click')){

    if(flag === true){
        $(this).text('x');
        playerX.push($(this).attr('id'));
        flag = false;
        checkForVictory(playerX , "Player X , You're Win" );
    }

    else {
        $(this).text('o');
        playerY.push($(this).attr('id'));
        flag = true;
        checkForVictory(playerY , "Player O , You're Win"  );

 }

}
$(this).addClass('click');

})


// Function that check for the winner

const checkForVictory = (arr, display ) => {
    for(var i=0 ; i < winningPlaces.length ; i++){
        // Includes return boolean to check the arrays with winngPlaces 
        if(arr.includes(winningPlaces[i][0]) && arr.includes(winningPlaces[i][1] ) && arr.includes(winningPlaces[i][2] )){
        $('.result').text(display);
        
        }
     }

     }
 
  

    
    //  Function to reload the page "Feel free to play agin & Enjoy "!
$('#reset-btn').on('click' , function(){
    location.reload();
});

