import api from "../service/api";
import { mutate } from "swr";
import useNotification from "./useNotificationHook";

function useMappingOperations() {
  const { notify } = useNotification();

  async function createMapping(data) {
    const res = await api.post("/mapping", data);

    if (!res) {
      return;
    }

    notify({
      message: "Mapping created successfully",
      type: "success",
    });

    mutate("/mapping");

    return res.data;
  }

  async function updateMapping() { }

  async function deleteMapping() { }

  async function deleteMultipleMappings() { }

  return {
    createMapping,
    updateMapping,
    deleteMapping,
    deleteMultipleMappings,
  };
}

export default useMappingOperations;
