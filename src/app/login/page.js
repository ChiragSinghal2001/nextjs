'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


const login=()=>{
    const router= useRouter();
    const navi=(namm)=>{
        router.push("/login/"+ namm)
    }
    return(
        <div>
            <h1> Login page</h1>
      <Link href='/'>click to home page</Link>
      <button onClick={()=>navi("studentLogin")}>Student Login</button>
      <button onClick={()=>navi("collegeLogin")}>college Login</button>



        </div>
    )
}

export default login;