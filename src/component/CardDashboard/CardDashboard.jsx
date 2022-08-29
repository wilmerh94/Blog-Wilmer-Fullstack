import { Box } from '@mui/material'

export const CardDashboard = () => {
  return (
    <Box>
      {/* Two cards with visits and another with Revenue Breakdown */}
      <Box>Visits Today/Revenue Breakdown(header)</Box>
      <Box>
        Number graph(Sub)
        <h4>Details(Caption)</h4>
        <div>Visit and number</div>
        <div>Sales and %</div>
      </Box>
      {/* Daily sales 1 card */}
      <Box>
        Daily Line Chart
        {/*  after click daily sales One large Card with graph and Daily Information */}
        <Box>Daily Line Chart</Box>
      </Box>
      {/* Total users and total Profit */}
      {/* Total users by device   */}
      {/* Inventory Status  */}
      {/* Orders to complete   */}
    </Box>
  )
}
