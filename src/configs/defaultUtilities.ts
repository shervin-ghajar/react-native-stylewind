import { spacing } from '../utils/spacing';
import { colors } from './colors/index';

/* -------------------------------------------------------------------------- */
export const defaultUtilities: Record<string, any> = {
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
