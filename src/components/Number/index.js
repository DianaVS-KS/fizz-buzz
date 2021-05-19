import React from 'react';
import './styles.css';

class Fizz extends React.Component {
    render(){
        return <h1 className="fizz">FIZZ</h1>;
    }
}

class Buzz extends React.Component {
    render(){
        return <h1 className="buzz">BUZZ</h1>;
    }
}

class FizzBuzz extends React.Component {
    render(){
        return <h1 className="fizz-buzz">FIZZ BUZZ</h1>;
    }
}

const numbers = [];
for(let i=1; i<101; i++){
    numbers.push(i);          
}

const Number = () => {
    return (
        numbers.map(number => (
            number % 3 === 0 ? 
            number % 5 === 0 ? <FizzBuzz /> : <Fizz /> 
            : number % 5 === 0 ? <Buzz /> : <h1>{number}</h1>)
        )
    );
}

export default Number;