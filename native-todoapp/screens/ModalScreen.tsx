import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  const [name, setName] = React.useState<string>("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange,
      mode: "date",
      is24Hour: true,
    });
  };

  const onSubmit = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Date</Text>
        <View style={styles.dateRow}>
          <TextInput
            style={styles.input}
            editable={false}
            value={`${date?.getMonth()}/${date?.getDate()}/${date?.getFullYear()}`}
          />
          <View style={styles.button}>
            <Button title="Change Date" onPress={() => openDatePicker()} />
          </View>
        </View>
      </View>
      <Button title="Submit" onPress={() => onSubmit()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    height: 40,
    padding: 8,
    marginTop: 6,
    borderWidth: 1,
  },
  dateRow: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 12,
  },
});
