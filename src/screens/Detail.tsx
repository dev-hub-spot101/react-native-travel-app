/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Detail = ({ navigation, route }) => {
    const [travel, setTravel] = useState({});

    useEffect(() => {
        setTravel(route.params.data);
        console.log("route.params.data]", route.params.data)
    }, [route.params.data])
    

    return (
        <>
            <ScrollView>
                <ImageBackground source={travel.image} style={{width:"100%", height:500}}>
                    <SafeAreaView>
                        <View style={{
                            paddingHorizontal:10,
                            justifyContent:'space-between',
                            flexDirection:"row",
                            height:"100%"
                        }}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("home")}} style={{
                                backgroundColor:"#fff",
                                width:40,
                                height:40,
                                borderRadius:20,
                                justifyContent:'center',alignItems:'center'}}>
                                <Icon size={30} color={'#487DD2'} name='chevron-back' />
                            </TouchableOpacity>
                            <View style={{
                                alignItems:'flex-end',
                                justifyContent:'space-between',
                                paddingBottom:40
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor:"#fff",
                                    width:40,
                                    height:40,
                                    borderRadius:20,
                                    justifyContent:'center',alignItems:'center'
                                }}> 
                                    <Icon size={30} color={'#487DD2'} name='heart-outline' />
                                </TouchableOpacity>
                                <View>
                                    {
                                        travel.images && travel.images.length>0 && travel.images.map((img, index) => (
                                            <TouchableOpacity style={{
                                                width:60,
                                                height:60,
                                                padding:20,
                                                backgroundColor:"#fff",
                                                borderRadius:10,
                                                marginBottom:10
                                            }}>
                                                <Image source={img.image} style={{width:"100%", height:"100%",borderRadius:10}}/>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>

                <View style={{
                    backgroundColor:"#fff",
                    padding:20,
                    borderRadius:30,
                    bottom:30
                }}>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{
                            fontSize:20,
                            fontWeight:'700',
                            color:"#111"
                        }}>{travel.title}</Text>
                        <View style={{flexDirection:"row", alignItems:"flex-end"}}>
                            <Text style={{
                                fontSize:20,
                                fontWeight:'700',
                                color:"#111"
                            }}>
                                {travel.price}
                            </Text>
                            <Text>/person</Text>
                        </View>
                    </View>
                    <View style={{marginVertical:20}}>
                        <View style={{flexDirection:"row", marginBottom:20}}>
                            <TouchableOpacity style={{
                                paddingVertical:10, marginRight:20
                            }}>
                                <Text style={{color:"#487DD2", fontWeight:'700', fontSize:16}}>
                                    OverView
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingVertical:10, marginRight:20}}>
                                <Text>Review</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginBottom:20, flexDirection:"row"
                        }}>
                            <View style={{flexDirection:"row"}}>
                                <View style={{
                                    backgroundColor:"#fff",
                                    shadowColor:"#111",
                                    shadowOffset:{width:5, height:10},
                                    shadowRadius:5,
                                    shadowOpacity:0.2,
                                    padding:5,
                                    borderRadius:5,
                                    marginRight:10
                                }}>
                                    <Icon size={30} color={'#487DD2'} name='time' />
                                </View>
                                <View style={{marginRight:20}}>
                                    <Text style={{
                                        fontSize:12,
                                        marginBottom:5,
                                        textTransform:'uppercase'
                                    }}>
                                        Duration
                                    </Text>
                                    <Text style={{fontSize:16, fontWeight:600}}>{travel.duration}</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:"row"}}>
                                <View style={{
                                      backgroundColor:"#fff",
                                      shadowColor:"#111",
                                      shadowOffset:{width:5, height:10},
                                      shadowRadius:5,
                                      shadowOpacity:0.2,
                                      padding:5,
                                      borderRadius:5,
                                      marginRight:10
                                }}>

                                    <Icon size={30} color={'#487DD2'} name='star' />
                                </View>
                                <View style={{marginRight:20}}>
                                    <Text style={{
                                        fontSize:12,
                                        marginBottom:5,
                                        textTransform:'uppercase'
                                    }}>
                                        Rating
                                    </Text>
                                    <Text style={{fontSize:16, fontWeight:600}}>{travel.rating} out of 5</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{color:"#222"}}>{travel.description}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{
                position:'absolute',
                bottom:30,
                width:"100%"
            }}>
                <TouchableOpacity style={{
                    backgroundColor:"#487DD2",
                    padding:15,
                    marginHorizontal:16,
                    borderRadius:20,
                    flexDirection:"row",
                    justifyContent:"center"
                }}>
                    <Text style={{
                        color:'#fff',
                        fontSize:20,
                        fontWeight:'700',
                        marginLeft:70,
                        marginRight:10
                    }}>Book Now</Text>
                    <Icon size={24} color={'#fff'} name='arrow-forward' />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Detail
