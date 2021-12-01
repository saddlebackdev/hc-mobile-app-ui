// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledItem, IProps} from './horizontal-list.types';

// Shared
import Text from '../text/text';
import Heading from '../heading/heading';
import {majorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View``;
const StyledHeader = Styled.View`
  flex-direction: row;
  margin-bottom: ${majorScale(2)}px;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeaderTitle = Styled(Heading)``;
const StyledHeaderLink = Styled.TouchableOpacity``;
const StyledHeaderLinkLabel = Styled(Text)`
  color: ${({theme}) => theme.colors.primaryLight};
  font-size: ${({theme}) => theme.typography.sizes.small}px;
  font-weight: 500;
`;
const StyledFlatList = Styled.FlatList``;
const StyledItem = Styled.View<IStyledItem>`
  margin-right: ${({$gutterSize, $isLastChild}) => {
    return $isLastChild ? 0 : $gutterSize;
  }}px;
`;

// Component
export const HorizontalList: React.FC<IProps> = ({
  title,
  linkLabel,
  onLinkPress,
  gutterSize = 0,
  children,
}): React.ReactElement => {
  // List Items
  const listItems = React.Children.map(children, child => child);

  // Key Extractor
  const keyExtractor = (item): string => {
    return item.id;
  };

  // Render Item
  const renderItem = ({item, index}): React.ReactElement => {
    let isLastChild = false;

    if (listItems) {
      isLastChild = listItems.length - 1 === index;
    }

    return (
      <StyledItem
        $gutterSize={gutterSize}
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
        <StyledHeader>
          <StyledHeaderTitle testID="title" variant="h2">
            {title}
          </StyledHeaderTitle>

          {linkLabel && (
            <StyledHeaderLink
              testID="link"
              activeOpacity={0.75}
              onPress={onLinkPress}>
              <StyledHeaderLinkLabel testID="link-label">
                {linkLabel}
              </StyledHeaderLinkLabel>
            </StyledHeaderLink>
          )}
        </StyledHeader>
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
