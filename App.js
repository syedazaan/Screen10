import React from 'react';
import { StyleSheet,Text,View,  Image,ImageBackground,} from 'react-native';
  
  import { styles1} from  "./styles/styles"

  import Icon from 'react-native-vector-icons/FontAwesome';
  import Icons from 'react-native-vector-icons/Entypo';
  import Iconsf from 'react-native-vector-icons/FontAwesome5';


  const myIcon = <Icon name="plus" size={22} color="skyblue" />;
  const myIcon1 = <Icon name="apple" size={22} color="rgb(152,179,190)" />; 
  const myIcon2 = <Icons name="dot-single" size={14} color="white" />; 
   const myIcon3 = <Icon name="cc-paypal" size={22} color="#000000" />;
   const myIcon4 = <Icon name="telegram" size={22} color="#000000" />; 
   const myIcon5 = <Icon name="money" size={22} color="yellow" />; 
   const myIcon6 = <Icon name="shopping-bag" size={22} color="pink" />; 
   const myIcon7 = <Icon name="car" size={22} color="red" />; 
   const myIcon8 = <Iconsf name="money-bill" size={22} color="green" />; 
   const myIcon9 = <Icon name="home" size={32} color="skyblue" />; 
   const myIcon10 = <Icon name="suitcase" size={32} color="rgb(8,40,65)" />; 
   const myIcon11 = <Icons name="area-graph" size={32} color="rgb(8,40,65)" />; 
   const myIcon12 = <Icons name="user" size={32} color="rgb(8,40,65)" />; 
   

   

  export default class App extends React.Component {
  render( ) {
    return (
      <View style= {styles.container}>
           
               <View style={styles.headerblock}>
                    
                    <View style={styles.wallenciablock}>
                        <Text style={styles.wallenciablock1}>Wallencia</Text>
                    </View>
                    <View style={styles.Plusblock}>
                      {myIcon}
                    </View>
               </View>
               
               <View style={styles.cardblock}>
                   <View style={styles.card1}>
                      <View style={styles.Topcard}>
                        <View style={styles.leftTopcard}>
                          <Text style={styles.cardnameTopcard1}>Card Name</Text>
                          <Text style={styles.maulanaTopcard1}>Maulana Farhan</Text>
                        </View>
                        <View style={styles.rightTopcard}>
                          <Text style={styles.rightTopcard1}>{myIcon1} Pay</Text>
                        </View>
                      </View>
                      
                      
                      <View style={styles.Middlecard}>
                          <Text style={styles.Middlecard1}>576{myIcon2}0010{myIcon2}4256{myIcon2}2003</Text>
                      </View>
                      
                      <View style={styles.Bottomcard}>
                          <Text style={styles.Bottomcard1}>Card Balance</Text>
                          <Text style={styles.Bottomcard2}>$2745</Text>
                      </View>    
                   </View>
                   
                   <View style={styles.card2}></View>
                   <View style={styles.card3}></View>
               </View>
               
               <View style={styles.navbarblock}>
                  <View style={styles.emptyleftnavbarblock}></View>
                  <View style={styles.navbarblock1}>{myIcon2}</View>
                  <View style={styles.navbarblock2}>{myIcon2}</View>
                <View style={styles.navbarblock3}>{myIcon2}</View>
                  <View style={styles.emptyrightnavbarblock}></View>
               </View>
              
              <View style={styles.Twobuttonblock}>
                 <View style={styles.Paybuttonblock}>
                  <Text style={styles.Paybuttonblock1}>{myIcon3}  Pay</Text>
                 </View>
                
                 <View style={styles.Translatebuttonblock}>
                        <Text style={styles.Translatebuttonblock1}>{myIcon4}  Transfer</Text>
                 </View>
              </View>
             
             
              <View style={styles.Transactionblock}>
                 <View style={styles.textTransactionblock}>
                    <Text style={styles.textTransactionblock1}>Transaction</Text>
                 </View>
                 <View style={styles.textseeallblock}>
                   <Text style={styles.textseeallblock1}>See all</Text>
                 </View>
              </View>
              
            
              <View style={styles.monthlyblock}>
                  <View style={styles. iconmonthlyblock}>{myIcon5}</View>
                  <View style={styles.Mmonthlyblock}>
                     <Text style={styles.Mmonthlyblock1}>Monthly payroll</Text>
                     <Text style={styles.Mmonthlyblock2}>Today</Text>
                  </View>
                  <View style={styles.Poundmonthlyblock}>
                  <Text style={styles.Poundmonthlyblock1}> + $703</Text>
                  </View>
              </View>
             
             
              <View style={styles.groceryblock}>
                <View style={styles.icongroceryblock}>{myIcon6}</View>
                <View style={styles.Ggroceryblock}>
                   <Text style={styles.Ggroceryblock1}>Grocery cashback</Text>
                   <Text style={styles.Ggroceryblock2}>May 19,2021</Text>
                </View>
                <View style={styles.Poundgroceryblock}>
                <Text style={styles.Poundgroceryblock1}> + $20</Text>
                </View>
              </View>
              
              
              <View style={styles.carblock}>
                   <View style={styles.iconcarblock}>{myIcon7}</View>
                   <View style={styles.Ccarblock}>
                     <Text style={styles.Ccarblock1}>Car service</Text>
                     <Text style={styles.Ccarblock2}>May 18,2021</Text>
                   </View>
                   <View style={styles.Poundcarblock}>
                     <Text style={styles.Poundcarblock1}> - $70</Text> 
                   </View>
              </View>
              
              
              <View style={styles.dinnerblock}>
                  <View style={styles.icondinnerblock}>{myIcon8}</View>
                  <View style={styles.Ddinnerblock}>
                     <Text style={styles.Ddinnerblock1}>Dinner bills</Text>
                     <Text style={styles.Ddinnerblock2}>May 17,2021</Text>
                  </View>
                  <View style={styles.Pounddinnerblock}>
                    <Text style={styles.Pounddinnerblock1}> - $54</Text>
                  </View>
              </View>
             
             
              <View style={styles.bottomnavblock}>
                <View style={styles.homeiconavblock}>{myIcon9}</View>
                <View style={styles.calendericonavblock}>{myIcon10}</View>
                <View style={styles.graphiconavblock}>{myIcon11}</View>
                <View style={styles.usericonavblock}>{myIcon12}</View>
              </View>
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgb(1,7,42)',
    // alignItems:'center',
    // justifyContent:'center',
  },
  headerblock:{
   flex:1,
   flexDirection:'row',
   marginLeft:15,
   marginRight:15,
   marginTop:15,
  //  borderWidth:1,
  },

  wallenciablock:{
   flex:6,
   justifyContent:'center',
  //  borderWidth:1,
  },

  wallenciablock1:{
    fontSize:28,
    fontWeight:'900',
    color:'white',

  },

  Plusblock:{
  flex:0.9,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:15,
  backgroundColor:'rgb(8,40,65)',
  // borderWidth:1,
  },

  cardblock:{
   flex:5,
   flexDirection:'row',
   marginLeft:15,
   marginRight:15,
  //  marginTop:5,
  //  borderWidth:1,
  },
  card1:{
    flex:10,
    backgroundColor:'rgb(127,0,255)',
    marginTop:10,
    marginBottom:10,
    borderRadius:20,
    // borderWidth:1,
  },
  Topcard:{
    flex:1,
    flexDirection:'row',
    // borderWidth:1,
  },
  leftTopcard:{
   flex:3.5,
   
  //  borderWidth:1,
  },

  

  cardnameTopcard1:{
  fontSize:16,
  color:'rgb(152,179,190)',
  fontWeight:'700',
  marginLeft:20,
  marginTop:15
  },

  maulanaTopcard1:{
  fontSize:18,
  color:'white',
  fontWeight:'bold',
  marginLeft:20,
  marginTop:3,
  },

  rightTopcard:{
    flex:1,
    // color:'rgb(152,179,190)',
    // alignItems:'center',
    justifyContent:'center',
    // borderWidth:1,
  },

  rightTopcard1:{
    fontSize:22,
    color:'rgb(152,179,190)',
    fontWeight:'bold',
  },

  Middlecard:{
    flex:1,
    justifyContent:'center',
    // borderWidth:1,
  },

  Middlecard1:{
   fontSize:18,
   color:'white',
   marginLeft:20,
   fontWeight:'bold',
  },

  Bottomcard:{
    flex:1,
    // borderWidth:1,
  },


  Bottomcard1:{
    fontSize:16,
    color:'rgb(152,179,190)',
  fontWeight:'700',
  marginLeft:20,
  // marginTop:15
  },

  Bottomcard2:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    marginLeft:20,
    // marginTop:3,
  },

  card2:{
    flex:0.5,
    backgroundColor:'rgb(0,0,254)',
    marginTop:20,
    marginBottom:20,
    borderTopRightRadius:13,
    borderBottomRightRadius:13,
    // borderWidth:1,
  },
  card3:{
    flex:0.5,
    backgroundColor:'rgb(253,184,29)',
    marginTop:30,
    marginBottom:30,
    borderTopRightRadius:13,
    borderBottomRightRadius:13,
    // borderWidth:1,
  },


  navbarblock:{
  flex:0.8,
  flexDirection:'row',
  marginLeft:15,
  marginRight:15,
  // marginTop:5,
  // borderWidth:1,
  },
  emptyleftnavbarblock:{
    flex:5,
    // borderWidth:1,
  },

  navbarblock1:{
    flex:1,
   alignItems:'center',
   justifyContent:'center',

    marginTop:2,
    marginBottom:2,
    marginLeft:5,
    marginRight:5,
    borderRadius:50,
    borderWidth:2,
    borderColor:'skyblue',
  },

  navbarblock2:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    // borderWidth:1,
  },

  navbarblock3:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    // borderWidth:1,
  },

  emptyrightnavbarblock:{
    flex:5,
    // borderWidth:1,
  },

  Twobuttonblock:{
    flex:1.5,
    flexDirection:'row',
    marginLeft:15,
    marginRight:15,
    marginTop:5,
    // borderWidth:1,
  },

  Paybuttonblock:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'white',
   marginTop:10,
   marginRight:10,
   marginBottom:5,
   borderRadius:13,
  //  borderWidth:1,
  },

  Paybuttonblock1:{
    fontSize:19,
    fontWeight:'600',
  },
  Translatebuttonblock:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(8,40,65)',
    marginTop:10,
    marginLeft:10,
    marginBottom:5,
    borderRadius:13,
  //  borderWidth:1,
  },

  Translatebuttonblock1:{
    fontSize:19,
    color:'white',
    fontWeight:'600',
  },

  Transactionblock:{
    flex:1,
    flexDirection:'row',
    marginLeft:15,
    marginRight:15,
    // marginTop:5,
    // borderWidth:1,
  },

  textTransactionblock:{
  flex:4,
  justifyContent:'flex-end',
  // marginTop:5,
  // borderWidth:1,
  },

  textTransactionblock1:{
    fontWeight:'bold',
    fontSize:20,
    color:'white',
  },

  textseeallblock:{
   flex:1,
   
   justifyContent:'flex-end',
   alignItems:'flex-end',
  //  borderWidth:1,
  },

  textseeallblock1:{
    fontSize:13,
    fontWeight:'600',
    color:'rgb(152,179,190)',
  },

  monthlyblock:{
    flex:1.2,
    
    flexDirection:'row',
    marginLeft:15,
    marginRight:15,
    marginTop:10,
    marginBottom:5,
  //  borderWidth:1,
  },

  iconmonthlyblock:{
 flex:1.5,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'rgb(8,40,65)',
 borderRadius:10,
 marginRight:10,
//  borderWidth:1,
  },

  Mmonthlyblock:{
    flex:6,
    // borderWidth:1,
  },

  Mmonthlyblock1:{
   marginLeft:5,
   fontSize:16,
   fontWeight:'bold',
   color:'white',
  },

  Mmonthlyblock2:{
    marginLeft:5,
    fontSize:13,
    fontWeight:'700',
    color:'rgb(8,40,65)',

  },

  Poundmonthlyblock:{
   flex:2,
   alignItems:'flex-end',
   justifyContent:'center',
  //  borderWidth:1,
  },

  Poundmonthlyblock1:{
    fontSize:18,
    fontWeight:'bold',
    color:'green',
  },

  groceryblock:{
    flex:1.2,
    flexDirection:'row',
    marginLeft:15,
    marginRight:15,
    // marginTop:5,
    marginTop:10,
    marginBottom:5,
  //  borderWidth:1,
  },

  icongroceryblock:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(8,40,65)',
    marginRight:10,
    borderRadius:10,
    // borderWidth:1,
  },


  Ggroceryblock:{
    flex:6,
    // borderWidth:1,
  },

  Ggroceryblock1:{
    marginLeft:5,
    fontSize:16,
    fontWeight:'bold',
    color:'white',
    
  },

  Ggroceryblock2:{
    marginLeft:5,
    fontSize:13,
    fontWeight:'700',
    color:'rgb(8,40,65)',
  },

  Poundgroceryblock:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end',
    // borderWidth:1,
    // borderWidth:1,
  },

  Poundgroceryblock1:{
    fontSize:18,
    fontWeight:'bold',
    color:'green',
  },

  carblock:{
    flex:1.2,
    flexDirection:'row',
    marginLeft:15,
    marginRight:15,
    // marginTop:5,
    marginTop:10,
    marginBottom:5,
  //  borderWidth:1,
  },

  iconcarblock:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(8,40,65)',
    marginRight:10,
    borderRadius:10,
    // borderWidth:1,
  },

  Ccarblock:{
    flex:6,
    // borderWidth:1,
  },

  Ccarblock1:{
    marginLeft:5,
    fontSize:16,
    fontWeight:'bold',
    color:'white',
  },
  Ccarblock2:{
    marginLeft:5,
    fontSize:13,
    fontWeight:'700',
    color:'rgb(8,40,65)',
  },


  Poundcarblock:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end',
    // borderWidth:1,
  },

  Poundcarblock1:{
    fontSize:18,
  fontWeight:'bold',
  color:'orange',
  },

  dinnerblock:{
    flex:1.2,
    flexDirection:'row',
    marginLeft:15,
    marginRight:15,
    marginTop:10,
    marginBottom:5,
    // marginTop:5,
    // borderWidth:1,
  },

  icondinnerblock:{
    flex:1.5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(8,40,65)',
    marginRight:10,
    borderRadius:10,
    // borderWidth:1,
  },

  Ddinnerblock:{
    flex:6,
    // borderWidth:1,
  },

  Pounddinnerblock:{
    flex:2,
    justifyContent:'center',
    alignItems:'flex-end',
    // borderWidth:1,
  },

  Pounddinnerblock1:{
  fontSize:18,
  fontWeight:'bold',
  color:'orange',
  },

  Ddinnerblock1:{
    marginLeft:5,
    fontSize:16,
    fontWeight:'bold',
    color:'white',
  },

  Ddinnerblock2:{
    marginLeft:5,
    fontSize:13,
    fontWeight:'700',
    color:'rgb(8,40,65)',
  },

  bottomnavblock:{
    flex:1.2,
    flexDirection:'row',
    marginLeft:25,
    marginRight:25,
    // marginTop:5,
    // borderWidth:1,
  },
  homeiconavblock:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // borderWidth:1,
  },

  calendericonavblock:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // color:'rgb(8,40,65)',
    // borderWidth:1,
  },

  graphiconavblock:{
    flex:1,

    justifyContent:'center',
    alignItems:'center',
    // color:'rgb(8,40,65)',
    // borderWidth:1,
  },
  usericonavblock:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // color:'rgb(8,40,65)',
    // borderWidth:1,
  },
 
});