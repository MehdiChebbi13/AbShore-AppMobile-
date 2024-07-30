import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { icons } from "../../constants";
import Shape from "../components/Shape";
import SearchInput from "../components/SearchInput";

const home = () => {
  return (
    <SafeAreaView className="bg-[#EEF4F5] h-full ">
      <View>
        <FlatList
          data={[{ key: "a" }, { key: "b" }, { key: "c" }]}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          ListHeaderComponent={() => (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className=" text-sm text-gray-600 font-medium ">
                    Welcome back
                  </Text>
                  <Text className="text-2xl font-semibold ">Chebbi Mahdi</Text>
                </View>
                <View className="mt-1.5 ">
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
              <SearchInput placeholder={"Search for services"} />
            </View>
          )}
        />
        <Shape additional={"absolute top-[10vh] "} />
        <Shape additional={" absolute top-[17vh] right-[4vh]"} />
      </View>
    </SafeAreaView>
  );
};

export default home;
