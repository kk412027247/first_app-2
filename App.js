import React from 'react';
//import {View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import Main from './main';


export default class App extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{ //Navigator渲染第一个路由组件，也就是第一个页面，也就是home
          name:'main',
          component:Main,
        }}
        configrueScene={()=>{  //configrueScene定义页面跳转时候定动画
          return Navigator.SceneConfigs.FloatFromLeft;
        }}
        renderScene={(route,navigator)=>{
          const Component = route.component; //这里的component就是home组件
          return <Component {...route.params} navigator={navigator}/>  //把home组件传递过来，并且把navigator传递给home组件
        }}
      />

    );
  }
}




