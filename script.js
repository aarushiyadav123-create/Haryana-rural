import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// अपने Firebase Config यहाँ सही डालें
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.initPortal = function() {
    console.log("Portal Initialized with Cloud DB");
};

window.searchServices = async function() {
    const selectedDist = (document.getElementById("mainDistrictSelect").value || "").trim().toUpperCase();
    const selectedVill = (document.getElementById("mainVillageInput").value || "").trim().toLowerCase();
    const result = document.getElementById("searchResult");

    if (!selectedDist || !selectedVill) {
        result.innerHTML = `<p style="color:red; font-weight:bold;">कृपया जिला और गाँव का नाम भरें!</p>`;
        return;
    }

    result.innerHTML = `<p style="color:#0277bd;">क्लाउड से डेटा खोजा जा रहा है...</p>`;

    try {
        const querySnapshot = await getDocs(collection(db, "haryanagramin"));
        let matchedShops = [];
        
        querySnapshot.forEach((doc) => {
            const shop = doc.data();
            const shopDist = (shop.dist || "").trim().toUpperCase();
            const shopVill = (shop.vill || "").trim().toLowerCase();

            // मैचिंग चेक करें
            if (shopDist === selectedDist && shopVill.includes(selectedVill)) {
                matchedShops.push(shop);
            }
        });

        if (matchedShops.length === 0) {
            result.innerHTML = `<p style="color:#666;">इस नाम से कोई दुकान या सेवा पंजीकृत नहीं मिली। आप नीचे दिए गए फॉर्म से नया जोड़ सकते हैं।</p>`;
            return;
        }

        let html = "";
        matchedShops.forEach(shop => {
            html += `<div style="background:#f9f9f9; padding:10px; margin-bottom:8px; border-left:4px solid green; border-radius:4px;">
                <h4 style="margin:0 0 5px 0; color:#1b5e20;">${shop.name}</h4>
                <p style="margin:0 0 5px 0; font-size:0.85rem;">गाँव: ${shop.vill}</p>
                <a href="tel:${shop.phone}" style="font-size:0.85rem; color:green; font-weight:bold; text-decoration:none;">📞 कॉल करें: ${shop.phone}</a></div>`;
        });
        result.innerHTML = html;
    } catch (e) {
        result.innerHTML = `<p style="color:red;">डेटा लोड करने में समस्या आई: ${e.message}</p>`;
    }
};

window.submitShop = async function() {
    const name = document.getElementById("regShopName").value.trim();
    const dist = document.getElementById("regDistrict").value.toUpperCase();
    const vill = document.getElementById("regVillage").value.trim();
    const phone = document.getElementById("regPhone").value.trim();

    if(!name || !dist || !vill || !phone) {
        alert("कृपया सभी जानकारी भरें!");
        return;
    }

    try {
        await addDoc(collection(db, "haryanagramin"), { 
            name: name, 
            dist: dist, 
            vill: vill, 
            phone: phone,
            timestamp: new Date().toISOString()
        });
        alert("✅ दुकान सफलतापूर्वक Firebase क्लाउड में दर्ज हो गई!");
        location.reload();
    } catch(err) {
        alert("डेटा सेव करने में एरर आया: " + err.message);
    }
};

window.toggleSection = function(boxId, iconId) {
    const box = document.getElementById(boxId);
    const icon = document.getElementById(iconId);
    const isVisible = box.style.display === "block";
    box.style.display = isVisible ? "none" : "block";
    icon.innerText = isVisible ? "▼" : "▲";
};
