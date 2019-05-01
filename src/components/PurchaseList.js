import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';


export default class PurchaseList extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                <FlatList
                    data={[{key: 'Beer'}, {key: 'Milk'}, {key: 'Bread'}, {key: 'Other'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />

            </View>
        );
    }
}