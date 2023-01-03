// Modules
import * as React from 'react';
import {Animated, TouchableOpacity, Easing} from 'react-native';
import Styled from 'styled-components/native';

// Types
import {IProps} from './switch.types';

// Shared
import {defaultTheme} from '../theming/default-theme';

// Styles
export const Track = Styled.View`
  padding: 2px;
  width: 50px; height: 30px;
  border-radius: 100px;
  border-width: 1px;
`;
export const Thumb = Styled.View`
  width: 24px; height: 24px;
  background: ${({theme}) => theme.colors.white};
  justify-content: center;
  align-items: center;

  border-color: ${({theme}) => theme.colors.white};
  border-radius: 24px;
  border-width: 1px;
`;

// Animated Wrappers
const AnimatedTrack = Animated.createAnimatedComponent(Track);
const AnimatedThumb = Animated.createAnimatedComponent(Thumb);

// Component
export const Switch: React.FC<IProps> = ({
  onPress,
  color = 'success',
  isActive,
}): React.ReactElement => {
  // State
  // prettier-ignore
  const [translateX, setTranslateX] =
    React.useState<Animated.Value>(new Animated.Value(0));
  // prettier-ignore
  const [animTrackBackgroundColor, setAnimTrackBackgroundColor] =
    React.useState<Animated.Value>(new Animated.Value(0));
  // prettier-ignore
  const [animTrackBorderColor, setAnimTrackBorderColor] =
    React.useState<Animated.Value>(new Animated.Value(0));
  // prettier-ignore
  const [animThumbBorderColor, setAnimThumbBorderColor] =
    React.useState<Animated.Value>(new Animated.Value(0));
  // prettier-ignore
  const [animThumbBackgroundColor, setAnimThumbBackgroundColor] =
    React.useState<Animated.Value>(new Animated.Value(0));

  // Handle Switch Position
  // eslint-disable-next-line no-shadow
  const handleSwitchPosition = isActive => {
    const toValue = isActive ? 20 : 0;

    Animated.parallel([
      Animated.timing(animTrackBackgroundColor, {
        duration: 100,
        useNativeDriver: false,
        toValue,
      }),
      Animated.timing(animTrackBorderColor, {
        duration: 100,
        useNativeDriver: false,
        toValue,
      }),
      Animated.timing(animThumbBackgroundColor, {
        duration: 100,
        useNativeDriver: false,
        toValue,
      }),
      Animated.timing(animThumbBorderColor, {
        duration: 100,
        useNativeDriver: false,
        toValue,
      }),
      Animated.timing(translateX, {
        duration: 100,
        useNativeDriver: true,
        easing: Easing.linear,
        toValue,
      }),
    ]).start();
  };

  React.useEffect(() => {
    const toValue = isActive ? 20 : 0;

    setTranslateX(new Animated.Value(toValue));
    setAnimTrackBackgroundColor(new Animated.Value(toValue));
    setAnimThumbBackgroundColor(new Animated.Value(toValue));
    setAnimTrackBorderColor(new Animated.Value(toValue));
    setAnimThumbBorderColor(new Animated.Value(toValue));
  }, []);

  React.useEffect(() => {
    handleSwitchPosition(isActive);
  }, [isActive]);

  let intentColor;

  switch (color) {
    case 'primary':
      intentColor = defaultTheme.colors.primaryLight;
      break;
    case 'success':
      intentColor = defaultTheme.colors.successLight;
      break;
    default:
      intentColor = color || defaultTheme.colors.secondaryLight;
  }

  const trackBackgroundColor = animTrackBackgroundColor.interpolate({
    inputRange: [0, 20],
    outputRange: [defaultTheme.colors.grayThree, intentColor],
  });
  const trackBorderColor = animTrackBorderColor.interpolate({
    inputRange: [0, 20],
    outputRange: [defaultTheme.colors.grayThree, intentColor],
  });

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <AnimatedTrack
        style={{
          backgroundColor: trackBackgroundColor,
          borderColor: trackBorderColor,
        }}>
        <Animated.View style={{transform: [{translateX}]}}>
          <AnimatedThumb />
        </Animated.View>
      </AnimatedTrack>
    </TouchableOpacity>
  );
};

// Exports
export default Switch;
