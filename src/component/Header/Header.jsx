import { CTA } from './CTA'
import ME from '../../assets/mesvg.svg'
export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'rgba(228, 227, 227, 0.944)',
        maxHeight: '80%'
      }}
    >
      <CTA />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            ' linear-gradient(to bottom,rgba(59, 113, 151, 0.8) 50%,rgba(59, 113, 151, 0.4) 75%, transparent) repeat scroll 0 0 ',
          // transparent) no-repeat

          backgroundSize: '100% 90%',
          width: '17rem',
          height: '19rem',
          left: 'calc(50% -10rem)',
          marginTop: '1rem',
          borderRadius: '12rem 12rem 0 0',
          overflow: 'hidden',
          padding: '0 0.5rem 0 0.5rem'
        }}
      >
        <img
          src={ME}
          alt=''
          style={{
            height: '23rem',
            width: '23rem'
          }}
        />
      </div>
      {/* scroll down */}
      <h5 style={{ fontSize: '20px', margin: 0 }}>Hello I am </h5>
      <h1
        style={{
          fontSize: '30px',
          width: '80%',
          lineHeight: '1em',
          margin: '10px auto',
          marginTop: '0',
          fontWeight: '900',
          color: 'rgba(228, 227, 227, 0.944)',
          textDecoration: 'underline'
        }}
      >
        Wilmer Herrera
      </h1>
      <h5 style={{ fontSize: '20px', margin: 0 }}>
        Full Stack Developer.
        <div>Welcome to my website!</div>
        <p
          style={{
            padding: '15px 0',
            lineHeight: '1.5em',
            width: '50%',
            margin: 'auto',
            fontSize: '15px',
            color: 'rgb(238, 238, 238)',
            fontWeight: '550'
          }}
        >
          Your success will be largely determined by your ability to concentrate single mindedly on one thing
          at a time
        </p>
      </h5>
      {/* <p>
          This is perfect for showing off my awesome projects I am a Full-Stack Web Developer
          specializing in React front-ends, NodeJS and GCP backends. Keep scrolling to see some of
          my projects or checkout my resume here
        </p> */}

      {/* <a href='#contact'>Scroll Down</a> */}
    </div>
  )
}

// background:
// ' linear-gradient(to bottom,rgba(59, 113, 151, 0.8) , transparent) transparent) no-repeat ',
