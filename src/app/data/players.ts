export type PlayerStatus = "active" | "eliminated" | "jury" | "winner";

export enum PlayerKeys {
  AYSHA = "AYSHA",
  GENEVIEVE = "GENEVIEVE",
  TEENY = "TEENY",
  SIERRA = "SIERRA",
  RACHEL = "RACHEL",
  ANIKA = "ANIKA",
  ROME = "ROME",
  SOL = "SOL",
  KISHAN = "KISHAN",
  JON = "JON",
  SAM = "SAM",
  ANDY = "ANDY",
  TIYANA = "TIYANA",
  SUE = "SUE",
  CAROLINE = "CAROLINE",
  TK = "TK",
  GABE = "GABE",
  KYLE = "KYLE",
}

export type Player = {
  key: PlayerKeys;
  name: string;
  status: PlayerStatus;
  eliminatedWeek?: number;
};

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.AYSHA]: {
    key: PlayerKeys.AYSHA,
    name: "Aysha",
    status: "eliminated",
    eliminatedWeek: 2,
  },
  [PlayerKeys.GENEVIEVE]: {
    key: PlayerKeys.GENEVIEVE,
    name: "Genevieve",
    status: "active",
  },
  [PlayerKeys.TEENY]: {
    key: PlayerKeys.TEENY,
    name: "Teeny",
    status: "active",
  },
  [PlayerKeys.SIERRA]: {
    key: PlayerKeys.SIERRA,
    name: "Sierra",
    status: "active",
  },
  [PlayerKeys.RACHEL]: {
    key: PlayerKeys.RACHEL,
    name: "Rachel",
    status: "active",
  },
  [PlayerKeys.ANIKA]: {
    key: PlayerKeys.ANIKA,
    name: "Anika",
    status: "active",
  },
  [PlayerKeys.ROME]: {
    key: PlayerKeys.ROME,
    name: "Rome",
    status: "active",
  },
  [PlayerKeys.SOL]: {
    key: PlayerKeys.SOL,
    name: "Sol",
    status: "active",
  },
  [PlayerKeys.KISHAN]: {
    key: PlayerKeys.KISHAN,
    name: "Kishan",
    status: "eliminated",
    eliminatedWeek: 3,
  },
  [PlayerKeys.JON]: {
    key: PlayerKeys.JON,
    name: "Jon",
    status: "eliminated",
    eliminatedWeek: 0,
  },
  [PlayerKeys.SAM]: {
    key: PlayerKeys.SAM,
    name: "Sam",
    status: "active",
  },
  [PlayerKeys.ANDY]: {
    key: PlayerKeys.ANDY,
    name: "Andy",
    status: "active",
  },
  [PlayerKeys.TIYANA]: {
    key: PlayerKeys.TIYANA,
    name: "Tiyana",
    status: "active",
  },
  [PlayerKeys.SUE]: {
    key: PlayerKeys.SUE,
    name: "Sue",
    status: "active",
  },
  [PlayerKeys.CAROLINE]: {
    key: PlayerKeys.CAROLINE,
    name: "Caroline",
    status: "active",
  },
  [PlayerKeys.TK]: {
    key: PlayerKeys.TK,
    name: "TK",
    status: "eliminated",
    eliminatedWeek: 1,
  },
  [PlayerKeys.GABE]: {
    key: PlayerKeys.GABE,
    name: "Gabe",
    status: "active",
  },
  [PlayerKeys.KYLE]: {
    key: PlayerKeys.KYLE,
    name: "Kyle",
    status: "active",
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
