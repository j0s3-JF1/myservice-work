import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//Import estilização
import styles from "./Style";
import CategoryButton from "./CategorySearch/SearchButton";
import ProductButton from "./ProductSearch/ProductButton";
import Loading from '../../Loading/Loading';


export default function Search() {

    //busca de serviços
    const [servicos, setServicos] = useState([]);

    //loading
    const [isloading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/categorias_', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setServicos(json))
            .catch((err) => {
                console.log(err);
                alert('Error ao buscar categorias de serviços')
            })
    }, []);

    //busca de produtos
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/categoriap_', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => setProdutos(json))
            .catch((err) => {
                console.log(err);
                alert('Error ao buscar categorias de produtos')
            })
    }, []);

    //mudança de pesquisa
    const [search, setSearch] = useState(true);

    const toogleSearch = () => {
        setSearch(!search);
    }
    
    return (
        <View style={{ justifyContent: 'center', width: '100%', backgroundColor: '#F8F8F8' }}>
            <View style={styles.Search}>
                <View style={styles.iconSearch}>
                    <Ionicons name="search" size={25} color='#0A3DC2' />
                </View>
                <TextInput placeholder="Pesquisar" style={styles.inputSearch} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%'}}>
                <TouchableOpacity
                    disabled={search}
                    onPress={toogleSearch}
                    style={{
                        backgroundColor: '#0A3DC2',
                        width: '20%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        elevation: 5,
                    }}
                >
                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>Serviços</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={!search}
                    onPress={toogleSearch}
                    style={{
                        backgroundColor: '#FFF',
                        width: '20%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        elevation: 5,
                    }}
                >
                    <Text style={{color: '#0A3DC2', fontWeight: 'bold'}}>Produtos</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{
                backgroundColor: '#F8F8F8',
            }}>
                <View style={styles.container}>
                    {
                        search ?

                            servicos.map((servico, index) => (
                                <CategoryButton servico={servico} key={index} />
                            ))
                            :
                            produtos.map((produto, index) => (
                                <ProductButton produto={produto} key={index} />
                            ))
                    }
                </View>
            </ScrollView>
        </View>
    );
}