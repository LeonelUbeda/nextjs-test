import Link from "next/link"
import styled from 'styled-components'




const Header = () => {
    return (
        <div className="h-10 text-white" style={{backgroundColor: '#009DDC'}}>
            <Link href="/">
                <a>
                    <h3>AMIMIR</h3>
                </a>
            </Link>
        </div>
    )
}


export default Header