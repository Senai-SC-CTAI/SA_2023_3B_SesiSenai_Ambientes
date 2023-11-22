import React from 'react';
import imageToAdd from "../../../assets/teachings.png";
import { View, StyleSheet, Button, TextInput, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Salas() {
    const navigation = useNavigation();
    const schedule = [
        { time: '7:40', room: 'D12', kit: 'Lab', beforeBreak: '3B Lucas', afterBreak: '---' },
        { time: '10:30', room: 'E12', kit: 'Sinergia', beforeBreak: '3A Luciano', afterBreak: '----' },
      ];
    return (
        <View style={styles.container}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.cell}>SALAS</th>
              <th style={styles.cell}>KIT</th>
              <th style={styles.cell}>Antes do intervalo</th>
              <th style={styles.cell}>Depois do intervalo</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                <td style={styles.cell}>{item.room}</td>
                <td style={styles.cell}>{item.kit}</td>
                <td style={styles.cell}>{item.beforeBreak}</td>
                <td style={styles.cell}>{item.afterBreak}</td>
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