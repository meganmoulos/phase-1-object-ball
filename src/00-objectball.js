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

function playerStats() {

}

function bigShoeRebounds() {

}