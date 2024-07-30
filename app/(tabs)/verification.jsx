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
  return (
    <SafeAreaView className="bg-[#EEF4F5] h-full ">
      <View className="mt-8 px-4 space-y-6">
        <Header Back={"/(tabs)/scanCheck1"} />
        <View className="mb-4">
          <Steps position={3} />
        </View>

        <View className="mx-2 bg-[#F6FAFA] border-2 rounded-2xl border-[transparent] p-5">
          <View className="flex-row items-center justify-between ">
            <Text className="text-[18px] font-semibold  ">Aperçu</Text>
            {opened || (
              <TouchableOpacity
                onPress={() => setopened(true)}
                className="flex-row  border-[1px] rounded-sm border-[transparent] items-center opacity-70 "
              >
                <Image
                  source={icons.arrow}
                  className="w-7 h-7 "
                  resizeMode="contain"
                  tintColor={"black"}
                />
              </TouchableOpacity>
            )}
            {opened && (
              <TouchableOpacity
                onPress={() => setopened(false)}
                className="flex-row  border-[1px] rounded-sm border-[transparent] items-center opacity-70 "
              >
                <Image
                  source={icons.arrow}
                  className="w-6 h-6 rotate-90 "
                  resizeMode="contain"
                  tintColor={"black"}
                />
              </TouchableOpacity>
            )}
          </View>
          {opened && (
            <>
              <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-1 w-full opacity-40" />
              <View className="flex-row  ">
                <Image
                  source={images.FaceAvant}
                  className="w-[146px] h-[70px]  mr-4"
                  resizeMode="contain"
                />
                <Image
                  source={images.FaceArriere}
                  className="w-[146px] h-[70px] "
                  resizeMode="contain"
                />
              </View>
            </>
          )}
        </View>
        <View className=" mx-2 bg-[#F6FAFA] border-2 rounded-2xl border-[transparent] p-5  ">
          <View className="items-center mb-3">
            <Text className="text-[18px] font-semibold ">
              Informations du Cheque
            </Text>
          </View>
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
          {opened && (
            <>
              <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
              <TouchableOpacity
                onPress={() => setopened(false)}
                className="flex-row items-center justify-between mb-[5px]"
              >
                <Text className="text-[16px] font-normal text-[#0352AA] ">
                  Voir Plus ...
                </Text>
              </TouchableOpacity>
            </>
          )}
          {!opened && (
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
                <Text className="text-[16px] font-normal  ">Date</Text>
                <Text className="text-[16px] font-normal  text-[#686969] ">
                  13/06/2024
                </Text>
              </View>
              <View className="border-[0.5px] bg-[#C6C6C6] border-[#C6C6C6] mb-[8px] w-full " />
              <TouchableOpacity className=" mx-1 mt-3 border-2 border-[transparent] rounded-2xl p-2 items-center bg-[#0352AA]">
                <Text className="text-[14px] font-semibold text-white ">
                  MODIFIER
                </Text>
              </TouchableOpacity>
            </>
          )}
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
