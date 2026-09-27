import { colors } from './colors';

export const authStyles = {
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.logoCircle,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  brand: {
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    fontStyle: 'italic',
    color: colors.text,
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.buttonBg,
    paddingVertical: 12,
    borderRadius: 20,
    width: '70%',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.inputBg,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E3D6C2',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 18,
    fontSize: 16,
    color: colors.text,
  },
  passwordRow: {
    position: 'relative',
    justifyContent: 'center',
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 0,
    bottom: 18,
    justifyContent: 'center',
  },
  eyeText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  linkText: {
    fontSize: 14,
    color: colors.text,
    textAlign: 'right',
    marginTop: -8,
    marginBottom: 24,
    textDecorationLine: 'underline',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 28,
  },
  toggleButton: {
    backgroundColor: colors.buttonBg,
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  toggleButtonActive: {
    backgroundColor: colors.text,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  toggleTextActive: {
    color: '#FFFFFF',
  },
} as const;