export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 6;
};

export const validatePhone = (phone) => {
    return /^[6-9]\d{9}$/.test(phone);
};

export const validateRequired = (value) => {
    return value.trim() !== "";
};