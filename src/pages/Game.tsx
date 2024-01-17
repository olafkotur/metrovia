import React, { ReactElement } from 'react';
import { LondonMap } from '../maps/London';
import { LONDON_LINES } from '../maps/London/lines';
import { LONDON_STATIONS } from '../maps/London/stations';

export const Game = (): ReactElement => {
  return (
    <div style={{ width: '120vw', height: '120vh', overflow: 'scroll' }}>
      <LondonMap lines={LONDON_LINES} stations={LONDON_STATIONS} />
    </div>
  );
};
