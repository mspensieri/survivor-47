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
    name: "Dean's T and A Team",
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
    winner: JON,
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
    name: "UNDERDOGS",
    accolades: {
      second: [44],
    },
    winner: SUE,
    players: [SUE, KISHAN, AYSHA, SAM, JON, ANIKA],
  },
  {
    name: "Challenge Beasts",
    accolades: {
      first: [45],
    },
    winner: KYLE,
    players: [KYLE, SAM, ANDY, TK, ANIKA, TEENY],
  },
  {
    name: "BIG DUCK",
    winner: SIERRA,
    players: [SIERRA, TEENY, KYLE, TK, SUE, ANDY],
  },
  {
    name: "Survivor 2025",
    winner: TK,
    players: [TK, ROME, ANIKA, GABE, AYSHA, CAROLINE],
  },
  {
    name: "Boinko's Brats",
    winner: TEENY,
    players: [TEENY, TIYANA, TK, GABE, KISHAN, SIERRA],
  },
  {
    name: "Lemay",
    winner: RACHEL,
    players: [RACHEL, SIERRA, ROME, KYLE, GABE, CAROLINE],
  },
  {
    name: "Ancient Voices",
    winner: TIYANA,
    players: [TIYANA, ANDY, KISHAN, SUE, AYSHA, TK],
  },
  {
    name: "Play Your Idol",
    winner: KYLE,
    players: [KYLE, SIERRA, ANDY, SOL, CAROLINE, TEENY],
  },
  {
    name: "Come On In Guys",
    winner: RACHEL,
    players: [RACHEL, TEENY, KYLE, TK, ANDY, CAROLINE],
  },
  {
    name: "Ogatally Devotes",
    winner: SAM,
    players: [SAM, KISHAN, TEENY, ANDY, AYSHA, TIYANA],
  },
  {
    name: "Got Nothin' For Ya",
    winner: TK,
    players: [TK, ANIKA, GENEVIEVE, KYLE, JON, SOL],
  },
  {
    name: "The Noob",
    winner: TIYANA,
    players: [TIYANA, KYLE, TK, AYSHA, TEENY, SAM],
  },
  {
    name: "Clyde's Castaways",
    winner: SOL,
    players: [SOL, ANDY, KYLE, TK, TEENY, TIYANA],
  },
  {
    name: "TRACKS",
    winner: ROME,
    players: [ROME, TIYANA, KISHAN, SUE, CAROLINE, ANIKA],
  },
  {
    name: "LIVIN'",
    winner: TK,
    players: [TK, GENEVIEVE, CAROLINE, ROME, SIERRA, ANDY],
  },
  {
    name: "With You 100%",
    winner: KYLE,
    players: [KYLE, TK, ANIKA, CAROLINE, SOL, RACHEL],
  },
  {
    name: "JSpenny",
    winner: KYLE,
    players: [KYLE, SOL, TIYANA, TEENY, JON, ANDY],
  },
  {
    name: "House of Vidmar",
    winner: CAROLINE,
    players: [CAROLINE, SIERRA, SAM, KYLE, TK, TIYANA],
  },
  {
    name: "Fight For it?",
    winner: KYLE,
    players: [KYLE, ANDY, GENEVIEVE, KISHAN, TEENY, SOL],
  },
  // {
  //   name: "NO SPOILERS",
  //   accolades: {
  //     third: [45],
  //   },
  //   winner: AYSHA,
  //   players: [],
  // },
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
