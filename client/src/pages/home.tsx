import React from 'react'
import {useList} from '@pankod/refine-core';
import { 
  PieChart, 
  PropertyReferrals, 
  TotalRevenue, 
  PropertyCard, 
  TopAgent } from 'components';

import { Box, Typography, Stack } from '@pankod/refine-mui';

export const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={"#11142d"}>Dashboard</Typography>
    
      <Box mt={"20px"} display={"flex"} flexWrap={"wrap"} gap={4}>
        <PieChart 
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#345995", "#03CEA4"]}
        />

        <PieChart 
          title="Properties for Rent"
          value={554}
          series={[60, 45]}
          colors={["#03CEA4", "#FB4D3D"]}
        />

        <PieChart 
          title="Total Customers"
          value={5684}
          series={[75, 25]}
          colors={["#5DD9C1", "#E5C3D1"]}
        />

        <PieChart 
          title="Properties for Cities"
          value={589}
          series={[75, 25]}
          colors={["#E5C3D1", "#550527"]}
        />
      </Box>

      <Stack mt={"25px"} width={"100%"} direction={{xs: "column", lg: "row"}} gap={2}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}
