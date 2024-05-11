import logoNoBg from '../images/logoNoBg.svg'
import { useState, useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
// import DarkModeButton from '../DarkMode.jsx';
// import { DarkModeContext } from '../DarkMode';
// import '../darkModeStyles.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { toggleDarkMode } = useContext(DarkModeContext);
  // Funzione per gestire il click sul bottone del menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div>
      <header className="bg-white p-4 max-[768px]:p-2 fixed w-full z-10 navbar">
        <div className="mx-auto max-w-screen-xl px-4  lg:px-8 max-[768px]:px-0">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <img src={logoNoBg} className='w-20 h-16 max-[768px]:w-10 max-[768px]:h-8 logo' alt='Find & Fix' />
              </a>
            </div>

            <div className="md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6  max-[768px]:whitespace-nowrap">
                  <li>
                    <Link to="/chiSiamo" className=" text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-base" href="#"> Chi siamo </Link>
                  </li>

                  <li>
                    <Link to="/servizi" className="text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-base" href="#"> Servizi </Link>
                  </li>

                  <li>
                    {/* controllare come fare per riportare alla sezione contattaci del footer */}
                    <a className=" text-customBlue transition hover:text-customGreen text-xl max-[768px]:text-base" href="#"> Contatti </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex justify-space-between w-70 max-[768px]:w-10 md:w-10">
              <div className="max-[768px]:hidden flex items-center">
                {/* <div className='mr-4'>
                  <DarkModeButton />
                </div> */}
                {/* bottone darkmode */}
                {/* <label
                  htmlFor="toggleDarkMode"
                  className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent] mb-70"
                >
                  <input type="checkbox" id="toggleDarkMode" className="peer sr-only" onClick={toggleDarkMode} // Richiama toggleDarkMode
                    style={{ padding: '10px', position: 'fixed', top: '100px', left: '10px', zIndex: '20' }} />

                  <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>

                  <span
                    className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"
                  >
                    <span className="absolute inset-0 m-auto size-4 rounded-full bg-gray-200 transition"> </span>
                  </span>
                </label> */}
                <Link to="/signIn"
                  className="button rounded-md mx-4 bg-customBlue px-5 py-2.5 text-mobile font-medium text-white shadow hover:bg-customGreen max-[768px]:p-2"
                  href="#"
                >
                  LOGIN
                </Link>


                <Link to="/registrati"
                  className="button rounded-md bg-customBlue px-5  py-2.5 text-mobile font-medium text-white hover:bg-customGreen "
                  href="#"
                >
                  REGISTRATI
                </Link>

                <Link to="/proRegistrati"
                  className="button rounded-md ml-4 bg-customBlue px-5 py-2.5 text-mobile font-medium text-white hover:bg-customGreen "
                  href="#"
                >
                  REGISTRATI COME PRO
                </Link>

              </div>

              <div className="hidden max-[768px]:block md:block">
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
                  <Fade triggerOnce={false} duration={1500}>
                    <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg flex flex-col items-center p-4 w-fit hamburgerNavbar">
                      <Link to="/signIn"
                        className=" mx-4  py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                        href="#"
                      >
                        LOGIN
                      </Link>


                      <Link to="/registrati"
                        className="mx-4 py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                        href="#"
                      >
                        REGISTRATI
                      </Link>

                      <Link to="/proRegistrati"
                        className="mx-4 py-2.5 text-mobile font-medium text-customBlue hover:bg-customGreen w-14  flex justify-center"
                        href="#"
                      >
                        REGISTRATI COME PRO
                      </Link>

                      {/* <label
                        htmlFor="toggleDarkMode"
                        className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent] mb-70"
                      >
                        <input type="checkbox" id="toggleDarkMode" className="peer sr-only" onClick={toggleDarkMode} // Richiama toggleDarkMode
                          style={{ padding: '10px', position: 'fixed', top: '100px', left: '10px', zIndex: '20' }} />

                        <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>

                        <span
                          className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"
                        >
                          <span className="absolute inset-0 m-auto size-4 rounded-full bg-gray-200 transition"> </span>
                        </span>
                      </label> */}
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