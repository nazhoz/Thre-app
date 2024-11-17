import { useOAuth } from "@clerk/clerk-expo";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

export default function Index() {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_facebook" });
  const { startOAuthFlow: startGoogle0AuthFlow } = useOAuth({
    strategy: "oauth_google",
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.loginImage}
        source={require("@/assets/images/login.png")}
      />
      <ScrollView>
      <Text style={styles.title}>How would you like to use this app ?</Text>
      <TouchableOpacity>
        <Text>Continue with facebook</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: "center",
    backgroundColor: "white"
  },
  loginImage: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  title:{
    fontFamily: 'DMSans_700Bold',
    fontSize: 17,
  }
});
