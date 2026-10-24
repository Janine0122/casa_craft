import { colors } from './colors';

export const adminOrdersStyles = {
  ordersHeaderTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  ordersFilterRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  ordersFilterChip: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  ordersFilterChipActive: {
    backgroundColor: colors.text,
  },
  ordersFilterChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  ordersFilterChipTextActive: {
    color: '#FFFFFF',
  },
  orderCardWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  orderCardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  orderCode: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8A8A8A',
  },
  orderStatusPillAwaiting: {
    backgroundColor: '#FBEAD1',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  orderStatusPillScheduled: {
    backgroundColor: colors.inputBg,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  orderStatusPillReady: {
    backgroundColor: '#DFF3E6',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  orderStatusPillCompleted: {
    backgroundColor: '#DFF3E6',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  orderStatusPillTextAwaiting: {
    fontSize: 11,
    fontWeight: '700',
    color: '#B4791F',
  },
  orderStatusPillTextScheduled: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.text,
  },
  orderStatusPillTextReady: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2E8B57',
  },
  orderStatusPillTextCompleted: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2E8B57',
  },
  orderCustomerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderCustomerName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  orderDetailsLink: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  orderProductRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderProductIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  orderProductLabel: {
    fontSize: 14,
    color: colors.text,
  },
  orderMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderMetaIcon: {
    fontSize: 13,
    marginRight: 6,
  },
  orderMetaText: {
    fontSize: 13,
    color: '#8A8A8A',
  },
  changesBox: {
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  changesBoxTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  changeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  changeLabel: {
    fontSize: 13,
    color: '#8A8A8A',
  },
  changeValue: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  newPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  newPriceLabel: {
    fontSize: 13,
    color: '#8A8A8A',
    marginRight: 8,
  },
  newPriceValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginRight: 6,
  },
  newPriceDelta: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2E8B57',
  },
  quotationActionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  declineButton: {
    flex: 1,
    backgroundColor: colors.inputBg,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  declineButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  approveButton: {
    flex: 1,
    backgroundColor: colors.text,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  approveButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  paymentProgressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  paymentProgressLabel: {
    fontSize: 13,
    color: '#8A8A8A',
  },
  paymentProgressLabelPaidFull: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2E8B57',
  },
  paymentProgressLabelBalance: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B4433A',
  },
  paymentProgressTrack: {
    height: 6,
    backgroundColor: colors.inputBg,
    borderRadius: 3,
    marginBottom: 12,
    overflow: 'hidden',
  },
  paymentProgressFill: {
    height: '100%',
    backgroundColor: '#3DBE7A',
    borderRadius: 3,
  },
  fulfillmentActionButton: {
    backgroundColor: colors.text,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  fulfillmentActionButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  detailsSectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  detailsSectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailsRowLabel: {
    fontSize: 14,
    color: '#8A8A8A',
  },
  detailsRowValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    flexShrink: 1,
    textAlign: 'right',
  },
  detailsDivider: {
    height: 1,
    backgroundColor: '#F0E9DC',
    marginVertical: 4,
  },
  detailsCodeHeader: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8A8A8A',
    marginBottom: 6,
  },
    detailsStatusPillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  customerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  customerCardInfo: {
    flex: 1,
  },
  customerCardName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  customerCardMeta: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  customerCardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  customerActionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customerActionIcon: {
    fontSize: 15,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRowThumb: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  itemRowThumbEmoji: {
    fontSize: 20,
  },
  itemRowInfo: {
    flex: 1,
  },
  itemRowNamePriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemRowName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  itemRowPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  itemRowSpecs: {
    fontSize: 12,
    color: '#8A8A8A',
    marginTop: 2,
  },
  itemRowQuantity: {
    fontSize: 12,
    color: '#8A8A8A',
    marginTop: 2,
  },
  timelineStepRow: {
    flexDirection: 'row',
  },
  timelineIndicatorColumn: {
    alignItems: 'center',
    width: 24,
  },
  timelineDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineDotDone: {
    backgroundColor: '#2E8B57',
  },
  timelineDotCurrent: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2E8B57',
  },
  timelineDotUpcoming: {
    backgroundColor: colors.inputBg,
    borderWidth: 2,
    borderColor: '#D8CBB4',
  },
  timelineDotCheckText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#D8CBB4',
    marginVertical: 2,
  },
  timelineLineDone: {
    backgroundColor: '#2E8B57',
  },
  timelineTextColumn: {
    flex: 1,
    paddingLeft: 12,
    paddingBottom: 18,
  },
  timelineStepLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 2,
  },
  timelineStepLabelUpcoming: {
    color: '#8A8A8A',
  },
  timelineStepDate: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  deliveryInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  deliveryInfoIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  deliveryInfoText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  deliveryAddressText: {
    fontSize: 13,
    color: colors.text,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentRowLabel: {
    fontSize: 13,
    color: colors.text,
  },
  paymentRowLabelBold: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  paymentRowValue: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  paymentRowValueNegative: {
    fontSize: 13,
    fontWeight: '600',
    color: '#B4433A',
  },
  paymentRowValueBold: {
    fontSize: 15,
    fontWeight: '700',
    color: '#B4433A',
  },
  recordPaymentButton: {
    backgroundColor: colors.buttonBg,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  recordPaymentButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
} as const;