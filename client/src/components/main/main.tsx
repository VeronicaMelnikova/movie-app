import * as React from 'react';
import { Button } from '../button/button';

export default function PageMain(): React.ReactElement  {
  return (
    <main>
      <input placeholder="Quentin Tarantino" />
      <Button text="Search" size="big" />
    </main>
  );
}
