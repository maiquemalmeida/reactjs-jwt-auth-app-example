import React from "react";

import { MdNotifications } from "react-icons/md";

import { Container, Badge, NotificationList, Notification } from "./styles";

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#336699" size="20" />
      </Badge>
      <NotificationList>
        <Notification unread>
          <p>Você possui uma nova notificação.</p>
          <time>há 10 minutos</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você possui uma nova notificação.</p>
          <time>há 20 minutos</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você possui uma nova notificação.</p>
          <time>há 30 minutos</time>
          <button type="button">Marcar como lida</button>
        </Notification>
      </NotificationList>
    </Container>
  );
}
