import { spacingConfigs } from '../configs/spacing';
import { theme } from '../theme';
/* -------------------------------------------------------------------------- */
export const spacing = (space) => {
    if (typeof space === 'number')
        return theme.spacing.default * space;
    return spacingConfigs[space];
};
