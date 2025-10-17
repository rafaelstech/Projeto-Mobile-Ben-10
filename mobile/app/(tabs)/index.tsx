import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulação de login - você pode substituir por sua lógica de autenticação
    if (email && password) {
      setIsLoggedIn(true);
      alert('Login realizado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/ominitrixxx.png')}
          style={styles.reactLogo}
        />
      }>
      
      {/* Área de Login */}
      <ThemedView style={styles.loginContainer}>
        <ThemedText type="title" style={styles.loginTitle}>
          {isLoggedIn ? 'Bem-vindo de volta!' : 'Login'}
        </ThemedText>

        {!isLoggedIn ? (
          <>
            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                E-mail
              </ThemedText>
              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </ThemedView>

            <ThemedView style={styles.inputContainer}>
              <ThemedText type="defaultSemiBold" style={styles.label}>
                Senha
              </ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Sua senha"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </ThemedView>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <ThemedText type="defaultSemiBold" style={styles.loginButtonText}>
                Entrar
              </ThemedText>
            </TouchableOpacity>

            <ThemedView style={styles.registerContainer}>
              <ThemedText style={styles.registerText}>
                Não tem uma conta?{' '}
              </ThemedText>
              <TouchableOpacity>
                <ThemedText type="defaultSemiBold" style={styles.registerLink}>
                  Cadastre-se
                </ThemedText>
              </TouchableOpacity>
            </ThemedView>
          </>
        ) : (
          <ThemedView style={styles.loggedInContainer}>
            <ThemedText style={styles.welcomeText}>
              Você está logado como: {email}
            </ThemedText>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <ThemedText type="defaultSemiBold" style={styles.logoutButtonText}>
                Sair
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        )}
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: '',
            })}
          </ThemedText>{' '}

        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle"></ThemedText>
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
          
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
        
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
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
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
    loginContainer: {
    gap: 16,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
  },
  loginTitle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  inputContainer: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A1CEDC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: '#A1CEDC',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  registerText: {
    fontSize: 14,
  },
  registerLink: {
    color: '#A1CEDC',
    fontSize: 14,
  },
  loggedInContainer: {
    alignItems: 'center',
    gap: 16,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 100,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
