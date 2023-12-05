import {Button, Text, TextInput, View} from 'react-native';
import styles from "./styles";
import {useState} from "react";

const App = () => {
    const [goals, setGoals] = useState([]);
    const [value, setValue] = useState('');

    const inputHandler = (val) => {
        setValue(val);
    };

    const addGoal = () => {
        setGoals(state => [...state, value]);
        setValue('');
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Your goal'}
                    onChangeText={inputHandler}
                    value={value}
                />
                <Button
                    title={'Add goal'}
                    onPress={addGoal}
                />
            </View>
            <View style={styles.goalsContainer}>
                {goals.map((goal, i) => (
                    <View key={i} style={styles.goalItem}>
                        <Text style={styles.goalItemText}>{goal}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default App;
