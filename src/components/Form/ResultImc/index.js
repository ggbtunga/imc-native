import React from "react";
import {View , Text , Share , TouchableOpacity} from "react-native"
import styles from "./style.js"

export default function ResultImc(props){

    async function onShare(){
        const result = await Share.share({
            message:"Meu IMC hoje é:" + props.resultImc,
        })
    }

    return(
        <View style={styles.contextImc}>
            <View style={styles.boxSharebutton}>
            <Text style={styles.titleResultImc}>{props.messageResultImc}</Text>
            <Text style={styles.resultImc}>{props.resultImc}</Text>
                <TouchableOpacity onPress={()=>onShare()} style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}