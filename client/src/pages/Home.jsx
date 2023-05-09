import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";
import { EarningsCard } from "../components/HomePageComponents/Cards/EarningsCard";
import { WastingCard } from "../components/HomePageComponents/Cards/WastingCards";
import { SalesCard } from "../components/HomePageComponents/Cards/SalesCard";
import { ProductSelledCard } from "../components/HomePageComponents/Cards/ProductsSelledCard";
import { LineChart } from "../components/HomePageComponents/Charts/LineChart";
import { LastOperationsTable } from "../components/HomePageComponents/Tables/LastOperationsTable";
export const Home = () => {
  return (
    <Box>
      <Typography variant="h4" marginLeft="5%">
        Home
      </Typography>
      <Box marginTop="5px" display="flex" justifyContent="space-between">
        <EarningsCard />
        <WastingCard />
        <SalesCard />
        <ProductSelledCard />
      </Box>
      <Divider sx={{ mt: "10px" }}>
        <Chip label="Ultimas Ventas" />
      </Divider>
      <Box display="flex" justifyContent="space-between">
        <LineChart />
        <LastOperationsTable />
      </Box>
    </Box>
  );
};
