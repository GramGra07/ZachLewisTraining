function toRun() {
    document.addEventListener("DOMContentLoaded", function () {
        // Select all sections with the class 'active'
        const sections = document.querySelectorAll(".active");

        // Function to toggle the 'active' class
        function toggleActiveSections() {
            sections.forEach((section) => {
                section.classList.toggle("active");
            });
        }
    });

    // Replace these dates with the start dates of your coding experience
    const htmlStartDate = "2023-01-01";
    const dartStartDate = "2023-05-01";
    const javaStartDate = "2021-09-09";
    const pythonStartDate = "2019-07-01";
    const markdownStartDate = "2022-08-02";
    const cplusStartDate = "2022-08-14"
    const swiftStartDate = "2023-10-16"
    const kotlinStartDate = "2024-02-19"

    const startDateMap = {
        dart: dartStartDate,
        python: pythonStartDate,
        java: javaStartDate,
        html: htmlStartDate,
        markdown: markdownStartDate,
        cplus: cplusStartDate,
        swift: swiftStartDate,
        kotlin: kotlinStartDate
    };
    const languages = Object.keys(startDateMap);

    const today = new Date();
    let longestLanguage = "";
    let longestTime = 0;

    for (const [language, startDateStr] of Object.entries(startDateMap)) {
        const startDate = new Date(startDateStr);
        const timeDifference = today.getTime() - startDate.getTime();
        if (timeDifference > longestTime) {
            longestLanguage = language;
            longestTime = timeDifference;
        }
    }
    const longestStartDate = startDateMap[longestLanguage];
    const longestStart = new Date(longestStartDate);
    const currentDate = new Date();
    const totalExperience = currentDate - longestStart;

    function calculateProgress(startDate) {
        const start = new Date(startDate);
        const currentExperience = currentDate - start;
        const progress = (currentExperience / totalExperience) * 100;
        return progress; 
    }

    function updateProgressBar(language, startDate) {
        const progressBar = document.getElementById(`${language}ProgressBar`);
        const progress = calculateProgress(startDate, language);
        const currentExperience = (
            (((progress / 100) * totalExperience) / 86400000) / 365
        ).toFixed(2);

        progressBar.style.width = `${progress}%`;
        // set the document o f language
        ti = document.getElementById(language);
        lang = language.charAt(0).toUpperCase() + language.slice(1);
        if (lang == 'Cplus'){
            lang = 'C++'
        }
        ti.innerHTML = `${lang}, Years: ${currentExperience}`;
    }

    languages.forEach((language) => {
        updateProgressBar(language, startDateMap[language]);
    });

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: { enable: true, value_area: 800 },
            },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                    distance: 200,
                    size: 20,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: true,
    });

    update = function () {
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}
function generateData() {
    const inputString = document.getElementById('inputString').value+='State';
    const selector = document.getElementById('selector').value;
    const list = document.getElementById('inputList').value;
    
    console.log('Input String:', inputString);
    console.log('Selector:', selector);
    console.log('List:', list);
    
    let generatedData = ''; // Initialize generatedData as an empty string
    let enumData = list.split(',').map(item => item.trim().toUpperCase());
    enumData.push('IDLE'); // Correctly add 'IDLE' to the enumData array

    if (selector == 'Java') {
        generatedData = `public enum ${inputString} {${enumData.join(', ')}}\n\n`;
        generatedData += `private ${inputString} ${inputString}Var = ${inputString}.IDLE;\n\n`;
        
        let setters = ''; // Initialize setters as an empty string
        for (let i = 0; i < enumData.length; i++) {
            setters += `public void set${enumData[i]}() {\n    ${inputString}Var = ${inputString}.${enumData[i]};\n}\n\n`;
        }
        generatedData += setters;

        let switchStatements = ''; // Initialize switchStatements as an empty string
        switchStatements += `switch (${inputString}Var) {\n`;
        for (let i = 0; i < enumData.length; i++) {
            switchStatements += `    case ${enumData[i]}:\n        // Add code here\n        break;\n`;
        }
        switchStatements += '}\n';
        generatedData += switchStatements;

    } else if (selector == 'Kotlin') {
        generatedData = `enum class ${inputString} {${enumData.join(', ')}}\n\n`;
        generatedData += `private var ${inputString}Var: ${inputString} = ${inputString}.IDLE\n\n`;
        
        let setters = ''; // Initialize setters as an empty string
        for (let i = 0; i < enumData.length; i++) {
            setters += `fun set${enumData[i]}() {\n    ${inputString}Var = ${inputString}.${enumData[i]}\n}\n\n`;
        }
        generatedData += setters;

        let whenStatements = ''; // Initialize whenStatements as an empty string
        whenStatements += `when (${inputString}Var) {\n`;
        for (let i = 0; i < enumData.length; i++) {
            whenStatements += `    ${inputString}.${enumData[i]} -> {\n        // Add code here\n    }\n`;
        }
        whenStatements += '}\n';
        generatedData += whenStatements;
    }
    
    console.log('Generated Data:', generatedData);
    
    // Display the generated data
    document.getElementById('outputText').innerText = generatedData;
}