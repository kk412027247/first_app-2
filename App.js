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
  Image,
  } from 'react-native';
const circleSize = 8;
const circleMargin = 5;

export default class App extends React.Component {
  constructor (props){
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    });  //创建ListView。DataSource数据源
    this.state = {
      currentPage:0,
      dataSource:ds.cloneWithRows([
        {
          image:require('./image/1.jpg'),
          title:'商品1',
          subTitle:'描述1'
        },{
          image:require('./image/1.jpg'),
          title:'商品2',
          subTitle:'描述2'
        },{
          image:require('./image/1.jpg'),
          title:'商品3',
          subTitle:'描述3'
        },{
          image:require('./image/1.jpg'),
          title:'商品4',
          subTitle:'描述4'
        },{
          image:require('./image/1.jpg'),
          title:'商品5',
          subTitle:'描述5'
        },{
          image:require('./image/1.jpg'),
          title:'商品6',
          subTitle:'描述6'
        },{
          image:require('./image/1.jpg'),
          title:'商品7',
          subTitle:'描述7'
        },{
          image:require('./image/1.jpg'),
          title:'商品8',
          subTitle:'描述8'
        },{
          image:require('./image/1.jpg'),
          title:'商品9',
          subTitle:'描述9'
        },{
          image:require('./image/1.jpg'),
          title:'商品10',
          subTitle:'描述10'
        },
      ]),
      advertisements:[
        {
          title:'广告1',
          backgroundColor:'gray',
          url:'http://wx3.sinaimg.cn/mw600/6927e7a5ly1fj65bt3kd4j20h80cxjs2.jpg',
          image:require('./image/1.jpg')
        },
        {
          title:'广告2',
          backgroundColor:'orange',
          url:'http://wx1.sinaimg.cn/mw600/6413bbbcgy1fj67yexlc3j20go0m8tav.jpg',
          image:require('./image/2.jpg')
        },
        {
          title:'广告3',
          backgroundColor:'yellow',
          url:'http://wx3.sinaimg.cn/mw600/6413bbbcgy1fj67yqnz7dj20dm0i5dhe.jpg',
          image:require('./image/3.jpg')
        },
      ],
      searchText:' ',
      
    }
  }
  componentDidMount(){
    this._startTimer();
  }
  componentWillUnMount(){
    clearInterval(this.interval)
  }

  _startTimer = () =>{
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

  _renderRow = (rowData,sectionID, rowID) => {
    return(
      <TouchableHighlight onPress={()=>Alert.alert(rowData.title,null,null)}>
        <View style={styles.row} key={sectionID+rowID}>
          <Image source={rowData.image} style={styles.productImage}/>
          <View style = {styles.productText}> 
            <Text style={styles.productTitle}>{rowData.title}</Text>
            <Text style={styles.productSubTitle}>{rowData.subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  };

  _renderSeparator = (sectionID, rowId, adjacentRowHighlighted)=>{
    return(
      <View key={sectionID + rowId} style={styles.divider}/>
    )
  };

  render() {

    const advertisementCount = this.state.advertisements.length;
    const indicatorWidth = circleSize * advertisementCount + circleMargin * advertisementCount *2;
    const left = (Dimensions.get('window').width - indicatorWidth) / 2 ;
    return (
       <View style={styles.container}>
         <StatusBar backgroundColor={'blue'}
          barStyle={'default'}
          networkActivityIndicatorVisible={true}
         />
         <View style = {styles.searchbar}>
           <TextInput style={styles.input} placeholder='搜索商品' onChangeText={(text)=>{
             this.setState({searchText:text});
             console.log(text)
           }}/>
           <Button style={styles.button} title='搜索' onPress={()=>Alert.alert('搜索'+this.state.searchText,null,null)}/>
         </View>
         <View style={styles.advertisement}>
           <ScrollView
            ref='scrollView'
            horizontal={true} //设置滚动方向为横向，默认为纵向
            showsHorizontalScrollIndicator={false}   //是否现实滚动条
            pagingEnabled={true}  //分页
           >
             {this.state.advertisements.map((advertisement,index)=>{
               return(
                 <TouchableHighlight key={index} onPress={()=>Alert.alert(advertisement.title,null,null)}>
                   <Image style={styles.advertisementContent} source={advertisement.image} />
                 </TouchableHighlight>
               )

             })}
           </ScrollView>
           <View style={[styles.indicator,{left:left}]}>
             {this.state.advertisements.map((advertisement,index)=>{
               return(
                 <View key ={index} style={(index===this.state.currentPage)? styles.circleSelected: styles.circle}/>
               )
             })}
           </View>
         </View>
         <View style={styles.products}>
           <ListView dataSource={this.state.dataSource} renderRow={this._renderRow} renderSeparator={this._renderSeparator}/>
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
    marginTop: Platform.OS === 'ios' ? 20 :25 ,
    height:40,
    flexDirection:'row',
  },
  input:{
    flex:1,
    borderColor:'gray',
    borderWidth:2,
    borderRadius:10,
    marginLeft:3,
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
    flexDirection:'row',
    backgroundColor:'white',
  },
  productImage:{
    marginLeft:10,
    marginRight:10,
    width:40,
    height:40,
    alignSelf:'center',

  },
  productText:{
    flex:1,
    marginTop:10,
    marginBottom:10,
  },
  productTitle:{
    flex:3,
    fontSize:16,
  },
  productSubTitle:{
    flex:2,
    fontSize:14,
    color:'gray'
  },
  advertisementContent:{
    width:Dimensions.get('window').width,
    height:180,
  },
  indicator:{
    position:'absolute',
    top:160,
    flexDirection:'row'
  },
  circle:{
    width:circleSize,
    height:circleSize,
    borderRadius:circleSize/2,
    backgroundColor:'gray',
    marginHorizontal:circleMargin,
  },
  circleSelected:{
    width:circleSize,
    height:circleSize,
    borderRadius:circleSize/2,
    backgroundColor:'white',
    marginHorizontal:circleMargin,
  },
  divider:{
    height:1,
    width:Dimensions.get('window').width - 10,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'lightgray',
  }



});

