// Modules
import * as React from 'react';
import Styled from 'styled-components/native';
import {majorScale} from '../scales';

// Types
import {IProps} from './appDown.types';

// Shared
import Text from '../text/text';
import Heading from '../heading/heading';
import {SafeAreaView} from 'react-native';
import Button from '../button/button';

const StyledCard = Styled.View`
 justify-content: center;
  padding-horizontal: 45px;
  padding-vertical: 45px;
  width: 100%;
  height: 100%;
`;

const AnimationWrapper = Styled.View`
height: 280px;
margin-bottom: ${majorScale(2)}px;;
`;

const HeadingWrapper = Styled.View`
margin-bottom: ${majorScale(2)}px;;
`;

const TextWrapper = Styled.View`
margin-bottom: ${majorScale(3)}px;;
`;

const ButtonWrapper = Styled.View`
margin-bottom: ${majorScale(3)}px;;
`;

export const AppDown: React.FC<IProps> = ({
  onRestart,
  AnimationElement,
}): React.ReactElement => (
  <React.Fragment>
    <SafeAreaView>
      <StyledCard testID="app-Down-main">
        <AnimationWrapper>{AnimationElement}</AnimationWrapper>
        <HeadingWrapper>
          <Heading variant="h2" alignment="center">
            We are down for maintanence.
          </Heading>
        </HeadingWrapper>
        <TextWrapper>
          <Text variant="body1" alignment="center">
            We&apos;re busy making some improvements to the app. Please check
            back in a bit. Thanks for your patience!
          </Text>
        </TextWrapper>
        <ButtonWrapper>
          <Button testID="link" onPress={onRestart}>
            Restart Application
          </Button>
        </ButtonWrapper>
      </StyledCard>
    </SafeAreaView>
  </React.Fragment>
);
// Exports
export default AppDown;
