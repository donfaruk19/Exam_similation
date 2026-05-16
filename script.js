/**
 * IC3 GS6 EXAM SIMULATOR - ARCHITECTURAL ENGINE
 * Developed by: Donfaruk19
 * Optimized for: WCAG Accessibility (ARIA), Touch Interfaces, and Dynamic Module Scaling
 * Feature Integration: Dual Mode Routing Engine (Training & Testing Profiles)
 */

// Basic Intellectual Property and Context View Isolation Protection Layers
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123) return false; 
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; 
};
// ==========================================
// EXTENSIBLE QUIZ MODULE STORAGE
// ==========================================
const allModules = {
    l1_lesson1: [
        // --- 1. OPERATING SYSTEM CONCEPTS ---
        {
            type: "mcq",
            q: "What is the definition of an Operating System (OS)?",
            a: ["A physical hardware component inside the case", "A computer program that manages hardware and controls communication between apps and hardware", "A web browser used to access the internet", "A temporary storage device"],
            cor: 1,
            exp: "The Operating System is the central program that manages communication, coordinates tasks, and controls hardware devices."
        },
        {
            type: "yesno",
            q: "Evaluate the following statements regarding Operating System Versions and Editions:",
            statements: [
                "An OS 'Version' refers to the specific code-base used to develop it (e.g., Windows 7, Windows 10).",
                "An OS 'Edition' determines which features are available (e.g., Home, Professional, Enterprise).",
                "Versions and Editions are the exact same thing."
            ],
            cor: [true, true, false],
            exp: "Version refers to the core code-base (Windows 10), while Edition refers to the feature package (Pro vs Home)."
        },
        {
            type: "categorization",
            q: "Categorize the following Operating Systems based on their primary design target:",
            categories: ["Desktop OS", "Mobile OS", "Embedded OS"],
            items: [
                { name: "Windows 10", category: "Desktop OS" },
                { name: "Android", category: "Mobile OS" },
                { name: "iOS", category: "Mobile OS" },
                { name: "OS for specific medical equipment", category: "Embedded OS" }
            ],
            exp: "Desktops use Windows/Mac, handhelds use Mobile OS, and specialized machines use Embedded OS."
        },
        
        // --- 2. BROWSER CONCEPTS ---
        {
            type: "multi",
            q: "Which of the following are considered popular Web Browsers? (Select 3)",
            a: ["Microsoft Edge", "Windows 10", "Google Chrome", "Mozilla Firefox", "Linux"],
            cor: [0, 2, 3],
            required: 3,
            exp: "Edge, Chrome, and Firefox are web browsers. Windows 10 and Linux are Operating Systems."
        },
        {
            type: "matching",
            q: "Match the standard Windows window control button to its exact function:",
            pairs: [
                { term: "Minimize", definition: "Temporarily collapses the window to the taskbar." },
                { term: "Maximize", definition: "Displays the window full screen." },
                { term: "Restore Down", definition: "Restores the window to the size it was before it was maximized." },
                { term: "Close", definition: "Closes the window completely." }
            ],
            exp: "These controls are located at the top right of standard browser and application windows."
        },
        {
            type: "ordering",
            q: "Arrange the steps to duplicate an active browser tab:",
            items: [
                "Select 'Duplicate tab' from the pop-up menu.",
                "Hover your mouse over the active tab at the top of the browser.",
                "Right-click the active tab."
            ],
            cor: [1, 2, 0],
            exp: "To duplicate, hover over the tab, right-click to open the context menu, and select Duplicate."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about Hyperlinks:",
            statements: [
                "When you point the mouse over a hyperlink, it changes to a pointing hand icon.",
                "Hyperlinks can only be text, never images.",
                "A hyperlink can link to a different page on the same website or a completely different website."
            ],
            cor: [true, false, true],
            exp: "Hyperlinks change the cursor to a hand and can be text, images, icons, or specific screen areas."
        },

        // --- 3. USER ACCOUNTS & WINDOWS NAVIGATION ---
        {
            type: "categorization",
            q: "Categorize the permissions granted to these User Account types:",
            categories: ["Administrator", "Standard User"],
            items: [
                { name: "Can make changes affecting all other users", category: "Administrator" },
                { name: "Created automatically when Windows is installed", category: "Administrator" },
                { name: "Cannot change security settings", category: "Standard User" },
                { name: "Cannot access files created by other users", category: "Standard User" }
            ],
            exp: "Administrators have full system control, while Standard users are restricted to protect the system and privacy."
        },
        {
            type: "mcq",
            q: "What does the concept of a 'Single Sign-on Account' (like a Microsoft Account) allow you to do?",
            a: ["It forces you to create a new password for every single app you use.", "It validates who you are across multiple services and devices using one set of credentials.", "It prevents you from logging into public computers.", "It disables the need for a password entirely."],
            cor: 1,
            exp: "Single sign-on validates your identity across various platforms and devices without needing multiple accounts."
        },
        {
            type: "matching",
            q: "Match the Windows Taskbar element to its correct description:",
            pairs: [
                { term: "Task View", definition: "Shows small windows of running apps and commands for virtual Desktops." },
                { term: "Notification Area", definition: "Displays time, date, volume control, and network status." },
                { term: "Show Desktop", definition: "Point at this button to make open windows transparent or click to minimize all." }
            ],
            exp: "These are core elements located on the Windows 10 Taskbar."
        },
        
        // --- 4. MOBILE NAVIGATION GESTURES ---
        {
            type: "matching",
            q: "Match the Mobile OS touch gesture to its physical action:",
            pairs: [
                { term: "Tap", definition: "Lightly touch items with your fingertip to select." },
                { term: "Touch and Hold", definition: "Maintain contact to drag a widget or open a pop-up menu." },
                { term: "Swipe or Slide", definition: "Lightly drag your finger vertically or horizontally to scroll." },
                { term: "Pinch and Spread", definition: "Move two fingers together or apart to zoom in or out." }
            ],
            exp: "These four gestures are the foundation of navigating touch-based Mobile Operating Systems."
        },

        // --- 5. HARDWARE: INPUT & OUTPUT ---
        {
            type: "categorization",
            q: "Categorize the following computer hardware devices:",
            categories: ["Input Device", "Output Device"],
            items: [
                { name: "Keyboard", category: "Input Device" },
                { name: "Microphone", category: "Input Device" },
                { name: "Monitor", category: "Output Device" },
                { name: "Printer", category: "Output Device" },
                { name: "Speakers", category: "Output Device" }
            ],
            exp: "Input devices send data into the computer. Output devices display or produce data from the computer."
        },
        {
            type: "matching",
            q: "Match the specific keyboard key category to its description:",
            pairs: [
                { term: "Modifier Keys", definition: "Used in combination with other keys for shortcuts (e.g., Ctrl, Alt, Windows Key)." },
                { term: "Function Keys", definition: "Keys labeled F1 through F12 that perform special commands." },
                { term: "Numeric Keypad", definition: "A calculator-like grid of numbers toggled by the NumLock key." }
            ],
            exp: "Standard keyboards are divided into specific zones for different interaction types."
        },
        {
            type: "multi",
            q: "Which of the following actions can typically be performed using a standard computer mouse? (Select 3)",
            a: ["Left Drag", "Right Drag", "Pinch to Zoom", "Using the Scroll Wheel", "Printing a document directly"],
            cor: [0, 1, 3],
            required: 3,
            exp: "A mouse supports left drag, right drag, and scroll wheel actions. Pinch to zoom is a touch gesture."
        },
        {
            type: "mcq",
            q: "How do you 'activate' or open an item using a laptop Touchpad?",
            a: ["Tap the touchpad once", "Tap the touchpad twice in quick succession (or double-click the left button)", "Press the CTRL key while touching", "Swipe three fingers"],
            cor: 1,
            exp: "Tapping once selects the item; tapping twice in quick succession activates or opens it."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about Touch Screens:",
            statements: [
                "Touch screens act as both an input and an output device.",
                "Entering long paragraphs of text on a touch screen is faster and more comfortable than a physical keyboard.",
                "Touch screens present virtual keyboards to the user for typing."
            ],
            cor: [true, false, true],
            exp: "Touch screens output the display and input your touches, but typing long texts on them can become uncomfortable."
        },
        {
            type: "mcq",
            q: "When purchasing a Monitor, what does 'Resolution' refer to?",
            a: ["The physical weight of the monitor", "The measurement of sharpness and clarity of the displayed images", "The length of the power cable", "The volume of the built-in speakers"],
            cor: 1,
            exp: "Resolution measures the sharpness and clarity of the image, which is a major factor in the monitor's price."
        },
        {
            type: "multi",
            q: "Which of the following are common types of Printers? (Select 3)",
            a: ["Inkjet", "Laser", "Stylus", "All-in-one", "Ethernet"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Inkjet, Laser, and All-in-one are printer types. Stylus is an input pen, and Ethernet is a cable."
        },

        // --- 6. PORTS & CONNECTORS ---
        {
            type: "matching",
            q: "Match the Audio Port color code to its standard device connection:",
            pairs: [
                { term: "Pink Port", definition: "Microphone" },
                { term: "Light Blue Port", definition: "Line In (e.g., CD Player)" },
                { term: "Lime Green Port", definition: "Line Out (e.g., Speakers or Headphones)" }
            ],
            exp: "Audio ports are color-coded: Pink is for mic input, Lime Green is for audio output."
        },
        {
            type: "categorization",
            q: "Categorize the following standard connection ports:",
            categories: ["Video Port", "Network Port"],
            items: [
                { name: "VGA", category: "Video Port" },
                { name: "HDMI", category: "Video Port" },
                { name: "DVI", category: "Video Port" },
                { name: "RJ-45 / Ethernet", category: "Network Port" }
            ],
            exp: "VGA, DVI, and HDMI are used to send video output to monitors and projectors."
        },
        {
            type: "matching",
            q: "Match the USB version to its standard speed and usual color coding:",
            pairs: [
                { term: "USB 2.0", definition: "Top speed of 480Mbps; usually black or white." },
                { term: "USB 3.0", definition: "Theoretical top speed of 5Gbps; usually blue." },
                { term: "USB 3.1 Generation 2", definition: "Speeds up to 10Gbps; usually teal blue." }
            ],
            exp: "USB technology has evolved to support faster data transfer speeds, marked by port colors."
        },
        {
            type: "ordering",
            q: "Arrange the chronological steps required to pair a Bluetooth accessory to a device:",
            items: [
                "Select the accessory from the list of nearby devices on your screen.",
                "Turn on Bluetooth on your device.",
                "Put the accessory into discovery (pairing) mode.",
                "Enter the PIN code if prompted to finalize pairing."
            ],
            cor: [1, 2, 0, 3],
            exp: "Bluetooth must be active on both devices, and the accessory must be discoverable before it can be selected."
        },

        // --- 7. MEMORY & STORAGE ---
        {
            type: "categorization",
            q: "Categorize the following memory types based on volatility:",
            categories: ["Non-Volatile (Permanent)", "Volatile (Temporary)"],
            items: [
                { name: "ROM (Read-only memory)", category: "Non-Volatile (Permanent)" },
                { name: "Hard Disks / SSDs", category: "Non-Volatile (Permanent)" },
                { name: "RAM (Random-access memory)", category: "Volatile (Temporary)" }
            ],
            exp: "RAM is volatile and loses data when powered off. ROM and storage drives retain data permanently."
        },
        {
            type: "mcq",
            q: "What is the primary physical difference between a traditional Hard Disk Drive (HDD) and a Solid State Drive (SSD)?",
            a: ["SSDs hold less data than HDDs.", "SSDs do not have any moving parts and use flash memory chips.", "HDDs use optical lasers instead of magnets.", "SSDs require an internet connection to work."],
            cor: 1,
            exp: "Traditional HDDs use spinning magnetic platters, while SSDs use interconnected flash memory chips with no moving parts."
        },
        {
            type: "matching",
            q: "Match the storage media to its description:",
            pairs: [
                { term: "Flash Drive (Thumb Drive)", definition: "Portable mass storage device that uses a USB connector." },
                { term: "SD Card", definition: "Small, high-capacity flash storage commonly used in cameras and phones." },
                { term: "Optical Disc", definition: "CDs and DVDs read by lasers." }
            ],
            exp: "These represent different form factors for portable data storage."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about Optical Drives:",
            statements: [
                "A CD-ROM drive can write (burn) data onto a blank disc.",
                "An optical writer (burner drive) uses special software to write data onto a disc.",
                "Newer laptops frequently omit built-in optical drives to save space."
            ],
            cor: [false, true, true],
            exp: "A basic CD-ROM drive can only READ data. You need an optical writer/burner to write data."
        },

        // --- 8. OS TYPES & CLASSIFICATIONS ---
        {
            type: "matching",
            q: "Match the Mobile Operating System to its developer/characteristics:",
            pairs: [
                { term: "Android", definition: "From Google; based on Linux and is open-source." },
                { term: "iOS", definition: "From Apple; closed-source, proprietary, and derived from OS X." },
                { term: "Windows 10 Mobile", definition: "From Microsoft; no longer supported." }
            ],
            exp: "Android and iOS are the two dominant mobile operating systems today."
        },
        {
            type: "multi",
            q: "Which of the following are considered 'Distributions' (Distros) of the Linux Operating System? (Select 3)",
            a: ["Ubuntu", "CentOS", "Windows", "Elementary OS", "Mojave"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Ubuntu, CentOS, and Elementary OS are Linux distributions. Windows is Microsoft; Mojave is Mac OS X."
        },
        {
            type: "mcq",
            q: "Which operating system was one of the earliest created, originally designed for large mainframe computers and servers?",
            a: ["Windows 10", "Android", "UNIX", "iOS"],
            cor: 2,
            exp: "UNIX is one of the earliest operating systems, laying the groundwork for many modern OS infrastructures."
        },

        // --- 9. NETWORKING CONCEPTS ---
        {
            type: "categorization",
            q: "Categorize the maximum data transmission speeds of these Ethernet Cables:",
            categories: ["Up to 1Gbps", "Up to 10Gbps"],
            items: [
                { name: "Cat 5e", category: "Up to 1Gbps" },
                { name: "Cat 6", category: "Up to 10Gbps" },
                { name: "Cat 6a", category: "Up to 10Gbps" }
            ],
            exp: "Cat 5e tops out at 1Gbps. Cat 6 and 6a support speeds up to 10Gbps."
        },
        {
            type: "matching",
            q: "Match the Ethernet networking standard to its specific speed rating:",
            pairs: [
                { term: "Gigabit Ethernet", definition: "Moves data at 1Gbps" },
                { term: "Fast Ethernet", definition: "Moves data at 100Mbps" },
                { term: "10Base-T Ethernet", definition: "Moves data at 10Mbps" }
            ],
            exp: "These are the three standard speeds for Ethernet network cabling."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about Wireless Connections (Wi-Fi):",
            statements: [
                "An Ad-hoc network connects devices directly to each other without a router.",
                "An Infrastructure network connects devices through a router or access point.",
                "Ad-hoc networks are highly secure and recommended for business use."
            ],
            cor: [true, true, false],
            exp: "Ad-hoc networks are highly insecure and generally do not provide internet access."
        },
        {
            type: "ordering",
            q: "Order the steps to connect a Windows 10 computer to an Infrastructure Wi-Fi Network:",
            items: [
                "Click the network icon in the taskbar to display available networks.",
                "Select the desired network from the list and click Connect.",
                "Type the network security key (passkey) in the box.",
                "Click Next to authenticate with the router."
            ],
            cor: [0, 1, 2, 3],
            exp: "You must view the list, select your target, input the password, and authenticate."
        },
        {
            type: "mcq",
            q: "When troubleshooting a network, you use the ipconfig tool and see your IP address is '169.254.1.10'. What does this mean?",
            a: ["Your internet is working perfectly at maximum speed.", "The system has not received a valid IP address from the broadband router.", "Your computer is infected with a Trojan.", "Your Bluetooth is turned off."],
            cor: 1,
            exp: "A 169.254.x.x address is an APIPA address, meaning the computer failed to communicate with the router."
        },
        {
            type: "ordering",
            q: "If your computer has a valid IP address but still cannot connect to the internet, order the steps to reboot your network hardware:",
            items: [
                "Turn the modem and broadband router off for one minute.",
                "Restart the modem and wait for it to be fully up and running.",
                "Restart the broadband router.",
                "Restart the computer."
            ],
            cor: [0, 1, 2, 3],
            exp: "Always power cycle the source (modem) before the distributor (router), then reboot the end device."
        },

        // --- 10. SOFTWARE & APPS ---
        {
            type: "categorization",
            q: "Categorize the software deployment models:",
            categories: ["Locally-Installed Software", "Cloud-Based Software"],
            items: [
                { name: "Installed and runs directly on the device's hard drive", category: "Locally-Installed Software" },
                { name: "Runs on a dedicated server and accessed via the Internet", category: "Cloud-Based Software" },
                { name: "Software as a Service (SaaS)", category: "Cloud-Based Software" }
            ],
            exp: "Local software relies on device hardware; Cloud software relies on remote servers and internet."
        },
        {
            type: "matching",
            q: "Match the Application Program category to its primary function:",
            pairs: [
                { term: "Word Processing", definition: "Create, edit, format, and print text documents (e.g., Microsoft Word)." },
                { term: "Spreadsheet", definition: "Perform calculations, analyze data, and produce charts (e.g., Excel)." },
                { term: "Graphic Design", definition: "Create logos, posters, and vector images (e.g., Adobe Illustrator)." },
                { term: "Presentation", definition: "Share information in the form of a slide show (e.g., PowerPoint)." }
            ],
            exp: "These represent the core productivity software categories."
        },
        {
            type: "multi",
            q: "Which of the following applications are part of the Google Workspace Web Apps? (Select 3)",
            a: ["Google Docs", "Microsoft Word", "Google Sheets", "Keynote", "Google Slides"],
            cor: [0, 2, 4],
            required: 3,
            exp: "Docs, Sheets, and Slides are Google's cloud-based productivity web apps."
        },
        {
            type: "matching",
            q: "Match the App Store to the platform it operates on:",
            pairs: [
                { term: "Google Play Store", definition: "Android devices" },
                { term: "App Store", definition: "Apple iOS devices" },
                { term: "Windows Store", definition: "Windows 10 desktops and devices" }
            ],
            exp: "App stores are digital platforms for distributing software tailored to specific operating systems."
        },
        {
            type: "categorization",
            q: "Categorize the licensing type of the software:",
            categories: ["Proprietary (Closed-Source)", "Open-Source"],
            items: [
                { name: "Windows 10", category: "Proprietary (Closed-Source)" },
                { name: "Linux", category: "Open-Source" },
                { name: "Mac OS X", category: "Proprietary (Closed-Source)" },
                { name: "Users can study, change, and distribute the code freely", category: "Open-Source" }
            ],
            exp: "Proprietary software code is hidden and owned by a company. Open-source code is free to modify."
        },
        {
            type: "mcq",
            q: "When installing software, you are asked to agree to the EULA. What does EULA stand for?",
            a: ["Electronic User Legal Agreement", "End User License Agreement", "Enterprise Utility Loading App", "External Universal Local Access"],
            cor: 1,
            exp: "The EULA contains the rules regarding what you are and are not permitted to do with the software."
        },
        {
            type: "ordering",
            q: "Order the standard steps for installing an app from a Mobile App Store:",
            items: [
                "Open the app store and use the Search bar to find the app.",
                "Tap the app in the list to open its detail page.",
                "Click 'Install' to download and install the app.",
                "Click the 'Open' button once installation is complete."
            ],
            cor: [0, 1, 2, 3],
            exp: "You search, view details, authorize the installation, and then launch the app."
        },

        // --- 11. DEVICE FORM FACTORS ---
        {
            type: "multi",
            q: "Which of the following are characteristics of a Chromebook? (Select 3)",
            a: ["Runs on the Chrome OS operating system", "Designed primarily to run cloud-based applications", "Considerably more expensive than standard laptops", "Uses less power with 7 to 9 hours of battery life", "Does not have a physical keyboard"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Chromebooks run Chrome OS for cloud apps, have long battery life, and are relatively inexpensive."
        },
        {
            type: "categorization",
            q: "Categorize the types of Tablets based on their Operating System characteristics:",
            categories: ["Desktop-based OS Tablet", "Mobile-based OS Tablet"],
            items: [
                { name: "Thicker, heavier, and requires more cooling", category: "Desktop-based OS Tablet" },
                { name: "Can run full Microsoft Desktop Applications", category: "Desktop-based OS Tablet" },
                { name: "Lighter, runs cooler, and offers longer battery life", category: "Mobile-based OS Tablet" },
                { name: "Runs ONLY mobile apps", category: "Mobile-based OS Tablet" }
            ],
            exp: "Desktop-based tablets act like full PCs. Mobile-based tablets act like large smartphones."
        },
        {
            type: "mcq",
            q: "Which hardware setup features a PC case (containing the hard drive and memory) integrated directly into the monitor itself?",
            a: ["Standard Desktop PC", "All-in-One Computer", "Mainframe Server", "Router"],
            cor: 1,
            exp: "All-in-One computers combine the monitor and the system unit into a single sleek device."
        },
        {
            type: "mcq",
            q: "Which handheld device combines the features of a standard cell phone with a personal computer?",
            a: ["Chromebook", "Smart Phone", "Tablet", "Macintosh"],
            cor: 1,
            exp: "Smart Phones merge cellular communication with computer processing and app ecosystems."
        }
    ],
    l1_lesson2: [
        { q: "What constitutes your 'Digital Identity'?", a: ["Only your profile picture", "Your profile plus all posts, likes, and people you follow", "Only the websites you visit in private mode", "Your physical ID card"], cor: 1, exp: "Your digital identity is the combination of your profile and all your online actions." },
        { q: "What is a 'Digital Footprint'?", a: ["A record of your physical steps", "A permanent record of the 'steps' you take online", "A temporary file that deletes itself", "A type of secure password"], cor: 1, exp: "A digital footprint is a permanent record of your online activity that others can follow." },
        { q: "Why do employers check your digital footprints?", a: ["To steal your data", "To see if you are good at games", "To assess your character and personal brand", "To check your internet speed"], cor: 2, exp: "Employers and schools check online accounts to see who you are as a person." },
        { q: "Which of these is a positive way to manage your digital reputation?", a: ["Posting angry comments", "Liking every post you see", "Promoting a positive personal brand", "Hiding your name everywhere"], cor: 2, exp: "You should actively promote a positive brand every time you post online." },
        { q: "What is 'Netiquette'?", a: ["A new internet browser", "The rules for professional and respectful online behavior", "A type of social media site", "An internet security software"], cor: 1, exp: "Netiquette is the set of rules for behaving properly and respectfully online." },
        { q: "Which of the following is a rule of Netiquette?", a: ["Use ALL CAPS to be heard", "Share private photos of friends", "Keep messages brief and to the point", "Ignore emails from strangers"], cor: 2, exp: "Good netiquette involves being concise and respectful of people's time." },
        { q: "In digital communication, what does 'Flaming' mean?", a: ["Reporting a bug", "Expressing a strong opinion without insults", "Posting angry or insulting messages", "Deleting your account"], cor: 2, exp: "Flaming is the act of posting offensive or hostile messages." },
        { q: "What is 'Cyberbullying'?", a: ["A type of computer virus", "Using technology to harass, threaten, or humiliate someone", "Blocking someone you don't like", "Sending a work email"], cor: 1, exp: "Cyberbullying is repeated, intentional harm inflicted through technology." },
        { q: "If you receive an inappropriate or bullying message, what is the first step you should take?", a: ["Reply with an insult", "Delete it immediately", "Keep a record or screenshot as evidence", "Forward it to everyone"], cor: 2, exp: "You must save evidence of inappropriate behavior to report it effectively." },
        { q: "What is 'Cyberstalking'?", a: ["Adding a friend on Facebook", "Repeatedly using electronic communication to harass or frighten someone", "Searching for a celebrity's age", "Buying followers"], cor: 1, exp: "Cyberstalking is a serious form of harassment used to frighten others." },
        { q: "Which behavior involves creating a fake identity to trick others?", a: ["Trolling", "Catfishing", "Phishing", "Vlogging"], cor: 1, exp: "Catfishing is the practice of setting up a fake online persona to deceive people." },
        { q: "What is an 'Internet Troll'?", a: ["A software developer", "A person who starts arguments or upsets people for fun", "A secure router", "A viral video"], cor: 1, exp: "Trolls post inflammatory content just to provoke a reaction." },
        { q: "How should you respond to a troll?", a: ["Argue with them", "Ignore them and do not 'feed' the behavior", "Ask them to be friends", "Send them your password"], cor: 1, exp: "Trolls want a reaction; ignoring them is usually the best response." },
        { q: "What is 'Inappropriate Content'?", a: ["A long news article", "Content that is upsetting, offensive, or unsuitable for the audience", "An ad for a new phone", "A tutorial video"], cor: 1, exp: "Content that causes distress or is offensive is considered inappropriate." },
        { q: "What does 'Blocking' a user do?", a: ["Deletes their account", "Prevents them from contacting you or seeing your profile", "Reports them to the police", "Slows down their internet"], cor: 1, exp: "Blocking is a tool to stop a specific person from interacting with you." },
        { q: "Why is it important to check 'Privacy Settings' on social media?", a: ["To change the theme color", "To control who can see your information and posts", "To make the app run faster", "To save battery"], cor: 1, exp: "Privacy settings help you manage who has access to your digital identity." },
        { q: "What is 'Identity Theft'?", a: ["Forgetting your password", "When someone steals your personal info to commit fraud", "Changing your profile name", "Using a fake name on a game"], cor: 1, exp: "Identity theft occurs when someone uses your data (like SSN) illegally." },
        { q: "Which of these is a risk of sharing your location (Geotagging) online?", a: ["It makes photos look better", "It allows strangers to know exactly where you are", "It uses too much data", "It deletes the photo"], cor: 1, exp: "Geotagging can reveal your physical location to people you don't know." },
        { q: "What does 'Authenticating' information mean?", a: ["Deleting old files", "Verifying that information is true and from a reliable source", "Translating a website", "Copying a link"], cor: 1, exp: "Authentication is the process of checking if information or a user is genuine." },
        { q: "Which of the following indicates a website might be 'Biased'?", a: ["It has many pictures", "The tone is persuasive or exaggerated rather than factual", "It loads very quickly", "It is written in English"], cor: 1, exp: "Bias is often shown through a persuasive, unbalanced, or sarcastic tone." },
        { q: "Why should you check the 'Author' of a blog or wiki?", a: ["To see if they are famous", "Because anyone can contribute regardless of qualifications", "To send them an email", "To see their photo"], cor: 1, exp: "Blogs and wikis allow anyone to write; checking the author helps verify expertise." },
        { q: "What is the benefit of a 'Verified' account (Blue Checkmark)?", a: ["It gives you free internet", "It proves the account actually belongs to the person it claims to be", "It hides your posts", "It makes you an admin"], cor: 1, exp: "Verification helps prevent catfishing and identity fraud." },
        { q: "What is a 'Vlog'?", a: ["A voice-only blog", "A video blog", "A secure data log", "A viral photo"], cor: 1, exp: "A vlog is a blog where the primary medium is video." },
        { q: "What is a 'Microblog'?", a: ["A very long article", "A social media site for short updates (like X/Twitter)", "A tiny computer", "A private diary"], cor: 1, exp: "Microblogs are for short, frequent posts." },
        { q: "Which of these is 'Public' information?", a: ["Your private messages", "Your banking password", "Comments you leave on a public news post", "Your browser history"], cor: 2, exp: "Public comments can be seen and recorded by anyone." },
        { q: "What is a 'Social Media Influencer'?", a: ["A hacker", "Someone with the power to affect the interests of an audience", "An employee of Facebook", "A viral video"], cor: 1, exp: "Influencers use their large following to shape opinions." },
        { q: "True or False: Deleting a post removes it from the internet forever.", a: ["True", "False"], cor: 1, exp: "False. Others may have screenshotted or archived the post." },
        { q: "Which is a sign of a professional email?", a: ["Using slang", "Using a clear subject line and professional greeting", "Writing in all lowercase", "Including many emojis"], cor: 1, exp: "Clear subjects and greetings are core parts of professional netiquette." },
        { q: "What should you check to see if a website is updated regularly?", a: ["The font size", "The 'Last Updated' date or copyright year", "The number of images", "The scroll bar"], cor: 1, exp: "The date indicates if the information is current or obsolete." },
        { q: "What is the danger of an 'Echo Chamber' online?", a: ["It makes your computer echo", "You only see information that confirms your existing beliefs", "It speeds up your feed", "It blocks all ads"], cor: 1, exp: "Echo chambers prevent you from seeing balanced, diverse viewpoints." },
        { q: "Which of these is 'Sensitive Information'?", a: ["Your favorite food", "Your Social Security Number", "Your pet's name", "Your city"], cor: 1, exp: "Sensitive data like SSNs can be used for identity theft." },
        { q: "What does 'Digital Reputation' mean?", a: ["How fast your computer is", "The opinion people have of you based on your online behavior", "How many followers you have", "Your gaming rank"], cor: 1, exp: "Reputation is the collective public opinion of your online presence." },
        { q: "What is 'Digital Literacy'?", a: ["Buying new gadgets", "The ability to find, evaluate, and communicate information through typing", "Writing a book on a computer", "Playing video games"], cor: 1, exp: "Digital literacy involves effectively using and evaluating digital tools." },
        { q: "What is 'Copyright'?", a: ["The right to copy anything", "Legal protection for original works", "A type of printer", "A website password"], cor: 1, exp: "Copyright protects the creators of original content." },
        { q: "What is 'Fair Use'?", a: ["Using software without paying", "Limited use of copyrighted material without permission for education/news", "Sharing passwords with friends", "A free trial"], cor: 1, exp: "Fair use allows small portions of work to be used for things like teaching or reporting." },
        { q: "What is 'Plagiarism'?", a: ["A medical condition", "Using someone else's work or ideas as your own", "Backing up your files", "A type of virus"], cor: 1, exp: "Plagiarism is failing to give credit to the original creator." },
        { q: "How can you avoid plagiarism?", a: ["By changing two words in a sentence", "By citing your sources", "By using a different font", "By not putting your name on it"], cor: 1, exp: "Citing sources gives proper credit to the author." },
        { q: "Which of these is a reliable source for a research paper?", a: ["An anonymous blog", "A peer-reviewed journal or government site (.gov)", "A social media comment", "A wiki with no sources"], cor: 1, exp: ".gov, .edu, and peer-reviewed sites are generally reliable." },
        { q: "What does '.edu' in a URL usually represent?", a: ["A commercial business", "An educational institution", "A government agency", "A non-profit"], cor: 1, exp: ".edu is reserved for schools and universities." },
        { q: "What does '.gov' in a URL represent?", a: ["A gaming site", "A government organization", "A global business", "A personal blog"], cor: 1, exp: ".gov sites are official government pages." },
        { q: "What is a 'Creative Commons' license?", a: ["A license that costs $100", "A way for creators to grant permission to use their work", "A type of social media account", "A copyright violation"], cor: 1, exp: "Creative Commons lets creators specify how others can use their work for free." },
        { q: "Which is a sign of an unsecure website?", a: ["It has a lock icon", "It uses 'http://' instead of 'https://'", "It has a search bar", "It is written in English"], cor: 1, exp: "The 's' in https stands for Secure." },
        { q: "What is 'Clickbait'?", a: ["A tool for fishing", "Sensationalized headlines designed to make you click", "A secure link", "A software update"], cor: 1, exp: "Clickbait often uses misleading titles to get views." },
        { q: "What is 'Cyber Hygiene'?", a: ["Cleaning your keyboard", "Practices to maintain security and health online", "Washing your hands after using a mouse", "Deleting old photos"], cor: 1, exp: "Cyber hygiene involves regular steps like changing passwords and updating software." },
        { q: "Why should you use 'Strong Passwords'?", a: ["To make them easy to remember", "To prevent hackers from guessing them", "To save space", "To speed up login"], cor: 1, exp: "Strong passwords use a mix of characters to increase security." },
        { q: "What is a 'Password Manager'?", a: ["A person who remembers passwords", "A software that stores and encrypts your passwords", "A notebook", "A type of keyboard"], cor: 1, exp: "Password managers help you use unique, strong passwords for every site." },
        { q: "What is 'Two-Factor Authentication'?", a: ["Logging in twice", "Using a password plus a second code (like from a text)", "Using two different browsers", "Sharing a password with a friend"], cor: 1, exp: "2FA adds an extra layer of protection." },
        { q: "What is 'Social Engineering'?", a: ["A degree in sociology", "Manipulating people into giving up confidential info", "Building a social network", "Fixing a computer"], cor: 1, exp: "Social engineering tricks people instead of hacking software." },
        { q: "Which of these is a common 'Phishing' tactic?", a: ["A software update notification", "An email claiming you won a prize and asking for bank info", "A friend's birthday post", "A search result"], cor: 1, exp: "Phishing uses 'bait' to steal your information." },
        { q: "What is 'Malware'?", a: ["A type of computer hardware", "Malicious software designed to damage or disable computers", "A software for drawing", "A brand of laptop"], cor: 1, exp: "Malware includes viruses, worms, and spyware." },
        { q: "What is 'Spyware'?", a: ["A game about secret agents", "Software that secretly records your activity", "A type of webcam", "A screen recording tool"], cor: 1, exp: "Spyware monitors your actions without your knowledge." },
        { q: "What is 'Ransomware'?", a: ["Software that is free", "Malware that locks your files until you pay money", "A type of memory", "A cloud backup"], cor: 1, exp: "Ransomware holds your data hostage." },
        { q: "Which of these is a safe way to handle a suspicious link?", a: ["Click it to see where it goes", "Hover over it to see the actual URL without clicking", "Forward it to a friend to check", "Bookmark it"], cor: 1, exp: "Hovering allows you to see the true destination of a link safely." },
        { q: "What is a 'VPN'?", a: ["A very private network", "A Virtual Private Network that encrypts your internet traffic", "A type of router", "A video player"], cor: 1, exp: "VPNs provide privacy and security on public networks." },
        { q: "Why is 'Digital Citizenship' important?", a: ["It helps you win games", "It ensures a safe and respectful community online", "It makes you famous", "It makes your computer last longer"], cor: 1, exp: "Digital citizenship creates a better internet for everyone." },
        { q: "Which gesture is common for scrolling on a smartphone?", a: ["Pinch", "Swipe", "Double-tap", "Shake"], cor: 1, exp: "Swiping is the standard way to scroll through content." },
        { q: "What is the 'Rule of Thirds' in digital photos?", a: ["Having three people in every photo", "A composition guide for making images more interesting", "Taking three photos of everything", "Dividing the cost of a camera"], cor: 1, exp: "The rule of thirds is a visual design principle." },
        { q: "What is 'Media Literacy'?", a: ["Reading a lot of books", "The ability to analyze and evaluate various forms of communication", "Being a journalist", "Repairing a TV"], cor: 1, exp: "Media literacy helps you understand the messages behind what you see." },
        { q: "What is 'Data Privacy'?", a: ["Hiding your computer", "The right to control how your personal data is collected and used", "Deleting your emails", "Using a fake name"], cor: 1, exp: "Data privacy is about your rights regarding your personal information." },
        { q: "What is 'Encryption'?", a: ["Deleting a file", "Scrambling data so only authorized parties can read it", "A type of font", "A computer repair"], cor: 1, exp: "Encryption protects data from being read by hackers." },
        { q: "What is a 'Digital Divide'?", a: ["A crack in a tablet screen", "The gap between those with access to technology and those without", "A software update", "A type of network cable"], cor: 1, exp: "The digital divide refers to inequality in tech access." },
        { q: "Which of these is an example of 'Online Collaboration'?", a: ["Working alone on a document", "Multiple people editing a Google Doc at once", "Sending a letter", "Printing a report"], cor: 1, exp: "Collaboration tools allow real-time teamwork online." },
        { q: "What is 'Salami Slicing' in cybercrime?", a: ["A type of cooking", "Stealing tiny amounts of money from many accounts", "Cutting a computer cable", "A virus that deletes files"], cor: 1, exp: "Salami slicing is a fraud technique involving small, unnoticeable thefts." },
        { q: "Which of these is a 'Secure' password?", a: ["Password123", "Your birthday", "A long phrase with symbols and numbers (e.g., Blue!Sky#44)", "Your name"], cor: 2, exp: "Complexity and length make a password secure." },
        { q: "What is 'Over-sharing'?", a: ["Giving a friend a snack", "Posting too much personal or sensitive info online", "Sending a large file", "Having too many followers"], cor: 1, exp: "Over-sharing can damage your reputation or lead to security risks." },
        { q: "What is a 'Botnet'?", a: ["A network of robots", "A group of infected computers controlled by a hacker", "A fast internet connection", "A social media site"], cor: 1, exp: "Botnets are used to launch large-scale cyberattacks." },
        { q: "What is 'Adware'?", a: ["Free software", "Software that automatically displays unwanted advertisements", "A program for making ads", "A virus that steals files"], cor: 1, exp: "Adware is often bundled with free software to generate revenue." },
        { q: "What is 'E-waste'?", a: ["Electronic trash (old phones, computers)", "A virus", "A deleted email", "A slow computer"], cor: 0, exp: "E-waste must be recycled properly to protect the environment." },
        { q: "Which button do you use to report a post on social media?", a: ["Like", "Share", "Report/Flag", "Comment"], cor: 2, exp: "Reporting alerts the platform to inappropriate content." },
        { q: "What is 'Cloud Computing'?", a: ["Weather forecasting", "Storing and accessing data over the internet instead of locally", "A type of CPU", "A wireless mouse"], cor: 1, exp: "Cloud computing relies on internet-based servers." },
        { q: "What is 'Streaming'?", a: ["Downloading a file permanently", "Listening or watching content in real-time over the internet", "A type of water cooling", "Sending an email"], cor: 1, exp: "Streaming allows you to view content without downloading the whole file first." },
        { q: "Which of these is a 'Search Operator'?", a: ["The search button", "Quotes around a phrase (e.g., 'IC3 Exam')", "A keyboard", "A mouse"], cor: 1, exp: "Operators like quotes help narrow down search results." },
        { q: "What is 'Metadata'?", a: ["A large file", "Data that provides information about other data (like a photo's date)", "A computer virus", "A secure password"], cor: 1, exp: "Metadata describes the characteristics of a file." },
        { q: "Which is a sign of 'Digital Wellbeing'?", a: ["Spending 10 hours a day on your phone", "Setting screen time limits and taking breaks", "Checking notifications every minute", "Never turning your computer off"], cor: 1, exp: "Digital wellbeing is about maintaining a healthy balance with tech." },
        { q: "What should you do before selling an old smartphone?", a: ["Just turn it off", "Perform a factory reset to wipe all personal data", "Delete your favorite apps", "Take the battery out"], cor: 1, exp: "A factory reset ensures your private data isn't stolen by the next owner." },
        { type: "matching", q: "Match Digital Identity Terms:", pairs: [{term: "Digital Footprint", definition: "Permanent record of online activity"}, {term: "Digital Reputation", definition: "How others perceive you online"}, {term: "Netiquette", definition: "Proper online behavior code"}], exp: "Footprints determine your reputation over time." },
        { type: "ordering", q: "Responding to Cyberbullying:", items: ["Don't respond", "Save Screenshots", "Report to Authority"], cor: ["Don't respond", "Save Screenshots", "Report to Authority"], exp: "Disengage, document, and report." },
        { type: "matching", q: "Match Privacy Terms:", pairs: [{term: "2FA", definition: "Two-step verification"}, {term: "Cookies", definition: "Track site preferences"}, {term: "Incognito", definition: "Browsing without history saving"}], exp: "2FA secures accounts; cookies remember you; incognito hides history." },
        { type: "ordering", q: "Source Reliability (High to Low):", items: [".gov Website", ".org Website", "Personal Blog", "Anonymous Forum"], cor: [".gov Website", ".org Website", "Personal Blog", "Anonymous Forum"], exp: "Official and academic sources rank highest." },
        { type: "matching", q: "Match the Online Behavior:", pairs: [{term: "Flaming", definition: "Posting hostile messages"}, {term: "Trolling", definition: "Intentionally provoking others"}, {term: "Phishing", definition: "Deceptive emails to steal info"}], exp: "These represent negative or dangerous online behaviors." },
        { type: "ordering", q: "Evaluating an Online Profile:", items: ["Check profile photo", "Read 'About' section", "Look for verified badge", "Search for external news"], cor: ["Check profile photo", "Read 'About' section", "Look for verified badge", "Search for external news"], exp: "Verification should follow a logical investigative order." },
        { type: "matching", q: "Match the Protection Method:", pairs: [{term: "Strong Password", definition: "Mix of letters, numbers, and symbols"}, {term: "Privacy Settings", definition: "Limits who sees your posts"}, {term: "Digital Wellness", definition: "Balancing online and offline time"}], exp: "Security and wellness are both parts of being a good digital citizen." },
        { type: "ordering", q: "Steps to secure a Social Account:", items: ["Create unique password", "Enable 2FA", "Review app permissions", "Set profile to private"], cor: ["Create unique password", "Enable 2FA", "Review app permissions", "Set profile to private"], exp: "Security first, then privacy tuning." },
        { type: "matching", q: "Match Digital Rights Concepts:", pairs: [{term: "Freedom of Speech", definition: "Right to express opinions"}, {term: "Intellectual Property", definition: "Ownership of creative works"}, {term: "Data Privacy", definition: "Control over personal information"}], exp: "Digital citizenship involves understanding your rights and responsibilities." },
        { type: "ordering", q: "Developing a Personal Brand:", items: ["Identify your skills", "Choose a professional username", "Post helpful content", "Network with peers"], cor: ["Identify your skills", "Choose a professional username", "Post helpful content", "Network with peers"], exp: "Brand building is a progressive process." },
        { type: "matching", q: "Match the Communication Type:", pairs: [{term: "Formal", definition: "Professional emails to teachers"}, {term: "Informal", definition: "Texting friends"}, {term: "Public", definition: "Posting on a social media wall"}], exp: "Tone must match the audience and platform." },
        { type: "ordering", q: "Order of reporting a scam:", items: ["Stop communication", "Take screenshots", "Notify the platform", "Inform local authorities"], cor: ["Stop communication", "Take screenshots", "Notify the platform", "Inform local authorities"], exp: "Halt the threat first, then document and report." },
        { type: "matching", q: "Match User Type:", pairs: [{term: "Subscriber", definition: "Follows a specific account"}, {term: "Moderator", definition: "Enforces rules in a group"}, {term: "Administrator", definition: "Has full control over a site"}], exp: "Roles define what a user can do in a digital space." },
        { type: "ordering", q: "Steps for a balanced Digital Diet:", items: ["Track screen time", "Set daily limits", "Schedule tech-free hours", "Evaluate your mood"], cor: ["Track screen time", "Set daily limits", "Schedule tech-free hours", "Evaluate your mood"], exp: "Monitoring leads to effective limit setting." },
        { type: "matching", q: "Match Identity Protection:", pairs: [{term: "Biometrics", definition: "Fingerprint or Face ID"}, {term: "VPN", definition: "Hides your IP address"}, {term: "Firewall", definition: "Monitors network traffic"}], exp: "These tools guard your digital identity and data." }
    ],
    l1_lesson3: [
        { q: "Which type of website allows users to add, edit, or rearrange information collaboratively?", a: ["Blog", "Wiki", "Podcast", "Portal"], cor: 1, exp: "Wiki sites provide tools for individuals to collaboratively edit information." },
        { q: "What does RSS stand for in the context of news feeds?", a: ["Remote Site Security", "Read Simple Scripts", "Real Simple Syndication", "Rapid System Search"], cor: 2, exp: "RSS (Real Simple Syndication) delivers current news stories as they occur." },
        { q: "Which URL domain is used specifically for schools and universities?", a: [".com", ".gov", ".edu", ".org"], cor: 2, exp: ".edu is the top-level domain for educational institutions." },
        { q: "What is a 'Search Engine'?", a: ["A software that edits videos", "A website used to search for information on the World Wide Web", "A computer hardware part", "An internet browser"], cor: 1, exp: "Search engines are designed to help users find information across the internet." },
        { q: "Which search operator should you use to find an exact phrase?", a: ["Parentheses ()", "Minus sign -", "Quotation marks \"\"", "Asterisk *"], cor: 2, exp: "Quotation marks search for the exact words in the exact order." },
        { q: "To exclude a specific word from your search results, which symbol do you use?", a: ["+", "*", "-", "@"], cor: 2, exp: "The minus sign (-) removes results containing that specific word." },
        { q: "What is the purpose of the 'OR' Boolean operator?", a: ["To exclude results", "To find pages that contain either of the terms", "To find pages containing both terms", "To check spelling"], cor: 1, exp: "OR expands the search to include either search term." },
        { q: "Which operator is used to find pages that contain ALL specified words?", a: ["OR", "NOT", "AND", "BUT"], cor: 2, exp: "AND narrows results to pages containing all search terms." },
        { q: "What character acts as a 'Wildcard' to replace words or letters in a search?", a: ["#", "*", "&", "%"], cor: 1, exp: "The asterisk (*) is used as a wildcard symbol." },
        { q: "Which symbol is used for a Hashtag to categorize topics on social media?", a: ["@", "#", "$", "!"], cor: 1, exp: "The number sign (#) is used as a hashtag." },
        { q: "What is a 'Handle' in digital communication?", a: ["A password", "A unique username preceded by @", "A type of hardware", "A web browser"], cor: 1, exp: "A handle is your social media username (e.g., @CertPort)." },
        { q: "Which browser tool helps you find a specific word inside a long article or document?", a: ["Refresh button", "The 'Find' tool (Ctrl+F)", "History tab", "Bookmarks"], cor: 1, exp: "Ctrl + F (Find) allows you to search for specific text within a page." },
        { q: "What is 'Public Domain'?", a: ["Content everyone has to pay for", "Works not protected by intellectual property laws whose copyright has expired", "Private files on a server", "A government secret"], cor: 1, exp: "Public Domain works are free to use because copyright protection has ended." },
        { q: "How long does copyright usually last after an author's death?", a: ["10 years", "25 years", "50 years", "70 years"], cor: 3, exp: "Standard copyright lasts 70 years after the death of the last surviving author." },
        { q: "What is 'Creative Commons'?", a: ["A social media site", "A non-profit providing licenses to share creative works legally", "A type of internet browser", "An office supply store"], cor: 1, exp: "Creative Commons licenses help owners manage permissions for sharing their work." },
        { q: "True or False: Information found on a Wiki is always qualified and accurate.", a: ["True", "False"], cor: 1, exp: "False. Anyone can contribute to a Wiki regardless of their qualifications." },
        { q: "What is 'Fair Use'?", a: ["Stealing software", "Limited use of copyrighted material for education, news, or research", "A free trial", "Sharing Netflix passwords"], cor: 1, exp: "Fair use allows restricted use of copyrighted content without permission for specific purposes." },
        { q: "What is 'Plagiarism'?", a: ["Backing up data", "Using someone else's work or ideas without giving credit", "A type of computer virus", "A network error"], cor: 1, exp: "Plagiarism is taking credit for work that is not yours." },
        { q: "Which of these is a way to refine an online search?", a: ["Turning off the monitor", "Using filters like 'Image Size' or 'Date'", "Deleting the browser", "Restarting the router"], cor: 1, exp: "Search filters (size, date, type) help narrow down specific information." },
        { q: "What is a 'Podcast'?", a: ["A type of printer", "A digital audio file available for download or streaming", "A live TV broadcast", "A computer monitor"], cor: 1, exp: "Podcasts are digital audio/video series distributed online." },
        { q: "Which domain extension is used for non-profit organizations?", a: [".gov", ".edu", ".org", ".com"], cor: 2, exp: ".org is typically used by non-profit organizations." },
        { q: "When researching, what does 'Bias' refer to?", a: ["How fast a site loads", "A persuasive or unbalanced tone in the information", "The color of the website", "The number of links"], cor: 1, exp: "Bias indicates a lack of objectivity in the presented information." },
        { q: "What should you check to see if website information is current?", a: ["The 'Last Updated' date", "The font style", "The site's URL length", "The number of pictures"], cor: 0, exp: "The 'Last Updated' or copyright date indicates how current the info is." },
        { q: "Which key combination opens the 'Find' bar in a browser?", a: ["Ctrl + S", "Ctrl + F", "Alt + F4", "Ctrl + P"], cor: 1, exp: "Ctrl + F is the universal shortcut for 'Find'." },
        { q: "Why is it important to check the author of a blog?", a: ["To see if they are rich", "To determine if they have the qualifications to provide expert advice", "To find their home address", "To see their profile picture"], cor: 1, exp: "Blog authors do not need qualifications, so their expertise must be verified." },
        { q: "Which symbol is used to combine two different search terms into one result?", a: ["-", "+", "AND", "OR"], cor: 2, exp: "AND requires both terms to be present in the results." },
        { q: "What does the .gov extension tell you about a source?", a: ["It is a commercial store", "It is an official government website", "It is a personal blog", "It is an education site"], cor: 1, exp: ".gov sites are official government-run sources." },
        { q: "What is the benefit of using the 'Site:' operator in a search?", a: ["It speeds up the internet", "It searches for results only within a specific website", "It blocks all ads", "It creates a new website"], cor: 1, exp: "The 'site:' operator limits results to a single domain (e.g., site:nasa.gov)." },
        { q: "True or False: Using a Creative Commons license means you lose your copyright.", a: ["True", "False"], cor: 1, exp: "False. CC licenses work alongside copyright to manage permissions." },
        { q: "What is 'Attribution' in Creative Commons?", a: ["A type of file size", "Giving credit to the original creator", "Selling the work", "Deleting the work"], cor: 1, exp: "Attribution (BY) requires users to credit the original author." },
        { q: "Which search operator is best for finding a missing word in a famous quote?", a: ["Minus sign", "Asterisk (*)", "Plus sign", "At symbol"], cor: 1, exp: "The asterisk (*) acts as a placeholder for unknown words." },
        { q: "If a website has many grammatical errors, what does that suggest?", a: ["It is a modern style", "It may not be a reliable or professional source", "It is a fast website", "It is a government site"], cor: 1, exp: "Poor grammar and spelling are often signs of an unreliable source." },
        { q: "What is a 'Blog'?", a: ["A search engine", "A website where individuals share comments or information on specific topics", "A computer virus", "A type of hardware"], cor: 1, exp: "Blogs are online journals or information pages." },
        { q: "Which of these is a social networking site?", a: ["Google Search", "Facebook", "Microsoft Word", "BIOS"], cor: 1, exp: "Facebook is a primary example of a social networking site." },
        { q: "What is the purpose of 'Image Search Filters'?", a: ["To edit the image", "To find images by size, color, or usage rights", "To print the image", "To delete the image"], cor: 1, exp: "Filters allow you to find images that meet specific criteria like 'Labeled for reuse'." },
        { q: "Which tool allows you to see the latest news from several sites in one place?", a: ["An RSS Reader", "A Calculator", "A Printer", "A Monitor"], cor: 0, exp: "RSS readers aggregate feeds from multiple news sources." },
        { q: "What is 'Intellectual Property'?", a: ["A physical building", "Creations of the mind protected by law (music, art, code)", "A type of RAM", "A computer case"], cor: 1, exp: "IP refers to original creations that have legal protection." },
        { q: "Which operator would you use to search for: cars NOT red?", a: ["cars +red", "cars -red", "cars OR red", "cars *red"], cor: 1, exp: "The minus sign (-) excludes the word following it." },
        { q: "What is the 'Top-Level Domain' (TLD)?", a: ["The start of a URL (www)", "The end of a URL (.com, .org)", "The middle of a URL", "The search bar"], cor: 1, exp: "The TLD is the extension at the end of the web address." },
        { q: "Why should you use more than one search engine?", a: ["To get different results and a wider perspective", "To break the computer", "To use more data", "To see more ads"], cor: 0, exp: "Different search engines use different algorithms and index different parts of the web." },
        { q: "What does the lock icon in the address bar signify?", a: ["The site is broken", "The connection is encrypted and secure (HTTPS)", "The site is for children", "The site is private"], cor: 1, exp: "The lock icon indicates a secure HTTPS connection." },
        { q: "Which button in a browser returns you to the previous page?", a: ["Refresh", "Home", "Back", "Forward"], cor: 2, exp: "The Back button takes you to the last page you viewed." },
        { q: "What is 'Citing a Source'?", a: ["Deleting a link", "Formally noting where you found a piece of information", "Copying a whole book", "Buying a book"], cor: 1, exp: "Citing gives credit and allows others to find the original source." },
        { q: "What is the danger of using 'Outdated' information?", a: ["It makes the computer slow", "It can lead to incorrect conclusions or decisions", "It changes your password", "It uses too much RAM"], cor: 1, exp: "Information that is no longer current may be factually wrong." },
        { q: "How do you search for 'Weather in New York' using a phrase?", a: ["Weather New York", "\"Weather in New York\"", "Weather - New York", "Weather * New York"], cor: 1, exp: "Using quotes treats the phrase as a single unit." },
        { q: "Which operator is most helpful for finding definitions?", a: ["Minus sign", "Quotes", "Asterisk", "Define:"], cor: 3, exp: "Many search engines support 'Define:' to show meanings immediately." },
        { q: "What is a 'Digital Library'?", a: ["A room full of books", "An online collection of digital objects like text, images, and video", "A computer store", "A type of hard drive"], cor: 1, exp: "Digital libraries store and provide access to digital media." },
        { q: "What is 'Media Bias'?", a: ["A type of screen glitch", "The selection of events and stories that are reported and how they are covered", "The speed of a video stream", "The size of a newspaper"], cor: 1, exp: "Media bias involves reporting that favors one perspective over another." },
        { q: "True or False: Every website on the internet is monitored for truth.", a: ["True", "False"], cor: 1, exp: "False. Anyone can post anything; truth is not guaranteed." },
        { q: "What is the purpose of a 'Site Map'?", a: ["To find a physical location", "A list of all pages on a website to help with navigation", "A type of GPS", "A weather map"], cor: 1, exp: "Site maps provide an overview of a website's structure." },
        { q: "Which search operator is used for social media handles?", a: ["#", "@", "!", "$"], cor: 1, exp: "The @ symbol is used to mention or find user handles." },
        { q: "What is 'Non-Commercial' in Creative Commons?", a: ["You can't use it at all", "You can use it but not to make money", "You must pay for it", "It is only for TV commercials"], cor: 1, exp: "NC (Non-Commercial) means you cannot use the work for profit." },
        { q: "What is 'No Derivatives' in Creative Commons?", a: ["You can't use it", "You can use it but you cannot change or edit it", "You must change it", "It is free to edit"], cor: 1, exp: "ND (No Derivatives) means the work must be shared in its original form." },
        { q: "Which URL would likely be the most reliable for medical facts?", a: ["www.besthealth.com", "www.nih.gov", "www.myopinion.blog", "www.wiki-health.org"], cor: 1, exp: ".gov sites (like National Institutes of Health) are highly reliable." },
        { q: "What is an 'Online Database'?", a: ["A list of names in a notebook", "A structured collection of data accessible via the internet", "A computer virus", "A type of CPU"], cor: 1, exp: "Databases allow for organized storage and retrieval of info." },
        { q: "What is 'Content Curation'?", a: ["Deleting all files", "Gathering and organizing online content around a specific topic", "Hacking a website", "Buying a new laptop"], cor: 1, exp: "Curation involves selecting and presenting the best content for an audience." },
        { q: "What is a 'Primary Source'?", a: ["A summary of a book", "An original document or firsthand account of an event", "A review of a movie", "A textbook"], cor: 1, exp: "Primary sources are direct evidence from the time of an event." },
        { q: "What is a 'Secondary Source'?", a: ["An original letter", "Information that was created later by someone who did not experience it firsthand", "A witness statement", "A raw data file"], cor: 1, exp: "Secondary sources interpret or analyze primary sources." },
        { q: "Which key moves you down one screen in a long document?", a: ["Home", "End", "Page Down", "Insert"], cor: 2, exp: "Page Down moves the view further down the page." },
        { q: "What is the 'Home' button in a web browser?", a: ["Closes the browser", "Takes you to a pre-set starting page", "Opens your email", "Turns off the computer"], cor: 1, exp: "The Home button returns you to your designated homepage." },
        { q: "What does 'Syndication' mean?", a: ["Protecting a site from viruses", "Publishing content across multiple sites or platforms simultaneously", "Deleting a social media account", "A type of internet cable"], cor: 1, exp: "Syndication allows content to be shared widely across different channels." },
        { q: "Which button stops a page from continuing to load?", a: ["Refresh", "Stop (X)", "Forward", "Home"], cor: 1, exp: "The Stop button (often an X) halts the loading process." },
        { q: "What is 'Digital Content'?", a: ["Any data that exists in a digital form", "Only physical books", "Only hardware parts", "Paper documents"], cor: 0, exp: "Digital content includes text, images, videos, and audio files." },
        { q: "Which operator is best for finding results from a specific country (e.g., .uk)?", a: ["site:.uk", "-.uk", "@.uk", "country:.uk"], cor: 0, exp: "The site: operator can be used with country codes." },
        { q: "What is 'Intellectual Property Theft'?", a: ["Losing your laptop", "Using copyrighted material without permission or payment", "Forgetting a password", "Downloading a free app"], cor: 1, exp: "IP theft is the illegal use of protected creative works." },
        { q: "What is 'Commercial Bias'?", a: ["When a site is too fast", "When information is influenced by the desire to sell a product", "When a site has no ads", "A type of browser setting"], cor: 1, exp: "Commercial bias prioritizes profit over objectivity." },
        { q: "What is the purpose of 'Bibliographies'?", a: ["To make a book longer", "To list the sources used in a piece of work", "To provide the author's biography", "To check for viruses"], cor: 1, exp: "Bibliographies document all research sources." },
        { q: "Which of these is a 'Media Form'?", a: ["Text", "Video", "Audio", "All of the above"], cor: 3, exp: "Media can exist as text, video, audio, and images." },
        { q: "What is 'Fact-Checking'?", a: ["Buying a new book", "The process of verifying the accuracy of information", "Changing the color of a font", "Deleting a browser"], cor: 1, exp: "Fact-checking ensures that claims are backed by evidence." },
        { q: "How can you tell if an image is copyrighted?", a: ["It always has a big red mark", "Look for a copyright symbol © or check the source information", "All images on Google are free", "It will not open"], cor: 1, exp: "Always assume an image is copyrighted unless stated otherwise." },
        { q: "What is 'Public Record'?", a: ["A secret document", "Information that is not considered confidential and is available to the public", "A private diary", "A banking password"], cor: 1, exp: "Public records are documents or pieces of info that are not private." },
        { q: "What is a 'Direct Quote'?", a: ["Writing a summary", "The exact words spoken or written by someone else", "A type of internet link", "A search engine"], cor: 1, exp: "Direct quotes must be placed in quotation marks and cited." },
        { q: "What is a 'Paraphrase'?", a: ["Copying word-for-word", "Rewriting someone else's ideas in your own words", "Deleting a sentence", "A type of password"], cor: 1, exp: "Paraphrasing still requires a source citation even if the words are yours." },
        { q: "Which search tool is best for finding scholarly articles?", a: ["Social Media", "Google Scholar", "YouTube", "A personal blog"], cor: 1, exp: "Scholarly search engines focus on peer-reviewed and academic papers." },
        { q: "What is the primary goal of Information Management?", a: ["To buy more hard drives", "To make sure information is accurate, organized, and accessible", "To delete all old emails", "To browse social media"], cor: 1, exp: "Effective management ensures data is useful and reachable." },
        { type: "matching", q: "Match Search Operators:", pairs: [{term: "Quotes \" \"", definition: "Exact phrase search"}, {term: "Minus -", definition: "Exclude a keyword"}, {term: "Site:", definition: "Search specific domain"}], exp: "Operators filter results for accuracy." },
        { type: "ordering", q: "Refining Search Criteria:", items: ["Animal", "Mammal", "Dog", "Golden Retriever"], cor: ["Animal", "Mammal", "Dog", "Golden Retriever"], exp: "Moving from general to specific narrows results." },
        { type: "matching", q: "Match Licensing Terms:", pairs: [{term: "Copyright", definition: "Exclusive owner rights"}, {term: "Public Domain", definition: "Free for all use"}, {term: "Creative Commons", definition: "Flexible usage licenses"}], exp: "Copyright protects; Public domain is open; CC is a middle ground." },
        { type: "ordering", q: "Using Search Filters (Order):", items: ["Enter keywords", "Click 'Images' tab", "Select 'Tools'", "Filter by 'Size'"], cor: ["Enter keywords", "Click 'Images' tab", "Select 'Tools'", "Filter by 'Size'"], exp: "Filter tools are usually applied after the initial category selection." },
        { type: "matching", q: "Match Information Sources:", pairs: [{term: "Wiki", definition: "Collaborative knowledge base"}, {term: "Blog", definition: "Personal journal or commentary"}, {term: "Podcast", definition: "Audio-based digital broadcast"}], exp: "Format determines how information is consumed." },
        { type: "ordering", q: "Citing a Source (Logical Flow):", items: ["Find the author", "Note the publication date", "Copy the URL", "Format in APA/MLA style"], cor: ["Find the author", "Note the publication date", "Copy the URL", "Format in APA/MLA style"], exp: "Information gathering precedes final formatting." },
        { type: "matching", q: "Match Browsing Terms:", pairs: [{term: "URL", definition: "The web address of a site"}, {term: "Hyperlink", definition: "Clickable text that jumps to a page"}, {term: "Browser", definition: "Software used to access the web"}], exp: "Fundamental tools for navigating the internet." },
        { type: "ordering", q: "Steps to Bookmark a Site:", items: ["Navigate to the page", "Click the Star icon", "Select a folder", "Click 'Done'"], cor: ["Navigate to the page", "Click the Star icon", "Select a folder", "Click 'Done'"], exp: "The standard workflow for most modern browsers." },
        { type: "matching", q: "Match Search Engine Features:", pairs: [{term: "Autofill", definition: "Predicts your search query"}, {term: "Snippet", definition: "Small preview of site content"}, {term: "Index", definition: "The database of all web pages"}], exp: "Engines use these to make searching faster and easier." },
        { type: "ordering", q: "Fact-Checking a News Story:", items: ["Read the headline", "Check the source date", "Look for other sources", "Confirm author expertise"], cor: ["Read the headline", "Check the source date", "Look for other sources", "Confirm author expertise"], exp: "Cross-referencing is key to validating information." },
        { type: "matching", q: "Match Content Rights:", pairs: [{term: "Fair Use", definition: "Legal exception for education/news"}, {term: "Attribution", definition: "Giving credit to the creator"}, {term: "Plagiarism", definition: "Taking work as your own"}], exp: "Legal and ethical use of content is critical in IC3 GS6." },
        { type: "ordering", q: "Refining results with AND/OR:", items: ["Search 'Apples'", "Search 'Apples AND Oranges'", "Search 'Apples AND Oranges AND Price'"], cor: ["Search 'Apples'", "Search 'Apples AND Oranges'", "Search 'Apples AND Oranges AND Price'"], exp: "Adding Boolean operators narrows the scope." },
        { type: "matching", q: "Match Metadata Types:", pairs: [{term: "Hashtags", definition: "Keywords preceded by #"}, {term: "Handles", definition: "Usernames preceded by @"}, {term: "Tags", definition: "Internal labels for files"}], exp: "Metadata helps organize and find digital content." },
        { type: "ordering", q: "Workflow to download a PDF:", items: ["Click the download link", "Choose a save location", "Wait for transfer", "Open from the folder"], cor: ["Click the download link", "Choose a save location", "Wait for transfer", "Open from the folder"], exp: "Standard file acquisition process." },
        { type: "matching", q: "Match Domain Suffixes:", pairs: [{term: ".edu", definition: "Educational institutions"}, {term: ".gov", definition: "Government agencies"}, {term: ".com", definition: "Commercial businesses"}], exp: "Suffixes indicate the nature of the organization." }
    ],
    l1_lesson4: [
        { q: "What is a 'Template' in Microsoft Office?", a: ["A type of computer virus", "A pre-designed document used to create new ones quickly", "A blank white page", "The save button"], cor: 1, exp: "Templates are standard forms or documents with pre-designed elements." },
        { q: "Which view in Office applications allows you to manage files (Save, Print, Share)?", a: ["Edit View", "Review View", "Backstage View", "Web View"], cor: 2, exp: "Backstage View contains commands that relate to the entire file." },
        { q: "What is the purpose of a 'ScreenTip'?", a: ["To clean the monitor", "To identify a button and its function when hovering", "To change the screen brightness", "To show a video tutorial"], cor: 1, exp: "Hovering over a button displays a ScreenTip identifying the command." },
        { q: "Which keyboard shortcut is used to 'Undo' an action?", a: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + X"], cor: 1, exp: "Ctrl + Z is the universal shortcut to undo the last action." },
        { q: "Which keyboard shortcut is used to 'Redo' an action?", a: ["Ctrl + R", "Ctrl + Z", "Ctrl + Y", "Ctrl + P"], cor: 2, exp: "Ctrl + Y is used to redo an action that was undone." },
        { q: "What does the 'Find and Replace' tool do?", a: ["Deletes the entire document", "Locates specific text and replaces it with new text", "Changes the font color", "Saves the file"], cor: 1, exp: "Find and Replace automates the process of updating specific words throughout a file." },
        { q: "In Word, what is the default file extension?", a: [".txt", ".pdf", ".docx", ".xlsx"], cor: 2, exp: "Microsoft Word documents use the .docx extension." },
        { q: "Which feature allows you to see how a document will look on paper before printing?", a: ["Draft View", "Print Preview", "Outline View", "Read Mode"], cor: 1, exp: "Print Preview shows the layout as it will appear when printed." },
        { q: "What is the shortcut to 'Save' a document?", a: ["Ctrl + S", "Ctrl + V", "Ctrl + P", "Ctrl + N"], cor: 0, exp: "Ctrl + S is the shortcut for Save." },
        { q: "Which command should you use to save a copy of a file with a NEW name?", a: ["Save", "Export", "Save As", "Share"], cor: 2, exp: "Save As allows you to create a separate copy with a different name or location." },
        { q: "What is the shortcut to 'Print' a document?", a: ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "Ctrl + Print"], cor: 0, exp: "Ctrl + P opens the print dialog." },
        { q: "In PowerPoint, what is a single page of a presentation called?", a: ["Sheet", "Frame", "Slide", "Canvas"], cor: 2, exp: "Individual pages in a presentation are called slides." },
        { q: "Which PowerPoint view is best for seeing all slides as thumbnails?", a: ["Slide Show", "Slide Sorter", "Notes Page", "Reading View"], cor: 1, exp: "Slide Sorter allows you to see all slides and rearrange them easily." },
        { q: "What is a 'Placeholder' in PowerPoint?", a: ["A blank slide", "A box with dotted borders where you enter text or images", "A type of transition", "The file name"], cor: 1, exp: "Placeholders hold specific content like titles, body text, or charts." },
        { q: "Which key starts a PowerPoint slide show from the beginning?", a: ["F1", "F5", "F10", "F12"], cor: 1, exp: "F5 is the shortcut to start a presentation from slide one." },
        { q: "What is a 'Transition' in PowerPoint?", a: ["Moving a picture", "The visual effect between two slides", "Changing the font size", "A way to save the file"], cor: 1, exp: "Transitions are the animations that occur when moving from one slide to the next." },
        { q: "What is an 'Animation' in PowerPoint?", a: ["The movement of objects ON a slide", "Moving from slide 1 to slide 2", "Printing the slides", "The background color"], cor: 0, exp: "Animations control the movement of text, images, or shapes on a single slide." },
        { q: "What does 'AutoSave' do?", a: ["Deletes old files", "Saves your changes automatically to the cloud every few seconds", "Prints the file automatically", "Checks for spelling errors"], cor: 1, exp: "AutoSave prevents data loss by saving work in real-time to OneDrive or SharePoint." },
        { q: "Why is it important to 'Back Up' your work?", a: ["To make the computer faster", "To ensure you have a copy if the original is lost or damaged", "To hide files from others", "To reduce file size"], cor: 1, exp: "Backups protect your data from hardware failure or accidental deletion." },
        { q: "What is a 'Cloud Backup'?", a: ["Saving a file to a USB", "Saving files to remote servers via the internet", "Printing a hard copy", "Saving to the Desktop"], cor: 1, exp: "Cloud backups (like OneDrive) allow access from any device with internet." },
        { q: "Which of these is an example of an 'Attribute' of text?", a: ["File size", "Bold, Italic, and Underline", "The keyboard used", "The computer brand"], cor: 1, exp: "Attributes describe the style or appearance of text." },
        { q: "What is 'Portrait' orientation?", a: ["Wide layout", "Tall layout (vertical)", "Circular layout", "Diagonal layout"], cor: 1, exp: "Portrait is taller than it is wide; it is the default for most documents." },
        { q: "What is 'Landscape' orientation?", a: ["Vertical layout", "Horizontal layout (wide)", "Square layout", "Small layout"], cor: 1, exp: "Landscape is wider than it is tall." },
        { q: "What does 'Scaling' do in printing?", a: ["Changes the color of the ink", "Adjusts the document size to fit on a specific number of sheets", "Deletes the margins", "Turns the printer off"], cor: 1, exp: "Scaling allows you to shrink or enlarge the content for the physical paper." },
        { q: "What is a PDF (Portable Document Format)?", a: ["A type of video file", "A file format that preserves layout and design across all devices", "A Word document that can be edited easily", "An internet browser"], cor: 1, exp: "PDFs ensure the document looks the same on any computer without needing the original app." },
        { q: "Which program is used to view PDF files?", a: ["Excel", "Adobe Reader", "PowerPoint", "Notepad"], cor: 1, exp: "Adobe Reader is a common application for viewing PDFs." },
        { q: "In Word, what is the 'Ribbon'?", a: ["A physical piece of string", "The area at the top containing tabs and command groups", "The scroll bar", "The status bar at the bottom"], cor: 1, exp: "The Ribbon organizes all features into tabs like Home, Insert, and Layout." },
        { q: "Which tab would you click to change the page margins?", a: ["Home", "Insert", "Layout", "View"], cor: 2, exp: "The Layout tab contains page setup options like margins and orientation." },
        { q: "Which tab is used to add a Table or a Picture?", a: ["File", "Home", "Insert", "Design"], cor: 2, exp: "The Insert tab is used to add elements that are not plain text." },
        { q: "What is a 'Font'?", a: ["A type of printer", "A set of characters with a specific design/style", "A paper size", "A saving method"], cor: 1, exp: "Fonts like Arial or Calibri define the look of the text." },
        { q: "What does the 'Format Painter' do?", a: ["Draws a picture", "Copies the formatting of one piece of text and applies it to another", "Changes the page color", "Deletes text"], cor: 1, exp: "Format Painter saves time by duplicating styles (bold, color, size) across text." },
        { q: "Which alignment places text evenly between the left and right margins?", a: ["Align Left", "Align Right", "Center", "Justify"], cor: 2, exp: "Center alignment places the text in the middle of the page." },
        { q: "Which alignment makes the text flush against both the left and right margins?", a: ["Center", "Align Left", "Justify", "Indent"], cor: 2, exp: "Justify adds spacing between words so both edges of the paragraph are straight." },
        { q: "What is 'Line Spacing'?", a: ["The space between letters", "The vertical space between lines of text in a paragraph", "The space between two pages", "The margin size"], cor: 1, exp: "Line spacing (like Single or Double) affects the vertical density of text." },
        { q: "What is a 'Bullet' in a document?", a: ["A weapon", "A small symbol used to introduce items in a list", "A type of font", "A page break"], cor: 1, exp: "Bullets are used to organize unordered lists." },
        { q: "Which key is used to create a new paragraph?", a: ["Space", "Tab", "Enter", "Shift"], cor: 2, exp: "Pressing Enter moves the cursor to a new line and starts a new paragraph." },
        { q: "How do you select an entire word quickly?", a: ["Single-click it", "Double-click it", "Triple-click it", "Right-click it"], cor: 1, exp: "Double-clicking selects the word; triple-clicking usually selects the paragraph." },
        { q: "What does 'Checking Spelling' identify?", a: ["Words not in the dictionary", "Factually incorrect information", "Your email address", "The file size"], cor: 0, exp: "Spell check flags words it doesn't recognize (typos or proper names)." },
        { q: "What is 'Grammar Check'?", a: ["A tool to find synonyms", "A tool that identifies errors in sentence structure and punctuation", "A tool that translates text", "A tool to change fonts"], cor: 1, exp: "Grammar check looks for mistakes like subject-verb agreement." },
        { q: "Which feature allows you to put a specific piece of text at the top of every page?", a: ["Footer", "Margin", "Header", "Note"], cor: 2, exp: "Headers appear at the top of every page; footers appear at the bottom." },
        { q: "What is 'Citing' a source?", a: ["Deleting a quote", "Giving credit to the original author within your content", "Copying a whole website", "Buying a book"], cor: 1, exp: "Citations ensure proper credit is given and avoid plagiarism." },
        { q: "What is a 'Hyperlink'?", a: ["A very fast internet connection", "Text or an image that you click to jump to another location or website", "A type of font", "A secure password"], cor: 1, exp: "Hyperlinks connect different pieces of digital content." },
        { q: "In PowerPoint, which view is used to present your work to an audience?", a: ["Normal View", "Slide Show View", "Reading View", "Master View"], cor: 1, exp: "Slide Show view fills the screen with your slides for presentation." },
        { q: "What is the 'Notes Pane' in PowerPoint used for?", a: ["Drawing pictures", "Entering speaker notes that only the presenter can see", "Writing the main content", "Hiding slides"], cor: 1, exp: "Speaker notes help the presenter remember talking points." },
        { q: "Which feature makes an object on a slide 'Fly In' from the side?", a: ["Transition", "Animation", "Template", "Design Idea"], cor: 1, exp: "Animations are applied to specific objects to control how they appear or move." },
        { q: "How do you advance to the next slide during a presentation?", a: ["Press the Escape key", "Click the mouse or press the Spacebar", "Press F1", "Turn off the monitor"], cor: 1, exp: "Clicking or pressing Space moves the presentation forward." },
        { q: "What happens when you 'Export' a document as a PDF?", a: ["The original Word file is deleted", "A new version of the file is created in PDF format", "The file is sent to the printer", "The file is uploaded to the internet"], cor: 1, exp: "Exporting creates a new file in a different format without changing the original." },
        { q: "Which setting allows you to print on both sides of a sheet of paper?", a: ["Portrait", "Collated", "Duplex (Print on Both Sides)", "Grayscale"], cor: 2, exp: "Duplex printing saves paper by using both sides." },
        { q: "What does 'Collated' mean when printing multiple copies?", a: ["Printing all page 1s, then all page 2s", "Printing the full document in order (1,2,3) before starting the next set", "Printing in black and white", "Stapling the pages"], cor: 1, exp: "Collated printing keeps the sets of documents in the correct order." },
        { q: "What is 'Grayscale' printing?", a: ["Printing very fast", "Printing using only shades of black and white", "Printing with large fonts", "Printing on gray paper"], cor: 1, exp: "Grayscale saves color ink/toner by using only black ink." },
        { q: "Which shortcut opens a BLANK new document?", a: ["Ctrl + B", "Ctrl + N", "Ctrl + O", "Ctrl + M"], cor: 1, exp: "Ctrl + N stands for New." },
        { q: "Which shortcut 'Opens' an existing file?", a: ["Ctrl + E", "Ctrl + O", "Ctrl + X", "Ctrl + G"], cor: 1, exp: "Ctrl + O stands for Open." },
        { q: "What is the 'Status Bar'?", a: ["The bar at the top with the name", "The bar at the bottom showing page count and word count", "A type of menu", "A virus scanner"], cor: 1, exp: "The Status Bar provides real-time information about your document." },
        { q: "Which key is used to indent the first line of a paragraph?", a: ["Enter", "Shift", "Tab", "Alt"], cor: 2, exp: "The Tab key moves the cursor to the next tab stop (usually 0.5 inches)." },
        { q: "What is 'Thesaurus' in Word used for?", a: ["Checking spelling", "Finding synonyms (words with similar meanings)", "Counting words", "Printing the file"], cor: 1, exp: "The Thesaurus helps improve vocabulary by suggesting alternative words." },
        { q: "What is 'Margin'?", a: ["The space between two letters", "The white space between the edge of the paper and the text", "The header text", "The font size"], cor: 1, exp: "Margins define the printable area of the page." },
        { q: "Which of these is a valid way to 'Share' a file from Office?", a: ["Emailing it as an attachment", "Sharing a link to OneDrive", "Copying it to a USB drive", "All of the above"], cor: 3, exp: "Digital content can be shared via email, cloud links, or physical media." },
        { q: "What is a 'Version History'?", a: ["A list of all users who have the file", "A record of previous versions of a file that you can restore", "The date the software was made", "A type of printer"], cor: 1, exp: "Cloud-stored files allow you to go back to an earlier version if you make a mistake." },
        { q: "What does 'Read Only' mode mean?", a: ["You cannot open the file", "You can view the file but cannot make or save changes to it", "The file is read out loud by the computer", "The file is a PDF"], cor: 1, exp: "Read Only status protects a document from being edited." },
        { q: "What is the purpose of 'Page Numbers'?", a: ["To make the document longer", "To help organize and reference pages in a document", "To count the words", "To check the ink level"], cor: 1, exp: "Page numbers are essential for navigation in multi-page documents." },
        { q: "What is a 'Theme' in Office?", a: ["A song that plays", "A set of colors, fonts, and effects that give a document a consistent look", "The file's name", "A password"], cor: 1, exp: "Themes allow you to change the entire look of a file with one click." },
        { q: "Which key allows you to select multiple non-adjacent slides in PowerPoint?", a: ["Shift", "Alt", "Ctrl", "Tab"], cor: 2, exp: "Holding Ctrl allows you to click and select specific items that are not next to each other." },
        { q: "What is 'Co-authoring'?", a: ["Two people writing separate books", "Multiple people editing the same document at the same time", "Copying someone else's work", "Writing a book about yourself"], cor: 1, exp: "Cloud applications allow real-time collaboration (co-authoring)." },
        { q: "Which of these describes 'Hard Copy'?", a: ["A file on a USB", "A document printed on paper", "A password", "A computer screen"], cor: 1, exp: "Hard copy is the physical version of digital content." },
        { q: "What is 'Soft Copy'?", a: ["A printed paper", "The digital version of a document", "A soft keyboard", "A fuzzy mousepad"], cor: 1, exp: "Soft copy refers to the electronic version of a file." },
        { q: "Why should you 'Sign Out' of an Office account on a public computer?", a: ["To save battery", "To prevent others from accessing your files and personal info", "To make the computer faster", "To update the software"], cor: 1, exp: "Signing out is crucial for digital security and privacy." },
        { q: "What is 'Attribution'?", a: ["Changing a file name", "Acknowledging the creator of a work you are using", "Deleting a file", "Selling a file"], cor: 1, exp: "Attribution is the act of giving credit to the source of information." },
        { q: "What is 'Footnote'?", a: ["A note at the end of the document", "A note at the bottom of the page providing more info or a citation", "The page number", "A header"], cor: 1, exp: "Footnotes provide details or citations at the bottom of the specific page." },
        { q: "What is an 'Endnote'?", a: ["A note at the bottom of the page", "A note at the end of the entire document or section", "The last slide", "The save button"], cor: 1, exp: "Endnotes collect all citations/notes at the very end of the file." },
        { q: "Which shortcut 'Cuts' the selected item to the clipboard?", a: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"], cor: 2, exp: "Ctrl + X removes the item from the page and puts it in the clipboard." },
        { q: "Which shortcut 'Copies' the selected item?", a: ["Ctrl + X", "Ctrl + C", "Ctrl + P", "Ctrl + V"], cor: 1, exp: "Ctrl + C copies the item without removing it." },
        { q: "What is 'Landscape' printing used for most often?", a: ["Letters", "Spreadsheets or wide charts", "Envelopes", "Novels"], cor: 1, exp: "Landscape provides more horizontal space for wide data." },
        { q: "What does 'Print to PDF' do?", a: ["Sends a document to a physical printer", "Creates a digital PDF file instead of a paper copy", "Prints a photo of a PDF", "Deletes the printer"], cor: 1, exp: "Printing to PDF is a way to 'Save As' a PDF from any program." },
        { q: "What is the 'Quick Access Toolbar'?", a: ["The Start Menu", "A customizable toolbar for frequently used commands", "The Taskbar", "The Recycle Bin"], cor: 1, exp: "It is usually at the very top of the window and holds shortcuts like Save and Undo." },
        { q: "Which key is used to exit a PowerPoint Slide Show?", a: ["Enter", "Esc", "Tab", "Shift"], cor: 1, exp: "The Escape (Esc) key stops the presentation and returns to the edit screen." },
        { type: "matching", q: "Match Word UI Elements:", pairs: [{term: "Ribbon", definition: "Main command center tabs"}, {term: "Quick Access", definition: "Custom shortcut buttons"}, {term: "Status Bar", definition: "Page and word count info"}], exp: "UI elements organize features for productivity." },
        { type: "ordering", q: "Steps to Save as PDF:", items: ["Click File", "Choose Save As", "Select PDF format", "Click Save"], cor: ["Click File", "Choose Save As", "Select PDF format", "Click Save"], exp: "PDF conversion happens within the Save As menu." },
        { type: "matching", q: "Match Layout Terms:", pairs: [{term: "Portrait", definition: "Vertical page orientation"}, {term: "Landscape", definition: "Horizontal page orientation"}, {term: "Margins", definition: "White space around edges"}], exp: "Orientation and margins define the print area." },
        { type: "ordering", q: "Formatting a Paragraph:", items: ["Select the text", "Change font type", "Apply bold styling", "Adjust line spacing"], cor: ["Select the text", "Change font type", "Apply bold styling", "Adjust line spacing"], exp: "Selection must occur before formatting can be applied." },
        { type: "matching", q: "Match Content Features:", pairs: [{term: "Header", definition: "Text at top of every page"}, {term: "Footer", definition: "Text at bottom of every page"}, {term: "Caption", definition: "Label for a picture or table"}], exp: "These help organize long documents." },
        { type: "ordering", q: "Creating a Presentation:", items: ["Choose a template", "Add a title slide", "Insert new slides", "Apply transitions"], cor: ["Choose a template", "Add a title slide", "Insert new slides", "Apply transitions"], exp: "Logical flow for building slide decks." },
        { type: "matching", q: "Match Image Wrap Settings:", pairs: [{term: "In Line", definition: "Image sits like a word"}, {term: "Square", definition: "Text flows around the box"}, {term: "Tight", definition: "Text flows around the image shape"}], exp: "Wrap settings control how text interacts with visuals." },
        { type: "ordering", q: "Printing a Document:", items: ["Select Print option", "Choose the printer", "Set page range", "Click Print button"], cor: ["Select Print option", "Choose the printer", "Set page range", "Click Print button"], exp: "The configuration steps before the final execution." },
        { type: "matching", q: "Match Keyboard Shortcuts:", pairs: [{term: "Ctrl + S", definition: "Save document"}, {term: "Ctrl + P", definition: "Print document"}, {term: "Ctrl + Z", definition: "Undo last action"}], exp: "Essential productivity shortcuts." },
        { type: "ordering", q: "Sharing a File:", items: ["Click Share button", "Enter email address", "Set permissions (View/Edit)", "Click Send"], cor: ["Click Share button", "Enter email address", "Set permissions (View/Edit)", "Click Send"], exp: "Cloud-based collaboration workflow." },
        { type: "matching", q: "Match Document Views:", pairs: [{term: "Print Layout", definition: "Standard editing view"}, {term: "Read Mode", definition: "Optimized for viewing"}, {term: "Web Layout", definition: "Shows how it looks online"}], exp: "Views change how content is displayed." },
        { type: "ordering", q: "Inserting a Table:", items: ["Click Insert tab", "Select Table", "Choose rows/columns", "Enter data"], cor: ["Click Insert tab", "Select Table", "Choose rows/columns", "Enter data"], exp: "Process for adding structured data." },
        { type: "matching", q: "Match Font Styles:", pairs: [{term: "Serif", definition: "Fonts with small 'feet'"}, {term: "Sans Serif", definition: "Clean fonts without 'feet'"}, {term: "Script", definition: "Handwritten style fonts"}], exp: "Typography choices impact readability." },
        { type: "ordering", q: "Spell Check Process:", items: ["Identify red underline", "Right-click word", "Select correct spelling", "Click Ignore if correct"], cor: ["Identify red underline", "Right-click word", "Select correct spelling", "Click Ignore if correct"], exp: "Standard error correction workflow." },
        { type: "matching", q: "Match Backup Methods:", pairs: [{term: "Cloud", definition: "OneDrive / Google Drive"}, {term: "Physical", definition: "USB Flash Drive"}, {term: "Version History", definition: "Restoring older file drafts"}], exp: "Safeguarding work is a core GS6 objective." }
    ],
    l1_lesson5: [
        { q: "What is an online journal where a creator posts articles and others comment?", a: ["Wiki", "Blog", "Podcast", "Portal"], cor: 1, exp: "Blogs are online journals used for sharing opinions and information on specific topics." },
        { q: "What is the term for the amount of visitors a blog or website receives?", a: ["Bandwidth", "Traffic", "Streaming", "Ping"], cor: 1, exp: "Traffic refers to the volume of users visiting a digital platform." },
        { q: "What does 'RSS' (Real Simple Syndication) allow users to do?", a: ["Chat in real-time", "Subscribe to and receive automatic updates from websites", "Edit a wiki", "Post a video"], cor: 1, exp: "RSS feeds notify subscribers of new content as it occurs." },
        { q: "Which medium is described as 'radio on demand'?", a: ["Blog", "Streaming", "Podcast", "SMS"], cor: 2, exp: "Podcasts are digital audio or video series available for download or streaming." },
        { q: "What is 'Streaming'?", a: ["Downloading a file completely before playing", "Receiving and playing media content simultaneously", "Sending an email attachment", "Deleting temporary files"], cor: 1, exp: "Streaming allows you to intake media while it is being delivered over the internet." },
        { q: "Which platform is specifically mentioned as welcoming 'vlogs'?", a: ["Excel", "YouTube", "Wikipedia", "Outlook"], cor: 1, exp: "YouTube is a primary platform for video blogs (vlogs)." },
        { q: "What is a 'Wiki'?", a: ["A private email server", "A collaborative website where anyone can add or edit content", "A type of podcast", "A hardware component"], cor: 1, exp: "Wikis enable collective information management and editing." },
        { q: "To interact with someone in a digital environment, what is generally required first?", a: ["A credit card", "An account for access", "A printer", "A new monitor"], cor: 1, exp: "Most digital environments require a user account to post or interact." },
        { q: "Which email command sends a reply ONLY to the original sender?", a: ["Reply to All", "Forward", "Reply", "Bcc"], cor: 2, exp: "The 'Reply' function goes back only to the person who sent the message." },
        { q: "What does 'Cc' stand for in an email?", a: ["Computer Copy", "Carbon Copy", "Contact Creator", "Correct Content"], cor: 1, exp: "Cc is used to send a copy to someone for informational purposes." },
        { q: "Which field should you use to send a copy of an email without other recipients knowing?", a: ["To", "Cc", "Bcc", "Subject"], cor: 2, exp: "Bcc (Blind Carbon Copy) hides the recipient's address from everyone else." },
        { q: "What does 'Forward' do in email communication?", a: ["Sends a copy of a received message to a new person", "Deletes the message", "Replies to everyone in the thread", "Moves the message to the trash"], cor: 0, exp: "Forwarding sends a copy of the existing message to a different recipient." },
        { q: "What should you do before posting comments on a social network?", a: ["Use all capital letters", "Be thoughtful and consider how it reflects on your identity", "Include your home address", "Nothing, it's anonymous"], cor: 1, exp: "Online posts reflect your digital identity and reputation." },
        { q: "When viewing diverse opinions online, what is the best practice?", a: ["Respond in a negative manner", "Be inclusive and demonstrate respect", "Judge the author immediately", "Report every post you disagree with"], cor: 1, exp: "Respect and inclusivity are key to professional digital citizenship." },
        { q: "What is 'Digital Communication'?", a: ["Face-to-face talking", "Exchanging info through electronic formats", "Writing a letter by hand", "Reading a paper book"], cor: 1, exp: "Digital communication involves sharing info via devices and networks." },
        { q: "Which tool is best for real-time (synchronous) communication?", a: ["Email", "Instant Messaging (IM)", "Blog post", "Wiki edit"], cor: 1, exp: "IM allows for instant, back-and-forth conversation." },
        { q: "True or False: Authors of blogs and wikis always have expert qualifications.", a: ["True", "False"], cor: 1, exp: "False. Anyone can contribute to blogs or wikis, so credibility must be checked." },
        { q: "What is a common use for the 'To' field in an email?", a: ["To hide the sender", "To identify the primary recipient(s)", "To list people who don't need to reply", "To add an attachment"], cor: 1, exp: "The 'To' field is for the people the message is directly intended for." },
        { q: "Why should you use 'inclusive language' online?", a: ["To make the email shorter", "To demonstrate respect for a variety of cultures and beliefs", "To bypass spam filters", "To hide your identity"], cor: 1, exp: "Inclusive language fosters a respectful and professional digital environment." },
        { q: "What is the main advantage of a Podcast over live radio?", a: ["It requires more battery", "It can be listened to on-demand at any time", "It is always in 3D", "It doesn't use the internet"], cor: 1, exp: "Podcasts offer flexibility to listen whenever the user chooses." },
        { q: "In email, what is a 'Thread'?", a: ["A type of cable", "A sequence of messages forming a conversation", "A security virus", "A font style"], cor: 1, exp: "Threads group related email replies together." },
        { q: "Which of these is a form of digital expression?", a: ["Vlogging", "Podcasting", "Posting on social media", "All of the above"], cor: 3, exp: "All these methods allow individuals to express ideas digitally." },
        { q: "What is a 'Vlog'?", a: ["A voice log", "A video-based blog", "A virus log", "A vertical log"], cor: 1, exp: "Vlogs use video as the primary medium for journaling or reporting." },
        { q: "What is 'Netiquette'?", a: ["Internet speed", "The rules for polite and correct behavior online", "A type of web browser", "Network security software"], cor: 1, exp: "Netiquette is the etiquette of the internet." },
        { q: "Which action is most likely to help your digital reputation?", a: ["Posting angry comments", "Sharing helpful, respectful content", "Oversharing private details", "Ignoring all messages"], cor: 1, exp: "Positive interaction builds a strong digital reputation." },
        { q: "What does the '@' symbol in an email address do?", a: ["Encrypts the message", "Separates the username from the domain name", "Identifies the subject", "Marks the message as urgent"], cor: 1, exp: "The @ symbol is the standard separator for email addresses." },
        { q: "What is a 'Handle' in social media?", a: ["The mouse", "Your unique username (e.g., @User)", "A private message", "A type of link"], cor: 1, exp: "A handle identifies you uniquely on a social platform." },
        { q: "What should you check to verify a blog's authority?", a: ["The background color", "The author's credentials and site traffic", "The number of images", "The length of the URL"], cor: 1, exp: "Authority is determined by the author's expertise and site reliability." },
        { q: "If you want to reply to everyone listed in an email, which button do you use?", a: ["Reply", "Forward", "Reply to All", "Send"], cor: 2, exp: "Reply to All includes everyone in the To and Cc fields." },
        { q: "What is an 'Attachment' in communication?", a: ["An emoji", "A file sent along with an email or IM", "The subject line", "A user profile"], cor: 1, exp: "Attachments allow you to share external files like PDFs or images." },
        { q: "Which is a characteristic of a Wiki?", a: ["Only one person can write on it", "It is always factually perfect", "It allows collaborative editing by many users", "It is a type of hardware"], cor: 2, exp: "Collaborative editing is the core feature of a wiki." },
        { q: "What does it mean if a blog has high 'Traffic'?", a: ["It is blocked", "It has many visitors", "It is very slow", "It has many typos"], cor: 1, exp: "High traffic means the blog is popular or widely read." },
        { q: "What is a 'Syndicated' feed?", a: ["A deleted feed", "Content delivered automatically to subscribers (like RSS)", "A paid advertisement", "A private message"], cor: 1, exp: "Syndicated feeds push updates to users automatically." },
        { q: "Why is 'Bcc' useful for privacy?", a: ["It makes the email smaller", "Recipients cannot see each other's email addresses", "It encrypts the text", "It blocks spam"], cor: 1, exp: "Bcc prevents the disclosure of the recipient list." },
        { q: "When is 'Forward' most appropriate?", a: ["When you want to reply to the sender", "When you want to share a received message with a third party", "When you want to delete a message", "When you are angry"], cor: 1, exp: "Forwarding passes information to someone not originally on the email." },
        { q: "What is a 'Social Network'?", a: ["A group of physical computers", "An online platform for building social relations and sharing content", "A type of internet cable", "A virus"], cor: 1, exp: "Social networks like LinkedIn or Facebook facilitate digital interaction." },
        { q: "What is 'Digital Citizenship'?", a: ["Living in a computer", "The responsible use of technology by anyone who uses it", "Owning many devices", "Working as a computer repair person"], cor: 1, exp: "Digital citizenship covers safety, etiquette, and responsibility online." },
        { q: "Which of these is 'Asynchronous' communication?", a: ["Phone call", "Email", "Video chat", "Face-to-face"], cor: 1, exp: "Email is asynchronous because there is a time gap between sending and receiving." },
        { q: "Which of these is 'Synchronous' communication?", a: ["Email", "Blog comment", "Live Instant Messaging", "Letter"], cor: 2, exp: "Live chat/IM happens in real-time." },
        { q: "What can 'Oversharing' lead to?", a: ["Better privacy", "Reputation damage and security risks", "Faster downloads", "More RAM"], cor: 1, exp: "Posting too much personal info exposes you to various digital risks." },
        { q: "What is the 'Subject' line in an email used for?", a: ["Writing the whole message", "A brief summary of what the email is about", "Listing the recipients", "Adding an attachment"], cor: 1, exp: "The subject line tells the reader the topic of the message." },
        { q: "What is a 'Signature' in email?", a: ["A handwritten name on the screen", "A pre-set block of text with your contact info at the end of an email", "A password", "A digital virus"], cor: 1, exp: "Signatures provide professional contact details automatically." },
        { q: "What is the purpose of 'Moderation' in a digital forum?", a: ["To delete all posts", "To review and approve comments to maintain a respectful environment", "To speed up the internet", "To sell products"], cor: 1, exp: "Moderation prevents harassment and off-topic content." },
        { q: "What is 'VoIP' (Voice over IP)?", a: ["A video file", "Making voice calls over the internet", "A type of printer", "A secure email"], cor: 1, exp: "VoIP (like Skype/WhatsApp calls) uses data networks for voice." },
        { q: "What is 'Multimedia'?", a: ["Just text", "Just audio", "A combination of text, audio, images, and video", "A type of hardware"], cor: 2, exp: "Multimedia uses multiple forms of content." },
        { q: "What is 'Presence' in a chat app?", a: ["A gift", "Status icons showing if a user is online or busy", "A fast connection", "The user's real name"], cor: 1, exp: "Presence indicators show availability." },
        { q: "What should you do if you receive an inappropriate email?", a: ["Forward it to everyone", "Reply with an insult", "Follow company/school policy (report or delete)", "Save it as your wallpaper"], cor: 2, exp: "Proper response involves following established safety/professional guidelines." },
        { q: "Why check 'Traffic' on a site you use for research?", a: ["To see if it is pretty", "To gauge the site's popularity and potential reliability", "To change the site's content", "To buy the site"], cor: 1, exp: "High traffic can suggest a site is a recognized resource, though not always accurate." },
        { q: "What is 'Tone' in digital communication?", a: ["The volume of the speakers", "The attitude or emotion conveyed through writing", "The color of the font", "The speed of typing"], cor: 1, exp: "Tone is critical in text because body language is missing." },
        { q: "Which of these is a 'Professional' email practice?", a: ["Using all caps", "Using a clear subject line and proper grammar", "Using many emojis in a business letter", "Not signing your name"], cor: 1, exp: "Clarity and grammar are essential for professional communication." },
        { q: "What is 'Streaming Media'?", a: ["A DVD", "Video or audio consumed while it is being delivered", "A printout", "A file on a USB drive"], cor: 1, exp: "Streaming occurs in real-time without a permanent download required first." },
        { q: "What is a 'Podcast Episode'?", a: ["A single recording within a podcast series", "A type of email", "A computer monitor", "A social media 'like'"], cor: 0, exp: "Episodes are individual parts of a larger podcast series." },
        { q: "How can 'Blogs' help your career?", a: ["By letting you play games", "By establishing you as an authority on a subject", "By increasing your typing speed", "By deleting your digital footprint"], cor: 1, exp: "Sharing expertise on a blog builds a professional brand." },
        { q: "What is 'Collaboration' in a digital context?", a: ["Working alone", "Multiple people working together using digital tools", "Stealing code", "Buying a computer"], cor: 1, exp: "Tools like wikis and shared docs enable collaboration." },
        { q: "What is 'Cloud-based' communication?", a: ["Using a weather app", "Communication tools hosted on the internet (e.g., Slack, Teams)", "A physical server in your room", "A type of radio"], cor: 1, exp: "Cloud tools are accessible from anywhere via the web." },
        { q: "In the context of Lesson 5, what is a 'Bulletin Board System' (BBS)?", a: ["A wooden board", "An early electronic message board for public discussion", "A modern smartphone", "A type of printer"], cor: 1, exp: "BBS was a precursor to modern social media and forums." },
        { q: "What is 'Spam'?", a: ["A virus", "Unsolicited or junk email", "A type of attachment", "A secure login"], cor: 1, exp: "Spam is unwanted bulk messaging." },
        { q: "What does 'Reply to All' include?", a: ["Only the sender", "Only the Cc recipients", "The sender and everyone in the To and Cc fields", "Everyone in the world"], cor: 2, exp: "Reply to All is broad communication within the existing group." },
        { q: "What is an 'Emoji' used for?", a: ["To speed up the CPU", "To convey emotion or tone in digital text", "To secure a password", "To print a file"], cor: 1, exp: "Emojis help provide the emotional context that text lacks." },
        { q: "Why is 'Context' important in digital messages?", a: ["It makes the file bigger", "It helps the recipient understand the meaning and intent", "It changes the font", "It is a type of hardware"], cor: 1, exp: "Without context, text messages can be easily misunderstood." },
        { q: "Which of these is a 'Messaging' app?", a: ["WhatsApp", "Excel", "Photoshop", "PowerPoint"], cor: 0, exp: "WhatsApp is a primary example of a messaging tool." },
        { q: "What is 'Video Conferencing'?", a: ["Watching a movie", "Live, visual connection between two or more people via the internet", "Sending a video in email", "A type of webcam"], cor: 1, exp: "Conferencing allows for remote face-to-face meetings." },
        { q: "What is 'Cyberbullying'?", a: ["Fixing a computer", "Using digital means to harass, threaten, or intimidate someone", "A type of software", "An internet speed test"], cor: 1, exp: "Cyberbullying is a violation of digital citizenship." },
        { q: "What does 'Inclusive' mean online?", a: ["Excluding people you don't like", "Ensuring content and interactions are accessible and respectful to all", "Only using one language", "Blocking all comments"], cor: 1, exp: "Inclusivity ensures a welcoming environment for diverse users." },
        { q: "What is the 'Domain' in 'user@gmail.com'?", a: ["user", "@", "gmail.com", ".com"], cor: 2, exp: "The domain follows the @ symbol and identifies the mail service." },
        { q: "What is 'Instant' about Instant Messaging?", a: ["The set up", "The delivery of the message in real-time", "The way you type", "The cost"], cor: 1, exp: "IM is characterized by immediate transmission." },
        { q: "True or False: A blog post is a permanent part of your digital footprint.", a: ["True", "False"], cor: 0, exp: "True. Even if deleted, copies may exist or have been seen." },
        { q: "What is 'Multimedia Intaking'?", a: ["Deleting files", "Consuming content like video, audio, and text", "Building a computer", "Writing code"], cor: 1, exp: "Intaking refers to viewing or listening to shared media." },
        { q: "What is a 'News Feed'?", a: ["A type of printer", "A list of newly published content or news stories", "A security alert", "A hardware part"], cor: 1, exp: "Feeds keep users updated on new information." },
        { q: "Which field should you use if you want to 'inform' someone but don't need a reply?", a: ["To", "Cc", "Subject", "Forward"], cor: 1, exp: "Cc is traditionally used for 'FYI' (For Your Information) purposes." },
        { q: "What is 'Digital Expression'?", a: ["Drawing on paper", "Sharing ideas and creativity through digital platforms", "A facial expression", "A mathematical formula"], cor: 1, exp: "Expression involves using tools like blogs and podcasts to share thoughts." },
        { q: "What is a 'Portal'?", a: ["A type of door", "A website that acts as a gateway to other sites and services", "A virus", "A computer case"], cor: 1, exp: "Portals aggregate various links and tools in one place." },
        { q: "What is 'Digital Etiquette'?", a: ["Fast typing", "Another word for Netiquette", "Buying digital goods", "Fixing a router"], cor: 1, exp: "Etiquette refers to the standards of conduct online." },
        { q: "Why check the 'Last Updated' date on a blog?", a: ["To see the colors", "To ensure the information is current and relevant", "To see the author's age", "To check the site's price"], cor: 1, exp: "Communication and facts change; currency is vital for accuracy." },
        { q: "What is the 'Golden Rule' of digital communication?", a: ["Type fast", "Treat others as you would want to be treated", "Never use punctuation", "Always use BCC"], cor: 1, exp: "Respect is the foundation of all positive digital interaction." },
        { type: "matching", q: "Match Email Fields:", pairs: [{term: "To", definition: "Primary recipient"}, {term: "Cc", definition: "Visible copy for info"}, {term: "Bcc", definition: "Hidden copy for privacy"}], exp: "Bcc hides recipients from each other." },
        { type: "ordering", q: "Professional Email Structure:", items: ["Subject Line", "Salutation", "Body Paragraphs", "Closing"], cor: ["Subject Line", "Salutation", "Body Paragraphs", "Closing"], exp: "Standard structure ensures clear communication." },
        { type: "matching", q: "Match Social Tools:", pairs: [{term: "Blog", definition: "Online journal/articles"}, {term: "Wiki", definition: "Collaborative knowledge site"}, {term: "Podcast", definition: "Digital audio broadcast"}], exp: "Different tools serve different communication needs." },
        { type: "ordering", q: "Replying to a Message:", items: ["Read original message", "Click Reply", "Type response", "Send message"], cor: ["Read original message", "Click Reply", "Type response", "Send message"], exp: "Basic communication flow." },
        { type: "matching", q: "Match Communication Channels:", pairs: [{term: "SMS", definition: "Short text via phone"}, {term: "IM", definition: "Instant web-based chat"}, {term: "Email", definition: "Formal digital mail"}], exp: "Speed and formality vary by channel." },
        { type: "ordering", q: "Attaching a File to Email:", items: ["Click Paperclip icon", "Select file from PC", "Wait for upload", "Send email"], cor: ["Click Paperclip icon", "Select file from PC", "Wait for upload", "Send email"], exp: "Method for sending external documents." },
        { type: "matching", q: "Match Inbox Folders:", pairs: [{term: "Drafts", definition: "Unsent messages"}, {term: "Spam/Junk", definition: "Unwanted/dangerous mail"}, {term: "Sent", definition: "History of outgoing mail"}], exp: "Folders organize your communication history." },
        { type: "ordering", q: "Searching an Inbox:", items: ["Click search bar", "Type sender name", "Apply 'Has Attachment' filter", "Select correct email"], cor: ["Click search bar", "Type sender name", "Apply 'Has Attachment' filter", "Select correct email"], exp: "Efficient way to find lost messages." },
        { type: "matching", q: "Match Digital Presence:", pairs: [{term: "Profile", definition: "Personal info page"}, {term: "Status", definition: "Current activity update"}, {term: "Notification", definition: "Alert for new activity"}], exp: "Components of social networking." },
        { type: "ordering", q: "Setting an Out-of-Office:", items: ["Go to Settings", "Select Automatic Replies", "Type message", "Enable date range"], cor: ["Go to Settings", "Select Automatic Replies", "Type message", "Enable date range"], exp: "Automating communication during absences." },
        { type: "matching", q: "Match Video Call Icons:", pairs: [{term: "Microphone", definition: "Mute/Unmute audio"}, {term: "Camera", definition: "Enable/Disable video"}, {term: "Screen Share", definition: "Show your desktop to others"}], exp: "Standard controls for digital meetings." },
        { type: "ordering", q: "Scheduling a Meeting:", items: ["Open Calendar", "Click New Event", "Invite attendees", "Set Time/Location"], cor: ["Open Calendar", "Click New Event", "Invite attendees", "Set Time/Location"], exp: "Workflow for group coordination." },
        { type: "matching", q: "Match Professionalism Rules:", pairs: [{term: "Check Spelling", definition: "Avoid typos in emails"}, {term: "Avoid ALL CAPS", definition: "Don't 'shout' online"}, {term: "Subject lines", definition: "Be clear and concise"}], exp: "Etiquette rules for business communication." },
        { type: "ordering", q: "Deleting a Conversation:", items: ["Select the thread", "Click Delete", "Confirm action", "Empty the Trash"], cor: ["Select the thread", "Click Delete", "Confirm action", "Empty the Trash"], exp: "Permanent removal of data." },
        { type: "matching", q: "Match Digital Messaging Risks:", pairs: [{term: "Misinterpretation", definition: "Lack of tone/body language"}, {term: "Data Leak", definition: "Forwarding private info"}, {term: "Harassment", definition: "Unwanted repeated messages"}], exp: "Awareness of communication pitfalls." }
    ],
    l1_lesson6: [
        { q: "What is a primary benefit of digital collaboration?", a: ["It decreases the need for internet access", "Productivity increases through simultaneous activity", "It eliminates the need for leadership", "It slows down project completion"], cor: 1, exp: "Productivity increases because team members can work on the same project simultaneously." },
        { q: "How does digital collaboration improve communication?", a: ["By using only physical mail", "Through instant messaging features within collaborative tools", "By preventing people from talking", "By limiting messages to once a day"], cor: 1, exp: "Communication is faster and more efficient using instant messaging inside collaborative tools." },
        { q: "How does digital collaboration help when a team lacks specific expertise?", a: ["You can easily add remote collaborators with the needed expertise", "You must hire a new full-time employee", "The project must be canceled", "You have to finish the project without the expertise"], cor: 0, exp: "You can add or subtract collaborators where specific expertise is needed." },
        { q: "How does digital collaboration benefit leadership or management?", a: ["They don't have to check the work anymore", "It makes oversight easier by providing access to contents and contributors", "It hides the work from them", "It forces them to do all the work"], cor: 1, exp: "Leadership has an easier time conducting oversight, increasing efficiency and quality control." },
        { q: "What is 'Synchronous' communication?", a: ["Delayed communication", "Sending an email", "Information sent and received instantly in real-time", "A recorded video message"], cor: 2, exp: "Synchronous communication happens in real-time, instantly." },
        { q: "What is 'Asynchronous' communication?", a: ["A live phone call", "A live video conference", "Delayed communication with a time gap between sending and receiving", "Face-to-face talking"], cor: 2, exp: "Asynchronous communication (like email) involves a time delay." },
        { q: "Which of the following is an example of Synchronous communication?", a: ["A forum post", "An email", "A live instant messaging chat", "A recorded voicemail"], cor: 2, exp: "Instant messaging is real-time (synchronous)." },
        { q: "Which of the following is an example of Asynchronous communication?", a: ["A Zoom video call", "A phone call", "An email", "A live Teams meeting"], cor: 2, exp: "Email is delayed (asynchronous) communication." },
        { q: "Where are collaboration tools increasingly being used outside of corporate environments?", a: ["Only in physical retail stores", "In school settings", "Only in government facilities", "Nowhere else"], cor: 1, exp: "Collaboration tools are designed for corporate use but are increasingly used in schools." },
        { q: "What do collaboration tools allow local and remote employees to do?", a: ["Only make phone calls", "Communicate, collaborate, and share documents", "Only track their hours", "Play video games together"], cor: 1, exp: "Employees can communicate, collaborate, and access/share documents regardless of location." },
        { q: "What is 'SharePoint' in Microsoft 365?", a: ["A video editing app", "A website creation and document management platform", "A simple calculator", "An email client"], cor: 1, exp: "SharePoint is a browser-based collaboration and document management platform." },
        { q: "What does 'Office Online' (web apps) provide?", a: ["Expensive, heavy software", "Free online, lightweight browser-based versions of Word, Excel, and PowerPoint", "Only email services", "A physical server"], cor: 1, exp: "Office Online provides free, browser-based versions of Microsoft 365 applications." },
        { q: "What is 'OneDrive for Business'?", a: ["A social media site", "Cloud storage specifically for business files tied to a Microsoft account", "A video conferencing tool", "A local hard drive"], cor: 1, exp: "OneDrive for Business is cloud storage specifically for your business files." },
        { q: "What is Microsoft 'Teams' primarily used for?", a: ["Editing photos", "Real-time communication, messaging, video conferencing, and document collaboration", "Creating public websites", "Only sending emails"], cor: 1, exp: "Teams is a real-time communication app that provides messaging, video, and collaboration." },
        { q: "How is SharePoint accessed by users?", a: ["Through a USB drive", "It is a browser-based platform", "Through a mobile phone network only", "It does not use the internet"], cor: 1, exp: "SharePoint is a browser-based collaboration platform." },
        { q: "What are the specific collaborative locations in SharePoint called?", a: ["Rooms", "Hubs", "Sites", "Folders"], cor: 2, exp: "SharePoint provides central locations for collaboration referred to as 'sites'." },
        { q: "What is 'Co-authoring'?", a: ["Writing a book alone", "Simultaneous editing of a document by multiple authors", "Sending an email to an author", "Deleting a document"], cor: 1, exp: "Co-authoring allows multiple authors to edit a document at the exact same time." },
        { q: "What is the primary goal of collaborating online?", a: ["Increasing productivity, efficiency, and teamwork", "Reducing the number of employees", "Avoiding face-to-face meetings forever", "Slowing down the workflow to avoid mistakes"], cor: 0, exp: "Collaborating online is a powerful option for increasing productivity, efficiency, and teamwork." },
        { q: "What is 'Digital Etiquette'?", a: ["The speed of your internet", "The customary code of polite behavior in a digital society or profession", "A tool for editing videos", "A type of firewall"], cor: 1, exp: "Etiquette (or Netiquette) is the code of polite behavior online." },
        { q: "What is another common term for Digital Etiquette?", a: ["Netiquette", "Web-rules", "Cyber-law", "Tech-manners"], cor: 0, exp: "Digital etiquette is often referred to as 'netiquette'." },
        { q: "Why is caution needed in written digital collaboration?", a: ["It is too fast", "It uses too much data", "Electronic communication tends to be open to misinterpretation", "It is always public"], cor: 2, exp: "Without tone of voice or body language, written text is easily misinterpreted." },
        { q: "Why should you refrain from using ALL UPPERCASE LETTERS in a professional message?", a: ["It makes the file size too large", "It is considered 'shouting'", "It is illegal", "It confuses the spell checker"], cor: 1, exp: "Using all caps is universally considered the digital equivalent of shouting." },
        { q: "Are abbreviations (like 'ttyl' or 'brb') generally accepted in formal business or school collaboration?", a: ["Yes, always", "No, they are generally not accepted", "Only in emails", "Only on Fridays"], cor: 1, exp: "Abbreviations and acronyms in formal business or school communications are generally not accepted." },
        { q: "Should you use emoticons or emojis to convey emotion in formal written collaboration?", a: ["Yes, to show you are happy", "No, refrain from using symbols that attempt to convey emotion", "Yes, if it is a sad email", "Only in the subject line"], cor: 1, exp: "In formal communication, you should refrain from using emoticons or symbols." },
        { q: "If a collaborative message contains a question or requires action, what is the proper etiquette?", a: ["Ignore it if you are busy", "Send an appropriately timed reply", "Wait exactly one week to reply", "Reply with an emoji"], cor: 1, exp: "Proper etiquette dictates sending an appropriately timed reply to questions or action items." },
        { q: "Whose rules and guidelines should you ALWAYS follow regarding electronic communications?", a: ["Your personal rules", "The guidelines established by your school or organization", "The rules of social media influencers", "No one's rules"], cor: 1, exp: "Always follow the rules and guidelines established by your school or organization." },
        { q: "What is a major advantage of 'Visual Collaboration' (Video Conferencing) over text?", a: ["It uses less bandwidth", "It can display a larger range of emotion, meaning, and intention", "It doesn't require an internet connection", "You can hide your identity"], cor: 1, exp: "Visual collaboration conveys emotion and meaning better because of facial expressions and body language." },
        { q: "What should you be particularly aware of during a video conference?", a: ["Your typing speed", "Your facial expressions and actions", "Your email inbox", "The brand of your webcam"], cor: 1, exp: "Because others can see you, be aware of your facial expressions and actions." },
        { q: "During visual collaboration, how should you show you are engaged?", a: ["By looking at your phone", "By actively paying attention to the meeting and topic of discussion", "By turning off your camera", "By talking to someone else in the room"], cor: 1, exp: "Ensure you are actively paying attention since others can see you." },
        { q: "Who is ultimately responsible for interpreting and conveying appropriate communication etiquette in a meeting?", a: ["The software provider", "The IT department", "You (the user)", "The internet service provider"], cor: 2, exp: "It is up to you to interpret and convey appropriate communication etiquette." },
        { q: "Which Microsoft 365 application would be BEST for a live, real-time video meeting with remote workers?", a: ["Word Online", "OneDrive", "Teams", "SharePoint"], cor: 2, exp: "Teams is the designated app for real-time video conferencing and messaging." },
        { q: "If you need to securely store a business document in the cloud so you can access it from home, which tool is best?", a: ["Teams", "OneDrive for Business", "A public wiki", "A blog"], cor: 1, exp: "OneDrive for Business is specifically for cloud storage of business files." },
        { q: "If your team needs to build a central 'site' to host project files and shared calendars, what is the best tool?", a: ["Office Online", "SharePoint", "A USB drive", "Instant Messaging"], cor: 1, exp: "SharePoint is used to create central sites for document management and collaboration." },
        { q: "You and a classmate are typing in the exact same Word document at the exact same time from different houses. What is this called?", a: ["Asynchronous editing", "Co-authoring", "Plagiarism", "File copying"], cor: 1, exp: "Simultaneous editing by multiple people is called co-authoring." },
        { q: "Which of the following scenarios represents Asynchronous collaboration?", a: ["A live Zoom call", "Leaving a comment on a shared document for a coworker to read tomorrow", "A phone call", "A real-time Teams chat"], cor: 1, exp: "Leaving a comment to be read later involves a time delay, making it asynchronous." },
        { q: "Which of the following scenarios represents Synchronous collaboration?", a: ["Sending a letter", "Sending an email", "Discussing a project over a live video call", "Updating a Wiki page"], cor: 2, exp: "A live video call is real-time (synchronous)." },
        { q: "Why might a project manager prefer digital collaboration tools over traditional paper methods?", a: ["It is harder to see who did the work", "It increases efficiency and allows easier oversight of contributions", "It prevents people from working together", "It requires everyone to be in the same physical room"], cor: 1, exp: "Digital tools make oversight easier by tracking contents and contributors." },
        { q: "You receive an email from a teacher asking for a project update. You don't have the answer yet. What is the best netiquette?", a: ["Ignore the email until you have the answer", "Reply in ALL CAPS that you are working on it", "Send a timely reply stating you received the email and will provide an update soon", "Send a smiley face emoji"], cor: 2, exp: "A timely reply acknowledging the message is proper etiquette." },
        { q: "You are on a Teams video call. Your microphone is muted, but your camera is on. Your coworker is presenting. What should you do?", a: ["Scroll through your phone since you are muted", "Maintain eye contact with the screen to show active attention", "Roll your eyes at parts you disagree with", "Walk away from the computer"], cor: 1, exp: "You must actively pay attention and be aware of your facial expressions." },
        { q: "Which statement is true regarding Office Online?", a: ["It requires a CD to install", "It provides lightweight, browser-based versions of apps like Word and Excel", "It can only be used if you are offline", "It is only for Apple computers"], cor: 1, exp: "Office Online provides free, browser-based versions of Office apps." },
        { q: "You are collaborating on a formal business report. Is it acceptable to use 'LOL' to save time?", a: ["Yes, it increases productivity", "No, abbreviations are not accepted in formal business communication", "Yes, if you explain what it means first", "Only if the boss does it first"], cor: 1, exp: "Abbreviations and acronyms are generally not accepted in formal settings." },
        { q: "What does the term 'Lightweight' mean when referring to Office Online web apps?", a: ["They weigh less on your laptop", "They run in a browser and may not have every single advanced feature of the desktop version", "They only work during the day", "They are only for mobile phones"], cor: 1, exp: "Browser-based web apps are 'lightweight' versions of the full desktop software." },
        { q: "If an employee in Tokyo and an employee in London are working on a project, how does digital collaboration specifically help them?", a: ["It forces them to work at the exact same hour", "It allows them to share and access documents remotely", "It translates their speech instantly", "It pays for their travel"], cor: 1, exp: "Collaboration tools allow local and remote employees to communicate and share documents easily." },
        { q: "During a collaborative video meeting, a team member suggests an idea you think is terrible. What is the appropriate visual etiquette?", a: ["Scoff and shake your head so they see you disagree", "Maintain a neutral or respectful facial expression and wait your turn to speak", "Turn off your webcam immediately", "Hold up a sign saying 'NO'"], cor: 1, exp: "Be aware of your facial expressions and demonstrate respectful behavior." },
        { q: "Which tool is best described as a 'real-time communication application that provides messaging'?", a: ["OneDrive", "SharePoint", "Teams", "Word Online"], cor: 2, exp: "Teams is the real-time communication application in Microsoft 365." },
        { q: "What is the primary danger of written collaboration (like email or chat)?", a: ["It uses too much electricity", "It is open to misinterpretation without voice tone", "It is too fast to read", "It always gets lost in the mail"], cor: 1, exp: "Electronic communication tends to be open to misinterpretation." },
        { q: "If you want to emphasize a point in a professional email, what should you NOT do?", a: ["Use clear, descriptive vocabulary", "Use ALL UPPERCASE LETTERS", "Use bullet points", "Bold a specific word"], cor: 1, exp: "Do not use all caps, as it is considered shouting." },
        { q: "Which of the following is an example of a 'collaborative tool'?", a: ["A standard calculator", "A printed dictionary", "A shared SharePoint site", "A single-player video game"], cor: 2, exp: "SharePoint sites allow multiple people to work together." },
        { q: "In a collaborative document, how does co-authoring affect productivity?", a: ["It decreases it because people overwrite each other", "It increases it by allowing simultaneous activity", "It has no effect on productivity", "It causes the computer to crash"], cor: 1, exp: "Productivity increases through simultaneous activity between team members." },
        { q: "If you are unsure of the digital communication rules at your new job, what should you do?", a: ["Guess and hope for the best", "Use the rules from your old job", "Follow the rules and guidelines established by your organization", "Ask a friend on social media"], cor: 2, exp: "Always follow the guidelines established by your specific school or organization." },
        { q: "Which feature of visual collaboration prevents the common misinterpretations found in email?", a: ["The ability to type faster", "The ability to display a larger range of emotion, meaning, and intention", "The ability to mute your microphone", "The ability to share files"], cor: 1, exp: "Visual collaboration (video) adds body language and facial expressions." },
        { q: "You need to store a file so that only you can access it from your work laptop and your home computer. Which M365 tool is best?", a: ["SharePoint", "OneDrive for Business", "Teams", "A public blog"], cor: 1, exp: "OneDrive for Business is personal cloud storage tied to your specific account." },
        { q: "You need to store a file so that your entire 10-person department can edit it. Which M365 tool is best?", a: ["A USB drive", "SharePoint", "Your personal desktop", "A printed hard copy"], cor: 1, exp: "SharePoint provides a central location for teams to find and share documents." },
        { q: "Is it acceptable to use a smiley face emoji ☺ in a formal report to your school principal?", a: ["Yes, it shows you are friendly", "No, refrain from using emoticons in formal communication", "Yes, but only in the title", "Only if it is in color"], cor: 1, exp: "Refrain from using emoticons that attempt to convey emotion in formal settings." },
        { q: "What does 'simultaneous' mean in the context of digital collaboration?", a: ["Happening at different times", "Happening at the exact same time", "Taking turns", "Working offline"], cor: 1, exp: "Simultaneous activity (like co-authoring) happens at the same time." },
        { q: "Which of the following is NOT a benefit of digital collaboration?", a: ["Increased productivity", "Easier leadership oversight", "Ability to add remote experts", "Guaranteed perfect accuracy of all work"], cor: 3, exp: "Collaboration improves efficiency but does not automatically guarantee work is error-free." },
        { q: "If a coworker sends a chat message asking a question, but you are in a meeting, what is the best asynchronous response?", a: ["Ignore it forever", "Reply after your meeting: 'I was in a meeting, but here is the answer...'", "Leave the meeting immediately to answer", "Reply in ALL CAPS"], cor: 1, exp: "A delayed, appropriately timed reply is acceptable and respectful." },
        { q: "What is the difference between OneDrive and SharePoint?", a: ["OneDrive is for video, SharePoint is for text", "OneDrive is typically for personal/individual cloud storage, SharePoint is a central hub for team collaboration", "They are exactly the same", "SharePoint does not use the internet"], cor: 1, exp: "OneDrive is tied to your individual account; SharePoint is a shared team platform." },
        { q: "Why is 'active attention' important in a video conference?", a: ["So the software doesn't close", "Because participants can see your actions and facial expressions", "To save battery power", "So you can type faster"], cor: 1, exp: "Others can see you, so you must demonstrate you are paying attention." },
        { q: "What is the primary characteristic of 'Cloud Storage' used in collaboration?", a: ["Files are saved on floppy disks", "Files are stored on remote servers accessed via the internet", "Files are printed immediately", "Files are stored only in RAM"], cor: 1, exp: "Cloud storage keeps files on remote servers, allowing access from anywhere." },
        { q: "Which tool allows users to create and edit files using a web browser without installing full software?", a: ["Microsoft Windows", "Office Online", "A hard drive", "A graphics card"], cor: 1, exp: "Office Online provides browser-based versions of Word, Excel, etc." },
        { q: "In a collaborative document, what ensures you don't lose your work if your computer crashes?", a: ["Typing very fast", "AutoSave to a cloud location", "Using a larger monitor", "Printing the document"], cor: 1, exp: "Cloud-based collaboration tools auto-save your progress continuously." },
        { q: "What is a 'Thread' in Microsoft Teams?", a: ["A string used to fix a computer", "A continuous chain of related chat messages", "A virus", "A document template"], cor: 1, exp: "A thread keeps related messages grouped together." },
        { q: "If you are upset about a project change, how should you communicate this digitally?", a: ["Type an angry email in ALL CAPS", "Use professional, respectful language to express your concerns", "Spam the team chat with angry emojis", "Delete the shared document"], cor: 1, exp: "Netiquette requires polite behavior and avoiding emotional outbursts ('flaming' or 'shouting')." },
        { q: "Which of the following is true about digital collaboration leadership?", a: ["Leaders cannot see who made changes", "Leaders have an easier time conducting oversight and quality control", "Leaders must sit next to the employees", "Leaders do not use SharePoint"], cor: 1, exp: "Digital tools provide logs and histories, making oversight easier for leadership." },
        { q: "What does 'remote' mean in the context of remote employees?", a: ["Employees who use remote controls", "Employees working from a different physical location than the main office", "Employees who do not use computers", "Employees who work slowly"], cor: 1, exp: "Remote employees work from different physical locations (like from home)." },
        { q: "Why might a school use digital collaboration tools?", a: ["To stop students from communicating", "To allow students to co-author group projects from home", "To break the internet", "To replace all teachers"], cor: 1, exp: "Tools are increasingly used in schools to facilitate group projects and communication." },
        { q: "What is 'presence' in an app like Microsoft Teams?", a: ["A physical gift", "An indicator showing if a user is online, away, or in a meeting", "A type of video filter", "A document file type"], cor: 1, exp: "Presence shows availability (Synchronous readiness)." },
        { q: "If you are collaborating on a document and see another person's cursor moving, what is happening?", a: ["Your computer is hacked", "Co-authoring is occurring in real-time", "The mouse is broken", "The document is deleting itself"], cor: 1, exp: "Co-authoring allows you to see others making edits simultaneously." },
        { q: "What is the best way to handle a misinterpretation in a written digital message?", a: ["Argue via email", "Clarify politely, perhaps offering a synchronous video call to explain the tone", "Ignore the person forever", "Report them to HR immediately"], cor: 1, exp: "Since text lacks tone, polite clarification (often via voice/video) resolves misunderstandings." },
        { q: "Which of these is NOT a Microsoft 365 collaboration tool?", a: ["Teams", "SharePoint", "OneDrive", "Google Docs"], cor: 3, exp: "Google Docs is a collaboration tool, but it is not part of Microsoft 365." },
        { q: "How does digital collaboration affect the speed of communication?", a: ["It makes it slower", "It makes it faster and more efficient", "It stops communication completely", "It has no effect"], cor: 1, exp: "Communication is faster through instant messaging and real-time tools." },
        { q: "In a professional setting, what is the best practice for abbreviations like 'ICYMI' (In case you missed it)?", a: ["Use them in every email", "Avoid them; use full words for clarity and professionalism", "Only use them with the boss", "Make up your own abbreviations"], cor: 1, exp: "Abbreviations are generally not accepted in professional communication." },
        { q: "What is the main difference between a live video call and an email?", a: ["Video calls are asynchronous; emails are synchronous", "Video calls are synchronous; emails are asynchronous", "There is no difference", "Emails use facial expressions"], cor: 1, exp: "Video calls happen in real-time (sync), while emails have a delay (async)." },
        { q: "You are the manager of a project. How does SharePoint help you?", a: ["It cooks lunch for the team", "It provides a central site to track documents and contributor updates", "It physically blocks employees from leaving", "It prints documents automatically"], cor: 1, exp: "SharePoint provides a central location for oversight and document management." },
        { type: "matching", q: "Match Microsoft 365 Tools:", pairs: [{term: "Teams", definition: "Chat and video meetings"}, {term: "SharePoint", definition: "Team sites and document management"}, {term: "OneDrive", definition: "Personal cloud storage"}], exp: "Teams is for communication; SharePoint for team data." },
        { type: "ordering", q: "Co-authoring Workflow:", items: ["Share link to file", "Grant Edit permission", "Open file simultaneously", "See live changes"], cor: ["Share link to file", "Grant Edit permission", "Open file simultaneously", "See live changes"], exp: "Co-authoring allows real-time teamwork." },
        { type: "matching", q: "Match Etiquette Concepts:", pairs: [{term: "Synchronous", definition: "Real-time communication"}, {term: "Asynchronous", definition: "Delayed communication"}, {term: "Netiquette", definition: "Online polite code"}], exp: "Timeframes and rules define digital interaction." },
        { type: "ordering", q: "Conducting a Video Meeting:", items: ["Send invite link", "Admit participants", "Present content", "Record session"], cor: ["Send invite link", "Admit participants", "Present content", "Record session"], exp: "Phases of a successful virtual meeting." },
        { type: "matching", q: "Match Collaboration Roles:", pairs: [{term: "Owner", definition: "Full control over the group"}, {term: "Member", definition: "Can edit and contribute"}, {term: "Guest", definition: "Limited view-only access"}], exp: "Permissions ensure secure collaboration." },
        { type: "ordering", q: "Working with Shared Files:", items: ["Navigate to SharePoint", "Locate folder", "Check out file", "Edit and save"], cor: ["Navigate to SharePoint", "Locate folder", "Check out file", "Edit and save"], exp: "Standard document management flow." },
        { type: "matching", q: "Match Chat Features:", pairs: [{term: "Thread", definition: "Specific topic in a channel"}, {term: "Mention (@)", definition: "Tagging a specific person"}, {term: "Emoji", definition: "Visual emotional indicator"}], exp: "Tools for making chat more efficient." },
        { type: "ordering", q: "Resolving a Conflict online:", items: ["Identify the issue", "Take it to private chat", "Listen to both sides", "Agree on a solution"], cor: ["Identify the issue", "Take it to private chat", "Listen to both sides", "Agree on a solution"], exp: "Professionalism in collaborative environments." },
        { type: "matching", q: "Match Project Tools:", pairs: [{term: "Planner", definition: "Assign and track tasks"}, {term: "Whiteboard", definition: "Brainstorming and drawing"}, {term: "Forms", definition: "Surveys and feedback"}], exp: "Specialized tools for team productivity." },
        { type: "ordering", q: "Steps to Leave a Group:", items: ["Open group settings", "Select 'Leave Group'", "Confirm decision", "Check for confirmation email"], cor: ["Open group settings", "Select 'Leave Group'", "Confirm decision", "Check for confirmation email"], exp: "Process for removing yourself from a collaboration." },
        { type: "matching", q: "Match File Management:", pairs: [{term: "Sync", definition: "Updating local and cloud files"}, {term: "Conflict", definition: "Two people saving at once"}, {term: "Lock", definition: "Preventing edits by others"}], exp: "Challenges and solutions in shared editing." },
        { type: "ordering", q: "Sharing a Screen:", items: ["Click Share icon", "Select 'Desktop' or 'App'", "Wait for red border", "Stop sharing when done"], cor: ["Click Share icon", "Select 'Desktop' or 'App'", "Wait for red border", "Stop sharing when done"], exp: "Procedure for visual presentation." },
        { type: "matching", q: "Match Connection Quality:", pairs: [{term: "Lag", definition: "Delay in audio/video"}, {term: "Bandwidth", definition: "Data capacity of connection"}, {term: "Jitter", definition: "Unstable connection quality"}], exp: "Technical factors affecting collaboration." },
        { type: "ordering", q: "Giving Feedback on a document:", items: ["Select text", "Click 'New Comment'", "Type feedback", "Tag collaborator"], cor: ["Select text", "Click 'New Comment'", "Type feedback", "Tag collaborator"], exp: "Providing constructive digital input." },
        { type: "matching", q: "Match Mobile Collaboration:", pairs: [{term: "Push Notifications", definition: "Alerts on phone screen"}, {term: "Mobile App", definition: "Optimized tool for phone"}, {term: "Offline mode", definition: "Working without data"}], exp: "Collaborating on the go." }
    ],
    l1_lesson7: [
        { q: "What is a 'Hacker'?", a: ["A computer repair technician", "A person who tries to gain unauthorized access to computer systems", "A type of antivirus software", "A network administrator"], cor: 1, exp: "Hackers employ methods to gain unauthorized access to systems." },
        { q: "What is a 'Virus'?", a: ["A hardware malfunction", "A malicious program designed to take control of system operations or destroy data", "A type of firewall", "A secure network connection"], cor: 1, exp: "Viruses are human-made malicious programs that damage data and spread to other users." },
        { q: "How are computer viruses typically transferred?", a: ["Only by hackers typing on your keyboard", "Via email attachments, file downloads, or infected flash drives", "Through clean, secure networks", "By turning the computer on and off too fast"], cor: 1, exp: "Viruses spread through shared files, emails, and removable media." },
        { q: "What is a 'Worm'?", a: ["A physical bug in the motherboard", "A self-replicating program that consumes system and network resources automatically", "A helpful program that cleans your hard drive", "A type of password"], cor: 1, exp: "Worms spread automatically across networks by replicating themselves." },
        { q: "How does a 'Trojan' infect a computer?", a: ["It breaks the physical screen", "It hides inside seemingly harmless applications, like games, and is installed when the user runs the app", "It replicates itself across the network", "It is sent via text message only"], cor: 1, exp: "Trojans trick users into installing them by hiding inside legitimate-looking software." },
        { q: "What is the primary purpose of a Trojan?", a: ["To speed up the computer", "To allow a hacker remote access to steal info or install other malware", "To clean viruses", "To back up files"], cor: 1, exp: "Once installed, Trojans create a 'backdoor' for hackers to control the system." },
        { q: "What does 'Spyware' do?", a: ["Fixes spelling errors", "Secretly gathers personal or private information without your consent", "Displays harmless ads", "Creates a secure network"], cor: 1, exp: "Spyware monitors your activity, reads cookies, and tracks keystrokes secretly." },
        { q: "What is 'Adware'?", a: ["Software that blocks advertisements", "Software that automatically displays or downloads unwanted advertisements", "A program used to create ads", "A type of computer monitor"], cor: 1, exp: "Adware generates revenue for its creator by forcing advertisements on the user." },
        { q: "What is a 'Cookie' in computing?", a: ["A virus that deletes files", "A small text file placed on your computer by a web server to store preferences and login info", "A piece of hardware", "A type of password"], cor: 1, exp: "Cookies remember your preferences, like keeping you signed into a website." },
        { q: "What is a 'First-party cookie'?", a: ["A cookie from a hacker", "A cookie that comes from the website you are currently viewing", "A cookie that is shared with everyone", "A cookie that deletes itself immediately"], cor: 1, exp: "First-party cookies are created by the site you are visiting." },
        { q: "What is a 'Third-party cookie'?", a: ["A cookie from a site you are currently visiting", "A cookie that comes from a website other than the one you are currently viewing (often advertisers)", "A virus", "A secure password"], cor: 1, exp: "Third-party cookies often track your browsing habits across different websites." },
        { q: "What happens to a 'Session cookie'?", a: ["It lasts forever", "It is stored only in temporary memory and is erased when you close the browser", "It steals your password", "It blocks viruses"], cor: 1, exp: "Session cookies expire as soon as you close your browsing session." },
        { q: "Why are public Wi-Fi hotspots considered risky?", a: ["They are too slow", "No one can guarantee the network is virus-free or free of hackers waiting to exploit systems", "They use too much battery", "They are illegal"], cor: 1, exp: "Public networks lack the strict security measures of private, business networks." },
        { q: "What is an 'Ad-hoc' network?", a: ["A secure business network", "A direct connection between devices without using a central access point or router", "A type of internet cable", "A firewall feature"], cor: 1, exp: "Ad-hoc networks connect devices directly and are often dangerous and unsecure." },
        { q: "What is 'Social Engineering'?", a: ["Building social media networks", "Tricking users into giving out passwords or confidential information by posing as a trusted person", "Programming robots", "Fixing computer hardware"], cor: 1, exp: "Social engineering relies on human error and manipulation, not technical hacking." },
        { q: "Which is an example of Social Engineering?", a: ["A brute-force password attack", "A stranger confusing a security guard to gain physical access to a building", "A virus destroying a hard drive", "A computer crashing from overheating"], cor: 1, exp: "Manipulating human psychology to bypass security is social engineering." },
        { q: "What is 'Phishing'?", a: ["A water sport", "Trying to gather sensitive information by sending fake messages pretending to be a trustworthy entity", "Deleting old emails", "Installing a webcam"], cor: 1, exp: "Phishing emails instruct you to click a fake link to steal your login credentials." },
        { q: "How can you protect yourself from Phishing?", a: ["Click all links to see if they are real", "Avoid clicking links in unexpected emails and call the organization directly instead", "Reply to the email with your password", "Turn off your monitor"], cor: 1, exp: "Never click unexpected links; verify the request directly with the company." },
        { q: "What does 'VPN' stand for?", a: ["Very Private Network", "Visual Processing Node", "Virtual Private Network", "Video Player Network"], cor: 2, exp: "A VPN provides a secure, encrypted connection over a public network." },
        { q: "What two things must a VPN provide?", a: ["Speed and Color", "Authentication and Encryption", "Music and Video", "Ad-blocking and Browsing"], cor: 1, exp: "VPNs authenticate users and encrypt the data being transferred." },
        { q: "What is 'Encryption'?", a: ["Deleting a file permanently", "Converting data into an unreadable format that requires a decryption key to read", "Translating a website to a new language", "Compressing a file to save space"], cor: 1, exp: "Encryption protects data from being read by unauthorized spies or hackers." },
        { q: "Why do remote employees use a VPN?", a: ["To play video games", "To establish a secure, private connection to the company network from outside the premises", "To make their computer faster", "To bypass company rules"], cor: 1, exp: "A VPN safely tunnels their data through the public internet to the corporate network." },
        { q: "What is the recommended minimum length for a secure password?", a: ["4 characters", "6 characters (with 15 being the most secure)", "20 characters", "1 character"], cor: 1, exp: "A minimum of 6 is required, but 15 mixed characters is considered highly secure." },
        { q: "Which of these makes a password strong?", a: ["Using your pet's name", "Using the word 'password'", "Including a mixture of numbers, letters, symbols, and capital letters", "Using your birthdate"], cor: 2, exp: "Complexity (mixing character types) prevents hackers from guessing your password." },
        { q: "If you accidentally share your password with someone, what should you do immediately?", a: ["Nothing", "Change it immediately", "Delete your account", "Turn off your computer"], cor: 1, exp: "Changing a compromised password immediately secures the account." },
        { q: "What is the keyboard shortcut to quickly lock a Windows computer?", a: ["Ctrl + L", "Windows Key + L", "Alt + F4", "Esc"], cor: 1, exp: "Windows Key + L locks the screen to protect your data while you step away." },
        { q: "What is the browser 'Cache'?", a: ["A virus", "A folder on the hard drive that stores previously downloaded web files to speed up page loading", "A type of password", "A search engine"], cor: 1, exp: "The cache improves performance by loading local copies of previously visited sites." },
        { q: "Why might you want to clear your browsing history and cache?", a: ["To make the computer heavier", "To free up disk space, speed up the browser, and protect your privacy on a shared PC", "To change your password", "To reinstall Windows"], cor: 1, exp: "Clearing history removes your private data from public or shared machines." },
        { q: "What is 'Private Browsing' (Incognito/InPrivate)?", a: ["Browsing the web without saving history, cookies, or cache data", "Browsing with the monitor turned off", "A paid internet service", "A way to browse faster"], cor: 0, exp: "Incognito mode leaves no trace of your session on the local computer once closed." },
        { q: "What is 'Cyberbullying'?", a: ["Playing games online", "Using technology to constantly, deliberately, and maliciously hurt or harass someone", "Sending a work email", "A computer glitch"], cor: 1, exp: "Cyberbullying involves hate speech, rumors, threats, and harassment via digital tools." },
        { q: "What should you do if you are the victim of cyberbullying?", a: ["Respond with matched aggression", "Believe what the bully says", "Keep a hard copy record of the messages and report it to a trusted adult or authority", "Delete your internet"], cor: 2, exp: "Recording the incident and reporting it is the safest and most effective response." },
        { q: "What is 'Cyberstalking'?", a: ["Looking at a friend's public photo", "Repeatedly communicating or watching someone online without their permission", "Reading the news", "A type of marketing"], cor: 1, exp: "Stalking is a serious form of harassment that should be recorded and reported to police." },
        { q: "What is digital 'Blackmail'?", a: ["A type of dark email theme", "Threatening to make private information public unless compensation is paid", "Sending spam emails", "A computer virus"], cor: 1, exp: "Blackmail is extortion and a serious crime that should be reported to authorities." },
        { q: "What does 'RSI' stand for in computer health?", a: ["Random System Infection", "Repetitive Stress Injury", "Remote Server Integration", "Real System Interface"], cor: 1, exp: "RSIs occur gradually from uninterrupted, repetitive, or awkward motions (like typing)." },
        { q: "What parts of the body are most commonly affected by RSIs?", a: ["Feet and toes", "Hands, wrists, and arms", "Ears and nose", "Stomach"], cor: 1, exp: "RSIs like Carpal Tunnel Syndrome primarily affect the hands and wrists." },
        { q: "What does 'Ergonomics' refer to in computing?", a: ["The study of computer viruses", "Designing equipment and workspaces to maximize comfort and reduce physical strain", "The speed of a processor", "A type of software"], cor: 1, exp: "Ergonomic furniture and practices prevent bodily injuries during computer use." },
        { q: "How should your monitor be positioned to prevent neck strain?", a: ["Directly on the desk looking down", "Tilted up about 10 degrees, with the top of the monitor 2-3 inches above your eyes", "To the far left of your desk", "Higher than you can reach"], cor: 1, exp: "Proper monitor height and tilt prevent you from craning your neck." },
        { q: "How far away should your monitor be from your eyes to prevent eyestrain?", a: ["5 to 10 inches", "24 to 30 inches", "50 to 60 inches", "It doesn't matter"], cor: 1, exp: "An arm's length (24-30 inches) reduces eye fatigue." },
        { q: "How should your feet be positioned when sitting at a computer?", a: ["Crossed under the chair", "Dangling freely", "Flat on the floor (or on a footrest)", "Resting on the desk"], cor: 2, exp: "Feet should be flat on the floor to maintain proper posture and blood flow." },
        { q: "What is a recommended practice to avoid physical strain when using a computer?", a: ["Work for 8 hours without stopping", "Take regular breaks to rest your eyes and stretch", "Type as hard as you can", "Sit on the floor"], cor: 1, exp: "Taking regular breaks prevents both eye strain and repetitive stress injuries." },
        { q: "How should your wrists be positioned while typing?", a: ["Bent upwards sharply", "Bent downwards sharply", "Straight and flat, with arms close to your body", "Resting heavily on the desk edge"], cor: 2, exp: "Straight, neutral wrists prevent nerve compression." },
        { q: "What is a padded wrist support used for?", a: ["To type faster", "To rest your wrists ON while you are NOT typing", "To rest your wrists ON while you ARE typing", "To hold your mouse"], cor: 1, exp: "Wrist rests are for pausing; resting on them while typing restricts movement and causes strain." },
        { q: "What should you do to avoid screen glare?", a: ["Turn the monitor brightness to maximum", "Use natural light with blinds to block reflection, or use an appropriate lamp", "Wear sunglasses", "Turn off the monitor"], cor: 1, exp: "Adjusting ambient light prevents glare, which causes severe eyestrain and headaches." },
        { q: "If you feel strain while using a traditional mouse, what should you do?", a: ["Keep using it until it stops hurting", "Switch to a trackball, larger mouse, or a touch-based device", "Use your feet", "Wrap your hand in a bandage"], cor: 1, exp: "Changing the type of input device alters the physical motion, relieving the strained muscles." },
        { q: "When using a public computer, what must you ALWAYS do before leaving?", a: ["Turn off the monitor only", "Log out of all online accounts and log out of the operating system", "Leave your email open for the next person", "Delete the Windows folder"], cor: 1, exp: "Logging out ensures no one else can access your private data or accounts." },
        { q: "What is a consequence of physical strain/pain from poor ergonomics?", a: ["Faster typing speeds", "Reduction in mental alertness, low productivity, and work errors", "Better vision", "Upgraded computer software"], cor: 1, exp: "Physical pain leads directly to decreased mental performance and increased errors." },
        { q: "What is a 'Standing Desk'?", a: ["A desk that cannot be moved", "An ergonomic option that allows you to work while standing to reduce back strain from sitting", "A desk for the monitor only", "A desk that holds your printer"], cor: 1, exp: "Standing desks promote better circulation and relieve lower back pressure." },
        { q: "If you download freeware to monitor for spyware, what built-in tool does Windows already provide for this?", a: ["Windows Calculator", "Windows Defender", "Windows Media Player", "Windows Explorer"], cor: 1, exp: "Windows Defender is the built-in anti-malware and anti-spyware tool for Windows." },
        { q: "Which group of people are typical targets for Social Engineering?", a: ["Only CEOs", "Anyone with access to information about systems they do not use (receptionists, guards, standard employees)", "Only hackers", "Only IT staff"], cor: 1, exp: "Social engineers target standard employees or guards because they often want to be helpful." },
        { q: "What is a 'Pirated' software?", a: ["Software related to boats", "Illegally copied and distributed software, which often contains Trojans or malware", "Open-source software", "A free trial"], cor: 1, exp: "Pirated software is a massive security risk because hackers hide malware inside the illegal files." },
        { q: "Why might a website use 'Cookies' in a beneficial way?", a: ["To infect your computer", "To remember your site preferences or keep items in a shopping cart", "To delete your files", "To spy on your webcam"], cor: 1, exp: "Not all cookies are bad; many improve user experience by remembering session data." },
        { q: "What does 'Decryption' mean?", a: ["Deleting a file", "Converting encrypted (unreadable) data back into a readable format using a key", "Hiding a file", "Sending an email"], cor: 1, exp: "Decryption is the reverse process of encryption." },
        { q: "Where should you position physical documents you are typing from?", a: ["Flat on the desk next to the keyboard", "In a document holder in line with the monitor", "On your lap", "Behind the monitor"], cor: 1, exp: "A document holder at eye level prevents neck strain from looking down repeatedly." },
        { q: "True or False: A virus can erase the contents of an entire hard disk.", a: ["True", "False"], cor: 0, exp: "True. Malicious viruses can be programmed to completely wipe data from a drive." },
        { q: "What is 'Authentication' in network security?", a: ["Confirming the identity of a user or computer system (e.g., using a password)", "Scrambling data", "Blocking ads", "A type of virus"], cor: 0, exp: "Authentication proves you are who you say you are." },
        { q: "Why should you avoid using names of people close to you as a password?", a: ["It is illegal", "They are too easy for hackers or acquaintances to guess", "It breaks the computer", "They are too long"], cor: 1, exp: "Personal names, birthdates, and addresses are the first things a hacker will guess." },
        { q: "If you work on a laptop on your lap, what is recommended?", a: ["Slouch down to see the screen", "Use a sturdy tray or lap desk to support it and maintain posture", "Put it directly on your skin", "Type with one hand"], cor: 1, exp: "A tray provides a stable, flat surface to help maintain ergonomic posture." },
        { q: "Which tool automatically checks your history and allows you to clear 'Cookies and other site data'?", a: ["Task Manager", "The 'Clear Browsing Data' menu in your web browser settings", "File Explorer", "Command Prompt"], cor: 1, exp: "All major browsers have a 'Clear Browsing Data' menu to manage history and cookies." },
        { q: "What is a 'Keylogger'?", a: ["A type of keyboard", "A form of spyware that records every keystroke you make to steal passwords", "A person who types fast", "A music program"], cor: 1, exp: "Keyloggers are malicious programs designed to steal login credentials as you type them." },
        { q: "If you receive an email that looks like it's from your bank asking you to 'Click here to update your password,' this is likely an example of:", a: ["A helpful reminder", "Phishing", "Adware", "A VPN"], cor: 1, exp: "Banks will never email you a link demanding you update your password." },
        { q: "Why must domain network users (like in a school or business) change their passwords at regular intervals?", a: ["To test the keyboard", "To prevent unauthorized access if an old password was compromised", "To delete old files", "To confuse the user"], cor: 1, exp: "Regularly changing passwords is a standard IT policy to mitigate security breaches." },
        { q: "What is 'Hate Speech' in the context of cyberbullying?", a: ["Complaining about a movie", "Abusive language expressing prejudice against a particular group", "Sending spam emails", "Using a virus"], cor: 1, exp: "Hate speech is a severe form of cyberbullying and harassment." },
        { q: "What does 'Telecommuting' mean?", a: ["Watching TV", "Working from a remote location (like home) using the internet to connect to the office", "Driving to work", "Using a public computer"], cor: 1, exp: "Telecommuters rely heavily on VPNs to work securely from remote locations." },
        { q: "What is a 'VPN Client'?", a: ["A person buying a VPN", "The software installed on a remote device that opens the connection to the VPN server", "A type of virus", "The company server"], cor: 1, exp: "The client is the app on your computer that creates the secure tunnel." },
        { q: "If you are setting up a home workspace, how should your forearms be positioned?", a: ["Reaching up high", "Parallel to the floor", "Pointing down at the floor", "Crossed over your chest"], cor: 1, exp: "Forearms parallel to the floor prevent strain on the elbows and shoulders." },
        { q: "What is the purpose of 'Incognito' or 'InPrivate' mode?", a: ["To hide from the government", "To surf the web without the browser saving your history or cookies locally", "To make internet free", "To bypass a firewall"], cor: 1, exp: "Private browsing leaves no local footprint on the computer you are using." },
        { q: "What should you do if an unfamiliar website asks you to download a 'plugin' to view a video?", a: ["Download it immediately", "Decline it, as it could be a Trojan or Malware", "Send it to a friend", "Turn off your antivirus"], cor: 1, exp: "Fake plugins are a common method for delivering Trojans and spyware." },
        { q: "What does 'Ctrl + Alt + Delete' do on a domain network?", a: ["Erases the hard drive", "Provides a secure menu to lock the PC, switch users, or change a password", "Restarts the router", "Clears the cache"], cor: 1, exp: "Ctrl+Alt+Del accesses the Windows Security screen." },
        { q: "True or False: Cyberbullying can have serious mental health consequences for the victim.", a: ["True", "False"], cor: 0, exp: "True. Cyberbullying is incredibly serious and can lead to severe mental illness." },
        { q: "How can Adware affect your computer's performance?", a: ["It makes the screen brighter", "It consumes memory resources and network bandwidth, slowing the system down", "It deletes your files", "It upgrades your OS"], cor: 1, exp: "Adware and spyware run in the background, consuming valuable system resources." },
        { q: "What is a 'Network Administrator'?", a: ["A type of router", "An IT professional responsible for securing and maintaining a company/school network", "A hacker", "A website designer"], cor: 1, exp: "Administrators manage firewalls, antivirus policies, and VPN access." },
        { q: "What does 'unauthorized access' mean?", a: ["Logging in with your own password", "Gaining entry to a computer system or network without permission", "Forgetting your password", "Using a public computer"], cor: 1, exp: "Hackers seek unauthorized access to steal or destroy data." },
        { q: "What does a 'Self-Replicating' program do?", a: ["It deletes itself", "It automatically makes copies of itself to spread to other computers", "It fixes the system", "It creates backups"], cor: 1, exp: "Worms are self-replicating malware." },
        { q: "If you feel threatened by online stalking, what should you do?", a: ["Nothing", "Record the incidents and report them to the police", "Delete the internet", "Threaten them back"], cor: 1, exp: "Stalking is a crime; record evidence and involve law enforcement." },
        { q: "What does an 'Ergonomic Keyboard' do?", a: ["Types for you", "Allows your hands to rest in a more natural, angled position while typing", "Glows in the dark", "Prevents viruses"], cor: 1, exp: "Ergonomic keyboards are split or angled to prevent wrist strain." },
        { type: "matching", q: "Match Security Threats:", pairs: [{term: "Virus", definition: "Damages or destroys data"}, {term: "Worm", definition: "Spreads across networks automatically"}, {term: "Trojan", definition: "Hides inside fake apps"}], exp: "Viruses damage; worms spread; Trojans trick." },
        { type: "ordering", q: "Ergonomics (Bottom to Top):", items: ["Feet flat on floor", "Thighs parallel to floor", "Wrists straight", "Monitor at eye level"], cor: ["Feet flat on floor", "Thighs parallel to floor", "Wrists straight", "Monitor at eye level"], exp: "Ergonomics starts with body support from the ground up." },
        { type: "matching", q: "Match Defense Tools:", pairs: [{term: "Firewall", definition: "Blocks unauthorized network access"}, {term: "Antivirus", definition: "Scans for malicious code"}, {term: "VPN", definition: "Encrypts your internet connection"}], exp: "Firewalls are gatekeepers; Antivirus is an internal scanner; VPNs secure the path." },
        { type: "ordering", q: "Creating a Secure Password:", items: ["Choose a long phrase", "Add numbers", "Add special characters", "Avoid personal info"], cor: ["Choose a long phrase", "Add numbers", "Add special characters", "Avoid personal info"], exp: "Method for building high-entropy passwords." },
        { type: "matching", q: "Match Health Issues:", pairs: [{term: "Eyestrain", definition: "Caused by blue light/glare"}, {term: "RSI", definition: "Caused by repetitive motion"}, {term: "Sedentary risk", definition: "Caused by sitting too long"}], exp: "Physical risks of excessive technology use." },
        { type: "ordering", q: "Steps to Secure a Device:", items: ["Apply OS updates", "Enable Lock Screen", "Install Antivirus", "Set up Remote Wipe"], cor: ["Apply OS updates", "Enable Lock Screen", "Install Antivirus", "Set up Remote Wipe"], exp: "Layered defense strategy." },
        { type: "matching", q: "Match Social Engineering:", pairs: [{term: "Phishing", definition: "Fake emails for info"}, {term: "Smishing", definition: "Fake text messages"}, {term: "Vishing", definition: "Fake phone calls"}], exp: "Psychological manipulation to steal data." },
        { type: "ordering", q: "Reacting to a Breach:", items: ["Change passwords", "Notify banks", "Check credit report", "Enable 2FA"], cor: ["Change passwords", "Notify banks", "Check credit report", "Enable 2FA"], exp: "Immediate recovery steps." },
        { type: "matching", q: "Match Physical Security:", pairs: [{term: "Cable Lock", definition: "Secures laptop to desk"}, {term: "Biometrics", definition: "Uses body for access"}, {term: "Privacy Screen", definition: "Blocks side-viewing of monitor"}], exp: "Protecting the physical hardware." },
        { type: "ordering", q: "Setting up 2FA:", items: ["Enter password", "Select 2FA option", "Scan QR code", "Enter backup code"], cor: ["Enter password", "Select 2FA option", "Scan QR code", "Enter backup code"], exp: "Process for adding an extra security layer." },
        { type: "matching", q: "Match Data Privacy Laws:", pairs: [{term: "GDPR", definition: "European data protection"}, {term: "COPPA", definition: "Children's online privacy"}, {term: "FERPA", definition: "Student record privacy"}], exp: "Legal frameworks for data safety." },
        { type: "ordering", q: "Clearing Browser Data:", items: ["Open Settings", "Select 'Privacy & Security'", "Click 'Clear browsing data'", "Select 'All Time'"], cor: ["Open Settings", "Select 'Privacy & Security'", "Click 'Clear browsing data'", "Select 'All Time'"], exp: "Standard privacy maintenance." },
        { type: "matching", q: "Match Secure Web Signs:", pairs: [{term: "HTTPS", definition: "Secure encrypted protocol"}, {term: "Padlock Icon", definition: "Indicates active encryption"}, {term: "Warning Page", definition: "Browser alert for bad sites"}], exp: "Visual cues for safe browsing." },
        { type: "ordering", q: "Disposing of a Device:", items: ["Back up data", "Sign out of accounts", "Factory reset", "Recycle at certified center"], cor: ["Back up data", "Sign out of accounts", "Factory reset", "Recycle at certified center"], exp: "Safe way to retire old technology." },
        { type: "matching", q: "Match Backup Strategy:", pairs: [{term: "Full Backup", definition: "Copies every file"}, {term: "Incremental", definition: "Only copies new changes"}, {term: "Off-site", definition: "Stored in a different building"}], exp: "Ensuring data can be recovered after failure." }
    ],
    //----- Beginnning of Level Two -----
    l2_lesson8: [
        // --- GLOBAL & PROFILE SETTINGS / WINDOWS SETTINGS APP ---
        {
            q: "You need to change a setting on a Windows computer. Which type of setting generally relates directly to hardware and affects every user account on the system?",
            a: ["Profile-specific settings", "Global settings", "Application-specific preferences", "Temporary container configurations"],
            cor: 1,
            exp: "According to the guide, global settings affect all user accounts on the system and are generally related to hardware."
        },
        {
            q: "A user wants to change their personal background image and lock screen colors. How is this type of setting classified?",
            a: ["Global hardware setting", "System-wide override", "Profile-specific setting", "Kernel configuration"],
            cor: 2,
            exp: "Profile-specific settings are tied to an individual user's profile, such as personal backgrounds or lock screens, rather than affecting the entire system hardware."
        },
        {
            q: "What is the official step-by-step mouse navigation sequence required to open the primary Windows Settings app?",
            a: ["Click Start, and then click Settings", "Right-click Taskbar, and click Properties", "Open File Explorer, and select Network Settings", "Click Start, select Control Panel, and choose Registry"],
            cor: 0,
            exp: "To configure commonly-accessed options, you click the Start button and then select the Settings icon."
        },
        {
            q: "When navigating the main interface of the Windows Settings application, which method is available to quickly locate an obscure setting without browsing categories?",
            a: ["Pressing F5 to refresh the navigation panel", "Using the provided 'Find a setting' search box", "Opening the system Command Prompt window", "Double-clicking on the window title bar"],
            cor: 1,
            exp: "The Windows Settings app allows you to either browse designated categories or utilize the 'Find a setting' search box directly."
        },
        {
            type: "matching",
            q: "Match each administrative setting type to its core system behavioral characteristic.",
            pairs: [
                { term: "Global Settings", definition: "Affects all user accounts on the system and generally relates to hardware components." },
                { term: "Profile-Specific Settings", definition: "Tied directly to an individual user account and does not modify other environments." }
            ]
        },
        // --- BROWSER PREFERENCES AND SETTINGS ---
        {
            q: "Which specific utility should be deployed to defend a Local Area Network (LAN) from unauthorized, unwanted incoming internet traffic?",
            a: ["Antivirus software", "Network Firewall", "Local Web Browser Extensions", "Operating System AutoCorrect"],
            cor: 1,
            exp: "Firewalls protect a Local Area Network (LAN) from unwanted network traffic originating from public untrusted networks."
        },
        {
            q: "Your system keeps catching hidden spyware, trojans, and worms. Which tool is primarily designed to actively run background scans and protect the local OS file system from these specific threats?",
            a: ["A network firewall rule", "Antivirus software", "An AutoFill form manager", "A browser default search filter"],
            cor: 1,
            exp: "Antivirus software protects the local operating system from threats like viruses, Trojans, and spyware."
        },
        {
            q: "You click the 'Customize and Control' three-dot icon in Google Chrome. Which designated menu category must you choose to alter the browser's default search engine or autofill behaviors?",
            a: ["History", "Downloads", "Settings", "More Tools"],
            cor: 2,
            exp: "To customize web browser preferences such as search engines, autofill, or default behaviors, you must choose 'Settings' from the control menu."
        },
        {
            q: "You want to clear your saved address entries and automated payment forms from a browser session. Under which specific settings sub-panel are these data completion preferences grouped?",
            a: ["Appearance settings", "Default browser configurations", "On startup configurations", "Autofill settings"],
            cor: 3,
            exp: "Options like Autofill handle the saving and automatic entering of form information such as login credentials, addresses, and credit cards."
        },
        {
            q: "True or False: Web browser settings look identical, share the exact same names, and are located in the same structural configurations across all available web browsers.",
            a: ["True", "False"],
            cor: 1,
            exp: "Customized browser settings vary in exact location, layout, and nomenclature depending on the specific web browser being utilized."
        },
        // --- DIGITAL CALENDAR CONCEPTS ---
        {
            q: "You need to block out an hour on your calendar for an individual task. No other personnel or shared equipment are involved. What type of calendar entry should be created?",
            a: ["A meeting request", "An appointment", "An all-day event", "A collaborative task"],
            cor: 1,
            exp: "An appointment is a personal calendar activity that usually only involves you and blocks out specific time slots on your schedule."
        },
        {
            q: "You are planning a collaborative project overview session where several team members are invited and a physical conference room must be reserved. What type of calendar entry is required?",
            a: ["A basic appointment", "A meeting", "An all-day event", "A digital task entry"],
            cor: 1,
            exp: "A meeting is an appointment to which external participants are explicitly invited and may involve reserving structural resources like rooms or AV gear."
        },
        {
            q: "You are setting up a reminder on your calendar for a national holiday that spans the entire day. How does this entry affect your timeline visibility?",
            a: ["It blocks out your calendar as 'Busy' from 9:00 AM to 5:00 PM", "It does not block out specific hourly blocks of time in your calendar", "It automatically deletes your other overlapping appointments", "It locks out your calendar to an 'Out of office' status permanently"],
            cor: 1,
            exp: "The guide explicitly notes that events lasting an entire day or longer do not block out discrete operational time slots in your calendar."
        },
        {
            type: "matching",
            q: "Match each digital calendar entry type to its exact operational behavior.",
            pairs: [
                { term: "Appointment", definition: "Involves only you and blocks out active time slots in your daily calendar matrix." },
                { term: "Meeting", definition: "Invites external colleagues and frequently manages shared physical rooms or equipment." },
                { term: "All-Day Event", definition: "Spans a full day duration or longer and does not block out discrete timeline hours." }
            ]
        },
        {
            q: "When colleagues look at your calendar, they see colored bars over certain hours. What do these custom indicators communicate to them?",
            a: ["Your network bandwidth speeds", "Your specific user profile access privileges", "Your availability status (free, tentative, busy, out of office)", "The physical proximity of your device"],
            cor: 2,
            exp: "Colored bars represent a user's chosen availability configurations, showing whether they are free, tentative, busy, or out of the office."
        },
        // --- CALENDAR MANAGEMENT & RECURRENCE ---
        {
            q: "When working inside a webmail interface like Gmail, which icon must you select first to open the quick launcher menu containing the Google Calendar link?",
            a: ["The Settings Gear icon", "The Search Bar option", "The Google Apps grid icon (9 dots)", "The Create button"],
            cor: 2,
            exp: "To open the calendar directly from Gmail, you select the Google Apps icon grid at the top right and then select the Calendar app."
        },
        {
            q: "You manage a standing weekly team sync every Monday morning. Instead of creating a new calendar slot manually every single week, which configuration option should you adjust?",
            a: ["Change visibility to public", "Click the 'Does not repeat' button to configure a recurring appointment", "Convert the appointment into a custom Task", "Modify the default time zone parameters"],
            cor: 1,
            exp: "Clicking the 'Does not repeat' button opens options to configure recurring patterns or set custom intervals for ongoing schedules."
        },
        {
            q: "You need to make your work calendar available to the public internet so external clients can view your basic schedule via a web page or URL. Which configuration is required?",
            a: ["Exporting your source code via a local script", "Setting your calendar visibility settings to Public", "Converting all appointments into local tasks", "Subscribing to an external interest profile"],
            cor: 1,
            exp: "Choosing to make a calendar public saves the calendar structure to the internet, giving you an accessible URL or code to embed in a web page."
        },
        {
            q: "A coworker shares their calendar with you via email. What action must you take to display their schedule alongside your own inside Google Calendar?",
            a: ["Copy and paste their user source code into your settings", "Click the 'View Your Calendar' link directly inside the email notification", "Re-route your local network firewall configurations", "Delete your existing personal calendar data"],
            cor: 1,
            exp: "Clicking the 'View Your Calendar' link within the confirmation email automatically updates your interface, adding their schedule to your account."
        },
        {
            q: "Once a colleague's calendar is added to your account layout, how can you quickly identify which appointments belong to them versus your own?",
            a: ["Their entries flash continuously on your display interface", "Their appointments appear in a distinctly different color than yours", "Their appointments can only be seen when you log out of your system profile", "Their appointments are automatically listed inside your local task manager"],
            cor: 1,
            exp: "Shared external calendars and appointments are rendered using distinct colors to help you easily differentiate between multiple individuals' schedules."
        },
        // --- SUBSCRIPTIONS & TASKS ---
        {
            q: "You have too many overlapping schedules on your screen because a colleague's shared calendar is currently displayed. How can you hide their schedule temporarily without completely deleting it?",
            a: ["Clear your local browser autofill entries", "Uncheck the checkbox next to that person's name in the calendar sidebar", "Toggle your browser to private incognito mode", "Change your Windows settings profile to global execution"],
            cor: 1,
            exp: "To turn off the visible display of another user's shared calendar, you simply uncheck the checkbox designated next to their name."
        },
        {
            q: "You want to follow an official corporate product launch timeline hosted on an external website. Which feature allows you to link that live internet schedule into your personal setup?",
            a: ["Creating an offline document backup", "Subscribing to a calendar via 'Browse calendars of interest'", "Writing a macro in Visual Basic for Applications", "Configuring an Advanced Privacy Firewall layer"],
            cor: 1,
            exp: "By expanding 'Other calendars' and selecting 'Browse calendars of interest', you can subscribe directly to public schedules hosted across the web."
        },
        {
            q: "What is the primary operational distinction between a calendar Event and a calendar Task?",
            a: ["Tasks are only meant for global hardware items", "Tasks act as action reminders that include an explicit deadline or completion status", "Events require local source code modifications to run", "Tasks are automatically broadcasted publicly over a local network connection"],
            cor: 1,
            exp: "Tasks are distinct items set up as explicit action reminders for specific items you must perform with a strict tracking deadline."
        },
        {
            q: "You have created a new item in your Task manager. Which visual control interface element must you click to open advanced options, add sub-steps, or input custom descriptive notes?",
            a: ["The Settings Gear icon", "The Search engine dropdown field", "The Pencil icon located to the right of the task text", "The Start menu icon button"],
            cor: 2,
            exp: "Clicking the edit pencil icon at the right of a task line expands options to add specific operational parameters and notes."
        },
        // --- AUTOMATED METHODS ---
        {
            q: "What term describes a set of background computer instructions that are written to execute automatically when a specific user action is initiated?",
            a: ["A display port", "An internet firewall ruleset", "A script", "A hardware slider control"],
            cor: 2,
            exp: "Actions on a computer often occur using scripts, which are defined sets of operational instructions that run automatically when an action triggers them."
        },
        {
            q: "Software developers write software instructions in a human-readable format. What is the technical term for this uncompiled, editable text block?",
            a: ["Macro blocks", "Source code", "Hardware settings", "Synchronized cloud backups"],
            cor: 1,
            exp: "Developers use programming languages to construct instructions and calculations in a human-readable form known specifically as source code."
        },
        {
            q: "You regularly perform the exact same repetitive formatting sequence on spreadsheet files. Which feature allows you to record these steps once and replay them with a single command?",
            a: ["An AutoFill plugin configuration", "A Macro execution utility", "A profile-specific hardware override", "An Infrastructure service model"],
            cor: 1,
            exp: "A macro refers to a recorded group of actions or commands that can be executed instantly with a single shortcut command to handle repetitive tasks."
        },
        {
            q: "Which specialized programming language serves as the underlying engine to build, edit, and run advanced automated macros inside Microsoft 365 core applications?",
            a: ["HyperText Markup Language (HTML)", "JavaScript Engine Core v8", "Visual Basic for Applications (VBA)", "Structured Query Language (SQL)"],
            cor: 2,
            exp: "Visual Basic for Applications (VBA) provides the foundational programming language components that drive macro recording and execution inside Microsoft 365 apps."
        },
        // --- CLOUD COMPUTING CONCEPTS ---
        {
            q: "In standard cloud computing terminology, what is the role of a 'Client' system versus a 'Server' system?",
            a: ["Clients provide physical laser printing, while servers manage system brightness sliders", "Clients request services and access resources, while servers supply services and grant permissions", "Clients write the underlying source code, while servers record local application macros", "Clients handle global hardware modifications, while servers process profile-specific settings"],
            cor: 1,
            exp: "Client systems request services and access resources over a network connection, whereas server systems supply those services and manage access permissions."
        },
        {
            q: "Your enterprise chooses to pay a monthly fee to access web-based email clients hosted on external servers rather than hosting local email software on-premise. What is this architecture called?",
            a: ["Local script execution", "A hosted service infrastructure", "A profile-specific hardware driver", "An AutoCorrect algorithm configuration"],
            cor: 1,
            exp: "A hosted service is provided by external servers located outside your immediate local network, letting companies pay subscription fees to run modern utilities without server hardware overhead."
        },
        {
            type: "matching",
            q: "Match each primary cloud computing service model to its correct operational definition.",
            pairs: [
                { term: "Software as a Service (SaaS)", definition: "The most common model; applications are completely hosted by a provider and accessed over a network connection." },
                { term: "Infrastructure as a Service (IaaS)", definition: "Provides virtualized computing resources, memory, and raw server hardware leased as on-demand services." },
                { term: "Platform as a Service (PaaS)", definition: "An extension providing developers configured system environments to build, run, and test applications." }
            ]
        },
        {
            q: "A developer needs an environment with specific pre-configured operating systems and server software stacks to build a new software application. Which cloud layer model fits this requirement best?",
            a: ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)", "Local Hardware Adjustment Layers"],
            cor: 1,
            exp: "Platform as a Service (PaaS) provides developers with software environments and underlying configurations required to construct new applications."
        },
        // --- CLOUD BENEFITS & BROWSER COMPLETION TOOLS ---
        {
            q: "How does cloud computing help an organization significantly reduce its internal hardware procurement and upkeep costs?",
            a: ["It automatically increases physical processor speeds measured in Gigahertz", "Older or slower hardware can remain highly productive since data processing occurs remotely", "It eliminates the need for any local network video connections or monitors", "It forces all local operating systems to drop profile-specific configuration tabs"],
            cor: 1,
            exp: "Cloud computing reduces hardware costs by letting companies distribute older or slower hardware to workforces while keeping them productive due to minimal local storage and execution demands."
        },
        {
            q: "You lose your internet connection mid-flight but can still read and edit your cloud files because your machine syncs an identical copy to your local storage drive automatically. Which benefit does this describe?",
            a: ["Built-in server hardware backup", "Ultra-high server proctor security layers", "Local access to synchronized user files", "Automated platform microcode compilation"],
            cor: 2,
            exp: "Most hosted cloud services maintain synchronized local copies of your files to ensure seamless document access even when an active internet connection drops."
        },
        {
            q: "What browser feature is explicitly designed to speed up user form entries by automatically completing whole sentences as you type?",
            a: ["AutoCorrect utility layers", "AutoComplete browser tools", "AutoFill payment systems", "Hardware brightness regulators"],
            cor: 1,
            exp: "The AutoComplete browser feature can automatically complete a sentence as you type, increasing your speed by learning text preferences over time."
        },
        {
            q: "Where must a developer navigate inside Microsoft Edge to modify form memory, password savers, and personal data entries?",
            a: ["Start Menu -> System Settings -> Sound Matrix Panel", "Advanced settings panel within the Privacy and Services section", "Google Apps icon matrix dropdown selection grid", "Printers & scanners interface management wizard"],
            cor: 1,
            exp: "In Microsoft Edge, automated form text completion parameters are accessed via the Advanced settings panel within the Privacy and Services section."
        },
        {
            q: "Which tool is commonly integrated directly into smartphones to predict spelling and swap out mistyped characters on the fly?",
            a: ["AutoFill database fields", "AutoComplete network systems", "AutoCorrect text prediction engines", "Macro tracking script panels"],
            cor: 2,
            exp: "The AutoCorrect feature automatically fixes words by predicting typing text, a tool commonly integrated into mobile smartphone layouts."
        },
        // --- HARDWARE ADJUSTMENTS (MONITOR & SOUND) ---
        {
            q: "You need to increase the display contrast or change your display screen illumination level. What path takes you to these settings?",
            a: ["Start button -> Settings -> System -> Display", "Gmail -> Google apps icon -> Other calendars menu option", "Chrome -> Settings -> Autofill forms sub-tab", "Start button -> Control Panel -> VBA Macros window"],
            cor: 0,
            exp: "Hardware component parameters like monitors, displays, and audio controllers are accessed by clicking Start -> Settings -> System."
        },
        {
            q: "What does the term 'Color' specifically describe when adjusting your system monitor parameters through the built-in Windows display slider?",
            a: ["The physical pixel dimensions of the monitor case", "The contrast or intensity level of colors rendered on-screen", "The conversion rate of digital video ports to analog streams", "The total count of connected external video out display adapters"],
            cor: 1,
            exp: "The text defines monitor 'color' adjustments as referring to contrast, which controls how intense colors look on your display screen."
        },
        {
            q: "You are operating your laptop in a dark workspace. Which specific display option should you toggle to make the panel less bright and reduce eye strain?",
            a: ["Set application default print layout to landscape", "Enable the integrated Night light option", "Re-route system firewalls to public networks", "Increase the processor speed parameter to maximum"],
            cor: 1,
            exp: "The Night light feature changes screen illumination levels to make displays less bright when using computing devices in dark environments."
        },
        // --- CORE PRINTER CONCEPTS & SETTINGS ---
        {
            q: "A home office user needs an inexpensive printer that outputs high-quality text documents and graphics at a modest speed of several pages per minute. Which option is best?",
            a: ["An industrial network laser printer", "An inkjet-type printer", "A high-speed wide-format line plotter", "A standalone thermal micro-scanner"],
            cor: 1,
            exp: "Inkjet printers are lower in cost, offer good print quality, and output several pages per minute, making them ideal for simple home setups."
        },
        {
            q: "An office team requires a heavy-duty, shared printing setup with multiple trays capable of feeding various paper dimensions for booklets and flow charts. Which option is best?",
            a: ["A basic personal inkjet printer", "A network-connected laser printer", "A compact desktop photo printer", "An analog plot-cabling machine"],
            cor: 1,
            exp: "Laser printers handle large print volumes for multiple network users and come with multiple paper trays for varying dimensions like booklets or charts."
        },
        {
            q: "What is the standard hardware interface cable used to plug a new local desktop printer directly into a personal computer system?",
            a: ["An HDMI display connector", "A standard USB cable", "A Cat 6a twisted ethernet cable", "A VGA analog video port adapter"],
            cor: 1,
            exp: "To connect a new physical printer directly to your personal computer system, you use a standard Universal Serial Bus (USB) cable."
        },
        {
            q: "How does modern Windows OS handle driver setup when a new, standard peripheral printer is plugged into an active USB slot?",
            a: ["It blocks system operation until a script is manually written in VBA", "It comes pre-loaded with hundreds of drivers and automatically loads them upon detection", "It converts the local profile structure into an Infrastructure service model", "It routes user visibility into an open public cloud container structure"],
            cor: 1,
            exp: "Windows comes pre-loaded with hundreds of device drivers and automatically loads them once a new printer connection is detected."
        },
        {
            type: "ordering",
            q: "Order the steps chronologically to change your default system printer using the Windows Settings application layer.",
            items: [
                "Open the 'Printers & scanners' option located within system settings.",
                "Select your preferred target printer from the active device list.",
                "Click the 'Manage' button option.",
                "Click the 'Set as default' command link option."
            ],
            cor: [0, 1, 2, 3]
        },
        // --- PROCESSORS & PORTS ---
        {
            q: "What is the technical name for the silicon microprocessing chip that handles all calculations and logical system instructions within a computer?",
            a: ["Graphics Processing Unit (GPU)", "Central Processing Unit (CPU)", "Visual Basic Application (VBA)", "Infrastructure as a Service (IaaS)"],
            cor: 1,
            exp: "The Central Processing Unit (CPU), or processor, is the silicon chip that performs the calculations and logical operations inside a computer."
        },
        {
            q: "Processor performance and clock oscillation cycle frequencies are calculated using which base scientific unit of measurement?",
            a: ["Bytes per second (Bps)", "Hertz (Hz)", "Feet or Meters (ft/m)", "Total Layer Pools"],
            cor: 1,
            exp: "Processor speeds are measured using units called hertz, which represent cycles or oscillations per second as current passes through the chip."
        },
        {
            type: "matching",
            q: "Match each processor frequency abbreviation metric to its exact numeric multiplier value.",
            pairs: [
                { term: "Kilohertz (KHz)", definition: "One thousand (1,000) cycles per second." },
                { term: "Megahertz (MHz)", definition: "One million (1,000,000) cycles per second." },
                { term: "Gigahertz (GHz)", definition: "One billion (1,000,000,000) cycles per second." },
                { term: "Terahertz (THz)", definition: "One trillion (1,000,000,000,000) cycles per second." }
            ]
        },
        {
            q: "A user is buying a new laptop and notices the internal processor clock metrics fall within the 2 GHz to 3 GHz range. How is this standard classified?",
            a: ["It indicates an outdated server model stack from early 1990", "It represents a standard operational speed range for most modern laptop systems", "It means the machine requires external liquid cooling processing configurations", "It proves the system can only support basic analog VGA ports without data translation"],
            cor: 1,
            exp: "The text states that while desktop machines hover around 3 to 4 GHz, most standard laptops include processors in the 2 GHz to 3 GHz speed range."
        },
        {
            q: "Which specific processor runs alongside the main CPU to accelerate the processing of complex matrix data needed to render videos, movies, and video games?",
            a: ["Visual Basic Application Script Engine", "Graphics Processing Unit (GPU)", "Network Laser Printer Interface Driver", "AutoComplete System Processing Layer"],
            cor: 1,
            exp: "The Graphics Processing Unit (GPU) is a specialized processor programmed to handle rich graphic computations, videos, and game data alongside the CPU."
        },
        {
            q: "You are setting up an external display layout. Which group lists standard video ports available on computer systems?",
            a: ["SaaS, IaaS, PaaS", "VGA, DVI, HDMI", "Cat 5, Cat 5e, Cat 6", "KHz, MHz, GHz"],
            cor: 1,
            exp: "Standard computer video out configurations include Video Graphics Adapter (VGA), Digital Video Interface (DVI), and High-Definition Multimedia Interface (HDMI)."
        },
        {
            q: "You need to plug an HDMI monitor cable into a computer that only has an older DVI slot. What accessory must be used to bridge this physical connection?",
            a: ["An automated VBA execution macro script", "A signal conversion port adapter", "A local network firewall routing proxy", "A Category 5e internet patch cable"],
            cor: 1,
            exp: "If a monitor's input formats do not match a computer's video output ports, you must use a port adapter to convert signals between the formats."
        },
        {
            q: "Which device class generally excludes built-in external physical video out display ports, separating it from standard laptops or tablets?",
            a: ["Modern Desktop Gaming Rigs", "Most Smartphones", "All-In-One Office Systems", "Enterprise Presentation Projectors"],
            cor: 1,
            exp: "Laptops and tablets usually include video out ports to extend displays, but most standard cellular smartphones do not carry these ports."
        },
        // --- NETWORKING & CABLING STANDARDS ---
        {
            type: "matching",
            q: "Match each standard Ethernet protocol type to its exact maximum data transmission speed threshold.",
            pairs: [
                { term: "10Base-T Ethernet", definition: "Transmits network data at a maximum speed of 10Mbps." },
                { term: "Fast Ethernet", definition: "Transmits network data at a maximum speed of 100Mbps." },
                { term: "Gigabit Ethernet", definition: "Transmits network data at a maximum speed of 1Gbps." }
            ]
        },
        {
            q: "Why do enterprise networks prefer wired Ethernet connections over wireless Wi-Fi setups for transmitting highly sensitive client documents?",
            a: ["Wired setups run completely inside system macro structures", "Wired networks are faster, more stable, and ideal for high-volume, secure data transmission", "Wired connection speeds are measured using Terahertz cycles", "Wired networks eliminate the need to configure any local operating system user profiles"],
            cor: 1,
            exp: "Ethernet networks are more stable and secure than wireless options, making them ideal for transmitting sensitive information and running high-volume streams."
        },
        {
            q: "What is the standard maximum recommended physical distance limit for standard Ethernet copper wire cable installations before structural signal loss happens?",
            a: ["50 feet (15 meters)", "300 feet (100 meters)", "1,200 feet (400 meters)", "3,000 feet (1,000 meters)"],
            cor: 1,
            exp: "Standard numerical twisted-pair Ethernet cables are manufactured to reliably transmit signals over a maximum cable length of roughly 300 feet (100 meters)."
        },
        {
            type: "ordering",
            q: "Arrange the physical Ethernet copper cable category standards sequentially from lowest data transfer capability up to the highest speed standard.",
            items: [
                "Category 5 (Cat 5) - Caps out at 10Mbps and 100Mbps bandwidth limits.",
                "Category 5e (Cat 5e) - Enhances speeds up to 1Gbps capabilities safely.",
                "Category 6 (Cat 6) - Expands transmission throughput boundaries up to 10Gbps bounds."
            ],
            cor: [0, 1, 2]
        },
        {
            q: "What performance enhancement sets Category 6a (Cat 6a) cabling apart from standard Category 6 (Cat 6) installations?",
            a: ["It changes the local system sound properties automatically", "It is designed with specialized physical insulation to minimize signal interference", "It extends the length limit past 5,000 feet without a switch", "It converts data parameters directly into SaaS cloud service blocks"],
            cor: 1,
            exp: "Category 6a features identical maximum speeds to Cat 6 (10Gbps) but is engineered with tighter shielding to reduce data signal interference."
        }
    ]
};

// ==========================================
// CORE ENGINE CONFIGURATION WRAPPER
// ==========================================
const CONFIG = {
    TOTAL_EXAM_QUESTIONS: 50,
    EXAM_TIME_SECONDS: 3000, // 50 Minutes
    WARNING_TIME: 300,        // 5 Minutes (Timer turns red)
    PASS_SCORE: 70,           // Passing threshold %
    STORAGE_KEY: 'IC3_Simulator_State'
};

// ==========================================
// CENTRAL CACHED CONTROLS DICTIONARY (DOM)
// ==========================================
const UI = {
    setupScreen: document.getElementById('setup-screen'),
    examContainer: document.getElementById('exam-container'),
    reviewScreen: document.getElementById('review-screen'),
    resultScreen: document.getElementById('result-screen'),
    moduleSelect: document.getElementById('module-select'),
    loadingOverlay: document.getElementById('loading-overlay'),
    qText: document.getElementById('q-text'),
    optionsContainer: document.getElementById('options-container'),
    interactiveContainer: document.getElementById('interactive-container'),
    feedback: document.getElementById('feedback'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progress-bar'),
    progressFill: document.getElementById('progress-fill'),
    submitBtn: document.getElementById('submit-btn'),
    nextBtn: document.getElementById('next-btn'),
    flagBtn: document.getElementById('flag-btn'),
    navGrid: document.getElementById('q-grid'),
    reviewList: document.getElementById('review-list'),
    finalScore: document.getElementById('final-score')
};

// ==========================================
// ENCAPSULATED TRANSACTION STATE CONTROLLER
// ==========================================
class ExamSession {
    constructor(questions, mode = 'training') {
        this.questions = questions;
        this.mode = mode; // 'training' or 'testing'
        this.currentIdx = 0;
        this.userAnswers = new Array(questions.length).fill(null);
        this.flags = [];
        this.isLocked = new Array(questions.length).fill(false);
        this.timeLeft = CONFIG.EXAM_TIME_SECONDS;
    }

    getCurrentQuestion() {
        return this.questions[this.currentIdx];
    }
}

let session = null;
let timerInterval = null;
window.activeMatchTerm = null; // Global tracker for matching interaction

// ==========================================
// ENGINE CONTEXT INITIALIZATION PIPELINE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    checkResume();
});

function checkResume() {
    try {
        const saved = localStorage.getItem(CONFIG.STORAGE_KEY);
        if (!saved) return;
        const state = JSON.parse(saved);
        if (state && Date.now() - state.timestamp < 3600000) { 
            if (confirm("An incomplete exam session was found. Would you like to resume?")) {
                rebuildSession(state);
            } else {
                localStorage.removeItem(CONFIG.STORAGE_KEY);
            }
        }
    } catch (e) {
        console.warn("localStorage environment is restricted or unavailable.", e);
    }
}

function startExam() {
    const selectedModule = UI.moduleSelect.value;
    let compiledQuestions = [];

    // GMETRIX STYLE COMPREHENSIVE EXAM COMPILER (Full Level Aggregation)
    if (selectedModule.includes('full')) {
        const prefix = selectedModule.includes('l1') || selectedModule.includes('level1') ? 'l1_' : 'l2_';
        
        // Harvest all questions from all lessons in the level and tag them
        for (const [key, questions] of Object.entries(allModules)) {
            if (key.startsWith(prefix)) {
                let taggedQs = questions.map(q => ({ ...q, sourceLesson: key }));
                compiledQuestions.push(...taggedQs);
            }
        }
        
        // Shuffle and extract exactly 50 questions
        compiledQuestions = shuffle(compiledQuestions).slice(0, CONFIG.TOTAL_EXAM_QUESTIONS);
    } else {
        // Standard single lesson selection
        const pool = allModules[selectedModule];
        if (!pool || pool.length === 0) {
            alert("Error: The selected structural module is empty or not registered.");
            return;
        }
        // Tag with lesson name for breakdown report
        compiledQuestions = shuffle([...pool]).map(q => ({ ...q, sourceLesson: selectedModule }));
    }

    if (compiledQuestions.length === 0) return alert("Compilation failed. No questions available.");

    // Capture dynamic mode check configuration
    let currentMode = 'training';
    const modeElements = document.getElementsByName('mode');
    for (let i = 0; i < modeElements.length; i++) {
        if (modeElements[i].checked) { currentMode = modeElements[i].value; break; }
    }

    if (UI.loadingOverlay) UI.loadingOverlay.classList.remove('hidden');

    setTimeout(() => {
        session = new ExamSession(compiledQuestions, currentMode);
        saveStateToStorage(selectedModule);

        if (UI.loadingOverlay) UI.loadingOverlay.classList.add('hidden');
        UI.setupScreen.classList.add('hidden');
        UI.examContainer.classList.remove('hidden');

        startTimer();
        loadQuestion();
    }, 400);
}

function rebuildSession(state) {
    session = new ExamSession([]);
    Object.assign(session, state.sessionData);
    UI.setupScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
    startTimer();
    loadQuestion();
}

function saveStateToStorage(moduleKey) {
    try {
        if (!session) return;
        const backupPayload = {
            module: moduleKey,
            timestamp: Date.now(),
            sessionData: {
                questions: session.questions,
                mode: session.mode,
                currentIdx: session.currentIdx,
                userAnswers: session.userAnswers,
                flags: session.flags,
                isLocked: session.isLocked,
                timeLeft: session.timeLeft
            }
        };
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(backupPayload));
    } catch (e) {
        console.warn("Failed syncing backup state payload.", e);
    }
}

// ==========================================
// CORE WORKSPACE QUESTION RENDERING ENGINES
// ==========================================
function loadQuestion() {
    if (!session) return;
    
    UI.feedback.classList.add('hidden');
    UI.optionsContainer.innerHTML = '';
    UI.interactiveContainer.innerHTML = '';
    
    const q = session.getCurrentQuestion();
    const qType = q.type || 'mcq';
    UI.qText.innerText = `${session.currentIdx + 1}. ${q.q}`;
    
    // Toggle containers
    if (['mcq', 'multi', 'yesno'].includes(qType)) {
        UI.optionsContainer.classList.remove('hidden');
        UI.interactiveContainer.classList.add('hidden');
    } else {
        UI.optionsContainer.classList.add('hidden');
        UI.interactiveContainer.classList.remove('hidden');
    }
    
    if (session.flags.includes(session.currentIdx)) {
        UI.flagBtn.innerText = "🚩 Flagged";
        UI.flagBtn.classList.add('active');
    } else {
        UI.flagBtn.innerText = "Flag for Review";
        UI.flagBtn.classList.remove('active');
    }

    if (session.mode === 'testing') {
        UI.submitBtn.classList.add('hidden');
        UI.nextBtn.classList.remove('hidden');
        UI.nextBtn.innerText = (session.currentIdx === session.questions.length - 1) ? "Finish & Review" : "Next Question";
    } else {
        UI.nextBtn.innerText = "Next Question";
        if (session.isLocked[session.currentIdx]) {
            UI.submitBtn.classList.add('hidden');
            UI.nextBtn.classList.remove('hidden');
            revealTrainingFeedback(q);
        } else {
            UI.submitBtn.classList.remove('hidden');
            UI.nextBtn.classList.add('hidden');
        }
    }

    // TYPE ROUTER
    if (qType === 'mcq') renderMCQ(q);
    if (qType === 'multi') renderMulti(q);
    if (qType === 'yesno') renderYesNo(q);
    if (qType === 'ordering') renderOrdering(q);
    if (qType === 'matching') renderMatching(q);
    if (qType === 'categorization') renderCategorization(q);

    updateNavGrid();
    updateProgress();
    saveStateToStorage(session.questions[0].sourceLesson); // Auto-save
}

// --- 1. STANDARD CHOICE ENGINE (MCQ) ---
function renderMCQ(q) {
    const historicalAnswer = session.userAnswers[session.currentIdx];
    const isLocked = session.mode === 'training' && session.isLocked[session.currentIdx];

    q.a.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option;

        if (historicalAnswer === idx) btn.classList.add('selected');

        if (!isLocked) {
            btn.onclick = () => {
                session.userAnswers[session.currentIdx] = idx;
                if (session.mode === 'testing') updateNavGrid();
                loadQuestion();
            };
        } else {
            btn.disabled = true;
            if (idx === q.cor) btn.classList.add('correct-glow');
            if (historicalAnswer === idx && historicalAnswer !== q.cor) btn.classList.add('wrong-glow');
        }
        UI.optionsContainer.appendChild(btn);
    });
}

