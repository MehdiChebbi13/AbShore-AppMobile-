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
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Animated } from "react-native";

const selectAccount = () => {
  const [opened, setopened] = useState(false);
  const opacity = new Animated.Value(0);

  // Define your animation
  Animated.timing(opacity, {
    toValue: 1,
    duration: 650,
    useNativeDriver: true, // for better performance
  }).start();
  return (
    <SafeAreaView className="bg-[#EEF4F5] h-full ">
      <View className="mt-8 px-4 space-y-6">
        <Header Next={"/(tabs)/scanCheck"} Back={"/(tabs)/Deposit/deposit"} />
        <Animated.View className="mb-4 " style={{ opacity }}>
          <Steps position={1} />
        </Animated.View>
        <View className=" mx-2 bg-[#F6FAFA] border-2 rounded-2xl border-[transparent] p-5">
          <Text className="text-[18px] font-semibold mb-5 ">
            Compte Selectionné
          </Text>
          <View className="border-[0.3px] bg-[#0254AF] border-[#0254AF] mb-1 w-full opacity-40" />
          <AccountField
            title={"De"}
            Rib={"TN56 1447 6657 4567 8901"}
            selected={true}
          />
        </View>
        <View className="mx-2 bg-[#F6FAFA] border-2 rounded-2xl border-[transparent] p-5">
          <View className="flex-row items-center justify-between mb-5">
            <Text className="text-[18px] font-semibold  ">
              Changez de compte bancaire
            </Text>
            {opened || (
              <TouchableOpacity
                onPress={() => setopened(true)}
                className="flex-row  border-[1px] rounded-sm border-[transparent] items-center opacity-70 "
              >
                <Image
                  source={icons.plus}
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
                  source={icons.minus}
                  className="w-7 h-7 "
                  resizeMode="contain"
                  tintColor={"black"}
                />
              </TouchableOpacity>
            )}
          </View>
          {opened && (
            <>
              <View className="border-[0.3px] bg-[#0254AF] border-[#0254AF] mb-1 w-full opacity-40" />
              <ScrollView className="h-[13vh] mb-3">
                <AccountField
                  title={"Zitouna"}
                  Rib={"TN56 1447 6657 4567 8901"}
                />
                <AccountField title={"Amen"} Rib={"TN56 1447 6657 4567 8901"} />
                <AccountField title={"ATB"} Rib={"TN56 1447 6657 4567 8901"} />
                <AccountField
                  title={"Wifak"}
                  Rib={"TN56 1447 6657 4567 8901"}
                />
                <AccountField
                  title={"alBaraka"}
                  Rib={"TN56 1447 6657 4567 8901"}
                />
              </ScrollView>
            </>
          )}

          <View>
            <Text className="text-[14px] font-normal text-[#0352AA] mt-2 pr-5">
              Vous ne trouvez pas votre compte bancaire?
            </Text>
          </View>
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
