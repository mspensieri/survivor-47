import { Player, PLAYERS } from "./players";
import { computePlayerScore } from "./weeks";

export type Team = {
  name: string;
  winner: Player;
  players: Array<Player>;
};

export const teams: Array<Team> = [
  {
    name: "First Time in Fiji",
    winner: PLAYERS.MORIAH,
    players: [
      PLAYERS.MORIAH,
      PLAYERS.JESS,
      PLAYERS.BHANU,
      PLAYERS.CHARLIE,
      PLAYERS.RANDEN,
      PLAYERS.TEVIN,
    ],
  },
  {
    name: "Momma J",
    winner: PLAYERS.TIM,
    players: [
      PLAYERS.TIM,
      PLAYERS.MARIA,
      PLAYERS.BEN,
      PLAYERS.VENUS,
      PLAYERS.BHANU,
      PLAYERS.JESS,
    ],
  },
  {
    name: "Sandy's Spynest",
    winner: PLAYERS.MORIAH,
    players: [
      PLAYERS.MORIAH,
      PLAYERS.TEVIN,
      PLAYERS.KENZIE,
      PLAYERS.BEN,
      PLAYERS.HUNTER,
      PLAYERS.TIFFANY,
    ],
  },
  {
    name: "4BlackCats",
    winner: PLAYERS.VENUS,
    players: [
      PLAYERS.VENUS,
      PLAYERS.JESS,
      PLAYERS.CHARLIE,
      PLAYERS.HUNTER,
      PLAYERS.KENZIE,
      PLAYERS.JEM,
    ],
  },
  {
    name: "Leafs Nation",
    winner: PLAYERS.HUNTER,
    players: [
      PLAYERS.HUNTER,
      PLAYERS.LIZ,
      PLAYERS.VENUS,
      PLAYERS.CHARLIE,
      PLAYERS.JELINSKY,
      PLAYERS.KENZIE,
    ],
  },
  {
    name: "Wendy's Chickens",
    winner: PLAYERS.TIFFANY,
    players: [
      PLAYERS.TIFFANY,
      PLAYERS.JEM,
      PLAYERS.JELINSKY,
      PLAYERS.MORIAH,
      PLAYERS.SODA,
      PLAYERS.TEVIN,
    ],
  },
  {
    name: "Dean's M List (Money Team)",
    winner: PLAYERS.MARIA,
    players: [
      PLAYERS.MARIA,
      PLAYERS.MORIAH,
      PLAYERS.Q,
      PLAYERS.RANDEN,
      PLAYERS.SODA,
      PLAYERS.TEVIN,
    ],
  },
  {
    name: "Hang in there, Jeremy!",
    winner: PLAYERS.SODA,
    players: [
      PLAYERS.SODA,
      PLAYERS.Q,
      PLAYERS.TEVIN,
      PLAYERS.TIFFANY,
      PLAYERS.MORIAH,
      PLAYERS.TIM,
    ],
  },
  {
    name: "Challenge Beasts",
    winner: PLAYERS.HUNTER,
    players: [
      PLAYERS.HUNTER,
      PLAYERS.BEN,
      PLAYERS.JESS,
      PLAYERS.KENZIE,
      PLAYERS.TEVIN,
      PLAYERS.TIFFANY,
    ],
  },
  {
    name: "Shot in the Dark",
    winner: PLAYERS.BHANU,
    players: [
      PLAYERS.BHANU,
      PLAYERS.JESS,
      PLAYERS.TEVIN,
      PLAYERS.VENUS,
      PLAYERS.TIM,
      PLAYERS.MARIA,
    ],
  },
  {
    name: "Jeff's Dimples",
    winner: PLAYERS.JESS,
    players: [
      PLAYERS.JESS,
      PLAYERS.MORIAH,
      PLAYERS.CHARLIE,
      PLAYERS.TIM,
      PLAYERS.LIZ,
      PLAYERS.JELINSKY,
    ],
  },
  {
    name: "NO SPOILERS",
    winner: PLAYERS.HUNTER,
    players: [
      PLAYERS.HUNTER,
      PLAYERS.JESS,
      PLAYERS.VENUS,
      PLAYERS.JELINSKY,
      PLAYERS.JEM,
      PLAYERS.Q,
    ],
  },
  {
    name: "LIVIN'",
    winner: PLAYERS.RANDEN,
    players: [
      PLAYERS.RANDEN,
      PLAYERS.JESS,
      PLAYERS.CHARLIE,
      PLAYERS.KENZIE,
      PLAYERS.VENUS,
      PLAYERS.TIM,
    ],
  },
  {
    name: "With You 100%",
    winner: PLAYERS.CHARLIE,
    players: [
      PLAYERS.CHARLIE,
      PLAYERS.TEVIN,
      PLAYERS.HUNTER,
      PLAYERS.JEM,
      PLAYERS.JELINSKY,
      PLAYERS.TIFFANY,
    ],
  },
  {
    name: "Emily & Charcuterie",
    winner: PLAYERS.TIFFANY,
    players: [
      PLAYERS.TIFFANY,
      PLAYERS.JEM,
      PLAYERS.TEVIN,
      PLAYERS.VENUS,
      PLAYERS.MARIA,
      PLAYERS.JELINSKY,
    ],
  },
  {
    name: "Petty Woman",
    winner: PLAYERS.KENZIE,
    players: [
      PLAYERS.KENZIE,
      PLAYERS.JELINSKY,
      PLAYERS.HUNTER,
      PLAYERS.Q,
      PLAYERS.VENUS,
      PLAYERS.CHARLIE,
    ],
  },
  {
    name: "Truth Kamikazee",
    winner: PLAYERS.HUNTER,
    players: [
      PLAYERS.HUNTER,
      PLAYERS.BEN,
      PLAYERS.MARIA,
      PLAYERS.MORIAH,
      PLAYERS.Q,
      PLAYERS.TIFFANY,
    ],
  },
  {
    name: "Muscle Mania",
    winner: PLAYERS.JESS,
    players: [
      PLAYERS.JESS,
      PLAYERS.RANDEN,
      PLAYERS.TIM,
      PLAYERS.BHANU,
      PLAYERS.BEN,
      PLAYERS.Q,
    ],
  },
  {
    name: "Great Vibes",
    winner: PLAYERS.Q,
    players: [
      PLAYERS.Q,
      PLAYERS.VENUS,
      PLAYERS.TEVIN,
      PLAYERS.MARIA,
      PLAYERS.JELINSKY,
      PLAYERS.RANDEN,
    ],
  },
  {
    name: "UNDER-DOGS",
    winner: PLAYERS.SODA,
    players: [
      PLAYERS.SODA,
      PLAYERS.MARIA,
      PLAYERS.BHANU,
      PLAYERS.Q,
      PLAYERS.LIZ,
      PLAYERS.BEN,
    ],
  },
  {
    name: "S.A.D",
    winner: PLAYERS.JEM,
    players: [
      PLAYERS.JEM,
      PLAYERS.KENZIE,
      PLAYERS.TIFFANY,
      PLAYERS.RANDEN,
      PLAYERS.HUNTER,
      PLAYERS.TEVIN,
    ],
  },
  {
    name: "SIGA SLAY",
    winner: PLAYERS.RANDEN,
    players: [
      PLAYERS.RANDEN,
      PLAYERS.TEVIN,
      PLAYERS.JELINSKY,
      PLAYERS.SODA,
      PLAYERS.JESS,
      PLAYERS.HUNTER,
    ],
  },
  {
    name: "Fiji Kokoda",
    winner: PLAYERS.RANDEN,
    players: [
      PLAYERS.RANDEN,
      PLAYERS.MARIA,
      PLAYERS.HUNTER,
      PLAYERS.CHARLIE,
      PLAYERS.KENZIE,
      PLAYERS.BEN,
    ],
  },
  {
    name: "Jo's J-List",
    winner: PLAYERS.JEM,
    players: [
      PLAYERS.JEM,
      PLAYERS.JESS,
      PLAYERS.KENZIE,
      PLAYERS.LIZ,
      PLAYERS.MARIA,
      PLAYERS.MORIAH,
    ],
  },
  {
    name: "Clyde's Castaways",
    winner: PLAYERS.HUNTER,
    players: [
      PLAYERS.HUNTER,
      PLAYERS.TEVIN,
      PLAYERS.VENUS,
      PLAYERS.Q,
      PLAYERS.LIZ,
      PLAYERS.RANDEN,
    ],
  },
  {
    name: "Louis for President",
    winner: PLAYERS.BHANU,
    players: [
      PLAYERS.BHANU,
      PLAYERS.TIFFANY,
      PLAYERS.Q,
      PLAYERS.TIM,
      PLAYERS.MARIA,
      PLAYERS.HUNTER,
    ],
  },
  {
    name: "Barely Hanging in There!",
    winner: PLAYERS.Q,
    players: [
      PLAYERS.Q,
      PLAYERS.VENUS,
      PLAYERS.LIZ,
      PLAYERS.BEN,
      PLAYERS.JEM,
      PLAYERS.HUNTER,
    ],
  },
  {
    name: "Paooooooola",
    winner: PLAYERS.MORIAH,
    players: [
      PLAYERS.MORIAH,
      PLAYERS.JELINSKY,
      PLAYERS.VENUS,
      PLAYERS.KENZIE,
      PLAYERS.HUNTER,
      PLAYERS.Q,
    ],
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
    winner: PLAYERS.SODA,
    players: [
      PLAYERS.SODA,
      PLAYERS.MARIA,
      PLAYERS.BHANU,
      PLAYERS.Q,
      PLAYERS.LIZ,
      PLAYERS.BEN,
    ],
  },
  {
    name: "2",
    winner: PLAYERS.JEM,
    players: [
      PLAYERS.JEM,
      PLAYERS.KENZIE,
      PLAYERS.TIFFANY,
      PLAYERS.RANDEN,
      PLAYERS.HUNTER,
      PLAYERS.TEVIN,
    ],
  },
  {
    name: "3",
    winner: PLAYERS.RANDEN,
    players: [
      PLAYERS.RANDEN,
      PLAYERS.TEVIN,
      PLAYERS.JELINSKY,
      PLAYERS.SODA,
      PLAYERS.JESS,
      PLAYERS.HUNTER,
    ],
  },
  {
    name: "4",
    winner: PLAYERS.RANDEN,
    players: [
      PLAYERS.RANDEN,
      PLAYERS.MARIA,
      PLAYERS.HUNTER,
      PLAYERS.CHARLIE,
      PLAYERS.KENZIE,
      PLAYERS.BEN,
    ],
  },
  {
    name: "5",
    winner: PLAYERS.JEM,
    players: [
      PLAYERS.JEM,
      PLAYERS.JESS,
      PLAYERS.KENZIE,
      PLAYERS.LIZ,
      PLAYERS.MARIA,
      PLAYERS.MORIAH,
    ],
  },
  {
    name: "6",
    winner: PLAYERS.HUNTER,
    players: [
      PLAYERS.HUNTER,
      PLAYERS.TEVIN,
      PLAYERS.VENUS,
      PLAYERS.Q,
      PLAYERS.LIZ,
      PLAYERS.RANDEN,
    ],
  },
  {
    name: "7",
    winner: PLAYERS.BHANU,
    players: [
      PLAYERS.BHANU,
      PLAYERS.TIFFANY,
      PLAYERS.Q,
      PLAYERS.TIM,
      PLAYERS.MARIA,
      PLAYERS.HUNTER,
    ],
  },
  {
    name: "8",
    winner: PLAYERS.Q,
    players: [
      PLAYERS.Q,
      PLAYERS.VENUS,
      PLAYERS.LIZ,
      PLAYERS.BEN,
      PLAYERS.JEM,
      PLAYERS.HUNTER,
    ],
  },
];
