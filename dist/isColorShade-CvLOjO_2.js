const colors = {
    // Primary colors
    primary: {
        default: '#1D4ED8',
        light: '#93C5FD',
        dark: '#1E3A8A',
    },
    // Secondary colors
    secondary: {
        default: '#e1effc',
        light: '#d3e5f8',
        dark: '#bcccdc',
    },
    // Status colors
    error: {
        default: '#EF4444',
        light: '#FCA5A5',
        dark: '#B91C1C',
    },
    warning: {
        default: '#F59E0B',
        light: '#FCD34D',
        dark: '#B45309',
    },
    success: {
        default: '#10B981',
        light: '#6EE7B7',
        dark: '#047857',
    },
    info: {
        default: '#3B82F6', // Default info color
        light: '#BFDBFE', // Light shade
        dark: '#1E40AF', // Dark shade
    },
    // Background colors
    background: {
        default: '#f3f3f3',
        light: '#f3f3f3', // Light shade
        dark: '#333333', // Dark shade
    },
    // Text colors
    text: {
        default: '#464646',
        light: '#464646',
        dark: '#d1d5db',
    },
    // Grey colors
    grey: {
        default: '#464646',
        0: '#FFFFFF', // White
        10: '#f5f5f5', // Very light grey
        20: '#eeeeee', // Dividers, light grey
        30: '#e0e0e0', // Light grey
        40: '#c6c6c6', // Box border, grey
        50: '#999999', // Input placeholder
        60: '#8d8d8d', // Medium grey
        70: '#666666', // Dark grey
        80: '#4d4d4d', // Darker grey
        90: '#333333', // Very dark grey
        100: '#1a1a1a', // Almost black
    },
    // Common colors
    common: {
        white: '#FFFFFF',
        black: '#000000',
    },
};

/* -------------------------------------------------------------------------- */
const defaultSpacing = 4;
/* -------------------------------------------------------------------------- */
/**
 * Configuration for theme spacing values.
 * Each key corresponds to a predefined spacing size and its numeric value.
 *
 * @type {{ none: number, default: number, xSmall: number, small: number, medium: number, large: number, xLarge: number, xxLarge: number }}
 * @property {number} none - Spacing value: 0.
 * @property {number} default - Default spacing value: {@link defaultSpacing}.
 * @property {number} xSmall - Extra small spacing value: {@link defaultSpacing} * 0.5.
 * @property {number} small - Small spacing value: {@link defaultSpacing}.
 * @property {number} medium - Medium spacing value: {@link defaultSpacing} * 2.
 * @property {number} large - Large spacing value: {@link defaultSpacing} * 3.
 * @property {number} xLarge - Extra large spacing value: {@link defaultSpacing} * 4.
 * @property {number} xxLarge - Double extra large spacing value: {@link defaultSpacing} * 5.
 */
const spacingConfigs = {
    none: 0,
    default: defaultSpacing,
    xSmall: defaultSpacing * 0.5,
    small: defaultSpacing,
    medium: defaultSpacing * 2,
    large: defaultSpacing * 3,
    xLarge: defaultSpacing * 4,
    xxLarg: defaultSpacing * 5,
};

/**
* AUTO GENERATED
* <---DO NOT MODIFY THIS FILE--->
*/
const theme$1 = {
    "mode": "dark",
    "colors": {
        "primary": {
            "default": "#1D4ED8",
            "light": "#93C5FD",
            "dark": "#1E3A8A"
        },
        "secondary": {
            "default": "#e1effc",
            "light": "#d3e5f8",
            "dark": "#bcccdc"
        },
        "error": {
            "default": "#EF4444",
            "light": "#FCA5A5",
            "dark": "#B91C1C"
        },
        "warning": {
            "default": "#F59E0B",
            "light": "#FCD34D",
            "dark": "#B45309"
        },
        "success": {
            "default": "#10B981",
            "light": "#6EE7B7",
            "dark": "#047857"
        },
        "info": {
            "default": "#3B82F6",
            "light": "#BFDBFE",
            "dark": "#1E40AF"
        },
        "background": {
            "default": "#f3f3f3",
            "light": "#f3f3f3",
            "dark": "#333333"
        },
        "text": {
            "default": "#464646",
            "light": "#464646",
            "dark": "#d1d5db"
        },
        "grey": {
            "0": "#FFFFFF",
            "10": "#f5f5f5",
            "20": "#eeeeee",
            "30": "#e0e0e0",
            "40": "#c6c6c6",
            "50": "#999999",
            "60": "#8d8d8d",
            "70": "#666666",
            "80": "#4d4d4d",
            "90": "#333333",
            "100": "#1a1a1a",
            "default": "#464646"
        },
        "common": {
            "white": "#FFFFFF",
            "black": "#000000"
        }
    },
    "spacing": {
        "none": 0,
        "default": 8,
        "xSmall": 2,
        "small": 4,
        "medium": 8,
        "large": 12,
        "xLarge": 16,
        "xxLarg": 20
    },
    "typography": {
        "fontFamily": [
            "Roboto"
        ]
    }
};

const theme = theme$1;
if (process.env.NODE_ENV !== 'production')
    ;

/* -------------------------------------------------------------------------- */
const spacing = (space) => {
    if (typeof space === 'number')
        return theme.spacing.default * space;
    return spacingConfigs[space];
};

