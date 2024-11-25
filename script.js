// Featured projects data
const projects = [
    {
        title: "TinyGPT",
        description: "A PyTorch re-implementation of GPT (GPT-2 compatible), both training and inference. For educational purpose only.",
        image: "",
        link: "https://github.com/liuxiangfeng/TinyGPT"
    },
];

// Professional experience data
const experience = [
    {
        company: "Highspot",
        role: "Engineering Leader",
        duration: "Jun 2022 - Present",
        achievements: [
            "Leading two engineering teams focus on areas:",
            "1. Content Creation Platform",
            "2. Enterprise Search"
        ]
    }
];

// Medium articles data
const mediumArticles = [
    {
        title: "Local Deep Learning Workstation on Ubuntu 22.04 (latest Ubuntu LTS with Cuda support)",
        description: "Local Deep Learning Workstation on Ubuntu 22.04 (latest Ubuntu LTS with Cuda support)",
        link: "https://medium.com//local-deep-learning-workstation-on-ubuntu-22-04-latest-ubuntu-lts-with-cuda-support-a1146fbbec9c",
        image: ""
    },
    {
        title: "Local Deep Learning Workstation on Ubuntu 22.04 (latest Ubuntu LTS with Cuda support)",
        description: "Local Deep Learning Workstation on Ubuntu 22.04 (latest Ubuntu LTS with Cuda support)",
        link: "https://medium.com//local-deep-learning-workstation-on-ubuntu-22-04-latest-ubuntu-lts-with-cuda-support-a1146fbbec9c",
        image: ""
    }
];

// Function to create project cards
function createProjectCards() {
    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = ''; // Clear existing content
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        card.addEventListener('click', () => {
            window.open(project.link, '_blank');
        });
        projectGrid.appendChild(card);
    });
}

// Function to create experience section
function createExperienceSection() {
    const experienceSection = document.getElementById('experience');
    // Clear existing content to prevent duplication
    experienceSection.innerHTML = '<h2>Professional Experience</h2>';
    
    const experienceContainer = document.createElement('div');
    experienceContainer.className = 'experience-container';

    experience.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job';
        jobDiv.innerHTML = `
            <h3>${job.company} - ${job.role}</h3>
            <p>${job.duration}</p>
            <ul>
                ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        `;
        experienceContainer.appendChild(jobDiv);
    });

    experienceSection.appendChild(experienceContainer);
}

// Function to create Medium article cards
function createMediumArticleCards() {
    const articleGrid = document.getElementById('article-grid');
    articleGrid.innerHTML = ''; // Clear existing content
    mediumArticles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
        `;
        card.addEventListener('click', () => {
            window.open(article.link, '_blank');
        });
        articleGrid.appendChild(card);
    });
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    // Here you would typically send this data to a server
    console.log("Form submitted:", { name, email, message });
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    createExperienceSection();
    createMediumArticleCards();
    document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add this function at the end of the file
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.getElementById("job-title").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

// Start the typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    typeWriter("Engineering Leader | Engineer", 0, function() {
        // typeWriter function callback
    });
    createProjectCards();
    createExperienceSection();
    createMediumArticleCards();
    createLatestItems();
    createUpcomingItems();
});

// Add this to your existing DOMContentLoaded event listener
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
}

document.getElementById("scroll-to-top").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('cta-button')) {
        console.log('Button clicked:', e.target.href);
    }
});

const articles = [
    {
        title: "Local Deep Learning Workstation on Ubuntu 22.04 (latest Ubuntu LTS with Cuda support)",
        description: "Local Deep Learning Workstation on Ubuntu 22.04 (latest Ubuntu LTS with Cuda support)",
        link: "https://medium.com//local-deep-learning-workstation-on-ubuntu-22-04-latest-ubuntu-lts-with-cuda-support-a1146fbbec9c",
        type: "Article"
    }
];

const latestItems = [
    {
        title: "Local Deep Learning Workstation on Ubuntu 22.04 (latest Ubuntu LTS with Cuda support)",
        description: "Local Deep Learning Workstation on Ubuntu 22.04 (latest Ubuntu LTS with Cuda support)",
        link: "https://medium.com//local-deep-learning-workstation-on-ubuntu-22-04-latest-ubuntu-lts-with-cuda-support-a1146fbbec9c",
        type: "Article"
    }
];

function createLatestItems() {
    const container = document.getElementById('latest-content');
    container.innerHTML = ''; // Clear existing content
    latestItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'latest-item';
        itemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank" class="cta-button">${item.type === 'Project' ? 'View Project' : 'Read Article'}</a>
        `;
        container.appendChild(itemDiv);
    });
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    typeWriter("Engineering Leader | Engineer", 0, function() {
        // typeWriter function callback
    });
    createProjectCards();
    createExperienceSection();
    createMediumArticleCards();
    createLatestItems();
});
