import { personCharacter , Dispatch } from '../../utils/types';

export const SEARCH_API = 'SEARCH_API';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const searchApi = () => ({ type: SEARCH_API });

export const searchSuccess = (character: personCharacter) => ({ type: SEARCH_SUCCESS,payload: character });

export const searchError = (error: string) => ({ type: SEARCH_ERROR,payload: error});

export function thunkCharacter(name:string) {
    return async (dispatch: Dispatch) => {
        dispatch(searchApi());
        try {
            const response = await fetch(`https://www.anapioficeandfire.com/api/characters?name=${name}`);
            const data = await response.json();
            const character = data[0];
            dispatch(searchSuccess(character));
        } catch (error: any) {
            dispatch(searchError(error.message));
        }
    };
}