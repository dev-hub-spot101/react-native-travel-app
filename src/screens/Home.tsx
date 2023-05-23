/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Categories from '../config/Categories';
import Adventurous from '../config/Adventurous';
import Icon from 'react-native-vector-icons/Ionicons';

const Width = Dimensions.get('window').width;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = ({ navigation, route }) => {
    const [activeCategory, setActiveCategory] = React.useState(0);
    return (
        <SafeAreaView>

            <ScrollView style={{padding:20}}>

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text 
                        style={{
                            fontSize:30,
                            fontWeight:"bold",
                            color:"#333"
                        }}
                    >
                        Discover
                    </Text>
                    <Image 
                        source={require("../../assets/welcome.jpeg")}
                        style={{
                            width:50,
                            height:50,
                            borderRadius:50
                        }}
                    />
                </View>

                <ScrollView horizontal style={{marginVertical:20}}>
                    
                    {
                        Categories.map((category, index) =>(
                            <TouchableOpacity
                                onPress={()=>{setActiveCategory(index)}}
                                style={{ marginRight: 15 }}
                                key={category.id}
                            >
                            
                            <Text style={[
                                {fontSize:20, color:"#222"},
                                activeCategory === index && {color:"#487DD2"}
                                ]}>
                                {category.title}
                            </Text>

                            </TouchableOpacity>
                        ))
                    }

                </ScrollView>
                <Text style={{fontSize:16, color:'#222'}}>
                    {Categories[activeCategory].travels.length+" "}
                    {Categories[activeCategory].title}
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={Width * .7}
                    decelerationRate={'fast'}
                    pagingEnabled
                    style={{marginVertical:20}}
                >
                    {
                        Categories[activeCategory].travels.map((travel, index) => (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("detail", {data:travel})
                            }} key={index} style={{
                                width:Width * .7,
                                height: Width * .8,
                                overflow:'hidden',
                                borderRadius:20,
                                marginRight:20
                            }}>
                                <View style={{
                                    position:'absolute',
                                    zIndex:1,
                                    height:"100%",
                                    width:"100%",
                                    backgroundColor:"transparent",
                                    justifyContent:'space-between',
                                    padding:10
                                }}>

                                    <TouchableOpacity style={{
                                        alignSelf:'flex-end',
                                        padding:5,
                                        backgroundColor:'#fff',
                                        borderRadius:50,
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}>

                                        <Icon name='heart-outline' size={30} color={"#487DD2"} />

                                    </TouchableOpacity>

                                  <View style={{padding:20, backgroundColor:"#20212461", borderRadius:10}}>
                                    <Text style={{
                                            fontSize:20,
                                            color:"#fff",
                                            fontWeight:'700',
                                            marginLeft:10
                                        }}>
                                            {travel.title}
                                        </Text>
                                  </View>
                                </View>
                                <Image source={travel.image} style={{width:"100%", height:"100%"}} />
                            </TouchableOpacity>
                        ))
                    
                    }  
                </ScrollView>

                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}>

                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold',
                        color:"#111"
                    }}>
                        Adventurous ?
                    </Text>

                    <TouchableOpacity>
                        <Text style={{
                            fontSize:14,
                            fontWeight:'500',
                            color:"#487DD2"
                        }}>
                            Show All
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{marginVertical:20}}>

                        {
                            Adventurous.map((adventure)=>(
                                <TouchableOpacity  style={{
                                    marginRight:30,
                                    padding:10,alignItems:'center'
                                }} key={adventure.id}>
                                    <View style={{
                                        width:30,
                                        height:30
                                    }}>
                                        <Image source={adventure.image} resizeMode='contain' style={{width:"100%", height:"100%"}} />
                                    </View>
                                    <Text style={{
                                        textTransform:'uppercase',
                                        fontSize:10,
                                        marginTop:10                                    
                                        }}>
                                        {adventure.title}
                                    </Text>

                                </TouchableOpacity>
                            ))
                        }
                </ScrollView>

                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}>

                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold',
                        color:"#111"
                    }}>
                        Tranding Travel
                    </Text>
                </View>

                <ScrollView
                 
                    snapToInterval={Width * .7}
                    decelerationRate={'fast'}
                    pagingEnabled
                    style={{marginVertical:20}}
                >
                    {
                        Categories[activeCategory].travels.map((travel, index) => (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("detail", {data:travel})
                            }} key={index} style={{
                                width:Width * .9,
                                height: Width * .8,
                                overflow:'hidden',
                                borderRadius:20,
                                marginRight:20
                            }}>
                                <View style={{
                                    position:'absolute',
                                    zIndex:1,
                                    height:"100%",
                                    width:"100%",
                                    backgroundColor:"transparent",
                                    justifyContent:'space-between',
                                    padding:10
                                }}>

                                    <TouchableOpacity style={{
                                        alignSelf:'flex-end',
                                        padding:5,
                                        backgroundColor:'#fff',
                                        borderRadius:50,
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}>

                                        <Icon name='heart-outline' size={30} color={"#487DD2"} />

                                    </TouchableOpacity>

                                  <View style={{padding:20, backgroundColor:"#20212461", borderRadius:10}}>
                                    <Text style={{
                                            fontSize:20,
                                            color:"#fff",
                                            fontWeight:'700',
                                            marginLeft:10
                                        }}>
                                            {travel.title}
                                        </Text>
                                  </View>
                                </View>
                                <Image source={travel.image} style={{width:"100%", height:"100%"}} />
                            </TouchableOpacity>
                        ))
                    
                    }  
                </ScrollView>
            </ScrollView>

        </SafeAreaView>
    );
}

export default Home
