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
    ],
    lesson4: [
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
        { q: "Which key is used to exit a PowerPoint Slide Show?", a: ["Enter", "Esc", "Tab", "Shift"], cor: 1, exp: "The Escape (Esc) key stops the presentation and returns to the edit screen." }
    ],
    lesson5: [
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
        { q: "What is the 'Golden Rule' of digital communication?", a: ["Type fast", "Treat others as you would want to be treated", "Never use punctuation", "Always use BCC"], cor: 1, exp: "Respect is the foundation of all positive digital interaction." }
    ],
    lesson6: [
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
        { q: "You are the manager of a project. How does SharePoint help you?", a: ["It cooks lunch for the team", "It provides a central site to track documents and contributor updates", "It physically blocks employees from leaving", "It prints documents automatically"], cor: 1, exp: "SharePoint provides a central location for oversight and document management." }
    ]
};

// ===== Logics =====

// State variables
let activeQuestions = [];
let currentQ = 0;
let score = 0;
let mode = '';
let selectedIdx = null;
let timerInterval;
let timeLeft = 2700; // 45 minutes
let isPaused = false;
let flaggedQuestions = [];

// Utility: shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===== Timer =====
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerEl = document.getElementById('exam-timer');

    timerEl.innerText = `Time: ${minutes}:${seconds < 10? '0' : ''}${seconds}`;

    // Warning at 5 minutes
    if (timeLeft <= 300) {
        timerEl.classList.add('warning');
    }
}

function startTimer() {
    clearInterval(timerInterval);
    if (!isPaused) timeLeft = 2700;
    isPaused = false;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time is up!");
            showReviewScreen();
        }
    }, 1000);
}

function quitToMenu() {
    if (confirm("Are you sure you want to quit? Your progress will be lost.")) {
        clearInterval(timerInterval);
        location.reload();
    }
}

// ===== Exam Flow =====
function startApp(selectedMode) {
    // Basic anti-cheat
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => window.history.pushState(null, "", window.location.href);
    document.addEventListener('contextmenu', e => e.preventDefault());

    const moduleKey = document.getElementById('module-select').value;
    mode = selectedMode;
    activeQuestions = shuffle([...allModules[moduleKey]]);

    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('exam-container').classList.remove('hidden');
    document.getElementById('module-title').innerText = document.getElementById('module-select').selectedOptions[0].text;

    currentQ = 0;
    score = 0;
    flaggedQuestions = [];
    startTimer();
    loadQuestion();
}

function loadQuestion() {
    const q = activeQuestions[currentQ];

    // Update question text
    document.getElementById('q-number').innerText = `Question ${currentQ + 1} of ${activeQuestions.length}`;
    document.getElementById('q-text').innerText = q.q;

    // Update progress bar
    const progress = ((currentQ + 1) / activeQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    // Clear old options
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
    selectedIdx = null;

    // Update flag button state
    const flagBtn = document.getElementById('flag-btn');
    const questionArea = document.getElementById('question-area');
    if (flaggedQuestions.includes(currentQ)) {
        flagBtn.textContent = "Unflag Question";
        questionArea.classList.add('flagged');
    } else {
        flagBtn.textContent = "Flag for Review";
        questionArea.classList.remove('flagged');
    }

    // Create answer buttons
    q.a.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = "option-button";
        btn.onclick = () => selectOption(index);
        container.appendChild(btn);
    });
}

function selectOption(idx) {
    selectedIdx = idx;
    const btns = document.querySelectorAll('#options-container button');
    btns.forEach(b => {
        b.style.background = '#f0f0f0'; // Light grey instead of pure white
        b.style.color = '#333';          // Force dark text
        b.style.border = '1px solid #ccc';
    });
    // Highlight selected
    btns[idx].style.background = '#0056b3'; 
    btns[idx].style.color = 'white';
}

function checkAnswer() {
    if (selectedIdx === null) return alert("Select an answer!");

    const q = activeQuestions[currentQ];
    const isCorrect = selectedIdx === q.cor;
    if (isCorrect) score++;

    if (mode === 'training') {
        const f = document.getElementById('feedback');
        f.classList.remove('hidden');
        f.className = isCorrect? 'correct-box' : 'wrong-box';
        f.innerHTML = `<strong>${isCorrect? 'Correct!' : 'Incorrect.'}</strong><br>${q.exp}`;
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
        showReviewScreen();
    }
}

// ===== Flag & Review System =====
function toggleFlag() {
    const idx = currentQ;
    const flagBtn = document.getElementById('flag-btn');
    const questionArea = document.getElementById('question-area');

    if (flaggedQuestions.includes(idx)) {
        flaggedQuestions = flaggedQuestions.filter(i => i!== idx);
        flagBtn.textContent = "Flag for Review";
        questionArea.classList.remove('flagged');
    } else {
        flaggedQuestions.push(idx);
        flagBtn.textContent = "Unflag Question";
        questionArea.classList.add('flagged');
    }
    updateFlagCount();
}

function updateFlagCount() {
    document.getElementById('flag-count').textContent = flaggedQuestions.length;
}

function showReviewScreen() {
    clearInterval(timerInterval);
    document.getElementById('exam-container').classList.add('hidden');
    document.getElementById('review-screen').classList.remove('hidden');

    const list = document.getElementById('review-list');
    list.innerHTML = '';

    if (flaggedQuestions.length === 0) {
        list.innerHTML = '<p>No questions flagged. Ready to submit.</p>';
    } else {
        flaggedQuestions.sort((a, b) => a - b).forEach(idx => {
            const item = document.createElement('div');
            item.className = 'review-item';
            item.innerHTML = `<span>Question ${idx + 1}</span><span>Click to review</span>`;
            item.onclick = () => goToFlagged(flaggedQuestions.indexOf(idx));
            list.appendChild(item);
        });
    }
    updateFlagCount();
}

function goToFlagged(flaggedIndex) {
    currentQ = flaggedQuestions[flaggedIndex];
    document.getElementById('review-screen').classList.add('hidden');
    document.getElementById('exam-container').classList.remove('hidden');
    startTimer();
    loadQuestion();
}

function backToExam() {
    document.getElementById('review-screen').classList.add('hidden');
    document.getElementById('exam-container').classList.remove('hidden');
    startTimer();
}

function submitExam() {
    document.getElementById('review-screen').classList.add('hidden');
    showResults();
}

function showResults() {
    clearInterval(timerInterval);
    document.getElementById('review-screen').classList.add('hidden');
    document.getElementById('exam-container').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    const percent = Math.round((score / activeQuestions.length) * 100);
    const passStatus = percent >= 70? "PASSED" : "FAILED";

    document.getElementById('final-score').innerHTML = `
        <h2 style="color: ${percent >= 70? 'green' : 'red'}">${passStatus}</h2>
        <h1>${percent}%</h1>
        <p>Correct: ${score} | Total: ${activeQuestions.length}</p>
        <p>Flagged: ${flaggedQuestions.length}</p>
        <button onclick="location.reload()">Back to Menu</button>
    `;
}

// ===== Tab Pause =====
document.addEventListener("visibilitychange", () => {
    if (document.hidden && timerInterval) {
        clearInterval(timerInterval);
        isPaused = true;
    } else if (!document.hidden && mode && timeLeft > 0) {
        startTimer();
    }
});
