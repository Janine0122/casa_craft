import { colors } from './colors';

export const adminDashboardStyles = {
  adminHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  adminHeaderIconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adminHeaderIconText: {
    fontSize: 20,
  },
  adminHeaderCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adminHeaderBrand: {
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '700',
    color: colors.text,
    marginLeft: 0,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  greetingDate: {
    fontSize: 14,
    color: '#8A8A8A',
    marginBottom: 16,
  },
  balanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  balanceCardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  balanceCardLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8A8A8A',
  },
  balanceCardOrdersPill: {
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  balanceCardOrdersPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  balanceCardAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  balanceProgressTrack: {
    height: 6,
    backgroundColor: colors.inputBg,
    borderRadius: 3,
    marginBottom: 10,
    overflow: 'hidden',
  },
  balanceProgressFill: {
    height: '100%',
    backgroundColor: colors.text,
    borderRadius: 3,
  },
  balanceCardFootnote: {
    fontSize: 13,
    color: '#8A8A8A',
  },
  adminStatRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  adminStatCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  adminStatIcon: {
    fontSize: 18,
    marginBottom: 8,
  },
  adminStatValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  adminStatLabel: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  adminSectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  adminSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  adminSectionLink: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    textDecorationLine: 'underline',
  },
  attentionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  attentionIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  attentionIconText: {
    fontSize: 18,
  },
  attentionInfo: {
    flex: 1,
  },
  attentionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  attentionSubtitle: {
    fontSize: 13,
    color: '#8A8A8A',
  },
  attentionActionButton: {
    backgroundColor: colors.buttonBg,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  attentionActionText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
  },
  scheduleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },
  scheduleTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  scheduleTimeType: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  scheduleStatusBadge: {
    backgroundColor: '#DFF3E6',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  scheduleStatusText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2E8B57',
  },
  scheduleCustomerName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  scheduleDescription: {
    fontSize: 13,
    color: '#8A8A8A',
  },
  adminTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#B99A6F',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  adminTabItem: {
    alignItems: 'center',
  },
  adminTabIcon: {
    fontSize: 22,
  },
  adminTabLabel: {
    fontSize: 12,
    color: colors.text,
    marginTop: 2,
  },
  adminTabLabelActive: {
    fontWeight: '700',
  },
  placeholderScreenWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderScreenText: {
    fontSize: 15,
    color: '#8A8A8A',
  },
} as const;