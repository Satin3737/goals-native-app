import styles from "../styles/styles";
import {Pressable, Text, View} from "react-native";

const GoalItem = ({data, deleteGoal}) => {
    const {text, id} = data;

    return (
        <Pressable
            onPress={() => deleteGoal(id)}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{text}</Text>
            </View>
        </Pressable>
    );
};

export default GoalItem;