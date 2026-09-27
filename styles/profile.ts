import { colors } from './colors';

export const profileStyles = {
  profileTopCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  orderTrackChip: {
    backgroundColor: colors.buttonBg,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  orderTrackText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },
  profileDetailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    flex: 1,
  },
  editIconButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  editIconText: {
    fontSize: 26,
  },
  profileDetailRow: {
    marginBottom: 18,
  },
  profileDetailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8A8A8A',
    marginBottom: 4,
  },
  profileDetailValue: {
    fontSize: 16,
    color: colors.text,
  },
  profileInput: {
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E3D6C2',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: colors.text,
  },
  lineFormRow: {
    marginBottom: 20,
  },
  lineFormLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8A8A8A',
    marginBottom: 6,
  },
  lineFormValue: {
    fontSize: 16,
    color: colors.text,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E3D6C2',
  },
  lineFormInput: {
    fontSize: 16,
    color: colors.text,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
  },
  saveButton: {
    backgroundColor: colors.text,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  saveButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  logoutButton: {
    backgroundColor: colors.buttonBg,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#B33A3A',
  },
} as const;