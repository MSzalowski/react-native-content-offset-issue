import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Animated,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const translation = useRef(Animated.Value(0));
  const [items, setItems] = useState(20);

  useEffect(() => {
    Animated.timing(translation.current, {
      useNativeDriver: true,
      toValue: 50,
      duration: 200,
    });
  }, [items.length]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View
        style={{ transform: [{ translateY: translation.current }] }}
      >
        <ScrollView style={styles.scrollView}>
          {[...Array(items).keys()].map((item) => (
            <View
              key={`item-${item}`}
              style={{
                alignItems: "center",
                height: 50,
                marginBottom: 16,
                backgroundColor: `rgb(${item * 9}, ${item * 7}, ${item * 5})`,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 40,
                  fontWeight: "500",
                  lineHeight: 50,
                }}
              >{`Item: ${item}`}</Text>
            </View>
          ))}
        </ScrollView>
      </Animated.View>
      <View style={[{ backgroundColor: "blue" }, { bottom: 0 }]}>
        <Button
          title="Set items"
          onPress={() => setItems(items === 20 ? 5 : 20)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
