/**
 * @param {string} type
 * @param {Object} attributes
 * @param {string} textContent
 * @returns {HTMLElement}
 */
function createElement(type, attributes = {}, textContent = '') {
    const element = document.createElement(type);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    if (textContent) element.textContent = textContent;
    return element;
}

/**
 * Wraps specific text phrases in spans for styling
 * @param {string} text
 * @param {string[]} phrases
 * @returns {string}
 */
function wrapTextPhrases(text, phrases) {
    let result = text;
    phrases.forEach(phrase => {
        const regex = new RegExp(`(${phrase})`, 'gi');
        result = result.replace(regex, '<span class="highlight-text">$1</span>');
    });
    return result;
}
