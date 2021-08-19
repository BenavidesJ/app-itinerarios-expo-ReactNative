import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native'
import firebase from '../database/firebase';
import { Card, ListItem } from 'react-native-elements';
import { Rating } from 'react-native-elements';

const ViewItin = ({route}) => {
    

    const [selectedTrip, setSelectedTrip] = useState({});

    const getTripInfo = async (id) => {
        const dbReq = firebase.db.collection('itineraries').doc(id);
        const data = await dbReq.get();
        const tripInfo = data.data();
        setSelectedTrip(tripInfo);
        console.log(tripInfo.all);
    }

    useEffect(()=>{
        getTripInfo(route.params);
    },[])

    return (
        <ScrollView>
            <Card>
                <Card.Title>
                    {selectedTrip.city}
                </Card.Title>
                <Text style={styles.cardSubtitle}>
                    {selectedTrip.country}
                </Text>
                <Text style={styles.cardSubtitle}>
                    {selectedTrip.initial_date} / {selectedTrip.end_date} 
                </Text>
            </Card>
            
            <Card>
                <Card.Title>
                    Trip Cost
                </Card.Title>

                <ListItem>
                    <ListItem.Title>
                        Total Cost:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        ${selectedTrip.initialbudget - selectedTrip.transportation_fees - selectedTrip.feeding_fees}
                    </ListItem.Subtitle>
                </ListItem>

                <ListItem>
                    <ListItem.Title>
                        Initial Budget:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        ${selectedTrip.initialbudget}
                    </ListItem.Subtitle>
                </ListItem>

                <ListItem>
                    <ListItem.Title>
                        Transportation:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        ${selectedTrip.transportation_fees}
                    </ListItem.Subtitle>
                </ListItem>

            </Card>

            <Card>
                <Card.Title>
                    Recomendations
                </Card.Title>
                <ListItem>
                    <ListItem.Title>
                        Best places to visit
                    </ListItem.Title>
                </ListItem>
                <Text>
                    {selectedTrip.recomended_places}
                </Text>
                
                <ListItem>

                    <ListItem.Title>
                        Aditional comments:
                    </ListItem.Title>
                </ListItem>
                <Text>
                    {selectedTrip.aditional_comments}
                </Text>
            </Card>

            <Card>
                <Card.Title>
                    Rating
                </Card.Title>

                <ListItem>
                    <ListItem.Title>
                        Security:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                    <Rating
                           ratingCount={5}
                           imageSize={20}
                           defaultRating={5}
                           startingValue={selectedTrip.security}
                        />
                    </ListItem.Subtitle>
                </ListItem>

                <ListItem>
                    <ListItem.Title>
                        Food Quality:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                    <Rating
                           ratingCount={5}
                           imageSize={20}
                           defaultRating={3}
                        />
                    </ListItem.Subtitle>
                </ListItem>

                <ListItem>
                    <ListItem.Title>
                        Cleanliness:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                    <Rating
                           ratingCount={5}
                           imageSize={20}
                           defaultRating={3}
                        />
                    </ListItem.Subtitle>
                </ListItem>

                <ListItem>
                    <ListItem.Title>
                        Overall:
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        <Rating
                           ratingCount={5}
                           imageSize={20}
                           defaultRating={3}
                        />
                    </ListItem.Subtitle>
                </ListItem>
               
            </Card>

            <Card>
                <Card.Title>
                    Pictures
                </Card.Title>
               
            </Card>
        </ScrollView>
    )
}

export default ViewItin;

const styles = StyleSheet.create({
    cardSubtitle:{
        marginTop: 10,
        textAlign: 'center',
    },
})
