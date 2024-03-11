import { Image, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const array = [
    'https://static.vecteezy.com/system/resources/previews/035/012/886/large_2x/ai-generated-4k-colorful-leaf-amoled-wallpaper-for-mobile-photo.jpg',
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPuc0yKv6LlyDeZkUtK5hJ0vDaGAb-QVJcpP2rPM_fPQTiQ9gWBnZlBSbwXxhaOdnngQ&usqp=CAU`,
    'https://pics.craiyon.com/2023-06-03/a07bce52e1b64e869dd1ca3e1ea0144e.webp',
    'https://img.freepik.com/premium-photo/green-amoled-wallpaper-background-ai-generated_206846-4735.jpg'
  ];
  return (
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {array.map((url, index) => (
          <Image
            key={index}
            style={{
              height: 300,
              width: 400,
              margin: 20,
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

