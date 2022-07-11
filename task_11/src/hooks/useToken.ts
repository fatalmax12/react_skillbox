import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { saveToken } from '../store/token/actions';

export function useToken() {
  const value = useSelector<RootState, string>((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken());
  }, []);

  return [value];
}
