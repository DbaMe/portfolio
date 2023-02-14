import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/h.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";




export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <h1 className="logos">H</h1> */}
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/Hammed-Waheed" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/waheed-hammed/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}




























// import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           <MailchimpForm />
//           <Col size={12} sm={6}>
//           <Link href="/">
//               <a className="d-flex align-items-center navbar-brand">
//                 <Image
//                   src="/img/logo.svg"
//                   alt="logo"
//                   width={150}
//                   height={150}
//                 />
//                 <div>
//                   <p className="m-0 fs-5">Hammed Waheed</p>
//                   <p className="m-0 fs-6">Fullstack Web Developer</p>
//                 </div>
//               </a>
//             </Link>
//           </Col>
//           <Col size={12} sm={6} className="text-center text-sm-end">
//             <div className="social-icon">
              
//               <a
//                 href="https://www.linkedin.com/in/waheed-hammed/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <LinkedInIcon className="icons" fontSize="large" />
//               </a>
//               <a href="https://github.com/Hammed-Waheed" target="_blank"
//                 rel="noopener noreferrer"><GitHubIcon className="icons" fontSize="large" /></a>
                 
//             </div>
//             <p>Copyright&copy; 2023. All Rights Reserved</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }
