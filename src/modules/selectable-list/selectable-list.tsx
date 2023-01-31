// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledItem, IListItemProps, IProps} from './selectable-list.types';

// Shared
import Text from '../text/text';
import Icon from '../icon/icon';
import {majorScale, minorScale} from '../scales';
import Divider from '../divider/divider';
import {View} from 'react-native';

// Styles
const StyledList = Styled.View``;
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
const StyledItemLabel = Styled(Text)``;

// Component
export const SelectableListItem: React.FC<IListItemProps> = ({
  onPress,
  label,
  isSelected,
}): React.ReactElement => (
  <StyledItem
    testID="item"
    activeOpacity={0.75}
    $isSelected={isSelected}
    onPress={onPress}>
    <StyledItemLabel
      small
      weight="semiBold"
      inversed={isSelected}
      testID="item-label">
      {label}
    </StyledItemLabel>
    {isSelected && <Icon size={12} color="white" type="tick" />}
  </StyledItem>
);

// Component
export const SelectableList: React.FC<IProps> = ({
  items,
  selected,
  noDivider,
}): React.ReactElement => {
  // Render Item
  const renderItem = (item): any => {
    const isSelected = Array.isArray(selected)
      ? selected.includes(item.id)
      : selected === item.id;

    return (
      <SelectableListItem
        label={item.label}
        isSelected={isSelected}
        onPress={item.onPress}
      />
    );
  };

  return (
    <View testID="list">
      {!noDivider ? <Divider /> : null}
      {items.map(item => (
        <StyledList key={item.id}>
          {renderItem(item)}
        </StyledList>
      ))}
      {!noDivider ? <Divider /> : null}
    </View>
  );
};

// Exports
export default SelectableList;
