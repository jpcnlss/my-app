import logo from './logo.svg';
import './App.css';



function Button({label, onClick}) {
  return (
    <button className="Calculator" onClick={onClick}>
	{label}
    </button>
  );
}
  
function Display({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

function App() {
	const numberClickHandler = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
	
		console.log(value);
	
	}
	
	const operatorClickHandler = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
		
		console.log(value);
		
		
	}
	
	const equalClickHandler = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
		
		console.log(value);
	
	}
	
	const clearClickHandler = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
		
		console.log(value);
	
	}
	
  return (
  <div className="Calculator">
	
	<Display display={0}/>
	<div className={"ButtonContainer"}>
		<Button label={7} onClick={numberClickHandler}/>
		<Button label={8} onClick={numberClickHandler}/>
		<Button label={9} onClick={numberClickHandler}/>
		<Button label={"+"} onClick={operatorClickHandler}/>
		<Button label={4} onClick={numberClickHandler}/>
		<Button label={5} onClick={numberClickHandler}/>
		<Button label={6} onClick={numberClickHandler}/>
		<Button label={"-"} onClick={operatorClickHandler}/>
		<Button label={1} onClick={numberClickHandler}/>
		<Button label={2} onClick={numberClickHandler}/>
		<Button label={3} onClick={numberClickHandler}/>
		<Button label={"*"} onClick={operatorClickHandler}/>
		<Button label={"C"} onClick={clearClickHandler}/>
		<Button label={0} onClick={numberClickHandler}/>	
		<Button label={"="} onClick={equalClickHandler}/>
		<Button label={"÷"} onClick={operatorClickHandler}/>
		
		
		</div>
   </div>
    
  );
}

export default App;
