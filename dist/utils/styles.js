"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const index_1 = require("../configs/generated/utilities/index");
const index_2 = require("../hooks/index");
const lodash_1 = require("lodash");
const react_native_1 = require("react-native");
/* -------------------------------------------------------------------------- */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Combines utility styles and custom styles into a single style object.
 *
 * @param styles - An array of utility style names or custom styles. Utility style names should be keys of the `utilities` object. Custom styles can be any valid `StyleProp<ViewStyle>`.
 * @returns A style object combining the utility styles and custom styles.
 *
 * Example usage:
 * ```typescript
 * styles(["absolute", { color: "red",backgroundColor:(theme)=> theme.colors.primary.light }]);
 * ```
 */
const styles = (stylesArray) => {
    const { theme } = (0, index_2.useTheme)();
    const styleAccumulator = {};
    for (const style of stylesArray) {
        if (typeof style === 'string') {
            // Add utility style if it exists
            const capitalizedMode = theme.mode !== 'default' ? (0, lodash_1.capitalize)(theme.mode) : '';
            // Retrieve utilitie based on theme mode(Light/Dark)
            const utilityStyle = index_1.utilities?.[(style + capitalizedMode)] ??
                index_1.utilities[style];
            if (utilityStyle) {
                Object.assign(styleAccumulator, utilityStyle);
            }
        }
        else if (typeof style === 'object') {
            for (const [attrKey, atrrValue] of Object.entries(style)) {
                if (typeof atrrValue !== 'function')
                    continue;
                style[attrKey] = atrrValue(theme, react_native_1.Platform);
            }
            // Merge custom style objects
            Object.assign(styleAccumulator, style);
        }
    }
    return react_native_1.StyleSheet.create({ styleAccumulator }).styleAccumulator;
};
exports.styles = styles;
