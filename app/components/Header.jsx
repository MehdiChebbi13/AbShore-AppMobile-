import { View, Text, Alert } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { icons } from "../../constants";
import { router } from "expo-router";

const Header = ({ Next, Back }) => {
  return (
    <View className="justify-center items-center mb-[4.5vh]">
      <View className="absolute top-2 left-2 justify-center">
        <TouchableOpacity
          className=" flex-row"
          onPress={() => router.push(Back)}
        >
          <Image
            source={icons.arrow}
            className="w-6 h-6 mr-auto rotate-180"
            tintColor={"gray"}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-2xl font-semibold  ">Dépôt de Cheque</Text>
      </View>
      <View className="absolute top-2 right-2 justify-center">
        <TouchableOpacity
          className=" flex-row"
          onPress={
            !Next
              ? () =>
                  Alert.alert(
                    "Confirmer les données entrées?",
                    "Vous ne pourrez plus revenir en arrière.",
                    [
                      {
                        text: "Annuler",
                        onPress: () => ({ type: "cancel" }),
                        style: "cancel",
                      },
                      {
                        text: "Confirmer",
                        onPress: () => router.push("(tabs)/confirmation"),
                      },
                    ]
                  )
              : () => router.push(Next)
          }
        >
          <Image
            source={icons.arrow}
            className="w-6 h-6 ml-auto"
            tintColor={"gray"}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
