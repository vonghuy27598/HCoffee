import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, WHITE_COLOR } from "../../constants/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.5, 
        shadowRadius: 15,
        shadowOffset : { width: 10, height: 20},
        borderWidth:0.5,
        borderColor:'rgba(0, 0, 0, 0.2)',
        borderRadius:15,
        marginTop:50,

       
    },
    bgContainer:{
        backgroundColor: 'rgba(209, 26, 26, 0.2)',
        borderRadius:15,
        zIndex:-99999
    },
    traparentContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius:15,
    },
    titleTextReward:{
        fontSize: 18,
        fontWeight:'bold',
        paddingVertical:15,
        color: WHITE_COLOR
    },
    textReward:{
        marginBottom: 10,
        textAlign:'center',
        paddingHorizontal:15,
        color: WHITE_COLOR
    },
    touchLoginReward:{
        backgroundColor: PRIMARY_COLOR,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:40,
        paddingVertical:15,
        borderRadius:15,
        marginVertical: 30

    },
    textTouchLogin:{
        color: WHITE_COLOR,
        fontWeight:'bold',
       
    },
    touchSeenReward:{
        backgroundColor: WHITE_COLOR,
        width:'95%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:10,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.5, 
        shadowRadius: 15,
        shadowOffset : { width: 10, height: 20},
        elevation: 10,
        borderRadius: 10
    }
})