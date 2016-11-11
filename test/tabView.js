import React, {Component, PropTypes} from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback
} from "react-native";

const styles = StyleSheet.create({
	tabView: {},
	contents: {
		flex: 1
	},
	content: {
		position: "absolute"
	},
	tabBars: {
		height: 60,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	}
});

export default class TabView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			index: props.index,
			previousIndex:-1
		};
	}

	static propTypes = {
		style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
		tabs: PropTypes.arrayOf(PropTypes.shape({
			text: PropTypes.string.isRequired,
			component: PropTypes.element,
			onPress: PropTypes.func,
			onHide:PropTypes.func
		})).isRequired,
		renderTabBar: PropTypes.func.isRequired,
		tabBarPosition: PropTypes.oneOf(["top", "bottom"]),
		index:PropTypes.number
	}

	static defaultProps = {
		tabBarPosition: "bottom",
		style: {},
		index:0
	}

	render() {
		let content = (
			<View style={[styles.contents]}>
				{this.props.tabs.map((item, index)=> {
					if(index===this.state.previousIndex
						&& item.onHide){
						item.onHide(item,index);
					}
					return (
						<View key={index} style={[styles.content,{
								zIndex:this.state.index===index?99:0,
								right:0,
								left:0,
								top:0,
								bottom:0
							}]}>
							{item.component}
						</View>
					);
				})}
			</View>
		);
		let tabBar = (
			<View style={[styles.tabBars]}>
				{this.props.tabs.map((item, index)=> {
					return (
						<TouchableWithoutFeedback
							key={`tabbar_${index}`}
							onPress={event=>{
								this.setState({
									index:index,
									previousIndex:this.state.index
								});
								if(item.onPress){
									item.onPress(event,item,index);
								}
							}}>
							<View
								style={{flex:1/this.props.tabs.length}}>
								{this.props.renderTabBar(this.state.index === index, item)}
							</View>
						</TouchableWithoutFeedback>
					);

				})}
			</View>
		);
		if (this.props.tabBarPosition === "top") {
			return (
				<View
					style={[styles.tabView,this.props.style]}>
					{tabBar}
					{content}
				</View>
			);
		}
		return (
			<View
				style={[styles.tabView,this.props.style]}>
				{content}
				{tabBar}
			</View>
		);
	}
}