import { View, Image, FlatList } from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading'

import logoImg from '../../assets/logo-nlw-esports.png'
import { GAMES } from '../../utils/games';

import { styles } from './styles';
import { GameCard } from '../../components/GameCard';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title='Encontre seu Duo"'
        subtitle='Selecione o game que deseja Jogar'
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={ item }
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal

      />

      
    </View>
  );
}