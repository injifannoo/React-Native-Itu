import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full items-center justify-center h-full px-4">
          <Image
            source={images.ituLogo}
            className="w-[130px] h-[84px]"
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />
          <View className="relative mt-5">
          <Text className="text-3xl items-center text-white font-bold text-center">
            Discover all Endless Possiblities with {' '}
          <Text className="text-secondary-200">
            ITU
          </Text></Text>
          <Image
          source={images.path}
          className="w-[100px] h-[15px] absolute -bottom-2 -right-5"/>
          
        </View>
        </View>

        

      </ScrollView>

    </SafeAreaView>
  );
}
