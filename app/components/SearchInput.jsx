import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "react-native";

import { icons } from "../../constants";

const SearchInput = ({ title, value, placeholder, handleChangeText }) => {
  return (
    <View className="w-full h-12 px-4 text-gray-50 bg-[#EDF9FC] opacity-75 border border-gray-400 rounded-lg focus:border-secondary focus:ring-2 focus:ring-primary flex-row space-x-4">
      <TextInput
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8E8E8E"
        className="text-base mt-0.5  flex-1 font-pregular"
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image
          source={icons.search}
          className="w-5 h-5 mt-3"
          resizeMode="contain"
          tintColor={"gray"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
