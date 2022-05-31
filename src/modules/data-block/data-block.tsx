// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledRow, IDataBlockItem, IProps} from './data-block.types';

// Shared
import Text from '../text/text';
import {majorScale} from '../scales';

// Styles
export const StyledWrapper = Styled.View`
  flex-direction: column;
`;
export const StyledRow = Styled.View<IStyledRow>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-vertical: ${majorScale(1)}px;
  border-bottom-width: ${({$hideBorder}) => ($hideBorder ? 0 : 1)}px;
  border-bottom-color: ${({theme}) => theme.colors.grayThree};
`;
export const StyledLeftWrapper = Styled.View`
  flex: 0.7;
  align-items: flex-start;
`;
export const StyledRightWrapper = Styled.View`
  align-items: flex-end;
  flex: 0.3;
`;

// Component
export const DataBlock: React.FC<IProps> = ({
  items,
  hideBottomLine,
}): React.ReactElement<any, any> | null => {
  if (!items) {
    return null;
  }

  return (
    <StyledWrapper>
      {items.map((item: IDataBlockItem, index: number) => {
        const key = `data-block-${item.label}-${index}`;

        const isLastRow = index === items.length - 1;

        return (
          <StyledRow key={key} $hideBorder={hideBottomLine ? true : isLastRow}>
            <StyledLeftWrapper>
              {item.jsxLeftElement ? (
                item.jsxLeftElement
              ) : (
                <Text variant="caption">{item.value}</Text>
              )}
            </StyledLeftWrapper>

            <StyledRightWrapper>
              {item.jsxRightElement ? (
                item.jsxRightElement
              ) : (
                <Text variant="caption" muted>
                  {item.label}
                </Text>
              )}
            </StyledRightWrapper>
          </StyledRow>
        );
      })}
    </StyledWrapper>
  );
};

// Exports
export default React.memo(DataBlock);
