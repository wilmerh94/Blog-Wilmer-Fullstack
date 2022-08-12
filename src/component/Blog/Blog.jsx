import { useEffect, useId, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectUserInput, setBlogData } from 'src/features/userSlice'
import './Blog.css'
export const Blog = () => {
  const id = useId()

  const searchInput = useSelector(selectUserInput)
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=5b690c9a6983114519ab5e366c864743`
  const dispatch = useDispatch()

  const [blogs, setBlogs] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data))
        setBlogs(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [searchInput])

  return (
    <div className='blog__page'>
      <h1 className='blog__page__header'>Blogs</h1>
      {loading ? <h1 className='loading'>Loading...</h1> : ''}
      <div className='blogs'>
        {blogs?.articles?.map((blog) => (
          <a
            className='blog'
            target='_blank'
            href={blog.url}
            rel='noreferrer'
            key={`${id}-blog`}>
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
            No blogs available 😞. Search something else to read blogs on the greatest
            platform.
          </h1>
        )}
      </div>
    </div>
  )
}