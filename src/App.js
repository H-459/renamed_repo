import logo from './logo.svg';
import './App.css';
import * as S from "./components/styles.button"
import Radio from "./components/radio/"
import Checkbox from "./components/checkbox"
import { useState } from 'react';

//disabled
//size = small medium large
//color = success error

//<Radio propGroup={item.group} propOptions = {item.options}/>



const RADIOS = [
{group:"size", options:["small","medium","large"]},
{group:"color", options:["success","error"]},
{group:"variant",options:["contained","outline","text"]}

]


//console.log(RADIOS[0]);

function App() {

  const [colorVal, setColorVal] = useState("");
  const [sizeVal, setSizeVal] = useState("");
  const [variantVal, setVariantVal] = useState("");
  const [disabledStatus, setDisabledStatus] = useState("");

  const handleClick = (event) => {
    if( event.target.name === "color"){
      setColorVal(event.target.value)
    } else if( event.target.name === "size") {
      setSizeVal(event.target.value)
    } else if(event.target.name === "variant"){
      setVariantVal(event.target.value)
    }

  }

  const toggleDisable = (event) =>{
    setDisabledStatus(event.target.checked);
  }

  const buttonReset = (event) =>{
    setVariantVal("");
    setSizeVal("");
    setColorVal("");
  }

  return (
    <div className="App">
    <S.DynamicButton color ={colorVal} size ={sizeVal} variant = {variantVal} isDisabled = {disabledStatus}> Yay Button! </S.DynamicButton>
    <S.DynamicButton onClick = {buttonReset}>reset </S.DynamicButton>
    <p>
    {RADIOS.map(items => ( items.options.map(e => ( <Radio propGroup = {items.group} propOptions = {e} handleClick = {handleClick} />))
      ))}
    <Checkbox toggleDisable = {toggleDisable}/>
    </p>
    <div>{colorVal} </div>
    <div>{sizeVal} </div>
    <div>{variantVal} </div>

   
      
    </div>
  );
}

export default App;
