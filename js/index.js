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

function renderSites(sitesData) {
    const section = document.querySelector('.sites');
    if (!section) return;

    const sitesContainer = createElement('section', { class: 'sites-container' });

    // First column - main content
    const mainColumn = createElement('article', { class: 'sites-main-column' });

    const headline = createElement('h2', { class: 'sites-headline' }, sitesData.headline);
    const text = createElement('p', { class: 'sites-text' }, sitesData.text);

    const button = createElement('button', { class: 'sites-button' });
    const buttonIcon = createElement('img', {
        src: sitesData.btnicon,
        alt: 'Arrow icon',
        class: 'sites-button-icon'
    });
    button.appendChild(buttonIcon);
    button.appendChild(document.createTextNode('Start'));

    mainColumn.appendChild(headline);
    mainColumn.appendChild(text);
    mainColumn.appendChild(button);

    // Places grid (remaining columns)
    const placesGrid = createElement('div', { class: 'sites-places-grid' });

    sitesData.places.forEach(place => {
        const placeItem = createElement('article', { class: 'sites-place-item' });

        const placeImage = createElement('img', {
            src: place.img,
            alt: place.name,
            class: 'sites-place-image'
        });

        const placeName = createElement('h3', { class: 'sites-place-name' }, place.name);
        const placeCity = createElement('p', { class: 'sites-place-city' }, place.city);
        const viewSiteLink = createElement('a', {
            href: '#',
            class: 'sites-view-site-link'
        }, 'View the site');

        placeItem.appendChild(placeImage);
        placeItem.appendChild(placeName);
        placeItem.appendChild(placeCity);
        placeItem.appendChild(viewSiteLink);

        placesGrid.appendChild(placeItem);
    });

    sitesContainer.appendChild(mainColumn);
    sitesContainer.appendChild(placesGrid);
    section.appendChild(sitesContainer);
}

function renderAdvantages(advantagesData) {
    const section = document.querySelector('.advantages');
    if (!section) return;

    const advantagesContainer = createElement('section', { class: 'advantages-container' });

    // Main headline
    const mainHeadline = createElement('h2', { class: 'advantages-main-headline' }, 'Our Advantages');
    advantagesContainer.appendChild(mainHeadline);

    // Advantages grid
    const advantagesGrid = createElement('div', { class: 'advantages-options-grid' });

    advantagesData.forEach(advantage => {
        const advantageItem = createElement('article', { class: 'advantage-option' });

        const icon = createElement('img', {
            src: advantage.icon,
            alt: advantage.headline,
            class: 'advantage-icon'
        });

        const headline = createElement('h3', { class: 'advantage-headline' }, advantage.headline);
        const text = createElement('p', { class: 'advantage-text' }, advantage.text);

        advantageItem.appendChild(icon);
        advantageItem.appendChild(headline);
        advantageItem.appendChild(text);

        advantagesGrid.appendChild(advantageItem);
    });

    advantagesContainer.appendChild(advantagesGrid);
    section.appendChild(advantagesContainer);
}

function renderFooter(footerData) {
    const section = document.querySelector('.footer');
    if (!section) return;

    const footerContainer = createElement('footer', { class: 'footer-container' });

    // First row - 4 columns
    const firstRow = createElement('div', { class: 'footer-first-row' });

    // Title and slogan
    const titleSlogan = createElement('div', { class: 'footer-title-slogan' });
    const title = createElement('h3', { class: 'footer-title' }, footerData.title);
    const slogan = createElement('p', { class: 'footer-slogan' }, footerData.slogan);
    titleSlogan.appendChild(title);
    titleSlogan.appendChild(slogan);
    firstRow.appendChild(titleSlogan);

    // All three option groups
    footerData.options.forEach(option => {
        const optionGroup = createElement('div', { class: 'footer-option-group' });
        const optionHeadline = createElement('h4', { class: 'footer-option-headline' }, option.headline);
        const optionLinks = createElement('ul', { class: 'footer-links' });

        option.links.forEach(link => {
            const li = createElement('li', { class: 'footer-link-item' });
            const a = createElement('a', { href: link.href, class: 'footer-link' }, link.text);
            li.appendChild(a);
            optionLinks.appendChild(li);
        });

        optionGroup.appendChild(optionHeadline);
        optionGroup.appendChild(optionLinks);
        firstRow.appendChild(optionGroup);
    });

    // Second row - copyright and important links
    const secondRow = createElement('div', { class: 'footer-second-row' });

    // Copyright
    const copyright = createElement('div', { class: 'footer-copyright' });
    const copyrightText = createElement('p', { class: 'footer-copyright-text' }, footerData.copyright);
    copyright.appendChild(copyrightText);

    // Important links
    const importantLinks = createElement('div', { class: 'footer-important-links' });
    const importantLinksList = createElement('ul', { class: 'footer-important-list' });

    footerData.importantLinks.forEach(link => {
        const li = createElement('li', { class: 'footer-important-item' });
        const a = createElement('a', { href: link.href, class: 'footer-important-link' }, link.text);
        li.appendChild(a);
        importantLinksList.appendChild(li);
    });

    importantLinks.appendChild(importantLinksList);

    secondRow.appendChild(copyright);
    secondRow.appendChild(importantLinks);

    footerContainer.appendChild(firstRow);
    footerContainer.appendChild(secondRow);
    section.appendChild(footerContainer);
}

renderHero(hero)
renderServices(services)
renderFacilities(facilities)
renderSites(sites)
renderAdvantages(advantages)
renderFooter(footer)