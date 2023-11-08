'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation'

const about=()=>{
    const router=useRouter();
    return(
        <div>
            <h1>About us</h1>
            <Link href="/about/aboutCollege">go to aboutCollege</Link>
            <button onClick={()=>router.push("/about/aboutStudent")}>go to about Student</button>
        </div>
    )
}

export default about;