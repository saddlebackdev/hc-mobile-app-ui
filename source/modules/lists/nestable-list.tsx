// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IStyledParent,
  IStyledChildContainer,
  IStyledChild,
  IParentItemProps,
  IChildItemProps,
  IProps,
} from './nestable-list.types';

// Shared
import Text from '../text/text';
import Divider from '../divider/divider';
import {LayoutUtils} from '../utilities';
import {majorScale, minorScale} from '../scales';
import Icon from '../icon/icon';

// Styles
const StyledWrapper = Styled.View``;
const StyledParent = Styled.TouchableOpacity<IStyledParent>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: ${minorScale(2.75)}px;
  padding-bottom: ${minorScale(2.5)}px;

  padding-horizontal: ${({$horizontalPadding}) => {
    return $horizontalPadding || majorScale(1);
  }}px;
`;
const StyledParentLabel = Styled(Text)`
  font-weight: 500;
  font-size: ${({theme}) => theme.typography.sizes.small}px;
`;
const StyledChildContainer = Styled.View<IStyledChildContainer>`
  padding-vertical: ${majorScale(2)}px;
  padding-horizontal: ${({$horizontalPadding}) => {
    return $horizontalPadding || majorScale(2);
  }}px;
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
export const NestableListChildItem: React.FC<IChildItemProps> = ({
  onPress,
  isLastChild,
  label,
}): React.ReactElement => (
  <StyledChild
    onPress={onPress}
    activeOpacity={0.75}
    $isLastChild={isLastChild}
    hitSlop={LayoutUtils.addHitSlop(12)}
    testID="child">
    <StyledChildLabel testID="child-label">{label}</StyledChildLabel>
    <Icon type="close" size={8} />
  </StyledChild>
);

// Component
export const NestableListParentItem: React.FC<IParentItemProps> = ({
  onPress,
  horizontalPadding,
  label,
}): React.ReactElement => (
  <StyledParent
    activeOpacity={0.75}
    $horizontalPadding={horizontalPadding}
    onPress={onPress}
    hitSlop={LayoutUtils.addHitSlop(12)}
    testID="parent">
    <StyledParentLabel testID="parent-label">{label}</StyledParentLabel>
    <Icon type="chevronRight" size={12} />
  </StyledParent>
);

// Component
export const NestableList: React.FC<IProps> = ({
  items,
  parentPadding,
  childPadding,
}): React.ReactElement => {
  return (
    <StyledWrapper testID="list">
      {items.map((item, ndx) => {
        const isFirstChild: boolean = ndx === 0;

        return (
          <React.Fragment key={item.id}>
            {isFirstChild && <Divider />}
            <NestableListParentItem
              onPress={item.onPress}
              horizontalPadding={parentPadding}
              label={item.label}
            />
            <Divider />

            {item?.children?.length ? (
              <React.Fragment>
                <StyledChildContainer
                  $horizontalPadding={childPadding}
                  testID="children">
                  {item.children.map((child, index) => {
                    let isLastChild: boolean = false;

                    if (item?.children) {
                      isLastChild = item.children.length - 1 === index;
                    }

                    return (
                      <NestableListChildItem
                        onPress={child.onPress}
                        isLastChild={isLastChild}
                        label={child.label}
                        key={child.id}
                      />
                    );
                  })}
                </StyledChildContainer>

                <Divider />
              </React.Fragment>
            ) : null}
          </React.Fragment>
        );
      })}
    </StyledWrapper>
  );
};

// Exports
export default NestableList;
