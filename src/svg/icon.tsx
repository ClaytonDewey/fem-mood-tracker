import {
  IconAvatar,
  IconCheck,
  IconChevron,
  IconHappy,
  IconHappyColor,
  IconLogo,
  IconLogout,
  IconNeutral,
  IconNeutralColor,
  IconPattern,
  IconQuote,
  IconReflection,
  IconSad,
  IconSadColor,
  IconSettings,
  IconSleep,
  IconTrendDecrease,
  IconTrendIncrease,
  IconTrendSame,
  IconVeryHappy,
  IconVeryHappyColor,
  IconVerySad,
  IconVerySadColor,
} from '.';

export const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'avatar':
      return <IconAvatar />;
    case 'check':
      return <IconCheck />;
    case 'chevron':
      return <IconChevron />;
    case 'happy':
      return <IconHappy />;
    case 'happy-color':
      return <IconHappyColor />;
    case 'logo':
      return <IconLogo />;
    case 'logout':
      return <IconLogout />;
    case 'neutral':
      return <IconNeutral />;
    case 'neutral-color':
      return <IconNeutralColor />;
    case 'pattern':
      return <IconPattern />;
    case 'quote':
      return <IconQuote />;
    case 'reflection':
      return <IconReflection />;
    case 'sad':
      return <IconSad />;
    case 'sad-color':
      return <IconSadColor />;
    case 'settings':
      return <IconSettings />;
    case 'sleep':
      return <IconSleep />;
    case 'trend-decrease':
      return <IconTrendDecrease />;
    case 'trend-increase':
      return <IconTrendIncrease />;
    case 'trend-same':
      return <IconTrendSame />;
    case 'very-happy':
      return <IconVeryHappy />;
    case 'very-happy-color':
      return <IconVeryHappyColor />;
    case 'very-sad':
      return <IconVerySad />;
    case 'very-sad-color':
      return <IconVerySadColor />;
    default:
      return null;
  }
};

export default Icon;
