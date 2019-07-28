export function getModifier( attribute ) {
    return Math.floor(( attribute - 10)/2);
}

export function capitalizeFirstLetter( attributeName ) {
    return attributeName.charAt(0).toUpperCase() + attributeName.slice(1);
}

export function abbreviateWords( word ) {
    return typeof(word) === "string"? word.slice(0, 3) + ".": word;
}

export function findProficiencyBonus( level ) {
    return 1+ Math.ceil(level/4)
}