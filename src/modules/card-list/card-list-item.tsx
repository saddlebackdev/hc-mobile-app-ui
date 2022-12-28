// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps} from './card-list-item.types';

// Shared
import Text from '../text/text';
import Heading from '../heading/heading';
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
`;
const StyledCardDetailsRow = Styled.View``;
const StyledPhoto = Styled.Image`
  width: 96px; height: 96px;
  border-radius: 8px;
`;
const StyledTitle = Styled(Heading)``;
const StyledSubTitle = Styled(Text)`
  font-size: 12px;
  margin-top: 8px;
`;
const StyledDate = Styled(Text)`
  margin-top: 8px;
`;
const Styledtime = Styled(Text)`
  margin-top: 8px;
`;
const StyledDescription = Styled(Text)`
  margin-top: 8px;
  font-size: ${({theme}) => theme.typography.sizes.small}px;
`;
const StyledTags = Styled(Text)`
  margin-top: 8px;
`;
// Component
export const CardListItem: React.FC<IProps> = ({
  photoUrl,
  fallbackImage,
  title,
  marker = null,
  timePeriod = null,
  subTitle,
  eventDate,
  eventTime,
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
            <StyledTitle variant="h4" testID="item-title">
              {title}
            </StyledTitle>
            {subTitle ? (
              <StyledSubTitle variant="subtitle2" testID="item-subtitle">
                {subTitle}
              </StyledSubTitle>
            ) : null}
            {eventDate ? (
              <StyledDate
                weight="bold"
                muted
                variant="subtitle2"
                testID="item-eventdate">
                {eventDate}
                {eventTime ? (
                  <Styledtime variant="subtitle2" muted testID="item-eventtime">
                    {eventTime}
                  </Styledtime>
                ) : null}
              </StyledDate>
            ) : null}
            {timePeriod ? (
              <StyledCardMarker>{timePeriod}</StyledCardMarker>
            ) : null}
          </StyledCardDetailsRow>
          {description ? (
            <StyledCardDetailsRow>
              <StyledDescription
                numberOfLines={2}
                variant="subtitle2"
                muted
                testID="item-description">
                {description}
              </StyledDescription>
            </StyledCardDetailsRow>
          ) : null}
          {tags ? (
            <StyledCardDetailsRow>
              <StyledTags
                muted
                italic
                variant="subtitle2"
                weight="bold"
                testID="item-tags">
                {tags.map((tag, ndx) => {
                  const isLastChild = tags.length - 1 === ndx;

                  return isLastChild ? tag : `${tag} `;
                })}
              </StyledTags>
            </StyledCardDetailsRow>
          ) : null}
        </StyledCardDetailsWrapper>
      </StyledCardContent>

      {marker ? <StyledCardMarker>{marker}</StyledCardMarker> : null}
    </StyledCard>
  </React.Fragment>
);
// Exports
export default CardListItem;
