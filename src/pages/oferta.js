import * as React from "react";
import SEO from "../components/Seo";
import Layoyt from "../components/Layout";

const PageOffer = () => {
  return (
    <Layoyt>
      <SEO title="Oferta" />
      <div className="container offer_page">
        <div className="motivation_text">
          <h2>
            "Sukces to suma niewielkiego wysiłku powtarzanego z dnia na dzień."
            - <i>Robert Collier</i>
          </h2>
        </div>
        <div className="offer_schame">
          <h1>Zdobądź upragnioną sylwetkę i zdrowe nawyki żywieniowe</h1>
          <p>tu pojdzie schemacik</p>
        </div>
        <div className="offer_header">
          <h2>Indywidualna konsultacja</h2>
        </div>
        <div className="col-md-12 consultation_content">
          <div className="row">
            <div className="col-md-4 consultation_left">
              <h1>KONSULTACJA</h1>
              <div className="consultation_left_box">
                <h2>CO ZYSKUJESZ</h2>
                <p>
                  Uzyskaj odpowiedzi na wątpliwości i wszelkie pytania w trakcie
                  konsultacji e-mailowej.
                </p>
              </div>
              <div className="consultation_price">
                <h2>25 £</h2>
              </div>
            </div>
            <div className="col-md-8 consultation_right">
              <div className="consultation_text">
                <p>
                  <strong>
                    Konsultacja E-mail skierowana jest do osób, które:
                  </strong>
                </p>
                <p>
                  • chcą wprowadzić zdrowy tryb życia, ale nie wiedzą jak to
                  zrobić,
                </p>
                <p>
                  • interesują się zdrowym stylem życia, czytają dużo książek,
                  artykułów i mają zastrzeżenia,
                </p>
                <p>• mają wątpliwości związane ze swoją dietą,</p>
                <p>• nie wiedzą czy ich metody żywieniowe są prawidłowe,</p>
                <p>
                  • odczuwają potrzebę objaśnienia konkretnych problemów
                  żywieniowych.
                </p>
                <p>&nbsp;</p>
                <p>
                  <b>Postępowanie krok po kroku:</b>
                </p>
                <p>1. Płacisz za Konsultację</p>
                <p>2. Wysyłasz e-maila z pytaniami i wątpliwościami</p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="offer_header">
          <h2>Wybierz pakiet dla siebie</h2>
        </div>
        <div className="offer_boxes">
          <div className="row">
            <div className="col-md-4 offer_box_one">
              <div className="offer_time">
                <h3>1 miesiąc współpracy online</h3>
              </div>
              <div className="offer_price">
                <div className="offer_type_price">
                  <h4>Dieta</h4>
                </div>
                <span className="price">
                  <span className="price_number">60</span>
                  <span className="price_currency">£ / miesiąc</span>
                </span>
              </div>
              <div className="offer_price">
                <div className="offer_type_price">
                  <h4>Dieta w chorobie</h4>
                </div>
                <span className="price">
                  <span className="price_number">70</span>
                  <span className="price_currency">£ / miesiąc</span>
                </span>
              </div>
            </div>
            <div className="col-md-4 offer_box_two">
              <div className="offer_time">
                <h3>3 miesiące współpracy online</h3>
              </div>
              <div className="offer_type_price">
                <h4>Dieta</h4>
                <span className="price">
                  <span className="price_number">150</span>
                  <span className="price_currency">50 £ / miesiąc</span>
                </span>
              </div>
              <div className="offer_price">
                <div className="offer_type_price">
                  <h4>Dieta w chorobie</h4>
                </div>
                <span className="price">
                  <span className="price_number">180</span>
                  <span className="price_currency">60 £ / miesiąc</span>
                </span>
              </div>
            </div>
            <div className="col-md-4 offer_box_tree">
              <div className="offer_time">
                <h3>6 miesiący współpracy online</h3>
              </div>
              <div className="offer_type_price">
                <h4>Dieta</h4>
                <span className="price">
                  <span className="price_number">240</span>
                  <span className="price_currency">40 £ / miesiąc</span>
                </span>
              </div>
              <div className="offer_price">
                <div className="offer_type_price">
                  <h4>Dieta w chorobie</h4>
                </div>
                <span className="price">
                  <span className="price_number">300</span>
                  <span className="price_currency">50 £ / miesiąc</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="offer_list">
            <p>
              Indywidualne dopasowanie diety na 7 dni (szczególy diety ustalimy
              podczas wstępnego wywiadu dietetycznego)
            </p>
            <ul>
              <li>
                przepisy do każdego posiłku uwzględniając czas przygotowania
                oraz kaloryczność
              </li>
              <li>
                cenne wskazówki, komentarze dotyczące konkretnych produktów,
                techniki obróbki kulinarnej itp.
              </li>
              <li>lista zakupów</li>
              <li>modyfikacje posiłków, składników w trakcie diety</li>
              <li>jadłospis w aplikacji lub w wersji papierowej</li>
            </ul>
            <p>Kontrola postępów</p>
            <ul>
              <li>podsumuwujący wywiad dietetyczny co 7 dni</li>
              <li>
                stały kontakt przez cały okres diety (messenger lub e-mail)
              </li>
            </ul>
          </div>
          <div className="diets_discription">
            <p>UWAGA!</p>
            <p>
              Przy diecie odchudzającej domowy 7-dniowy plan treningowy na
              redukcję tkanki tłuszczowej - GRATIS!
            </p>
          </div>
          <div className="offer_boxes">
            <div className="row">
              <div className="col-md-4 offer_box_one">
                <div className="offer_time">
                  <h3>Miesięczny plan treningowy</h3>
                </div>
                <div className="offer_price">
                  <div className="offer_type_price">
                    <h4>Plan treningowy</h4>
                  </div>
                  <span className="price">
                    <span className="price_number">60</span>
                    <span className="price_currency">£ / miesiąc</span>
                  </span>
                </div>
                <div className="offer_price">
                  <div className="offer_type_price">
                    <h4>Plan + dieta</h4>
                  </div>
                  <span className="price">
                    <span className="price_number">100</span>
                    <span className="price_currency">£ / miesiąc</span>
                  </span>
                </div>
              </div>
              <div className="col-md-4 offer_box_two">
                <div className="offer_time">
                  <h3>3 miesięczny plan treningowy</h3>
                </div>
                <div className="offer_type_price">
                  <h4>Plan treningowy</h4>
                  <span className="price">
                    <span className="price_number">120</span>
                    <span className="price_currency">40 £ / miesiąc</span>
                  </span>
                </div>
                <div className="offer_price">
                  <div className="offer_type_price">
                    <h4>Plan + dieta</h4>
                  </div>
                  <span className="price">
                    <span className="price_number">240</span>
                    <span className="price_currency">83 £ / miesiąc</span>
                  </span>
                </div>
              </div>
              <div className="col-md-4 offer_box_tree">
                <div className="offer_time">
                  <h3>6 miesięczny plan treningowy</h3>
                </div>
                <div className="offer_type_price">
                  <h4>Plan treningowy</h4>
                  <span className="price">
                    <span className="price_number">240</span>
                    <span className="price_currency">40 £ / miesiąc</span>
                  </span>
                </div>
                <div className="offer_price">
                  <div className="offer_type_price">
                    <h4>Plan + dieta</h4>
                  </div>
                  <span className="price">
                    <span className="price_number">400</span>
                    <span className="price_currency">67 £ / miesiąc</span>
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="offer_list">
                  <ul>
                    <li>
                      7 dniowy plan treningowy dopasowany do Twojego celu
                      treningowego
                    </li>
                  </ul>
                  <p>Kontrola postępów</p>
                  <ul>
                    <li>raport co 7 dni</li>
                    <li>
                      stały kontakt przez cały okres diety (messenger lub
                      e-mail)
                    </li>
                  </ul>
                </div>
                <div className="diets_discription">
                  <p>UWAGA!</p>
                  <p>
                    Indzwidualne dopasowanie diety na 7 dni (szczegóły diety
                    ustalimy podczas wstępnego wywiadu dietetycznego
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layoyt>
  );
};

export default PageOffer;
