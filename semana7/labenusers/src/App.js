import React from "react";
import ListUsers from "./components/ListUsers";
import RegisterUser from "./components/RegisterUser";


export default class App extends React.Component {
  state ={
    showList:false
    
  };
    changeToRegister = ()=>{
      this.setState({showList: false});
    };

    changeToList = () =>{
      this.setState({showList:true});
    };

    render(){
       const renderEverthing = () => {
         if(this.state.showList){
          return <ListUsers register={this.changeToRegister}/>;
         }else {
          return <RegisterUser list={this.changeToList}/>;
         }
       };
        return (
        <div>
          {renderEverthing()}
        </div>
      );
    }
}

