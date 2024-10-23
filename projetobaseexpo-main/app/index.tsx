import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBopuRebxdX660c8t1_4Esy6SiqNGz1Y5o",
  authDomain: "meuprimeirofirebase-87d45.firebaseapp.com",
  projectId: "meuprimeirofirebase-87d45",
  storageBucket: "meuprimeirofirebase-87d45.appspot.com",
  messagingSenderId: "280511599358",
  appId: "1:280511599358:web:7d8b71d0b2a1514c00cbaf"
};


firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nomes, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

    const sendData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      try {
      await nomesCollection.add();
        Nome: nomes,
        Sobrenome: sobrenome
      });
     Alert.alert('sucesso', 'Dados cadastrados com sucesso');
     setNome('');
     setSobrenome('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'ocorreu um erro ao cadastrear od dados');
    }
};
return (
  <View>
  <TextInput
  placeholder='Nome'
  value={nome}
  onChangeText={setNome}
  />
  <TextInput
  placeholder="sobrenome"
  value={sobrenome}
  onChangeText={setSobrenome}
  />
  <Button title="Cadastrar" onPress={sendData} />
  </View>
);
};
      <
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}