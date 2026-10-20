import { CourseData } from './types';

export const mac343Data: CourseData = {
  code: 'MAC 343',
  title: 'Radio/TV Programming',
  creditUnits: 3,
  timeAllowed: '3 Hours',
  examInstructions: 'Answer Question One (1) (Compulsory – 25 Marks) and any other three (3) questions (15 Marks each). Total: 70 Marks.',
  overview: 'Provides exhaustive grounding in the art and strategic science of broadcast programming, grid scheduling strategies, the 4Ps of production, scriptwriting technicalities (ear vs. eye), historical broadcast deregulation in Nigeria, and audience research analytics.',
  frequencyAnalysis: {
    totalSetsAnalyzed: 10,
    summary: 'Cross-tabulation of 10 examination diets reveals strong examiner affinity for 6 major operational concepts: (1) Radio Characteristics as Limitations [Double-Edged Sword] (80%), (2) Programme Scheduling Strategies [Hammocking, Tentpoling, Stripping] (70%), (3) Programme vs. Programming vs. Format (70%), (4) Scriptwriting Technicalities: Radio vs. TV (60%), (5) The 4 Ps of Broadcast Programming (60%), and (6) Nigerian Broadcasting History [RDS 1932, WNTV 1959, 1992 Deregulation] (50%).',
    matrix: [
      {
        topic: 'Radio Peculiarities & Characteristics as Limitations ("Double-Edged Sword")',
        frequency: '8 of 10 Sets (80%)',
        probability: 'VERY HIGH',
        examinerFocus: 'How radio\'s defining virtues (audio-only, transience, secondary background listening, perishability of airtime, signal vulnerability) operate simultaneously as severe operational weaknesses.',
        likelyQuestions: [
          'The peculiarity of radio as a medium of mass communication has virtually turned its characteristics into its limitations. Discuss five of such characteristics.',
          'Radio is a unique medium with characteristics peculiar to it. Explain this assertion with five key attributes.'
        ],
        memoryAnchor: 'ACRONYM: S-T-B-P-S (Sightlessness, Transience, Background secondary medium, Perishability of airtime, Signal fading).'
      },
      {
        topic: 'Broadcast Programme vs. Programming vs. Format vs. Philosophy',
        frequency: '7 of 10 Sets (70%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Distinguishing the single content unit (Programme) from the strategic macro grid placement (Programming), station format, and station philosophy.',
        likelyQuestions: [
          'Clearly distinguish between a broadcast programme and broadcast programming, and explain why format is crucial.',
          'What is a broadcast media\'s format, and what are the implications of the station\'s philosophy to its creation?'
        ],
        memoryAnchor: 'ACRONYM: P-P-F-P (Programme = Unit; Programming = Strategy/Grid; Format = Sound/Identity; Philosophy = Mission/Policy).'
      },
      {
        topic: 'Broadcast Scheduling Strategies (Grid Management)',
        frequency: '7 of 10 Sets (70%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Practical mastery of audience flow engineering: Hammocking, Tentpoling, Stripping, Stacking, Counter-Programming, and Bridging.',
        likelyQuestions: [
          'A new TV outfit (e.g., METRO TV or TREND TV) needs a scheduling guide. Explain five programme scheduling strategies that could serve its purpose.',
          'Giving at least five reasons, explain why broadcast stations schedule programmes.'
        ],
        memoryAnchor: 'ACRONYM: H-T-S-C-B (Hammocking, Tentpoling, Stripping, Counter-programming, Bridging).'
      },
      {
        topic: 'Scriptwriting Technicalities: Radio News Script vs. Television Script',
        frequency: '6 of 10 Sets (60%)',
        probability: 'HIGH',
        examinerFocus: 'Writing for the Ear vs. Eye; The 6 Cs (Clarity, Conciseness, Conversational, Correctness, Compassion, Concreteness); Two-column split layout vs. single column.',
        likelyQuestions: [
          'Writing for radio is not the same as writing for television. Discuss the technicalities of writing a TV script and contrast it with a radio news bulletin.',
          'What are the parameters (e.g., the 6 Cs) that must be followed for a story to flow logically in radio broadcasting?'
        ],
        memoryAnchor: 'ACRONYM: 6 Cs (Clarity, Conciseness, Conversational, Correctness, Compassion, Concreteness).'
      },
      {
        topic: 'The 4 Ps of Broadcast Production & Programming',
        frequency: '6 of 10 Sets (60%)',
        probability: 'HIGH',
        examinerFocus: 'Translating traditional marketing 4Ps into broadcast operations: Product (Content/OAPs), Price (Audience time/Rate cards), Place (Signal footprint), Promotion (Teasers/Billboards).',
        likelyQuestions: [
          'Evaluate the 4 Ps of programming and their impact on the popularity of broadcast stations among audience members.',
          'Discuss how the 4 Ps of Production influence program development and audience popularity.'
        ],
        memoryAnchor: 'ACRONYM: 4Ps in Broadcasting (Content, Rate card, Coverage, Promotion).'
      },
      {
        topic: 'Nigerian Broadcasting History: RDS 1932, WNTV 1959, Deregulation 1992',
        frequency: '5 of 10 Sets (50%)',
        probability: 'HIGH',
        examinerFocus: 'Chronology: Radio Distribution Service (RDS, Dec 1, 1932); NBS 1951; NBC 1956; Chief Awolowo\'s Western Nigeria Television (WNTV, Oct 31, 1959 - "First in Africa"); NTA 1977; Decree 38 of 1992 deregulation.',
        likelyQuestions: [
          'Trace the history of radio broadcasting from invention to the period of rediffusion in Nigeria.',
          'Do a historical overview of the growth of TV to its establishment in Nigeria, and analyze the impact of the 1992 deregulation decree.'
        ],
        memoryAnchor: 'ACRONYM: 1932 (RDS) -> 1951 (NBS) -> 1956 (NBC) -> 1959 (WNTV) -> 1977 (NTA) -> 1992 (NBC Deregulation).'
      }
    ]
  },
  modules: [
    {
      id: 'mac343-m1',
      title: 'MODULE 1: Foundational Concepts in Broadcasting & Delivery Modes',
      questions: [
        {
          id: 'q1-1',
          question: 'Define Broadcasting, Programme, Programming, Format, and Station Philosophy, and contrast Broadcasting, Narrowcasting, and Cablecasting.',
          frequencyTag: '70% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: Programme (Unit) vs. Programming (Grid); Broadcasting (Mass Airwaves) vs. Narrowcasting (Niche) vs. Cablecasting (Cables)',
          keyTakeaways: [
            'Broadcasting: Transmission of electromagnetic signals to wide dispersed simultaneous audiences.',
            'Programme: Single discrete unit of broadcast content.',
            'Programming: Strategic selection and scheduling of programmes on the transmission grid.',
            'Format: Consistent recognizable sound or personality (Top 40, All-News, Adult Contemporary).',
            'Narrowcasting: Targeted delivery to a specialized demographic (campus radio); Cablecasting: Coaxial/fiber delivery to paid subscribers.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Core Conceptual Definitions:</strong></p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Broadcasting:</strong> The transmission of electromagnetic radio or television signals through open airwaves (or digital IP conduits) intended for simultaneous, unencrypted reception by a vast, heterogeneous, and widely dispersed general public.</li>
                <li><strong>Broadcast Programme:</strong> A single, complete, self-contained unit of audio or video content produced for transmission (e.g., a 30-minute news bulletin, an episode of a sitcom, a 1-hour public affairs discussion show).</li>
                <li><strong>Broadcast Programming:</strong> The strategic, continuous management process of planning, selecting, organizing, and placing diverse programmes into a coordinated daily or seasonal broadcast log (the grid) to attract, retain, and satisfy specific target audiences while achieving station commercial objectives.</li>
                <li><strong>Programme Format:</strong> The overall sonic or visual identity, structure, and pacing that characterizes a station\'s entire output (e.g., All-News/Talk, Urban Contemporary, Sports Radio, Top 40 Pop).</li>
                <li><strong>Station Philosophy:</strong> The guiding institutional creed, editorial charter, and socio-commercial policy established by station ownership that dictates content selection, ethical boundaries, and public service commitments.</li>
              </ul>

              <p><strong>2. Comparative Analysis of Signal Delivery Modes:</strong></p>
              <div class="tw overflow-x-auto border rounded-lg">
                <table class="w-full text-xs sm:text-sm">
                  <thead>
                    <tr class="bg-teal-50 dark:bg-teal-950/40">
                      <th class="p-2 border">Mode</th>
                      <th class="p-2 border">Transmission Mechanism</th>
                      <th class="p-2 border">Target Audience Scope</th>
                      <th class="p-2 border">Concrete Practical Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="p-2 border font-semibold">Broadcasting</td>
                      <td class="p-2 border">Over-the-air open RF spectrum frequencies.</td>
                      <td class="p-2 border">Universal, mass, heterogeneous public without restriction.</td>
                      <td class="p-2 border">NTA Network, Radio Nigeria (FRCN), Channels TV, Cool FM.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Narrowcasting</td>
                      <td class="p-2 border">Targeted frequencies or closed-circuit relays.</td>
                      <td class="p-2 border">Restricted, specialized niche communities or localized groups.</td>
                      <td class="p-2 border">NOUN FM (campus radio), in-store supermarket audio networks, airport gate TV.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Cablecasting</td>
                      <td class="p-2 border">Coaxial cables, fiber-optic networks, or IPTV pipelines.</td>
                      <td class="p-2 border">Enrolled, paid domestic subscribers with set-top decoders.</td>
                      <td class="p-2 border">DSTV/MultiChoice, StarTimes cable bundles, CNN International cable feeds.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac343-m2',
      title: 'MODULE 2: Radio Peculiarities: Characteristics as Limitations',
      questions: [
        {
          id: 'q2-1',
          question: 'Analyze how the unique characteristics of radio act as a "double-edged sword" by simultaneously functioning as inherent operational limitations.',
          frequencyTag: '80% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: S-T-B-P-S (Sightlessness, Transience, Background, Perishability, Signal fading)',
          keyTakeaways: [
            'Audio-only (Blind medium): Fosters "theater of the mind" but cannot show visual evidence.',
            'Transience: Immediacy virtue, but listeners cannot pause/rewind live broadcasts.',
            'Secondary listening: Great companion, but low attention retention.',
            'Perishability of airtime: Unsold seconds are permanently lost.',
            'Signal fading: Terrain and atmospheric interference.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>In broadcast theory, radio is renowned as a <strong>"double-edged sword"</strong> because every single defining strength it possesses simultaneously creates a profound operational handicap:</p>
              <ol class="list-decimal pl-5 space-y-3">
                <li><strong>Audio-Only / Blind Medium (The Theater of the Mind):</strong><br>
                <em>The Virtue:</em> Bypasses visual distractions, inviting the listener to use their imagination to paint vivid mental pictures.<br>
                <em>The Limitation:</em> Complete absence of visual support means complex physical demonstrations (e.g., surgical procedures, graphic financial charts, technical machinery) cannot be shown. The communicator must rely on verbal descriptions, which are easily misunderstood.</li>

                <li><strong>Transience and Ephemerality:</strong><br>
                <em>The Virtue:</em> Lightning speed; breaks news instantaneously as events unfold.<br>
                <em>The Limitation:</em> The broadcast signal passes in real-time. Once spoken, the word vanishes into the air. If a listener is distracted for three seconds during a phone number or address announcement, the message is permanently lost.</li>

                <li><strong>Secondary / Background Companion Medium:</strong><br>
                <em>The Virtue:</em> Extreme mobility; accompanies listeners while driving, cooking, farming, or jogging.<br>
                <em>The Limitation:</em> Because listeners are engaged in other primary tasks, attention is divided. Retention, deep cognitive recall, and commercial recall are significantly lower than visual television viewing.</li>

                <li><strong>Absolute Perishability of Broadcast Inventory:</strong><br>
                <em>The Virtue:</em> Strict clock discipline creates predictable hourly programming habits.<br>
                <em>The Limitation:</em> Broadcast inventory is completely time-bound. An unsold 30-second commercial slot at 8:00 AM on Monday morning cannot be stored in a warehouse or sold later; the potential revenue is destroyed forever.</li>

                <li><strong>Vulnerability to Environmental & Terrain Interference:</strong><br>
                <em>The Virtue:</em> Long-range propagation across hills and valleys without wires.<br>
                <em>The Limitation:</em> Radio frequencies (AM, Shortwave, and FM) are vulnerable to lightning static, atmospheric fading, shielding by urban concrete skyscrapers, and hilly terrain shadows.</li>
              </ol>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac343-m6',
      title: 'MODULE 6: Broadcast Programme Scheduling Strategies',
      questions: [
        {
          id: 'q6-1',
          question: 'Define broadcast scheduling, examine why stations schedule programmes, and detail five major scheduling strategies with practical examples.',
          frequencyTag: '70% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: H-T-S-C-B (Hammocking, Tentpoling, Stripping, Counter-programming, Bridging)',
          keyTakeaways: [
            'Scheduling: Placing shows onto the broadcast grid to control audience flow.',
            'Reasons: Habit formation, commercial monetization, regulatory compliance (watershed), audience availability.',
            'Hammocking: Weak show between two hit shows.',
            'Tentpoling: Dominant show in middle of prime-time.',
            'Stripping: Same show, same hour, Monday to Friday.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Definition & Rationale for Programme Scheduling:</strong><br>
              Broadcast scheduling is the tactical placement of television or radio programmes onto a predetermined daily, weekly, or seasonal timetable (the program grid). Broadcast stations schedule programmes for four strategic reasons:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>Audience Habit Formation:</strong> Human life is governed by daily routines. Consistent scheduling conditions audiences to tune in automatically at specific hours.</li>
                <li><strong>Audience Availability Synchronization:</strong> Placing children\'s shows in late afternoon, soap operas during evening family hours, and news during adult prime-time.</li>
                <li><strong>Maximizing Commercial Revenue:</strong> Grouping high-rating shows together during prime-time hours allows the station to charge peak rate card advertising fees.</li>
                <li><strong>Regulatory Watershed Compliance:</strong> Ensuring adult-rated content airs only after the 10:00 PM watershed in accordance with the NBC Code.</li>
              </ul>

              <p><strong>2. Five Core Broadcast Scheduling Strategies:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Hammocking:</strong> Placing a new, unproven, or lower-rated program between two established, highly popular hit shows. Audience inertia carries viewers from the first hit show into the new show, boosting its ratings.</li>
                <li><strong>Tentpoling:</strong> Scheduling a massive, powerhouse hit show in the center of prime-time (e.g., at 8:00 PM). The strong central program serves as a "tentpole" propping up viewership for the weaker shows airing immediately before and after it.</li>
                <li><strong>Stripping (Horizontal Programming):</strong> Airing the identical program (e.g., a daily soap opera or news bulletin) at the exact same hour every weekday from Monday through Friday, establishing seamless listening habits.</li>
                <li><strong>Counter-Programming:</strong> Offering programming designed to appeal to an entirely different demographic from that targeted by a rival station\'s hit show in the identical time slot (e.g., airing a live sports discussion against a rival\'s romantic drama).</li>
                <li><strong>Bridging:</strong> Starting a program slightly off the top-of-the-hour mark (e.g., 7:05 PM instead of 7:00 PM) or extending a hit show past the hour mark, preventing viewers from switching to a rival station\'s new show at the normal start time.</li>
              </ol>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac343-m8',
      title: 'MODULE 8: Historical Evolution of Broadcasting in Nigeria',
      questions: [
        {
          id: 'q8-1',
          question: 'Trace the history of radio from invention to the Rediffusion Service in Nigeria (1932), detail the launch of WNTV in 1959, and analyze the impact of the 1992 deregulation decree.',
          frequencyTag: '50% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: 1932 (RDS) -> 1951 (NBS) -> 1956 (NBC) -> 1959 (WNTV "First in Africa") -> 1977 (NTA Takeover) -> 1992 (Decree 38 Deregulation)',
          keyTakeaways: [
            'RDS 1932: British colonial wired relay piping BBC shortwave signals to home wooden speaker boxes.',
            'WNTV 1959: Chief Obafemi Awolowo launched television in Ibadan ("First in Africa").',
            'Decree 38 of 1992: Broke state monopoly, established National Broadcasting Commission (NBC), licensed private broadcasters (Raypower FM, AIT, Channels TV).'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Radio Evolution to the Rediffusion Era (1932):</strong><br>
              Radio broadcasting in Nigeria commenced on <strong>December 1, 1932</strong>, when the British Colonial Posts and Telegraphs Department established the <strong>Radio Distribution Service (RDS)</strong> in Lagos. RDS was not open wireless broadcasting; it was a wired cable relay system ("rediffusion") that picked up BBC shortwave signals from London and redistributed them via landlines to wooden speaker boxes installed in subscribers' homes for a monthly fee. In 1951, RDS was transformed into the <strong>Nigerian Broadcasting Service (NBS)</strong> to produce indigenous content, and in 1956, an Act of Parliament created the <strong>Nigerian Broadcasting Corporation (NBC)</strong> as an independent public broadcaster.</p>

              <p><strong>2. Television Growth and WNTV (1959):</strong><br>
              Television broadcasting in Africa was pioneered on <strong>October 31, 1959</strong>, with the launch of the <strong>Western Nigeria Television (WNTV)</strong> in Ibadan by Premier Chief Obafemi Awolowo and Information Minister Chief Anthony Enahoro. With its historic slogan <em>"First in Africa"</em>, WNTV was established primarily to advance regional educational instruction. This triggered regional competition: ENTV in Enugu (1960), RKTV in Kaduna (1962), and the Federal Government\'s NTS in Lagos (1962). In 1977, under Decree 24, the Federal Military Government nationalized all regional stations into the unified <strong>Nigerian Television Authority (NTA)</strong>.</p>

              <p><strong>3. The 1992 Deregulation Watershed (Decree 38 of 1992):</strong><br>
              Prior to 1992, broadcasting was an exclusive federal and state government monopoly. General Ibrahim Babangida promulgated <strong>Decree 38 of 1992</strong>, which established the National Broadcasting Commission (NBC) and liberalized the sector. This historic deregulation broke the 60-year state monopoly, ushering in private commercial radio and television stations—pioneered by Raypower 100.5 FM (1994), Africa Independent Television (AIT), and Channels Television—sparking unprecedented creative programming, competition, and economic growth.</p>
            </div>
          `
        }
      ]
    }
  ],
  tables: [
    {
      title: 'Structural Differences: Radio News Script vs. Television Script',
      headers: ['Technical Dimension', 'Radio News Script', 'Television Script'],
      rows: [
        ['Script Layout', 'Single-column continuous linear prose read top-to-bottom.', 'Two-column split format: Left column (Video cues) / Right column (Audio text).'],
        ['Sensory Target', 'Written purely for the ear; conversational, rhythmic, imaginative.', 'Written to support the eye; text complements, rather than describes, what is visible.'],
        ['Technical Directions', 'Audio cues: SFX (Sound Effects), FADE IN/OUT, MUSIC UNDER.', 'Video cues: CU (Close Up), WS (Wide Shot), LOWER THIRD, B-ROLL, SOT (Sound on Tape).'],
        ['Pacing Governance', 'Paced strictly by spoken word count (approx. 125–150 words per minute).', 'Paced by visual cuts, camera transitions, and video clip durations.']
      ]
    }
  ],
  practiceExam: {
    heading: 'PRACTICE EXAMINATION PAPER (SIMULATED FOR FINAL REVISION)',
    instructions: 'Answer Question One (1) (Compulsory – 25 Marks) and any other three (3) questions (15 Marks each). Total: 70 Marks.',
    questions: [
      {
        number: 'QUESTION 1',
        title: 'Broadcast Concepts, Format Survival & 4Ps of Programming',
        marks: '25 Marks',
        isCompulsory: true,
        frequencyNote: 'High Frequency (Found in over 70% of analyzed past papers)',
        scoringGuide: [
          'Part (a): Differentiating Programme, Programming, and Format importance (10 marks)',
          'Part (b): Evaluating the 4Ps of Programming and impact on station viability (15 marks)'
        ],
        mnemonic: 'Recall Anchors: Programme (Item) vs Programming (Grid); 4Ps (Product/Content, Price/Rates, Place/Signal, Promotion/Teasers).',
        questionText: `(a) Clearly distinguish between a broadcast programme and broadcast programming, and explain why a station's programme format is crucial to its survival in a competitive media market. (10 Marks)
(b) Evaluate the 4 Ps of Production/Programming (Product, Price, Place, Promotion) and discuss how each element impacts the popularity and commercial viability of a broadcast station. (15 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): PROGRAMME, PROGRAMMING, AND FORMAT CRUCIALITY (10 Marks)</h4>
            <p><strong>Broadcast Programme:</strong> A single, distinct, complete unit of audio or video content produced for transmission to an audience (e.g., a 30-minute news bulletin, an episodic drama, an investigative documentary, or a music countdown show).</p>
            <p><strong>Broadcast Programming:</strong> The macro-level, strategic management process of selecting, designing, and arranging diverse broadcast programmes into a cohesive daily, weekly, or seasonal schedule (grid) to attract and retain target audience demographics.</p>
            <p><strong>Why Programme Format is Crucial to Station Survival:</strong><br>
            A station\'s <em>format</em> is its recognizable sound, structural personality, and pacing (e.g., Urban Contemporary, All-News, Sports Radio). Format is vital because:</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>Audience Identity and Expectation:</strong> In a crowded media market, listeners have zero tolerance for randomness. A clear format assures listeners of what experience they will receive the moment they tune in.</li>
              <li><strong>Advertiser Market Segmentation:</strong> Commercial advertisers do not buy general airtime; they buy specific demographics (e.g., youth, corporate executives). Format delivers a predictable consumer demographic profile to advertisers.</li>
              <li><strong>Brand Differentiation:</strong> Distinguishes the station from rival broadcasters operating on adjacent dial frequencies.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THE 4Ps OF BROADCAST PROGRAMMING AND VIABILITY (15 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-3">
              <li><strong>Product (Content & Programming Output):</strong><br>
              <em>Evaluation:</em> Refers to the intellectual and entertainment quality of the station\'s programming—the music selection, news integrity, storytelling, and charisma of On-Air Personalities (OAPs).<br>
              <em>Impact:</em> High-quality product builds emotional connection and audience loyalty, driving ratings.</li>

              <li><strong>Price (Opportunity Cost & Rate Cards):</strong><br>
              <em>Evaluation:</em> Dual-faceted: For audiences, it represents time and attention spent consuming the broadcast; for advertisers, it represents the commercial rate card charges for 30/60-second commercial spots, hypes, and sponsorships.<br>
              <em>Impact:</em> Competitive rate cards attract sustained corporate advertising expenditure without deterring local businesses.</li>

              <li><strong>Place (Distribution Footprint & Signal Reach):</strong><br>
              <em>Evaluation:</em> The transmission footprint—transmitter kilowatt wattage, FM clear-channel frequencies, placement on pay-TV cable bouquets (DSTV, StarTimes), and digital web streaming apps.<br>
              <em>Impact:</em> Excellent programming is useless if the signal is fuzzy or inaccessible across major population centers.</li>

              <li><strong>Promotion (Brand Publicity & Teasers):</strong><br>
              <em>Evaluation:</em> Promotional tools used to drive tune-in habits—on-air cross-promotional sweepers, highway billboards, social media campaigns, roadshows, and listener contests.<br>
              <em>Impact:</em> Cuts through media noise and maintains top-of-mind brand awareness among viewers and advertisers.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 2',
        title: 'Radio Limitations as Double-Edged Sword & Comparative Scriptwriting',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 80% of diets)',
        scoringGuide: [
          'Part (a): 5 characteristics of radio as inherent limitations (7.5 marks)',
          'Part (b): Technical differences between Radio News Script and TV Script (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: S-T-B-P-S (Blind, Transient, Background, Perishable, Fading); 6 Cs of Radio Writing.',
        questionText: `(a) Radio is often referred to as a "double-edged sword." Identify and discuss five (5) unique characteristics of radio and explain how these same attributes act as inherent limitations. (7.5 Marks)
(b) Writing for the ear differs significantly from writing for the eye. Contrast the technicalities involved in writing a radio news script with those of a television script. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): RADIO\'S CHARACTERISTICS AS INHERENT LIMITATIONS (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Audio-Only Medium (Sightlessness):</strong> Promotes imaginative "theater of the mind", but makes it impossible to convey complex visual spatial demonstrations or graphic evidence.</li>
              <li><strong>Transient and Ephemeral Flow:</strong> Provides instant speed, but messages vanish immediately; listeners cannot pause or re-read missed words on live airwaves.</li>
              <li><strong>Secondary Background Listening:</strong> Highly mobile companion medium, but because listeners are driving or cooking, attention is fragmented, leading to low cognitive recall.</li>
              <li><strong>Perishability of Inventory:</strong> Unsold commercial seconds cannot be warehoused; lost airtime revenue is destroyed forever.</li>
              <li><strong>Vulnerability to Interference:</strong> Radio signals are vulnerable to lightning static, atmospheric fading, and topographical obstructions.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): TECHNICAL CONTRAST: RADIO SCRIPT VS. TELEVISION SCRIPT (7.5 Marks)</h4>
            <div class="tw overflow-x-auto border rounded-lg">
              <table class="w-full text-xs sm:text-sm">
                <thead>
                  <tr class="bg-teal-50 dark:bg-teal-950/40">
                    <th class="p-2 border">Dimension</th>
                    <th class="p-2 border">Radio News Script</th>
                    <th class="p-2 border">Television Script</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2 border font-semibold">Visual vs. Ear</td>
                    <td class="p-2 border">Written strictly for the ear; conversational, rhythmic, uses verbal word-painting.</td>
                    <td class="p-2 border">Written to complement video footage; allows the visual picture to carry the story.</td>
                  </tr>
                  <tr>
                    <td class="p-2 border font-semibold">Page Layout</td>
                    <td class="p-2 border">Single-column continuous prose read top-to-bottom.</td>
                    <td class="p-2 border">Two-column split: Left side (Video cues) / Right side (Spoken audio text).</td>
                  </tr>
                  <tr>
                    <td class="p-2 border font-semibold">Technical Directives</td>
                    <td class="p-2 border">Audio cues: SFX, FADE UNDER, MUSIC BED.</td>
                    <td class="p-2 border">Camera cues: CU, WS, ZOOM, B-ROLL, SUPER, SOT.</td>
                  </tr>
                  <tr>
                    <td class="p-2 border font-semibold">Timing Governance</td>
                    <td class="p-2 border">Governed by spoken word count (130-150 words/min).</td>
                    <td class="p-2 border">Governed by video shot duration and visual cut rhythms.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        number: 'QUESTION 3',
        title: 'Programme Planning Steps & Scheduling Strategies for TREND TV',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 70% of diets)',
        scoringGuide: [
          'Part (a): 5 steps in broadcast programme planning (7.5 marks)',
          'Part (b): 3 scheduling strategies applied to a new TV station (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Research -> Budget -> Concept -> Grid -> Review; Hammocking, Tentpoling, Counter-programming.',
        questionText: `(a) Identify and explain the five (5) major steps involved in the broadcast programme planning process. (7.5 Marks)
(b) A newly licensed television station, TREND TV, aims to capture prime-time viewership in a major metropolitan city. Explain three (3) programme scheduling strategies (such as Hammocking, Tentpoling, or Counter-programming) that its programme director can deploy to achieve this objective. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): FIVE STEPS IN PROGRAMME PLANNING (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Audience Needs & Demographic Research:</strong> Conducting rigorous audience surveys to discover unmet programming desires and media habits within the broadcast footprint.</li>
              <li><strong>Resource & Budget Audit:</strong> Assessing internal studio facilities, camera kits, post-production editing suites, financial resources, and creative personnel.</li>
              <li><strong>Programme Concept Development & Content Sourcing:</strong> Conceptualizing original pilot shows or acquiring external syndication rights for domestic/international programming.</li>
              <li><strong>Strategic Grid Scheduling:</strong> Placing each programme into optimal time slots based on audience daily routines and competitive counter-moves.</li>
              <li><strong>Execution, Monitoring, and Periodic Evaluation:</strong> Transmitting the scheduled content and systematically analyzing audience ratings and advertiser feedback to refine the schedule.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THREE SCHEDULING STRATEGIES FOR TREND TV (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Hammocking:</strong> Placing a new, unproven local program in a time slot situated directly between two established hit shows. Viewers waiting for or finishing the hit shows stay tuned through the new program.</li>
              <li><strong>Tentpoling:</strong> Scheduling TREND TV\'s strongest, most popular flagship show (e.g., an investigative crime thriller or major reality show) in the exact middle of prime-time (8:00 PM), pulling viewers into the weaker programs airing before and after it.</li>
              <li><strong>Counter-Programming:</strong> Airing content that targets an entirely different demographic from that pursued by dominant rival stations in the identical time slot (e.g., airing an energetic sports talk show against a rival station's prime-time soap opera).</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 4',
        title: 'Evolution of Radio in Nigeria (1932-1956) & WNTV to 1992 Deregulation',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 50% of diets)',
        scoringGuide: [
          'Part (a): Radio evolution from 1932 RDS to 1956 NBC (7.5 marks)',
          'Part (b): Launch of WNTV in 1959 and impact of 1992 Deregulation Decree 38 (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: RDS Dec 1, 1932; Awolowo WNTV Oct 31, 1959; IBB Decree 38 of 1992.',
        questionText: `(a) Trace the historical evolution of radio broadcasting in Nigeria from its inception in 1932 (Radio Distribution Service) to the establishment of the Nigerian Broadcasting Corporation (NBC) in 1956. (7.5 Marks)
(b) Discuss the historical significance of the Western Nigeria Television (WNTV) launched in 1959, and analyze how the 1992 deregulation decree transformed the Nigerian broadcasting landscape. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): EVOLUTION OF RADIO IN NIGERIA (1932–1956) (7.5 Marks)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>1932: Radio Distribution Service (RDS):</strong> Radio began in Nigeria on <strong>December 1, 1932</strong>, when the British Colonial Posts and Telegraphs Department established the RDS in Lagos. It was a wired rediffusion system piping BBC shortwave broadcasts via physical cables to wooden speaker boxes in subscribers' residences.</li>
              <li><strong>1951: Nigerian Broadcasting Service (NBS):</strong> In 1951, RDS transitioned into the NBS to produce indigenous Nigerian radio programming across Lagos, Kaduna, Enugu, and Ibadan.</li>
              <li><strong>1956: Nigerian Broadcasting Corporation (NBC):</strong> Established by an Act of Parliament in 1956, the NBC converted the state radio system into an independent public service broadcaster, ending colonial cable dependency.</li>
            </ul>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): WNTV (1959) & THE 1992 DEREGULATION DECREE (7.5 Marks)</h4>
            <p><strong>1. Historical Significance of WNTV (1959):</strong><br>
            Launched on <strong>October 31, 1959</strong>, in Ibadan by Premier Chief Obafemi Awolowo with the motto <em>"First in Africa"</em>, WNTV was the first television station in Africa, predating television in many European countries. It demonstrated regional developmental vision, utilizing television for mass literacy and educational development.</p>

            <p><strong>2. The 1992 Deregulation Watershed (Decree 38 of 1992):</strong><br>
            For 60 years (1932–1992), Nigerian broadcasting was an absolute state monopoly. The promulgation of Decree 38 of 1992 established the National Broadcasting Commission (NBC) and legalized private broadcasting ownership. This revolutionized Nigerian society: it created commercial competition, fostered independent journalism, birthed private broadcast empires (Raypower, AIT, Channels TV), created thousands of creative jobs, and ended the government\'s monopoly over the airwaves.</p>
          </div>
        `
      },
      {
        number: 'QUESTION 5',
        title: 'Broadcast Production Stages & Organogram of Programme Department',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 50% of diets)',
        scoringGuide: [
          'Part (a): 3 main stages of broadcast production (7.5 marks)',
          'Part (b): Organogram of Programme Department + duties of Manager Programmes and Producer (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Pre, Pro, Post; Manager Programmes oversees grid; Producer manages project.',
        questionText: `(a) Detail the three (3) main stages of production in a broadcast studio, highlighting the key tasks performed at each stage. (7.5 Marks)
(b) Using a clear organogram, describe the organizational structure of a typical Programme Department in a broadcast station, outlining the primary duties of the Programme Manager and the Producer. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): THREE MAIN STAGES OF BROADCAST PRODUCTION (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Pre-Production Stage:</strong> The conceptual preparation. Involves scriptwriting, storyboarding, budgeting, casting on-air talent, location scouting, set design, and camera blocking rehearsals.</li>
              <li><strong>Production Stage:</strong> The execution phase where recording or live transmission takes place. Involves camera operation, three-point lighting, audio console balancing, video switching, and directing talent on the studio floor.</li>
              <li><strong>Post-Production Stage:</strong> The assembly phase. Involves non-linear digital video editing, color grading, audio sweetening/dubbing, adding lower-third graphics, master logging, and quality control review.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): ORGANOGRAM AND DUTIES (7.5 Marks)</h4>
            <pre class="org p-3 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 rounded border">
                  +-----------------------------------+
                  |      GENERAL MANAGER / CEO        |
                  +-----------------------------------+
                                    |
                  +-----------------------------------+
                  |   MANAGER PROGRAMMES (PROGRAMMER)  |
                  +-----------------------------------+
                                    |
     +------------------------------+------------------------------+
     |                                                             |
+----+-----------------------+                       +-------------+-------------+
|    EXECUTIVE PRODUCERS     |                       |    CHIEF SCRIPTWRITER /    |
+----------------------------+                       |     CONTINUITY EDITOR     |
     |                                               +---------------------------+
+----+-----------------------+                                     |
|    PROGRAMME PRODUCERS     |                       +-------------+-------------+
+----------------------------+                       |   SCRIPTWRITERS & CONTINUITY|
     |                                               |           ANNOUNCERS      |
+----+-----------------------+                       +---------------------------+
|    STUDIO DIRECTORS        |
+----------------------------+
     |
+----+-----------------------+
|  TALENT / PRESENTERS / OAPs|
+----------------------------+
            </pre>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Manager Programmes:</strong> Directs overall departmental strategy, oversees program schedule design, enforces NBC Code regulatory compliance, audits ratings, and manages program acquisition budgets.</li>
              <li><strong>Programme Producer:</strong> The project manager for a specific show; handles talent contracts, script sign-offs, studio recording logistics, and directs post-production edits to completion.</li>
            </ul>
          </div>
        `
      },
      {
        number: 'QUESTION 6',
        title: 'Broadcasting vs. Narrowcasting vs. Cablecasting & Audience Research',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 50% of diets)',
        scoringGuide: [
          'Part (a): Differentiating Broadcasting, Narrowcasting, and Cablecasting with examples (7.5 marks)',
          'Part (b): Why audience research is essential + 1 quantitative and 1 qualitative method (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Open airwaves, Niche, Cable; Ratings surveys (Quantitative) vs. Focus Groups (Qualitative).',
        questionText: `(a) Differentiate between Broadcasting, Narrowcasting, and Cablecasting, providing two (2) clear examples of each. (7.5 Marks)
(b) Why is audience research essential for broadcast programming? Briefly explain one quantitative and one qualitative research method used by station managers to gather audience feedback. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): BROADCASTING VS. NARROWCASTING VS. CABLECASTING (7.5 Marks)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Broadcasting:</strong> Transmitting unencrypted audio/visual signals via open terrestrial airwaves for simultaneous public reception by any receiver within range. <em>Examples:</em> Radio Nigeria (FRCN), NTA Network.</li>
              <li><strong>Narrowcasting:</strong> Transmitting programming targeted to a specific, restricted demographic or niche audience. <em>Examples:</em> Campus radio stations (e.g., UNILAG 103.1 FM), internal closed-circuit hospital networks.</li>
              <li><strong>Cablecasting:</strong> Distributing broadcast content directly to subscribed households through physical coaxial or fiber-optic cables. <em>Examples:</em> DSTV cable television services, fiber-optic IPTV setups.</li>
            </ul>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): AUDIENCE RESEARCH AND METHODS (7.5 Marks)</h4>
            <p><strong>Importance:</strong> Audience research provides empirical proof of listenership/viewership demographics and ratings. Without it, station programmers schedule in the dark, and corporate advertisers refuse to buy commercial rate card airtime.</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Quantitative Method (Ratings Surveys / Questionnaires):</strong> Distributing standardized survey instruments to a representative sample of homes to calculate statistical Reach, Share, and Gross Rating Points (GRPs).</li>
              <li><strong>Qualitative Method (Focus Group Discussions - FGDs):</strong> Convening guided sessions of 6–10 representative viewers to probe in-depth emotional reactions, nuances, and attitudes toward specific show hosts and storylines.</li>
            </ul>
          </div>
        `
      }
    ]
  },
  memorizationAids: {
    title: 'MAC 343 High-Yield Memorization Mnemonics',
    items: [
      {
        acronym: 'S-T-B-P-S',
        standsFor: 'Sightlessness, Transience, Background, Perishability, Signal fading',
        usage: '5 characteristics of radio that act as its limitations.'
      },
      {
        acronym: 'H-T-S-C-B',
        standsFor: 'Hammocking, Tentpoling, Stripping, Counter-programming, Bridging',
        usage: '5 major programme scheduling strategies.'
      },
      {
        acronym: '6 Cs',
        standsFor: 'Clarity, Conciseness, Conversational, Correctness, Compassion, Concreteness',
        usage: 'Guiding parameters for writing an effective broadcast script.'
      },
      {
        acronym: '1932-1959-1992',
        standsFor: '1932 (RDS), 1959 (WNTV), 1992 (NBC Deregulation)',
        usage: '3 seminal milestone dates in Nigerian broadcasting history.'
      }
    ]
  }
};
