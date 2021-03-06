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

  changeTheme: {
    paddingLeft: 10,
    paddingVertical: 10
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
    borderWidth: 1,
    borderColor: '#41414d'
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  detailsButton: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },

  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: 'bold'
  }
});