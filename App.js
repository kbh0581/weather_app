import React from "react";
import {Alert} from "react-native";
import Loading from "./loading";
import * as Location from "expo-location";


export default class extends React.Component {
  state ={
    isLoding : true
  }
  getLocation = async()=>{
    try{
    
    const response = await Location.requestPermissionsAsync();  //권한요청 안한다면 에러발생
    const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
    this.setState({isLoding:false})
    //Todo :: wether API Use
    
    }catch(err){
      Alert.alert("Can't find you","So Sad"); //권한을 안주면 울음

    }
  }

  componentDidMount(){
    this.getLocation();
    
  }
  render(){
    const {isLoding} = this.state;
    return (isLoding ? <Loading/> : null);
  };
}


