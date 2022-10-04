// Modules
import * as React from 'react';
import {Platform, StyleSheet, ViewStyle} from 'react-native';
import Styled from 'styled-components/native';
import LinearGradientView from '../linear-gradient/linear-gradient-view';
import Heading from '../heading/heading';
import Icon from '../icon/icon-external';
import Text from '../text/text';
import {minorScale, majorScale} from '../scales';

// Types
import {
  IProps,
  IStyledDivider,
  IStyledTouchable,
} from './group-card-list-item.types';

// Styles
const viewShadow = Platform.select({
  android: {elevation: 4},
  ios: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.11,
    shadowRadius: 11,
  },
});

// Wrapper
export const Wrapper = Styled.View`
  width: 100%;
  margin-vertical: ${minorScale(1.1)};
  opacity: 1;
`;
// Header
export const Header = {
  Touchable: Styled.TouchableOpacity<IStyledTouchable>`
    width: 100%;
    flex-direction: row;
    overflow: hidden;
    background: ${({theme}) => theme.colors.white};

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    border-bottom-left-radius: ${({$isExpanded}) => {
      return $isExpanded ? '0px' : '8px';
    }};
    border-bottom-right-radius: ${({$isExpanded}) => {
      return $isExpanded ? '0px' : '8px';
    }};
  `,
  GradientWrapper: Styled.View`
    overflow: hidden;
    height: 100%;
    width: ${minorScale(1)}px;
  `,
  Content: Styled.View`
    width: auto;
    margin-left: -${minorScale(1)}px;
    padding-horizontal: ${majorScale(2)}px;
    padding-vertical: ${majorScale(1)}px;
    justify-content: center;
  `,
  Row: Styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Name: Styled.View`
    margin-bottom: ${majorScale(1)}px;
  `,
  MetaData: Styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Icon: Styled.View`
    margin-right: ${majorScale(1)}px;
  `,
  Divider: Styled.View<IStyledDivider>`
    width: ${({$showDivider}) => ($showDivider ? '1px' : '0px')};;
    height: 110%;
    background: ${({theme}) => theme.colors.grayThree};
    margin-horizontal: ${majorScale(1.5)}px;
  `,
};

// Content
export const Content = Styled.View`
  flex-wrap: nowrap;
  padding: ${majorScale(2)}px;
  padding-top: ${majorScale(3)}px;
  background: ${({theme}) => theme.colors.white};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const leftLinearGradientViewStyle = StyleSheet.flatten<ViewStyle>({
  flex: 1,
  width: '100%',
});

const fullLinearGradientViewStyle = StyleSheet.flatten<ViewStyle>({
  width: '100%',
  justifyContent: 'center',
  overflow: 'hidden',
});

// Component
export const GroupsListItem: React.FC<IProps> = ({
  title,
  subTitle,
  leftIcon,
  leftIconColor,
  leftText,
  showDivider,
  rightIcon,
  rightIconColor,
  rightText,
  gradientColors,
  expandedElement,
}): React.ReactElement => {
  // State
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  // Toggle State
  const toggleState = (): void => {
    setIsExpanded(!isExpanded);
  };

  const startGradientColor =
    gradientColors && gradientColors.length > 0 ? gradientColors[0] : '#A6CAE4';
  const endGradientColor =
    gradientColors && gradientColors.length > 1 ? gradientColors[1] : '#7772C0';

  const renderHeaderContent = (inversed: boolean) => {
    return (
      <Header.Content>
        <Header.Row>
          <Header.Name>
            <Heading variant="h3" inversed={inversed}>
              {title}
              {subTitle && <Text inversed={inversed}>{` ${subTitle}`}</Text>}
            </Heading>
          </Header.Name>
        </Header.Row>

        <Header.Row>
          {leftText ? (
            <Header.MetaData>
              <Header.Icon>
                <Icon
                  testID="card-left-icon"
                  file={leftIcon}
                  size={16}
                  color={inversed ? 'white' : leftIconColor ?? 'black'}
                />
              </Header.Icon>

              <Text variant="caption" muted={!inversed} inversed={inversed}>
                {leftText}
              </Text>
            </Header.MetaData>
          ) : null}

          {<Header.Divider $showDivider={showDivider} />}

          {rightText ? (
            <Header.MetaData>
              <Header.Icon>
                <Icon
                  testID="card-right-icon"
                  file={rightIcon}
                  size={16}
                  color={inversed ? 'white' : rightIconColor ?? 'black'}
                />
              </Header.Icon>

              <Text variant="caption" muted={!inversed} inversed={inversed}>
                {rightText}
              </Text>
            </Header.MetaData>
          ) : null}
        </Header.Row>
      </Header.Content>
    );
  };

  if (!isExpanded) {
    return (
      <Wrapper testID="group-card">
        <Header.Touchable
          style={viewShadow}
          onPress={toggleState}
          activeOpacity={0.75}>
          {/* Gradient */}
          <Header.GradientWrapper>
            <LinearGradientView
              radius={0}
              viewStyle={leftLinearGradientViewStyle}
              gradientColors={[
                {offset: 0, color: startGradientColor},
                {offset: 1, color: endGradientColor},
              ]}
            />
          </Header.GradientWrapper>

          {renderHeaderContent(isExpanded)}
        </Header.Touchable>
      </Wrapper>
    );
  }

  return (
    <Wrapper testID="group-card">
      <Header.Touchable
        style={viewShadow}
        onPress={toggleState}
        activeOpacity={0.75}
        $isExpanded>
        {/* Gradient */}
        <Header.GradientWrapper>
          <LinearGradientView
            radius={0}
            viewStyle={leftLinearGradientViewStyle}
            gradientColors={[
              {offset: 0, color: startGradientColor},
              {offset: 1, color: endGradientColor},
            ]}
          />
        </Header.GradientWrapper>

        <LinearGradientView
          radius={0}
          viewStyle={fullLinearGradientViewStyle}
          gradientColors={[
            {offset: 0, color: startGradientColor},
            {offset: 1, color: endGradientColor},
          ]}>
          {renderHeaderContent(isExpanded)}
        </LinearGradientView>
      </Header.Touchable>

      {/* Content */}
      <Content testID="card-expanded-content" style={viewShadow}>
        {expandedElement}
      </Content>
    </Wrapper>
  );
};

// Exports
export default React.memo(GroupsListItem);
