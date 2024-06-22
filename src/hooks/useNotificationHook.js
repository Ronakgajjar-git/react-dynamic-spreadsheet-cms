import { useCallback } from "react";
import { notification } from "antd";

function useNotificationHook() {
  const notify = useCallback((data) => {
    notification[data.type]({
      ...data,
    });
  }, []);

  return {
    notify,
  };
}

export default useNotificationHook;