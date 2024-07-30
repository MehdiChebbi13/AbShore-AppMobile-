import { View, Text, Touchable } from "react-native";
import React from "react";
import { Image } from "react-native";
import { icons } from "../../constants";
import { TouchableOpacity } from "react-native";

const AccountField = ({ title, Rib, selected }) => {
  return (
    <>
      <TouchableOpacity className="flex-row  border-[1px] rounded-sm border-[transparent] p-2">
        <View className="border-2 rounded-2xl border-[transparent] pr-3">
          <Image
            source={icons[title]}
            className="w-12 h-12 "
            resizeMode="contain"
          />
        </View>
        <View>
          <Text className="text-[16px] font-medium justify-center">
            Banque {title} Tunisie
          </Text>
          <Text className="text-[14px] font-normal justify-center text-gray-500">
            RIB: {Rib}
          </Text>
        </View>
        {selected || (
          <View className="ml-auto justify-center">
            <Image
              source={icons.arrow}
              className="w-6 h-6 opacity-70 "
              resizeMode="contain"
              tintColor={"black"}
            />
          </View>
        )}
      </TouchableOpacity>
      {selected || (
        <View
          className={`border-[0.3px] bg-gray-500 border-gray-500 mt-1 w-full opacity-60`}
        />
      )}
    </>
  );
};

export default AccountField;
