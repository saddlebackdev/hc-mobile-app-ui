// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledChild, IProps} from './nestable-list.types';

// Shared
import Text from '../text/text';
import Divider from '../divider/divider';
import {majorScale, minorScale} from '../scales';
import Icon from '../icon/icon';

// Styles
const StyledWrapper = Styled.View``;
const StyledParent = Styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: ${minorScale(2.75)}px;
  padding-horizontal: ${majorScale(1)}px;
  padding-bottom: ${minorScale(2.5)}px;
`;
const StyledParentLabel = Styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => theme.typography.sizes.small}px;
`;
const StyledChildContainer = Styled.View`
  padding: ${majorScale(2)}px;
`;
const StyledChild = Styled.TouchableOpacity<IStyledChild>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${({$isLastChild}) => ($isLastChild ? 0 : majorScale(1.25))}px;
`;
const StyledChildLabel = Styled(Text)`
  font-size: ${({theme}) => theme.typography.sizes.small}px;
`;

// Component
export const NestableList: React.FC<IProps> = ({items}): React.ReactElement => {
  const touchableHitslop = {
    top: 12,
    right: 12,
    bottom: 12,
    left: 12,
  };

  return (
    <StyledWrapper>
      {items.map((item, ndx) => {
        const isFirstChild: boolean = ndx === 0;

        return (
          <React.Fragment key={item.id}>
            {isFirstChild && <Divider />}
            <StyledParent
              onPress={item.onPress}
              hitSlop={touchableHitslop}
              testID="list-item-parent">
              <StyledParentLabel testID="list-item-parent-label">
                {item.label}
              </StyledParentLabel>
              <Icon type="chevronRight" size={12} />
            </StyledParent>
            <Divider />

            {item?.children && (
              <React.Fragment>
                <StyledChildContainer>
                  {item.children.map((child, index) => {
                    let isLastChild: boolean = false;

                    if (item?.children) {
                      isLastChild = item.children.length - 1 === index;
                    }

                    return (
                      <StyledChild
                        onPress={child.onPress}
                        $isLastChild={isLastChild}
                        hitSlop={touchableHitslop}
                        key={child.id}>
                        <StyledChildLabel>{child.label}</StyledChildLabel>
                        <Icon type="close" size={8} />
                      </StyledChild>
                    );
                  })}
                </StyledChildContainer>

                <Divider />
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
    </StyledWrapper>
  );
};

// Exports
export default NestableList;
