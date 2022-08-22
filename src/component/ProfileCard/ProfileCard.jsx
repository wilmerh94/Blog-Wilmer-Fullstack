/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './ProfileCard.css'
const defaultData = {
  name: 'Wilmer',
  posts: 'hello',
  isOnline: true,
  bio: 'Web developer',
  location: '',
  technologies: [],
  creationDate: '1/8/2021',
  onViewChange: false
}

export const ProfileCard = () => {
  const [isBioVisible, setIsBioVisible] = useState(true)
  const [data, setData] = useState(defaultData)
  const { name, posts, isOnline, bio, location, technologies, creationDate, onViewChange } = data
  const handleBioVisibility = () => {
    setIsBioVisible(!isBioVisible)
    if (typeof onViewChange === 'function') {
      onViewChange(!isBioVisible)
    }
  }

  return (
    <div className='ProfileCard'>
      <div className='avatar'>
        <h2>{name}</h2>
        <i className='photo' />
        <span>{posts} World</span>
        <i className={`status ${isOnline ? 'online' : 'offline'}`} />
      </div>
      <div className={`details ${isBioVisible ? 'bio' : 'technologies'}`}>
        <h3>Bio</h3>
        <p>{bio !== '' ? bio : 'No bio provided yet'}</p>
        <div>
          <button onClick={handleBioVisibility}>View Skills</button>
          <p className='joined'>Full Stack MERN</p>
          {/* <p className='joined'>Joined: {creationDate}</p> */}
        </div>
        <h3>Technologies</h3>
        {technologies.length > 0 && (
          <ul>
            {technologies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <div>
          <button onClick={handleBioVisibility}>View Bio</button>
          {!!location && <p className='location'>Location: {location}</p>}
        </div>
      </div>
    </div>
  )
}

{
  /* <div className='ProfileCard'>
<div className='avatar'>
  <h2>{name}</h2>
  <i className='photo' />
  <span>{posts} posts</span>
  <i className={`status ${isOnline ? 'online' : 'offline'}`} />
</div>
<div className={`details ${isBioVisible ? 'bio' : 'technologies'}`}>
  {isBioVisible ? (
    <>
      <h3>Bio</h3>
      <p>{bio !== '' ? bio : 'No bio provided yet'}</p>
      <div>
        <button onClick={handleBioVisibility}>View Skills</button>
        <p className='joined'>Joined: {creationDate}</p>
      </div>
    </>
  ) : (
    <>
      <h3>Technologies</h3>
      {technologies.length > 0 && (
        <ul>
          {technologies.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <div>
        <button onClick={handleBioVisibility}>View Bio</button>
        {!!location && <p className='location'>Location: {location}</p>}
      </div>
    </>
  )}
</div>
</div> */
}
