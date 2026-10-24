import { colors } from './colors';

export const reservationStyles = {
  reservationSummaryCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  reservationThumb: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  reservationThumbEmoji: {
    fontSize: 26,
  },
  reservationSummaryInfo: {
    flex: 1,
  },
  reservationSummaryName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  reservationSummarySubtitle: {
    fontSize: 12,
    color: '#8A8A8A',
    marginBottom: 8,
  },
  reservationSummaryPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
  },
  fulfillmentToggleRow: {
    flexDirection: 'row',
    backgroundColor: colors.inputBg,
    borderRadius: 16,
    padding: 4,
    marginBottom: 16,
  },
  fulfillmentToggleOption: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  fulfillmentToggleOptionSelected: {
    backgroundColor: colors.text,
  },
  fulfillmentToggleText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  fulfillmentToggleTextSelected: {
    color: '#FFFFFF',
  },
  addressErrorText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#B4433A',
    marginTop: -8,
    marginBottom: 16,
  },
  deliveryNoticeBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#DFF3E6',
    borderRadius: 14,
    padding: 14,
    marginBottom: 4,
  },
  deliveryNoticeIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  deliveryNoticeText: {
    flex: 1,
    fontSize: 13,
    color: '#2E6B45',
    lineHeight: 18,
  },
  timeOptionRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  timeOptionCard: {
    flex: 1,
    backgroundColor: colors.inputBg,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  timeOptionCardSelected: {
    backgroundColor: colors.text,
  },
  timeOptionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.text,
  },
  timeOptionLabelSelected: {
    color: '#FFFFFF',
  },
  timeOptionRange: {
    fontSize: 11,
    color: '#8A8A8A',
    marginTop: 2,
  },
  timeOptionRangeSelected: {
    color: '#EFE6D8',
  },
  dateOptionRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  dateOptionCard: {
    flex: 1,
    backgroundColor: colors.inputBg,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  dateOptionCardSelected: {
    backgroundColor: colors.text,
  },
  dateOptionDay: {
    fontSize: 11,
    fontWeight: '600',
    color: '#8A8A8A',
    marginBottom: 4,
  },
  dateOptionDaySelected: {
    color: '#EFE6D8',
  },
  dateOptionNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  dateOptionNumberSelected: {
    color: '#FFFFFF',
  },
  dateOptionMonth: {
    fontSize: 10,
    color: '#8A8A8A',
  },
  dateOptionMonthSelected: {
    color: '#EFE6D8',
  },
  reservationNoteText: {
    fontSize: 11,
    color: '#8A8A8A',
    marginBottom: 16,
  },
  orderSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  orderSummaryLabel: {
    fontSize: 14,
    color: colors.text,
  },
  orderSummaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  orderSummaryDivider: {
    height: 1,
    backgroundColor: '#E3D6C2',
    marginVertical: 10,
  },
  orderSummaryTotalLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  orderSummaryTotalValue: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  depositBox: {
    backgroundColor: colors.text,
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    marginBottom: 8,
  },
  depositLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#EFE6D8',
    marginBottom: 4,
  },
  depositAmount: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  depositProgressTrack: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  depositProgressFill: {
    height: '100%',
    width: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
  depositNote: {
    fontSize: 11,
    color: '#EFE6D8',
  },
  holdNoteText: {
    fontSize: 11,
    color: '#8A8A8A',
    marginTop: 10,
    marginBottom: 16,
  },
  confirmReservationButton: {
    flex: 1,
    backgroundColor: colors.text,
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: 'center',
  },
  confirmReservationButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
} as const;