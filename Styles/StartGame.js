import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  startgame:{
    flexDirection:'column',
    marginTop:100,
    padding:16,
    marginHorizontal:10,
    backgroundColor:"#FF2645",
    borderRadius:8,
    elevation:1,
    shadowColor:'black',
    shadowOffset:{width:0,height:2}
  },
  startgamebutton:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
 },
 button:{
    color:'#fff'
 }
})

export default styles