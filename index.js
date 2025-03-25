function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        }
      }
    }
  };
}
function numPointsScored(playerName) {
  const game = gameObject();
  for (let team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
}
function teamColors(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}
function playerNumbers(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map(player => player.number);
    }
  }
}
function playerStats(playerName) {
  const game = gameObject();
  for (let team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
}
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = "";
  let rebounds = 0;

  for (let team in game) {
    const players = game[team].players;
    for (let playerName in players) {
      const player = players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = playerName;
        rebounds = player.rebounds;
      }
    }
  }
  return rebounds;
}
function mostPointsScored() {
  const game = gameObject();
  let mostPoints = 0;
  let playerWithMostPoints = "";

  for (let team in game) {
    const players = game[team].players;
    for (let playerName in players) {
      const player = players[playerName];
      if (player.points > mostPoints) {
        mostPoints = player.points;
        playerWithMostPoints = playerName;
      }
    }
  }
  return playerWithMostPoints;
}
function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let team in game) {
    const players = game[team].players;
    let teamPoints = 0;
    for (let playerName in players) {
      teamPoints += players[playerName].points;
    }
    if (team === "home") {
      homePoints = teamPoints;
    } else {
      awayPoints = teamPoints;
    }
  }

  return homePoints > awayPoints ? "Brooklyn Nets" : "Charlotte Hornets";
}
function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (let team in game) {
    const players = game[team].players;
    for (let playerName in players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }
  return longestName;
}
function doesLongNameStealATon() {
  const game = gameObject();
  const longestName = playerWithLongestName();
  const steals = playerStats(longestName).steals;
  const mostStealsPlayer = mostPointsScored();

  return steals > playerStats(mostStealsPlayer).steals;
}
