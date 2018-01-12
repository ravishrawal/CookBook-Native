import React, { Component } from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'

import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const FilterBar = (props) => {
  return (
    <View style={styles.barStyle}>
      <View style={{alignSelf: 'flex-end', borderColor:"#f8f8ff", borderRadius:width/20, borderWidth:1, flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', height:width/10, width:width/10}}>
        <Icon name="filter-list" color="#f8f8ff" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  barStyle: {
    alignItems: 'flex-end',
    backgroundColor: '#6497b1',
    height: height/18,
    marginBottom: 0,
    marginTop: height/20,
    width: width
  },
});

export default FilterBar;
