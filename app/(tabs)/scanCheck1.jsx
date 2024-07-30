import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { icons } from "../../constants";
import Shape from "../components/Shape";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import Steps from "../components/Steps";
import AccountField from "../components/AccountField";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Footer from "../components/Footer";

const selectAccount = () => {
  const [opened, setopened] = useState(false);
  return (
    <SafeAreaView className="bg-[#EEF4F5] h-full ">
      <View className="mt-8 px-4 space-y-6">
        <Header Next={"/(tabs)/verification"} Back={"/(tabs)/scanCheck"} />
        <View className="mb-4">
          <Steps position={2} />
        </View>
        <View className=" mx-2  border-1  rounded-2xl  ">
          <LinearGradient
            colors={["#3A8DCA", "#E7A249"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              // Adjust the height as needed
              width: "100%", // Or set a specific width
              borderRadius: 15,
              opacity: 0.8,
            }}
          >
            <View className="p-3 mx-2">
              <View className="flex-row">
                <Text className="text-[18px] font-semibold text-white  ">
                  Instructions
                </Text>
                <Image
                  source={icons.help}
                  className="w-5 h-5 ml-1 mt-[1.7px]"
                  resizeMode="contain"
                  tintColor={"white"}
                />
              </View>
              <Text className="text-[14px] font-medium text-white  text-justify w-full">
                Assurez vous que le cheque est placé sur une surface plane et
                bien éclairée, puis prenez une photo de la face avant du cheque.
              </Text>
            </View>
          </LinearGradient>
        </View>
        <TouchableOpacity className="flex-row mx-2 bg-[#F6FAFA] border-2 rounded-2xl border-[transparent] p-5 items-center ">
          <View className="">
            <Text className="text-[18px] font-semibold ">
              Face arrière du cheque
            </Text>

            <Text className="text-[16px] font-normal mt-2 text-justify text-[#005792] ">
              Prendre/Importer une photo
            </Text>
          </View>
          <View className="ml-auto">
            <Image
              source={icons.plus}
              className="w-7 h-7 "
              tintColor={"black"}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <Shape additional={"absolute top-[10vh] "} />
        <Shape additional={" absolute top-[17vh] right-[4vh]"} />
      </View>
      <View className="absolute bottom-[4vh]  w-full">
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default selectAccount;
