import * as React from "react";

const Cooperation = () => {
  return (
    <div className="container cooperation_component">
      <div className="dietician">
        <h2>Dlaczego dietetyk?</h2>
        <div className="row">
          <div className="col-md-6">
            <p>
              Dietetyk jest specjalistą z obszaru ochrony zdrowia, którego
              domeną jest żywienie człowieka w zdrowiu i w chorobie. Dietetyk
              zajmuje się żywieniem osób indywidualnych i żywieniem zbiorowym,
              edukacją żywieniową społeczeństwa oraz promocją zdrowia. O
              dietetyku mówi się, że jest specjalistą interdyscyplinarnym, bo
              posiada wiedzę także z zakresu anatomii, biochemii, medycyny i
              psychologii.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Sport i odżywianie się w zdrowym stylu życia zawsze mi
              towarzyszyły. W życiu zawodowym zawsze chciałam robić coś nie
              tylko z pasją, ale coś, co będzie wiązało się z pomocą dla drugiej
              osoby. Uśmiech, radość i zadowolenie pacjenta z dobrze
              przeprowadzonej usługi to najlepsze co możesz otrzymać.
              Zastanawiałeś/łaś się kiedyś co czuje lekarz z dobrze
              przeprowadzonej operacji? Jakie towarzyszą mu emocje, gdy
              przychodzi do niego rodzina pacjenta z podziękowaniami? Przykładów
              nie trzeba szukać daleko. Na pewno każdy z was wręczył komuś
              prezent czy pomógł staruszce na ulicy. W odpowiedzi za te
              pozytywne czyny zyskałeś/łaś podziękowanie, uśmiech i zadowolenie.
              Jakie wtedy Tobie towarzyszyły emocje?
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 progress_text">
        <h3>
          Dieta odpowiada za <span className="highlight">70%</span> sukcesu!
          <span>
            Regularne ćwiczenia to <span className="highlight orange">30%</span>
            .
          </span>
        </h3>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-success "
          role="progressbar"
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          70%
        </div>
        <div
          className="progress-bar bg-warning "
          role="progressbar"
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          30%
        </div>
      </div>
      <h2>Jak wygląda współpraca?</h2>
      <div className="box-container">
        <div className="row mr-0 ml-0">
          <div className="col-md-3 box box_one">
            <h4>Krok 1</h4>
            <div className="box_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-chat-left-dots"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
            <p>Skontaktuj się</p>
          </div>
          <div className="col-md-3 box box_two">
            <h4>Krok 2</h4>
            <div className="box_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </div>
            <p>Wybierz dietę</p>
          </div>
          <div className="col-md-3 box box_three">
            <h4>Krok 3</h4>
            <div className="box_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-card-checklist"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>
            </div>
            <p>Stosuj są</p>
          </div>
          <div className="col-md-3 box box_four">
            <h4>Krok 4</h4>
            <div className="box_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-person-check"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path
                  fillRule="evenodd"
                  d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </div>
            <p>Ciesz się zdrowiem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
