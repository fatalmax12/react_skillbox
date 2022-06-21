import React from "react";
import {
  CommentIcon,
  BlockIcon,
  ShareIcon,
  LoadIcon,
  WarningIcon,
} from "../../../../../icons";

interface IIconProps {
  name: string;
  size: number;
}

function Icon({ name, size }: IIconProps) {
  let component = null;

  switch (name) {
    case "CommentIcon":
      component = <CommentIcon width={size + ''} height={size + ''} />;
      break;
    case "ShareIcon":
      component = <ShareIcon width={size + ''} height={size + ''} />;
      break;
    case "BlockIcon":
      component = <BlockIcon width={size + ''} height={size + ''} />;
      break;
    case "LoadIcon":
      component =  <LoadIcon width={size + ''} height={size + ''} />;
      break;
    case "WarningIcon":
      component =  <WarningIcon width={size + ''} height={size + ''} />;
      break;
  }

  return component;
}

export default Icon;
