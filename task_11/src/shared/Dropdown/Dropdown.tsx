import React, { Children, useRef } from "react";
import styles from "./dropdown.css";
import ReactDOM from "react-dom";

interface IDropdownProps {
  button: React.ReactNode;
  children?: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  const node = document.querySelector("#dropdown_root");
  if (!node) return null;

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen]
  );

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.container} ref={ref}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>,
    node
  );
}
