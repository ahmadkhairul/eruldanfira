import '../styles/globals.scss';
import '../styles/savethedate.scss';
import '../styles/doadanucapan.scss';
import '../styles/mempelai.scss';
import '../styles/gallery.scss';
import '../styles/doadanucapandariundangan.scss'
import '../styles/ourlovestory.scss';
import '../styles/detailacara.scss';
import '../styles/weddinggift.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {[...Array(50)].map((e, i) => (<div className='snowflake' key={i} />))}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp