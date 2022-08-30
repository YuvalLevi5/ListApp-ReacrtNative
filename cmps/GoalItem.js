import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {

    return (
        <Pressable
            onPress={props.onDeleteItem.bind(this, props.id)}
            android_ripple={{color: '#210644'}}
            style={({pressed}) =>  pressed && styles.pressedItem}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#5e0acc',
        color: 'white',
    },
    goalText: {
        padding: 8,
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5,
    }

})