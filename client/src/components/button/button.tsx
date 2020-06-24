import React from 'react';

export type Props = {
  size: string;
  text: string;
}

export function Button({ text, size }: Props): React.ReactElement {
  return <button className={size}>{text}</button>;
}
