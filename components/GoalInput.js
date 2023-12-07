import {Button, TextInput, View} from "react-native";
import styles from "../styles/styles";
import {useState} from "react";

const GoalInput = ({addGoal}) => {
    const [value, setValue] = useState('');

    const inputHandler = (val) => {
        setValue(val);
    };

    const pressHandler = () => {
        if (!value) {
            return;
        }
        addGoal(value);
        setValue('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={'Your goal'}
                onChangeText={inputHandler}
                value={value}
            />
            <Button
                title={'Add goal'}
                onPress={pressHandler}
            />
        </View>
    );
};

export default GoalInput;