import { Typography, Box } from '@mui/material'
import { useEffect, useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogData } from 'src/redux/userDuck'
import { Loading } from '../Loading/Loading'
import { SearchControl } from '../SearchControl'
import './Blog.css'
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
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      color='white'>
      <Typography component='h1' variant='h3'>
        Blogs
      </Typography>

      <SearchControl />
      {loading ? <Loading /> : ''}
      <div className='blogs'>
        {blogs?.articles?.map((blog, index) => (
          <a className='blog' target='_blank' href={blog.url} rel='noreferrer' key={`${id}-blog${index}`}>
            <img src={blog.image} />
            <div>
              <h3 className='sourceName'>
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}

        {blogs?.totalArticles == 0 && (
          <h1 className='no__blogs'>
            No blogs available 😞. Search something else to read blogs on the greatest platform.
          </h1>
        )}
      </div>
    </Box>
  )
}
