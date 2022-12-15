import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import React, { useEffect } from 'react'
// import Logo from '../assets/Register.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const Register = () => {
    const [username, setUsername] = React.useState('')
    const [nama, setNama] = React.useState('')
    const [password, setPassword] = React.useState('')

    const register = async (value) => {
        console.log('value', value);
        try {
            const response = await axios.post('http://192.168.201.74:3200/users', {
                username: value.username,
                nama: value.nama,
                password: value.password
            })
            if (response.data.status == 200) {
                console.log('response', response)
                ToastAndroid.show("Register berhasil", ToastAndroid.SHORT)
            }
        } catch (error) {
            console.log(error.message)
            ToastAndroid.show("Register gagal", ToastAndroid.SHORT)
        }
    }
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text
                style={{
                    color: 'white',
                    fontSize: 30,
                    marginBottom: 20,
                    fontWeight: "bold",
                    top: -200,
                }}>
                Welcome Onboard!
            </Text>
            <Text
                style={{
                    color: 'white',
                    fontSize: 20,
                    marginBottom: 20,
                    top: -200,
                }}>
                Let's help you meet your tasks
            </Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#f2530f"
                    onChangeText={(username) => setUsername(username)}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#f2530f"
                    onChangeText={(nama) => setNama(nama)}
                    value={nama}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#f2530f"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                        if (username == "" || nama == "" || password == "") {
                            ToastAndroid.show("Data tidak boleh kosong", ToastAndroid.SHORT)
                        } else {
                            register({ username: username, nama: nama, password: password })
                        }
                    }}>
                    <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Already have an account?
                    <Text
                        style={{ fontWeight: 'bold' }}
                        onPress={() => navigation.goBack()}
                    > Sign in</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0faaf2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 180,
        top: 120,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#ffff',
        borderRadius: 10,
        color: '#f2530f',
        paddingHorizontal: 20,
        marginBottom: 20,
        top: 70,
        
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#f2530f',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        top: 80,
    },
    textButton: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        top: 70,
    },
})

export default Register