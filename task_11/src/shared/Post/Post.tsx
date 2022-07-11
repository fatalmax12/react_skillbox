import React, { useRef } from "react";
import styles from "./post.css";
import ReactDOM from "react-dom";
import { Comments } from "../Comments";
import { CommentFormContainer } from "../CommentFormContainer";

interface IPost {
  onClose?: () => void;
}

function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        props.onClose?.();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const node = document.querySelector("#modal_root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <div className={styles.close}>&times;</div>
      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
        consequuntur at commodi praesentium illum, fugiat explicabo eveniet quos
        dolorem nam asperiores voluptate beatae consequatur. Tenetur magni
        tempora iste commodi laborum.
      </div>
      <CommentFormContainer />
      <br/>
      <Comments />
    </div>,
    node
  );
}

export default Post;
