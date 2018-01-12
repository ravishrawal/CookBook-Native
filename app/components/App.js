import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { Asset, AppLoading } from 'expo';

import RecipesGrid from './RecipesGrid';
import FilterBar from './FilterBar';
import { fetchRecipes } from '../redux';

const App =  () => {
  return (
    <View>
      <FilterBar />
      <RecipesGrid />
    </View>
    );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column'
  }
})

export default App;
