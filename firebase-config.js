import { getFirestore, writeBatch, doc, collection } from "firebase/firestore";

window.migrateToFirestore = async function(legacyData) {
  const db = getFirestore();
  let batch = writeBatch(db);
  let count = 0;
  alert("Migration started! Please wait...");

  for (const district in legacyData) {
    for (const block in legacyData[district]) {
      const villages = legacyData[district][block];
      for (const villageName of villages) {
        const docRef = doc(collection(db, "villages"));
        batch.set(docRef, { name: villageName, block, district });
        count++;

        if (count % 500 === 0) {
          await batch.commit();
          batch = writeBatch(db);
        }
      }
    }
  }
  if (count % 500 !== 0) await batch.commit();
  alert(`🎉 Migration Complete! Total ${count} villages uploaded.`);
}
