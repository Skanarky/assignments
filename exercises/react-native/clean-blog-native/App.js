import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      // or <View> !?
      <ScrollView style={styles.forScroll}>
        <Image
          source={{url: 'https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}}
          style={{width: 414, height: 280}}
        />
        <Text style={styles.textContTwo}>
          ILIAN's FIRST iOS App :)
        </Text>

        <Text style={styles.textCont}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nesciunt molestiae ea fugit praesentium debitis, iusto tenetur quam quidem.
          Quis maxime neque cum quasi totam facere ab odit porro minus.
        </Text>
        <Text style={styles.textCont}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam beatae labore rem illo.
          Facere accusantium, excepturi aliquid magnam maiores, ratione nihil ipsum amet ullam esse quis non dolore atque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore ipsa consequuntur itaque mollitia laborum? 
          Reprehenderit nisi ducimus aliquam odio laborum voluptas laudantium et! Voluptatum quae inventore error assumenda sequi!
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   // height: 1800,
  //   // width: 414,
  //   flex: 1,
  //   backgroundColor: 'black',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // width: "100%"
  // }, 
  forScroll: {
    backgroundColor: 'black'
  },
  textCont: {
    // paddingTop: "20px",
    textAlign: "center",
    fontStyle: "italic",
    width: "100%",
    lineHeight: 50,
    color: "whitesmoke"
  },
  textContTwo: {
    // paddingTop: "20px",
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 50,
    width: "100%",
    lineHeight: 90,
    color: "whitesmoke"
  },
});
