import * as React from "react";
import SEO from "../components/Seo";
import Cooperation from "../components/Cooperation";
import Layout from "../components/Layout";

const PageKontakt = () => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <div className="container default_page">
        <div className="contact_header">
          <h2>SKONTAKTUJ SIĘ ZE MNĄ!</h2>
        </div>
        <div className="row">
          <div className="col-md-6 contact_type">
            <h3>Marta Gąsiorowska</h3>
            <div className="col-md-12">
              <div className="contact_svg">
                <span>
                  <a href="tel:1-562-867-5309">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-telephone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                    <span>+44 700258985</span>
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="contact_svg">
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
                  <span>marta93gasiorowska@wp.pl</span>
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="contact_svg">
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
                  <span>Marta Gąsiorowska dietetyk on-line</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <div className="row">
                <div className="form-group col-md-4">
                  <label for="inputName4">Imię</label>
                  <input type="name" className="form-control" id="inputName4" />
                </div>
                <div className="form-group col-md-8">
                  <label for="inputRmail4">Email</label>
                  <input
                    type="Email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
              </div>
              <div className="form-row"></div>
              <div className="form-group">
                <label for="comment">Wiadomość</label>
                <textarea
                  className="form-control"
                  rows="7"
                  id="comment"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Wyślij
              </button>
            </form>
          </div>
        </div>
        <div className="contact_form">
          <div className="col-md-12 contact_header">
            <h2>LUB WYPEŁNIJ FORMULARZ SZCZEGÓŁOWY!</h2>
          </div>
          <div className="row">
            <div className="col-md-12 right_side">
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="inputName4">Imię</label>
                    <input
                      type="name"
                      className="form-control"
                      id="inputName4"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4">Nazwisko</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputRmail4">Email</label>
                  <input
                    type="Email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="row">
                  <div className="form-group col-md-2">
                    <label for="input">Płeć</label>
                    <input type="text" className="form-control" id="input" />
                  </div>
                  <div className="form-group col-md-1">
                    <label for="inputAge">Wiek</label>
                    <input type="text" className="form-control" id="inputAge" />
                  </div>
                  <div className="form-group col-md-1">
                    <label for="input">Wzrost</label>
                    <input type="text" className="form-control" id="input" />
                  </div>
                  <div className="form-group col-md-1">
                    <label for="input">Waga</label>
                    <input type="text" className="form-control" id="input" />
                  </div>
                  <div className="form-group col-md-7">
                    <label for="inputAge">Interesująca Cię oferta</label>
                    <input type="text" className="form-control" id="inputAge" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="comment">Wiadomość</label>
                  <textarea
                    className="form-control"
                    rows="7"
                    id="comment"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Wyślij
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Cooperation />
    </Layout>
  );
};

export default PageKontakt;
