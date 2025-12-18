/* Global Styles */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');

:root {
    --primary-color: #6366f1;
    --secondary-color: #a855f7;
    --accent-color: #ec4899;
    --text-color: #ffffff;
    --text-muted: #e2e8f0;
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --card-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Outfit', sans-serif;
    background: radial-gradient(circle at top left, #1e1b4b, #312e81, #4c1d95);
    background-attachment: fixed;
    color: var(--text-color);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    overflow-x: hidden;
}

/* Background Animation Shapes */
.background-shapes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.6;
    animation: float 20s infinite ease-in-out;
}

.shape-1 {
    top: -10%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: var(--primary-color);
}

.shape-2 {
    bottom: 10%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: var(--secondary-color);
    animation-delay: -5s;
}

.shape-3 {
    top: 40%;
    left: 40%;
    width: 300px;
    height: 300px;
    background: var(--accent-color);
    animation-delay: -10s;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -50px); }
}

/* Main Container */
.container {
    width: 100%;
    max-width: 900px;
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    box-shadow: var(--card-shadow);
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: center;
}

/* Profile Section */
.profile-section {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-img-container {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 5px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    margin-bottom: 1.5rem;
    transition: transform 0.5s ease;
}

.profile-img-container:hover {
    transform: scale(1.05) rotate(3deg);
}

.profile-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #1e1b4b;
}

.name {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #fff, #a5b4fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.status {
    font-size: 1.1rem;
    color: var(--accent-color);
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 2rem;
}

/* Info Section */
.info-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.info-card:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--secondary-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.details-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
}

.detail-item {
    display: flex;
    flex-direction: column;
}

.label {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.value {
    font-size: 1.1rem;
    font-weight: 600;
}

/* Education List */
.education-list {
    list-style: none;
}

.education-list li {
    margin-bottom: 1rem;
    border-left: 3px solid var(--primary-color);
    padding-left: 1rem;
}

.edu-year {
    font-size: 0.9rem;
    color: var(--accent-color);
    font-weight: 600;
}

.edu-school {
    font-size: 1.1rem;
    font-weight: 700;
}

/* Responsive */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        padding: 2rem;
        gap: 2rem;
    }

    .profile-section {
        border-bottom: 1px solid rgba(255,255,255,0.1);
        padding-bottom: 2rem;
    }
}
