import React,{Component} from 'react';
import {
  StyleSheet ,
  View ,
  Text ,
  ActivityIndicator,
  Picker,
  Slider,
} from 'react-native';

export default class More extends Component {
  constructor(props){
    super(props);
    this.state={
      sliderValue:5
    };

  }


  render(){
    return(
     <View style={styles.container}>
       <Slider
         minimumValue={0}
         style={{width:200}}
         step={1}
         maximumTrackTintColor='red'
         minimumTrackTintColor='blue'
         maximumValue={10}
         value={this.state.sliderValue}
         onValueChange={(value)=>{
           this.setState({sliderValue:value})
         }}
       >
        <Text>sliderValue:{this.state.sliderValue}</Text>
       </Slider>
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
   picker:{
     width:200,
     height:200
   }
});
