import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";

export default function TabOneScreen() {
  const array = [
    'https://images.unsplash.com/photo-1494253109108-2e30c049369b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8MHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww',
    `https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww`,
    'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfDB8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8MXwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8MXwwfHx8MA%3D%3D'

  ];
  return (
      <ScrollView horizontal contentContainerStyle={{ alignItems: "center", justifyContent:"center",gap: 4 }}>
        {array.map((url, index) => (
          <Image
            key={index}
            style={{
              height: Dimensions.get('screen').height,
              width: Dimensions.get('screen').width,
              borderRadius: 12,
            }}
            fadeDuration={1}
            source={{
              uri: url,
            }}
          />
        ))}
      </ScrollView>

  );
}
