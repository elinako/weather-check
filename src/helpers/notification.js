import { NotificationManager } from "react-notifications";

const notification = ({
  type,
  message = "",
  title = "",
  timeOut = 2000,
  callback = () => {},
  priority = false,
}) => {
  return NotificationManager[type.toLowerCase()](
    message,
    title,
    timeOut,
    callback,
    priority
  );
};

export default notification;
