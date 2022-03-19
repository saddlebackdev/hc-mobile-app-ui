// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledHeader, IStyledItem, IProps} from './horizontal-list.types';

// Shared
import Heading from '../heading/heading';
import {majorScale} from '../scales';
import Text from '../text/text';

// Styles
const StyledWrapper = Styled.View``;
const StyledHeader = Styled.View<IStyledHeader>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-horizontal: ${({$paddedHeader}) => {
    return `${$paddedHeader ? majorScale(2) : 0}px`;
  }};
`;
const StyledHeaderTitle = Styled(Heading)``;
const StyledHeaderText = Styled(Text)`
  margin-bottom: ${majorScale(2)}px;
  margin-left: ${majorScale(2)}px;
`;
const StyledHeaderLink = Styled.TouchableOpacity``;
const StyledHeaderLinkLabel = Styled(Heading)`
  color: ${({theme}) => theme.colors.primaryLight};
`;
const StyledFlatList = Styled.FlatList``;
const StyledItem = Styled.View<IStyledItem>`
  margin-left: ${({$hasPaddedHeader, $isFirstChild}) => {
    if (!$isFirstChild) {
      return '0px';
    }

    if ($hasPaddedHeader) {
      return `${majorScale(2)}px`;
    }

    return '0px';
  }};

  margin-right: ${({$gutterSize, $hasPaddedHeader, $isLastChild}) => {
    if (!$isLastChild) {
      return `${$gutterSize}px`;
    }

    if ($hasPaddedHeader) {
      return `${majorScale(2)}px`;
    }

    return '0px';
  }};
`;

// Component
export const HorizontalList: React.FC<IProps> = ({
  title,
  subTitle,
  linkLabel,
  onLinkPress,
  gutterSize = 0,
  paddedHeader = false,
  children,
}): React.ReactElement => {
  // List Items
  const listItems = React.Children.map(children, child => child);

  // Key Extractor
  const keyExtractor = (): string => {
    const random = Math.random();
    const timestamp = new Date().getUTCMilliseconds();

    return `horizontal-list-item-${random}-${timestamp}`;
  };

  // Render Item
  const renderItem = ({item, index}): React.ReactElement => {
    let isFirstChild = false,
      isLastChild = false;

    if (listItems) {
      isFirstChild = index === 0;
      isLastChild = listItems.length - 1 === index;
    }

    return (
      <StyledItem
        $gutterSize={gutterSize}
        $hasPaddedHeader={paddedHeader}
        $isFirstChild={isFirstChild}
        $isLastChild={isLastChild}
        testID="list-item">
        {item}
      </StyledItem>
    );
  };

  const shouldShowHeader = title || linkLabel;

  return (
    <StyledWrapper>
      {/* Header */}
      {shouldShowHeader && (
        <StyledWrapper>
          <StyledHeader $paddedHeader={paddedHeader}>
            <StyledHeaderTitle testID="title" variant="h1">
              {title}
            </StyledHeaderTitle>

            {linkLabel && (
              <StyledHeaderLink
                testID="link"
                activeOpacity={0.75}
                onPress={onLinkPress}>
                <StyledHeaderLinkLabel variant="h6" testID="link-label">
                  {linkLabel}
                </StyledHeaderLinkLabel>
              </StyledHeaderLink>
            )}
          </StyledHeader>
          <StyledHeaderText>{subTitle}</StyledHeaderText>
        </StyledWrapper>
      )}

      {/* List */}
      <StyledFlatList
        data={listItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        testID="list"
        horizontal
      />
    </StyledWrapper>
  );
};

// Exports
export default HorizontalList;
