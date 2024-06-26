import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { TextInput, Checkbox, HelperText, Button, RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DocumentPicker from 'react-native-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const ApplicationForm = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const initialValues = {
    nom: '',
    prenom: '',
    date_naissance: new Date(),
    adresse: '',
    telephone: '',
    email: '',
    niveau_etudes: '',
    institution: '',
    domaine_etudes: '',
    section: '',
    annee_obtention: '',
    experience: '',
    experience_description: '',
    motivation: '',
    langues: '',
    logiciels: '',
    competences_autres: '',
    date_debut: new Date(),
    duree_stage: '',
    cv: '',
    lettre_motivation: '',
    releves_notes: '',
    confirmation: false,
  };

  const validationSchema = Yup.object().shape({
    nom: Yup.string().required('Le nom est requis'),
    prenom: Yup.string().required('Le prénom est requis'),
    date_naissance: Yup.date().required('La date de naissance est requise'),
    adresse: Yup.string().required('L\'adresse est requise'),
    telephone: Yup.string().required('Le numéro de téléphone est requis'),
    email: Yup.string().email('Adresse email invalide').required('L\'email est requis'),
    niveau_etudes: Yup.string().required('Le niveau d\'études est requis'),
    institution: Yup.string().required('L\'institution/université est requise'),
    domaine_etudes: Yup.string().required('Le domaine d\'études est requis'),
    section: Yup.string().required('La section est requise'),
    annee_obtention: Yup.number().required('L\'année d\'obtention prévue est requise'),
    experience: Yup.string().required('Veuillez sélectionner si vous avez effectué un stage'),
    experience_description: Yup.string().when('experience', {
      is: 'oui',
      then: Yup.string().required('La description de l\'expérience est requise'),
    }),
    motivation: Yup.string().required('La motivation est requise'),
    langues: Yup.string().required('Les langues parlées/écrites sont requises'),
    duree_stage: Yup.string().required('La durée de stage souhaitée est requise'),
    cv: Yup.string().required('Le CV est requis'),
    confirmation: Yup.boolean().oneOf([true], 'Vous devez certifier l\'exactitude des informations fournies'),
  });

  const handleFileSelect = async (fieldName, setFieldValue) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setFieldValue(fieldName, res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.log('DocumentPicker Error:', err);
      }
    }
  };

  const renderFilePicker = (fieldName, label, values, setFieldValue) => (
    <View>
      <Text>{label}</Text>
      <Button mode="outlined" onPress={() => handleFileSelect(fieldName, setFieldValue)}>
        Choisir {label}
      </Button>
      <Text>{values[fieldName]}</Text>
    </View>
  );

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <ScrollView>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Informations personnelles</Text>
            <TextInput
              label="Nom"
              mode="outlined"
              onChangeText={handleChange('nom')}
              onBlur={handleBlur('nom')}
              value={values.nom}
              error={touched.nom && !!errors.nom}
            />
            <HelperText type="error" visible={touched.nom && !!errors.nom}>{errors.nom}</HelperText>

            <TextInput
              label="Prénom"
              mode="outlined"
              onChangeText={handleChange('prenom')}
              onBlur={handleBlur('prenom')}
              value={values.prenom}
              error={touched.prenom && !!errors.prenom}
            />
            <HelperText type="error" visible={touched.prenom && !!errors.prenom}>{errors.prenom}</HelperText>

            <Button onPress={() => setShowDatePicker(true)}>
              Sélectionner la date de naissance
            </Button>
            {showDatePicker && (
              <DateTimePicker
                value={values.date_naissance}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    setFieldValue('date_naissance', selectedDate);
                  }
                }}
              />
            )}

            <TextInput
              label="Adresse"
              mode="outlined"
              onChangeText={handleChange('adresse')}
              onBlur={handleBlur('adresse')}
              value={values.adresse}
              error={touched.adresse && !!errors.adresse}
            />
            <HelperText type="error" visible={touched.adresse && !!errors.adresse}>{errors.adresse}</HelperText>

            <TextInput
              label="Téléphone"
              mode="outlined"
              onChangeText={handleChange('telephone')}
              onBlur={handleBlur('telephone')}
              value={values.telephone}
              error={touched.telephone && !!errors.telephone}
            />
            <HelperText type="error" visible={touched.telephone && !!errors.telephone}>{errors.telephone}</HelperText>

            <TextInput
              label="Email"
              mode="outlined"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={touched.email && !!errors.email}
            />
            <HelperText type="error" visible={touched.email && !!errors.email}>{errors.email}</HelperText>

            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Formation</Text>
            <TextInput
              label="Niveau d'études actuel"
              mode="outlined"
              onChangeText={handleChange('niveau_etudes')}
              onBlur={handleBlur('niveau_etudes')}
              value={values.niveau_etudes}
              error={touched.niveau_etudes && !!errors.niveau_etudes}
            />
            <HelperText type="error" visible={touched.niveau_etudes && !!errors.niveau_etudes}>{errors.niveau_etudes}</HelperText>

            <TextInput
              label="Institution/Université"
              mode="outlined"
              onChangeText={handleChange('institution')}
              onBlur={handleBlur('institution')}
              value={values.institution}
              error={touched.institution && !!errors.institution}
            />
            <HelperText type="error" visible={touched.institution && !!errors.institution}>{errors.institution}</HelperText>

            <TextInput
              label="Domaine d'études"
              mode="outlined"
              onChangeText={handleChange('domaine_etudes')}
              onBlur={handleBlur('domaine_etudes')}
              value={values.domaine_etudes}
              error={touched.domaine_etudes && !!errors.domaine_etudes}
            />
            <HelperText type="error" visible={touched.domaine_etudes && !!errors.domaine_etudes}>{errors.domaine_etudes}</HelperText>

            <TextInput
              label="Section"
              mode="outlined"
              onChangeText={handleChange('section')}
              onBlur={handleBlur('section')}
              value={values.section}
              error={touched.section && !!errors.section}
            />
            <HelperText type="error" visible={touched.section && !!errors.section}>{errors.section}</HelperText>

            <TextInput
              label="Année d'obtention prévue"
              mode="outlined"
              keyboardType="numeric"
              onChangeText={handleChange('annee_obtention')}
              onBlur={handleBlur('annee_obtention')}
              value={values.annee_obtention}
              error={touched.annee_obtention && !!errors.annee_obtention}
            />
            <HelperText type="error" visible={touched.annee_obtention && !!errors.annee_obtention}>{errors.annee_obtention}</HelperText>

            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Expérience pertinente</Text>
            <RadioButton.Group onValueChange={handleChange('experience')} value={values.experience}>
              <View>
                <Text>Avez-vous déjà effectué un stage ?</Text>
                <RadioButton.Item label="Oui" value="oui" />
                <RadioButton.Item label="Non" value="non" />
              </View>
            </RadioButton.Group>
            <HelperText type="error" visible={touched.experience && !!errors.experience}>{errors.experience}</HelperText>

            {values.experience === 'oui' && (
              <TextInput
                label="Description de l'expérience"
                mode="outlined"
                multiline
                numberOfLines={4}
                onChangeText={handleChange('experience_description')}
                onBlur={handleBlur('experience_description')}
                value={values.experience_description}
                error={touched.experience_description && !!errors.experience_description}
              />
            )}
            <HelperText type="error" visible={touched.experience_description && !!errors.experience_description}>{errors.experience_description}</HelperText>

            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Motivation pour ce stage</Text>
            <TextInput
              label="Motivation"
              mode="outlined"
              multiline
              numberOfLines={4}
              onChangeText={handleChange('motivation')}
              onBlur={handleBlur('motivation')}
              value={values.motivation}
              error={touched.motivation && !!errors.motivation}
            />
            <HelperText type="error" visible={touched.motivation && !!errors.motivation}>{errors.motivation}</HelperText>

            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Compétences</Text>
            <TextInput
              label="Langues parlées et/ou écrites"
              mode="outlined"
              onChangeText={handleChange('langues')}
              onBlur={handleBlur('langues')}
              value={values.langues}
              error={touched.langues && !!errors.langues}
            />
            <HelperText type="error" visible={touched.langues && !!errors.langues}>{errors.langues}</HelperText>

            <TextInput
              label="Logiciels maîtrisés"
              mode="outlined"
              onChangeText={handleChange('logiciels')}
              onBlur={handleBlur('logiciels')}
              value={values.logiciels}
            />

            <TextInput
              label="Autres compétences pertinentes"
              mode="outlined"
              onChangeText={handleChange('competences_autres')}
              onBlur={handleBlur('competences_autres')}
              value={values.competences_autres}
            />

            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Détails du stage</Text>
            <Button onPress={() => setShowDatePicker(true)}>
              Sélectionner la date de début souhaitée
            </Button>
            {showDatePicker && (
              <DateTimePicker
                value={values.date_debut}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    setFieldValue('date_debut', selectedDate);
                  }
                }}
              />
            )}

            <TextInput
              label="Durée du stage (en mois)"
              mode="outlined"
              keyboardType="numeric"
              onChangeText={handleChange('duree_stage')}
              onBlur={handleBlur('duree_stage')}
              value={values.duree_stage}
              error={touched.duree_stage && !!errors.duree_stage}
            />
            <HelperText type="error" visible={touched.duree_stage && !!errors.duree_stage}>{errors.duree_stage}</HelperText>

            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Documents à joindre</Text>
            {renderFilePicker('cv', 'CV', values, setFieldValue)}
            {renderFilePicker('lettre_motivation', 'Lettre de motivation', values, setFieldValue)}
            {renderFilePicker('releves_notes', 'Relevés de notes', values, setFieldValue)}

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <Checkbox.Android
                status={values.confirmation ? 'checked' : 'unchecked'}
                onPress={() => setFieldValue('confirmation', !values.confirmation)}
              />
              <Text>J'atteste que les informations fournies sont exactes.</Text>
            </View>
            <HelperText type="error" visible={touched.confirmation && !!errors.confirmation}>{errors.confirmation}</HelperText>

            <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 20 }}>
              Soumettre
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ApplicationForm;