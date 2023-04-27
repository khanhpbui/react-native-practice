import { View, Text, SafeAreaView, StyleSheet } from "react-native";


const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors:</Text>
        <View>
        <Text style={[styles.boxA, styles.positions, styles.boxText]}>A</Text>
        <Text style={[styles.boxB, styles.positions, styles.boxText]}>B</Text>
        <Text style={[styles.boxC, styles.positions, styles.boxText]}>C</Text>
        <Text style={[styles.boxD, styles.positions, styles.boxText]}>D</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        paddingTop: 40,
        marginBottom: 15

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxText: {
        color: "white",
        fontWeight: 'bold'
    },
  positions: {
    margin: 8,
    padding: 15,
    textAlign: 'center',
  },
  boxA: {
    backgroundColor: "cyan",
  },
  boxB: {
    backgroundColor: "blue"
  },
  boxC: {
    backgroundColor: "magenta"
  },
  boxD: {
    backgroundColor: "orange"
  },
});

export default Home;
