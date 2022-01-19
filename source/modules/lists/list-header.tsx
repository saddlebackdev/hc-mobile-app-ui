// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps} from './list-header.types';

// Shared
import Heading from '../heading/heading';

// Styles
const StyledWrapper = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const StyledLink = Styled.TouchableOpacity``;
const StyledLinkLabel = Styled(Heading)`
  color: ${({theme}) => theme.colors.primaryLight};
`;

// Component
export const ListHeader: React.FC<IProps> = ({
  title,
  linkLabel,
  onLinkPress,
}): React.ReactElement => {
  return (
    <StyledWrapper>
      <Heading testID="title" variant="h1">
        {title}
      </Heading>

      {linkLabel && (
        <StyledLink testID="link" activeOpacity={0.75} onPress={onLinkPress}>
          <StyledLinkLabel variant="h6" testID="link-label">
            {linkLabel}
          </StyledLinkLabel>
        </StyledLink>
      )}
    </StyledWrapper>
  );
};

// Exports
export default ListHeader;
