import { StyleSheet } from 'react-native'
import { colors, fontSize, margin } from '../../constants/theme';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D36135',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#000000',
    },
});