// --- 2. MULTI-SELECT ENGINE (Select 2, 3, or 4) ---
function renderMulti(q) {
    const historical = session.userAnswers[session.currentIdx] || [];
    const isLocked = session.mode === 'training' && session.isLocked[session.currentIdx];

    const instruction = document.createElement('p');
    instruction.style.color = "#3182ce";
    instruction.style.fontWeight = "bold";
    instruction.innerText = `(Select exactly ${q.required || q.cor.length} options)`;
    UI.optionsContainer.appendChild(instruction);

    q.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<input type="checkbox" ${historical.includes(idx) ? 'checked' : ''} style="margin-right:10px; pointer-events:none;"> ${opt}`;
        
        if (historical.includes(idx)) btn.classList.add('selected');

        if (!isLocked) {
            btn.onclick = () => {
                let newAns = [...historical];
                if (newAns.includes(idx)) {
                    newAns = newAns.filter(val => val !== idx);
                } else {
                    if (newAns.length < (q.required || q.cor.length)) newAns.push(idx);
                }
                session.userAnswers[session.currentIdx] = newAns;
                if (session.mode === 'testing') updateNavGrid();
                loadQuestion();
            };
        } else {
            btn.disabled = true;
            if (q.cor.includes(idx)) btn.classList.add('correct-glow');
        }
        UI.optionsContainer.appendChild(btn);
    });
}

// --- 3. YES/NO MATRIX ENGINE ---
function renderYesNo(q) {
    const historical = session.userAnswers[session.currentIdx] || {};
    const isLocked = session.mode === 'training' && session.isLocked[session.currentIdx];

    q.statements.forEach((stmt, idx) => {
        const row = document.createElement('div');
        row.style.display = "flex";
        row.style.justifyContent = "space-between";
        row.style.alignItems = "center";
        row.style.padding = "15px";
        row.style.background = "#f7fafc";
        row.style.border = "1px solid #e2e8f0";
        row.style.borderRadius = "8px";
        row.style.marginBottom = "10px";
        
        if (isLocked) {
            const isRowCorrect = historical[idx] === q.cor[idx];
            row.style.borderColor = isRowCorrect ? '#38a169' : '#e53e3e';
            row.style.background = isRowCorrect ? '#f0fff4' : '#fff5f5';
        }

        row.innerHTML = `
            <span style="flex:1; font-weight:500;">${stmt}</span>
            <div style="display:flex; gap:15px;">
                <label style="cursor:${isLocked?'not-allowed':'pointer'}">
                    <input type="radio" name="yn_${idx}" ${historical[idx] === true ? 'checked' : ''} ${isLocked?'disabled':''}> Yes
                </label>
                <label style="cursor:${isLocked?'not-allowed':'pointer'}">
                    <input type="radio" name="yn_${idx}" ${historical[idx] === false ? 'checked' : ''} ${isLocked?'disabled':''}> No
                </label>
            </div>
        `;

        if (!isLocked) {
            row.querySelectorAll('input[type="radio"]').forEach((radio, radioIdx) => {
                radio.onchange = () => {
                    historical[idx] = radioIdx === 0; // 0 is Yes, 1 is No
                    session.userAnswers[session.currentIdx] = { ...historical };
                    if (session.mode === 'testing') updateNavGrid();
                };
            });
        }
        UI.optionsContainer.appendChild(row);
    });
}

// --- 4. SEQUENCE ENGINE (ORDERING) ---
function renderOrdering(q) {
    const historical = session.userAnswers[session.currentIdx] || [];
    const isLocked = session.mode === 'training' && session.isLocked[session.currentIdx];

    const wrapper = document.createElement('div');
    wrapper.className = 'ordering-wrapper';

    q.items.forEach((item, idx) => {
        const el = document.createElement('div');
        el.className = 'interactive-item';
        el.innerText = item;

        const stepBadge = document.createElement('span');
        stepBadge.className = 'step-badge';
        
        let matchIdx = historical.indexOf(idx);
        if (matchIdx !== -1) {
            el.classList.add('selected');
            stepBadge.innerText = matchIdx + 1;
        } else {
            stepBadge.innerText = '-';
        }
        el.prepend(stepBadge);

        if (!isLocked) {
            el.onclick = () => {
                let currentPos = historical.indexOf(idx);
                let newSeq = [...historical];
                if (currentPos !== -1) newSeq.splice(currentPos, 1);
                else newSeq.push(idx);
                
                session.userAnswers[session.currentIdx] = newSeq.length ? newSeq : null;
                if (session.mode === 'testing') updateNavGrid();
                loadQuestion();
            };
        } else {
            el.classList.add('disabled');
            if (q.cor && q.cor[idx] === idx) el.classList.add('correct-glow');
        }
        wrapper.appendChild(el);
    });
    UI.interactiveContainer.appendChild(wrapper);
}

// --- 5. MATRIX ENGINE (MATCHING - DUPLICATION FIXED) ---
function renderMatching(q) {
    const historical = session.userAnswers[session.currentIdx] || {};
    const isLocked = session.mode === 'training' && session.isLocked[session.currentIdx];

    UI.interactiveContainer.innerHTML = '<div class="matching-matrix" id="match-matrix"></div>';
    const matrix = document.getElementById('match-matrix');

    const leftCol = document.createElement('div'); leftCol.className = 'matrix-column';
    const rightCol = document.createElement('div'); rightCol.className = 'matrix-column';

    q.pairs.forEach((pair) => {
        const termBtn = document.createElement('button');
        termBtn.className = 'matrix-btn term-btn';
        termBtn.innerText = pair.term;

        if (historical[pair.term]) termBtn.classList.add('paired');
        if (window.activeMatchTerm === pair.term) termBtn.classList.add('active');

        if (!isLocked) {
            termBtn.onclick = () => {
                window.activeMatchTerm = (window.activeMatchTerm === pair.term) ? null : pair.term;
                loadQuestion();
            };
        } else { termBtn.disabled = true; }
        leftCol.appendChild(termBtn);
    });

    const renderedDefs = q.pairs.map(p => p.definition);
    renderedDefs.forEach(def => {
        const defBtn = document.createElement('button');
        defBtn.className = 'matrix-btn def-btn';
        defBtn.innerText = def;

        Object.keys(historical).forEach(t => {
            if (historical[t] === def) {
                defBtn.classList.add('paired');
                const indicator = document.createElement('small');
                indicator.innerText = ` [Paired]`;
                defBtn.appendChild(indicator);
            }
        });

        if (!isLocked) {
            defBtn.onclick = () => {
                if (!window.activeMatchTerm) return alert("Select a term on the left first.");
                
                // Remove if already paired elsewhere
                Object.keys(historical).forEach(t => { if (historical[t] === def) delete historical[t]; });
                
                historical[window.activeMatchTerm] = def;
                session.userAnswers[session.currentIdx] = { ...historical };
                window.activeMatchTerm = null;
                
                if (session.mode === 'testing') updateNavGrid();
                loadQuestion();
            };
        } else { defBtn.disabled = true; }
        rightCol.appendChild(defBtn);
    });

    matrix.appendChild(leftCol);
    matrix.appendChild(rightCol);
}

// --- 6. CLASSIFICATION ENGINE (CATEGORIZATION) ---
function renderCategorization(q) {
    const historical = session.userAnswers[session.currentIdx] || {};
    const isLocked = session.mode === 'training' && session.isLocked[session.currentIdx];

    const catContainer = document.createElement('div');
    catContainer.className = 'category-container';

    q.categories.forEach(cat => {
        const bucket = document.createElement('div');
        bucket.className = 'cat-bucket';
        bucket.innerHTML = `<h4>${cat}</h4><div class="bucket-content" id="bucket-${cat.replace(/\s+/g, '')}"></div>`;
        catContainer.appendChild(bucket);
    });

    UI.interactiveContainer.appendChild(catContainer);

    const pool = document.createElement('div');
    pool.className = 'item-pool';
    UI.interactiveContainer.appendChild(pool);

    q.items.forEach(item => {
        const itemNode = document.createElement('div');
        itemNode.className = 'interactive-item';
        itemNode.innerText = item.name;

        if (!isLocked) {
            itemNode.onclick = () => {
                const assigned = historical[item.name];
                if (!assigned) {
                    historical[item.name] = q.categories[0];
                } else {
                    const currentIdx = q.categories.indexOf(assigned);
                    if (currentIdx === q.categories.length - 1) delete historical[item.name];
                    else historical[item.name] = q.categories[currentIdx + 1];
                }
                session.userAnswers[session.currentIdx] = { ...historical };
                if (session.mode === 'testing') updateNavGrid();
                loadQuestion();
            };
        } else { itemNode.classList.add('disabled'); }

        if (historical[item.name]) {
            const id = `bucket-${historical[item.name].replace(/\s+/g, '')}`;
            const targetBucket = document.getElementById(id);
            if (targetBucket) targetBucket.appendChild(itemNode);
        } else {
            pool.appendChild(itemNode);
        }
    });
}

// ==========================================
// EVALUATION & GRADING PIPELINES
// ==========================================
function checkAnswer() {
    if (!session) return;
    const q = session.getCurrentQuestion();
    const qType = q.type || 'mcq';
    const ans = session.userAnswers[session.currentIdx];

    // Validation checks before submission
    if (qType === 'mcq' && ans === null) return alert("Please select an answer.");
    if (qType === 'multi' && (!ans || ans.length < (q.required || q.cor.length))) return alert("Please select the required number of options.");
    if (qType === 'yesno' && (!ans || Object.keys(ans).length < q.statements.length)) return alert("Please answer Yes or No for all statements.");

    session.isLocked[session.currentIdx] = true;
    revealTrainingFeedback(q);

    UI.submitBtn.classList.add('hidden');
    UI.nextBtn.classList.remove('hidden');
    updateNavGrid();
}

function revealTrainingFeedback(q) {
    let isCorrect = gradeQuestion(q, session.userAnswers[session.currentIdx]);

    UI.feedback.classList.remove('hidden');
    if (isCorrect) {
        UI.feedback.className = "feedback-box correct-box";
        UI.feedback.innerText = `Correct! ${q.exp || ''}`;
    } else {
        UI.feedback.className = "feedback-box wrong-box";
        UI.feedback.innerText = `Incorrect. ${q.exp || ''}`;
    }
}

function gradeQuestion(q, ans) {
    const qType = q.type || 'mcq';
    if (!ans) return false;

    if (qType === 'mcq') return ans === q.cor;
    if (qType === 'multi') return ans.length === q.cor.length && [...ans].sort().every((v, i) => v === [...q.cor].sort()[i]);
    if (qType === 'yesno') return q.cor.every((correctVal, i) => ans[i] === correctVal);
    if (qType === 'ordering') return ans.length === q.items.length && ans.every((val, i) => val === q.cor[i]);
    if (qType === 'matching') return q.pairs.every(p => ans[p.term] === p.definition);
    if (qType === 'categorization') return q.items.every(item => ans[item.name] === item.category);
    return false;
}

function nextQuestion() {
    if (session.currentIdx < session.questions.length - 1) {
        session.currentIdx++;
        loadQuestion();
    } else {
        showReviewScreen();
    }
}

function jumpToQuestion(idx) {
    if (!session || idx < 0 || idx >= session.questions.length) return;
    session.currentIdx = idx;
    UI.reviewScreen.classList.add('hidden');
    UI.examContainer.classList.remove('hidden');
    loadQuestion();
}

// ==========================================
// COMPREHENSIVE RESULTS & BREAKDOWN ENGINE
// ==========================================
function showReviewScreen() {
    UI.examContainer.classList.add('hidden');
    UI.reviewScreen.classList.remove('hidden');
    UI.reviewList.innerHTML = '';

    session.questions.forEach((q, idx) => {
        const isAnswered = session.userAnswers[idx] !== null && 
                           (typeof session.userAnswers[idx] !== 'object' || Object.keys(session.userAnswers[idx]).length > 0);
        
        const card = document.createElement('div');
        card.className = `review-card ${isAnswered ? 'filled' : 'empty'}`;
        
        const isFlagged = session.flags.includes(idx);
        card.innerHTML = `
            <span><strong>Question ${idx + 1}</strong>: ${q.q.substring(0, 60)}...</span>
            <div>
                <span>${isAnswered ? '✅ Answered' : '❌ Unanswered'}</span>
                ${isFlagged ? '<span style="margin-left:10px;">🚩 Flagged</span>' : ''}
            </div>
        `;
        card.onclick = () => jumpToQuestion(idx);
        UI.reviewList.appendChild(card);
    });
}

function submitExam() {
    clearInterval(timerInterval);
    try { localStorage.removeItem(CONFIG.STORAGE_KEY); } catch (e) {}

    UI.reviewScreen.classList.add('hidden');
    UI.examContainer.classList.add('hidden');
    UI.resultScreen.classList.remove('hidden');

    let finalScore = 0;
    let lessonStats = {};

    session.questions.forEach((q, idx) => {
        const isCorrect = gradeQuestion(q, session.userAnswers[idx]);
        if (isCorrect) finalScore++;

        // Aggregate stats for Breakdown Report
        const lesson = q.sourceLesson || 'General Knowledge';
        const friendlyLessonName = formatLessonName(lesson);

        if (!lessonStats[friendlyLessonName]) lessonStats[friendlyLessonName] = { total: 0, correct: 0 };
        lessonStats[friendlyLessonName].total++;
        if (isCorrect) lessonStats[friendlyLessonName].correct++;
    });

    const calculatedPercentage = Math.round((finalScore / session.questions.length) * 100);
    const hasPassed = calculatedPercentage >= CONFIG.PASS_SCORE;

    // Generate Breakdown HTML
    let breakdownHTML = `<h3 style="margin-top:25px; border-bottom:2px solid #e2e8f0; padding-bottom:10px; color:#2d3748;">Objective Performance Breakdown</h3><div style="margin-top:10px;">`;
    for (const [lesson, stats] of Object.entries(lessonStats)) {
        const lPercent = Math.round((stats.correct / stats.total) * 100);
        breakdownHTML += `
            <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #edf2f7; font-size:0.95rem;">
                <span style="font-weight:600; color:#4a5568;">${lesson.toUpperCase()}</span>
                <span style="color: ${lPercent >= 70 ? '#38a169' : '#e53e3e'}; font-weight:bold;">
                    ${lPercent}% (${stats.correct}/${stats.total})
                </span>
            </div>
        `;
    }
    breakdownHTML += `</div>`;

    UI.finalScore.innerHTML = `
        <h2 style="color: ${hasPassed ? '#2f855a' : '#c53030'}; font-size:2.5rem; margin-bottom:10px;">
            ${hasPassed ? 'PASSED' : 'FAILED'}
        </h2>
        <h1 style="font-size:4rem; font-weight:700; color:#2d3748; margin-bottom:15px;">${calculatedPercentage}%</h1>
        <p style="font-size:1.1rem; color:#4a5568;">Required: ${CONFIG.PASS_SCORE}% | Scored: ${finalScore} out of ${session.questions.length} correct items.</p>
        <div style="text-align: left; background: #f7fafc; padding: 20px; border-radius: 8px; margin-top:20px; border: 1px solid #e2e8f0;">
            ${breakdownHTML}
        </div>
    `;
}

function formatLessonName(key) {
    const map = {
        'l1_lesson1': 'L1: Technology Basics', 'l1_lesson2': 'L1: Digital Citizenship',
        'l1_lesson3': 'L1: Information Management', 'l1_lesson4': 'L1: Content Creation',
        'l1_lesson5': 'L1: Communication', 'l1_lesson6': 'L1: Collaboration',
        'l1_lesson7': 'L1: Safety and Security', 'l2_lesson8': 'L2: Technology Basics'
    };
    return map[key] || key;
}

// ==========================================
// SYSTEM SUBSIDIARY UTILITIES (SHUFFLE/TIME)
// ==========================================
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!session) return;
        session.timeLeft--;
        
        const m = Math.floor(session.timeLeft / 60);
        const s = session.timeLeft % 60;
        UI.timer.innerText = `Time: ${m}:${s < 10 ? '0' : ''}${s}`;
        
        if (session.timeLeft < CONFIG.WARNING_TIME) {
            UI.timer.style.color = '#e53e3e';
            UI.timer.style.fontWeight = '700';
        }

        if (session.timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time has expired. Your exam will now be submitted automatically.");
            submitExam();
        }
    }, 1000);
}

function toggleFlag() {
    if (!session) return;
    const current = session.currentIdx;
    const pos = session.flags.indexOf(current);
    if (pos !== -1) session.flags.splice(pos, 1);
    else session.flags.push(current);
    loadQuestion();
}

function updateNavGrid() {
    if (!session) return;
    UI.navGrid.innerHTML = '';
    session.questions.forEach((q, idx) => {
        const box = document.createElement('div');
        box.className = 'q-box';
        
        const ans = session.userAnswers[idx];
        const isAnswered = ans !== null && (typeof ans !== 'object' || Object.keys(ans).length > 0);

        if (idx === session.currentIdx) box.classList.add('current');
        if (isAnswered) box.classList.add('answered');
        if (session.flags.includes(idx)) box.classList.add('flagged');
        
        box.innerText = idx + 1;
        box.onclick = () => jumpToQuestion(idx);
        UI.navGrid.appendChild(box);
    });
}

function updateProgress() {
    if (!session || session.questions.length === 0) return;
    const currentPct = Math.round(((session.currentIdx + 1) / session.questions.length) * 100);
    if (UI.progressFill) UI.progressFill.style.width = `${currentPct}%`;
    if (UI.progressBar) UI.progressBar.setAttribute('aria-valuenow', currentPct);
}
