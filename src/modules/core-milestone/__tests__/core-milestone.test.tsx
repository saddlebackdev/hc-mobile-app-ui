// npx jest ./src/modules/core-milestone/__tests__/core-milestone.test.tsx

import * as React from 'react';
import {render} from '@testing-library/react-native';

import CoreMilestone from '../core-milestone';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('CoreMilestone', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CoreMilestone
            isWhite={false}
            hasAttendedClass101={true}
            hasAttendedClass201={false}
            hasAttendedClass301={true}
            hasAttendedClass401={true}
            hasSignedMembershipAgreement={true}
            hasSignedMaturityCovenant={false}
            hasSignedMinistryCovenant={false}
            hasSignedMissionCovenant={false}
            hasAcceptedChrist={true}
            isBaptised={false}
            isInSmallGroup={false}
            isInMinistry={true}
            isActiveInMissions={true}
            isAdult={true}
            isStudent={false}
            isChild={false}
            gender={'M'}
          />
        </ThemeProvider>,
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('renders Class MileStone', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CoreMilestone
            isWhite={false}
            hasAttendedClass101={true}
            hasAttendedClass201={false}
            hasAttendedClass301={true}
            hasAttendedClass401={true}
            hasSignedMembershipAgreement={true}
            hasSignedMaturityCovenant={false}
            hasSignedMinistryCovenant={false}
            hasSignedMissionCovenant={false}
            hasAcceptedChrist={true}
            isBaptised={false}
            isInSmallGroup={false}
            isInMinistry={true}
            isActiveInMissions={true}
            isAdult={true}
            isStudent={false}
            isChild={false}
            gender={'M'}
          />
        </ThemeProvider>,
      );

      const milestoneItem = wrapper.getByTestId('class-milestone');

      expect(milestoneItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders Accept Christ', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CoreMilestone
            isWhite={false}
            hasAttendedClass101={true}
            hasAttendedClass201={false}
            hasAttendedClass301={true}
            hasAttendedClass401={true}
            hasSignedMembershipAgreement={true}
            hasSignedMaturityCovenant={false}
            hasSignedMinistryCovenant={false}
            hasSignedMissionCovenant={false}
            hasAcceptedChrist={true}
            isBaptised={false}
            isInSmallGroup={false}
            isInMinistry={true}
            isActiveInMissions={true}
            isAdult={true}
            isStudent={false}
            isChild={false}
            gender={'M'}
          />
        </ThemeProvider>,
      );

      const AccChristmilestoneItem = wrapper.getByTestId('accept-christ');

      expect(AccChristmilestoneItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders Baptised', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CoreMilestone
            isWhite={false}
            hasAttendedClass101={true}
            hasAttendedClass201={false}
            hasAttendedClass301={true}
            hasAttendedClass401={true}
            hasSignedMembershipAgreement={true}
            hasSignedMaturityCovenant={false}
            hasSignedMinistryCovenant={false}
            hasSignedMissionCovenant={false}
            hasAcceptedChrist={true}
            isBaptised={false}
            isInSmallGroup={false}
            isInMinistry={true}
            isActiveInMissions={true}
            isAdult={true}
            isStudent={false}
            isChild={false}
            gender={'M'}
          />
        </ThemeProvider>,
      );

      const baptisedmilestoneItem = wrapper.getByTestId('baptised');

      expect(baptisedmilestoneItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
