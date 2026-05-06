# TMG HOAI Combined Premium Website

This version combines:
- The new complete website structure
- The previous website's premium header, logo style, hero design, 3D cards, quick access panel, and notice bars
- No-blur smooth transitions
- Responsive mobile/tablet/desktop layout
- Searchable updates
- Basic form validation

## Files

- index.html
- styles.css
- script.js

## Publish to GitHub Pages

1. Create a new GitHub repository.
2. Upload these files.
3. Go to Settings > Pages.
4. Select `main` branch.
5. Save.

## Publish to AWS

Use any static hosting option:
- AWS S3 Static Website Hosting
- AWS Amplify
- S3 + CloudFront

## Before publishing

Update:
- Board names
- Committee members
- GCash and bank details
- Official email and office hours
- Document links
- Actual concern form backend or Google Form link


## Latest update

Added:
- Dedicated Formal Grievance Form
- Separate Request / Simple Concern Form
- Resident-friendly 3-step guide
- Form guide explaining which form to use
- Clear grievance process card
- Easier mobile layout and large readable sections


## Grievance Google Form link

The full grievance form was replaced with a clean external Google Form button.

Current placeholder link:
https://docs.google.com/forms/d/e/1FAIpQLSdIbvGL8GOA6NEQMVIFkVygvPj40oVH7I6BjFla2YPtAX1w7g/viewform

To update:
1. Open `index.html`.
2. Find `https://docs.google.com/forms/d/e/1FAIpQLSdIbvGL8GOA6NEQMVIFkVygvPj40oVH7I6BjFla2YPtAX1w7g/viewform`.
3. Replace it with the actual Google Form link.


## Live Google Form Links Added

Grievance Form:
https://docs.google.com/forms/d/e/1FAIpQLSdIbvGL8GOA6NEQMVIFkVygvPj40oVH7I6BjFla2YPtAX1w7g/viewform

Request Form:
https://docs.google.com/forms/d/e/1FAIpQLSe1yZ9ozDFpRZ_sHzhfBxRdi-vDzbKOEkxxFM-uxgalzSItEg/viewform

## GitHub Pages Deployment

Upload all files in this folder to your GitHub repository:
- index.html
- styles.css
- script.js
- README.md

Then go to:
Settings > Pages > Branch: main > Save.


Responsive update added: improved fit for desktop, laptop, tablet, and mobile without changing website content.

## Final responsive update

Updated for better fit across desktop, laptop, tablet, mobile, and small phones.
Changes include:
- Improved responsive spacing
- Tablet and mobile hero layout fix
- Mobile hamburger dropdown fit
- Better button/card spacing on small screens
- Removed active navigation highlight so all nav items match
- Added overflow protection to prevent horizontal scrolling


## Professional smooth transition upgrade

Added smoother section reveal, active navigation animation, button/card micro-interactions, and subtle sticky header transition for desktop, tablet, and mobile.


## Latest update
Updated Committees section into a responsive premium card grid with all committees listed and no descriptions.

## Added By-Laws PDF

The Documents / Records section now includes:
- TMG HOAI By-Laws
- Linked PDF file: `TMG-HOAI-By-Laws.pdf`

Keep the PDF file in the same folder as `index.html` when uploading to GitHub Pages, AWS, or any static hosting.


## Event Videos Update

Added a new Event Videos section with an embedded YouTube video archive.

Current video added:
https://youtu.be/wNAQV3iFcf8?si=yz1DsXtcVpLRM7iu

To add more videos later, duplicate the `event-video-card` block in `index.html` and replace the YouTube embed link.


## Announcement Banner Update

Added a rotating, clickable, and dismissible announcement banner at the top of the website.

To edit banner messages, open `script.js` and update the `announcementItems` list.

To change the default first message directly in HTML, open `index.html` and update the text inside `#announcementMessage`.


## Emergency & Essential Contacts Update

Added a new section with clickable image cards for Emergency Hotlines, Hospitals, Dental Clinics, and Law Offices / Notary. Keep the `images` folder in the same directory as `index.html`.

## Latest Emergency & Essential Contacts Upgrade

Updated the Emergency & Essential Contacts section with a premium image-card layout and added:
- Sto. Tomas Emergency Hotlines
- The Mango Grove Contact Numbers
- Hospitals
- Dental Clinics
- Law Offices / Notary

Keep the `images` folder together with `index.html` when uploading to GitHub Pages.
