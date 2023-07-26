// import { Redirect } from "expo-router";

// export default function Index() {
//     return <Redirect href="/home" />;
// }
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
// import { View , Text , SafeAreaView , ScrollView, StyleSheet} from 'react-native';
// import React , {useState} from 'react';
// import {Stack , useRouter} from 'expo-router';
// import { COLORS, icons, images, SIZES } from "../constants";
// import {
//     Nearbyjobs,
//     Popularjobs,
//     ScreenHeaderBtn,
//     Welcome,
//   } from "../components";
  
// const Home = () => {
//     const router = useRouter();
//     return (
//         <SafeAreaView style={styles.container}>
//             <Stack.Screen
//                 options={{
//                     headerStyle: styles.headerStyle,
//                     headerTitle: "",
//                     headerShadowVisible: false,
//                     headerLeft: ({ onPress }) => (
//                         <ScreenHeaderBtn
//                             iconUrl={icons.menu}
//                             dimensions='60%'

//                         />
//                     ),
//                     headerRight: ({ onPress }) => (
//                         <ScreenHeaderBtn
//                             iconUrl={icons.profile}
//                             dimensions='100%'
//                         />
//                     ),
//                 }}
//             />
//             <ScrollView
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{
//                     paddingBottom: 150,
//                 }}
//             >
//                 <View style={styles.componentsView}>
//                     <Welcome />
//                     <Popularjobs />
//                     <Nearbyjobs />
//                 </View>
//             </ScrollView>

//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: COLORS.lightWhite,
//         paddingTop: 40,
//     },
//     headerStyle: {
//         backgroundColor: COLORS.lightWhite,
//         shadowColor: COLORS.lightGray,
//         elevation: 0,
//     },
//     componentsView: {
//         flex: 1,
//         padding: SIZES.medium,
//     },
// });

// export default Home;