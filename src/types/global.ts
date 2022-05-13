export interface IName {
  name: number;
}

export interface IPortrayed {
  portrayed: number;
}

export interface IInitialState {
  user: null | any[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
