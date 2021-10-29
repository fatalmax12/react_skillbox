import React from "react";
import { ProgressPlugin } from "webpack";

function NotStandartLink(props: any) {
  // const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   props.onClick();
  // }

  return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a> //Композиция
  )
}


function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  }
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  }
}
