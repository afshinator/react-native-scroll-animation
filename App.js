import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopNavigation from "./TopNavigation";
import DummyText from './DummyText';
import {BANNER_H} from './constants';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <TopNavigation title="Home" />
        <ScrollView
          onScroll={(e) => console.log(e.nativeEvent.contentOffset.y)}
          scrollEventThrottle={16}
        >
          <View style={styles.bannerContainer}>
            <Image style={styles.banner} source={require("./banner.jpg")} />
          </View>
          <DummyText />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner:  {
    height: BANNER_H,
    width: '200%',
  },
  // banner: scrollA => ({
  //   height: BANNER_H,
  //   width: '200%',
  //   transform: [
  //     {
  //       translateY: scrollA.interpolate({
  //         inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
  //         outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
  //       }),
  //     },
  //     {
  //       scale: scrollA.interpolate({
  //         inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
  //         outputRange: [2, 1, 0.5, 0.5],
  //       }),
  //     },
  //   ],
  // }),
});
