import React, {Component} from 'react';
import { CardItem} from "./common";
import {connect} from 'react-redux';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
} from 'react-native';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { expanded } = this.props;
        const { description } = this.props.library.item;

        if(expanded){
            return(
                <CardItem>
                    <Text style={{ flex: 1, padding: 10, }} >{description}</Text>
                </CardItem>
            );
        }
    }

    render(){
        console.log(this.props);
        const { titleStyle } = styles;
        const { title, id } = this.props.library.item;

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardItem>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardItem>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);