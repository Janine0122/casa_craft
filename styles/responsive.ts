
import {
  Dimensions,
  PixelRatio,
  useWindowDimensions,
} from 'react-native';

const BASE_WIDTH = 375;

export function getScaleRatio(width: number): number {
  const safeWidth = Math.min(width, 430);

  return Math.min(
    Math.max(safeWidth / BASE_WIDTH, 0.85),
    1.15
  );
}

export function scale(size: number): number {
  const width = Dimensions.get('window').width;

  return PixelRatio.roundToNearestPixel(
    size * getScaleRatio(width)
  );
}

export function useResponsive() {
  const { width, height, fontScale } =
    useWindowDimensions();

  const isSmallPhone = width < 360;
  const isPhone = width < 600;
  const isTablet = width >= 600;
  const isLandscape = width > height;

  const ratio = getScaleRatio(width);

  const responsiveScale = (size: number) =>
    PixelRatio.roundToNearestPixel(size * ratio);

  const columns = isTablet
    ? isLandscape
      ? 4
      : 3
    : 2;

  return {
    width,
    height,
    fontScale,
    isSmallPhone,
    isPhone,
    isTablet,
    isLandscape,
    columns,
    scale: responsiveScale,
  };
}

const scaleKeys = new Set([
  'fontSize',
  'lineHeight',
  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
  'padding',
  'paddingHorizontal',
  'paddingVertical',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'margin',
  'marginHorizontal',
  'marginVertical',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'gap',
  'rowGap',
  'columnGap',
  'top',
  'bottom',
  'left',
  'right',
]);

function scaleStyle(style: Record<string, any>) {
  const result: Record<string, any> = {};

  for (const key in style) {
    const value = style[key];

    result[key] =
      scaleKeys.has(key) &&
      typeof value === 'number'
        ? scale(value)
        : value;
  }

  return result;
}

export function scaleAll<
  T extends Record<string, any>
>(styleSet: T): T {
  const result: Record<string, any> = {};

  for (const name in styleSet) {
    result[name] = scaleStyle(styleSet[name]);
  }

  return result as T;
}
