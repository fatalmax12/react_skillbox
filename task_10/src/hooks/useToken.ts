import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setToken } from '../store';

export function useToken() {
  const value = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
  }, []);

  return [value];
}
