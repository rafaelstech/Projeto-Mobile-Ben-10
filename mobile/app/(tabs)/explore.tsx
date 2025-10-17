import React from 'react';
import { Image } from 'expo-image';
import { Platform, StyleSheet, View, ScrollView } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

// Interfaces TypeScript
interface Alien {
  id: number;
  name: string;
  species: string;
  homeWorld: string;
  abilities: string[];
  description: string;
  image: string;
  firstAppearance: string;
  powerLevel: number;
  intelligence: number;
  speed: number;
  omnitrixColor: string;
  trivia: string;
}

interface Ben10AliensData {
  originalSeries: Alien[];
  alienForce: Alien[];
  ultimateAliens: Alien[];
}

interface StatsBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
}

interface AlienCardProps {
  alien: Alien;
}

interface AlienCategoryProps {
  title: string;
  aliens: Alien[];
  emoji: string;
}

// API de dados dos aliens de Ben 10 - Versão Expandida
const ben10Aliens: Ben10AliensData = {
  originalSeries: [
    {
      id: 1,
      name: "Heatblast",
      species: "Pyronite",
      homeWorld: "Pyros",
      abilities: ["Pirocinese", "Voo propulsivo", "Manipulação de lava", "Resistência extrema ao calor"],
      description: "Um ser de plasma vivo composto de rocha metamórfica e magma. Pode gerar e controlar chamas a 1.000.000°C.",
      image: "https://static.wikia.nocookie.net/ben10/images/7/7c/Heatblast_OS.png",
      firstAppearance: "S01E01 - E Então Eram 10",
      powerLevel: 9,
      intelligence: 6,
      speed: 7,
      omnitrixColor: "#FF6B35",
      trivia: "Heatblast tem medo de água e pode ser extinto por líquidos."
    },
    {
      id: 2,
      name: "Four Arms",
      species: "Tetramand",
      homeWorld: "Khoros",
      abilities: ["Super força", "Quatro braços", "Durabilidade sobre-humana", "Especialista em combate"],
      description: "Um guerreiro tetramand com força suficiente para levantar 100 toneladas. Cada braço pode operar independentemente.",
      image: "https://static.wikia.nocookie.net/ben10/images/4/4a/Four_Arms_OS.png",
      firstAppearance: "S01E01 - E Então Eram 10",
      powerLevel: 10,
      intelligence: 5,
      speed: 6,
      omnitrixColor: "#E74C3C",
      trivia: "Tetramands têm uma cultura baseada em honra e força física."
    },
    {
      id: 3,
      name: "Diamondhead",
      species: "Petrosapien",
      homeWorld: "Petropia",
      abilities: ["Corpo de diamante", "Cristocinese", "Regeneração completa", "Projeção de cristais"],
      description: "Ser vivo composto de cristal orgânico ultra-resistente. Pode criar estruturas de cristal e se regenerar de danos.",
      image: "https://static.wikia.nocookie.net/ben10/images/3/3c/Diamondhead_OS.png",
      firstAppearance: "S01E01 - E Então Eram 10",
      powerLevel: 8,
      intelligence: 7,
      speed: 5,
      omnitrixColor: "#1ABC9C",
      trivia: "Diamondhead é um dos poucos aliens que aparecem em todas as séries de Ben 10."
    },
    {
      id: 4,
      name: "XLR8",
      species: "Kineceleran",
      homeWorld: "Kinet",
      abilities: ["Super velocidade", "Garras retráteis", "Visão temporal lenta", "Aerodinâmica natural"],
      description: "Pode correr a 888 km/h. Sua visão processa informações em câmera lenta, permitindo navegar em alta velocidade.",
      image: "https://static.wikia.nocookie.net/ben10/images/5/5d/XLR8_OS.png",
      firstAppearance: "S01E01 - E Então Eram 10",
      powerLevel: 6,
      intelligence: 7,
      speed: 10,
      omnitrixColor: "#3498DB",
      trivia: "Kinecelerans vivem apenas 1 ano terrestre devido à sua percepção temporal acelerada."
    },
    {
      id: 5,
      name: "Ghostfreak",
      species: "Ectonurite",
      homeWorld: "Anur Phaetos",
      abilities: ["Invisibilidade", "Intangibilidade", "Possessão corporal", "Voo", "Telepatia"],
      description: "Um Ectonurite com consciência própria. Pode atravessar matéria e controlar outros seres.",
      image: "https://static.wikia.nocookie.net/ben10/images/9/9f/Ghostfreak_OS.png",
      firstAppearance: "S01E02 - Washington D.C. em Perigo",
      powerLevel: 8,
      intelligence: 9,
      speed: 8,
      omnitrixColor: "#8E44AD",
      trivia: "Ghostfreak foi o primeiro alien a desenvolver consciência própria dentro do Omnitrix."
    }
  ],
  alienForce: [
    {
      id: 6,
      name: "Swampfire",
      species: "Methanosian",
      homeWorld: "Methanos",
      abilities: ["Controle de plantas", "Pirocinese", "Regeneração", "Manipulação de gases"],
      description: "Combinação de Heatblast e Wildvine. Pode criar explosões de metano e controlar flora.",
      image: "https://static.wikia.nocookie.net/ben10/images/4/47/Swampfire_UA.png",
      firstAppearance: "S01E01 - Ben 10 Returns",
      powerLevel: 9,
      intelligence: 7,
      speed: 5,
      omnitrixColor: "#27AE60",
      trivia: "Swampfire substituiu Heatblast como o alien de fogo principal em Alien Force."
    },
    {
      id: 7,
      name: "Humungousaur",
      species: "Vaxasaurian",
      homeWorld: "Terradino",
      abilities: ["Força sobre-humana", "Crescimento corporal", "Durabilidade extrema", "Cauda poderosa"],
      description: "Pode crescer de 3.6m para 12m de altura. Sua força aumenta proporcionalmente ao tamanho.",
      image: "https://static.wikia.nocookie.net/ben10/images/0/0c/Humungousaur_UA.png",
      firstAppearance: "S01E01 - Ben 10 Returns",
      powerLevel: 10,
      intelligence: 5,
      speed: 4,
      omnitrixColor: "#E67E22",
      trivia: "Humungousaur pode levantar até 900 toneladas em seu tamanho máximo."
    },
    {
      id: 8,
      name: "Big Chill",
      species: "Necrofriggian",
      homeWorld: "Kylmyys",
      abilities: ["Criocinese", "Voo", "Intangibilidade", "Respiração de gelo"],
      description: "Ser de temperatura absoluta que pode congelar qualquer coisa e atravessar matéria sólida.",
      image: "https://static.wikia.nocookie.net/ben10/images/7/7c/Big_Chill_UA.png",
      firstAppearance: "S01E01 - Ben 10 Returns",
      powerLevel: 8,
      intelligence: 7,
      speed: 8,
      omnitrixColor: "#2980B9",
      trivia: "Necrofriggians são hermafroditas e podem botar até 28 ovos de uma vez."
    }
  ],
  ultimateAliens: [
    {
      id: 9,
      name: "Ultimate Humungousaur",
      species: "Vaxasaurian (Evoluído)",
      homeWorld: "Terradino",
      abilities: ["Força máxima", "Projéteis ósseos", "Durabilidade absoluta", "Metralhadora de espinhos"],
      description: "Versão evoluída do Humungousaur após simulação de 1 milhão de anos de guerra. Desenvolveu projéteis ósseos.",
      image: "https://static.wikia.nocookie.net/ben10/images/7/7e/Ultimate_Humungousaur_UA.png",
      firstAppearance: "S02E12 - The Ultimate Sacrifice",
      powerLevel: 12,
      intelligence: 6,
      speed: 5,
      omnitrixColor: "#C0392B",
      trivia: "O Modo Ultimate foi criado pelo Omnitrix simulando condições de guerra extrema."
    }
  ]
};

