    import React from 'react';
    import{StyleSheet,View} from 'react-native';
    import { ListItem,List,Body,Text,Image,Left,Thumbnail} from 'native-base';

    export default  Hero = ({hero}) =>  (
        <ListItem>
                <Left>
                    <Thumbnail  circle source={{ uri: hero.imageUri }} />
                </Left>
        
                <Text style={{right:80,fontSize:20,fontWeight:'400'}}>
                    {hero.name}</Text>
                    <Body>
                    <Text style={{marginTop:50,right:130,fontWeight:"normal"}}>{hero.title}</Text>
                        </Body>
                            </ListItem>

    )