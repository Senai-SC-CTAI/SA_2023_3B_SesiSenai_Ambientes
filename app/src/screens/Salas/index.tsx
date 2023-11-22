import React from 'react';
import imageToAdd from "../../../assets/teachings.png";
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Salas() {
    const navigation = useNavigation();
    const schedule = [
        { time: '7:40', room: 'Sala 1', class: 'Turma A' },
        { time: '10:30', room: 'Sala 2', class: 'Turma B' },
      ];
    return (
        <View style={styles.container}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.cell}>Horário</th>
              <th style={styles.cell}>Sala</th>
              <th style={styles.cell}>Turma</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                <td style={styles.cell}>{item.time}</td>
                <td style={styles.cell}>{item.room}</td>
                <td style={styles.cell}>{item.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </View>
    );
  };
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
      },
      table: {
        borderCollapse: 'collapse',
        width: '90%',
      },
      cell: {
        border: '1px solid black',
        width: '100px',
        height: '100px',
        textAlign: 'center',
      },
})