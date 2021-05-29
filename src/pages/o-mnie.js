import * as React from "react";
import SEO from "../components/Seo";
import Layoyt from "../components/Layout";
import Profile from "../images/profilowe.jpg";
import I from "../images/ja.jpg";
import Line from "../images/lina.jpg";
import Water from "../images/woda.jpg";
import Ninja from "../images/ninja.jpg";
import Windsurfing from "../images/windsurfing.jpg";
import WeekRecipe from "../components/WeekRecipe";

const PageAbout = () => {
  return (
    <Layoyt>
      <SEO title="O mnie" />
      <div className="container about_page">
        <div className="row">
          <div className="col-md-6 about_photo">
            <img src={Profile} alt="zdjęcie profilowe" className="img-fluid" />
          </div>
          <div className="col-md-6 about_header">
            <h1>Hej!</h1>
            <h1>Nazywam się Marta Gąsiorowska</h1>
            <h3>Chciałabym opowiedzieć Ci coś o sobie!</h3>
          </div>
        </div>
        <div className="col-md-12 about_me">
          <p>
            Jestem dyplomowanym dietetykiem i trenerem personalnym. Układam
            jadłospisy w odchudzaniu, aktywności fizycznej dla kobiet w ciąży,
            karmiących piersią i niemowląt oraz w konkretnych jednostkach
            chorobowych tj. otyłość, nadciśnienie tętnicze, wrzody żołądka i
            dwunastnicy. Jako trener rozpisuje plany treningowe dopasowane do
            Twoich celów i potrzeb. Wciąż poszerzam wiedzę i umiejętności w
            swojej branży poprzez uczestnictwo w kursach i webinarach, aby móc
            pomóc Ci jak najlepiej. Do tej pory moje jadłospisy pomagały moim
            bliskim, znajomym i innym potrzebującym pomocy w zmianie złych
            nawyków żywieniowych. Wśród tych osób, znalazły się też takie
            podobne do mnie tzn. odkryły zamiłowanie do gotowania. Chciałabym,
            pokrótce opowiedzieć Ci o sobie.
          </p>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 about_header">
            <h1>Gotowanie</h1>
          </div>
          <div className="col-md-4 about_photo">
            <img src={I} alt="moje zdjęcie" className="img-fluid" />
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="col-md-12 coocking_discription">
          <p>
            Pasja do układania i przygotowywania posiłków pojawiła się u mnie
            bardzo późno. Mieszkając z rodzicami zawsze miałam gotowy, smaczny i
            zdrowy posiłek. Wszystko podane na zawołanie. Dopiero jak się
            przeprowadziłam trzeba było się ogarnąć i zacząć gotować na własną
            rękę. Chcialam kontynuować zdrowe odżywianie, które wyniosłam z
            domu. Na co dzień jestem osobą zabieganą. Zależało mi na posiłkach
            szybkich w przygotowaniu (a najlepiej jednogarnkowych ).
            Wyszukiwałam proste dania w internecie i gotowałam. I wtedy pojawiło
            się pierwsze zamiłowanie do gotowania. Pasja ta umocniła się, kiedy
            sama przechodziłam dietę odchudzającą. Lubię urozmaicać posiłki. Na
            diecie dokonywałam modyfikacji swoich posiłków. Praktycznie
            codziennie miałam inne menu. Na co dzień w kuchni spędzam większość
            czasu. Miejsce to stało się moją oazą spokoju i relaksu. Z czasem
            nie patrzyłam na trudność czy szybkość przygotowania wyszukanej
            potrawy, lecz na jej ciekawość i wyobrażalny smak. A jeśli robisz
            już coś z pasją to czas czy trudności jakie napotykasz na swojej
            drodze nie są dla Ciebie przeszkodą. A może Twoją pasją jest również
            gotowanie?
          </p>
        </div>
        <div className="sport_title">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4 about_header">
              <h1>Sport</h1>
            </div>
            <div className="col-md-4 about_photo">
              <img
                src={Line}
                alt="moje zdjęcie na linie"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-12 motivation_text">
            <h3>
              „Sukces to suma niewielkiego wysiłku powtarzanego z dnia na
              dzień.”
            </h3>
            <h3 className="motivation_autor">
              <i>Robert Collier</i>
            </h3>
          </div>
        </div>
        <div className="row sport">
          <div className="col-md-4">
            <img
              src={Water}
              alt="moje zdjęcie na linie"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <img
              src={Windsurfing}
              alt="zdjęcie profilowe"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 sport_discrtiption">
            <p>
              Zamiłowanie do gotowania pojawiło się z czasem, ale od dziecka
              lubiłam i lubię aktywność fizyczną. Miałam okazję trenować sztuki
              walki, pływać na windsurfingu oraz brać udział w licznych
              imprezach sportowych nie tylko, aby rywalizować z innymi, ale
              przede wszystkim po to by walczyć z własnymi słabościami i
              wyznaczać sobie nowe cele, których pokonywanie sprawia mi ogromną
              radość!
            </p>
          </div>
        </div>
        <div className="row sport">
          <div className="col-md-6 sport_discrtiption">
            <p>
              Jak widzicie, z własnego doświadczenia wiem, jak ważne dla osób
              aktywnych fizycznie jest prawidłowe odżywianie. Dla sportowców
              odpowiednio dobrana dieta bez wątpienia ułatwia osiągnięcie
              sukcesów i coraz lepszych wyników co sprawia poczucie ogromnej
              satysfakcji. Nieważne czy trenujesz amatorsko czy zawodowo. Każdy
              organizm wymaga przy ciężkim treningu sporo energii i siły. Tylko
              dzięki dobrze zbilansowanej diecie przetrwasz mordercze treningi i
              dasz z siebie 100%!
            </p>
          </div>
          <div className="col-md-4 ninja">
            <img src={Ninja} alt="moje zdjęcie" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-12 about_boxes">
          <div className="row about_row">
            <div className="col-md-12 about_box">
              <div className="wpb_text_column wpb_content_element">
                <div className="wpb_wrapper">
                  <h2>
                    <span>DIETETYK</span>
                  </h2>
                </div>
              </div>
              <div className="wpb_text_column wpb_content_element vc_custom_1591025000095">
                <div className="wpb_wrapper">
                  <p>
                    • Układam plany żywienia w odchudzaniu.
                    <br />
                    • Opracowuje jadłospisy dla osób aktywnych fizycznie.
                    <br />
                    • Rozplanowuje diety w konkretnych jednostkach chorobowych
                    tj. otyłość, nadciśnienie tętnicze, wrzody żołądka i
                    dwunastnicy.
                    <br />• Pomagam zwiększyć motywację w utrzymywaniu diety
                    oraz uczę zmieniać złe nawyki żywieniowe na dobre.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 about_box">
              <div className="wpb_text_column wpb_content_element">
                <div className="wpb_wrapper">
                  <h2>
                    <span>TRENER PERSONALNY</span>
                  </h2>
                </div>
              </div>
              <div className="wpb_text_column wpb_content_element vc_custom_1599812677788">
                <div className="wpb_wrapper">
                  <p>
                    • Przygotowuje odowiednie plany treningowe dopasowane do
                    Twoich celów i potrzeb.
                    <br />• Przekazuje wiedzę na temat prawidłowego podejścia do
                    aktywności fizycznej!.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 about_header">
          <h3>Moje kwalifikacje</h3>
        </div>
        <div className="row">
          <div className="col-md-7 about_list">
            <h5>Dietetyka:</h5>
            <h6>2021r.</h6>
            <ul>
              <li>Dietetyka ogólna</li>
              <li>Dietetyka sportowa</li>
              <li>Certyfikat "Dieta matki krmiącej piersią. Fakty i mity"</li>
              <li>
                Certyfikat "Rozszerzanie diety niemowląt. Praktyczny punkt
                widzenia"
              </li>
              <li>Certyfikat "Żywienie okołotreningowe"</li>
              <li>Certyfikat "Podstawy suplementacji w sporcie"</li>
              <li>Certyfikat "Dieta ketogeniczna od podstaw"</li>
            </ul>
            <h6>2020r.</h6>
            <ul>
              <li>Podstawa psychodietetyki</li>
              <li>
                Rola witamin oraz mikro i makroelementów w życiu człowieka
              </li>
              <li>Suplementacja w sporcie i żywieniu</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Trener Personalny:</h5>
            <h6>2020r.</h6>
            <ul>
              <li>Trener personalny</li>
            </ul>
          </div>
        </div>
      </div>
      <WeekRecipe />
    </Layoyt>
  );
};

export default PageAbout;
