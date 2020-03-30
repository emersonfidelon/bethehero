import React from 'react';
import { View, Image,Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import dark from './styles';
import light from './styles-light.js';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const theme = route.params.themeColor == 'dark' ? dark : light;

  const incident = route.params.incident;
  const message = `Olá, ${incident.name} estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${
    Intl.NumberFormat('pt-BR', {
      style: 'currency', 
      currency: 'BRL'
    }).format(incident.value)
  }`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5573988513549&text=${message}`);
  }

  return (
    <View style={theme.container}>
      <View style={theme.header}>
        <Image source={logoImg} />
      
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={theme.incident}>
        <Text style={[theme.incidentProperty, {marginTop: 0}]}>ONG:</Text>
        <Text style={theme.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
        
        <Text style={theme.incidentProperty}>CASO:</Text>
        <Text style={theme.incidentValue}>{incident.title}</Text>

        <Text style={theme.incidentProperty}>VALOR:</Text>
        <Text style={theme.incidentValue}>{Intl.NumberFormat('pt-BR', {
          style: 'currency', 
          currency: 'BRL'
        }).format(incident.value)}</Text>
      </View>

      <View style={[theme.contactBox, theme.incident, {marginTop: 0}]}>
        <Text style={theme.heroTitle}>Salve o dia!</Text>
        <Text style={theme.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={theme.heroDescription}>Entre em contato</Text>

        <View style={theme.actions}>
          <TouchableOpacity style={theme.action} onPress={sendWhatsapp}>
            <Text style={theme.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={theme.action} onPress={sendMail}>
            <Text style={theme.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

      </View>
      
    </View>
  );
}