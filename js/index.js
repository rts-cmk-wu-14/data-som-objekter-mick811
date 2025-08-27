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


/**
 * Renders the hero section
 * @param {Hero} heroData
 */
function renderHero(heroData) {
    const section = document.querySelector('.hero');
    if (!section) return;
    
    const heroContainer = createElement('section', { class: 'hero-container' });
    const heroImage = createElement('img', { src: heroData.image, alt: heroData.headline, class: 'hero-image' });
    const heroBox = createElement('div', { class: 'hero-box' });
    const heroContent = createElement('article', { class: 'hero-content' });
    const heroHeadline = createElement('h1', { class: 'hero-headline' });
    
    // Wrap specific phrases in spans for styling
    const highlightPhrases = ['save your time'];
    heroHeadline.innerHTML = wrapTextPhrases(heroData.headline, highlightPhrases);
    
    const heroCopy = createElement('p', { class: 'hero-copy' }, heroData.copy);
    const heroIconWrapper = createElement('div', { class: 'hero-icon' });
    const heroIconImg = createElement('img', { src: heroData.icon, alt: 'Hero icon' });
    heroIconWrapper.appendChild(heroIconImg);

    heroBox.appendChild(heroContent);
    
    heroContent.appendChild(heroHeadline);
    heroContent.appendChild(heroCopy);
    heroContent.appendChild(heroIconWrapper);
    heroContainer.appendChild(heroImage);
    heroContainer.appendChild(heroBox);
    section.appendChild(heroContainer);
}

renderHero(hero)