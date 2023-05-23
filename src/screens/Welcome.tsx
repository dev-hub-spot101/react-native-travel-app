/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const {height} = Dimensions.get('window');

const Welcome = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ImageBackground
                    source={require('../../assets/6.jpeg')}
                    resizeMode='cover'
                    style={{
                        height:height
                    }}
                >
                    <View style={{height:height}}>
                        <View style={{paddingHorizontal:20, paddingTop:40,}}>
                            <Text style={{fontSize:30, color:"#111", textAlign:'left', fontWeight:'600'}}>
                                Enjoy the trip With
                            </Text>
                            <Text style={{fontSize:30, color:"#487DD2", textAlign:'left', fontWeight:'800', marginTop:10}}>
                                Good Moments
                            </Text>
                            <Text style={{fontSize:18, color:"#111", textAlign:'left', fontWeight:'500', marginTop:10}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>
                        </View>

                        <View style={{justifyContent:"center", alignItems:'center', paddingTop:80 , bottom:180, position:'absolute' , left:0, right:0}}>
                            <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate("home")
                            }}
                            style={{
                                backgroundColor:"#487DD2",
                                padding: 30,
                                borderRadius:100,
                                borderWidth:3,
                                borderColor:"#fff"
                            }}>
                                <Text style={{fontSize:26, color:"#fff", fontWeight:'600', alignItems:'center', justifyContent:'center'}}>GO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})

export default Welcome;
