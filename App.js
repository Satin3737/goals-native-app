import {FlatList, View} from 'react-native';
import styles from "./styles/styles";
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
    const [goals, setGoals] = useState([]);

    const addGoal = (value) => {
        setGoals(state => [
            ...state,
            {text: value, id: Math.random()}
        ]);
    };

    const deleteGoal = (id) => {
        setGoals(state => state.filter(item => item.id !== id));
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput addGoal={addGoal} />
            <FlatList
                style={styles.goalsContainer}
                alwaysBounceVertical={false}
                data={goals}
                keyExtractor={(item, i) => item.id}
                renderItem={itemData => <GoalItem data={itemData.item} deleteGoal={deleteGoal} />}
            />
        </View>
    );
};

export default App;
