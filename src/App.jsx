import { useState, useEffect } from 'react'
import './App.css'
import Abril from './components/Abril';
import Agosto from './components/Agosto';
import Diciembre from './components/Diciembre';
import Enero from './components/Enero'
import Febrero from './components/Febrero';
import Julio from './components/Julio';
import Junio from './components/Junio';
import Marzo from './components/Marzo';
import Mayo from './components/Mayo';
import Noviembre from './components/Noviembre';
import Octubre from './components/Octubre';
import Septiembre from './components/Septiembre';

function App() {

  const [date, setDate]= useState("selectMonth")

  const handleOnChange = (e) => {
    setDate(e.target.value);
  };

  const [enero, setEnero]= useState(false)
  const [febrero, setFebrero]= useState(false)
  const [marzo, setMarzo]= useState(false)
  const [abril, setAbril]= useState(false)
  const [mayo, setMayo]= useState(false)
  const [junio, setJunio]= useState(false)
  const [julio, setJulio]= useState(false)
  const [agosto, setAgosto]= useState(false)
  const [sep, setSep]= useState(false)
  const [octubre, setOctubre]= useState(false)
  const [noviembre, setNoviembre]= useState(false)
  const [dic, setDic]= useState(false)

  useEffect(() => {
    date === "enero"
      ? setEnero(true)
      : setEnero(false);
    date === "febrero" ? setFebrero(true) : setFebrero(false);
    date === "marzo" ? setMarzo(true) : setMarzo(false);
    date === "abril" ? setAbril(true) : setAbril(false);
    date === "mayo" ? setMayo(true) : setMayo(false);
    date === "junio" ? setJunio(true) : setJunio(false);
    date === "julio" ? setJulio(true) : setJulio(false);
    date === "agosto" ? setAgosto(true) : setAgosto(false);
    date === "sep" ? setSep(true) : setSep(false);
    date === "octubre" ? setOctubre(true) : setOctubre(false);
    date === "noviembre" ? setNoviembre(true) : setNoviembre(false);
    date === "dic" ? setDic(true) : setDic(false);
  }, [date]);

  return (
    <div className="App">
      <div class="hero min-h-screen bg-cat">
        <div class="hero-overlay bg-opacity-10"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">¿Que michi programador eres según tu mes de nacimiento?</h1>
              <a href='#select' ><button class="btn glass">Empezar</button></a>
            </div>
          </div>
      </div>


      <div id='select' className='min-h-screen bg-purple-900'>


               
      <div className='flex justify-center pt-20'>
            <select value={date} onChange={handleOnChange} class="select select-primary w-full max-w-xs">
                <option value="selectMonth" disabled selected>Tu mes de nacimiento</option>
                <option value="enero">Enero</option>
                <option value="febrero">Febrero</option>
                <option value="marzo">Marzo</option>
                <option value="abril">Abril</option>
                <option value="mayo">Mayo</option>
                <option value="junio">Junio</option>
                <option value="julio">Julio</option>
                <option value="agosto">Agosto</option>
                <option value="sep">Septiembre</option>
                <option value="octubre">Octubre</option>
                <option value="noviembre">Noviembre</option>
                <option value="dic">Diciembre</option>
            </select>
        </div>


        {enero && <Enero/>}
        {febrero && <Febrero/>}
        {marzo && <Marzo/>}
        {abril && <Abril/>}
        {mayo && <Mayo/>}
        {junio && <Junio/>}
        {julio && <Julio/>}
        {agosto && <Agosto/>}
        {sep && <Septiembre/>}
        {octubre && <Octubre/>}
        {noviembre && <Noviembre/>}
        {dic && <Diciembre/>}
        
      </div>

      

    </div>
  )
}

export default App
