// Modules
import React from 'react';
import {SafeAreaView} from 'react-native';
import Styled from 'styled-components/native';

import {
  Button,
  ButtonGroup,
  Floater,
  Checkbox,
  Text,
  Heading,
  Radio,
  ThemeProvider,
  PillToggle,
  TextInput,
} from './source';

// Interfaces
interface IProps {}

const Wrapper = Styled.ScrollView`
  padding: 30px;
`;
const Section = Styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Row = Styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

// Component
export const App: React.FC<IProps> = (): React.ReactElement => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);
  const [selectedRadio, setSelectedRadio] = React.useState<number>(2);
  const [activePill, setActivePill] = React.useState<number>(2);

  const pillToggleOptions = [
    {label: 'Selected', value: 1, onPress: setActivePill},
    {label: 'Unselected', value: 2, onPress: setActivePill},
  ];

  const options = [
    {label: 'Label 1', value: 1},
    {label: 'Label 2', value: 2, disabled: true},
    {label: 'Label 3', value: 3, disabled: true},
    {label: 'Label 4', value: 4},
  ];

  return (
    <SafeAreaView>
      <ThemeProvider>
        <Wrapper>
          {/* Text Input */}
          <Section>
            <Row>
              <TextInput
                label="Email Address"
                placeholder="jane.doe@ag.com"
                onChange={() => null}
                numberOfLines={12}
                multiline
                required
              />
            </Row>
            <Row>
              <TextInput
                label="Email Address"
                placeholder="jane.doe@ag.com"
                onChange={() => null}
                disabled
              />
            </Row>
            <Row>
              <TextInput
                label="Email Address"
                placeholder="jane.doe@ag.com"
                onChange={() => null}
              />
            </Row>
            <Row>
              <TextInput
                label="Email Address"
                placeholder="jane.doe@ag.com"
                onChange={() => null}
                numberOfLines={12}
                isUnderlined
                required
              />
            </Row>
          </Section>

          {/* Pill Toggle */}
          <Section>
            <PillToggle
              selected={activePill}
              options={pillToggleOptions}
              disabled={false}
            />
          </Section>

          {/* Radio */}
          <Section>
            <Radio
              direction="vertical"
              selected={selectedRadio}
              onChange={setSelectedRadio}
              options={options}
            />
          </Section>

          {/* Buttons */}
          <Section>
            <Row>
              <Button appearance="filled" color="primary">
                Primary Button
              </Button>
            </Row>
            <Row>
              <Button appearance="filled" color="secondary">
                Secondary Button
              </Button>
            </Row>
            <Row>
              <Button appearance="filled" color="info">
                Informative Button
              </Button>
            </Row>
            <Row>
              <Button appearance="filled" color="success">
                Success Button
              </Button>
            </Row>
            <Row>
              <Button appearance="filled" color="warning">
                Warning Button
              </Button>
            </Row>
            <Row>
              <Button appearance="filled" color="danger">
                Danger Button
              </Button>
            </Row>
            <Row>
              <Button appearance="filled" disabled>
                Disabled Button
              </Button>
            </Row>
          </Section>
          <Section>
            <Row>
              <Button appearance="outline" color="primary">
                Primary Button
              </Button>
            </Row>
            <Row>
              <Button appearance="outline" color="secondary">
                Secondary Button
              </Button>
            </Row>
            <Row>
              <Button appearance="outline" color="info">
                Informative Button
              </Button>
            </Row>
            <Row>
              <Button appearance="outline" color="success">
                Success Button
              </Button>
            </Row>
            <Row>
              <Button appearance="outline" color="warning">
                Warning Button
              </Button>
            </Row>
            <Row>
              <Button appearance="outline" color="danger">
                Danger Button
              </Button>
            </Row>
            <Row>
              <Button appearance="outline" disabled>
                Disabled Button
              </Button>
            </Row>
          </Section>

          {/* Button Group */}
          <Section>
            <Row>
              <ButtonGroup>
                <Button appearance="outline" color="secondary">
                  Cancel
                </Button>
                <Button appearance="filled">Submit</Button>
              </ButtonGroup>
            </Row>
            <Row>
              <ButtonGroup>
                <Button appearance="outline" color="secondary">
                  Cancel
                </Button>
                <Button appearance="filled" disabled>
                  Submit
                </Button>
              </ButtonGroup>
            </Row>
            <Row>
              <ButtonGroup>
                <Button appearance="outline" color="secondary">
                  Cancel
                </Button>
                <Button appearance="filled" color="success">
                  Keep
                </Button>
                <Button color="danger" appearance="filled">
                  Delete
                </Button>
              </ButtonGroup>
            </Row>
          </Section>

          {/* Checkbox */}
          <Section>
            <Row>
              <Checkbox
                isChecked={isChecked}
                onPress={() => setIsChecked(!isChecked)}
                label="Label for Checkbox"
                hint="This is a hint"
              />
            </Row>
            <Row>
              <Checkbox
                isChecked={!isChecked}
                onPress={() => setIsChecked(!isChecked)}
                label="Label for Checkbox"
                hint="This is a hint"
              />
            </Row>
            <Row>
              <Checkbox
                disabled
                isChecked={isChecked}
                onPress={() => setIsChecked(!isChecked)}
                label="Label for Checkbox"
                hint="This is a hint"
              />
            </Row>
            <Row>
              <Checkbox
                disabled
                isChecked={!isChecked}
                onPress={() => setIsChecked(!isChecked)}
                label="Label for Checkbox"
                hint="This is a hint"
              />
            </Row>
          </Section>

          {/* Typography */}
          <Section>
            <Row>
              <Heading variant="h1">Heading 1</Heading>
            </Row>
            <Row>
              <Heading variant="h2">Heading 2</Heading>
            </Row>
            <Row>
              <Heading variant="h3">Heading 3</Heading>
            </Row>
            <Row>
              <Heading variant="h4">Heading 4</Heading>
            </Row>
            <Row>
              <Heading variant="h5">Heading 5</Heading>
            </Row>
            <Row>
              <Heading variant="h6">Heading 6</Heading>
            </Row>
          </Section>

          {/* Typography */}
          <Section>
            <Row>
              <Text>
                PARAGRAPH &mdash; Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
            </Row>
            <Row>
              <Text isMuted>
                MUTED &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Text>
            </Row>
            <Row>
              <Text isCaption>
                CAPTION and SUBTITLE &mdash; Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </Row>
          </Section>
        </Wrapper>

        <Floater
          alignment="bottom"
          offsetTop={-80}
          offsetRight={30}
          offsetLeft={30}>
          <Button appearance="filled" hasShadow>
            Submit
          </Button>
        </Floater>
      </ThemeProvider>
    </SafeAreaView>
  );
};

// Exports
export default App;
