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
          style={styles.headerImage}
        />
      }>

      {/* BEN 10 CLÁSSICO */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ben 10 Clássico</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Image
          source={require('@/assets/images/Ben 10 classico.jpg')}
          style={styles.contentImage}
        />
        <ThemedText>
          Ben Tennyson, um garoto de 10 anos, encontra o Omnitrix — um relógio alienígena
          que lhe permite se transformar em dez espécies diferentes. Ao lado de sua prima
          Gwen e do avô Max, ele enfrenta vilões como Vilgax, enquanto aprende sobre
          responsabilidade e heroísmo durante as férias de verão.
        </ThemedText>
      </ThemedView>

      {/* FORÇA ALIENÍGENA */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ben 10: Força Alienígena</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Image
          source={require('@/assets/images/Ben 10 alien force.jpg')}
          style={styles.contentImage}
        />
        <ThemedText>
          Cinco anos após os eventos da série original, Ben agora tem 15 anos e precisa
          usar novamente o Omnitrix para combater ameaças mais perigosas. Com novos
          aliados e versões evoluídas de seus alienígenas, ele enfrenta a invasão dos
          Highbreed e descobre novos segredos sobre o Omnitrix.
        </ThemedText>
      </ThemedView>

      {/* SUPREMACIA ALIENÍGENA */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ben 10: Supremacia Alienígena</ThemedText>
      </ThemedView>
      <Image
          source={require('@/assets/images/ben 10 ultime alien 2.jpg')}
          style={styles.headerImage}
        />

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Ben ganha um novo dispositivo — o Ultimatrix — que permite transformar seus
          alienígenas em versões supremas. Nesta fase, ele se torna um herói mais maduro,
          enfrentando vilões poderosos como Aggregor e lidando com a responsabilidade de
          ser uma figura pública.
        </ThemedText>
      </ThemedView>

      {/* OMNIVERSE */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ben 10: Omniverse</ThemedText>
      </ThemedView>
      <Image
          source={require('@/assets/images/ben 10 omniverse 2.jpg')}
          style={styles.headerImage}
        />

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Com um visual renovado e um novo parceiro, Rook Blonko, Ben continua suas
          aventuras enfrentando ameaças interdimensionais. A série mistura humor, ação e
          viagens no tempo, mostrando versões mais jovens e adultas do herói.
        </ThemedText>
      </ThemedView>

      {/* REBOOT */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ben 10 (Reboot 2016)</ThemedText>
      </ThemedView>
      <Image
          source={require('@/assets/images/ben 10 reboot.png')}
          style={styles.headerImage}
        />

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          O reboot traz Ben de volta aos 10 anos, com um estilo mais leve e voltado para o
          público infantil. Embora mais simples, mantém a essência do garoto que usa o
          Omnitrix para salvar o mundo, equilibrando humor e ação em curtos episódios.
        </ThemedText>
      </ThemedView>

      {/* ALIENÍGENAS ICÔNICOS */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        
        <ThemedText>
        </ThemedText>
      </ThemedView>

      {/* VILÕES MEMORÁVEIS */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          
        </ThemedText>
      </ThemedView>

      {/* OMNI-TRANSFORMAÇÕES */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          
        </ThemedText>
      </ThemedView>

      {/* BOTÕES E INTERAÇÕES */}
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle"></ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title="Favoritar"
              icon="star"
              onPress={() => alert('Adicionado aos favoritos!')}
            />
            <Link.MenuAction
              title="Compartilhar"
              icon="square.and.arrow.up"
              onPress={() => alert('Link compartilhado!')}
            />
            <Link.Menu title="Mais opções" icon="ellipsis">
              <Link.MenuAction
                title="Excluir"
                icon="trash"
                destructive
                onPress={() => alert('Item excluído!')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  stepContainer: {
    gap: 16,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  headerImage: {
    height: 200,
    width: '100%',
  },
  contentImage: {
    height: 200,
    width: '100%',
    borderRadius: 12,
  },
});   