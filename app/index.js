import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import ColorBox from "../lessons/component/ColorBox";
const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
        <ColorBox text={"A"} boxColor={style.boxColorA} />
        <ColorBox text={"B"} boxColor={style.boxColorB} />
        <ColorBox text={"C"} boxColor={style.boxColorC} />
        <ColorBox text={"D"} boxColor={style.boxColorD} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  boxColorA: {
    backgroundColor: "cyan",
  },
  boxColorB: {
    backgroundColor: "blue",
  },
  boxColorC: {
    backgroundColor: "magenta",
  },
  boxColorD: {
    backgroundColor: "orange",
  },
});

// const style = StyleSheet.create({
//     textStyle: {
//         fontSize: 15,
//         fontWeight: 'bold',
//     },

//     })

export default Home;
