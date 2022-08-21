import { useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogData } from 'src/redux/userDuck'
import { Loading } from '../Loading/Loading'
import './Blog.css'
export const Blog = () => {
  const id = useId()

  const { blogData: blogs, loading } = useSelector((store) => store.user)

  const dispatch = useDispatch()
  dispatch(blogData())

  return (
    <div className='blog__page'>
      <h1 className='blog__page__header'>Blogs</h1>
      {loading ? <Loading /> : ''}
      <div className='blogs'>
        {blogs?.articles?.map((blog, index) => (
          <a
            className='blog'
            target='_blank'
            href={blog.url}
            rel='noreferrer'
            key={`${id}-blog${index}`}>
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
    </div>
  )
}
