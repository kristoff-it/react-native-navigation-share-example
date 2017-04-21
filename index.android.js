import { AppRegistry } from 'react-native'
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import Share from './share'

AppRegistry.registerComponent('MyShareEx', () => Share)


// Navigation Code:
// Comment everything after this line to fix the share extension.

registerScreens(); // this is where you register all of your app's screens
Navigation.startTabBasedApp({ // start the app
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./img/one.png'),
      selectedIcon: require('./img/one_selected.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/two.png'),
      selectedIcon: require('./img/two_selected.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});
