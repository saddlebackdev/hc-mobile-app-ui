// Modules
import * as React from 'react';
import Styled from 'styled-components/native';
import {Linking} from 'react-native';

// Types
import {IProps} from './link.types';

// Shared
import Text from '../text/text';

// Styles
const StyledTouchable = Styled.TouchableOpacity``;
const StyledLabel = Styled(Text)`
  color: ${({theme}) => theme.colors.primaryLight};
`;

// Component
export const Link: React.FC<IProps> = ({
  label,
  children,
  onPress,
  to,
}): React.ReactElement => {
  // On Link Press
  const onLinkPress = async () => {
    try {
      if (onPress) {
        return onPress(to);
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
    <StyledTouchable activeOpacity={0.75} onPress={onLinkPress} testID="link">
      {label ? (
        <StyledLabel weight="semiBold" testID="link-label">
          {label}
        </StyledLabel>
      ) : (
        children
      )}
    </StyledTouchable>
  );
};

// Exports
export default Link;
