import { AspectRatio, Card, CardOverflow, Typography } from '@mui/joy'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { projects } from './data'

export const CardAbout = () => {
  // const checked = useWindowPosition('header')

  return (
    <Grid container spacing={{ xs: 2, md: 4, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
      {/* <Collapse in={checked} collapsedSize={100} {...(checked ? { timeout: 1000 } : {})}> */}
      {projects.map((project) => (
        <Grid key={project.id} xs={2} sm={4} md={6} lg={8}>
          <Card
            variant='outlined'
            sx={(theme) => ({
              background: 'rgba(0,0,0,0.5)',
              width: 300,
              transition: 'transform 0.3s, border 0.3s',
              '&:hover': {
                borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                transform: 'translateY(-2px)'
              }
            })}>
            <CardOverflow>
              <AspectRatio
                // minHeight="120px" maxHeight="200px"
                variant='soft'
                ratio='2'>
                <img src={project.image} alt='pexel-photo' />
              </AspectRatio>
            </CardOverflow>
            <CardOverflow
              variant='soft'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1.5,
                py: 1.5,
                px: 'var(--Card-padding)',
                background: 'rgba(0,0,0,0.5)'
              }}>
              <Typography level='h4' sx={{ color: 'text.tertiary', fontSize: 'md', mt: 2 }}>
                {project.title}
              </Typography>
              <Typography level='body3' sx={{ color: 'text.tertiary', fontSize: 'md' }}>
                {project.description}
              </Typography>
            </CardOverflow>
          </Card>
        </Grid>
      ))}
      {/* </Collapse> */}
    </Grid>
  )
}
