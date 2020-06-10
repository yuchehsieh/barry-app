import React from "react";
import { StyleSheet,ScrollView ,View,Image} from 'react-native';
import { ListItem ,Text,SearchBar,Input,Icon} from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={style.back}>
        <ScrollView style={{paddingTop: 20}}>
        <View style={style.search}> 
        <Input
  placeholder='INPUT WITH ERROR MESSAGE'
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/>

<Input placeholder="Password" secureTextEntry={true} />
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
         </View>
         <View style={style.picback1}>
            <Image
                        style={style.pic1}
                        source={{uri:'https://github.com/lg30assqwedrf/image-test/blob/master/heart.png?raw=true'}}/>
                <Text style={style.word1}>心跳</Text>
            </View>
            <View style={style.picback2}>
            <Image
                        style={style.pic1}
                        source={{uri:'https://github.com/lg30assqwedrf/image-test/blob/master/man.png?raw=true'}}/>
                <Text style={style.word1}>步行</Text>
            </View>
            <View style={style.picback3}>
            <Image
                        style={style.pic1}
                        source={{uri:'https://github.com/lg30assqwedrf/image-test/blob/master/sleep.png?raw=true'}}/>
                <Text style={style.word1}>睡眠</Text>
            </View>
            <View style={style.picback4}>
            <Image
                        style={style.pic1}
                        source={{uri:'https://github.com/lg30assqwedrf/image-test/blob/master/ugly.png?raw=true'}}/>
                <Text style={style.word1}>健康狀況</Text>
            </View>
      <Text style={style.bottom}>Contact us :（02）1234-5678</Text>
      </ScrollView>
        </View>
  
    );
  
  }
}

const style = StyleSheet.create({
  back:{
    backgroundColor:'#2B475D',
    height:800,
   
  },
  search:{
    height:50,
    width:360,
    marginLeft:5,
    marginTop:0,
       
       
  },
  bottom:{
    marginTop:18,
    marginLeft:90,
    color:'#2B475D',
  },
  picback1:{
    backgroundColor:'#8E5757',
    width:305,
    height:95,
    marginTop:50,
    marginLeft:35,
    borderRadius:20,
  },
  pic1:{
    width:65,
    height:65,
    marginLeft:20,
    marginTop:16
  },

  picback2:{
    backgroundColor:'#E1A61B',
    width:305,
    height:95,
    marginTop:20,
    marginLeft:35,
    borderRadius:20,
  },
  
  picback3:{
    backgroundColor:'#145126',
    width:305,
    height:95,
    marginTop:20,
    marginLeft:35,
    borderRadius:20,
  },
  
  picback4:{
    backgroundColor:'#216861',
    width:305,
    height:95,
    marginTop:20,
    marginLeft:35,
    borderRadius:20,
  },
  word1:{
    color:'#fff',
    fontSize:18,
    marginTop:-40,
    marginLeft:100
  }

}
);

