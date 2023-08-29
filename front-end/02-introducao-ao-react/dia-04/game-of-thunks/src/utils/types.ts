import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export type personCharacter = {
    name: string,
    url: string
    gender: string,
    culture: string,
    titles: string[],
    character: string,
    isLoading: boolean,
    error: string,
};

export type Dispatch = ThunkDispatch<personCharacter, null, AnyAction>
