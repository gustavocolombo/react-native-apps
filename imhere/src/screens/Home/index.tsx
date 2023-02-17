import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import { Participant } from '../../components/Participant/Participant';

type ParticipantType = {
  id: number;
  name: string;
};

export function Home() {
  const [participants, setParticipants] = useState<ParticipantType[]>([]);
  const [name, setName] = useState('');

  const atualDate = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    month: 'long',
    day: '2-digit',
  }).format();

  function handleRemoveParticipant(name: string) {
    Alert.alert('Confirmação', `Deseja mesmo remover o usuário ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setParticipants(participants.filter((participant) => participant.name !== name)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleAddParticipant(nameParticipant: string) {
    const newParticipant = {
      id: Math.floor(Math.random() * 1000),
      name: nameParticipant,
    };
    setParticipants([...participants, newParticipant]);
    setName('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>imhere</Text>
      <Text style={styles.date}>{atualDate}</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#6B6B6B"
          value={name}
          onChangeText={(e) => setName(e)}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleAddParticipant(name)}>
          <Text style={styles.textButton}> + </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants.map((item) => item)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleRemoveParticipant(item.name)}
          />
        )}
      />
    </View>
  );
}
