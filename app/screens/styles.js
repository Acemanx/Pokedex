import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pokemonCard: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: 180,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "#D3D3D3",
    margin: 8
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00ff00",
    padding: 100
  },
  text: {
    color: "#3f2949",
    marginTop: 10
  }
});

export default styles;
