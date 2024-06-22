import useSWR from "swr";
import api from "../service/api";
import { dataToSpreadsheetListing } from "../utils/mappingListing";

function useGetMappingListing() {
  const { data, error, isLoading } = useSWR("/mapping", getMappingList);

  return { mappings: dataToSpreadsheetListing(data), error, isLoading };
}

async function getMappingList() {
  const data = await api.get("mapping");

  return data?.data || [];
}
export default useGetMappingListing;
