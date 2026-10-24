import { colors } from './colors';

export const adminProductsStyles = {
  productsHeaderTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  productsHeaderTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
  },
  addProductButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.text,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  addProductButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 4,
  },
  productFilterRow: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 8,
  },
  productFilterChip: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  productFilterChipActive: {
    backgroundColor: colors.text,
  },
  productFilterChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  productFilterChipTextActive: {
    color: '#FFFFFF',
  },
  productHelperText: {
    fontSize: 12,
    color: '#8A8A8A',
    marginBottom: 16,
  },
  adminProductCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  adminProductTopRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  adminProductThumb: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  adminProductThumbEmoji: {
    fontSize: 22,
  },
  adminProductMainInfo: {
    flex: 1,
  },
  adminProductNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  adminProductName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  adminProductPriceCategoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  adminProductPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginRight: 8,
  },
  adminProductCategory: {
    fontSize: 13,
    color: '#8A8A8A',
  },
  colorDotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  colorDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#E3D6C2',
  },
  sizesCountText: {
    fontSize: 13,
    color: '#8A8A8A',
    marginLeft: 4,
  },
  adminProductBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stockBadgeInStock: {
    backgroundColor: '#DFF3E6',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  stockBadgeMadeOrder: {
    backgroundColor: '#DCE8FB',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  stockBadgeTextInStock: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2E8B57',
  },
  stockBadgeTextMadeOrder: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3159A8',
  },
  stockStepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stockStepperButton: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stockStepperButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  stockStepperValue: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginHorizontal: 14,
  },
  editProductButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  editProductButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 4,
  },
} as const;