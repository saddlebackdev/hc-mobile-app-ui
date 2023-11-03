// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IStyledTileIconWrapper,
  IStyledCardWrapper,
  IProps,
} from './expandable-card.types';

// Shared
import Text from '../text/text';
import Icon from '../icon/icon';
import Heading from '../heading/heading';
import {LayoutUtils} from '../utilities';
import {majorScale} from '../scales';

// Styles
const StyledTileWrapper = Styled.TouchableOpacity`
  width: 70%;
  flex-direction: row;
  align-items: center;
`;
const StyledTileIconWrapper = Styled.View<IStyledTileIconWrapper>`
  align-items: center;
  justify-content: center;
  width: 58px; height: 58px;
  margin-right: ${majorScale(1)}px;
  border-radius: ${({$radius}) => $radius}px;
  background: ${({theme, $color = 'secondaryDark'}) => {
    return theme.colors[$color] || theme.colors.secondaryDark;
  }};
`;
const StyledTileDetails = Styled.View``;
const StyledTileTitle = Styled(Heading)``;
const StyledTileSubtitle = Styled(Text)`
  font-size: 14px;
  margin-bottom: 4px;
  margin-top: 4px;
`;
const StyledCardWrapper = Styled.View<IStyledCardWrapper>`
  width: 100%;
  background: ${({theme}) => theme.colors.white};
  border-radius: ${({$radius}) => $radius}px;
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
const StyledMarker = Styled.View`
  margin-top: 1px;
  margin-left: 10px;
  width: 12px; height: 12px;
  border-radius: 12px;
  overflow: hidden;
`;
const StyledRow = Styled.View`
  flex-direction: row;
  align-items: center;
`;

// Component
export const ExpandableCard: React.FC<IProps> = ({
  title,
  subTitle,
  tileContent,
  tileColor = 'secondaryDark',
  inversed = false,
  radius = 10,
  subTitleMarker,
  titleMarker,
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
        <StyledTileIconWrapper
          $radius={radius}
          testID="tile-content"
          $color={tileColor}>
          {tileContent ? tileContent : null}
        </StyledTileIconWrapper>
        <StyledTileDetails>
          {subTitle ? (
            <StyledRow>
              <StyledTileSubtitle inversed={inversed} testID="tile-subtitle">
                {subTitle}
              </StyledTileSubtitle>

              {subTitleMarker ? (
                <StyledMarker testID="subtitle-marker">
                  {subTitleMarker}
                </StyledMarker>
              ) : null}
            </StyledRow>
          ) : null}

          <StyledRow>
            <StyledTileTitle
              variant="h4"
              inversed={inversed}
              testID="tile-title">
              {title}
            </StyledTileTitle>

            {titleMarker ? (
              <StyledMarker testID="title-marker">{titleMarker}</StyledMarker>
            ) : null}
          </StyledRow>
        </StyledTileDetails>
      </StyledTileWrapper>
    );
  }

  return (
    <StyledCardWrapper $radius={radius} testID="card">
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
