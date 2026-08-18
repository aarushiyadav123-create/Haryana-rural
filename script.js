// 1. हरियाणा का मास्टर डेटा
const haryanaMasterData = {
    "ROHTAK": {
        "ROHTAK": ["Dobh", "Kahnaur", "Bohar", "Kiloi", "Sanghi", "Ismaila"],
        "SAMPLA": ["Sampla", "Ismaila-A", "Ismaila-B", "Assan", "Katesra", "Kharawar", "Gardi", "Gandhra", "Bhalout"],
        "MEHAM": ["Meham", "Madina", "Bainsi", "Farmana", "Semshi", "Bedwa"],
        "KALANAUR": ["Kalanaur", "Kahnana", "Anwal", "Nigana"]
    },
    "JHAJJAR": {
        "JHAJJAR": ["Jhajjar Rural", "Silani", "Dighal", "Gudha", "Guraora"],
        "BAHADURGARH": ["Bahadurgarh Rural", "Asaudha", "Mandothi", "Sankhol", "Khedi Jasaur"],
        "BERI": ["Beri", "Dubaldhan", "Dighal", "Majra", "Baghpur"],
        "BADLI": ["Badli", "Patauda", "Munimpur", "Yakubpur"]
    },
    "BHIWANI": {
        "BHIWANI": ["Bhiwani Rural", "Dinod", "Talu", "Bapora", "Nanghal"],
        "TOSHAM": ["Tosham", "Khanak", "Dhandalan", "Bawani Khera", "Biran"],
        "SIWANI": ["Siwani", "Mahlana", "Gurera"],
        "BAWANI KHERA": ["Bawani Khera", "Jamalpur", "Pur"]
    },
    "SONIPAT": {
        "SONIPAT": ["Sonipat Rural", "Rai", "Murthal", "Rathdhana", "Fazilpur"],
        "GOHANA": ["Gohana", "Khanpur Kalan", "Baroda", "Mundlana", "Bhutana"],
        "GANNAUR": ["Gannaur", "Panchi Jatan", "Bari", "Pugthala"],
        "KHARKHODA": ["Kharkhoda", "Pipli", "Saidpur", "Riderna"]
    },
    "HISAR": {
        "HISAR": ["Hisar Rural", "Satrod", "Gangwa", "Mirzapur"],
        "HANSI": ["Hansi", "Umra", "Sainipura", "Sultanpur"],
        "BARWALA": ["Barwala", "Daulatpur", "Panghal"],
        "NARNAUND": ["Narnaund", "Kheri Jalab", "Rajnthal"]
    },
    "JIND": {
        "JIND": ["Jind Rural", "Kinana", "Ramrai", "Bibipur"],
        "NARWANA": ["Narwana", "Dhamtan Sahib", "Belarkha"],
        "UCHANA": ["Uchana", "Karsindhu", "Uchana Kalan"],
        "JULANA": ["Julana", "Lajwana", "Kila Zafargarh"]
    },
    "CHARKHI DADRI": {
        "DADRI": ["Charkhi Dadri", "Bond Kalan", "Jhuppa", "Samaspur"],
        "BADHRA": ["Badhra", "Jhui", "Kadma", "Bhandwa"]
    },
    "GURUGRAM": {
        "GURUGRAM": ["Gurugram Rural", "Badshahpur", "Wazirabad", "Khandsa"],
        "SOHNA": ["Sohna", "Damdama", "Bhondsi", "Rithoj"],
        "PATAUDI": ["Pataudi", "Helamandi", "Jatola", "Uncha Majra"]
    },
    "FARIDABAD": {
        "FARIDABAD": ["Faridabad Rural", "Tigaon", "Ballabgarh", "Anangpur"],
        "BALLABGARH": ["Ballabgarh", "Mohna", "Chhainsa", "Dayalpur"]
    },
    "KARNAL": {
        "KARNAL": ["Karnal Rural", "Kunjpura", "Gharaunda", "Kachhwa"],
        "ASSANDH": ["Assandh", "Jundla", "Salwan", "Rahra"],
        "NILOKHERI": ["Nilokheri", "Taraori", "Nigdu"]
    },
    "AMBALA": {
        "AMBALA": ["Ambala Rural", "Naraingarh", "Barara", "Saha"]
    },
    "KURUKSHETRA": {
        "THANESAR": ["Thanesar Rural", "Shahbad", "Pehowa", "Ladwa", "Babain"]
    },
    "PANIPAT": {
        "PANIPAT": ["Panipat Rural", "Samalkha", "Israna", "Bapoli", "Madlauda"]
    },
    "REWARI": {
        "REWARI": ["Rewari Rural", "Bawal", "Kosli", "Dharuhera", "Dahina"]
    },
    "MAHENDRAGARH": {
        "NARNAUL": ["Narnaul Rural", "Mahendragarh", "Ateli", "Kanina", "Satnali"]
    },
    "SIRSA": {
        "SIRSA": ["Sirsa Rural", "Dabwali", "Ellenabad", "Rania", "Kalanwali"]
    },
    "FATEHABAD": {
        "FATEHABAD": ["Fatehabad Rural", "Tohana", "Ratia", "Bhuntan Kalan"]
    },
    "PALWAL": {
        "PALWAL": ["Palwal Rural", "Hodal", "Hathin", "Hassanpur"]
    },
    "NUH": {
        "NUH": ["Nuh Rural", "Ferozepur Jhirka", "Punhana", "Taoru"]
    },
    "PANCHKULA": {
        "PANCHKULA": ["Panchkula Rural", "Kalka", "Raipur Rani", "Pinjore"]
    },
    "YAMUNANAGAR": {
        "YAMUNANAGAR": ["Yamunanagar Rural", "Jagadhri", "Radaur", "Bilaspur", "Chhachhrauli"]
    },
    "KAITHAL": {
        "KAITHAL": ["Kaithal Rural", "Guhla", "Kalayat", "Pundri", "Rajound"]
    }
};

