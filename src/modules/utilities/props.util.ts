// Modules
import {AccessibilityProps} from 'react-native';

interface TestAndAccessibilityProps extends AccessibilityProps {
  testID?: string;
}

/**
 * @param  {string} prefix
 * @param  {string} testID?
 * @param  {string} accessibilityLabel?
 * @returns {TestAndAccessibilityProps} TestAndAccessibilityProps
 */

export const generateTestAndAccessiblityProps = (
  prefix: string,
  testID?: string,
  accessibilityLabel?: string,
): TestAndAccessibilityProps => {
  const styledLabelTestAndAccessibilityProps: TestAndAccessibilityProps = {};
  if (testID) {
    styledLabelTestAndAccessibilityProps.testID = `${prefix}-${testID}`;
  }
  if (accessibilityLabel) {
    styledLabelTestAndAccessibilityProps.accessibilityLabel = `${prefix}-${accessibilityLabel}`;
  }
  return styledLabelTestAndAccessibilityProps;
};

// Exports
export default {
  generateTestAndAccessiblityProps,
};
