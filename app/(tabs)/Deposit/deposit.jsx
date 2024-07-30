import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { icons } from "../../../constants";
import Shape from "../../components/Shape";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import Steps from "../../components/Steps";
import Footer from "../../components/Footer";
const deposit = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `En déposant votre chèque, vous reconnaissez et acceptez les termes et conditions établis par notre institution. Cela inclut le respect de toutes les lois et réglementations applicables, ainsi que l'acceptation de nos politiques de dépôt, du calendrier de disponibilité des fonds et de tous les frais associés. Vous certifiez que le chèque est authentique, légalement payable à vous, et que vous avez le droit de le déposer. Vous comprenez que le dépôt est soumis à vérification et peut être rejeté s'il est jugé invalide ou suspect.  `;

  const shortText = fullText.slice(0, 173) + "...";

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <SafeAreaView className="bg-[#EEF4F5] h-full ">
      <View className="mt-8 px-4 space-y-6">
        <View className="justify-center items-center mb-[4.5vh]">
          <View>
            <Text className="text-2xl font-semibold  ">Dépôt de Cheque</Text>
          </View>
          <View className="absolute top-2 right-2">
            <TouchableOpacity>
              <Image
                source={icons.notification}
                className="w-5 h-6"
                tintColor={"gray"}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mb-4">
          <Steps position={0} />
        </View>
        <View className=" mx-2 bg-[#F6FAFA] border-2 rounded-2xl border-[transparent] p-5">
          <Text className="text-[18px] font-semibold ">
            Termes et conditions
          </Text>
          <Text className="text-[16px] font-normal mt-2 text-justify">
            {isExpanded ? fullText : shortText}
            <TouchableOpacity onPress={toggleExpand}>
              <Text className="text-[#005792] relative top-1">
                {isExpanded ? " Voir moins" : " Voir plus"}
              </Text>
            </TouchableOpacity>
          </Text>
          <View className="flex flex-row items-center mt-1">
            <TouchableOpacity
              onPress={toggleSelection}
              className={`w-4 h-4 rounded-full border-2 ${
                isSelected ? "bg-[#0352AA] border-[#0352AA]" : "border-gray-400"
              } mr-2 flex items-center justify-center`}
            >
              {isSelected && <View className="w-2 h-2 rounded-full bg-white" />}
            </TouchableOpacity>
            <Text className="text-[14px] font-normal text-[#0352AA] mt-2 pr-5">
              Je confirme que j'ai lu et accepté les termes et conditions
            </Text>
          </View>
        </View>

        <Shape additional={"absolute top-[10vh] "} />
        <Shape additional={" absolute top-[17vh] right-[4vh]"} />
      </View>
      <View className="absolute bottom-[8vh] w-full">
        <CustomButton
          title={"Confirmer"}
          isLoading={!isSelected}
          handlePress={() => router.push("/(tabs)/selectAccount")}
        />
      </View>
      <View className="absolute bottom-[4vh] w-full">
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default deposit;
