const game = gameObject();
const players = playersObject();
const teams = Object.values(game)

function gameObject() {
    return {
        home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
                "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
                },
              "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12, 
                rebounds: 12,
                assists: 12, 
                steals: 12,
                blocks: 12,
                slamDunks: 7
              },
              "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1, 
                slamDunks: 15
              },
              "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
              },
              "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
              },
          },
      away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
              "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
              },
              "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12, 
                rebounds: 4,
                assists: 7, 
                steals: 7,
                blocks: 15,
                slamDunks: 10
              },
              "DeSanga Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5, 
                slamDunks: 5
              },
              "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
              },
              "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
              },
        } 
      }
    }
  }
};  

// Helper function, to get all the players
function playersObject() {
  return {...game.home.players, ...game.away.players};
}

// Helper function, for player stats
function playerStats(playerName) {
  return players[playerName];
}

// Helper function, find team by name
function findByTeamName(teamName) {
  return teams.find(team => team.teamName === teamName);
}

function numPointsScored(playerName)  {
  return playerStats(playerName).points;
}

function shoeSize(playerName) {
  return playerStats(playerName).shoe;
}

function teamColors(teamName) {
  return findByTeamName(teamName).colors; 
}

function teamNames() {
  return teams.map(team => team.teamName);
}

function playerNumbers(teamName) {
  const players = findByTeamName(teamName).players;
  const statsArr = Object.values(players);
  return statsArr.map(statsObj => statsObj.number);
}

function bigShoeRebounds() {
  // Get an array of all player stats objects
  let sortedPlayers = Object.values(players)
  // Sort the objects in the array in place by shoe size
  sortedPlayers.sort((a, b) => {
    if (a.shoe < b.shoe) return -1;
    if (a.shoe > b.shoe) return 1;
    return 0;
  })
  return sortedPlayers[0].rebounds;
}

function playerWithLongestName(){
  let sortedNames = Object.keys(players).sort((a, b) => b.length - a.length)
  return sortedNames[0]
}

function bigFeetPlayers(){
  const playerArr = Object.entries(players)
  return playerArr.filter(player => player[1].shoe > 15).map(pArr => pArr[0]);
}

function mostPointsScored(){
  let sortedPlayers = Object.entries(players)
  sortedPlayers.sort((a, b) => {
    if (a[1].points < b[1].points) return 1;
    if (a[1].points > b[1].points) return -1;
    return 0
  })
}

function winningTeam(){
  let teamsWithScores = [
    {
      teamName: game.home.teamName,
      score: Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0)
    },
    {
      teamName: game.away.teamName,
      points: Object.values(game.away.players).reduce((sum, player) => sum +  player.points, 0)
    }
  ]
  const winner = teamsWithScores.sort((a, b) => b.score - a.score)[0]
  return winner.teamName;
}

function doesLongNameStealATon() {
  let sortedPlayers = Object.entries(players);
  sortedPlayers.sort((a, b) => {
    if (a[1].steals < b[1].steals) return -1;
    if (a[1].steals > b[1].steals) return 1;
    return 0;
  })
  const mostStealsPlayer = sortedPlayers[0][0];
  return playerWithLongestName === mostStealsPlayer;
}
