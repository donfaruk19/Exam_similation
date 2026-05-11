const allModules = {
    lesson1: [
    { q: "What is the definition of an Operating System (OS)?", a: ["A collection of mechanical parts", "A program that manages hardware and controls communication between apps and hardware", "A set of tools for editing photos", "The physical casing of a computer"], cor: 1, exp: "The OS is the software that manages hardware and facilitates communication between hardware and applications." },
    { q: "What is the specific term for individual lines of instructions that guide a computer?", a: ["Hardware", "Framework", "Code", "Nodes"], cor: 2, exp: "Individual lines of instruction in a program are referred to as code." },
    { q: "Which of these is considered 'Software'?", a: ["The Monitor", "The Operating System and Application Programs", "The CPU and RAM", "The Keyboard and Mouse"], cor: 1, exp: "Software refers to any program that makes a computer run, including the OS and apps." },
    { q: "Which type of OS is highly specialized and used in equipment like medical devices?", a: ["Desktop OS", "Mobile OS", "Embedded OS", "Cloud OS"], cor: 2, exp: "Embedded operating systems are specialized and compact for specific equipment." },
    { q: "Which feature in Windows 10/11 allows you to organize open windows into groups?", a: ["Start Menu", "Virtual Desktops", "System Tray", "File Explorer"], cor: 1, exp: "Virtual Desktops allow you to organize open windows into groups for better productivity." },
    { q: "What is the keyboard shortcut for 'Task View' in Windows?", a: ["Alt + Tab", "Windows Logo Key + Tab", "Ctrl + Alt + Del", "Windows Logo Key + L"], cor: 1, exp: "The Windows Logo Key + Tab opens Task View." },
    { q: "What is the purpose of the 'Notification Area' on the Taskbar?", a: ["To launch new programs", "To show the clock and background program icons", "To search for files", "To switch between users"], cor: 1, exp: "The Notification Area (System Tray) displays the clock and icons for background programs." },
    { q: "Which mouse action is used to open a program from a desktop icon?", a: ["Right-click", "Hover", "Double-click", "Scroll"], cor: 2, exp: "Double-clicking is the standard action to open programs or files from the desktop." },
    { q: "Which gesture is used to zoom IN on a touch screen?", a: ["Pinch", "Stretch", "Swipe", "Tap"], cor: 1, exp: "Moving two fingers apart (stretch) zooms in; moving them together (pinch) zooms out." },
    { q: "What does the 'Minimize' button do to a window?", a: ["Closes the program", "Removes it from the screen but keeps it running on the Taskbar", "Makes it full screen", "Deletes the file"], cor: 1, exp: "Minimize removes the window from view but keeps the program running." },
    { q: "Which keyboard shortcut creates a NEW FOLDER in File Explorer?", a: ["Ctrl + N", "Ctrl + Shift + N", "Alt + F4", "Ctrl + F"], cor: 1, exp: "Ctrl + Shift + N is the shortcut to create a new folder." },
    { q: "What is the shortcut to 'Select All' items in a folder?", a: ["Ctrl + S", "Ctrl + X", "Ctrl + A", "Ctrl + V"], cor: 2, exp: "Ctrl + A stands for Select All." },
    { q: "Which type of software license allows you to use the software but not view the source code?", a: ["Open-source", "Proprietary", "Freeware", "Creative Commons"], cor: 1, exp: "Proprietary software is owned by a company and the source code is kept secret." },
    { q: "Which of these is a web browser?", a: ["Google Docs", "Microsoft Edge", "Windows 11", "Adobe Photoshop"], cor: 1, exp: "Microsoft Edge is the default web browser for Windows." },
    { q: "What does the 'Refresh' button in a browser do?", a: ["Goes back to the home page", "Reloads the current page", "Clears the history", "Closes the browser"], cor: 1, exp: "The Refresh button reloads the page to show the most recent content." },
    { q: "What is the shortcut to open a NEW TAB in a browser?", a: ["Ctrl + N", "Ctrl + T", "Ctrl + W", "Alt + Enter"], cor: 1, exp: "Ctrl + T opens a new tab in almost all modern browsers." },
    { q: "Which of these is a Multi-platform application?", a: ["Notepad (Windows only)", "Safari (Apple only)", "Microsoft Office 365", "Disk Management"], cor: 2, exp: "Multi-platform apps work across different operating systems like Windows, Mac, and Linux." },
    { q: "Which hardware component is the 'Motherboard'?", a: ["The brain of the computer", "The main circuit board that connects all parts", "The screen", "The temporary memory"], cor: 1, exp: "The motherboard is the main circuit board that all other internal components connect to." },
    { q: "What is the main difference between RAM and ROM?", a: ["RAM is permanent, ROM is temporary", "RAM is volatile (loses data), ROM is non-volatile", "RAM is faster than the CPU", "There is no difference"], cor: 1, exp: "RAM is volatile (loses data when power is off), while ROM is permanent." },
    { q: "Which storage device has no moving parts and is faster than a standard Hard Drive?", a: ["HDD", "SSD", "CD-ROM", "Floppy Disk"], cor: 1, exp: "Solid State Drives (SSD) use flash memory and have no moving parts." },
    { q: "Which port is commonly used to connect a wired mouse or keyboard?", a: ["HDMI", "USB", "Ethernet", "VGA"], cor: 1, exp: "USB (Universal Serial Bus) is the standard for peripheral devices." },
    { q: "What color is a USB 3.0 port usually?", a: ["White", "Black", "Blue", "Green"], cor: 2, exp: "Blue is the industry standard color for USB 3.0 ports." },
    { q: "What type of connector is used for a wired Internet connection?", a: ["HDMI", "VGA", "RJ-45 (Ethernet)", "USB-C"], cor: 2, exp: "The RJ-45 connector is used for Ethernet/Networking cables." },
    { q: "Which device is used to convert digital signals from a computer into signals for phone/cable lines?", a: ["Router", "Modem", "Switch", "Hub"], cor: 1, exp: "A modem (Modulator-Demodulator) converts signals for transmission." },
    { q: "What is a 'Local Area Network' (LAN)?", a: ["A network covering a whole city", "A network in a small area like a home or office", "The entire internet", "A network with no wires"], cor: 1, exp: "A LAN connects computers in a limited geographical area." },
    { q: "What is an IP Address?", a: ["A physical home address", "A unique string of numbers identifying a device on a network", "A password for Wi-Fi", "The name of the computer manufacturer"], cor: 1, exp: "An IP address is a unique identifier for every device on a network." },
    { q: "What is the purpose of a Router?", a: ["To store files", "To direct data traffic between different networks", "To print documents", "To speed up the CPU"], cor: 1, exp: "A router sends data 'packets' between different networks (like your home and the internet)." },
    { q: "Which IP address indicates that a computer failed to get an address from the router?", a: ["192.168.1.1", "8.8.8.8", "169.254.x.x", "127.0.0.1"], cor: 2, exp: "A 169.254 address (APIPA) indicates a configuration failure." },
    { q: "What should you do FIRST if your internet isn't working?", a: ["Call the ISP", "Check physical cables and Wi-Fi switches", "Reinstall Windows", "Buy a new router"], cor: 1, exp: "Always check physical connections first." },
    { q: "What does 'ISP' stand for?", a: ["Internet System Provider", "Internal Service Processor", "Internet Service Provider", "International Software Protocol"], cor: 2, exp: "ISP is the company that provides you with internet access." },
    { q: "Which of these is an example of an 'Input' device?", a: ["Monitor", "Printer", "Scanner", "Speakers"], cor: 2, exp: "A scanner takes physical data and puts it into the computer (Input)." },
    { q: "Which hardware component performs all calculations?", a: ["RAM", "GPU", "CPU", "PSU"], cor: 2, exp: "The Central Processing Unit (CPU) is the 'brain' that does the calculations." },
    { q: "How many bits are in a single Byte?", a: ["4", "8", "16", "32"], cor: 1, exp: "There are 8 bits in 1 Byte." },
    { q: "Which unit is the largest?", a: ["Megabyte", "Kilobyte", "Gigabyte", "Terabyte"], cor: 3, exp: "A Terabyte (TB) is larger than a Gigabyte (GB)." },
    { q: "What is the function of a 'Device Driver'?", a: ["To drive a car", "To allow the OS to communicate with hardware", "To protect against viruses", "To clean the hard drive"], cor: 1, exp: "Drivers are software that tell the OS how to use specific hardware." },
    { q: "Which Windows power state saves electricity but keeps apps open in RAM?", a: ["Shut down", "Sleep", "Hibernate", "Restart"], cor: 1, exp: "Sleep mode keeps the session in RAM using very little power." },
    { q: "What is the shortcut to 'Paste' a file?", a: ["Ctrl + P", "Ctrl + C", "Ctrl + V", "Ctrl + Z"], cor: 2, exp: "Ctrl + V is for Paste." },
    { q: "Which of these is a 'Cloud Storage' service?", a: ["Microsoft Word", "OneDrive", "Windows Explorer", "BIOS"], cor: 1, exp: "OneDrive is Microsoft's cloud-based storage solution." },
    { q: "What is a 'Peripherals' device?", a: ["Internal CPU", "Any external device connected to the computer", "The Motherboard", "The Power Supply"], cor: 1, exp: "Peripherals are external devices like mice, printers, and keyboards." },
    { q: "Which key is used to cancel a command or close a menu?", a: ["Enter", "Shift", "Esc", "Space"], cor: 2, exp: "The Escape (Esc) key cancels the current task." },
    { q: "Which shortcut opens the Start Menu?", a: ["Alt + S", "Windows Logo Key", "Ctrl + Esc", "Both B and C"], cor: 3, exp: "Both the Windows Key and Ctrl + Esc will open the Start Menu." },
    { q: "What is the purpose of 'Plug and Play' (PnP)?", a: ["To play games immediately", "Automatic hardware configuration by the OS", "To plug in a computer to a wall", "A type of battery"], cor: 1, exp: "PnP allows the OS to detect and configure new hardware automatically." },
    { q: "What is a 'Hotspot'?", a: ["A broken CPU", "An area with wireless internet access", "A type of touch screen", "A fast charging port"], cor: 1, exp: "A hotspot is a physical location where people may obtain Internet access via Wi-Fi." },
    { q: "Which of these is an 'Output' device?", a: ["Microphone", "Webcam", "Projector", "Mouse"], cor: 2, exp: "A projector sends data out from the computer to a screen." },
    { q: "What is 'Firmware'?", a: ["Soft clothing for computers", "Permanent software programmed into a hardware device", "A trial version of an app", "The computer case"], cor: 1, exp: "Firmware is software 'hard-coded' into devices like routers or BIOS." },
    { q: "Which shortcut 'Cuts' the selected item?", a: ["Ctrl + C", "Ctrl + X", "Ctrl + K", "Ctrl + Del"], cor: 1, exp: "Ctrl + X is the shortcut for Cut." },
    { q: "What is the standard screen orientation for a tablet?", a: ["Landscape", "Portrait", "Both", "None"], cor: 2, exp: "Mobile devices like tablets can switch between Landscape and Portrait automatically." },
    { q: "Which hardware is used to connect to a Wi-Fi network?", a: ["Ethernet Cable", "Wireless Network Adapter", "Graphics Card", "Sound Card"], cor: 1, exp: "A wireless network adapter allows a device to connect to Wi-Fi." },
    { q: "What is the 'Cloud'?", a: ["A literal cloud in the sky", "Servers accessed over the internet", "A type of hard drive", "A weather app"], cor: 1, exp: "The cloud refers to software and services that run on the Internet." },
    { q: "What is the shortcut for 'Undo'?", a: ["Ctrl + U", "Ctrl + Y", "Ctrl + Z", "Ctrl + Alt + Z"], cor: 2, exp: "Ctrl + Z is the shortcut to Undo the last action." },
    { q: "What is a 'Subfolder'?", a: ["A folder inside another folder", "A hidden folder", "A deleted folder", "The main hard drive folder"], cor: 0, exp: "Any folder created inside another folder is a subfolder." },
    { q: "Which button is used to reload a webpage?", a: ["Home", "Back", "Refresh", "Forward"], cor: 2, exp: "The Refresh button reloads the current page." },
    { q: "What is the purpose of the 'Alt' key?", a: ["To delete files", "To use as an alternative key for shortcuts", "To type capital letters", "To exit Windows"], cor: 1, exp: "The Alt (Alternative) key is used in combination with other keys." },
    { q: "Which of these is a mobile operating system?", a: ["Windows 11", "macOS", "Android", "Linux"], cor: 2, exp: "Android and iOS are the most common mobile operating systems." },
    { q: "What is a 'User Account'?", a: ["A bank account", "A collection of settings for a specific person", "A type of computer hardware", "A social media page"], cor: 1, exp: "User accounts allow multiple people to share a computer with their own settings." },
    { q: "Which type of computer is designed for a single user at a fixed location?", a: ["Laptop", "Smartphone", "Desktop", "Server"], cor: 2, exp: "Desktop computers are designed to stay in one place." },
    { q: "Which key acts as a 'toggle' for typing capital letters?", a: ["Shift", "Caps Lock", "Ctrl", "Tab"], cor: 1, exp: "Caps Lock is a toggle key; when on, all letters are capitalized." },
    { q: "What is a 'Bit'?", a: ["8 bytes", "A single 0 or 1", "A type of processor", "A small tool"], cor: 1, exp: "A bit (Binary Digit) is the smallest unit of data in a computer (0 or 1)." },
    { q: "What is the maximum speed of USB 2.0?", a: ["5 Gbps", "480 Mbps", "10 Gbps", "100 Mbps"], cor: 1, exp: "USB 2.0 has a maximum speed of 480 Mbps." },
    { q: "Which key deletes the character to the LEFT of the cursor?", a: ["Delete", "Backspacer", "Shift", "End"], cor: 1, exp: "Backspace deletes to the left; Delete removes to the right." },
    { q: "Which software manages the computer's startup process?", a: ["Word", "BIOS / UEFI", "Chrome", "Excel"], cor: 1, exp: "The BIOS (Basic Input/Output System) starts the computer and loads the OS." },
    { q: "What is a 'Software Update'?", a: ["Buying a new computer", "Replacing software with a newer version to fix bugs", "Deleting old files", "Installing a printer"], cor: 1, exp: "Updates fix bugs, improve security, and add features." },
    { q: "Which network is the largest in the world?", a: ["PAN", "LAN", "WAN (The Internet)", "MAN"], cor: 2, exp: "The Internet is a Global Wide Area Network." },
    { q: "Which hardware is used to protect a network from unauthorized access?", a: ["Router", "Firewall", "Modem", "Switch"], cor: 1, exp: "A Firewall (hardware or software) blocks unauthorized network traffic." },
    { q: "What is 'Bandwidth'?", a: ["The size of a computer", "The amount of data that can be sent over a connection in a given time", "The speed of the CPU", "A music group"], cor: 1, exp: "Bandwidth is the capacity of a network connection." },
    { q: "Which mouse button usually opens a 'Context Menu'?", a: ["Left-click", "Right-click", "Scroll wheel", "Side button"], cor: 1, exp: "Right-clicking opens a menu related to the object you clicked." },
    { q: "What is a 'File Extension'?", a: ["The name of a file", "Suffix at the end of a filename (like .docx) indicating the file type", "The size of a file", "A shortcut"], cor: 1, exp: "Extensions tell the OS which app should open the file." },
    { q: "Which folder is the default location for internet downloads?", a: ["Documents", "Pictures", "Downloads", "Desktop"], cor: 2, exp: "Most browsers save files to the 'Downloads' folder by default." },
    { q: "What is 'Multi-tasking'?", a: ["Doing one thing at a time", "Running multiple applications at the same time", "Having two monitors", "Sharing a computer"], cor: 1, exp: "Multi-tasking allows you to switch between different open apps." },
    { q: "Which hardware cools the CPU?", a: ["Power Supply", "Heat Sink and Fan", "Hard Drive", "RAM"], cor: 1, exp: "The Heat Sink and Fan prevent the CPU from overheating." },
    { q: "Which shortcut opens the 'File Explorer'?", a: ["Win + E", "Win + F", "Win + L", "Win + D"], cor: 0, exp: "Windows Key + E opens File Explorer." },
    { q: "What does 'GUI' stand for?", a: ["Global User Integration", "Graphical User Interface", "General Utility Icon", "Gaming Unit Internal"], cor: 1, exp: "GUI refers to the visual way users interact with a computer (icons, menus)." },
    { q: "Which key moves the cursor to the beginning of a line of text?", a: ["Page Up", "Home", "End", "Insert"], cor: 1, exp: "The Home key moves the cursor to the start; End moves it to the end." },
    { q: "What is a 'Search Engine'?", a: ["A physical machine", "A website used to find information on the internet", "A web browser", "A computer virus"], cor: 1, exp: "Search engines (like Google or Bing) index and find websites." },
    { q: "Which component provides power to all other parts of the computer?", a: ["Battery", "Motherboard", "PSU (Power Supply Unit)", "CPU"], cor: 2, exp: "The PSU converts wall electricity into power the computer can use." }
],
    lesson2: [
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
        { q: "What should you do before selling an old smartphone?", a: ["Just turn it off", "Perform a factory reset to wipe all personal data", "Delete your favorite apps", "Take the battery out"], cor: 1, exp: "A factory reset ensures your private data isn't stolen by the next owner." }
    ],
    lesson3: [
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
        { q: "What is the primary goal of Information Management?", a: ["To buy more hard drives", "To make sure information is accurate, organized, and accessible", "To delete all old emails", "To browse social media"], cor: 1, exp: "Effective management ensures data is useful and reachable." }
    ]
};

