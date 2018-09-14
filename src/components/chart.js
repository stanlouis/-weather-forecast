import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const Chart = ({ data, color }) => {
  return (
    <div>
      <Sparklines data={data} svgWidth={180} svgHeight={120}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  );
};

export default Chart;
