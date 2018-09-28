import { Navigation } from 'react-native-navigation';
import ScreenName from '../containers/screens-name'
import images from '../config/images';
import colors from '../config/colors';

// goto screen functions
export const setRootToLaunchScreen = () => Navigation.setRoot({
  root: {
    component: {
      name: ScreenName.launch
    }
  },
})

export const setRootToLoginScreen = () => Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: ScreenName.login,
          }
        }
      ],
      options: {
        topBar: {
          visible: false
        }
      }

    }
  }
})

export const setRootToHomeScreen = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.home,
                passProps: {
                  text: ''
                },
              }
            }],
            options: {
              bottomTab: {
                text: 'ダッシュボード',
                fontSize: 12,
                icon: images.tab_newsfeed,
                selectedIcon: images.tab_newsfeed_active,
                selectedTextColor: colors.blue
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.home,
                passProps: {
                  text: ''
                },
              }
            }],
            options: {
              bottomTab: {
                text: 'カレンダー',
                fontSize: 12,
                icon: images.tab_schedule,
                selectedIcon: images.tab_schedule_active,
                selectedTextColor: colors.blue
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.home,
                passProps: {
                  text: ''
                },
              }
            }],
            options: {
              bottomTab: {
                text: '案件一覧',
                fontSize: 12,
                icon: images.tab_project,
                selectedIcon: images.tab_project_active,
                selectedTextColor: colors.blue
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.home,
                passProps: {
                  text: ''
                },
              }
            }],
            options: {
              bottomTab: {
                text: 'お知らせ',
                fontSize: 12,
                icon: images.tab_notification,
                selectedIcon: images.tab_notification_active,
                selectedTextColor: colors.blue
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.profile,
                passProps: {
                  text: 'stack with one child'
                },
              }
            }],
            options: {
              bottomTab: {
                text: 'プロフィール',
                fontSize: 12,
                icon: images.tab_profile,
                selectedIcon: images.tab_profile_active,
                selectedTextColor: colors.blue
              }
            }
          }
        }
      ],
    }
  }
});


