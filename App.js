import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';
import Appointment from './src/components/Appointment/Appointment';
import Form from './src/components/Form/Form';


const App = () => {
  const [appointments, setAppointment] = useState([
    { id: '1', patient: 'Hooks', owner: 'React', symptoms: 'No habla.', cellphone: '2235062334' },
  ]);
  const deletePatient = (id) => {
    setAppointment((remainAppointments) => {
      return (remainAppointments.filter(item => item.id !== id))
    })
  }
  return (
    <View style={style.container}>
      <Text style={style.headline}>Appointment Manager</Text>
      <Form />
      <Text style={style.headline}>{appointments.length > 0 ? 'Your Appointments' : 'There are no appointments, add one:'}</Text>
      <View style={appointments.length > 0 && style.appointmentContainer}>
        <FlatList
          data={appointments}
          renderItem={({ item, index }) => <Appointment appointmentNumber={index} item={item} deletePatient={deletePatient} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View >
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
  },
  appointmentContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#f1f6f9',
    marginHorizontal: '1.5%'
  },
  zeroAppointmentsText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 50,
    fontWeight: 'bold',
    color: 'gray'
  }
});

export default App;
