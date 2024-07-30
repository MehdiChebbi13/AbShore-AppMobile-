import { View, Text, Platform } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { Image } from "react-native";
import { icons } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
const TabIcon = ({ icon, color, name, focused, style, styleText }) => {
  return (
    <View className={`justify-center items-center  ${styleText}`}>
      <Image
        source={icon}
        className={`w-6 h-6 ${style}`}
        resizeMode="contain"
        tintColor={color}
      />
      <Text
        className={`${focused ? "font-bold" : "font-normal"} ${
          focused ? "text-secondary" : "text-[#CFEDF2]"
        }  text-[10px]`}
      >
        {name}
      </Text>
    </View>
  );
};
const TabLayout = () => {
  return (
    <>
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#EEA343",
          tabBarInactiveTintColor: "#CFEDF2",
          tabBarBackground: () => (
            <LinearGradient
              colors={["#012349", "#0254AF"]}
              style={{
                height: "100%",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
          ),
          tabBarStyle: {
            height: Platform.OS === "ios" ? "13%" : "11%",
            borderTopWidth: 1,
            boxShadow: "0px 4px 4px blue",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Acceuil",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <>
                  <TabIcon
                    icon={icons.home}
                    name={"Acceuil"}
                    color={color}
                    focused={focused}
                    styleText={"gap-2"}
                  />
                </>
              );
            },
          }}
        />
        <Tabs.Screen
          name="historique"
          options={{
            title: "Historique",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <>
                  <TabIcon
                    icon={icons.historique}
                    name={"Transactions"}
                    color={color}
                    style={"w-8 h-8 "}
                    focused={focused}
                    styleText={"gap-[2px] mb-1"}
                  />
                </>
              );
            },
          }}
        />

        <Tabs.Screen
          name="Deposit/deposit"
          options={{
            title: "Deposit",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <>
                  <LinearGradient
                    colors={
                      focused ? ["#fc4a1a", "#f7b733"] : ["#012349", "#0254AF"]
                    }
                    className="border-[2px] border-[#EEF4F5] border-opacity-20 rounded-[50px] bottom-7 p-4 opacity-98 "
                    start={{ x: 0, y: 1.5 }}
                    end={{ x: 0, y: 0 }}
                  >
                    <Image
                      source={icons.plus}
                      className={`w-8 h-8 p-5 `}
                      resizeMode="contain"
                      tintColor="white"
                    />
                  </LinearGradient>
                </>
              );
            },
          }}
        />
        <Tabs.Screen
          name="accounts"
          options={{
            title: "Comptes",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <>
                  <TabIcon
                    icon={icons.account}
                    name={"Comptes"}
                    style={"w-8 h-8 "}
                    color={color}
                    focused={focused}
                    styleText={"gap-[1px] mb-1"}
                  />
                </>
              );
            },
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <>
                  <TabIcon
                    icon={icons.settings}
                    name={"Parametre"}
                    color={color}
                    focused={focused}
                    styleText={"gap-2"}
                  />
                </>
              );
            },
          }}
        />
        <Tabs.Screen
          name="selectAccount"
          options={{
            href: null,
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="scanCheck"
          options={{
            href: null,
            presentation: "modal",
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="scanCheck1"
          options={{
            href: null,
            presentation: "modal",
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="verification"
          options={{
            href: null,
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="confirmation"
          options={{
            href: null,
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="cameraLayout"
          options={{
            href: null,
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
