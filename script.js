// सम्पूर्ण हरियाणा मास्टर डेटा
const haryanaMasterData = {
    "AMBALA": {
        "AMBALA": ["Ambala Rural", "Panjokhra", "Dora", "Sarsehri", "Tandwal", "Babalpur", "Machhonda", "Gardh", "Bara", "Machhrauli", "Kakru", "Pabni"],
        "BARARA": ["Barara", "Mulana", "Dhurala", "Bhedthal", "Topra", "Dabkoli", "Naneola", "Garaul", "Babain"],
        "NARAINGARH": ["Naraingarh", "Shahzadpur", "Lalru", "Bhareli", "Naggal", "Kohlapur", "Panjlasa", "Kot", "Tokha"],
        "SAHA": ["Saha", "Keshpur", "Ugala", "Kesri", "Landhaura", "Shergarh", "Dabkoli Kalan"]
    },
    "BHIWANI": {
        "BHIWANI": ["Bhiwani Rural", "Dinod", "Bidhwan", "Talu", "Nangal", "Biran", "Chang", "Nimri", "Bapora", "Kitlana", "Siwani", "Jhumpa"],
        "BAWANI KHERA": ["Bawani Khera", "Miran", "Jatu Lohari", "Sisar", "Kairu", "Jhamuwas", "Sui", "Badhal", "Garhi"],
        "SIWANI": ["Siwani", "Bhiwani Rohilla", "Kairu", "Barwala", "Ghangala", "Jali", "Dariyapur", "Mithan"],
        "TOSHAM": ["Tosham", "Khanak", "Dhandalan", "Sisar", "Dang Kalan", "Bishan", "Dadam"],
        "LOHARU": ["Loharu", "Jui", "Sisahani", "Digwa", "Alawalpur", "Kairu", "Bahal", "Singhani"]
    },
    "CHARKHI DADRI": {
        "BADHRA": ["Badhra", "Mandola", "Ranila", "Kallana", "Khadal", "Chappar", "Assal", "Akhana", "Biran", "Pandwan", "Jhojhu", "Kheri", "Imloita", "Kheri Bura"],
        "CHARKHI DADRI": ["Dadri Rural", "Jhojhu Kalan", "Kachri", "Ramalwas", "Sarni", "Data", "Mankawas", "Pyal", "Maurana", "Birhi Kalan", "Bhiwani Rohilla", "Mahu"],
        "BAUND": ["Achina", "Bas Ranila", "Baund Kalan", "Baund Khurd", "Hindol", "Jayatshri", "Jhinjhar", "Kamod", "Kasni", "Malkosh", "Sankrod", "Sanjarwas"]
    },
    "ROHTAK": {
        "KALANAUR": [
            "Anwal", "Bahali Anandpur", "Ballab", "Baniyani", "Basana", 
            "Gaddhi Kheri", "Garhi Ballab", "Garnawathi", "Gudhan", "Gurnauthi", 
            "Jindran Kalan", "Kakrana", "Kalanaur Kalan", "Kalanaur Khurd", "Kalanaur Rural", 
            "Katesra", "Kahnaur", "Kherari", "Lahli", "Manjha", 
            "Maroudi Jatan", "Maroudi Rangran", "Masudpur", "Matana", "Nigana", 
            "Patwapur", "Pilana", "Sampal", "Sanga Hera", "Sundana", "Taimurpur"
        ],
        "SAMPLA": [
            "Atail", "Balkara", "Bhalout", "Bora", "Dattaur", 
            "Gandhra", "Garhi Sampla", "Hasangarh", "Ismaila 11B", "Ismaila 9B", 
            "Kharawar", "Kullasi", "Kheri Sampla", "Naoabad", "Nishti", 
            "Pakasma", "Rohad", "Sampla Khas"
        ],
        "ROHTAK": [
            "Asthal Bohar", "Bahu Akberpur", "Bahu Jamalpur", "Baland", "Basantpur", 
            "Bhagotipur", "Bhaiyan Pur", "Bhalot", "Bohar", "Chamaria", 
            "Dhamar", "Dobh", "Ghuskani", "Humayunpur", "Jalalpur", 
            "Jasia", "Kanheli", "Kansala", "Karountha", "Katwara", 
            "Khadwali", "Kharak Churangla", "Kheri Sadh", "Kiloi Dopana", "Kiloi Khas", 
            "Kutana", "Kutani", "Ladhot", "Maina", "Makrauli Kalan", 
            "Makrauli Khurd", "Nasirpur", "Paharipur", "Pahrawar", "Polangi", 
            "Rithal Narwal", "Rithal Phogat", "Rohtak Rural", "Rurki", "Sarai Ahmed", 
            "Singhpura", "Sunaria Kalan", "Sunaria Khurd", "Sunderpur", "Titoli"
        ],
        "MEHAM": [
            "Aaron", "Balam", "Beani", "Bhaini Bhairon", "Bhaini Chanderpal", 
            "Bhaini Maharajpur", "Chiri", "Farmana Khas", "Gharethi", "Kheri Meham", 
            "Madina Gindhran", "Madina Korsan", "Meham Rural", "Mokhra Khas", "Mokhra Kheri", 
            "Nandal", "Nindana", "Saman", "Sarsa", "Semli"
        ]
    },
    "JHAJJAR": {
        "JHAJJAR": ["Jhajjar Rural", "Gudha", "Chhuchhakwas", "Dighal", "Bahu", "Kutani", "Dulhera", "Kablana", "Silani"],
        "BAHADURGARH": ["Bahadurgarh Rural", "Sankhol", "Mandothi", "Rohad", "Bamdoli", "Kasshan", "Asaudha"],
        "BERI": ["Beri Rural", "Dighal", "Dhubaldhan", "Gochhi", "Lakria", "Bhagrah"],
        "MATANHAIL": ["Matanhail", "Chhuchhakwas", "Bahu Jholri", "Sahlawas", "Marot"]
    },
    "SONIPAT": {
        "SONIPAT": ["Sonipat Rural", "Ganaur Rural", "Gohana Rural", "Rai", "Murthal", "Kharkhoda Rural", "Kundli", "Rathdhana", "Larsauli"],
        "GANAUR": ["Ganaur Rural", "Badi", "Panchi Jattan", "Larsauli", "Barhi"],
        "GOHANA": ["Gohana Rural", "Baroda", "Khanpur Kalan", "Mahra", "Bhutana"],
        "KHARKHODA": ["Kharkhoda Rural", "Saidpur", "Pipli", "Ridhau", "Thana Kalan"]
    }
};

