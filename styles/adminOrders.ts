import { colors } from './colors';

export const adminOrdersStyles = {
  ordersHeaderTitle: {
    fontSize: 24,
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
    fontSize: 12,
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
    fontSize: 12,
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
    fontSize: 10,
    fontWeight: '700',
    color: '#B4791F',
  },
  orderStatusPillTextScheduled: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.text,
  },
  orderStatusPillTextReady: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2E8B57',
  },
  orderStatusPillTextCompleted: {
    fontSize: 10,
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
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  orderDetailsLink: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  orderProductRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderProductIcon: {
    fontSize: 13,
    marginRight: 6,
  },
  orderProductLabel: {
    fontSize: 13,
    color: colors.text,
  },
  orderMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderMetaIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  orderMetaText: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  changesBox: {
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  changesBoxTitle: {
    fontSize: 12,
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
    fontSize: 12,
    color: '#8A8A8A',
  },
  changeValue: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  newPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  newPriceLabel: {
    fontSize: 12,
    color: '#8A8A8A',
    marginRight: 8,
  },
  newPriceValue: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginRight: 6,
  },
  newPriceDelta: {
    fontSize: 12,
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
    fontSize: 13,
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
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  paymentProgressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  paymentProgressLabel: {
    fontSize: 12,
    color: '#8A8A8A',
  },
  paymentProgressLabelPaidFull: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2E8B57',
  },
  paymentProgressLabelBalance: {
    fontSize: 12,
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
    fontSize: 13,
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
    fontSize: 13,
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
    fontSize: 13,
    color: '#8A8A8A',
  },
  detailsRowValue: {
    fontSize: 13,
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
    fontSize: 12,
    fontWeight: '600',
    color: '#8A8A8A',
    marginBottom: 6,
  },
} as const;