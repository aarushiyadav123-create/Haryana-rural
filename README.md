# 🌾 मेरा गाँव - Haryana Rural Services Portal

**Live Demo:** https://dakshyadav.co.in

एक comprehensive platform जो हरियाणा के सभी 7,000+ गाँवों की जानकारी एक ही जगह पर प्रदान करता है।

## 📊 डेटा Overview

- **22 Districts** (जिले)
- **140+ Blocks** (खण्ड)
- **7,000+ Villages** (गाँव)
- **Original Government Data** से compile किया गया

## 🚀 Features

✅ सभी गाँवों की complete list  
✅ District → Block → Village hierarchy  
✅ Real-time Firebase integration  
✅ Mobile-friendly responsive design  
✅ Hindi & English support  
✅ Fast search & filtering  
✅ Village statistics  

## 📁 Project Structure

```
Haryana-rural/
├── index.html                    # Main UI
├── firebase-config.js            # Firebase configuration
├── firebase-import.js            # Firebase data import functions
├── haryana-villages-complete.js  # Complete villages database
├── script.js                     # Additional functions
├── haryana_data.js              # Legacy data (optional)
├── sw.js                        # Service Worker
├── manifest.json                # PWA Manifest
├── CNAME                        # Custom domain (dakshyadav.co.in)
└── README.md                    # This file
```

## 🔧 Firebase Setup Guide

### Step 1: Firebase Project बनाएं

1. [Firebase Console](https://console.firebase.google.com) पर जाएं
2. **"+ Add project"** क्लिक करें
3. Project name: `haryana-rural` (या अपना नाम चुनें)
4. Google Analytics enable करें (optional)
5. **"Create project"** क्लिक करें

### Step 2: Realtime Database बनाएं

1. बाईं ओर **"Realtime Database"** चुनें
2. **"Create Database"** क्लिक करें
3. **Location:** `asia-south1` (India - Delhi)
4. **Security Rules:** पहले `test mode` चुनें (आगे production में बदलेंगे)
5. **"Enable"** क्लिक करें

### Step 3: Firebase Config मिलें

1. बाईं ���र **"Project Settings"** (⚙️) क्लिक करें
2. **"General"** tab में जाएं
3. अपनी app को register करें:
   - **App name:** `Haryana-rural`
   - **Platform:** Web (</> icon)
4. Registration के बाद आपको Firebase config मिलेगा:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 4: firebase-config.js Update करें

```bash
# अपनी Firebase config से replace करें
```

`firebase-config.js` में यह section को update करें:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",  // 👈 अपना copy करें
    authDomain: "haryana-rural.firebaseapp.com",
    databaseURL: "https://haryana-rural-default-rtdb.firebaseio.com",
    projectId: "haryana-rural",
    storageBucket: "haryana-rural.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdefghijklmnop"
};
```

### Step 5: Data को Firebase में Upload करें

#### Option A: Browser Console से Upload करें

1. Website को open करें: `https://dakshyadav.co.in`
2. Browser का **Console** खोलें (F12)
3. यह command run करें:

```javascript
uploadVillagesToFirebase();
```

✅ यह सभी 7,000+ villages को Firebase में upload करेगा!

#### Option B: Firebase Console से Direct करें

1. [Firebase Console](https://console.firebase.google.com) पर जाएं
2. अपनी **Realtime Database** खोलें
3. **"+"** icon से नया data add करें
4. यह structure paste करें:

```json
{
  "villages": {
    "ROHTAK": {
      "KALANAUR": ["Anwal", "Basana", "Bhaini Surjan", ...],
      "SAMPLA": ["Atail", "Balkara", ...]
    },
    "AMBALA": {...}
  }
}
```

### Step 6: Firebase Security Rules Setup करें

Production के लिए Security Rules update करें:

1. Firebase Console → **Realtime Database** → **Rules** tab
2. यह paste करें:

```json
{
  "rules": {
    "villages": {
      ".read": true,
      ".write": false
    },
    "services": {
      ".read": true,
      ".write": true,
      ".validate": "newData.isString()"
    }
  }
}
```

3. **"Publish"** क्लिक करें

## 🛠️ Installation & Usage

### Local Development

```bash
# Clone करें
git clone https://github.com/aarushiyadav123-create/Haryana-rural.git
cd Haryana-rural

# Simple HTTP Server start करें
python -m http.server 8000
# या
npx serve

# Browser में खोलें
http://localhost:8000
```

### Deploy to GitHub Pages

```bash
git add .
git commit -m "Update villages data"
git push origin main
```

Website automatically update हो जाएगी: https://dakshyadav.co.in

## 📱 How to Use

### गाँव खोजने के लिए:

1. **जिला चुनें** → Dropdown से अपना district select करें
2. **खण्ड चुनें** → अपना block select करें
3. **गाँव चुनें** → अपना village select करें
4. **जानकारी देखें** → Button दबाएं

### Statistics देखें:

- Total districts, blocks, villages
- District-wise village count

## 🔍 Available Functions

### Firebase से Data लेना

```javascript
// सभी villages load करें
loadVillagesFromFirebase();

// Specific district के villages
getVillagesByDistrict('ROHTAK');

// Specific block के villages
getVillagesByBlock('ROHTAK', 'SAMPLA');

// Village name से search करें
searchVillagesByName('Anwal');

// Total count
countTotalVillages();

// Statistics
getStatistics();
```

### Local Database से

```javascript
// All data
console.log(haryana_complete_database);

// Specific district
console.log(haryana_complete_database['ROHTAK']);

// Statistics
getStatistics();
```

## 📊 Database Structure

```
villages/
├── AMBALA/
│   ├── AMBALA/
│   │   ├── Ambala Rural
│   │   ├── Panjokhra
│   │   └── ...
│   ├── BARARA/
│   │   └── ...
│   └── ...
├── ROHTAK/
│   ├── KALANAUR/
│   ├── SAMPLA/
│   └── ...
└── ...
```

## 🔐 Security Tips

✅ **Production के लिए:**
- Firebase Rules सही set करें
- API Keys को restrict करें
- Custom domain use करें
- CORS properly configure करें

❌ **Do NOT:**
- API keys को publicly expose न करें
- Write access सभी के लिए enable न करें
- Sensitive data को database में न डालें

## 🚀 Future Enhancements

- [ ] User authentication
- [ ] Village-wise services database
- [ ] Shop/business listing
- [ ] Location mapping (Google Maps)
- [ ] Mobile app (React Native)
- [ ] Admin dashboard
- [ ] Real-time updates via WebSocket
- [ ] Offline support

## 📞 Contact & Support

**Developer:** Aarushi Yadav  
**Email:** aarushi.yadav123@gmail.com  
**GitHub:** [@aarushiyadav123-create](https://github.com/aarushiyadav123-create)

## 📄 License

This project is open source. Free to use, modify, and distribute.

## 🙏 Credits

- **Data Source:** Government of Haryana, Survey of India
- **Firebase:** Google Firebase Platform
- **Design:** Custom UI/UX

---

**Last Updated:** August 2026  
**Status:** ✅ Production Ready
