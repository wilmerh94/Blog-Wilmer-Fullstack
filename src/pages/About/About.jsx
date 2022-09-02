import { AspectRatio, Avatar, Box, Button, Card, CardOverflow, Link, Typography } from '@mui/joy'
import { Collapse } from '@mui/material'
import { useWindowPosition } from 'src/Hooks/useWindowPosition'

// Todo: need to fix this area with mui
// ----------------------------------------------------------------------

export const About = () => {
  const checked = useWindowPosition('header')
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
        mb: 4,
        height: '100vh'
      }}>
      <Collapse in={checked} collapsedSize={100} {...(checked ? { timeout: 1000 } : {})}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            flexDirection: 'row'
          }}>
          <Box sx={{ minHeight: 350 }}>
            <Card
              variant='outlined'
              sx={(theme) => ({
                background: 'rgba(0,0,0,0.5)',
                width: 300,
                gridColumn: 'span 2',
                flexDirection: 'row',
                flexWrap: 'wrap',
                resize: 'horizontal',
                overflow: 'hidden',
                gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
                transition: 'transform 0.3s, border 0.3s',
                '&:hover': {
                  borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                  transform: 'translateY(-2px)'
                },
                '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
              })}>
              <CardOverflow>
                <AspectRatio
                  // minHeight="120px" maxHeight="200px"
                  variant='soft'
                  sx={{
                    flexGrow: 1,
                    display: 'contents',
                    '--AspectRatio-paddingBottom':
                      'clamp(0, (100% - 180px) * 999, min(calc(100% / (16 / 9)), 300px))'
                  }}>
                  <img
                    src='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg'
                    alt='pexel-photo'
                  />
                </AspectRatio>
              </CardOverflow>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  maxWidth: '200px'
                }}>
                <Box sx={{ display: 'flex' }}>
                  <div>
                    <Typography level='h2' sx={{ fontSize: 'md' }} mb={0.5}>
                      <Link
                        href='#container-responsive'
                        overlay
                        underline='none'
                        sx={{
                          color: 'text.tertiary',
                          '&.Mui-focusVisible:after': { outlineOffset: '-4px' }
                        }}>
                        Wilmer Herrera
                      </Link>
                    </Typography>
                    <Typography
                      level='body2'
                      sx={{
                        color: 'text.tertiary'
                      }}>
                      Denver, CO
                    </Typography>
                  </div>
                  <Box sx={{ ml: 'auto', alignSelf: 'flex-start' }}>
                    <Avatar variant='soft' color='neutral'>
                      W
                    </Avatar>
                  </Box>
                </Box>
                <AspectRatio
                  variant='soft'
                  sx={{
                    '--AspectRatio-paddingBottom': 'clamp(0px, (100% - 200px) * 999, 200px)',
                    pointerEvents: 'none'
                  }}>
                  <img
                    alt=''
                    src='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg'
                  />
                </AspectRatio>
              </Box>
              <Typography level='body2' sx={{ color: 'text.tertiary', mt: 1.5, mb: 2 }}>
                I am a web developer, usually working on web applications. My most recent work experience is
                as a freelance web developer creating responsive Web Applications, provided automatic secure
                API to interact with the web/mobile application, payment, data reporting and storage.
              </Typography>
            </Card>
          </Box>
          <Box sx={{ minHeight: 350 }}>
            <Card
              variant='outlined'
              sx={(theme) => ({
                background: 'rgba(0,0,0,0.5)',

                width: 300,
                gridColumn: 'span 2',
                flexDirection: 'row',
                flexWrap: 'wrap',
                resize: 'horizontal',
                overflow: 'hidden',
                gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
                transition: 'transform 0.3s, border 0.3s',
                '&:hover': {
                  borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                  transform: 'translateY(-2px)'
                },
                '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' }
              })}>
              <CardOverflow>
                <AspectRatio
                  variant='soft'
                  sx={{
                    flexGrow: 1,
                    display: 'contents',
                    '--AspectRatio-paddingBottom':
                      'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 500px))'
                  }}>
                  <img
                    src='https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='pexel-photo'
                  />
                </AspectRatio>
              </CardOverflow>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  maxWidth: '200px'
                }}>
                <Box sx={{ display: 'flex' }}>
                  <div>
                    <Typography level='h2' sx={{ fontSize: 'md' }} mb={0.5}>
                      <Link
                        href='#container-responsive'
                        overlay
                        underline='none'
                        sx={{
                          color: 'text.tertiary',
                          '&.Mui-focusVisible:after': { outlineOffset: '-4px' }
                        }}>
                        Wilmer Herrera
                      </Link>
                    </Typography>
                    <Typography
                      level='body2'
                      sx={{
                        color: 'text.tertiary'
                      }}>
                      Denver, CO
                    </Typography>
                  </div>
                  <Box sx={{ ml: 'auto', alignSelf: 'flex-start' }}>
                    <Avatar variant='soft' color='neutral'>
                      W
                    </Avatar>
                  </Box>
                </Box>
                <AspectRatio
                  variant='soft'
                  sx={{
                    '--AspectRatio-paddingBottom': 'clamp(0px, (100% - 200px) * 999, 200px)',
                    pointerEvents: 'none'
                  }}>
                  <img
                    alt=''
                    src='https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </AspectRatio>
              </Box>
              <Typography level='body2' sx={{ color: 'text.tertiary', mt: 1.5, mb: 2 }}>
                I am responsible for writing the overarching cloud web App with GCP to the cloud, running
                scheduled tasks, The firmware allowed it to automatically handle setting up new users and save
                the information on a GCP.
              </Typography>
            </Card>
          </Box>
        </Box>
      </Collapse>
      <Button variant='solid' color='primary' sx={{ ml: 'auto', fontWeight: 600 }}>
        Lets Talk
      </Button>
    </Box>
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
