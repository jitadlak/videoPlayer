import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoPlayer from 'react-native-video-player'
const App = () => {
  return (
    <View style={{flex:1, backgroundColor:'tomato', }} > 
      
      {/* <Video
      controls
      controls={true}
      style={{height:300, width:'100%'}}
      source={{uri:'https://www.w3schools.com/html/mov_bbb.mp4'}}
      /> */}
      <VideoPlayer
    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
    videoWidth={1600}
    videoHeight={850}
    rotateToFullScreen={true}
    onLoad={(data)=>{console.log('ready')}}
    resizeMode="cover"
    onProgress={(progress)=>{
      console.log(progress)
    //   if(progress.currentTime<= 77.116 && progress.currentTime>= 70.116 )
    // {
      
    //   alert('time')
    // }
  }}
    fullScreenOnLongPress
    showDuration={true}
    style={{ borderRadius:10,}}
    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
    // customStyles={{seekBarBackground:'white'}}
/>
    </View>
    
  )
}

export default App

// const styles = StyleSheet.create({
//   backgroundVideo:{
    
//     width:'100%',
//     flex:1
    

//   }
// })
