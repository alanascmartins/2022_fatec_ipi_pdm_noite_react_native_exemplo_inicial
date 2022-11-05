import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  //const vetor = useState('esse valor com vetor')//valor padrão que vai existir na variável de estado
  //const [texto,setTexto] = useState('esse valor com vetor desestruturado') //desestruturando um vetor. ex: vetor = [1,2] -> const [primeiro, segundo] = vetor
  const[contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)

  }
  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Button
       title='Incrementar'
       onPress={incrementar} 
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
