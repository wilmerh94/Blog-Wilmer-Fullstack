import { Toolbar, Typography, Paper, Button, Box } from '@mui/material'

export const Checkout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <Box
        sx={{
          margin: '10px',
          width: '750px',
          minHeight: 2,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center'
        }}
        align='center'
      >
        <Paper position='absolute' color='default'>
          <Toolbar>
            <Typography variant='h6' color='inherit' noWrap>
              Company name
            </Typography>
          </Toolbar>
        </Paper>
        <main style={{ width: 'auto', marginLeft: '5px', marginRight: '5px' }}>
          <Paper sx={{ mt: 3, mb: 3, p: 2 }}>
            <Typography component='h1' variant='h4' align='center'>
              Checkout
            </Typography>
            {/* <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
            <Typography variant='h5' gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant='subtitle1'>
              Your order number is #2001539. We have emailed your order confirmation, and will send you an
              update when your order has shipped.
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                mt: '3',
                ml: '3'
              }}
            >
              <Button sx={{ display: 'flex', justifyContent: 'flex-end', mt: '3', ml: '3' }}>Back</Button>
              <Button
                sx={{ display: 'flex', justifyContent: 'flex-end', mt: '3', ml: '3' }}
                variant='contained'
                color='primary'
              >
                Next/Place Order
              </Button>
            </div>
          </Paper>
        </main>
      </Box>
    </Box>
  )
}
