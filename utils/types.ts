export interface Employees {
    createdAt: Date;
    name:      string;
    avatar:    string;
    gender:    string;
    state:     Direction;
    id:        string;
    phone:     string;
}

export interface ChangeState {
    id : string;
    state: Direction;
}

export enum Direction {
    ADDED = 1,
    INCHECK,
    APPROVED,
    ACTIVE,
    INACTIVE
  }

  export enum Colors {
    lime = 0,
    emerald,
    cyan,
    violet,
    pink
  }