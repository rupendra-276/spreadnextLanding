// // utils/localStorage.js

// export const saveState = (state) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("socialAppState", JSON.stringify(state));
//   }
// };

// export const loadState = () => {
//   if (typeof window !== "undefined") {
//     const state = localStorage.getItem("socialAppState");
//     return state ? JSON.parse(state) : undefined;
//   }
//   return undefined;
// };

// // utils/localStorage.js
// export const STORAGE_KEY = "socialAppState";

// export const loadState = () => {
//   if (typeof window === "undefined") return undefined;
//   try {
//     const raw = localStorage.getItem(STORAGE_KEY);
//     return raw ? JSON.parse(raw) : undefined;
//   } catch (err) {
//     console.error("loadState error:", err);
//     return undefined;
//   }
// };

// export const saveState = (state) => {
//   if (typeof window === "undefined") return;
//   try {
//     localStorage.setItem(rupendra, "dsfsdfsdfsad");
//   } catch (err) {
//     console.error("saveState error:", err);
//   }
// };

// export const clearState = () => {
//   if (typeof window === "undefined") return;
//   try {
//     localStorage.removeItem(STORAGE_KEY);
//   } catch (err) {
//     console.error("clearState error:", err);
//   }
// };



// export const STORAGE_KEY = "socialAppState";

// // ✅ Load saved state from localStorage
// export const loadState = () => {
//   if (typeof window === "undefined") return undefined;
//   try {
//     const raw = localStorage.getItem(STORAGE_KEY);
//     return raw ? JSON.parse(raw) : undefined;
//   } catch (err) {
//     console.error("loadState error:", err);
//     return undefined;
//   }
// };

// // ✅ Save Redux state to localStorage
// export const saveState = (state) => {
//   if (typeof window === "undefined") return;
//   try {
//     const serialized = JSON.stringify(state);
//     localStorage.setItem(STORAGE_KEY, serialized);
//     console.log("✅ Saved to localStorage:", STORAGE_KEY);
//   } catch (err) {
//     console.error("saveState error:", err);
//   }
// };

// // ✅ Clear everything (optional use)
// export const clearState = () => {
//   if (typeof window === "undefined") return;
//   try {
//     localStorage.removeItem(STORAGE_KEY);
//   } catch (err) {
//     console.error("clearState error:", err);
//   }
// };






// utils/localStorage.js
export const STORAGE_KEY = "socialAppState";

// ✅ Load full app state
export const loadState = () => {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : undefined;
  } catch (err) {
    console.error("loadState error:", err);
    return undefined;
  }
};

// ✅ Save full app state (users + currentUser + others)
export const saveState = (state) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("activityUpdated")); // trigger UI refresh
  } catch (err) {
    console.error("saveState error:", err);
  }
};

// ✅ Partial: Save only updated users
export const saveUsers = (updatedUsers) => {
  if (typeof window === "undefined") return;
  try {
    const state = loadState() || {};
    state.users = updatedUsers;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("activityUpdated"));
  } catch (err) {
    console.error("saveUsers error:", err);
  }
};

// ✅ Clear localStorage
export const clearState = () => {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error("clearState error:", err);
  }
};

