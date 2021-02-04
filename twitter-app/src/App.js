import React, { useEffect, useState } from "react";
import "./App.css";
import ClintonPage from "./ClintonPage";
import TrumpPage from "./TrumpPage";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { clintonAction, trumpAction } from "./Actions/tweetActions";

function App() {
  const [toggleClinton, setToggleClinton] = useState(false);
  const [toggleTrump, setToggleTrump] = useState(false);
  const dispatch = useDispatch();

  const handleToggleTrump = () => {
    setToggleClinton(false);
    setToggleTrump(true);
    dispatch(trumpAction);
  };
  const handleToggleClinton = () => {
    setToggleClinton(true);
    setToggleTrump(false);
    dispatch(clintonAction);
  };

  return (
    <div className="App">
      <header>
        <h1>Twitter Updates</h1>
      </header>
      <div className="toggleButtons">
        <Button variant="contained" color="primary" onClick={handleToggleTrump}>
          Trump Page
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggleClinton}
        >
          Clinton Page
        </Button>
      </div>
      <div>
        <div className="mainPage">
          {toggleClinton && <ClintonPage />}
          {toggleTrump && <TrumpPage />}
        </div>
      </div>
    </div>
  );
}

export default App;
