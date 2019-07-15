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
  pokemonInfoCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  informationText: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 40
  },
  pokeballLogo: {
    marginLeft: 10,
    width: 30,
    height: 30
  }
});

export default styles;
