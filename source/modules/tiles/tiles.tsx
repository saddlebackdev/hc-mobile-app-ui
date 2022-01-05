// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IStyledTile,
  IStyledTileContainer,
  IStyledTileContent,
  IStyledTileTitle,
  IProps,
} from './tiles.types';

// Shared
import Text from '../text/text';
import {majorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;
const StyledTile = Styled.TouchableOpacity<IStyledTile>`
  width: ${({$width}) => $width}%;
  height: ${({$height}) => $height - 6}px;
  opacity: ${({$disabled}) => ($disabled ? 0.25 : 1)};
  overflow: hidden;
  padding: 6px;
`;
const StyledTileContainer = Styled.View<IStyledTileContainer>`
  width: 100%; height: 100%;
  padding: ${majorScale(1)}px;
  border-radius: 5px;

  justify-content: ${({$isCentered}) => {
    return $isCentered ? 'center' : 'space-between';
  }};

  background: ${({theme, $color = 'secondaryDark'}) => {
    return theme.colors[$color] || theme.colors.secondaryDark;
  }};
`;
const StyledTileContent = Styled.View<IStyledTileContent>`
  align-self: ${({$isCentered}) => ($isCentered ? 'center' : 'flex-end')};
  margin-bottom: ${({$isCentered}) => ($isCentered ? '6px' : '0px')};
`;
const StyledTileTitle = Styled(Text)<IStyledTileTitle>`
  font-weight: 600;
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.typography.sizes.small}px;
  align-self: ${({$isCentered}) => ($isCentered ? 'center' : 'flex-start')};
  margin-left: ${({$isCentered}) => ($isCentered ? '0px' : '4px')};
`;

// Component
export const TileGroup: React.FC<IProps> = ({
  items,
  centered = false,
  columns = 2,
}): React.ReactElement => {
  // State
  const [tileSize, setTileSize] = React.useState<number>(0);

  // On Layout
  const _onLayout = event => {
    const {width} = event.nativeEvent.layout;

    setTileSize(width);
  };

  return (
    <StyledWrapper testID="tiles">
      {items.map(item => {
        if (item.hidden) {
          return null;
        }

        const onPress = () => {
          if (item.disabled) {
            return;
          }

          item.onPress();
        };

        return (
          <StyledTile
            key={item.id}
            $height={tileSize}
            $width={100 / columns}
            $disabled={item.disabled}
            activeOpacity={item.disabled ? 0.25 : 0.75}
            onLayout={_onLayout}
            onPress={onPress}
            testID="tile">
            <StyledTileContainer $isCentered={centered} $color={item.tileColor}>
              <StyledTileContent $isCentered={centered} testID="tile-content">
                {item.tileContent}
              </StyledTileContent>
              <StyledTileTitle $isCentered={centered} testID="tile-title">
                {item.title}
              </StyledTileTitle>
            </StyledTileContainer>
          </StyledTile>
        );
      })}
    </StyledWrapper>
  );
};

// Exports
export default TileGroup;
