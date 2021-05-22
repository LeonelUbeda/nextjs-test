import Link from "next/link";
import { getSections } from "../../api/api";
import Container from "../layout/Container";
import { AiOutlineMenu } from "react-icons/ai";
const sections = [
  {
    name: "Inicio",
    url: "/",
  },
  {
    name: "Noticias",
    url: "/sections/Noticias",
  },
  {
    name: "Programacion",
    url: "/sections/Programacion",
  },
];

const Header = ({}) => {
  return (
    <div
      className='text-gray-700 px-2 md:px-5 border-b border-gray-200'
      // style={{ backgroundColor: "#009DDC" }}
    >
      <Container>
        <div className='h-12 md:h-20 flex items-center'>
          <Link href='/'>
            <a className=' mr-6'>
              <img src='/images/logo_transparent.png' className='w-8 md:w-10' />
            </a>
          </Link>
          <div className='ml-auto md:hidden'>
            <AiOutlineMenu className='w-6 h-6' />
          </div>
          <ul className='hidden md:flex'>
            {sections.map((e) => (
              <li className='mr-6 font-bold' key={e.name}>
                <Link href={e.url}>
                  <a>
                    <h6>{e.name}</h6>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

/* {categories.map(category => {
                        return (
                            <li className="mr-2">
                                <Link href="/">
                                    <a>
                                        <h6>{category.name}</h6>
                                    </a>
                                </Link>
                            </li>
                        )
                    })} */

export default Header;