// Componente de Estatísticas
const StatsBar: React.FC<StatsBarProps> = ({ 
  label, 
  value, 
  max = 10, 
  color = "#3498DB" 
}) => (
  <View style={styles.statContainer}>
    <ThemedText style={styles.statLabel}>{label}</ThemedText>
    <View style={styles.statBarBackground}>
      <View 
        style={[
          styles.statBarFill, 
          { 
            width: `${(value / max) * 100}%`,
            backgroundColor: color
          }
        ]} 
      />
    </View>
    <ThemedText style={styles.statValue}>{value}/{max}</ThemedText>
  </View>
);

// Componente para exibir cada alien
<<<<<<< HEAD
const AlienCard = ({ alien }) => {
  return (
    <ThemedView style={styles.alienCard}>
      <ThemedText type="title" style={styles.alienName}>
        {alien.name}
=======
const AlienCard: React.FC<AlienCardProps> = ({ alien }) => (
  <ThemedView style={styles.alienCard}>
    <ThemedText type="title" style={styles.alienName}>
      {alien.name}
    </ThemedText>
    
    <Image
      source={{ uri: alien.image }}
      style={styles.alienImage}
      contentFit="contain"
      transition={1000}
    />
    
    <View style={styles.infoGrid}>
      <View style={styles.infoItem}>
        <ThemedText type="defaultSemiBold">Espécie:</ThemedText>
        <ThemedText style={styles.infoText}>{alien.species}</ThemedText>
      </View>
      <View style={styles.infoItem}>
        <ThemedText type="defaultSemiBold">Planeta:</ThemedText>
        <ThemedText style={styles.infoText}>{alien.homeWorld}</ThemedText>
      </View>
    </View>

    <ThemedText style={styles.alienDescription}>
      {alien.description}
    </ThemedText>

    <ThemedView style={styles.statsSection}>
      <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
        Estatísticas:
>>>>>>> e0da53db533b8bb3fffcb04f0cd6eba2e07fb368
      </ThemedText>

      <Image
        source={{ uri: alien.image }}
        style={styles.alienImage}
        contentFit="contain"
        transition={1000} />

      <View style={styles.infoGrid}>
        <View style={styles.infoItem}>
          <ThemedText type="defaultSemiBold">Espécie:</ThemedText>
          <ThemedText style={styles.infoText}>{alien.species}</ThemedText>
        </View>
        <View style={styles.infoItem}>
          <ThemedText type="defaultSemiBold">Planeta:</ThemedText>
          <ThemedText style={styles.infoText}>{alien.homeWorld}</ThemedText>
        </View>
      </View>

      <ThemedText style={styles.alienDescription}>
        {alien.description}
      </ThemedText>

      <ThemedView style={styles.statsSection}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          Estatísticas:
        </ThemedText>
        <StatsBar label="Força" value={alien.powerLevel} color="#E74C3C" />
        <StatsBar label="Inteligência" value={alien.intelligence} color="#F39C12" />
        <StatsBar label="Velocidade" value={alien.speed} color="#3498DB" />
      </ThemedView>

      <ThemedView style={styles.abilitiesSection}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          Habilidades Principais:
        </ThemedText>
        {alien.abilities.map((ability, index) => (
          <View key={index} style={styles.abilityItem}>
            <View style={[styles.abilityIcon, { backgroundColor: alien.omnitrixColor }]} />
            <ThemedText style={styles.abilityText}>{ability}</ThemedText>
          </View>
        ))}
      </ThemedView>

      <ThemedView style={styles.triviaBox}>
        <ThemedText type="defaultSemiBold" style={styles.triviaTitle}>
          🎯 Curiosidade:
        </ThemedText>
        <ThemedText style={styles.triviaText}>{alien.trivia}</ThemedText>
      </ThemedView>

      <ThemedText style={styles.firstAppearance}>
        📺 Primeira aparição: {alien.firstAppearance}
      </ThemedText>
    </ThemedView>
  );
};

// Componente de Categoria
const AlienCategory: React.FC<AlienCategoryProps> = ({ title, aliens, emoji }) => (
  <Collapsible title={`${emoji} ${title}`}>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.horizontalScroll}
    >
      {aliens.map((alien) => (
        <View key={alien.id} style={styles.horizontalCard}>
          <AlienCard alien={alien} />
        </View>
      ))}
    </ScrollView>
  </Collapsible>
);

