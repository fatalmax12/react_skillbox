import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IPostsData {
  after?: string;
  before?: string;
}

function usePostsData() {
  const [data, setData] = useState<IPostsData>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
      .then((response) => {
        const postData = response.data.data;
        setData({ after: postData.after, before: postData.before });
      })
      .catch(console.log)
  }, [token]);

  return [data];
}

export default usePostsData;