// Logic for Shuffle, Menu, and App initialization
let activeQuestions = [];
let currentQ = 0;
let score = 0;
let mode = '';
let selectedIdx = null;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startApp(selectedMode) {
    const moduleKey = document.getElementById('module-select').value;
    mode = selectedMode;
    activeQuestions = shuffle([...allModules[moduleKey]]);
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('exam-container').classList.remove('hidden');
    document.getElementById('module-title').innerText = document.getElementById('module-select').selectedOptions[0].text;
    currentQ = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const q = activeQuestions[currentQ];
    document.getElementById('q-number').innerText = `Question ${currentQ + 1} of ${activeQuestions.length}`;
    document.getElementById('q-text').innerText = q.q;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
    selectedIdx = null;

    q.a.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => selectOption(index);
        container.appendChild(btn);
    });
}

function selectOption(idx) {
    selectedIdx = idx;
    const btns = document.querySelectorAll('#options-container button');
    btns.forEach(b => b.style.background = 'white');
    btns[idx].style.background = '#d0e1fd';
}

function checkAnswer() {
    if (selectedIdx === null) return alert("Select an answer!");
    const q = activeQuestions[currentQ];
    const isCorrect = selectedIdx === q.cor;
    if (isCorrect) score++;

    if (mode === 'training') {
        const f = document.getElementById('feedback');
        f.classList.remove('hidden');
        f.className = isCorrect ? 'correct-box' : 'wrong-box';
        f.innerHTML = `<strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong><br>${q.exp}`;
        document.getElementById('submit-btn').classList.add('hidden');
        document.getElementById('next-btn').classList.remove('hidden');
    } else {
        nextQuestion();
    }
}

function nextQuestion() {
    currentQ++;
    if (currentQ < activeQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('exam-container').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    const percent = Math.round((score / activeQuestions.length) * 100);
    const passStatus = percent >= 70 ? "PASSED" : "FAILED";
    document.getElementById('final-score').innerHTML = `
        <h2 style="color: ${percent >= 70 ? 'green' : 'red'}">${passStatus}</h2>
        <h1>${percent}%</h1>
        <p>You answered ${score} out of ${activeQuestions.length} correctly.</p>
    `;
}