const TabTwoScreen: React.FC = () => {
  const totalAliens = ben10Aliens.originalSeries.length + 
                     ben10Aliens.alienForce.length + 
                     ben10Aliens.ultimateAliens.length;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1a1a2e', dark: '#0f3460' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#00D4FF"
          name="atom"
          style={styles.headerImage}
        />
      }>
      
      <ThemedView style={styles.heroSection}>
        <ThemedText
          type="title"
          style={styles.mainTitle}>
          🚀 Omnitrix Database
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Explore todos os aliens do universo Ben 10
        </ThemedText>
        
        <ThemedView style={styles.omnitrixInfo}>
          <ThemedText style={styles.omnitrixText}>
            📊 Total de Aliens: {totalAliens}
          </ThemedText>
          <ThemedText style={styles.omnitrixText}>
            🌍 Planetas Representados: 8
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <AlienCategory 
        title="Série Original" 
        aliens={ben10Aliens.originalSeries} 
        emoji="🎬"
      />

      <AlienCategory 
        title="Alien Force" 
        aliens={ben10Aliens.alienForce} 
        emoji="⚡"
      />

      <AlienCategory 
        title="Ultimate Aliens" 
        aliens={ben10Aliens.ultimateAliens} 
        emoji="💎"
      />

      <Collapsible title="📚 Sobre o Omnitrix">
        <ThemedView style={styles.infoBox}>
          <ThemedText style={styles.infoText}>
            O Omnitrix é um dispositivo galáctico criado por Azmuth, o ser mais inteligente de 3 galáxias. 
            Ele contém o DNA de mais de 1.000.000 espécies alienígenas.
          </ThemedText>
          <ThemedText style={styles.featureList}>
            • Funciona como uma arma de paz universal{'\n'}
            • Possui modo de segurança integrado{'\n'}
            • Recalibração automática{'\n'}
            • Sincronização com o portador
          </ThemedText>
          <ExternalLink href="https://ben10.fandom.com/wiki/Omnitrix">
            <ThemedText type="link">🔍 Explorar Wiki Oficial</ThemedText>
          </ExternalLink>
        </ThemedView>
      </Collapsible>

      <Collapsible title="🌌 Universo Expandido">
        <ThemedView style={styles.infoBox}>
          <ThemedText style={styles.infoText}>
            Ben 10 expandiu-se para múltiplas séries, filmes e videogames, criando um dos universos mais ricos da Cartoon Network.
          </ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.seriesList}>
            Série Original → Alien Force → Ultimate Alien → Omniverse → Reboot
          </ThemedText>
          <ExternalLink href="https://ben10.fandom.com/wiki/Ben_10_Wiki">
            <ThemedText type="link">📖 Acessar Database Completa</ThemedText>
          </ExternalLink>
        </ThemedView>
      </Collapsible>

    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: '#00D4FF',
    bottom: -90,
    left: -35,
    position: 'absolute',
    opacity: 0.8,
  },
  heroSection: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 8,
    color: '#00D4FF',
    fontFamily: Fonts.rounded,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.9,
    marginBottom: 15,
  },
  omnitrixInfo: {
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    padding: 15,
    borderRadius: 12,
    width: '100%',
  },
  omnitrixText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5,
  },
  alienCard: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(0, 212, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    width: 350,
  },
  alienName: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
    color: '#00D4FF',
    fontWeight: 'bold',
  },
  alienImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 15,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  infoItem: {
    flex: 1,
  },
  infoText: {
    fontSize: 14,
    opacity: 0.9,
  },
  alienDescription: {
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 20,
    textAlign: 'justify',
  },
  statsSection: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#00D4FF',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statLabel: {
    width: 100,
    fontSize: 12,
  },
  statBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  statBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  statValue: {
    width: 30,
    fontSize: 10,
    textAlign: 'right',
  },
  abilitiesSection: {
    marginBottom: 15,
  },
  abilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
  },
  abilityIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  abilityText: {
    flex: 1,
    fontSize: 13,
  },
  triviaBox: {
    backgroundColor: 'rgba(52, 152, 219, 0.1)',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#3498DB',
  },
  triviaTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  triviaText: {
    fontSize: 12,
    fontStyle: 'italic',
    lineHeight: 16,
  },
  firstAppearance: {
    fontSize: 11,
    opacity: 0.7,
    textAlign: 'center',
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
  horizontalCard: {
    marginRight: 15,
  },
  infoBox: {
    padding: 15,
  },
  featureList: {
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 10,
  },
  seriesList: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10,
    opacity: 0.8,
  },
});

export default TabTwoScreen;