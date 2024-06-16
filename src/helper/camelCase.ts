export function camelCase(str: string) {
    // Using replace method with regEx
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLocaleLowerCase() : word.toLocaleUpperCase();
    }).replace(/\s+/g, '');
}