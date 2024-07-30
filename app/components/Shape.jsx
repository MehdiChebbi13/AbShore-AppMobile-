import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const Shape = ({ additional }) => {
  return (
    <View style={styles.container} className={additional}>
      <LinearGradient
        colors={["#005792", "#53CDE2", "#D1F4FA", "#EDF9FC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[StyleSheet.absoluteFill, styles.gradient]}
      />
      <LinearGradient
        colors={["transparent", "#53CDE2", "#005792"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[StyleSheet.absoluteFill, styles.gradient, { opacity: 0.7 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    opacity: 0.12,
    height: 700,
    width: 450,
    zIndex: -10,
    borderWidth: 2,
    borderColor: "transparent",
    borderTopLeftRadius: 150,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 350,
    transform: [{ scaleX: 1.2 }, { scaleY: 0.8 }],
    overflow: "hidden",
  },
  gradient: {
    borderTopLeftRadius: 150,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 350,
  },
});
export default Shape;
