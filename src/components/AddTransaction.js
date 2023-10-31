import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content, Form, Item, Input} from 'native-base';
import { useDispatch } from 'react-redux';
 


function AddTransaction() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const onSubmit = () => {
        if (!title || !price) {
            return alert('Please fill in all fields');
        };
        const id = Math.floor(Math.random() = 600000);

        const newTransaction = {
            id,
            title,
            price: +price,
        };
        
        dispatch(AddTransaction({...newTransaction}));
    };





    return (
        <Container>
            <Content>
                <Form>
                    <Item style = {{...styles.item}}>
                        <Input placeholder="Expense Title" />
                    </Item>
                    <Item style = {{...styles.item}}>
                        <Input placeholder="Expense Price" keyboardType="number-pad"/>
                    </Item>
                </Form>
            </Content>
        
        </Container>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 20
    }
})

export default AddTransaction;