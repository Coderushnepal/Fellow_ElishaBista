import React,{Component,Fragment} from "react";
import BeerModal from './BeerModal';
import PropTypes from "prop-types";
class Beer extends Component{
    constructor(props){
        super(props)
        this.state={
          showModal:false,
          isFavorite:false,
        };
    }
    handleModalOpen=()=>{
      this.setState({
        showModal:true,
      })
    }
    handleModalClose=()=>{
      this.setState({
        showModal:false,
      })
    };
    render(){
      const {isFavorite, showModal}=this.state;
       const {id,name,description,image_url}=this.props.info;
        return(
          <Fragment>
          {showModal?(
          <BeerModal 
           show={showModal}
            handleClose={this.handleModalClose}
            beerId={id} 
            />):null  } 
            <div className="card">

          <span  className={`favorite$( isFavorite?"active":"")`}>
            <i className="fa fa-star"/>
          </span>
       <div className="card__imgcontainer" style={{backgroundImage:`url(${image_url})`}}></div>
              <h2 onClick={ this.handleModalOpen}>{name}</h2>
              <span className="card__description">
                {description}
              </span>
          </div>
        
        </Fragment>
       
        );
    }
}
Beer.propTypes={
  info:PropTypes.shape({
    id:PropTypes.number,
    name:PropTypes.string,
    description:PropTypes.string,
    image_url:PropTypes.string,
  })
}

export default Beer;