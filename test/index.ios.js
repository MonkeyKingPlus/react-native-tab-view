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
		return <View
			style={{backgroundColor:"lightgray",flex:1,justifyContent:"center",alignItems:"center"}}><Text>Tab1</Text></View>;
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
		return <View
			style={{backgroundColor:"lightgray",flex:1,justifyContent:"center",alignItems:"center"}}><Text>Tab2</Text></View>;
	}
}

export default class test extends Component {
	render() {
		return (
			<View style={{flex:1}}>
				<TabView
					style={{flex:1}}
					tabs={[{
						text:"tab1",
						onTabBarPress:()=>{},
						component:<Tab1/>
					  },{
						text:"tab2",
						component:<Tab2/>,
						onHide:(tab,index)=>{
							console.log(`tab${index} hidden`);
						}
					  },{
						text:"tab3",
						component:<View style={{backgroundColor:"lightgray",flex:1,justifyContent:"center",alignItems:"center"}}>
									<Text>Tab3</Text>
								</View>
					  }]}
					renderTabBar={(isActive,tab)=>{
						console.log("render tab bar")
						if(isActive){
						  return <Text style={{backgroundColor:"yellow",textAlign:"center",height:60,lineHeight:60}}>{tab.text}</Text>
						}
						return <Text style={{textAlign:"center",height:60,lineHeight:60}}>{tab.text}</Text>
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
