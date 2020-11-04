import React from "react";

export default class ClassBasedCounter extends React.Component{

    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    componentDidMount(){
        console.log(this.props.id +' Component mounted');
    }


    componentWillUnmount(){
        console.log(this.props.id +' Component about to u');
    }

    render(){

        return (
        <div>
            <button onClick={()=>this.props.onIncrement(this.props.id)}>Increment</button>
            <button onClick={()=>this.props.onDecrement(this.props.id)}>Decrement</button>
            <button onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
            {this.props.value}
        </div>
        )

    }

    
}