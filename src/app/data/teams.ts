import { Player, PLAYERS } from "./players";
import { computePlayerScore } from "./weeks";

export type Team = {
  name: string;
  accolades?: {
    first?: Array<number>;
    second?: Array<number>;
    third?: Array<number>;
  };
  winner: Player;
  players: Array<Player>;
};

const {
  AYSHA,
  GENEVIEVE,
  TEENY,
  SIERRA,
  RACHEL,
  ANIKA,
  ROME,
  SOL,
  KISHAN,
  JON,
  SAM,
  ANDY,
  TIYANA,
  SUE,
  CAROLINE,
  TK,
  GABE,
  KYLE,
} = PLAYERS;

export const teams: Array<Team> = [
  {
    name: "First Time in Fiji",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Momma J",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Sandy's Spynest",
    accolades: {
      second: [46],
    },
    winner: AYSHA,
    players: [],
  },
  {
    name: "4BlackCats",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Leafs Nation",
    accolades: {
      third: [46],
    },
    winner: AYSHA,
    players: [],
  },
  {
    name: "Wendy's Chickens",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Dean's M List (Money Team)",
    accolades: {
      first: [44],
      third: [45],
    },
    winner: AYSHA,
    players: [],
  },
  {
    name: "Hang in there, Jeremy!",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Challenge Beasts",
    accolades: {
      first: [45],
    },
    winner: AYSHA,
    players: [],
  },
  {
    name: "Shot in the Dark",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Jeff's Dimples",
    winner: AYSHA,
    players: [],
  },
  {
    name: "NO SPOILERS",
    accolades: {
      third: [45],
    },
    winner: AYSHA,
    players: [],
  },
  {
    name: "LIVIN'",
    winner: AYSHA,
    players: [],
  },
  {
    name: "With You 100%",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Emily & Charcuterie",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Petty Woman",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Truth Kamikazee",
    accolades: {
      second: [45],
    },
    winner: AYSHA,
    players: [],
  },
  {
    name: "Muscle Mania",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Great Vibes",
    winner: AYSHA,
    players: [],
  },
  {
    name: "UNDER-DOGS",
    accolades: {
      second: [44],
    },
    winner: AYSHA,
    players: [],
  },
  {
    name: "S.A.D",
    winner: AYSHA,
    players: [],
  },
  {
    name: "SIGA SLAY",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Fiji Kokoda",
    accolades: {
      first: [46],
      second: [44],
    },
    winner: AYSHA,
    players: [],
  },
  {
    name: "Jo's J-List",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Clyde's Castaways",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Louis for President",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Barely Hanging in There!",
    winner: AYSHA,
    players: [],
  },
  {
    name: "Paooooooola",
    winner: AYSHA,
    players: [],
  },
];

export function computeTeamScore(team: Team, weekNumber: number) {
  let score = 0;

  for (const player of team.players) {
    score += computePlayerScore(player, weekNumber, "total");
  }

  return score;
}

export function getTeamScore(team: Team, weekNumber: number) {
  return computeTeamScore(team, weekNumber) || "-";
}

export const fakeTeams = [
  {
    name: "1",
    winner: AYSHA,
    players: [AYSHA, GENEVIEVE, TEENY, SIERRA, RACHEL, ANIKA],
  },
  {
    name: "2",
    winner: AYSHA,
    players: [ROME, SOL, KISHAN, JON, SAM, ANDY],
  },
  {
    name: "3",
    winner: AYSHA,
    players: [TIYANA, SUE, CAROLINE, TK, GABE, KYLE],
  },
  {
    name: "4",
    winner: AYSHA,
    players: [SOL, KISHAN, JON, SAM, ANDY, TIYANA],
  },
  {
    name: "5",
    winner: AYSHA,
    players: [TK, GABE, KYLE, ROME, SOL, KISHAN],
  },
  {
    name: "6",
    winner: AYSHA,
    players: [RACHEL, ANIKA, ROME, SOL, KISHAN, JON],
  },
  {
    name: "7",
    winner: AYSHA,
    players: [JON, SAM, ANDY, TIYANA, SUE, CAROLINE],
  },
  {
    name: "8",
    winner: AYSHA,
    players: [CAROLINE, TK, GABE, KYLE, ROME, SOL],
  },
];
