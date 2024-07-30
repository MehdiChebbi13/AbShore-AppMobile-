import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Steps from "../components/Steps";
import Shape from "../components/Shape";
import { icons } from "../../constants";

const ScanCheck = () => {
  const [warning, setWarning] = useState(false);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();

  async function handleContinue() {
    const permissionGranted = await requestCameraPermission();
    if (permissionGranted.granted) {
      router.replace({
        pathname: "/(tabs)/cameraLayout",
        params: {
          purpose: "Face Avant du Cheque",
          instructionText: "Place the front of the check in the frame",
        },
      });
    } else {
      Alert.alert("Permission needed", "Please allow camera permission");
    }
  }

  return (
    <SafeAreaView className="bg-[#EEF4F5] h-full">
      <View className="mt-8 px-4 space-y-6">
        <Header Next={"/(tabs)/scanCheck1"} Back={"/(tabs)/selectAccount"} />
        <View className="mb-4">
          <Steps position={2} />
        </View>
        {!warning && (
          <View className="mx-2 border-1 rounded-2xl">
            <LinearGradient
              colors={["#3A8DCA", "#E7A249"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{
                width: "100%",
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <View className="p-3 mx-2">
                <View className="flex-row">
                  <Text className="text-[18px] font-semibold text-white">
                    Instructions
                  </Text>
                  <Image
                    source={icons.help}
                    className="w-5 h-5 ml-1 mt-[1.7px]"
                    resizeMode="contain"
                    tintColor={"white"}
                  />
                </View>
                <Text className="text-[14px] font-medium text-white text-justify w-full">
                  Assurez vous que le cheque est placé sur une surface plane et
                  bien éclairée, puis prenez une photo de la face avant du
                  cheque.
                </Text>
              </View>
            </LinearGradient>
          </View>
        )}
        {warning && (
          <View className="mx-2 rounded-2xl">
            <LinearGradient
              colors={["#93291E", "#ED213A"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{
                width: "100%",
                borderRadius: 15,
                opacity: 0.8,
              }}
            >
              <View className="p-3 mx-2">
                <View className="flex-row">
                  <Text className="text-[18px] font-semibold text-white">
                    Warning
                  </Text>
                  <Image
                    source={icons.help}
                    className="w-5 h-5 ml-1 mt-[1.7px]"
                    resizeMode="contain"
                    tintColor={"white"}
                  />
                </View>
                <Text className="text-[14px] font-medium text-white text-justify w-full">
                  La photo du cheque est floue, cela peut affecter la qualité de
                  l'image et la reconnaissance des données. Veuillez reprendre
                  la photo.
                </Text>
              </View>
            </LinearGradient>
          </View>
        )}
        <TouchableOpacity
          className="flex-row mx-2 bg-[#F6FAFA] border-2 rounded-2xl border-[transparent] p-5 items-center"
          onPress={handleContinue}
        >
          <View>
            <Text className="text-[18px] font-semibold">
              Face avant du cheque
            </Text>
            <Text className="text-[16px] font-normal mt-2 text-justify text-[#005792]">
              Prendre/Importer une photo
            </Text>
          </View>
          <View className="ml-auto">
            <Image
              source={icons.plus}
              className="w-7 h-7"
              tintColor={"black"}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <Shape additional={"absolute top-[10vh]"} />
        <Shape additional={"absolute top-[17vh] right-[4vh]"} />
      </View>
      <View className="absolute bottom-[4vh] w-full">
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default ScanCheck;
