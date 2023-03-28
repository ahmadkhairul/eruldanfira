import Link from 'next/link';
import { useRouter } from 'next/router'
import { BsHandbag } from "react-icons/bs";

const Component = () => {
  const router = useRouter()
  const { guestname } = router.query

  const capitalizeRemoveStrip = (str) => {
    if (!str) return;
    let string = str.replace(/-/g, ' ');
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <main>
      <section>
        <div className="bg">
          <img src="/static/images/bg-1.gif" alt="" />
        </div>
        <div className="mainpage">
          <p>wedding of</p>
          <p>Ahmad Khairul Anwar, ST.</p>
          <p>{'('}Khairul{')'}</p>
          <p>{'&'}</p>
          <p>Shafira Nur Zainal Abidin, S.Pd.</p>
          <p>{'('}Shafira{')'}</p>
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