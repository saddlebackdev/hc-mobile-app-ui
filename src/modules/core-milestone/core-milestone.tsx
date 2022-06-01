/* eslint-disable no-confusing-arrow */

import * as React from 'react';
import {IProps} from './core-milestone.types';
import Icon from '../icon/icon-external';
import {minorScale} from '../scales';
import Styled from 'styled-components/native';
/* @ts-ignore */
import ShapeHeart from '../../images/shape-heart.svg';
/* @ts-ignore */
import Baptism from '../../images/baptism.svg';
/* @ts-ignore */
import People from '../../images/people.svg';
/* @ts-ignore */
import ServingOpportunity from '../../images/serving-opportunity.svg';
/* @ts-ignore */
import ShapeExperiences from '../../images/shape-experiences.svg';

const StyledViewIconWrapper = Styled.View`
flex-direction: row;
align-items: center;
margin-vertical: ${minorScale(1)};
`;

const StyledEmptyViewWrapper = Styled.View``;

const StyledMilestoneIconWrapper = Styled(Icon)``;

const StyledClassMilestoneWrapper = Styled.View<IProps>`
flexDirection: row;
alignItems: center;
marginRight: ${props =>
  props.isWhite === true ? `${minorScale(1)}px` : `${minorScale(1)}px`}};
marginLeft: ${props =>
  props.isWhite === true ? `${minorScale(1)}px` : `${minorScale(1)}px`}};;
`;

//left has attended class 301
const StyledLeftHasAttendedClass301Wrapper = Styled.View<IProps>`
height: ${Number(minorScale(1)) + 1}px;
width: ${Number(minorScale(1)) + 1}px;
margin-right: -1px;
background-color:${props =>
  props.hasAttendedClass301 && props.hasSignedMinistryCovenant
    ? props.isWhite === true
      ? '#fff'
      : props.colorMilestone
    : props.hasAttendedClass301
    ? 'transparent'
    : '#dde1e4'};
borderRadius: 1px;
borderWidth: 0.5px;
border-color: ${props =>
  props.hasAttendedClass301 && props.hasSignedMinistryCovenant
    ? 'transparent'
    : props.hasAttendedClass301
    ? props.isWhite === true
      ? '#fff'
      : props.colorMilestone
    : 'transparent'};
transform: rotate(135deg);
`;

//Top hasAttendedClass201
const StyledClasshasAttendedClass201Wrapper = Styled.View<IProps>`
            height: ${Number(minorScale(1)) + 1}px;
              width: ${Number(minorScale(1)) + 1}px;
              backgroundColor:${props =>
                props.hasAttendedClass201 && props.hasSignedMaturityCovenant
                  ? props.isWhite === true
                    ? '#fff'
                    : props.colorMilestone
                  : props.hasAttendedClass201
                  ? 'transparent'
                  : '#dde1e4'};
              borderRadius: 1px;
              borderWidth: 0.5px;
              borderColor:${props =>
                props.hasAttendedClass201 && props.hasSignedMaturityCovenant
                  ? 'transparent'
                  : props.hasAttendedClass201
                  ? props.isWhite === true
                    ? '#fff'
                    : props.colorMilestone
                  : 'transparent'};
              transform:rotate(135deg);
`;

// Bottom hasAttendedClass401
const StyledClassHasAttendedClass401Wrapper = Styled.View<IProps>`
height: ${Number(minorScale(1)) + 1}px;
              width: ${Number(minorScale(1)) + 1}px;
              marginTop: 4;
              backgroundColor:${props =>
                props.hasAttendedClass401 && props.hasSignedMissionCovenant
                  ? props.isWhite === true
                    ? '#fff'
                    : props.colorMilestone
                  : props.hasAttendedClass401
                  ? 'transparent'
                  : '#dde1e4'};
              borderRadius: 1px;
              borderWidth: 0.5px;
              borderColor:${props =>
                props.hasAttendedClass401 && props.hasSignedMissionCovenant
                  ? 'transparent'
                  : props.hasAttendedClass401
                  ? props.isWhite === true
                    ? '#fff'
                    : props.colorMilestone
                  : 'transparent'};
              transform:rotate(135deg);
`;

// Rigth hasAttendedClass101
const StyledClassHasAttendedClass101Wrapper = Styled.View<IProps>`
height: ${Number(minorScale(1)) + 1}px;
            width: ${Number(minorScale(1)) + 1}px;
            marginLeft: -1px;
            backgroundColor:${props =>
              props.hasAttendedClass101 && props.hasSignedMembershipAgreement
                ? props.isWhite === true
                  ? '#fff'
                  : props.colorMilestone
                : props.hasAttendedClass101
                ? 'white'
                : '#dde1e4'};
            borderRadius: 1px;
            borderWidth: 0.5px;
            borderColor:${props =>
              props.hasAttendedClass101 && props.hasSignedMembershipAgreement
                ? 'transparent'
                : props.hasAttendedClass101
                ? props.isWhite === true
                  ? '#fff'
                  : props.colorMilestone
                : 'transparent'};
            transform: rotate(135deg);
`;

