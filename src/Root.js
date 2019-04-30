import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.age}</Text>
                <TouchableOpacity onPress={this.props.onAgeUP}>
                    <Text>AGE_UP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onAgeDown}>
                    <Text>AGE_Down</Text>
                </TouchableOpacity>
                <ScrollView>
                    {this.props.history.map(a => {
                        return (
                            <TouchableOpacity key={a.id} onPress={()=>{this.props.onDelItem(a.id)}}>
                                <Text style={styles.welcome}> {a.age}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.age,
        istory: state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            onAgeUP: () => ({ type: 'UP', value: 1 }),
            onAgeDown: () => ({ type: 'DOWN', value: 1 }),
            onDelItem:(id)=>({type:'DEL',key:id})
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Root); //connect is a function that retuns a Higher Order Function.

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#000'
    }
});
