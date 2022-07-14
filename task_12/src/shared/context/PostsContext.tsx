import React from 'react';
import usePostsData from '../../hooks/usePostsData';

interface IPostContextData {
  data: Array<any>;
}


export const postContext = React.createContext<IPostContextData>([] as never);

export function PostContextProvider({ children } : { children: React.ReactNode }) {
  const [data] = usePostsData();
  return <postContext.Provider value={data}>
      {children}
    </postContext.Provider>

}
