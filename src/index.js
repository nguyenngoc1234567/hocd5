import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import StateFun from "./StateFun";
// import StateClass from "./StateClass";
// import Count from "./count";
// import Calculator from "./Calculator";
// import Counter from "./counter";
// import Selector from "./Selector"
import Todo from './Todo';
import TodoFun from './TodoFun';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render( 
    <>
      {/* <StateClass/> 
      <StateFun/>  */}
      {/* <Count/> 
      <Calculator/>  */}
      {/* <Counter/> 
      <Selector/>  */}
      {/* <Todo/>  */}
      <TodoFun/> 
    </>
  )

reportWebVitals();