import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const notificationsRef = useRef();

  const hasUnread = useMemo(
    () => notifications.some(notification => notification.read === false),
    [notifications]
  );

  function clickOut(event) {
    if (!notificationsRef.current.contains(event.target)) {
      setVisible(false);
      window.removeEventListener('click', clickOut);
    }
  }

  function handleSetVisible() {
    if (!visible) {
      setVisible(true);
      setTimeout(() => {
        window.addEventListener('click', clickOut);
      }, 500);
    }
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={handleSetVisible}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList ref={notificationsRef} visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification unread={!notification.read} key={notification._id}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
