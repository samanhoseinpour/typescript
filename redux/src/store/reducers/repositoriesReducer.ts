import { Action } from '../actions';
import { ActionType } from '../action-types';

interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { data: [], loading: true, error: null };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { data: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
