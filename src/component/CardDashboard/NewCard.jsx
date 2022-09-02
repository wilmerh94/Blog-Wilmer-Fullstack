import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined'
import DevicesIcon from '@mui/icons-material/Devices'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PaidIcon from '@mui/icons-material/Paid'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { Avatar, Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/joy'
// ----------------------------------------------------------------------

const salesData = [
  {
    stats: '245k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUpIcon sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: 'success',
    icon: <AccountCircleOutlined sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Products',
    icon: <DevicesIcon sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$88k',
    color: 'info',
    title: 'Revenue',
    icon: <PaidIcon sx={{ fontSize: '1.75rem' }} />
  }
]
// ----------------------------------------------------------------------

export const NewCard = () => {
  return (
    <Card>
      <Box sx={{ display: 'flex' }}>
        <Typography
          level='h2'
          sx={{
            fontSize: 'md',
            fontWeight: 600,
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }}
          mb={0.5}>
          Total 48.5% growth,<Typography level='body2'> this months😎</Typography>
        </Typography>
        <IconButton
          size='sm'
          aria-label='settings'
          variant='plain'
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
          <MoreVertIcon />
        </IconButton>
      </Box>

      <CardContent>
        <Grid container spacing={[5, 0]}>
          {salesData.map((item, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Box
                key={index}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Avatar
                  variant='rounded'
                  sx={{
                    width: 40,
                    height: 40,
                    boxShadow: 3,
                    color: 'common.white',
                    backgroundColor: `${item.color}.main`
                  }}>
                  {item.icon}
                </Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', mr: 2.5 }}>
                  <Typography level='caption'>{item.title}</Typography>
                  <Typography level='h6'>{item.stats}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
    //   </Card>
  )
}
