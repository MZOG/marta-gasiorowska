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
            <div className="col-md-12"></div>
            <div className="col-md-12">
              <div className="contact_svg">
                <a href="mailto:marta.dietaonline@gmail.com">
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
                  <span>marta.dietaonline@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="contact_svg">
                <a href="https://www.facebook.com/Dietetyk-Online-Marta-G%C4%85siorowska-101727995436887">
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
                  <span>Dietetyk Online - Marta Gąsiorowska</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form
              name="KONTAKT STRONA"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="KONTAKT STRONA" />
              <div className="row">
                <div className="form-group col-md-4">
                  <label htmlFor="inputName4">Imię</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName4"
                    name="Imię"
                  />
                </div>
                <div className="form-group col-md-8">
                  <label htmlFor="inputRmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="Nazwisko"
                  />
                </div>
              </div>
              <div className="form-row"></div>
              <div className="form-group">
                <label htmlFor="comment">Wiadomość</label>
                <textarea
                  className="form-control"
                  rows="7"
                  id="comment"
                  name="Wiadomość"
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
              <form
                name="KONTAKT SZCZEGOLOWY"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="KONTAKT SZCZEGOLOWY"
                />
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputName4">Imię</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName4"
                      name="Imię"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Nazwisko</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      name="Nazwisko"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputRmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    name="Email"
                  />
                </div>
                <div className="row">
                  <div className="form-group col-md-2">
                    <label htmlFor="input">Płeć</label>
                    <input
                      type="text"
                      className="form-control"
                      id="input"
                      name="Płeć"
                    />
                  </div>
                  <div className="form-group col-md-1">
                    <label htmlFor="inputAge">Wiek</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAge"
                      name="Wiek"
                    />
                  </div>
                  <div className="form-group col-md-1">
                    <label htmlFor="input">Wzrost</label>
                    <input
                      type="text"
                      className="form-control"
                      id="input"
                      name="Wzrost"
                    />
                  </div>
                  <div className="form-group col-md-1">
                    <label htmlFor="input">Waga</label>
                    <input
                      type="text"
                      className="form-control"
                      id="input"
                      name="Waga"
                    />
                  </div>
                  <div className="form-group col-md-7">
                    <label htmlFor="inputAge">Interesująca Cię oferta</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAge"
                      name="Oferta"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Wiadomość</label>
                  <textarea
                    className="form-control"
                    rows="7"
                    id="comment"
                    name="Wiadomość"
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
