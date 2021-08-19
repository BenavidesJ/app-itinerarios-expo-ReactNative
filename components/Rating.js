import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Rating = (props) => {

    const stars = Array(5).fill(0);
    
    
    return (
        <View style={styles.starsContainer}>
            {stars.map((_,i)=>{
            <Icon
                name={props < i ? 'star' : 'star-outline'}
                type='ionicons'
                color='#442793'
            />
            })}
        </View>
            
    )
}

export default Rating

const styles = StyleSheet.create({})

