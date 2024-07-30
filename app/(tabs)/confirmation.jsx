import { View, Text, ScrollView, Easing } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { icons, images } from "../../constants";
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
  const [close, setClose] = useState(false);
  return (
    <SafeAreaView className="bg-[#EEF4F5] h-full ">
      <View className="mt-8 px-4 space-y-6">
        <Header Next={"/(tabs)/home"} Back={"/(tabs)/verification"} />

        <View className="mx-2 bg-[#C8E5F3] border-2 rounded-2xl border-[transparent] p-2">
          <View className="flex-row items-center  ">
            <View className="border-2 rounded-3xl border-[transparent] bg-[#34C77D] p-[2px]">
              <TouchableOpacity className="flex-row  border-[1px] rounded-2xl border-[transparent] bg-[#16B464]   p-2 ">
                <Image
                  source={icons.tick}
                  className="w-4 h-4 "
                  resizeMode="contain"
                  tintColor={"white"}
                />
              </TouchableOpacity>
            </View>
            <Text className="text-[15px] font-bold ml-2 ">
              Votre depot a bien été reçu!
            </Text>
          </View>
        </View>
        <View className=" mx-2 bg-[#F6FAFA] border-2 rounded-2xl border-[transparent] p-5  ">
          <View className="items-center mb-3">
            <Text className="text-[18px] font-semibold ">Reçu du Cheque</Text>
          </View>
          {!close && (
            <View className="bg-[#3C3D3D] border-2 border-[transparent] w-[45vh] p-1 flex-row right-[22px] items-center">
              <View className="bg-white border-2 border-[transparent] p-1 rounded-md ">
                <Image
                  source={icons.tick}
                  className="w-3.5 h-3.5"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-white font-semibold left-3">
                Votre Depot est en cours de traitement
              </Text>

              <TouchableOpacity
                className="ml-auto"
                onPress={() => setClose(true)}
              >
                <Image
                  source={icons.close}
                  className="w-6 h-6 "
                  resizeMode="contain"
                  tintColor={"white"}
                />
              </TouchableOpacity>
            </View>
          )}
          <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
          <View className="flex-row items-center justify-between mb-[5px]">
            <Text className="text-[16px] font-normal  ">Montant</Text>
            <Text className="text-[16px] font-normal text-[#686969]  ">
              2000.000 TND
            </Text>
          </View>

          <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
          <View className="flex-row items-center justify-between mb-[5px]">
            <Text className="text-[16px] font-normal  ">Montant(Ecrit)</Text>
            <Text className="text-[16px] font-normal text-[#686969]  ">
              Deux milles dinars
            </Text>
          </View>
          <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
          <View className="flex-row items-center justify-between mb-[5px]">
            <Text className="text-[16px] font-normal  ">Nom de l'emetteur</Text>
            <Text className="text-[16px] font-normal text-[#686969]  ">
              Mohamed Ali
            </Text>
          </View>

          <>
            <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
            <View className="flex-row items-center justify-between mb-[5px]">
              <Text className="text-[16px] font-normal  ">
                Nom de la banque
              </Text>
              <Text className="text-[16px] font-normal text-[#686969]  ">
                STB
              </Text>
            </View>
            <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
            <View className="flex-row items-center justify-between mb-[5px]">
              <Text className="text-[16px] font-normal  ">Date du Cheque</Text>
              <Text className="text-[16px] font-normal  text-[#686969] ">
                13/06/2024
              </Text>
            </View>
            <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
            <View className="flex-row items-center justify-between mb-[5px]">
              <Text className="text-[16px] font-normal  ">RIB</Text>
              <Text className="text-[16px] font-normal  text-[#686969] ">
                444 5555 6666 7777
              </Text>
            </View>
            <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
            <View className="flex-row items-center justify-between mb-[5px]">
              <Text className="text-[16px] font-normal  ">Confirmation #</Text>
              <Text className="text-[16px] font-normal  text-[#686969] ">
                150625
              </Text>
            </View>
            <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
            <TouchableOpacity
              className=" mx-1 mt-3 border-2 border-[transparent] rounded-2xl p-2 items-center bg-[#0352AA]"
              onPress={() => router.push("(tabs)/Deposit/deposit")}
            >
              <Text className="text-[16px] font-semibold text-white ">
                Faire un Autre Depot
              </Text>
            </TouchableOpacity>
          </>
        </View>
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
