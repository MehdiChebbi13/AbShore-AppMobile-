import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    console.log(form);
    setIsSubmitting(true);
    router.push("/home");
  };

  return (
    <LinearGradient colors={["#0254AF", "#012349"]}>
      <StatusBar style="light" />
      <SafeAreaView className="h-full ">
        <ScrollView>
          <View className="w-full left-2 top-6  my-6 ">
            <View className=" flex-row ">
              <Image
                source={images.shield}
                className="w-20 h-20 mt-4 "
                resizeMode="contain"
              />
              <Text
                className="text-center text-[25px] font-bold mt-8 w-[40vh] right-3 text-[#85daf6] "
                style={{ fontFamily: "Roboto" }}
              >
                SECURE CHECK DEPOSIT ONLINE
              </Text>
            </View>
          </View>
          <View className="w-full py-4 px-4 mt-[3vh]  rounded-lg   ">
            <Text className="text-white text-3xl font-bold  items-center text-center">
              S'inscrire
            </Text>
            <FormField
              title="Nom"
              placeholder="Entrer votre nom"
              value={form.name}
              handleChangeText={(e) => setForm({ ...form, name: e })}
              otherStyles="mt-4"
            />
            <FormField
              title="Prénom"
              placeholder="Entrez votre prénom"
              value={form.lastName}
              handleChangeText={(e) => setForm({ ...form, lastName: e })}
              otherStyles="mt-4"
            />
            <FormField
              title="Email"
              placeholder="Entrez votre email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-4"
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              placeholder="Entrez votre mot de passe"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-4"
            />
          </View>
          <View
            className=" justify-center items-center w-full mt-7"
            style={{ fontFamily: "Roboto" }}
          >
            <CustomButton
              title="S'inscrire"
              containerStyles="w-[30vh] "
              textStyles="text-white font-bold"
              handlePress={submit}
              isLoading={isSubmitting}
            />
          </View>
          <View className="flex-row justify-center pt-5 gap-2">
            <Text className="text-white text-sm">
              Vous avez déjà un compte?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-secondary text-sm font-semibold"
            >
              S'identifier
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;
