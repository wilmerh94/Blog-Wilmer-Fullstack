import { Card, Checkbox, Container, Grid, Stack, Typography } from '@mui/joy'
import { CardHeader, FormControlLabel } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
// ----------------------------------------------------------------------

const list = [
  { id: '1', label: 'Create FireStone Logo' },
  { id: '2', label: 'Add SCSS and JS files if required' },
  { id: '3', label: 'Stakeholder Meeting' },
  { id: '4', label: 'Scoping & Estimations' },
  { id: '5', label: 'Sprint Showcase' }
]
// ----------------------------------------------------------------------

export const CardDashboard = () => {
  const { control } = useForm({
    defaultValues: {
      taskCompleted: ['2']
    }
  })

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              py: 5,
              boxShadow: 0,
              textAlign: 'center',
              color: 'palette.primary.dark',
              bgcolor: 'var(--mui-palette-primary-100)'
            }}>
            <Typography level='body2'>714000</Typography>

            <Typography level='h6' sx={{ opacity: 0.72 }}>
              Weekly Sales
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              py: 5,
              boxShadow: 0,
              textAlign: 'center',
              color: 'info.dark',
              bgcolor: 'info.light'
            }}>
            <Typography level='body2'>1352831</Typography>

            <Typography level='h6' sx={{ opacity: 0.72 }}>
              New Users
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Card>
        <CardHeader title={'hello'} subheader={'world'} />
        <Controller
          name='taskCompleted'
          control={control}
          render={() => {
            // const onSelected = (task) =>
            //   field.value.includes(task)
            //     ? field.value.filter((value) => value !== task)
            //     : [...field.value, task]
            return (
              <>
                {list.map((task, index) => (
                  <Stack
                    key={index + 1}
                    direction='row'
                    sx={{
                      px: 2,
                      py: 0.75
                      // ...(checked && {
                      //   color: 'text.disabled',
                      //   textDecoration: 'line-through'
                      // })
                    }}>
                    <FormControlLabel
                      control={
                        <Checkbox

                        // checked={ checked }
                        // onChange={onChange}
                        />
                      }
                      label={task.label}
                      sx={{ flexGrow: 1, m: 0 }}
                    />
                  </Stack>
                ))}
              </>
            )
          }}
        />
      </Card>
    </Container>
  )
}

/**      <Box>

 *       <Box>Visits Today/Revenue Breakdown(header)</Box>
      <Box>
        Number graph(Sub)
        <h4>Details(Caption)</h4>
        <div>Visit and number</div>
        <div>Sales and %</div>
      </Box>
      {/* Daily sales 1 card */
// <Box>
// Daily Line Chart
{
  /*  after click daily sales One large Card with graph and Daily Information */
}
// <Box>Daily Line Chart</Box>
// </Box>
{
  /* Total users and total Profit */
}
{
  /* Total users by device   */
}
{
  /* Inventory Status  */
}
{
  /* Orders to complete   */
}
// </Box>*/
