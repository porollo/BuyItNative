/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PurchaseList from './src/components/PurchaseList';
import SearchPanel from './src/components/SearchPanel';
import SearchFilter from "./src/components/SearchFilter";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <SearchPanel/>
        <PurchaseList/>
        <SearchFilter/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 5,
  },
  box2: {
    flex: 10,
  },
  box3: {
    flex: 1,
  }
});