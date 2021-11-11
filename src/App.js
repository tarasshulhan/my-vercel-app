import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import Picture from './Picture';

function App() {

  let [astroImg, setAstroImg] = useState(null);

  useEffect(() => {
    axios.get('https://random-data-api.com/api/crypto_coin/random_crypto_coin')
      .then(res => {
        setAstroImg(res.data)
      }).catch(err => {
        console.error(err);
      })
  },[])

  return (
    <div className="App">
      {astroImg && <Picture picUrl={astroImg.logo} picTitle={astroImg.acronym} picDesc={astroImg.coin_name}/>}
    </div>
  );
}

export default App;
