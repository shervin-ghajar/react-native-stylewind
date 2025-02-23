export type SpacingTypes = 'none' | 'default' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarg' | number;
export type ThemeSpacing = Record<Exclude<SpacingTypes, number>, number>;
