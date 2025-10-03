import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7FFF00', dark: '#7FFF00' }}
      headerImage={
        <Image
          source={require('@/assets/images/Ben 10 classico.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ben 10 Classico</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: '',
            })}
          </ThemedText>{' '}
        
        </ThemedText>Ben Tennyson, um garoto de 10 anos, que encontra um dispositivo alienígena em forma de relógio, o Omnitrix, durante suas férias de verão com seu avô Max e sua prima Gwen. Com o Omnitrix, Ben ganha a habilidade de se transformar em dez alienígenas diferentes.
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Personagens Secundários Principais
Os personagens ao redor do Ben são fundamentais para o coração e o humor da série.

1. Gwen Tennyson

Papel: Prima e rival inicial do Ben, que rapidemente se torna sua parceira mais confiável.

Características: No início, ela é a típica "certa" e estudiosa, sempre brigando com Ben. No entanto, ao longo da série, descobre que tem aptidão para a magia e se torna uma combatente formidável por conta própria, usando feitiços e encantamentos. Sua evolução de uma menina chata para uma heroína poderosa é um dos grandes arcos da série.

2. Max Tennyson

Papel: O avô de Ben e Gwen.

Características: Aparentemente um avô tranquilo e fã de comida, Max esconde um passado secreto. Ele era um agente de elite de uma organização chamada Pequenos Patos (Plumbers em inglês), que lidava com casos extraterrestres. Seu conhecimento vasto sobre aliens, suas conexões e suas habilidades de sobrevivência são cruciais para guiar e proteger os netos. Ele é a âncora moral e estratégica do grupo.

3. Kevin Levin

Papel: Um dos vilões mais memoráveis da série, que depois se torna um aliado complexo e um dos personagens mais populares do universo.

Características: Introduzido como um delinquente que pode absorver a matéria de qualquer coisa que tocar (inicialmente apenas materiais, mas depois incluindo energia). Ele começa como um rival ameaçador que copia os poderes dos aliens do Ben, mas após um incidente que o deixa mutado e preso em uma forma alienígena, ele é "curado" e, mais tarde, retorna como um anti-herói que se junta à equipe.

</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {``}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          {``}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
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
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 280,
    width: 200,
    bottom: 0,
    left: 100,
    position: 'absolute',
  },
});