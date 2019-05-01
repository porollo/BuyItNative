import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';


export default class PurchaseList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Beer'},
                        {key: 'Milk'},
                        {key: 'Apples'},
                        {key: 'Potatoes'},
                        {key: 'Cat\'s Food'},
                        {key: 'Meat'},
                        {key: 'Bred'},
                        {key: 'Cigarettes'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        paddingTop: 0
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 44,
    },
})

AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);