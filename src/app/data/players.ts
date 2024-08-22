export type PlayerStatus = "active" | "eliminated" | "jury" | "winner";

export enum PlayerKeys {
  JEM = "JEM",
  BEN = "BEN",
  JESS = "JESS",
  BHANU = "BHANU",
  KENZIE = "KENZIE",
  CHARLIE = "CHARLIE",
  LIZ = "LIZ",
  JELINSKY = "JELINSKY",
  MARIA = "MARIA",
  HUNTER = "HUNTER",
  MORIAH = "MORIAH",
  Q = "Q",
  SODA = "SODA",
  RANDEN = "RANDEN",
  TIFFANY = "TIFFANY",
  TEVIN = "TEVIN",
  VENUS = "VENUS",
  TIM = "TIM",
}

export type Player = {
  key: PlayerKeys;
  name: string;
  status: PlayerStatus;
  eliminatedWeek?: number;
};

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.JEM]: {
    key: PlayerKeys.JEM,
    name: "Jem",
    status: "eliminated",
    eliminatedWeek: 4,
  },
  [PlayerKeys.BEN]: {
    key: PlayerKeys.BEN,
    name: "Ben",
    status: "eliminated",
    eliminatedWeek: 12,
  },
  [PlayerKeys.JESS]: {
    key: PlayerKeys.JESS,
    name: "Jess",
    status: "eliminated",
    eliminatedWeek: 1,
  },
  [PlayerKeys.BHANU]: {
    key: PlayerKeys.BHANU,
    name: "Bhanu",
    status: "eliminated",
    eliminatedWeek: 3,
  },
  [PlayerKeys.KENZIE]: {
    key: PlayerKeys.KENZIE,
    name: "Kenzie",
    status: "winner",
  },
  [PlayerKeys.CHARLIE]: {
    key: PlayerKeys.CHARLIE,
    name: "Charlie",
    status: "eliminated",
    eliminatedWeek: 12,
  },
  [PlayerKeys.LIZ]: {
    key: PlayerKeys.LIZ,
    name: "Liz",
    status: "jury",
    eliminatedWeek: 12,
  },
  [PlayerKeys.JELINSKY]: {
    key: PlayerKeys.JELINSKY,
    name: "Jelinsky",
    status: "eliminated",
    eliminatedWeek: 0,
  },
  [PlayerKeys.MARIA]: {
    key: PlayerKeys.MARIA,
    name: "Maria",
    status: "jury",
    eliminatedWeek: 12,
  },
  [PlayerKeys.HUNTER]: {
    key: PlayerKeys.HUNTER,
    name: "Hunter",
    status: "jury",
    eliminatedWeek: 8,
  },
  [PlayerKeys.MORIAH]: {
    key: PlayerKeys.MORIAH,
    name: "Moriah",
    status: "eliminated",
    eliminatedWeek: 5,
  },
  [PlayerKeys.Q]: {
    key: PlayerKeys.Q,
    name: "Q",
    status: "jury",
    eliminatedWeek: 11,
  },
  [PlayerKeys.SODA]: {
    key: PlayerKeys.SODA,
    name: "Soda",
    status: "jury",
    eliminatedWeek: 6,
  },
  [PlayerKeys.RANDEN]: {
    key: PlayerKeys.RANDEN,
    name: "Randen",
    status: "eliminated",
    eliminatedWeek: 2,
  },
  [PlayerKeys.TIFFANY]: {
    key: PlayerKeys.TIFFANY,
    name: "Tiffany",
    status: "jury",
    eliminatedWeek: 9,
  },
  [PlayerKeys.TEVIN]: {
    key: PlayerKeys.TEVIN,
    name: "Tevin",
    status: "jury",
    eliminatedWeek: 7,
  },
  [PlayerKeys.VENUS]: {
    key: PlayerKeys.VENUS,
    name: "Venus",
    status: "jury",
    eliminatedWeek: 10,
  },
  [PlayerKeys.TIM]: {
    key: PlayerKeys.TIM,
    name: "Tim",
    status: "eliminated",
    eliminatedWeek: 6,
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
