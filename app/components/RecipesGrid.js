import React, { Component } from 'react';

import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { fetchRecipes } from '../redux';

const { width, height } = Dimensions.get('window');

class RecipesGrid extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.loadRecipes();
  }
  render(){
    console.log('recipes', this.props.recipes)
    return (
      <View style={styles.mainView}>
          { this.props.recipes.length>0 && this.props.recipes.map(recipe => {
              return (
                <View key={recipe.id} style={ styles.recipeBox }>
                  <View style={ styles.imageView } >
                    <Image source={{ uri: recipe.image }} style={{flex:1, resizeMode:'cover'}} />
                  </View>
                  <View style={styles.textView}>
                      <Text style={ styles.text }>{recipe.name}</Text>
                      <Text style={ styles.text }>protein:{recipe.protein}</Text>
                      <Text style={ styles.text }>carbs:{recipe.carbs}</Text>
                      <Text style={ styles.text }>fat:{recipe.fat}</Text>
                      <Text style={ styles.text }>sugar:{recipe.sugar}</Text>
                  </View>
                </View>
              )
            })
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageView: {
    height:'100%',
    left:0,
    position:'absolute',
    top:0,
    width:'100%',
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    height: 19*height/20
  },
  recipeBox: {
    borderColor: '#03396c',
    borderTopWidth: 1,
    borderRightWidth: 1.25,
    height: height/5,
    width: width/3
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'monospace'
  },
  textView: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    flex: 1
  }
})

const mapStateToProps = ({ recipes }) => {
  return {
    recipes
  };
};

const mapDispatchToProps= (dispatch)=>{
  return {
    loadRecipes: () => {
        dispatch(fetchRecipes());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesGrid);
