import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { icons } from "../../constants";

const Footer = () => {
  return (
    <View className=" border-2 border-[transparent] flex-row justify-center items-center opacity-90">
      <Image
        source={icons.secure}
        className="w-5 h-5 ml-4"
        resizeMode="contain"
        tintColor={"gray"}
      />
      <Text className="text-gray-500 text-xs font-normal">Secure Area</Text>
      <Text className="text-[#0352AA] text-xs font-normal ml-2">
        Privacy & Security
      </Text>
      <Text className="text-[#0352AA] text-xs ml-2 font-normal">
        Advertising Practices
      </Text>
    </View>
  );
};

export default Footer;
