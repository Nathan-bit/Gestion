// StagesTab/Postulation.jsx
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Postulation = ({ route }) => {
  const { stage } = route.params; // Extract the passed data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Postulation Details</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Sociéte/Entreprise:</Text> {stage.Nom}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Domaine:</Text> {stage.Domaine}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Sujets:</Text> {stage.Libelle} : {stage.Titre}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Description:</Text> {stage.Description}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Niveau:</Text> {stage.Niveau}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Experience:</Text> {stage.Experience}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Langue:</Text> {stage.Langue}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Address:</Text> {stage.Address}, {stage.Rue}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Contact:</Text> {stage.Telephone} / {stage.Fax}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Mail:</Text> {stage.Email} / {stage.Email2}</Text>
      <Text style={styles.detail}><Text style={styles.bold}>Debut:</Text> {new Date(stage.DateDebut).toLocaleDateString()} - <Text style={styles.bold}>Fin:</Text> {new Date(stage.DateFin).toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Postulation;
