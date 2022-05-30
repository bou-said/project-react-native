import {StyleSheet, TextInput, View, Button} from "react-native";
import {useState} from "react";
import emailjs from "@emailjs/browser";

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
    }

    return (
        <View>
            <form id="form">
                <TextInput style={styles.textInput} placeholder="Name" id="name"
                           onChangeText={e => setName(e)} name="name" value={name}/>

                <TextInput style={styles.textInput} placeholder="email" id="email"
                           onChangeText={e => setEmail(e)} name="email" value={email}/>
                <TextInput style={styles.textInput} placeholder="phoneNumber" id="phoneNumber"
                           onChangeText={e => setPhoneNumber(e)} name="phoneNumber" value={phoneNumber}/>
                <Button title="send" onPress={handleSumbit}/>
            </form>
        </View>
    )

}

const styles = StyleSheet.create({

    textInput: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    }

})