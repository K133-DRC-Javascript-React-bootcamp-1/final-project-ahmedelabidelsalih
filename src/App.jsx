import { useState } from "react";
import "./App.css";
import "./components/animat.css";
import "./components/project.css";
import "./components/responsive.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

// main components nav & main list 


function App() {
  const [page, setPage] = useState("About");
  return (
    <div className="App">
      <nav>
        <div className="line_last"></div>
        <div className="line_main">
          <div className="logo_portfolio">
            <span>A</span>
          </div>
          <div className="icons_socail_media">
            <div className="bowl_Svg_icon_soc" style={{ "--i": 1 }}>
              <a
                target="_blank"
                href="https://github.com/ahmedelabidelsalih"
                rel="noreferrer"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.4999 0C7.83622 0 0 8.03289 0 17.9431C0 25.8711 5.01424 32.5966 11.9675 34.9695C12.8418 35.1358 13.1629 34.5802 13.1629 34.1063C13.1629 33.6784 13.1466 32.265 13.1391 30.7657C8.27061 31.8511 7.24331 28.6486 7.24331 28.6486C6.44725 26.5747 5.30026 26.0232 5.30026 26.0232C3.71221 24.9095 5.41995 24.9327 5.41995 24.9327C7.17695 25.059 8.10254 26.7818 8.10254 26.7818C9.66335 29.5243 12.1964 28.7315 13.195 28.2734C13.3521 27.1137 13.8056 26.3218 14.3061 25.8737C10.4191 25.4206 6.33279 23.8818 6.33279 17.0065C6.33279 15.0475 7.01669 13.4469 8.13615 12.19C7.95416 11.7384 7.35517 9.91343 8.30539 7.4419C8.30539 7.4419 9.77463 6.95966 13.1188 9.28113C14.515 8.88328 16.0124 8.68331 17.4999 8.67648C18.9865 8.68331 20.4847 8.88268 21.8835 9.28054C25.2236 6.95907 26.6911 7.44131 26.6911 7.44131C27.6437 9.91253 27.0447 11.7378 26.863 12.1894C27.985 13.4463 28.664 15.0469 28.664 17.0059C28.664 23.8975 24.5702 25.4147 20.6733 25.8592C21.3013 26.416 21.8606 27.5082 21.8606 29.182C21.8606 31.5828 21.8403 33.515 21.8403 34.106C21.8403 34.5835 22.1556 35.143 23.0424 34.9668C29.9916 32.5915 35 25.8681 35 17.9431C34.9997 8.03349 27.1644 0 17.4999 0Z"
                    fill="#FFFEFE"
                  />
                </svg>
              </a>
            </div>
            <div className="bowl_Svg_icon_soc" style={{ "--i": 2 }}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ahmed-elabid-elsalih-ab7b7a171/"
                rel="noreferrer"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_44_341)">
                    <path
                      d="M17.5 0C7.83494 0 0 7.83495 0 17.5C0 27.165 7.83494 35 17.5 35C27.165 35 35 27.165 35 17.5C34.9999 7.83495 27.1649 0 17.5 0ZM12.8309 25.9604H8.98864V13.5471H12.8309V25.9604ZM10.8915 11.9214C9.63663 11.9214 8.61935 10.8959 8.61935 9.63096C8.61935 8.36591 9.63677 7.34041 10.8915 7.34041C12.1462 7.34041 13.1635 8.36591 13.1635 9.63096C13.1635 10.8959 12.1463 11.9214 10.8915 11.9214ZM27.2299 25.9604H23.4063V19.4445C23.4063 17.6573 22.7274 16.6597 21.3143 16.6597C19.7763 16.6597 18.9728 17.6987 18.9728 19.4445V25.9604H15.2876V13.5471H18.9728V15.2189C18.9728 15.2189 20.0814 13.1684 22.7135 13.1684C25.3457 13.1684 27.23 14.7756 27.23 18.1005L27.2299 25.9604Z"
                      fill="#FBFEFF"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_44_341"
                      x="0"
                      y="0"
                      width="35"
                      height="35"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_44_341"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_44_341"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="bowl_Svg_icon_soc" style={{ "--i": 3 }}>
              <a
                target="_blank"
                href="https://twitter.com/ElsalihAhmed"
                rel="noreferrer"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
              </a>
            </div>

            <div className="bowl_Svg_icon_soc" style={{ "--i": 4 }}>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100028827934125"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Ebene 1"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="white"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                  />
                  <path
                    fill="#264834"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav> 

      <main>
        <div className="bowl_items">
          <div className="circle_top"></div>
          <div className="circle_outline_top"></div>
          <div className="circle_outline_bottom"></div>
        </div>

        {page === "Skills" || page === "Projects" ? null : (
          <div className="theam2">
            <div className="ch1"></div>
            <div className="ch2"></div>
            <div className="ch3"></div>
            <div className="ch4"></div>
          </div>
        )}

        <div className="menu_list">
          <div
            className="line_bottom_menu"
            style={{
              left:
                page === "About"
                  ? "50px"
                  : page === "Skills"
                  ? "150px"
                  : page === "Projects"
                  ? "255px"
                  : page === "Contact"
                  ? "380px"
                  : null,
              width:
                page === "Projects"
                  ? "73px"
                  : page === "Contact"
                  ? "71px"
                  : null,
            }}
          ></div>
          <div
            onClick={() => setPage("About")}
            className={`bowl_menu_lin ${page === "About" ? "active" : null}`}
          >
            <span>About</span>
          </div>
          <div
            onClick={() => setPage("Skills")}
            className={`bowl_menu_lin ${page === "Skills" ? "active" : null}`}
          >
            <span>Skills</span>
          </div>
          <div
            onClick={() => setPage("Projects")}
            className={`bowl_menu_lin ${page === "Projects" ? "active" : null}`}
          >
            <span>Projects</span>
          </div>
          <div
            onClick={() => setPage("Contact")}
            className={`bowl_menu_lin ${page === "Contact" ? "active" : null}`}
          >
            <span>Contact</span>
          </div>
        </div>

        {page === "About" ? (
          <About />
        ) : page === "Skills" ? (
          <Skills />
        ) : page === "Projects" ? (
          <Projects />
        ) : page === "Contact" ? (
          <Contact />
        ) : null}
      </main>
    </div>
  );
}

export default App;
