import { colors } from './colors';

export const adminReportsStyles = {
  reportsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  reportsHeaderTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
  },
  exportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  exportButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 4,
  },
  periodToggleRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 4,
    marginBottom: 16,
  },
  periodToggleOption: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  periodToggleOptionSelected: {
    backgroundColor: colors.text,
  },
  periodToggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  periodToggleTextSelected: {
    color: '#FFFFFF',
  },
  salesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  salesCardLabel: {
    fontSize: 14,
    color: '#8A8A8A',
    marginBottom: 6,
  },
  salesCardAmount: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  salesCardChangePositive: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2E8B57',
    marginBottom: 20,
  },
  salesCardChangeNegative: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B4433A',
    marginBottom: 20,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 110,
    marginBottom: 10,
  },
  chartBarColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  chartBarStack: {
    width: 28,
    borderRadius: 6,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  chartBarUnpaidSegment: {
    backgroundColor: '#E0A030',
  },
  chartBarCollectedSegment: {
    backgroundColor: colors.text,
  },
  chartBarLabel: {
    fontSize: 12,
    color: '#8A8A8A',
    marginTop: 8,
  },
  legendRow: {
    flexDirection: 'row',
    gap: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  legendDotCollected: {
    backgroundColor: colors.text,
  },
  legendDotUnpaid: {
    backgroundColor: '#E0A030',
  },
  legendText: {
    fontSize: 13,
    color: colors.text,
  },
  summaryStatRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  summaryStatCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
  summaryStatLabel: {
    fontSize: 13,
    color: '#8A8A8A',
    marginBottom: 6,
  },
  summaryStatValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  summaryStatValueWarning: {
    fontSize: 22,
    fontWeight: '700',
    color: '#B4791F',
  },
  deliveryPickupCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  deliveryPickupTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 14,
  },
  splitBarTrack: {
    flexDirection: 'row',
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  splitBarDelivery: {
    backgroundColor: colors.text,
  },
  splitBarPickup: {
    backgroundColor: '#D9B27C',
  },
  splitBarLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  splitBarLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  topSellersCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  topSellersTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  topSellerRow: {
    marginBottom: 16,
  },
  topSellerNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  topSellerName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  topSellerAmount: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  topSellerBarTrack: {
    height: 6,
    backgroundColor: colors.inputBg,
    borderRadius: 3,
    marginBottom: 6,
    overflow: 'hidden',
  },
  topSellerBarFill: {
    height: '100%',
    backgroundColor: colors.text,
    borderRadius: 3,
  },
  topSellerUnitsSold: {
    fontSize: 13,
    color: '#8A8A8A',
  },
} as const;