import React from 'react';
import{StyleSheet,Text,View} from 'react-native';
import{createStackNavigator} from 'react-navigation'

 class Setting extends React.Component{
	render(){
		return(
			<View style ={styles.container}>
			<Text>Setting</Text>	
			</View>	


			);
	}
}

export default Setting;

const styles = StyleSheet.create({
  container:{
  	flex:1,
  	backgroundColor:'powderblue',
  }

});