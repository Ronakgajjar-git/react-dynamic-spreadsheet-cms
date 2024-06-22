export function dataToSpreadsheetListing(data = []) {
  if (!data) {
    return [];
  }

  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      createdAt: new Date(item.created_at).toLocaleDateString(),
    };
  });
}