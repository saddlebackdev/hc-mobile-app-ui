// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {ICardListItemProps, IProps} from './card-list.types';

// Shared
import Text from '../text/text';
import Divider from '../divider/divider';
import {majorScale} from '../scales';

// Styles
const StyledFlatList = Styled.FlatList``;
const StyledCard = Styled.TouchableOpacity`
  flex-direction: row;

  padding-vertical: ${majorScale(2)}px;
`;
const StyledCardPhotoWrapper = Styled.View`
  width: 35%;
`;
const StyledCardDetailsWrapper = Styled.View`
  width: 65%;
  justify-content: space-between;
`;
const StyledCardDetailsRow = Styled.View``;
const StyledPhoto = Styled.Image`
  width: 96px; height: 96px;
  border-radius: 8px;
`;
const StyledTitle = Styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => theme.typography.sizes.small}px;
`;
const StyledSubTitle = Styled(Text)`
  font-size: 12px;
  margin-top: 4px;
`;
const StyledDescription = Styled(Text)`
  font-size: ${({theme}) => theme.typography.sizes.small}px;
`;
const StyledTags = Styled(Text)`
  font-size: 12px;
  font-style: italic;
  font-weight: bold;
  color: ${({theme}) => theme.colors.grayFour};
`;

// Component
export const CardListItem: React.FC<ICardListItemProps> = ({
  photoUrl,
  title,
  subTitle,
  description,
  tags,
  onPress,
}): React.ReactElement => {
  return (
    <StyledCard activeOpacity={0.75} onPress={onPress} testID="list-item">
      <StyledCardPhotoWrapper>
        <StyledPhoto source={{uri: photoUrl}} testID="item-photo" />
      </StyledCardPhotoWrapper>
      <StyledCardDetailsWrapper>
        <StyledCardDetailsRow>
          <StyledTitle testID="item-title">{title}</StyledTitle>
          <StyledSubTitle isCaption testID="item-subtitle">
            {subTitle}
          </StyledSubTitle>
        </StyledCardDetailsRow>
        <StyledCardDetailsRow>
          <StyledDescription numberOfLines={2} testID="item-description">
            {description}
          </StyledDescription>
        </StyledCardDetailsRow>
        <StyledCardDetailsRow>
          {tags && (
            <StyledTags testID="item-tags">
              {tags.map((tag, ndx) => {
                const isLastChild = tags.length - 1 === ndx;

                return isLastChild ? tag : `${tag} `;
              })}
            </StyledTags>
          )}
        </StyledCardDetailsRow>
      </StyledCardDetailsWrapper>
    </StyledCard>
  );
};

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
      title={item.title}
      subTitle={item.subTitle}
      description={item.description}
      tags={item.tags}
      onPress={item.onPress}
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
