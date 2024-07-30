import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Shape from "../components/Shape";

const accounts = () => {
  return (
    <SafeAreaView className="bg-[#EEF4F5] h-full ">
      <View>
        <View>
          <Text>les Comptes banquaires</Text>
        </View>
        <Shape additional={"absolute top-[10vh] "} />
        <Shape additional={" absolute top-[17vh] right-[4vh]"} />
      </View>
    </SafeAreaView>
  );
};

export default accounts;
