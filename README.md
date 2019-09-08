# Webpages and Sites
Computer Science Progression of Webpages to Websites

Usual Prior Experience
- Simple HTML or CSS

Special Projects and Considerations
- How Mercer's Kitchen mentors DIV II students to create a portfolio using HTML, <a href="https://github.com/MercersKitchen/Website-Mentoring">Click Here for Website Mentoring</a>
- Creating a Development House's Website Testing Centre with Raspberry Pi's, <a href="https://github.com/MercersKitchen/Webpages-Sites/blob/master/WebPageTest.pdf">See Website Test</a>

CAUTION: prototyping is the stuff of classroom lessons; moving to a professional feel requires searching and researching other people's work, constantly

## Project Progression

Creating a GitHub Repository, <a href="https://github.com/MercersKitchen/Computer-Science-Planning/tree/master/Projects/Creating%20a%20GitHub%20Repository">Click Here</a>

**Main Goal**: Promotional Websites to Business-style Websites

Progression of Webpages to Websites
- Introduction to HTML5, <a href="https://github.com/MercersKitchen/Webpages-Sites#introduction-to-html5">see below</a>
  - What is the Internet and Web Documents, <a href="https://github.com/MercersKitchen/Webpages-Sites#what-is-the-internet-and-web-documents">see below</a>
- Static | Dynamic Webpage, (Teaching Project): Essay Project (HTML & Inline CSS), <a href="">click here for Introductory CS Project</a>
  - See: https://github.com/QEHS-Websites/Intro-Essay-Project
  - See: https://github.com/QEHS-Websites/Essay-Project
  - See: https://github.com/MercersKitchen/Webpages-Sites/tree/master/HTML%20Lessons
- Static or Dynamic Webpage (Student Project): Who am I (HTML & Inline CSS), <a href="https://github.com/QEHS-Websites/Who-Am-I">click here for Introductory CS Project</a>
- Dynamic Webpage: Essay Project (HTML & Inline CSS), <a href="https://github.com/QEHS-Websites/Essay-Project">click here for Introductory CS Project</a>
- Dynamic Webpage, Business-Promotion (HTML5), <a href="">click here for Introductory CS Project</a>
- Dynamic Webpage with PHP Data Collection, <a href="">URL and Project Under Construction</a>

Introductory HTML with inline CSS as a Single Page Website Hosted Locally on a Machine using GitHub as the Version Control, <a href="https://github.com/MercersKitchen/Webpages-Sites#html-lessons">see below</a>
- Approximate time: 2 weeks (all outcomes from CSS1)
- Simple Reminders, <a href="https://github.com/MercersKitchen/Webpages-Sites#simple-reminders">see below</a>
- Setting up the Chrome Browser for HTML & CSS Validation, <a href="https://github.com/MercersKitchen/Webpages-Sites#setting-up-the-chrome-browser-for-html--css-validation">see below</a>
- Folder Structure and Boilerplate for Basic Webpage, <a href="">click here</a>
- HEAD Notes, <a href="https://github.com/MercersKitchen/Webpages-Sites#head-notes">see below</a>
- Body Notes and Reference, <a href="">see below</a>
  - HTML Layout Elements, <a href="">see below</a>
  - See https://github.com/QEHS-Websites/Essay-Project
- Enrichment Examples<a href="">see below</a>

All Projects able to end with RPi Server hosting Website delivered through Raspberry Pi, all hosted through QE and EPSB
- Click Here for <a href="https://github.com/MercersKitchen/Webpages-Sites/tree/master/RPI%20Lamp%20Server">link to resources</a>

Optional Webhosting through GitHub, <a href="https://github.com/QEHS-Websites/Website-Hosting">Hosting a Website on GitHub</a>

Additional Projects
- JavaScript based ..., <a href="">URL and Project Under Construction</a>
- A list of Coding Tools in JavaScript, <a href="">URL and Project Under Construction</a>

---

# Introduction to HTML5

GitHub Markdown, with Additional HTML rendered in GitHub ReadMe.md files.
- Note, other programs use Markdown for formatting a variety of messages. Markdown is much easier to use if you are used to it or have a "Summary Sheet".
- "Opens a students world to a new type of formatting."
- "Project External Documentation"

Creating Single Page Applications (static or dynamic websites)
- Goal: host at least one through GitHub Website Hosting, further introduction to Google Analytics and Keywords to link to searches
- Using HTML & inline CSS
- "The front end of project promotion."

