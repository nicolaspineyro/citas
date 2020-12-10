import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import Appointment from './src/components/Appointment/Appointment'


const App = () => {
  const [appointments, setAppointment] = useState([
    { id: '1', patient: 'Hooks', owner: 'React', symptoms: 'No habla.' },
    { id: '2', patient: 'Redux', owner: 'React', symptoms: 'No escucha' },
  ]);
  const deletePatient= (id) => {
    setAppointment((remainAppointments) => {
      return (remainAppointments.filter(item => item.id !== id))
    })
  }
  return (
    <View style={style.container}>
      <Text style={style.headline}>Appointment Manager</Text>

      <Text style={style.headline}>{ appointments.length > 0 ? 'Your Appointments' : 'There are no appointments, add one:' }</Text>
      <FlatList
        data={appointments}
        renderItem={({ item }) => <Appointment item={item} deletePatient={deletePatient} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14274e'
  },
  headline: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#f1f6f9',
    margin: 20
  }
});

export default App;
