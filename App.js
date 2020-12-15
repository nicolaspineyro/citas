import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Appointment from './src/components/Appointment/Appointment';
import Form from './src/components/Form/Form';


const App = () => {
  const [appointments, setAppointment] = useState([]);
  const deletePatient = (id) => {
    setAppointment((remainAppointments) => {
      return (remainAppointments.filter(item => item.id !== id))
    })
  }
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Appointment Manager</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => handleShowForm()}>
        <Text style={styles.showFormButton}>{showForm ? 'Show Appointments' : 'Add New Appointment'}</Text>
      </TouchableOpacity>
      <View style={styles.appointmentContainer}>
        {showForm ? (
          <Form
            appointments={appointments}
            setAppointment={setAppointment}
            handleShowForm={handleShowForm}
          />
        ) :
          <>
            <Text style={styles.headline}>{appointments.length > 0 ? 'Your Appointments' : 'There are no appointments, add one with the upper button.'}</Text>
            <FlatList
              style={styles.appointmentList}
              data={appointments}
              renderItem={({ item, index }) => <Appointment appointmentNumber={index} item={item} deletePatient={deletePatient} />}
              keyExtractor={item => item.id}
            />
          </>
        }
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14274e'
  },
  headline: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#f1f6f9',
    marginVertical: '2.5%'
  },
  appointmentContainer: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  appointmentList: {
    flex: 1,
  },
  showFormButton: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
    color: '#14274e',
    backgroundColor: '#f1f6f9',
    textAlign: 'center'
  },
  buttonContainer: {
    marginBottom: '3%'
  }
});

export default App;
