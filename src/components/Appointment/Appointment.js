import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';



const Appointment = ({ item, deletePatient}) => {

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
                <Text style={styles.label}>Propietario:</Text>
                <Text style={styles.text}>{item.owner}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintoma:</Text>
                <Text style={styles.text}>{item.symptoms}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteFunction(item.id)}>
                <Text style={styles.deleteButton}>Eliminar &times;</Text>
            </TouchableOpacity>
        </View>
    )

};

const styles = StyleSheet.create({
    item: {
        paddingTop: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderBottomColor: '#e1e1e1',
        backgroundColor: '#fff'
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
        marginVertical: 20,
        marginHorizontal: 120,
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: 'red',
        textAlign: 'center',
        borderRadius: 30
    }
})
export default Appointment;