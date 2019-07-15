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
  flatListContainer: {
    backgroundColor: "yellow"
  },
  informationText: {
    fontSize: 13,
    fontWeight: "bold"
  },
  boxStyle: {
    height: 30,
    width: 100,
    borderWidth: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#3D7DCA",
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
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
  titleMoves: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#003A70"
  },
  typeContainer: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    margin: 4
  },
  typeText: {
    color: "black",
    fontWeight: "bold"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  pokeballLogo: {
    marginLeft: 10,
    width: 30,
    height: 30
  },
  logoutLogo: {
    marginRight: 6
  }
});

export default styles;
