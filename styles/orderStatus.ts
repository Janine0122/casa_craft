import { colors } from './colors';

export const orderStatusStyles = {
  orderStatusTabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  orderStatusTab: {
    backgroundColor: colors.buttonBg,
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  orderStatusTabActive: {
    backgroundColor: colors.text,
  },
  orderStatusTabText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  orderStatusTabTextActive: {
    color: '#FFFFFF',
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  orderCardThumb: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  orderCardThumbEmoji: {
    fontSize: 22,
  },
  orderCardInfo: {
    flex: 1,
  },
  orderCardNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  orderCardName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  orderStatusBadge: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  orderStatusBadgeToPay: {
    backgroundColor: '#FBEAD1',
  },
  orderStatusBadgeToReceive: {
    backgroundColor: '#DCE8FB',
  },
  orderStatusBadgeCompleted: {
    backgroundColor: '#DFF3E6',
  },
  orderStatusBadgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  orderStatusBadgeTextToPay: {
    color: '#B4791F',
  },
  orderStatusBadgeTextToReceive: {
    color: '#3159A8',
  },
  orderStatusBadgeTextCompleted: {
    color: '#2E8B57',
  },
  orderCardSubtitle: {
    fontSize: 12,
    color: '#8A8A8A',
    marginBottom: 6,
  },
  orderCardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderCardPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
  },
  orderCardDate: {
    fontSize: 11,
    color: '#8A8A8A',
  },
  emptyStateWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  emptyStateEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#8A8A8A',
    textAlign: 'center',
  },
} as const;