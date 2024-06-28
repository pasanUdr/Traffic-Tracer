import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
// import { Link, Navigator, useNavigation } from "expo-router";
import { useNavigation } from '@react-navigation/native';

const Index = () => {

    const navigation = useNavigation();


    // Handle the Get Started button press
    const handleGetStarted = () => {
        // alert('Get Started Pressed!');
        navigation.navigate('home');
    }

  return (
    <View >
      <Text className="text-center text-4xl m-10" >Welcome to </Text>
      <Text className="text-center text-7xl text-yellow-500 ">Traffic </Text>
      <Text className="text-center text-7xl text-yellow-500 mb-10">Tracer </Text>
      <Button className="w-9/12 self-center"
        mode="contained"
        onPress={handleGetStarted}>
        Get Started
      </Button>
      {/* <Link href='/home'>Home</Link> */}
    </View>
  );
};

export default Index;