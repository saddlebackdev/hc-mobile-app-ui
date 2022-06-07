import * as React from 'react';
import Svg, {G, Circle} from 'react-native-svg';
import {IProgressValue, IProps, MainViewProps} from './circular-progress.types';

import Androw from 'react-native-androw';
import Styled from 'styled-components/native';

const StyledMainWrapper = Styled.View<MainViewProps>`
  width: ${({radius}) => radius * 2}px;
  height: ${({radius}) => radius * 2}px;
  align-items: center;
  justify-content: center;
`;

const StyledChildWrapper = Styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const StyledSvgWrapper = Styled(Svg)`
  transform: rotate(270deg);
`;

const StyledShadowWrapper = Styled(Androw)`
  position: absolute;
  box-shadow: 0px 1px 0.5px rgba(100,100,100,0.6);
`;

const CircularProgress: React.FC<IProps> = ({
  circleBackgroundColor = 'transparent',
  radius = 60,
  maxValue = 100,
  strokeLinecap = 'round',
  activeStrokeWidth = 10,
  inActiveStrokeColor = 'black',
  inActiveStrokeWidth = 10,
  inActiveStrokeOpacity = 1,
  dashedStrokeConfig = {count: 0, width: 0},
  progressValues,
}: IProps) => {
  const viewBox = React.useMemo(
    () => radius + Math.max(activeStrokeWidth, inActiveStrokeWidth),
    [radius, activeStrokeWidth, inActiveStrokeWidth],
  );

  const maskId = React.useMemo(() => {
    return dashedStrokeConfig &&
      dashedStrokeConfig?.count > 0 &&
      dashedStrokeConfig?.width > 0
      ? 'url(#dashed-circle)'
      : undefined;
  }, [dashedStrokeConfig]);

  const inactiveCircleRadius = radius + inActiveStrokeWidth / 2;

  const getActiveCircleRadius = () => {
    const isActiveStrokeBigger = activeStrokeWidth > inActiveStrokeWidth;
    let activeCircleRadius = inactiveCircleRadius;
    if (isActiveStrokeBigger) {
      activeCircleRadius = radius + activeStrokeWidth / 2;
    }
    return activeCircleRadius;
  };

  const getCircleCircumference = () => {
    return 2 * Math.PI * getActiveCircleRadius();
  };

  const animatedCircleProps = (item: IProgressValue) => {
    const circleCircumference = getCircleCircumference();
    let biggestValue: number = Math.max(item.value!, maxValue);
    biggestValue = biggestValue <= 0 ? 1 : biggestValue;
    const maxPercentage: number = item.clockwise
      ? (100 * item.value!) / biggestValue
      : (100 * -item.value!) / biggestValue;
    return {
      strokeDashoffset:
        circleCircumference - (circleCircumference * maxPercentage) / 100,
    };
  };

  return (
    <StyledMainWrapper radius={radius}>
      <StyledSvgWrapper
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}
        testID="empty-circle">
        <G mask={maskId}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={inActiveStrokeColor}
            strokeWidth={inActiveStrokeWidth}
            r={inactiveCircleRadius}
            fill={circleBackgroundColor}
            strokeOpacity={inActiveStrokeOpacity}
          />
        </G>
      </StyledSvgWrapper>
      <StyledChildWrapper>
        {progressValues.map((item, index) => {
          return (
            <StyledShadowWrapper key={index}>
              <StyledSvgWrapper
                width={radius * 2}
                height={radius * 2}
                viewBox={`0 0 ${viewBox * 2} ${viewBox * 2}`}>
                <G mask={maskId}>
                  <Circle
                    cx="50%"
                    cy="50%"
                    stroke={item.strokeColor}
                    strokeWidth={activeStrokeWidth}
                    strokeLinecap={strokeLinecap}
                    r={getActiveCircleRadius()}
                    strokeDasharray={getCircleCircumference()}
                    {...animatedCircleProps(item)}
                  />
                </G>
              </StyledSvgWrapper>
            </StyledShadowWrapper>
          );
        })}
      </StyledChildWrapper>
    </StyledMainWrapper>
  );
};

export default CircularProgress;
