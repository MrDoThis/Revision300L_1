import { CourseData } from './types';

export const mac313Data: CourseData = {
  code: 'MAC 313',
  title: 'Critical Writing and Reviewing',
  creditUnits: 2,
  timeAllowed: '2 Hours',
  examInstructions: 'Answer Question One (1) (Compulsory – 30 Marks) and any other two (2) questions (20 Marks each).',
  overview: 'Equips students with the intellectual discipline, evaluative frameworks, aesthetic theories, and journalistic craftsmanship necessary to analyze, appreciate, review, and critically assess artistic, literary, and media works.',
  frequencyAnalysis: {
    totalSetsAnalyzed: 6,
    summary: 'Past question analysis reveals examiners repeatedly return to 6 core areas: (1) Definitions and Pope\'s 4 Meanings of Criticism (80%), (2) The Authoritarian vs. Impressionistic Theories (80%), (3) Critical Writing vs. other journalistic genres (80%), (4) Oscar Thompson\'s Direct vs. Indirect Data (75%), (5) Functions of Criticism (75%), and (6) Reviewer vs. Critic operational contrast (80%).',
    matrix: [
      {
        topic: 'Meaning, Nature & Pope\'s (2002) Four Meanings of Criticism',
        frequency: '5 of 6 Sets (83%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Contrasting university-level critical inquiry against vulgar fault-finding; Rob Pope\'s fourfold typology and C.T. Winchester\'s definition.',
        likelyQuestions: [
          'Define critical writing and discuss the four basic meanings of criticism identified by Pope (2002).',
          'What does it mean to be "critical" in university-level media studies?'
        ],
        memoryAnchor: 'ACRONYM: F-A-I-E (Fault-finding, Analyzing, Interpreting, Evaluating).'
      },
      {
        topic: 'Critical Writing vs. Other Journalistic Forms',
        frequency: '5 of 6 Sets (83%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Drawing clear lines between critical appraisal and objective news, human-interest features, institutional editorials, and broadcast commentaries.',
        likelyQuestions: [
          'Compare and contrast critical writing with traditional news writing and feature writing.',
          'Differentiate critical writing from editorials and broadcast commentaries.'
        ],
        memoryAnchor: 'ACRONYM: N-E-F-C (News = facts; Editorial = corporate stance; Feature = human interest; Commentary = anomaly spotlight).'
      },
      {
        topic: 'Theories of Criticism (Authoritarian vs. Impressionistic)',
        frequency: '5 of 6 Sets (83%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Evaluating objective classical/moral canons against Anatole France\'s subjective "adventures of the soul among masterpieces".',
        likelyQuestions: [
          'Differentiate between the Authoritarian Theory and the Impressionistic Theory of criticism.',
          'Explain Scott\'s (1977) five approaches to artistic criticism (Moral, Psychological, Sociological, Formalistic, Archetypal).'
        ],
        memoryAnchor: 'ACRONYM: A-vs-I (Authoritarian = Rules & Past; Impressionistic = Soul & Subjective Sensibility).'
      },
      {
        topic: 'Components of Criticism: Direct vs. Indirect Data',
        frequency: '4 of 6 Sets (67%)',
        probability: 'HIGH',
        examinerFocus: 'Oscar Thompson\'s triad of Direct Data (Material, Form, Workmanship) versus extrinsic Indirect Data (intention, career, setting) and the risk of bias.',
        likelyQuestions: [
          'Discuss the three major components of criticism categorized under Direct Data (Material, Form, Workmanship).',
          'Explain what Indirect Data entails and state how it can both assist and mislead a critic.'
        ],
        memoryAnchor: 'ACRONYM: M-F-W (Material, Form, Workmanship) vs. I-O-S (Intention, Output, Setting).'
      },
      {
        topic: 'The Reviewer vs. The Critic Operational Comparison',
        frequency: '5 of 6 Sets (83%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Contrasting the hurried news reporter evaluating a single event for ticket buyers against the meditating philosopher shaping cultural standards.',
        likelyQuestions: [
          'Distinguish clearly between a reviewer and a critic, highlighting their contrasting operational philosophies and virtues.',
          'Analyze why the reviewer focuses on topicality and speed while the critic focuses on meditation and absolute truth.'
        ],
        memoryAnchor: 'ACRONYM: R-vs-C (Reviewer = Speed, Reporter, Consumer Guide; Critic = Meditation, Philosopher, Cultural Shaper).'
      }
    ]
  },
  modules: [
    {
      id: 'mac313-m1',
      title: 'MODULE 1: Foundations of Critical Writing & Thinking',
      questions: [
        {
          id: 'q1-1',
          question: 'Define critical writing, examine Rob Pope’s (2002) four meanings of criticism, and analyze the seven shared skills between critical thinking and critical writing.',
          frequencyTag: '80% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: F-A-I-E (Meanings) & A-S-I-E-I-E-S (Skills)',
          keyTakeaways: [
            'Winchester: "Intelligent appreciation of art, and just estimate of its value and rank."',
            'Pope\'s 4 meanings: Fault-finding (negative), Analyzing (neutral breakdown), Interpreting (meaning), Evaluating (worth).',
            '7 Shared skills: Analysis, Synthesis, Interpretation, Evaluation, Inference, Explanation, Self-regulation.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Scholarly Definition of Criticism and Critical Writing:</strong><br>
              In mass communication and aesthetic philosophy, criticism is not malicious censure. C.T. Winchester classicly defines it as <em>"the intelligent appreciation of any work of art, and by consequence, the just estimate of its value and rank."</em> Critical writing is the disciplined journalistic and literary prose that evaluates, interprets, and communicates the aesthetic merit and societal significance of creative works based on established standards.</p>

              <p><strong>2. Rob Pope’s (2002) Four Basic Meanings of Criticism:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Finding Fault and Pulling to Pieces (Negative Sense):</strong> The everyday, unreflective perception of criticism as destructive attacks, spotting defects, or debunking an artist's effort.</li>
                <li><strong>Analyzing and Taking Apart (Neutral Sense):</strong> The rigorous intellectual dissection of a creative work into its constitutive structural, thematic, and stylistic parts to understand how it functions.</li>
                <li><strong>Interpreting Meaning (Hermeneutic Sense):</strong> Unpacking the hidden symbols, cultural subtexts, metaphors, and thematic intentions to make the work accessible to the public.</li>
                <li><strong>Evaluating Worth (Judgmental Sense):</strong> Making a reasoned, evidence-based determination of the relative or absolute artistic, intellectual, and moral value of the production.</li>
              </ol>

              <p><strong>3. Seven Core Skills Shared by Critical Thinking and Critical Writing (Cottrell, 2005; Allen, 2004):</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>Analysis:</strong> Deconstructing complex texts or artistic performances into fundamental elements (plot, character, lighting, dialogue).</li>
                <li><strong>Synthesis:</strong> Integrating insights from historical context, artistic theory, and contemporary culture to construct a coherent critique.</li>
                <li><strong>Interpretation:</strong> Discernment of subtexts and thematic significance beneath literal surfaces.</li>
                <li><strong>Evaluation:</strong> Testing the validity of arguments, artistic coherence, and execution quality against benchmarks.</li>
                <li><strong>Inference:</strong> Drawing logical, substantiated conclusions from observable artistic evidence.</li>
                <li><strong>Explanation:</strong> Articulating clear, persuasive, and logically organized prose to justify one\'s judgment.</li>
                <li><strong>Self-Regulation (Metacognition):</strong> Monitoring and correcting one\'s own subjective prejudices and emotional states to preserve objective fairness.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac313-m2',
      title: 'MODULE 2: Functions, Theories, and Approaches to Criticism',
      questions: [
        {
          id: 'q2-1',
          question: 'Discuss Oscar Thompson\'s five functions of criticism and contrast the Authoritarian Theory with the Impressionistic Theory.',
          frequencyTag: '80% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: I-I-P-A-P (Functions: Information, Influence, Promotion, Advertising, Prestige)',
          keyTakeaways: [
            'Oscar Thompson\'s 5 Functions: Information, Influence (guide), Promotion, Advertising (revenue), Prestige.',
            'Authoritarian Theory: Fixed, objective historical and moral canons.',
            'Impressionistic Theory: Anatole France\'s "adventures of the soul among masterpieces" - subjective sensibility.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Oscar Thompson’s Five Functions of Criticism (in Wolseley, 1959):</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Function of Information (The Mirror):</strong> Providing an accurate, objective journalistic factual report of what was exhibited, performed, or published (who participated, what was staged, venue, running time).</li>
                <li><strong>Function of Influence (Consumer Guidance):</strong> Acting as a trusted cultural advisor by telling consumers whether a book, play, or film is worth their time, intellectual attention, and financial investment.</li>
                <li><strong>Function of Promotion (Aesthetic Education):</strong> Elevating societal taste, cultivating public appreciation for high artistic standards, and celebrating genuine creative talent.</li>
                <li><strong>Function of Advertising (Media Economics):</strong> Attracting high-value arts, book, and entertainment corporate advertisements, generating direct commercial revenue for the publication.</li>
                <li><strong>Function of Prestige:</strong> Conferring intellectual distinction, cultural authority, and institutional credibility upon the newspaper or broadcast station among educated elites.</li>
              </ol>

              <p><strong>2. Authoritarian vs. Impressionistic Theories of Criticism:</strong></p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>The Authoritarian Theory (Objective Traditionalism):</strong> Posits that timeless, universal, and immutable canons of excellence exist (derived from classical antiquity, Aristotle\'s Poetics, biblical morality, or academic traditions). The authoritarian critic judges a new work against these rigid historical templates, condemning innovations that violate established rules of harmony, order, and decorum.</li>
                <li><strong>The Impressionistic Theory (Subjective Relativism):</strong> Rejects dogma, fixed rules, and historical canons. Guided by Anatole France’s famous dictum that the critic simply <em>"narrates the adventures of his soul among masterpieces,"</em> it evaluates art purely based on the personal emotional, sensory, and psychological resonance the work evokes within the critic\'s unique sensibility.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac313-m3',
      title: 'MODULE 3: Components of Criticism: Direct vs. Indirect Data',
      questions: [
        {
          id: 'q3-1',
          question: 'Deconstruct Oscar Thompson’s classification of Direct Data (Material, Form, Workmanship) versus Indirect Data, explaining the operational pitfalls of the latter.',
          frequencyTag: '75% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: Direct = M-F-W (Material, Form, Workmanship); Indirect = I-O-S (Intention, Output, Setting)',
          keyTakeaways: [
            'Direct Data: Intrinsically present in the art object itself.',
            'Material: The physical substance (canvas, text, stage, pigments, celluloid).',
            'Form: Structural label and genre organization (sonnet, tragedy, documentary).',
            'Workmanship: Technical mastery, inspiration, execution skill.',
            'Indirect Data: Extrinsic context (biography, setting, stated goals); helpful for context but dangerous if it blinds the critic to flawed workmanship.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>American music and arts critic Oscar Thompson formulated a seminal framework dividing critical appraisal data into two distinct categories: <strong>Direct Data</strong> (intrinsic) and <strong>Indirect Data</strong> (extrinsic):</p>

              <h4 class="font-bold text-teal-700 dark:text-teal-400">1. Direct Data (The Intrinsic Work Itself):</h4>
              <p>Everything directly, physically, and unalterably present in the work of art:</p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>The Material:</strong> The raw physical medium chosen by the creator (e.g., words and syntax in literature; oil pigments and canvas in painting; marble in sculpture; orchestral instrumentation in music; physical stage and actors in drama). The critic asks: Is the chosen medium appropriate for the theme?</li>
                <li><strong>The Form:</strong> The structural architecture, genre classification, and organizational design (e.g., three-act tragedy, sonata, sonnet, documentary, comedy). How do the exposition, climax, and denouement harmonize?</li>
                <li><strong>The Workmanship:</strong> The craftsmanship, execution skill, aesthetic imagination, and technical mastery with which the artist handles the material within the chosen form. This is the ultimate crucible of artistic evaluation.</li>
              </ol>

              <h4 class="font-bold text-teal-700 dark:text-teal-400 mt-4">2. Indirect Data (Extrinsic Factors):</h4>
              <p>Information originating outside the physical boundaries of the art piece:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>The Artist’s Stated Intention:</strong> What the creator claimed they intended to achieve in press releases or interviews.</li>
                <li><strong>The Artist’s Career Output & Reputation:</strong> The creator\'s past pedigree, fame, awards, and position within their oeuvre.</li>
                <li><strong>Socio-Historical Setting:</strong> The political, economic, and biographical pressures under which the work was produced.</li>
              </ul>
              <p><strong>The Critical Pitfall:</strong> While indirect data illuminates context, relying too heavily on it is dangerous. A prominent Nobel laureate's name can hypnotize a lazy critic into praising a dull, flawed book (Halo Effect), or an obscure beginner\'s work may be dismissed unfairly. Direct Data must always supersede Indirect Data.</p>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac313-m4',
      title: 'MODULE 4: The Reviewer vs. The Critic & Article Craftsmanship',
      questions: [
        {
          id: 'q4-1',
          question: 'Contrast the professional roles, operational virtues, and audience utilities of the Reviewer versus the Critic.',
          frequencyTag: '80% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: Reviewer = Speed, Reporter, News-peg; Critic = Meditation, Philosopher, History',
          keyTakeaways: [
            'Reviewer: Next-day deadline, journalistic reporter, immediate buyer guidance.',
            'Critic: Delayed publication, aesthetic philosopher, historical longevity.',
            'Reviewer\'s virtues: Speed, wit, accuracy, concise readability.',
            'Critic\'s virtues: Profound meditation, historical context, truth, enduring standards.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>While often conflated in colloquial speech, journalism scholarship establishes a clear distinction between the <strong>Reviewer</strong> and the <strong>Critic</strong>:</p>
              <div class="tw overflow-x-auto border rounded-lg">
                <table class="w-full text-xs sm:text-sm">
                  <thead>
                    <tr class="bg-teal-50 dark:bg-teal-950/40">
                      <th class="p-2 border">Dimension</th>
                      <th class="p-2 border">The Reviewer</th>
                      <th class="p-2 border">The Critic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="p-2 border font-semibold">Primary Identity</td>
                      <td class="p-2 border">Objective reporter covering a timely cultural news event.</td>
                      <td class="p-2 border">Philosophical analyst and aesthetic scholar.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Production Timeframe</td>
                      <td class="p-2 border">Immediate / Next-day publication under tight press deadlines.</td>
                      <td class="p-2 border">Delayed publication after deep meditation and extensive research.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Scope of Appraisal</td>
                      <td class="p-2 border">Single specific performance, premiere, or newly published book.</td>
                      <td class="p-2 border">Entire body of work, artist\'s full career, or broad aesthetic movement.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Core Virtues</td>
                      <td class="p-2 border">Topicality, journalistic speed, punchy wit, factual accuracy.</td>
                      <td class="p-2 border">Deep philosophical insight, historical sense, profound truth.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Reader Utility</td>
                      <td class="p-2 border">Practical guidance: "Should I buy this ticket or novel this weekend?"</td>
                      <td class="p-2 border">Intellectual guidance: "How does this work alter our understanding of human existence?"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          `
        }
      ]
    }
  ],
  tables: [
    {
      title: 'Genre-Specific Criteria for Reviewing Arts and Media',
      headers: ['Art Genre', 'Primary Evaluation Focal Points', 'Technical Traps to Avoid'],
      rows: [
        ['Books / Literature', 'Plot universality, character development, prose style, thematic philosophy, historical rigor', 'Merely summarizing the entire plot; committing plot spoilers; ignoring syntax'],
        ['Stage Drama', 'Script originality, dramatic conflict, stage direction, acting conviction, set design & lighting', 'Confusing the actor with the character; neglecting technical stage acoustics'],
        ['Motion Pictures', 'Cinematography, mobile framing, pacing, acting, sound design, thematic coherence', 'Focusing solely on celebrity actors; ignoring editing and directorial vision'],
        ['Fine Arts (Painting)', 'Color harmony, composition, brushwork texture, lighting, presentation, aesthetic depth', 'Expecting photographic realism in abstract works; ignoring exhibition space'],
        ['Music / Albums', 'Acoustic balance, melodic invention, vocal execution, mixing/mastering, lyrical depth', 'Basing reviews on genre prejudices; ignoring sound engineering quality']
      ]
    }
  ],
  practiceExam: {
    heading: 'PRACTICE EXAMINATION PAPER (SIMULATED FOR FINAL REVISION)',
    instructions: 'Answer Question One (1) (Compulsory – 30 Marks) and any other two (2) questions (20 Marks each). Total: 70 Marks.',
    questions: [
      {
        number: 'QUESTION 1',
        title: 'Foundations of Criticism, Four Meanings & Critical Thinking Skills',
        marks: '30 Marks',
        isCompulsory: true,
        frequencyNote: 'High Frequency (Core compulsory question across 80% of past papers)',
        scoringGuide: [
          'Part (a): Definition of critical writing + Pope\'s 4 meanings (3.75 marks each = 15 marks)',
          'Part (b): 5 critical thinking skills shared with critical writing (3 marks each = 15 marks)'
        ],
        mnemonic: 'Recall Anchors: Pope = F-A-I-E; Thinking = A-S-I-E-E.',
        questionText: `(a) Define critical writing and discuss the four basic meanings of criticism identified by Pope (2002). (15 Marks)
(b) Examine five (5) core skills that critical thinking shares with critical writing as outlined by Cottrell (2005) and Allen (2004). (15 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): DEFINITION AND POPE\'S FOUR MEANINGS OF CRITICISM (15 Marks)</h4>
            <p><strong>Definition of Critical Writing:</strong><br>
            Critical writing is the disciplined, intellectually rigorous journalistic and academic prose that analyzes, appreciates, interprets, and evaluates creative works (books, plays, films, visual arts, and media broadcasts) based on recognizable aesthetic criteria and standards of excellence (Winchester; Wolseley, 1973). It is not an exercise in destructive ridicule; rather, it is an informed dialogue with an artistic production that guides public taste.</p>

            <p><strong>Rob Pope’s (2002) Four Basic Meanings of Criticism:</strong></p>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Finding Fault and Pulling to Pieces (Negative Sense):</strong> The vulgar, colloquial conception of criticism that focuses solely on picking errors, spotting defects, exposing blunders, and belittling the creator. Academic criticism rejects this reductionist perspective.</li>
              <li><strong>Analyzing and Taking Apart (Neutral Structural Sense):</strong> The objective deconstruction of a creative work into its component elements (examining how plot, diction, characterization, cinematography, or brushwork interact) without premature judgment.</li>
              <li><strong>Interpreting Meaning and Symbolism (Hermeneutic Sense):</strong> The intellectual unpacking of underlying subtexts, allegories, cultural motifs, and thematic messages to uncover what the work signifies for human life.</li>
              <li><strong>Evaluating Relative or Absolute Worth (Judgmental Sense):</strong> Synthesizing analytical and interpretative findings to rate the work\'s quality, relevance, craftsmanship, and aesthetic ranking compared to peer works.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): FIVE CORE SKILLS SHARED BY CRITICAL THINKING & WRITING (15 Marks)</h4>
            <p>Critical thinking is defined by John Dewey (1933) as <em>active, persistent, and careful consideration of any belief or supposed form of knowledge in light of the grounds that support it</em>. Critical writing directly reflects these cognitive operations (Cottrell, 2005; Allen, 2004):</p>

            <ol class="list-decimal pl-5 space-y-3">
              <li><strong>Analytical Skill:</strong> The cognitive capacity to break an artistic whole into components, distinguishing between essential plot drivers and peripheral gimmicks. In writing, this skill allows the critic to structure their argument methodically.</li>
              <li><strong>Synthetic Skill:</strong> The ability to combine disparate observations, historical precedents, and theoretical frameworks into an original, coherent critical thesis.</li>
              <li><strong>Interpretative Skill:</strong> The discernment required to decode metaphors, non-linear narrative devices, and visual motifs, translating abstract artistic codes into accessible prose.</li>
              <li><strong>Evaluative Skill:</strong> The capacity to assess artistic merit based on substantiated criteria rather than arbitrary personal whim or fleeting mood swings.</li>
              <li><strong>Explanatory & Argumentative Skill:</strong> The rhetorical ability to present ideas in clear, cogent, logical language, using the deductive (general principle to specific evidence) or inductive method to persuade readers.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 2',
        title: 'Functions of Criticism & Theoretical Frameworks',
        marks: '20 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 5 of 6 diets)',
        scoringGuide: [
          'Part (a): 5 functions of criticism according to Oscar Thompson (2 marks each = 10 marks)',
          'Part (b): Authoritarian vs. Impressionistic Theory contrasted (5 marks each = 10 marks)'
        ],
        mnemonic: 'Recall Anchors: Functions = I-I-P-A-P; Theories = Strict Rules vs. Free Soul.',
        questionText: `(a) According to Oscar Thompson, criticism performs several key functions. Identify and discuss five (5) major functions of criticism in mass communication. (10 Marks)
(b) Differentiate between the Authoritarian Theory and the Impressionistic Theory of criticism. (10 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): OSCAR THOMPSON\'S FIVE FUNCTIONS OF CRITICISM (10 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>The Information Function (Journalistic Mirror):</strong> Holding up an objective factual mirror to the creative work, detailing who staged it, what genre it belongs to, where it took place, and the raw factual particulars for readers who were absent.</li>
              <li><strong>The Influence Function (Consumer Guidance):</strong> Providing informed guidance that saves the consumer from squandering time, effort, and money on shoddy artistic products while steering them toward enriching productions.</li>
              <li><strong>The Promotion Function (Aesthetic Elevation):</strong> Developing a discerning public taste by spotlighting excellence, encouraging emerging creative talent, and nurturing cultural literacy in society.</li>
              <li><strong>The Advertising Function (Commercial Viability):</strong> Generating commercial advertising revenue for media platforms from publishing houses, movie studios, art galleries, and theatrical troupes.</li>
              <li><strong>The Prestige Function (Institutional Distinction):</strong> Conferring high cultural prestige, editorial authority, and academic credibility on the publication, attracting educated demographics and influential opinion leaders.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): AUTHORITARIAN VS. IMPRESSIONISTIC THEORY (10 Marks)</h4>
            <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded border border-slate-200 dark:border-slate-700 space-y-2">
              <p><strong>The Authoritarian Theory:</strong><br>
              Founded on the conviction that immutable, objective canons of excellence govern every artistic genre. The critic acts as an uncompromising judge applying historical, classical, and moral templates. Works are measured against ancient archetypes (Aristotle\'s dramatic unities, classical balance); any deviation is condemned as artistic failure. The critic’s personal feelings are strictly subordinated to established rules.</p>

              <p><strong>The Impressionistic Theory:</strong><br>
              Rejects dogmatic rules and historical models. Articulated by French literary figure Anatole France, this theory asserts that genuine art is a subjective emotional experience: <em>"The good critic is he who narrates the adventures of his soul among masterpieces."</em> The impressionistic critic does not pretend to hold objective mathematical yardsticks, but rather articulates the unique sensory, psychological, and visceral impressions evoked by the artwork.</p>
            </div>
          </div>
        `
      },
      {
        number: 'QUESTION 3',
        title: 'Direct Data (Material, Form, Workmanship) vs. Indirect Data',
        marks: '20 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 4 of 6 diets)',
        scoringGuide: [
          'Part (a): 3 components of Direct Data (3.33 marks each = 10 marks)',
          'Part (b): Indirect Data explanation, utility, and pitfalls (10 marks)'
        ],
        mnemonic: 'Recall Anchors: Direct = M-F-W; Indirect = I-O-S; Pitfall = Halo Effect / Bias.',
        questionText: `(a) Discuss the three (3) major components of criticism categorized under Direct Data (Material, Form, and Workmanship). (10 Marks)
(b) Explain what Indirect Data entails in critical writing and state how it can both assist and mislead a critic. (10 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): DIRECT DATA COMPONENTS (10 Marks)</h4>
            <p>Direct Data encompasses the intrinsic, observable elements physically present inside the artistic object:</p>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>The Material:</strong> The physical, linguistic, or sonic medium chosen by the artist—the vocabulary, syntax, and phrasing in literature; marble, bronze, or clay in sculpture; oil paints and canvas in painting; lighting, actors, and dialogue in film. The critic evaluates whether the medium was suited to the thematic message.</li>
              <li><strong>The Form:</strong> The architectural framework, structural genre classification, and structural balance—sonnet, tragedy, documentary, opera, novel. The critic evaluates how chapters, scenes, stanzas, and pacing hang together to sustain artistic unity.</li>
              <li><strong>The Workmanship:</strong> The supreme test of artistic execution—the technical competence, creative imagination, skill, and inspiration displayed in manipulating the material within the chosen form. Flawless material and form cannot salvage mediocre workmanship.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): INDIRECT DATA: ASSISTANCE AND PITFALLS (10 Marks)</h4>
            <p><strong>Definition:</strong> Indirect Data refers to extrinsic circumstances originating outside the physical artwork—including the author\'s declared intention, biographical background, past award pedigree, and socio-historical setting.</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>How it Assists the Critic:</strong> It provides rich interpretive context, illuminating subtle historical allusions, political metaphors, and cultural symbolism that would otherwise appear bizarre or opaque.</li>
              <li><strong>How it Misleads the Critic:</strong> It creates cognitive bias. A critic infatuated with a celebrated artist\'s reputation (the "Halo Effect") may rationalize evident flaws as deep genius, while an unknown author\'s masterpiece is dismissed. A critic must ensure that Direct Data always serves as the primary court of judgment.</li>
            </ul>
          </div>
        `
      },
      {
        number: 'QUESTION 4',
        title: 'Critical Writing vs. News & Features & Steps in Article Writing',
        marks: '20 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 5 of 6 diets)',
        scoringGuide: [
          'Part (a): Comparison of Critical Writing vs. Traditional News and Feature Writing (10 marks)',
          'Part (b): 4 sequential steps in writing a professional critical article (10 marks)'
        ],
        mnemonic: 'Recall Anchors: News = Facts; Features = Story; Critical = Evaluative Appraisal.',
        questionText: `(a) Compare and contrast critical writing with traditional news writing and feature writing. (10 Marks)
(b) Outline and discuss four (4) essential steps involved in writing a professional critical article. (10 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): COMPARATIVE ANALYSIS OF JOURNALISTIC GENRES (10 Marks)</h4>
            <div class="tw overflow-x-auto border rounded-lg">
              <table class="w-full text-xs sm:text-sm">
                <thead>
                  <tr class="bg-teal-50 dark:bg-teal-950/40">
                    <th class="p-2 border">Criterion</th>
                    <th class="p-2 border">Critical Writing</th>
                    <th class="p-2 border">Traditional News Writing</th>
                    <th class="p-2 border">Feature Writing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2 border font-semibold">Primary Goal</td>
                    <td class="p-2 border">Evaluate, appreciate, interpret, and guide taste.</td>
                    <td class="p-2 border">Report factual events accurately and objectively.</td>
                    <td class="p-2 border">Entertain, explore human-interest, and provide colorful background.</td>
                  </tr>
                  <tr>
                    <td class="p-2 border font-semibold">Subjectivity</td>
                    <td class="p-2 border">High; informed opinion backed by criteria.</td>
                    <td class="p-2 border">Strictly neutral; personal opinion strictly prohibited.</td>
                    <td class="p-2 border">Moderate; narrative, colorful, and descriptive style.</td>
                  </tr>
                  <tr>
                    <td class="p-2 border font-semibold">Core Focus</td>
                    <td class="p-2 border">The artistic merits of the creator\'s finished output.</td>
                    <td class="p-2 border">Raw occurrence (Who, What, When, Where, Why).</td>
                    <td class="p-2 border">The human personality, mood, and lifestyle background.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): FOUR STEPS IN WRITING A CRITICAL ARTICLE (10 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Conceptualization & Topic Formulation:</strong> The critic identifies an aesthetic pattern, common theme, or significant career milestone that warrants sustained intellectual interrogation rather than a quick event summary.</li>
              <li><strong>Deep Immersion, Research, and Data Gathering:</strong> Extensive note-taking during performances, multiple readings of the text, historical cross-referencing, and researching peer critical literature.</li>
              <li><strong>Structuring the Outline (Deductive / Inductive Design):</strong> Organizing arguments logically—grouping supporting evidence, structuring comparative paragraphs, and selecting direct quotations.</li>
              <li><strong>Drafting, Polishing, and Ethical Vetting:</strong> Writing in active voice with concise sentences, eliminating trite clichés and avoiding libelous ad-hominem attacks on the artist.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 5',
        title: 'Reviewer vs. Critic & Key Questions in Book Reviewing',
        marks: '20 Marks',
        isCompulsory: false,
        frequencyNote: 'High Frequency (Appeared in 4 of 6 diets)',
        scoringGuide: [
          'Part (a): Reviewer vs. Critic contrast (10 marks)',
          'Part (b): 5 critical questions in book reviewing (10 marks)'
        ],
        mnemonic: 'Recall Anchors: Reviewer = Fast Reporter; Critic = Deep Scholar; Book = Facts, Philosophy, Style, Novelty, Humanity.',
        questionText: `(a) Distinguish clearly between a reviewer and a critic, highlighting their contrasting operational philosophies and virtues. (10 Marks)
(b) Discuss five (5) critical considerations or questions a reviewer must address when evaluating a book or historical writing. (10 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): REVIEWER VS. CRITIC (10 Marks)</h4>
            <p><strong>The Reviewer:</strong> Operates fundamentally as a specialized, objective cultural reporter. Working under immediate publication deadlines, the reviewer attends a premiere, opening night, or book launch and swiftly produces a concise, readable account. Their primary virtues are <em>topicality, speed, wit, and descriptive accuracy</em>. The reviewer’s functional utility is to help ordinary consumers decide whether to purchase a ticket or read a book that week.</p>
            <p><strong>The Critic:</strong> Operates as a philosopher, aesthetic theorist, and cultural historian. Publishing long after the event, the critic examines an artist’s complete body of work or an entire movement. Their virtues are <em>deep meditation, profound philosophical insight, historical depth, and absolute dedication to aesthetic truth</em>. The critic’s utility is to shape enduring artistic standards and elevate the cultural conscience of society.</p>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): FIVE KEY QUESTIONS IN BOOK REVIEWING (10 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Does the Book Establish Factual Accuracy Through Sound Method?</strong> For historical or non-fiction works, has the author corroborated primary sources, or does the book rely on hearsay and sloppy attribution?</li>
              <li><strong>Does the Work Embody an Enduring Philosophy or Perspective?</strong> Does the book transcend transient, sensationalist trivia and grapple with deeper, enduring truths of human life?</li>
              <li><strong>Is the Writing Style Lucid, Elegant, and Appropriate?</strong> Does the prose flow with clarity and precision, or is it bogged down by bloated jargon and convoluted syntax?</li>
              <li><strong>Does the Book Present Fresh Data or Merely Hackwork?</strong> Does the author offer original interpretations, or does the volume merely repackage stale material for commercial exploitation?</li>
              <li><strong>Does the Author Connect with Universal Human Questions?</strong> Does the narrative illuminate universal emotional, ethical, or social dilemmas that resonate with readers across diverse cultures?</li>
            </ol>
          </div>
        `
      }
    ]
  },
  memorizationAids: {
    title: 'MAC 313 High-Yield Memorization Mnemonics',
    items: [
      {
        acronym: 'F-A-I-E',
        standsFor: 'Fault-finding, Analyzing, Interpreting, Evaluating',
        usage: 'Recall Rob Pope\'s (2002) 4 basic meanings of criticism.'
      },
      {
        acronym: 'I-I-P-A-P',
        standsFor: 'Information, Influence, Promotion, Advertising, Prestige',
        usage: 'Oscar Thompson\'s 5 major functions of criticism.'
      },
      {
        acronym: 'M-F-W',
        standsFor: 'Material, Form, Workmanship',
        usage: 'Oscar Thompson\'s 3 components of Direct Data in critical appraisal.'
      },
      {
        acronym: 'A-vs-I',
        standsFor: 'Authoritarian (Rules/Past) vs. Impressionistic (Soul/Sensibility)',
        usage: 'Contrasting the two major theoretical schools of criticism.'
      }
    ]
  }
};
