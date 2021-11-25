import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

var Properties=params=>{
    let toret=[]
    var upto=params.degree===0?params.cols:
            params.degree===90?params.rows:
            params.cols>params.rows?params.rows:params.cols
    for(var i=2;i<=upto;i++)
        toret[i]=i;
    console.log(toret)
    return(
       <div className="row"> 
            <div className="col-md-5" style={{"margin":"20px","padding":"20px"}}>
                <Slider min={0} max={135} step={45} dots={true} marks={{ 0: 0, 45: 45, 90: 90, 135:135 }} onChange={params.setDegree}/>
            </div>
            <div className="col-md-5" style={{"margin":"20px","padding":"20px"}}>
                <Slider 
                    min={2}
                    max={
                        params.degree===0?params.cols:
                        params.degree===90?params.rows:
                        params.cols>params.rows?params.rows:params.cols
                    } 
                    step={1} dots={true} marks={toret} onChange={params.setDistance}/>
            </div>
        </div>
    )
}

export default Properties;