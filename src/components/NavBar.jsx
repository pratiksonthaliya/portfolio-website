// import { PiDevToLogoFill } from "react-icons/pi";
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
// import { RxSlash } from "react-icons/rx";
// import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";


const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center text-3xl ">
            {/* <PiDevToLogoFill /> */}
            {/* <VscChevronLeft className="text-gray-400 -mr-2"/>
            <RxSlash className="text-gray-400 -m-2 " />
            <VscChevronRight className="text-gray-400 -m-2" /> */}
            {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
<svg fill="#aaaaaa" width="45px" height="45px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z"/></svg>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/pratiksonthaliya" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
          <a href="https://github.com/pratiksonthaliya" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
          <a href="https://twitter.com/SonthaliyaP" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter/>
          </a>
          <a href="https://www.instagram.com/pratiksonthaliya" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
          </a>
        </div>
    </nav>
  )
}

export default NavBar;
