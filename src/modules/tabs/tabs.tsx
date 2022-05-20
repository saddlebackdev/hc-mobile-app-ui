// Modules
import * as React from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

// Types
import {IProps, IStyledText, IStyledTouchable, ITab} from './tabs.types';

// Shared
import Text from '../text/text';
import majorScale from '../scales/major-scale';
import Heading from '../heading/heading';

// Styles
const StyledWrapper = Styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: ${majorScale(1)}px;
`;
const StyledFlatList = Styled(FlatList as new () => FlatList<ITab>)``;
const StyledTouchable = Styled.TouchableOpacity<IStyledTouchable>`
  margin-left: ${({$isFirstChild}) => ($isFirstChild ? 0 : majorScale(1))}px;
  margin-right: ${({$isLastChild}) => ($isLastChild ? 0 : majorScale(1))}px;
`;
const StyledLabel = Styled(Text)<IStyledText>`
  color: ${({$isActive, theme}) => {
    return $isActive ? theme.colors.primaryLight : theme.colors.grayFour;
  }};
`;
const StyledLink = Styled.TouchableOpacity``;
const StyledLinkLabel = Styled(Heading)`
  color: ${({theme}) => theme.colors.primaryLight};
  padding-left: ${majorScale(1)}px;
`;

// Component
export const Tabs: React.FC<IProps> = ({
  items,
  onChange,
  selected,
  linkLabel,
  onLinkPress,
}): React.ReactElement => (
  <StyledWrapper>
    <StyledFlatList
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const isFirstChild = index === 0;
        const isLastChild = index === items.length - 1;

        const isActive = item.value === selected;

        return (
          <StyledTouchable
            accessible
            key={item.label}
            testID={`tab-${item.value}`}
            accessibilityLabel={`tab-${item.value}`}
            onPress={() => onChange(item)}
            $isFirstChild={isFirstChild}
            $isLastChild={isLastChild}
            $isActive={isActive}>
            <StyledLabel $isActive={isActive}>{item.label}</StyledLabel>
          </StyledTouchable>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />

    {linkLabel && (
      <StyledLink
        testID="link"
        activeOpacity={0.75}
        onPress={() => onLinkPress!()}>
        <StyledLinkLabel variant="h6" testID="link-label">
          {linkLabel}
        </StyledLinkLabel>
      </StyledLink>
    )}
  </StyledWrapper>
);

// Exports
export default Tabs;
