// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps} from './card-list.types';

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
export const CardList: React.FC<IProps> = ({items}): React.ReactElement => {
  // Key Extractor
  const keyExtractor = (item): string => {
    return item.id;
  };

  // Render Item
  const renderItem = ({item}): React.ReactElement => {
    const hasTags = !!item?.tags;

    return (
      <StyledCard activeOpacity={0.75} onPress={item.onPress}>
        <StyledCardPhotoWrapper>
          <StyledPhoto source={{uri: item.photoUrl}} />
        </StyledCardPhotoWrapper>
        <StyledCardDetailsWrapper>
          <StyledCardDetailsRow>
            <StyledTitle>{item.title}</StyledTitle>
            <StyledSubTitle isCaption>{item.subTitle}</StyledSubTitle>
          </StyledCardDetailsRow>
          <StyledCardDetailsRow>
            <StyledDescription numberOfLines={2}>
              {item.description}
            </StyledDescription>
          </StyledCardDetailsRow>
          <StyledCardDetailsRow>
            {hasTags && (
              <StyledTags>
                {item.tags.map((tag, ndx) => {
                  const isLastChild = item.tags.length - 1 === ndx;

                  if (isLastChild) {
                    return tag;
                  }

                  return `${tag}, `;
                })}
              </StyledTags>
            )}
          </StyledCardDetailsRow>
        </StyledCardDetailsWrapper>
      </StyledCard>
    );
  };

  return (
    <StyledFlatList
      data={items}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

// Exports
export default CardList;
