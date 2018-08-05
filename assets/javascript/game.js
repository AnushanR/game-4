$( document ).ready(function(){
  
    var target=Math.floor(Math.random()*101+19)
  
  $('#cpuNumber').text(target);
  
  var jewel1= Math.floor(Math.random()*11+1)
  var jewel2= Math.floor(Math.random()*11+1)
  var jewel3= Math.floor(Math.random()*11+1)
  var jewel4= Math.floor(Math.random()*11+1)
   
  var currentScore= 0; 
  var wins= 0;
  var losses = 0;
  
$('#numberOfWins').text(wins);
$('#numberOfLosses').text(losses);

function reset(){
      target=Math.floor(Math.random()*101+19);
      console.log(target)
      $('#cpuNumber').text(target);
      jewel1= Math.floor(Math.random()*11+1);
      jewel2= Math.floor(Math.random()*11+1);
      jewel3= Math.floor(Math.random()*11+1);
      jewel4= Math.floor(Math.random()*11+1);
      currentScore= 0;
      $('#finalTotal').text(currentScore);
      } 

function winner(){
alert("You won!");
  wins++; 
  $('#numberOfWins').text(wins);
  reset();
}

function loser(){
alert ("You lose!");
  losses++;
  $('#numberOfLosses').text(losses);
  reset()
}

  $('#blue').on ('click', function(){
    currentScore = currentScore + jewel1;
    console.log("updatedScore= " + currentScore);
    $('#finalTotal').text(currentScore); 
          
        if (currentScore == target){
          winner();
        }
        else if ( currentScore > target){
          loser();
        }   
  })  
  $('#green').on ('click', function(){
    currentScore = currentScore + jewel2;
    console.log("updatedScore= " + currentScore);
    $('#finalTotal').text(currentScore); 
        if (currentScore == target){
          winner();
        }
        else if ( currentScore > target){
          loser();
        } 
  })  
  $('#red').on ('click', function(){
    currentScore = currentScore + jewel3;
    console.log("updatedScore= " + currentScore);
    $('#finalTotal').text(currentScore);

          if (currentScore == target){
          winner();
        }
        else if ( currentScore > target){
          loser();
        } 
  })  
  $('#yellow').on ('click', function(){
    currentScore = currentScore + jewel4;
    console.log("updatedScore= " + currentScore);
    $('#finalTotal').text(currentScore); 
      
          if (currentScore == target){
          winner();
        }
        else if ( currentScore > target){
          loser();
        }
  });   
}); 
