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
        "KALANAUR": ["Anwal", "Bahali Anandpur", "Ballab", "Baniyani", "Basana", "Gaddhi Kheri", "Garhi Ballab", "Garnawathi", "Gudhan", "Gurnauthi", "Jindran Kalan", "Kakrana", "Kalanaur Kalan", "Kalanaur Khurd", "Kalanaur Rural", "Katesra", "Kahnaur", "Kherari", "Lahli", "Manjha", "Maroudi Jatan", "Maroudi Rangran", "Masudpur", "Matana", "Nigana", "Patwapur", "Pilana", "Sampal", "Sanga Hera", "Sundana", "Taimurpur"],
        "SAMPLA": ["Atail", "Balkara", "Bhalout", "Bora", "Dattaur", "Gandhra", "Garhi Sampla", "Hasangarh", "Ismaila 11B", "Ismaila 9B", "Kharawar", "Kullasi", "Kheri Sampla", "Naoabad", "Nishti", "Pakasma", "Rohad", "Sampla Khas"],
        "ROHTAK": ["Asthal Bohar", "Bahu Akberpur", "Bahu Jamalpur", "Baland", "Basantpur", "Bhagotipur", "Bhaiyan Pur", "Bhalot", "Bohar", "Chamaria", "Dhamar", "Dobh", "Ghuskani", "Humayunpur", "Jalalpur", "Jasia", "Kanheli", "Kansala", "Karountha", "Katwara", "Khadwali", "Kharak Churangla", "Kheri Sadh", "Kiloi Dopana", "Kiloi Khas", "Kutana", "Kutani", "Ladhot", "Maina", "Makrauli Kalan", "Makrauli Khurd", "Nasirpur", "Paharipur", "Pahrawar", "Polangi", "Rithal Narwal", "Rithal Phogat", "Rohtak Rural", "Rurki", "Sarai Ahmed", "Singhpura", "Sunaria Kalan", "Sunaria Khurd", "Sunderpur", "Titoli"],
        "MEHAM": ["Aaron", "Balam", "Beani", "Bhaini Bhairon", "Bhaini Chanderpal", "Bhaini Maharajpur", "Chiri", "Farmana Khas", "Gharethi", "Kheri Meham", "Madina Gindhran", "Madina Korsan", "Meham Rural", "Mokhra Khas", "Mokhra Kheri", "Nandal", "Nindana", "Saman", "Sarsa", "Semli"]
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

// १. गाँव की दुकानों और सेवाओं का सैंपल डेटाबेस
let villageDatabase = [
    { district: "ROHTAK", block: "SAMPLA", village: "Kharawar", title: "रामेश्वर किराना स्टोर", category: "दुकान", price: "-", phone: "9812345678" },
    { district: "ROHTAK", block: "SAMPLA", village: "Kharawar", title: "संजय इलेक्ट्रीशियन (मिस्त्री)", category: "मिस्त्री", price: "200 रु/विज़िट", phone: "9876543210" },
    { district: "ROHTAK", block: "SAMPLA", village: "Hasangarh", title: "जय बाबा खाद-बीज भंडार", category: "दुकान", price: "-", phone: "9123456789" },
    { district: "SONIPAT", block: "GANAUR", village: "Barhi", title: "पुराना ट्रैक्टर बेचने के लिए", category: "विज्ञापन", price: "2,50,000", phone: "9998887776" }
];

let simulatedOTP = "";
let isPhoneVerified = false;