/* -------------------------------------------------------------------------- */
const defaultUtilities = {
    /* -------------------------------------------------------------------------- */
    /*                                   Flexbox                                  */
    /* -------------------------------------------------------------------------- */
    'flex-1': { flex: 1 },
    flexRow: { flexDirection: 'row' },
    flexCol: { flexDirection: 'column' },
    flexWrap: { flexWrap: 'wrap' },
    flexNoWrap: { flexWrap: 'nowrap' },
    justifyCenter: { justifyContent: 'center' },
    justifyStart: { justifyContent: 'flex-start' },
    justifyEnd: { justifyContent: 'flex-end' },
    justifyBetween: { justifyContent: 'space-between' },
    justifyAround: { justifyContent: 'space-around' },
    itemsCenter: { alignItems: 'center' },
    itemsStart: { alignItems: 'flex-start' },
    itemsEnd: { alignItems: 'flex-end' },
    selfCenter: { alignSelf: 'center' },
    selfStart: { alignSelf: 'flex-start' },
    selfEnd: { alignSelf: 'flex-end' },
    /* -------------------------------------------------------------------------- */
    /*                                   Display                                  */
    /* -------------------------------------------------------------------------- */
    hidden: { display: 'none' },
    flex: { display: 'flex' },
    /* -------------------------------------------------------------------------- */
    /*                                  Position                                  */
    /* -------------------------------------------------------------------------- */
    absolute: { position: 'absolute' },
    relative: { position: 'relative' },
    'top-0': { top: 0 },
    'right-0': { right: 0 },
    'bottom-0': { bottom: 0 },
    'left-0': { left: 0 },
    'zIndex-1': { zIndex: 1 },
    'zIndex-10': { zIndex: 10 },
    /* -------------------------------------------------------------------------- */
    /*                                    Text                                    */
    /* -------------------------------------------------------------------------- */
    textCenter: { textAlign: 'center' },
    textLeft: { textAlign: 'left' },
    textRight: { textAlign: 'right' },
    textJustify: { textAlign: 'justify' },
    /* -------------------------------------------------------------------------- */
    /*                                 Font Weight                                */
    /* -------------------------------------------------------------------------- */
    fontThin: { fontWeight: '100' },
    fontLight: { fontWeight: '300' },
    fontNormal: { fontWeight: '400' },
    fontMedium: { fontWeight: '500' },
    fontBold: { fontWeight: '700' },
    fontExtraBold: { fontWeight: '800' },
    fontBlack: { fontWeight: '900' },
    /* -------------------------------------------------------------------------- */
    /*                                   Border                                   */
    /* -------------------------------------------------------------------------- */
    border: { borderWidth: 1, borderColor: colors.grey.default },
    borderTop: { borderTopWidth: 1 },
    borderBottom: { borderBottomWidth: 1 },
    borderLeft: { borderLeftWidth: 1 },
    borderRight: { borderRightWidth: 1 },
    roundedSm: { borderRadius: spacing('small') },
    rounded: { borderRadius: spacing('default') },
    roundedLg: { borderRadius: spacing('large') },
    roundedFull: { borderRadius: 9999 },
    /* -------------------------------------------------------------------------- */
    /*                                 Background                                 */
    /* -------------------------------------------------------------------------- */
    bgWhite: { backgroundColor: colors.common.white },
    bgBlack: { backgroundColor: colors.common.black },
    bgTransparent: { backgroundColor: 'transparent' },
    /* -------------------------------------------------------------------------- */
    /*                                    Text                                    */
    /* -------------------------------------------------------------------------- */
    text: { color: colors.text.default },
    textDark: { color: colors.text.dark },
    textLight: { color: colors.text.light },
    /* -------------------------------------------------------------------------- */
    /*                                   Shadow                                   */
    /* -------------------------------------------------------------------------- */
    // shadow: {
    //     shadowColor: colors.common.black,
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.23,
    //     shadowRadius: 2.62,
    //     elevation: 4,
    // },
    // shadowLg: {
    //     shadowColor: colors.common.black,
    //     shadowOffset: { width: 0, height: 4 },
    //     shadowOpacity: 0.3,
    //     shadowRadius: 4.65,
    //     elevation: 8,
    // },
    /* -------------------------------------------------------------------------- */
    /*                              Width and Height                              */
    /* -------------------------------------------------------------------------- */
    wFull: { width: '100%' },
    hFull: { height: '100%' },
    wHalf: { width: '50%' },
    hHalf: { height: '50%' },
    /* -------------------------------------------------------------------------- */
    /*                                  Overflow                                  */
    /* -------------------------------------------------------------------------- */
    overflowHidden: { overflow: 'hidden' },
    overflowVisible: { overflow: 'visible' },
    overflowScroll: { overflow: 'scroll' },
    /* -------------------------------------------------------------------------- */
    /*                                PointerEvents                               */
    /* -------------------------------------------------------------------------- */
    pointerEventNone: { pointerEvents: 'none' },
    pointerEventAuto: { pointerEvents: 'auto' },
    /* -------------------------------------------------------------------------- */
    /*                                   Opacity                                  */
    /* -------------------------------------------------------------------------- */
    'opacity-0': { opacity: 0 },
    'opacity-25': { opacity: 0.25 },
    'opacity-50': { opacity: 0.5 },
    'opacity-75': { opacity: 0.75 },
    'opacity-100': { opacity: 1 },
};

function isColorShade(value) {
    return (typeof value === 'object' &&
        value !== null &&
        value.default !== undefined &&
        typeof value.default === 'string' &&
        value.light !== undefined &&
        typeof value.light === 'string' &&
        value.dark !== undefined &&
        typeof value.dark === 'string');
}

export { spacing as a, colors as c, defaultUtilities as d, isColorShade as i, spacingConfigs as s, theme as t };
//# sourceMappingURL=isColorShade-CvLOjO_2.js.map
