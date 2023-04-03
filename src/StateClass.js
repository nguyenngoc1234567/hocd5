//  rcc
import React, { Component } from 'react';

class StateClass extends Component {
    constructor(props){

        super(props)
        this.state ={
            barnd: ' vifnast',
            model: 'vf9',
            color: 'white',
            age: 17


        }
        this.SetColor = this.SetColor.bind(this);
    }

    getAge = () =>{

        this.setState( {age:18} );
    }
        SetColor = () => {
            this.setState({color:'Red'});

        // SetColor(){
        //     // this.setState({color:'Red'});
        //     this.setState(prevState =>({
        //         color: (prevState.color == 'white')?'red':'yellow'
        //     }))
        
    }
    hello = (name) =>{
alert('xinchaocacban'+ name)

    }

    render() {
        if(this.state.age >=18){
            return(
                <h1>ban duoc uong ruou</h1>

            )
            }else{
                return (
                    <div>
                        <h1>thuonghieu{this.state.barnd}</h1>
                        <h1>kieu {this.state.model}</h1>
                        <h1>mau{this.state.color}</h1>
                        <button onClick={this.SetColor}>đổi màu</button>
                        <button onClick={this.getAge}>đổi age</button>
                        {/* <button onClick={this.hello}>hello</button> */}
                        <button onClick={ () =>this.hello('hihi')}>hello</button>
                    </div>
                );
                
            }
        }
       
    }


export default StateClass;