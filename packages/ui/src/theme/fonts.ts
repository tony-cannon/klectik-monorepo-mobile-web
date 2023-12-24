import { Platform } from 'react-native';
import { createFont, isWeb } from 'tamagui';

// TODO(EXT-148): remove this type and use Tamagui's FontTokens
export type TextVariantTokens = keyof typeof fonts;

const fontFamily = {
    serif: 'serif',
    sansSerif: {
        // iOS uses the name embedded in the font
        book: 'baselBook',
        medium: 'baselMedium',
        monospace: 'monoRegular',
        goJacky: 'GoJacky',
    },
};

type SansSerifFontFamilyKey = keyof typeof fontFamily.sansSerif;
type SansSerifFontFamilyValue =
    (typeof fontFamily.sansSerif)[SansSerifFontFamilyKey];

const platformFontFamily = (
    family: SansSerifFontFamilyKey
): SansSerifFontFamilyKey | SansSerifFontFamilyValue => {
    if (Platform.OS === 'web') {
        return family;
    }

    return fontFamily.sansSerif[family];
};

export const fonts = {
    mainLogo: {
        family: platformFontFamily('goJacky'),
        fontSize: 30,
        lineHeight: 36,
        fontWeight: '500',
        maxFontSizeMultiplier: 1.1,
    },
    heading1: {
        family: platformFontFamily('book'),
        fontSize: 52,
        lineHeight: 60,
        fontWeight: '400',
        maxFontSizeMultiplier: 1.2,
    },
    heading2: {
        family: platformFontFamily('book'),
        fontSize: 36,
        lineHeight: 44,
        fontWeight: '400',
        maxFontSizeMultiplier: 1.2,
    },
    heading3: {
        family: platformFontFamily('book'),
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '400',
        maxFontSizeMultiplier: 1.2,
    },
    subheading1: {
        family: platformFontFamily('book'),
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '400',
        maxFontSizeMultiplier: 1.4,
    },
    subheading2: {
        family: platformFontFamily('book'),
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        maxFontSizeMultiplier: 1.4,
    },
    body1: {
        family: platformFontFamily('book'),
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '400',
        maxFontSizeMultiplier: 1.4,
    },
    body2: {
        family: platformFontFamily('book'),
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        maxFontSizeMultiplier: 1.4,
    },
    body3: {
        family: platformFontFamily('book'),
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '400',
        maxFontSizeMultiplier: 1.4,
    },
    buttonLabel1: {
        family: platformFontFamily('medium'),
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '500',
        maxFontSizeMultiplier: 1.2,
    },
    buttonLabel2: {
        family: platformFontFamily('medium'),
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '500',
        maxFontSizeMultiplier: 1.2,
    },
    buttonLabel3: {
        family: platformFontFamily('medium'),
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
        maxFontSizeMultiplier: 1.2,
    },
    buttonLabel4: {
        family: platformFontFamily('medium'),
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '500',
        maxFontSizeMultiplier: 1.2,
    },
    monospace: {
        family: platformFontFamily('monospace'),
        fontSize: 14,
        lineHeight: 20,
        maxFontSizeMultiplier: 1.2,
    },
} as const;

const baselMedium = isWeb
    ? '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    : 'baselMedium';

const baselBook = isWeb
    ? '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    : 'baselBook';

export const headingFont = createFont({
    family: baselBook,
    face: {},
    size: {
        small: fonts.heading3.fontSize,
        medium: fonts.heading2.fontSize,
        true: fonts.heading2.fontSize,
        large: fonts.heading1.fontSize,
    },
    weight: {
        small: '500',
        medium: '500',
        true: '500',
        large: '500',
    },
    lineHeight: {
        small: fonts.heading3.lineHeight,
        medium: fonts.heading2.lineHeight,
        true: fonts.heading2.lineHeight,
        large: fonts.heading1.lineHeight,
    },
});

export const subHeadingFont = createFont({
    family: baselBook,
    face: {},
    size: {
        small: fonts.subheading2.fontSize,
        large: fonts.subheading1.fontSize,
        true: fonts.subheading1.fontSize,
    },
    weight: {
        small: '500',
        medium: '500',
        large: '500',
        true: '500',
    },
    lineHeight: {
        small: fonts.subheading2.lineHeight,
        large: fonts.subheading1.lineHeight,
        true: fonts.subheading1.lineHeight,
    },
});

// for now tamagui is inferring all the font size from body, but we have differences in the diff fonts
// so i'm filling in blanks (adding medium here), but will need to fix this properly in tamagui...

export const bodyFont = createFont({
    family: baselBook,
    face: {},
    size: {
        micro: fonts.body3.fontSize,
        small: fonts.body2.fontSize,
        medium: fonts.body2.fontSize,
        large: fonts.body1.fontSize,
        true: fonts.body2.fontSize,
    },
    weight: {
        micro: fonts.body3.fontWeight,
        small: fonts.body2.fontWeight,
        medium: fonts.body2.fontWeight,
        large: fonts.body1.fontWeight,
        true: fonts.body2.fontWeight,
    },
    lineHeight: {
        micro: fonts.body3.lineHeight,
        small: fonts.body2.lineHeight,
        medium: fonts.body2.lineHeight,
        large: fonts.body1.lineHeight,
        true: fonts.body2.lineHeight,
    },
});

export const buttonFont = createFont({
    family: baselMedium,
    size: {
        micro: fonts.buttonLabel4.fontSize,
        small: fonts.buttonLabel3.fontSize,
        medium: fonts.buttonLabel2.fontSize,
        large: fonts.buttonLabel1.fontSize,
        true: fonts.buttonLabel2.fontSize,
    },
    weight: {
        micro: fonts.buttonLabel4.fontWeight,
        small: fonts.buttonLabel3.fontWeight,
        medium: fonts.buttonLabel2.fontWeight,
        large: fonts.buttonLabel1.fontWeight,
        true: fonts.buttonLabel2.fontWeight,
    },
    lineHeight: {
        micro: fonts.buttonLabel4.lineHeight,
        small: fonts.buttonLabel3.lineHeight,
        medium: fonts.buttonLabel2.lineHeight,
        large: fonts.buttonLabel1.lineHeight,
        true: fonts.buttonLabel2.lineHeight,
    },
});

export const logoFont = createFont({
    family: 'GoJacky',
    size: {
        small: fonts.heading3.fontSize,
        medium: fonts.heading2.fontSize,
        true: fonts.heading2.fontSize,
        large: fonts.heading1.fontSize,
    },
    weight: {
        small: '500',
        medium: '500',
        true: '500',
        large: '500',
    },
    lineHeight: {
        small: fonts.heading3.lineHeight,
        medium: fonts.heading2.lineHeight,
        true: fonts.heading2.lineHeight,
        large: fonts.heading1.lineHeight,
    },
});

// TODO mono font
