import * as React from "react";

const FloatingBoxes = () => {
    return (
        <div className="floating__boxes row">
            <div className="col-md-3">
                <div className="floating__boxes-item">
                    <p>Indywidualny plan diety/treningowy</p>
                </div>
            </div>
            <div className="col-md-3 padding_top">
                <div className="floating__boxes-item">
                    <p>Kontrole efektów</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="floating__boxes-item">
                    <p>Wsparcie i motywację</p>
                </div>
            </div>
            <div className="col-md-3 padding_top">
                <div className="floating__boxes-item">
                    <p>Smaczne i proste przepisy</p>
                </div>
            </div>
        </div>
  );
};

export default FloatingBoxes;
