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

type icons = {
  [key: string]: JSX.Element;
}

function Icon({ name, size }: IIconProps) {
  let sizeValue: string = size + '';

  const icons: icons = {
    'CommentIcon': <CommentIcon width={sizeValue} height={sizeValue} />,
    'ShareIcon': <ShareIcon width={sizeValue} height={sizeValue} />,
    'BlockIcon': <BlockIcon width={sizeValue} height={sizeValue} />,
    'LoadIcon': <LoadIcon width={sizeValue} height={sizeValue} />,
    'WarningIcon': <WarningIcon width={sizeValue} height={sizeValue} />,
  };

  const Icon = icons[name];

  return Icon;
}

export default Icon;
