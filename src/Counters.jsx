import React from "react";
import ClassBasedCounter from './ClassBasedCounter'
import FunctionalBasedCounter from './FunctionalBasedComponent';

export default class Counters extends React.Component{
    state = {
        counters: [
            { id: 1, value: 3 },
            { id: 2, value: 4 },
            { id: 3, value: 2 },
            { id: 4, value: 100 }
          ]
    }

    handleIncrement =(id) =>{
        const counters = [...this.state.counters];
        const index = counters.map(counter=>counter.id).indexOf(id);
        const oldCounterValue = counters[index].value;
        counters[index] = {id, value: oldCounterValue +1};
        this.setState({counters});
    }

    handleDecrement =(id) =>{
        const counters = [...this.state.counters];
        const index = counters.map(counter=>counter.id).indexOf(id);
        const oldCounterValue = counters[index].value;
        counters[index] = {id, value: oldCounterValue -1};
        this.setState({counters});
    }

    handleDelete =(id) =>{
        const counters = [...this.state.counters];
        const index = counters.map(counter=>counter.id).indexOf(id);
        counters.splice(index,1);
        this.setState({counters});
    }


    render(){

        return (
            <div>
            {/* {this.state.counters.map(counter=>{
                return <ClassBasedCounter 
                    key = {counter.id}
                    id={counter.id}
                    value = {counter.value}
                    onDelete = {this.handleDelete}
                    onDecrement = {this.handleDecrement}
                    onIncrement = {this.handleIncrement}
                ></ClassBasedCounter>
            })} */}

            {this.state.counters.map(counter=>{
                return <FunctionalBasedCounter 
                    key = {counter.id}
                    id={counter.id}
                    value = {counter.value}
                    onDelete = {this.handleDelete}
                    onDecrement = {this.handleDecrement}
                    onIncrement = {this.handleIncrement}
                ></FunctionalBasedCounter>
            })} 
        </div>
        )


    }
}