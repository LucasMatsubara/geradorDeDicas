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
    <LinearGradient colors={['#eaf2fa', '#cbdffa']} style={styles.container}>
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

const stylePage = StyleSheet.create({
  container: { flex: 1 },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 70, 
  },
  headerTitle: {
    fontSize: 32, 
    fontWeight: '900', 
    color: '#202b3d',
  },
  card: {
    backgroundColor: '#f0f0f0',
    width: Dimensions.get('window').width * 0.90, 
    paddingHorizontal: 32,
    paddingTop: 62, 
    paddingBottom: 42,
    borderRadius: 22,
    alignItems: 'center',
    minHeight: 300, 
    justifyContent: 'center',
    shadowColor: '#4785f8', 
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
  iconCircle: {
    width: 92, 
    height: 92,
    borderRadius: 45, 
    backgroundColor: '#fcfae6', 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -45, 
    shadowColor: '#f7d83e', 
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.9,
    shadowRadius: 15,
    elevation: 12, 
  },
  tipText: {
    fontSize: 21, 
    color: '#334155',
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: '700', 
  },
  button: {
    backgroundColor: '#3a7fee',
    width: Dimensions.get('window').width * 0.90, 
    paddingVertical: 20, 
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#3e85f7',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    color: '#f0f0f0',
    fontSize: 19,
    fontWeight: 'bold',
  },
});