import React, {useContext, useState} from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from '../database/firebase';
import { MAIN } from '../nav/MainStackNavigation';
import { AppDataContext } from '../context/AppDataContext';
import { Icon } from 'react-native-elements/dist/icons/Icon';


const CreateItin = (props) => {
   

    const [itin, setItin] = useState({
        initialbudget: 0,
        transportation_fees: 0,
        feeding_fees: 0,
        initial_date: '',
        end_date: '',
        country: '',
        city: '',
        recomended_places: '',
        aditional_comments: '',
        security: 0,
        food: 0,
        clean: 0,
        all: 0,
    })

    const handleChangeText = (name, value) => {
        setItin({...itin, [name]: value});
    }

    const saveItinerary = async () => {
        try {
            if(itin.initialbudget === ''){
                alert("Por favor rellene los campos");
            }else {
                await firebase.db.collection('itineraries').add({
                    initialbudget: itin.initialbudget,
                    transportation_fees: itin.transportation_fees,
                    feeding_fees: itin.feeding_fees,
                    initial_date: itin.initial_date,
                    end_date: itin.end_date,
                    country: itin.country,
                    city: itin.city,
                    recomended_places: itin.recomended_places,
                    aditional_comments: itin.aditional_comments,
                    security: itin.security,
                    food: itin.food,
                    clean: itin.clean,
                    all: itin.all,
                });
                alert('saved succesfully! ✔');
                props.navigation.navigate(MAIN);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                {/*Bloque 1 - Relacionado a dinero y tiempo*/}
                <View style={styles.block1}>
                <View style={styles.formContainer}>

                    <Text style={styles.label} >Initial Budget</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType={'numeric'}
                        onChangeText={(value)=>handleChangeText('initialbudget',value)}
                    />

                    <Text style={styles.label}>Transportation fees</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType={'numeric'}
                        onChangeText={(value)=>handleChangeText('transportation_fees',value)}
                    />

                    <Text style={styles.label}>Feeding fees</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType={'numeric'}
                        onChangeText={(value)=>handleChangeText('feeding_fees',value)}
                    />
                    </View>

                    <View style={styles.formContainer}>
                    <Text style={styles.label}>Initial date</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType={'default'}
                        onChangeText={(value)=>handleChangeText('initial_date',value)}
                    />

                    <Text style={styles.label}>End date</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType={'default'}
                        onChangeText={(value)=>handleChangeText('end_date',value)}
                    />
                    </View>
                </View>
                {/*Bloque 2 - Relacionado a lugares*/}
                <View style={styles.block2}>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Country</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType={'default'}
                            onChangeText={(value)=>handleChangeText('country',value)}
                        />

                        <Text style={styles.label}>City</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType={'default'}
                            onChangeText={(value)=>handleChangeText('city',value)}
                        />

                        <Text style={styles.label}>Recomended Places</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType={'default'}
                            multiline
                            numberOfLines={3}
                            onChangeText={(value)=>handleChangeText('recomended_places',value)}
                        />
                        <Text style={styles.label}>Aditional Comments</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType={'default'}
                            multiline
                            numberOfLines={4}
                            onChangeText={(value)=>handleChangeText('aditional_comments',value)}
                        />
                    </View>
                    {/**Ratings */}
                    <View style={styles.ratings}>
                        
                        {/**Stars rating */}
                        <View style={styles.starsContainer}>
                            <Text>Security:</Text>
                                <TextInput
                                    style={styles.input2}
                                    keyboardType={'numeric'}
                                    onChangeText={(value)=>handleChangeText('security',value)}
                                />
                        </View>

                        {/**Stars rating */}
                        <View style={styles.starsContainer}>
                            <Text>Food Quality:</Text>
                                <TextInput
                                    style={styles.input2}
                                    keyboardType={'numeric'}
                                    onChangeText={(value)=>handleChangeText('food',value)}
                                />
                        </View>

                        <View style={styles.starsContainer}>
                            <Text>Cleanliness:</Text>
                                <TextInput
                                    style={styles.input2}
                                    keyboardType={'numeric'}
                                    onChangeText={(value)=>handleChangeText('clean',value)}
                                />
                        </View>

                        <View style={styles.starsContainer}>
                            <Text>Overall:</Text>
                                <TextInput
                                    style={styles.input2}
                                    keyboardType={'numeric'}
                                    onChangeText={(value)=>handleChangeText('all',value)}
                                />
                        </View>
                    </View>
                    
                </View>
            </View>

            <View style={styles.btnControlContainer}>
                <TouchableOpacity 
                    style={styles.submitBtn}
                    onPress={()=>saveItinerary()}
                >
                    <Text style={styles.submitBtnTitle}>
                        Submit
                        
                    </Text>
                    <Icon
                        name='plane'
                        type='font-awesome'
                        color='#fff'
                        />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}



export default CreateItin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'column',
        flexWrap: 'nowrap'
    },
    block1:{
        marginTop: 25,
        flex: 1,
        flexDirection: 'row',
    },
    block2:{
        marginTop: 25,
        flex: 1,
        flexDirection: 'column',
    },
    formContainer:{
        flex: 1,
        flexDirection:'column',
        width: '100%',
    },
    input:{
        width: '75%', 
        borderBottomColor: '#333333',
        borderBottomWidth: 1,
        alignSelf: 'center',
    },
    input2:{
        width: '15%', 
        borderBottomColor: '#333333',
        borderBottomWidth: 1,
        alignSelf: 'center',
    },
    label: {
        marginTop: 20,
        textAlign: 'center',
    },
    submitBtn: {
        marginTop: 20,
        backgroundColor: '#233E8B',
        width: 150,
        paddingVertical: 8,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 40,
    },
    submitBtnTitle: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    btnControlContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    ratings:{
        flex:1,
        height:200,
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    starsContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
})
