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

function renderServices(servicesData) {
    const section = document.querySelector('.services');
    if (!section) return;

    const servicesContainer = createElement('section', { class: 'services-container' });

    servicesData.forEach(service => {
        const serviceItem = createElement('article', { class: 'service-item' });

        const illustration = createElement('img', {
            src: service.illustration,
            alt: service.headline,
            class: 'service-illustration'
        });

        const headline = createElement('h3', { class: 'service-headline' }, service.headline);
        const text = createElement('p', { class: 'service-text' }, service.text);
        const link = createElement('a', {
            href: '#',
            class: 'service-link'
        }, service.linktext);

        serviceItem.appendChild(illustration);
        serviceItem.appendChild(headline);
        serviceItem.appendChild(text);
        serviceItem.appendChild(link);

        servicesContainer.appendChild(serviceItem);
    });

    section.appendChild(servicesContainer);
}

function renderFacilities(facilitiesData) {
    const section = document.querySelector('.facilities');
    if (!section) return;

    const facilitiesContainer = createElement('section', { class: 'facilities-container' });

    // Main headline
    const mainHeadline = createElement('h2', { class: 'facilities-main-headline' }, facilitiesData.headline);
    facilitiesContainer.appendChild(mainHeadline);

    // Options grid
    const optionsGrid = createElement('div', { class: 'facilities-options-grid' });

    facilitiesData.options.forEach(option => {
        const optionItem = createElement('article', { class: 'facility-option' });

        const icon = createElement('img', {
            src: option.icon,
            alt: option.headline,
            class: 'facility-icon'
        });

        const headline = createElement('h3', { class: 'facility-headline' }, option.headline);
        const text = createElement('p', { class: 'facility-text' }, option.text);
        const showMoreButton = createElement('a', { class: 'facility-show-more' }, 'Show more');

        optionItem.appendChild(icon);
        optionItem.appendChild(headline);
        optionItem.appendChild(text);
        optionItem.appendChild(showMoreButton);

        optionsGrid.appendChild(optionItem);
    });

    facilitiesContainer.appendChild(optionsGrid);
    section.appendChild(facilitiesContainer);
}

renderHero(hero)
renderServices(services)
renderFacilities(facilities)