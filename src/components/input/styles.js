import { StyleSheet } from "react-native";
import { colors,margin } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        marginVertical: margin.medium,
    },
    input: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        color: colors.primary,
        marginBottom: margin.small,
        fontSize: 30,
        alignSelf: 'center',
    }
});