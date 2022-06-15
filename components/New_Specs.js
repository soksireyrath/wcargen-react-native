import { View, Text, Image, StyleSheet,ScrollView, StatusBar , Button, TouchableOpacity} from 'react-native'
import React from 'react'


export default function New_Specs() {
  return (
      
      <ScrollView style={{padding:StatusBar.currentHeight}}>
          <CarSpecs/>
          <CarDetails/>
      </ScrollView>
  )
}

const CarSpecs = () => {
    return(
    <View>
       
       <Text style={mainTitle.container}>Specifications</Text>

        <View style={{flexDirection:'row'}}>
             
            <View style={styles.container}> 
            {/* 1st element in 1st row of Specifications*/}
                <Image 
                    style={imageStyle.container}
                    source = {require('../assets/specs/empty-tank.png')}/>
                <Text style={textStyle.container}>6L/100Km</Text>
            </View>
            
            <View style={styles.container}>
                <Image 
                    style={imageStyle.container}
                    source = {require('../assets/specs/gas-station.png')}/>
                <Text style={textStyle.container}>Petrol</Text>
            </View>

            <View style={styles.container}>
                <Image 
                    style={imageStyle.container}
                    source = {require('../assets/specs/car-seat.png')}/>
                <Text style={textStyle.container}>5 seats</Text>
            </View>
        </View>



        {/* 2nd row of Specifications display-------------------------- */}
        <View style={{flexDirection:'row'}}>

            <View style={styles.container}>
                <Image 
                    style={imageStyle.container}
                    source = {require('../assets/specs/engine.png')}/>
                <Text style={textStyle.container}>6 cyl.</Text>
            </View>
            
            <View style={styles.container}>
                <Image 
                    style={imageStyle.container}
                    source = {require('../assets/specs/manual-transmission.png')}/>
                <Text style={textStyle.container}>Auto</Text>
            </View>

            <View style={styles.container}>
                <Image 
                    style={imageStyle.container}
                    source = {require('../assets/specs/drivetrain.png')}/>
                <Text style={textStyle.container}>FWD</Text>
            </View>
        </View>   

    </View>
    )
}
const CarDetails = () => (
    <View>
        <Text style={mainTitle.container}>Details</Text>

        <View style={{ marginLeft: 20 }}>
            <Text style={detailItem.container}>Type:</Text>
            <Text style={detailItem.container}>Wheel:</Text>
            <Text style={detailItem.container}>Net Horespower @ RPM:</Text>
            <Text style={detailItem.container}>Displacement:</Text>
            <Text style={detailItem.container}>Net Torque @ RPm:</Text>
            <Text style={detailItem.container}>Suspension Type:</Text>
            <Text style={detailItem.container}>Brake ABS System:</Text>
            <Text style={detailItem.container}>Brake Type:</Text>
            <Text style={detailItem.container}>Fuel Tank Capacity:</Text>
            <Text style={detailItem.container}>Steering Type:</Text>
            <Text style={detailItem.container}>Base Curb Weight:</Text>
            <Text style={detailItem.container}>Width:</Text>
            <Text style={detailItem.container}>Height:</Text>
            <Text style={detailItem.container}>Length:</Text>
            <Text style={detailItem.container}>Min Ground Clearance:</Text>
        </View>


        <Text style={mainTitle.container}>Est.Price</Text>
        <View style={{ marginLeft: 20, }}>
            <Text style={detailItem.container}>New:</Text>
            <Text style={detailItem.container}>Used:</Text>

        </View>

        <View style={buttonStyle.containerss}>
            <Button title='COMPARE' color='#076473'/>
            <Button title='FIND DEALER' color='#076473'/>
        </View>


    </View>
)

const buttonStyle = StyleSheet.create({
    containerss:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:30,
        marginBottom:70
    
    }

})

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#E2F0F2',
        borderRadius:20,
        width:90,
        height:100,
        alignItems:'center',
        paddingTop:20,
        marginHorizontal:15,
        marginVertical:15,    }
})

const textStyle = StyleSheet.create({
    container : {
        color:'gray',
        fontSize:14,
        paddingTop:10,
        
    }
})


const imageStyle = StyleSheet.create({
    container: {
        width:30,
        height:30
    }
})


const mainTitle = StyleSheet.create({
    container:{
        fontWeight:'bold', 
        fontSize:20,
        paddingTop:10, 
        marginBottom:10, 
        marginLeft:20
    }
})

const detailItem = StyleSheet.create({
    container: {
        marginTop:10,
        fontSize:15
    }
})
