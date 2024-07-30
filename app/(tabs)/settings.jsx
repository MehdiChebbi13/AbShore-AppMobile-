import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Shape from "../components/Shape";
import { Animated } from "react-native";

const settings = () => {
  const opacity = new Animated.Value(0);

  // Define your animation
  Animated.timing(opacity, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true, // for better performance
  }).start();
  return (
    <SafeAreaView className="bg-[#EEF4F5] h-full ">
      <View>
        <Animated.View style={{ opacity }}>
          <Text>Parametre</Text>
        </Animated.View>
        <Shape additional={"absolute top-[10vh] "} />
        <Shape additional={" absolute top-[17vh] right-[4vh]"} />
      </View>
    </SafeAreaView>
  );
};

export default settings;
