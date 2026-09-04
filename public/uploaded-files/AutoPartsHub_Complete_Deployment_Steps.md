# AutoPartsHub — Complete Deployment Steps (What We Actually Did)

**Live site:** https://auto-parts-hub-chi.vercel.app/
**Backend API:** https://autopartshub-zzoe.onrender.com
**GitHub repo:** https://github.com/gvishnu-in/AutoPartsHub

---

## STEP 1 — Check json-server version

In VS Code terminal, inside the project folder:
```powershell
npm list json-server
```
Result: `json-server@1.0.0-beta.15` (v1 — no `--watch` flag needed, it watches by default).

---

## STEP 2 — Update package.json scripts

Opened `package.json`, updated the `"scripts"` block to:
```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "server": "json-server data/db.json --port 5000",
    "start": "json-server data/db.json --host 0.0.0.0 --port $PORT"
  },
```
Saved the file.

---

## STEP 3 — Test the backend locally

```powershell
npm run server
```
Confirmed working — visited these in browser and got JSON data:
```
http://localhost:5000/products
http://localhost:5000/categories
http://localhost:5000/users
```
Stopped server with `CTRL + C`.

---

## STEP 4 — Create a central API config file

Created `src/apiConfig.js`:
```javascript
const API_URL = 'http://localhost:5000';

export default API_URL;
```

---

## STEP 5 — Replace every hardcoded localhost URL

Searched the whole project (`Ctrl+Shift+F`) for `localhost:5000` — found 16 matches across 11 files. Updated each file to import and use `API_URL` instead:

```javascript
import API_URL from '../apiConfig';
```

Files updated:
- `Login.jsx` → `` `${API_URL}/users` ``
- `Register.jsx` → `` `${API_URL}/users` ``
- `Checkout.jsx` → `` `${API_URL}/orders` ``
- `OrderTracking.jsx` → `` `${API_URL}/orders/...` ``
- `ProductDetails.jsx` → `` `${API_URL}/products/...` ``
- `Admin.jsx` → `` `${API_URL}/products` ``
- `Home.jsx` → `` `${API_URL}/products` `` and `` `${API_URL}/categories` ``
- `Category.jsx` → `` `${API_URL}/products?...` ``
- `Profile.jsx` → `` `${API_URL}/users/...` `` (both lines)
- `Wishlist.jsx` → `` `${API_URL}/products` ``
- `context/WishlistContext.jsx` → 3 lines updated:
  ```javascript
  .get(`${API_URL}/wishlist?userId=${userId}`)
  `${API_URL}/wishlist`
  `${API_URL}/wishlist/${item.id}`
  ```

---

## STEP 6 — Re-verify no leftover localhost references

```
Ctrl+Shift+F → search "localhost:5000"
```
Confirmed 0 results remaining.

---

## STEP 7 — Full local retest (both servers running)

Terminal 1:
```powershell
npm run server
```
Terminal 2:
```powershell
npm run dev
```
Opened `http://localhost:5173`, clicked through Home, Category, Login, Register, Cart, Wishlist — confirmed everything worked.

---

## STEP 8 — Navbar update (Bikes & Cars)

Updated the logo text in `Navbar.jsx`:
```jsx
<Link to="/" className="logo">AutoPartsHub – Bikes & Cars</Link>
```
Updated `nav.css`:
```css
.logo {
  font-family: var(--font-logo);
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-text);
  letter-spacing: 0.5px;
  white-space: nowrap;
}
```
(Final live site shows "AutoPartsHub | Bike & Car Parts" with added nav links for Bike Parts, etc.)

---

## STEP 9 — Check .gitignore

Confirmed `.gitignore` already excluded:
```
node_modules
dist
.env
.env.local
```

---

## STEP 10 — First Git commit

```powershell
git add .
git commit -m "Initial commit - AutoPartsHub ready for deployment"
git status
```
Confirmed: `nothing to commit, working tree clean`

---

## STEP 11 — Create GitHub repo and push

Created an **empty** repo on GitHub named `AutoPartsHub` (no README/gitignore/license checked).

Ran only the "existing repository" commands (skipped the README/init block since the repo already existed locally):
```powershell
git remote add origin https://github.com/gvishnu-in/AutoPartsHub.git
git branch -M main
git push -u origin main
```
Confirmed success: `[new branch] main -> main`

---

## STEP 12 — Deploy backend to Render

1. Went to [Render Dashboard](https://dashboard.render.com) → **New → Web Service**
2. Connected GitHub → selected `AutoPartsHub` repo
3. Render auto-filled Node/Region/etc.
4. Fixed **Build Command** (it had wrongly auto-filled `npm install; npm run build` — the `npm run build` part is for the frontend, not needed here):
   ```
   npm install
   ```
5. Left **Start Command** as:
   ```
   npm run start
   ```
6. Selected the Free plan → clicked deploy button.
7. Got live URL: **https://autopartshub-zzoe.onrender.com**

---

## STEP 13 — Test the live backend

Verified in browser:
```
https://autopartshub-zzoe.onrender.com/products
https://autopartshub-zzoe.onrender.com/categories
https://autopartshub-zzoe.onrender.com/users
```
All returned real JSON data. ✅

---

## STEP 14 — Point frontend to the live backend

Updated `src/apiConfig.js`:
```javascript
const API_URL = 'https://autopartshub-zzoe.onrender.com';

export default API_URL;
```
(Corrected a typo where `const` was accidentally left out.)

---

## STEP 15 — Push the updated apiConfig.js

```powershell
git add .
git commit -m "Point frontend to live Render backend"
git push
```

---

## STEP 16 — Deploy frontend to Vercel

1. Went to [Vercel](https://vercel.com) → logged in with GitHub
2. **Add New → Project** → granted GitHub permissions → imported `AutoPartsHub`
3. Confirmed:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Skipped Environment Variables (not needed since `apiConfig.js` has the URL hardcoded directly)
5. Clicked **Deploy**

Live URL: **https://auto-parts-hub-chi.vercel.app/**

---

## STEP 17 — Final verification

- ✅ Homepage loads with real product data (pulled live from Render)
- ✅ Nav links work (Home, Engine Parts, Braking System, Body Parts, Filters, Admin Panel, Bike Parts)
- ✅ Clicked through Login, Register, Cart, Wishlist — all functional
- ✅ Direct URL reload on product and category pages worked correctly (no 404 — React Router routing fine on Vercel by default here)

---

## Final result

```
Live Frontend:  https://auto-parts-hub-chi.vercel.app/
Live Backend:   https://autopartshub-zzoe.onrender.com
GitHub Repo:    https://github.com/gvishnu-in/AutoPartsHub
```

Data flow:
```
Vercel (React/Vite)  →  Axios  →  Render (JSON Server)  →  data/db.json
```

---

## ⚠️ Known limitation to remember

`data/db.json` lives on Render's filesystem, which is **not durable storage**. Any writes made through the live site (new registrations, cart/wishlist/order changes saved via POST/PUT/DELETE) can be lost if Render restarts or redeploys the service. This setup is great for a portfolio/demo, but not for a real production app with real users. A future upgrade path would be a proper backend + database, e.g.:
```
React + Vite → Axios → Django REST API / Node+Express → PostgreSQL / MongoDB
```
