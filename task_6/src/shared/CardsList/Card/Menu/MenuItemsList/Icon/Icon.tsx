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
  const icons: icons = {
    'CommentIcon': <CommentIcon width={size + ''} height={size + ''} />,
    'ShareIcon': <ShareIcon width={size + ''} height={size + ''} />,
    'BlockIcon': <BlockIcon width={size + ''} height={size + ''} />,
    'LoadIcon': <LoadIcon width={size + ''} height={size + ''} />,
    'WarningIcon': <WarningIcon width={size + ''} height={size + ''} />,
  };

  const Icon = icons[name];

  return Icon;
}

export default Icon;
