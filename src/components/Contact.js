import * as React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="col-md-12 contact_header">
          <h2>CHĘTNIE ODPOWIEM NA WSZYSTKIE TWOJE PYTANIA!</h2>
        </div>
        <div className="row">
          <div className="col-md-12 right_side">
            <form
              name="KONTAKT HOMEPAGE"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="KONTAKT HOMEPAGE" />
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputName4">Imię</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName4"
                    name="Imie"
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Nazwisko</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    name="Nazwisko"
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputRmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  name="Email"
                ></input>
              </div>
              <div className="row">
                <div className="form-group col-md-2">
                  <label htmlFor="input">Płeć</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input"
                    name="Płeć"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <label htmlFor="inputAge">Wiek</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAge"
                    name="Wiek"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <label htmlFor="input">Wzrost</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input"
                    name="Wzrost"
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <label htmlFor="input">Waga</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input"
                    name="Waga"
                  ></input>
                </div>
                <div className="form-group col-md-7">
                  <label htmlFor="inputAge">Interesująca Cię oferta</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAge"
                    name="Oferta"
                  ></input>
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
  );
};

export default Contact;
