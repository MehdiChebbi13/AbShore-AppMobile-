import { View, Text } from "react-native";
import React from "react";
import StepIndicator from "react-native-step-indicator";
import { Image } from "react-native";
import { icons } from "../../constants";

const Steps = ({ position }) => {
  const labels = [
    "Termes et Conditions",
    "Selection de Compte",
    "Scanner Cheque",
    "Confirmation",
  ];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 1.7,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: "#FFA300",
    stepStrokeWidth: 1.7,
    stepStrokeFinishedColor: "#FFA300",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#FFA300",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#FFA300",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "#FFA300",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 12,
    currentStepLabelColor: "#FFA300",
  };

  return (
    <View>
      <StepIndicator
        stepCount={4}
        customStyles={customStyles}
        currentPosition={position}
        labels={labels}
        renderStepIndicator={(stepStatus) => {
          return (
            <>
              {stepStatus.stepStatus === "finished" && (
                <View>
                  <Image
                    source={icons.tick}
                    resizeMode="contain"
                    className="w-3"
                    tintColor={"white"}
                  />
                </View>
              )}
              {stepStatus.stepStatus === "current" && (
                <View>
                  <Image
                    source={icons.dot}
                    resizeMode="contain"
                    className="w-3 "
                  />
                </View>
              )}
            </>
          );
        }}
      />
    </View>
  );
};

export default Steps;
