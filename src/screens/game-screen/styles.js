import { StyleSheet, Dimensions } from "react-native";
import { fontSize, colors, margin } from "../../constants/theme";
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCC7BE'
    }, 
    confirmedText: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
    },
    cardTitle: {
        fontSize: fontSize.title,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: margin.medium,
        color: colors.text,
        
    },
    buttonsContainer: {
        flex: 1,
        flexGrow: 0.30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: margin.medium,
      },
      containerContent: {
        marginBottom: 12,
        paddingHorizontal: 12,
      },
      cardContainer: {
          height: height * 0.4,
      },
})