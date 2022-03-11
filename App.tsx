// Modules
import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import Styled from 'styled-components/native';

import {
  Avatar,
  Accordion,
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
  LowerPrompt,
  NestableList,
  SelectableList,
  HorizontalList,
  ListHeader,
  CardList,
  Text,
  Heading,
  Radio,
  Tiles,
  ThemeProvider,
  IconToggle,
  PillToggle,
  TextInput,
} from './src';
import Icon from './src/modules/icon/icon';

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
  const [selectedDate, setSelectedDate] = React.useState<any>(new Date());
  const [activePill, setActivePill] = React.useState<number>(2);
  const [pickerValue, setPickerValue] = React.useState<number>(1);
  const [isCardExpanded, setIsCardExpanded] = React.useState<boolean>(false);
  const [selectedListItem, setSelectedListItem] =
    React.useState<string>('app-list-item-1');
  const [isBottomSheetOpen, setIsBottomSheetOpen] =
    React.useState<boolean>(false);
  const [isSimpleLowerPromptOpen, setIsSimpleLowerPromptOpen] =
    React.useState<boolean>(false);
  const [isSuccessLowerPromptOpen, setIsSuccessLowerPromptOpen] =
    React.useState<boolean>(false);
  const [isDangerLowerPromptOpen, setIsDangerLowerPromptOpen] =
    React.useState<boolean>(false);
  const [selectedHorizontalRadio, setSelectedHorizontalRadio] =
    React.useState<number>(2);

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

  const iconToggleOptions = [
    {
      label: 'Laughing',
      onPress: setActivePill,
      content: selected => {
        return selected ? (
          <Text>😂</Text>
        ) : (
          // eslint-disable-next-line react-native/no-inline-styles
          <Text style={{opacity: 0.5}}>😂</Text>
        );
      },
      value: 1,
    },
    {
      label: 'Crying',
      onPress: setActivePill,
      content: selected => {
        return selected ? (
          <Text>😭</Text>
        ) : (
          // eslint-disable-next-line react-native/no-inline-styles
          <Text style={{opacity: 0.5}}>😭</Text>
        );
      },
      value: 2,
    },
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
      children: [],
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
      color: 'primaryLight',
      title: 'Worship',
    },
    {
      onPress: onPressMock,
      id: 'tile-group-tile-baptism',
      content: <Heading inversed>&uarr;</Heading>,
      color: 'secondaryLight',
      title: 'Baptism',
    },
    {
      onPress: onPressMock,
      id: 'tile-group-tile-prayer1',
      content: <Heading inversed>&larr;</Heading>,
      color: 'successLight',
      title: 'Prayer',
    },
    {
      disabled: true,
      onPress: onPressMock,
      id: 'tile-group-tile-prayer2',
      content: <Heading inversed>&rarr;</Heading>,
      color: 'dangerLight',
      title: 'Prayer',
    },
    {
      onPress: onPressMock,
      id: 'tile-group-tile-prayer3',
      content: <Heading inversed>&darr;</Heading>,
      color: 'warningLight',
      title: 'Prayer',
    },
    {
      onPress: onPressMock,
      id: 'tile-group-tile-prayer4',
      color: 'infoLight',
      title: 'Prayer',
    },
  ];

  const avatarUri =
    'https://images.unsplash.com/photo-1591907235917-3da27ce1421d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80';

  const redDotMarker = (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{width: 12, height: 12, backgroundColor: 'red'}} />
  );

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
              <Text muted>
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
              <Text variant="caption">Used to show profile photo</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Avatar uri={avatarUri} />
              </Row>
              <Row>
                <Avatar uri={undefined} />
              </Row>
              <Row>
                <Avatar uri={avatarUri} marker={redDotMarker} />
              </Row>
              <Row>
                <Avatar uri={undefined} marker={redDotMarker} />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Accordion */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Accordion</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Used to show profile photo</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Accordion title="Accordion 1">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat corporis repellendus maxime vero nesciunt eos,
                    obcaecati est magni laborum. Magni eius obcaecati ratione
                    vel officia fugiat inventore voluptatem hic nulla!
                  </Text>
                </Accordion>
              </Row>
              <Row>
                <Accordion title="Accordion 2">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat corporis repellendus maxime vero nesciunt eos,
                    obcaecati est magni laborum. Magni eius obcaecati ratione
                    vel officia fugiat inventore voluptatem hic nulla!
                  </Text>
                </Accordion>
              </Row>
              <Row>
                <Accordion title="Accordion 3" isOpen>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat corporis repellendus maxime vero nesciunt eos,
                    obcaecati est magni laborum. Magni eius obcaecati ratione
                    vel officia fugiat inventore voluptatem hic nulla!
                  </Text>
                </Accordion>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* List Header */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">List Header</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Used as the header for card lists.</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <ListHeader
                  title="Categories"
                  linkLabel="View All"
                  onLinkPress={onPressMock}
                />
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
              <Text variant="caption">
                Solid buttons are high-emphasis. They contain actions that are
                primary to your app.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Button
                  appearance="filled"
                  color="primary"
                  leftIcon={<Icon type="user" size={16} color="white" />}>
                  Primary Button
                </Button>
              </Row>
              <Row>
                <Button
                  appearance="filled"
                  color="secondary"
                  rightIcon={
                    <Icon type="chevronRight" size={12} color="white" />
                  }>
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
              <Text variant="caption">
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
              <Text variant="caption">
                There a multiple variants for buttons.
              </Text>
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
              <Text variant="caption">
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
              <Text variant="caption">Bottom Sheet component</Text>
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

          {/* Lower Prompt */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Lower Prompt</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Lower Prompt component</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Button onPress={() => setIsSimpleLowerPromptOpen(true)}>
                  Open Lower Prompt - Simple
                </Button>
              </Row>
              <Row>
                <Button
                  color="success"
                  onPress={() => setIsSuccessLowerPromptOpen(true)}>
                  Open Lower Prompt - Success
                </Button>
              </Row>
              <Row>
                <Button
                  color="danger"
                  onPress={() => setIsDangerLowerPromptOpen(true)}>
                  Open Lower Prompt - Danger
                </Button>
              </Row>

              <LowerPrompt
                leftButtonCallback={() => setIsSimpleLowerPromptOpen(false)}
                isOpen={isSimpleLowerPromptOpen}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ea
                sit et explicabo obcaecati, hic alias inventore illo est,
                accusamus quos a voluptatem, ipsam amet quaerat id vel. Ducimus,
                tempore.
              </LowerPrompt>

              <LowerPrompt
                intent="success"
                leftButtonLabel="Not Now"
                rightButtonLabel="Update"
                rightButtonCallback={() => setIsSuccessLowerPromptOpen(false)}
                leftButtonCallback={() => setIsSuccessLowerPromptOpen(false)}
                isOpen={isSuccessLowerPromptOpen}>
                A new version of this sermon outline is available. Your saved
                notes will be lost if you update to the latest version.
              </LowerPrompt>

              <LowerPrompt
                intent="danger"
                leftButtonLabel="Cancel"
                rightButtonLabel="Delete"
                rightButtonCallback={() => setIsDangerLowerPromptOpen(false)}
                leftButtonCallback={() => setIsDangerLowerPromptOpen(false)}
                isOpen={isDangerLowerPromptOpen}>
                Are you sure you want to discard these changes?
              </LowerPrompt>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Tiles */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Tiles</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Tiles contain titles and icons</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Tiles columns={3} items={tilesItems} />
              </Row>
            </Section.Content>
            <Section.Description>
              <Text variant="caption">Centered Variant</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Tiles columns={3} items={tilesItems} centered />
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
              <Text variant="caption">General Use and Alternative Anatomy</Text>
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
              <Text variant="caption">
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
              <Text variant="caption">
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
              <Text variant="caption">General Use</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <DatePicker
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                  label="Default"
                />
              </Row>
              <Row>
                <DatePicker
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                  label="Underlined"
                  isUnderlined
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
              <Text variant="caption">
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
                  <Text variant="subtitle1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores velit exercitationem vitae quam! Voluptatem
                    perspiciatis cumque dolorem, dolores, omnis dolor delectus
                    iusto quasi sit voluptatum totam mollitia error, fugit
                    aspernatur.
                  </Text>
                </ExpandableCard>
              </Row>

              <Row>
                <ExpandableCard
                  isOpen={isCardExpanded}
                  tileColor="infoLight"
                  tileContent={<Text>A</Text>}
                  onPress={() => setIsCardExpanded(!isCardExpanded)}
                  subTitle="Today's message from god"
                  subTitleMarker={redDotMarker}
                  title="Daily Verse">
                  <Text variant="subtitle1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores velit exercitationem vitae quam! Voluptatem
                    perspiciatis cumque dolorem, dolores, omnis dolor delectus
                    iusto quasi sit voluptatum totam mollitia error, fugit
                    aspernatur.
                  </Text>
                </ExpandableCard>
              </Row>

              <Row>
                <ExpandableCard
                  isOpen={isCardExpanded}
                  tileColor="infoLight"
                  tileContent={<Text>A</Text>}
                  onPress={() => setIsCardExpanded(!isCardExpanded)}
                  subTitle="Today's message from god"
                  titleMarker={redDotMarker}
                  title="Daily Verse">
                  <Text variant="subtitle1">
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
              <Text variant="caption">
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
              <Text variant="caption">
                Apart from the default variant, text also has variants like
                caption, muted and subtitle
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
                <Text muted>
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
                <Text variant="caption">
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
              <Text variant="caption">Vertical Variant</Text>
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
              <Text variant="caption">Horizontal Variant</Text>
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
              <Text variant="caption">Vertical Variant</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <SelectPicker
                  value={pickerValue}
                  onValueChange={setPickerValue}
                  items={pickerOptions}
                  label="Default"
                />
              </Row>
              <Row>
                <SelectPicker
                  value={pickerValue}
                  onValueChange={setPickerValue}
                  items={pickerOptions}
                  label="Underlined"
                  isUnderlined
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
              <Text variant="caption">
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

          {/* Icon Toggle */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Icon Toggle</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">
                Group Radio buttons together in a icon-pill container
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <IconToggle
                  selected={activePill}
                  options={iconToggleOptions}
                  disabled={false}
                />
              </Row>
            </Section.Content>

            <Section.Content>
              <Row>
                <IconToggle selected={1} options={iconToggleOptions} disabled />
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
              <Text variant="caption">Simple text input control.</Text>
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
              <Text variant="caption">Simple text area control.</Text>
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
            <Text variant="caption">Nestable List</Text>
          </Section.Description>
          <Section.Content>
            <Row>
              <NestableList items={nestableListItems} />
            </Row>
          </Section.Content>

          {/* Selectable List */}
          <Section.Description>
            <Text variant="caption">Selectable List</Text>
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
            <Text variant="caption">Horizontal List</Text>
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
            <Text variant="caption">Card List</Text>
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
