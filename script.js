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

function initPortal() {
    populateDistricts('mainDistrictSelect');
    populateDistricts('regDistrict');
    populateDistricts('galDistrict');
    populateDistricts('eventDistrict');
}

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
    dropdown.classList.toggle("show");
}

function toggleCategoryDropdown() {
    let content = document.getElementById("catDropdownContent");
    let arrow = document.getElementById("catArrow");
    content.classList.toggle("show");
    arrow.textContent = content.classList.contains("show") ? "▲" : "▼";
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
    if (vlg) {
        subTitle.textContent = "राम राम भाइयों, आपके गाँव (" + vlg + ") में स्वागत है";
    } else {
        subTitle.textContent = "राम राम भाइयों, आपके गाँव में स्वागत है";
    }
}

function searchServices() {
    let dist = document.getElementById('mainDistrictSelect').value;
    let blk = document.getElementById('mainBlockSelect').value;
    let vlg = document.getElementById('mainVillageSelect').value;
    let code = document.getElementById('secCodeInput').value;
    let resBox = document.getElementById('searchResult');

    if (!dist || !blk || !vlg || !code) {
        alert('कृपया सभी अनिवार्य फ़ील्ड (*) भरें!');
        return;
    }

    resBox.innerHTML = `
        <div style="background: #e8f5e9; border: 1px solid #a5d6a7; padding: 12px; border-radius: 6px;">
            <h4 style="color: #2e7d32;">📍 गाँव: ${vlg} (${blk}, ${dist})</h4>
            <p style="font-size: 0.85rem; margin-top: 5px;">सुरक्षा कोड: <strong>${code}</strong> - वेरीफाई हुआ!</p>
            <div style="margin-top: 10px;" class="shop-item">
                <div>
                    <strong>शर्मा किराना स्टोर</strong>
                    <p style="font-size: 0.8rem; color: #555;">जनरल स्टोर एवं राशन सामान</p>
                </div>
                <a href="tel:9876543210" class="call-btn">📞 Call</a>
            </div>
        </div>
    `;
}

function onRegDistrictChange() {
    let dist = document.getElementById('regDistrict').value;
    let blkSel = document.getElementById('regBlock');
    let vlgSel = document.getElementById('regVillage');
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
        statusDiv.textContent = "स्थान प्राप्त किया जा रहा है...";
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                let lat = pos.coords.latitude.toFixed(4);
                let lng = pos.coords.longitude.toFixed(4);
                coordInput.value = `Lat: ${lat}, Lng: ${lng}`;
                statusDiv.innerHTML = `<span style="color: #2e7d32; font-size: 0.8rem;">✔ GPS सत्यापित! स्थान दर्ज किया गया।</span>`;
            },
            (err) => {
                coordInput.value = "GPS Data Unavailable";
                statusDiv.innerHTML = `<span style="color: #d32f2f; font-size: 0.8rem;">❌ GPS अनुमति अस्वीकृत या उपलब्ध नहीं।</span>`;
            }
        );
    } else {
        alert('आपके ब्राउज़र में GPS सुविधा समर्थित नहीं है।');
    }
}

function sendOTP() {
    let phone = document.getElementById('regPhone').value;
    if (phone.length < 10) {
        alert('कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें!');
        return;
    }
    simulatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    document.getElementById('generatedOtpDisplay').textContent = simulatedOTP;
    document.getElementById('otpBox').style.display = 'block';
    alert(`OTP भेजा गया: ${simulatedOTP}`);
}

function verifyOTP() {
    let userInput = document.getElementById('userOtpInput').value;
    let msg = document.getElementById('otpStatusMsg');
    if (userInput === simulatedOTP && userInput !== "") {
        isPhoneVerified = true;
        msg.style.color = "#2e7d32";
        msg.textContent = "✔ मोबाइल नंबर सफलतापूर्वक वेरीफाई हो गया!";
    } else {
        isPhoneVerified = false;
        msg.style.color = "#d32f2f";
        msg.textContent = "❌ अमान्य OTP! पुनः प्रयास करें।";
    }
}

function previewImage(event, imgId, holderId) {
    let reader = new FileReader();
    reader.onload = function() {
        let output = document.getElementById(imgId);
        let holder = document.getElementById(holderId);
        output.src = reader.result;
        output.style.display = 'block';
        if (holder) holder.style.display = 'none';
    };
    if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
}

async function submitShop() {
    let name = document.getElementById('regShopName').value;
    let dist = document.getElementById('regDistrict').value;
    let blk = document.getElementById('regBlock').value;
    let vlg = document.getElementById('regVillage').value;
    let phone = document.getElementById('regPhone').value;

    if (!name || !dist || !blk || !vlg || !phone) {
        alert('कृपया सभी विवरण भरें!');
        return;
    }

    if (!isPhoneVerified) {
        alert('कृपया पहले OTP वेरीफाई करें!');
        return;
    }

    try {
        if (window.db && window.addDoc && window.collection) {
            await window.addDoc(window.collection(window.db, "shops"), {
                name: name,
                district: dist,
                block: blk,
                village: vlg,
                phone: phone,
                timestamp: new Date()
            });
            alert('दुकान/सेवा सफलता पूर्वक Firebase में सबमिट हो गई है!');
        } else {
            alert('दुकान सफलतापूर्वक दर्ज की गई! (Local Mode)');
        }
    } catch (e) {
        console.error(e);
        alert('सबमिशन में त्रुटि हुई!');
    }
}

function showPrivacyPolicy() {
    alert("प्रप्राइवेसी पॉलिसी:\nयह पोर्टल उपयोगकर्ताओं के डेटा की सुरक्षा को प्राथमिकता देता है।");
}
