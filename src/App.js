import { useState } from "react";
import logo from './logo.svg';
import './App.css';



function Button({label, onClick}) {
  return (
    <button className="PassCodeBtn" onClick={onClick}>
	{label}
    </button>
  );
}


  
function Display({display}) {
  return (
    <div className="PassDisplay">
      {display}
    </div>    
  );
}

function App() {
	
	const[disp, setDisp] = useState("INPUT CODE");
	const[num, setNum] = useState(null);
	const[enter, setEnter] = useState(null);


	const numberClickHandler = (e) => {
		e.preventDefault();
		
		const value = e.target.innerHTML;
		if(enter === null){
			if(num === null){
				setNum(value);
				setDisp(value);
			} else {
				setNum(num+value);
				setDisp(num+value);
			}
		
			
			
		console.log(num);
		}
		
	}
	
	
	const enterClickHandler = (e) => {
		e.preventDefault();
		
		if (num === "2020001915") {
			setDisp("SUCCESS");
		
		} else { 
			setDisp("INVALID");
		}
		

		
	}
	
	const resetClickHandler = (e) => {
		e.preventDefault();	
		setDisp("INPUT CODE");
		setNum(null);

	}
	
	
	
  return (
  <div className="PassCode">
  <div className="PassCodeName">JPCNLSS BS-CPE3A</div>
    <Display display={disp}/>
	<div className="ButtonContainer">
      <Button label={7} onClick={numberClickHandler}/>
      <Button label={8} onClick={numberClickHandler}/>
      <Button label={9} onClick={numberClickHandler}/>
      <Button label={4} onClick={numberClickHandler}/>
      <Button label={5} onClick={numberClickHandler}/>
      <Button label={6} onClick={numberClickHandler}/>
      <Button label={1} onClick={numberClickHandler}/>
      <Button label={2} onClick={numberClickHandler}/>
      <Button label={3} onClick={numberClickHandler}/>
      <Button label={"Reset"} onClick={resetClickHandler}/>
      <Button label={0} onClick={numberClickHandler}/>
      <Button label={"Enter"} onClick={enterClickHandler}/>
     
     </div>
    </div>
 
    
  );
}

export default App;
