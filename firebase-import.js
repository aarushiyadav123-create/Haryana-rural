// Firebase Data Import Script
// Upload Complete Haryana Villages Data to Firebase Realtime Database

// Make sure to import haryana-villages-complete.js before this file

function uploadVillagesToFirebase() {
    console.log("📤 Starting upload to Firebase...");
    
    const villagesRef = firebase.database().ref('villages');
    
    // Upload the complete database
    villagesRef.set(haryana_complete_database, (error) => {
        if (error) {
            console.error("❌ Error uploading data:", error);
            alert('❌ डेटा upload नहीं हुआ! Error: ' + error.message);
        } else {
            console.log("✅ Data uploaded successfully!");
            alert('✅ सभी गाँवों का डेटा Firebase में सफलतापूर्वक upload हो गया!');
        }
    });
}

// Alternative: Upload with progress tracking
function uploadVillagesToFirebaseWithProgress() {
    console.log("📤 Starting upload with progress tracking...");
    
    const database = firebase.database();
    let totalDistricts = Object.keys(haryana_complete_database).length;
    let uploadedDistricts = 0;
    
    Object.keys(haryana_complete_database).forEach(district => {
        const districtRef = database.ref(`villages/${district}`);
        
        districtRef.set(haryana_complete_database[district], (error) => {
            if (error) {
                console.error(`❌ Error uploading ${district}:`, error);
            } else {
                uploadedDistricts++;
                const progress = Math.round((uploadedDistricts / totalDistricts) * 100);
                console.log(`✅ ${district} uploaded (${progress}% complete)`);
                
                if (uploadedDistricts === totalDistricts) {
                    alert(`✅ सभी ${totalDistricts} जिलों का डेटा Firebase में upload हो गया!`);
                }
            }
        });
    });
}

// Get all villages from Firebase
function getVillagesFromFirebase() {
    const villagesRef = firebase.database().ref('villages');
    
    villagesRef.once('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            console.log("📥 Villages loaded from Firebase:", data);
            return data;
        } else {
            console.log("❌ No villages data found in Firebase");
            return null;
        }
    });
}

// Get villages for specific district
function getVillagesByDistrict(district) {
    return new Promise((resolve, reject) => {
        const districtRef = firebase.database().ref(`villages/${district}`);
        
        districtRef.once('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                console.log(`📍 Villages in ${district}:`, data);
                resolve(data);
            } else {
                reject(`No villages found for district: ${district}`);
            }
        });
    });
}

// Get villages for specific block
function getVillagesByBlock(district, block) {
    return new Promise((resolve, reject) => {
        const blockRef = firebase.database().ref(`villages/${district}/${block}`);
        
        blockRef.once('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                console.log(`🏘️ Villages in ${block}, ${district}:`, data);
                resolve(data);
            } else {
                reject(`No villages found for ${block} in ${district}`);
            }
        });
    });
}

// Search villages by name
function searchVillagesByName(villageNamePattern) {
    return new Promise((resolve, reject) => {
        const villagesRef = firebase.database().ref('villages');
        
        villagesRef.once('value', (snapshot) => {
            const allData = snapshot.val();
            const results = [];
            
            Object.keys(allData).forEach(district => {
                Object.keys(allData[district]).forEach(block => {
                    const villages = allData[district][block];
                    
                    villages.forEach(village => {
                        if (village.toLowerCase().includes(villageNamePattern.toLowerCase())) {
                            results.push({
                                village: village,
                                block: block,
                                district: district
                            });
                        }
                    });
                });
            });
            
            if (results.length > 0) {
                console.log(`🔍 Found ${results.length} villages matching "${villageNamePattern}":`, results);
                resolve(results);
            } else {
                reject(`No villages found matching "${villageNamePattern}"`);
            }
        });
    });
}

// Count total villages
function countTotalVillages() {
    let total = 0;
    
    Object.keys(haryana_complete_database).forEach(district => {
        Object.keys(haryana_complete_database[district]).forEach(block => {
            total += haryana_complete_database[district][block].length;
        });
    });
    
    console.log(`📊 Total villages in database: ${total}`);
    return total;
}

// Count villages by district
function countVillagesByDistrict() {
    const counts = {};
    
    Object.keys(haryana_complete_database).forEach(district => {
        let districtTotal = 0;
        
        Object.keys(haryana_complete_database[district]).forEach(block => {
            districtTotal += haryana_complete_database[district][block].length;
        });
        
        counts[district] = districtTotal;
    });
    
    console.log("📊 Villages by District:", counts);
    return counts;
}

// Get statistics
function getStatistics() {
    const stats = {
        totalDistricts: Object.keys(haryana_complete_database).length,
        totalBlocks: 0,
        totalVillages: 0,
        districtDetails: {}
    };
    
    Object.keys(haryana_complete_database).forEach(district => {
        const blockCount = Object.keys(haryana_complete_database[district]).length;
        let villageCount = 0;
        
        Object.keys(haryana_complete_database[district]).forEach(block => {
            villageCount += haryana_complete_database[district][block].length;
        });
        
        stats.totalBlocks += blockCount;
        stats.totalVillages += villageCount;
        
        stats.districtDetails[district] = {
            blocks: blockCount,
            villages: villageCount
        };
    });
    
    console.log("📊 Haryana Statistics:", stats);
    return stats;
}

// Initialize Firebase import when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("🔄 Firebase Import Module Loaded");
    console.log(`📍 Ready to upload ${countTotalVillages()} villages to Firebase`);
});
