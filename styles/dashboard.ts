import { colors } from './colors';

export const dashboardStyles = {
  dashboardContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 55,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLogo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.logoCircle,
    marginRight: 10,
    overflow: 'hidden',
  },
  headerLogoImage: {
    width: '100%',
    height: '100%',
  },
  headerBrand: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '700',
    color: colors.text,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  searchIcon: {
    fontSize: 20,
    marginLeft: 8,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryChip: {
    backgroundColor: colors.buttonBg,
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  categoryIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  bannerCard: {
    backgroundColor: '#B99A6F',
    borderRadius: 20,
    padding: 16,
    minHeight: 180,
    marginBottom: 20,
  },
  sectionTag: {
    backgroundColor: colors.inputBg,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    marginBottom: 12,
  },
  sectionTagText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  popularRow: {
    flexDirection: 'row',
  },
  popularCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: 150,
    padding: 10,
    marginRight: 12,
  },
  popularImagePlaceholder: {
    width: '100%',
    height: 90,
    borderRadius: 12,
    backgroundColor: colors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  popularName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  popularPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popularPrice: {
    fontSize: 13,
    color: colors.text,
  },
  popularStar: {
    fontSize: 14,
  },
} as const;