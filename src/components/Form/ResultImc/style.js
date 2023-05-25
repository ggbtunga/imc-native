import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    //contextImc será nosso componente pai
    contextImc: {
        flex:1,
        marginTop:20,
        paddingTop:15,
        alignItems:"center",
        width:"100%",
    },
    //No resultado do caclulo do imc colocaremos esse estilo
    resultImc:{
        fontSize:48,
        color:"#E78B35",
        fontWeight:"bold",
    },
    //esse sera a frase que exibiremos abaixo do resultado 
    titleResultImc:{
        fontSize:18,
        color:"#E78B35",
        fontWeight:"bold",
    },
    boxSharebutton:{
        width:"100%",
        alignItems:"center",
        marginBottom:10,
    },
    shared:{
        backgroundColor:"#1877f2",
        borderRadius:50,
        paddingBottom: 5,
        paddingTop:5,
    },
    sharedText:{
        color:"#ffffff",
        fontWeight:"bold",
        paddingHorizontal: 30,
    },
});

export default style