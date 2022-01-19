// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledTileIconWrapper, IProps} from './expandable-card.types';

// Shared
import Text from '../text/text';
import Icon from '../icon/icon';
import Heading from '../heading/heading';
import {LayoutUtils} from '../utilities';
import {majorScale} from '../scales';

// Styles
const StyledTileWrapper = Styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
const StyledTileIconWrapper = Styled.View<IStyledTileIconWrapper>`
  align-items: center;
  justify-content: center;
  width: 48px; height: 48px;
  margin-right: ${majorScale(1)}px;
  border-radius: 10px;

  background: ${({theme, $color = 'secondaryDark'}) => {
    return theme.colors[$color] || theme.colors.secondaryDark;
  }};
`;
const StyledTileDetails = Styled.View``;
const StyledTileTitle = Styled(Heading)``;
const StyledTileSubtitle = Styled(Text)`
  font-size: 12px;
  margin-bottom: -2px;
  margin-top: 3px;
`;
const StyledCardWrapper = Styled.View`
  width: 100%;
  background: ${({theme}) => theme.colors.white};
  border-radius: 10px;
`;
const StyledCardHeaderWrapper = Styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${majorScale(2)}px;
  padding-bottom: 0;
`;
const StyledCardHeaderTitle = Styled(Heading)``;
const StyledCardHeaderCloseButton = Styled.TouchableOpacity``;
const StyledCardContent = Styled.View`
  padding: ${majorScale(2)}px;
`;

// Component
export const ExpandableCard: React.FC<IProps> = ({
  title,
  subTitle,
  tileContent,
  tileColor = 'secondaryDark',
  inversed = false,
  onPress,
  isOpen,
  children,
}): React.ReactElement => {
  if (!isOpen) {
    return (
      <StyledTileWrapper
        activeOpacity={0.75}
        hitSlop={LayoutUtils.addHitSlop(12)}
        onPress={onPress}
        testID="tile">
        <StyledTileIconWrapper testID="tile-content" $color={tileColor}>
          {tileContent ? tileContent : null}
        </StyledTileIconWrapper>
        <StyledTileDetails>
          <StyledTileTitle variant="h4" inversed={inversed} testID="tile-title">
            {title}
          </StyledTileTitle>
          {subTitle && (
            <StyledTileSubtitle
              muted
              inversed={inversed}
              testID="tile-subtitle">
              {subTitle}
            </StyledTileSubtitle>
          )}
        </StyledTileDetails>
      </StyledTileWrapper>
    );
  }

  return (
    <StyledCardWrapper testID="card">
      <StyledCardHeaderWrapper>
        <StyledCardHeaderTitle variant="h4" testID="card-title">
          {title}
        </StyledCardHeaderTitle>
        <StyledCardHeaderCloseButton
          testID="card-close-button"
          activeOpacity={0.75}
          hitSlop={LayoutUtils.addHitSlop(12)}
          onPress={onPress}>
          <Icon type="shrink" size={14} />
        </StyledCardHeaderCloseButton>
      </StyledCardHeaderWrapper>
      <StyledCardContent testID="card-content">{children}</StyledCardContent>
    </StyledCardWrapper>
  );
};

// Exports
export default ExpandableCard;
