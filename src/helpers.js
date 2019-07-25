export function getModifier( attribute ) {
    return Math.floor(( attribute - 10)/2);
}

export function capitalizeFirstLetter( attributeName ) {
    return attributeName.charAt(0).toUpperCase() + attributeName.slice(1);
}