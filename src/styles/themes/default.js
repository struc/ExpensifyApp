/* eslint-disable no-unused-vars */
import colors from '../colors';
import SCREENS from '../../SCREENS';

const darkTheme = {
    // Figma keys
    appBG: colors.darkAppBackground,
    splashBG: colors.green,
    highlightBG: colors.darkHighlightBackground,
    border: colors.darkBorders,
    borderLighter: colors.darkDefaultButton,
    borderFocus: colors.green,
    icon: colors.darkIcons,
    iconMenu: colors.green,
    iconHovered: colors.darkPrimaryText,
    iconSuccessFill: colors.green,
    iconReversed: colors.darkAppBackground,
    iconColorfulBackground: `${colors.ivory}cc`,
    textSupporting: colors.darkSupportingText,
    text: colors.darkPrimaryText,
    link: colors.blue300,
    linkHover: colors.blue100,
    buttonDefaultBG: colors.darkDefaultButton,
    buttonHoveredBG: colors.darkDefaultButtonHover,
    buttonPressedBG: colors.darkDefaultButtonPressed,
    danger: colors.red,
    dangerHover: colors.redHover,
    dangerPressed: colors.redHover,
    warning: colors.yellow400,
    success: colors.green,
    successHover: colors.greenHover,
    successPressed: colors.greenPressed,
    transparent: colors.transparent,
    signInPage: colors.green800,

    // Additional keys
    overlay: colors.darkHighlightBackground,
    inverse: colors.darkPrimaryText,
    shadow: colors.black,
    componentBG: colors.darkAppBackground,
    hoverComponentBG: colors.darkHighlightBackground,
    activeComponentBG: colors.darkBorders,
    signInSidebar: colors.green800,
    sidebar: colors.darkHighlightBackground,
    sidebarHover: colors.darkAppBackground,
    heading: colors.darkPrimaryText,
    textLight: colors.darkPrimaryText,
    textDark: colors.darkAppBackground,
    textReversed: colors.lightPrimaryText,
    textBackground: colors.darkHighlightBackground,
    textMutedReversed: colors.darkIcons,
    textError: colors.red,
    offline: colors.darkIcons,
    modalBackdrop: colors.darkHighlightBackground,
    modalBackground: colors.darkAppBackground,
    cardBG: colors.darkHighlightBackground,
    cardBorder: colors.darkHighlightBackground,
    spinner: colors.darkSupportingText,
    unreadIndicator: colors.green,
    placeholderText: colors.darkIcons,
    heroCard: colors.blue400,
    uploadPreviewActivityIndicator: colors.darkHighlightBackground,
    dropUIBG: 'rgba(6,27,9,0.92)',
    dropTransparentOverlay: 'rgba(255,255,255,0)',
    checkBox: colors.green,
    pickerOptionsTextColor: colors.darkPrimaryText,
    imageCropBackgroundColor: colors.darkIcons,
    fallbackIconColor: colors.green700,
    reactionActiveBackground: colors.green600,
    reactionActiveText: colors.green100,
    badgeAdHoc: colors.pink600,
    badgeAdHocHover: colors.pink700,
    mentionText: colors.blue100,
    mentionBG: colors.blue600,
    ourMentionText: colors.green100,
    ourMentionBG: colors.green600,
};

darkTheme.PAGE_BACKGROUND_COLORS = {
    [SCREENS.HOME]: darkTheme.sidebar,
    [SCREENS.SETTINGS.PREFERENCES]: colors.blue500,
};

export default darkTheme;
