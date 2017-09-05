import React from 'react';
import {TabBarIOS} from 'react-native'
import Home from './home';
import More from './more'


export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'home'
    }
  }
  render() {
    return (
      <TabBarIOS
        unselectedTintColor='gray' //未选中的原色
        tintColor='white'          //已经选中的原色
        barTintColor='orange'      //标签栏的颜色
      >
        <TabBarIOS.Item title='首页'
          icon={require('./image/icon-home.png')}
          selected={this.state.selectedTab === 'home'}
          onPress={()=>{
            this.setState({selectedTab:'home'})
          }}
        >
          <Home navigator={this.props.navigator}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon='more'
          badge={2}
          selected={this.state.selectedTab === 'more'}
          onPress={()=>{
            this.setState({selectedTab:'more'})
          }}
        >
          <More navigator={this.props.navigator}/>

        </TabBarIOS.Item>



      </TabBarIOS>

    );
  }
}




