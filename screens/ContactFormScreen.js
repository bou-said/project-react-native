import {StyleSheet, TextInput, View, Button, Text} from "react-native";
import {useState} from "react";
import emailjs from "@emailjs/browser";
import tw from 'twrnc';

export function ContactFormScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    /*const {control, handleSubmit, formState: {errors}} = useForm({defaultValues: activePlace});*/

    function handleSumbit(e) {
        e.preventDefault();
        emailjs.sendForm('service_4lb44fn', 'template_nm00qa9', "form", '3c5e8ICd0P6nVQvHX')
        setName("");
        setEmail("");
        setPhoneNumber("");
        alert("Form is submitted!");
    }

    return (
        <View>

            <Text style={styles.title}>Welkom bij Tesla</Text>
            <Text style={styles.subTitle}>Vraag een gratis testrit aan</Text>

            <View style={styles.form}>
                <form name="form">
                    <TextInput style={styles.textInput} placeholder="Naam" id="name"
                               onChangeText={e => setName(e)} name="name" value={name}/>

                    <TextInput style={styles.textInput} placeholder="Email" id="email"
                               onChangeText={e => setEmail(e)} name="email" value={email}/>
                    <TextInput style={styles.textInput} placeholder="Telefoonnummer" id="phoneNumber"
                               onChangeText={e => setPhoneNumber(e)} name="phoneNumber" value={phoneNumber}/>
                    <Button title="verzend" onPress={handleSumbit}/>
                </form>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    textInput: {
        paddingHorizontal: 10,
        height: 40,
        margin: 12,
        borderWidth: 1
    },

    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
    },

    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500',
    },

    form: tw `flex-row justify-center`

})