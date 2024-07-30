import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useState } from "react";
import { icons } from "../../constants";
const FormField = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-300 font-medium">{title}</Text>
      <View className="w-full h-12 px-4 text-black bg-white border-2 border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary ">
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8E8E8E"
          className="w-full h-full text-base text-black"
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="justify-center items-center w-12 h-12 absolute right-0 top-0"
          >
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              className="w-6 h-6 absolute "
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
