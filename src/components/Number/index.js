import React, { useEffect, useState } from 'react';
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

const Number = () => {
    const [number, setNumber] = useState(1);
    
    useEffect(() => {
        const inter = setInterval(() => setNumber(currentNumber => {
            currentNumber++;

            // Si queremos detener el contador en 100:
            if(currentNumber === 100){
                clearInterval(inter);
            }
            
            // Si queremos reiniciar el contador después de 100:
            // if(currentNumber > 100){
            //     currentNumber = 1;
            // }

            return currentNumber;
        }), 1000);
    }, []);
    
    return (
        <div>
            <h1>{number}</h1>
            {number % 3 === 0 ? 
            number % 5 === 0 ? <FizzBuzz /> : <Fizz /> 
            : number % 5 === 0 ? <Buzz /> : null}
        </div>
    );
}

export default Number;