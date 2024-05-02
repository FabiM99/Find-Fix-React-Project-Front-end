import logo from '../images/logo.svg'
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import DarkModeButton from './DarkModeButton.jsx';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Funzione per gestire il click sul bottone del menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <div>
      <header className="bg-white p-4 sm:p-2 fixed w-full z-10">
        <div className="mx-auto max-w-screen-xl px-4  lg:px-8 sm:px-0">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <img src={logo} className='w-20 h-16 sm:w-10 sm:h-8' alt='Find & Fix' />
              </a>
            </div>

            <div className="md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6  sm:whitespace-nowrap">
                  <li>
                    <a className=" text-customBlue transition hover:text-customGreen text-xl sm:text-base" href="#"> Chi siamo </a>
                  </li>

                  <li>
                    <a className="text-customBlue transition hover:text-customGreen text-xl sm:text-base" href="#"> Servizi </a>
                  </li>

                  <li>
                    <a className=" text-customBlue transition hover:text-customGreen text-xl sm:text-base" href="#"> Contatti </a>
                  </li>

                </ul>
              </nav>
            </div>

            <div className="flex justify-around w-70 sm:w-10 md:w-10">
              <div className="sm:hidden md:hidden">
                <a
                  className="rounded-md mx-4 bg-customBlue px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-customGreen sm:p-2"
                  href="#"
                >
                  LOGIN
                </a>


                <a
                  className="rounded-md bg-customBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-customGreen "
                  href="#"
                >
                  REGISTRATI
                </a>

                <a
                  className="rounded-md ml-4 bg-customBlue px-5 py-2.5 text-sm font-medium text-white hover:bg-customGreen "
                  href="#"
                >
                  REGISTRATI COME PRO
                </a>
                <DarkModeButton/>
              </div>

              <div className="hidden sm:block md:block">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                {isMenuOpen && (
                  <Fade triggerOnce={false} duration={2500}>
                    <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg flex flex-col items-center p-4 w-fit">
                      <a
                        className=" mx-4  py-2.5 text-sm font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                        href="#"
                      >
                        LOGIN
                      </a>


                      <a
                        className="mx-4  py-2.5 text-sm font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                        href="#"
                      >
                        REGISTRATI
                      </a>

                      <a
                        className="mx-4  py-2.5 text-sm font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                        href="#"
                      >
                        REGISTRATI COME PRO
                      </a>
                    </div>
                  </Fade>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar