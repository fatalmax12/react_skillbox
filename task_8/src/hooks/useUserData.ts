import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IUserData {
  name?: string;
  iconImg?: string;
}

function useUserData() {
  const [data, setData] = useState<IUserData>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    if (token && token.length > 0 && token != 'undefined') {
      axios.get('https://oauth.reddit.com/api/v1/me.json', {
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
