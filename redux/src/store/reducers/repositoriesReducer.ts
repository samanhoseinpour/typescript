interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | SearchRepositories
  | SearchRepositoriesSuccess
  | SearchRepositoriesError;

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
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
