import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface AlienAbility {
  name: string;
  description: string;
  type: 'offensive' | 'defensive' | 'utility' | 'movement';
  powerCost: number;
}

interface Alien {
  id: number;
  name: string;
  species: string;
  homeWorld: string;
  abilities: AlienAbility[];
  description: string;
  image: string;
  firstAppearance: string;
  series: 'classic' | 'alien-force' | 'ultimate-alien' | 'omniverse';
  stats: {
    power: number;
    intelligence: number;
    speed: number;
    durability: number;
    versatility: number;
  };
  omnitrixColor: string;
  trivia: string[];
  weaknesses: string[];
  transformations: string[];
}

const ben10Aliens: Alien[] = [
  {
    id: 1,
    name: "Heatblast",
    species: "Pyronite",
    homeWorld: "Pyros",
    abilities: [
      {
        name: "Pirocinese",
        description: "Controle de fogo e calor",
        type: "offensive",
        powerCost: 8
      },
      {
        name: "Voo Propulsivo",
        description: "Voo através de jatos de fogo",
        type: "movement",
        powerCost: 6
      }
    ],
    description: "Ser de plasma vivo composto de rocha metamórfica e magma. Pode gerar e controlar chamas extremamente quentes.",
    image: "fire",
    firstAppearance: "S01E01 - E Então Eram 10",
    series: "classic",
    stats: {
      power: 9,
      intelligence: 6,
      speed: 7,
      durability: 8,
      versatility: 7
    },
    omnitrixColor: "#27AE60",
    trivia: [
      "Tem medo de água",
      "Vive em planetas vulcânicos",
      "Sobrevive no vácuo do espaço"
    ],
    weaknesses: ["Água", "Ambientes frios"],
    transformations: ["Heatblast → Swampfire"]
  },
  {
    id: 2,
    name: "Four Arms",
    species: "Tetramand",
    homeWorld: "Khoros",
    abilities: [
      {
        name: "Super Força",
        description: "Capaz de levantar 100 toneladas",
        type: "offensive",
        powerCost: 9
      },
      {
        name: "Multibraços",
        description: "Quatro braços independentes",
        type: "utility",
        powerCost: 5
      }
    ],
    description: "Guerreiro tetramand com força colossal. Cada braço opera independentemente para combates múltiplos.",
    image: "body",
    firstAppearance: "S01E01 - E Então Eram 10",
    series: "classic",
    stats: {
      power: 10,
      intelligence: 5,
      speed: 6,
      durability: 9,
      versatility: 6
    },
    omnitrixColor: "#2ECC71",
    trivia: [
      "Cultura baseada em honra",
      "Vivem até 400 anos",
      "Sociedade matriarcal"
    ],
    weaknesses: ["Ataques à distância", "Oponentes ágeis"],
    transformations: ["Four Arms → Humungousaur"]
  },
  {
    id: 3,
    name: "XLR8",
    species: "Kineceleran",
    homeWorld: "Kinet",
    abilities: [
      {
        name: "Super Velocidade",
        description: "Pode correr a 888 km/h",
        type: "movement",
        powerCost: 8
      },
      {
        name: "Visão Acelerada",
        description: "Percepção em câmera lenta",
        type: "utility",
        powerCost: 3
      }
    ],
    description: "Velocista alienígena que processa o mundo em câmera lenta. Navega em alta velocidade com precisão.",
    image: "flash",
    firstAppearance: "S01E01 - E Então Eram 10",
    series: "classic",
    stats: {
      power: 6,
      intelligence: 7,
      speed: 10,
      durability: 5,
      versatility: 8
    },
    omnitrixColor: "#1ABC9C",
    trivia: [
      "Vivem apenas 1 ano terrestre",
      "Planeta orbita buraco negro",
      "Amadurecem em semanas"
    ],
    weaknesses: ["Superfícies escorregadias", "Armadilhas"],
    transformations: ["XLR8 → Fasttrack"]
  },
  {
    id: 4,
    name: "Diamondhead",
    species: "Petrosapien",
    homeWorld: "Petropia",
    abilities: [
      {
        name: "Corpo de Cristal",
        description: "Estrutura de diamante orgânico",
        type: "defensive",
        powerCost: 5
      },
      {
        name: "Cristocinese",
        description: "Manipulação de cristais",
        type: "utility",
        powerCost: 7
      }
    ],
    description: "Ser de cristal orgânico com regeneração completa e controle sobre estruturas cristalinas.",
    image: "diamond",
    firstAppearance: "S01E01 - E Então Eram 10",
    series: "classic",
    stats: {
      power: 8,
      intelligence: 7,
      speed: 5,
      durability: 10,
      versatility: 8
    },
    omnitrixColor: "#16A085",
    trivia: [
      "Presente em todas as séries",
      "Quase extinto por Vilgax",
      "Cristais conduzem energia"
    ],
    weaknesses: ["Sônicos", "Vibrações específicas"],
    transformations: ["Diamondhead → Chromastone"]
  },
  {
    id: 5,
    name: "Swampfire",
    species: "Methanosian",
    homeWorld: "Methanos",
    abilities: [
      {
        name: "Controle de Plantas",
        description: "Manipulação de flora",
        type: "utility",
        powerCost: 6
      },
      {
        name: "Pirocinese",
        description: "Controle de chamas verdes",
        type: "offensive",
        powerCost: 7
      }
    ],
    description: "Híbrido com controle de plantas e fogo. Regeneração através de fotossíntese.",
    image: "leaf",
    firstAppearance: "Alien Force S01E01",
    series: "alien-force",
    stats: {
      power: 9,
      intelligence: 7,
      speed: 5,
      durability: 8,
      versatility: 9
    },
    omnitrixColor: "#27AE60",
    trivia: [
      "Substituiu Heatblast",
      "Faz fotossíntese",
      "Atrai insetos"
    ],
    weaknesses: ["Herbicidas", "Temperaturas extremas"],
    transformations: ["Swampfire → Heatblast"]
  },
  {
    id: 6,
    name: "Humungousaur",
    species: "Vaxasaurian",
    homeWorld: "Terradino",
    abilities: [
      {
        name: "Crescimento",
        description: "Cresce de 3.6m para 12m",
        type: "offensive",
        powerCost: 9
      },
      {
        name: "Força Titânica",
        description: "Levanta 900 toneladas",
        type: "offensive",
        powerCost: 10
      }
    ],
    description: "Colosso que aumenta de tamanho e força. Poder máximo no modo gigante.",
    image: "fitness",
    firstAppearance: "Alien Force S01E01",
    series: "alien-force",
    stats: {
      power: 10,
      intelligence: 5,
      speed: 4,
      durability: 9,
      versatility: 6
    },
    omnitrixColor: "#2ECC71",
    trivia: [
      "Levanta 900 toneladas",
      "Inspirado em dinossauros",
      "Espécie pacífica"
    ],
    weaknesses: ["Espaços pequenos", "Ataques precisos"],
    transformations: ["Humungousaur → Four Arms"]
  }
];


