import styles from '../styles/styles';
import {Pressable, Text, View} from 'react-native';

const GoalItem = ({data, deleteGoal}) => {
    const {text, id} = data;

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#210644'}}
                onPress={() => deleteGoal(id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItemText}>{text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;