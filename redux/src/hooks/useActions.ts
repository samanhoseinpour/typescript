import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { repositoriesActionCreator } from '../store';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(repositoriesActionCreator, dispatch);
};
