import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer>
      <div className="footer_color">
        <div className="container footer_component">
          <div className="row">
            <div className="col-md-7 footer_left">
              <div className="footer_logo">
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 521 591">
                    <g transform="matrix(.87929 0 0 .73108 -436.44 -242.808)">
                      <path
                        fill="none"
                        d="M496.355 332.121h591.589v808.358H496.355z"
                      ></path>
                      <path
                        fill="#078B00"
                        d="M1012.156 728.953s20.198 250.506-125.237 313.96c-44.582 19.45-71.046-46.684-154.887 1.546-76.126 43.784-220.07-218.677-150.4-382.27 27.021-63.454 79.03-88.746 114.263-88.746 49.921-.013 98.574 31.105 111.061 23.24 62.471-6.908 46.06-11.258 69.465-14.609-13.931 6.456-50.608 24.416-78.165 26.495-25.725 1.929-73.361-33.977-129.64-8.275-43.255 19.752-128.825 82.18-62.067 289.462 23.357 63.81 44.364 87.009 79.803 118.127 28.809 25.278 70.496-.766 97.415-4.076 31.435-3.885 66.884 23.185 95.76 17.344 24.77-5.02 109.2-42.239 132.629-292.198z"
                      ></path>
                      <path
                        fill="#FF9E00"
                        d="M986.489 506.43s-49.711 84.957-89.345 158.396c-20.972 38.874-39.123 74.52-45.594 92.657 81.134 48.791 43.092 161.255-3.139 230.687 8.678-44.264 22.302-173.1-19.868-174.619-37.223 95.845-61.277 209.499-70.307 266.278-48.334-63.058 18.493-279.04 34.38-294.387-32.947-1.983-154.252-19.642-182.894-38.381 97.462-12.338 168.792 21.625 376.767-240.63z"
                      ></path>
                      <circle
                        cx="1138.07"
                        cy="1497.49"
                        r="38.073"
                        fill="#FF9E00"
                        transform="matrix(1.13728 0 0 1.36784 -512.783 -1424.88)"
                      ></circle>
                      <path
                        fill="#078B00"
                        d="M834.318 547.641s-2.888-120.752-52.007-144.594c-29.99-14.554-104.482-13.2-106.245-25.373-1.285-8.878-8.53 184.973 132.345 160.352-3.23-33.362-45.787-72.496-50.404-72.045 8.45-2.147 41.158-2.298 76.311 81.66z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M1032.346 537.566c1.516-3.538.358-7.888-2.584-9.713l-85.01-52.725c-2.942-1.824-6.56-.437-8.078 3.1s-.358 7.89 2.584 9.714l85.01 52.725c2.942 1.825 6.56.437 8.078-3.1z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M976.672 462.583c-2.932-1.846-6.556-.479-8.09 3.047l-22.205 51.03c-1.534 3.525-.403 7.886 2.53 9.732s6.556.478 8.09-3.048l22.205-51.029c1.534-3.526.403-7.887-2.53-9.732z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M963.195 464.722c-2.932-1.846-6.556-.478-8.09 3.046l-14.86 34.15c-1.533 3.524-.402 7.885 2.53 9.731s6.557.478 8.09-3.046l14.861-34.15c1.533-3.524.402-7.885-2.53-9.73zM995.14 555.665c2.99 1.705 6.567.167 7.984-3.43l20.51-52.043c1.418-3.596.144-7.9-2.847-9.605s-6.567-.166-7.984 3.43l-20.51 52.044c-1.418 3.596-.144 7.9 2.846 9.604z"
                      ></path>
                      <path
                        fill="#8C8C8C"
                        d="M1008.548 552.839c2.99 1.705 6.567.166 7.983-3.428l13.727-34.83c1.416-3.593.142-7.898-2.849-9.603s-6.567-.166-7.983 3.428l-13.727 34.83c-1.416 3.594-.142 7.898 2.849 9.603z"
                      ></path>
                    </g>
                  </svg>
                </Link>
                <div className="logo_text">
                  <h4>Marta Gąsiorowska</h4>
                  <h6>Dietetyk i trener personalny</h6>
                </div>
                <p>
                  "Cudem nie jest to, że skończyłem. Cudem jest to, że miałem
                  odwagę zacząć." - <i>John Bingham</i>
                </p>
              </div>
            </div>
            <div className="col-md-2 footer_middle">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/o-mnie">O mnie</Link>
                </li>
                <li>
                  <Link to="/przepisy">Przepisy</Link>
                </li>
                <li>
                  <Link to="/dieta-trening">Dieta i Trening</Link>
                </li>
                <li>
                  <Link to="/oferta">Oferta</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer_right">
              <div className="footer_right_header">
                <h6>SKONTAKTUJ SIĘ</h6>
              </div>
              <div className="footer_svg">
                <a href="mailto:adres e-mail">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/messages/t/100003534104788">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
