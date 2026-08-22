export const tokenName = "token";

export const setToken = (token) => localStorage.setItem(tokenName, token);
export const getToken = () => localStorage.getItem(tokenName);
export const removeToken = () => localStorage.removeItem(tokenName);

export const userRoles = ["tutor", "student"];

// export const subjects = [
//   "Mathematics",
//   "Science",
//   "English",
//   "History",
//   "Geography",
//   "Art",
//   "Music",
//   "Physical Education",
//   "Computer Science",
// ];

export const defaultSubjects = [
  { value: "Mathematics", label: "Mathematics" },
  { value: "Science", label: "Science" },
  { value: "English", label: "English" },
  { value: "History", label: "History" },
  { value: "Geography", label: "Geography" },
  { value: "Art", label: "Art" },
  { value: "Music", label: "Music" },
  { value: "Physical Education", label: "Physical Education" },
  { value: "Computer Science", label: "Computer Science" },
];

export const defaultLanguages = [
  { value: "tn", label: "Tamil" },
  { value: "hi", label: "Hindi" },
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
];

// timezone
// Indian/Antananarivo
// Indian/Chagos
// Indian/Christmas
// Indian/Cocos
// Indian/Comoro
// Indian/Kerguelen
// Indian/Mahe
// Indian/Maldives
// Indian/Mauritius
// Indian/Mayotte
// Indian/Reunion

export const defaultTimezones = [
  { value: "Indian/Antananarivo", label: "Indian/Antananarivo" },
  { value: "Indian/Chagos", label: "Indian/Chagos" },
  { value: "Indian/Christmas", label: "Indian/Christmas" },
  { value: "Indian/Cocos", label: "Indian/Cocos" },
  { value: "Indian/Comoro", label: "Indian/Comoro" },
  { value: "Indian/Kerguelen", label: "Indian/Kerguelen" },
  { value: "Indian/Mahe", label: "Indian/Mahe" },
  { value: "Indian/Maldives", label: "Indian/Maldives" },
  { value: "Indian/Mauritius", label: "Indian/Mauritius" },
  { value: "Indian/Mayotte", label: "Indian/Mayotte" },
  { value: "Indian/Reunion", label: "Indian/Reunion" },
];

export const getUserRoleLabel = (role) => {
  switch (role) {
    case "tutor":
      return "TUTOR";
    case "student":
      return "STUDENT";
  }
};
