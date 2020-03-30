import { StyleSheet  } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#000'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 

  headerText: {
    fontSize: 15,
    color: '#737380'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#737380',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 34,
    color: '#737380'
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#000',
    marginBottom: 16,
    marginTop: 48,
    borderWidth: 1,
    borderColor: '#737380'
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#737380',
    lineHeight: 30,
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});