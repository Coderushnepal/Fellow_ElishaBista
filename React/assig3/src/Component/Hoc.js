import React from 'react';
const withRedbull =(WrappedComponent)=>{
    class UserWrapper extends React.Component{
        constructor(props){
            super(props)
            this.state={
               name=name,  
            }

        }
        wings=()=>{
            <h1>I have a wing</h1>
        }
        flyAway=()=>{
            <h1>fly away</h1>
        }
        render(){
           <WrappedComponent name={this.state.name} wings={this.wings} flyAway={this.flyAway}{...this.props} />
      
    }
  return UserWrapper; 
}
}
export default withRedbull;