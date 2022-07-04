import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IPostsData {
  data: Array<any>;
}

function usePostsData() {
  const [data, setData] = useState<IPostsData>({ data: [] });
  const token = useContext(tokenContext);

  useEffect(() => {
    if (token && token.length > 0 && token != 'undefined') {
      axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: {
          Authorization: `bearer ${token}`,
        }
      })
        .then((response) => {
          const postData = response.data.data.children;
          setData({ data: postData });
        })
        .catch(console.log)
    }
  }, [token]);

  return [data];
}

export default usePostsData;
