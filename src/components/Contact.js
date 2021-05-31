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
					<form>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputName4">Imię</label>
                <input type="name" className="form-control" id="inputName4"></input>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Nazwisko</label>
                <input type="password" className="form-control" id="inputPassword4"></input>
              </div>
            </div>
            <div className="form-group">
              <label for="inputRmail4">Email</label>
              <input type="Email" className="form-control" id="inputEmail4"></input>
            </div>
            <div className="row">
              <div className="form-group col-md-2">
                <label for="input">Płeć</label>
                <input type="text" className="form-control" id="input"></input>
              </div>
              <div className="form-group col-md-1">
                <label for="inputAge">Wiek</label>
                <input type="text" className="form-control" id="inputAge"></input>
              </div>
              <div className="form-group col-md-1">
                <label for="input">Wzrost</label>
                <input type="text" className="form-control" id="input"></input>
              </div>
              <div className="form-group col-md-1">
                <label for="input">Waga</label>
                <input type="text" className="form-control" id="input"></input>
              </div>
              <div className="form-group col-md-7">
                <label for="inputAge">Interesująca Cię oferta</label>
                <input type="text" className="form-control" id="inputAge"></input>
              </div>
            </div>
            <div className="form-group">
              <label for="comment">Wiadomość</label>
              <textarea className="form-control" rows="7" id="comment"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Wyślij</button>
          </form>
				</div>
			</div>
		</div>
    </div>
  );
};

export default Contact;
