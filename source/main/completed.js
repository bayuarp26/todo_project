import { View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const completed = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [parameter, setParameter] = React.useState('');
    const [date, setDate] = React.useState('');
  

    const clmpt = async (value) => {
        console.log('value', value);
        try {
          const res = await axios.delete('http://192.168.100.10:3200/todo/:id',{
            title: value.title,
            description: value.description,
            parameter: value.parameter,
            date: value.date,
          });
          if (res.data.status == 200) {
            console.log('res', res);
            ToastAndroid.show('task completed', ToastAndroid.SHORT);
          }
        } catch (e) {
          console.log(e);
        }
      };

        const getData = async () => {
            try {
                const title = await AsyncStorage.getItem('title');
                const description = await AsyncStorage.getItem('description');
                const parameter = await AsyncStorage.getItem('parameter');
                const date = await AsyncStorage.getItem('date');
                if (title !== null && description !== null && parameter !== null && date !== null) {
                    setTitle(title);
                    setDescription(description);
                    setParameter(parameter);
                    setDate(date);
                }
            } catch (e) {
                console.log(e);
            }
        };

        useEffect(() => {
            getData();
            return () => { };
        }, []);


  return (
    <ImageBackground source={require('../asset/complete2.jpg')} style={{width: '100%', height: '100%'}}>
    <View style={(styles.container)}>
      <Text style={styles.text}>Completed</Text>
      <View style={styles.container1}>
        <Text style={styles.text1}>Task Name</Text>
        <Text style={styles.text1}>Description</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}
        style={styles.button}>
          <Text style={styles.textButton}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
     container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex : 1,
    top : 20,
    color: '#2B3A55',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container1: {
    width: '80%',
  },
  input: {
    backgroundColor: '#1B2430',
    borderRadius: 10,
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1B2430',
    borderRadius: 10,
    height: 50,
    bottom: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon : {
    flex : 1,
    left: 20,
    top: 20,
    color : '#fff',
  },
  text1 : {
    bottom : '130%',
    color : '#2C3333',
    fontSize : 20,
    fontWeight : 'bold',
    marginBottom : 20,
  },
})

export default completed