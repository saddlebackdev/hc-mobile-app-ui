// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledBody, IProps} from './accordion.types';

// Shared
import Text from '../text/text';
import Icon from '../icon/icon';
import {majorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View`
  width: 100%;
  background: ${({theme}) => theme.colors.grayOne};
  border: 1px solid ${({theme}) => theme.colors.grayThree};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.075);
  border-radius: 8px;
`;
const StyledHeaderWrapper = Styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  padding: ${majorScale(2)}px;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeaderTitle = Styled(Text)``;
const StyledHeaderAction = Styled.View``;
const StyledBody = Styled.View<IStyledBody>`
  width: 100%;
  display: ${({$isVisible}) => ($isVisible ? 'flex' : 'none')};
  padding-horizontal: ${majorScale(2)}px;
  padding-bottom: ${majorScale(2)}px;
  padding-top: ${majorScale(1)}px;
`;

// Component
export const Accordion: React.FC<IProps> = ({
  children,
  isOpen = false,
  title,
}): React.ReactElement => {
  // State
  const [isBodyOpen, setIsBodyOpen] = React.useState<boolean>(false);

  // On Toggle Body
  const _onToggleBody = () => {
    setIsBodyOpen(!isBodyOpen);
  };

  React.useEffect(() => {
    setIsBodyOpen(isOpen);
  }, [isOpen]);

  return (
    <StyledWrapper testID="accordion">
      {/* Header */}
      <StyledHeaderWrapper
        activeOpacity={1}
        testID="accordion-toggle-btn"
        onPress={_onToggleBody}>
        <StyledHeaderTitle testID="accordion-title" weight="semiBold">
          {title}
        </StyledHeaderTitle>
        <StyledHeaderAction>
          <Icon type={isBodyOpen ? 'chevronUp' : 'chevronDown'} size={16} />
        </StyledHeaderAction>
      </StyledHeaderWrapper>

      {/* Body */}
      <StyledBody testID="accordion-body" $isVisible={isBodyOpen}>
        {children}
      </StyledBody>
    </StyledWrapper>
  );
};

// Exports
export default Accordion;
