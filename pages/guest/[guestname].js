import Link from 'next/link';
import { useRouter } from 'next/router'
import { BsHandbag } from "react-icons/bs";

const Component = () => {
  const router = useRouter()
  const { guestname } = router.query

  const capitalizeRemoveStrip = (str) => {
    if (!str) return;
    const string = str.split('-');
    const uppercase = string.map(element => (
      element.charAt(0).toUpperCase() + element.slice(1)
    ));
    return uppercase.map(e => `${e} `);
  }

  return (
    <main>
      <section>
        <div className="mainpage">
          <p>wedding of</p>
          <p>Ahmad Najib Fahmi</p>
          <p>{'('}Najib{')'}</p>
          <p>{'&'}</p>
          <p>Selvia Apriyani</p>
          <p>{'('}Via{')'}</p>
          <p>You are invited to our wedding</p>
          <p>Kepada Yth.</p>
          <p>{capitalizeRemoveStrip(guestname)}</p>
          <p>di Tempat</p>
          <Link href='/undangan'>
            <div className='invitbox'>
              <div><BsHandbag /></div>
              <div>Buka Undangan</div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Component;