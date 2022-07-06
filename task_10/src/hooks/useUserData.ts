import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
// import { tokenContext } from '../shared/context/tokenContext';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useToken } from './useToken';

interface IUserData {
  name?: string;
  iconImg?: string;
}

function useUserData() {
  const [data, setData] = useState<IUserData>({});
  const hook = useToken();
  const token = useSelector<RootState, string>((state) => state.token);

  useEffect(() => {
    if (token && token.length > 0 && token != 'undefined') {
      axios.get('https://oauth.reddit.com/api/v1/me.json?sr_detail=true', {
        headers: {
          Authorization: `bearer ${token}`,
        }
      })
        .then((response) => {
          const userData = response.data;
          setData({ name: userData.name, iconImg: userData.snoovatar_img });
        })
        .catch(console.log)
    }
  }, [token]);

  return [data];
}

export default useUserData;


