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