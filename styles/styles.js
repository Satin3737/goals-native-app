import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        paddingVertical: 64,
        paddingHorizontal: 16,
        flex: 1,
        gap: 24,
        backgroundColor: '#1e085a'
    },
    inputContainer: {
        padding: 16,
        flex: 1,
        gap: 16,
        justifyContent: 'center',
        paddingBottom: 124,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        color: '#120438',
        borderRadius: 6,
        backgroundColor: '#fff'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8
    },
    buttonWrapper: {
        flex: 1
    },
    goalsContainer: {
        flex: 1
    },
    goalsSeparator: {
        height: 8
    },
    goalItem: {
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        overflow: 'hidden'
    },
    goalItemText: {
        padding: 8,
        color: '#fff'
    },
    pressedItem: {
        opacity: 0.5
    },
    imageWrapper: {
        height: 200,
        marginVertical: 16
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
});

export default styles;
