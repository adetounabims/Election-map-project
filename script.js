var politicians = function(name, color){
 
    var politician = {}; 
    politician.color = color;
    politician.electionResults = null;
    politician.name = name; 
    politician.totalVotes = 0;
    
  //add up election votes 
    politician.addUpVotes = function() {
      this.totalVotes = 0;
      for ( var i = 0; i < this.electionResults.length; i++) {
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
    };
 return politician;
};

//assigning name and color
var don = politicians("Donley Trip", [245, 141, 136]);
var joe = politicians("Joel Bada", [132, 17,11]);
//console.log(joe.color);

//array of number of votes for each state per candidate
don.electionResults = [ 5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2 ];
joe.electionResults = [ 4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1 ];


//changing array value for florida
don.electionResults[9] = 1;
joe.electionResults[9] = 28;
//changing california array value
don.electionResults[4] = 17;
joe.electionResults[4] = 38;
//changing texas array value
don.electionResults[43] = 11;
joe.electionResults[43] = 27;

 
//Assigning the winners
var setStateResults = function(state) {
  theStates[state].winner =null;
   if (don.electionResults[state] > joe.electionResults[state]) 
   { theStates[state].winner = don; }
    else if(don.electionResults[state] < joe.electionResults[state])
    { theStates[state].winner = joe; }

//state color based on the winner
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null)
   { theStates[state].rgbColor = stateWinner.color; }
   else
   { theStates[state].rgbColor =[11,32,57]; } 


//adding data to html state results table
var stateInfoTable = document.getElementById('stateResults');
//for header positions
var header = stateInfoTable.children[0].children[0];  
var stateName = header.children[0];
var abbreviation = header.children[1];
//for body positions
var body = stateInfoTable.children[1];
var politician1Name = body.children[0].children[0];
var politician1Result = body.children[0].children[1];
var politician2Name= body.children[1].children[0];
var politician2Result= body.children[1].children[1];
var winnerName = body.children[2].children[1];

//inner text for header
stateName.innerText = theStates[state].nameFull;
abbreviation.innerText = theStates[state].nameAbbrev;
//inner text for body
politician1Name.innerText = don.name;
politician1Result.innerText = don.electionResults[state] + " votes .";
politician2Name.innerText = joe.name;
politician2Result.innerText = joe.electionResults[state] + " votes .";
if (theStates[state].winner === null) {
  winnerName.innerText = " DRAW! "
} else {
  winnerName.innerText = theStates[state].winner.name;
}



};


joe.addUpVotes();
don.addUpVotes();
//checking total no of votes onconsole
console.log(joe.totalVotes);
console.log(don.totalVotes);


 
//declaring the winner 
var winner = "who";
	  if (don.totalVotes > joe.totalVotes ) 
	  {
	  	winner = don.name;
	  } 

	  else if (don.totalVotes < joe.totalVotes)
	   {
	  	winner = joe.name;
	  }

	  	else {
	  		winner = " DRAW! ";
	  	}
	  	console.log("The winner is " + winner + " .");

//Country results table
      var countryResults = document.getElementById('countryResults');
      var count = countryResults.children[0].children[0];
count.children[0].innerText = joe.name;
count.children[1].innerText = joe.totalVotes;
count.children[2].innerText = don.name;
count.children[3].innerText = don.totalVotes;
count.children[5].innerText = winner;

 