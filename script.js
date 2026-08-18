// हरियाणा का संपूर्ण डेटा (22 जिले, उनके ब्लॉक और गाँव)
const haryanaData = {
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

// पेज लोड होते ही जिले जोड़ें
window.onload = function() {
    const distSel = document.getElementById('mainDistrictSelect');
    if(distSel) {
        distSel.innerHTML = '<option value="">-- जिला चुनें --</option>';
        Object.keys(haryanaData).forEach(dist => {
            let opt = document.createElement('option');
            opt.value = dist;
            opt.textContent = dist;
            distSel.appendChild(opt);
        });
    }
};

// ब्लॉक लोड करने का फंक्शन
function loadBlocks() {
    const dist = document.getElementById('mainDistrictSelect').value;
    const blockSel = document.getElementById('mainBlockSelect');
    const villSel = document.getElementById('mainVillageSelect');
    
    blockSel.innerHTML = '<option value="">-- ब्लॉक चुनें --</option>';
    villSel.innerHTML = '<option value="">-- पहले ब्लॉक चुनें --</option>';

    if(dist && haryanaData[dist]) {
        Object.keys(haryanaData[dist]).forEach(block => {
            let opt = document.createElement('option');
            opt.value = block;
            opt.textContent = block;
            blockSel.appendChild(opt);
        });
    }
}

// गाँव लोड करने का फंक्शन
function loadVillages() {
    const dist = document.getElementById('mainDistrictSelect').value;
    const block = document.getElementById('mainBlockSelect').value;
    const villSel = document.getElementById('mainVillageSelect');
    
    villSel.innerHTML = '<option value="">-- गाँव चुनें --</option>';

    if(dist && block && haryanaData[dist][block]) {
        haryanaData[dist][block].forEach(vill => {
            let opt = document.createElement('option');
            opt.value = vill;
            opt.textContent = vill;
            villSel.appendChild(opt);
        });
    }
}

// हेडर अपडेट करने का फंक्शन
function updateHeaderVillageName() {
    const vill = document.getElementById('mainVillageSelect').value;
    if(vill) {
        document.getElementById('headerTitle').innerText = `👴 MeraGaov ${vill} 💨`;
    }
}

// गाँव डेटा सर्च फंक्शन
function searchVillageData() {
    const vill = document.getElementById('mainVillageSelect').value;
    const res = document.getElementById('searchResult');
    if(!vill) {
        alert("कृपया गाँव चुनें!");
        return;
    }
    res.innerHTML = `<div style="background:#e8f5e9; padding:12px; border-radius:6px; color:#2e7d32; font-weight:bold;">📍 गाँव: ${vill} सफलतापूर्वक लोड हो गया है!</div>`;
}

// मेनू और सेक्शन टोगल फंक्शंस
function toggleMenu() {
    const d = document.getElementById("myDropdown");
    d.style.display = (d.style.display === "block") ? "none" : "block";
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

// पॉप-अप मोडल फंक्शंस
function openAboutModal() { document.getElementById('aboutModal').style.display = 'block'; toggleMenu(); }
function openAdminModal() { document.getElementById('adminModal').style.display = 'block'; toggleMenu(); }
function openPrivacyModal() { document.getElementById('privacyModal').style.display = 'block'; toggleMenu(); }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// प्राइवेसी पॉलिसी डाउनलोड फ़ंक्शन
function downloadPolicy() {
    const element = document.createElement("a");
    const file = new Blob(["Privacy Policy - MeraGaov Portal\nFounder: KUSUM W/O RAJESH YADAV\n\n1. Data Safety Guaranteed."], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Privacy_Policy_MeraGaov.txt";
    document.body.appendChild(element);
    element.click();
}
