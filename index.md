---
layout: default
title: About
permalink: /
---

<div class="container">
  <div class="main-grid">
    <div class="left-column">
      <!-- Profile Card -->
      <div class="card profile-card">
        <div class="profile-content">
          <div class="profile-photo-wrap">
            <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Sachin Kalyani" class="profile-photo" onerror="this.src='https://via.placeholder.com/130'">
          </div>
          <div class="profile-info">
            <h1>Sachin Kalyani</h1>
            <p class="title">PhD Research Scholar</p>
            <p class="bio">
              PhD student in <strong>Computational Biology</strong> with a background in biochemistry and molecular biology. I specialize in
              applying deep learning and statistical methods to genomic and behavioral data, with a focus on <strong>neurodevelopmental
              disorders</strong>. Currently working on AI models for early diagnosis and therapeutic understanding.
            </p>
            <div class="profile-tags">
              <span class="profile-tag">Computational Biology</span>
              <span class="profile-tag">Deep Learning</span>
              <span class="profile-tag">Neuroscience</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Latest Publication Card -->
      <div class="card">
        <div class="card-header header-rose">
          <i class="fas fa-file-alt"></i> Latest Publication
        </div>
        <div class="pub-content">
          <div class="pub-info">
            <h3>
              <a href="https://academic.oup.com/ib/article-abstract/doi/10.1093/intbio/zyag005/8501291" target="_blank" rel="noopener noreferrer">
                Delineating the interactions among mutual miRNAs and target genes associated with Parkinson's disease, endoplasmic reticulum stress and autophagy pathways: a computational analysis
              </a>
            </h3>
            <p class="journal">Integrative Biology, 2026</p>
          </div>
        </div>
      </div>

      <!-- News Card -->
      <div class="card">
        <div class="card-header header-cyan">
          <i class="fas fa-newspaper"></i> News
        </div>
        <div class="news-scroll">
          <div class="news-item">
            <span class="news-date">Feb 2024</span>
            <p class="news-text">
              Started PhD at <a href="https://www.ibab.ac.in" target="_blank" rel="noopener noreferrer">Institute of Bioinformatics and Applied Biotechnology (IBAB)</a>, Bengaluru, India.
            </p>
          </div>
        </div>
      </div>

      <!-- Bio Card -->
      <div class="card">
        <div class="card-header header-teal">
          <i class="fas fa-user"></i> About Me
        </div>
        <p class="bio-text">
          I am a PhD research scholar supervised by <a href="https://www.ibab.ac.in/people/faculty-members/shyam-rajagopalan/" target="_blank" rel="noopener noreferrer">Prof. Shyam Sundar Rajagopalan</a> at <a href="https://www.ibab.ac.in" target="_blank" rel="noopener noreferrer">Institute of Bioinformatics and Applied Biotechnology</a>.
          My research interests lie at the intersection of <strong>Computational Biology</strong> and <strong>Neuroscience</strong>. 
          I am specifically interested in understanding and developing effective representations of biological data.
        </p>
        <p class="bio-text" style="margin-bottom:0;">
          Feel free to reach out if you are interested in collaborating, discussing research, or even just chatting!
        </p>
      </div>

      <!-- Tabbed Sections Card -->
      <div class="card tabs-card">
        <div class="tabs-nav">
          <button class="tab-btn active" data-tab="education" onclick="switchTab(this)">
            <i class="fas fa-graduation-cap"></i> Education
          </button>
          <button class="tab-btn" data-tab="experience" onclick="switchTab(this)">
            <i class="fas fa-briefcase"></i> Experience
          </button>
          <button class="tab-btn" data-tab="skills" onclick="switchTab(this)">
            <i class="fas fa-code"></i> Skills
          </button>
          <button class="tab-btn" data-tab="awards" onclick="switchTab(this)">
            <i class="fas fa-award"></i> Awards
          </button>
          <button class="tab-btn" data-tab="presentations" onclick="switchTab(this)">
            <i class="fas fa-microphone"></i> Presentations
          </button>
          <button class="tab-btn" data-tab="conferences" onclick="switchTab(this)">
            <i class="fas fa-bullhorn"></i> Conferences
          </button>
        </div>

        <!-- Education Tab -->
        <div class="tab-panel active" id="tab-education">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2024 – Present</span>
                <h4>PhD in Computational Biology</h4>
                <p><a href="https://www.ibab.ac.in" target="_blank" rel="noopener noreferrer">Institute of Bioinformatics and Applied Biotechnology</a></p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2020 – 2022</span>
                <h4>M.Sc. in Biochemistry and Molecular Biology</h4>
                <p><a href="https://www.pondiuni.edu.in" target="_blank" rel="noopener noreferrer">Pondicherry University</a></p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2017 – 2020</span>
                <h4>B.Sc. Biochemistry, Microbiology, and Chemistry</h4>
                <p><a href="https://www.adc.edu.in" target="_blank" rel="noopener noreferrer">Aurora's Degree and PG College</a></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Tab -->
        <div class="tab-panel" id="tab-experience">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2024 – Present</span>
                <h4>PhD Research Scholar</h4>
                <p><a href="https://www.ibab.ac.in" target="_blank" rel="noopener noreferrer">Institute of Bioinformatics and Applied Biotechnology</a></p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2024</span>
                <h4>Junior Research Fellow</h4>
                <p><a href="https://www.ibab.ac.in" target="_blank" rel="noopener noreferrer">Institute of Bioinformatics and Applied Biotechnology</a></p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-date">2022 – 2024</span>
                <h4>M.Sc. Dissertation Student</h4>
                <p><a href="https://www.pondiuni.edu.in" target="_blank" rel="noopener noreferrer">Pondicherry University</a></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Tab -->
        <div class="tab-panel" id="tab-skills">
          <div class="skills-section">
            <p class="skills-category">Programming</p>
            <div class="skills-group">
              <span class="skill-tag">Python</span>
              <span class="skill-tag">R</span>
              <span class="skill-tag">Shell</span>
              <span class="skill-tag">SQL</span>
              <span class="skill-tag">HTML</span>
              <span class="skill-tag">CSS</span>
              <span class="skill-tag">LaTeX</span>
            </div>
            <p class="skills-category">Machine Learning / Deep Learning</p>
            <div class="skills-group">
              <span class="skill-tag">PyTorch</span>
              <span class="skill-tag">scikit-learn</span>
              <span class="skill-tag">SHAP</span>
              <span class="skill-tag">Git</span>
            </div>
            <p class="skills-category">Data Science Tools</p>
            <div class="skills-group">
              <span class="skill-tag">NumPy</span>
              <span class="skill-tag">Pandas</span>
              <span class="skill-tag">Matplotlib</span>
              <span class="skill-tag">Seaborn</span>
            </div>
          </div>
        </div>

        <!-- Awards Tab -->
        <div class="tab-panel" id="tab-awards">
          <ul class="awards-list">
            <li>
              <i class="fas fa-trophy"></i>
              <div>
                <strong>Best Poster Award</strong>
                <span>ICEBG, 2023</span>
              </div>
            </li>
            <li>
              <i class="fas fa-trophy"></i>
              <div>
                <strong>First Prize in Scientific Writing, Carl Neuberg celebrations</strong>
                <span>Aurora's Degree and PG College, 2019</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Presentations Tab -->
        <div class="tab-panel" id="tab-presentations">
          <ul class="presentations-list">
            <li>
              <span class="pres-type poster">Poster</span>
              <div>
                <strong>Investigating HyenaDNA for Out-Of-Distribution Prediction of Social Communication Outcomes in Autism Spectrum Disorder</strong>
                <span>International Society of Developmental Neuroscience, 2027 (scheduled)</span>
              </div>
            </li>
            <li>
              <span class="pres-type oral">Oral</span>
              <div>
                <strong>ACII 2025 — Doctoral Consortium</strong>
                <span>13th International Conference on Affective Computing and Intelligent Interaction, Canberra, Australia, October 2025. Abstract accepted; could not attend due to funding constraints.</span>
              </div>
            </li>
            <li>
              <span class="pres-type poster">Poster</span>
              <div>
                <strong>Predictive Utility of Vineland-3 Adaptive Behavior Scales for Cognitive Function, Social Communication and Motor Skills Deficit</strong>
                <span>Big Data Biology Symposium, 2025</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Conferences Tab -->
        <div class="tab-panel" id="tab-conferences">
          <ul class="conferences-list">
            <li>
              <i class="fas fa-calendar-check"></i>
              <div>
                <strong>International Society of Developmental Neuroscience</strong>
                <span>Feb 2027 (scheduled)</span>
              </div>
            </li>
            <li>
              <i class="fas fa-calendar-check"></i>
              <div>
                <strong>Accelerating Biology</strong>
                <span>Sept 2026</span>
              </div>
            </li>
            <li>
              <i class="fas fa-calendar-check"></i>
              <div>
                <strong>Big Data Biology Symposium</strong>
                <span>May 2025</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Repositories Card -->
      <div class="card">
        <div class="card-header header-amber">
          <i class="fab fa-github"></i> Repositories
        </div>
        <div class="repos-grid">
          <a href="https://github.com/sachin-k9/Omics_ML" target="_blank" rel="noopener noreferrer" class="repo-card">
            <div class="repo-header">
              <i class="fab fa-github"></i>
              <span class="repo-name">Omics_ML</span>
            </div>
            <p class="repo-desc">Machine learning workflows for omics data analysis</p>
            <div class="repo-meta">
              <span><i class="fas fa-star"></i> 0</span>
              <span><i class="fas fa-code-branch"></i> 0</span>
            </div>
          </a>
          <a href="https://github.com/sachin-k9/high_performance_computing" target="_blank" rel="noopener noreferrer" class="repo-card">
            <div class="repo-header">
              <i class="fab fa-github"></i>
              <span class="repo-name">high_performance_computing</span>
            </div>
            <p class="repo-desc">HPC scripts and optimizations for bioinformatics</p>
            <div class="repo-meta">
              <span><i class="fas fa-star"></i> 0</span>
              <span><i class="fas fa-code-branch"></i> 0</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Right Column -->
    <div class="right-column">
      <!-- Location Card -->
      <div class="card location-card">
        <div class="card-header header-violet">
          <i class="fas fa-map-marker-alt"></i> Location
        </div>
        <div class="location-item">
          <i class="fas fa-home"></i>
          <div>
            <span class="label">Hometown</span>
            <a href="https://maps.google.com/?q=Hyderabad" target="_blank" rel="noopener noreferrer">Hyderabad, India</a>
          </div>
        </div>
        <div class="location-item">
          <i class="fas fa-building"></i>
          <div>
            <span class="label">Current Location</span>
            <a href="https://maps.google.com/?q=Bengaluru" target="_blank" rel="noopener noreferrer">Bengaluru, India</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>