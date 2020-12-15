import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';



const Appointment = ({ appointmentNumber, item, deletePatient }) => {

    function deleteFunction(id) {
        deletePatient(id);
    }
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <Text style={styles.text}>{item.patient}</Text>
            </View>
            <View>
                <Text style={styles.label}>Dueño:</Text>
                <Text style={styles.text}>{item.owner}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <Text style={styles.text}>{item.symptoms}</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => deleteFunction(item.id)}>
                <Text style={styles.deleteButton}>Eliminar &times;</Text>
            </TouchableOpacity>
        </View>
    )

};

const styles = StyleSheet.create({
    item: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#14274e',
        borderRadius: 10
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    text: {
        fontSize: 18,
    },
    deleteButton: {
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: 'red',
        textAlign: 'center',
        borderRadius: 10,
    },
    buttonContainer: {
        marginHorizontal: '30%',
        marginVertical: '5%'
    }
})
export default Appointment;