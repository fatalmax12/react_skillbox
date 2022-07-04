import React from "react";
import styles from "./title.css";
import Post from "../../../../Post/Post";

interface ITitleProps {
  title: string;
}

function Title({ title }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = React.useState(false);

  return (
    <>
      <h1
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        {title}
      </h1>
      {isModalOpened && <Post onClose={() => { setIsModalOpened(false); }}/>}
    </>
  );
}

export default Title;
