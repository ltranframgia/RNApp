import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Platform, StyleSheet, SafeAreaView, Text, View, Button, SectionList, TouchableWithoutFeedback } from 'react-native';
import { ReachabilityView, LoadingView } from '../utils'
import { pushProfile } from '../navigation/profile';
import Colors from '../constants/colors';
import CircleChart from './views/AnimatedCircleView'

const loadingText = Platform.select({
  ios: 'dashboard',
  android: 'dashboard',
});


const paths = [
  {
    radius: 0,
    borderWidth: 60,
    startValue: 0,
    value: 100,
    color: 'white'
  },
  {
    radius: 60,
    startValue: 0,
    value: 25,
    color: 'red'
  },
  {
    radius: 70,
    startValue: 0,
    value: 50,
    color: 'yellow'
  },
  {
    radius: 70,
    startValue: 50,
    value: 40,
    color: 'green'
  },
  {
    radius: 80,
    startValue: 0,
    value: 90,
    color: 'white'
  },
]


const paths2 = [
  {
    radius: 0,
    borderWidth: 60,
    startValue: 0,
    value: 100,
    color: 'white'
  },
  {
    radius: 60,
    startValue: 0,
    value: 80,
    color: 'red'
  },
  {
    radius: 70,
    startValue: 0,
    value: 20,
    color: 'yellow'
  },
  {
    radius: 70,
    startValue: 20,
    value: 40,
    color: 'green'
  },
  {
    radius: 80,
    startValue: 0,
    value: 100,
    color: 'white'
  },
]
export default class DashboardComponent extends Component {

  static options(passProps) {
    return {
      statusBar: {
        backgroundColor: Colors.blue_g,
        style: 'light'
      },
      topBar: {
        drawBehind: true,
        visible: false,
        backButton: {
          visible: false
        }
      }
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      // animatedValue: new Animated.Value(0),
      animated: true,
      paths: paths
    };
  }

  componentDidAppear() {
    // console.log('componentDidAppear')
    // console.log(this.props.componentId)
  }

  touchOnProfileDetailButtonAction = () => {
    // pushProfile(this.props.componentId)
    this.setState({
      animated: true,
      paths: paths2

    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => this.touchOnProfileDetailButtonAction()}>
          <View style={{ height: 40, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Test</Text>
          </View>
        </TouchableWithoutFeedback>
        <SectionList
          stickySectionHeadersEnabled
          renderItem={({ item, index, section }) => {
            if (index === 0 &&
              section.title === 'Title3') {
              return (<CircleChart width={200} height={200} paths={this.state.paths} total={100} animated={this.state.animated} /> )
            }
            return (<Text style={{ height: 50, backgroundColor: Colors.white }} key={index}>{item}</Text>)
          }}
          renderSectionHeader={({ section: { title } }) => {
            let eheight = 50;
            if (title === 'Title1') {
              eheight = 100
            }
            return (
              <Text style={{ fontWeight: 'bold', height: eheight, backgroundColor: Colors.blue_g }}>{title}</Text>
            )
          }}
          sections={[
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
          ]}
          keyExtractor={(item, index) => item + index}
        />
        <LoadingView show={false} />
        <ReachabilityView />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.blue_g,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
