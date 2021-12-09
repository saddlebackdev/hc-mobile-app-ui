// Modules
import React from 'react';
import {SafeAreaView} from 'react-native';
import Styled from 'styled-components/native';

import {
  Avatar,
  Button,
  ButtonGroup,
  BottomSheet,
  Chip,
  DatePicker,
  SelectPicker,
  Checkbox,
  Divider,
  ExpandableCard,
  Link,
  NestableList,
  SelectableList,
  HorizontalList,
  CardList,
  Text,
  Heading,
  Radio,
  Tiles,
  ThemeProvider,
  PillToggle,
  TextInput,
} from './source';

// Interfaces
interface IProps {}

const Wrapper = Styled.ScrollView``;

const Section = {
  Wrapper: Styled.View`
    padding: 30px;
  `,
  Title: Styled.View``,
  Description: Styled.View`
    margin-top: 6px;
  `,
  Content: Styled.View`
    margin-top: 10px;
  `,
};
const Row = Styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 4px;
`;

const onPressMock = () => false;

// Component
export const App: React.FC<IProps> = (): React.ReactElement => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);
  const [selectedRadio, setSelectedRadio] = React.useState<number>(2);
  const [selectedHorizontalRadio, setSelectedHorizontalRadio] =
    React.useState<number>(2);
  const [selectedDate, setSelectedDate] = React.useState<any>(new Date());
  const [activePill, setActivePill] = React.useState<number>(2);
  const [pickerValue, setPickerValue] = React.useState<number>(1);
  const [isCardExpanded, setIsCardExpanded] = React.useState<boolean>(false);
  const [selectedListItem, setSelectedListItem] =
    React.useState<string>('app-list-item-1');
  const [isBottomSheetOpen, setIsBottomSheetOpen] =
    React.useState<boolean>(false);

  const pickerOptions = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
    {label: 'Option 3', value: 3},
    {label: 'Option 4', value: 4},
  ];

  const pillToggleOptions = [
    {label: 'Selected', value: 1, onPress: setActivePill},
    {label: 'Unselected', value: 2, onPress: setActivePill},
  ];

  const options = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2 - Disabled', value: 2, disabled: true},
    {label: 'Option 3 - Disabled', value: 3, disabled: true},
    {label: 'Option 4', value: 4},
  ];

  const horizontalOptions = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
  ];

  const nestableListItems = [
    {
      label: 'Campus',
      onPress: onPressMock,
      id: 'app-list-item-campus',
      children: [
        {
          label: 'Lake Forest',
          id: 'app-list-item-child-lake-forest',
          onPress: onPressMock,
        },
        {
          label: 'Laguna Woods',
          id: 'app-list-item-child-laguna-woods',
          onPress: onPressMock,
        },
        {
          label: 'San Diego',
          id: 'app-list-item-child-san-diego',
          onPress: onPressMock,
        },
      ],
    },
    {
      label: 'Category',
      onPress: onPressMock,
      id: 'app-list-item-category',
    },
    {
      label: 'Tags',
      onPress: onPressMock,
      id: 'app-list-item-tags',
    },
  ];

  const selectableListItems = [
    {
      label: 'List Item 1',
      onPress: () => setSelectedListItem('app-list-item-1'),
      id: 'app-list-item-1',
    },
    {
      label: 'List Item 2',
      onPress: () => setSelectedListItem('app-list-item-2'),
      id: 'app-list-item-2',
    },
    {
      label: 'List Item 3',
      onPress: () => setSelectedListItem('app-list-item-3'),
      id: 'app-list-item-3',
    },
    {
      label: 'List Item 4',
      onPress: () => setSelectedListItem('app-list-item-4'),
      id: 'app-list-item-4',
    },
    {
      label: 'List Item 5',
      onPress: () => setSelectedListItem('app-list-item-5'),
      id: 'app-list-item-5',
    },
    {
      label: 'List Item 6',
      onPress: () => setSelectedListItem('app-list-item-6'),
      id: 'app-list-item-6',
    },
    {
      label: 'List Item 7',
      onPress: () => setSelectedListItem('app-list-item-7'),
      id: 'app-list-item-7',
    },
  ];

  const cardListItems = [
    {
      id: 'card-list-item-1',
      onPress: onPressMock,
      title: 'Title One',
      subTitle: 'Anahiem',
      photoUrl:
        'https://images.unsplash.com/photo-1614112539959-7b69d4343042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Care', 'Class 401'],
    },
    {
      id: 'card-list-item-2',
      onPress: onPressMock,
      title: 'Title Two',
      subTitle: 'Lake Forest',
      photoUrl:
        'https://images.unsplash.com/photo-1614112539959-7b69d4343042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Family', 'Baptism'],
    },
  ];

  const tilesItems = [
    {
      onPress: onPressMock,
      id: 'tile-group-tile-worship',
      tileColor: 'primaryLight',
      title: 'Worship',
    },
    {
      onPress: onPressMock,
      id: 'tile-group-tile-baptism',
      tileContent: <Heading inversed>&uarr;</Heading>,
      tileColor: 'secondaryLight',
      title: 'Baptism',
    },
    {
      onPress: onPressMock,
      id: 'tile-group-tile-prayer1',
      tileContent: <Heading inversed>&larr;</Heading>,
      tileColor: 'successLight',
      title: 'Prayer',
    },
    {
      disabled: true,
      onPress: onPressMock,
      id: 'tile-group-tile-prayer2',
      tileContent: <Heading inversed>&rarr;</Heading>,
      tileColor: 'dangerLight',
      title: 'Prayer',
    },
    {
      onPress: onPressMock,
      id: 'tile-group-tile-prayer3',
      tileContent: <Heading inversed>&darr;</Heading>,
      tileColor: 'warningLight',
      title: 'Prayer',
    },
    {
      onPress: onPressMock,
      id: 'tile-group-tile-prayer4',
      tileColor: 'infoLight',
      title: 'Prayer',
    },
  ];

  const avatarUri =
    'https://images.unsplash.com/photo-1591907235917-3da27ce1421d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80';

  return (
    <ThemeProvider>
      <SafeAreaView>
        <Wrapper>
          {/* Intro */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h6">Healthy Church</Heading>
            </Section.Title>
            <Section.Title>
              <Heading variant="h1">Mobile App UI</Heading>
            </Section.Title>
            <Section.Description>
              <Text isMuted>
                Style Guide and Component Documentation for the Healthy Church
                Mobile Apps.
              </Text>
            </Section.Description>
          </Section.Wrapper>
          <Divider />

          {/* Avatar */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Avatar</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Used to show profile photo</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Avatar uri={avatarUri} />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Buttons - Filled */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Buttons - Filled</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Solid buttons are high-emphasis. They contain actions that are
                primary to your app.
              </Text>
            </Section.Description>
            <Section.Content>
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
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Buttons - Outlined */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Buttons - Outlined</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Outlined buttons are medium-emphasis buttons. They contain
                actions that are not the primary action.
              </Text>
            </Section.Description>
            <Section.Content>
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
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Buttons - Variants */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Buttons - Variants</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>There a multiple variants for buttons.</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Button hasShadow>Button with Shadow</Button>
              </Row>
              <Row>
                <Button small>Small Button</Button>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Button Group */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Button Groups</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                When buttons are grouped two-up, the primary cta is solid on the
                right, and the secondary cta is outlined on the left.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <ButtonGroup>
                  <Button appearance="outline" color="secondary" hasShadow>
                    Secondary
                  </Button>
                  <Button appearance="filled" color="primary" hasShadow>
                    Primary
                  </Button>
                </ButtonGroup>
              </Row>
              <Row>
                <ButtonGroup>
                  <Button appearance="outline" color="secondary" hasShadow>
                    Cancel
                  </Button>
                  <Button appearance="filled" color="success" hasShadow>
                    Submit
                  </Button>
                </ButtonGroup>
              </Row>
              <Row>
                <ButtonGroup>
                  <Button appearance="outline" color="secondary" hasShadow>
                    Cancel
                  </Button>
                  <Button appearance="filled" color="danger" hasShadow>
                    Delete
                  </Button>
                </ButtonGroup>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Bottom Sheet */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Bottom Sheet</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Bottom Sheet component</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Button onPress={() => setIsBottomSheetOpen(true)}>
                  Open Bottom Sheet
                </Button>
              </Row>

              <BottomSheet
                header={{title: 'Select Campus'}}
                onDismiss={() => setIsBottomSheetOpen(false)}
                isOpen={isBottomSheetOpen}>
                <SelectableList
                  selected={selectedListItem}
                  items={selectableListItems}
                />
              </BottomSheet>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Tiles */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Tiles</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Tiles contain titles and icons</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Tiles columns={2} items={tilesItems} />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Checkbox */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Checkbox</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>General Use and Alternative Anatomy</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Checkbox
                  isChecked={isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="General Use"
                />
              </Row>
              <Row>
                <Checkbox
                  isChecked={!isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="General Use"
                />
              </Row>
              <Row>
                <Checkbox
                  isChecked={isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Alternate Anatomy"
                  hint="With Hint"
                />
              </Row>
              <Row>
                <Checkbox
                  isChecked={!isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Alternate Anatomy"
                  hint="With Hint"
                />
              </Row>
              <Row>
                <Checkbox
                  disabled
                  isChecked={isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Checked Disabled State"
                />
              </Row>
              <Row>
                <Checkbox
                  disabled
                  isChecked={!isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Unchecked Disabled State"
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Chip */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Chip</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Chips (aka Tags) are compact elements that represent an input,
                attribute, or action.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Chip label="Care" onPress={() => undefined} />
              </Row>
              <Row>
                <Chip label="Baptism" onPress={() => undefined} />
              </Row>
              <Row>
                <Chip label="Class 101" onPress={() => undefined} />
              </Row>
              <Row>
                <Chip label="Class 401" onPress={() => undefined} />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Link */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Link</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Chips (aka Tags) are compact elements that represent an input,
                attribute, or action.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Link to="home" label="View All" />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Date Picker */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Date Picker</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>General Use</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <DatePicker
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Expandable Card */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Expandable Card</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                When interacted with, the card expands and collapses
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <ExpandableCard
                  isOpen={isCardExpanded}
                  tileColor="infoLight"
                  tileContent={<Text>A</Text>}
                  onPress={() => setIsCardExpanded(!isCardExpanded)}
                  subTitle="Today's message from god"
                  title="Daily Verse">
                  <Text isSubtitle>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores velit exercitationem vitae quam! Voluptatem
                    perspiciatis cumque dolorem, dolores, omnis dolor delectus
                    iusto quasi sit voluptatum totam mollitia error, fugit
                    aspernatur.
                  </Text>
                </ExpandableCard>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Headings */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Headings</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Headings have variants ranging from h1 to h6
              </Text>
            </Section.Description>
            <Section.Content>
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
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Text */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Text</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Apart from the default variant, text also has variants like
                isCaption, isMuted and isSubtitle
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Text>
                  PARAGRAPH &mdash; Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
              </Row>
              <Row>
                <Text isMuted>
                  MUTED &mdash; Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
              </Row>
              <Row>
                <Text isCaption>
                  CAPTION and SUBTITLE &mdash; Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Radio */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Radio</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Vertical Variant</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Radio
                  direction="vertical"
                  selected={selectedRadio}
                  onChange={setSelectedRadio}
                  options={options}
                />
              </Row>
            </Section.Content>
            <Section.Description>
              <Text isCaption>Horizontal Variant</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Radio
                  direction="horizontal"
                  selected={selectedHorizontalRadio}
                  onChange={setSelectedHorizontalRadio}
                  options={horizontalOptions}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Select Picker */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Select Picker</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Vertical Variant</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <SelectPicker
                  value={pickerValue}
                  onValueChange={setPickerValue}
                  items={pickerOptions}
                  label="Label"
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Pill Toggle */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Pill Toggle</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Group Radio buttons together in a pill container
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <PillToggle
                  selected={activePill}
                  options={pillToggleOptions}
                  disabled={false}
                />
              </Row>
            </Section.Content>

            <Section.Content>
              <Row>
                <PillToggle selected={1} options={pillToggleOptions} disabled />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Text Input */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Text Input</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Simple text input control.</Text>
            </Section.Description>
            <Section.Content>
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
                  disabled
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
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Text Area */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Text Area</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Simple text area control.</Text>
            </Section.Description>
            <Section.Content>
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
                  numberOfLines={12}
                  multiline
                  required
                  disabled
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
        </Wrapper>

        {/* List */}
        <Section.Wrapper>
          <Section.Title>
            <Heading variant="h2">List</Heading>
          </Section.Title>

          {/* Nestable List */}
          <Section.Description>
            <Text isCaption>Nestable List</Text>
          </Section.Description>
          <Section.Content>
            <Row>
              <NestableList items={nestableListItems} />
            </Row>
          </Section.Content>

          {/* Selectable List */}
          <Section.Description>
            <Text isCaption>Selectable List</Text>
          </Section.Description>
          <Section.Content>
            <Row>
              <SelectableList
                selected={selectedListItem}
                items={selectableListItems}
              />
            </Row>
          </Section.Content>

          {/* Horizontal List */}
          <Section.Description>
            <Text isCaption>Horizontal List</Text>
          </Section.Description>
          <Section.Content>
            <Row>
              <HorizontalList
                title="Categories"
                linkLabel="View All"
                onLinkPress={onPressMock}
                gutterSize={8}>
                <Chip label="One" onPress={onPressMock} />
                <Chip label="Two" onPress={onPressMock} />
                <Chip label="Three" onPress={onPressMock} />
                <Chip label="Four" onPress={onPressMock} />
                <Chip label="Five" onPress={onPressMock} />
                <Chip label="Six" onPress={onPressMock} />
                <Chip label="Seven" onPress={onPressMock} />
                <Chip label="Eight" onPress={onPressMock} />
                <Chip label="Nine" onPress={onPressMock} />
                <Chip label="Ten" onPress={onPressMock} />
              </HorizontalList>
            </Row>
          </Section.Content>

          {/* Card List */}
          <Section.Description>
            <Text isCaption>Card List</Text>
          </Section.Description>
          <Section.Content>
            <Row>
              <CardList items={cardListItems} />
            </Row>
          </Section.Content>
        </Section.Wrapper>
        <Divider />
      </SafeAreaView>
    </ThemeProvider>
  );
};

// Exports
export default App;
