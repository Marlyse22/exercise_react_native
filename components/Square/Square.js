import { StyleSheet, Text, View } from "react-native";

const Square = ({ text }) => {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Square;

const styles = StyleSheet.create({
  square: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
