import React, { useContext } from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CounterContext } from '../App';
import '../App.css'
export default function ComponentA() {

    const counterContex = useContext(CounterContext)
    console.log(counterContex);
    const {counter, dispatch} = counterContex
    return (
        <div className="App">
            
            <ButtonGroup>
                <Button color="primary" >
                   ComponentA Counter:<Badge color="primary"> {counter} </Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({ type: 'increment', payload: 1})}>Increment</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement', payload: 1})}>Decremnet</Button>
                <Button color="danger" onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
            </ButtonGroup>
            <p></p>
            
        </div>
    )
}

