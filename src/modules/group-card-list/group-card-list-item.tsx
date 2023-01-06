// Modules
import * as React from 'react';
import {Platform, StyleSheet, ViewStyle} from 'react-native';
import Styled from 'styled-components/native';
import LinearGradientView from '../linear-gradient/linear-gradient-view';
import Icon from '../icon/icon-external';
import Text from '../text/text';
import {minorScale, majorScale} from '../scales';
import defaultTheme from '../theming/default-theme';

// Types
import {
  IProps,
  IStyledDivider,
  IStyledTouchable,
  IStyledContent,
} from './group-card-list-item.types';

// Styles
const viewShadow = Platform.select({
  android: {elevation: 4},
  ios: {
    shadowColor: defaultTheme.colors.grayFive,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

// Wrapper
export const Wrapper = Styled.View`
  flex: 1;
  margin-vertical: ${minorScale(1.1)};
  opacity: 1;
  border-radius: 8px;
`;
// Header
export const Header = {
  Touchable: Styled.TouchableOpacity<IStyledTouchable>`
    flex: 1;
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
  Content: Styled.View<IStyledContent>`
    flex: 1;
    margin-left: ${({$isExpanded}) => {
      return $isExpanded ? '0px' : `-${minorScale(1)}px;`;
    }};
    padding-horizontal: ${majorScale(2)}px;
    padding-vertical: ${majorScale(1)}px;
    justify-content: center;
  `,
  Row: Styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Name: Styled.View`
    flex-direction: row;
    margin-bottom: ${majorScale(1)}px;
  `,
  Title: Styled(Text)`
    flex: 1;
  `,
  LinkText: Styled(Text)`
    text-decoration-line: underline;
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
  linkLabel,
  onLinkPress,
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

  const renderHeaderContent = (inversed: boolean) => {
    return (
      <Header.Content $isExpanded={inversed}>
        <Header.Row>
          <Header.Name>
            <Header.Title
              weight={linkLabel ? (inversed ? 'regular' : 'light') : 'bold'}
              inversed={inversed}>
              {title}
            </Header.Title>
            {linkLabel && (
              <Header.LinkText
                weight="bold"
                color="primaryLight"
                variant="body2"
                inversed={inversed}
                onPress={onLinkPress}>
                {linkLabel}
              </Header.LinkText>
            )}
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
      <Wrapper style={Platform.select({ios: viewShadow})} testID="group-card">
        <Header.Touchable
          style={Platform.select({android: viewShadow})}
          onPress={toggleState}
          activeOpacity={0.75}>
          {/* Gradient */}
          <Header.GradientWrapper>
            <LinearGradientView
              radius={0}
              viewStyle={leftLinearGradientViewStyle}
              gradientColors={gradientColors}
            />
          </Header.GradientWrapper>

          {renderHeaderContent(isExpanded)}
        </Header.Touchable>
      </Wrapper>
    );
  }

  return (
    <Wrapper style={Platform.select({ios: viewShadow})} testID="group-card">
      <Header.Touchable
        style={Platform.select({android: viewShadow})}
        onPress={toggleState}
        activeOpacity={0.75}
        $isExpanded>
        {/* Gradient */}
        <LinearGradientView
          radius={0}
          viewStyle={fullLinearGradientViewStyle}
          gradientColors={gradientColors}>
          {renderHeaderContent(isExpanded)}
        </LinearGradientView>
      </Header.Touchable>

      {/* Content */}
      <Content
        style={Platform.select({android: viewShadow})}
        testID="card-expanded-content">
        {expandedElement}
      </Content>
    </Wrapper>
  );
};

// Exports
export default React.memo(GroupsListItem);
