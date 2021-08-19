import React, {useContext, useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {VIEW_ITIN } from '../nav/MainStackNavigation';
import Navbar from '../components/Navbar';
import firebase from '../database/firebase';
import { Card, ListItem } from 'react-native-elements';


const Main = ({navigation}) => {

    const [trips, setTrips] = useState([]);
    useEffect(()=>{
        firebase.db.collection('itineraries').onSnapshot(querySnapshot => {
            const tripsData = [];
            querySnapshot.docs.forEach((doc)=>{
                const {initialbudget,transportation_fees,feeding_fees,initial_date,end_date,country,city,recomended_places,aditional_comments} = doc.data();
                tripsData.push({
                    id: doc.id,
                    initialbudget,
                    transportation_fees,
                    feeding_fees,
                    initial_date,
                    end_date,
                    country,
                    city,
                    recomended_places,
                    aditional_comments
                })
            });
            setTrips(tripsData);
        })
    },[]);
    

    const gotoView = (data) => {
        navigation.push(VIEW_ITIN,data);
    }

    return (
        <ScrollView >
            
            <Navbar props={navigation}/>

            
                {trips.map(t => {
                    return (
                        <TouchableOpacity key={t.id} onPress={()=>gotoView(t.id)}>
                            <Card >
                                <Card.Title>{t.city},{t.country}</Card.Title>
                                <Card.Divider/>
                                <Text style={styles.container}>
                                   Recomended places: {t.recomended_places}
                                </Text>
                                <Card.Divider/>
                                <ListItem>
                                    <ListItem.Title>
                                        Total Cost:
                                    </ListItem.Title>
                                    <ListItem.Subtitle>
                                        ${t.initialbudget - t.transportation_fees - t.feeding_fees}
                                    </ListItem.Subtitle>
                                </ListItem>
                                <ListItem>
                                    <ListItem.Title>
                                        Dates:
                                    </ListItem.Title>
                                    <ListItem.Subtitle>
                                        from: {t.initial_date} to: {t.end_date}
                                    </ListItem.Subtitle>
                                </ListItem>
                                <Card.Divider/>
                                <Text style={styles.container}>
                                   Comments: {t.aditional_comments}
                                </Text>
                            </Card>
                        </TouchableOpacity>
                    )
                })}
            

            
        </ScrollView>
    )
}

export default Main;

const styles = StyleSheet.create({
    btn:{
        backgroundColor: 'gray',
        width: 120,
        paddingVertical: 5,
        marginTop: 25
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    }
})
