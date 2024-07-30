import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "../constants";
import { Image } from "react-native";
import CustomButton from "./components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
const App = () => {
  return <Redirect href="/(tabs)/scanCheck" />;

  /*  return (
    <LinearGradient
      colors={["#0254AF", "#012349"]}
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" />

      <SafeAreaView
        className="flex-1  items-center"
        style={{ fontFamily: "Roboto" }}
      >
        <View className="">
          <Image
            source={images.shield}
            className="w-42 h-42 mt-[35%] items-center"
            resizeMode="contain"
          />
        </View>
        <View className="mt-1">
          <Text
            className=" text-white items-center justify-center"
            style={{
              fontWeight: "bold",
              fontSize: 40,
              textAlign: "center",
            }}
          >
            SECURE CHECK DEPOSIT ONLINE
          </Text>
        </View>
        <View className="mt-[15vh] items-center justify-center">
          <Text className="text-base text-white  ">Made by</Text>
        </View>
        <View>
          <Image
            source={images.abshore}
            className="w-32 h-10"
            resizeMode="contain"
          />
        </View>

        <CustomButton
          title="S'identifier"
          containerStyles="w-[52vh]"
          textStyles="text-white font-bold"
          handlePress={() => router.push("/sign-in")}
        />
      </SafeAreaView>
    </LinearGradient> 
  );*/
};

export default App;
