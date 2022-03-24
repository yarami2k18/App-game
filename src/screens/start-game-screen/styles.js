import {Dimensions, StyleSheet} from 'react-native';
import {fontSize, margin, colors} from '../../constants/theme';

const { Width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCC7BE',
  },
  cardTitle: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: margin.medium,
    color: colors.text,
  },
  inputContainer: {
    marginHorizontal: margin.medium,
  },
  label: {
    fontSize: fontSize.text,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: margin.small4,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonsContainer: {
    height: height * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: margin.medium,
  },
  buttonText: {
    color: '#000000',
  },
  buttonContainer: {
    backgroundColor: '#D36135',
    padding: 16,
    height: 50,
  },
  containerConfirmed: {
    flex: 1,
    flexGrow: 0.30,
    justifyContent: 'center',
    marginVertical: margin.medium,
  },
  confirmedText: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: margin.small,
    paddingHorizontal: 18,
  },
  buttonContainerText: {
    backgroundColor: '#D36135',
    padding: 16,
    height: 40,
    alignItems: 'center',
  },
  containerButton: {
    paddingHorizontal: 12,
  }
});
