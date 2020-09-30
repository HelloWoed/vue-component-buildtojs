
const resolveTag = (template) => {
    template.defaults.imports.resolveTag = (tagName) => {
        return tagName.replace(/[A-Z]/g,($1) => `-${$1.toLowerCase()}`)
    }
}
const resolveColpActName = (template) => {
    template.defaults.imports.resolveColpActName = (item) => {
        return `${item}ActiveNames`
    }
}
const regestFilter = (template) => {
    resolveTag(template);
    resolveColpActName(template);
}

module.exports = regestFilter