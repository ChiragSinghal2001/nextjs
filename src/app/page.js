'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router=useRouter();
  const navigate=(pagename)=>{
    router.push(pagename)
  }
  return (
    <main className={styles.main}>
      <h1>hgjgkv </h1>
      <Link href='/login'>click to login page</Link>
      <Link href='/about'>click to about page</Link>
      <button onClick={()=>navigate("/login")}>Go to login page</button>
      <button onClick={()=>navigate("/about")}>Go to about page</button>

    </main>
  )
}