Modern Examples of Websites, not promotional or business-style, worth researching and learning how to code
- Chrome Extensions: HTML5 (often simple JavaScript), make browser do more
- PWA: Progressive Web Apps, websites that feel like native Android Apps
- Note: can deploy PWAs through Chrome Extension package (Google This)

---

## What is the Internet and Web Documents

Introductions to a Browser - Specifically Google Chrome (and other exist)
1. "What else can a browser do?"
   - https://www.makeuseof.com/tag/use-browser-notepad/, accessed 20180905
   - A Browser can be a notepad tool, as long as the tab stays open
   - Type the following code into the URL Bar

   ```html
   data:text/html, <html contenteditable>
   ```

   - See: https://www.makeuseof.com/tag/use-browser-notepad/ for additional ideas on how to make a browser a Notepad

   - Uses built-in defaults for font, size, and other formatting rules
   - Google will spell check all the typing
   - If Chrome saves tabs (in settings, "Start where you left off"), or you use Workona, Tab will remain ready for notes but typing will disappear

2. Pathways inside a computer
   - Windows, Folders, and Pathways

3. Pathways outside a computer: URLs in name or number
   - Learning how to read URLs
   - Local Scripting: see example of Browser Notepad
   - Local Hosting: see example of World War II Essay on the Holocaust
   - Client-server hosting: see below

Exploring & Illustrating Internet and Web Docs Architecture
- Main Skill Goal: Using CMD through Windows to sending "Packets" or Internet Messages
- Main Concept Goal: diagram image of Internet Architecture (Google Draw, Paper and Pencil, other methods)
  1. One diagram for all vocabulary
  2. Internet Client-Server Requests through 2 stub networks (2x switches with single router)
- Main Vocabulary for Client-server relationships of Real (MAC) Addressing and Logical Addressing
  - workstations & NIC Cards (real MAC Address)
  - stub networks (defined by 1 workstation & switch or 1 workstation & router)
  - LANs defined by switch
  - WANs defined by router (edge router)
  - MANs defined by region or provider
  - Backbone of Internet defined by "in the wild" routers
- Main Vocabulary for Internet Services Requests ("all at once" (Netflix), packets (checked))
  - DNS
  - Pathways
  - Browser
  - EMail Server
  - Print Server
- Main Commands Examples for CMD
  - /? | ?
  - ping
  - traceroute
  - nslookup
  - Note: https://www.cloudns.net/blog/10-most-used-nslookup-commands/, accessed 20180905

Brief Introduction to Web Documents Design: hypertext (HTTP & HTTPS)
- Ports for HTTP & HTTPS for IP Sockets
- Security Protocol of HTTPS

Introductions to Raspberry Pi, "Going Headless", and IP Sockets
- IP Sockets (IP Address : Port Number) needed to specify packet direction

---

# HTML Lessons

## Simple Reminders

HTML Lessons for the following HTML Features
   - HTML Tags must be included: `<html>, <head>, <body>`
   - `<head>`, <a href="https://www.w3schools.com/html/html_head.asp">Click Here for W3 Schools Reference</a>
   - `<body>`
     - <a href="https://github.com/MercersKitchen/CS10#html-layout-elements">Click Here for HTML Layout Notes in this document</a>

## Setting up the Chrome Browser for HTML & CSS Validation
- HTML Validation
  - In Workona, point a TAB to https://validator.w3.org/
      - Able to validate hosted and local documents
- CSS Validation
  - In Workona, point a TAB to https://jigsaw.w3.org/css-validator/validator.html.en
  - Able to validate hosted and local documents
- Accessibility Testing as a Chrome Developer Tool
  - In the Chrome Store, search for "aXe, Deque Systems" and add it to Chrome
  - In Chrome/Extensions Settings, allow aXe to access URLs
  - Able to find this in Developer Tools and the Analyze Button

## HEAD Notes

General List of all HTML `<head>`
- `<title>`: title in tab, when added to favorites, displays title in search engine when website is hosted live (i.e. GitHub Hosting)
- `<meta>`: see notes and meta attributes below
- `<base>`: for all URLs not defined, this becomes the base URL, for example using Google Drive as a Folder
- Other tags studied in Intermediate Website Projects
  - link: use to link external style sheets
  - script: used to define JavaScript, client-side, scripts
  - style: General CSS Style name:values for this webpage

Metadata Notes
- General W3 Schools Reference, <a href="https://www.w3schools.com/tags/tag_meta.asp">Click Here</a>
- Always passed as name-value pairs
- Never displayed in Browser
- Cross-scripting can happen or JavaScript can access these through DOM Values: <a href="https://www.w3schools.com/jsref/dom_obj_meta.asp">Click Here for W3 Reference</a>
- <a href="">Click Here for enrichment examples of JavaScript or Cross Scripting Examples</a>

