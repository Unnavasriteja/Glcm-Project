import './App.css';
import GlcmArray from './component/GlemArray';
import React, {useState} from 'react';
import SetMatrix from './component/SetMatrix';
import Properties from './component/Properties';

function App() {
  var [rows, setRows]=useState(6)
  var [cols, setCols]=useState(7)

  var [degree, setDegree] = useState(0)
  var [distance, setDistance] = useState(2)
  
  let Colour=[]
  for(var ii=0;ii<8;ii++){
      let innerColour=[]
      for(var jj=0;jj<8;jj++)
          innerColour.push(`#FFFFFF`)
      Colour.push(innerColour);
  }
  var [GlcmColour,setGlcmColour]=useState(Colour);
    var Matrix=()=>{
    var MatrixArray = []
    for (var i=0; i<rows; i++){
      var Array=[]
      for (var j=0; j<cols; j++)
        Array.push(Math.floor(Math.random() * 8) + 1); 
      MatrixArray.push(Array)
    }
        return MatrixArray;
             
  }
  var [Random,setRandom]=useState(Matrix())
  var Create=()=>{
    setRandom(Matrix())
  }
  var changecols=(event)=>{
    setCols(event.target.value===undefined?3:event.target.value<3?3:event.target.value)
  }
  
  var changerows=(event)=>{
    setRows(event.target.value===undefined?3:event.target.value<3?3:event.target.value)
  }
  return (
    <div className="App">
      <SetMatrix Create={Create} rows={rows} cols={cols} changerows={changerows} changecols={changecols}/>
      <Properties degree={degree} setDegree={setDegree} distance={distance} setDistance={setDistance} rows={rows} cols={cols}/>
      <GlcmArray Matrix={Random} degree={degree} distance={distance} GlcmColour={GlcmColour} setGlcmColour={setGlcmColour}/>
    </div>
  );
}

export default App;