let simulatedOTP = "";
let isPhoneVerified = false;

window.onload = function() {
    populateDistricts('mainDistrictSelect');
    populateDistricts('regDistrict');
    populateDistricts('galDistrict');
    populateDistricts('eventDistrict');
};

function populateDistricts(selectId) {
    let select = document.getElementById(selectId);
    if (!select) return;
    select.innerHTML = '<option value="">-- जिला चुनें --</option>';
    Object.keys(haryanaMasterData).sort().forEach(dist => {
        let opt = document.createElement('option');
        opt.value = dist;
        opt.textContent = dist;
        select.appendChild(opt);
    });
}

function toggleMenu() {
    let dropdown = document.getElementById("myDropdown");
    if(dropdown) dropdown.classList.toggle("show");
}

function toggleCategoryDropdown() {
    let content = document.getElementById("catDropdownContent");
    let arrow = document.getElementById("catArrow");
    if(content) content.classList.toggle("show");
    if(arrow) arrow.textContent = content.classList.contains("show") ? "▲" : "▼";
}

function toggleSection(boxId, iconId) {
    let box = document.getElementById(boxId);
    let icon = document.getElementById(iconId);
    if (!box) return;
    if (box.style.display === "block") {
        box.style.display = "none";
        if (icon) icon.textContent = "▼";
    } else {
        box.style.display = "block";
        if (icon) icon.textContent = "▲";
    }
}

function loadBlocks() {
    let dist = document.getElementById('mainDistrictSelect').value;
    let blockSelect = document.getElementById('mainBlockSelect');
    let villageSelect = document.getElementById('mainVillageSelect');
    blockSelect.innerHTML = '<option value="">-- खण्ड / Block चुनें --</option>';
    villageSelect.innerHTML = '<option value="">-- पहले ब्लॉक चुनें --</option>';

    if (dist && haryanaMasterData[dist]) {
        Object.keys(haryanaMasterData[dist]).forEach(blk => {
            let opt = document.createElement('option');
            opt.value = blk;
            opt.textContent = blk;
            blockSelect.appendChild(opt);
        });
    }
}

