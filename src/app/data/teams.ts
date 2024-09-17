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
    winner: SOL,
    players: [SOL, CAROLINE, TEENY, TK, ANIKA, ANDY],
  },
  {
    name: "Sandy's Spynest",
    accolades: {
      second: [46],
    },
    winner: SIERRA,
    players: [SIERRA, ANIKA, GABE, ROME, TK, AYSHA],
  },
  {
    name: "4blackcats",
    winner: GENEVIEVE,
    players: [GENEVIEVE, ROME, TIYANA, GABE, KYLE, SIERRA],
  },
  {
    name: "Leafs Nation",
    accolades: {
      third: [46],
    },
    winner: GENEVIEVE,
    players: [GENEVIEVE, CAROLINE, KYLE, SIERRA, GABE, ANDY],
  },
  {
    name: "Wendy's Chickens",
    winner: ROME,
    players: [ROME, ANIKA, KYLE, SUE, KISHAN, ANDY],
  },
  {
    name: "Dean’s T and A Team",
    accolades: {
      first: [44],
      third: [45],
    },
    winner: TK,
    players: [TK, TIYANA, TEENY, ANDY, ANIKA, AYSHA],
  },
  {
    name: "Charlie's Angels",
    winner: ANDY,
    players: [ANDY, KYLE, GENEVIEVE, RACHEL, KISHAN, TK],
  },
  {
    name: "Jeff's Dimples",
    winner: ANDY,
    players: [ANDY, ROME, TK, KYLE, TEENY, TIYANA],
  },
  {
    name: "Truth Kamikazee",
    accolades: {
      second: [45],
    },
    winner: AYSHA,
    players: [AYSHA, RACHEL, SAM, SIERRA, TK, KYLE],
  },
  {
    name: "Muscle Mania",
    winner: TK,
    players: [TK, ANDY, CAROLINE, TIYANA, SAM, SOL],
  },
  {
    name: "Mermaid Dragon",
    winner: AYSHA,
    players: [JON, GENEVIEVE, SIERRA, TEENY, SOL, ANDY],
  },
  {
    name: "Fiji Kokoda",
    accolades: {
      first: [46],
      second: [44],
    },
    winner: KYLE,
    players: [KYLE, GABE, KISHAN, SOL, SAM, GENEVIEVE],
  },
  {
    name: "Team Outwit",
    winner: CAROLINE,
    players: [CAROLINE, KYLE, GENEVIEVE, SAM, SOL, TEENY],
  },
  {
    name: "Frank has Foot Fungus",
    winner: RACHEL,
    players: [RACHEL, TEENY, SOL, TK, SAM, KYLE],
  },
  {
    name: "Jeff's Six Pack",
    winner: ANDY,
    players: [ANDY, JON, GENEVIEVE, KYLE, SIERRA, SOL],
  },
  {
    name: "Here for Friendship",
    winner: KYLE,
    players: [KYLE, JON, KISHAN, SUE, TIYANA, TK],
  },
  {
    name: "TEAM JO",
    winner: ROME,
    players: [ROME, SAM, GENEVIEVE, RACHEL, SOL, TIYANA],
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
    name: "UNDER-DOGS",
    accolades: {
      second: [44],
    },
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
