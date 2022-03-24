import { Dimensions, StyleSheet} from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        height: height * 0.24,
        marginBottom: 64,
    },
    cardContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
    },
    bold: {
        fontWeight: 'bold',
    }
});