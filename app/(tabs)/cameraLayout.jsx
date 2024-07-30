import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { CameraView } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

export default function CheckCameraScreen() {
  const { purpose, instructionText } = useLocalSearchParams();
  const [opened, setOpened] = useState(false);
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{purpose}</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="flash" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.guideOverlay} />

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <TouchableOpacity style={styles.captureButton}>
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setOpened((prevOpened) => !prevOpened)}
            >
              <Ionicons name="help-circle" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {opened && (
          <View style={styles.instructions}>
            <Text className="text-white">{instructionText}</Text>
          </View>
        )}
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  guideOverlay: {
    position: "absolute",
    top: "20%",
    left: "10%",
    right: "10%",
    height: "67%",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "dashed",
    borderRadius: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 45,

    zIndex: 100,
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
  instructions: {
    position: "absolute",
    borderColor: "transparent",
    opacity: 0.9,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#EEA343",
    width: "auto",
    height: 30,
    bottom: 100,
    left: 20,
    right: 20,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
  },
});
