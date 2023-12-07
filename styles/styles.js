import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        paddingVertical: 64,
        paddingHorizontal: 16,
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    goalsContainer: {
        flex: 1
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    goalItemText: {
        color: '#fff'
    }
});

export default styles;