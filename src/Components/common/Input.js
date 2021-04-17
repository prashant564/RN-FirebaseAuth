import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ( {label, onChangeText, value, placeholder, secureTextEntry} ) => {

    const { labelStyle, containerStyle, inputStyle } = styles

    return (
        <View style= {containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry = {secureTextEntry}
                autoCorrect={false}
                style={ inputStyle }
                onChangeText = { onChangeText }
                value={value}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        paddingLeft: 10,
        fontSize: 18,
    },
    containerStyle: {
        height: 80,
        flex: 1,
        flexDirection: 'column'
    },
    inputStyle : {
        marginTop: 10,
        marginLeft: 10,
        height: 40,
        color:'#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        borderColor: 'gray', 
    	borderWidth: 1,
    	placeholderTextColor: 'gray'
    }
}

export { Input };
