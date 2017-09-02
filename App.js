import React from 'react';
import {
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
  StatusBar,
  } from 'react-native';

export default class FlexBox extends React.Component {
  constructor (props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    });  //创建ListView。DataSource数据源
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
  componentDidMount(){
    this._startTimer();
  }
  componentWillUnMount(){
    clearInterval(this.interval)
  }

  _startTimer =() =>{
    this.interval= setInterval(()=>{
      let nextPage = this.state.currentPage + 1;
      if(nextPage >= 3){
        nextPage = 0;
      }
      this.setState({
        currentPage:nextPage
      });
      const offSetX = nextPage * Dimensions.get('window').width;
      this.refs.scrollView.scrollResponderScrollTo({x:offSetX,y:0,animated:true})
    },2000)
  };

  _renderRow =(rowData,sectionID, rowID) => {
    return(
      <TouchableHighlight onPress={()=>Alert.alert('商品',null,null)}>
        <View style={styles.row}>
          <Text id={rowID+sectionID}>{rowData}</Text>
        </View>
      </TouchableHighlight>
    )
  };

  render() {
    return (
       <View style={styles.container}>
         <StatusBar backgroundColor={'blue'}
          barStyle={'default'}
          networkActivityIndicatorVisible={true}
         />
         <View style = {styles.searchbar}>
           <TextInput style={styles.input} placeholder='搜索商品'/>
           <Button style={styles.button} title='搜索' onPress={()=>Alert.alert('搜索',null,null)}/>
         </View>
         <View style={styles.advertisement}>
           <ScrollView
            ref='scrollView'
            horizontal={true} //设置滚动方向为横向，默认为纵向
            showsHorizontalScrollIndicator={false}   //是否现实滚动条
            pagingEnabled={true}  //分页
           >
             <TouchableHighlight onPress={()=>Alert.alert('广告1',null,null)}>
               <Text style={{
                 width:Dimensions.get('window').width, //宽度设置为屏幕宽度
                 height:180,
                 backgroundColor:'gray'
               }}>广告1</Text>
             </TouchableHighlight>
             <TouchableHighlight onPress={()=>Alert.alert('广告2',null,null)}>
               <Text style={{
                 width:Dimensions.get('window').width,
                 height:180,
                 backgroundColor:'orange'
               }}>广告2</Text>
             </TouchableHighlight>
             <TouchableHighlight onPress={()=>Alert.alert('广告3',null,null)}>
               <Text style={{
                 width:Dimensions.get('window').width,
                 height:180,
                 backgroundColor:'yellow'
               }}>广告3</Text>
             </TouchableHighlight>
           </ScrollView>
         </View>
         <View style={styles.products}>
           <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
         </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar:{
    marginTop: Platform.OS === 'ios' ? 20 :0 ,
    height:40,
    flexDirection:'row',
  },
  input:{
    flex:1,
    borderColor:'gray',
    borderWidth:2
  },
  button:{
    flex:1
  },
  advertisement:{
    height:180,
  },
  products:{
    flex:1,
  },
  row:{
    height:60,
    justifyContent:'center',
    alignItems:'center',
  }


});

