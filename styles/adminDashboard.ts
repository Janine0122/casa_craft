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
    fontSize: 18,
  },
  adminHeaderCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adminHeaderBrand: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '700',
    color: colors.text,
    marginLeft: 8,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  greetingDate: {
    fontSize: 13,
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
    fontSize: 13,
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
    fontSize: 11,
    fontWeight: '600',
    color: colors.text,
  },
  balanceCardAmount: {
    fontSize: 30,
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
    fontSize: 12,
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
    fontSize: 16,
    marginBottom: 8,
  },
  adminStatValue: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  adminStatLabel: {
    fontSize: 11,
    color: '#8A8A8A',
  },
  adminSectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  adminSectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  adminSectionLink: {
    fontSize: 12,
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
    fontSize: 16,
  },
  attentionInfo: {
    flex: 1,
  },
  attentionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  attentionSubtitle: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  attentionActionButton: {
    backgroundColor: colors.buttonBg,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  attentionActionText: {
    fontSize: 12,
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
    fontSize: 13,
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
    fontSize: 10,
    fontWeight: '700',
    color: '#2E8B57',
  },
  scheduleCustomerName: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  scheduleDescription: {
    fontSize: 12,
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
    fontSize: 20,
  },
  adminTabLabel: {
    fontSize: 11,
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
    fontSize: 14,
    color: '#8A8A8A',
  },
} as const;