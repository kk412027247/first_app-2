import React,{Component} from 'react';
import {
  StyleSheet ,
  View ,
  Text ,
  ActivityIndicator,
  Picker,
  Slider,
  Switch,
  WebView
} from 'react-native';

export default class More extends Component {
  constructor(props){
    super(props);
    this.state={
      isOn:false
    };

  }


  render(){
    return(
     <View style={styles.container}>
      <WebView source={{uri:'https://sina.cn'}} style={styles.web}/>

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
   },
  web:{
    flex:1,
    width:200,
    height:200
  }

});