const StyledAcceptChristWrapper = Styled.View`
width: ${minorScale(3)};
height: ${minorScale(3)};
margin-horizontal: ${minorScale(1)};
margin-left:0px;
`;

const StyledBaptisedWrapper = Styled.View`
width: ${minorScale(3)};
height: ${minorScale(3)};
margin-horizontal: ${minorScale(1)};
margin-left:${minorScale(1)}px;
`;

const StyledSmallGroupWrapper = Styled.View`
width: ${minorScale(3)};
height: ${minorScale(3)};
margin-horizontal: ${minorScale(1)};
margin-left:${minorScale(1)}px;
`;

const StyledInMinistryWrapper = Styled.View`
width: ${minorScale(3)};
height: ${minorScale(3)};
margin-horizontal: ${minorScale(1)};
margin-left:${minorScale(1)}px;
`;

const StyledActiveMissionWrapper = Styled.View`
width: ${minorScale(3)};
height: ${minorScale(3)};
margin-horizontal: ${minorScale(1)};
margin-left:${minorScale(1)}px;
`;

export const CoreMilestone: React.FC<IProps> = ({
  hasAttendedClass101,
  hasAttendedClass201,
  hasAttendedClass301,
  hasAttendedClass401,
  hasSignedMembershipAgreement,
  hasSignedMaturityCovenant,
  hasSignedMinistryCovenant,
  hasSignedMissionCovenant,
  hasAcceptedChrist,
  isBaptised,
  isInSmallGroup,
  isInMinistry,
  isActiveInMissions,
  isWhite,
  isAdult,
  gender,
  isStudent,
  isChild,
}): React.ReactElement => {
  const renderClassMileStoneIcon = () => {
    /**
     * class milestone
     */
    return (
      <StyledClassMilestoneWrapper isWhite={isWhite} testID="class-milestone">
        <StyledLeftHasAttendedClass301Wrapper
          hasAttendedClass301={hasAttendedClass301}
          hasSignedMinistryCovenant={hasSignedMinistryCovenant}
          colorMilestone={getColorbaseOnUserType()}
          isWhite={isWhite}
        />
        <StyledEmptyViewWrapper>
          <StyledClasshasAttendedClass201Wrapper
            hasAttendedClass201={hasAttendedClass201}
            hasSignedMaturityCovenant={hasSignedMaturityCovenant}
            colorMilestone={getColorbaseOnUserType()}
            isWhite={isWhite}
          />
          <StyledClassHasAttendedClass401Wrapper
            hasAttendedClass401={hasAttendedClass401}
            hasSignedMissionCovenant={hasSignedMissionCovenant}
            colorMilestone={getColorbaseOnUserType()}
            isWhite={isWhite}
          />
        </StyledEmptyViewWrapper>
        <StyledClassHasAttendedClass101Wrapper
          hasAttendedClass101={hasAttendedClass101}
          hasSignedMembershipAgreement={hasSignedMembershipAgreement}
          colorMilestone={getColorbaseOnUserType()}
          isWhite={isWhite}
        />
      </StyledClassMilestoneWrapper>
    );
  };

  const getColorbaseOnUserType = () => {
    if (isAdult === true) {
      if (gender === 'M') {
        return '#3A8E5D';
      } else if (gender === 'F') {
        return '#0290B7';
      }
    } else if (isStudent === true) {
      return '#CB6342';
    } else if (isChild === true) {
      return '#5AC9F5';
    } else {
      return '#56C4C4';
    }
    return '#56C4C4';
  };

  const renderIconMileStone = (icnName: any, isActive?: boolean) => {
    return (
      <StyledMilestoneIconWrapper
        file={icnName}
        size={Number(minorScale(3))}
        color={
          isActive
            ? isWhite === true
              ? '#fff'
              : getColorbaseOnUserType()
            : '#dde1e4'
        }
      />
    );
  };

  return (
    <StyledEmptyViewWrapper testID="coreMilestone">
      <StyledViewIconWrapper>
        <StyledAcceptChristWrapper testID="accept-christ">
          {renderIconMileStone(ShapeHeart, hasAcceptedChrist)}
        </StyledAcceptChristWrapper>
        <StyledBaptisedWrapper testID="baptised">
          {renderIconMileStone(Baptism, isBaptised)}
        </StyledBaptisedWrapper>
        {renderClassMileStoneIcon()}
        <StyledSmallGroupWrapper>
          {renderIconMileStone(People, isInSmallGroup)}
        </StyledSmallGroupWrapper>
        <StyledInMinistryWrapper>
          {renderIconMileStone(ServingOpportunity, isInMinistry)}
        </StyledInMinistryWrapper>
        <StyledActiveMissionWrapper>
          {renderIconMileStone(ShapeExperiences, isActiveInMissions)}
        </StyledActiveMissionWrapper>
      </StyledViewIconWrapper>
    </StyledEmptyViewWrapper>
  );
};

export default CoreMilestone;
