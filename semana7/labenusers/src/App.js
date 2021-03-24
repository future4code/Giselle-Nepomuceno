import React from "react";
import listUsers from "./components/listUsers";
import registerUser from "./components/registerUser";


export default class App extends React.Component {
  state ={
    showList:false
    
  };
    changeToList = ()=>{
      this.setState({showList: true});
    };

    changeToRegister = () =>{
      this.setState({showList:false});
    };

    render(){
       const renderEverthing = () => {
         if(this.state.showList){
           return <registerUser register={this.changeToRegister}/>
         }else {
           return <listUsers list ={this.changeToList}/>
         }
       };
        return (
        <div>
          {renderEverthing()}
        </div>
      );
    }
}

