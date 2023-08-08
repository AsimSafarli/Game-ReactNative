import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  startgame:{
    flexDirection:'column',
    marginTop:100,
    padding:16,
    gap:20,
    marginHorizontal:10,
    backgroundColor:"#FF2645",
    borderRadius:8,
    elevation:1,
    shadowColor:'black',
    shadowOffset:{width:0,height:2}
  },
  input:{
    fontSize:32,
   height:50,
   borderBottomColor:"#fde68a",
   color:'#fde68a',
   borderBottomWidth:2,
   marginVertical:8,
   width:'auto',
   fontWeight:'bold'
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