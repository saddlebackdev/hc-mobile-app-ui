// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledItem, IListItemProps, IProps} from './selectable-list.types';

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
  font-weight: 500;
  font-size: ${({theme}) => theme.typography.sizes.small}px;
`;

// Component
const SelectableListItem: React.FC<IListItemProps> = ({
  onPress,
  label,
  isSelected,
}): React.ReactElement => (
  <StyledItem
    testID="item"
    activeOpacity={0.75}
    $isSelected={isSelected}
    onPress={onPress}>
    <StyledItemLabel testID="item-label" inversed={isSelected}>
      {label}
    </StyledItemLabel>
    {isSelected && <Icon size={12} color="white" type="tick" />}
  </StyledItem>
);

// Component
export const SelectableList: React.FC<IProps> = ({
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
      <SelectableListItem
        label={item.label}
        isSelected={isSelected}
        onPress={item.onPress}
      />
    );
  };

  return (
    <React.Fragment>
      <Divider />
      <StyledFlatList
        data={items}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        testID="list"
      />
      <Divider />
    </React.Fragment>
  );
};

// Exports
export default SelectableList;
