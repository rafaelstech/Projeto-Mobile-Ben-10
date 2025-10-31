import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView, Dimensions } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const { width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/nigg.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Os Omnitrix</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Omnitrix Original</ThemedText>
        <Image
          source={require('@/assets/images/ominitrix classico.webp')}
          style={styles.omnitrixImage}
          contentFit="contain"
        />
        <ThemedText style={styles.textContent}>
          • Primeiro modelo criado por Azmuth{'\n'}
          • 10 aliens inicialmente{'\n'}
          • Ativação manual girando o mostrador{'\n'}
          • Corpo branco com verde neon{'\n'}
          • Propenso a mau funcionamento
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Omnitrix Recalibrado</ThemedText>
        <Image
          source={require('@/assets/images/ominitrix recalibrado.webp')}
          style={styles.omnitrixImage}
          contentFit="contain"
        />
        <ThemedText style={styles.textContent}>
          • Após autorreparação no espaço{'\n'}
          • Design mais orgânico e biológico{'\n'}
          • Ativação por toque na tela{'\n'}
          • Master Control desbloqueado{'\n'}
          • Nova paleta de cores preta e verde
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ultimatrix</ThemedText>
        <Image
          source={require('@/assets/images/ultimatrix.webp')}
          style={styles.omnitrixImage}
          contentFit="contain"
        />
        <ThemedText style={styles.textContent}>
          • Criado por Albedo{'\n'}
          • Função Ultimate (evolução dos aliens){'\n'}
          • Design mais agressivo{'\n'}
          • Cor preta e vermelha{'\n'}
          • Menos estável que o Omnitrix original
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Omnitrix Completo</ThemedText>
        <Image
          source={require('@/assets/images/omni.webp')}
          style={styles.omnitrixImage}
          contentFit="contain"
        />
        <ThemedText style={styles.textContent}>
          • Versão final e definitiva{'\n'}
          • Mais de 1 milhão de amostras de DNA{'\n'}
          • Design inspirado no relógio de bolso{'\n'}
          • Funcionalidades avançadas{'\n'}
          • Cor verde e branca clássica
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Omnitrix de Ben 10.000</ThemedText>
        <Image
          source={require('@/assets/images/omnitrix 10000.webp')}
          style={styles.omnitrixImage}
          contentFit="contain"
        />
        <ThemedText style={styles.textContent}>
          • Fundido com o pulso de Ben{'\n'}
          • Ativação por comando de voz{'\n'}
          • Transformação instantânea{'\n'}
          • Controle total sobre as transformações{'\n'}
          • Design biométrico avançado
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Omnitrix de Omniverso</ThemedText>
        <Image
          source={require('@/assets/images/finaltrix.webp')}
          style={styles.omnitrixImage}
          contentFit="contain"
        />
        <ThemedText style={styles.textContent}>
          • Nova aparência mais moderna{'\n'}
          • Interface holográfica{'\n'}
          • Funcionalidade de escaneamento{'\n'}
          • Design mais compacto{'\n'}
          • Cores verde e preta
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Características Comuns</ThemedText>
        <ThemedText style={styles.textContent}>
          • Proteção contra possessão{'\n'}
          • Tradução universal{'\n'}
          • Detecção de ameaças{'\n'}
          • Failsafe de proteção ao usuário{'\n'}
          • Banco de DNA alienígena
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerImage: {
    height: 250,
    width: '100%',
  },
  omnitrixImage: {
    height: 180,
    width: screenWidth - 32, 
    alignSelf: 'center',
    marginBottom: 8,
  },
  textContent: {
    lineHeight: 20,
  },
});
