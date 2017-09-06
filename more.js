import React,{Component} from 'react';
import {StyleSheet , View ,Text ,Slider,ActivityIndicator,Dimensions} from 'react-native';
import MapView from 'react-native-maps';
export default class More extends Component {
  constructor(props){
    super(props);
    this.state={
      isFirstLoad:true,
      mapRegion:undefined,
      mapRegionInput:undefined,
      annotations:[]
    };
    _onRegionChange=(region)=>{
     this.stateState({mapRegionInput:region})
    };
    _onRegionChangeComplete=(region)=>{
      if(this.state.isFirstLoad){
        this.setState({
          mapRegionInput:region,
          annotations:this._getAnnotations(region),
          isFirstLoad:false
        })
      }
    };
    _getAnnotations=(region)=>{
      return[{
        longitude:region.longitude,
        latitude:region.latitude,
        title:'你的位置'
      }]
    }

  }


  render(){
    return(
     <View style={styles.container}>
       <MapView
         style={styles.map}
         onRegionChange={this._onRegionChange}
         onRegionChangeComplete={this._onRegionChangeComplete}
         region={this.state.mapRegion}
         annotations={this.state.annotations}
       />


     </View>
    )
  }
}

const styles= StyleSheet.create({
   container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   text:{
     fontSize:20
   },
   map:{
     width:Dimensions.get('window').width,
     height:Dimensions.get('window').height
   }
});
