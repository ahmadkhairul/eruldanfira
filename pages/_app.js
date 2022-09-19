import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {[...Array(50)].map((e, i) => (<div className='snowflake' key={i} />))}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp