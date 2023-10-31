import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import {Button, Container, Checkbox, Body, Right, ListItem} from 'native-base';
import Animated from 'react-native-reanimated';




/*Redux*/
import { useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionActions';

function Item({title, id, price}) {
  const dispatch = useDispatch();
  return (
    <View style = {{
      marginVertical: 3,
      paddingHorizontal: 30,
      paddingVertical: 15,
    }}> 
      <ListItem>
        <Checkbox color='#ff4500' onpress={() => {
          dispatch(deleteTransaction(id));
        }}
         />

        <Body>
          <Text style= {{fontSize: 17, fontWeight:'700', marginLeft: 10}}>
            {title}
          </Text>
        </Body>

        <Right>
          <Text style ={{fontFamily: 'Lato-bold',
          fontSize: 14,
          fontWeight: '400',
          color: true ? '#009BFC' : '#FF4500',
        }}>-K800</Text>
        </Right>
      </ListItem>
    </View>
  )
}


const HomeScreen = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);
  return (
    <Container>
    <Animated.View style ={{
      flex: 1,
      alignItems:'center',
      paddingVertical: 10,
      paddingHorizontal:20,
    }}>
      <LinearGradient colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
        colours={['#FAAD3D', '#EFC90A', '#F1CB0C']}
        style=  {{...sytyles.box}}
      >
        <View style ={{ widtht: '70%', alignItems: 'flex-start'}}>
          <Text
            style={{
              fontSize: 15,
              color: '#fff',    
              fontFamily: 'Lato-Regular',
              fontWeight: '600',
            }}>
              Current Balance</Text>
        </View>
        <Text style = {{
          fontFamily: 'Lato-medium',
          fontSize: 32,
           colos: '#fff',
           fontWeight: '700'       
        }}>K5,500.00</Text>
        <Text style= {{
          marginTop: 67,
          color: '#fff',
          fontFamily: 'Lato-Regular',
          fontSize: 18,
          fontWeight: '700'  
        }}>4234 **** **** 6533</Text>
      </LinearGradient>
    </Animated.View>
    <View style={{flex: 1, marginTop: -170}}>
      {/*<View style= {{alingItems: 'center', marginTop: 30}}>
        <Text style= {{color: '#ff4500', fontWeight: '700', fontSize: 20}}>
          No transactions yet
        </Text>
      </View> */}
      <FlatList 
      data = {transactions}
       renderItem={({item}) => (
        <Item title={ item.title} price={item.price} id={item.id} />
      )}
      keyExtractor={(item) => item.id.toString()}
      />   
      </View> 
    </Container>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 189,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
});

export default HomeScreen;
