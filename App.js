import React from 'react';
import {
  AppRegistry,
  StyleSheet, 
  View,
  Text,
  Platform,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
  ListView,
  Alert,
  TouchableHighlight,
  StatusBar
  } from 'react-native';

export default class FlexBox extends React.Component {
  constructor (props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2)=> r1 !== r2
    });
    this.state = {
      currentPage:0,
      dataSource:ds.cloneWithRows([
        '商品1',
        '商品2',
        '商品3',
        '商品4',
        '商品5',
        '商品6',
        '商品7',
        '商品8',
        '商品9',
        '商品10',
      ])
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'blue'}
          barStyle={'default'}
          networkActivityIndicatorVisible={true}
        />
        <View style={styles.searchbar}>
          <TextInput
            style={styles.input}
            placeholder='搜索商品'/>
          <Button style={styles.button}
            title='搜索'
            onPress={()=> Alert.alert('你点击了搜索按钮',null,null)}
          />
        </View>
        <View style={styles.advertisement}>
          <ScrollView
            ref='scrollView'
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
          >
            <TouchableHighlight onPress={() => Alert.alert('你点击了轮播图',null,null)}>

            </TouchableHighlight>
          </ScrollView>

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
