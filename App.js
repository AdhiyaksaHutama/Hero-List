import React from 'react';
import{StyleSheet,Text,View} from 'react-native';
import{createBottomTabNavigator,createAppContainer} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './Screen/Home'
import Heroes from './Screen/Heroes'
import Setting from './Screen/Setting'
var userIcon;
var settingsIcon;
var settingsOutlineIcon;
var peopleIcon;
var iosNavigateOutline;
var iosNavigate;
 class App extends React.Component{
	constructor() {
		Icon.getImageSource('ios-settings', 30).then((source) => { settingsIcon = source});
		Icon.getImageSource('ios-home', 30).then((source) => { homeIcon = source});
		Icon.getImageSource('ios-contact', 30).then((source) => { profileIcon = source});
		Icon.getImageSource('ios-navigate-outline', 30).then((source) => { iosNavigateOutline = source});
		Icon.getImageSource('ios-cafe', 30).then((source) => { cafeIcon = source});
	}
	render(){
		return(
			<Text>aaaaa</Text>
			);
	}
}

const TabNavigator = createBottomTabNavigator({
	Home:{
		screen:Home,
		navigationOptions:{
			tabBarLabel:'Home',
			tabBarIcon:({tintColor}) =>(
			<Icon name="ios-home" color={tintColor} size={24}/>	
			)
		}
	},
	Heroes:{
		screen:Heroes,
		navigationOptions:{
			tabBarLabel:'Heroes',
			tabBarIcon:({tintColor}) =>(
			<Icon name="ios-cafe" color={tintColor} size={24}/>	
			)	
		}
	},

	Setting:{
		screen:Setting,
		navigationOptions:{
			tabBarLabel:'Setting',
			tabBarIcon:({tintColor}) =>(
			<Icon name="ios-settings" color={tintColor} size={24}/>	
			)
		}
	},
	
	
},{
	tabBarOptions:{
		activeTintColor:'orange',
		inactiveTintColor:'grey',
		style:{
			backgroundColor:'white',
			borderTopWidth:0,
			shadowOffset:{width:5,height:3},
			shadowColor:'black',
			shadowOpacity:0.5,
			elevation:5
		}

	}
})
export default createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container:{
  	flex:1,
  	backgroundColor:'powderblue',
  }

});