function loadVillages() {
    let dist = document.getElementById('mainDistrictSelect').value;
    let blk = document.getElementById('mainBlockSelect').value;
    let villageSelect = document.getElementById('mainVillageSelect');
    villageSelect.innerHTML = '<option value="">-- गाँव चुनें --</option>';

    if (dist && blk && haryanaMasterData[dist] && haryanaMasterData[dist][blk]) {
        haryanaMasterData[dist][blk].forEach(vlg => {
            let opt = document.createElement('option');
            opt.value = vlg;
            opt.textContent = vlg;
            villageSelect.appendChild(opt);
        });
    }
}

function updateHeaderVillageName() {
    let vlg = document.getElementById('mainVillageSelect').value;
    let subTitle = document.getElementById('headerSubTitle');
    if (subTitle) {
        subTitle.textContent = vlg ? "राम राम भाइयों, आपके गाँव (" + vlg + ") में स्वागत है" : "राम राम भाइयों, आपके गाँव में स्वागत है";
    }
}

function searchServices() {
    let dist = document.getElementById('mainDistrictSelect').value;
    let blk = document.getElementById('mainBlockSelect').value;
    let vlg = document.getElementById('mainVillageSelect').value;
    let code = document.getElementById('secCodeInput') ? document.getElementById('secCodeInput').value : '';
    let resBox = document.getElementById('searchResult');

    if (!dist || !blk || !vlg) {
        alert('कृपया जिला, ब्लॉक और गाँव चुनें!');
        return;
    }

    if (resBox) {
        resBox.innerHTML = `
            <div style="background: #e8f5e9; border: 1px solid #a5d6a7; padding: 12px; border-radius: 6px; margin-top: 10px;">
                <h4 style="color: #2e7d32;">📍 गाँव: ${vlg} (${blk}, ${dist})</h4>
                <p style="font-size: 0.85rem; margin-top: 5px;">सुरक्षा कोड: <strong>${code}</strong></p>
            </div>
        `;
    }
}

function onRegDistrictChange() {
    let dist = document.getElementById('regDistrict').value;
    let blkSel = document.getElementById('regBlock');
    let vlgSel = document.getElementById('regVillage');
    if(!blkSel || !vlgSel) return;
    blkSel.innerHTML = '<option value="">-- खण्ड चुनें --</option>';
    vlgSel.innerHTML = '<option value="">-- पहले ब्लॉक चुनें --</option>';
    if (dist && haryanaMasterData[dist]) {
        Object.keys(haryanaMasterData[dist]).forEach(b => {
            let opt = document.createElement('option');
            opt.value = b;
            opt.textContent = b;
            blkSel.appendChild(opt);
        });
    }
}

function onRegBlockChange() {
    let dist = document.getElementById('regDistrict').value;
    let blk = document.getElementById('regBlock').value;
    let vlgSel = document.getElementById('regVillage');
    if(!vlgSel) return;
    vlgSel.innerHTML = '<option value="">-- गाँव चुनें --</option>';
    if (dist && blk && haryanaMasterData[dist] && haryanaMasterData[dist][blk]) {
        haryanaMasterData[dist][blk].forEach(v => {
            let opt = document.createElement('option');
            opt.value = v;
            opt.textContent = v;
            vlgSel.appendChild(opt);
        });
    }
}

function onGalDistrictChange() {
    let dist = document.getElementById('galDistrict').value;
    let blkSel = document.getElementById('galBlock');
    let vlgSel = document.getElementById('galVillage');
    if(!blkSel || !vlgSel) return;
    blkSel.innerHTML = '<option value="">-- खण्ड चुनें --</option>';
    vlgSel.innerHTML = '<option value="">-- पहले ब्लॉक चुनें --</option>';
    if (dist && haryanaMasterData[dist]) {
        Object.keys(haryanaMasterData[dist]).forEach(b => {
            let opt = document.createElement('option');
            opt.value = b;
            opt.textContent = b;
            blkSel.appendChild(opt);
        });
    }
}

