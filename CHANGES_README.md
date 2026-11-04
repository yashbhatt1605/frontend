# CarXpress frontend fixes

## Changes included

1. **Vehicle deletion removed from the frontend**
   - Removed Delete controls and delete handlers from both car and bike admin tables, including the alternate Samsung car table.
   - Removed vehicle delete methods from the frontend contexts/services so the frontend no longer exposes a car/bike delete action.
   - Other admin delete actions (such as orders/customers) were not changed.

2. **Car and bike View More pages**
   - Car details now fetch the selected car by its route ID from the existing car MockAPI.
   - Bike details now fetch the selected bike by its route ID from the existing bike MockAPI instead of showing a hardcoded Kawasaki example.
   - Detail pages show available specs, handle missing fields, provide loading/error states, and link back to the relevant listing.
   - Removed duplicate Navbar/Footer rendering from BikeDetails because AppRoutes already renders them.

3. **Design and performance**
   - Removed Framer Motion reveal/hover animations from the repeated product cards and navbar.
   - Simplified the home hero animation and changed key accents to a black/silver/white palette.
   - Removed the blocking Google Fonts CSS import; use system fonts for faster first paint.
   - Reduced global animation effects, added reduced-motion support, and lazy-load listing-card images.
   - Updated car/bike listing accents to match the restrained theme.

## Important limitation

This ZIP contains the **frontend only**. The car/bike Delete controls and frontend delete functions are removed, but if the MockAPI endpoints remain publicly writable, someone could still send a direct DELETE request outside this UI. A strict security guarantee requires restricting deletion in the API/backend as well. Send the backend folder if you want that enforced server-side.

## Install and run

From this folder in PowerShell:

```powershell
npm install
npm start
```

No backend configuration or API URLs were intentionally changed.
