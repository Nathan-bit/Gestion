// ApplicationForm.js

import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button, TextInput, RadioButton, Checkbox, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation Schema
const validationSchema = Yup.object().shape({
  nom: Yup.string().required('Nom est obligatoire'),
  prenom: Yup.string().required('Prénom est obligatoire'),
  date_naissance: Yup.date().required('Date de naissance est obligatoire'),
  adresse: Yup.string().required('Adresse est obligatoire'),
  telephone: Yup.string().required('Téléphone est obligatoire'),
  email: Yup.string().email('Email invalide').required('Email est obligatoire'),
  niveau_etudes: Yup.string().required('Niveau d\'études est obligatoire'),
  institution: Yup.string().required('Institution/Université est obligatoire'),
  domaine_etudes: Yup.string().required('Domaine d\'études est obligatoire'),
  section: Yup.string().required('Section est obligatoire'),
  annee_obtention: Yup.number().required('Année d\'obtention est obligatoire').min(2000, 'Année invalide'),
  experience: Yup.string().required('Expérience est obligatoire'),
  motivation: Yup.string().required('Motivation est obligatoire'),
  langues: Yup.string().required('Langues parlées/écrites sont obligatoires'),
});

const ApplicationForm = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Formik
        initialValues={{
          nom: '',
          prenom: '',
          date_naissance: '',
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
          date_debut: '',
          duree_stage: '',
          cv: '',
          lettre_motivation: '',
          releves_notes: '',
          confirmation: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Formulaire de Candidature pour un Stage</Text>
            
            {/* Personal Information */}
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
            
            <TextInput
              label="Date de naissance"
              mode="outlined"
              onChangeText={handleChange('date_naissance')}
              onBlur={handleBlur('date_naissance')}
              value={values.date_naissance}
              error={touched.date_naissance && !!errors.date_naissance}
            />
            <HelperText type="error" visible={touched.date_naissance && !!errors.date_naissance}>{errors.date_naissance}</HelperText>

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
            
            {/* Education Information */}
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
              label="Année d'obtention du diplôme (prévue)"
              mode="outlined"
              keyboardType="numeric"
              onChangeText={handleChange('annee_obtention')}
              onBlur={handleBlur('annee_obtention')}
              value={values.annee_obtention}
              error={touched.annee_obtention && !!errors.annee_obtention}
            />
            <HelperText type="error" visible={touched.annee_obtention && !!errors.annee_obtention}>{errors.annee_obtention}</HelperText>

            {/* Experience */}
            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Expérience pertinente</Text>
            <RadioButton.Group
              onValueChange={handleChange('experience')}
              value={values.experience}
            >
              <View>
                <RadioButton.Item label="Oui" value="oui" />
                <RadioButton.Item label="Non" value="non" />
              </View>
            </RadioButton.Group>
            <HelperText type="error" visible={touched.experience && !!errors.experience}>{errors.experience}</HelperText>

            <TextInput
              label="Décrivez brièvement votre expérience"
              mode="outlined"
              multiline
              numberOfLines={4}
              onChangeText={handleChange('experience_description')}
              onBlur={handleBlur('experience_description')}
              value={values.experience_description}
            />

            {/* Motivation */}
            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Motivation pour ce stage</Text>
            <TextInput
              label="Quelles sont vos motivations pour postuler à ce stage ?"
              mode="outlined"
              multiline
              numberOfLines={4}
              onChangeText={handleChange('motivation')}
              onBlur={handleBlur('motivation')}
              value={values.motivation}
              error={touched.motivation && !!errors.motivation}
            />
            <HelperText type="error" visible={touched.motivation && !!errors.motivation}>{errors.motivation}</HelperText>

            {/* Skills */}
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

            {/* Internship Details */}
            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Détails du stage</Text>
            <TextInput
              label="Date de début souhaitée"
              mode="outlined"
              onChangeText={handleChange('date_debut')}
              onBlur={handleBlur('date_debut')}
              value={values.date_debut}
            />

            <TextInput
              label="Durée du stage (en mois)"
              mode="outlined"
              keyboardType="numeric"
              onChangeText={handleChange('duree_stage')}
              onBlur={handleBlur('duree_stage')}
              value={values.duree_stage}
            />

            {/* Upload Documents */}
            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Documents à joindre</Text>
            <TextInput
              label="CV"
              mode="outlined"
              onChangeText={handleChange('cv')}
              onBlur={handleBlur('cv')}
              value={values.cv}
            />

            <TextInput
              label="Lettre de motivation"
              mode="outlined"
              onChangeText={handleChange('lettre_motivation')}
              onBlur={handleBlur('lettre_motivation')}
              value={values.lettre_motivation}
            />

            <TextInput
              label="Relevés de notes"
              mode="outlined"
              onChangeText={handleChange('releves_notes')}
              onBlur={handleBlur('releves_notes')}
              value={values.releves_notes}
            />

            {/* Confirmation */}
            <Checkbox.Item
              label="Je certifie que toutes les informations fournies sont exactes et complètes"
              status={values.confirmation ? 'checked' : 'unchecked'}
              onPress={() => setFieldValue('confirmation', !values.confirmation)}
            />

            <Button
              mode="contained"
              onPress={handleSubmit}
              disabled={!values.confirmation}
              style={{ marginTop: 20 }}
            >
              Soumettre
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ApplicationForm;
