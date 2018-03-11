import React, {Component} from 'react';
import {RadioButtonGroup, View, Text} from 'react-radio-button-group';
import RadioButton from 'react-radio-buttons';


export default class Survey extends Component {

    constructor() {
        super();
        this.state = {
            text: ''
        };
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }

    render() {
        return (
            <div>Insert real radial stuff here</div>
            // <View >
            //     <RadioButtonGroup
            //         size={24}
            //         thickness={2}
            //         color='#9575b2'
            //         highlightColor='#ccc8b9'
            //         selectedIndex={1}
            //         onSelect={(index, value) => this.onSelect(index, value)}
            //     >
            //         <RadioButton
            //             style={{alignItems: 'center'}}
            //             value='Yo!! I am a cat.'

            //         >
            //         </RadioButton>

            //         <RadioButton
            //             value='index1'
            //         >
            //             <Text>Start from item index #1</Text>
            //         </RadioButton>

            //         <RadioButton
            //             value='red color'
            //             color='red'
            //         >
            //             <Text>Red Dot</Text>
            //         </RadioButton>

            //         <RadioButton
            //             value='green color'
            //             color='green'
            //         >
            //             <Text>Green Dot</Text>
            //         </RadioButton>

            //         <RadioButton
            //             value='blue color'
            //             color='blue'
            //         >
            //             <Text>Blue Dot</Text>
            //         </RadioButton>
            //     </RadioButtonGroup>


            // </View>
        )
    }
}
