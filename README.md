# react-native-tab-view

<!-- badge -->
[![npm version](https://img.shields.io/npm/v/mkp-react-native-tab-view.svg)](https://www.npmjs.com/package/mkp-react-native-tab-view)
[![npm license](https://img.shields.io/npm/l/mkp-react-native-tab-view.svg)](https://www.npmjs.com/package/mkp-react-native-tab-view)
[![npm download](https://img.shields.io/npm/dm/mkp-react-native-tab-view.svg)](https://www.npmjs.com/package/mkp-react-native-tab-view)
[![npm download](https://img.shields.io/npm/dt/mkp-react-native-tab-view.svg)](https://www.npmjs.com/package/mkp-react-native-tab-view)
<!-- endbadge -->

React Native TabView<br/>
<img src="https://raw.githubusercontent.com/MonkeyKingPlus/react-native-tab-view/master/test/screenshot/react-native-tab-view-demo.gif"/>

# Install
```bash
$ npm install mkp-react-native-tab-view --save
```

# Support
IOS/Android

# Quick Start
```javascript
<TabView
    style={{flex:1}}
    tabs={[{
        text:"tab1",
        onPress:()=>{},
        component:<Tab1/>
      },{
        text:"tab2",
        component:<Tab2/>,
        onHide:(tab,index)=>{
        	console.log(`tab${index} will be hidden`);
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
```
# TabView Props
## tabs:object[]
This property is used to configure tab bar . you must provide a array , children can be any object. but some one is defined ,please see it following,
```javascript
// type tab
type tab={
	//tab content
	component:Element,
	//invoke when tab bar click
	onPress:Function,
	//invoke when tab content will be hidden
	onHide:Function,
	//any custom parameter
	...otherParameter
};
```
## renderTabBar(isActive:bool,tab:object)
This property specify how to render tab bar, the first parameter mark the bar whether is active, the second parameter refer to tabs's item.
you must implement this method.
## style:object|number
## tabBarPosition:"top"|"bottom"
Marking the tab bar position when is top or bottom, the default value is "bottom".
## index:Number
the default value is 0.
## styles
it's contain "content" and "tabBar"
