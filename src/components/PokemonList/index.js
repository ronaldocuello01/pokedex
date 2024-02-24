import React from 'react'
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { PokemonCard } from '../PokemonCard';

const PokemonList = (props) => {
    const { pokemons, loadPokemons, areNext, isLoading, externalScreen } = props;
    const loadMore = () => {
        loadPokemons();
    }

    return (
        <FlatList
            key={(pokemon) => String(pokemon.id)}
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({item}) => <PokemonCard pokemon={item} externalScreen={externalScreen} />}
            contentContainerStyle={styles.flatListContent}
            onEndReached={!isLoading && areNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isLoading &&
                areNext && (
                    <ActivityIndicator 
                        size='large'
                        style={styles.spinner}
                        color='#aeaeae'
                    />
                )
            }
        />
    )
}

const styles = StyleSheet.create({
    flatListContent: {
        paddingHorizontal: 5
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60
    }
});

export { PokemonList }
