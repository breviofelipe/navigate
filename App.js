import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen";
import AppRotas from './src/routes';
import colors from './colors';

export default function App() {

  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  const onLayoutRootView = useCallback(async () => {
    if (loadedFont) {
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [loadedFont]);

  if (!loadedFont) return null;


  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.safeArea}>
    <StatusBar backgroundColor={colors.background} />
    <AppRotas />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: "row"
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
