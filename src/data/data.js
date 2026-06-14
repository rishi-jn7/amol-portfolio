export const categories = ["Branding & Campaign", "Publication", "Research", "Interface", "Photography", "3D", "Experience"]

import quriousThumb from "../assets/thumbnails/qurious.webp"
import zenithThumb from "../assets/thumbnails/zenith.webp"
import pictogramThumb from "../assets/thumbnails/pictogram.webp"
import stepupThumb from "../assets/thumbnails/stepup.webp"
import typoThumb from "../assets/thumbnails/typo_cards.webp"
import huluThumb from "../assets/thumbnails/hulu.webp"
import inviThumb from "../assets/thumbnails/invi.webp"

export const projects = [
    {
        "slug": "qurious-minds",
        "title": "Qurious Minds App",
        "category": categories[0],
        "thumbnail": quriousThumb
    },
    {
        "slug": "zenith",
        "title": "Zenith Magazine",
        "category": categories[0],
        "tags": ["Publication", "College"],
        "description": "Axis Consulting, a pro bono consulting club at Simon Fraser University, needed a bold rebrand to reignite engagement. As the Design Director, I developed a striking visual identity to inspire and captivate its audience.",
        "thumbnail": zenithThumb
    },
    {
        "slug": "pictogram",
        "title": "Pictogram Timeline",
        "category": categories[0],
        "thumbnail": pictogramThumb
    },
    {
        "slug": "invi",
        "title": "Invi Dashboard",
        "category": categories[0],
        "thumbnail": inviThumb
    },
    {
        "slug": "hulu",
        "title": "Hulu Marketing Campaign",
        "category": categories[0],
        "thumbnail": huluThumb
    },
    {
        "slug": "typo",
        "title": "Typo Cards",
        "category": categories[0],
        "thumbnail": typoThumb
    },
    {
        "slug": "stepup",
        "title": "StepUp Branding",
        "category": categories[0],
        "thumbnail": stepupThumb
    }
]


import gbLogo from "../assets/experience/gb.jpg"
import iitbLogo from "../assets/experience/iitb.png"
import scoreleapLogo from "../assets/experience/scoreleap.jpg"

export const experience = [
    {
        "company": "Graphics Beyond",
        "role": "Graphic Designer",
        "duration": "Jun 2025 - Present",
        "logo": gbLogo
    },
    {
        "company": "IDC IIT Bombay",
        "role": "Graphic Design Intern",
        "duration": "Dec 2024 - May 2025",
        "logo": iitbLogo
    },
    {
        "company": "Scoreleap",
        "role": "Graphic Design Intern",
        "duration": "Mar 2024 - Apr 2025",
        "logo": scoreleapLogo
    }
]