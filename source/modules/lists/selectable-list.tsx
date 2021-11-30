// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledItem, IProps} from './selectable-list.types';

// Shared
import Text from '../text/text';
import Icon from '../icon/icon';
import {majorScale, minorScale} from '../scales';
import Divider from '../divider/divider';

// Styles
const StyledFlatList = Styled.FlatList``;
const StyledItem = Styled.TouchableOpacity<IStyledItem>`
  background: ${({$isSelected, theme}) => {
    return $isSelected ? theme.colors.primaryLight : theme.colors.white;
  }};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: ${minorScale(2.75)}px;
  padding-horizontal: ${majorScale(2)}px;
  padding-bottom: ${minorScale(2.5)}px;
`;
const StyledItemLabel = Styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => theme.typography.sizes.small}px;
`;

// Component
export const NestableList: React.FC<IProps> = ({
  items,
  selected,
}): React.ReactElement => {
  // Key Extractor
  const keyExtractor = (item): string => {
    return item.id;
  };

  // Render Item
  const renderItem = ({item}): any => {
    const isSelected = item.id === selected;

    return (
      <StyledItem
        activeOpacity={0.75}
        $isSelected={isSelected}
        testID="selectable-list-item"
        onPress={item.onPress}>
        <StyledItemLabel
          testID="selectable-list-item-label"
          inversed={isSelected}>
          {item.label}
        </StyledItemLabel>
        {isSelected && <Icon size={12} color="white" type="tick" />}
      </StyledItem>
    );
  };

  return (
    <React.Fragment>
      <Divider />
      <StyledFlatList
        data={items}
        testID="selectable-list"
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
      <Divider />
    </React.Fragment>
  );
};

// Exports
export default NestableList;