List of all meta attributes
- name="author | description | keywords | viewport" content="": <a href="https://www.w3schools.com/tags/att_meta_name.asp">Click Here for examples from W3 Schools</a>
- http-equiv="content-type | default-style | refresh" content="": <a href="https://www.w3schools.com/tags/att_meta_http_equiv.asp">Click Here for examples from W3 Schools</a>
- See HEAD Examples in <a href="https://github.com/QEHS-Websites/Intro-Who-Am-I-Project/tree/master/Pathway%20and%20Files#additional-boilerplate-for-who-am-i--essay-projects-both-introductory-projects">this boilerplate</a>

An Exemplar `<head>` with `<meta>` tags
```html
<meta charset="utf-8">

<title>Who Am I Project</title>

<meta name="author" content="Jane Doe">
<meta name="description" content="Example boilerplate for Who am I Project">
<meta name="keywords" content="boilerplate, starter code">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Content give value for name or http-equiv attribute, text entry in string or array string -->

<!-- meta http-equiv="default-style" content=""--> <!-- content matches css link exactly-->

<!-- Other meta attributes to be aware of -->

<!-- meta http-equiv="refresh" content="30"-->
<!-- Content forces a Internet Request to refresh webpage every "time value in seconds" -->
<!-- Use this when refreshes are needed -->

<!-- meta http-equiv="content-type" content="text/html; charset=UTF-8" -->
<!-- Already specified in the charset above-->
```

#### HTML Layout Elements
https://www.w3schools.com/html/html_layout.asp

```html
<!-- Review specific tags such as h1-h6, p, & special symbols like &copy-->
<header><h1>Header Title</h1></header>
    <nav><h1>Navigation</h1></nav>
    <aside><p>This is the aside space.</p></aside>
    <section>
      <h3>Section 1</h3>
      <article>
        <p>This is article 1 in section 1.</p>
      </article>
      <article>
        <p>This is article 2 in section 1.</p>
      </article>
    </section>
    <section>
      <h3>Section 2</h3>
      <article>
        <p>This is article 1 in section 2.</p>
      </article>
      <article>
        <p>This is article 2 in section 2.</p>
      </article>
    </section>

  </body>

  <footer>&copy Mark Mercer, powered by MercersKitchen (GitHub)</footer>
```

---

## Enrichment Examples

HTML DOM Meta Object Examples
- Accessing: `var x = document.getElementsByTagName("META")[0];`
- Creating: `var x = document.createElement("META");`

---

## Body Notes and Reference
- See https://github.com/QEHS-Websites/Essay-Project
- https://github.com/MercersKitchen/Webpages-Sites/tree/master/HTML%20Lessons



---
# To Include

---

<a href="">Self Study Resources, links, and Progression</a>

Credits
- ABE
- Entrance
- Career

---

Skills Canada Alberta Guidance information (about a restaurant)
- Wireframe Template starts all lessons
- Repo will copy template into individual folders

These Items should be geared towards a portfolio website building on Mentoring Elementary Students.

Items to Prep for
- Case Study and Exploration of Business Model of Service
- GitHub "To Do List" with associated given information (see below): entire Content Repo able to be downloaded

- Researching Accommodations (see Becky's Videos and lessons about this)
- Sitemap (i.e. Home / Menu-Food / Lunch / Dinner / About / Contact) including 2 Click Rule
  - HTML Navigation Tags, Menu, Splash Page and Hyperlinks (Images or Text), Left-Right-Top Nav Bars on other pages
  - Menu-Food: multiple layers depending on business model of service (i.e. Snack Menu or 1-course meal, 3-course meal, 5-course meal)
- Site Requirements
  - Client Initiated Content (English Class Collaboration)
  - Teacher Given Content: all pieces given with ability to switch these
    - Logo
    - Splash Page: Background Image or preferably GIF, Hyperlinks to Menu, EMail Order, Address to Google Maps (related to business model of service)
    - Home Page: includes Home Page Slider (rotating graphic of 3 images with left/right arrows to change rotating graphic), and link to Photo gallery that answers is this experience fun
    - Header: Menu-Nav, Phone, Social Media Links [icons provided]
    - Footer: Quote, Slogan, Address, Google Map [image of map provided, of QE School], Phone/Fax, Menu [First level], Social Media Links [icons provided], Copyright with

---
