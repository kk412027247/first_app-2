import React from 'react';
import { AppRegistry,StyleSheet, View } from 'react-native';

export default class FlexBox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1} />
        <View style={styles.view2}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'gray' ,
    flexDirection:'row',//设置子组建横向排列，默认是纵向排列
    //flexWrap:'wrap', //设置子组建溢出的时候换行，默认不换行
    //justifyContent:'center',//子组建的水平位置
    //alignItems:'center',//子组建垂直位位置
  },
  view1:{
    flex:1, //设置组建大小 1就是100%
    height:150,
    width:150,
    backgroundColor:'red',
  }  ,
  view2:{
    flex:1,
    height:150,
    width:150,
    backgroundColor:'green' ,
    //alignSelf:'center',//设置自身垂直位置

  }
});

AppRegistry.registerComponent('FlexBox',()=> FlexBox);
