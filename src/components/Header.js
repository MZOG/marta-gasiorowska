import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", function () {
      const scrollCheck = window.scrollY < 20;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });

    return () => {
      document.removeEventListener("scroll", function () {
        const scrollCheck = window.scrollY < 20;
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck);
        }
      });
    };
  }, [scroll, setScroll]);

  const navigationLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "O mnie",
      path: "/o-mnie",
    },
    {
      title: "Przepisy",
      path: "/przepisy",
    },
    {
      title: "Dieta i Trening",
      path: "/dieta-trening",
    },
    {
      title: "Oferta",
      path: "/oferta",
    },
    {
      title: "Kontakt",
      path: "/kontakt",
    },
  ];

  return (
    <header className={`header ${scroll === false ? "scroll" : ""}`}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            viewBox="0 0 521 591"
          >
            <g transform="matrix(.87929 0 0 .73108 -436.44 -242.808)">
              <path
                fill="none"
                d="M496.355 332.121H1087.944V1140.4789999999998H496.355z"
              ></path>
              <path
                fill="#078B00"
                d="M1247.26 1565.58s17.76 183.14-110.12 229.53c-39.2 14.22-62.47-34.13-136.19 1.13-66.937 32.01-193.506-159.87-132.245-279.47 23.759-46.39 69.49-64.88 100.47-64.88 43.895-.01 86.675 22.74 97.655 16.99 54.93-5.05 40.5-8.23 61.08-10.68-12.25 4.72-44.5 17.85-68.73 19.37-22.62 1.41-64.506-24.84-113.992-6.05-38.033 14.44-113.274 60.08-54.574 211.62 20.537 46.65 39.008 63.61 70.17 86.36 25.331 18.48 61.986-.56 85.656-2.98 27.64-2.84 58.81 16.95 84.2 12.68 21.78-3.67 96.02-30.88 116.62-213.62z"
                transform="matrix(1.13728 0 0 1.36784 -406.328 -1412.51)"
              ></path>
              <path
                fill="#FF9E00"
                d="M1282.9 1404.66s-43.71 62.11-78.56 115.8c-18.44 28.42-34.4 54.48-40.09 67.74 71.34 35.67 37.89 117.89-2.76 168.65 7.63-32.36 19.61-126.55-17.47-127.66-32.73 70.07-53.88 153.16-61.82 194.67-42.5-46.1 16.26-204 30.23-215.22-28.97-1.45-135.633-14.36-160.817-28.06 85.697-9.02 148.417 15.81 331.287-175.92z"
                transform="matrix(1.13728 0 0 1.36784 -472.528 -1414.92)"
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
                d="M1164.9 1437.64s-2.54-88.28-45.73-105.71c-26.37-10.64-91.87-9.65-93.42-18.55-1.13-6.49-7.5 135.23 116.37 117.23-2.84-24.39-40.26-53-44.32-52.67 7.43-1.57 36.19-1.68 67.1 59.7z"
                transform="matrix(1.13728 0 0 1.36784 -490.499 -1418.82)"
              ></path>
              <path
                fill="#8C8C8C"
                d="M1360.06 1385.47c0-2.38-2.72-4.31-6.07-4.31h-96.8c-3.35 0-6.07 1.93-6.07 4.31s2.72 4.31 6.07 4.31h96.8c3.35 0 6.07-1.93 6.07-4.31z"
                transform="matrix(.8782 .54468 -.63736 1.48652 720.984 -2262.76)"
              ></path>
              <path
                fill="#8C8C8C"
                d="M1360.06 1385.47c0-2.38-4.89-4.31-10.91-4.31h-87.12c-6.02 0-10.91 1.93-10.91 4.31s4.89 4.31 10.91 4.31h87.12c6.02 0 10.91-1.93 10.91-4.31z"
                transform="matrix(.25487 -.58573 1.23209 .77553 -1076.99 184.737)"
              ></path>
              <path
                fill="#8C8C8C"
                d="M1360.06 1385.47c0-2.38-6.65-4.31-14.83-4.31h-79.28c-8.18 0-14.83 1.93-14.83 4.31s6.65 4.31 14.83 4.31h79.28c8.18 0 14.83-1.93 14.83-4.31z"
                transform="matrix(.18744 -.43076 1.23209 .77553 -998.758 -23.892)"
              ></path>
              <path
                fill="#8C8C8C"
                d="M1360.06 1385.47c0-2.38-4.89-4.31-10.91-4.31h-87.12c-6.02 0-10.91 1.93-10.91 4.31s4.89 4.31 10.91 4.31h87.12c6.02 0 10.91-1.93 10.91-4.31z"
                transform="matrix(-.23543 .59738 -1.2566 -.71637 3056.32 735.702)"
              ></path>
              <path
                fill="#8C8C8C"
                d="M1360.06 1385.47c0-2.38-6.65-4.31-14.83-4.31h-79.28c-8.18 0-14.83 1.93-14.83 4.31s6.65 4.31 14.83 4.31h79.28c8.18 0 14.83-1.93 14.83-4.31z"
                transform="matrix(-.17314 .43933 -1.2566 -.71637 2985.01 947.833)"
              ></path>
            </g>
          </svg>
          </Link>
        </div>

        <nav className="header__nav">
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.title}>
                <Link to={link.path} activeClassName="active">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
