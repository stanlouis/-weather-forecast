import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';
import _ from 'lodash';

const average = data => _.round(_.mean(data));

const Chart = ({ data, color }) => {
  return (
    <div>
      <Sparklines data={data} svgWidth={180} svgHeight={120}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)}</div>
    </div>
  );
};

export default Chart;
