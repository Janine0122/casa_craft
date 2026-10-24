import { colors } from './colors';

export const adminAddProductStyles = {
  photoUploadBox: {
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#C9B18C',
    borderRadius: 16,
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: colors.inputBg,
  },
  photoUploadIcon: {
    fontSize: 26,
    marginBottom: 8,
  },
  photoUploadTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  photoUploadSubtitle: {
    fontSize: 13,
    color: '#8A8A8A',
  },
  addSizeChip: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#C9B18C',
    borderStyle: 'dashed',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addSizeChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  newSizeInputRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  newSizeInput: {
    flex: 1,
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E3D6C2',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.text,
  },
  newSizeAddButton: {
    backgroundColor: colors.text,
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  newSizeAddButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  toggleSettingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleSettingTextWrap: {
    flex: 1,
    marginRight: 12,
  },
  toggleSettingTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  toggleSettingSubtitle: {
    fontSize: 13,
    color: '#8A8A8A',
    lineHeight: 17,
  },
  depositSummaryText: {
    fontSize: 13,
    color: '#8A8A8A',
    marginTop: 10,
    lineHeight: 18,
  },
} as const;