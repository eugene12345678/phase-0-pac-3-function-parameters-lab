function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage('Eugene', 'Python'));






function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional('Eugene'));
 
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

// Example usage
console.log(introduction("Aki")); 




