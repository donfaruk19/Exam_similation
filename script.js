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
        // --- 1. OPERATING SYSTEM FUNDAMENTALS ---
        {
            type: "mcq",
            q: "What is an Operating System (OS)?",
            a: ["A collection of mechanical parts", "A program that manages hardware and controls communication between apps and hardware", "A set of tools for editing photos", "The physical casing of a computer"],
            cor: 1,
            exp: "The OS is the software that manages hardware and facilitates communication between hardware and applications."
        },
        {
            type: "mcq",
            q: "What is the specific term for individual lines of instructions that guide a computer?",
            a: ["Hardware", "Framework", "Code", "Nodes"],
            cor: 2,
            exp: "Individual lines of instruction in a program are referred to as code."
        },
        {
            type: "mcq",
            q: "Which of these is considered 'Software'?",
            a: ["The Monitor", "The Operating System and Application Programs", "The CPU and RAM", "The Keyboard and Mouse"],
            cor: 1,
            exp: "Software refers to the programs (OS and apps) that make the hardware run."
        },
        {
            type: "mcq",
            q: "Every computer requires an ______ to function.",
            a: ["Internet connection", "Operating System", "Printer", "Webcam"],
            cor: 1,
            exp: "Without an OS, the hardware cannot communicate or run application programs."
        },
        {
            type: "mcq",
            q: "What does the OS do for application programs?",
            a: ["It deletes them when they are old", "It manages hardware devices and controls communication for them", "It writes the code for the apps", "It buys the apps from the store"],
            cor: 1,
            exp: "The OS acts as the middleman between the app and the physical hardware."
        },

        // --- 2. TYPES OF COMPUTERS ---
        {
            type: "mcq",
            q: "Which type of computer is designed for high-volume data processing for thousands of users?",
            a: ["Laptop", "Mainframe", "Smartphone", "Desktop"],
            cor: 1,
            exp: "Mainframes are used by large organizations (like banks) for bulk data processing."
        },
        {
            type: "mcq",
            q: "What is a 'Supercomputer' primarily used for?",
            a: ["Browsing social media", "Checking email", "Performing complex scientific calculations and simulations", "Playing simple video games"],
            cor: 2,
            exp: "Supercomputers are the fastest computers, used for weather forecasting or nuclear research."
        },
        {
            type: "mcq",
            q: "Which device is an example of an 'All-in-one' computer?",
            a: ["A tower PC with a separate monitor", "A computer where the monitor and CPU components are in the same housing", "A tablet without a keyboard", "A printer that also scans"],
            cor: 1,
            exp: "All-in-one desktops (like an iMac) combine the screen and system unit into one piece."
        },
        {
            type: "mcq",
            q: "What defines a 'Server'?",
            a: ["A computer that only works for one person", "A computer that provides services and resources to other computers on a network", "A laptop that is very thin", "A computer used only for gaming"],
            cor: 1,
            exp: "Servers 'serve' data, files, or web pages to client computers."
        },
        {
            type: "mcq",
            q: "Which of these is considered a 'Mobile Device'?",
            a: ["Mainframe", "Workstation", "Smartphone", "Server Tower"],
            cor: 2,
            exp: "Smartphones and tablets are mobile devices designed for portability."
        },

        // --- 3. HARDWARE & PERIPHERALS ---
        {
            type: "mcq",
            q: "What is the 'CPU' often called?",
            a: ["The Heart of the computer", "The Brain of the computer", "The Eyes of the computer", "The Memory of the computer"],
            cor: 1,
            exp: "The Central Processing Unit (CPU) performs all the calculations and instructions."
        },
        {
            type: "mcq",
            q: "Which type of memory is 'Volatile' (lost when the power is turned off)?",
            a: ["Hard Drive", "RAM", "ROM", "Flash Drive"],
            cor: 1,
            exp: "Random Access Memory (RAM) is temporary workspace that clears when the PC shuts down."
        },
        {
            type: "mcq",
            q: "What is a 'Peripheral' device?",
            a: ["The CPU", "Any external device that connects to and works with the computer", "The Motherboard", "The power supply"],
            cor: 1,
            exp: "Keyboards, mice, and printers are all examples of peripheral hardware."
        },
        {
            type: "mcq",
            q: "Which component is used for long-term data storage?",
            a: ["CPU", "RAM", "Hard Disk Drive (HDD)", "Video Card"],
            cor: 2,
            exp: "Hard drives and SSDs keep data even when the computer is turned off."
        },
        {
            type: "mcq",
            q: "What is the main circuit board of a computer called?",
            a: ["Control Board", "Motherboard", "Logic Plate", "System Card"],
            cor: 1,
            exp: "The motherboard connects all the internal components together."
        },

        // --- 4. DATA MEASUREMENT (BITS & BYTES) ---
        {
            type: "mcq",
            q: "What is a 'Bit'?",
            a: ["A group of 8 numbers", "The smallest unit of data (a 0 or a 1)", "A type of computer virus", "A physical part of the mouse"],
            cor: 1,
            exp: "A bit (Binary Digit) is the basic unit of information in computing."
        },
        {
            type: "mcq",
            q: "How many bits are in one 'Byte'?",
            a: ["2", "4", "8", "16"],
            cor: 2,
            exp: "8 bits combine to form 1 byte, which usually represents a single character."
        },
        {
            type: "mcq",
            q: "Approximately how many bytes are in a 'Kilobyte' (KB)?",
            a: ["10", "100", "1,000", "1,000,000"],
            cor: 2,
            exp: "A Kilobyte is roughly 1,000 bytes (technically 1,024)."
        },
        {
            type: "mcq",
            q: "Which unit is larger?",
            a: ["Megabyte (MB)", "Gigabyte (GB)", "Kilobyte (KB)", "Byte"],
            cor: 1,
            exp: "Gigabytes (billions of bytes) are larger than Megabytes (millions)."
        },
        {
            type: "mcq",
            q: "What follows a Terabyte (TB) in size?",
            a: ["Gigabyte", "Petabyte", "Megabyte", "Kilobyte"],
            cor: 1,
            exp: "The order is KB, MB, GB, TB, PB (Petabyte)."
        },

        // --- 5. NETWORKING BASICS ---
        {
            type: "mcq",
            q: "What is a 'Local Area Network' (LAN)?",
            a: ["A network that covers a whole city", "A network connecting computers in a small area like a home or office", "The global internet", "A network that only works via satellite"],
            cor: 1,
            exp: "LANs are confined to a single building or limited geographic area."
        },
        {
            type: "mcq",
            q: "What does 'WAN' stand for?",
            a: ["Wireless Area Network", "Wide Area Network", "Web Access Node", "Wired Access Network"],
            cor: 1,
            exp: "WANs connect multiple LANs over long distances (like the Internet)."
        },
        {
            type: "mcq",
            q: "What is the primary function of a 'Router'?",
            a: ["To print documents", "To direct data traffic between different networks", "To store your files", "To speed up the CPU"],
            cor: 1,
            exp: "Routers act as traffic controllers, moving data between your LAN and the Internet."
        },
        {
            type: "mcq",
            q: "What is an 'IP Address'?",
            a: ["Your home street address", "A unique numerical label assigned to each device on a network", "Your computer's serial number", "A password for your email"],
            cor: 1,
            exp: "IP addresses allow devices to find and communicate with each other on a network."
        },
        {
            type: "mcq",
            q: "Which device converts digital signals to analog (and vice versa) for internet access?",
            a: ["Monitor", "Modem", "Scanner", "Keyboard"],
            cor: 1,
            exp: "Modems (Modulator-Demodulator) connect your home to your Internet Service Provider (ISP)."
        },

        // --- 6. TROUBLESHOOTING ---
        {
            type: "mcq",
            q: "If your computer cannot connect to the internet, what is the first step you should take?",
            a: ["Buy a new computer", "Check physical cable connections and restart the router", "Delete all your files", "Call the police"],
            cor: 1,
            exp: "Checking physical connections and 'power cycling' the router fixes most basic issues."
        },
        {
            type: "mcq",
            q: "What is a sign that your computer has a valid IP address on a local network?",
            a: ["The IP starts with 0.0.0.0", "The IP starts with 169.254", "The IP looks like 192.168.1.x", "The monitor is bright"],
            cor: 2,
            exp: "192.168.x.x is a standard private IP range for home/office LANs."
        },
        {
            type: "mcq",
            q: "What does an IP address starting with '169.254' usually mean?",
            a: ["The internet is working perfectly", "The computer could not get an IP from the router (APIPA)", "The computer is hacked", "The printer is out of ink"],
            cor: 1,
            exp: "169.254.x.x indicates a failure to communicate with the DHCP server (the router)."
        },
        {
            type: "mcq",
            q: "What should you do if your Wi-Fi is slow?",
            a: ["Move closer to the Wi-Fi hotspot", "Change your wallpaper", "Unplug the mouse", "Turn off the monitor"],
            cor: 0,
            exp: "Distance from the access point significantly affects Wi-Fi speed and signal strength."
        },
        {
            type: "mcq",
            q: "Who should you contact if restarting your equipment doesn't fix your internet outage?",
            a: ["Microsoft", "Your ISP (Internet Service Provider)", "The hardware store", "The electric company"],
            cor: 1,
            exp: "The ISP is responsible for the external connection to your building."
        },

        // --- 7. FILE MANAGEMENT & ENVIRONMENTS ---
        {
            type: "mcq",
            q: "What is a 'File Extension'?",
            a: ["The size of a file", "The characters after the period in a filename that tell the OS the file type", "The date a file was created", "A way to make a file longer"],
            cor: 1,
            exp: "Extensions like .docx, .jpg, or .exe tell the computer which app to use to open the file."
        },
        {
            type: "mcq",
            q: "What is the 'Cloud'?",
            a: ["A weather pattern", "Storing and accessing data and programs over the internet instead of locally", "A type of hardware in the CPU", "A backup battery"],
            cor: 1,
            exp: "Cloud computing means the data lives on remote servers accessed via the web."
        },
        {
            type: "mcq",
            q: "Which of these is a 'Cloud Storage' service?",
            a: ["Windows 11", "Google Drive", "Microsoft Word", "The Recycle Bin"],
            cor: 1,
            exp: "Google Drive, OneDrive, and Dropbox are examples of cloud storage."
        },
        {
            type: "mcq",
            q: "What is a 'Graphical User Interface' (GUI)?",
            a: ["A way to use the computer by typing code only", "A visual way of interacting with a computer using items like windows, icons, and menus", "A physical hardware part", "A type of printer"],
            cor: 1,
            exp: "GUIs allow users to point and click rather than memorizing text commands."
        },
        {
            type: "mcq",
            q: "What is 'Input' hardware?",
            a: ["Monitor", "Keyboard", "Printer", "Speakers"],
            cor: 1,
            exp: "Input devices send data *into* the computer."
        },

        // --- 8. SYSTEM MAINTENANCE ---
        {
            type: "mcq",
            q: "What is 'Firmware'?",
            a: ["Soft hardware", "Permanent software programmed into a hardware device", "A type of clothing", "A temporary file"],
            cor: 1,
            exp: "Firmware provides low-level control for a device's specific hardware."
        },
        {
            type: "mcq",
            q: "What is a 'Driver'?",
            a: ["The person using the mouse", "Software that allows the OS to communicate with a specific hardware device", "A part of the hard drive", "An internet cable"],
            cor: 1,
            exp: "Drivers act as 'translators' between the OS and hardware like printers or video cards."
        },
        {
            type: "mcq",
            q: "What does 'Plug and Play' mean?",
            a: ["You have to build the device yourself", "The computer automatically recognizes a device when it is plugged in", "The device only works for games", "The device doesn't need power"],
            cor: 1,
            exp: "Plug and Play (PnP) makes hardware installation automatic and easy."
        },
        {
            type: "mcq",
            q: "Why should you 'Eject' a flash drive before unplugging it?",
            a: ["To make it fly out of the port", "To ensure all data is finished writing to prevent corruption", "To save battery life", "To clean the drive"],
            cor: 1,
            exp: "Ejecting ensures the OS has closed all files on the drive before physical removal."
        },
        {
            type: "mcq",
            q: "What does 'Updates' usually provide for your OS?",
            a: ["More ads", "Security patches and bug fixes", "A new monitor", "More physical RAM"],
            cor: 1,
            exp: "Updates are essential for keeping the system secure and running smoothly."
        },

        // --- 9. CATEGORIZATION & MATCHING ---
        {
            type: "matching",
            q: "Match the device to its category:",
            pairs: [
                { term: "Mouse", definition: "Input Device" },
                { term: "Monitor", definition: "Output Device" },
                { term: "CPU", definition: "Processing Device" }
            ],
            exp: "Devices are categorized by how they handle data flow."
        },
        {
            type: "categorization",
            q: "Categorize these as Hardware or Software:",
            categories: ["Hardware", "Software"],
            items: [
                { name: "RAM", category: "Hardware" },
                { name: "Windows 11", category: "Software" },
                { name: "Web Browser", category: "Software" },
                { name: "Hard Drive", category: "Hardware" }
            ],
            exp: "Hardware is physical; Software is digital instructions."
        },
        {
            type: "yesno",
            q: "Is a Smartphone considered a 'Computer'?",
            statements: [
                "Yes, it has a CPU, memory, and an OS.",
                "No, it is only a phone.",
                "Yes, but it cannot run application programs."
            ],
            cor: [true, false, false],
            exp: "Smartphones are powerful mobile computers with all the core components of a PC."
        },

        // --- 10. ADVANCED BASICS ---
        {
            type: "mcq",
            q: "What is 'Multi-tasking' in an OS?",
            a: ["Having multiple people use one computer", "The ability of the OS to run more than one program at a time", "Using two monitors", "Buying two computers"],
            cor: 1,
            exp: "Modern OSs allow you to listen to music while typing a document simultaneously."
        },
        {
            type: "mcq",
            q: "What is an 'Administrator' account?",
            a: ["The person who built the computer", "A user account with full control over the system and settings", "An account that can only browse the web", "A guest account"],
            cor: 1,
            exp: "Admin accounts can install software and change system-wide settings."
        },
        {
            type: "mcq",
            q: "Which of these is a 'Standard' user restricted from doing?",
            a: ["Opening a web browser", "Changing critical system files or installing some software", "Saving a document", "Changing their own password"],
            cor: 1,
            exp: "Standard users have limited permissions to protect the system's security."
        },
        {
            type: "mcq",
            q: "What does 'Resolution' refer to on a monitor?",
            a: ["The size of the screen in inches", "The number of pixels displayed on the screen", "The weight of the monitor", "The brightness of the lamp"],
            cor: 1,
            exp: "Higher resolution means more pixels and a clearer, sharper image."
        },
        {
            type: "mcq",
            q: "What is 'Bluetooth'?",
            a: ["A type of internet cable", "Short-range wireless technology for connecting devices", "A virus that turns the screen blue", "A high-speed printer"],
            cor: 1,
            exp: "Bluetooth is used for mice, headphones, and syncing phones over short distances."
        },
        {
            type: "mcq",
            q: "Which of these is a 'Web Browser'?",
            a: ["Windows 10", "Google Chrome", "Adobe Photoshop", "Intel Core i5"],
            cor: 1,
            exp: "Browsers are application software used to access the World Wide Web."
        },
        {
            type: "mcq",
            q: "What is the purpose of the 'Task Manager'?",
            a: ["To play music", "To view and manage currently running programs and system performance", "To write letters", "To delete your files"],
            cor: 1,
            exp: "Task Manager allows you to 'Force Quit' frozen apps and check CPU usage."
        },
        {
            type: "mcq",
            q: "What is 'Motherboard' also known as?",
            a: ["System Board", "Power Plate", "Data Hub", "Logic Box"],
            cor: 0,
            exp: "The terms Motherboard and System Board are often used interchangeably."
        },
        {
            type: "mcq",
            q: "What is 'Cache' memory?",
            a: ["Physical money inside the PC", "High-speed memory used by the CPU to store frequently used data", "A type of slow hard drive", "The trash can"],
            cor: 1,
            exp: "Cache memory is even faster than RAM and sits very close to the CPU."
        },
        {
            type: "mcq",
            q: "Which port is used specifically for high-definition video and audio?",
            a: ["USB", "VGA", "HDMI", "PS/2"],
            cor: 2,
            exp: "High-Definition Multimedia Interface (HDMI) is the standard for modern displays."
        },
        {
            type: "mcq",
            q: "What is an 'Optical Drive' used for?",
            a: ["Reading glasses", "Reading and writing CDs, DVDs, and Blu-ray discs", "Scanning your eyes", "Connecting to the internet"],
            cor: 1,
            exp: "Optical drives use lasers to read data from discs."
        },
        {
            type: "mcq",
            q: "What is the 'Desktop' in a GUI?",
            a: ["The physical top of your desk", "The main workspace area on the screen", "A folder for deleted items", "The back of the computer"],
            cor: 1,
            exp: "The Desktop is the home screen where icons and windows are displayed."
        }
    ],
    l1_lesson2: [
        // --- 1. DIGITAL IDENTITY & FOOTPRINT ---
        {
            type: "mcq",
            q: "What is the best definition of a 'Digital Footprint'?",
            a: ["The physical weight of a computer", "A permanent record of all your activities, postings, and uploads online", "The speed at which you type on a keyboard", "A temporary list of websites visited in one hour"],
            cor: 1,
            exp: "Your digital footprint is the permanent trail of data you leave behind whenever you perform actions online."
        },
        {
            type: "matching",
            q: "Match the footprint type to the correct example:",
            pairs: [
                { term: "Active Footprint", definition: "Posting a photo on Instagram or sending an email." },
                { term: "Passive Footprint", definition: "A website collecting your IP address and location without you knowing." },
                { term: "Digital Identity", definition: "The combination of your profile and all your online activity." }
            ],
            exp: "Active footprints are intentional; passive footprints happen in the background."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about your Digital Identity:",
            statements: [
                "Your digital identity is permanent and difficult to delete.",
                "Only the things you post yourself contribute to your reputation.",
                "Potential employers often check social media to learn about candidates."
            ],
            cor: [true, false, true],
            exp: "Your identity includes what others post about you, and it is highly visible to employers and schools."
        },
        {
            type: "multi",
            q: "Which of the following contribute to your 'Personal Brand' online? (Select 3)",
            a: ["The groups you join on LinkedIn", "The people you follow on Twitter/X", "The physical brand of your laptop", "The 'likes' and comments you leave on posts", "The brightness of your monitor"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Associations, followers, and interactions all shape how others perceive your character."
        },
        {
            type: "mcq",
            q: "Why is it important to manage your digital reputation early in life?",
            a: ["Because digital records are temporary", "Because schools and employers use it to assess your character", "To ensure you get more followers", "To increase your internet speed"],
            cor: 1,
            exp: "Admissions boards and employers use your digital history to help decide if you are a good fit for their organization."
        },

        // --- 2. ONLINE BEHAVIOR & NETIQUETTE ---
        {
            type: "matching",
            q: "Match the negative digital behavior to its description:",
            pairs: [
                { term: "Cyberbullying", definition: "Using digital devices to harass, threaten, or humiliate someone." },
                { term: "Flaming", definition: "Posting an insulting or hostile message online." },
                { term: "Trolling", definition: "Starting arguments or upsetting people to distract or provoke." }
            ],
            exp: "These terms describe different ways users interact negatively in digital environments."
        },
        {
            type: "categorization",
            q: "Categorize these actions as Good or Bad Netiquette:",
            categories: ["Good Netiquette", "Bad Netiquette"],
            items: [
                { name: "Using ALL CAPS for every sentence", category: "Bad Netiquette" },
                { name: "Checking your tone before hitting send", category: "Good Netiquette" },
                { name: "Respecting others' privacy", category: "Good Netiquette" },
                { name: "Posting embarrassing photos of others without permission", category: "Bad Netiquette" }
            ],
            exp: "Netiquette is the set of informal rules for polite behavior online."
        },
        {
            type: "ordering",
            q: "What is the recommended sequence of steps if you are a victim of cyberbullying?",
            items: [
                "Do not respond or retaliate to the bully.",
                "Save evidence (screenshots) of the behavior.",
                "Block the person who is performing the bullying.",
                "Report the incident to a trusted adult or authority."
            ],
            cor: [0, 1, 2, 3],
            exp: "Avoid escalating the situation, document it, and seek help immediately."
        },
        {
            type: "multi",
            q: "What should you consider before sharing a post? (Select 3)",
            a: ["Is the information true?", "Will this hurt someone's feelings?", "How many 'likes' will it get?", "Is it appropriate for all audiences?", "Will it make me look famous?"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Truth, kindness, and appropriateness are the foundations of responsible sharing."
        },
        {
            type: "yesno",
            q: "True or False: Deleting a post removes it completely from the internet.",
            statements: [
                "The post is gone forever immediately.",
                "Others may have already taken screenshots of the post.",
                "The server hosting the site may keep a backup of the data."
            ],
            cor: [false, true, true],
            exp: "Once something is online, you lose control over who sees or saves it."
        },

        // --- 3. EVALUATING ONLINE INFORMATION (RESEARCH) ---
        {
            type: "mcq",
            q: "What does 'Bias' mean in the context of research?",
            a: ["A website that loads very fast", "A prejudice in favor of or against one thing, person, or group", "The length of an article", "The number of images on a page"],
            cor: 1,
            exp: "Bias indicates a lack of objectivity, where information is presented to favor a specific perspective."
        },
        {
            type: "matching",
            q: "Match the domain extension to its typical purpose:",
            pairs: [
                { term: ".gov", definition: "Governmental organizations" },
                { term: ".edu", definition: "Educational institutions (Universities)" },
                { term: ".org", definition: "Non-profit or professional organizations" },
                { term: ".com", definition: "Commercial businesses" }
            ],
            exp: "Domain extensions provide clues about the source and intent of the website."
        },
        {
            type: "categorization",
            q: "Categorize these website elements based on their impact on credibility:",
            categories: ["Increases Credibility", "Decreases Credibility"],
            items: [
                { name: "Clearly cited sources and references", category: "Increases Credibility" },
                { name: "Heavy use of advertisements and pop-ups", category: "Decreases Credibility" },
                { name: "The author is an expert in the field", category: "Increases Credibility" },
                { name: "Frequent spelling and grammar errors", category: "Decreases Credibility" }
            ],
            exp: "Professionalism, expertise, and transparency increase trust in a source."
        },
        {
            type: "multi",
            q: "Which 'C's' of research help determine if a source is reliable? (Select 3)",
            a: ["Currency (Is it up to date?)", "Color (Is it pretty?)", "Credibility (Who wrote it?)", "Coverage (Is it detailed?)", "Cost (Is it expensive?)"],
            cor: [0, 2, 3],
            required: 3,
            exp: "Reliable research focuses on how recent, trustworthy, and thorough the information is."
        },
        {
            type: "mcq",
            q: "When viewing a Wiki or a Blog, why must you be cautious?",
            a: ["They are always owned by the government", "Authors do not need specific qualifications to contribute", "They are not accessible on mobile devices", "They only contain images"],
            cor: 1,
            exp: "Wikis and blogs can be edited by anyone, meaning the information may be opinion-based or inaccurate."
        },

        // --- 4. PRIVACY & SECURITY ---
        {
            type: "yesno",
            q: "Evaluate these statements about Social Media Privacy:",
            statements: [
                "Setting a profile to 'Private' means nobody can ever see your posts.",
                "Privacy settings should be checked regularly as platforms change their rules.",
                "Third-party apps often request access to your profile data."
            ],
            cor: [false, true, true],
            exp: "Privacy settings limit visibility but don't guarantee total secrecy; always monitor your settings."
        },
        {
            type: "mcq",
            q: "What is 'Two-Factor Authentication' (2FA)?",
            a: ["Using two different passwords for the same site", "A security process requiring two different forms of identification", "Logging in from two computers at once", "A way to speed up your login time"],
            cor: 1,
            exp: "2FA adds a layer of security by requiring a password plus a second code (usually sent to a phone)."
        },
        {
            type: "matching",
            q: "Match the term to its privacy risk:",
            pairs: [
                { term: "Geotagging", definition: "Sharing your exact physical location within a photo's metadata." },
                { term: "Oversharing", definition: "Posting sensitive personal details that could be used for identity theft." },
                { term: "Data Mining", definition: "Companies collecting your personal info to sell to advertisers." }
            ],
            exp: "Managing what you share helps protect your physical safety and your data."
        },

        // --- 5. INTELLECTUAL PROPERTY & ETHICS ---
        {
            type: "mcq",
            q: "What is 'Plagiarism'?",
            a: ["Taking a photo of a sunset", "Using someone else's work or ideas without giving them credit", "Sharing a link to a news story", "Buying a legal copy of a software"],
            cor: 1,
            exp: "Plagiarism is an ethical violation where you present others' work as your own."
        },
        {
            type: "multi",
            q: "Which of the following are protected by Copyright? (Select 3)",
            a: ["Music and Lyrics", "Ideas that haven't been written down", "Books and Articles", "Original Photographs", "A common fact like 'The sky is blue'"],
            cor: [0, 2, 3],
            required: 3,
            exp: "Copyright protects original creative works once they are in a fixed form."
        },

        // --- 6. ADVANCED REPUTATION & IDENTITY ---
        {
            type: "categorization",
            q: "Categorize the following as Positive or Negative Digital Footprints:",
            categories: ["Positive Impact", "Negative Impact"],
            items: [
                { name: "Volunteering for a charity mentioned in a news article", category: "Positive Impact" },
                { name: "Being tagged in a video showing illegal activity", category: "Negative Impact" },
                { name: "Writing a professional blog about technology", category: "Positive Impact" },
                { name: "Using profanity in a public forum", category: "Negative Impact" }
            ],
            exp: "Your actions and associations define your professional and personal reputation."
        },
        {
            type: "mcq",
            q: "If you find information on a website that seems biased or sarcastic, what is the best course of action?",
            a: ["Share it immediately", "Cross-reference it with other reliable sources", "Assume it is true because it is online", "Report the website to the police"],
            cor: 1,
            exp: "Verifying information across multiple sources helps filter out bias and misinformation."
        },
        {
            type: "yesno",
            q: "Regarding 'Tone' in digital communication:",
            statements: [
                "Sarcasm is easy to understand in text format.",
                "Professional communication should remain objective and factual.",
                "Using humor is always effective and never misunderstood."
            ],
            cor: [false, true, false],
            exp: "Tone is hard to convey in text; professional writing should be clear and avoid easily misunderstood humor/sarcasm."
        },
        {
            type: "ordering",
            q: "Order these steps for checking the credibility of an online article:",
            items: [
                "Check the author's credentials and expertise.",
                "Identify the date the article was published or updated.",
                "Look for supporting evidence or citations.",
                "Analyze the tone for potential bias or commercial influence."
            ],
            cor: [0, 1, 2, 3],
            exp: "A systematic approach ensures you evaluate all aspects of a source's reliability."
        },
        {
            type: "mcq",
            q: "Which of the following is a sign of 'Commercial Bias'?",
            a: ["The site provides a list of sources", "The site only presents information that encourages you to buy a product", "The site is written by a professor", "The site ends in .gov"],
            cor: 1,
            exp: "Commercial bias occurs when information is skewed to favor a sale or profit."
        },
        {
            type: "multi",
            q: "What are common reasons people 'Troll' others online? (Select 2)",
            a: ["To provide helpful technical support", "To gain attention or feel powerful", "To disrupt meaningful conversation", "To strictly follow netiquette"],
            cor: [1, 2],
            required: 2,
            exp: "Trolls aim to provoke emotional responses and disrupt communities."
        },
        {
            type: "mcq",
            q: "What does the term 'Oversharing' typically lead to?",
            a: ["Increased computer performance", "Higher risks of identity theft or physical danger", "Better internet connectivity", "Automatic software updates"],
            cor: 1,
            exp: "Oversharing gives malicious actors the information they need to impersonate you or find you."
        },
        {
            type: "matching",
            q: "Match the citation element to its purpose:",
            pairs: [
                { term: "Author Name", definition: "Credits the creator of the work." },
                { term: "Publication Date", definition: "Shows how current the information is." },
                { term: "URL / Web Address", definition: "Allows others to find the source themselves." }
            ],
            exp: "Proper citations include these key elements to ensure transparency."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about Online Communities:",
            statements: [
                "You should always use your real full name and address as your username.",
                "Moderators help enforce rules within digital spaces.",
                "Reporting inappropriate behavior helps keep the community safe."
            ],
            cor: [false, true, true],
            exp: "Protecting your private identity is key; moderators and reporting systems maintain order."
        },
        {
            type: "mcq",
            q: "Which of these is the most 'Objective' statement?",
            a: ["Windows is the best operating system ever.", "The Windows 10 OS was released in July 2015.", "Everyone loves using Windows 10.", "Windows 10 has a very ugly interface."],
            cor: 1,
            exp: "Objective statements are based on facts that can be proven, not opinions or feelings."
        },
        {
            type: "mcq",
            q: "What is 'Digital Citizenship'?",
            a: ["The ability to build a computer from parts", "The responsible and ethical use of technology and the internet", "A passport used for digital travel", "The total number of people living in a smart city"],
            cor: 1,
            exp: "Digital citizenship involves understanding your rights and responsibilities in a connected world."
        },
        {
            type: "multi",
            q: "Identify signs of a possible 'Phishing' attempt: (Select 2)",
            a: ["An email with urgent, threatening language", "A website with a valid .gov domain", "A request for your password via a suspicious link", "A message from a verified friend saying 'Hello'"],
            cor: [0, 2],
            required: 2,
            exp: "Phishing uses urgency and fake links to steal sensitive information."
        },
        {
            type: "categorization",
            q: "Categorize these as Primary or Secondary sources:",
            categories: ["Primary Source", "Secondary Source"],
            items: [
                { name: "An original diary entry from a historical figure", category: "Primary Source" },
                { name: "A textbook summarizing historical events", category: "Secondary Source" },
                { name: "A first-hand video recording of an event", category: "Primary Source" },
                { name: "An encyclopedia article", category: "Secondary Source" }
            ],
            exp: "Primary sources are direct evidence; secondary sources analyze or summarize primary ones."
        },
        {
            type: "matching",
            q: "Match the research term to its meaning:",
            pairs: [
                { term: "Objectivity", definition: "The ability to present information without being influenced by personal feelings." },
                { term: "Currency", definition: "The timeliness of information." },
                { term: "Authenticity", definition: "The quality of being genuine and not a fake." }
            ],
            exp: "These are critical standards for high-quality information."
        },
        {
            type: "yesno",
            q: "Can a website with many ads still be reliable?",
            statements: [
                "Yes, if the content is backed by cited scientific evidence.",
                "No, advertisements automatically make all info false.",
                "Yes, but you must look harder for potential commercial bias."
            ],
            cor: [true, false, true],
            exp: "Ads don't always mean false info, but they signal a need for more careful evaluation."
        },
        {
            type: "mcq",
            q: "What should you do if you accidentally find inappropriate content online?",
            a: ["Save it to your desktop", "Close the tab or window immediately", "Share the link with friends to warn them", "Try to find the person who posted it"],
            cor: 1,
            exp: "The safest response is to leave the site and, if necessary, report it to a parent or teacher."
        },
        {
            type: "ordering",
            q: "Order these levels of information reliability from MOST to LEAST reliable:",
            items: [
                "Peer-reviewed academic journal",
                "Official government report (.gov)",
                "Mainstream news organization",
                "Anonymous social media post"
            ],
            cor: [0, 1, 2, 3],
            exp: "Sources with strict editing and verification processes are the most reliable."
        },
        {
            type: "mcq",
            q: "What is a 'Social Media Profile'?",
            a: ["A file that stores your internet history", "A representation of yourself on a specific digital platform", "A type of antivirus software", "The physical screen of your phone"],
            cor: 1,
            exp: "A profile is your digital 'identity card' for a specific website or app."
        },
        {
            type: "multi",
            q: "Which actions help protect your digital reputation? (Select 3)",
            a: ["Setting social media to private", "Thinking before you post", "Deleting your browser history regularly", "Searching your own name to see what appears", "Posting every thought you have instantly"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Privacy, thoughtfulness, and monitoring are key to a healthy digital reputation."
        },
        {
            type: "mcq",
            q: "What does 'Anonymity' mean in a digital context?",
            a: ["Being well-known by everyone", "The state of being unknown or unidentifiable", "Having a very long password", "Using a computer in a public library"],
            cor: 1,
            exp: "Anonymity allows people to interact online without revealing their true identity."
        },
        {
            type: "yesno",
            q: "Does anonymity excuse bad behavior?",
            statements: [
                "Yes, because no one knows who you are.",
                "No, ethical rules still apply even if you are anonymous.",
                "No, because technical trails can often reveal your true identity anyway."
            ],
            cor: [false, true, true],
            exp: "Anonymity does not change moral responsibilities, and it is rarely 100% untraceable."
        },
        {
            type: "matching",
            q: "Match the online risk to the safety action:",
            pairs: [
                { term: "Identity Theft", definition: "Use strong, unique passwords and 2FA." },
                { term: "Physical Danger", definition: "Never share your home address or current location." },
                { term: "Reputational Damage", definition: "Avoid posting content that shows illegal or rude behavior." }
            ],
            exp: "Specific actions can mitigate specific digital risks."
        },
        {
            type: "mcq",
            q: "Why should you check the 'About Us' page on a website?",
            a: ["To see how many employees they have", "To understand the organization's mission and potential biases", "To find the website's color code", "To download the site's logo"],
            cor: 1,
            exp: "The 'About Us' page reveals who is behind the information and what their goals are."
        },
        {
            type: "multi",
            q: "Identify features of 'Reliable' information: (Select 2)",
            a: ["It is balanced and considers multiple viewpoints", "It uses many exclamation points and angry words", "It is supported by evidence and facts", "It was written over 20 years ago"],
            cor: [0, 2],
            required: 2,
            exp: "Balance and factual support are hallmarks of quality information."
        },
        {
            type: "mcq",
            q: "What is 'Fair Use' in copyright law?",
            a: ["The right to steal any software you want", "A legal doctrine allowing limited use of copyrighted material without permission", "The rule that all internet content is free", "The price you pay for a movie ticket"],
            cor: 1,
            exp: "Fair use allows small portions of work to be used for things like education, news, or criticism."
        },
        {
            type: "categorization",
            q: "Categorize these as Intellectual Property or Not:",
            categories: ["Intellectual Property", "Not Intellectual Property"],
            items: [
                { name: "A patented invention", category: "Intellectual Property" },
                { name: "A trademarked logo", category: "Intellectual Property" },
                { name: "The idea of 'gravity'", category: "Not Intellectual Property" },
                { name: "A public domain book from 1850", category: "Not Intellectual Property" }
            ],
            exp: "Intellectual property refers to creations of the mind that have legal protections."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about Online Citations:",
            statements: [
                "Citing sources makes your own work look weaker.",
                "Citing sources helps your readers find more information.",
                "Citing sources protects you from accusations of plagiarism."
            ],
            cor: [false, true, true],
            exp: "Citations strengthen your work by proving you have done research and are acting ethically."
        },
        {
            type: "mcq",
            q: "What is the primary danger of a 'Single Source' research approach?",
            a: ["It is too fast", "You may only see one biased perspective", "It saves too much paper", "The information will be too accurate"],
            cor: 1,
            exp: "Using only one source limits your understanding and increases the risk of following biased information."
        },
        {
            type: "multi",
            q: "Which factors can influence a website's ranking in search engines? (Select 2)",
            a: ["The amount of money the owner pays for ads", "The quality and relevance of the content", "The color of the website's background", "The age of the person searching"],
            cor: [0, 1],
            required: 2,
            exp: "Search rankings are influenced by both paid advertising and organic quality metrics."
        },
        {
            type: "mcq",
            q: "What is a 'Digital Persona'?",
            a: ["A robot that browses the web", "The version of yourself you present to the online world", "A type of computer virus", "A password manager"],
            cor: 1,
            exp: "A persona is the specific 'character' or image you project through your digital interactions."
        },
        {
            type: "mcq",
            q: "Which of these is a 'Fact'?",
            a: ["Math is the hardest subject.", "The capital of France is Paris.", "The beach is better than the mountains.", "Blue is a beautiful color."],
            cor: 1,
            exp: "Facts are objective truths that remain true regardless of personal opinion."
        },
        {
            type: "mcq",
            q: "If an author is not listed on a website, what should you do?",
            a: ["Assume the website is written by the government", "Look for an 'About Us' or 'Contact' page to identify the organization", "Assume the information is 100% false", "Make up a name for the author"],
            cor: 1,
            exp: "The organization responsible for the site often acts as the 'author' if no individual is named."
        },
        {
            type: "yesno",
            q: "Is information on social media usually fact-checked?",
            statements: [
                "Yes, everything on Facebook is verified by scientists.",
                "No, most social media platforms allow users to post whatever they want.",
                "Some platforms have added 'fact-check' labels to viral posts."
            ],
            cor: [false, true, true],
            exp: "Social media is largely unverified, though some platforms now attempt to flag obvious misinformation."
        },
        {
            type: "multi",
            q: "Why might someone create a 'Fake' digital identity? (Select 2)",
            a: ["To protect their privacy in dangerous situations", "To strictly follow the law", "To deceive or scam others", "To increase their hardware performance"],
            cor: [0, 2],
            required: 2,
            exp: "Fake identities can be used for both protection (privacy) and harm (deception)."
        },
        {
            type: "mcq",
            q: "What is the final step in the research process?",
            a: ["Deleting all your notes", "Citing your sources and reviewing your findings", "Buying a new computer", "Changing your email password"],
            cor: 1,
            exp: "Closing the loop with citations and review ensures the integrity of your work."
        }
    ],
    l1_lesson3: [
        // --- 1. TYPES OF WEBSITES & SOURCES ---
        {
            type: "matching",
            q: "Match the website type to its primary purpose:",
            pairs: [
                { term: "Business Site", definition: "Describes products/services and handles online purchases." },
                { term: "Government Site", definition: "Provides official forms, laws, and department information." },
                { term: "Wiki Site", definition: "Allows users to collaboratively add, edit, or rearrange content." },
                { term: "Social Media", definition: "Enables subscribers to share media and chat in real-time." }
            ],
            exp: "Different websites serve specific professional, social, or collaborative functions."
        },
        {
            type: "mcq",
            q: "What is the primary characteristic of a 'Blog'?",
            a: ["It is a search engine like Google", "It is a site where individuals share comments and experiences on specific topics", "It is only for downloading government forms", "It is a private database for large corporations"],
            cor: 1,
            exp: "Blogs (Web Logs) are platforms for personal or topical commentary, often organized chronologically."
        },
        {
            type: "categorization",
            q: "Categorize these platforms based on their primary content type:",
            categories: ["Multimedia Sharing", "Reference/News"],
            items: [
                { name: "YouTube", category: "Multimedia Sharing" },
                { name: "RSS Feeds", category: "Reference/News" },
                { name: "Instagram", category: "Multimedia Sharing" },
                { name: "Online Encyclopedias", category: "Reference/News" }
            ],
            exp: "Multimedia sites focus on visuals/audio, while news/reference sites focus on information delivery."
        },
        {
            type: "mcq",
            q: "What does 'RSS' stand for in news-related websites?",
            a: ["Real Simple Syndication", "Random Source Search", "Rapid System Stream", "Remote Site Synchronization"],
            cor: 0,
            exp: "RSS allows users to receive current news updates and stories as they occur."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about Website Content:",
            statements: [
                "Educational websites (.edu) are always free of bias.",
                "Government websites provide downloadable files and official forms.",
                "Wikis are the most reliable source for scientific facts because anyone can edit them."
            ],
            cor: [false, true, false],
            exp: "Government sites are for official data; Wikis and Educational sites still require critical evaluation for accuracy or bias."
        },

        // --- 2. SEARCH ENGINES VS. BROWSERS ---
        {
            type: "mcq",
            q: "What is the fundamental difference between a Web Browser and a Search Engine?",
            a: ["A browser is a website; a search engine is a hardware device", "A browser is software used to access the web; a search engine is a tool used to find information within the web", "They are exactly the same thing", "A search engine is needed to turn on the computer"],
            cor: 1,
            exp: "You use a browser (like Chrome) to visit a search engine (like Google)."
        },
        {
            type: "multi",
            q: "Which of the following are examples of Search Engines? (Select 3)",
            a: ["Google", "Bing", "Safari", "Yahoo!", "Microsoft Edge"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Google, Bing, and Yahoo! are search engines. Safari and Edge are browsers."
        },
        {
            type: "matching",
            q: "Match the search tool to its description:",
            pairs: [
                { term: "Keywords", definition: "Specific words or phrases used to define what you are looking for." },
                { term: "Search Index", definition: "A massive database of web pages compiled by a search engine." },
                { term: "Filters", definition: "Tools that narrow results by date, size, or file type." }
            ],
            exp: "Search engines use keywords to query their index and provide filters to refine the results."
        },

        // --- 3. ADVANCED SEARCH STRATEGIES (BOOLEAN & SYNTAX) ---
        {
            type: "mcq",
            q: "When searching, what is the effect of putting a phrase in 'Quotation Marks'?",
            a: ["The search engine will ignore those words", "The search engine will find results that contain that exact phrase in that exact order", "The search engine will translate the phrase", "The search engine will find synonyms for those words"],
            cor: 1,
            exp: "Quotes are used for exact match searches."
        },
        {
            type: "matching",
            q: "Match the Boolean Operator to its function:",
            pairs: [
                { term: "AND", definition: "Finds results that contain BOTH terms." },
                { term: "OR", definition: "Finds results that contain EITHER term." },
                { term: "NOT", definition: "Excludes results containing the specified term." }
            ],
            exp: "Boolean operators help broaden or narrow your search logic."
        },
        {
            type: "mcq",
            q: "In search syntax, what does the Asterisk (*) symbol represent?",
            a: ["A spelling error", "A wildcard that acts as a placeholder for any word or letter", "An excluded word", "An important keyword"],
            cor: 1,
            exp: "Wildcards (*) are useful when you don't know the full name or phrase you are searching for."
        },
        {
            type: "multi",
            q: "Which actions can help narrow down your search results? (Select 3)",
            a: ["Using more specific keywords", "Using Boolean operators", "Searching in all caps", "Applying date filters", "Typing the URL in the search box"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Specific keywords, logic (AND/NOT), and filters (Date/Type) are the best ways to refine results."
        },
        {
            type: "ordering",
            q: "Order the steps for a successful research session:",
            items: [
                "Define the specific question or topic.",
                "Identify keywords and potential Boolean operators.",
                "Execute the search in a search engine.",
                "Evaluate the results for credibility and relevance."
            ],
            cor: [0, 1, 2, 3],
            exp: "Planning keywords before searching leads to more efficient results."
        },
        {
            type: "mcq",
            q: "If you search for 'Jaguar NOT Car', what will the results likely focus on?",
            a: ["Luxury vehicles", "The animal (big cat)", "The Jacksonville Jaguars football team", "Car repair manuals"],
            cor: 1,
            exp: "The 'NOT' operator excludes the term 'Car' from the search results."
        },

        // --- 4. SOCIAL MEDIA TOOLS & METADATA ---
        {
            type: "matching",
            q: "Match the social media symbol to its name:",
            pairs: [
                { term: "#", definition: "Hashtag" },
                { term: "@", definition: "Handle / Username" }
            ],
            exp: "Hashtags are for topics; Handles are for specific users."
        },
        {
            type: "mcq",
            q: "What is the primary purpose of a 'Hashtag'?",
            a: ["To send a private message", "To categorize or group content by a specific topic", "To change the font color of a post", "To block a user"],
            cor: 1,
            exp: "Hashtags make it easier for users to find all posts related to a specific subject."
        },
        {
            type: "yesno",
            q: "Regarding social media navigation:",
            statements: [
                "A 'Handle' is a unique username used to identify a person.",
                "Hashtags can only be used on Twitter.",
                "You can search for hashtags to find trending news."
            ],
            cor: [true, false, true],
            exp: "Handles identify users, and hashtags are universal across most platforms for tracking trends."
        },

        // --- 5. INTELLECTUAL PROPERTY & COPYRIGHT ---
        {
            type: "mcq",
            q: "What is 'Intellectual Property'?",
            a: ["Physical land owned by a company", "Creations of the mind, such as inventions, art, or logos", "The price of a software license", "A computer's processing power"],
            cor: 1,
            exp: "Intellectual property (IP) refers to intangible creations that have legal protection."
        },
        {
            type: "mcq",
            q: "When does 'Copyright' typically begin?",
            a: ["As soon as you think of an idea", "As soon as the work is fixed in a tangible form (written, recorded, etc.)", "Only after you pay a lawyer", "Only after it is published in a book"],
            cor: 1,
            exp: "Copyright is automatic once the work is recorded or written down."
        },
        {
            type: "mcq",
            q: "For a single author, how long does copyright protection usually last?",
            a: ["10 years after the work is created", "50 years after the author's death", "70 years after the author's death", "Forever"],
            cor: 2,
            exp: "Standard copyright is 70 years after the death of the creator (or the last surviving creator)."
        },
        {
            type: "categorization",
            q: "Categorize these based on their legal usage status:",
            categories: ["Public Domain", "Copyright Protected"],
            items: [
                { name: "A book published in 1850", category: "Public Domain" },
                { name: "A song released on the radio yesterday", category: "Copyright Protected" },
                { name: "Government documents/works", category: "Public Domain" },
                { name: "A professional photograph on a blog", category: "Copyright Protected" }
            ],
            exp: "Public domain works are free for all; copyright works require permission or fair use."
        },
        {
            type: "mcq",
            q: "What does it mean if a work is in the 'Public Domain'?",
            a: ["It is owned by the general public but you must pay to use it", "It is not protected by intellectual property laws and is free for anyone to use", "It is only available in public libraries", "It is owned by a search engine"],
            cor: 1,
            exp: "Public domain items can be used, shared, and modified by anyone without permission."
        },
        {
            type: "multi",
            q: "Which of the following are protected by Copyright? (Select 3)",
            a: ["Music and Lyrics", "Architectural designs", "Individual facts and data", "Computer software code", "Short common phrases"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Creative works like music, architecture, and code are protected. Facts and common phrases are not."
        },
        {
            type: "mcq",
            q: "What is 'Fair Use'?",
            a: ["The right to copy an entire textbook for free", "A legal doctrine allowing limited use of copyrighted material without permission for purposes like education or news", "The rule that everything on the internet is free", "A type of software license for businesses"],
            cor: 1,
            exp: "Fair use allows for small, transformative, or educational uses of copyrighted material."
        },

        // --- 6. LICENSING & CREATIVE COMMONS ---
        {
            type: "mcq",
            q: "What is 'Creative Commons'?",
            a: ["A search engine for artists", "A non-profit organization that provides standardized licenses for sharing creative work", "A social media site for designers", "A government agency that arrests plagiarists"],
            cor: 1,
            exp: "Creative Commons (CC) helps creators specify exactly how others are allowed to use their work."
        },
        {
            type: "matching",
            q: "Match the Creative Commons license restriction to its meaning:",
            pairs: [
                { term: "Attribution (BY)", definition: "You must give credit to the original creator." },
                { term: "Non-Commercial (NC)", definition: "You cannot use the work for profit." },
                { term: "No Derivatives (ND)", definition: "You cannot change or alter the original work." },
                { term: "ShareAlike (SA)", definition: "New works must be shared under the same license." }
            ],
            exp: "CC licenses use these components to build specific permissions for users."
        },
        {
            type: "yesno",
            q: "Does a Creative Commons license replace Copyright?",
            statements: [
                "Yes, the author gives up all their rights.",
                "No, the author still owns the copyright but grants specific permissions.",
                "No, CC licenses work alongside copyright law."
            ],
            cor: [false, true, true],
            exp: "CC licenses are a way for copyright owners to manage permissions, not give up ownership."
        },
        {
            type: "mcq",
            q: "If you see a 'CC-BY-NC' license on a photo, can you use it on your personal, non-money-making blog?",
            a: ["No, it is private", "Yes, as long as you give credit to the author", "Yes, but only if you pay the author", "No, unless you get written permission first"],
            cor: 1,
            exp: "CC-BY-NC means Attribution (Credit) and Non-Commercial (No profit)."
        },

        // --- 7. CITATIONS & ETHICS ---
        {
            type: "mcq",
            q: "Why is it important to 'Cite' your sources in research?",
            a: ["To make your bibliography look longer", "To give credit to the original author and avoid plagiarism", "To make the search engine work faster", "Because it is required by the computer's OS"],
            cor: 1,
            exp: "Citing sources ensures academic and professional integrity."
        },
        {
            type: "ordering",
            q: "Order the components of a standard website citation (from start to finish):",
            items: [
                "Author or Organization Name",
                "Title of the Article or Page",
                "Name of the Website",
                "URL and Date Accessed"
            ],
            cor: [0, 1, 2, 3],
            exp: "Citations generally follow a pattern of Who, What, Where, and When."
        },
        {
            type: "multi",
            q: "When evaluating a source, which factors should you check for? (Select 2)",
            a: ["The author's credentials", "The background color of the site", "The date the information was last updated", "How many people 'liked' the post"],
            cor: [0, 2],
            required: 2,
            exp: "Expertise and currency (date) are critical for determining reliability."
        },

        // --- 8. ADVANCED SEARCH & EVALUATION ---
        {
            type: "mcq",
            q: "What does the term 'Currency' refer to in research evaluation?",
            a: ["The type of money used to buy the information", "The timeliness or date of the information", "The country where the info was written", "The speed of the internet connection"],
            cor: 1,
            exp: "Currency means checking if the information is still up-to-date and relevant."
        },
        {
            type: "mcq",
            q: "Which of these is a 'Secondary Source'?",
            a: ["An original scientific experiment log", "A textbook summary of scientific discoveries", "A raw video of a space launch", "A personal interview with an astronaut"],
            cor: 1,
            exp: "Secondary sources interpret, analyze, or summarize primary (original) data."
        },
        {
            type: "yesno",
            q: "Regarding search results ranking:",
            statements: [
                "The first result on Google is always the most accurate.",
                "Companies can pay for their websites to appear at the top as 'Ads'.",
                "Search ranking can be influenced by how many other sites link to a page."
            ],
            cor: [false, true, true],
            exp: "Ranking involves both paid advertising and organic algorithms; the top result isn't always the most truthful."
        },
        {
            type: "mcq",
            q: "What is the best way to find a specific PDF file about 'Global Warming'?",
            a: ["Search for 'Global Warming'", "Search for 'Global Warming filetype:pdf'", "Search for 'Global Warming PDF'", "Type 'PDF' in the browser address bar"],
            cor: 1,
            exp: "Using the 'filetype:' operator is the most efficient way to find specific document formats."
        },
        {
            type: "matching",
            q: "Match the search term to its function:",
            pairs: [
                { term: "Search Phrase", definition: "A sequence of words typed into a search engine." },
                { term: "Snippet", definition: "The short description of a webpage shown in search results." },
                { term: "URL", definition: "The unique address used to find a specific page on the web." }
            ],
            exp: "These components make up the basic experience of using a search engine."
        },
        {
            type: "mcq",
            q: "If a website has no listed author, what is the best alternative for a citation?",
            a: ["Use 'Anonymous'", "Use the name of the organization that owns the website", "Do not cite the source at all", "Make up a likely name"],
            cor: 1,
            exp: "The corporate or organizational author is used if no individual is named."
        },
        {
            type: "multi",
            q: "Which of these are characteristics of a 'Public Domain' work? (Select 2)",
            a: ["You can modify the work however you like", "You must pay a royalty to use it", "The copyright has expired", "It is only for government use"],
            cor: [0, 2],
            required: 2,
            exp: "Public domain works are unrestricted because their legal protections have ended."
        },
        {
            type: "mcq",
            q: "Which search would find information about either 'Dolphins' or 'Whales'?",
            a: ["Dolphins AND Whales", "Dolphins NOT Whales", "Dolphins OR Whales", "Dolphins * Whales"],
            cor: 2,
            exp: "OR expands the search to include pages containing either term."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about Copyright:",
            statements: [
                "Facts cannot be copyrighted.",
                "Ideas inside your head are automatically copyrighted.",
                "Copyright protects the way an idea is expressed."
            ],
            cor: [true, false, true],
            exp: "Copyright protects expression (writing/recording), not raw ideas or facts."
        },
        {
            type: "mcq",
            q: "What is the danger of using 'Wildcards' too often?",
            a: ["The search engine will crash", "You may get too many irrelevant results", "It is illegal in some countries", "It slows down your computer's RAM"],
            cor: 1,
            exp: "Wildcards are broad, so using them without specific keywords can lead to an overwhelming amount of data."
        },
        {
            type: "matching",
            q: "Match the intellectual property term to its definition:",
            pairs: [
                { term: "Trademark", definition: "Protects logos, brand names, and slogans." },
                { term: "Patent", definition: "Protects new inventions and technical processes." },
                { term: "Copyright", definition: "Protects creative works like books, art, and music." }
            ],
            exp: "There are different types of IP protection for different types of creations."
        },
        {
            type: "mcq",
            q: "What is 'Plagiarism' in a digital context?",
            a: ["Downloading a file too quickly", "Copying and pasting digital content into your work without credit", "Using a search engine without a license", "Deleting someone else's files"],
            cor: 1,
            exp: "Plagiarism is an ethical theft of ideas or expression."
        },
        {
            type: "multi",
            q: "What information can you find in a search result 'Snippet'? (Select 2)",
            a: ["The full text of the entire website", "A brief summary of the page content", "Highlighted keywords from your search", "The user's private password"],
            cor: [1, 2],
            required: 2,
            exp: "Snippets help you decide if a page is worth clicking by showing a summary and keyword context."
        },
        {
            type: "mcq",
            q: "Why do search engines use 'Spiders' or 'Crawlers'?",
            a: ["To fix broken hardware", "To scan the internet and build an index of web pages", "To infect computers with viruses", "To monitor user browsing history"],
            cor: 1,
            exp: "Crawlers are automated scripts that discover new and updated pages for the search engine's database."
        },
        {
            type: "yesno",
            q: "Can you use a copyrighted image if you find it on Google Images?",
            statements: [
                "Yes, if it is on Google, it is free for everyone.",
                "No, Google is a search engine, not a library of free photos.",
                "You should use the 'Usage Rights' filter to find images you can legally use."
            ],
            cor: [false, true, true],
            exp: "Just because an image is 'searchable' does not mean it is free to use."
        },
        {
            type: "mcq",
            q: "What is the purpose of the 'Attribution' (BY) requirement in Creative Commons?",
            a: ["To ensure the user pays for the work", "To ensure the original creator gets credit for their work", "To allow the user to claim they created it", "To prevent the work from being shared"],
            cor: 1,
            exp: "Attribution is the most common CC requirement, ensuring the creator is acknowledged."
        },
        {
            type: "categorization",
            q: "Categorize these as primary or secondary search criteria:",
            categories: ["Primary Criteria", "Secondary (Refinement)"],
            items: [
                { name: "Main Keywords", category: "Primary Criteria" },
                { name: "File Type (.docx, .pdf)", category: "Secondary (Refinement)" },
                { name: "Exact Phrase (Quotes)", category: "Secondary (Refinement)" },
                { name: "Topic Subject", category: "Primary Criteria" }
            ],
            exp: "You start with broad topics (primary) and use specific tools (secondary) to drill down."
        },
        {
            type: "mcq",
            q: "Which domain extension is most likely to contain academic research papers?",
            a: [".com", ".net", ".edu", ".biz"],
            cor: 2,
            exp: ".edu domains are reserved for higher education institutions."
        },
        {
            type: "multi",
            q: "Which of these are Boolean operators? (Select 3)",
            a: ["BUT", "AND", "OR", "NOT", "WITH"],
            cor: [1, 2, 3],
            required: 3,
            exp: "AND, OR, and NOT are the three standard Boolean operators used in database and web searching."
        },
        {
            type: "mcq",
            q: "What is the best way to exclude a specific word from your search results?",
            a: ["Put the word in quotes", "Place a minus sign (-) or 'NOT' before the word", "Type the word in capital letters", "Add an asterisk after the word"],
            cor: 1,
            exp: "The minus sign (e.g., -recipe) or the NOT operator excludes unwanted topics."
        },
        {
            type: "ordering",
            q: "Order the steps to check if an image is in the Public Domain:",
            items: [
                "Locate the image on its original website.",
                "Check for a copyright symbol (©) or license notice.",
                "Look for the creation date and author's death date.",
                "Verify if it is a government-produced work (often public domain)."
            ],
            cor: [0, 1, 2, 3],
            exp: "Verification requires checking both the license and the age/origin of the work."
        },
        {
            type: "mcq",
            q: "What does the 'ShareAlike' (SA) restriction mean?",
            a: ["You cannot share the work with anyone", "If you modify the work, you must license it under the same terms as the original", "You must share the profit you make from the work", "You can only share the work on social media"],
            cor: 1,
            exp: "ShareAlike ensures that modified versions of a work remain as open as the original."
        },
        {
            type: "mcq",
            q: "What is the primary objective of Information Management?",
            a: ["To delete as much data as possible", "To effectively organize, store, and find information to make decisions", "To speed up a computer's CPU", "To increase the cost of internet service"],
            cor: 1,
            exp: "Information management is about the efficiency and ethics of handling data."
        }
    ],
    l1_lesson4: [
        // --- 1. WORD PROCESSING BASICS ---
        {
            type: "mcq",
            q: "What is a 'Template' in a word processor?",
            a: ["A virus that deletes files", "A pre-designed document with preset layouts and formatting", "A tool used to print on both sides of the paper", "The physical keyboard of the computer"],
            cor: 1,
            exp: "Templates provide a starting point with professional layouts, saving time on design."
        },
        {
            type: "matching",
            q: "Match the formatting tool to its function:",
            pairs: [
                { term: "Bold", definition: "Makes text thicker to stand out." },
                { term: "Italic", definition: "Slants text, often used for titles or emphasis." },
                { term: "Underline", definition: "Places a horizontal line beneath the text." },
                { term: "Strikethrough", definition: "Draws a line through the middle of the text." }
            ],
            exp: "These character formatting options help emphasize specific parts of a document."
        },
        {
            type: "categorization",
            q: "Categorize these commands based on where they are usually found:",
            categories: ["Home Tab", "Backstage View"],
            items: [
                { name: "Font Size & Color", category: "Home Tab" },
                { name: "Save As & Print", category: "Backstage View" },
                { name: "Text Alignment", category: "Home Tab" },
                { name: "Open & New", category: "Backstage View" }
            ],
            exp: "The Home tab contains editing tools; the Backstage view (File menu) contains file management tools."
        },
        {
            type: "mcq",
            q: "Which feature automatically corrects common spelling errors as you type?",
            a: ["AutoPrint", "AutoCorrect", "AutoSave", "AutoLayout"],
            cor: 1,
            exp: "AutoCorrect fixes small typos and capitalization errors instantly."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about 'Cut, Copy, and Paste':",
            statements: [
                "'Copy' removes the original text from the document.",
                "'Cut' places the selected item on the Clipboard.",
                "You can paste the same item multiple times."
            ],
            cor: [false, true, true],
            exp: "Copy leaves the original; Cut removes it; both store the item on the Clipboard for repeated pasting."
        },

        // --- 2. PRESENTATION BASICS (POWERPOINT) ---
        {
            type: "mcq",
            q: "In PowerPoint, what is a 'Transition'?",
            a: ["An animation applied to a specific image", "The visual effect that occurs when moving from one slide to the next", "The sound played during a video", "A way to change the font of the entire deck"],
            cor: 1,
            exp: "Transitions affect the movement between slides; Animations affect objects on a single slide."
        },
        {
            type: "multi",
            q: "Which of the following are standard PowerPoint 'Views'? (Select 3)",
            a: ["Normal View", "Slide Sorter View", "Format View", "Reading View", "Database View"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Normal, Slide Sorter, and Reading are common views used to organize and check presentations."
        },
        {
            type: "matching",
            q: "Match the PowerPoint feature to its purpose:",
            pairs: [
                { term: "Slide Master", definition: "The top slide that controls the theme and layout for all slides." },
                { term: "Speaker Notes", definition: "Hidden text used by the presenter during a speech." },
                { term: "Animations", definition: "Visual effects applied to individual items like text or images." }
            ],
            exp: "The Slide Master ensures consistency, while notes and animations help the delivery."
        },
        {
            type: "ordering",
            q: "Order the steps to create a simple presentation:",
            items: [
                "Select a Design Theme or Template.",
                "Add a Title to the first slide.",
                "Insert new slides and add content (text/images).",
                "Apply Transitions and proofread the content."
            ],
            cor: [0, 1, 2, 3],
            exp: "Starting with a design ensures a cohesive look before adding specific content."
        },
        {
            type: "mcq",
            q: "What is the primary purpose of 'Speaker Notes'?",
            a: ["To show the audience what to say", "To provide the presenter with cues and reminders during a show", "To print large posters", "To record audio for the slide"],
            cor: 1,
            exp: "Speaker Notes are visible only to the presenter (in Presenter View) and not to the audience."
        },

        // --- 3. REFERENCING & ATTRIBUTION ---
        {
            type: "mcq",
            q: "What is 'Plagiarism'?",
            a: ["Saving a file as a PDF", "Passing off someone else's work or ideas as your own", "Using a template from Microsoft Word", "Printing a document in landscape mode"],
            cor: 1,
            exp: "Plagiarism is an ethical and often legal violation involving the theft of intellectual property."
        },
        {
            type: "matching",
            q: "Match the citation term to its definition:",
            pairs: [
                { term: "Attribution", definition: "Giving credit to the creator of a work." },
                { term: "Bibliography", definition: "A list of all sources used at the end of a document." },
                { term: "Citation", definition: "A specific note within the text identifying the source." }
            ],
            exp: "These terms describe the different ways we acknowledge the work of others."
        },
        {
            type: "yesno",
            q: "Is it necessary to cite 'Common Knowledge'?",
            statements: [
                "Yes, you must cite that the Earth is round.",
                "No, facts that are widely known do not require a citation.",
                "Yes, you should always cite everything, including your own name."
            ],
            cor: [false, true, false],
            exp: "Common knowledge (e.g., 'The sun rises in the east') does not require citation."
        },
        {
            type: "multi",
            q: "What information is usually required for a proper website citation? (Select 3)",
            a: ["The author or organization name", "The date the information was accessed", "The computer's serial number", "The URL (web address)", "The font used on the page"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Author, date, and location (URL) are the essential building blocks of a citation."
        },
        {
            type: "mcq",
            q: "Which of the following is an example of 'Fair Use'?",
            a: ["Copying a whole movie and selling it", "Using a small quote from a book for a school book report", "Using a photographer's image for a company logo without paying", "Downloading a cracked version of software"],
            cor: 1,
            exp: "Fair Use allows limited use of copyrighted material for educational or critical purposes."
        },

        // --- 4. SAVING & BACKING UP WORK ---
        {
            type: "mcq",
            q: "What is the difference between 'Save' and 'Save As'?",
            a: ["They are exactly the same", "Save updates the current file; Save As allows you to create a new version or change the file type", "Save As is only for printing", "Save only works on the cloud"],
            cor: 1,
            exp: "Use 'Save As' when you want to rename a file, change its location, or change its format."
        },
        {
            type: "matching",
            q: "Match the file extension to the correct application:",
            pairs: [
                { term: ".docx", definition: "Microsoft Word Document" },
                { term: ".pptx", definition: "Microsoft PowerPoint Presentation" },
                { term: ".pdf", definition: "Portable Document Format (Universal)" },
                { term: ".txt", definition: "Plain Text (No formatting)" }
            ],
            exp: "Extensions tell the operating system which program to use to open the file."
        },
        {
            type: "mcq",
            q: "What is 'AutoSave'?",
            a: ["A feature that automatically prints your work every hour", "A tool that continuously saves your changes to the cloud in real-time", "A way to hide files from other users", "A tool that deletes old files automatically"],
            cor: 1,
            exp: "AutoSave (found in Office 365/OneDrive) prevents data loss by saving every edit as it happens."
        },
        {
            type: "categorization",
            q: "Categorize these storage methods:",
            categories: ["Local Storage", "Cloud Storage"],
            items: [
                { name: "USB Flash Drive", category: "Local Storage" },
                { name: "OneDrive", category: "Cloud Storage" },
                { name: "Internal Hard Drive (C:)", category: "Local Storage" },
                { name: "Google Drive", category: "Cloud Storage" }
            ],
            exp: "Local storage is physical hardware you can touch; cloud storage is online."
        },
        {
            type: "multi",
            q: "Why should you maintain a 'Backup' of your files? (Select 2)",
            a: ["In case your computer's hardware fails", "To make the computer run faster", "In case a file is accidentally deleted or corrupted", "To prevent others from reading your work"],
            cor: [0, 2],
            required: 2,
            exp: "Backups are insurance against hardware failure and human error."
        },

        // --- 5. PRINTING CONCEPTS ---
        {
            type: "mcq",
            q: "What does 'Portrait Orientation' mean?",
            a: ["The page is wider than it is tall", "The page is taller than it is wide", "The page is printed in black and white only", "The page is printed on both sides"],
            cor: 1,
            exp: "Portrait is vertical (like a letter); Landscape is horizontal."
        },
        {
            type: "matching",
            q: "Match the printing term to its meaning:",
            pairs: [
                { term: "Margins", definition: "The white space around the edges of a page." },
                { term: "Collate", definition: "Organizing printed pages in the correct numerical order." },
                { term: "Scaling", definition: "Shrinking or enlarging content to fit the paper." }
            ],
            exp: "These settings control the final physical appearance of your document."
        },
        {
            type: "mcq",
            q: "What is a 'PDF' file primarily used for?",
            a: ["Editing complex 3D graphics", "Sharing documents so they look the same on any device and cannot be easily changed", "Creating large databases", "Speeding up the internet"],
            cor: 1,
            exp: "PDF (Portable Document Format) preserves layout and design across different platforms."
        },
        {
            type: "yesno",
            q: "Evaluate these printing statements:",
            statements: [
                "Print Preview allows you to see how the document will look before using ink.",
                "You can choose to print only specific pages instead of the whole document.",
                "Scaling a document to fit 2 pages onto 1 sheet changes the original file permanently."
            ],
            cor: [true, true, false],
            exp: "Previewing and selecting pages saves resources; scaling only affects the printout, not the file."
        },
        {
            type: "mcq",
            q: "If you want to print a draft of a 20-slide presentation using the least amount of paper, which setting should you use?",
            a: ["Print one slide per page", "Print Handouts (e.g., 6 or 9 slides per page)", "Print in high definition color", "Print in Portrait orientation only"],
            cor: 1,
            exp: "Handouts allow you to condense multiple slides onto a single sheet of paper."
        },

        // --- 6. ADVANCED UI & EDITING ---
        {
            type: "mcq",
            q: "What is the 'Ribbon' in Microsoft Office?",
            a: ["A physical string attached to the mouse", "The tabbed toolbar at the top of the window containing commands", "A type of printer cable", "The scroll bar on the right side"],
            cor: 1,
            exp: "The Ribbon organizes commands into tabs (Home, Insert, Layout, etc.) for easy access."
        },
        {
            type: "multi",
            q: "Which features help you check for errors in a document? (Select 2)",
            a: ["The Thesaurus", "The Spell & Grammar Checker", "The Print Preview", "The Format Painter"],
            cor: [0, 1],
            required: 2,
            exp: "Spell check finds typos, and the Thesaurus helps improve word choice."
        },
        {
            type: "mcq",
            q: "How do you access the 'Backstage View' in Word or PowerPoint?",
            a: ["Double-click the middle of the page", "Click the 'File' tab", "Press the Spacebar five times", "Right-click the desktop"],
            cor: 1,
            exp: "The File tab opens the Backstage view for management tasks like saving and printing."
        },
        {
            type: "mcq",
            q: "What does the 'Undo' command do?",
            a: ["Deletes the entire file", "Reverses the last action you performed", "Repeats the last action", "Saves the file to the cloud"],
            cor: 1,
            exp: "Undo (Ctrl+Z) is essential for fixing mistakes quickly."
        },
        {
            type: "matching",
            q: "Match the alignment to its description:",
            pairs: [
                { term: "Left Align", definition: "Text is flush with the left margin." },
                { term: "Center Align", definition: "Text is positioned equally between margins." },
                { term: "Right Align", definition: "Text is flush with the right margin." },
                { term: "Justified", definition: "Text is spread evenly between both margins." }
            ],
            exp: "Alignment determines how text sits between the left and right edges of the page."
        },
        {
            type: "mcq",
            q: "Which file format is 'Plain Text' and contains no images or formatting?",
            a: [".docx", ".pptx", ".txt", ".pdf"],
            cor: 2,
            exp: ".txt files are basic and can be opened by almost any text-editing program."
        },
        {
            type: "mcq",
            q: "What happens when you 'Export' a file as a PDF?",
            a: ["The original Word file is deleted", "A new version of the file is created in PDF format", "The file is sent to the printer automatically", "The text is translated into another language"],
            cor: 1,
            exp: "Exporting creates a separate copy in a different format while keeping the original intact."
        },
        {
            type: "multi",
            q: "Which of these can be inserted into a PowerPoint slide? (Select 3)",
            a: ["Videos", "Images and Icons", "The physical CPU", "Charts and Tables", "The computer's battery"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Presentations are multimedia tools; you can include video, images, and data visualizations."
        },
        {
            type: "mcq",
            q: "What is the purpose of the 'Clipboard'?",
            a: ["To hold a piece of paper on your desk", "A temporary storage area for items that have been cut or copied", "To organize your email inbox", "To speed up the computer's fan"],
            cor: 1,
            exp: "The Clipboard acts as a 'waiting room' for data you want to move or copy."
        },
        {
            type: "yesno",
            q: "Can you edit a file while it is in 'Print Preview'?",
            statements: [
                "Yes, you can type new text directly in the preview.",
                "No, you must return to the Edit screen to make changes.",
                "You can change some settings like margins, but not the text itself."
            ],
            cor: [false, true, true],
            exp: "Print Preview is for viewing; you must exit it to change the actual content of the document."
        },
        {
            type: "mcq",
            q: "What is 'Version History'?",
            a: ["A list of every computer you have ever owned", "A feature that allows you to view and restore older versions of a cloud-saved file", "A way to check the history of a search engine", "A type of antivirus software"],
            cor: 1,
            exp: "Version history is useful if you make a mistake and need to go back to how the file looked yesterday."
        },
        {
            type: "categorization",
            q: "Categorize these based on their effect on a presentation:",
            categories: ["Visual Interest", "Organization"],
            items: [
                { name: "Adding Transitions", category: "Visual Interest" },
                { name: "Using Sections to group slides", category: "Organization" },
                { name: "Inserting a Chart", category: "Visual Interest" },
                { name: "Arranging Slide Order", category: "Organization" }
            ],
            exp: "Design elements add visual appeal; slide sorting and sections add logical structure."
        },
        {
            type: "mcq",
            q: "What is the 'Footer' of a document?",
            a: ["The title at the top of the page", "Information that appears at the bottom of every page", "The first paragraph of a book", "A list of definitions"],
            cor: 1,
            exp: "Headers (top) and Footers (bottom) are used for page numbers, dates, and author names."
        },
        {
            type: "matching",
            q: "Match the shortcut to the action:",
            pairs: [
                { term: "Ctrl + S", definition: "Save the current file." },
                { term: "Ctrl + P", definition: "Open the Print menu." },
                { term: "Ctrl + C", definition: "Copy the selection." },
                { term: "Ctrl + V", definition: "Paste the selection." }
            ],
            exp: "Shortcuts increase efficiency by allowing you to perform actions without using the mouse."
        },
        {
            type: "mcq",
            q: "Which tab would you use to change the margins or orientation of a Word document?",
            a: ["Insert", "Home", "Layout", "Review"],
            cor: 2,
            exp: "The Layout tab contains page setup options like margins, orientation, and size."
        },
        {
            type: "multi",
            q: "What should you check before clicking 'Print'? (Select 2)",
            a: ["If the correct printer is selected", "The current battery level of your phone", "The number of copies you need", "The desktop wallpaper color"],
            cor: [0, 2],
            required: 2,
            exp: "Checking the printer destination and quantity prevents wasted ink and paper."
        },
        {
            type: "mcq",
            q: "What does 'Scaling' a print job mean?",
            a: ["Changing the color of the text", "Adjusting the size of the content to fit a specific paper size", "Measuring the weight of the paper", "Increasing the speed of the printer"],
            cor: 1,
            exp: "Scaling allows you to fit large documents onto smaller sheets (like A4)."
        },
        {
            type: "yesno",
            q: "Does a 'Save As' command delete your original file?",
            statements: [
                "Yes, it replaces the old file with the new one.",
                "No, it creates a second, separate file.",
                "Only if you give the new file the exact same name and location."
            ],
            cor: [false, true, true],
            exp: "Save As creates a copy; it only replaces the original if you overwrite it intentionally."
        },
        {
            type: "mcq",
            q: "What is the primary benefit of using 'Cloud Storage' for work?",
            a: ["It makes the files larger", "It allows you to access your work from any device with an internet connection", "It prevents you from needing a password", "It only works on Apple computers"],
            cor: 1,
            exp: "Cloud storage offers mobility and easy collaboration across different devices."
        },
        {
            type: "multi",
            q: "Which of these are forms of 'Intellectual Property'? (Select 2)",
            a: ["A unique computer program you wrote", "A rock you found in the park", "A song you composed", "A standard desk chair"],
            cor: [0, 2],
            required: 2,
            exp: "IP covers original creations like software, music, and art."
        },
        {
            type: "ordering",
            q: "Order these steps for quoting a source in an essay:",
            items: [
                "Copy the exact words from the source.",
                "Place quotation marks around the text.",
                "Add an in-text citation (e.g., Author Name).",
                "Add the full source details to the Bibliography."
            ],
            cor: [0, 1, 2, 3],
            exp: "Proper quoting requires mechanical accuracy and legal attribution."
        },
        {
            type: "mcq",
            q: "In PowerPoint, where do you find 'Themes'?",
            a: ["Insert Tab", "Design Tab", "Transitions Tab", "View Tab"],
            cor: 1,
            exp: "The Design tab houses themes that apply colors, fonts, and effects to the whole presentation."
        },
        {
            type: "mcq",
            q: "What is 'Duplex Printing'?",
            a: ["Printing in two different colors", "Printing on both sides of a single sheet of paper", "Printing two copies at once", "Printing very quickly"],
            cor: 1,
            exp: "Duplex (two-sided) printing is an effective way to save paper."
        },
        {
            type: "matching",
            q: "Match the 'Review' feature to its use:",
            pairs: [
                { term: "Word Count", definition: "Tells you how many words are in the document." },
                { term: "Thesaurus", definition: "Finds synonyms (similar words) for a selected word." },
                { term: "Grammar Check", definition: "Identifies potential errors in sentence structure." }
            ],
            exp: "The Review tab helps refine and polish the quality of your writing."
        },
        {
            type: "mcq",
            q: "What is the 'Status Bar' in Microsoft Word?",
            a: ["The area at the bottom showing page count and word count", "The bar where you type the file name", "The menu for selecting fonts", "The button for closing the app"],
            cor: 0,
            exp: "The status bar at the bottom provides quick information about the document's state."
        },
        {
            type: "mcq",
            q: "When would you use 'Landscape' orientation?",
            a: ["For a standard business letter", "For a wide table, chart, or certificate", "For a narrow poem", "To save ink"],
            cor: 1,
            exp: "Landscape provides more horizontal space, which is better for wide visuals."
        },
        {
            type: "multi",
            q: "Identify benefits of 'PDF' format: (Select 2)",
            a: ["The layout stays the same on any screen", "It allows everyone to edit the text for free", "It is widely accepted for official forms and resumes", "It increases the file size significantly"],
            cor: [0, 2],
            required: 2,
            exp: "PDFs are professional, consistent, and widely compatible."
        },
        {
            type: "yesno",
            q: "Is 'Saving to the Cloud' a form of backup?",
            statements: [
                "Yes, because the file exists on a remote server.",
                "No, because you still only have one copy if you don't sync properly.",
                "Yes, it protects your data if your local computer is stolen or broken."
            ],
            cor: [true, false, true],
            exp: "Cloud storage is a powerful backup tool because it keeps data off your physical device."
        },
        {
            type: "mcq",
            q: "What is the 'ScreenTip' feature in Office?",
            a: ["A way to clean your monitor", "A small box that appears when you hover over a button to explain what it does", "A type of virus warning", "A shortcut to the internet"],
            cor: 1,
            exp: "ScreenTips help users learn the interface by providing labels for icons."
        },
        {
            type: "mcq",
            q: "Which of the following is an 'Acceptable Practice' when using digital content?",
            a: ["Citing all sources used in your work", "Using an image without checking its license", "Copying a whole blog post and putting your name on it", "Sharing a paid software license with 10 friends"],
            cor: 0,
            exp: "Citing sources is the only ethical and professional choice when using others' content."
        }
    ],
    l1_lesson5: [
        // --- 1. THE EVOLUTION OF DIGITAL COMMUNICATION ---
        {
            type: "mcq",
            q: "What was a 'BBS' (Bulletin Board System) in the early days of the internet?",
            a: ["A physical wooden board in a school", "An electronic message board where users logged in to share messages or files", "A type of modern social media like TikTok", "A hardware device used to print emails"],
            cor: 1,
            exp: "BBS systems were the early precursors to modern forums and social media."
        },
        {
            type: "mcq",
            q: "What is the primary characteristic of a 'Blog'?",
            a: ["It is a private diary no one can see", "It is an online journal where creators post articles and others can comment", "It is a hardware component of a router", "It is a type of encrypted email"],
            cor: 1,
            exp: "Blogs allow individuals to share expertise or opinions and build a following (traffic)."
        },
        {
            type: "yesno",
            q: "Evaluate these statements about early communication:",
            statements: [
                "Early computer users often relied on trial and error to learn software.",
                "BBS systems allowed for public discussion.",
                "In the early days, users could only get help via video calls."
            ],
            cor: [true, true, false],
            exp: "Early help was usually in-person or via phone/BBS; video calls were not common then."
        },

        // --- 2. INTERACTING WITH OTHERS ---
        {
            type: "mcq",
            q: "What is required to interact with others on a specific social network?",
            a: ["A high-speed printer", "An account for access", "A degree in computer science", "A wired Ethernet connection"],
            cor: 1,
            exp: "Most digital environments require a user account to post, comment, or share."
        },
        {
            type: "mcq",
            q: "Why is it important to be 'Inclusive' in your digital language?",
            a: ["To make sure everyone has a password", "To demonstrate respect for people of different cultures and beliefs", "To bypass the email spam filter", "To increase the speed of your internet"],
            cor: 1,
            exp: "Inclusive language shows respect for a global audience with diverse traditions and values."
        },
        {
            type: "matching",
            q: "Match the interaction type to its description:",
            pairs: [
                { term: "Posting", definition: "Sharing media or comments to your own or others' accounts." },
                { term: "Commenting", definition: "Responding to someone else's digital content." },
                { term: "Inclusive Language", definition: "Words that show respect for all cultures and beliefs." }
            ],
            exp: "These are the basic building blocks of digital social interaction."
        },
        {
            type: "mcq",
            q: "If you encounter a comment online that does not match your values, what is the best professional response?",
            a: ["Respond in a negative and aggressive manner", "Take care not to judge and respond thoughtfully or not at all", "Immediately report the person to the police", "Delete your own account"],
            cor: 1,
            exp: "Digital citizenship involves respecting different opinions even when you disagree."
        },

        // --- 3. EMAIL MECHANICS (TO, CC, BCC) ---
        {
            type: "mcq",
            q: "What does 'Cc' stand for in an email?",
            a: ["Carbon Copy", "Computer Connection", "Correct Content", "Cloud Copy"],
            cor: 0,
            exp: "Cc is used to send a copy of an email to someone for informational purposes."
        },
        {
            type: "mcq",
            q: "What is the primary purpose of the 'Bcc' (Blind Carbon Copy) field?",
            a: ["To send an email to a person who is blind", "To send a copy of an email to someone without the other recipients knowing", "To make the email send faster", "To send an email to everyone in the world"],
            cor: 1,
            exp: "Recipients in the Bcc field are hidden from all other recipients."
        },
        {
            type: "matching",
            q: "Match the email field to the correct recipient type:",
            pairs: [
                { term: "To", definition: "The primary recipient(s) of the message." },
                { term: "Cc", definition: "Individuals who receive a copy for information only." },
                { term: "Bcc", definition: "Individuals who receive a copy secretly." }
            ],
            exp: "Understanding these fields ensures you communicate effectively and maintain privacy."
        },
        {
            type: "multi",
            q: "Which email fields allow recipients to see who else received the message? (Select 2)",
            a: ["To", "Cc", "Bcc", "Subject Line"],
            cor: [0, 1],
            required: 2,
            exp: "Everyone can see who is in the 'To' and 'Cc' fields, but no one sees the 'Bcc' list."
        },

        // --- 4. RESPONDING TO EMAIL ---
        {
            type: "mcq",
            q: "What happens when you click 'Reply'?",
            a: ["Your message is sent to everyone on the original email list", "Your message is sent only to the original sender", "The email is deleted", "The email is forwarded to a new person"],
            cor: 1,
            exp: "Reply is for one-on-one communication with the sender."
        },
        {
            type: "mcq",
            q: "What happens when you click 'Reply All'?",
            a: ["Your message is sent only to the sender", "Your message is sent to everyone in the 'To' and 'Cc' fields", "The email is sent to your Bcc list", "The email is saved as a draft"],
            cor: 1,
            exp: "Reply All ensures everyone involved in the conversation stays updated."
        },
        {
            type: "mcq",
            q: "When should you use the 'Forward' option?",
            a: ["When you want to send a copy of the message to a new person who wasn't on the original list", "When you want to delete the email", "When you want to reply to the sender only", "When you want to hide your identity"],
            cor: 0,
            exp: "Forwarding passes the entire message history to a third party."
        },
        {
            type: "yesno",
            q: "Evaluate these email response scenarios:",
            statements: [
                "Using 'Reply All' for a private message is a good idea.",
                "You should use 'Bcc' when sending a mass email to protect people's privacy.",
                "Forwarding an email always sends the attachments by default."
            ],
            cor: [false, true, true],
            exp: "Reply All should be avoided for private chats; Bcc is excellent for privacy in large groups."
        },

        // --- 5. DIGITAL ETIQUETTE & NETIQUETTE ---
        {
            type: "mcq",
            q: "What is 'Netiquette'?",
            a: ["A type of high-speed internet cable", "The informal code of conduct for respectful online communication", "A software for blocking ads", "A social media site for lawyers"],
            cor: 1,
            exp: "Netiquette is short for 'Network Etiquette'."
        },
        {
            type: "mcq",
            q: "Why should you avoid using ALL CAPS in an email or post?",
            a: ["It takes up too much space on the screen", "It is interpreted as shouting and can be seen as aggressive", "It uses more ink when printing", "It makes the file size too large"],
            cor: 1,
            exp: "Typing in all caps is generally considered rude or 'shouting' in digital spaces."
        },
        {
            type: "multi",
            q: "Which of these are good 'Netiquette' practices? (Select 3)",
            a: ["Being thoughtful before posting", "Using inclusive language", "Using 'Reply All' for every single message", "Checking your spelling and grammar", "Ignoring the feelings of others"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Respect, thoughtfulness, and clear writing are the keys to good netiquette."
        },

        // --- 6. MESSAGING & COLLABORATION TOOLS ---
        {
            type: "mcq",
            q: "What is the main advantage of 'Instant Messaging' (IM) over Email?",
            a: ["It is more formal", "It allows for real-time, synchronous communication", "It can only be used on desktop computers", "It does not require an account"],
            cor: 1,
            exp: "IM is much faster and intended for immediate back-and-forth conversation."
        },
        {
            type: "mcq",
            q: "What does 'Synchronous' communication mean?",
            a: ["Communication that happens at the same time (real-time)", "Communication that has a delay (like a letter)", "Communication that only uses text", "Communication between two robots"],
            cor: 0,
            exp: "Video calls and IM are synchronous; Email and Blogs are asynchronous."
        },
        {
            type: "categorization",
            q: "Categorize these communication methods:",
            categories: ["Synchronous (Real-time)", "Asynchronous (Delayed)"],
            items: [
                { name: "Video Conferencing", category: "Synchronous (Real-time)" },
                { name: "Email", category: "Asynchronous (Delayed)" },
                { name: "Instant Messaging", category: "Synchronous (Real-time)" },
                { name: "Blog Posts", category: "Asynchronous (Delayed)" }
            ],
            exp: "Real-time tools require both parties to be present; delayed tools allow for replies later."
        },

        // --- 7. PROFESSIONALISM & BRANDING ---
        {
            type: "mcq",
            q: "What does your 'Digital Identity' include?",
            a: ["Only your password", "A combination of your profile, posts, likes, and the people you follow", "The physical hardware of your computer", "Your home address only"],
            cor: 1,
            exp: "Your digital identity is a history of all your online actions."
        },
        {
            type: "mcq",
            q: "Who might look at your social media or digital identity in the future?",
            a: ["Only your best friends", "Potential employers and school admissions boards", "No one, because the internet is private", "Only the government"],
            cor: 1,
            exp: "Professional organizations often check digital footprints to assess a candidate's character."
        },
        {
            type: "yesno",
            q: "Can posting a thoughtful comment on a professional blog help your career?",
            statements: [
                "Yes, it can build your reputation as an authority on a subject.",
                "No, no one reads comments.",
                "Yes, if the comment is helpful and well-written."
            ],
            cor: [true, false, true],
            exp: "Meaningful participation in digital communities builds a positive personal brand."
        },

        // --- 8. SECURITY & PRIVACY IN COMMUNICATION ---
        {
            type: "mcq",
            q: "What is 'Spam'?",
            a: ["A type of encrypted file", "Unsolicited or junk email usually sent in bulk", "A virus that breaks your screen", "A specialized coding language"],
            cor: 1,
            exp: "Spam is the digital equivalent of 'junk mail'."
        },
        {
            type: "mcq",
            q: "What is 'Phishing'?",
            a: ["A way to catch fish using a computer", "A fraudulent attempt to steal sensitive info like passwords by pretending to be a trustworthy source", "A type of high-speed internet", "A social media trend"],
            cor: 1,
            exp: "Phishing usually happens through deceptive emails or messages."
        },
        {
            type: "multi",
            q: "How can you protect yourself when communicating online? (Select 2)",
            a: ["Share your password with close friends", "Never click on suspicious links in emails", "Use the same password for every account", "Be careful about what personal information you share publicly"],
            cor: [1, 3],
            required: 2,
            exp: "Avoiding bad links and keeping personal data private are essential security steps."
        },

        // --- 9. VIDEO CONFERENCING ---
        {
            type: "mcq",
            q: "Which hardware is essential for a 'Video Conference'?",
            a: ["A scanner", "A camera (webcam) and a microphone", "A high-end graphics card", "A joystick"],
            cor: 1,
            exp: "To be seen and heard, you need a webcam and a microphone."
        },
        {
            type: "mcq",
            q: "What does 'Muting' your microphone do during a call?",
            a: ["Turns off your video", "Prevents others from hearing any sound from your side", "Ends the meeting", "Records the meeting"],
            cor: 1,
            exp: "Muting is good netiquette when you are not speaking to avoid background noise."
        },
        {
            type: "matching",
            q: "Match the tool to its function:",
            pairs: [
                { term: "Screen Sharing", definition: "Allows others to see your computer desktop." },
                { term: "Chat Box", definition: "Allows participants to type messages during a video call." },
                { term: "Wait Room", definition: "A security feature where the host must admit participants." }
            ],
            exp: "These features help manage and enhance digital meetings."
        },

        // --- 10. GENERAL KNOWLEDGE & RECAP ---
        {
            type: "mcq",
            q: "What is the best way to handle 'Trolls' (people who post mean things to get a reaction)?",
            a: ["Argue with them for hours", "Ignore them and do not give them the reaction they want", "Invite them to a private call", "Give them your home address"],
            cor: 1,
            exp: "Ignoring trolls is the most effective way to stop their behavior."
        },
        {
            type: "ordering",
            q: "Order the steps for sending a professional email:",
            items: [
                "Enter the recipient's address in the 'To' field.",
                "Add a clear and concise Subject Line.",
                "Write a professional greeting and the body of the message.",
                "Proofread for errors and then click Send."
            ],
            cor: [0, 1, 2, 3],
            exp: "A professional email needs a clear structure and a final check before sending."
        },
        {
            type: "mcq",
            q: "What information should ALWAYS be included in a professional email?",
            a: ["A link to your favorite game", "A clear Subject Line and a professional signature", "Your social security number", "A list of your favorite foods"],
            cor: 1,
            exp: "Subject lines tell the reader what the email is about; signatures tell them who you are."
        },
        {
            type: "mcq",
            q: "If you want to send an email to a group of people but don't want them to see each other's addresses, which field should you use?",
            a: ["To", "Cc", "Bcc", "Forward"],
            cor: 2,
            exp: "Bcc hides the list of recipients from one another."
        },
        {
            type: "mcq",
            q: "What is a 'Handle' on social media?",
            a: ["The physical side of the computer", "A unique username preceded by '@'", "A type of mouse", "The power button"],
            cor: 1,
            exp: "Handles (like @User123) are used to identify and mention people on social platforms."
        },
        {
            type: "multi",
            q: "Which of these are examples of 'Social Media'? (Select 3)",
            a: ["Microsoft Word", "Instagram", "Facebook", "Twitter (X)", "Calculator"],
            cor: [1, 2, 3],
            required: 3,
            exp: "Social media platforms are designed for sharing and interaction."
        },
        {
            type: "mcq",
            q: "What does it mean to 'Forward' an email?",
            a: ["To delete it forever", "To send the original message to a new recipient", "To change the font of the message", "To block the sender"],
            cor: 1,
            exp: "Forwarding passes the content to someone who was not originally included."
        },
        {
            type: "yesno",
            q: "Is it okay to share someone else's private email with the public?",
            statements: [
                "Yes, information wants to be free.",
                "No, that is a violation of privacy and bad digital citizenship.",
                "Only if you think it is funny."
            ],
            cor: [false, true, false],
            exp: "Respecting the privacy of others' communications is a core part of digital ethics."
        },
        {
            type: "mcq",
            q: "What is the purpose of the 'Subject Line'?",
            a: ["To list your home address", "To give the recipient a brief idea of what the email is about", "To store your password", "To list the date"],
            cor: 1,
            exp: "A good subject line helps the recipient prioritize and organize their inbox."
        },
        {
            type: "mcq",
            q: "What is a 'Digital Footprint'?",
            a: ["A piece of hardware you step on", "The permanent record of your activities online", "A special kind of computer mouse", "A way to measure the size of a monitor"],
            cor: 1,
            exp: "Every action online leaves a trace, forming your digital footprint."
        },
        {
            type: "matching",
            q: "Match the communication type to its primary tool:",
            pairs: [
                { term: "Formal Business", definition: "Email" },
                { term: "Quick Team Update", definition: "Instant Messaging" },
                { term: "Face-to-Face Remote", definition: "Video Conferencing" }
            ],
            exp: "Choosing the right tool for the task is a key communication skill."
        },
        {
            type: "mcq",
            q: "What should you do before clicking 'Reply All'?",
            a: ["Nothing, just send it", "Think if everyone on the list really needs to see your response", "Check if you have enough ink", "Restart your computer"],
            cor: 1,
            exp: "Unnecessary 'Reply All' messages create digital clutter (inbox bloat)."
        },
        {
            type: "mcq",
            q: "Which of these is a sign of a professional email?",
            a: ["Lots of emojis and slang", "A clear subject line and correct grammar", "Using all capital letters", "No greeting or closing"],
            cor: 1,
            exp: "Professionalism in email is marked by clarity, respect, and proper formatting."
        },
        {
            type: "multi",
            q: "What are common reasons to use 'Cc'? (Select 2)",
            a: ["To keep a manager informed of a project's progress", "To hide the recipient's identity", "To send a copy to someone for their records", "To send an email to a secret contact"],
            cor: [0, 2],
            required: 2,
            exp: "Cc is for transparency and record-keeping among known parties."
        },
        {
            type: "mcq",
            q: "If an email is 'Asynchronous', it means:",
            a: ["Participants must be online at the same time", "Participants do NOT need to be online at the same time to communicate", "It only works on mobile phones", "It is extremely fast"],
            cor: 1,
            exp: "Email is asynchronous because the sender and receiver do not need to be present simultaneously."
        },
        {
            type: "yesno",
            q: "Does your digital reputation only affect your personal life?",
            statements: [
                "Yes, work and school don't care about the internet.",
                "No, it can impact your college applications and job opportunities.",
                "It only matters if you are a celebrity."
            ],
            cor: [false, true, false],
            exp: "Employers and schools frequently use the internet to screen applicants."
        },
        {
            type: "mcq",
            q: "What is an 'Attachment' in an email?",
            a: ["A physical wire", "A file (like an image or document) sent along with the email", "A type of digital signature", "The 'To' field"],
            cor: 1,
            exp: "Attachments allow you to share separate files via email."
        },
        {
            type: "mcq",
            q: "What is the 'Drafts' folder for?",
            a: ["Storing deleted emails", "Storing emails you have started but not yet sent", "Storing emails that failed to send", "Storing spam"],
            cor: 1,
            exp: "Drafts allow you to save your progress and finish an email later."
        },
        {
            type: "multi",
            q: "Which actions help maintain a positive digital reputation? (Select 2)",
            a: ["Posting helpful and accurate information", "Responding angrily to every criticism", "Being respectful in comments", "Sharing private secrets of others"],
            cor: [0, 2],
            required: 2,
            exp: "Helpfulness and respect are the foundations of a good digital reputation."
        },
        {
            type: "mcq",
            q: "Why should you use a 'Signature' in your professional emails?",
            a: ["To make the email look artistic", "To provide your contact information and full name easily", "To encrypt the message", "To prevent the email from being forwarded"],
            cor: 1,
            exp: "A signature makes it easy for others to know who you are and how to reach you."
        },
        {
            type: "mcq",
            q: "What is 'Inclusive Language'?",
            a: ["A language only used by computers", "Words that avoid excluding people based on their background or identity", "A secret code", "A language that uses no vowels"],
            cor: 1,
            exp: "Inclusivity ensures that your message is welcoming to everyone."
        },
        {
            type: "yesno",
            q: "Is an email sent to the wrong person permanent?",
            statements: [
                "No, you can always just delete it from their inbox remotely.",
                "Yes, once it is sent, you generally cannot get it back.",
                "You can sometimes 'Recall' it, but it doesn't always work."
            ],
            cor: [false, true, true],
            exp: "Email is difficult to 'un-send,' so you must double-check recipients before clicking send."
        },
        {
            type: "mcq",
            q: "What is the best title for a Lesson 5 summary?",
            a: ["How to build a PC", "Effective Digital Communication and Etiquette", "History of the Printing Press", "The basics of Windows 11"],
            cor: 1,
            exp: "Lesson 5 is primarily about how we communicate and interact in digital environments."
        }
    ],
    l1_lesson6: [
        // --- 1. DIGITAL COLLABORATION CONCEPTS ---
        {
            type: "mcq",
            q: "What is the primary way digital collaboration increases 'Productivity'?",
            a: ["By making computers run faster", "Through simultaneous activity where multiple team members work on the same project at once", "By decreasing the number of meetings", "By providing free software"],
            cor: 1,
            exp: "Simultaneous activity allows work to progress faster than if people worked one after another."
        },
        {
            type: "mcq",
            q: "How does collaboration improve 'Communication' within a team?",
            a: ["It requires everyone to use the same phone model", "It uses instant messaging features within tools to make talk faster and more efficient", "It forces people to only use email", "It prevents people from talking in person"],
            cor: 1,
            exp: "Collaborative tools often have built-in chat features that streamline team discussion."
        },
        {
            type: "mcq",
            q: "What is a major benefit of collaboration for 'Leadership'?",
            a: ["Easier oversight of projects, contributors, and quality control", "The ability to delete team members' personal files", "Faster internet speeds for the boss", "Automated payroll processing"],
            cor: 0,
            exp: "Leaders can track progress and ensure quality more easily when all work happens in a shared space."
        },
        {
            type: "mcq",
            q: "Collaboration allows a team to be 'Scalable'. What does this mean?",
            a: ["The team can only work on one computer", "The team can add or subtract collaborators based on the expertise needed for a task", "The team members must all be the same height", "The project is printed on a large scale"],
            cor: 1,
            exp: "Scalability in collaboration means bringing in experts only when they are needed for specific duties."
        },
        {
            type: "multi",
            q: "Identify the benefits of digital collaboration: (Select 3)",
            a: ["Increased productivity", "Faster communication", "Lower hardware costs", "Easier leadership oversight", "Unlimited free storage"],
            cor: [0, 1, 3],
            required: 3,
            exp: "Productivity, communication speed, and oversight are core benefits mentioned in Lesson 6."
        },

        // --- 2. SYNCHRONOUS VS. ASYNCHRONOUS ---
        {
            type: "mcq",
            q: "What is 'Synchronous' communication?",
            a: ["Information sent and received with a long delay", "Information sent and received instantly (real-time)", "Communication using only hand signals", "Communication that only happens in writing"],
            cor: 1,
            exp: "Synchronous means 'at the same time'—like a phone call or live chat."
        },
        {
            type: "mcq",
            q: "What is 'Asynchronous' communication?",
            a: ["Communication where there is a time delay between sending and receiving", "Communication that happens at exactly the same time", "Communication that requires a video camera", "Communication between two computers in the same room"],
            cor: 0,
            exp: "Asynchronous means 'not at the same time'—like an email or a forum post."
        },
        {
            type: "categorization",
            q: "Categorize these methods as Synchronous or Asynchronous:",
            categories: ["Synchronous (Real-time)", "Asynchronous (Delayed)"],
            items: [
                { name: "Instant Messaging", category: "Synchronous (Real-time)" },
                { name: "Email", category: "Asynchronous (Delayed)" },
                { name: "Video Conferencing", category: "Synchronous (Real-time)" },
                { name: "Shared Document Comments", category: "Asynchronous (Delayed)" }
            ],
            exp: "Real-time interactions are synchronous; delayed interactions are asynchronous."
        },
        {
            type: "mcq",
            q: "Which of these is an example of 'Asynchronous' collaboration?",
            a: ["A live Zoom meeting", "Leaving a comment on a shared file for a teammate to see later", "A face-to-face conversation", "A live phone call"],
            cor: 1,
            exp: "Comments on files allow people to work on their own schedule, creating a time delay."
        },
        {
            type: "yesno",
            q: "Is a phone call considered 'Asynchronous'?",
            statements: [
                "Yes, because you have to wait for the person to answer.",
                "No, it is Synchronous because the conversation happens in real-time.",
                "Yes, if you leave a voicemail."
            ],
            cor: [false, true, true],
            exp: "The call itself is synchronous, but a voicemail message is asynchronous."
        },

        // --- 3. COLLABORATION TOOLS (MICROSOFT 365) ---
        {
            type: "mcq",
            q: "What is Microsoft 'SharePoint'?",
            a: ["A program for editing photos", "A website creation and management platform used for collaboration", "A type of computer mouse", "A social media app for teenagers"],
            cor: 1,
            exp: "SharePoint is a powerful platform for teams to store, share, and manage documents."
        },
        {
            type: "mcq",
            q: "What are 'Office Online' (or Web Apps)?",
            a: ["Browser-based versions of Word, Excel, and PowerPoint that allow simultaneous editing", "Programs that only work when your computer is turned off", "Games for office workers", "A tool for checking the weather"],
            cor: 0,
            exp: "Web apps allow multiple people to edit the same document at the same time through a browser."
        },
        {
            type: "mcq",
            q: "What is 'Co-authoring'?",
            a: ["When two people write separate books", "The ability for multiple authors to edit a document simultaneously", "A way to print two copies at once", "A tool that checks for plagiarism"],
            cor: 1,
            exp: "Co-authoring is a key feature of cloud tools like Microsoft 365 and Google Workspace."
        },
        {
            type: "matching",
            q: "Match the Microsoft tool to its primary collaboration use:",
            pairs: [
                { term: "Teams", definition: "Hub for teamwork, chat, and video meetings." },
                { term: "SharePoint", definition: "Platform for creating sites and managing shared files." },
                { term: "Office Online", definition: "Browser-based editing of documents." }
            ],
            exp: "Each tool serves a specific role in the Microsoft 365 ecosystem."
        },
        {
            type: "mcq",
            q: "Which tool would a remote employee use to participate in a live team meeting?",
            a: ["SharePoint", "Microsoft Teams", "Windows Explorer", "Calculator"],
            cor: 1,
            exp: "Teams is the primary tool for real-time video conferencing and group chat."
        },

        // --- 4. DIGITAL ETIQUETTE (NETIQUETTE) ---
        {
            type: "mcq",
            q: "What is 'Netiquette'?",
            a: ["A set of rules for building a network", "The customary code of polite behavior in a digital or professional environment", "A way to catch fish using a net and a computer", "A program that blocks internet ads"],
            cor: 1,
            exp: "Netiquette (Network Etiquette) helps ensure digital communication is respectful and professional."
        },
        {
            type: "mcq",
            q: "In digital communication, what does writing in ALL UPPERCASE letters represent?",
            a: ["Great importance", "Shouting", "A whisper", "Professionalism"],
            cor: 1,
            exp: "All caps are interpreted as shouting and can be seen as aggressive or rude."
        },
        {
            type: "yesno",
            q: "Is it professional to use 'Abbreviations' and 'Emoticons' in business communications?",
            statements: [
                "Yes, it makes you look friendly.",
                "No, they are generally not accepted in professional or school settings.",
                "Yes, but only if you use a lot of them."
            ],
            cor: [false, true, false],
            exp: "Professional communication should be clear and avoid slang, emoticons, or text-speak abbreviations."
        },
        {
            type: "mcq",
            q: "What is an 'Appropriately Timed Reply'?",
            a: ["Replying exactly 5 seconds after receiving a message", "Sending a response within a reasonable timeframe expected by your organization", "Waiting a week to make the sender feel ignored", "Replying only at 3:00 AM"],
            cor: 1,
            exp: "Good netiquette includes responding to questions or requests in a timely manner."
        },
        {
            type: "matching",
            q: "Match the Netiquette 'Don't' to the reason why:",
            pairs: [
                { term: "Using All Caps", definition: "Is interpreted as shouting." },
                { term: "Using Slang/Abbreviations", definition: "Appears unprofessional in business." },
                { term: "Delayed Replies", definition: "Slows down team productivity." }
            ],
            exp: "Following these rules keeps digital work environments productive and respectful."
        },

        // --- 5. VISUAL COLLABORATION & ETIQUETTE ---
        {
            type: "mcq",
            q: "Why can 'Visual Collaboration' (Video Calls) be more effective than text?",
            a: ["It uses less data", "It can display a larger range of emotion, meaning, and intention", "It doesn't require a microphone", "It is always faster"],
            cor: 1,
            exp: "Seeing someone's face helps you interpret their tone and intentions more accurately."
        },
        {
            type: "mcq",
            q: "Which of the following is important during a video meeting?",
            a: ["Keeping your camera off and sleeping", "Ensuring you are actively paying attention and aware of your facial expressions", "Eating a loud, crunchy snack", "Muting everyone else's microphone"],
            cor: 1,
            exp: "Because others can see you, active listening and appropriate facial expressions are essential."
        },
        {
            type: "multi",
            q: "What should you check before starting a professional video call? (Select 2)",
            a: ["Your background is appropriate", "Your video game high score", "Your camera and microphone are working", "Your favorite TV show schedule"],
            cor: [0, 2],
            required: 2,
            exp: "A professional environment and working hardware are key for visual collaboration."
        },
        {
            type: "mcq",
            q: "What should you do if a collaborative message contains a question that requires action?",
            a: ["Delete the message", "Send an appropriately timed reply", "Wait for someone else to answer", "Ignore it until the next meeting"],
            cor: 1,
            exp: "Timely responses are a core requirement of digital etiquette."
        },
        {
            type: "mcq",
            q: "Who establishes the specific 'Rules and Guidelines' for electronic communications in a workspace?",
            a: ["The internet service provider", "Your school or organization", "The computer manufacturer", "A random user on social media"],
            cor: 1,
            exp: "Always follow the specific policies set by your employer or school."
        },

        // --- 6. ADVANCED COLLABORATION CONCEPTS ---
        {
            type: "mcq",
            q: "What does 'Simultaneous Editing' mean?",
            a: ["Editing two different files at the same time", "Multiple users editing the same document at the exact same time", "Printing a file while editing it", "Editing a file on two different monitors"],
            cor: 1,
            exp: "Cloud-based tools allow 'real-time' co-authoring where you can see others' changes as they happen."
        },
        {
            type: "mcq",
            q: "Which of the following is a benefit of working with 'Remote' employees?",
            a: ["It makes the office louder", "It allows the organization to access expertise from people regardless of their physical location", "It uses more paper", "It prevents teams from using chat"],
            cor: 1,
            exp: "Remote collaboration bridges geographical gaps, allowing teams to hire the best talent from anywhere."
        },
        {
            type: "ordering",
            q: "Order the steps for a successful collaborative session:",
            items: [
                "Select the appropriate tool (e.g., Teams or SharePoint).",
                "Set clear goals and roles for each collaborator.",
                "Perform simultaneous work or co-authoring.",
                "Review the project for quality control and oversight."
            ],
            cor: [0, 1, 2, 3],
            exp: "Starting with the right tool and clear goals ensures the work is efficient."
        },
        {
            type: "mcq",
            q: "In a collaborative tool, what is the 'Chat' feature primarily used for?",
            a: ["Playing games", "Fast and efficient communication between team members", "Storing large video files", "Replacing the operating system"],
            cor: 1,
            exp: "Chat is the synchronous heart of most collaboration platforms."
        },
        {
            type: "yesno",
            q: "Does 'Visual Collaboration' only refer to video calls?",
            statements: [
                "Yes, it only means Zoom or Teams calls.",
                "No, it can also include shared whiteboards or screen sharing.",
                "Yes, if you can't see the person, it's not visual."
            ],
            cor: [false, true, false],
            exp: "Visual collaboration includes any tool where you can see shared visuals, like screens or digital boards."
        },

        // --- 7. RECAP & SCENARIOS ---
        {
            type: "mcq",
            q: "A team needs to work on a budget spreadsheet together from different cities. Which is the best solution?",
            a: ["Emailing the file back and forth 100 times", "Using a cloud-based spreadsheet with co-authoring enabled", "Mailing a USB drive", "Printing the file and faxing it"],
            cor: 1,
            exp: "Cloud-based co-authoring is the most efficient way to collaborate from different locations."
        },
        {
            type: "mcq",
            q: "If you are unsure of the 'Tone' of a text message from a teammate, what is the best approach?",
            a: ["Assume they are being mean and get angry", "Ask for clarification or suggest a quick video call to understand the intent", "Ignore the message forever", "Block the teammate"],
            cor: 1,
            exp: "Electronic communication is prone to misinterpretation; visual or verbal follow-up can clear up confusion."
        },
        {
            type: "multi",
            q: "Which features are found in Microsoft Teams? (Select 2)",
            a: ["Instant Messaging (Chat)", "Video Conferencing", "Hardware Repair Tool", "Automatic Laundry Service"],
            cor: [0, 1],
            required: 2,
            exp: "Teams focuses on chat and meetings for business and education."
        },
        {
            type: "mcq",
            q: "What is the result of using 'Inclusive' and polite language in a group project?",
            a: ["The project takes longer", "Better teamwork, efficiency, and a positive environment", "It makes no difference", "The software will crash"],
            cor: 1,
            exp: "Respectful communication (Netiquette) is the foundation of successful teamwork."
        },
        {
            type: "mcq",
            q: "Which behavior is a 'Netiquette' violation?",
            a: ["Replying to an email within 2 hours", "Sending a message entirely in ALL CAPS", "Citing your sources in a shared document", "Asking a question in a chat"],
            cor: 1,
            exp: "All caps is considered 'shouting' and is a common netiquette violation."
        },
        {
            type: "mcq",
            q: "Why is 'Quality Control' easier in a digital collaborative environment?",
            a: ["Because the computer fixes all mistakes", "Leaders can easily see all versions and contributors in one place", "Because only one person can edit at a time", "It isn't easier"],
            cor: 1,
            exp: "Oversight is improved when the history of changes and contributions is visible to the leader."
        },
        {
            type: "mcq",
            q: "A 'Wiki' is a type of collaborative tool. What is its main feature?",
            a: ["It is a private diary", "It allows users to add, edit, or rearrange content on a website together", "It is only for watching videos", "It is a type of search engine"],
            cor: 1,
            exp: "Wikis (like Wikipedia) are designed for community-driven information management."
        },
        {
            type: "matching",
            q: "Match the term to its definition:",
            pairs: [
                { term: "Collaborator", definition: "A person working with others on a project." },
                { term: "Real-time", definition: "Happening instantly, without delay." },
                { term: "Misinterpretation", definition: "Understanding a message in a way the sender didn't intend." }
            ],
            exp: "Understanding these terms is vital for digital teamwork."
        },
        {
            type: "mcq",
            q: "If you are in a video call and you aren't speaking, what is a good practice?",
            a: ["Mute your microphone to prevent background noise", "Start playing loud music", "Leave the room without saying anything", "Turn your camera toward the ceiling"],
            cor: 0,
            exp: "Muting when silent is part of good meeting netiquette."
        },
        {
            type: "mcq",
            q: "Which of these makes a team 'Efficient'?",
            a: ["Everyone doing the same task at once", "Using tools that allow for faster communication and simultaneous work", "Only communicating through paper mail", "Having no leader"],
            cor: 1,
            exp: "Efficiency comes from the speed and organization provided by collaboration tools."
        },
        {
            type: "multi",
            q: "What are common features of 'Office Online'? (Select 2)",
            a: ["It requires no internet to work", "It allows co-authoring", "It works through a web browser", "It is only for playing videos"],
            cor: [1, 2],
            required: 2,
            exp: "Office Online is browser-based and built for co-authoring."
        },
        {
            type: "mcq",
            q: "What should you avoid in a 'Visual Collaboration' environment?",
            a: ["Paying attention to the speaker", "Making rude facial expressions or acting distracted", "Using a professional background", "Having a clear microphone"],
            cor: 1,
            exp: "Since people can see you, distracting or rude behavior is unprofessional."
        },
        {
            type: "mcq",
            q: "What is 'Synchronous editing' usually called in Microsoft Office?",
            a: ["Double-saving", "Co-authoring", "Multi-typing", "Auto-printing"],
            cor: 1,
            exp: "Co-authoring is the official term for multiple people editing at once."
        },
        {
            type: "yesno",
            q: "Is 'Digital Etiquette' different from 'Regular Etiquette'?",
            statements: [
                "Yes, because you don't have to be polite online.",
                "No, it is the same principle of respect, just applied to digital tools.",
                "Yes, there are specific rules like 'No All Caps' that only apply online."
            ],
            cor: [false, true, true],
            exp: "While the principles of respect are the same, digital communication has unique rules (like all caps or emoji use)."
        },
        {
            type: "mcq",
            q: "Why is an 'Asynchronous' tool useful for a global team?",
            a: ["Because it requires everyone to wake up at 3 AM", "Because it allows people in different time zones to contribute when they are awake", "Because it is faster than synchronous", "Because it uses no electricity"],
            cor: 1,
            exp: "Delayed communication (like email) is perfect for teams spread across the world."
        },
        {
            type: "mcq",
            q: "What does 'Netiquette' suggest regarding emoticons in a formal essay?",
            a: ["Use at least five per page", "Only use them in the title", "Avoid using them as they are generally not accepted in formal writing", "Use them to replace words"],
            cor: 2,
            exp: "Formal and professional writing should remain clear and free of emoticons."
        },
        {
            type: "matching",
            q: "Match the activity to the communication type:",
            pairs: [
                { term: "Live Zoom Call", definition: "Synchronous" },
                { term: "Posting on a Blog", definition: "Asynchronous" },
                { term: "Microsoft Teams Chat", definition: "Synchronous" }
            ],
            exp: "Identify whether the interaction is instant or delayed."
        },
        {
            type: "mcq",
            q: "In collaboration, what is 'Simultaneous activity'?",
            a: ["Working on tasks at the same time to increase productivity", "Working on tasks one by one in a long line", "Two computers connected by a cable", "A type of physical exercise"],
            cor: 0,
            exp: "Working at the same time is the key to collaborative speed."
        },
        {
            type: "mcq",
            q: "What is the best way to ensure everyone in a collaboration knows what to do?",
            a: ["Hope they figure it out", "Assign clear roles and responsibilities through a collaboration hub", "Send a message in all caps", "Only talk to one person"],
            cor: 1,
            exp: "Organization and role assignment are key to collaborative success."
        },
        {
            type: "multi",
            q: "What are common ways to collaborate 'Visually'? (Select 2)",
            a: ["Screen sharing during a call", "Video conferencing", "Writing a letter by hand", "Using a physical calculator"],
            cor: [0, 1],
            required: 2,
            exp: "Video calls and screen sharing provide visual context to digital work."
        },
        {
            type: "mcq",
            q: "Which term describes a 'Customary code of polite behavior'?",
            a: ["Software", "Etiquette", "Protocol", "Algorithm"],
            cor: 1,
            exp: "Etiquette is the standard for polite and professional behavior."
        },
        {
            type: "mcq",
            q: "What happens to efficiency when team members 'add expertise' as needed?",
            a: ["It decreases", "It increases because specialized duties are met by experts", "It stays the same", "The team stops working"],
            cor: 1,
            exp: "Bringing in experts for specific parts of a project makes the whole process better."
        },
        {
            type: "mcq",
            q: "When communicating digitally, 'Open to Misinterpretation' means:",
            a: ["The file won't open", "The reader might understand a different meaning or emotion than intended", "The computer is broken", "The message was deleted"],
            cor: 1,
            exp: "Without voice or facial cues, text can easily be misunderstood."
        },
        {
            type: "mcq",
            q: "Which Microsoft 365 tool is best for 'website creation' for a team?",
            a: ["Excel", "SharePoint", "Word", "Teams"],
            cor: 1,
            exp: "SharePoint is primarily a platform for creating and managing team websites."
        },
        {
            type: "mcq",
            q: "What is the best title for a Lesson 6 summary?",
            a: ["How to build a printer", "Digital Collaboration and Netiquette", "History of the Internet", "Basics of Microsoft Word"],
            cor: 1,
            exp: "Lesson 6 is all about how teams work together using digital tools and respectful behavior."
        }
    ],
    l1_lesson7: [
        // --- 1. DIGITAL SECURITY THREATS ---
        {
            type: "mcq",
            q: "What is a 'Virus' in the context of computing?",
            a: ["A biological illness that affects the user", "A malicious program designed to take control of system operations or destroy data", "A hardware part that helps the computer run faster", "An automated update from the manufacturer"],
            cor: 1,
            exp: "Viruses are human-made malicious programs that run without the user's consent."
        },
        {
            type: "mcq",
            q: "How does a 'Worm' differ from a standard virus?",
            a: ["It only affects the monitor", "It is a self-replicating program that automatically spreads from one computer to another over a network", "It requires the user to click a link to spread", "It only targets printers"],
            cor: 1,
            exp: "Worms are unique because they automatically spread and consume system resources without human intervention."
        },
        {
            type: "mcq",
            q: "What is a 'Trojan Horse'?",
            a: ["A program that appears useful but contains malicious code to provide unauthorized access", "A type of high-speed gaming computer", "A virus that only works on Apple computers", "A physical lock for a laptop"],
            cor: 0,
            exp: "Trojans 'hide' inside seemingly innocent files to trick users into installing them."
        },
        {
            type: "mcq",
            q: "What is the primary goal of 'Spyware'?",
            a: ["To fix broken files", "To secretly collect information about a user's activities and send it to a third party", "To increase the brightness of the screen", "To speed up the internet"],
            cor: 1,
            exp: "Spyware monitors your behavior, often to steal passwords or track your browsing habits."
        },
        {
            type: "mcq",
            q: "What does 'Ransomware' do to a victim's files?",
            a: ["It deletes them permanently", "It encrypts them and demands payment for the decryption key", "It moves them to the cloud", "It prints them automatically"],
            cor: 1,
            exp: "Ransomware holds your data 'hostage' until a ransom is paid."
        },

        // --- 2. IDENTITY THEFT & PHISHING ---
        {
            type: "mcq",
            q: "What is 'Phishing'?",
            a: ["Searching for files on a hard drive", "A fraudulent attempt to obtain sensitive info by disguising as a trustworthy entity in an email", "A way to connect to a public Wi-Fi", "The process of updating your operating system"],
            cor: 1,
            exp: "Phishing emails often look like they come from banks or social media sites to steal logins."
        },
        {
            type: "mcq",
            q: "Which of the following is a sign of a Phishing email?",
            a: ["Correct spelling and professional tone", "Urgent or threatening language and suspicious links", "The email comes from your own boss", "The email contains no attachments"],
            cor: 1,
            exp: "Phishing often creates a 'sense of urgency' to make you act without thinking."
        },
        {
            type: "mcq",
            q: "What is 'Identity Theft'?",
            a: ["Losing your physical ID card", "When someone uses your personal information to commit fraud or other crimes", "Changing your name legally", "Creating a second social media account"],
            cor: 1,
            exp: "Identity theft involves using someone's stolen data to impersonate them for financial gain."
        },
        {
            type: "multi",
            q: "Which items are highly valuable to identity thieves? (Select 2)",
            a: ["Favorite color", "Social Security Number", "Credit card details", "Operating system version"],
            cor: [1, 2],
            required: 2,
            exp: "Financial details and government IDs are the primary targets for identity theft."
        },

        // --- 3. PROTECTING DEVICES AND CONTENT ---
        {
            type: "mcq",
            q: "What is a 'Firewall'?",
            a: ["A physical wall that protects the server room from fire", "A security system that monitors and controls incoming and outgoing network traffic", "A program that makes the internet faster", "A type of antivirus software"],
            cor: 1,
            exp: "Firewalls act as a barrier between your computer and the 'untrusted' internet."
        },
        {
            type: "mcq",
            q: "How does 'Antivirus' software protect your computer?",
            a: ["It cleans the physical dust out of the machine", "It scans files for known malicious patterns and removes or quarantines them", "It prevents you from visiting any website", "It re-installs Windows automatically"],
            cor: 1,
            exp: "Antivirus software uses a database of 'signatures' to find and stop threats."
        },
        {
            type: "mcq",
            q: "What is 'Multi-Factor Authentication' (MFA)?",
            a: ["Using two different computers at once", "A security process requiring two or more pieces of evidence to verify identity", "Entering your password two times", "Having two different internet providers"],
            cor: 1,
            exp: "MFA adds a layer of security, like a password PLUS a code sent to your phone."
        },
        {
            type: "matching",
            q: "Match the protection method to its description:",
            pairs: [
                { term: "Encryption", definition: "Scrambling data so only authorized parties can read it." },
                { term: "VPN", definition: "Creates a secure, private tunnel over a public network." },
                { term: "Backup", definition: "Creating a copy of data to recover it if the original is lost." }
            ],
            exp: "These methods help keep data private, secure, and recoverable."
        },
        {
            type: "mcq",
            q: "Why should you avoid using public Wi-Fi for banking?",
            a: ["It is too slow", "It is often unencrypted and hackers can 'sniff' or intercept your data", "It will use up your battery", "It is illegal to use public Wi-Fi for work"],
            cor: 1,
            exp: "Public Wi-Fi is 'untrusted' and makes your data vulnerable to interception."
        },

        // --- 4. DATA COLLECTION & PRIVACY ---
        {
            type: "mcq",
            q: "What are 'Cookies' in web browsing?",
            a: ["Small rewards for visiting a site", "Small text files stored on your computer to track preferences and login info", "A type of computer virus", "Files that speed up your CPU"],
            cor: 1,
            exp: "Cookies help websites remember who you are, but can also be used for tracking."
        },
        {
            type: "mcq",
            q: "What is 'Adware'?",
            a: ["Software that automatically displays or downloads advertising material", "A tool for blocking ads", "A program for designing posters", "An update for your browser"],
            cor: 0,
            exp: "Adware is often bundled with free software and generates revenue through pop-ups."
        },
        {
            type: "mcq",
            q: "What does 'Incognito' or 'Private' browsing mode do?",
            a: ["Makes you completely invisible to the government", "Prevents the browser from saving your history, cookies, and form data", "Protects you from all viruses", "Encrypts your entire hard drive"],
            cor: 1,
            exp: "Private mode clears your local data after the session, but doesn't make you 'anonymous' online."
        },
        {
            type: "yesno",
            q: "Do websites have a right to track every action you take?",
            statements: [
                "Yes, it's their website.",
                "No, privacy laws (like GDPR) often require sites to ask for consent.",
                "They can only track you if you click 'Accept'."
            ],
            cor: [false, true, true],
            exp: "Modern regulations give users more control over how their data is collected."
        },

        // --- 5. PHYSICAL HEALTH & ERGONOMICS ---
        {
            type: "mcq",
            q: "What is 'Ergonomics'?",
            a: ["The study of computer hardware speed", "The science of designing the workplace to fit the user's needs and reduce strain", "A type of programming language", "A law about digital privacy"],
            cor: 1,
            exp: "Ergonomics helps prevent injuries like Carpal Tunnel Syndrome or back pain."
        },
        {
            type: "mcq",
            q: "What is the recommended position for your monitor?",
            a: ["Below desk level", "Top of monitor 2-3 inches above eye level", "At a 45-degree angle to the side", "Directly against your face"],
            cor: 1,
            exp: "Proper height prevents neck strain and 'craning'."
        },
        {
            type: "mcq",
            q: "How should your feet be positioned when sitting at a computer?",
            a: ["Tucked under the chair", "Flat on the floor or on a footrest", "Crossed at the ankles", "Dangling in the air"],
            cor: 1,
            exp: "Keeping feet flat supports the lower back and improves circulation."
        },
        {
            type: "mcq",
            q: "What is 'Computer Vision Syndrome'?",
            a: ["Being able to see code in the air", "Eye strain and discomfort caused by looking at screens for long periods", "A virus that affects your webcam", "The ability of a computer to recognize faces"],
            cor: 1,
            exp: "Symptoms include dry eyes, blurred vision, and headaches."
        },
        {
            type: "mcq",
            q: "What is the '20-20-20 Rule'?",
            a: ["Work for 20 hours, sleep for 20", "Every 20 minutes, look at something 20 feet away for 20 seconds", "Set your font size to 20", "Keep your monitor 20 inches away"],
            cor: 1,
            exp: "This rule helps reduce eye strain during computer use."
        },

        // --- 6. SECURE PASSWORDS & ACCOUNTS ---
        {
            type: "mcq",
            q: "Which of these is considered a 'Strong Password'?",
            a: ["password123", "YourBirthday", "Tr0p!cal#92", "12345678"],
            cor: 2,
            exp: "Strong passwords use a mix of uppercase, lowercase, numbers, and symbols."
        },
        {
            type: "mcq",
            q: "Why is it dangerous to use the same password for all accounts?",
            a: ["It's too hard to remember", "If one account is hacked, the hacker can access all your other accounts", "It makes the computer run slower", "It is against the law"],
            cor: 1,
            exp: "Credential stuffing is a common attack where hackers try stolen passwords on multiple sites."
        },
        {
            type: "multi",
            q: "What are good ways to manage many strong passwords? (Select 2)",
            a: ["Writing them on a sticky note on your monitor", "Using a digital Password Manager", "Using your cat's name for everything", "Creating a unique passphrase for each site"],
            cor: [1, 3],
            required: 2,
            exp: "Password managers securely store complex passwords so you don't have to remember them."
        },

        // --- 7. GENERAL SECURITY CONCEPTS ---
        {
            type: "mcq",
            q: "What is 'Social Engineering'?",
            a: ["Building a social media site", "Manipulating people into giving up confidential information", "Fixing a computer in a group", "A type of civil engineering"],
            cor: 1,
            exp: "Social engineering targets the 'human element' rather than technical bugs."
        },
        {
            type: "mcq",
            q: "What does 'HTTPS' in a URL indicate?",
            a: ["The site is highly popular", "The site is using encryption to secure the connection", "The site is a personal blog", "The site is hosted in the US"],
            cor: 1,
            exp: "The 'S' stands for Secure, meaning the data between you and the server is encrypted."
        },
        {
            type: "mcq",
            q: "What is a 'Hacker'?",
            a: ["A person who builds computers", "A person who uses computers to gain unauthorized access to data", "A type of fast typist", "A professional gamer"],
            cor: 1,
            exp: "While some hackers are ethical, the term usually refers to those seeking unauthorized access."
        },
        {
            type: "categorization",
            q: "Categorize these threats:",
            categories: ["Malware", "Social Engineering"],
            items: [
                { name: "Virus", category: "Malware" },
                { name: "Phishing", category: "Social Engineering" },
                { name: "Trojan", category: "Malware" },
                { name: "Baiting", category: "Social Engineering" }
            ],
            exp: "Malware is malicious software; Social Engineering is human manipulation."
        },

        // --- 8. DEVICE SAFETY ---
        {
            type: "mcq",
            q: "What should you do before disposing of an old computer or phone?",
            a: ["Just throw it in the trash", "Wipe or destroy the hard drive/storage to remove all personal data", "Delete your browser history", "Turn it off"],
            cor: 1,
            exp: "Data can often be recovered even if files are 'deleted,' so a full wipe is necessary."
        },
        {
            type: "mcq",
            q: "What is a 'Patch' or 'Security Update'?",
            a: ["A physical sticker for the laptop", "Software released by developers to fix security vulnerabilities", "A way to make the screen brighter", "A type of computer mouse"],
            cor: 1,
            exp: "Keeping software updated 'patches' holes that hackers might use."
        },
        {
            type: "yesno",
            q: "Is it safe to plug in a USB drive you found in a parking lot?",
            statements: [
                "Yes, it's a free gift.",
                "No, it could contain a worm or virus designed to infect your computer.",
                "Yes, if you use a Mac."
            ],
            cor: [false, true, false],
            exp: "Found USB drives are a common 'baiting' technique used by hackers."
        },

        // --- 9. HEALTH & WORKSPACE RECAP ---
        {
            type: "mcq",
            q: "Where should your wrists be when typing?",
            a: ["Bent upwards", "Straight and flat, not at an angle", "Resting heavily on the desk", "Bent downwards"],
            cor: 1,
            exp: "Straight wrists prevent strain on the tendons (Carpal Tunnel)."
        },
        {
            type: "mcq",
            q: "Why is 'Glare' on a screen bad?",
            a: ["It makes the computer hot", "It causes eye strain and makes the screen hard to read", "It deletes your files", "It slows down the internet"],
            cor: 1,
            exp: "Glare from windows or lights forces the eyes to work harder to focus."
        },
        {
            type: "matching",
            q: "Match the ergonomic solution to the problem:",
            pairs: [
                { term: "Footrest", definition: "Feet cannot reach the floor." },
                { term: "Document Holder", definition: "Neck strain from looking down at papers." },
                { term: "Trackball", definition: "Strain from using a traditional mouse." }
            ],
            exp: "Small adjustments to the workspace can prevent long-term physical ailments."
        },
        {
            type: "mcq",
            q: "What can 'reduction in mental alertness' be a symptom of?",
            a: ["A fast internet connection", "Physical strain or poor ergonomic setup", "Having too much RAM", "A new monitor"],
            cor: 1,
            exp: "Discomfort and physical pain drain your mental energy and productivity."
        },

        // --- 10. FINAL RECAP ---
        {
            type: "mcq",
            q: "Which of these is the most secure way to handle a suspicious email link?",
            a: ["Click it to see where it goes", "Hover your mouse over it to see the actual URL without clicking", "Click it only if you have antivirus", "Forward it to a friend to check"],
            cor: 1,
            exp: "Hovering allows you to see if the link leads to a fake/malicious website."
        },
        {
            type: "mcq",
            q: "What is 'Biometric' authentication?",
            a: ["Using a very long password", "Using physical traits like fingerprints or facial recognition to log in", "Using a special keycard", "Logging in with your heart rate"],
            cor: 1,
            exp: "Biometrics use 'who you are' rather than 'what you know' for security."
        },
        {
            type: "mcq",
            q: "If your computer starts running very slowly and displaying random pop-ups, it likely has:",
            a: ["Too much memory", "A Malware infection", "A very fast CPU", "A broken keyboard"],
            cor: 1,
            exp: "Slowness and pop-ups are classic symptoms of viruses or adware."
        },
        {
            type: "mcq",
            q: "What is the 'Public Domain'?",
            a: ["A park with free Wi-Fi", "Works that are not protected by copyright and are free for anyone to use", "Websites owned by the government", "A type of antivirus"],
            cor: 1,
            exp: "Items enter the public domain usually 70 years after the author's death."
        },
        {
            type: "mcq",
            q: "What is the best title for a Lesson 7 summary?",
            a: ["How to build a website", "Digital Safety, Security, and Health", "History of the CPU", "Basics of Microsoft Excel"],
            cor: 1,
            exp: "Lesson 7 focuses on protecting your data, your device, and your body."
        },
        {
            type: "mcq",
            q: "A 'Pop-up Blocker' is used to:",
            a: ["Speed up the CPU", "Prevent unwanted windows from opening automatically in a browser", "Block the entire internet", "Delete your cookies"],
            cor: 1,
            exp: "Pop-up blockers help prevent annoying ads and some forms of adware."
        },
        {
            type: "multi",
            q: "What should you do if you suspect you are a victim of identity theft? (Select 2)",
            a: ["Keep it a secret", "Contact your bank or credit card company", "Report it to the authorities", "Ignore it and hope it goes away"],
            cor: [1, 2],
            required: 2,
            exp: "Taking immediate action is crucial to limiting the damage of identity theft."
        },
        {
            type: "mcq",
            q: "Which of these helps protect against 'Ransomware'?",
            a: ["A larger monitor", "Regularly backing up your files to an offline location", "Using a wireless mouse", "Changing your desktop wallpaper"],
            cor: 1,
            exp: "If your files are backed up elsewhere, the ransom threat loses its power."
        },
        {
            type: "mcq",
            q: "What is 'Baiting'?",
            a: ["Fishing for compliments", "Leaving an infected physical device (like a USB) for someone to find and plug in", "A type of fast typing", "A computer game"],
            cor: 1,
            exp: "Baiting uses curiosity to get people to compromise their own security."
        },
        {
            type: "mcq",
            q: "What does 'Quarantine' mean in antivirus software?",
            a: ["Deleting the file immediately", "Moving a suspicious file to a safe, isolated area where it cannot run", "Sending the file to the police", "Formatting the hard drive"],
            cor: 1,
            exp: "Quarantining allows you to review the file without letting it hurt your system."
        },
        {
            type: "mcq",
            q: "Why is a 'VPN' useful on public Wi-Fi?",
            a: ["It makes the internet free", "It encrypts your data traffic so hackers cannot read it", "It prevents your laptop from getting hot", "It increases your signal strength"],
            cor: 1,
            exp: "VPNs provide a secure tunnel for your data in insecure environments."
        },
        {
            type: "mcq",
            q: "How often should you perform data backups?",
            a: ["Only once when you buy the computer", "Regularly (daily or weekly) depending on how important your data is", "Only after you get a virus", "Every 10 years"],
            cor: 1,
            exp: "Frequent backups ensure you lose as little data as possible in an emergency."
        },
        {
            type: "mcq",
            q: "Which of these is a physical security measure?",
            a: ["A password", "A cable lock for a laptop", "An antivirus scan", "A firewall"],
            cor: 1,
            exp: "Cable locks prevent the physical theft of the hardware itself."
        },
        {
            type: "mcq",
            q: "What is 'Vishing'?",
            a: ["Phishing that happens over a voice call", "A very fast virus", "Phishing via text message", "A type of virtual reality"],
            cor: 0,
            exp: "Vishing (Voice Phishing) uses phone calls to trick people into giving info."
        },
        {
            type: "mcq",
            q: "What is 'Smishing'?",
            a: ["Phishing via SMS (text message)", "Phishing via email", "A way to break a screen", "A social media post"],
            cor: 0,
            exp: "Smishing uses text messages with malicious links."
        },
        {
            type: "mcq",
            q: "What should you check before entering your password on a website?",
            a: ["The color of the website", "The URL (to ensure it is the correct, official site)", "The number of images on the page", "The font size"],
            cor: 1,
            exp: "Always verify you are on the real site and not a fake 'spoof' site."
        },
        {
            type: "mcq",
            q: "What is the purpose of 'Terms of Service'?",
            a: ["To teach you how to use the site", "To outline the legal agreement and rules for using a service", "To provide a list of passwords", "To speed up the website"],
            cor: 1,
            exp: "ToS documents explain your rights and the company's rights regarding your data."
        },
        {
            type: "mcq",
            q: "What is a 'Digital Key' or 'Token' in MFA?",
            a: ["A physical house key", "A temporary code generated by an app or device to prove identity", "A piece of code that deletes viruses", "A type of currency"],
            cor: 1,
            exp: "Tokens are 'something you have' used to verify your identity."
        }
    ],
    //----- Beginnning of Level Two -----
    l2_lesson8: [
        // --- 1. SETTINGS & CUSTOMIZATION ---
        {
            type: "mcq",
            q: "What is the difference between 'Global' and 'Profile-specific' settings?",
            a: ["Global settings affect only the administrator; Profile-specific affect everyone.", "Global settings affect all users on the system (usually hardware); Profile-specific are tied to one user.", "Global settings only work online; Profile-specific work offline.", "There is no difference."],
            cor: 1,
            exp: "Global settings (like hardware drivers) affect the whole machine, while Profile settings (like wallpaper) follow the individual user."
        },
        {
            type: "mcq",
            q: "Where can you configure commonly-accessed settings in Windows?",
            a: ["File Explorer", "The Settings App", "Microsoft Edge", "Task Manager"],
            cor: 1,
            exp: "The Settings App (Start > Settings) is the central hub for customizing Windows environments."
        },
        {
            type: "mcq",
            q: "What is an 'Accessibility' setting?",
            a: ["A setting that makes the computer faster", "A feature designed to help people with disabilities use technology more easily", "A setting for changing the internet password", "A way to access deleted files"],
            cor: 1,
            exp: "Accessibility features include screen readers, high contrast modes, and closed captions."
        },
        {
            type: "multi",
            q: "Which of the following are 'Profile-specific' settings? (Select 2)",
            a: ["Desktop Wallpaper", "System Time Zone", "Screen brightness", "Browser Bookmarks"],
            cor: [0, 3],
            required: 2,
            exp: "Wallpaper and bookmarks are tied to a specific user account, while time and brightness are often global."
        },
        {
            type: "mcq",
            q: "In a web browser, what does 'Clearing Cache' do?",
            a: ["Deletes all your saved passwords", "Removes temporary files stored to speed up page loading", "Uninstalls the browser", "Resets your internet router"],
            cor: 1,
            exp: "The cache stores site data; clearing it can fix loading issues but might make sites load slower the first time."
        },

        // --- 2. DIGITAL CALENDARS ---
        {
            type: "mcq",
            q: "What is the primary benefit of using a 'Personal Digital Calendar'?",
            a: ["It tells you the weather", "It allows for efficient time management, reminders, and scheduling coordination", "It replaces the need for an email address", "It automatically completes your work for you"],
            cor: 1,
            exp: "Digital calendars help track appointments and can sync across multiple devices."
        },
        {
            type: "mcq",
            q: "What is a 'Recurring Event'?",
            a: ["An event that only happens once", "An appointment that repeats at regular intervals (daily, weekly, monthly)", "A deleted event", "An event with more than 10 people"],
            cor: 1,
            exp: "Recurring events (like a weekly meeting) only need to be scheduled once."
        },
        {
            type: "mcq",
            q: "What does 'Sharing' a calendar allow you to do?",
            a: ["Post your schedule on social media", "Allow others to see your availability or manage your appointments", "Give your computer to someone else", "Delete other people's meetings"],
            cor: 1,
            exp: "Sharing is essential for team coordination so others know when you are busy."
        },
        {
            type: "matching",
            q: "Match the Calendar term to its purpose:",
            pairs: [
                { term: "Reminder", definition: "A notification sent before an event starts." },
                { term: "Time Zone", definition: "Ensures events align with local time when traveling." },
                { term: "Attachment", definition: "A file (like an agenda) linked to a specific meeting." }
            ],
            exp: "These features turn a simple list into a powerful management tool."
        },
        {
            type: "mcq",
            q: "Which feature would you use to ensure you don't forget a meeting in 15 minutes?",
            a: ["Recurring Event", "Notification/Alert", "Calendar Color-coding", "Archive"],
            cor: 1,
            exp: "Alerts or notifications provide a visual or audible prompt before an event."
        },

        // --- 3. HARDWARE ADJUSTMENTS & CONCEPTS ---
        {
            type: "mcq",
            q: "What is a 'Device Driver'?",
            a: ["A person who fixes computers", "Software that tells the operating system how to communicate with a specific piece of hardware", "The power cable for a laptop", "A type of USB drive"],
            cor: 1,
            exp: "Drivers act as translators between the hardware (like a printer) and the software (the OS)."
        },
        {
            type: "mcq",
            q: "What does 'Plug and Play' mean?",
            a: ["You have to write code to use the device", "The OS automatically detects and configures a new device when it's connected", "The device only works for playing games", "The device doesn't need electricity"],
            cor: 1,
            exp: "Plug and Play (PnP) simplifies hardware installation for users."
        },
        {
            type: "mcq",
            q: "If a monitor's input port doesn't match the computer's output port, what should you use?",
            a: ["A new computer", "An Adapter", "Tape", "A wireless router"],
            cor: 1,
            exp: "Adapters (like HDMI to VGA) convert signals from one format to another."
        },
        {
            type: "mcq",
            q: "Which port is most commonly used to connect a keyboard or mouse today?",
            a: ["Serial Port", "USB Port", "VGA Port", "Ethernet Port"],
            cor: 1,
            exp: "USB (Universal Serial Bus) is the standard for most peripheral devices."
        },
        {
            type: "yesno",
            q: "Do most modern smartphones have a dedicated 'Video Out' port?",
            statements: [
                "Yes, they usually have an HDMI port.",
                "No, most phones do not have a dedicated video out port.",
                "Yes, but only for connecting to printers."
            ],
            cor: [false, true, false],
            exp: "Most phones use their charging port (USB-C or Lightning) with an adapter for video out, rather than a dedicated port."
        },

        // --- 4. CORE PRINTER CONCEPTS ---
        {
            type: "mcq",
            q: "What is 'Print Queue'?",
            a: ["A type of ink", "The list of documents waiting to be printed", "A high-speed printer", "The paper tray"],
            cor: 1,
            exp: "The queue manages the order of print jobs and allows you to cancel or pause them."
        },
        {
            type: "mcq",
            q: "What does 'Duplex Printing' mean?",
            a: ["Printing in two different colors", "Printing on both sides of the paper", "Printing two copies at once", "Printing twice as fast"],
            cor: 1,
            exp: "Duplexing is a common way to save paper by using both sides."
        },
        {
            type: "mcq",
            q: "Which printer setting should you use to save ink or toner?",
            a: ["High Quality", "Draft or Grayscale mode", "Landscape Orientation", "Legal Paper Size"],
            cor: 1,
            exp: "Draft mode uses less ink/toner and is faster, making it ideal for non-final documents."
        },
        {
            type: "mcq",
            q: "What is a 'Network Printer'?",
            a: ["A printer connected to only one computer via USB", "A printer connected to a network that multiple users can access", "A printer that only prints websites", "A printer that uses no cables"],
            cor: 1,
            exp: "Network printers are shared resources in offices and schools."
        },
        {
            type: "matching",
            q: "Match the printer component to its role:",
            pairs: [
                { term: "Toner", definition: "Powder used in laser printers." },
                { term: "Ink Cartridge", definition: "Liquid used in inkjet printers." },
                { term: "Spooler", definition: "Software that manages the print jobs in the background." }
            ],
            exp: "Understanding these parts helps with basic troubleshooting."
        },

        // --- 5. NETWORKING & ETHERNET ---
        {
            type: "mcq",
            q: "What is 'Ethernet'?",
            a: ["A type of wireless signal", "A network-cabling protocol for transmitting data across a LAN", "The name of the internet", "A brand of computer"],
            cor: 1,
            exp: "Ethernet is the standard for wired local area networks."
        },
        {
            type: "mcq",
            q: "Which speed is associated with 'Gigabit Ethernet'?",
            a: ["10 Mbps", "100 Mbps", "1 Gbps (1000 Mbps)", "10 Gbps"],
            cor: 2,
            exp: "Gigabit Ethernet moves data at 1 billion bits per second."
        },
        {
            type: "mcq",
            q: "Why is an Ethernet connection often preferred over Wi-Fi for high-volume streaming?",
            a: ["It is cheaper", "It is generally faster and more stable", "It allows you to move the computer around more", "It doesn't require a router"],
            cor: 1,
            exp: "Wired connections are less prone to interference than wireless ones."
        },
        {
            type: "mcq",
            q: "What is the standard maximum length for an Ethernet cable signal?",
            a: ["10 feet (3 meters)", "100 feet (30 meters)", "300 feet (100 meters)", "1 mile"],
            cor: 2,
            exp: "Ethernet signals degrade if the cable is longer than approximately 100 meters."
        },
        {
            type: "categorization",
            q: "Categorize the Ethernet Category (Cat) by its max speed:",
            categories: ["Up to 100 Mbps", "Up to 1 Gbps", "Up to 10 Gbps"],
            items: [
                { name: "Cat 5", category: "Up to 100 Mbps" },
                { name: "Cat 5e", category: "Up to 1 Gbps" },
                { name: "Cat 6", category: "Up to 10 Gbps" },
                { name: "Cat 6a", category: "Up to 10 Gbps" }
            ],
            exp: "Cat 5e is the most common standard for Gigabit speeds, while Cat 6/6a support 10Gbps."
        },

        // --- 6. HIGHER-LEVEL TECH CONCEPTS ---
        {
            type: "mcq",
            q: "What is 'Cloud Computing'?",
            a: ["Using computers while flying", "Delivering computing services (servers, storage, apps) over the internet", "Storing data only on your hard drive", "A type of weather forecasting software"],
            cor: 1,
            exp: "The 'Cloud' allows you to access data and apps from any device with internet."
        },
        {
            type: "mcq",
            q: "What is 'SaaS' (Software as a Service)?",
            a: ["Buying a software disc at a store", "A software distribution model where a third-party provider hosts applications over the internet", "Building your own computer", "A type of internet cable"],
            cor: 1,
            exp: "Examples of SaaS include Microsoft 365, Google Workspace, and Netflix."
        },
        {
            type: "mcq",
            q: "What does 'IoT' stand for?",
            a: ["Internet of Tools", "Internet of Things", "Input Output Technology", "Internal Operating Task"],
            cor: 1,
            exp: "IoT refers to everyday objects (like thermostats or fridges) connected to the internet."
        },
        {
            type: "yesno",
            q: "Does 'VGA' support audio transmission?",
            statements: [
                "Yes, it carries both video and sound.",
                "No, it is an analog video-only standard.",
                "Yes, but only on laptops."
            ],
            cor: [false, true, false],
            exp: "VGA is an older analog standard that only transmits video; a separate cable is needed for audio."
        },
        {
            type: "mcq",
            q: "Which cable type is most likely used to connect a modern computer to a high-definition monitor?",
            a: ["VGA", "HDMI or DisplayPort", "Ethernet", "PS/2"],
            cor: 1,
            exp: "HDMI and DisplayPort are the modern digital standards for high-def video and audio."
        },

        // --- 7. BROWSER & INTERNET SETTINGS ---
        {
            type: "mcq",
            q: "What is a 'Pop-up Blocker'?",
            a: ["A tool that stops a computer from turning on", "Browser software that prevents new windows from opening automatically", "A type of antivirus", "A way to speed up the CPU"],
            cor: 1,
            exp: "Pop-up blockers improve browsing by stopping intrusive advertisements."
        },
        {
            type: "mcq",
            q: "What is a 'Browser Extension' (or Add-on)?",
            a: ["A longer internet cable", "A small software module that adds specific features to a web browser", "A new version of Windows", "A type of computer monitor"],
            cor: 1,
            exp: "Extensions can add features like ad-blocking, password management, or translation."
        },
        {
            type: "mcq",
            q: "What does it mean when a browser says a connection is 'Not Secure'?",
            a: ["The computer has a virus", "The website is not using HTTPS encryption", "Your monitor is broken", "The internet is too slow"],
            cor: 1,
            exp: "An unsecure site (HTTP) does not encrypt the data sent between you and the server."
        },
        {
            type: "multi",
            q: "Which actions can help protect your privacy in a browser? (Select 2)",
            a: ["Using Incognito/Private mode", "Saving all passwords in the browser", "Disabling third-party cookies", "Enabling 'Auto-fill' for credit cards"],
            cor: [0, 2],
            required: 2,
            exp: "Private mode and blocking trackers/cookies are key privacy measures."
        },
        {
            type: "mcq",
            q: "What is the purpose of 'Bookmarking' a page?",
            a: ["To delete the page", "To save a shortcut to a website for quick access later", "To share the page on social media", "To download the entire website"],
            cor: 1,
            exp: "Bookmarks (or Favorites) help you organize and return to important sites."
        },

        // --- 8. TROUBLESHOOTING & MAINTENANCE ---
        {
            type: "mcq",
            q: "If a USB device is not working, what is the first logical troubleshooting step?",
            a: ["Reinstall the Operating System", "Unplug the device and plug it back in (reseat it)", "Buy a new computer", "Call a professional engineer"],
            cor: 1,
            exp: "Basic 'reseating' or trying a different port solves many hardware issues."
        },
        {
            type: "mcq",
            q: "What should you check if a 'Network Printer' is not showing up on your computer?",
            a: ["The printer's ink level", "That your computer is connected to the same network as the printer", "The font size of your document", "The monitor brightness"],
            cor: 1,
            exp: "Network printers require your device to be on the same Local Area Network (LAN)."
        },
        {
            type: "mcq",
            q: "What is the result of 'System Updates'?",
            a: ["They only change the wallpaper", "They provide security patches and improve system stability", "They delete your personal files", "They make the keyboard harder to use"],
            cor: 1,
            exp: "Regular updates are critical for security and hardware compatibility."
        },
        {
            type: "mcq",
            q: "A computer is running very loudly and getting hot. What might be the hardware issue?",
            a: ["Not enough RAM", "Dust blocking the fans or cooling vents", "A slow internet connection", "The mouse is dirty"],
            cor: 1,
            exp: "Physical maintenance (cleaning dust) is necessary for proper heat management."
        },
        {
            type: "matching",
            q: "Match the problem to the solution:",
            pairs: [
                { term: "Paper Jam", definition: "Check the printer rollers and paper path." },
                { term: "No Internet", definition: "Check the Ethernet cable or Wi-Fi status." },
                { term: "Blurry Monitor", definition: "Adjust the screen resolution in Settings." }
            ],
            exp: "Basic troubleshooting involves checking physical connections and software settings."
        },

        // --- 9. CONFIGURATION SCENARIOS ---
        {
            type: "mcq",
            q: "You want to change your 'Screen Timeout' (how long before the screen goes black). Where do you go?",
            a: ["Browser Settings", "Windows Settings > System > Power & Sleep", "The Printer Queue", "A Calendar App"],
            cor: 1,
            exp: "Power settings manage how the system conserves energy."
        },
        {
            type: "mcq",
            q: "Which hardware adjustment would most likely require an 'Administrator' password?",
            a: ["Changing the mouse pointer speed", "Installing a new hardware driver", "Increasing the volume", "Changing the desktop background"],
            cor: 1,
            exp: "Installing software (drivers) is a system-level change that requires admin rights."
        },
        {
            type: "mcq",
            q: "You are setting up a home office and want the most stable internet for video calls. What should you use?",
            a: ["Public Wi-Fi", "A Cat 6 Ethernet cable connected to your router", "A Bluetooth tether from your phone", "A long VGA cable"],
            cor: 1,
            exp: "Ethernet (Cat 6) provides the most stable and fast connection for high-bandwidth tasks."
        },
        {
            type: "mcq",
            q: "What is the purpose of 'Default Apps' settings?",
            a: ["To delete all apps", "To choose which program opens a specific file type (e.g., .pdf or .mp3)", "To make all apps free", "To prevent apps from updating"],
            cor: 1,
            exp: "Default apps tell the OS which browser, email client, or media player to use by default."
        },
        {
            type: "mcq",
            q: "If you want to print a document but the colors are wrong, what should you check?",
            a: ["The Ethernet cable", "The ink/toner levels or print head alignment", "The computer's RAM", "The calendar settings"],
            cor: 1,
            exp: "Color issues are usually related to physical ink supply or maintenance."
        },

        // --- 10. RECAP & FINAL CONCEPTS ---
        {
            type: "mcq",
            q: "What is 'Bandwidth'?",
            a: ["The physical width of a computer", "The maximum rate of data transfer across a network path", "The number of apps you have installed", "The size of a printer's paper tray"],
            cor: 1,
            exp: "Bandwidth determines how much data can move through your connection at once."
        },
        {
            type: "mcq",
            q: "Which of these is a 'Hardware' component?",
            a: ["Operating System", "Browser Extension", "Motherboard", "SaaS"],
            cor: 2,
            exp: "Hardware is the physical parts of the system; the others are software or service concepts."
        },
        {
            type: "mcq",
            q: "What is the benefit of a 'Wireless' printer?",
            a: ["It doesn't need power", "It can be placed anywhere within range of the Wi-Fi without needing a data cable", "It prints faster than a wired printer", "It never runs out of ink"],
            cor: 1,
            exp: "Wireless (Wi-Fi) printers offer flexible placement in a home or office."
        },
        {
            type: "mcq",
            q: "What is the best title for a Lesson 8 summary?",
            a: ["Advanced Digital Citizenship", "Technology Basics: Customization, Hardware, and Connectivity", "History of Social Media", "How to use Microsoft Word"],
            cor: 1,
            exp: "Lesson 8 covers the fundamental setup and operation of hardware and environments."
        },
        {
            type: "multi",
            q: "What can cause 'Signal Interference' in a Wi-Fi network? (Select 2)",
            a: ["Microwave ovens", "Thick concrete walls", "A fast CPU", "A large monitor"],
            cor: [0, 1],
            required: 2,
            exp: "Physical barriers and other electronic devices can disrupt wireless signals."
        },
        {
            type: "mcq",
            q: "Which Cat cable is designed specifically for 'reduced signal interference'?",
            a: ["Cat 5", "Cat 6", "Cat 6a", "Cat 10"],
            cor: 2,
            exp: "The 'a' in Cat 6a stands for 'augmented,' designed to reduce crosstalk/interference."
        }
    ],
    l2_lesson9: [
        // --- 1. PERSONAL VS. PROFESSIONAL IDENTITIES ---
        {
            type: "mcq",
            q: "What is a primary reason for maintaining separate personal and professional online identities?",
            a: ["To confuse search engines", "To manage the professional impression you leave in others' minds", "To avoid paying for internet services", "To use the same password for everything"],
            cor: 1,
            exp: "Separate identities help you be mindful of the impressions your online activities leave on potential employers or colleagues[cite: 30, 32]."
        },
        {
            type: "mcq",
            q: "What is an 'Alias' in a digital context?",
            a: ["A type of computer virus", "A misleading or alternative name used to create an account", "The physical serial number of a device", "A high-speed network cable"],
            cor: 1,
            exp: "Aliases are popular for privacy or when people have common names, but they can also be used to create misleading accounts[cite: 31, 34, 35]."
        },
        {
            type: "mcq",
            q: "When should you use a 'Professional Identity' for purchases?",
            a: ["When buying groceries for your home", "When purchasing items for business use or reporting business expenses", "Only when using a personal credit card", "Never; always use a personal account for all shopping"],
            cor: 1,
            exp: "Using a professional account for business purchases helps identify the expense as being for the organization[cite: 7]."
        },
        {
            type: "mcq",
            q: "Where should you store files when collaborating with colleagues on a business project?",
            a: ["In your personal Google Drive folders", "In the company's designated cloud location using your professional identity", "On a physical USB drive only", "In a private social media group"],
            cor: 1,
            exp: "Professional identities provide access to company cloud folders for official collaboration[cite: 8]."
        },
        {
            type: "mcq",
            q: "What is a risk of blending personal and professional identities?",
            a: ["Your computer will run slower", "Professional contacts may see personal posts that do not reflect your work persona", "You will get more spam emails", "You cannot use a smartphone"],
            cor: 1,
            exp: "Being mindful of your digital footprint is critical because everything you post reflects who you are[cite: 30, 9]."
        },

        // --- 2. MANAGING ACCOUNTS ---
        {
            type: "mcq",
            q: "How do you manage or switch between multiple Google accounts on a device?",
            a: ["Restart the computer", "Select your profile image and click 'Add' or 'Switch' account", "Delete the browser cache", "Call Google support"],
            cor: 1,
            exp: "Google allows you to manage multiple identities by clicking your profile image at the top of the screen[cite: 3]."
        },
        {
            type: "mcq",
            q: "In Windows Settings, where can you manage your Microsoft Work, School, or Personal accounts?",
            a: ["System > Display", "Accounts", "Network & Internet", "Personalization"],
            cor: 1,
            exp: "The 'Accounts' section in Windows Settings is the central hub for managing different Microsoft identities[cite: 4]."
        },
        {
            type: "mcq",
            q: "Which browser feature allows you to manage different profiles for work and personal use?",
            a: ["The Print Preview", "The Profiles page in Settings", "The Bookmarks bar", "The History tab"],
            cor: 1,
            exp: "Browsers like Microsoft Edge have a Profiles page to manage and switch between different account identities[cite: 6]."
        },
        {
            type: "yesno",
            q: "Is it recommended to add personal games to a company-owned computing device?",
            statements: [
                "Yes, as long as you finish your work.",
                "No, you should refrain from adding unapproved applications or games to company devices.",
                "Yes, but only if you use a personal account."
            ],
            cor: [false, true, false],
            exp: "Company devices should be used for professional purposes with approved software only[cite: 9]."
        },
        {
            type: "mcq",
            q: "What should you do before accepting a 'Friend' request on a professional social media account?",
            a: ["Accept everyone to increase your numbers", "Be careful and ensure the connection is appropriate for your professional identity", "Ask them for their password", "Ignore it for at least a month"],
            cor: 1,
            exp: "Professional accounts require more careful vetting of connections than personal ones[cite: 36]."
        },

        // --- 3. DIGITAL ETIQUETTE (NETIQUETTE) ---
        {
            type: "mcq",
            q: "What does using ALL UPPERCASE letters in a digital message usually imply?",
            a: ["The sender is being very polite", "The sender is 'shouting' or expressing anger", "The message is a secret code", "The keyboard is broken"],
            cor: 1,
            exp: "In digital etiquette, all caps are considered shouting and should be avoided[cite: 11]."
        },
        {
            type: "mcq",
            q: "Which of the following is considered 'Inappropriate' for business or school conversations?",
            a: ["Clear and concise language", "Abbreviations, acronyms, and emoticons", "Timely responses", "Formal greetings"],
            cor: 1,
            exp: "Formal environments generally require avoiding slang, emoticons, and text-speak[cite: 11]."
        },
        {
            type: "mcq",
            q: "Why is electronic communication often open to misinterpretation?",
            a: ["Because the internet is too fast", "Because it lacks physical cues like tone of voice and body language", "Because everyone uses the same font", "Because it is always encrypted"],
            cor: 1,
            exp: "Without seeing the person, digital messages can be easily misunderstood[cite: 10]."
        },
        {
            type: "mcq",
            q: "When responding to a group message, what 'Etiquette' factor should you consider?",
            a: ["The color of your font", "The frequency of your messages to avoid cluttering the conversation", "The size of your monitor", "How many emojis you can fit"],
            cor: 1,
            exp: "Consider how often you post so you don't overwhelm a group chat[cite: 10]."
        },
        {
            type: "mcq",
            q: "What is the best way to handle a message that makes you feel angry?",
            a: ["Respond immediately with your true feelings", "Refrain from responding while in a negative emotional state", "Forward it to everyone you know", "Use even more uppercase letters"],
            cor: 1,
            exp: "Digital etiquette suggests waiting until you are calm before replying to avoid saying something you regret[cite: 11]."
        },

        // --- 4. RESPECTING DIVERSITY & OPINIONS ---
        {
            type: "mcq",
            q: "How should you treat others in a virtual meeting or online environment?",
            a: ["Ignore them if they have a different opinion", "Treat them as you would want to be treated yourself", "Be as offensive as possible to win the argument", "Only speak to people from your own country"],
            cor: 1,
            exp: "The 'Golden Rule' of treating others with respect applies to all digital interactions[cite: 11]."
        },
        {
            type: "mcq",
            q: "Is it acceptable to disagree with someone's point of view online?",
            a: ["No, you must always agree to be polite", "Yes, it is okay to disagree as long as you remain respectful and not offensive", "Yes, but only if you use an alias", "No, disagreement is a form of cyberbullying"],
            cor: 1,
            exp: "Healthy debate is fine, but disrespect and offensiveness are not[cite: 13]."
        },
        {
            type: "mcq",
            q: "Why might terminology vary significantly in a global online environment?",
            a: ["Because the internet translates everything poorly", "Because of different cultural backgrounds and local dialects", "Because older computers use different words", "Because people like to make up new words"],
            cor: 1,
            exp: "Global communication requires awareness that words can mean different things in different cultures[cite: 12]."
        },
        {
            type: "mcq",
            q: "What should you be conscious of when reacting to a post?",
            a: ["How many 'likes' it already has", "That your reaction may reflect your own culture, background, or beliefs", "The speed of your mouse click", "The time of day in your region"],
            cor: 1,
            exp: "Our digital reactions are filtered through our personal perspectives[cite: 13]."
        },
        {
            type: "mcq",
            q: "Being 'Inculsive' in your digital language means:",
            a: ["Using only words you know", "Demonstrating respect for people of all cultures, traditions, and beliefs", "Excluding people who disagree with you", "Posting only in one language"],
            cor: 1,
            exp: "Inclusivity online promotes a respectful and welcoming environment for everyone[cite: 12]."
        },

        // --- 5. DIGITAL COMPETENCE & UPDATES ---
        {
            type: "mcq",
            q: "Which type of update is considered 'Critical' for your system?",
            a: ["A new desktop theme", "Security patches and antivirus updates", "A change to the font in your email", "A reminder to buy a new mouse"],
            cor: 1,
            exp: "Updates that fix security vulnerabilities are the most important for protecting your data[cite: 13]."
        },
        {
            type: "mcq",
            q: "What is a good way to stay informed about technological advancements?",
            a: ["Wait for someone to tell you", "Subscribe to technology newsletters from reliable sources or universities", "Only read social media posts", "Delete your browser every week"],
            cor: 1,
            exp: "Newsletters and expert reports are excellent ways to track tech trends[cite: 14]."
        },
        {
            type: "mcq",
            q: "Do you need to install every single software update and patch available?",
            a: ["Yes, immediately", "No, not all updates are necessary for every program; find out how they benefit you first", "Yes, but only on weekends", "No, never update your software"],
            cor: 1,
            exp: "Assess updates to see if they are necessary or beneficial for your specific needs[cite: 13, 14]."
        },
        {
            type: "mcq",
            q: "What is a benefit of subscribing to automated notices for updates?",
            a: ["It makes the computer faster", "It ensures you are aware of fixes for problems as soon as they are released", "It automatically buys new software for you", "It stops all pop-up ads"],
            cor: 1,
            exp: "Automation helps you stay current with critical system maintenance[cite: 13]."
        },
        {
            type: "mcq",
            q: "Before upgrading hardware for a 'new technology,' what should you research?",
            a: ["The color of the new device", "How the new technology will actually benefit you, your company, or your family", "If it is the most expensive option", "What your neighbors think about it"],
            cor: 1,
            exp: "Evaluate the practical benefits of a hardware upgrade before spending money[cite: 14]."
        },

        // --- 6. SUSTAINABILITY & RECYCLING ---
        {
            type: "mcq",
            q: "How should you dispose of old ink cartridges or non-working computer parts?",
            a: ["Throw them in the regular trash", "Take them to organizations that specifically recycle computer components and plastic/metal", "Keep them in your garage forever", "Bury them in your backyard"],
            cor: 1,
            exp: "E-waste and consumables should be recycled through proper channels to protect the environment[cite: 11]."
        },
        {
            type: "mcq",
            q: "What is a benefit of buying 'Recycled' or 'Refilled' ink cartridges?",
            a: ["They are always faster", "They are generally lower in cost and reduce environmental waste", "They never run out of ink", "They make the printer sound quieter"],
            cor: 1,
            exp: "Recycling cartridges is both cost-effective and environmentally friendly[cite: 11]."
        },
        {
            type: "mcq",
            q: "If you have an old computer that still works perfectly, what is a responsible option?",
            a: ["Throw it in the trash", "Donate it to a charitable organization or person who can use it", "Take it apart and throw the pieces away", "Leave it on the sidewalk"],
            cor: 1,
            exp: "Donating working hardware helps others and keeps functional tech out of landfills[cite: 11]."
        },
        {
            type: "mcq",
            q: "What is a way to 'Increase your digital competence' by helping others?",
            a: ["Tell them they are doing it wrong", "Volunteer to teach or provide technical support to family, friends, or charities", "Charging your friends for every question they ask", "Watching them use the computer"],
            cor: 1,
            exp: "Teaching and supporting others helps reinforce your own digital skills[cite: 11]."
        },
        {
            type: "mcq",
            q: "Why should you 'research carefully' before sending computer parts to a recycling company?",
            a: ["To see if they give you free gifts", "To ensure they aren't just sending the parts to a landfill in another country", "To see if they have a nice website", "To find the closest location"],
            cor: 1,
            exp: "Responsible recycling means ensuring the company follows legal and safe disposal practices[cite: 11]."
        },

        // --- 7. ADDITIONAL ETIQUETTE & IDENTITY SCENARIOS ---
        {
            type: "mcq",
            q: "You are representing your company on a social media site. Your posts should be:",
            a: ["About your personal hobbies", "Relevant to your profession and promote your organization positively", "Complaints about your boss", "Short and confusing"],
            cor: 1,
            exp: "Professional posts should align with your organization's values and your professional role[cite: 9, 10]."
        },
        {
            type: "mcq",
            q: "What should you do if a message requires further action?",
            a: ["Ignore it until you have time next week", "Respond in a timely manner", "Delete it", "Forward it to your personal account"],
            cor: 1,
            exp: "Professionalism requires prompt responses to actionable requests[cite: 11]."
        },
        {
            type: "mcq",
            q: "In an online environment, if you encounter someone from a different cultural background:",
            a: ["Demand they use your terminology", "Respect their diversity and be open to learning from their viewpoint", "Ignore their comments", "Report them to the moderator"],
            cor: 1,
            exp: "Digital citizenship involves valuing different perspectives and backgrounds[cite: 12, 13]."
        },
        {
            type: "mcq",
            q: "Which rule should you follow regarding electronic communications at school or work?",
            a: ["Your own personal rules", "The rules and guidelines established by your organization", "No rules; it's a free environment", "Whatever rules your friends follow"],
            cor: 1,
            exp: "Always adhere to organizational policies regarding digital communication[cite: 11]."
        },
        {
            type: "mcq",
            q: "What does 'Netiquette' stand for?",
            a: ["Network Quiet", "Internet Etiquette", "Next Technology", "New Ticket"],
            cor: 1,
            exp: "Netiquette is the customary code of polite behavior in online environments[cite: 10]."
        },

        // --- 8. TROUBLESHOOTING & MAINTENANCE ---
        {
            type: "mcq",
            q: "What is the best way to handle 'Electronic Bullying'?",
            a: ["Bully them back", "Refrain from using texting to bully and report such behavior to proper authorities", "Change your alias every day", "Delete all your accounts"],
            cor: 1,
            exp: "Cyberbullying is a violation of digital etiquette and should be handled formally[cite: 11]."
        },
        {
            type: "mcq",
            q: "If your computer has a problem, what should you look for first in an update?",
            a: ["A new game", "A patch designed specifically to fix that known problem", "A hardware replacement", "A different internet provider"],
            cor: 1,
            exp: "Software patches are often released to address specific bugs or glitches[cite: 13]."
        },
        {
            type: "mcq",
            q: "What is 'Crosstalk' in a networking context (referenced in Cat 6a design)?",
            a: ["Two people talking at once", "Signal interference between cables", "A type of social media site", "A printer error"],
            cor: 1,
            exp: "Cat 6a cables are designed to reduce this type of interference[cite: 28]."
        },
        {
            type: "mcq",
            q: "Why is it important to 'be thoughtful' when viewing others' comments?",
            a: ["To find something to argue about", "To understand that beliefs and traditions vary among users", "To count how many typos they made", "To see if they are using an alias"],
            cor: 1,
            exp: "Empathy and thoughtfulness are core components of digital citizenship[cite: 11]."
        },
        {
            type: "mcq",
            q: "When should you use 'Bcc' (Blind Carbon Copy) in an email?",
            a: ["To send a message to a primary recipient", "To send a copy to someone without other recipients knowing", "To reply to everyone in a group", "To attach a large file"],
            cor: 1,
            exp: "Bcc is used for privacy so that recipient addresses are hidden from others[cite: 12]."
        },

        // --- 9. CATEGORIZATION & MATCHING ---
        {
            type: "matching",
            q: "Match the concept to its correct definition:",
            pairs: [
                { term: "Digital Footprint", definition: "Permanent record of all your digital activity." },
                { term: "Alias", definition: "A name used to hide or change your identity online." },
                { term: "Critical Update", definition: "An important fix for security or system stability." }
            ],
            exp: "Understanding these terms is key to navigating Level 2 Digital Citizenship[cite: 4, 13, 31]."
        },
        {
            type: "categorization",
            q: "Categorize the following as 'Personal' or 'Professional' identity use:",
            categories: ["Personal Identity", "Professional Identity"],
            items: [
                { name: "Buying a gift for your mother", category: "Personal Identity" },
                { name: "Posting industry-related news", category: "Professional Identity" },
                { name: "Collaborating on a project folder", category: "Professional Identity" },
                { name: "Sharing vacation photos with family", category: "Personal Identity" }
            ],
            exp: "Keeping these activities separate maintains your professional reputation[cite: 7, 8, 9]."
        },
        {
            type: "mcq",
            q: "What is 'Asynchronous Communication'?",
            a: ["Information sent and received instantly", "A time delay between sending and receiving information (e.g., Email)", "Talking on the phone", "A type of physical cable"],
            cor: 1,
            exp: "Delayed communication allows users to respond at their convenience[cite: 5]."
        },
        {
            type: "mcq",
            q: "Which of these is a benefit of digital collaboration?",
            a: ["It always takes longer", "Increased productivity through simultaneous activity", "You never have to speak to anyone", "It uses more paper"],
            cor: 1,
            exp: "Real-time tools allow teams to work on the same project at once[cite: 4, 6]."
        },
        {
            type: "mcq",
            q: "What should you do if you find online humor 'Sarcastic' or 'Exaggerated'?",
            a: ["Assume it is factually true", "Consider the tone and potential bias of the source", "Report it as a virus", "Share it as professional advice"],
            cor: 1,
            exp: "Critical thinking is necessary to identify bias and tone online[cite: 13]."
        },

        // --- 10. RECAP & FINAL CONCEPTS ---
        {
            type: "mcq",
            q: "A high ranking in many search engines for a website usually indicates:",
            a: ["The site is free", "The site has invested effort in design and maintenance", "The site is 100% true", "The site is owned by the government"],
            cor: 1,
            exp: "Search ranking often reflects the professional quality of a site's management[cite: 13]."
        },
        {
            type: "mcq",
            q: "What is 'Creative Commons'?",
            a: ["A way to steal music", "A non-profit providing licenses to share creative work legally", "A type of social media site", "A computer manufacturer"],
            cor: 1,
            exp: "Creative Commons licenses help owners manage how their work is shared[cite: 9]."
        },
        {
            type: "mcq",
            q: "How long is the standard copyright for an author's creative work?",
            a: ["10 years", "70 years after the author's death", "Forever", "Until the author retires"],
            cor: 1,
            exp: "Copyright protection is long-lasting to protect intellectual property[cite: 9]."
        },
        {
            type: "mcq",
            q: "What are 'Public Domain' items?",
            a: ["Items you buy at a store", "Works not protected by intellectual property laws (free for everyone to use)", "Government secrets", "Anything found on Facebook"],
            cor: 1,
            exp: "Public domain works can be used by anyone without permission[cite: 9]."
        },
        {
            type: "mcq",
            q: "Which is a 'Personal Responsibility' mentioned in digital citizenship?",
            a: ["Fixing everyone's computer", "Living and working online in a safe and legal manner", "Buying the most expensive phone", "Winning online arguments"],
            cor: 1,
            exp: "Responsible users prioritize safety, legality, and ethics[cite: 11]."
        },
        {
            type: "mcq",
            q: "What is the best way to handle 'Conflicting Values' online?",
            a: ["Attack the other person's beliefs", "Be open to learning why an incident led to a specific reaction", "Mute everyone who disagrees", "Use an alias to argue"],
            cor: 1,
            exp: "Understanding different cultures and reactions is key to digital competence[cite: 11]."
        }
    ],
    l2_lesson11: [
        // --- 1. ADVANCED TEXT EDITING & FORMATTING ---
        {
            type: "mcq",
            q: "Which feature should you use to apply a consistent set of fonts, colors, and font sizes throughout a document quickly?",
            a: ["Format Painter", "Styles", "Find and Replace", "Page Setup"],
            cor: 1,
            exp: "Styles (like Heading 1, Heading 2) allow you to apply a pre-configured package of formatting choices consistently across your document."
        },
        {
            type: "mcq",
            q: "What is the primary benefit of using a document 'Template'?",
            a: ["It automatically checks your facts for accuracy", "It provides a pre-formatted layout and design to save time when starting a new document", "It protects the document from being opened by unauthorized users", "It increases the maximum storage space of the file"],
            cor: 1,
            exp: "Templates give you a structural blueprint (like a resume or invoice template) so you don't have to design documents from scratch."
        },
        {
            type: "mcq",
            q: "What does the 'Format Painter' tool allow you to do?",
            a: ["Draw shapes and lines in different colors", "Copy the formatting of a selected text block and apply it to another text block", "Change a document into a completely different file type", "Insert structural clip art into your pages"],
            cor: 1,
            exp: "Format Painter copies the exact cosmetic properties (fonts, sizes, colors) of highlighted text and paints them onto another selection."
        },
        {
            type: "mcq",
            q: "If you want to space text out horizontally from the left margin precisely, you should adjust the:",
            a: ["Line Spacing", "Indentation", "Orientation", "Page Break"],
            cor: 1,
            exp: "Indentation controls the distance between the paragraph text boundary and the page margins."
        },
        {
            type: "mcq",
            q: "Which feature lets you find every instance of a specific word and change it to something else automatically?",
            a: ["AutoCorrect", "Find and Replace", "Track Changes", "Word Count"],
            cor: 1,
            exp: "The Find and Replace tool searches your whole document database for specific keywords and updates them with your new input text."
        },

        // --- 2. MANAGING DIGITAL ASSETS ---
        {
            type: "mcq",
            q: "When you insert an image into a word document, what setting determines how paragraph text behaves around that image?",
            a: ["Image Scaling", "Text Wrapping", "Graphic Cropping", "Layout Masking"],
            cor: 1,
            exp: "Text wrapping (e.g., Tight, Square, In Line with Text) determines how the text flows around or behind an inserted graphic object."
        },
        {
            type: "mcq",
            q: "What does 'Cropping' an image do?",
            a: ["It changes the image color palette to black and white", "It trims or hides outer edges of the graphic to frame a specific area", "It compresses the file size to speed up network transfers", "It translates embedded text inside the graphic image"],
            cor: 1,
            exp: "Cropping cuts away unwanted outer sections of an asset image without changing its overall internal resolution properties."
        },
        {
            type: "mcq",
            q: "To display structured data using rows and columns in a content document, you should insert a:",
            a: ["SmartArt diagram", "Table", "Text Box", "Hyperlink layout"],
            cor: 1,
            exp: "Tables organize intersecting grids of rows and columns, making data sets much easier to read and format."
        },
        {
            type: "mcq",
            q: "What component is used to add text boxes, flowcharts, arrow symbols, or banner fields into a document layout manually?",
            a: ["Page Layout Breaks", "Shapes", "Font Effects", "Bibliography Citations"],
            cor: 1,
            exp: "The Shapes utility allows you to draw standard geometry, arrows, callouts, and custom text containers directly into document canvasses."
        },
        {
            type: "mcq",
            q: "When resizing a graphic asset, how do you prevent the image from becoming distorted or stretched unevenly?",
            a: ["Drag the center top resizing handle", "Drag one of the corner resizing handles", "Double-click the image body text", "Change the document page orientation"],
            cor: 1,
            exp: "Dragging a corner handle scales both width and height simultaneously, preserving the original aspect ratio of the asset."
        },

        // --- 3. PAGE LAYOUT & NAVIGATION ---
        {
            type: "mcq",
            q: "If you want to shift your document layout from a vertical page view to a horizontal wide-screen format, you change the:",
            a: ["Margin size", "Orientation", "Paper columns", "Page alignment"],
            cor: 1,
            exp: "Page orientation allows you to choose between Portrait (vertical) and Landscape (horizontal) layout positions."
        },
        {
            type: "mcq",
            q: "What feature forces any remaining text after your insertion point to automatically jump down onto a brand new page?",
            a: ["Line Break", "Page Break", "Paragraph Indent", "Section Divider"],
            cor: 1,
            exp: "A Page Break immediately ends the current page and advances your cursor workspace directly onto the top of the subsequent page."
        },
        {
            type: "mcq",
            q: "The margins of a document represent:",
            a: ["The physical thickness of the printing paper properties", "The blank spaces around the very top, bottom, left, and right edges of a page", "The total number of sentences inside a single paragraph", "The space separating line columns inside a database table"],
            cor: 1,
            exp: "Margins define the outer boundary areas of a page layout where text cannot normally be written or printed."
        },
        {
            type: "mcq",
            q: "To display information like page numbers, document titles, or dates automatically at the very bottom of every page, use:",
            a: ["Headers", "Footers", "Footnotes", "Endnotes"],
            cor: 1,
            exp: "Footers display repeating details at the bottom margin of pages, while Headers display repeating info at the top margin."
        },
        {
            type: "mcq",
            q: "Which view mode is best suited for reviewing how a document layout will look when printed out on physical paper sheets?",
            a: ["Web Layout view", "Print Layout view", "Outline view", "Draft mode console"],
            cor: 1,
            exp: "Print Layout view matches the exact canvas dimensions, page breaks, and margin spaces that will be processed by a hardware printer."
        },

        // --- 4. REVIEWING & COLLABORATING ---
        {
            type: "mcq",
            q: "When multiple people collaborate on a document, which tool logs every addition, deletion, or format change automatically?",
            a: ["AutoCorrect history", "Track Changes", "Document Inspector", "Restrict Editing mode"],
            cor: 1,
            exp: "Track Changes acts as an audit trail, highlighting exactly what edits were suggested, who made them, and when."
        },
        {
            type: "mcq",
            q: "What is the function of a 'Comment' in a content creation document?",
            a: ["It alters the text permanently without saving backups", "It provides an attached feedback note or query in a sidebar without changing the actual page text", "It compiles a citation index automatically at the end", "It converts standard text structures into HTML scripts"],
            cor: 1,
            exp: "Comments allow collaborators to leave margin annotations or review notes for others without corrupting the document text itself."
        },
        {
            type: "mcq",
            q: "What must you do to a tracked edit to incorporate it permanently into the document text?",
            a: ["Delete the text completely", "Accept the change", "Reject the change", "Add a new comment block"],
            cor: 1,
            exp: "Choosing 'Accept Change' removes the markup indicators and makes the collaborator's edit a permanent part of the text."
        },
        {
            type: "mcq",
            q: "If you disagree with a change a reviewer made using Track Changes, what action should you take?",
            a: ["Accept the change and complain in a comment", "Reject the change", "Reformat your entire computer system", "Save the document as a template"],
            cor: 1,
            exp: "Choosing 'Reject Change' reverses the suggested modification and restores the document text back to its previous version."
        },
        {
            type: "mcq",
            q: "Which utility checks for misspelled words and grammar structural errors throughout your content layout?",
            a: ["The Thesaurus", "Spelling and Grammar / Editor", "Smart Lookup", "Translate Engine"],
            cor: 1,
            exp: "The Spelling and Grammar engine compares document words against standard dictionaries to spot anomalies."
        },

        // --- 5. PRESENTATION SOFTWARE FUNDAMENTALS ---
        {
            type: "mcq",
            q: "What is the individual workspace canvas or block inside a presentation program called?",
            a: ["Document Page", "Slide", "Sheet Row", "Layout Node"],
            cor: 1,
            exp: "Presentation assets (like PowerPoint files) are divided into structured individual canvases called slides."
        },
        {
            type: "mcq",
            q: "What component do you use to type textual notes that only the presenter can see on screen during a live broadcast presentation?",
            a: ["Slide Titles", "Speaker Notes / Presenter Notes", "Handout Masters", "SmartArt Labels"],
            cor: 1,
            exp: "Speaker notes are visible on the presenter's control monitor console but remain hidden from the audience's main projector screen."
        },
        {
            type: "mcq",
            q: "The visual effect that occurs when a presentation file moves from one slide onto the subsequent slide is a:",
            a: ["Text Animation", "Slide Transition", "Graphic Object Style", "Theme Variant"],
            cor: 1,
            exp: "Transitions control the entire scene animation effect that triggers when jumping between adjacent slides."
        },
        {
            type: "mcq",
            q: "Applying a movement effect to an individual text block, list bullet, or image on a slide is known as a/an:",
            a: ["Transition", "Animation", "Style Theme", "Layout Break"],
            cor: 1,
            exp: "Animations control how specific elements *inside* a single slide behave (e.g., fading in an image or making bullet points fly in)."
        },
        {
            type: "mcq",
            q: "Which presentation view allows you to see all slides as small thumbnails on one screen to reorganize them easily?",
            a: ["Slide Show view", "Slide Sorter view", "Notes Page view", "Reading view mode"],
            cor: 1,
            exp: "Slide Sorter displays grid thumbnails, making it easy to drag, drop, and sequence presentation parts."
        },

        // --- 6. SPREADSHEET BASICS & DATA ---
        {
            type: "mcq",
            q: "The individual block formed by the intersection of a column and a row in a spreadsheet application is called a:",
            a: ["Gridline", "Cell", "Formula box", "Sheet index"],
            cor: 1,
            exp: "Cells are the fundamental data compartments in spreadsheets, mapped via coordinates like A1 or B25."
        },
        {
            type: "mcq",
            q: "How are columns normally identified inside standard spreadsheets?",
            a: ["By numbers (1, 2, 3...)", "By letters (A, B, C...)", "By colors (Red, Blue, Green)", "By functional symbols (+, -, *)"],
            cor: 1,
            exp: "Spreadsheet structures run vertically with alphabetic column labels and horizontally with numeric row numbers."
        },
        {
            type: "mcq",
            q: "Every functional formula or mathematical calculation statement inside a cell must begin with which symbol?",
            a: ["The dollar sign ($)", "The equals sign (=)", "The hash key (#)", "The asterisk symbol (*)"],
            cor: 1,
            exp: "The equals sign (=) signals to the spreadsheet processor that the cell contains an active formula calculation, not just plain text entry."
        },
        {
            type: "mcq",
            q: "What spreadsheet function automatically adds a range of chosen cell numeric values together?",
            a: ["AVERAGE", "SUM", "COUNT", "MAX"],
            cor: 1,
            exp: "The `=SUM()` expression calculates the total cumulative mathematical value of all designated coordinate cells."
        },
        {
            type: "mcq",
            q: "To change how data appears inside a cell (like rendering a plain 10 as $10.00) without altering the raw number value, adjust the:",
            a: ["Formula alignment", "Number Formatting", "Font Case option", "Data Query Filter"],
            cor: 1,
            exp: "Number formatting converts values into specific display masks like Currency, Percentage, Date, or Plain Text."
        },

        // --- 7. FILE MANAGEMENT & EXPORTING ---
        {
            type: "mcq",
            q: "What file command creates an entirely new duplicate version of your open file in a different location or with a new filename?",
            a: ["Save", "Save As", "Export PDF", "Print Queue"],
            cor: 1,
            exp: "Save As prompts the OS to establish a separate file clone, leaving your original version unchanged."
        },
        {
            type: "mcq",
            q: "If you want to share a text document with someone so they can read it but cannot accidentally shift or reformat its text layout, save it as a:",
            a: ["Plain text (.txt) file", "PDF (.pdf) file", "Word Template (.dotx)", "Rich Text (.rtf) layout"],
            cor: 1,
            exp: "Exporting to PDF locks the alignment, fonts, and graphics so the document prints and displays uniformly across all destination devices."
        },
        {
            type: "mcq",
            q: "What file extension is standard for traditional Microsoft Word processing application files?",
            a: [".xlsx", ".docx", ".pptx", ".html"],
            cor: 1,
            exp: ".docx is the modern standard XML-compressed file format extension for Word documents."
        },
        {
            type: "mcq",
            q: "When working on web cloud platforms like Google Docs, where are edits saved?",
            a: ["Only when clicking a manual Save button", "Automatically to the cloud after every keystroke or update action", "To your computer's local RAM only", "When the local internet router restarts"],
            cor: 1,
            exp: "Cloud-native suites continuously sync and store changes into remote data files instantly as you type."
        },
        {
            type: "mcq",
            q: "What utility checks for hidden metadata, personal developer info, or hidden rows before publishing a document publicly?",
            a: ["Document Inspector", "Spell Checker", "Format Painter", "Style Panel"],
            cor: 0,
            exp: "Document Inspector scans file backgrounds to scrub sensitive tracking metadata, comments, or author information prior to wide distribution."
        },

        // --- 8. ADVANCED LAYOUT CONCEPTS ---
        {
            type: "mcq",
            q: "What alignment option spaces your text block out evenly so both the left and right edges align flush with page margins?",
            a: ["Align Left", "Justify", "Center", "Align Right"],
            cor: 1,
            exp: "Justifying text stretches line spacings dynamically so text paragraphs create boxy, straight margins on both sides."
        },
        {
            type: "mcq",
            q: "To organize a simple text list into ordered chronological ranks or instruction steps, which element is best?",
            a: ["Bulleted List", "Numbered List", "Table of Contents", "Hyperlink Index"],
            cor: 1,
            exp: "Numbered lists designate absolute sequential steps or rank hierarchies, whereas bullet points list items without a strict order."
        },
        {
            type: "mcq",
            q: "What are the pre-set, non-printing dashed lines that help map boundaries when editing a layout grid table called?",
            a: ["Cell Borders", "Gridlines", "Margin Frames", "Paragraph Outlines"],
            cor: 1,
            exp: "Gridlines show you cell walls on your design screen even if you have disabled actual printing borders."
        },
        {
            type: "mcq",
            q: "What formatting parameter controls the vertical gap space between lines of text inside a paragraph container?",
            a: ["Character Kerning", "Line Spacing", "Paragraph Indenting", "Margin Scaling"],
            cor: 1,
            exp: "Line spacing (e.g., single-spaced, double-spaced) dictates the structural vertical distance separating lines of text."
        },
        {
            type: "mcq",
            q: "If you want to create an automatic, clickable index mapping your headings to page numbers at the start of a long report, you insert a/an:",
            a: ["Bibliography Table", "Table of Contents", "Index Citation Marker", "Header Template"],
            cor: 1,
            exp: "A Table of Contents scans text items flagged with Heading Styles to map and structure a clickable document index."
        },

        // --- 9. CATEGORIZATION & MATCHING ---
        {
            type: "matching",
            q: "Match the workspace file type extension to its matching core utility app ecosystem:",
            pairs: [
                { term: ".docx", definition: "Word Processing Document Application" },
                { term: ".xlsx", definition: "Spreadsheet Data Calculation Application" },
                { term: ".pptx", definition: "Presentation Layout Delivery Application" }
            ],
            exp: "Extensions keep the operating system updated on which application engine handles specific document database structures."
        },
        {
            type: "categorization",
            q: "Categorize the following commands based on whether they affect entire page frameworks (Page Layout) or individual font aesthetics (Character/Paragraph Formatting):",
            categories: ["Page Layout Level", "Character/Paragraph Formatting"],
            items: [
                { name: "Changing Page Margins", category: "Page Layout Level" },
                { name: "Applying Bold and Italic font properties", category: "Character/Paragraph Formatting" },
                { name: "Setting Landscape Orientation", category: "Page Layout Level" },
                { name: "Adjusting Line Spacing", category: "Character/Paragraph Formatting" }
            ],
            exp: "Layout controls global page margins and orientation, while formatting focuses on look adjustments to characters or sentences."
        },
        {
            type: "yesno",
            q: "Can multiple editors review, edit, and comment on a shared cloud word document simultaneously?",
            statements: [
                "Yes, cloud environments support live multi-user collaborative editing and chat logging streams.",
                "No, only one user can open a file at any given time, locking out other network accounts.",
                "Yes, but you can only see their edits after restarting your computer system."
            ],
            cor: [true, false, false],
            exp: "Cloud suites allow real-time multi-person authoring, meaning changes show up on screen immediately as they happen."
        },

        // --- 10. OBJECTS & LAYOUT COHESION ---
        {
            type: "mcq",
            q: "What component allows you to combine multiple drawn shapes or lines into a single, unified object box that moves together?",
            a: ["Locking tool", "Grouping", "Merging layers", "Anchoring text"],
            cor: 1,
            exp: "Grouping links several separate items together, allowing you to move or scale them as a single piece."
        },
        {
            type: "mcq",
            q: "What happens when you adjust an object's layer sorting position to 'Bring to Front'?",
            a: ["The item is deleted completely", "The object is moved to the top layer, appearing over any overlapping items", "The object moves behind the page background text", "The file size increases"],
            cor: 1,
            exp: "Layer sorting dictates object stack depth. 'Bring to Front' places the asset on top of all overlapping canvas objects."
        },
        {
            type: "mcq",
            q: "When a spelling checker flags a word with a wavy red underline, what does it mean?",
            a: ["The word is correctly formatted but needs to be bolded", "The word is not recognized in the application's current language dictionary", "The word contains a critical security virus threat", "The line spacing above the paragraph container is broken"],
            cor: 1,
            exp: "Red underlines signal spelling exceptions or unknown proper nouns that aren't matching dictionary reference terms."
        },
        {
            type: "mcq",
            q: "What is the purpose of using a 'Footnote' in formal content creation?",
            a: ["To customize the page border colors", "To add background tracking data variables", "To place an source reference or citation annotation at the bottom of the current page", "To structure slide presentation transitions"],
            cor: 2,
            exp: "Footnotes anchor precise citation reference details at the bottom of the page where the source index marker was embedded."
        },
        {
            type: "mcq",
            q: "To select an entire single paragraph block instantly using your mouse pointer, you should:",
            a: ["Single-click any letter word", "Triple-click anywhere inside that paragraph body", "Right-click the page margins once", "Drag the scrollbar handle up and down"],
            cor: 1,
            exp: "Triple-clicking a word paragraph quickly highlights the entire contiguous text container automatically."
        },
        {
            type: "mcq",
            q: "What feature automatically adjusts column widths in a spreadsheet to match the longest text entry inside them?",
            a: ["AutoCorrect", "AutoFit", "Merge & Center", "Wrap Text"],
            cor: 1,
            exp: "AutoFit expands or contracts column boundaries dynamically to display cell data perfectly without clipping text."
        }
    ],
    l2_lesson12: [
    // --- SECTION 1: STEP-BY-STEP ACTION SEQUENCES ---
    {
        type: "arrange",
        q: "Arrange the sequential steps required to manually protect an Android device against accidental or unwanted purchases in the Google Play Store.",
        steps: [
            "Open the Google Play Store application.",
            "Touch the menu icon and then tap on Settings.",
            "Touch the option labeled 'Require authentication for purchases'.",
            "Choose your desired authentication frequency setting.",
            "Follow the remaining on-screen instructions and click OK."
        ],
        exp: "According to the IC3 GS6 framework, Android purchase protection requires accessing the Play Store Settings, selecting 'Require authentication for purchases', and saving your preference."
    },
    {
        type: "arrange",
        q: "Arrange the correct operational steps to restrict accidental or unwanted in-app purchases on an Apple iOS iPhone.",
        steps: [
            "Navigate to Settings and select Screen Time.",
            "Touch Continue, choose 'This is My Device', and turn Screen Time on.",
            "Tap on Content & Privacy Restrictions.",
            "Enter your secure device passcode.",
            "Tap App Store Purchases and set In-App Purchases to 'Don't Allow'."
        ],
        exp: "iOS utilizes Screen Time settings under Content & Privacy Restrictions to completely disable or restrict unauthorized App Store and in-app purchases."
    },
    {
        type: "arrange",
        q: "Arrange the fundamental architectural steps involved when a standard Voice over Internet Protocol (VoIP) system processes and transmits your voice.",
        steps: [
            "The system captures raw analog voice signals through a microphone.",
            "The system converts the continuous analog voice signals into digital data.",
            "The digital data is segmented into small, discrete digital packets.",
            "Addressing and routing information is appended to each data packet.",
            "The packets are transmitted across the broadband Internet connection."
        ],
        exp: "VoIP operates by converting voice signals into small packets of digital data, adding addressing details, and routing them over a broadband Internet connection."
    },
    {
        type: "arrange",
        q: "Arrange the logical workflow for creating and dispatching a formal business electronic mail (email) message.",
        steps: [
            "Click the Compose button to instantiate a new mail message window.",
            "Address the message by entering target email addresses into the To, Cc, or Bcc fields.",
            "Type a concise, relevant single line of text into the Subject line.",
            "Draft the main text in the message pane and attach any required digital files.",
            "Execute a spell check, proofread to eliminate grammatical errors, and click Send."
        ],
        exp: "The correct professional workflow requires addressing, providing a subject, composing the body, attaching files, proofreading/spellchecking, and finally sending."
    },

    // --- SECTION 2: MATCHING MATRICES ---
    {
        type: "match",
        q: "Match each digital communication method with its definitive operational characteristic.",
        pairs: [
            { item: "Short Message Service (SMS)", match: "Limited to short strings of text (about 100 to 200 characters) sent over a cellular network." },
            { item: "Multimedia Messaging Service (MMS)", match: "Standard way to transmit photos, videos, breaking news, or weather updates over cellular lines." },
            { item: "Instant Messaging (IM)", match: "Allows multiple participants to converse and exchange text in a dedicated app window in real-time." },
            { item: "WhatsApp / Viber", match: "Cross-platform messaging systems that send individual or group data bypassing traditional SMS channels via Wi-Fi/mobile data." }
        ],
        exp: "SMS is limited by character constraints over cellular infrastructure; MMS handles media files; IM provides dedicated real-time windows; apps like WhatsApp utilize Internet protocols instead of cellular SMS lanes."
    },
    {
        type: "match",
        q: "Match the specific Electronic Mail (Email) header fields and components to their correct functional definitions.",
        pairs: [
            { item: "To Field", match: "Identifies the primary recipient or recipients of the email message." },
            { item: "Cc (Carbon Copy)", match: "Lists individuals who will receive a copy of the email openly visible to all other recipients." },
            { item: "Bcc (Blind Carbon Copy)", match: "Lists individuals who receive a copy of the email secretly, hiding their identity from others." },
            { item: "Subject Line", match: "A single line of text designed to let the recipient know exactly what the message is about." },
            { item: "Signature", match: "An optional block of text at the end containing a name, title, and corporate contact information." }
        ],
        exp: "Primary targets go in 'To'; 'Cc' is for secondary open visibility; 'Bcc' conceals the recipient; 'Subject' summarizes intent; 'Signature' appends professional metadata."
    },
    {
        type: "match",
        q: "Match the telephonic communication technologies to their precise architectural mediums.",
        pairs: [
            { item: "Landline Phones", match: "Voice signals sent as analog electrical signals over the public switched telephone network." },
            { item: "Mobile Phones", match: "Voice signals transmitted wirelessly across a cellular carrier's distributed network." },
            { item: "VoIP Phones", match: "Voice signals converted into compressed packets and transmitted over a broadband Internet connection." }
        ],
        exp: "Landlines rely on legacy switched public networks; mobile phones use wireless carrier towers; VoIP exclusively parses digital packets over broadband networks."
    },
    {
        type: "match",
        q: "Match the digital content delivery terms with their behavior and functional characteristics.",
        pairs: [
            { item: "Pre-recorded Streaming", match: "Delivers content in a steady flow from a media server, allowing the client to pause, rewind, or fast-forward." },
            { item: "Live Streaming", match: "Broadcasting real-time audio or video footage simultaneously to an audience accessing a single common feed." },
            { item: "Subscription Streaming", match: "Grants unfettered access to an entire catalog of digital works on a platform for a fixed recurring monthly fee." },
            { item: "Ad-Supported Streaming", match: "Grants access to streaming content without a subscription fee, but injects advertisements at various times." }
        ],
        exp: "Pre-recorded streams allow trick-play controls (pause/rewind); live streams are real-time broadcasts; subscriptions require a flat monthly fee; ad-supported options monetize via commercial interruptions."
    },
    {
        type: "match",
        q: "Match the criteria of the AAOCC evaluation framework used to audit digital community resources with its correct definition.",
        pairs: [
            { item: "Accuracy", match: "Evaluating if the information provided is scientifically correct, truthful, and free of factual errors." },
            { item: "Authentication", match: "Verifying the background, credentials, and legitimacy of the source or author." },
            { item: "Objectivity", match: "Determining whether the information is presented without bias, prejudice, or commercial agendas." },
            { item: "Currency", match: "Checking the timeline, update frequency, and relevance of the data to ensure it is not obsolete." },
            { item: "Coverage", match: "Assessing the depth, scope, and completeness of the topics addressed on the site." }
        ],
        exp: "The AAOCC framework stands for Accuracy, Authentication, Objectivity, Currency, and Coverage, which acts as an evaluation metric for internet research validity."
    },
    {
        type: "match",
        q: "Match the core concepts of Internet Commerce (E-Commerce) to their correct classifications.",
        pairs: [
            { item: "Tangible Goods", match: "Physical products bought online that are physically delivered to a customer who then claims full ownership." },
            { item: "Intangible Services", match: "Activities or work performed by a provider over the Internet to satisfy a specific need without a physical item." },
            { item: "In-App Purchases", match: "Financial transactions made within an application to unlock special features, content, or virtual currency." },
            { item: "Digital Certificate", match: "An electronic file that authenticates and establishes the true identity of an individual or company online." }
        ],
        exp: "Goods are tangible physical products; services are intangible actions; in-app purchases happen within a running software environment; digital certificates cryptographically confirm identity."
    },

    // --- SECTION 3: YES / NO (TRUE or FALSE) TASKS ---
    {
        type: "yesno",
        q: "Is it true that cellular network service providers enforce strict character limitations (typically around 100 to 200 characters) on standard SMS text messages?",
        a: "Yes",
        exp: "Short Message Service (SMS) protocols natively limit strings of text to between 100 and 200 characters depending entirely on the carrier's specific configuration."
    },
    {
        type: "yesno",
        q: "Does sending a Multimedia Messaging Service (MMS) text message guarantee the exact same delivery speed as a standard Short Message Service (SMS) text message?",
        a: "No",
        exp: "MMS delivery speeds can be substantially slower than standard SMS depending entirely on the physical size of the media attachment and carrier bandwidth."
    },
    {
        type: "yesno",
        q: "To successfully initiate a standard cellular SMS text message, must you know the recipient's specific cellular phone number?",
        a: "Yes",
        exp: "Unlike web platforms that use usernames, standard cellular text messaging networks require the destination cell phone number to route messages correctly."
    },
    {
        type: "yesno",
        q: "Do non-SMS applications like WhatsApp, Viber, and Facebook Messenger route their messages through the traditional cellular provider SMS/MMS channels?",
        a: "No",
        exp: "These modern platforms bypass traditional cellular carrier SMS channels completely, utilizing Wi-Fi or mobile data connections to transmit message payloads."
    },
    {
        type: "yesno",
        q: "Can web-based chat features be integrated directly inside an electronic mail application mailbox interface?",
        a: "Yes",
        exp: "Many modern communication interfaces integrate web-based instant chat options straight into a user's active mailbox console for real-time engagement."
    },
    {
        type: "yesno",
        q: "Is Instant Messaging (IM) primarily categorized as an asynchronous communication method where parties reply days later?",
        a: "No",
        exp: "Instant Messaging is a real-time, synchronous communication tool designed for immediate conversation within a dedicated interface window."
    },
    {
        type: "yesno",
        q: "Is a phone call highly recommended over written communication when you must convey a highly complicated idea or discuss an extremely sensitive topic?",
        a: "Yes",
        exp: "Phone calls bring verbal clarity and nuance, making them highly effective when dealing with complex details, sensitive matters, or instances requiring immediate responses."
    },
    {
        type: "yesno",
        q: "Are incoming voice calls received on a traditional landline telephone line subject to long-distance per-minute fees for the recipient?",
        a: "No",
        exp: "On standard public switched landline networks, incoming telephone calls are completely free to receive, though outgoing long-distance calls incur costs."
    },
    {
        type: "yesno",
        q: "Does Voice over Internet Protocol (VoIP) transmit voice communications by maintaining a continuous, uncompressed analog circuit connection across telephone poles?",
        a: "No",
        exp: "VoIP works by digitizing voice signals, fragmenting them into small digital data packets, adding addressing information, and routing them over the Internet."
    },
    {
        type: "yesno",
        q: "Are VoIP conference calls completely limited to audio transmissions, making them incapable of screen sharing or file transfers?",
        a: "No",
        exp: "Modern VoIP conferencing architectures actively support video calls, multi-user screen sharing, instant messaging, and direct digital file transfers."
    },
    {
        type: "yesno",
        q: "Will a Voice over Internet Protocol (VoIP) residential hardware phone system continue to function perfectly during a local electrical power outage, even if no backup generator is present?",
        a: "No",
        exp: "VoIP systems are wholly dependent on an active broadband internet connection and continuous electrical power to maintain service."
    },
    {
        type: "yesno",
        q: "Are online discussion forums generally structured in a chronological chat layout rather than a categorized, question-and-answer threaded format?",
        a: "No",
        exp: "Forums are organized into distinct categories and threads using a structured question-and-answer format, making them less immediate than a live chat room."
    },
    {
        type: "yesno",
        q: "Is Electronic Mail (Email) traditionally treated as the ideal primary tool for communications that demand an immediate, emergency response?",
        a: "No",
        exp: "Email is an asynchronous tool intended for business and personal communication where an immediate response is not strictly urgent or required."
    },
    {
        type: "yesno",
        q: "To successfully instantiate a brand new message canvas in Google Gmail, should the user click on the button labeled 'Compose'?",
        a: "Yes",
        exp: "In the Gmail interface, the standard action to open a fresh email drafting pane is clicking the 'Compose' button located in the navigation pane."
    },
    {
        type: "yesno",
        q: "Is it considered acceptable digital netiquette to type business emails entirely in uppercase letters when you want to highlight regular bullet points?",
        a: "No",
        exp: "Using all capital letters in digital communication is recognized as the online equivalent of shouting and should be completely avoided."
    },
    {
        type: "yesno",
        q: "Is relying on complex humor and inside jokes encouraged when sending professional emails to international business clients?",
        a: "No",
        exp: "Humor is highly subjective and easily misinterpreted across different cultures; professional digital communications should remain objective and clear."
    },
    {
        type: "yesno",
        q: "Does the acronym 'E-Commerce' refer exclusively to the process of downloading applications, excluding physical items like clothing or electronics?",
        a: "No",
        exp: "E-Commerce represents the entire paradigm of buying and selling both physical, tangible goods and intangible services over the Internet."
    },
    {
        type: "yesno",
        q: "Do completely legitimate and reputable e-commerce websites omit links to their privacy policies and terms and conditions to save page space?",
        a: "No",
        exp: "Legitimate, consumer-safe e-commerce websites will prominently display clear hyperlinks to both their Privacy Policy and Terms and Conditions."
    },
    {
        type: "yesno",
        q: "Does the appearance of a lock icon in a browser's address bar alongside the 'https' protocol indicate that transactions with that web server are encrypted and secure?",
        a: "Yes",
        exp: "The 'https' prefix paired with a closed padlock icon confirms that the web connection is securely encrypted via a certified secure socket layer."
    },
    {
        type: "yesno",
        q: "Is a trusted third party known as a Certificate Authority (CA) responsible for verifying and validating the legitimacy of a website's digital certificate?",
        a: "Yes",
        exp: "Certificate Authorities act as trusted arbiters in the web security ecosystem, checking and signing digital certificates to verify corporate identities."
    },
    {
        type: "yesno",
        q: "Are visual symbols or graphic trust badges printed directly on an e-commerce webpage technically identical to a valid cryptographic HTTPS protocol?",
        a: "No",
        exp: "Graphic badges on a webpage can be easily fabricated and do not actively secure data transactions; only the native browser 'https' protocol and lock icon guarantee structural transport security."
    },
    {
        type: "yesno",
        q: "When a media server streams a pre-recorded video file to multiple clients simultaneously, does it transmit a single shared file that clients must all watch at the exact same playback position?",
        a: "No",
        exp: "For pre-recorded streaming assets, the media server streams dedicated, controllable data feeds to each individual client, allowing them to independently pause, rewind, or fast-forward."
    },
    {
        type: "yesno",
        q: "Can an enterprise utilize no-cost or low-cost streaming service platforms to broadcast real-time corporate meetings or interactive panel presentations globally?",
        a: "Yes",
        exp: "Modern cloud distribution networks make it trivial and highly cost-effective for businesses to stream live audio and video footage to viewers on web browsers or mobile devices."
    },
    {
        type: "yesno",
        q: "If an individual chooses not to purchase a premium subscription for a digital video streaming service, will they typically encounter advertisements interspersed throughout the media content?",
        a: "Yes",
        exp: "Free or non-subscribed tiers on mainstream streaming platforms offset infrastructure delivery costs by injecting digital advertisements during playback."
    },
    {
        type: "yesno",
        q: "Is it possible to completely disable or restrict in-app purchases on a mobile device to prevent children or unauthorized users from accumulating unwanted credit card charges?",
        a: "Yes",
        exp: "Both iOS and Android operating systems provide robust native configuration menus under Settings to require authentication or block in-app purchases entirely."
    },

    // --- SECTION 4: MINIMIZED MULTIPLE CHOICE QUESTIONS (MCQs) ---
    {
        type: "mcq",
        q: "You are choosing an online vendor to purchase expensive field equipment. Which set of attributes represents the most reliable indicator of a secure, reputable e-commerce business?",
        a: [
            "An anonymous contact form, unverified low prices, and flashy promotional badges on the homepage.",
            "A verified market reputation, reliable delivery histories, fair return policies, and visible links to privacy terms.",
            "A strict 'no-returns' policy paired with an HTTP-only web address that lacks a padlock icon.",
            "An online store that requires you to email your credit card details directly to their customer service team."
        ],
        cor: 1,
        exp: "Reputable digital storefronts distinguish themselves through clear customer support options, reliable fulfillment, transparent return frameworks, and cryptographic web infrastructure."
    },
    {
        type: "mcq",
        q: "What occurs from a network infrastructure perspective when a massive audience connects to a live streaming broadcast?",
        a: [
            "Each user downloads a static copy of the file completely to local storage before it begins playing.",
            "The media server sends a real-time live video and audio feed across the Internet that multiple clients connect to simultaneously.",
            "The client device acts as a telephone switchboard routing analog radio frequencies over cell towers.",
            "The stream permanently deletes the user's browser history to free up operational bandwidth."
        ],
        cor: 1,
        exp: "Live streaming broadcasts a real-time, continuous video/audio feed over the internet, handling dynamic concurrent connections without saving the whole asset onto the client storage drive."
    },
    {
        type: "mcq",
        q: "You need to send an email attachment containing sensitive operational data to a primary client, while also subtly copying a supervisor without the client's knowledge. Which configuration should you use?",
        a: [
            "Put the client in the Cc field and the supervisor in the To field.",
            "Put the client in the To field and the supervisor in the Bcc field.",
            "Put both the client and supervisor in the open Cc field.",
            "Put the supervisor in the Subject line and the client in the Message pane."
        ],
        cor: 1,
        exp: "The Bcc (Blind Carbon Copy) field hides the recipient's identity from everyone else on the email thread, while the To field designates primary target recipients."
    },
    {
        type: "mcq",
        q: "A specific digital communication tool is described as being highly sensitive to transmission delays, vulnerable to echo/feedback loop issues, and completely non-functional without local electricity or Internet. What technology is this?",
        a: [
            "Traditional Landline Telephony",
            "Short Message Service (SMS)",
            "Voice over Internet Protocol (VoIP)",
            "Asynchronous Discussion Forums"
        ],
        cor: 2,
        exp: "VoIP relies entirely on real-time internet data packet delivery, making it uniquely vulnerable to connection latencies, jitter, feedback, and local power loss."
    },
    {
        type: "mcq",
        q: "When evaluating a newly discovered community research website using the AAOCC protocol, what specific element are you analyzing under the 'Currency' parameter?",
        a: [
            "The financial cost required to access the site's premium discussion areas.",
            "The precise geographical location of the server hosting the forum data.",
            "The timeline and update frequency of the content to ensure it is modern and accurate.",
            "The specific encryption protocols protecting the login screen."
        ],
        cor: 2,
        exp: "Currency in information evaluation methodologies gauges how recently the material was recorded, edited, or reviewed to protect against obsolete data."
    },

    // --- SECTION 5: COMPLEX IDENTIFICATION & CLASSIFICATION (YES/NO FOCUS) ---
    {
        type: "yesno",
        q: "Does a standard digital certificate contain data that validates the cryptographic key and proves the true identity of a website's parent entity?",
        a: "Yes",
        exp: "Digital certificates are cryptographic credentials issued by trusted authorities specifically to bind identity data to a web domain's public keys."
    },
    {
        type: "yesno",
        q: "Can standard cell phone text messaging apps be used to transmit files, photos, and video attachments if the underlying network protocol switches from SMS to MMS?",
        a: "Yes",
        exp: "Multimedia Messaging Service (MMS) expands basic texting capabilities to support sending photos, audio, short video clips, and location markers."
    },
    {
        type: "yesno",
        q: "Is it necessary to complete a formal system reboot every time an in-app purchase is successfully processed on a smartphone?",
        a: "No",
        exp: "In-app purchases update dynamically within the running program context by communicating with the app store API; no device reboot is required."
    },
    {
        type: "yesno",
        q: "Does using the 'Bcc' field in an email client automatically encrypt the entire body text of the message from cyber intercepts?",
        a: "No",
        exp: "Bcc handles recipient visibility constraints only; it does not encrypt or sign the textual contents of the email body payload."
    },
    {
        type: "yesno",
        q: "Are web-based forums completely anonymous spaces where users are barred from forming organized sub-groups or threads?",
        a: "No",
        exp: "Forums are highly organized structures explicitly split into logical topic categories and conversation threads, often requiring registration."
    },
    {
        type: "yesno",
        q: "Is an internet connection mandatory for a consumer to experience real-time video conferencing on an iOS or Android mobile device?",
        a: "Yes",
        exp: "Video conferencing pipelines transfer massive amounts of real-time audio/visual data packets, which strictly requires data connectivity via Wi-Fi or mobile networks."
    },
    {
        type: "yesno",
        q: "Can a user pull down the formatting toolbar within an email client to adjust font sizes, alter colors, or structure text lists?",
        a: "Yes",
        exp: "The formatting toolbar in email interfaces provides explicit rich-text controls to modify fonts, text properties, text alignments, and lists."
    },
    {
        type: "yesno",
        q: "Are international cellular text messages guaranteed to cost the exact same rate as domestic text messages under all baseline cellular contracts?",
        a: "No",
        exp: "International texting routing rates carry premium charges; users should carefully review their cellular contract terms to avoid unexpected international fees."
    },
    {
        type: "yesno",
        q: "Does Voice over Internet Protocol technology run exclusively over dedicated fiber-optic copper cables completely isolated from the rest of the web?",
        a: "No",
        exp: "VoIP utilizes standard public and private broadband networks, parsing voice data packets alongside normal everyday web traffic."
    },
    {
        type: "yesno",
        q: "Is an email signature block required by modern operating systems to be a legally binding, cryptographically locked document?",
        a: "No",
        exp: "An email signature is simply an optional block of descriptive text containing contact details, names, or sign-off greetings appended to the end of a message."
    },
    {
        type: "yesno",
        q: "Should an online consumer exercise skepticism and conduct external background research if a digital vendor's brand is completely unfamiliar to them?",
        a: "Yes",
        exp: "Skepticism is an important digital literacy habit; researching unknown brands protects consumers from fraudulent sites and bad refund practices."
    },
    {
        type: "yesno",
        q: "Does a local library act as an acceptable physical or digital alternative tool to narrow down highly specific community resource info?",
        a: "Yes",
        exp: "Libraries offer access to verified scholarly lookup indices, archival storage databases, and expert assistance to locate targeted information."
    },
    {
        type: "yesno",
        q: "Will a standard pre-recorded media stream crash if a single viewer attempts to use fast-forward controls while another user is pausing?",
        a: "No",
        exp: "Media servers process distinct interaction streams for each connected client asset handle, ensuring absolute independence during playback."
    },
    {
        type: "yesno",
        q: "Is it standard protocol to run an automated spell checker and manually proofread a professional business message before firing it out?",
        a: "Yes",
        exp: "Proofreading and utilizing spellcheck engines minimizes syntax mistakes, maintaining professional credibility in all business communications."
    },
    {
        type: "yesno",
        q: "Are premium streaming platforms legally obligated to keep all content entirely free of charge for anyone who accesses their webpage?",
        a: "No",
        exp: "Streaming vendors use various business models, ranging from subscription paywalls to ad-supported monetization engines."
    },
    {
        type: "yesno",
        q: "Is a traditional instant message board thread exactly identical to a landline phone conference architecture?",
        a: "No",
        exp: "Instant message boards use text-based asynchronous data formats, whereas landline conferencing utilizes circuit-switched voice channels."
    }
],
l2_lesson13: [
    // --- SECTION 1: CERTIPORT-STYLE STEP REARRANGEMENTS (ARRANGE) ---
    {
        type: "arrange",
        q: "An organizer sends you a calendar invite for a live collaboration session via Microsoft Teams. Arrange the standard sequential actions to process the request and attend the session on the meeting day.",
        steps: [
            "Open the incoming meeting invitation email in your mailbox client.",
            "Click the 'Accept' button to dynamically commit the placeholder to your calendar.",
            "Open your digital Calendar application on the day of the scheduled event.",
            "Locate and click on the specific active meeting time slot.",
            "Click the 'Join Meeting' link or button inside the entry to launch the virtual conference room."
        ],
        exp: "Certiport workflows confirm that accepting an invite auto-schedules it to your calendar. On the meeting day, navigating to that entry and choosing 'Join' grants you system access."
    },
    {
        type: "arrange",
        q: "A team needs to utilize automated workflow control to pass an updated policy proposal through a formal review cycle. Arrange the operational steps of a document workflow process.",
        steps: [
            "The initial content creator drafts the base document inside a cloud collaboration environment.",
            "The creator submits the file to instantiate the automated workflow control tracking system.",
            "The document is automatically routed by the host network platform directly to the next reviewer.",
            "The current reviewer opens, evaluates, updates, or approves their designated phase of work.",
            "The platform automatically hands off the document branch to the subsequent downstream approver."
        ],
        exp: "Automated workflow controls remove manual delivery lag by programmatically routing files to the next predefined user in sequence once the current actor completes their tasks."
    },
    {
        type: "arrange",
        q: "You are setting up your hardware workspace and software properties immediately before speaking on a highly visible corporate panel presentation. Arrange the professional preparation steps.",
        steps: [
            "Position your external hardware webcam at eye-level and test your audio inputs.",
            "Access your video software properties interface to modify or blur your local background environment.",
            "Verify that you are physically located in a quiet, low-noise acoustic zone to prevent audio bleeding.",
            "Launch your file share controls to verify audience visibility of presentation slides.",
            "Engage the platform's 'Record' function if archival distribution copies are required for download."
        ],
        exp: "Professional virtual presence demands verifying physical/audio components, setting professional digital boundaries (background masks), checking presentation assets, and configuring recording toggles before live streaming."
    },

    // --- SECTION 2: MULTI-TIER COGNITIVE MATRICES (MATCH) ---
    {
        type: "match",
        q: "Match each collaboration environment concept with its correct definition or deployment utility.",
        pairs: [
            { item: "Real-time Communication", match: "Information is sent and received instantly with no operational lag, simulating face-to-face exchanges." },
            { item: "Delayed Communication", match: "Asynchronous interaction where gaps occur between transmitting an update and receiving feedback." },
            { item: "SharePoint", match: "A web-based collaborative platform designed to facilitate file sharing inside a company and with verified partners." },
            { item: "Shared Network Drive", match: "A centralized on-premises or cloud storage space allocated for saving large collections of corporate employee records." }
        ],
        exp: "Real-time is immediate; delayed is asynchronous; SharePoint is Microsoft's web-based document coordination suite; shared network drives host bulk multi-user file volumes."
    },
    {
        type: "match",
        q: "Match the following structural management attributes of cloud document systems to their exact definitions.",
        pairs: [
            { item: "Document Version Control", match: "Ensures that only a single collaborator can execute active data edits or lock revisions at any given moment." },
            { item: "Workflow Control", match: "Programmatically passes records across individual milestone owners automatically based on approval rules." },
            { item: "Social Networking Features", match: "Enables multi-user groups to post contextual notes, feedback strings, and media directly within a workspace." },
            { item: "Team-specific Email Arrays", match: "Stores announcements, alerts, and operational notices in a shared sandbox away from chaotic personal inboxes." }
        ],
        exp: "Version control stops file overwrites; workflows automate lifecycle tracking; social components handle casual team commentary; team arrays partition corporate notices away from regular incoming traffic."
    },
    {
        type: "match",
        q: "Match the active interface feature used during live video meetings with its functional purpose.",
        pairs: [
            { item: "Participants Control", match: "Allows the host to dynamically add new users or audit the roster during a call." },
            { item: "Screen Sharing", match: "Projects active slides, software walkthroughs, or live desktops to everyone connected to the conference." },
            { item: "Monitored Q&A Area", match: "Provides an isolated chat section to post queries cleanly without interrupting the vocal speaker." },
            { item: "Raise Hand Utility", match: "Generates a non-verbal visual alert to notify the host that a listener is requesting the floor to speak." }
        ],
        exp: "Rosters are updated via Participants; desktops are broadcast via Screen Sharing; text queues belong in the Q&A box; conversational floor control uses the Raise Hand flag."
    },

    // --- SECTION 3: TRUE/FALSE INTERACTIVE CHECKS (YESNO) ---
    {
        type: "yesno",
        q: "Is it true that real-time communication is defined by information being sent and received instantly, much like a traditional face-to-face interaction?",
        a: "Yes",
        exp: "Synchronous or real-time systems transfer operational data packets without a built-in delivery lag, creating instant responses."
    },
    {
        type: "yesno",
        q: "Does asynchronous interaction mean that there is an intentional or structural time delay between sending information and receiving a response?",
        a: "Yes",
        exp: "Delayed or asynchronous communication includes mechanisms like emails, message boards, or offline tasks where answers aren't expected instantly."
    },
    {
        type: "yesno",
        q: "Was Microsoft SharePoint natively architected to strictly prevent data collaboration outside an internal network, blocking all access for external partner organizations?",
        a: "No",
        exp: "SharePoint functions explicitly as a web-based collaborative environment designed to securely share files with both internal staff and authorized external partners."
    },
    {
        type: "yesno",
        q: "Does document version control permit multiple people to save conflicting edits over the exact same file paragraph at the absolute same microsecond?",
        a: "No",
        exp: "Version control prevents document corruption by locking edits to a single authorized user at a time, or by cleanly separating individual revision histories."
    },
    {
        type: "yesno",
        q: "Can a workflow control system automatically forward a project document to the next reviewer in line once the current approver marks their task completed?",
        a: "Yes",
        exp: "The core purpose of automated workflow engines is to instantly hand off files down a predetermined administrative chain without manual intervention."
    },
    {
        type: "yesno",
        q: "Is it considered poor digital etiquette to post non-work comments, text strings, or multimedia files inside social networking areas designated for business communication?",
        a: "No",
        exp: "Dedicated social networking fields on team portals are specifically created to let staff share text updates and media to build quick engagement outside formal records."
    },
    {
        type: "yesno",
        q: "Do collaborative group calendars require each individual attendee to manually calculate time zone math before clicking accept?",
        a: "No",
        exp: "Modern scheduling software auto-detects and scales meeting requests to each participant's local workstation clock configuration."
    },
    {
        type: "yesno",
        q: "If you configure an explicit digital calendar entry for a web conference, can you typically launch into that virtual environment using a direct 'Join Meeting' button inside the calendar interface?",
        a: "Yes",
        exp: "Calendar records store platform meta-links. Clicking 'Join Meeting' instantly opens the app or web portal room."
    },
    {
        type: "yesno",
        q: "Are virtual webinars and screen-sharing sessions fundamentally ineffective because they require participants to leave their geographic home base to attend?",
        a: "No",
        exp: "Webinars allow users to gather information and collaborate interactively from anywhere on Earth without traveling."
    },
    {
        type: "yesno",
        q: "Can you dynamically add more participants to an active, ongoing live video conference by clicking the 'Participants' interface control button?",
        a: "Yes",
        exp: "The Participants button opens full menu options to invite, dial in, or authorize permissions for additional users while a call is running."
    },
    {
        type: "yesno",
        q: "Will a meeting software window display a participant's live video stream even if their hardware webcam device is completely powered down or disconnected?",
        a: "No",
        exp: "If a user's camera is turned off or missing, the software dashboard defaults to showing their static system profile picture or text name string instead."
    },
    {
        type: "yesno",
        q: "Does screen sharing allow you to pass control of your visible mouse cursor and displayed applications directly to a remote connected user?",
        a: "Yes",
        exp: "Modern collaboration platforms allow a presenter to grant mouse/keyboard control to a remote listener so they can interact with the host system live."
    },
    {
        type: "yesno",
        q: "Must an online audience interrupt a speaker mid-sentence via their microphone to ask clarification questions on a webinar?",
        a: "No",
        exp: "Users should utilize the text-based monitored Q&A area to log questions quietly without disrupting the presenter's delivery."
    },
    {
        type: "yesno",
        q: "Does the 'Raise Hand' button trigger a loud, continuous alarm sound that forcefully shuts down all video streams on the network?",
        a: "No",
        exp: "The 'Raise Hand' utility creates a subtle, non-disruptive visual marker next to the user's name on the host's monitor to request floor access."
    },
    {
        type: "yesno",
        q: "Can virtual presentations be recorded by the platform engine and subsequently placed on a shared drive for attendees to download later?",
        a: "Yes",
        exp: "Live sessions can be captured as multimedia files and dropped onto shared directories as a reference database."
    },
    {
        type: "yesno",
        q: "Is modifying your digital software video background to a professional look or a soft blur considered a standard digital literacy etiquette standard?",
        a: "Yes",
        exp: "Using a background blur hides personal surroundings, prevents visual distractions for other attendees, and preserves privacy during professional calls."
    },
    {
        type: "yesno",
        q: "Are document updates lost forever if a cloud environment lacks automated version history archiving?",
        a: "Yes",
        exp: "Without explicit version control or manual file increments, matching edits risk overwriting each other, leading to unrecoverable data loss."
    },
    {
        type: "yesno",
        q: "Does a web-based collaborative environment require a user to install heavy desktop application software to view shared documents?",
        a: "No",
        exp: "Web-based collaborative tools render content inside standard web browsers, eliminating the need for standalone desktop software installs."
    },
    {
        type: "yesno",
        q: "Do collaborative calendar platforms allow teams to deploy custom surveys and opinion polls straight into their communication workflows?",
        a: "Yes",
        exp: "Integrated enterprise systems let managers deploy real-time quick surveys, feedback polls, and scheduling options directly inside the shared space."
    },
    {
        type: "yesno",
        q: "If multiple team members access a single live shared folder, can reference files be distributed to all of them at the same time?",
        a: "Yes",
        exp: "Shared folders act as uniform file distribution points, making uploaded assets immediately available to all authenticated accounts."
    },

    // --- SECTION 4: SCENARIO-BASED EVALUATION (MCQ PROFILE) ---
    {
        type: "mcq",
        q: "Your team needs to construct a digital workspace to coordinate a multi-stage project with strict review phases. Which structural feature combination will ensure files move to the right person without manual handoffs, while preventing simultaneous editing conflicts?",
        a: [
            "Delayed Email configurations mixed with open Social Networking message feeds.",
            "Document Version Control paired with automated Workflow Control parameters.",
            "Shared Network Drives connected to traditional Landline Conference bridges.",
            "Web-based public search indices running manual Local Device Backups."
        ],
        cor: 1,
        exp: "Version control prevents editing conflicts by tracking adjustments and user locks, while workflow control handles automated file handoffs based on business rules."
    },
    {
        type: "mcq",
        q: "You are dialled into an active meeting with fifteen stakeholders and notice distracting household noises coming from your microphone line. Which interface control action should you immediately execute?",
        a: [
            "Activate full Screen Sharing to hide your local workspace controls.",
            "Mute your microphone channel and post urgent text commentary in the monitored Q&A area.",
            "Click the 'Participants' button to disconnect the meeting host.",
            "Toggle your video background property to an aggressive image layout."
        ],
        cor: 1,
        exp: "Proper digital etiquette requires muting your microphone line when unexpected background noise occurs, then switching to text chat channels to stay engaged safely."
    },
    {
        type: "mcq",
        q: "A company wants to run a wide-scale digital seminar for hundreds of remote employees across multiple global offices. They need to share slide presentations live and provide access to reference files afterward without forcing anyone to travel. What approach best fits these needs?",
        a: [
            "Set up an asynchronous internal team email chain requesting files via direct attachments.",
            "Deploy an enterprise web-based Webinar session utilizing real-time screen sharing and an associated shared download folder.",
            "Implement a local shared network storage drive linked to standard analog landline phones.",
            "Publish static documentation text assets across several independent social media blogs."
        ],
        cor: 1,
        exp: "Webinars provide massive user scaling for live screen-sharing presentations, while shared cloud folders handle immediate reference file downloads post-event."
    },
    {
        type: "mcq",
        q: "What is the core technical difference between Real-time Communication and Delayed Communication in modern corporate collaboration architectures?",
        a: [
            "Real-time requires expensive mainframe supercomputers, while delayed functions only on cellular phones.",
            "Real-time transmits information instantly with zero processing lag, whereas delayed communication introduces an operational time gap between actions.",
            "Real-time systems block data security file transfers, while delayed platforms enforce absolute encryption rules.",
            "Real-time relies completely on optical laser printers, while delayed utilizes database spreadsheets."
        ],
        cor: 1,
        exp: "The key differentiator is the timeframe of delivery: real-time tools handle interactions instantly, while delayed (asynchronous) frameworks include a time buffer between updates and responses."
    },
    {
        type: "mcq",
        q: "You open your calendar client and accept a meeting invite for a project sync. According to the standard automated workflows outlined in Lesson 13, what happens next inside your personal productivity suite?",
        a: [
            "The email client permanently locks your inbox against receiving any other messages.",
            "The platform automatically logs the event slot into your calendar and generates a live portal access path.",
            "The software triggers a complete system update that forces a computer reboot.",
            "The system automatically uploads your personal contact records to a public website repository."
        ],
        cor: 1,
        exp: "Accepting a digital invitation automatically schedules the event on your integrated calendar, creating an organized launch point for the meeting link when the session goes live."
    },

    // --- SECTION 5: RAPID CONTEXT CLASSIFICATIONS (YESNO FOCUS) ---
    {
        type: "yesno",
        q: "Does utilizing a shared cloud system create a uniform workspace that helps clean up chaotic email inboxes by organizing group notices into a single accessible area?",
        a: "Yes",
        exp: "Shared group workspaces centralize communication threads and logs, keeping clutter out of individual team member mailboxes."
    },
    {
        type: "yesno",
        q: "Can a user who is granted control of a shared screen execute operational actions inside an application on the presenter's system?",
        a: "Yes",
        exp: "Remote input authorization lets an attendee interact with software applications running on the host system in real time."
    },
    {
        type: "yesno",
        q: "Does a standard document workflow tracking environment require an employee to manually print out a physical page and run it to the next office floor?",
        a: "No",
        exp: "Workflow systems handle this digitally by routing tracking paths over web connections, saving significant administrative time."
    },
    {
        type: "yesno",
        q: "Is a face-to-face interaction categorized as a delayed communication format?",
        a: "No",
        exp: "Face-to-face discussion is an immediate, zero-latency exchange, making it a classic example of real-time communication."
    },
    {
        type: "yesno",
        q: "Can any user on a public browser access an internal enterprise SharePoint library if it is explicitly locked down by corporate security administrators?",
        a: "No",
        exp: "Access to secured cloud document portals strictly requires explicit profile authentication and verified system permissions."
    },
    {
        type: "yesno",
        q: "Are team polls and surveys effective tools for gathering data and making decisions during collaborative projects?",
        a: "Yes",
        exp: "Integrated polling features allow team leaders to rapidly collect opinions, gauge project consensus, and build data-driven schedules."
    },
    {
        type: "yesno",
        q: "Will clicking the 'Join Meeting' link inside an active calendar entry fail to open if your computer has no network access to the web?",
        a: "Yes",
        exp: "Web conferencing tools run entirely over cloud data tunnels; you must have an active internet connection to access a meeting space."
    },
    {
        type: "yesno",
        q: "Is it considered acceptable etiquette during an important corporate presentation to leave your microphone line unmuted while typing loudly on a mechanical keyboard?",
        a: "No",
        exp: "Typing clatter creates immediate background noise disruption; lines should stay muted unless you are actively speaking to the group."
    },
    {
        type: "yesno",
        q: "Can shared folders on cloud environments house large directories of reference files, documents, and slides for an entire organization?",
        a: "Yes",
        exp: "Shared directories provide high-volume storage infrastructure to distribute key reference material to authorized users."
    },
    {
        type: "yesno",
        q: "Does version control ensure that editing records show exactly which team member made a change to a shared document?",
        a: "Yes",
        exp: "Comprehensive version control platforms tag each change with a unique user stamp, providing a clear audit log of all updates."
    },
    {
        type: "yesno",
        q: "Is it a waste of time to run an interactive training webinar if you want to teach remote employees new software skills without traveling?",
        a: "No",
        exp: "Webinars are highly effective tools for long-distance training, allowing screen-sharing demonstrations and live Q&A sessions globally."
    },
    {
        type: "yesno",
        q: "Does a digital system's 'Participants' window display an accurate roster of everyone currently connected to a virtual meeting room?",
        a: "Yes",
        exp: "The Participants panel serves as a real-time attendance log, allowing hosts to verify who is listening or presenting on the call."
    },
    {
        type: "yesno",
        q: "Can a presentation host choose to record a live web conference to ensure team members who missed it can review it later?",
        a: "Yes",
        exp: "Recording tools convert live video streams into standalone video files that can be archived and accessed asynchronously on-demand."
    },
    {
        type: "yesno",
        q: "Does a soft background blur or custom virtual image help shield your personal environment from being broadcast over a work video feed?",
        a: "Yes",
        exp: "Virtual backgrounds dynamically mask your actual physical room, keeping the focus entirely on you and maintaining privacy."
    },
    {
        type: "yesno",
        q: "Are email communications considered real-time interactions since they always trigger an instant face-to-face video feed?",
        a: "No",
        exp: "Email is a delayed, text-based communication format that does not provide immediate video interaction or real-time delivery tracking."
    },
    {
        type: "yesno",
        q: "Can team members use built-in social tools within their corporate project hub to post quick text updates and coordinate tasks?",
        a: "Yes",
        exp: "Modern collaboration platforms integrate internal feeds to let staff share text updates and coordinate tasks without formal email chains."
    },
    {
        type: "yesno",
        q: "Will a digital calendar app reject a meeting invitation if you choose to accept it through your email client workflow?",
        a: "No",
        exp: "Accepting an invite in your email client automatically flags your calendar engine to log the event slot seamlessly."
    },
    {
        type: "yesno",
        q: "Is it required to keep your webcam turned on during a virtual meeting if you have low internet bandwidth and want to prevent audio dropping?",
        a: "No",
        exp: "Turning off your camera saves substantial data bandwidth, which can help keep your voice connection stable if network performance drops."
    },
    {
        type: "yesno",
        q: "Do monitored text chat zones inside webinars allow users to ask questions safely without breaking the speaker's vocal delivery flow?",
        a: "Yes",
        exp: "Monitored chat boxes allow participants to log questions cleanly in text, letting the presenter answer them at an appropriate stopping point."
    },
    {
        type: "yesno",
        q: "Can file version histories be completely ignored when multiple people are collaborating on a critical project report?",
        a: "No",
        exp: "Ignoring version tracking risks overwriting important edits, making clear tracking essential to avoid data loss."
    }
],
l2_lesson14: [
    // --- SECTION 1: CERTIPORT-STYLE SEQUENTIAL REARRANGEMENTS (ARRANGE) ---
    {
        type: "arrange",
        q: "You suspect a data-harvesting application is running silently in the background of your mobile device. Arrange the correct manual administrative steps to audit and block application camera permissions on a modern mobile operating system.",
        steps: [
            "Launch the main system Settings interface panel on your device.",
            "Scroll down and select the App Management or Privacy section.",
            "Tap explicitly on Permission Manager and select the Camera sub-category.",
            "Review the list of software applications that currently have active rights.",
            "Select the suspicious application and toggle its permission parameter to 'Don't Allow' or 'Deny'."
        ],
        exp: "Certiport administrative tasks require navigating from global Settings to specific Privacy/Permission consoles, choosing the target sensor hardware (Camera), and selecting 'Don't Allow' for the targeted application to block unauthorized video captures."
    },
    {
        type: "arrange",
        q: "A collaborative corporate document contains highly sensitive operational records. Arrange the steps to execute encryption and add a structural password lock to an office document asset before uploading it to shared network spaces.",
        steps: [
            "Open your document workspace file and navigate to the File menu tab.",
            "Select the Info or Protection submenu option.",
            "Click on the 'Protect Document' or 'Encrypt document' command button.",
            "Type a highly secure, non-trivial alphanumeric string into the designated Password field.",
            "Re-enter the password string to confirm accuracy and click OK to commit the cryptographic layer."
        ],
        exp: "Securing local files natively involves finding File > Info > Protect, inputting a password string, and validating that entry to instantiate the local encryption algorithm."
    },
    {
        type: "arrange",
        q: "You have downloaded a project archive folder onto an office terminal and must configure explicit file access rights. Arrange the steps to configure read-only restriction rules for guest users.",
        steps: [
            "Right-click on the specific target folder inside your operating system's file manager.",
            "Select the Properties option from the context dropdown menu.",
            "Navigate to the Security tab to access the multi-tier ACL permissions layout.",
            "Select the specific Guest or User profile string from the Group names roster.",
            "Click Edit, check the box labeled Read-Only or Deny Write, and click Apply."
        ],
        exp: "Operating system file security is adjusted via an object's Properties window, where the Security tab allows granular control over access levels (Read/Write) for specific system users."
    },
    {
        type: "arrange",
        q: "An employee receives a high-density external USB storage drive from an unknown source. Arrange the safety protocol steps before interacting with any digital assets inside that storage unit.",
        steps: [
            "Insert the removable media into the isolated terminal's physical hardware port.",
            "Cancel or completely bypass any automatic file execution or autoplay wizard pop-ups.",
            "Open your local anti-malware security application interface console.",
            "Initiate a targeted root custom scan directly pointing to the external drive letter partition.",
            "Wait for the security application to confirm zero threats are present before opening any directories."
        ],
        exp: "Safe interaction with unknown external media requires bypassing system Autoplay triggers and running an explicitly targeted anti-malware scan to catch malicious payloads before files run."
    },

    // --- SECTION 2: MULTI-TIER COGNITIVE MATRICES (MATCH) ---
    {
        type: "match",
        q: "Match each physical or mental health risk concept with its definitive digital baseline or manifestation trait.",
        pairs: [
            { item: "Ergonomics", match: "The science of organizing physical computer workspaces to minimize skeletal strain, repetitive injuries, and fatigue." },
            { item: "Digital Unplugging", match: "The intentional, periodic complete disconnection from internet environments to restore psychological focus." },
            { item: "Catfishing", match: "The fraudulent creation of highly elaborate fake digital personas on social networks to deceive targeted users." },
            { item: "FOMO", match: "A systemic anxiety state triggered by social media feeds causing a persistent fear of missing out on rewarding events." }
        ],
        exp: "Ergonomics structures physical safety; unplugging protects cognitive health; catfishing is identity fraud; FOMO is an anxiety cycle driven by tracking peer social updates."
    },
    {
        type: "match",
        q: "Match the following technical security concepts with their correct operational definitions.",
        pairs: [
            { item: "Data Encryption", match: "Cryptographically scrambling plain text information into unreadable cyphertext to protect it against unauthorized intercepts." },
            { item: "Camera Blocking", match: "System-level or physical hardware restriction of lens elements to stop background video espionage." },
            { item: "File Permissions", match: "Granular administrative configuration parameters determining who can read, modify, or run data files." },
            { item: "Untrusted Removable Media", match: "External physical drives or hardware pieces that carry a high risk of harboring hidden malicious software code." }
        ],
        exp: "Encryption renders data unreadable; camera blocks limit sensor exposure; permissions enforce logical access rules; untrusted media poses a hardware/malware threat."
    },
    {
        type: "match",
        q: "Match the workplace physical hazard with the correct ergonomic corrective measure.",
        pairs: [
            { item: "Carpal Tunnel Syndrome", match: "Maintaining neutral, completely straight wrist alignments while utilizing a keyboard and ergonomic mouse." },
            { item: "Digital Eye Strain", match: "Applying the 20-20-20 visual rule and tuning the local monitor brightness to match ambient room lighting." },
            { item: "Lumbar Muscular Strain", match: "Utilizing an adjustable office chair that provides deliberate, rigid curvature alignment for the lower spine." },
            { item: "Cervical Neck Strain", match: "Positioning the top edge of your main display terminal directly at or slightly below horizontal eye level." }
        ],
        exp: "Carpal tunnel relates to wrist angling; eye strain requires visual breaks; lumbar relates to lower back support; neck safety is dependent on appropriate monitor heights."
    },

    // --- SECTION 3: TRUE / FALSE LOGICAL TASKS (YESNO) ---
    {
        type: "yesno",
        q: "Is it true that ergonomics is defined as the applied engineering science of configuring physical workspaces to maximize user comfort, health, and operational productivity?",
        a: "Yes",
        exp: "Ergonomics specifically addresses the physical interface between humans and computers to minimize injuries and fatigue."
    },
    {
        type: "yesno",
        q: "Does positioning your computer display monitor significantly above horizontal eye level reduce long-term cervical neck strain?",
        a: "No",
        exp: "Displays should sit at or slightly below eye level; keeping a monitor too high forces an unnatural backward tilt of the neck, leading to severe spine stress."
    },
    {
        type: "yesno",
        q: "Will adjusting your monitor's contrast and brightness parameters to match local ambient office illumination help protect you from digital eye strain?",
        a: "Yes",
        exp: "Matching display output luminosity to room lighting prevents the pupils from overworking, reducing optical fatigue."
    },
    {
        type: "yesno",
        q: "Does the term 'Digital Unplugging' describe the technical process of formatting an internal solid-state storage drive using command line prompts?",
        a: "No",
        exp: "Digital unplugging is a mental health practice that involves intentionally disconnecting from digital screens and internet environments to recharge."
    },
    {
        type: "yesno",
        q: "Can excessive, unchecked monitoring of peer social media feeds trigger the psychological anxiety state known as FOMO (Fear of Missing Out)?",
        a: "Yes",
        exp: "Consistently tracking curated, high-highlight digital posts from others can cultivate an intense anxiety that one is excluded from valuable experiences."
    },
    {
        type: "yesno",
        q: "Is 'Catfishing' defined as the deployment of automated network firewall rules designed to block malicious incoming traffic patterns?",
        a: "No",
        exp: "Catfishing is a social engineering deception where a threat actor builds a completely fraudulent profile to trick or exploit another user."
    },
    {
        type: "yesno",
        q: "Does posting inflammatory, highly negative comments online leave a permanent digital footprint that can hurt your future employment opportunities?",
        a: "Yes",
        exp: "Content published online is indexed and permanently archived, creating a reputation trail that corporate recruitment teams regularly review."
    },
    {
        type: "yesno",
        q: "When a file is encrypted using modern cryptographic protocols, can an unauthorized actor open and read its text details without the specific decryption key?",
        a: "No",
        exp: "Encryption mathematically scrambles data into ciphertext, rendering it entirely unreadable unless a matched cryptographic token or key is supplied."
    },
    {
        type: "yesno",
        q: "Can a phone or computer application collect local audio records if its microphone permissions are set to 'Deny' inside system properties?",
        a: "No",
        exp: "Setting a resource permission to Deny instructs the operating system kernel to completely block the app's access to that underlying hardware interface."
    },
    {
        type: "yesno",
        q: "Do 'Read-Only' file attributes grant an external guest user full authority to modify code cells and permanently delete text blocks within that file?",
        a: "No",
        exp: "Read-Only constraints permit users to view file contents but explicitly block any data modification, text overwriting, or deletion updates."
    },
    {
        type: "yesno",
        q: "Is plugging a completely random USB storage device found in a public hallway directly into a critical corporate computer safe as long as the machine has a screensaver?",
        a: "No",
        exp: "Untrusted removable media can contain malicious hardware chips or automated software payloads that can infect system sectors the moment they are plugged in."
    },
    {
        type: "yesno",
        q: "Does setting a file to password-protected encrypt its data payload, making it safer to distribute across public network environments?",
        a: "Yes",
        exp: "Password protection locks document contents behind a cryptographic wrapper, preventing access if the file is intercepted during transmission."
    },
    {
        type: "yesno",
        q: "Are physical privacy covers that clip over a laptop webcam lens effective at stopping remote hackers from spying on you through your camera?",
        a: "Yes",
        exp: "A physical shutter provides an absolute barrier that completely blocks the camera sensor, ensuring privacy even if software security is breached."
    },
    {
        type: "yesno",
        q: "Can standard malware applications modify system properties or disable logging modules if an administrative account grants them unfettered root permissions?",
        a: "Yes",
        exp: "Malware running with administrative privileges gains full structural authority to modify internal files, stop defenses, and corrupt data."
    },
    {
        type: "yesno",
        q: "Does a 'Full Control' file permission setting mean that a user can read, write, modify, and adjust the ownership settings of that file object?",
        a: "Yes",
        exp: "Full Control grants complete administrative access to an asset, including editing permissions, deleting data, and modifying ACL properties."
    },
    {
        type: "yesno",
        q: "Is it completely impossible to experience physical wrist strain or carpal tunnel issues if you type on a modern wireless mechanical keyboard?",
        a: "No",
        exp: "Physical strain is caused by typing posture and wrist angling, regardless of whether a keyboard uses wireless or mechanical switches."
    },
    {
        type: "yesno",
        q: "Does the 20-20-20 ergonomic rule state that you should stare at a bright digital screen for 20 hours straight without moving your focus?",
        a: "No",
        exp: "The rule states that every 20 minutes, you should look at an object at least 20 feet away for at least 20 seconds to give your eye muscles a break."
    },
    {
        type: "yesno",
        q: "Can threat actors utilize social media tracking data to gather personal details about you to orchestrate targeted catfishing attacks?",
        a: "Yes",
        exp: "Attackers look through public timelines and profiles to harvest background details, helping them construct highly convincing fake identities."
    },
    {
        type: "yesno",
        q: "Will an encryption algorithm lose all protective functionality if the legitimate user openly shares the primary decryption key on a public forum?",
        a: "Yes",
        exp: "The security of encrypted data depends on keeping the key safe; exposing a key allows anyone to decrypt and read the information."
    },
    {
        type: "yesno",
        q: "Are file permissions managed identically across every single type of cloud storage system and local computer hardware operating system on earth?",
        a: "No",
        exp: "Different operating systems and file structures use distinct security models and interfaces to manage file and folder access permissions."
    },

    // --- SECTION 4: MINIMIZED HIGH-TIER CHOICE SELECTIONS (MCQ) ---
    {
        type: "mcq",
        q: "An investigator needs to safely store an image file containing highly sensitive evidence on a local workstation shared by multiple users. Which combination of actions provides the best protection against unauthorized access?",
        a: [
            "Change the display filename to lowercase and hide the directory inside an arbitrary social media blog folder.",
            "Apply a strong password cryptographic encryption wrapper to the file and configure native OS permissions to deny write/read access to other profiles.",
            "Move the data to an untrusted external USB drive and leave it unmonitored on an open office desk matrix.",
            "Adjust the system monitor brightness levels down to zero percent and clear the browser's cookies registry cache."
        ],
        cor: 1,
        exp: "Combining file-level encryption with strict operating system user permissions ensures the asset remains unreadable and inaccessible, even if other users access the terminal."
    },
    {
        type: "mcq",
        q: "A professional encounters an application that demands continuous access to location data, camera sensors, and contact lists to run a basic text document template. What risk assessment response best aligns with intermediate digital citizenship rules?",
        a: [
            "Grant full access permissions immediately to bypass the pop-up warning boxes and speed up work execution.",
            "Evaluate the app's requirements with appropriate skepticism, deny permissions that don't match its core function, and search for a safer alternative.",
            "Reboot the workstation monitor five times to trigger an automated hardware firewall configuration update.",
            "Post your personal account credentials on an online public discussion board to ask community bots for a quick override password."
        ],
        cor: 1,
        exp: "Intermediate digital literacy emphasizes questioning intrusive permission requests, limiting application access to sensitive hardware sensors, and protecting your data privacy."
    },
    {
        type: "mcq",
        q: "You are experiencing persistent lower back pain and visual blurring after sitting through long data-analysis sessions at your office terminal. Which set of adjustments directly addresses the structural cause of these issues?",
        a: [
            "Upgrade your network connection to a high-speed fiber line and buy a larger external backup storage drive.",
            "Configure an adjustable chair to support your lumbar spine, place the display monitor at horizontal eye level, and integrate regular 20-20-20 visual breaks.",
            "Encrypt all system files and configure the webcam permissions toggle parameter to 'Deny' across all accounts.",
            "Type using all capital letters to increase visibility and post summaries on an online community forum to find feedback metrics."
        ],
        cor: 1,
        exp: "Back strain and eye strain are handled through proper ergonomic design: using structured lumbar support, setting optimal monitor heights, and taking regular visual breaks."
    },
    {
        type: "mcq",
        q: "What structural threat does an untrusted, unknown removable flash drive present when inserted directly into a secured local computer system?",
        a: [
            "It will automatically erase the physical serial numbers printed on the outer case of your computer.",
            "It can carry malicious software payloads or automated root scripts that exploit system vulnerabilities to steal data.",
            "It immediately converts all local data files into public open-source web pages on Google Blogger.",
            "It forces the workstation's display cables to change their internal hardware pin wiring layout."
        ],
        cor: 1,
        exp: "Untrusted flash media are a common vector for security threats, often carrying malware or auto-run scripts designed to compromise system security the moment they are plugged in."
    },
    {
        type: "mcq",
        q: "Why is maintaining a positive digital footprint and practicing clean netiquette considered a critical rule for career development in today's workforce?",
        a: [
            "Because search engine algorithms automatically delete the user accounts of anyone who types slowly.",
            "Because companies routinely check public digital footprints to assess a candidate's professionalism, conduct, and communication skills.",
            "Because clean online netiquette automatically upgrades a terminal's physical RAM hardware specs over the network.",
            "Because writing positive comments ensures your local printer never runs out of ink cartridges."
        ],
        cor: 1,
        exp: "Your digital footprint serves as a permanent public record of your online behavior, making professional netiquette essential to protecting your career opportunities."
    },

    // --- SECTION 5: ADVANCED COMPREHENSION CLASSIFICATIONS (YESNO FOCUS) ---
    {
        type: "yesno",
        q: "Does a hardware operating system's 'Modify' permission level allow a user to look at text lines, add data updates, and completely delete a file object?",
        a: "Yes",
        exp: "Modify permissions provide extensive file privileges, allowing users to read, write, edit, and delete data assets without granting full administrative control over ownership rules."
    },
    {
        type: "yesno",
        q: "Is an interactive online challenge that encourages you to share sensitive personal details or execute dangerous physical acts considered a safe digital practice?",
        a: "No",
        exp: "Viral online challenges that ask for sensitive personal data or push unsafe behavior pose significant identity security and physical safety risks."
    },
    {
        type: "yesno",
        q: "Can a user block an app's camera access inside settings while keeping its network access active to let it download text updates safely?",
        a: "Yes",
        exp: "Modern permission structures partition access settings, allowing you to disable specific hardware sensors (like the camera) while keeping standard network data options open."
    },
    {
        type: "yesno",
        q: "Does symmetric encryption utilize two completely different keys—a public key to encrypt and a separate private key to decrypt?",
        a: "No",
        exp: "Symmetric encryption uses a single shared key to both encrypt and decrypt data; asymmetric encryption uses separate public and private keys."
    },
    {
        type: "yesno",
        q: "Will a standard anti-virus scan automatically fix a physical spine injury caused by using an unadjustable office chair for years?",
        a: "No",
        exp: "Anti-virus applications target software issues only; physical injuries must be addressed through proper ergonomic support and medical care."
    },
    {
        type: "yesno",
        q: "Does using an alpha-numeric password on a compressed file help protect your data if it is accidentally sent to the wrong network user?",
        a: "Yes",
        exp: "Password protection encrypts file contents, preventing unauthorized recipients from opening or reading the data if a file is misrouted."
    },
    {
        type: "yesno",
        q: "Are the psychological impacts of continuous cyber-bullying or aggressive social media callouts completely harmless to an individual's long-term mental health?",
        a: "No",
        exp: "Persistent online harassment and toxic social environments carry serious risks, often causing severe stress, anxiety, and deep mental exhaustion."
    },
    {
        type: "yesno",
        q: "Can software update patches contain fixes that resolve underlying security vulnerabilities in your machine's app permission engine?",
        a: "Yes",
        exp: "System and application updates patch known security holes, keeping your data protection tools effective against exploitation."
    },
    {
        type: "yesno",
        q: "Is it considered safe netiquette to post highly accurate blueprints of your company's physical security systems on a public web profile?",
        a: "No",
        exp: "Publishing sensitive operational specifications creates massive security risks and violates core corporate confidentiality policies."
    },
    {
        type: "yesno",
        q: "Does your physical hand posture when typing on a flat interface influence your risk of developing repetitive strain injuries over time?",
        a: "Yes",
        exp: "Typing with awkwardly bent or twisted wrists strains tendons and nerves, which can lead to conditions like carpal tunnel syndrome."
    },
    {
        type: "yesno",
        q: "Will your display monitor automatically adjust its physical tilt and height settings if you type the word 'Ergonomics' into a search engine?",
        a: "No",
        exp: "Monitor stands require manual adjustment to properly align the display height and tilt to your eye level."
    },
    {
        type: "yesno",
        q: "Does a standard digital certificate confirm the identity of a secure web platform, helping you verify that a site is safe to interact with?",
        a: "Yes",
        exp: "Digital certificates authenticate a web domain's registry credentials, verifying that you are connecting to a legitimate site rather than an impersonator."
    },
    {
        type: "yesno",
        q: "Can malware applications hide within arbitrary file formats like images, audio archives, or software updates downloaded from untrusted webs?",
        a: "Yes",
        exp: "Threat actors often bundle malicious payloads inside seemingly harmless files to trick users into downloading and running them."
    },
    {
        type: "yesno",
        q: "Is an employee required to give their personal social media login passwords to any client who asks for them via an incoming email?",
        a: "No",
        exp: "You should never share your account passwords; requests for login credentials are a clear sign of phishing or social engineering tactics."
    },
    {
        type: "yesno",
        q: "Does checking file properties allow an administrator to view the exact modification timestamps and active ownership data of a file object?",
        a: "Yes",
        exp: "The properties menu displays core metadata, including file size, creation records, modification timestamps, and active permission listings."
    },
    {
        type: "yesno",
        q: "Will a physical webcam cover shield your office space from visual recording threats even if a malicious root program takes control of your operating system?",
        a: "Yes",
        exp: "A physical slider provides an absolute mechanical block that keeps the lens covered, preventing visual capture even if an attacker gains control of the system."
    },
    {
        type: "yesno",
        q: "Is it considered appropriate workplace etiquette to ignore your company's acceptable use policy as long as you complete your daily data entry?",
        a: "No",
        exp: "Following the company's acceptable use policy is mandatory, ensuring security compliance and maintaining operational safety across the network."
    },
    {
        type: "yesno",
        q: "Can taking regular breaks to stand up and stretch help reduce the cardiovascular and muscular risks of sitting at a desk all day?",
        a: "Yes",
        exp: "Taking consistent short breaks to stand and stretch boosts blood circulation and relieves muscle tension, preventing long-term physical strain."
    },
    {
        type: "yesno",
        q: "Does a 'Read' permission layer allow an online guest profile to permanently modify spreadsheet cells inside a secured directory?",
        a: "No",
        exp: "Read permissions restrict users to viewing file contents only, explicitly blocking any data updates, edits, or file modifications."
    },
    {
        type: "yesno",
        q: "Is it safe to run a file backup routine straight to an unverified external drive that has never been scanned by your organization's security tools?",
        a: "No",
        exp: "Interacting with unverified external storage devices risks exposing your terminal and files to hidden malware payloads."
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
    const nameInput = document.getElementById('candidate-name');
    const selectedModule = UI.moduleSelect.value;
    
    // Simple validation
    if (!nameInput.value.trim()) {
        alert("Please enter your name to start.");
        return;
    }

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

    // Capture Candidate Name from the setup screen
    const nameInput = document.getElementById('candidate-name').value;
    document.getElementById('report-candidate-name').innerText = nameInput || "Guest Candidate";

    // Call the detailed report generator
    generateCertiportScoreReport(session.questions, session.userAnswers, UI.moduleSelect.options[UI.moduleSelect.selectedIndex].text);


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
        // --- Level 1 Mapping ---
        'l1_lesson1': 'L1 L1: Technology Basics', 
        'l1_lesson2': 'L1 L2: Digital Citizenship',
        'l1_lesson3': 'L1 L3: Information Management', 
        'l1_lesson4': 'L1 L4: Content Creation',
        'l1_lesson5': 'L1 L5: Communication', 
        'l1_lesson6': 'L1 L6: Collaboration',
        'l1_lesson7': 'L1 L7: Safety and Security', 
        
        // --- Level 2 Mapping ---
        'l2_lesson8': 'L2 L1: Technology Basics',
        'l2_lesson9': 'L2 L2: Digital Citizenship',
        'l2_lesson10': 'L2 L3: Information Management',
        'l2_lesson11': 'L2 L4: Content Creation',
        'l2_lesson12': 'L2 L5: Communication',
        'l2_lesson13': 'L2 L6: Collaboration',
        'l2_lesson14': 'L2 L7: Safety and Security'
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

/**
 * Processes completed user test configurations and prints the customized Certiport Exam Score Report interface.
 * Dynamically parses and scales to handle Level 1, Level 2, or Level 3 modules automatically.
 * @param {Array} questionsArray - The active Lesson Array (e.g., l1_lesson5, l2_lesson14)
 * @param {Array} userAnswers - Array containing indices of user choices matched against question lengths
 * @param {String} currentLessonTitle - Title descriptive text of the active evaluation
 */
function generateCertiportScoreReport(questionsArray, userAnswers, currentLessonTitle = "IC3 GS6 Digital Literacy Exam") {
    let totalQuestions = questionsArray.length;
    let correctAnswersCount = 0;
    
    // Dynamic tracking container that automatically builds itself based on active questions
    const dynamicDomains = {};

    // Evaluate answers and map them dynamically
    questionsArray.forEach((question, index) => {
        const isCorrect = gradeQuestion(question, userAnswers[index]);
        if (isCorrect) {
            correctAnswersCount++;
        }

        // Determine which lesson key this question belongs to
        const activeKey = question.lessonKey || currentSelectedModuleKey;
        
        // Dynamic Domain Name Generator: Parses "l2_lesson12" -> "Level 2" + matching human title
        if (activeKey && activeKey.includes('_')) {
            const levelPrefix = activeKey.split('_')[0].toUpperCase().replace('L', 'Level '); // e.g., "Level 2"
            const humanName = typeof formatLessonName === 'function' ? formatLessonName(activeKey) : activeKey;
            
            // Clean up name string to extract just the domain topic (removes redundant level prefixes if present)
            const cleanDomainName = humanName.replace(/^L\d+\s+L\d+:\s*/i, '').replace(/^L\d+:\s*/i, '');
            const compositeDomainTitle = `${levelPrefix} - ${cleanDomainName}`;

            // Initialize the dynamic tracking bucket if it doesn't exist yet
            if (!dynamicDomains[activeKey]) {
                dynamicDomains[activeKey] = {
                    name: compositeDomainTitle,
                    total: 0,
                    correct: 0
                };
            }

            dynamicDomains[activeKey].total++;
            if (isCorrect) {
                dynamicDomains[activeKey].correct++;
            }
        }
    });

    let percentageCorrect = totalQuestions > 0 ? (correctAnswersCount / totalQuestions) : 0;
    let finalScaledScore = Math.round(100 + (percentageCorrect * 900));
    const passingThreshold = 700;

    // Populate UI Metrics Elements
    document.getElementById("report-exam-title").innerText = currentLessonTitle;
    document.getElementById("report-date").innerText = new Date().toLocaleDateString();
    document.getElementById("report-final-score").innerText = finalScaledScore;

    // Set Bar Width
    let visualPercentWidth = ((finalScaledScore - 100) / 900) * 100;
    document.getElementById("your-score-bar").style.width = `${Math.max(0, visualPercentWidth)}%`;

    // Set Pass/Fail Outcome Elements
    const outcomeText = document.getElementById("report-outcome-text");
    const outcomeIcon = document.getElementById("report-outcome-icon");
    if (finalScaledScore >= passingThreshold) {
        outcomeText.innerText = "Pass";
        outcomeText.style.color = "#43b02a";
        outcomeIcon.innerHTML = "✔";
        outcomeIcon.className = "status-icon pass";
    } else {
        outcomeText.innerText = "Fail";
        outcomeText.style.color = "#d9534f";
        outcomeIcon.innerHTML = "✘";
        outcomeIcon.className = "status-icon fail";
    }

    // --- DYNAMIC PERFORMANCE MATRIX GENERATION ---
    let analysisTableBody = document.getElementById("section-analysis-rows");
    analysisTableBody.innerHTML = ""; // Flush previous test runs

    // SCENARIO A: Full Level Exam (Key starts with "full_") -> Display all captured domains sequentially
    if (currentSelectedModuleKey.startsWith("full_")) {
        const targetLevel = currentSelectedModuleKey.split('_')[1].toLowerCase(); // e.g., "l1", "l2", "l3"
        
        Object.keys(dynamicDomains).forEach(key => {
            // Only show domains belonging to the level taken (e.g., if full_l2 is taken, show all l2 keys)
            if (key.startsWith(targetLevel)) {
                let domain = dynamicDomains[key];
                let scorePercent = domain.total > 0 ? Math.round((domain.correct / domain.total) * 100) : 0;
                
                let row = `<tr>
                    <td>${domain.name}</td>
                    <td class="text-right font-weight-bold" style="text-align: right;">${scorePercent}%</td>
                </tr>`;
                analysisTableBody.innerHTML += row;
            }
        });
    } else {
        // SCENARIO B: Single Module Isolated Test -> Render ONLY the one matching currentSelectedModuleKey
        let activeDomain = dynamicDomains[currentSelectedModuleKey];
        if (activeDomain) {
            let scorePercent = activeDomain.total > 0 ? Math.round((activeDomain.correct / activeDomain.total) * 100) : 0;
            let row = `<tr>
                <td>${activeDomain.name}</td>
                <td class="text-right font-weight-bold" style="text-align: right;">${scorePercent}%</td>
            </tr>`;
            analysisTableBody.innerHTML = row;
        } else {
            // Fallback catch-all structural safeguard
            let globalScorePercent = Math.round(percentageCorrect * 100);
            analysisTableBody.innerHTML = `<tr>
                <td>Core Assessment Objective Domains</td>
                <td class="text-right font-weight-bold" style="text-align: right;">${globalScorePercent}%</td>
            </tr>`;
        }
    }
}
