import { colors } from './colors';

export const tabBarStyles = {
  bottomTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#B99A6F',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    fontSize: 22,
  },
  tabLabel: {
    fontSize: 12,
    color: colors.text,
    marginTop: 2,
  },
  tabLabelActive: {
    fontWeight: '700',
  },
} as const;