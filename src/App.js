import "./App.css";
import image from "../src/assets/img/red.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import {
  BsHouseDoor,
  BsGithub,
  BsLinkedin,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import { MdOutlineMailOutline, MdOutlineWork } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import molndal from "../src/assets/img/campusmolndal_logo_RGB.png";
import handels from "../src/assets/img/university-gothenburg.png";
import ResponsiveNav from "./components/responsiveNav/ResponsiveNav";

function App() {
  return (
    <>
      <ResponsiveNav />
      <div className="container" id="home">
        <section className="left-side">
          <img className="profile-image" src={image} alt="" />
          <h1 className="about-heading" id="about">
            Om mig
          </h1>
          <article className="about-text">
            Jag är en driven och resultatinriktad fullstackutvecklare som designar och bygger
            webbsidor och applikationer i JavaScript/TypeScript.
            <br />
            <br />
            Jag har även en magisterexamen i företagsekonomi och har arbetat
            många år som ekonom.
            <br />
            <br />
            Jag är intresserad av jobb inom både backend- och frontendutveckling
            och vill gärna arbeta med utmanande projekt ihop med positiva
            människor.
          </article>
          <div className="divider"></div>

          <h1 className="contact-heading">KOMPETENSER</h1>
          <div className="skill-lists-container">
            <article className="frontend-list">
              <ul className="frontend">
                <li className="list-item">HTML</li>
                <li className="list-item">CSS</li>
                <li className="list-item">JavaScript</li>
                <li className="list-item">TypeScript</li>
                <li className="list-item">Next.js</li>
                <li className="list-item">React.js</li>
                <li className="list-item">UX/UI</li>
                <li className="list-item">API</li>
                <li className="list-item">RestAPI</li>
                <li className="list-item">Phaser.js</li>
              </ul>
            </article>

            <article className="backend-list">
              <ul className="backend">
                <li className="list-item">Axios</li>
                <li className="list-item">Express</li>
                <li className="list-item">SQL</li>
                <li className="list-item">MERN</li>
                <li className="list-item">Mongoose</li>
                <li className="list-item">MongoDB</li>
                <li className="list-item">GraphQL</li>
                <li className="list-item">Apollo</li>
                <li className="list-item">Contentful</li>
                <li className="list-item">SASS</li>
              </ul>
            </article>
          </div>
          <div className="divider"></div>
          <h1 className="contact-heading">KONTAKT</h1>

          <article className="phone">
            <AiOutlinePhone className="phone-icon" />
            0736-009506
          </article>

          <article className="house">
            <BsHouseDoor className="house-icon" />
            Norra Ågatan 3, 416 49 Göteborg
          </article>

          <article className="email">
            <MdOutlineMailOutline className="email-icon" />
            carin.wood.85@gmail.com
          </article>
          <div className="divider2"></div>

          <h1 className="follow-heading">FÖLJ MIG</h1>
          <div className="follow-me-container">
            <article className="github">
              <a href="https://github.com/CarinWood" target="_blank">
                <BsGithub className="github-icon" />
              </a>
              <a className="tag" href="https://github.com/CarinWood">
                <p className="github-text">GitHub</p>
              </a>
            </article>
            <article className="linkedin">
              <a href="https://www.linkedin.com/in/carin-wood/" target="_blank">
                <BsLinkedin className="linkedin-icon" />
              </a>
              <a
                className="tag"
                target="_blank"
                href="https://www.linkedin.com/in/carin-wood/"
              >
                <p className="linkedin-text">LinkedIn</p>
              </a>
            </article>
            <article className="portfolio">
              <a href="http://portfolio.carinwood.se/" target="_blank">
                <BsFillBriefcaseFill className="linkedin-icon" />
              </a>
              <a
                className="tag"
                target="_blank"
                href="http://portfolio.carinwood.se/"
              >
                <p className="portfolio-text">Portfolio</p>
              </a>
            </article>
          </div>
        </section>

        <section className="right-side">
          <header className="header">
            <p className="carin">CARIN WOOD</p>
            <p className="fullstack">Fullstackutvecklare</p>
          </header>

          <div className="div3"></div>

          <section id="education" className="education">
            <div className="education-div">
              <IoSchoolSharp className="school-icon" />
              <p className="edu-heading">Utbildning</p>
              <div className="div"></div>
            </div>

            <article className="boras">
              <div className="image-container">
                <img src={molndal} alt="" className="edu-image molndal-image" />
              </div>
              <div className="campus-div">
                <p className="school-title">Webbutveckling</p>
                <p className="edu-subtext">
                  HTML, CSS, JavaScript, TypeScript, React, Node, SQL, NoSQL,
                  MongoDB, Mongoose, UX/UI, MERN, API, RestAPI, Express
                </p>
              </div>
            </article>

            <article className="handels">
              <div className="image-container">
                <img src={handels} alt="" className="business" />
              </div>
              <div className="campus-div">
                <p className="school-title">Magisterexamen i företagsekonomi</p>
                <p className="edu-subtext">
                  Företagsekonomi, Statistik, Nationalekonomi, Juridisk
                  grundkurs, Ekonomisk historia, Engelska
                  <br />
                  <br />
                  Marknadsföring - Kandidatkurs
                  <br />
                  Externredovisning - Magisterkurs
                </p>
              </div>
            </article>
          </section>

          <div className="div3"></div>

          <section className="work">
            <div className="work-div">
              <MdOutlineWork className="work-icon" />
              <p className="work-heading">Arbetslivserfarenhet</p>
              <div className="second-div"></div>
            </div>

            <article className="police">
              <div className="police-heading">
                <p className="polismynd">GetIT Nordic</p>
                <p className="work-year">aug 2022 - sept 2022</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">Arbetspraktik</p>
                <p className="work-subtext">
                  Under min praktik på GetIT Nordic fick jag i uppdrag att
                  tillsammans med UX/UI-utvecklare, marknadschef och
                  content-manager bygga en säljsida till applikationen GetHub
                  som företaget har utvecklat.
                  <p className="work-subtext_2">
                    <a target="_blank" href="https://gethub.se/">
                      https://gethub.se
                    </a>
                  </p>
                  <p className="work-subtext_2">
                    Kompetenser: Contentful (headless CMS), GraphQL, Apollo,
                    Next.js, TypeScript
                  </p>
                </p>
              </div>
            </article>
            <article className="police">
              <div className="police-heading">
                <p className="polismynd">Polismyndigheten</p>
                <p className="work-year">sept 2018 - dec 2018</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">Utredare/Administratör</p>
                <p className="work-subtext">
                  Jag fick inhämta underlag i pågående utredningar. Registrera
                  och diarieföra handlingar. Inhämta och sammanställa
                  information från olika instanser och register. Bearbeta
                  inhämtad övervakningsfilm.
                </p>
              </div>
            </article>
            <article className="police">
              <div className="police-heading">
                <p className="polismynd">Försäkringskassan</p>
                <p className="work-year">sept 2017 - sept 2018</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">Handläggare</p>
                <p className="work-subtext">
                  Bedömning om sjukpenninggrundande inkomst, fatta beslut samt
                  kommunicerade beslut till försäkrade
                </p>
              </div>
            </article>

            <article className="police">
              <div className="police-heading">
                <p className="polismynd">Nordea</p>
                <p className="work-year">sept 2016 - sept 2017</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">Bankadministratör</p>
                <p className="work-subtext">
                  Konsultuppdrag på Nordeas backoffice. Administration av
                  banktjänster, t.ex. pensionssparande, handel med fonder inom
                  investeringssparkonto, öppna och återköpa kapitalförsäkringar.
                </p>
              </div>
            </article>

            <article className="police">
              <div className="police-heading">
                <p className="polismynd">Akzo Nobel</p>
                <p className="work-year">maj 2015 - okt 2015</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">Ekonomiassistent</p>
                <p className="work-subtext">
                  Konsultuppdrag på ekonomiavdelning. Självständigt arbete med
                  bokföring av leverantörsfakturor i SAP
                </p>
              </div>
            </article>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
