import { colors } from './colors';

export const notificationStyles = {
  filterChipRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterChip: {
    backgroundColor: colors.buttonBg,
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  filterChipActive: {
    backgroundColor: colors.text,
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  filterChipTextActive: {
    color: '#FFFFFF',
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 10,
    marginTop: 4,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  notifIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  notifBody: {
    flex: 1,
  },
  notifTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  notifDesc: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 6,
  },
  notifTime: {
    fontSize: 12,
    color: '#8A8A8A',
    textAlign: 'right',
  },
} as const;