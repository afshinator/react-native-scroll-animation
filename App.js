import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopNavigation from "./TopNavigation";
import DummyText from "./DummyText";
import { BANNER_H } from "./constants";


// based on https://www.youtube.com/watch?v=T9LWjpHCW_E&t=3s


export default function App() {
  const scrollA = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaProvider>
      <View>
        <TopNavigation title="Home" scrollA={scrollA} />
        <Animated.ScrollView
          // onScroll={(e) => console.log(e.nativeEvent.contentOffset.y)}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollA } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          <View style={styles.bannerContainer}>
            <Animated.Image
              style={styles.banner(scrollA)}
              source={require("./banner.jpg")}
            />
          </View>
          <DummyText />
        </Animated.ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: "center",
    overflow: "hidden",
  },
  banner: (scrollA) => ({
    height: BANNER_H,
    width: "200%",
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};
