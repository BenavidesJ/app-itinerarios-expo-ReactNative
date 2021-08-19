import React, {useContext} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { AppDataContext } from '../context/AppDataContext';


const Navbar = ({props}) => {

    const {gotoCreate} = useContext(AppDataContext);

    return (
        
        <View style={styles.navbar}>
                <TouchableOpacity style={styles.addBtn} onPress={()=>gotoCreate(props)} >
                <Icon
                    name='plus'
                    type='font-awesome'
                    color='#000'     
                />
                    <Text style={styles.addBtnTitle}>Create New Itinerary!!</Text> 
                </TouchableOpacity>
        </View>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    navbar:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#8BCDCD',
        width: '100%',
    },
    addBtn:{
        flex: 1,
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addBtnTitle: {
        fontWeight: 'bold',
        marginLeft: 10,
    }

})
