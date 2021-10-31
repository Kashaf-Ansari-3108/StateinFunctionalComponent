import image from './react.svg';
import './App.css';
import AgeCalc from './classComponents/AgeCalculator';
import MediaCard from './FunctionComponentandProps/MediaCard';
import Gate from './FunctionComponentandProps/Gate';
import StateinFunctionArray from './StateInFunctionalComponent/StateinFunction';
import StateinFunctionNum from './StateInFunctionalComponent/StateinFunctionNum';
import StateinFunctionStr from './StateInFunctionalComponent/StateinFunctionStr';

function App() {


return(
<>
<h1>State in Functional Componenet</h1>
<StateinFunctionNum/>
<StateinFunctionStr/>
<StateinFunctionArray/>



{/* <MediaCard
title = {"THIS IS TITLE"}
body = {(<p><b>THIS IS BODY TEXT</b>.Lorem Ipsum is simply dummy text of the printing and typesetting
   industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
   unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
   survived not only five centuries, but also the leap into electronic typesetting, remaining 
   essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
   containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
   PageMaker including versions of Lorem Ipsum.</p>)}
imageUrl = {image}

/>
<Gate isOpen = {true}/> */}

</>);



  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
