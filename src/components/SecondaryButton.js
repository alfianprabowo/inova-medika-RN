import { TouchableOpacity, StyleSheet } from "react-native";

export default function SecondaryButton({ onPress, text }) {
    return (

        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderColor: "#04CC89",
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 16,
    },
});