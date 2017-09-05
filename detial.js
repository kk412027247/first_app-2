import React,{Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';

export default class Detail extends Component {

  _pressBackButton = () => {
    const {navigator}=this.props;  //navigator反正在完成都能传进来？或者这里已经是变成了二级页面？
    if(navigator){
      navigator.pop() //返回上一个页面
    }
  };

  render(){
    return(
      <View style={styles.container}>
      <TouchableOpacity onPress={this._pressBackButton}>
        <Text style={styles.back}>返回</Text>
      </TouchableOpacity>
        <Text style={styles.text}>
          详情页面
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'gray',
     justifyContent:'center',
     alignItems:'center'
  },
  text:{
     fontSize:20
  },
  back:{
    fontSize:20,
    color:'blue'
  }
});
