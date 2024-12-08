/* eslint-disable react/prop-types */
import { Box, Divider, Stack, Typography } from '@mui/material';
import DxPrimaryTypography from '../ui/DxPrimaryTypography';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

const CustomTooltip = ({ payload, active, label }) => {
  console.log(payload);
  if (active && payload && payload.length)
    return (
      <Stack
        sx={{
          background: '#FFF',
          padding: '0.5rem 2rem',
          borderRadius: '5px',
          outline: '1px solid #EBEFF0',
          alignItems: 'start',
          justifyContent: 'start',
        }}
      >
        <DxPrimaryTypography>{capitalizeFirstLetter(label)}</DxPrimaryTypography>
        <Divider />
        {payload.map((item, index) => (
          <Stack key={index} sx={{ flexDirection: 'row', gap: '1rem' }}>
            <span>{capitalizeFirstLetter(item.dataKey)}</span>
            <span>{item.value}</span>
          </Stack>
        ))}
      </Stack>
    );
};

const DoubleBarChart = ({
  graphData,
  xAxisDataKey,
  barLeftDataKey,
  barRightDataKey,
  barLeftFillColor = '#8884d8',
  barLeftActiveColor = '#6053a8',
  barRightFillColor = '#82ca9d',
  barRightActiveColor = '#5a9c6f',
  legendIconType = 'circle',
  top = 20,
  right = -20,
  left = -30,
  bottom = 5,
  fontSize = '0.7rem',
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={graphData}
        barSize={25}
        margin={{
          top: top,
          right: right,
          left: left,
          bottom: bottom,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} style={{ fontSize: `${fontSize}` }} />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke={barLeftFillColor}
          style={{ fontSize: `${fontSize}` }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke={barRightFillColor}
          style={{ fontSize: `${fontSize}` }}
        />
        <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
        <Legend iconType={legendIconType} />
        <Bar
          dataKey={barLeftDataKey}
          yAxisId="left"
          fill={barLeftFillColor}
          radius={[50, 50, 0, 0]}
          activeBar={{ fill: barLeftActiveColor }}
        />
        <Bar
          dataKey={barRightDataKey}
          yAxisId="right"
          fill={barRightFillColor}
          radius={[50, 50, 0, 0]}
          activeBar={{ fill: barRightActiveColor }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DoubleBarChart;
