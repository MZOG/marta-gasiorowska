import * as React from "react";
import SEO from "../components/Seo";
import Layoyt from "../components/Layout";
import dietSlimm from "../images/odchudzająca2.jpg";
import dietActive from "../images/active.jpg";
import dietPragnant from "../images/pragnant.jpg";
import { Link } from "gatsby";

const PageTrening = () => {
  return (
    <Layoyt>
      <SEO title="Dieta & Trening" />
      <div className="container diet_page">
        <div className="row slimming">
          <div className="col-xl-6 col-md-12 slimming_content">
            <div className="slimming_header">
              <h2>DIETA ODCHUDZAJĄCA</h2>
            </div>
            <div className="slimming_text">
              <p>
                Jak wytrwać jedząc mniej? Tym nie musisz się martwić. Kluczem do
                sukcesu jest odpowiednio zbilansowana dieta, posiłki w
                regularnych odstępach czasowych oraz dobranie właściwych
                produktów, które będą sprawiły uczucie nasycenia. Jesteś osobą
                zabieganą? Nic się nie martw. Posiłki dopasuję do Twoich
                preferencji i stylu życia.
              </p>
              <p>
                By osiągnąć lepsze i szybsze rezultaty, dodatkowo w ramach ceny
                udostępnię Tobie tygodniowy plan treningowy wraz z filmikami
                instruktażowymi do konkretnych ćwiczeń.
              </p>
              <p>
                Nie bój się! Trening nie ma być ciężki tylko skuteczny. Nie
                trzeba robić wyczerpujących ćwiczeń, aby schudnąć. Dieta jest
                głównym czynnikiem do utraty wagi. Dodatkowa aktywność fizyczna
                ma usprawnić proces odchudzania.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 slimming_image">
            <img src={dietSlimm} alt="odchudzająca" className="img-fluid" />
          </div>

          <div className="col-md-12 progress_text">
            <h4>Dieta odpowiada za 70% sukcesu! Regularne ćwiczenia to 30%.</h4>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
              role="progressbar"
              //style="width: 70%"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
            <div
              className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
              role="progressbar"
              //="width: 30%"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              30%
            </div>
          </div>
          <div className="diet_motto">
            <h4>
              Dieta i ruch są drogą do zdrowego stylu życia. Zyskaj nie tylko
              wygląd, lecz także lepsze samopoczucie.
            </h4>
            <h4>NAPISZ DO MNIE I OMÓWIMY SZCZEGÓŁY!</h4>
          </div>
          <div className="slimming_header_mid">
            <h2>DODATKOWO ODE MNIE:</h2>
          </div>
          <div className="row">
            <div className="col-md-5 box_one">
              <p>DOMOWY PLAN TRENINGOWY NA CAŁY TYDZIEŃ</p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 box_two">
              <p>PRZEWODNIK ZDROWEGO ŻYWIENIA</p>
            </div>
          </div>
        </div>
        <Link to="/przepisy/posilki-odchudzajace">
        <div className="button">
          <button>SPRAWDŻ PRZEPISY!</button>
        </div>
        </Link>
        <div className="active">
        <div className="row">
          
          <div className="col-xl-6 col-md-12 active_content">
          <div className="active_header">
            <h2>DIETA DLA AKTYWNYCH FIZYCZNIE</h2>
          </div>
          <div className="active_text">
            <p>
              Aby przetrwać wyczerpujące treningi należy zaopatrzyć swój
              organizm w odpowiednie paliwo. Prawidłowa ilość węglowodanów,
              białka i tłuszczów jest bardzo ważna, jeśli chcemy mieć energię.
              Żyjemy w czasach zabieganych. Niektórzy poza sportem na co dzień
              zajmują się innymi obowiązkami tj. rodzina czy inna praca. W
              takiej sytuacji ciężko jest wkomponować nam każdego dnia właściwą
              dietę. Korzystając z pomocy specjalisty do spraw żywności możesz
              zaoszczędzić czas, skupić się na sukcesach zawodowych i być
              spokojnym, że Twoje ciało zawsze będzie w pełni przygotowane na
              ciężkie treningi. Twoim kluczem do sukcesu jest odpowiednia
              gramatura posiłków, stosowne ich pory i wartościowe produkty do
              szybkiej regeneracji!
            </p>
          </div>
          </div>
          <div className="col-xl-6 col-md-12 active_image">
            <img src={dietActive} alt="odchudzająca" className="img-fluid" />
          </div>
          </div>
          <div className="col-md-12 progress_text">
            <h4>Dieta odpowiada za 70% sukcesu! Regularne ćwiczenia to 30%.</h4>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
              role="progressbar"
              //style="width: 70%"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
            <div
              className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
              role="progressbar"
              //="width: 30%"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              30%
            </div>
          </div>
          <div className="active_diet_motto">
            <h4>
              Sukces to suma niewielkiego wysiłku powtarzanego z dnia na dzień.
            </h4>
            <h4>NAPISZ DO MNIE I OMÓWIMY SZCZEGÓŁY!</h4>
          </div>
        </div>
        <Link to="/przepisy/posilki-na-silownie">
        <div className="active-button">
          <button>SPRAWDŻ PRZEPISY!</button>
        </div>
        </Link>
        <div className="pragnant">
          <div className="row">
          
          <div className="col-xl-6 col-md-12 pragnant_content">
          <div className="pragnant_header">
            <h2>DIETA DLA KOBIET W CIĄŻY I KARMIĄCYCH</h2>
          </div>
          <div className="pragnant_text">
            <p>
              Podczas ciąży rośnie zapotrzebowanie na substraty pokarmowe. W
              czasie karmienia piersią popyt ten jest o wiele większy. Płód jest
              mocno związany ze składnikami odżywczymi i energetycznymi
              pobieranymi z krwiobiegu matki. Z kolei żywienie noworodka jest
              związane ze substancjami znajdującymi się w mleku matki.
              Nieodpowiednie odżywianie w trakcie ciąży może negatywnie wpływać
              na jej rozwój, a także spowodować wiele powikłań.
            </p>
            </div>
            </div>
            <div className="col-xl-6 col-md-12 pragnant_image">
            <img
              src={dietPragnant}
              alt="dla kobiet w ciąży"
              className="img-fluid"
            />
          </div>
            <div className="col-md-12">
              <p className="pragnant__text">Możliwe powikłania wynikające z nieodpowiedniej bądź źle zbilansowanej diety:</p>
            <ul>
              <li>poronienia</li>
              <li>poród przedwczesny</li>
              <li>
                zaśniad groniasty - nieprawidłowe zapłodnienie komórki jajowej
              </li>
              <li>
                niedobór kwasu foliowego - niedokrwistosc płodu, pierwotne wady
                cewy nerwowej
              </li>
              <li>niedobór jodu - kretynizm</li>
              <li>niedobór żelaza - niedokrwistość</li>
              <li>niedobór witaminy D i wapnia - krzywica</li>
            </ul>
            <p>
              Aby nie dopuścić do tych niepożądanych skutków, należy wdrożyć w
              tym okresie odpowiednio zbilansowaną dietę, bogatą w odpowiednie
              składniki odżywcze, witaminy i minerały.
            </p>
            </div>
          </div>
          <div className="diet_motto">
            <h4>Zadbaj o siebie i swoje dziecko od samego początku.</h4>
            <h4>NAPISZ DO MNIE I OMÓWIMY SZCZEGÓŁY!</h4>
          </div>
        </div>
        <Link to="/przepisy/posilki-dla-kobiet-w-ciazy-i-karmiacych">
        <div className="pragnant_button">
          <button>SPRAWDŻ PRZEPISY!</button>
        </div>
        </Link>
        <div className="training_title">
          <h2>TRENINGI</h2>
        </div>
        <div className="row">
          <div className="col-md-6 trening_type_one">
            <div className="trening_type">
              <h3>Trening na siłowni</h3>
            </div>
            <p>
              Jeśli potrzebujesz urozmaiconego programu treningowego z dostępem
              do dużej liczby sprzętu, miejsca albo chwili relaksu w saunie bądź
              masażu to siłownia jest idealnym miejscem dla Ciebie. Jeżeli
              chcesz na poważnie powalczyć o swoją sylwetkę , trening musi
              bardziej oddziaływać na Twoje ciało. Dzięki większej liczbie
              urządzeń i przestrzeni osiągniesz swój cel. Ułożony plan
              treningowy zawiera różnorodny zestaw ćwiczeń ze sprzętem
              dopasowany do Twojego celu treningowego.
            </p>
          </div>
          <div className="col-md-6 trening_type_two">
            <div className="trening_type">
              <h3>Trening w domu</h3>
            </div>
            <p>
              Codzienne obowiązki czy dojazd na siłownie nie pozwalają Tobie
              znaleźć wolnego czasu na treningi? Przeszkadza Ci duża liczba osób
              na siłowni? A może wolisz ćwiczyć w domu albo zaoszczędzić
              pieniądze? Jeśli odpowiedź na powyższe pytania jest twierdząca to
              ten trening jest właśnie dla Ciebie. Domowy plan treningowy
              zawiera ćwiczenia z wykorzystaniem sprzętów domowego użytku,
              sprzętów, którymi dysponujesz (np. hantle, kettlebells) albo z
              obciążeniem własnego ciała. Udostępniona instrukcja w postaci
              filmików i opisu ułatwi Tobie przeprowadzenie właściwego treningu.
            </p>
          </div>
        </div>
        <div className="training_discription">
          <p>UWAGA!</p>
          <p>
            Przy diecie odchudzającej domowy 7-dniowy plan treningowy na
            redukcję tkanki tłuszczowej - GRATIS!
          </p>
        </div>
        <Link to="/oferta">
        <div className="active-button">
          <button>SPRAWDŻ OFERTĘ!</button>
        </div>
        </Link>
      </div>
    </Layoyt>
  );
};

export default PageTrening;
