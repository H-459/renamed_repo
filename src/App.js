import logo from './logo.svg';
import './App.css';
import * as S from "./components/styles.button"
import Radio from "./components/radio/"
import Checkbox from "./components/checkbox"
import { useState } from 'react';




const RADIOS = [
{group:"size", options:["small","medium","large"]},
{group:"color", options:["success","error"]},
{group:"variant",options:["contained","outline","text"]}
]

function App() {

  const [colorVal, setColorVal] = useState("");
  const [sizeVal, setSizeVal] = useState("");
  const [variantVal, setVariantVal] = useState("");
  const [disabledStatus, setDisabledStatus] = useState("");
  const [radioChecked, setRadioChecked] = useState(false)

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
    setRadioChecked("")

  }

  return (
    <div className="App">
    <S.DynamicButton color ={colorVal} size ={sizeVal} variant = {variantVal} isDisabled = {disabledStatus}> button text </S.DynamicButton>
    <S.DynamicButton onClick = {buttonReset}>reset </S.DynamicButton>
    <p>
    {RADIOS.map(items => (<p> {items.group}: { items.options.map(e => ( <Radio setRadioChecked = {radioChecked} propGroup = {items.group} propOptions = {e} handleClick = {handleClick} />))
      }</p>))}
    <Checkbox toggleDisable = {toggleDisable}/>
    </p>
    <div>{colorVal} </div>
    <div>{sizeVal} </div>
    <div>{variantVal} </div>

   
      
    </div>
  );
}

export default App;
