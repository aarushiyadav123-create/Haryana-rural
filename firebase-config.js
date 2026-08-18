// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1234567890abcdefghijklmnop", // Replace with your API Key
    authDomain: "haryana-rural.firebaseapp.com",
    databaseURL: "https://haryana-rural-default-rtdb.firebaseio.com",
    projectId: "haryana-rural",
    storageBucket: "haryana-rural.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdefghijklmnop"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Database Reference
const database = firebase.database();

// Reference to villages data
const villagesRef = database.ref('villages');

// Load all villages from Firebase
function loadVillagesFromFirebase() {
    villagesRef.once('value', (snapshot) => {
        const data = snapshot.val();
        console.log('Villages loaded from Firebase:', data);
        populateDistrictSelect(data);
    });
}

// Populate district dropdown
function populateDistrictSelect(villagesData) {
    let districtSelect = document.getElementById('mainDistrictSelect');
    if (!districtSelect) return;
    
    districtSelect.innerHTML = '<option value="">-- जिला चुनें --</option>';
    
    if (villagesData) {
        Object.keys(villagesData).forEach(district => {
            let opt = document.createElement('option');
            opt.value = district;
            opt.textContent = district;
            districtSelect.appendChild(opt);
        });
    }
}

// Load blocks based on selected district
function loadBlocksFromFirebase() {
    let districtSelect = document.getElementById('mainDistrictSelect');
    let district = districtSelect.value;
    let blockSelect = document.getElementById('mainBlockSelect');
    
    blockSelect.innerHTML = '<option value="">-- खण्ड / Block चुनें --</option>';
    
    if (district) {
        villagesRef.child(district).once('value', (snapshot) => {
            const blocks = snapshot.val();
            if (blocks) {
                Object.keys(blocks).forEach(block => {
                    let opt = document.createElement('option');
                    opt.value = block;
                    opt.textContent = block;
                    blockSelect.appendChild(opt);
                });
            }
        });
    }
}

// Load villages based on selected block
function loadVillagesFromFirebaseBlock() {
    let districtSelect = document.getElementById('mainDistrictSelect');
    let blockSelect = document.getElementById('mainBlockSelect');
    let villageSelect = document.getElementById('mainVillageSelect');
    
    let district = districtSelect.value;
    let block = blockSelect.value;
    
    villageSelect.innerHTML = '<option value="">-- गाँव चुनें --</option>';
    
    if (district && block) {
        villagesRef.child(district).child(block).once('value', (snapshot) => {
            const villages = snapshot.val();
            if (villages && Array.isArray(villages)) {
                villages.forEach(village => {
                    let opt = document.createElement('option');
                    opt.value = village;
                    opt.textContent = village;
                    villageSelect.appendChild(opt);
                });
            } else if (villages && typeof villages === 'object') {
                Object.keys(villages).forEach(village => {
                    let opt = document.createElement('option');
                    opt.value = village;
                    opt.textContent = village;
                    villageSelect.appendChild(opt);
                });
            }
        });
    }
    
    // Add custom option
    let otherOpt = document.createElement('option');
    otherOpt.value = "OTHER";
    otherOpt.textContent = "➕ गाँव सूची में नहीं है? (यहाँ नाम लिखें)";
    villageSelect.appendChild(otherOpt);
}

// Save new shop/service to Firebase
function saveToFirebase(district, block, village, shopData) {
    const ref = database.ref(`services/${district}/${block}/${village}`);
    ref.push(shopData, (error) => {
        if (error) {
            console.error("Error saving data:", error);
            alert('❌ डेटा सेव नहीं हुआ!');
        } else {
            console.log("Data saved successfully!");
            alert('✅ आपकी दुकान/सेवा सफलतापूर्वक दर्ज हो गई है!');
        }
    });
}

// Load services for a specific village
function loadServicesFromFirebase(district, block, village) {
    const ref = database.ref(`services/${district}/${block}/${village}`);
    ref.once('value', (snapshot) => {
        const services = snapshot.val();
        displayServices(services);
    });
}

// Initialize on page load
window.addEventListener('load', () => {
    loadVillagesFromFirebase();
});
