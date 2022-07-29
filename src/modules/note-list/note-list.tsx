import * as React from 'react';
import {IProps} from './note-list.types';
import Styled from 'styled-components/native';
import {majorScale, minorScale} from '../scales';
import Text from '../text/text';
import {ViewStyle, StyleSheet} from 'react-native';
import ellipsis from '../../images/ellipsis.svg';
import IconSVG from '../icon/icon-external';
import IconNote from '../../images/Icon_note.svg';
import Heading from '../heading/heading';

const StyledWrapper = Styled.View`
flex: 1;
margin-left: ${majorScale(2)}px;
margin-right: ${majorScale(2)}px;
`;

const InnerStyledWrapper = Styled.View`
  flex-direction: row; 
  padding-vertical: ${majorScale(2)}px;
  align-self: center;
  flex : 1;
`;
const InnerStyledWrapperSub = Styled.View`
  margin-left: ${minorScale(1)}px;
  flex: 1;
`;

const InnerStyledWrapperIcons = Styled.View`
margin-top: 2;
`;

const WrapperViewCommon = Styled.View`
align-items: center;
justifyContent:space-between;
flex-direction: row; 
margin-bottom: ${majorScale(1)}px;
`;

const WrapperViewBottom = Styled.View`
align-items: center;
justifyContent:space-between;
flex-direction: row; 
`;

const StyledTextWrapper = Styled(Text)`
`;
const StyledHeadingWrapper = Styled(Heading)`
flex: 1;
`;

const WrapperViewHorizontalLine = Styled.View``;

const StyleHorizontalLine = StyleSheet.flatten<ViewStyle>({
  width: '100%',
  height: 1,
  backgroundColor: '#e6e6e6',
  alignSelf: 'center',
  flex: 1,
});

const StyledMoreLink = Styled.TouchableOpacity`
`;

export const NoteListItem: React.FC<IProps> = ({
  notedate,
  categoryName,
  subject,
  onDotMenuClicked,
  description,
  createdByName,
  leftElement,
}): React.ReactElement => {
  return (
    <StyledWrapper testID={'note-card'}>
      <InnerStyledWrapper>
        {/* Note and PIN icon in left side */}
        <InnerStyledWrapperIcons>
          <IconSVG file={IconNote} size={14} />
          {leftElement}
        </InnerStyledWrapperIcons>
        {/* note details */}
        <InnerStyledWrapperSub>
          {/* view note category and note created date */}
          <WrapperViewCommon>
            <StyledTextWrapper muted variant={'subtitle2'}>
              {notedate}
            </StyledTextWrapper>
            <StyledTextWrapper muted variant={'subtitle2'}>
              {categoryName}
            </StyledTextWrapper>
          </WrapperViewCommon>
          {/* Note Subject and dot-menu icon */}
          <WrapperViewCommon>
            {/* Note subject */}
            <StyledHeadingWrapper variant={'h4'} numberOfLines={2}>
              {subject}
            </StyledHeadingWrapper>
            {/* Dot-Menu icon button */}
            <StyledMoreLink testID="link" onPress={onDotMenuClicked}>
              <IconSVG file={ellipsis} size={16} />
            </StyledMoreLink>
          </WrapperViewCommon>
          <WrapperViewCommon>
            {/* Note description */}
            <StyledTextWrapper muted variant={'body2'} numberOfLines={2}>
              {description}
            </StyledTextWrapper>
          </WrapperViewCommon>
          <WrapperViewBottom>
            {/* Note createdByName */}
            <StyledTextWrapper muted variant={'body2'} weight="semiBold">
              {createdByName}
            </StyledTextWrapper>
          </WrapperViewBottom>
        </InnerStyledWrapperSub>
      </InnerStyledWrapper>
      <WrapperViewHorizontalLine style={StyleHorizontalLine} />
    </StyledWrapper>
  );
};

export default NoteListItem;
