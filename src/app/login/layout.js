import Link from "next/link"
import './login.css'

export default function Layout({children}){
    return(
        <div>
            <ul className="login-menu">
                <li className="login-menu-li">
                    <Link href="/login"> main login </Link>
                </li>
                <li className="login-menu-li">
                    <Link href="/login/studentLogin"> student login</Link>
                </li>
                <li className="login-menu-li">
                    <Link href="/login/collegeLogin">college login</Link>
                </li>
            </ul>
            {
                children
            }
        </div>
    )
} 