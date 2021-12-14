// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledTile, IStyledTileContainer, IProps} from './tiles.types';

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
  justify-content: space-between;
  padding: ${majorScale(1)}px;
  border-radius: 5px;

  background: ${({theme, $color = 'secondaryDark'}) => {
    return theme.colors[$color] || theme.colors.secondaryDark;
  }};
`;
const StyledTileContent = Styled.View`
  align-self: flex-end;
`;
const StyledTileTitle = Styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => theme.typography.sizes.small}px;
  color: ${({theme}) => theme.colors.white};
  text-transform: uppercase;
  align-self: flex-start;
  margin-left: 4px;
`;

// Component
export const TileGroup: React.FC<IProps> = ({
  items,
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
      {items.map(item => (
        <StyledTile
          key={item.id}
          $height={tileSize}
          $width={100 / columns}
          $disabled={item.disabled}
          activeOpacity={item.disabled ? 0.25 : 0.75}
          onPress={!item.disabled && item.onPress()}
          onLayout={_onLayout}
          testID="tile">
          <StyledTileContainer $color={item.tileColor}>
            <StyledTileContent testID="tile-content">
              {item.tileContent}
            </StyledTileContent>
            <StyledTileTitle testID="tile-title">{item.title}</StyledTileTitle>
          </StyledTileContainer>
        </StyledTile>
      ))}
    </StyledWrapper>
  );
};

// Exports
export default TileGroup;
