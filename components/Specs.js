import { View, Text , StyleSheet, Image} from 'react-native'
import React from 'react'
export default function Specs() {
  return (


      <View style={{}}>
          
          <Text style={{fontWeight:'bold', fontSize:20, marginBottom:16}}>Specifications</Text>
          <View style={{flexDirection:'row'}}>
              <SpecItmes text='speed'   />
              <SpecItmes text='speed' />
              <SpecItmes text='speed' />
             
      
          </View>
          
          <View style ={{flexDirection:'row'}}> 
              <SpecItmes text='speed' />
              <SpecItmes text='speed' />
              <SpecItmes text='speed' />
          </View>

      </View>
  )
}

// const imgPath = require('../assets/specs/002-gas-station.png')
const SpecItmes = (props) => {
    return(
        <View style={styles.container}>
                <Text>{props.text}</Text>
                <Image
                    source={props.path}
                />         
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#E2F0F2',
        margin:10,
        padding:20,
        paddingTop:30,
        paddingBottom:30,
        borderRadius:20,

    }
})