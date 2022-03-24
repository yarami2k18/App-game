import { StyleSheet, Dimensions } from 'react-native'
import { colors, fontSize, margin } from '../../constants/theme';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        height: height / 2,
        justifyContent: 'center',
        marginTop: margin.medium,
        marginHorizontal: 50,
        paddingVertical: 30,
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        backgroundColor: '#DCC7BE'
    },
});