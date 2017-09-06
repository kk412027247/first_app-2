import React,{Component} from 'react';
import {StyleSheet , View ,Text ,Slider,ActivityIndicator,Picker} from 'react-native';

export default class More extends Component {
  constructor(props){
    super(props);
    this.state={
      language:'java'
    };

  }


  render(){
    return(
     <View style={styles.container}>
       <Picker
        style={styles.picker}
        selectedValue={this.state.language}
        onValueChange={(lang)=>{
          this.setState({language:lang})
        }}
       >
         <Picker.Item label='java' value='java'/>
         <Picker.Item label='javascript' value='javascript'/>

       </Picker>


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
