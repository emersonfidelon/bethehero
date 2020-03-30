import React, {useEffect, useState} from 'react';
import { View, Image,Text, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import dark from './styles';
import light from './styles-light.js';

import api from '../../services/api';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(light);
  const [themeKey, setThemeKey] = useState('light');

  const navigation = useNavigation();

  const _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('Error to store local data');
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@bth:theme');
      if (value !== null && value === 'dark') {
        setThemeKey('dark');
        setTheme(dark);
      }else{
        setThemeKey('light');
        setTheme(light);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const _changeTheme = async () => {
    if (themeKey === 'dark') {
      _storeData('@bth:theme','light');
      setThemeKey('light');
      setTheme(light);
    }else{
      _storeData('@bth:theme','dark');
      setThemeKey('dark');
      setTheme(dark);
    }
  }

  async function loadIncidents() {
      
    if(loading) {
      return;
    }

    if(total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: { page }
    });
    
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
    _retrieveData();
  }, []);
  
  function navigateToDetail(incident){
    navigation.navigate('Detail', { incident, themeColor: themeKey, themeObj: theme });
  }

  return (
    <View style={theme.container}>
      <View style={theme.header}>
        <Image source={logoImg} />
        <Text style={theme.headerText}>
          Total de <Text style={theme.headerTextBold}>{total} casos</Text>
        </Text>
        <TouchableOpacity style={theme.changeTheme} onPress={_changeTheme}>
          <Feather 
            size={16} 
            name={themeKey === 'light' ? "moon" : "sun"} 
            color={themeKey === 'light' ? "#000" : "#737380"} />
        </TouchableOpacity>
      </View>
      <Text style={theme.title}>Bem-vindo!</Text>
      <Text style={theme.description}>Escolha um dos casos abaixo e salve o dia.</Text>
      <FlatList
        style={theme.incidentList} 
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <View style={theme.incident}>
            <Text style={theme.incidentProperty}>ONG:</Text>
            <Text style={theme.incidentValue}>{incident.name}</Text>
            
            <Text style={theme.incidentProperty}>CASO:</Text>
            <Text style={theme.incidentValue}>{incident.title}</Text>

            <Text style={theme.incidentProperty}>VALOR:</Text>
            <Text style={theme.incidentValue}>{
              Intl.NumberFormat('pt-BR', {
                style: 'currency', 
                currency: 'BRL'
              }).format(incident.value)
            }</Text>

            <TouchableOpacity style={theme.detailsButton} onPress={() => navigateToDetail(incident)}>
              <Text style={theme.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}