const StatBar: React.FC<{ label: string; value: number }> = ({ 
  label, 
  value
}) => (
  <View style={styles.statBarContainer}>
    <Text style={styles.statBarLabel}>{label}</Text>
    <View style={styles.statBarBackground}>
      <View 
        style={[
          styles.statBarFill, 
          { width: `${(value / 10) * 100}%` }
        ]} 
      />
    </View>
    <Text style={styles.statBarValue}>{value}/10</Text>
  </View>
);


const AlienIcon: React.FC<{ type: string; size?: number }> = ({ 
  type, 
  size = 70 
}) => {
  const getIconName = () => {
    switch (type) {
      case 'fire': return 'flame';
      case 'body': return 'accessibility';
      case 'flash': return 'flash';
      case 'diamond': return 'diamond';
      case 'leaf': return 'leaf';
      case 'fitness': return 'barbell';
      default: return 'help';
    }
  };

  return (
    <View style={[styles.alienIconContainer, { width: size, height: size }]}>
      <Ionicons 
        name={getIconName()} 
        size={size * 0.6} 
        color="#27AE60" 
      />
    </View>
  );
};


const AlienCard: React.FC<{ alien: Alien }> = ({ alien }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.alienCard}>
      {/* Header do Card */}
      <View style={styles.cardHeader}>
        <View style={styles.nameSection}>
          <Text style={styles.alienName}>{alien.name}</Text>
          <View style={styles.seriesTag}>
            <Text style={styles.seriesText}>
              {alien.series === 'classic' ? 'Clássico' : 'Alien Force'}
            </Text>
          </View>
        </View>
        
        <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.expandButton}>
          <Ionicons 
            name={expanded ? "chevron-up" : "chevron-down"} 
            size={20} 
            color="#27AE60" 
          />
        </TouchableOpacity>
      </View>

      {/* Informações Básicas */}
      <View style={styles.alienInfo}>
        <AlienIcon type={alien.image} />
        
        <View style={styles.basicInfo}>
          <View style={styles.infoRow}>
            <Ionicons name="planet" size={16} color="#27AE60" />
            <Text style={styles.infoText}>{alien.species}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location" size={16} color="#27AE60" />
            <Text style={styles.infoText}>{alien.homeWorld}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="tv" size={16} color="#27AE60" />
            <Text style={styles.infoText}>{alien.firstAppearance}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.alienDescription}>{alien.description}</Text>

      {expanded && (
        <View style={styles.expandedContent}>
          {/* Estatísticas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Estatísticas</Text>
            <View style={styles.statsGrid}>
              <StatBar label="Força" value={alien.stats.power} />
              <StatBar label="Inteligência" value={alien.stats.intelligence} />
              <StatBar label="Velocidade" value={alien.stats.speed} />
              <StatBar label="Durabilidade" value={alien.stats.durability} />
              <StatBar label="Versatilidade" value={alien.stats.versatility} />
            </View>
          </View>

          {/* Habilidades */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Habilidades</Text>
            {alien.abilities.map((ability, index) => (
              <View key={index} style={styles.abilityItem}>
                <View style={styles.abilityHeader}>
                  <Text style={styles.abilityName}>{ability.name}</Text>
                  <View style={styles.powerCost}>
                    <Text style={styles.powerCostText}>{ability.powerCost}</Text>
                  </View>
                </View>
                <Text style={styles.abilityDescription}>{ability.description}</Text>
              </View>
            ))}
          </View>

          {/* Curiosidades */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Curiosidades</Text>
            {alien.trivia.map((item, index) => (
              <View key={index} style={styles.triviaItem}>
                <Ionicons name="star" size={14} color="#27AE60" />
                <Text style={styles.triviaText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};


const Ben10AlienDatabase: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<'all' | Alien['series']>('all');

  const filteredAliens = selectedSeries === 'all' 
    ? ben10Aliens 
    : ben10Aliens.filter(alien => alien.series === selectedSeries);

  return (
    <View style={styles.container}>
      {/* Header Simples */}
      <View style={styles.header}>
        <View style={styles.titleSection}>
          <Ionicons name="infinite" size={32} color="#27AE60" />
          <View>
            <Text style={styles.mainTitle}>Omnitrix Database</Text>
            <Text style={styles.subtitle}>Catálogo de Aliens</Text>
          </View>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{ben10Aliens.length}</Text>
            <Text style={styles.statLabel}>Aliens</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>6</Text>
            <Text style={styles.statLabel}>Planetas</Text>
          </View>
        </View>
      </View>

      {/* Filtros Simples */}
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterContent}>
            {(['all', 'classic', 'alien-force'] as const).map((series) => (
              <TouchableOpacity
                key={series}
                style={[
                  styles.filterButton,
                  selectedSeries === series && styles.filterButtonActive
                ]}
                onPress={() => setSelectedSeries(series)}
              >
                <Text style={[
                  styles.filterButtonText,
                  selectedSeries === series && styles.filterButtonTextActive
                ]}>
                  {series === 'all' ? 'Todos' :
                   series === 'classic' ? 'Clássico' : 'Alien Force'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Lista de Aliens */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredAliens.map((alien) => (
          <AlienCard key={alien.id} alien={alien} />
        ))}
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Toque em um alien para detalhes</Text>
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fff8',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8F5E8',
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#27AE60',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 10,
    marginTop: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27AE60',
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
  filterContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8F5E8',
  },
  filterContent: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F0F9F0',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E8F5E8',
  },
  filterButtonActive: {
    backgroundColor: '#27AE60',
    borderColor: '#27AE60',
  },
  filterButtonText: {
    color: '#27AE60',
    fontSize: 14,
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f8fff8',
  },
  scrollContent: {
    padding: 15,
  },
  alienCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 15,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#27AE60',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  nameSection: {
    flex: 1,
  },
  alienName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 6,
  },
  seriesTag: {
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  seriesText: {
    fontSize: 12,
    color: '#27AE60',
    fontWeight: '600',
  },
  expandButton: {
    padding: 4,
  },
  alienInfo: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  alienIconContainer: {
    backgroundColor: '#F0F9F0',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E8F5E8',
  },
  basicInfo: {
    flex: 1,
    marginLeft: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoText: {
    color: '#666666',
    marginLeft: 8,
    fontSize: 14,
  },
  alienDescription: {
    color: '#666666',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  expandedContent: {
    marginTop: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27AE60',
    marginBottom: 10,
  },
  statsGrid: {
    gap: 8,
  },
  statBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statBarLabel: {
    width: 100,
    fontSize: 12,
    color: '#666666',
  },
  statBarBackground: {
    flex: 1,
    height: 6,
    backgroundColor: '#E8F5E8',
    borderRadius: 3,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  statBarFill: {
    height: '100%',
    backgroundColor: '#27AE60',
    borderRadius: 3,
  },
  statBarValue: {
    width: 35,
    fontSize: 10,
    color: '#666666',
    textAlign: 'right',
  },
  abilityItem: {
    backgroundColor: '#F8FCF8',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#27AE60',
  },
  abilityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  abilityName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
  },
  powerCost: {
    backgroundColor: '#27AE60',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  powerCostText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  abilityDescription: {
    color: '#666666',
    fontSize: 13,
    lineHeight: 18,
  },
  triviaItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
    padding: 8,
    backgroundColor: '#F0F9F0',
    borderRadius: 6,
  },
  triviaText: {
    color: '#666666',
    fontSize: 13,
    flex: 1,
    marginLeft: 8,
    lineHeight: 18,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
  },
  footerText: {
    color: '#27AE60',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Ben10AlienDatabase;