window.onload = function() {
    populateDistricts('mainDistrictSelect');
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

function loadBlocks() {
    let dist = document.getElementById('mainDistrictSelect').value;
    let blockSelect = document.getElementById('mainBlockSelect');
    let villageSelect = document.getElementById('mainVillageSelect');
    let customInput = document.getElementById('customVillageInput');
    
    blockSelect.innerHTML = '<option value="">-- खण्ड / Block चुनें --</option>';
    villageSelect.innerHTML = '<option value="">-- पहले ब्लॉक चुनें --</option>';
    if(customInput) customInput.style.display = 'none';

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
    let customInput = document.getElementById('customVillageInput');
    
    villageSelect.innerHTML = '<option value="">-- गाँव चुनें --</option>';
    if(customInput) customInput.style.display = 'none';

    if (dist && blk && haryanaMasterData[dist] && haryanaMasterData[dist][blk]) {
        haryanaMasterData[dist][blk].forEach(vlg => {
            let opt = document.createElement('option');
            opt.value = vlg;
            opt.textContent = vlg;
            villageSelect.appendChild(opt);
        });
    }

    // सूची में न होने पर Custom Option
    let otherOpt = document.createElement('option');
    otherOpt.value = "OTHER";
    otherOpt.textContent = "➕ गाँव सूची में नहीं है? (यहाँ नाम लिखें)";
    villageSelect.appendChild(otherOpt);
}

function checkOtherVillage() {
    let select = document.getElementById('mainVillageSelect');
    let customInput = document.getElementById('customVillageInput');
    if (select.value === "OTHER") {
        customInput.style.display = 'block';
    } else {
        customInput.style.display = 'none';
    }
}

function getSelectedVillage() {
    let select = document.getElementById('mainVillageSelect');
    let customInput = document.getElementById('customVillageInput');
    
    if (select.value === "OTHER") {
        return customInput.value.trim();
    }
    return select.value;
}

function updateHeaderVillageName() {
    let vlg = getSelectedVillage();
    let subTitle = document.getElementById('headerSubTitle');
    if (subTitle) {
        subTitle.textContent = vlg ? `राम राम भाइयों, आपके गाँव (${vlg}) में स्वागत है` : "राम राम भाइयों, आपके गाँव में स्वागत है";
    }
}

function searchServices() {
    let dist = document.getElementById('mainDistrictSelect').value;
    let blk = document.getElementById('mainBlockSelect').value;
    let vlg = getSelectedVillage();
    let resBox = document.getElementById('searchResult');
    let adArea = document.getElementById('adDisplayArea');

    if (!dist || !blk || !vlg) {
        alert('कृपया जिला, ब्लॉक और गाँव का चयन करें या दर्ज करें!');
        return;
    }

    if (resBox) {
        resBox.innerHTML = `
            <div style="background: #e8f5e9; border: 1px solid #a5d6a7; padding: 10px; border-radius: 6px; margin-top: 10px;">
                <h4 style="color: #2e7d32; margin:0;">📍 चुने गए गाँव: ${vlg} (${blk}, ${dist})</h4>
            </div>
        `;
    }

    // डेटाबेस में से गाँव के हिसाब से सेवाएँ निकालें
    let matchedServices = villageDatabase.filter(item => 
        item.district.toUpperCase() === dist.toUpperCase() && 
        item.block.toUpperCase() === blk.toUpperCase() && 
        item.village.toUpperCase() === vlg.toUpperCase()
    );

    if (adArea) {
        if (matchedServices.length === 0) {
            adArea.innerHTML = `<div style="padding:15px; background:#fff3cd; border-radius:6px; margin-top:10px; color:#856404;">
                ⚠️ <strong>${vlg}</strong> गाँव में अभी कोई दुकान या सेवा दर्ज नहीं है। आप नीचे दिए गए फ़ॉर्म से अपनी दुकान जोड़ सकते हैं!
            </div>`;
        } else {
            adArea.innerHTML = "";
            matchedServices.forEach(item => {
                let card = document.createElement('div');
                card.style.cssText = "border:1px solid #ddd; background:#fff; padding:12px; border-radius:8px; margin-top:10px; display:flex; justify-content:space-between; align-items:center;";
                card.innerHTML = `
                    <div>
                        <span style="background:#e8f5e9; color:#2e7d32; font-size:0.75rem; padding:2px 6px; border-radius:4px; font-weight:bold;">${item.category}</span>
                        <h4 style="margin:5px 0 2px 0;">${item.title}</h4>
                        ${item.price !== '-' ? `<p style="font-size:0.85rem; color:#2e7d32; font-weight:bold; margin:0;">${item.price}</p>` : ''}
                    </div>
                    <a href="tel:${item.phone}" style="background:#2e7d32; color:#fff; padding:8px 12px; border-radius:5px; text-decoration:none; font-size:0.85rem; font-weight:bold;">📞 कॉल करें</a>
                `;
                adArea.appendChild(card);
            });
        }
    }
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

function sendOTP() {
    let phone = document.getElementById('regPhone').value;
    if (!phone || phone.length < 10) {
        alert('कृपया 10 अंकों का मोबाइल नंबर दर्ज करें!');
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
        msg.textContent = "✔ मोबाइल नंबर वेरीफाई हो गया!";
    } else {
        isPhoneVerified = false;
        msg.style.color = "#d32f2f"; 
        msg.textContent = "❌ अमान्य OTP!";
    }
}

function submitAd() {
    let dist = document.getElementById('mainDistrictSelect').value;
    let blk = document.getElementById('mainBlockSelect').value;
    let vlg = getSelectedVillage();

    let name = document.getElementById('regShopName').value;
    let phone = document.getElementById('regPhone').value;
    let price = document.getElementById('adItemPrice').value || '-';

    if (!dist || !blk || !vlg) {
        alert('कृपया पहले ऊपर अपना जिला, ब्लॉक और गाँव चुनें!');
        return;
    }

    if (!name || !phone) {
        alert('कृपया दुकान का नाम और मोबाइल नंबर भरें!');
        return;
    }

    if (!isPhoneVerified) {
        alert('कृपया पहले OTP वेरीफाई करें!');
        return;
    }

    // नया डेटा डेटाबेस में जोड़ें
    villageDatabase.push({
        district: dist,
        block: blk,
        village: vlg,
        title: name,
        category: "नई दुकान/सेवा",
        price: price,
        phone: phone
    });

    alert('✅ आपकी दुकान/सेवा सफलतापूर्वक दर्ज हो गई है!');
    searchServices(); // रिफ्रेश करके तुरंत दिखाएँ
}
