// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledWrapper, IProps} from './notification-center-item.types';

// Shared
import Text from '../text/text';
import Icon from '../icon/icon-external';
import {majorScale} from '../scales';

// Images
import IconSaddleback from '../../images/saddleback.svg';

// Styles
export const StyledWrapper = Styled.TouchableOpacity<IStyledWrapper>`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: ${({$hasTopMargin = true}) => {
    return $hasTopMargin ? majorScale(1) : 0;
  }}px;

  margin-bottom: ${({$hasBottomMargin = true}) => {
    return $hasBottomMargin ? majorScale(1) : 0;
  }}px;
`;
export const StyledIconWrapper = Styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.grayTwo};
  border-radius: 6px;
`;
export const StyledDetailsWrapper = Styled.View`
  width: 100%;
  padding-left: ${majorScale(2)}px;
`;
export const StyledRow = Styled.View`
  flex-direction: row;
  align-items: center;
`;
export const StyledTitleWrapper = Styled.View``;
export const StyledSubtitleWrapper = Styled.View`
  margin-top: -2px;
`;
export const StyledRedDot = Styled.View`
  width: 6px; height: 6px;
  background: ${({theme}) => theme.colors.dangerLight};
  margin-left: ${majorScale(0.5)}px;
  border-radius: 6px;
`;

// Component
export const NotificationCenterItem: React.FC<IProps> = ({
  title,
  subtitle,
  isUnread,
  iconFile,
  onPress,
}): React.ReactElement => (
  // @ts-ignore
  <StyledWrapper
    onPress={onPress}
    activeOpacity={0.75}
    testID="notification-center-item"
    $hasBottomMargin={false}>
    <StyledIconWrapper>
      <Icon file={iconFile || IconSaddleback} />
    </StyledIconWrapper>

    <StyledDetailsWrapper>
      {subtitle ? (
        <StyledRow>
          <StyledSubtitleWrapper>
            <Text variant="caption" muted>
              {subtitle}
            </Text>
          </StyledSubtitleWrapper>

          {isUnread && (
            <StyledRedDot testID="notification-center-item-unread-indicator" />
          )}
        </StyledRow>
      ) : null}

      <StyledTitleWrapper>
        <Text variant="body2">{title}</Text>
      </StyledTitleWrapper>
    </StyledDetailsWrapper>
  </StyledWrapper>
);

// Exports
export default NotificationCenterItem;
