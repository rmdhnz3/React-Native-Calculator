import React from "react";
import { StyleSheet,View,Text } from "react-native";

export default class CalcDisplau extends React.Component{
static defaultProps = {
    display : "",
}
render(){
    return(
        <View style={styles.container}>
            <Text style={styles.display}>{this.props.display}</Text>
        </View>
    )
}
}


const styles = StyleSheet.create({
    container : {padding:15,paddingRight:20},
    display:{fontSize:75,color:"white",textAlign:"right",}

})