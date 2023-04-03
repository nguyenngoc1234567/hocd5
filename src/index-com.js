import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from'./Header';
import Footer from'./Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));



// function Header (){
//   return (
//   <h1>Header </h1>
//   )
//   }
// function Footer (){
//   return (
//   <h1>Footer </h1>
//   )
//   }
// const phone = 123456;
// function App (){
//   return (
//     <>
//    <Header name="code" phone={phone}/>
//   <h1>noidung </h1>
//    <Footer/>
//     </>
//   )
//   }
const phone = 123456;
const products = [
  {
    name: 'Iphoen 1',
    price: 2000,
    color: 'red'
  },
  {
    name: 'Iphoen 2',
    price: 2000,
    color: 'red'
  }
]

// Tao App
function App(){
  return (
    <>
      <Header name="CodeGym123" phone={phone} products={products}/>
      <h1>Noi dung</h1>
      <Footer />
    </>
  )
}
root.render( 
    <>
      <App/> 
    </>
  )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
