import {StyleSheet}  from 'react-native'




const styles = StyleSheet.create({
  formContext:{
   width:"100%",
   height:"100%",
   bottom:0,
   backgroundColor:"#ffffff",
   alignItems:"center",
   marginTop:2,
   borderTopLeftRadius:30,
   borderTopRightRadius:30,

  },

  form:{
 
    width:"100%",
    height:"auto",
    marginTop:30,
    padding:10
  },

  formLabel:{
    color:'#000',
    fontSize:18,
    paddingLeft:20,
  },

  input:{
    width: "90%",
    bordeRadius:50,
    backgroundColor:"#f6f6f6",
    height:40,
    margin:12,
    paddingLeft:10,
},
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#808080",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,


    },


    textbuttonCalculator:{
    fontSize:20,
    color:"#ffffff",
}


});

export default styles
