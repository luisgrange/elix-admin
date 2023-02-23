import React from 'react'
import { Box, Typography, Stack } from '@pankod/refine-mui';
import { Props } from 'interfaces/PieChartProps';
import ReactApexChart from 'react-apexcharts';

export const PieChart = ({title, value, series, colors} : Props) => {
  return (
    <Box
      id="chart"
      flex={1}
      display={'flex'}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pl={3.5}
      py={2}
      gap={2}
      borderRadius={"15px"}
      minHeight={"110px"}
      width={"fit-content"}
      sx={{
        bgcolor: (theme) => theme.palette.secondary.main
      }}
    >
      <Stack direction={'column'}>
        <Typography fontSize={14} color={'#808191'}>{title}</Typography>
        <Typography fontSize={24} fontWeight={700} mt={1}>{value}</Typography>
      </Stack>

      <ReactApexChart 
        options={{
          chart: {type: 'donut'},
          colors,
          legend: {show: false},
          dataLabels: {enabled: false},
        }}
        series={series}
        type='donut'
        width='120px'
      />
    </Box>
  )
}
