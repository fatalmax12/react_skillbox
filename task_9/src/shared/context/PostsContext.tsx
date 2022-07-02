import React from 'react';
import usePostsData from '../../hooks/usePostsData';

interface IPostContextData {
  after?: string;
  before?: string;
}


export const postContext = React.createContext<IPostContextData>({});

export function PostContextProvider({ children } : { children: React.ReactNode }) {
  const [data] = usePostsData();

  return <postContext.Provider value={data}>
      {children}
    </postContext.Provider>

}
