import React from 'react'
import { Box, Typography, Stack } from '@pankod/refine-mui';
import ReactApexChart from 'react-apexcharts';

import { ArrowCircleUpRounded } from '@mui/icons-material';
import { TotalRevenueOptions, TotalRevenueSeries } from './cart.config';

export const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      
      id="chart"
      display={"flex"}
      flexDirection={"column"}
      borderRadius={"15px"}
      sx={{bgcolor: (theme) => theme.palette.secondary.main}}
    >
      <Typography fontSize={18} fontWeight={600} color={"#11142d"} >Total Revenue</Typography>

      <Stack my={"20px"} direction={"row"} gap={4} flex={"wrap"}>
        <Typography fontSize={28} fontWeight={700} color={"#11142d"}>$236.536</Typography>
        
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <ArrowCircleUpRounded sx={{
            fontSize: 25,
            color: "#475be8"
          }} />

          <Stack>
            <Typography fontSize={15} color={"#475be8"}>0.8%</Typography>
            <Typography fontSize={12} color={"#808191"}>The last month</Typography>

          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart 
        series={TotalRevenueSeries}
        type='bar'
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  )
}