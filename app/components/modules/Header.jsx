import Link from "next/link"
import { getSections } from '../../api/api'

const sections = [
    {
        name: 'Inicio',
        url: '/',
    },
    {
        name: 'Noticias',
        url: '/sections/Noticias',
    },
    {
        name: 'Programacion',
        url: '/sections/Programacion',
    }
]


const Header = ({}) => {
    return (
        <div className="text-white px-2 md:px-5" style={{backgroundColor: '#009DDC'}}>
            <div className="h-20 container mx-auto max-w-6xl flex items-center">
                <ul className="flex">
                    {sections.map(e => (    
                        <li className="mr-3 font-bold" key={e.name}>
                            <Link href={e.url}>
                                <a>
                                    <h6>{e.name}</h6>
                                </a>
                            </Link>
                        </li>
                    ))}
                    {/* {categories.map(category => {
                        return (
                            <li className="mr-2">
                                <Link href="/">
                                    <a>
                                        <h6>{category.name}</h6>
                                    </a>
                                </Link>
                            </li>
                        )
                    })} */}
                </ul>
            </div>
        </div>
    )
}



export default Header