import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const tips: string[] = [
  "Respire fundo e comece o dia com calma. Seu ritmo é importante.",
  "Pequenas pausas ajudam sua mente a se manter leve e produtiva.",
  "Você não precisa fazer tudo hoje. Priorize o que importa.",
  "Respeite seus limites e avance no seu tempo. Consistência vale mais que pressa.",
  "Comece com o que você consegue agora — o progresso vem passo a passo.",
  "Seja gentil consigo mesmo — cada pequeno avanço já é uma conquista importante."
];

export default function HomeScreen() {
  const [Tip, setTip] = useState<string>('');

  const generateTip = (): void => {
    const index = Math.floor(Math.random() * tips.length);
    setTip(tips[index]);
  };

  useEffect(() => {
    generateTip();
  }, []);

  return (
    <LinearGradient colors={['#e6f0fa', '#d0e3fc']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.headerTitle}>Gerador de Dicas</Text>

        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="lightbulb-outline" size={50} color="#eab308" />
          </View>
          
          <Text style={styles.tipText}>{currentTip}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={generateTip} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Nova Dica</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}