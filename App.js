import { Button, FlatList, View } from 'react-native';
import styles from './styles/styles';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInputModal from './components/GoalInputModal';
import { StatusBar } from 'expo-status-bar';

const App = () => {
    const [goals, setGoals] = useState([]);
    const [isModal, setIsModal] = useState(false);

    const addGoal = (value) => {
        setGoals((state) => [...state, { text: value, id: Math.random() }]);
        setIsModal(false);
    };

    const deleteGoal = (id) => {
        setGoals((state) => state.filter((item) => item.id !== id));
    };

    return (
        <>
            <StatusBar style={'light'} />
            <View style={styles.appContainer}>
                <Button title={'Add new goal!'} color={'#5e0acc'} onPress={() => setIsModal(true)} />
                <GoalInputModal addGoal={addGoal} isModal={isModal} setIsModal={setIsModal} />
                <FlatList
                    style={styles.goalsContainer}
                    alwaysBounceVertical={false}
                    data={goals}
                    keyExtractor={(item, i) => item.id}
                    renderItem={(itemData) => <GoalItem data={itemData.item} deleteGoal={deleteGoal} />}
                    ItemSeparatorComponent={() => <View style={styles.goalsSeparator} />}
                />
            </View>
        </>
    );
};

export default App;
