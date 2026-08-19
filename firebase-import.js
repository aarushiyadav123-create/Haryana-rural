// firebase-import.js
import { ref, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { database } from "./firebase-config.js";

async function uploadVillagesToFirebase() {
  try {
    console.log("Uploading villages to Realtime Database...");
    
    if (typeof haryana_complete_database === 'undefined') {
      alert("Please load haryana-villages-complete.js first!");
      return;
    }

    // Realtime Database में 'villages' node के अंदर पूरा डेटा सेट करना
    await set(ref(database, 'villages'), haryana_complete_database);
    
    alert("✅ All 7,000+ villages successfully uploaded to Realtime Database!");
  } catch (error) {
    console.error("Error uploading data: ", error);
    alert("❌ Upload failed. Check console.");
  }
}

// Browser console में चलाने के लिए
window.uploadVillagesToFirebase = uploadVillagesToFirebase;
