import { useState } from 'react';
import {data} from './data/data';

import ImcCalc from './components/ImcCalc';
import ImcTable from './components/ImcTable';

import './App.css';

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  
  const calcImc = (e, height, weight) => {
    console.log("executou")
  }

  return (
    <div className='container'>
      {! imc ? (
        <ImcCalc calcIm={calcImc}c/>
      ): (
        <ImcTable/>
      )
      }
    </div>
  )
}

export default App
