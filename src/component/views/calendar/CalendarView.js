import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, FlatList, Dimensions, Button } from 'react-native';

import MonthView from './MonthView'

let isLoading = false
const ScreenWidth = Dimensions.get('window').width
const widthLabel = ScreenWidth / 7
const MonthNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
// const MonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DayNames = ['日', '月', '火', '水', '木', '金', '土']
const now = new Date();
const currentMonthIndex = new Date().getMonth()
const currentYear = now.getFullYear()

export default class CalendarView extends Component {

  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.dataCalendar = []
    this.state = {
      reloadFlatList: false,
      isFetching: false,
      refreshing: false
    }

  }

  componentDidMount() {
    this.initMonthData(currentYear)
  }

  initMonthData = async (year) => {
    let temp = []
    let offset = 0;
    if (this.dataCalendar.length > 0) {
      const lastMonth = this.dataCalendar[this.dataCalendar.length - 1];
      offset = lastMonth.offset + lastMonth.height;
    }

    for (var month = 0; month < 12; month++) {
      let monthData = { id: `${year}_${month}` }

      // date : year/month/1 ex: 2018/10/01
      const numberOfDay = new Date(year, month + 1, 0).getDate()
      const firstDayIndex = new Date(year, month, 1).getDay()

      const info = { firstDayIndex, numberOfDay, year: year, month: month }
      const height = this.getRowHeight(info)
      monthData = { ...monthData, info, height, offset }
      offset = offset + height
      temp.push(monthData)
    }

    this.dataCalendar = this.dataCalendar.concat(temp)
    // console.log(temp)
    // reload flat list
    this.reloadFlatList()
  }

  getRowHeight = (monthData) => {
    const numberOfWeek = Math.ceil((monthData.numberOfDay + monthData.firstDayIndex) / 7)
    const rowHeight = numberOfWeek * 100 + 30

    return rowHeight
  }


  reloadFlatList = () => {
    this.setState({
      reloadFlatList: !this.state.reloadFlatList
    }, () => {
      isLoading = false
    })
  }

  pullRefresh = async () => {

    this.setState({
      refreshing: true
    }, () => {
      this.loadPrev()
    })


  }

  loadPrev = async () => {

    console.log('loadPrev');
    // isLoading = true

    let temp = []
    const lastMonth = this.dataCalendar[0];

    let year = lastMonth.info.year - 1
    let offset = lastMonth.offset

    for (var month = 11; month >= 0; month--) {
      let monthData = { id: `${year}_${month}` }

      // date : year/month/1 ex: 2018/10/01
      const numberOfDay = new Date(year, month + 1, 0).getDate()
      const firstDayIndex = new Date(year, month, 1).getDay()

      const info = { firstDayIndex, numberOfDay, year: year, month: month }
      const height = this.getRowHeight(info)
      offset = offset - height
      monthData = { ...monthData, info, height, offset }

      temp.push(monthData)
    }
    temp.reverse()
    this.dataCalendar = temp.concat(this.dataCalendar)
    this.setState({
      refreshing: false
    }, () => {
      // this.flastList.scrollToOffset({y: Math.abs(this.dataCalendar[0].offset), animated: false});
      // this.flastList.scrollToIndex({ animated: true, index: 12 })
    })
  }

  loadMore = async () => {
    console.log('loadMore ', this.dataCalendar.length)
    let year = this.dataCalendar[this.dataCalendar.length - 1].info.year
    this.initMonthData(year + 1)

    // reload flat list
    this.reloadFlatList()

  }

  _viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true
  };

  onViewableItemsChangedBound = (items) => {
    // console.log('onViewableItemsChangedBound')
    // console.log(items)
    // const first = this.data[0].i

    // const index = items.viewableItems[0].index
    // if (items.viewableItems[0] &&
    //   (items.viewableItems[0].index < 5) &&
    //   isLoading === false) {
    //   this.loadPrev()
    //   console.log(index)
    //   // this.flastList.contentOffset = {x:0, y: 800}
    //   // if (index) {
    //   //   this.flastList.scrollToIndex(index + 2)
    //   // }
    //   //
    // }
  }

  scrollEnd = (event) => {

    // const count = this.data.length
    // // console.log('loadMore ', this.state.data)
    // let temp = []
    // for (var i = count; i < (count + 3); i++) {
    //   const pbj = { i }
    //   temp.push(pbj)
    // }



    // // this.setState({
    // this.data = this.data.concat(temp)
    // this.setState({
    //   refresh: !this.state.refresh
    // })
    // // })
    // this.data = this.data.slice(0,10)
    // this.setState({
    //   refresh: !this.state.refresh
    // })
  }


  getItemLayout = (data, index) => {
    if (index < 0) {
      return { length: 0, offset: 0, index }
    }

    const rowHeight = data[index].height
    const offset = data[index].offset
    const offset0 = data[0].offset
    return { length: rowHeight, offset: offset + Math.abs(offset0), index }
  }

  renderItem = ({ item }) => {

    const { year, month, firstDayIndex } = item.info

    const marginLeft = firstDayIndex * widthLabel

    return (<View key={item.id} style={{ flex: 1, height: item.height, backgroundColor: 'white', justifyContent: 'center' }}>
      <View style={{ height: 30, justifyContent: 'center' }}>
        <Text style={{ marginLeft: marginLeft, width: widthLabel, fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: 'black' }}>{MonthNames[month]}月</Text>
      </View>
      <MonthView key={item.id} monthData={item} />
    </View>)
  }

  render() {
    const dataCalendar = this.dataCalendar ? this.dataCalendar : []

    return (
      <View style={styles.container}>
       {/* <Button
          title='Signout'
          onPress={() => {
            this.flastList.scrollToOffset({y: Math.abs(this.dataCalendar[0].offset), animated: true});
          }}
        /> */}
        <View style={{ height: 40, backgroundColor: '#F5FCFF', flexDirection: 'row', alignItems: 'center', }}>
          {

            DayNames.map((value, index) => {
              let opacity = null
              if (index === 0 ||
                index === 6) {
                opacity = 0.5
              }
              return (<Text key={`${value}_${index}`} style={{ flex: 1, textAlign: 'center', opacity: opacity }}>{value}</Text>)
            })
          }
        </View>
        <FlatList style={{ backgroundColor: 'white' }}
          extraData={this.state.reloadFlatList}
          ref={(flastList) => this.flastList = flastList}
          data={dataCalendar}
          // pageSize={1}
          initialScrollIndex={currentMonthIndex}
          getItemLayout={this.getItemLayout}
          initialNumToRender={3}
          maxToRenderPerBatch={6}
          renderItem={this.renderItem.bind(this)}
          refreshing={this.state.refreshing}
          onRefresh={this.pullRefresh}
          onContentSizeChange={(contentWidth, contentHeight) => {
            console.log(contentHeight)
            // this.flastList.scrollToIndex({animated:true, index:12})
            // this.flastList.scrollToOffset({y: Math.abs(this.dataCalendar[0].offset), animated: true});
          }}
          // onScroll={this.handleScroll}
          onEndReached={this.loadMore}
          // updateCellsBatchingPeriod={40}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={100}
          // onViewableItemsChanged={this.onViewableItemsChangedBound}
          // viewabilityConfig={this._viewabilityConfig}
          // removeClippedSubviews={true}
          keyExtractor={(item) => `${item.id}`}

        // onScrollAnimationEnd={() => { console.log('onScrollAnimationEnd') }}
        // onScrollEndDrag={this.scrollEnd}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
