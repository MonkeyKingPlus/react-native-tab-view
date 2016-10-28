/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import TabView from "./tabView";

class Tab1 extends Component {
	componentDidMount() {
		console.log("tab1 did mount")
	}

	componentWillUnmount() {
		console.log("tab1 will unmount")
	}

	render() {
		return <View style={{backgroundColor:"gray",flex:1}}><Text>1</Text></View>;
	}
}

class Tab2 extends Component {
	componentDidMount() {
		console.log("tab2 did mount")
	}

	componentWillUnmount() {
		console.log("tab2 will unmount")
	}

	render() {
		return <View style={{backgroundColor:"lightgray",flex:1}}><Text>2</Text></View>;
	}
}

export default class test extends Component {
	render() {
		return (
			<View>
				<View style={{height:60,backgroundColor:"green"}}></View>
				<TabView
					style={{height:300}}
					tabs={[{
						text:"tab1",
						onTabBarPress:()=>{},
						component:<Tab1/>
					  },{
						text:"tab2",
						component:<Tab2/>
					  }]}
								renderTabBar={(isActive,tab)=>{
						console.log("render tab bar")
						if(isActive){
						  return <Text style={{textAlign:"center"}}>{tab.text}</Text>
						}
						return <Text style={{backgroundColor:"yellow",textAlign:"center"}}>{tab.text}</Text>
					  }}>
				</TabView>
			</View>
		);
	}
}

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
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('test', () => test);
