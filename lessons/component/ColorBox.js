import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ text, boxColor, boxStyle, textStyle }) => {
  return (
    <View style={style.containerPosition}>
      <Text style={[style.textStyle, style.boxStyle, boxColor]}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  containerPosition: {
    textAlign: "center",
    alignItems: "center",
  },
  boxStyle: {
    paddingHorizontal: "45%",
    paddingVertical: 10,
    margin: 15,
  },
});

export default ColorBox;



// This is app/index.js
// import { View, Text, SafeAreaView, StyleSheet } from "react-native";
// import React from "react";
// import ColorBox from "../lessons/component/ColorBox";
// const Home = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Hello</Text>
//         <ColorBox text={"A"} boxColor={style.boxColorA} />
//         <ColorBox text={"B"} boxColor={style.boxColorB} />
//         <ColorBox text={"C"} boxColor={style.boxColorC} />
//         <ColorBox text={"D"} boxColor={style.boxColorD} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   boxColorA: {
//     backgroundColor: "cyan",
//   },
//   boxColorB: {
//     backgroundColor: "blue",
//   },
//   boxColorC: {
//     backgroundColor: "magenta",
//   },
//   boxColorD: {
//     backgroundColor: "orange",
//   },
// });