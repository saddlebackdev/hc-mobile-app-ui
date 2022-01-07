// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps} from './card-list-item.types';

// Shared
import Text from '../text/text';
import {majorScale} from '../scales';

// Styles
const StyledCard = Styled.TouchableOpacity`
  flex-direction: column;
  padding-vertical: ${majorScale(2)}px;
`;
const StyledCardContent = Styled.View`
  flex-direction: row;
`;
const StyledCardMarker = Styled.View`
  margin-top: ${majorScale(1)}px;
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
export const CardListItem: React.FC<IProps> = ({
  photoUrl,
  fallbackImage,
  title,
  marker = null,
  subTitle,
  description,
  tags,
  onPress,
}): React.ReactElement => (
  <React.Fragment>
    <StyledCard activeOpacity={0.75} onPress={onPress} testID="list-item">
      <StyledCardContent>
        <StyledCardPhotoWrapper>
          <StyledPhoto
            source={photoUrl ? {uri: photoUrl} : fallbackImage}
            testID="item-photo"
          />
        </StyledCardPhotoWrapper>
        <StyledCardDetailsWrapper>
          <StyledCardDetailsRow>
            <StyledTitle testID="item-title">{title}</StyledTitle>
            <StyledSubTitle caption testID="item-subtitle">
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
      </StyledCardContent>

      {marker && <StyledCardMarker>{marker}</StyledCardMarker>}
    </StyledCard>
  </React.Fragment>
);

// Exports
export default CardListItem;
