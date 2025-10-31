import { StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Tab</Text>
      <Text style={styles.text}>This is a placeholder screen for learning navigation and components.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  text: { fontSize:18, textAlign:'center', marginBottom:10 }
});