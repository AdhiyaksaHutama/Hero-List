import React from 'react';
import{StyleSheet,Text,View,Thumbnail,Image,TouchableOpacity} from 'react-native';
import{createStackNavigator} from 'react-navigation'

 class Home extends React.Component{
	render(){
		return(
         

            <View style={{flex:1}}>

            <Image source={require('./logo.png')}
            style={{height:150,width:300,alignSelf:'center',marginTop:90}}
            />
            <Text style ={{fontSize:30,fontWeight:'500',alignSelf:'center'}}>
            Welcome to Buffer</Text>
            <Text style={{fontSize:20,fontWeight:'200',alignSelf:'center', width:300,marginTop:10}}>
            Start exploring the meta heroes and build
                your own meta
            </Text>
           
            <View style={{flex:1}}>
            <TouchableOpacity style={{height:50,width:200,backgroundColor:'#666',
						alignSelf:'center',borderRadius:10,marginTop:20,marginBottom:10}}>
						  <Text  onPress={()=>this.props.navigation.navigate('Heroes')} 
						  style={{color:'#fff',textAlign:'center',fontSize:20,marginTop:10}}>Start</Text>

         				 </TouchableOpacity>
            
            </View>
            </View>
			);
	}
}

export default Home;

const styles = StyleSheet.create({
  container:{
  	flex:1,
  	backgroundColor:'powderblue',
  }

});