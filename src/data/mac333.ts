import { CourseData } from './types';

export const mac333Data: CourseData = {
  code: 'MAC 333',
  title: 'Media Station Management and Operations',
  creditUnits: 3,
  timeAllowed: '3 Hours',
  examInstructions: 'Answer Question One (1) (Compulsory – 25 Marks) and any other three (3) questions (15 Marks each). Total: 70 Marks.',
  overview: 'Covers the organizational structures, departmental functions, human resource management, leadership theories, production phases, transmission hardware, marketing economics, and regulatory ethics required to direct a modern broadcast station.',
  frequencyAnalysis: {
    totalSetsAnalyzed: 11,
    summary: 'Cross-examination of 11 distinct past examination diets reveals deep recurring patterns: (1) Departmentalization & 5-9 Core Departments (82%), (2) The Three Phases of Programme Production (73%), (3) Essential Management Functions & Skills (73%), (4) Studio Equipment & Transmission Hardware (55%), (5) 4Ps of Media Marketing & Market Forces (55%), (6) McGregor\'s Theory X/Y & Maslow\'s Hierarchy (45%), and (7) Ethical Conflict Areas in Media Management (45%).',
    matrix: [
      {
        topic: 'Departmentalization & Functions of 5–9 Core Departments',
        frequency: '9 of 11 Sets (82%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Testing knowledge of the nine standard departments (Programmes, News, Engineering, Commercial/Marketing, HR/Admin, Accounts, Production, Traffic, Corporate Affairs).',
        likelyQuestions: [
          'To ensure efficiency, division of labour, and accountability, broadcast stations rely on departmentalization. Discuss in detail five core departments.',
          'Identify and discuss in detail the functions of all nine departments that ensure smooth broadcast operations.'
        ],
        memoryAnchor: 'ACRONYM: P-N-E-C-A-F-P-T-P (Programmes, News, Engineering, Commercial, Admin, Finance, Production, Traffic, PR).'
      },
      {
        topic: 'The Three Phases of Programme Production & Key Personnel',
        frequency: '8 of 11 Sets (73%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Pre-Production, Production, and Post-Production workflows, plus specific responsibilities of Executive Producer, Producer, Director, Floor Manager, and Editor.',
        likelyQuestions: [
          'Identify and explain the three key phases of programme production, highlighting two major tasks performed in each phase.',
          'Describe the specific roles and responsibilities of five production personnel in a television studio setup.'
        ],
        memoryAnchor: 'ACRONYM: PRE-PRO-POST (Plan/Cast/Rehearse -> Shoot/Direct/Record -> Edit/Grade/Log).'
      },
      {
        topic: 'Management Functions (POSDCORB) & Essential Managerial Skills',
        frequency: '8 of 11 Sets (73%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Henry Fayol / Luther Gulick\'s management functions and Robert Katz\'s skills (Technical, Human, Conceptual, Financial, Political/Regulatory).',
        likelyQuestions: [
          'Discuss five essential management skills required of a General Manager in a standard radio or television station.',
          'Enumerate and examine five functions of management in any broadcast media organization.'
        ],
        memoryAnchor: 'ACRONYM: T-H-C-F-P (Technical, Human, Conceptual, Financial, Political skills).'
      },
      {
        topic: 'Broadcast Studio Equipment & Transmission Systems',
        frequency: '6 of 11 Sets (55%)',
        probability: 'HIGH',
        examinerFocus: 'Acoustic studio design, studio floor characteristics, mixing consoles, microphones, telephone hybrids, and the transmission triad (Transmitter, Transmission Line, Antenna).',
        likelyQuestions: [
          'Define a radio studio and describe seven essential items of equipment found inside.',
          'Identify and discuss the three essential components of a radio transmission system.'
        ],
        memoryAnchor: 'ACRONYM: T-L-A (Transmission: Transmitter, Line, Antenna).'
      },
      {
        topic: 'The 4 Ps of Broadcast Marketing & Electronic Marketplace Forces',
        frequency: '6 of 11 Sets (55%)',
        probability: 'HIGH',
        examinerFocus: 'Product (Programming), Price (Rate cards/Audience attention), Place (Coverage/Frequency), Promotion (On-air teasers/billboards), plus macroeconomic and digital disruption forces.',
        likelyQuestions: [
          'Evaluate the 4 Ps of Marketing in the context of media station management.',
          'Analyze three external forces that directly affect and shape the electronic media marketplace in Nigeria.'
        ],
        memoryAnchor: 'ACRONYM: 4Ps in Media & R-E-T-A-C (Regulations, Economy, Technology, Audience, Competition).'
      },
      {
        topic: 'Personnel Management Theories: Theory X/Y & Maslow\'s Hierarchy',
        frequency: '5 of 11 Sets (45%)',
        probability: 'HIGH',
        examinerFocus: 'Douglas McGregor\'s authoritarian Theory X vs. participative Theory Y, and Abraham Maslow\'s physiological, safety, social, esteem, and self-actualization needs.',
        likelyQuestions: [
          'Compare Douglas McGregor’s Theory X and Theory Y approaches to employee management, listing three basic postulations of each.',
          'Discuss how Abraham Maslow’s Hierarchy of Needs applies to media staff motivation.'
        ],
        memoryAnchor: 'ACRONYM: X (Lazy/Coerced) vs. Y (Creative/Self-directed); Maslow: P-S-B-E-S.'
      },
      {
        topic: 'Ethical Conflict Areas & Professional Duties (NUJ Code)',
        frequency: '5 of 11 Sets (45%)',
        probability: 'HIGH',
        examinerFocus: 'Profitability vs. Social Responsibility; Political/Owner pressure vs. Editorial independence; "Brown Envelope" journalism; 5 Canons of the NUJ Code.',
        likelyQuestions: [
          'Identify and discuss three major ethical conflict areas that station managers frequently navigate in media management.',
          'List five canons of the Nigerian Union of Journalists (NUJ) Code of Ethics.'
        ],
        memoryAnchor: 'ACRONYM: P-P-G (Profit vs. Ethics, Political pressure, Gifts/Brown Envelope).'
      }
    ]
  },
  modules: [
    {
      id: 'mac333-m1',
      title: 'MODULE 1: Organizational Structure & Departmentalization',
      questions: [
        {
          id: 'q1-1',
          question: 'Discuss the rationale for departmentalization in a media station and examine the specific contributions of nine core departments.',
          frequencyTag: '82% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: P-N-E-C-A-F-P-T-P (Programmes, News, Engineering, Commercial, Admin, Finance, Production, Traffic, PR)',
          keyTakeaways: [
            'Departmentalization guarantees division of labor, operational efficiency, and clear hierarchical accountability.',
            'Nine departments: Programmes, News & Current Affairs, Engineering, Commercial/Marketing, HR/Admin, Accounts, Production, Traffic/Operations, Corporate PR.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Rationale for Departmentalization:</strong><br>
              In broadcast management, a television or radio station operates under extreme time pressure and technical precision. Departmentalization establishes an organic division of labor, eliminates task duplication, clarifies lines of authority (scalar chain), and ensures specialized accountability across distinct technical, editorial, and commercial workflows.</p>

              <p><strong>2. The Nine Core Departments and Their Contributions:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Programmes Department:</strong> Conceptualizes, acquires, plans, schedules, and oversees all non-news broadcast content (talk shows, dramas, documentaries, music blocks), shaping the station\'s unique brand identity.</li>
                <li><strong>News and Current Affairs Department:</strong> Operates 24/7 gathering, verifying, writing, editing, and broadcasting timely news bulletins, current affairs analysis, and investigative documentaries, building public credibility.</li>
                <li><strong>Engineering & Technical Services Department:</strong> Installs, calibrates, repairs, and operates transmitters, studio mixing consoles, antenna towers, studio links, and power generators to guarantee zero transmission downtime.</li>
                <li><strong>Commercial / Sales / Marketing Department:</strong> The revenue engine; sells commercial airtime, sponsorships, jingle placements, and live broadcasts to advertisers and marketing agencies.</li>
                <li><strong>Human Resources / Administration Department:</strong> Manages recruitment, staff onboarding, industrial relations, labor union negotiations (NUJ, RATTAWU), and legal regulatory compliance.</li>
                <li><strong>Finance and Accounts Department:</strong> Prepares operating budgets, oversees cash flow, manages payroll, audits financial ledgers, and ensures commercial profitability.</li>
                <li><strong>Production Department:</strong> Provides studio operations—floor management, camera operations, stage lighting, sound mixing, set construction, and post-production video editing.</li>
                <li><strong>Traffic and Continuity / Operations Department:</strong> Serves as the critical interface between Marketing and Programming by compiling the daily transmission log (broadcast schedule), ensuring paid commercial spots run at exact contract seconds.</li>
                <li><strong>Corporate Communications / Public Relations Department:</strong> Manages station public image, viewer feedback/complaints, press statements, and corporate social responsibility (CSR).</li>
              </ol>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac333-m4',
      title: 'MODULE 4: Programme Production Phases & Key Personnel',
      questions: [
        {
          id: 'q4-1',
          question: 'Deconstruct the three major phases of broadcast production (Pre-Production, Production, Post-Production) and detail the duties of five studio personnel.',
          frequencyTag: '73% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: PRE-PRO-POST; Personnel: Exec Producer, Producer, Director, Floor Manager, Editor',
          keyTakeaways: [
            'Pre-Production: Concept, script, budget, casting, rehearsal, location clearance.',
            'Production: Studio execution, directing, multi-camera switching, audio recording.',
            'Post-Production: Non-linear editing (NLE), audio cleanup, color grading, graphics overlays, quality control.',
            'Executive Producer handles funding; Producer manages workflow; Director commands studio shooting.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. The Three Major Phases of Programme Production:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Pre-Production Phase (Planning & Preparation):</strong> The foundation of production. Activities include concept development, scriptwriting and continuity drafting, budget approval, talent auditions/casting, location scouting, set design, securing filming permits, and technical rehearsals.</li>
                <li><strong>Production Phase (Execution & Capture):</strong> The actual shooting or live transmission. Involves talent performance, camera blocking, three-point studio lighting, audio mixing, teleprompter operation, and technical direction from the control booth via video switchers.</li>
                <li><strong>Post-Production Phase (Finishing & Quality Control):</strong> Assembling raw takes into a polished broadcast master. Tasks include non-linear editing (NLE), color correction/grading, audio cleanup and dubbing, voiceover recording, visual effects (VFX) and lower-third graphic overlays, and final quality control review before placement on the transmission log.</li>
              </ol>

              <p><strong>2. Five Key Production Personnel and Their Roles:</strong></p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Executive Producer:</strong> Secures project funding, oversees macro budgeting, hires primary creative heads, and holds ultimate commercial accountability for the project.</li>
                <li><strong>Producer:</strong> The operational manager who coordinates daily logistical details across all three phases, managing talent contracts, shooting schedules, catering, and departmental liaison.</li>
                <li><strong>Director:</strong> The artistic leader in control during shooting; interprets the script visually, commands camera operators, directs talent movement, and selects shots on the video switcher.</li>
                <li><strong>Floor Manager:</strong> The director\'s physical representative on the studio floor, maintaining studio silence, cueing presenters using silent hand gestures, and organizing props.</li>
                <li><strong>Video / Audio Editor:</strong> The post-production technician who cuts raw footage, synchronizes multi-track audio, inserts graphics, and exports the final transmission master.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac333-m5',
      title: 'MODULE 5: Broadcast Studio Equipment & Transmission Infrastructure',
      questions: [
        {
          id: 'q5-1',
          question: 'Define a broadcast studio, enumerate seven items of studio hardware, describe studio floor characteristics, and explain the radio transmission system.',
          frequencyTag: '55% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: Studio Hardware = Console, Mics, Monitors, Automation, Hybrid, Processor, Acoustic; Transmission = T-L-A (Transmitter, Line, Antenna)',
          keyTakeaways: [
            'Studio: Sound-proofed, acoustically dampened chamber designed for clean audio/visual capture.',
            'Studio Floor: Dead-level, heavy-duty load bearing, vibration-isolated, non-reflective.',
            'Transmission triad: Transmitter (modulates/amplifies RF carrier), Transmission line (shielded coaxial cable/waveguide), Antenna (radiates electromagnetic waves).'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Radio Studio Definition and Seven Essential Hardware Items:</strong><br>
              A radio studio is an acoustically treated, soundproofed room engineered to isolate, record, mix, and broadcast audio signals without external acoustic interference:</p>
              <ol class="list-decimal pl-5 space-y-1">
                <li><strong>Audio Mixing Console (Sound Board):</strong> The central routing hub that accepts, blends, equalizes, and controls volume levels for microphones, music players, and remote feeds.</li>
                <li><strong>Professional Microphones (Dynamic & Condenser):</strong> Transducers converting sound waves into electrical impulses (e.g., Shure SM7B).</li>
                <li><strong>Studio Headphones & Active Monitors:</strong> High-fidelity listening units; headphones prevent audio feedback loops into live microphones.</li>
                <li><strong>Digital Playout Automation System:</strong> Computer software (e.g., RCS Master Control, ZaraRadio) storing music databases, commercial jingles, station IDs, and automated logs.</li>
                <li><strong>Telephone Hybrid Unit:</strong> Connects incoming telephone calls to the mixing board with acoustic echo cancellation for live caller interaction.</li>
                <li><strong>Audio Equalizers and Compressors/Limiters:</strong> Balances dynamic audio ranges to prevent signal distortion and deliver uniform volume.</li>
                <li><strong>Acoustic Treatment Panels & "On-Air" Warning Tally:</strong> Bass traps and wall diffusers eliminating flutter echoes; tally light warning staff of live recording.</li>
              </ol>

              <p><strong>2. Characteristics of a Broadcast Studio Floor:</strong><br>
              Must be perfectly horizontal/level, completely silent and vibration-isolated from structural foundations, covered in heavy-duty non-reflective linoleum or dense acoustic rubber, capable of supporting heavy rolling pedestal cameras, and grounded against static electricity.</p>

              <p><strong>3. Three Essential Components of Radio Transmission:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>The Transmitter:</strong> Generates the high-frequency Radio Frequency (RF) carrier wave, modulates it with the incoming studio audio signal, and amplifies the power (e.g., 5kW, 10kW).</li>
                <li><strong>The Transmission Line:</strong> Heavy-duty, shielded coaxial cable or rigid waveguide transferring the high-power RF signal up the broadcast tower without radiation loss.</li>
                <li><strong>The Antenna System:</strong> Radiates the amplified electrical energy out into the surrounding troposphere as electromagnetic waves for reception by radio sets.</li>
              </ul>
            </div>
          `
        }
      ]
    }
  ],
  tables: [
    {
      title: 'Comparative Analysis: Douglas McGregor’s Theory X vs. Theory Y',
      headers: ['Core Dimension', 'Theory X (Authoritarian / Mechanistic)', 'Theory Y (Participative / Developmental)'],
      rows: [
        ['Inherent Attitude to Work', 'Employees inherently dislike work and will avoid it whenever possible.', 'Expending mental and physical effort in work is as natural as play or rest.'],
        ['Motivation & Control', 'Workers must be coerced, controlled, closely supervised, and threatened with sanctions.', 'Employees exercise self-direction and self-control in service of objectives they embrace.'],
        ['Approach to Responsibility', 'The average worker prefers to be directed, avoids responsibility, and seeks security.', 'Under proper organizational conditions, the average worker learns to seek responsibility.'],
        ['Capacity for Innovation', 'Creativity and problem-solving are limited exclusively to top management.', 'Creative ingenuity is widely distributed across the entire workforce.'],
        ['Management Leadership Style', 'Autocratic, punitive, highly centralized, rigid scalar chains.', 'Democratic, consultative, empowering, decentralized delegation.']
      ]
    }
  ],
  diagrams: [
    {
      title: 'Broadcast Media Station Departmental Organogram',
      content: `
                    +------------------------------------+
                    |       BOARD OF DIRECTORS /         |
                    |     STATION GENERAL MANAGER        |
                    +------------------------------------+
                                       │
     ┌─────────────┬─────────────┬─────┴───────┬─────────────┬─────────────┐
     ▼             ▼             ▼             ▼             ▼             ▼
[PROGRAMMES]     [NEWS]     [ENGINEERING] [COMMERCIAL]   [ADMIN/HR]    [FINANCE]
 ├── Talks        ├── Report   ├── Transmit ├── Sales      ├── Personnel ├── Accounts
 ├── Drama        ├── Edit     ├── Studio   ├── Ads/Spots  ├── Welfare   ├── Audit
 └── Music        └── Monitor  └── Maint.   └── Client PR  └── Unions    └── Payroll
     `
    }
  ],
  practiceExam: {
    heading: 'PRACTICE EXAMINATION PAPER (SIMULATED FOR FINAL REVISION)',
    instructions: 'Answer Question One (1) (Compulsory – 25 Marks) and any other three (3) questions (15 Marks each). Total: 70 Marks.',
    questions: [
      {
        number: 'QUESTION 1',
        title: 'Departmentalization in Broadcast Stations & HR Functions',
        marks: '25 Marks',
        isCompulsory: true,
        frequencyNote: 'High Frequency (Found in over 80% of past examination diets)',
        scoringGuide: [
          'Part (a): 5 core departments with deep operational analysis (3 marks each = 15 marks)',
          'Part (b): 5 key HR management functions (2 marks each = 10 marks)'
        ],
        mnemonic: 'Recall Anchors: P-N-E-C-A for departments; Recruitment, Training, Appraisal, Welfare, Union relations for HR.',
        questionText: `(a) To ensure efficiency, division of labor, and operational accountability, broadcast media organizations rely heavily on departmentalization. Identify and discuss in detail five (5) core departments in a standard broadcast station, outlining their specific contributions to daily operations. (15 Marks)
(b) Discuss five (5) key functions performed by the Human Resources/Personnel Department to ensure effective staff management and productivity within a broadcast media outfit. (10 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): FIVE CORE DEPARTMENTS AND THEIR CONTRIBUTIONS (15 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-3">
              <li><strong>Programmes Department:</strong><br>
              The artistic heart of the station. Responsible for creating, acquiring, scheduling, and executing all non-news audio-visual content—including musical programmes, dramatic serials, educational talk shows, and religious broadcasts. Its contribution is establishing the station\'s broadcast identity, cultivating audience loyalty, and maintaining competitive ratings.</li>

              <li><strong>News and Current Affairs Department:</strong><br>
              The journalistic vanguard. Operates around the clock gathering local, national, and global news, conducting investigative reporting, and producing news bulletins and analytical commentaries. It fulfills the station\'s constitutional watchdog mandate and builds institutional credibility.</li>

              <li><strong>Engineering and Technical Services Department:</strong><br>
              The technical backbone. Charged with maintaining, calibrating, and operating broadcast transmitters, studio mixing consoles, antenna arrays, digital video switchers, and standby power generators. It guarantees uninterrupted, crystal-clear signal distribution.</li>

              <li><strong>Commercial / Marketing Department:</strong><br>
              The financial lifeblood. Drives revenue generation by selling airtime, program sponsorships, live hype coverage, and commercial jingle spots to corporate advertisers and agencies, ensuring business solvency.</li>

              <li><strong>Administration and Human Resources Department:</strong><br>
              The organizational anchor. Manages workforce logistics, handles staff welfare and benefits, coordinates union relations (NUJ, RATTAWU), and ensures compliance with statutory labor laws and NBC regulations.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): FIVE KEY FUNCTIONS OF THE HR DEPARTMENT (10 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Talent Recruitment and Onboarding:</strong> Sourcing, interviewing, and hiring skilled broadcast personnel (on-air personalities, investigative reporters, studio engineers) matched precisely to job descriptions.</li>
              <li><strong>Continuous Training and Professional Capacity Building:</strong> Organizing ongoing technical training in digital editing software, non-linear video workflows, and broadcast ethics.</li>
              <li><strong>Performance Appraisal and Merit Promotion:</strong> Administering systematic periodic evaluations to reward outstanding staff, recommend salary increments, or initiate corrective transfers.</li>
              <li><strong>Welfare and Compensation Administration:</strong> Managing payroll, pension schemes, health insurance, and hazard allowances for reporters covering crises and conflict zones.</li>
              <li><strong>Industrial Relations and Dispute Resolution:</strong> Mediating internal disputes between management and media labor unions (e.g., Nigerian Union of Journalists - NUJ, RATTAWU), ensuring industrial peace.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 2',
        title: 'Production Phases & Studio Personnel Roles',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 73% of diets)',
        scoringGuide: [
          'Part (a): 3 production phases explained with 2 tasks each (7.5 marks)',
          'Part (b): 5 television studio personnel roles (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Pre, Pro, Post; Producer, Director, Floor Manager, Editor, Talent.',
        questionText: `(a) Production in broadcast media is a process involving distinct operational stages. Identify and explain the three (3) key phases of programme production, highlighting two major tasks performed in each phase. (7.5 Marks)
(b) Media production is the collective effort of technical and creative personnel. Describe the specific roles and responsibilities of five (5) production personnel involved in a television studio setup. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): THE THREE PHASES OF PROGRAMME PRODUCTION (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Pre-Production Phase (Planning & Preparation):</strong> The conceptual foundation. <em>Task 1:</em> Scriptwriting, formatting, and continuity editing. <em>Task 2:</em> Auditioning talent, budgeting, set design, and securing location clearances.</li>
              <li><strong>Production Phase (Execution & Capture):</strong> The recording or live broadcast stage. <em>Task 1:</em> On-camera talent performance and multi-camera directing. <em>Task 2:</em> Audio mixing, floor management, and video switcher operation from the control gallery.</li>
              <li><strong>Post-Production Phase (Finishing & Assembly):</strong> The post-recording assembly. <em>Task 1:</em> Non-linear digital editing, shot pacing, and audio sweetening/dubbing. <em>Task 2:</em> Insertion of lower-third graphics, color grading, and quality control logging.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): ROLES OF FIVE TELEVISION STUDIO PERSONNEL (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Executive Producer:</strong> Manages overall financing, approves project concepts, secures investor funds, and hires key directors.</li>
              <li><strong>Programme Producer:</strong> Coordinates day-to-day administrative logistics, managing schedules, catering, script approvals, and team welfare.</li>
              <li><strong>Studio Director:</strong> Translates the written script into visual realities during shooting, directing camera movements, calling shots on switchers, and guiding pacing.</li>
              <li><strong>Floor Manager:</strong> Represents the director on the studio floor, maintaining set discipline, handling physical props, and relaying hand cues to talent.</li>
              <li><strong>Video Editor:</strong> Cuts and splices raw footage during post-production, adding music beds, voiceovers, and transitions to produce the broadcast master.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 3',
        title: 'Studio Equipment & Radio Transmission System',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 55% of diets)',
        scoringGuide: [
          'Part (a): Studio definition + 5 essential equipment items (7.5 marks)',
          'Part (b): 3 transmission components (Transmitter, Line, Antenna) (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Mixer, Mics, Monitors, Automation, Hybrid; Transmitter, Line, Antenna.',
        questionText: `(a) A broadcast studio serves as the core production house for radio operations. Define a radio studio and describe five (5) essential items of equipment found inside an operational studio. (7.5 Marks)
(b) Identify and discuss the three (3) essential components that make up a complete radio transmission system. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): STUDIO DEFINITION AND FIVE HARDWARE ITEMS (7.5 Marks)</h4>
            <p><strong>Definition:</strong> A radio studio is an acoustically treated, soundproofed room engineered specifically for the clean recording, mixing, and broadcasting of sound without external acoustic reverberation or noise interference.</p>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Audio Mixing Console (Sound Board):</strong> The nerve center; accepts, balances, routes, and adjusts incoming signals from microphones, automation computers, and external telephone lines.</li>
              <li><strong>Broadcast Microphones:</strong> High-sensitivity transducers converting voice sound waves into electrical impulses (e.g., dynamic or condenser broadcast microphones).</li>
              <li><strong>Studio Headphones & Monitors:</strong> High-fidelity acoustic playback systems; headphones allow presenters to hear program audio without causing microphone feedback squeals.</li>
              <li><strong>Playout Automation Computer:</strong> Software-driven digital audio archive storing commercial jingles, music tracks, station identifiers, and running the broadcast log.</li>
              <li><strong>Telephone Hybrid Unit:</strong> Interfaces telephone lines with the broadcast mixer, providing acoustic echo cancellation for live caller interaction.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THREE ESSENTIAL TRANSMISSION COMPONENTS (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>The Radio Transmitter:</strong> Generates the high-frequency Radio Frequency (RF) carrier wave, modulates it with the audio signal from the studio console, and amplifies the signal power (e.g., 5kW, 10kW, 20kW).</li>
              <li><strong>The Transmission Line (Coaxial Cable / Waveguide):</strong> A heavily shielded, low-loss transmission cable that conveys the amplified RF power from the transmitter building to the antenna array atop the broadcast mast.</li>
              <li><strong>The Antenna System:</strong> Radiates the high-power RF electromagnetic waves outward into the atmosphere, ensuring proper beam directionality and propagation across the licensed geographic coverage area.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 4',
        title: 'Managerial Skills & McGregor\'s Theory X and Theory Y',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 73% of diets)',
        scoringGuide: [
          'Part (a): 5 essential managerial skills for a Station General Manager (7.5 marks)',
          'Part (b): Theory X vs. Theory Y comparison with 3 postulations each (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: T-H-C-F-P for skills; Lazy/Coerced (X) vs. Natural/Empowered (Y).',
        questionText: `(a) To lead a broadcast media outfit effectively, a General Manager must possess diverse capabilities. Discuss five (5) essential management skills required of a General Manager in a standard radio or television station. (7.5 Marks)
(b) Compare Douglas McGregor’s Theory X and Theory Y approaches to employee management, listing three (3) basic postulations for each theory. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): FIVE MANAGEMENT SKILLS FOR A STATION GENERAL MANAGER (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Technical Competence:</strong> A working comprehension of broadcast engineering, transmitter functioning, digital audio workstations (DAWs), video editing suites, and regulatory transmission specs.</li>
              <li><strong>Human / Interpersonal Skill:</strong> The ability to inspire creative, temperamental talent (OAPs, actors, investigative journalists), resolve workplace conflict, and build team cohesion.</li>
              <li><strong>Conceptual & Strategic Vision:</strong> The capacity to perceive the broadcast station as a systemic whole within the macro-economic and competitive media environment, planning multi-year expansions.</li>
              <li><strong>Financial Management Skill:</strong> Proficiency in fiscal budgeting, reading balance sheets, monitoring cash flows, managing capital expenditures, and driving commercial profitability.</li>
              <li><strong>Political & Regulatory Savvy:</strong> The competence to manage relationships with statutory regulators (e.g., National Broadcasting Commission - NBC), government ministries, and community leaders.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THEORY X VS. THEORY Y (7.5 Marks)</h4>
            <div class="space-y-3">
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded border">
                <h5 class="font-bold text-teal-700 dark:text-teal-400">Theory X Postulations (Authoritarian Model):</h5>
                <ol class="list-decimal pl-5 text-sm space-y-1">
                  <li>The average human being has an inherent dislike of work and will avoid it if possible.</li>
                  <li>Because of this human characteristic, most people must be coerced, controlled, directed, or threatened with punishment to put forth adequate effort toward organizational goals.</li>
                  <li>The average worker prefers to be directed, wishes to avoid responsibility, has relatively little ambition, and wants security above all.</li>
                </ol>
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded border">
                <h5 class="font-bold text-teal-700 dark:text-teal-400">Theory Y Postulations (Participative Model):</h5>
                <ol class="list-decimal pl-5 text-sm space-y-1">
                  <li>The expenditure of physical and mental effort in work is as natural as play or rest.</li>
                  <li>External control and threat of punishment are not the only means for bringing about effort; employees will exercise self-direction and self-control in the service of objectives to which they are committed.</li>
                  <li>The average human being learns, under proper conditions, not only to accept but to actively seek responsibility.</li>
                </ol>
              </div>
            </div>
          </div>
        `
      },
      {
        number: 'QUESTION 5',
        title: '4Ps in Media Marketing & Electronic Marketplace Forces',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 55% of diets)',
        scoringGuide: [
          'Part (a): 4Ps evaluated in media context (7.5 marks)',
          'Part (b): 3 external forces affecting electronic media market (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Product (Content), Price (Rate card), Place (Reach), Promotion (Publicity); Regulations, Economy, Disruptive Tech.',
        questionText: `(a) Evaluate the 4 Ps of Marketing (Product, Price, Place, Promotion) in the context of media station management, and explain how each element influences station profitability and popularity. (7.5 Marks)
(b) Analyze three (3) external forces that directly affect and shape the electronic media marketplace in Nigeria. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): THE 4Ps IN BROADCAST MEDIA MANAGEMENT (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Product (The Programming Output):</strong> The station\'s intellectual and sensory content—the music playlist, news depth, on-air personalities, and program formats. High product quality generates strong ratings.</li>
              <li><strong>Price (Dual Dimensions):</strong> For audiences, the opportunity cost (time and electrical energy); for corporate advertisers, the commercial rate card charges for 30/60-second ad spots and sponsorships. Pricing must balance revenue targets against competitive market rates.</li>
              <li><strong>Place (Distribution Footprint):</strong> The physical and digital distribution reach—transmitter kilowatt strength, FM frequency clarity, inclusion on digital terrestrial packages (DSTV, StarTimes), and internet streaming apps.</li>
              <li><strong>Promotion (Brand Visibility):</strong> Marketing activities used to build station awareness—on-air cross-promos, billboards along urban expressways, social media engagement, and community events.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THREE FORCES SHAPING THE MEDIA MARKETPLACE IN NIGERIA (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Statutory Regulations and Broadcast Codes (NBC):</strong> Strict regulatory mandates by the National Broadcasting Commission (NBC)—such as watershed hours, political broadcast rules, and heavy fines—shape station programming policies.</li>
              <li><strong>Macroeconomic Volatility & Advertising Budget Cuts:</strong> High inflation, diesel fuel costs to power transmitters, and currency depreciation force corporations to slash ad spend, threatening station survival.</li>
              <li><strong>Digital Disruption and Audience Fragmentation:</strong> The explosion of streaming platforms (YouTube, TikTok, Spotify) and social media shifts young demographics away from traditional linear TV and radio, diluting traditional advertising revenue.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 6',
        title: 'Ethical Conflict Areas & Programme Scheduling Strategies',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 45% of diets)',
        scoringGuide: [
          'Part (a): 3 ethical conflict areas in media management (7.5 marks)',
          'Part (b): 3 scheduling strategies (Stripping, Hammocking, Counter-programming) (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Ethics = Profit vs. Public, Political suppression, Brown Envelopes; Scheduling = Stripping, Hammocking, Counter.',
        questionText: `(a) Identify and discuss three (3) major ethical conflict areas that station managers frequently navigate in media management. (7.5 Marks)
(b) Explain three (3) programme scheduling strategies (such as Stripping, Hammocking, or Counter-Programming) used by broadcast stations to manage audience flow and stay competitive. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): THREE ETHICAL CONFLICT AREAS IN MEDIA MANAGEMENT (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Profitability vs. Social Responsibility:</strong> The tension between accepting highly lucrative advertising contracts from ethically dubious products (e.g., unverified herbal medicines, high-risk gambling platforms) versus the station\'s public duty to protect audience health.</li>
              <li><strong>Editorial Independence vs. Political/Proprietor Pressure:</strong> Navigating instances where station proprietors, powerful government officials, or major commercial sponsors attempt to suppress investigative reports or dictate slanted news coverage.</li>
              <li><strong>Gratification and "Brown Envelope" Compromises:</strong> Eradicating the practice where field reporters receive financial inducements or gifts from news sources, severely compromising news objectivity and destroying station credibility.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THREE PROGRAMME SCHEDULING STRATEGIES (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Stripping:</strong> Scheduling the exact same program at the identical time slot every weekday from Monday to Friday (e.g., airing a national news bulletin or soap opera daily at 7:00 PM) to establish strong viewing habits.</li>
              <li><strong>Hammocking:</strong> Placing a new, unproven, or weaker program in a time slot situated directly between two established hit shows, leveraging the audience momentum of the first hit show to pull viewers into the new program.</li>
              <li><strong>Counter-Programming:</strong> Scheduling content designed to appeal to an entirely different demographic from that targeted by a rival station\'s hit show in the identical time slot (e.g., airing a live sports analysis show against a rival station\'s prime-time soap opera).</li>
            </ol>
          </div>
        `
      }
    ]
  },
  memorizationAids: {
    title: 'MAC 333 High-Yield Memorization Mnemonics',
    items: [
      {
        acronym: 'P-N-E-C-A-F-P-T-P',
        standsFor: 'Programmes, News, Engineering, Commercial, Admin, Finance, Production, Traffic, PR',
        usage: 'Recall the 9 core departments in a standard broadcast station.'
      },
      {
        acronym: 'T-H-C-F-P',
        standsFor: 'Technical, Human, Conceptual, Financial, Political',
        usage: '5 essential management skills for a Station General Manager.'
      },
      {
        acronym: 'T-L-A',
        standsFor: 'Transmitter, Transmission Line, Antenna',
        usage: '3 essential components of a radio transmission system.'
      },
      {
        acronym: 'PRE-PRO-POST',
        standsFor: 'Pre-Production, Production, Post-Production',
        usage: 'The 3 sequential phases of broadcast production.'
      }
    ]
  }
};
