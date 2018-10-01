import { Navigation } from 'react-native-navigation';
import ScreenName from '../config/screens-name'
import Images from '../assets/images';
import Colors from '../constants/colors';

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
      ]
    }
  }
})

export const setRootToHomeScreen = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.dashboard
              }
            }],
            options: {
              bottomTab: {
                text: 'ダッシュボード',
                icon: Images.tab_newsfeed,
                selectedIcon: Images.tab_newsfeed_active,
              },

            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.calendar
              }
            }],
            options: {
              statusBar: {
                visible: true,
                style: 'light'
              },
              topBar: {
                translucent: true,
                transparent: true,
                noBorder: false,
              },
              bottomTab: {
                text: 'カレンダー',
                icon: Images.tab_schedule,
                selectedIcon: Images.tab_schedule_active,
              },

            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.register
              }
            }],
            options: {
              bottomTab: {
                text: '案件一覧',
                icon: Images.tab_project,
                selectedIcon: Images.tab_project_active,
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.notification
              }
            }],
            options: {
              bottomTab: {
                text: 'お知らせ',
                icon: Images.tab_notification,
                selectedIcon: Images.tab_notification_active,
                badge: '3'
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.profile
              }
            }],
            options: {
              bottomTab: {
                text: 'プロフィール',
                icon: Images.tab_profile,
                selectedIcon: Images.tab_profile_active,
                selectedTextColor: Colors.blue,
              }
            }
          }
        }
      ],
    }
  }
});


