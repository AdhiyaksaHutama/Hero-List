import React from 'react';
import{StyleSheet,Text,View,Image} from 'react-native';
import axios from 'axios';
import{List,ListItem,Container,Header,Content,Thumbnail, Body,Left}from 'native-base';
import Hero from '../Component/Hero';


 class Heroes extends React.Component{
	heroes = [
		{
			name:"Zilong",
			title:"Lonely Knight",
			imageUri: "https://i.pinimg.com/originals/86/59/0b/86590b65ad59c6ac45f7ba8a808588b2.jpg"
		},
		{
			name:"Roger",
			title:"Dumb Werewolf",
			imageUri:"https://i.pinimg.com/736x/ae/21/3f/ae213f29883f082827c9cebdc1ead52c.jpg"
		},
		{
			name:"Alpha",
			title:"Stubborn Robot",
			imageUri:"https://mobilelegendsbangbang.com/wp-content/uploads/2017/02/UltimateWeapon.png"
		}
	]
	render(){
		return(
			<Container>
			<Header><Text style={{alignSelf:'center',fontSize:30,
			fontWeight:'300',fontFamily:'sans-serif',color:'white'}}>
			Heroes</Text>
			</Header>
         <Content padder>
			<List>
				{this.heroes.map((hero,key)=>
					 <Hero key={key} hero={hero}/>)}
			</List>
         </Content>
         </Container>


			);
	}
}

export default Heroes;

const styles = StyleSheet.create({
  container:{
  	flex:1,
  	backgroundColor:'powderblue',
  }

});