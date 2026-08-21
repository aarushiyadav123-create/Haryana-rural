import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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

let base64PhotoStore = {};

window.initPortal = function() {
    populateAllDistrictDropdowns();
};

function populateAllDistrictDropdowns() {
    const selects = ["mainDistrictSelect", "regDistrict"];
    const sortedDistricts = Object.keys(haryanaMasterData).sort();

    selects.forEach(id => {
        const sel = document.getElementById(id);
        if(sel) {
            sel.innerHTML = '<option value="">-- जिला चुनें --</option>';
            sortedDistricts.forEach(dist => {
                sel.innerHTML += `<option value="${dist}">${dist}</option>`;
            });
        }
    });
}

function updateBlockDropdown(districtId, blockId, villageId) {
    const dist = document.getElementById(districtId).value;
    const blockSel = document.getElementById(blockId);
    const villSel = document.getElementById(villageId);

    blockSel.innerHTML = '<option value="">-- ब्लॉक चुनें --</option>';
    if(villSel) villSel.innerHTML = '<option value="">-- पहले ब्लॉक चुनें --</option>';

    if (dist && haryanaMasterData[dist]) {
        Object.keys(haryanaMasterData[dist]).sort().forEach(block => {
            blockSel.innerHTML += `<option value="${block}">${block}</option>`;
        });
    }
}

function updateVillageDropdown(districtId, blockId, villageId) {
    const dist = document.getElementById(districtId).value;
    const block = document.getElementById(blockId).value;
    const villSel = document.getElementById(villageId);

    villSel.innerHTML = '<option value="">-- गाँव चुनें --</option>';

    if (dist && block && haryanaMasterData[dist] && haryanaMasterData[dist][block]) {
        [...haryanaMasterData[dist][block]].sort().forEach(vill => {
            villSel.innerHTML += `<option value="${vill}">${vill}</option>`;
        });
    }
}

window.onMainDistrictChange = () => updateBlockDropdown("mainDistrictSelect", "mainBlockSelect", "mainVillageSelect");
window.onMainBlockChange = () => updateVillageDropdown("mainDistrictSelect", "mainBlockSelect", "mainVillageSelect");

window.onRegDistrictChange = () => updateBlockDropdown("regDistrict", "regBlock", "regVillage");
window.onRegBlockChange = () => updateVillageDropdown("regDistrict", "regBlock", "regVillage");

window.onVillageSelected = function() {
    const vill = document.getElementById("mainVillageSelect").value;
    const dist = document.getElementById("mainDistrictSelect").value;
    if(vill) {
        document.getElementById("headerTitle").innerText = `मेरा गाँव - ${vill.toUpperCase()}`;
        document.getElementById("currentLocationBadge").innerText = `📍 स्थान: गाँव ${vill}, जिला ${dist}`;
    }
};

window.previewImage = function(event, imgId, holderId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            base64PhotoStore[imgId] = e.target.result;
            const img = document.getElementById(imgId);
            img.src = e.target.result;
            img.style.display = "block";
            const holder = document.getElementById(holderId);
            if(holder) holder.style.display = "none";
        }
        reader.readAsDataURL(file);
    }
};

window.searchServices = async function() {
    const selectedDist = (document.getElementById("mainDistrictSelect").value || "").trim().toLowerCase();
    const selectedVill = (document.getElementById("mainVillageSelect").value || "").trim().toLowerCase();
    const result = document.getElementById("searchResult");

    if (!selectedDist || !selectedVill) {
        result.innerHTML = `<p style="color:red; font-weight:bold;">कृपया जिला और गाँव चुनें!</p>`;
        return;
    }

    result.innerHTML = `<p style="color:#0277bd;">डाटा लोड हो रहा है...</p>`;

    try {
        const querySnapshot = await getDocs(collection(db, "haryanagramin"));
        let matchedShops = [];
        querySnapshot.forEach((doc) => {
            const shop = doc.data();
            if ((shop.dist || "").trim().toLowerCase() === selectedDist && (shop.vill || "").trim().toLowerCase() === selectedVill) {
                matchedShops.push(shop);
            }
        });

        if (matchedShops.length === 0) {
            result.innerHTML = `<p style="color:#666;">इस गाँव में अभी कोई दुकान पंजीकृत नहीं है।</p>`;
            return;
        }

        let html = "";
        matchedShops.forEach(shop => {
            html += `<div style="background:#f9f9f9; padding:10px; margin-bottom:8px; border-left:4px solid green;">
                <h4 style="margin:0 0 5px 0;">${shop.name}</h4>
                <p style="margin:0 0 5px 0; font-size:0.85rem;">गाँव: ${shop.vill}</p>
                <a href="tel:${shop.phone}" style="font-size:0.85rem; color:green; font-weight:bold;">📞 कॉल करें: ${shop.phone}</a></div>`;
        });
        result.innerHTML = html;
    } catch (e) {
        result.innerHTML = `<p style="color:red;">डेटा लोड करने में समस्या आई।</p>`;
    }
};

window.submitShop = async function() {
    const name = document.getElementById("regShopName").value.trim();
    const dist = document.getElementById("regDistrict").value;
    const block = document.getElementById("regBlock").value;
    const vill = document.getElementById("regVillage").value;
    const phone = document.getElementById("regPhone").value.trim();
    const photo = base64PhotoStore['shopImgPrev'];

    if(!name || !dist || !block || !vill || !phone || !photo) {
        alert("कृपया सभी जानकारी और फोटो भरें!");
        return;
    }

    try {
        await addDoc(collection(db, "haryanagramin"), { name, dist, block, vill, phone, photo });
        alert("✅ दुकान सफलतापूर्वक दर्ज हो गई!");
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
