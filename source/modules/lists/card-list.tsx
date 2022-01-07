// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps} from './card-list.types';

// Shared
import CardListItem from './card-list-item';
import Divider from '../divider/divider';

// Styles
const StyledFlatList = Styled.FlatList``;

// Component
export const CardList: React.FC<IProps> = ({items}): React.ReactElement => {
  // Key Extractor
  const keyExtractor = (item): string => {
    return item.id;
  };

  // Render Item
  const renderItem = ({item}): React.ReactElement => (
    <CardListItem
      photoUrl={item.photoUrl}
      fallbackImage={item.fallbackImage}
      title={item.title}
      subTitle={item.subTitle}
      description={item.description}
      tags={item.tags}
      onPress={item.onPress}
      marker={item.marker}
    />
  );

  return (
    <StyledFlatList
      data={items}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
      testID="list"
    />
  );
};

// Exports
export default CardList;
