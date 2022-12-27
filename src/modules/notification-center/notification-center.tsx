// Modules
import * as React from 'react';
import Styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Moment from 'moment';

// Types
import {
  IGroupWrapper,
  INotification,
  IProps,
} from './notification-center.types';

// Shared
import {majorScale} from '../scales';
import BottomSheet from '../bottom-sheet/bottom-sheet';
import NotificationCenterItem from './notification-center-item';
import Icon from '../icon/icon-external';
import Switch from '../switch/switch';
import Text from '../text/text';

// Images
import IconAlert from '../../images/alert.svg';

// Styles
export const Wrapper = Styled.ScrollView`
  width: 100%;
  height: 100%;
  padding-horizontal: ${majorScale(2)}px;
  border-top-color: ${({theme}) => theme.colors.grayThree};
  border-top-width: 1px;
`;
export const Group = {
  Wrapper: Styled.View<IGroupWrapper>`
    margin-top: ${majorScale(2)}px;
    padding-bottom: ${majorScale(2)}px;
    border-bottom-width: 1px;

    border-bottom-color: ${({theme, $hasBottomBorder = true}) => {
      return $hasBottomBorder ? theme.colors.grayThree : theme.colors.white;
    }};
  `,
  TitleWrapper: Styled.View`
    margin-bottom: ${majorScale(1)}px;
  `,
  Children: Styled.View``,
};
export const Settings = {
  Wrapper: Styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-vertical: ${majorScale(1)}px;
    padding-horizontal: ${majorScale(2)}px;
    margin-horizontal: -${majorScale(2)}px;

    border-bottom-color: ${({theme}) => theme.colors.grayThree};
    border-bottom-width: 1px;
  `,
  Left: Styled.View`
    width: 80%;
    justify-content: center;
    align-items: flex-start;
  `,
  Right: Styled.View`
    width: 20%;
    justify-content: center;
    align-items: flex-end;
  `,
};
export const EmptyStateWrapper = Styled.View`
  padding-vertical: ${majorScale(4)}px;
`;
export const RedDot = Styled.View`
  width: 8px; height: 8px;
  background: ${({theme}) => theme.colors.dangerLight};
  border-color: ${({theme}) => theme.colors.white};
  margin-left: ${majorScale(0.5)}px;
  border-radius: 8px;
  border-width: 1px;

  position: absolute;
  top: 50%; right: 0;
`;

// Component: Notification Center
export const NotificationCenter: React.FC<IProps> = ({
  notifications,
  areNotificationsEnabled = false,
  showNotificationStatusSwitch = false,
  hasUnreadNotifications = false,
  onTurnOffNotifications,
  onTurnOnNotifications,
  onPressNotification,
  triggerJsx,
}): React.ReactElement => {
  // State
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const [todayItems, setTodayItems] = React.useState<Array<INotification>>([]);
  const [olderItems, setOlderItems] = React.useState<Array<INotification>>([]);
  const [yesterdayItems, setYesterdayItems] = React.useState<
    Array<INotification>
  >([]);

  // Group Notifications
  // eslint-disable-next-line no-shadow
  const groupNotifications = (notifications: Array<INotification>): void => {
    const updatedTodayItems = [];
    const updatedYesterdayItems = [];
    const updatedOlderItems = [];

    notifications?.forEach((notification: INotification) => {
      const {createDate} = notification;

      const notificationDate = Moment.unix(createDate);

      const today = Moment();
      const yesterday = Moment().subtract(1, 'day');

      const fmtNotificationDate = notificationDate.format('DD MMM, YYYY');

      const updatedNotification = {
        ...notification,
        notificationDate: fmtNotificationDate,
      };

      if (Moment(notificationDate).isSame(today, 'day')) {
        // @ts-ignore
        updatedTodayItems.push(updatedNotification);
      }

      if (Moment(notificationDate).isSame(yesterday, 'day')) {
        // @ts-ignore
        updatedYesterdayItems.push(updatedNotification);
      }

      if (Moment(notificationDate).isBefore(yesterday, 'day')) {
        // @ts-ignore
        updatedOlderItems.push(updatedNotification);
      }
    });

    setTodayItems(updatedTodayItems);
    setYesterdayItems(updatedYesterdayItems);
    setOlderItems(updatedOlderItems);
  };

  // Open Drawer
  const openDrawer = (): void => {
    setIsDrawerOpen(true);
  };

  // Close Drawer
  const closeDrawer = (): void => {
    setIsDrawerOpen(false);
  };

  // On Change Notification Status
  const onChangeNotificationStatus = async (): Promise<void> => {
    if (areNotificationsEnabled) {
      await onTurnOffNotifications?.();
    } else {
      await onTurnOnNotifications?.();
    }
  };

  React.useEffect(() => {
    groupNotifications(notifications);
  }, [notifications]);

  const hasNotificationsToday: boolean = todayItems?.length > 0;
  const hasNotificationsYesterday: boolean = yesterdayItems?.length > 0;
  const hasNotificationsOlder: boolean = olderItems?.length > 0;

  const hasNotifications: boolean =
    hasNotificationsToday || hasNotificationsYesterday || hasNotificationsOlder;

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.75}
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
        testID="notification-center-toggle-button"
        onPress={openDrawer}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 25}}>
        {triggerJsx || <Icon file={IconAlert} />}

        {hasUnreadNotifications && (
          <RedDot testID="notification-center-unread-indicator" />
        )}
      </TouchableOpacity>

      <BottomSheet
        isOpen={isDrawerOpen}
        onDismiss={closeDrawer}
        header={{
          title: 'Notifications',
        }}>
        <Wrapper
          showsVerticalScrollIndicator={false}
          bounces={hasNotifications}>
          {/* Notification Settings */}
          {showNotificationStatusSwitch && (
            <Settings.Wrapper>
              <Settings.Left>
                <Text>Enable Push Notifications</Text>
              </Settings.Left>
              <Settings.Right>
                <Switch
                  isActive={areNotificationsEnabled}
                  onPress={onChangeNotificationStatus}
                />
              </Settings.Right>
            </Settings.Wrapper>
          )}

          {/* Empty State */}
          {!hasNotifications && (
            <EmptyStateWrapper>
              <Text alignment="center" weight="regular" muted>
                You do not have any notifications.
              </Text>
            </EmptyStateWrapper>
          )}

          {/* Today */}
          {hasNotificationsToday && (
            <Group.Wrapper>
              <Group.TitleWrapper>
                <Text color="grayFive" weight="semiBold">
                  Today
                </Text>
              </Group.TitleWrapper>

              <Group.Children>
                {todayItems.map((notification: INotification) => (
                  <NotificationCenterItem
                    key={notification.id}
                    title={notification.title}
                    subtitle={notification.subtitle}
                    onPress={() => onPressNotification(notification)}
                    isUnread={notification.isUnread}
                    iconFile={notification.icon}
                  />
                ))}
              </Group.Children>
            </Group.Wrapper>
          )}

          {/* Yesterday */}
          {hasNotificationsYesterday && (
            <Group.Wrapper>
              <Group.TitleWrapper>
                <Text color="grayFive" weight="semiBold">
                  Yesterday
                </Text>
              </Group.TitleWrapper>

              <Group.Children>
                {yesterdayItems.map((notification: INotification) => (
                  <NotificationCenterItem
                    key={notification.id}
                    title={notification.title}
                    subtitle={notification.subtitle}
                    onPress={() => onPressNotification(notification)}
                    isUnread={notification.isUnread}
                    iconFile={notification.icon}
                  />
                ))}
              </Group.Children>
            </Group.Wrapper>
          )}

          {/* Older */}
          {hasNotificationsOlder && (
            <Group.Wrapper $hasBottomBorder={false}>
              <Group.TitleWrapper>
                <Text color="grayFive" weight="semiBold">
                  Older
                </Text>
              </Group.TitleWrapper>

              <Group.Children>
                {olderItems.map((notification: INotification) => (
                  <NotificationCenterItem
                    key={notification.id}
                    title={notification.title}
                    subtitle={notification.subtitle}
                    onPress={() => onPressNotification(notification)}
                    isUnread={notification.isUnread}
                    iconFile={notification.icon}
                  />
                ))}
              </Group.Children>
            </Group.Wrapper>
          )}
        </Wrapper>
      </BottomSheet>
    </>
  );
};

// Exports
export default NotificationCenter;
