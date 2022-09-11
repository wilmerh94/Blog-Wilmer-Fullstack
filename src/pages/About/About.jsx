import { Box, Button, Typography } from '@mui/joy'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { CardAbout } from 'src/component/CardAbout/CardAbout'

// Todo: need to fix this area with mui
// ----------------------------------------------------------------------

export const About = () => {
  return (
    <Grid
      container
      spacing={3}
      direction='column'
      justifyContent='center'
      alignItems='center'
      columnSpacing={5}
      sx={{
        mb: 1,
        mt: 2,
        background:
          'linear-gradient(to bottom,rgba(0, 0, 0, 0.45) 50%,rgba(0, 0, 0, 0.15) 100%, transparent) no-repeat scroll 0 0 ',
        backdropFilter: 'blur(0.5px)'
      }}>
      <Grid xs>
        <Typography
          level='h4'
          sx={{
            mx: 1,
            px: 4,
            py: 0.2,
            my: 1,
            display: 'flex',
            alignItems: 'start',
            color: 'text.terniary',
            textShadow: '5px 0px 6px rgba(255,255,255, 0.75)',
            borderRadius: '3rem',
            minWidth: '100vw',
            height: 40
          }}>
          About Me
        </Typography>
      </Grid>
      <Grid xs={11}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap'
          }}>
          <Typography level='h5' sx={{ fontSize: 'md', mt: 2, color: 'text.tertiary' }}>
            My name is Wilmer, I am a Full Stack React JS Developer
          </Typography>
          <Typography
            level='h6'
            sx={{
              color: 'primary.50'
            }}
            mb={0.5}>
            This is perfect for showing off my awesome projects I am a Full-Stack Web Developer specializing
            in React front-ends, NodeJS and GCP backends. Keep scrolling to see some of my projects or
            checkout my resume here
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <CardAbout />
        </Box>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Grid xs>
          <Button variant='solid' color='primary' sx={{ ml: 'auto', fontWeight: 600 }}>
            Lets Talk
          </Button>
        </Grid>
      </Box>
    </Grid>
  )
}
{
  /* <Typography level='h2' sx={{ fontSize: 'md', mt: 2 }}>
            What i do
          </Typography>
          <Typography level='body2' sx={{ mt: 0.5, mb: 2 }}>
            I am a web developer, usually working on web applications. My most recent work experience is as a
            freelance web developer creating responsive Web Applications, provided automatic secure API to
            interact with the web/mobile application, payment, data reporting and storage. I am responsible
            for writing the overarching cloud web App with GCP to the cloud, running scheduled tasks, The
            firmware allowed it to automatically handle setting up new users and save the information on a
            GCP.{' '}
          </Typography>
          <CardOverflow
            variant='soft'
            sx={{
              display: 'flex',
              gap: 1.5,
              mt: 'auto',
              py: 1.5,
              px: 'var(--Card-padding)',
              borderTop: '1px solid',
              borderColor: 'neutral.outlinedBorder',
              bgcolor: 'background.level1'
            }}>
            <Typography level='body3' sx={{ fontWeight: 'md', color: 'text.secondary' }}>
              Denver,CO
            </Typography>
            <Box sx={{ width: 2, bgcolor: 'divider' }} />
            <Typography level='body3' sx={{ fontWeight: 'md', color: 'text.secondary' }}>
              ,
            </Typography>
          </CardOverflow>
        </Card>

        <p>Get to know me</p>
        <h1>About Me </h1>
        <h1>I am Wilmer Herrera, a programmer from Denver,CO</h1>
        <p>Reach me here:</p>
        <h1>what i do</h1>
        <p>I have a variety technical skills which include</p>
      </Box>
      <div className='grid'>
        <ul>
          <li>
            <h2>Software Development</h2>
            <p>I am a expert in front end development and have a strong working knowledge of the back-end</p>
            <p>Web Front-End: Base: React, Data Management: Redux, Layout: MaterialUI</p>
            <p>
              I typically develop front-ends as a single page app using a React base. I am a huge fan of the
              Redux pattern of unidirectional data flow. It introduces its own headaches and overhead, but I
              find it solves more problems than it creates. For layouts and components, I have found that
              Material-UI is one of the best libraries out there as far as supported components, customable,
              and end performance. I find Material-UI usually offers a great starting point that gets a
              project quickly kicked off.
            </p>
          </li>
          <li>
            <h2>Web Backend</h2>
            <p>Base: NodeJS, GCP. Data Management: FireStore, NoSQL</p>
            <p>
              Most recently I have been using GCP with NoSQL as a backend for single page apps that I write. A
              lot of GCP power comes from utilities for working with forms, views, and templates. I have
              lately found Firebase and Firestore to be a great replacement that allows rapid development.
            </p>
          </li>
          <li>
            <h2>UI/UX</h2>
            <p>
              I understand how to craft custom web experiences that deliver a message to a target audience
            </p>
          </li>
          <li>
            <h2>Responsive design</h2>
            <p>Responsive user friendly experience for Android, IOS and desk</p>
          </li>
        </ul>
      </div>
      <div>
        <h1>Skills</h1>
        <p>Front-end to Back-end Development</p>
      </div>
      <div>
        <h1>Projects Examples</h1>
        <p>Github</p>
      </div>
      <div>
        <h1>Software & Tools...</h1>
        <p>Multiple Libraries, CMS, GIT, AWS, APIs, E-commerce, Adobe CS, Google analytics, SEO</p>
      </div>
      Software Engineer with 6 years of experience utilizing advanced technical skills, innovative designs,
      and team synchronicity to craft unique and robust software solutions.
    </div> */
}
