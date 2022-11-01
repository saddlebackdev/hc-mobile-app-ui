// Modules
import * as React from 'react';
import {Alert, View, SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import Styled from 'styled-components/native';

import {
  Avatar,
  Accordion,
  Button,
  ButtonGroup,
  BottomSheet,
  Chip,
  CalendarPicker,
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
  PeopleTabs,
  ThemeProvider,
  IconToggle,
  PillToggle,
  ReminderPicker,
  TextInput,
  Tabs,
  PeopleListItem,
  DataBlock,
  CompactCardListItem,
  LinearGradientView,
  defaultTheme,
  FilterDrawer,
  CoreMilestone,
  minorScale,
  NoteListItem,
  majorScale,
  GroupCardListItem,
} from './src';
import Icon from './src/modules/icon/icon';

import IconSVG from './src/modules/icon/icon-external';
import IconShapeHeart from './src/images/shape-heart.svg';
import IconReminder from './src/images/Icon_reminder.svg';
import IconPin from './src/images/Icon_pin.svg';
import IconCarrotUp from './src/images/carrot-up.svg';
import IconTime from './src/images/time-icon.svg';
import {IProgressValue} from './src/modules/circular-progress/circular-progress.types';
import CircularProgress from './src/modules/circular-progress/circular-progress';

// Interfaces
interface IProps {}

const Wrapper = Styled.ScrollView``;

const Section = {
  Wrapper: Styled.View`
    padding: 30px;
    flex: 1;
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
const CardElementWrapper = Styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const WarningTextWrapper = Styled(Text)`
  padding-horizontal: 10px;
  padding-vertical: 2px;
`;
const WarningViewWrapper = Styled.View`
  background-color: ${defaultTheme.colors.warningLight};
  border-radius: 13px;
  margin-top: -4px;
`;
const CheckInTextWrapper = Styled(Text)`
  color: #FFEF00;
`;
const linearGradientView1Style = StyleSheet.flatten<ViewStyle>({
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
});
const linearGradientView2Style = StyleSheet.flatten<ViewStyle>({
  width: 100,
  height: 100,
  justifyContent: 'center',
  alignItems: 'center',
});

const progressValues: IProgressValue[] = [
  {
    value: 20,
    strokeColor: defaultTheme.colors.warningLight,
    clockwise: false,
  },
  {
    value: 40,
    strokeColor: defaultTheme.colors.successLight,
    clockwise: true,
  },
];

const onPressMock = () => false;

const swipeable: Array<any> = [];

let prevOpenedRow;

// Component
export const App: React.FC<IProps> = (): React.ReactElement => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);
  const [selectedRadio, setSelectedRadio] = React.useState<number>(2);
  const [selectedRadioWithOptions, setSelectedRadioWithOptions] =
    React.useState<number>(2);
  const [selectedDate, setSelectedDate] = React.useState<any>(new Date());
  const [activePill, setActivePill] = React.useState<number>(2);
  const [pickerValue, setPickerValue] = React.useState<number>(1);
  const [isCardExpanded, setIsCardExpanded] = React.useState<boolean>(false);
  const [selectedTab, setSelectedTab] = React.useState<number>(0);
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
  const [selectedPeopleTabItem, setSelectedPeopleTabItem] =
    React.useState<number>(1);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] =
    React.useState<boolean>(false);
  const [
    isFilterDrawerSecondaryViewActive,
    setIsFilterDrawerSecondaryViewActive,
  ] = React.useState<boolean>(false);

  const closeRow = index => {
    if (prevOpenedRow && prevOpenedRow !== swipeable[index]) {
      prevOpenedRow.recenter();
    }

    prevOpenedRow = swipeable[index];
  };

  const gradientColors = [
    {offset: 0, color: '#E4DE74'},
    {offset: 1, color: '#96B660'},
  ];

  const gradientColorsCheckin = [
    {offset: 0, color: '#A6CAE4'},
    {offset: 1, color: '#7772C0'},
  ];

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

  const optionStyle = {
    borderWidth: 1,
    borderColor: 'red',
    marginRight: 10,
    width: 50,
  };

  const radioOptionsWithLeftChildren = [
    {
      label: 'Option 1',
      value: 1,
      leftChild: <Text style={optionStyle}>ABC</Text>,
    },
    {
      label: 'Option 2 - Disabled',
      value: 2,
      disabled: true,
      leftChild: <Text style={optionStyle}>DEF</Text>,
    },
    {
      label: 'Option 3 - Disabled',
      value: 3,
      disabled: true,
      leftChild: <Text style={optionStyle}>HIJ</Text>,
    },
    {
      label: 'Option 4',
      value: 4,
      leftChild: <Text style={optionStyle}>KLM</Text>,
    },
  ];

  const optionContainerStyle = {
    marginBottom: 5,
    borderColor: 'gray',
    borderBottomWidth: 1,
  };

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

  const TabItems = [
    {
      label: 'Tab1',
      value: 0,
    },
    {
      label: 'Tab2',
      value: 1,
    },
    {
      label: 'Tab3',
      value: 2,
    },
  ];

  const avatarUri =
    'https://images.unsplash.com/photo-1591907235917-3da27ce1421d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80';

  const redDotMarker = (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{width: 12, height: 12, backgroundColor: 'red'}} />
  );

  const peopleTabsItems = [
    {label: 'Tab 1', value: 1},
    {label: 'Tab 2', value: 2},
    {label: 'Tab 3', value: 3},
  ];

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

          {/* Group list item */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Group List Item</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Used to show Group list item</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <GroupCardListItem
                  title={'Attendees at Anaheim'}
                  linkLabel={'610'}
                  onLinkPress={() => {
                    // link label pressed
                  }}
                  leftIcon={IconTime}
                  leftIconColor="#F99E49"
                  leftText={'2 Services'}
                  rightIcon={IconCarrotUp}
                  rightIconColor="#54CC86"
                  rightText="33 From Last Week"
                  gradientColors={[
                    {color: '#F99E49', offset: 0},
                    {color: '#C33580', offset: 1},
                  ]}
                  expandedElement={
                    <>
                      {/* put your expanded contents here */}
                      <Text>Used to show expanded content</Text>
                    </>
                  }
                />
                <GroupCardListItem
                  title={'Team Jesus'}
                  leftIcon={IconTime}
                  leftText={'Lake Forest'}
                  rightIcon={IconCarrotUp}
                  rightText="3"
                  showDivider
                  gradientColors={[
                    {color: '#A6CAE4', offset: 0},
                    {color: '#7772C0', offset: 1},
                  ]}
                  expandedElement={
                    <>
                      {/* put your expanded contents here */}
                      <Text>Used to show expanded content</Text>
                    </>
                  }
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Tabs */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Tabs</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Used to show tabs</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Tabs
                  items={TabItems}
                  selected={selectedTab}
                  onChange={item => {
                    setSelectedTab(item.value);
                  }}
                  linkLabel={'View All'}
                  onLinkPress={onPressMock}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Filter Drawer */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Filter Drawer</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Filter Drawer Component</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Button onPress={() => setIsFilterDrawerOpen(true)}>
                  Open Filter Drawer
                </Button>

                <FilterDrawer
                  onRequestClose={() => {
                    if (isFilterDrawerSecondaryViewActive) {
                      setIsFilterDrawerSecondaryViewActive(false);
                    } else {
                      setIsFilterDrawerOpen(false);
                    }
                  }}
                  onApplyFilters={() => Alert.alert('Filters Applied!')}
                  onClearFilters={() => Alert.alert('Filters Cleared!')}
                  onClose={() => setIsFilterDrawerOpen(false)}
                  onCancel={() => setIsFilterDrawerOpen(false)}
                  isOpen={isFilterDrawerOpen}
                  onBackToPrimaryContent={() =>
                    setIsFilterDrawerSecondaryViewActive(false)
                  }
                  shouldShowCancelButton
                  shouldShowClearFiltersButton
                  shouldShowSecondaryContent={isFilterDrawerSecondaryViewActive}
                  secondaryViewTitle="Secondary View"
                  primaryChildren={
                    <>
                      <Text>
                        This is the primary View. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Dicta iste delectus
                        similique, odit aspernatur fugit, culpa alias eum
                        tenetur quidem officiis, non corporis quod voluptatem at
                        facere voluptate. Dolorem, nam! Architecto corrupti fuga
                        nisi laboriosam quae atque nemo provident sapiente omnis
                        officiis nihil, deleniti ea unde laborum. Accusantium
                        doloribus tempora adipisci itaque facere. Voluptatem
                        impedit exercitationem facere voluptates distinctio
                        blanditiis? Odit perferendis quibusdam quasi dolores rem
                        distinctio magni! Voluptate vero commodi quibusdam
                        dolorum nemo cupiditate libero, nulla quas sunt culpa
                        repudiandae asperiores voluptatum eum dignissimos
                        blanditiis veritatis assumenda laudantium earum. Fuga
                        aut autem nobis beatae ea mollitia excepturi perferendis
                        ab delectus optio tenetur tempora consequuntur, officiis
                        dolorem modi quae et impedit accusantium, atque quo
                        nemo. Quasi nisi beatae placeat quisquam. Quod sed
                        suscipit soluta ex facere assumenda, fuga numquam quasi
                        quis natus libero maiores blanditiis architecto
                        asperiores saepe magnam enim. Placeat at eveniet
                        perferendis in consequuntur ex laboriosam molestiae ab.
                        Quisquam quod odio atque dolorem consequatur voluptas
                        aperiam voluptatibus fuga beatae. Accusantium iusto
                        voluptatem placeat eos, delectus deserunt saepe
                        repudiandae id, quisquam tempore dolorum. Ipsam non
                        magnam maiores tempora itaque. Facilis rem tempore esse
                        dolor voluptas a soluta rerum doloremque doloribus
                        corporis fugit autem voluptate, inventore, quas eius
                        provident quae. Eum quia quasi accusantium! Quod, iure.
                        Porro molestiae omnis ullam. Vitae commodi incidunt
                        praesentium, expedita saepe magnam repellat dolorem
                        voluptatem nobis a amet fugiat blanditiis cupiditate
                        iste recusandae exercitationem inventore quibusdam
                        obcaecati. Necessitatibus atque at repellendus dicta eum
                        enim id! Consequuntur animi modi delectus reprehenderit
                        pariatur voluptas facilis temporibus quidem aliquam nam
                        voluptates dolorum molestiae molestias asperiores
                        provident odit dignissimos doloremque, facere aliquid
                        debitis necessitatibus veniam maiores? Atque, tenetur
                        soluta! Tenetur a odit incidunt ipsum omnis! Quae quo,
                        assumenda provident quasi laborum reprehenderit
                        reiciendis praesentium minus, perspiciatis tenetur
                        consectetur quos adipisci. Vitae, iste repudiandae!
                        Dolore mollitia illum reiciendis ipsam similique? Eaque
                        dicta totam libero quam voluptatum inventore, quas
                        facilis numquam! Natus deleniti consequatur sapiente
                        quod eos rem, saepe repudiandae fugiat cumque nisi illo
                        quidem sunt est expedita, vero, inventore nihil.
                        Nesciunt dolorem expedita ullam maxime qui earum
                        delectus possimus vero iste porro aut eveniet provident
                        blanditiis quod iusto, aliquam fugit voluptatum rem?
                        Vitae esse earum cum culpa maxime in tenetur.
                      </Text>

                      <Button
                        onPress={() =>
                          setIsFilterDrawerSecondaryViewActive(true)
                        }>
                        Show the Secondary View lorem
                      </Button>
                    </>
                  }
                  secondaryChildren={
                    <>
                      <Text>This is the secondary View.</Text>
                      <Text variant="caption">
                        Use the back button to go back to the primary view.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore assumenda itaque necessitatibus blanditiis?
                        Repudiandae laborum debitis recusandae iure veritatis
                        fugit dignissimos vel deleniti eveniet voluptatem
                        consequuntur ratione repellendus, quod ducimus? Atque
                        iste, nihil fuga beatae inventore illo optio qui enim
                        consectetur ipsum sed asperiores ad unde nisi eaque
                        animi quasi pariatur laudantium temporibus fugiat! Enim
                        voluptate sit sed inventore facilis? Quibusdam,
                        voluptate eaque. Assumenda quae autem odio placeat
                        tenetur sequi veniam libero qui explicabo, aperiam
                        expedita rem eum beatae? In consequuntur deserunt
                        pariatur qui numquam ea ipsa repellendus tempora nihil.
                        Placeat dolores aliquam distinctio provident, vel illo
                        porro dolorem minus, delectus sint qui beatae culpa,
                        neque quibusdam vitae? Quasi reprehenderit sed
                        consequuntur officiis eos odit doloremque necessitatibus
                        error praesentium fuga? Molestias, neque explicabo!
                        Repellat corporis sapiente rerum iure facere impedit
                        nisi nobis qui non doloribus soluta sed praesentium,
                        dicta ullam ab porro harum omnis obcaecati. Quibusdam
                        culpa iste facilis eum! Veniam temporibus vitae ipsum,
                        ipsam beatae natus reiciendis officiis similique,
                        impedit error quod. Excepturi voluptatibus, voluptatum,
                        nulla dolores odit magnam eaque aperiam obcaecati
                        doloremque iste maxime aut ad dolorem corrupti! Sit,
                        veritatis hic dolore corrupti vel modi nam inventore
                        beatae velit rerum excepturi quo! Tempora incidunt,
                        nostrum sapiente iusto reiciendis officia. Minima
                        nostrum iure, obcaecati voluptatum quidem molestiae
                        aspernatur eos! Quaerat, tenetur esse ea aperiam
                        aspernatur delectus deleniti maxime perspiciatis, sequi
                        magnam ducimus doloremque provident sint, hic commodi
                        reprehenderit facilis vel quod accusantium. Rem,
                        suscipit libero impedit vel repellendus ipsa.
                        Necessitatibus labore quaerat veritatis ex sapiente
                        temporibus itaque eaque? Hic in doloribus dolorum
                        delectus alias commodi unde sequi, earum suscipit ab
                        molestias. Fugit excepturi nisi sit quia, minima unde
                        cupiditate. Esse voluptatibus sint quis quisquam,
                        debitis quas omnis, atque maxime repellendus ipsum
                        distinctio alias, rerum quam dolorem ab! At esse illo
                        reprehenderit suscipit aspernatur obcaecati perspiciatis
                        fugit necessitatibus rem culpa. Voluptas magnam eius
                        ducimus quae! Eligendi illo impedit dolorum voluptatem
                        doloremque culpa quod corrupti, incidunt magnam nobis
                        inventore veniam earum rerum quasi accusamus, modi sed
                        rem aperiam hic at. Cum. Id corporis libero quod dolorum
                        nostrum blanditiis ut officiis amet magnam? Obcaecati
                        beatae et ea corrupti deserunt distinctio, veniam
                        reiciendis quod sapiente quaerat esse minus, fugit
                        reprehenderit dolore fuga repudiandae?
                      </Text>
                    </>
                  }
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Linear Gradient View */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Circular Progress View</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Used to show Circular Progress View</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <CircularProgress
                  radius={30}
                  maxValue={100}
                  inActiveStrokeWidth={12}
                  activeStrokeWidth={12}
                  inActiveStrokeColor={defaultTheme.colors.grayThree}
                  progressValues={progressValues}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Linear Gradient View */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Linear Gradient View</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Used to show Linear Gradient View</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <LinearGradientView
                  gradientColors={gradientColors}
                  viewStyle={linearGradientView1Style}>
                  <IconSVG
                    file={IconShapeHeart}
                    size={22}
                    color={defaultTheme.colors.white}
                  />
                </LinearGradientView>
              </Row>
              <Row>
                <LinearGradientView
                  gradientColors={gradientColors}
                  horizontal
                  viewStyle={linearGradientView2Style}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Compact Card List Item */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Compact Card List Item</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Used to show compact card list item</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <CompactCardListItem
                  leftGradientViewStyle={{
                    gradientColors: gradientColors,
                  }}
                  icon={IconShapeHeart}
                  title="Accepted Christ"
                  footerElement={
                    <CardElementWrapper>
                      <Text variant={'caption'}>{'5 Active'}</Text>
                      <WarningViewWrapper>
                        <WarningTextWrapper
                          weight={'semiBold'}
                          variant={'caption'}
                          inversed>
                          {'2 Overdue'}
                        </WarningTextWrapper>
                      </WarningViewWrapper>
                    </CardElementWrapper>
                  }
                />
              </Row>
              <Row>
                <CompactCardListItem
                  icon={IconShapeHeart}
                  title="Music Academy"
                  leftGradientViewStyle={{
                    gradientColors: gradientColorsCheckin,
                  }}
                  cardGradientViewStyle={{
                    gradientColors: gradientColorsCheckin,
                  }}
                  headerElement={
                    <CardElementWrapper>
                      {/* Left text */}
                      <CheckInTextWrapper weight={'bold'} variant={'caption'}>
                        {'Check-in Window Open'}
                      </CheckInTextWrapper>
                      {/* Right text */}
                      <CheckInTextWrapper weight={'bold'} variant={'subtitle2'}>
                        {/* UiIcon text */}
                        <IconSVG
                          file={IconShapeHeart}
                          size={14}
                          color={'#FFEF00'}
                        />{' '}
                        {'Check-in'}
                      </CheckInTextWrapper>
                    </CardElementWrapper>
                  }
                  footerElement={
                    <Text variant={'caption'} inversed>
                      {'Tue, Jan 27, 2022 | 6:00 pm'}
                      {'  '}
                      <IconSVG
                        file={IconShapeHeart}
                        size={14}
                        color={'white'}
                      />{' '}
                      {'Every 2 Weeks'}
                    </Text>
                  }
                />
              </Row>
              <Row>
                <CompactCardListItem
                  leftGradientViewStyle={{
                    gradientColors: gradientColors,
                  }}
                  icon={IconShapeHeart}
                  title="Baptisms This Week"
                  headerElement={
                    <CardElementWrapper>
                      {/* Left text */}
                      <Text weight={'semiBold'} variant={'caption'} muted>
                        {'Worship Service'}
                      </Text>
                      {/* Right text */}
                      <Text variant={'subtitle2'} muted>
                        {' 1/25/22'}
                      </Text>
                    </CardElementWrapper>
                  }
                  footerElement={
                    <Text variant={'caption'}>
                      {/* description */}
                      <Text variant={'subtitle2'} weight={'bold'}>
                        {'Stephen Riley '}
                      </Text>
                      {'and 24 others were Baptized at Lake Forest.'}
                    </Text>
                  }
                />
              </Row>
              <Row>
                <CompactCardListItem
                  icon={IconShapeHeart}
                  title="Music Academy"
                  redMarker={true}
                  leftGradientViewStyle={{
                    gradientColors: gradientColorsCheckin,
                  }}
                  expandedElement={
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{paddingVertical: 10}}>
                      <Text variant={'caption'}>
                        Add Your child element as per your Design
                      </Text>
                    </View>
                  }
                  rightElement={
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                      }}>
                      <IconSVG
                        file={IconShapeHeart}
                        size={20}
                        color={'black'}
                      />
                    </View>
                  }
                  footerElement={
                    <Text numberOfLines={1} variant={'subtitle2'}>
                      {'5/10 Completed '}
                      <Text
                        numberOfLines={1}
                        weight={'semiBold'}
                        variant={'subtitle2'}
                        color={'warningLight'}>
                        (2 Overdue)
                      </Text>
                    </Text>
                  }
                />
              </Row>
            </Section.Content>
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
                <Avatar uri={avatarUri} radius="small" size="tile" />
              </Row>
              <Row>
                <Avatar uri={avatarUri} radius="small" size="profile" />
              </Row>

              <Row>
                <Avatar initials="AG" />
              </Row>
              <Row>
                <Avatar initials="AG" radius="small" size="tile" />
              </Row>
              <Row>
                <Avatar initials="AG" radius="small" size="profile" />
              </Row>

              <Row>
                <Avatar uri={avatarUri} marker={redDotMarker} />
              </Row>
              <Row>
                <Avatar initials="AG" marker={redDotMarker} />
              </Row>
              <Row>
                <Avatar marker={redDotMarker} />
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

          {/* Calendar Picker */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Calendar Picker</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">
                Third party package react-native-calendar-picker
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <CalendarPicker
                  onDateChange={date => {
                    // eslint-disable-next-line no-console
                    console.log(date);
                  }}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Reminder Picker */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Reminder Picker</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">
                Third party package react-native-calendar-picker
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <ReminderPicker
                  onChange={date => {
                    // eslint-disable-next-line no-console
                    console.log(date);
                  }}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Note List Block */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Note List</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Used to show display note list</Text>
            </Section.Description>
            <NoteListItem
              notedate="00/00/00"
              categoryName="For me"
              subject="Communication Attempt"
              description="I called and left a message and also texted! No response yet."
              createdByName="Author Name"
              onDotMenuClicked={() => Alert.alert('More action click')}
            />
            <NoteListItem
              notedate="00/00/00"
              categoryName="For me"
              subject="Communication Attempt"
              description="I called and left a message and also texted! No response yet."
              createdByName="Author Name"
              onDotMenuClicked={() => Alert.alert('More action click')}
              leftElement={
                <View>
                  <View style={{marginTop: majorScale(1.45)}}>
                    <IconSVG file={IconReminder} size={14} color={'black'} />
                  </View>
                  <View style={{marginTop: majorScale(1.45)}}>
                    <IconSVG file={IconPin} size={14} color={'black'} />
                  </View>
                </View>
              }
            />
          </Section.Wrapper>
          <Divider />

          {/* Data Block */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Data Block</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">
                List like component that renders a label on the right and a
                value or a React component on the left.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <DataBlock items={pickerOptions} />
              </Row>
              <Row>
                <DataBlock
                  items={[
                    {
                      label: 'Doggo 1',
                      jsxLeftElement: (
                        <View
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View>
                            <Avatar uri={avatarUri} radius="small" />
                          </View>
                          <View
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{marginLeft: 10}}>
                            <Text variant="caption">Duffy The Pup</Text>
                          </View>
                        </View>
                      ),
                    },
                    {
                      label: 'Simple Value',
                      value: 'Lookie Here!',
                    },
                    {
                      label: 'Doggo 2',
                      jsxLeftElement: (
                        <View
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View>
                            <Avatar uri={avatarUri} radius="small" />
                          </View>
                          <View
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{marginLeft: 10}}>
                            <Text variant="caption">Buffy The Pup</Text>
                          </View>
                        </View>
                      ),
                    },
                    {
                      label: 'Simple Value',
                      value: 'Lookie Here Again!',
                    },
                  ]}
                />
              </Row>
              <Row>
                <DataBlock
                  items={[
                    {
                      jsxLeftElement: (
                        <View
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View>
                            <Avatar uri={avatarUri} radius="full" />
                          </View>
                          <View
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{marginLeft: 10, flex: 1}}>
                            <Heading variant="h4">Unclaimed</Heading>
                            <View
                              // eslint-disable-next-line react-native/no-inline-styles
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: minorScale(0.5),
                              }}>
                              <Text
                                numberOfLines={1}
                                variant={'subtitle2'}
                                color={'graySix'}>
                                5 Active
                                <Text
                                  numberOfLines={1}
                                  weight={'semiBold'}
                                  variant={'subtitle2'}
                                  color={'warningLight'}>
                                  (2 Overdue)
                                </Text>
                              </Text>
                            </View>
                          </View>
                        </View>
                      ),
                    },
                  ]}
                />
                <DataBlock
                  items={[
                    {
                      jsxLeftElement: (
                        <View
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View>
                            <Avatar uri={avatarUri} radius="full" />
                          </View>
                          <View
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{marginLeft: 10, flex: 1}}>
                            <Heading variant="h4">Team Member 1</Heading>
                            <View
                              // eslint-disable-next-line react-native/no-inline-styles
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: minorScale(0.5),
                              }}>
                              <Text
                                numberOfLines={1}
                                variant={'subtitle2'}
                                color={'graySix'}>
                                5/10 Complated
                                <Text
                                  numberOfLines={1}
                                  weight={'semiBold'}
                                  variant={'subtitle2'}
                                  color={'warningLight'}>
                                  (2 Overdue)
                                </Text>
                              </Text>
                            </View>
                          </View>
                        </View>
                      ),
                      jsxRightElement: (
                        <View
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View>
                            <Avatar uri={avatarUri} radius="full" />
                          </View>
                        </View>
                      ),
                    },
                  ]}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* People Tabs */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">People Tabs</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">
                Tabs component used with person record and similar components.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    backgroundColor: 'green',
                    padding: 12,
                  }}>
                  <PeopleTabs
                    items={peopleTabsItems}
                    onChange={item => setSelectedPeopleTabItem(item.value)}
                    selected={selectedPeopleTabItem}
                  />
                </View>
              </Row>

              <Text variant="caption" muted>
                The green background is only used for contrast.
              </Text>
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
                  required
                  onPress={() => setIsChecked(!isChecked)}
                  label="Required"
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
                  isChecked={isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Alternate Anatomy"
                  hint="With Hint"
                />
              </Row>
              <Row>
                <Checkbox
                  disabled
                  isChecked={!isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Checked Disabled State"
                />
              </Row>
              <Row>
                <Checkbox
                  disabled
                  isChecked={isChecked}
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
                Links are used to navigate to other screens or to open an
                external url.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Link to="home" label="View All" />
              </Row>
              <Row>
                <Link to="home" label="Small Label Link" small />
              </Row>
              <Row>
                <Link
                  to="home"
                  label="Colored Label Link"
                  color="successLight"
                />
              </Row>
              <Row>
                <Link to="home">
                  <Text>Supports Children Too</Text>
                </Link>
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
              <Row>
                <Text variant="caption" color="primaryLight">
                  COLORED TEXT &mdash; Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,{' '}
                  <Text variant="subtitle" color="dangerLight">
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </Text>{' '}
                  Excepteur sint occaecat cupidatat non proident,{' '}
                  <Text variant="button" color="successLight">
                    sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </Text>
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
              <Text variant="caption">Radio Optional params</Text>
            </Section.Description>

            <Section.Content>
              <Row>
                <Radio
                  direction="vertical"
                  selected={selectedRadioWithOptions}
                  onChange={setSelectedRadioWithOptions}
                  options={radioOptionsWithLeftChildren}
                  optionContainerStyle={optionContainerStyle}
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
                  label="Required Picker"
                  required
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

          {/* People list item */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">People List Item</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Simple People List Item</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <PeopleListItem
                  name="Jane doe"
                  profilePic={null}
                  isShowCheckbox={false}
                  rightButtons={null}
                  leftButtons={null}
                  middleElement={
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        flex: 1,
                        paddingVertical: minorScale(1),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          flex: 1,
                        }}
                        variant={'caption'}>
                        Married | Male | 50 | Lake Forest
                      </Text>
                    </View>
                  }
                  footerElement={
                    <Text variant={'caption'}>Core Mile Stone</Text>
                  }
                />
              </Row>
              <Row>
                <PeopleListItem
                  name="Jane doe"
                  profilePic={null}
                  userId="301428"
                  isShowCheckbox={true}
                  rightButtons={null}
                  leftButtons={null}
                  middleElement={
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        flex: 1,
                        paddingVertical: minorScale(1),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          flex: 1,
                        }}
                        variant={'caption'}>
                        Married | Male | 50 | Lake Forest
                      </Text>
                    </View>
                  }
                />
              </Row>
              <Row>
                <PeopleListItem
                  onSwipeStart={() => closeRow(0)}
                  onRef={ref => (swipeable[0] = ref)}
                  name="Jane doe"
                  profilePic={null}
                  userId="301428"
                  isShowCheckbox={true}
                  rightButtons={null}
                  leftButtons={null}
                  redMarker={true}
                  middleElement={
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        flex: 1,
                        paddingVertical: minorScale(1),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          flex: 1,
                        }}
                        variant={'caption'}>
                        Married | Male | 50 | Lake Forest
                      </Text>
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          color: 'orange',
                          textAlign: 'right',
                        }}
                        variant={'caption'}
                        weight={'bold'}>
                        Overdue
                      </Text>
                    </View>
                  }
                  footerElement={
                    <Text variant={'caption'}>Core Mile Stone</Text>
                  }
                />
                <PeopleListItem
                  onSwipeStart={() => closeRow(1)}
                  onRef={ref => (swipeable[1] = ref)}
                  name="Mark doe"
                  profilePic={null}
                  userId="301428"
                  isShowCheckbox={true}
                  rightButtons={null}
                  leftButtons={null}
                  redMarker={true}
                  middleElement={
                    <View
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        flex: 1,
                        paddingVertical: minorScale(1),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          flex: 1,
                        }}
                        variant={'caption'}>
                        Married | Male | 50 | Lake Forest
                      </Text>
                      <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          color: 'orange',
                          textAlign: 'right',
                        }}
                        variant={'caption'}
                        weight={'bold'}>
                        Overdue
                      </Text>
                    </View>
                  }
                  footerElement={
                    <Text variant={'caption'}>Core Mile Stone</Text>
                  }
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>

          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Core Milestone</Heading>
            </Section.Title>
            <Section.Description>
              <Text variant="caption">Display core milestone</Text>
            </Section.Description>
            <Section.Content>
              <Row>
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
              </Row>
              <Row>
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
                  isAdult={false}
                  isStudent={true}
                  isChild={false}
                />
              </Row>
              <Row>
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
                  isAdult={false}
                  isStudent={false}
                  isChild={true}
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
