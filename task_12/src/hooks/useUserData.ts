import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
// import { tokenContext } from '../shared/context/tokenContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useToken } from './useToken';
import { IUserData, meRequestAsync } from '../store/me/actions';

function useUserData() {
  const hook = useToken();

  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading);
  const token = useSelector<RootState, string>((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(meRequestAsync());
  }, [token]);

  return {
    data,
    loading,
  };
}

export default useUserData;


