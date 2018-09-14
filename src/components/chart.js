import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = ({ data, color }) => {
  return (
    <div>
      <Sparklines data={data} width={180} height={120}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>
  );
};

export default Chart;
