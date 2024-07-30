import { View, Text, Platform } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <View className="items-center">
      <TouchableOpacity
        className={` bg-[#EEA343] rounded-2xl px-4  items-center ${containerStyles} ${
          isLoading ? "opacity-70" : ""
        }`}
        style={{
          ...Platform.select({
            ios: {
              shadowColor: "#EEA343",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3.84,
            },
            android: {
              elevation: 5,
            },
          }),
        }}
        disabled={isLoading}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text
          className={`text-white font-extrabold   text-[19px] m-3 ${textStyles} `}
          style={{ fontFamily: "Roboto" }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
