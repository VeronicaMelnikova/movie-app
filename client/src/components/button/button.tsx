import React from "react";

export interface Props {size: string; text: string};

export function Button({text,size}: Props) {
  return <button className={size}>{text}</button>;
}

