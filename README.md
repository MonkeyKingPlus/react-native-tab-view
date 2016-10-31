# react-native-tab-view
React Native TabView<br/>
<img src="https://raw.githubusercontent.com/MonkeyKingPlus/react-native-tab-view/master/test/screenshot/react-native-tab-view-demo.gif"/>

# Install
```bash
$ npm install mkp-react-native-tab-view --save
```

# Quick Start
```javascript
<TabView
    style={{flex:1}}
    tabs={[{
        text:"tab1",
        onTabBarPress:()=>{},
        component:<Tab1/>
      },{
        text:"tab2",
        component:<Tab2/>
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
This property is used to configure tab bar . you must provide a array , children can be any object.
## renderTabBar(isActive:bool,tab:object)
This property specify how to render tab bar, the first parameter mark the bar whether is active, the second parameter refer to tabs's item.
you must implement this method.
## style:object|number
## tabBarPosition:"top"|"bottom"
Marking the tab bar position when is top or bottom, the default value is "bottom".
