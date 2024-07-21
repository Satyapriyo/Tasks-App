import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
export default function App() {
  return (
    <View style={styles.container}>
      {/* todo tasks  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          Todays Task's
        </Text>
        {/* all the tasks */}
        <View style={styles.items}>
          <Task text="text 1" />
          <Task text="text 2" />

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    padding: 80,
    paddingHorizontal: 20,

  }
  ,
  items: {
    marginTop: 30
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  }

});
