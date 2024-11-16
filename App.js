//exercise 3============================
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, SectionList, Image, Button, StatusBar,} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const styles = StyleSheet.create({
  itemStyle: {
    alignItems: 'center',
    borderWidth: 2,
    flexDirection: 'row',

    justifyContent: 'space-around',
    padding: 10,
  },


  headerStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5

  },

  wordsStyle: {
      flexDirection: 'column',
      alignItems: 'center',
  },

  textStyle: {
    fontSize: 15,
  },

  imageStyle: {
    width: 230,
    height: 360,
    resizeMode: 'contain'
  },

  dogIcon: {
    color: "#a36b33",
  },

  sheepIcon: {
    color: "#129c1c",
  },

  penguinIcon: {
    color: "#1d3c91",
  },
})

const cards = [
  {data:[
      {key: 'Isabelle', image: require('./img/Isabelle.png'), },
      {key: 'K.K Slider', image: require('./img/K.K._Slider.png'),},

    ],
    title: "Dog", bgcolor: "#fdce77", icon: "dog",},

  {data: [
      {key:'Wendy', image: require('./img/Wendy.png'),},
      {key: 'Vesta', image: require('./img/Vesta.png')},

    ],
    title: "Sheep", bgcolor:"#b6ff68", icon: "sheep"},

  {data: [
      {key:'Sprinkle', image: require('./img/Sprinkle.png')},
      {key: 'Aurora', image: require('./img/Aurora.png')},

    ],
    title: "Penguin", bgcolor:"#13a7f6", icon: "penguin"},
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.itemStyle}>
        <View style={styles.wordsStyle}>
            <Text style={styles.textStyle} > {item.key}</Text>

        </View>

        <Image
            source={item.image}
            style={styles.imageStyle}
            // style={{ width: 330, height: 460 }}
        />
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{marginBottom: 50, margin: 10}}>
        <StatusBar hidden={true}/>

        <Text></Text>
        <Text></Text>
        <Button title= "Add Villager" color="#70b5cb" />
        <Text></Text>
        <SectionList style={{marginBottom: 50,}}
            sections={cards}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
                <View style={[styles.headerStyle, { backgroundColor: bgcolor }]}>
                  {icon === "dog" && <MaterialCommunityIcons name="dog" size={24} style={styles.dogIcon} />}
                  {icon === "sheep" && <MaterialCommunityIcons name="sheep" size={24} style={styles.sheepIcon} />}
                  {icon === "penguin" && <MaterialCommunityIcons name="penguin" size={24} style={styles.penguinIcon} />}

                  <Text style={styles.headerText}>{title}</Text>
                </View>

            )}
            contentContainerStyle={{ paddingBottom: 50 }} // Add padding at the bottom


        />


      </View>
  );
};

export default App;
