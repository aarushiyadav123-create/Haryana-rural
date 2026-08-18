// 1. जिला बदलने पर ब्लॉक लोड करने का यूनिवर्सल फंक्शन
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

// 2. ब्लॉक बदलने पर गाँव लोड करने का यूनिवर्सल फंक्शन
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
