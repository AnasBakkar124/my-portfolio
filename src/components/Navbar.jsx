
import Link from "next/link";
import { useTranslation } from "@/context";
// import myResume from "@/components/resume/Resume-React-Developer_Muhammad-Anas-Bakkar.pdf"

const Navbar = () => {

  // const { darkMode, setDarkMode } = useTranslation();

  // const toggleLanguage = () => {
  //   setDarkMode((prevLang) => (prevLang === 'light' ? 'dark' : 'light')) // toggle between English and Spanish for example 
  // };





  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Muhammad Anas Portfolio
        </Link>
      </div>


      <a target="_blank" href={"https://res.cloudinary.com/dlt9lxyyr/image/upload/v1722374796/dc0lceibrlf0beq0fd7r.pdf"} download={"Resume-Anas-Bakkar"} className="cta-btn">Resume</a>

      {/* <button onClick={() => toggleLanguage()}>
        {darkMode === 'light' ?
          (<>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ transform: "rotate(40deg)" }}
            >
              <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <circle cx="12" cy="4" r="9" fill="black" />
              </mask>
              <circle fill="black" cx="12" cy="12" r="9" mask="url(#mask)" />
             
            </svg>
          </>) :
          (<>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
              </mask>
              <circle fill="black" cx="12" cy="12" r="5" mask="url(#mask)" />
              <g stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          </>)}
      </button> */}



    </div>
  )
}

export default Navbar;


// import Link from "next/link";
// import { useTranslation } from "@/context";

// const Navbar = () => {
//   const { language, setLanguage } = useTranslation();

//   const toggleLanguage = () => {
//     setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en')); // toggle between English and Spanish for example 
//   };

//   return (
//     <div className="nav-container" style={{ backgroundColor: language === 'en' ? '#1D1E20' : '#ffffff' }}>
//       <div className="logo">
//         <Link href="/">
//           Muhammad Anas Portfolio
//         </Link>
//       </div>

//       <a href="" className="cta-btn">Resume</a>

//       <button onClick={() => toggleLanguage()}>
//         {language === 'en' ? (
//           <>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               style={{ transform: "rotate(40deg)" }}
//             >
//               <mask id="mask">
//                 <rect x="0" y="0" width="100%" height="100%" fill="white" />
//                 <circle cx="12" cy="4" r="9" fill="black" />
//               </mask>
//               <circle fill="black" cx="12" cy="12" r="9" mask="url(#mask)" />
//             </svg>
//           </>
//         ) : (
//           <>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <mask id="mask">
//                 <rect x="0" y="0" width="100%" height="100%" fill="white" />
//               </mask>
//               <circle fill="black" cx="12" cy="12" r="5" mask="url(#mask)" />
//               <g stroke="currentColor">
//                 <line x1="12" y1="1" x2="12" y2="3" />
//                 <line x1="12" y1="21" x2="12" y2="23" />
//                 <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
//                 <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
//                 <line x1="1" y1="12" x2="3" y2="12" />
//                 <line x1="21" y1="12" x2="23" y2="12" />
//                 <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
//                 <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
//               </g>
//             </svg>
//           </>
//         )}
//       </button>
//     </div>
//   );
// }

// export default Navbar;
