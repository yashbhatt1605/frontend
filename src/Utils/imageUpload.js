export const previewImage = (file) => {
    if (!file) return "";

    return URL.createObjectURL(file);
};

export const isValidImage = (file) => {
    if (!file) return false;

    return file.type.startsWith("image/");
};

export const imageSizeValid = (file, maxSize = 5) => {
    if (!file) return false;

    return file.size <= maxSize * 1024 * 1024;
};