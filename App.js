import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './cmps/GoalItem';
import GoalInput from './cmps/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }
  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals =>
      [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#a065ec' onPress={startAddGoalHandler} />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {

            return <GoalItem text={itemData.item.text}
              id={itemData.item.id}

              onDeleteItem={deleteGoalHandler} />
          }}
            keyExtractor={(item, index) => {
              return item.id
            }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },

});
