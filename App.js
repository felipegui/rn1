import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

const Page = styled.View`
  flex: 1;
  margin-top: 52px;
  align-items: center;
`;
const Input = styled.TextInput`
  font-size: 15px;
  border: 1px solid #000;
  height: 50px;
  width: 90%;
  padding: 10px;
`;
const Button = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  background-color: #4169E1;
  margin-top: 10px;
  align-items: center;
  justify-content: center;  
  border-radius: 10px;
`;
const Text = styled.Text`
  font-size: 20px;
`;
const NameArea = styled.View`
  width: 90%;
  height: 100px;
  background-color: #87CEFA;
  margin-top: 30px;
`;
const Name = styled.Text`
  font-size: 18px;
`;

export default function App() {
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');

  const handleSave = async () => {
    if ( newName != '' ) {
      await AsyncStorage.setItem('@name', newName);
      setName(newName);
      setNewName('');
    }
  }

  const getName = async () => {
    const n = await AsyncStorage.getItem('@name');
    setName(n);
  }

  useEffect(() => {
    getName();
  }, []);

  return (
    <Page>
      <Input
        placeholder="Qual seu nome?"
        value={newName}
        onChangeText={event => setNewName(event)}
      />
      <Button onPress={handleSave}>
        <Text>Salvar</Text>
      </Button>
      <NameArea>
        <Name>{name}</Name>
      </NameArea>
    </Page>
  );
}