function onGalBlockChange() {
    let dist = document.getElementById('galDistrict').value;
    let blk = document.getElementById('galBlock').value;
    let vlgSel = document.getElementById('galVillage');
    if(!vlgSel) return;
    vlgSel.innerHTML = '<option value="">-- गाँव चुनें --</option>';
    if (dist && blk && haryanaMasterData[dist] && haryanaMasterData[dist][blk]) {
        haryanaMasterData[dist][blk].forEach(v => {
            let opt = document.createElement('option');
            opt.value = v;
            opt.textContent = v;
            vlgSel.appendChild(opt);
        });
    }
}

function fetchGPSLocationAndVerifyDistrict() {
    let coordInput = document.getElementById('regGPSCoord');
    let statusDiv = document.getElementById('districtApiStatus');
    if (navigator.geolocation) {
        if(statusDiv) statusDiv.textContent = "स्थान प्राप्त किया जा रहा है...";
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                let lat = pos.coords.latitude.toFixed(4);
                let lng = pos.coords.longitude.toFixed(4);
                if(coordInput) coordInput.value = `Lat: ${lat}, Lng: ${lng}`;
                if(statusDiv) statusDiv.innerHTML = `<span style="color: #2e7d32; font-size: 0.8rem;">✔ GPS सत्यापित!</span>`;
            },
            (err) => {
                if(coordInput) coordInput.value = "GPS Unavailable";
                if(statusDiv) statusDiv.innerHTML = `<span style="color: #d32f2f; font-size: 0.8rem;">❌ GPS अनुमति उपलब्ध नहीं।</span>`;
            }
        );
    }
}

function sendOTP() {
    let phone = document.getElementById('regPhone').value;
    if (!phone || phone.length < 10) {
        alert('कृपया 10 अंकों का मोबाइल नंबर दर्ज करें!');
        return;
    }
    simulatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    let disp = document.getElementById('generatedOtpDisplay');
    let box = document.getElementById('otpBox');
    if(disp) disp.textContent = simulatedOTP;
    if(box) box.style.display = 'block';
    alert(`OTP भेजा गया: ${simulatedOTP}`);
}

function verifyOTP() {
    let userInput = document.getElementById('userOtpInput').value;
    let msg = document.getElementById('otpStatusMsg');
    if (userInput === simulatedOTP && userInput !== "") {
        isPhoneVerified = true;
        if(msg) { msg.style.color = "#2e7d32"; msg.textContent = "✔ मोबाइल नंबर वेरीफाई हो गया!"; }
    } else {
        isPhoneVerified = false;
        if(msg) { msg.style.color = "#d32f2f"; msg.textContent = "❌ अमान्य OTP!"; }
    }
}

function previewImage(event, imgId, holderId) {
    let reader = new FileReader();
    reader.onload = function() {
        let output = document.getElementById(imgId);
        let holder = document.getElementById(holderId);
        if(output) { output.src = reader.result; output.style.display = 'block'; }
        if(holder) holder.style.display = 'none';
    };
    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

async function submitShop() {
    let name = document.getElementById('regShopName').value;
    if (!name) { alert('कृपया विवरण भरें!'); return; }
    alert('दुकान/सेवा दर्ज कर ली गई है!');
}

function showPrivacyPolicy() {
    alert("प्राइवेसी पॉलिसी:\nयह पोर्टल उपयोगकर्ताओं के डेटा की सुरक्षा को प्राथमिकता देता है।");
}
function submitAd() {
    let title = document.getElementById('adTitle') ? document.getElementById('adTitle').value : '';
    let price = document.getElementById('adPrice') ? document.getElementById('adPrice').value : '';
    let phone = document.getElementById('adPhone') ? document.getElementById('adPhone').value : '';
    let txnId = document.getElementById('adTxnId') ? document.getElementById('adTxnId').value : '';
    let area = document.getElementById('adDisplayArea');

    if (!title || !price || !phone || !txnId) {
        alert('कृपया सामान का विवरण, कीमत, फोन और UPI Txn ID भरें!');
        return;
    }

    if (area) {
        let item = document.createElement('div');
        item.className = 'item-card';
        item.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <div>
                    <strong>${title}</strong>
                    <p style="font-size:0.85rem; color:#2e7d32; font-weight:bold;">₹${price}</p>
                    <p style="font-size:0.75rem; color:#666;">Txn ID: ${txnId}</p>
                </div>
            </div>
            <a href="tel:${phone}" class="call-btn">📞 कॉल करें</a>
        `;
        area.prepend(item);
        alert('विज्ञापन समीक्षा के लिए पोस्ट कर दिया गया है!');
    }
}
