import React from 'react';
import Swiper from 'react-native-swiper' ;
import Detail from './detial.js'
import {
  StyleSheet,
  View,
  Platform,
  Dimensions,
  ListView,
  Alert,
  TouchableHighlight,
  Image,
  RefreshControl,

} from 'react-native';
import {
  Header, Container, Content, InputGroup, Input, Button, Icon, Form, Item, Text, List,
  ListItem, Thumbnail
} from 'native-base'


const ds = new ListView.DataSource({
  rowHasChanged:(r1,r2) => r1 !== r2
});  //创建ListView。DataSource数据源 ,放在最最外层作为全局变量

export default class Home extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      currentPage:0,
      isRefreshing:false,
      products: [
        {
          image:require('./image/1.jpg'),
          title:'商品1223',
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
      ],
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
      swiperShow:false,

    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        swiperShow:true
      })
    },0)
  }

  _renderRow = (product) => {
    return(
      <ListItem
        button
        onPress={()=>{
          const{navigator}=this.props;
          if(navigator){
            navigator.push({
                name:'detail',
                component:Detail,
                params:{
                  productTitle:product.title
                }
              }
            )
          }
        }}
      >
        <Thumbnail square size={40} source={product.image}/>
        <Text>{product.title}</Text>
        <Text note>{product.subTitle}</Text>
      </ListItem>
    )
  };

  _renderSeparator = (sectionID, rowId)=>{
    return(
      <View key={sectionID + rowId} style={styles.divider}/>
    )
  };

  _onRefresh = ()=>{
    this.setState({isRefreshing:true});//设置为正在刷新状态
    const products= Array.from(new Array(10)).map((value,index)=>({ //Array.from 将返回出来的对象，组合成一个新的数组
      image:require('./image/2.jpg'),
      title:'新商品'+(index+1),
      subTitle:'新商品描述'+(index+1),
    }));
    setTimeout(()=>{
      this.setState({
        isRefreshing:false,
        dataSource:ds.cloneWithRows(products)
      })},2000)
  };

  _renderRefreshControl = () =>{
    return(
      <RefreshControl
        refreshing={this.state.isRefreshing}
        onRefresh={this._onRefresh} //刷新时调用的 的onRefresh方法   ，调用下拉组建的时候，刷新一下
        tintColor={'#0000ff'}
        title={'正在刷新数据，请稍后……'}
        titleColor={'#0000ff'}
      />
    )
  };

  
  render() {
    return (
      <Container>
        <Header searchBar rounded>
            <Item>
              <Input
                placeholder='搜索商品'
                onChangeText={(text)=>{
                  this.setState({searchText:text});
                  console.log(text)
              }}/>
            </Item>
          <Button
            transparent
            onPress={
              ()=>Alert.alert('搜索'+this.state.searchText,null,null)
            }
          >
            <Text>搜索</Text>
          </Button>
        </Header>
        <Content>
          {this.state.swiperShow ?
            <Swiper
              loop={true}  //模拟循环
              height={190}
              autoplay={true}
            >
              {this.state.advertisements.map((advertisement,index)=>{
                return(
                  <TouchableHighlight key={index} onPress={()=>Alert.alert(advertisement.title,null,null)}>
                    <Image style={styles.advertisementContent} source={advertisement.image} />
                  </TouchableHighlight>
                )
              })}
            </Swiper>
            : <Text>稍后</Text>
          }
          <List
            style={{marginTop:-420}}
            dataArray={this.state.products}
            renderRow={this._renderRow}
          />
        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  
  advertisementContent:{
    width:Dimensions.get('window').width,
    height:180,
  },
});