// 2. पेज लोड होने पर मुख्य जिले ऑटो-लोड करना
window.onload = function() {
    const mainDist = document.getElementById('mainDistrictSelect');
    if (mainDist) {
        mainDist.innerHTML = '<option value="">-- जिला चुनें --</option>';
        Object.keys(haryanaMasterData).sort().forEach(dist => {
            let opt = document.createElement('option');
            opt.value = dist;
            opt.textContent = dist;
            mainDist.appendChild(opt);
        });
    }
};

// 3. जिला बदलने पर ब्लॉक लोड करने का यूनिवर्सल फंक्शन
function loadBlocksForSection(distId, blockId, villageId) {
    const selectedDist = document.getElementById(distId).value;
    const blockSelect = document.getElementById(blockId);
    const villageSelect = document.getElementById(villageId);
    
    blockSelect.innerHTML = '<option value="">-- पहले जिला चुनें --</option>';
    if (villageSelect) {
        villageSelect.innerHTML = '<option value="">-- पहले ब्लॉक चुनें --</option>';
    }
    
    if (!selectedDist || !haryanaMasterData[selectedDist]) return;
    
    blockSelect.innerHTML = '<option value="">-- ब्लॉक चुनें --</option>';
    const sortedBlocks = Object.keys(haryanaMasterData[selectedDist]).sort();
    sortedBlocks.forEach(block => {
        blockSelect.innerHTML += `<option value="${block}">${block}</option>`;
    });
}

// 4. ब्लॉक बदलने पर गाँव लोड करने का यूनिवर्सल फंक्शन
function loadVillagesForSection(distId, blockId, villageId) {
    const selectedDist = document.getElementById(distId).value;
    const selectedBlock = document.getElementById(blockId).value;
    const villageSelect = document.getElementById(villageId);
    
    villageSelect.innerHTML = '<option value="">-- गाँव चुनें --</option>';
    
    if (!selectedDist || !selectedBlock || !haryanaMasterData[selectedDist][selectedBlock]) return;
    
    const sortedVillages = haryanaMasterData[selectedDist][selectedBlock].sort();
    sortedVillages.forEach(village => {
        villageSelect.innerHTML += `<option value="${village}">${village}</option>`;
    });
}

// --- मुख्य सर्च सेक्शन के लिए बाइंडिंग ---
function loadBlocks() {
    loadBlocksForSection('mainDistrictSelect', 'mainBlockSelect', 'mainVillageSelect');
}

function loadVillages() {
    loadVillagesForSection('mainDistrictSelect', 'mainBlockSelect', 'mainVillageSelect');
    updateHeaderVillageName();
}

// --- दुकान रजिस्ट्रेशन (Add Shop) सेक्शन के लिए बाइंडिंग ---
function onRegDistrictChange() {
    loadBlocksForSection('regDistrict', 'regBlock', 'regVillage');
}

function onRegBlockChange() {
    loadVillagesForSection('regDistrict', 'regBlock', 'regVillage');
}

// --- गैलरी सेक्शन के लिए बाइंडिंग ---
function onGalDistrictChange() {
    loadBlocksForSection('galDistrict', 'galBlock', 'galVillage');
}

function onGalBlockChange() {
    loadVillagesForSection('galDistrict', 'galBlock', 'galVillage');
}

// --- इवेंट/मुनादी सेक्शन के लिए बाइंडिंग ---
function onEventDistrictChange() {
    loadBlocksForSection('eventDistrict', 'eventBlock', 'eventVillage');
}

function onEventBlockChange() {
    loadVillagesForSection('eventDistrict', 'eventBlock', 'eventVillage');
}

// --- अन्य हेल्पिंग फंक्शंस ---
function updateHeaderVillageName() {
    const vill = document.getElementById('mainVillageSelect').value;
    if (vill) {
        const header = document.getElementById('headerTitle');
        if(header) header.innerText = `👴 MeraGaov ${vill} 💨`;
    }
}

function searchVillageData() {
    const vill = document.getElementById('mainVillageSelect').value;
    const res = document.getElementById('searchResult');
    if(!vill) {
        alert("कृपया गाँव चुनें!");
        return;
    }
    if(res) {
        res.innerHTML = `<div style="background:#e8f5e9; padding:12px; border-radius:6px; color:#2e7d32; font-weight:bold;">📍 गाँव: ${vill} सफलतापूर्वक लोड हो गया है!</div>`;
    }
}

function toggleMenu() {
    const d = document.getElementById("myDropdown");
    if(d) d.style.display = (d.style.display === "block") ? "none" : "block";
}

function toggleSection(boxId, iconId) {
    const box = document.getElementById(boxId);
    const icon = document.getElementById(iconId);
    if(box) {
        const isVisible = box.style.display === "block";
        box.style.display = isVisible ? "none" : "block";
        if(icon) icon.innerText = isVisible ? "▼" : "▲";
    }
}

function openAboutModal() { document.getElementById('aboutModal').style.display = 'block'; toggleMenu(); }
function openAdminModal() { document.getElementById('adminModal').style.display = 'block'; toggleMenu(); }
function openPrivacyModal() { document.getElementById('privacyModal').style.display = 'block'; toggleMenu(); }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function downloadPolicy() {
    const element = document.createElement("a");
    const file = new Blob(["Privacy Policy - MeraGaov Portal\nFounder: KUSUM W/O RAJESH YADAV\n\n1. Data Safety Guaranteed."], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Privacy_Policy_MeraGaov.txt";
    document.body.appendChild(element);
    element.click();
}
