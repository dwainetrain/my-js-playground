export const collectIdsAndDocs = (doc) => {
    // pull out id seperately to keep React happy by adding id to list items
    return { id: doc.id, ...doc.data() };
  }