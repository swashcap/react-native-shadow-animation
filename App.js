import React from 'react';
import { Animated, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      animating: false,
      shadow: new Animated.Value(0)
    };

    this.growShadow = this.growShadow.bind(this);
    this.shrinkShadow = this.shrinkShadow.bind(this);
  }
  growShadow() {
    const doGrow = () => {
      this.setState({
        animating: true,
        shadow: this.state.shadow
      });
      Animated.timing(this.state.shadow, {
        duration: 150,
        toValue: 1
      }).start(() => this.setState({
        animating: false,
        shadow: this.state.shadow
      }));
    };

    if (!this.state.animating) {
      doGrow();
    } else {
      this.state.shadow.stopAnimation(doGrow);
    }
  }
  shrinkShadow() {
    const doShrink = () => {
      this.setState({
        animating: true,
        shadow: this.state.shadow
      });
      Animated.timing(this.state.shadow, {
        duration: 150,
        toValue: 0
      }).start(() => this.setState({
        animating: false,
        shadow: this.state.shadow
      }));
    };

    if (!this.state.animating) {
      doShrink();
    } else {
      this.state.shadow.stopAnimation(doShrink);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <TouchableWithoutFeedback
          accessibilityComponentType="button"
          accessibilityTraits="button"
          onPress={this.shrinkShadow}
          onPressIn={this.growShadow}
          onPressOut={this.shrinkShadow}
        >
          <Animated.View
            style={[
              styles.button, 
              {
                shadowOffset: {
                  height: this.state.shadow.interpolate({
                    inputRange: [0, 1],
                    outputRange: [2, 10]
                  }),
                  width: 0
                },
                shadowOpacity: this.state.shadow.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.25, 0.5]
                }),
                shadowRadius: this.state.shadow.interpolate({
                  inputRange: [0, 1],
                  outputRange: [2, 10]
                }),
              }
            ]}
          >
            <Text style={styles.buttonText}>Sample shadow button</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "hotpink",
    borderRadius: 6,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
