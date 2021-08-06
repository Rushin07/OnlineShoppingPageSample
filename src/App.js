import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview'
import TopBar from './TopBar/TopBar';

class App extends Component {
state = {
  ProductData: ProductData,
  // currentPreviewImage: 'https://imgur.com/Mplj1YR.png',
  currentPreviewImagePos: 0,
// showHeartBeatSection: false,
  currentSelectedFeature: 0, 


}

onColorOptionClick = (pos) => {
  this.setState({currentPreviewImagePos : pos})
}

// onColorOptionClick = (pos) => {
//   const updatedPreviewImage = this.state.ProductData.colorOptions[pos].imageUrl
//   this.setState({currentPreviewImage: updatedPreviewImage })
// }

onFeatureItemClick  = (pos) => {
  
  this.setState({currentSelectedFeature : pos})
  }
// onFeatureItemClick  = (pos) => {
// // console.log(pos)
// let updatedState = false;
// if (pos === 1){
//   updatedState = true;
// }
//   else{
//     updatedState = false;
//   }

// this.setState({showHeartBeatSection: updatedState})
// }

  render(){

  return (
    
   <div className = "App">
        <TopBar />
     <div className={classes.MainContainer}>
     <div className ={classes.ProductPreview}>
         <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
         currentSelectedFeature={this.state.currentSelectedFeature}
         />
      </div>

      <div className = {classes.ProductData}>
        <ProductDetails  data={this.state.ProductData} 
        onColorOptionClick={this.onColorOptionClick} 
        currentPreviewImagePos= {this.state.currentPreviewImagePos} 
        onFeatureItemClick= {this.onFeatureItemClick}
        currentSelectedFeature={this.state.currentSelectedFeature}/>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
