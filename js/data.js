/**
 * Type definitions for data structures used throughout the application.
 * These define the shape and properties of objects used for different sections.
 * 
 * @typedef {{ image: string, headline: string, copy: string, icon: string }} Hero
 * @typedef {{ illustration: string, headline: string, text: string, linktext: string }} Service
 * @typedef {{ icon: string, headline: string, text: string }} FacilitiesOption
 * @typedef {{ headline: string, options: FacilitiesOption[] }} Facilities
 * @typedef {{ img: string, name: string, city: string }} Place
 * @typedef {{ headline: string, text: string, btnicon: string, places: Place[] }} Sites
 * @typedef {{ icon: string, headline: string, text: string }} Advantage
 * 
 * 
 */

/** @type {Hero} */
let hero = {
    image: "https://dazzling-squirrel-77a63d.netlify.app/imgs/hero.png",
    headline: "Find out how we can save your time in Backpacking in Europe",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.",
    icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Globe.png"
}

/** @type {Service[]} */
let services = [
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/exploring.png",
        headline: "Promoting your territory towards foreign tourists",
        text: "EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.",
        linktext: "Discover the places linked to your area that you can link to your structure"
    },
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/tourist_map.png",
        headline: "Additional services designed for the needs of campers",
        text: "Travelling often means that you dont have time to organise excursions along your route. EasyCamper takes care of that!",
        linktext: "Discover the Guided Tours and additional services that you can link to your structure"
    }, 
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/destination.png",
        headline: "Free online showcase with promotion in Italy and abroad",
        text: "Forget about the time and money spent on creating your own website or e-commerce system for bookings.",
        linktext: "Easycamper creates your showcase. Discover the terms and conditions for joining the Network"
    },
]

/** @type {Facilities} */
let facilities = {
    headline: "Making your facility known is our priority",
    options : [
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/list-check.png",
            headline: "Choose the type of stop",
            text: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/spellcheck.png",
            headline: "Describe your structure",
            text: "Describe thee property, location and nearby attractions"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Text-Frame-Add.png",
            headline: "Build your showcase",
            text: "Add photos, videos and descriptions Define the price of each type of that make your propety truly"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Calendar-Today.png",
            headline: "Prices and Availability",
            text: "pitch and configure the availablity calendar."
        },
    ]
}

/** @type {Sites} */
let sites = {
    headline: "Join the community campervan sites managers.",
    text: "Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.",
    btnicon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/arrow-icon.png",
    places: [
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/lucciano.png",
            name: "Lucciano",
            city: "Rome"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/cremonesi.png",
            name: "Cremonesi",
            city: "Florence"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/beneventi.png",
            name: "Beneventi",
            city: "Venice"
        },
    ]
}

/** @type {Advantage[]} */
let advantages = [
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/compare.png",
        headline: "Convenience and Transparency",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/library_books.png",
        headline: "Digital marketing and editorial support",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Compare-HSV.png",
        headline: "Community of services dedicated to campers",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
]

// Opret dit dataobjekt til footerens indhold herunder
let footer = {
    title: "Easy Camper",
    slogan: "When Passion Meets Comfort.",
    options: [
        {
            headline: "Discover the Network",
            links: [
                {
                    text: "Where to shop",
                    href: "#"
                },
                {
                    text: "Tour Guided",
                    href: "#"
                },
                {
                    text: "Our Tours",
                    href: "#"
                },
                {
                    text: "About Us",
                    href: "#"
                }
            ]
        },
        {
            headline: "Become a Manager",
            links: [
                {
                    text: "Join your Pairing",
                    href: "#"
                },
                {
                    text: "Offer your Service",
                    href: "#"
                },
                {
                    text: "Are you a guide?",
                    href: "#"
                }
            ]
        },
        {
            headline: "Assistance",
            links: [
                {
                    text: "Support Center",
                    href: "#"
                },
                {
                    text: "FAQs",
                    href: "#"
                },
                {
                    text: "Cancellation Options",
                    href: "#"
                },
                {
                    text: "Reliability and Sequrity",
                    href: "#"
                }
            ]
        }
    ],
    copyright: "EasyCamper. All rights reserved.",
    importantLinks: [
        {
            text: "About",
            href: "#"
        },
        {
            text: "Site Map",
            href: "#"
        },
        {
            text: "Terms",
            href: "#"
        },
        {
            text: "Privacy Policy",
            href: "#"
        },
        {
            text: "Teams",
            href: "#"
        },
    ]
}