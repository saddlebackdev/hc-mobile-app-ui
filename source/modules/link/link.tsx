// Modules
import React from 'react';
import Styled from 'styled-components/native';
import {Linking} from 'react-native';

// Types
import {IProps} from './link.types';

// Shared
import Text from '../text/text';

// Styles
const StyledWrapper = Styled.TouchableOpacity``;
const StyledLabel = Styled(Text)`
  color: ${({theme}) => theme.colors.primaryLight};
  font-weight: 500;
`;

// Component
export const Link: React.FC<IProps> = ({
  label,
  children,
  onLinkPress,
  to,
}): React.ReactElement => {
  // On Press
  const onPress = async () => {
    try {
      if (onLinkPress) {
        return onLinkPress(to);
      }

      if (!to) {
        return;
      }

      const canOpenLink = await Linking.canOpenURL(to);

      if (!canOpenLink) {
        return;
      }

      Linking.openURL(to);
    } catch (exception) {
      // eslint-disable-next-line no-console
      console.log(exception);
    }
  };

  return (
    <StyledWrapper activeOpacity={0.75} onPress={onPress} testID="link">
      {label ? (
        <StyledLabel testID="link-label">{label}</StyledLabel>
      ) : (
        children
      )}
    </StyledWrapper>
  );
};

// Exports
export default Link;
