import React, { useState } from "react";
import {View , Text , TextInput , TouchableOpacity , Keyboard , Vibration , Pressable, FlatList} from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style.js";

export default function Form(){
    const [height,setHeight] = useState(null);
    const [weight,setWeight] = useState(null);
    const [imc,setImc] = useState(null);
    const [messageResultImc,setMessageResultImc] = useState("Preencha a altura e o peso");
    const [textButton,setTextButton] = useState("Calcular");
    const [errorMessage,setErrorMessage] = useState(null);
    const [imcList,setImcList] = useState([]);

    function imcCalculator(){
        Keyboard.dismiss();
        const totalImc = ((weight.replace(",", ".") * 1)/(height.replace(",", ".") * 1 * (height.replace(",", ".") * 1))).toFixed(2)
        setImcList((arr)=>[...arr,{id:new Date().getTime(),imc:totalImc}]);
        setImc(totalImc);
    }

    function verificationImc(){
        if(imc==null){
            setErrorMessage("Campo obrigatório*");
            Vibration.vibrate();
        }
    }

    function validatorImc(){
        if(height != null && weight != null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageResultImc("Seu IMC é:");
            setTextButton("Calcular novamente");
            setErrorMessage(null);
        }
        else{
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageResultImc("Preencha a altura e o peso");
        }
        }
        

    return(
        <View style={styles.formContext}>
            {imc == null?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"/>

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.250"
                    keyboardType="numeric"/>
                    <TouchableOpacity style={styles.buttonCalculator} onPress={()=>validatorImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>  
                </Pressable>
            :
                <View style={styles.exhibitionResult}>
                    <ResultImc messageResultImc={messageResultImc} resultImc={imc}/>
                    <TouchableOpacity style={styles.buttonCalculator} onPress={()=>validatorImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity> 
                </View>
            }
            <FlatList
            style={styles.listImcs}
            data={imcList.reverse()}
            renderItem={({item})=>{
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}>Resultado do IMC:</Text>
                        {item.imc}
                    </Text>
                )
            }}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
}