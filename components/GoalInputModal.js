import { Button, Image, Modal, TextInput, View } from 'react-native';
import styles from '../styles/styles';
import { useState } from 'react';

const GoalInputModal = ({ addGoal, isModal, setIsModal }) => {
    const [value, setValue] = useState('');

    const inputHandler = (val) => {
        setValue(val);
    };

    const closeModal = () => {
        setIsModal(false);
    };

    const pressHandler = () => {
        if (!value) {
            return;
        }
        addGoal(value);
        setValue('');
    };

    return (
        <Modal visible={isModal} animationType={'slide'} statusBarTranslucent={true}>
            <View style={styles.inputContainer}>
                <View style={styles.imageWrapper}>
                    <Image source={require('../assets/goal.png')} style={styles.image} />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder={'Your goal'}
                    onChangeText={inputHandler}
                    value={value}
                    placeholderTextColor={'#12043890'}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonWrapper}>
                        <Button title={'Add goal'} onPress={pressHandler} color={'#5e0acc'} />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button title={'Cancel'} onPress={closeModal} color={'#f31282'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInputModal;
