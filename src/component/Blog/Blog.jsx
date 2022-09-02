/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { AspectRatio, Box, Card, CardOverflow, Typography } from '@mui/joy'
import { useEffect, useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogData } from 'src/redux/userDuck'
import { format } from 'date-fns'
import { Loading } from '../Loading/Loading'
import { SearchControl } from './SearchControl'

export const Blog = () => {
  const id = useId()
  const { blogData: blogs, loading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(blogData())
  }, [])

  return (
    <Box
      sx={{
        marginTop: 9,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      color='white'>
      <SearchControl />
      {loading ? <Loading /> : ''}
      <Typography sx={{ color: 'white' }} level='h3'>
        Blogs
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,2fr)',
          gap: 5,
          padding: '10px 0',
          m: 10,
          mt: 2
        }}>
        {blogs?.articles?.map((blog, index) => {
          const date = format(new Date(blog.publishedAt), 'dd MMM yyyy HH:mm')
          return (
            <Card variant='outlined' sx={{ minWidth: 250 }} key={`${id}-blog${index}`}>
              <CardOverflow>
                <AspectRatio ratio='2'>
                  <img src={blog.image} alt={blog.source.name} />
                </AspectRatio>
              </CardOverflow>
              <Typography level='h2' sx={{ fontSize: 'md', mt: 2 }}>
                {blog.title}
              </Typography>
              <Typography level='body2' sx={{ mt: 0.5, mb: 2 }}>
                {blog.description}
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
                  {blog.source.name}
                </Typography>
                <Box sx={{ width: 2, bgcolor: 'divider' }} />
                <Typography level='body3' sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                  {date}
                </Typography>
              </CardOverflow>
            </Card>
          )
        })}

        {blogs?.totalArticles == 0 && (
          <h1 className='no__blogs'>
            No blogs available 😞. Search something else to read blogs on the greatest platform.
          </h1>
        )}
      </Box>
    </Box>
  )
}
