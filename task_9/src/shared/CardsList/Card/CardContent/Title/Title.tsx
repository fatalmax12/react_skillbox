import React from "react";
import styles from "./title.css";
import Post from "../../../../Post/Post";

function Title() {
  const [isModalOpened, setIsModalOpened] = React.useState(false);

  return (
    <>
      <h1
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        Для современного мира дальнейшее развитие всех систем
      </h1>
      {isModalOpened && <Post onClose={() => { setIsModalOpened(false); }}/>}
    </>
  );
}

export default Title;
