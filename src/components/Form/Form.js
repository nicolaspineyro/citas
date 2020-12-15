import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Form = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const [patient, setPatient] = useState('')
    const [owner, setOwner] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [dateAppointment, setDateAppointment] = useState('');
    const [timeAppointment, setTimeAppointment] = useState('');
    const [symptoms, setSymptoms] = useState('')


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const confirmDate = (date) => {
        setDateAppointment(date.toLocaleDateString());
        hideDatePicker();
    };

    // HORA
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmTime = (time) => {
        setTimeAppointment(time.toLocaleTimeString());
        hideTimePicker();
    };

    const handleSubmit = () => {
        if (patient.trim() === '' ||
            cellphone.trim() === '' ||
            owner.trim() === '' ||
            dateAppointment.trim() === '' ||
            timeAppointment.trim() === '' ||
            symptoms.trim() === '') {
            mostrarAlerta();
            return;
        }
    }
    const mostrarAlerta = () => {
        Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'OK' }]);
    }
    return (
        <ScrollView style={styles.formContainer}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput
                    onChangeText={(text) => setPatient(text)}
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.label}>Telefono:</Text>
                <TextInput
                    onChangeText={(text) => setCellphone(text)}
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.label}>Dueño:</Text>
                <TextInput
                    onChangeText={(text) => setOwner(text)}
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Set a Date" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmDate}
                    onCancel={hideDatePicker}
                />
                <Text style={[styles.label, styles.time]}>{dateAppointment}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Set a Time" onPress={showTimePicker} />
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmTime}
                    onCancel={hideTimePicker}
                    is24Hour
                />
                <Text style={[styles.label, styles.time]}>{timeAppointment}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <TextInput
                    multiline
                    onChangeText={(text) => setSymptoms(text)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSubmit()}>
                <Text style={styles.SubmitButton}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        color: '#14274e',
        fontWeight: 'bold',
        paddingVertical: 10
    },
    input: {
        borderWidth: 0.5,
        borderColor: '#14274e',
        fontSize: 20,
        color: '#14274e',
    },
    formContainer: {
        margin: '2.5%',
        backgroundColor: '#f1f6f9',
        padding: 10,
        borderRadius: 10
    },
    time: {
        textAlign: 'center',
        margin: "2%"
    },
    SubmitButton: {
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: '#f1f6f9',
        backgroundColor: '#14289e',
        textAlign: 'center',
        borderRadius: 10
    },
    buttonContainer: {
        marginHorizontal: '30%',
        marginVertical: '5%'
    }
})
export default Form;