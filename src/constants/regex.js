// Input contains only letters, spaces, hyphens, and apostrophes
export const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;

// Input does not contain double spaces
export const doubleSpaceRegex = /\s{2,}/;

// Input does not contain double symbols
export const doubleSymbolRegex = /[^\w\s]{2,}/;

// Input starts with one or more characters that are not whitespace or @, has exactly one @, has valid domain with at least one dot, has valid TLD
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Input is not just special characters
export const onlySpecialCharsRegex = /^[^\w\s]+$/;