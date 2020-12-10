import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Form = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    return (
        <View style={styles.formContainer}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput
                    onChangeText={(text) => console.log(text)}
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.label}>Dueño:</Text>
                <TextInput
                    onChangeText={(text) => console.log(text)}
                    style={styles.input}
                />
            </View>
            <View>
                <Button title="Date" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <TextInput
                    multiline
                    onChangeText={(text) => console.log(text)}
                    style={styles.input}
                />
            </View>
        </View>
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
    }
})
export default Form;