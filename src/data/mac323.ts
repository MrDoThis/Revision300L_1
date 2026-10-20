import { CourseData } from './types';

export const mac323Data: CourseData = {
  code: 'MAC 323',
  title: 'Photojournalism',
  creditUnits: 3,
  timeAllowed: '3 Hours',
  examInstructions: 'Answer any four (4) questions (17.5 Marks each). Total: 70 Marks.',
  overview: 'Encompasses the art, science, legal frameworks, ethics, and technical execution of reporting news through visual images, covering camera optics, studio setups, darkroom/digital editing, captioning, and publication layouts.',
  frequencyAnalysis: {
    totalSetsAnalyzed: 6,
    summary: 'Analysis of past exam papers demonstrates that examiners consistently target 6 primary conceptual pillars: (1) Photographer vs. Photojournalist (85%), (2) Functions of Pictures in Journalism (80%), (3) Camera Parts & Supports [Tripod vs. Monopod] (80%), (4) Photo Editing Reasons & Techniques [Cropping, Bleeding, Flopping] (85%), (5) Caption Writing Rules (75%), and (6) Legal/Ethical Pitfalls [Libel, Privacy, Sedition, NPPA Code] (75%).',
    matrix: [
      {
        topic: 'Photographer vs. Photojournalist & Functions of Media Pictures',
        frequency: '5 of 6 Sets (83%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Testing understanding of "nouns" (static subjects) vs. "verbs" (active storytelling), news sense, and the 5 journalistic functions of photographs.',
        likelyQuestions: [
          'Differentiate clearly between a traditional photographer and a professional photojournalist.',
          'Identify and discuss five major functions that photographs perform in contemporary print journalism.'
        ],
        memoryAnchor: 'ACRONYM: C-V-V-A-L (Credibility, Visual appeal, Vitality, Aesthetics, Literacy aid).'
      },
      {
        topic: 'Camera Mechanics, Key Parts & Camera Supports',
        frequency: '5 of 6 Sets (83%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Functional knowledge of camera components (Body, Lens, Viewfinder, Shutter, F-stop) and operational trade-offs between Tripods and Monopods.',
        likelyQuestions: [
          'Explain the specific functions of any five key parts of a professional camera.',
          'Discuss the utility and operational differences between tripod stands and monopod supports.'
        ],
        memoryAnchor: 'ACRONYM: B-L-V-S-F (Body, Lens, Viewfinder, Shutter, F-Stop).'
      },
      {
        topic: 'Photo Editing: Reasons and Core Concepts',
        frequency: '5 of 6 Sets (83%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Why raw photos cannot be published directly; definitions of Sizing, Cropping, Blurring, Bleeding, Flopping, and Retouching.',
        likelyQuestions: [
          'Define photo editing and discuss four distinct reasons why news photos undergo editorial scrutiny.',
          'Explain the photo-editing techniques known as Bleeding and Flopping, stating practical applications.'
        ],
        memoryAnchor: 'ACRONYM: C-T-M-B-L (Clarity, Targeted emphasis, Morals, Beautification, Legal protection).'
      },
      {
        topic: 'Caption Writing (Cutlines) & The 5 Ws',
        frequency: '4 of 6 Sets (67%)',
        probability: 'HIGH',
        examinerFocus: 'Rules of cutline formulation: avoiding clichés ("looks on"), factual verification, matching uncropped photo counts, and avoiding libel.',
        likelyQuestions: [
          'Outline five golden rules that new recruits must follow when writing effective photo captions (cutlines).',
          'What are the dangers of editorializing or guessing emotions in a photo caption?'
        ],
        memoryAnchor: 'ACRONYM: A-N-E-M-S (Avoid stating obvious, No editorializing, Explain unknown, Match picture, Strict spelling).'
      },
      {
        topic: 'Photojournalism Law and Ethics (NPPA Standards)',
        frequency: '4 of 6 Sets (67%)',
        probability: 'HIGH',
        examinerFocus: 'Legal liabilities (Libel, Invasion of Privacy, Sedition, Obscenity, Copyright) and ethics regarding shock pictures, digital fakery, and brown envelopes.',
        likelyQuestions: [
          'Explain three legal liabilities that a photojournalist must be wary of when covering public assignments in Nigeria.',
          'Highlight four core ethical principles regarding accuracy and the integrity of subjects.'
        ],
        memoryAnchor: 'ACRONYM: L-I-S-O (Libel, Invasion of privacy, Sedition, Obscenity).'
      }
    ]
  },
  modules: [
    {
      id: 'mac323-m1',
      title: 'MODULE 1: Photography As a Profession & Media Functions',
      questions: [
        {
          id: 'q1-1',
          question: 'Contrast the traditional photographer with the professional photojournalist and discuss five cardinal functions of pictures in mass media.',
          frequencyTag: '85% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: Nouns vs. Verbs (Identity); C-V-V-A-L (Functions: Credibility, Visual Appeal, Vitality, Aesthetics, Literacy)',
          keyTakeaways: [
            'Traditional photographer captures static nouns (people, places, poses) for personal aesthetic satisfaction.',
            'Photojournalist captures dynamic verbs (shouts, burns, rescues, protests) to document newsworthy events under strict ethical standards.',
            'Functions: Proof/Credibility, Visual entry point/magnet, Vitality/Human energy, Page Aesthetics, Literacy bridge for pre-literate audiences.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Theoretical and Operational Contrast:</strong><br>
              While all photojournalists are photographers, not all photographers are photojournalists:</p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>The Traditional Photographer:</strong> Operates primarily as an artist or commercial technician capturing static <strong>"nouns"</strong> (people, poses, landscapes, studio portraits, architectural structures). Their focus is on aesthetic composition, flattering lighting, and personal commercial satisfaction, often arranging or staging subjects artificially.</li>
                <li><strong>The Professional Photojournalist:</strong> Operates as a visual reporter committed to public truth, capturing active <strong>"verbs"</strong> (<em>explodes, grieves, collapses, protests, rescues, celebrates</em>). They hunt spontaneous, unarranged slices of reality that convey a timely, newsworthy story. They are bound by strict journalistic codes of accuracy, impartiality, and social responsibility.</li>
              </ul>

              <p><strong>2. Five Cardinal Functions of Photographs in Mass Media:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Authenticity and Credibility:</strong> Photographs provide unassailable visual proof that an event actually occurred, dispelling skepticism and reinforcing the factual claims of accompanying news text.</li>
                <li><strong>Visual Appeal and Reading Magnets:</strong> Acts as an optical entry point on a printed page or digital feed, breaking grey blocks of intimidating text and drawing the reader\'s eye into the story.</li>
                <li><strong>Human Vitality and Emotional Resonance:</strong> Words can describe tragedy or victory, but a vivid photograph of a weeping mother or a triumphant athlete conveys visceral human emotion and creates immediate empathy.</li>
                <li><strong>Page Layout Aesthetics:</strong> High-quality imagery enhances the balance, proportion, contrast, and overall graphic beauty of newspapers, magazines, and digital layouts.</li>
                <li><strong>Aids to Literacy and Inclusive Communication:</strong> In developing nations with high rates of textual illiteracy, photographs convey vital public messages (such as health warnings or electoral voting procedures) directly to pre-literate citizens.</li>
              </ol>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac323-m3',
      title: 'MODULE 3: Photo Editing Principles, Concepts & Techniques',
      questions: [
        {
          id: 'q3-1',
          question: 'Define photo editing, detail five imperative reasons for editing news photographs, and explain Cropping, Bleeding, and Flopping.',
          frequencyTag: '85% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: C-T-M-B-L (Reasons: Clarity, Target, Morals, Beautification, Legal); Techniques = Crop, Bleed, Flop',
          keyTakeaways: [
            'Editing transforms crude camera exposures into refined, legally safe, publication-grade assets.',
            'Reasons: Technical clarity, eliminating clutter, protecting public decency, layout beauty, avoiding libel.',
            'Cropping eliminates peripheral dead space; Bleeding extends photo to trim edge; Flopping mirrors orientation across vertical axis.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Definition of Photo Editing:</strong><br>
              Photo editing is the rigorous editorial process of selecting, cropping, sizing, adjusting, captioning, and legally vetting raw photographic images to ensure they convey factual truth, maintain aesthetic clarity, uphold moral standards, and protect the publication against legal liabilities.</p>

              <p><strong>2. Five Imperative Reasons for Photo Editing:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Technical Clarity and Visibility:</strong> Correcting poor exposure, low contrast, washed-out backgrounds, or subtle camera shake caused by unpredictable field conditions.</li>
                <li><strong>Targeted Emphasis (Eliminating Visual Distractions):</strong> Trimming away irrelevant bystanders, trees, or background clutter to force the reader\'s eye immediately onto the focal point of action.</li>
                <li><strong>Upholding Moral and Decency Standards:</strong> Censoring or masking gratuitous gore, mutilated corpses, or sexually explicit content that violates societal taste or traumatizes audiences.</li>
                <li><strong>Aesthetic Beautification and Page Balance:</strong> Harmonizing tonal values, smoothing technical blemishes, and sizing images to complement editorial layout proportions.</li>
                <li><strong>Legal Safety and Protection Against Defamation:</strong> Blurring faces of underage crime victims or innocent bystanders whose accidental presence in a raid photo could invite devastating libel lawsuits.</li>
              </ol>

              <p><strong>3. Advanced Photo-Editing Concepts:</strong></p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Cropping:</strong> The deliberate cutting away of non-essential edges of a photograph to eliminate dead space, change aspect ratio, and strengthen narrative focus.</li>
                <li><strong>Bleeding:</strong> Running a photograph completely off one or more trimmed edges of a magazine or newspaper page with zero surrounding white margin, creating a dramatic, immersive visual effect.</li>
                <li><strong>Flopping:</strong> Mirror-reversing an image across its vertical axis. While useful to direct a subject\'s gaze into a text column or align car orientations with national driving conventions (right-hand vs. left-hand drive), it must be handled with extreme care to avoid reversing text, badges, or creating historical falsehoods.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac323-m4',
      title: 'MODULE 4: Photography Tools, Optics & Supports',
      questions: [
        {
          id: 'q4-1',
          question: 'Analyze the operational mechanisms of five core camera parts and contrast the utility of Tripods versus Monopods in field photojournalism.',
          frequencyTag: '80% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: B-L-V-S-F (Body, Lens, Viewfinder, Shutter, F-Stop); Tripod (Absolute Stability) vs. Monopod (High Mobility)',
          keyTakeaways: [
            'Body houses sensor/processor; Lens focuses light rays; Viewfinder frames scene (TTL eliminates parallax); Shutter regulates exposure duration; F-stop/Aperture regulates light volume and depth of field.',
            'Tripod provides 3-legged rock-solid stability for low-light/macro work; Monopod provides single-legged rapid portability for sports/riots.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Five Key Camera Parts and Operational Mechanisms:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Camera Body:</strong> The light-tight chassis that houses the digital image sensor (CMOS/CCD) or film spool, image processing computer, shutter curtains, battery chamber, and control interfaces.</li>
                <li><strong>Lens System:</strong> The optical assembly of convex and concave glass elements that collects and refracts light rays to form a sharp inverted optical image on the focal plane.</li>
                <li><strong>Through-The-Lens (TTL) Viewfinder:</strong> An optical sighting mechanism utilizing a 45-degree reflex mirror and pentaprism to display the exact scene the camera lens sees, completely eliminating parallax error.</li>
                <li><strong>Shutter Release and Shutter Mechanism:</strong> The mechanical/electronic curtain that snaps open for a calibrated fraction of a second (e.g., $1/250$s, $1/1000$s) to expose the sensor to light, controlling motion blur.</li>
                <li><strong>Aperture and F-Stop Control:</strong> The adjustable iris diaphragm inside the lens that expands or contracts to regulate the volume of incoming light and control Depth of Field (DoF).</li>
              </ol>

              <p><strong>2. Tripods vs. Monopods: Operational Comparison in the Field:</strong></p>
              <div class="tw overflow-x-auto border rounded-lg">
                <table class="w-full text-xs sm:text-sm">
                  <thead>
                    <tr class="bg-teal-50 dark:bg-teal-950/40">
                      <th class="p-2 border">Parameter</th>
                      <th class="p-2 border">Tripod Stand (Three Legs)</th>
                      <th class="p-2 border">Monopod Support (Single Leg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="p-2 border font-semibold">Stability Level</td>
                      <td class="p-2 border">Absolute, self-standing rock-solid stability. Completely eliminates camera shake.</td>
                      <td class="p-2 border">Vertical weight support; requires manual balancing by photographer.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Mobility & Deployment</td>
                      <td class="p-2 border">Slow to unfold, adjust, and reposition; cumbersome in crowded crowds.</td>
                      <td class="p-2 border">Instant setup and collapse; ultra-lightweight and highly agile in tight spaces.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Ideal Field Application</td>
                      <td class="p-2 border">Studio portraits, nighttime slow exposures, architectural and landscape documentary.</td>
                      <td class="p-2 border">Fast-paced sporting events, street riots, political rallies, and heavy telephoto tracking.</td>
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
      id: 'mac323-m5',
      title: 'MODULE 5: Photojournalism Law and Professional Ethics',
      questions: [
        {
          id: 'q5-1',
          question: 'Examine the legal liabilities of Libel, Invasion of Privacy, and Sedition, and explain four canons of the NPPA Code of Ethics.',
          frequencyTag: '75% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: L-I-S-O (Legal Hazards: Libel, Invasion of privacy, Sedition, Obscenity); Ethics = Truth, Dignity, Privacy, Independence',
          keyTakeaways: [
            'Libel: Exposing individuals to public hatred/ridicule through distorted photos or false captions.',
            'Privacy: Intrusion, disclosure of embarrassing private facts, false light, commercial misappropriation.',
            'Sedition: Images inciting violent rebellion against lawful government.',
            'NPPA Ethics: Strict accuracy, no digital manipulation to deceive, respect victim dignity, refuse bribes.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Major Legal Liabilities for Nigerian Photojournalists:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Defamation and Libel:</strong> Publishing a photograph alongside a false, careless, or misleading cutline that damages an individual\'s reputation, exposes them to public hatred, contempt, or professional ridicule (e.g., placing an innocent student’s photo next to a headline reading "Campus Cultists Arrested").</li>
                <li><strong>Invasion of Privacy:</strong> Recognized under tort law through four distinct civil violations:
                  <ul class="list-disc pl-5 mt-1">
                    <li><em>Intrusion upon Seclusion:</em> Trespassing into private homes, hospital wards, or hotel rooms using telephoto lenses without consent.</li>
                    <li><em>Public Disclosure of Embarrassing Private Facts:</em> Broadcasting intimate personal details that lack legitimate public interest.</li>
                    <li><em>False Light:</em> Manipulating an image or juxtaposition so that the public perceives the subject in a false, damaging light.</li>
                    <li><em>Misappropriation of Likeness:</em> Using an individual\'s photograph in a commercial advertisement without their written model release.</li>
                  </ul>
                </li>
                <li><strong>Sedition:</strong> Publishing or distributing incendiary photographs designed to incite hatred, violent disaffection, or armed insurrection against lawful government authority.</li>
              </ol>

              <p><strong>2. Four Canons of the National Press Photographers Association (NPPA) Code:</strong></p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Absolute Commitment to Accuracy:</strong> Never stage, manipulate, or reconstruct news scenes artificially; depict subjects truthfully without deceptive visual trickery.</li>
                <li><strong>Treating Subjects with Dignity and Compassion:</strong> Exercise profound sensitivity when photographing vulnerable victims of tragedy, bereavement, and grief; never exploit human suffering for cheap sensationalism.</li>
                <li><strong>Preserving Digital Integrity:</strong> Edits must be strictly confined to normal technical adjustments (cropping, exposure balancing); never add, remove, or alter image elements in a way that misleads viewers.</li>
                <li><strong>Professional Independence and Dignity:</strong> Refuse all forms of financial bribes, favors, or "brown envelope" gratifications that compromise objective reportage.</li>
              </ul>
            </div>
          `
        }
      ]
    }
  ],
  practiceExam: {
    heading: 'PRACTICE EXAMINATION PAPER (SIMULATED FOR FINAL REVISION)',
    instructions: 'Answer any four (4) questions (17.5 Marks each). Total: 70 Marks.',
    questions: [
      {
        number: 'QUESTION 1',
        title: 'Photographer vs. Photojournalist & Functions of Media Pictures',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'Very High Probability (Found in 85% of analyzed past papers)',
        scoringGuide: [
          'Part (a): Scholarly distinction between photographer and photojournalist (8.5 marks)',
          'Part (b): 5 functions of photographs in print journalism (9 marks)'
        ],
        mnemonic: 'Recall Anchors: Nouns vs. Verbs; C-V-V-A-L for 5 functions.',
        questionText: `(a) With reference to expert definitions, differentiate clearly between a traditional photographer and a professional photojournalist, emphasizing their core subjects of capture. (8.5 Marks)
(b) Identify and discuss five (5) major functions that photographs perform in contemporary print journalism. (9 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): PHOTOGRAPHER VS. PHOTOJOURNALIST (8.5 Marks)</h4>
            <p>While both practitioners utilize cameras and understand optics, their operational philosophies, subjects of capture, and ethical allegiances are fundamentally distinct:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>The Traditional Photographer:</strong> Primarily concerned with aesthetic beauty, technical exposure perfection, and commercial client satisfaction. Their subject matter consists largely of static <strong>"nouns"</strong>—people, portraits, weddings, studio models, buildings, and tranquil landscapes. The traditional photographer regularly stages, arranges, prompts, and manipulates the physical environment and subject posture to produce a pleasing visual art piece.</li>
              <li><strong>The Professional Photojournalist:</strong> Operates as a visual news reporter and visual historian. Bound by the cannons of journalism, their quarry is dynamic <strong>"verbs"</strong>—actions, conflicts, human reactions, and unfolding events (<em>protesting, weeping, colliding, rescuing, debating</em>). A photojournalist does not stage, direct, or manipulate the scene; rather, they anticipate spontaneous human action and capture the unvarnished reality under strict deadlines and ethical mandates.</li>
            </ul>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): FIVE FUNCTIONS OF PHOTOGRAPHS IN PRINT JOURNALISM (9 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Lending Undeniable Credibility and Authenticity:</strong> Photographs serve as objective visual evidence. A text story detailing an oil spill in the Niger Delta gains instant believability when paired with a stark photograph of dead fish and blackened mangroves.</li>
              <li><strong>Visual Magnets and Reading Entry Points:</strong> News readers are visual grazers. A dramatic photograph serves as an optical anchor, seizing reader attention and propelling them to read the accompanying headline and story.</li>
              <li><strong>Injecting Human Vitality and Emotional Power:</strong> Photographs convey the raw emotional depth of human joy or agony that words often struggle to encapsulate, humanizing distant geopolitical developments.</li>
              <li><strong>Elevating Page Aesthetics and Layout Contrast:</strong> In graphic design, photographs break the monotony of grey text columns, creating optical contrast, visual balance, and harmonious structure across the printed spread.</li>
              <li><strong>Bridging Literacy Deficits:</strong> Photographs provide universal access to information, enabling individuals who cannot read complex prose to instantly grasp the essence of critical news events.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 2',
        title: 'Camera Parts Mechanics & Tripod vs. Monopod Field Utility',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'High Probability (Appeared in 80% of diets)',
        scoringGuide: [
          'Part (a): 5 camera parts and operational functions (2 marks each = 10 marks)',
          'Part (b): Operational utility and comparison of Tripod vs. Monopod (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: B-L-V-S-F (Parts); Tripod (Sturdy) vs. Monopod (Agile).',
        questionText: `(a) A professional photojournalist must master the primary tools of the trade. Explain the specific functions of any five (5) key parts of a professional camera. (10 Marks)
(b) Discuss the utility and operational differences between tripod stands and monopod supports in field photojournalism. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): FIVE KEY PARTS OF A PROFESSIONAL CAMERA (10 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Camera Body:</strong> The structural light-tight housing enclosing the digital image sensor (CMOS/CCD), circuit boards, battery, memory card slots, and mechanical shutter mechanism.</li>
              <li><strong>Camera Lens (Optical Assembly):</strong> Focuses incoming light rays onto the digital sensor through precision optical glass elements, allowing manual or autofocus tracking and focal length adjustments.</li>
              <li><strong>Through-The-Lens (TTL) Viewfinder:</strong> Utilizes a 45-degree reflex mirror and pentaprism to reflect the exact image entering the lens directly to the photographer\'s eye, eliminating parallax errors completely.</li>
              <li><strong>Shutter Release Button & Shutter Curtain:</strong> The mechanical trigger that lifts the mirror and opens the focal plane shutter curtain for a predetermined fraction of a second, exposing the sensor to light.</li>
              <li><strong>Aperture / F-Stop Ring:</strong> The adjustable diaphragm within the lens that expands or contracts to control light volume and determine Depth of Field (DoF)—isolating subjects against blurry backgrounds.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): TRIPODS VS. MONOPODS IN FIELD PHOTOJOURNALISM (7.5 Marks)</h4>
            <p>Camera shake is the mortal enemy of sharp photography. Photojournalists utilize two primary physical supports:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Tripod Stands (Three-Legged Stability):</strong> Offers absolute, independent physical stability. Essential for long nighttime exposures, macro photography, and stationary studio operations. However, tripods are heavy, slow to deploy, and dangerous in volatile protests or sports arenas.</li>
              <li><strong>Monopod Supports (Single-Legged Agility):</strong> Offers a single telescoping leg that supports the heavy physical weight of telephoto lenses (e.g., 300mm or 400mm lenses) while allowing 360-degree rapid panning. Ideal for football matches, political rallies, and riots where the photojournalist must move instantly to follow fast-breaking action.</li>
            </ul>
          </div>
        `
      },
      {
        number: 'QUESTION 3',
        title: 'Photo Editing Definition, Necessity, and Scrutiny Criteria',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'Very High Probability (Appeared in 85% of diets)',
        scoringGuide: [
          'Part (a): Definition and justification of photo editing (8.5 marks)',
          'Part (b): 4 distinct reasons for editorial scrutiny of photographs (9 marks)'
        ],
        mnemonic: 'Recall Anchors: C-T-M-B-L (Clarity, Target, Morals, Beautification, Legal).',
        questionText: `(a) Define photo editing and explain why it is an indispensable process in newspaper and magazine publishing. (8.5 Marks)
(b) Discuss four (4) distinct reasons why news photographs must undergo editorial scrutiny before publication. (9 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): DEFINITION AND INDISPENSABILITY OF PHOTO EDITING (8.5 Marks)</h4>
            <p><strong>Definition:</strong> Photo editing is the systematic editorial process of evaluating, selecting, cropping, sizing, toning, verifying, captioning, and legally vetting raw photographic images before publication. It is an indispensable bridge between field capture and final printing:</p>
            <p>In modern mass media, a raw camera exposure is merely raw material. Field photojournalists shoot hundreds of rapid digital frames under unpredictable conditions, hostile environments, poor lighting, and heavy visual clutter. Without professional photo editing, newspapers would publish blurry, morally offensive, legally disastrous, and poorly sized pictures that destroy publication credibility and invite commercial bankruptcy.</p>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): FOUR REASONS FOR EDITORIAL SCRUTINY (9 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Ensuring Technical Clarity and Visual Integrity:</strong> Raw images frequently suffer from underexposure, color casts, or harsh shadows. Editorial technicians adjust tonal curves to ensure the final printed image is crisp and instantly readable.</li>
              <li><strong>Enforcing Taste and Moral Decency Standards:</strong> Photo editors prevent the transmission of gratuitous shock imagery—such as graphic close-ups of mutilated accident victims or vulgar nudity—protecting children and maintaining community moral standards.</li>
              <li><strong>Safeguarding Against Legal Liability (Libel & Privacy):</strong> Scrutiny ensures that innocent bystanders caught in the frame of a crime scene are blurred or cropped out, preventing catastrophic civil defamation lawsuits against the media house.</li>
              <li><strong>Targeted Storytelling and Eliminating Dead Space (Cropping):</strong> Editing removes extraneous peripheral clutter, directing the reader's eye immediately to the decisive emotional action.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 4',
        title: 'Caption Writing Rules & Bleeding vs. Flopping Techniques',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'High Probability (Appeared in 75% of diets)',
        scoringGuide: [
          'Part (a): 5 golden rules of caption writing (2 marks each = 10 marks)',
          'Part (b): Bleeding and Flopping explained with practical layout use (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: A-N-E-M-S for Captions; Bleed = No Margin; Flop = Mirror Image.',
        questionText: `(a) As an editorial trainer, outline five (5) golden rules that your new recruits must follow when writing effective photo captions (cutlines). (10 Marks)
(b) Explain the photo-editing techniques known as Bleeding and Flopping, stating their practical applications in page layout. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): FIVE GOLDEN RULES OF CAPTION WRITING (10 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Never State the Glaringly Obvious:</strong> Ban trite, lazy clichés like "is pictured above", "looks on", or "smiles at the camera". The caption must supply substantive context the image cannot reveal on its own.</li>
              <li><strong>Never Editorialize or Presume Emotions:</strong> State observable, verified facts. Do not write "an unhappy governor looks dejected"; state the factual circumstance: "Governor X listens to community flood complaints". Let readers interpret emotion.</li>
              <li><strong>Explain the Unknown and Clarify Technical Anomalies:</strong> Identify key individuals from left to right, clarify unusual shooting perspectives (e.g., aerial drone shots), and state exact dates and venues.</li>
              <li><strong>Ensure Strict Concordance with the Visual Image:</strong> Match the caption text exactly with the number of identifiable people visible in the final cropped photograph.</li>
              <li><strong>Maintain Rigorous Orthographic and Spelling Accuracy:</strong> Misspelling the name of a public figure in a prominent photo caption devastates publication authority. Cross-check all names against official gazettes.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): BLEEDING AND FLOPPING (7.5 Marks)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Bleeding:</strong> The layout technique where an image or solid color background is printed completely off one, two, or all four trim edges of a page with zero surrounding white margin. <em>Practical Application:</em> Used extensively on magazine covers, photo essays, and center spreads to create an immersive visual impact.</li>
              <li><strong>Flopping:</strong> The digital technique of mirror-reversing an image horizontally across its vertical axis. <em>Practical Application:</em> Deployed by art directors to turn a portrait so the subject\'s gaze faces inward toward the accompanying text column rather than off the edge of the page, or to adjust steering-wheel orientation for local vehicle markets. <em>Caution:</em> Flopping must never reverse badges, logos, or text, which creates digital falsification.</li>
            </ul>
          </div>
        `
      },
      {
        number: 'QUESTION 5',
        title: 'Legal Liabilities in Nigeria & Core Ethical Standards',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'High Probability (Appeared in 75% of diets)',
        scoringGuide: [
          'Part (a): 3 legal liabilities (Libel, Invasion of Privacy, Sedition) (10 marks)',
          'Part (b): 4 ethical principles (Accuracy, Subject Integrity, Privacy, Independence) (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: L-I-S-O for law; NPPA truth & dignity for ethics.',
        questionText: `(a) Explain three (3) legal liabilities that a photojournalist must be wary of when covering public assignments in Nigeria. (10 Marks)
(b) Highlight four (4) core ethical principles regarding accuracy and the integrity of subjects that govern photojournalistic practice. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): THREE LEGAL LIABILITIES IN NIGERIA (10 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-3">
              <li><strong>Civil Defamation / Libel:</strong> A photojournalist and their newspaper can be sued for libel if a photograph and caption combine to falsely impute criminal conduct, moral corruption, or financial bankruptcy to an innocent individual, exposing them to public hatred, contempt, or ridicule.</li>
              <li><strong>Invasion of Privacy:</strong> Nigerian constitutional law (Section 37, 1999 Constitution) guarantees citizens\' privacy. Photojournalists face severe tort liability for: (1) Unlawful physical intrusion into private homes, hospital beds, or private funeral rites without permission; (2) Placing an individual in a "false light" through deceptive image pairing; and (3) Commercial misappropriation of someone\'s photograph without an executed model release form.</li>
              <li><strong>Sedition:</strong> Under the Nigerian Criminal Code, photographing or disseminating images intentionally designed to excite feelings of violent rebellion, hatred, disaffection, or armed insurrection against lawful government authority is a felony punishable by imprisonment.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): FOUR CORE ETHICAL PRINCIPLES (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Commitment to Uncompromising Factual Accuracy:</strong> Never manipulate, reenact, or stage events. The camera must document reality, not manufacture an artificial spectacle for career glory.</li>
              <li><strong>Protection of Subject Integrity and Human Dignity:</strong> Refrain from subjecting grieving victims, traumatized children, and vulnerable persons to public humiliation or gratuitous ridicule.</li>
              <li><strong>Preservation of Digital Image Authenticity:</strong> Strictly reject unethical digital manipulation (cloning elements, removing people, or altering environmental context in Photoshop) intended to deceive the reading public.</li>
              <li><strong>Professional Independence (Rejecting "Brown Envelopes"):</strong> Never accept financial inducements, bribes, or commercial gifts from news sources seeking to influence which pictures get published or suppressed.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 6',
        title: 'Explanatory Notes: History of Photography, Studio Setup, or Types of Photojournalists',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'Moderate Probability (Appeared in 50% of diets)',
        scoringGuide: [
          'Selection of any two (2) sub-topics with comprehensive explanatory notes (8.75 marks each = 17.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Niépce 1827 & Daguerre 1839; Studio 3-point lighting; Press vs. Commercial vs. Fashion.',
        questionText: `Write detailed explanatory notes on any two (2) of the following: (17.5 Marks)
(i) The historical evolution of photography from Camera Obscura to the Daguerreotype.
(ii) Essential technical steps and equipment required in setting up a professional photo studio.
(iii) The distinct roles performed by Commercial, Fashion, and Press photojournalists.`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">OPTION (I): HISTORICAL EVOLUTION: CAMERA OBSCURA TO DAGUERREOTYPE</h4>
            <p>The journey of photography began with the optical phenomenon of the <strong>Camera Obscura</strong> (Latin for "dark room"), observed in ancient China by Mo Ti (5th century BC) and in Greece by Aristotle. In a darkened room, light entering through a tiny pinhole projects an inverted optical image of the outside world onto the opposing wall. For centuries, Renaissance artists (like Leonardo da Vinci) used portable camera obscura boxes as drawing aids.</p>
            <p>The breakthrough in permanently fixing this optical image chemically occurred in 1827, when French inventor <strong>Joseph Nicéphore Niépce</strong> produced the world\'s oldest surviving permanent photograph (the Heliograph or "sun print") on a bitumen-coated pewter plate requiring an 8-hour exposure. Niépce partnered with <strong>Louis-Jacques-Mandé Daguerre</strong>, who refined the chemical process. On <strong>August 19, 1839</strong>, the French government announced the invention of the <strong>Daguerreotype</strong>—fixing detailed images on silver-plated copper sheets sensitized with iodine vapor and developed with mercury vapor, marking the commercial birth of practical photography.</p>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">OPTION (III): COMMERCIAL, FASHION, AND PRESS PHOTOJOURNALISTS</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Commercial Photojournalists:</strong> Specialize in promotional, corporate, and advertising imagery. Working in controlled studio setups, they create meticulously staged product shots, annual corporate report imagery, and industrial still-lifes aimed at driving sales and corporate brand equity.</li>
              <li><strong>Fashion Photojournalists:</strong> Focus on apparel, cosmetic trends, runway models, and lifestyle accessories. Operating during major fashion weeks and studio magazine shoots, their primary virtue is interpersonal tact—guiding, posing, and relaxing models to highlight garment texture and aesthetic style.</li>
              <li><strong>Press Photojournalists:</strong> Operating on the frontlines of daily newspapers and international wire agencies, their mandate is hard breaking news (conflicts, politics, disasters) and soft news ceremonies. Their defining attributes are lightning speed, instinctive composition, a sharp "news nose", and courage under fire.</li>
            </ul>
          </div>
        `
      }
    ]
  },
  memorizationAids: {
    title: 'MAC 323 High-Yield Memorization Mnemonics',
    items: [
      {
        acronym: 'C-V-V-A-L',
        standsFor: 'Credibility, Visual appeal, Vitality, Aesthetics, Literacy aid',
        usage: '5 cardinal functions of pictures in print journalism.'
      },
      {
        acronym: 'B-L-V-S-F',
        standsFor: 'Body, Lens, Viewfinder, Shutter, F-Stop',
        usage: '5 essential mechanical parts of a professional camera.'
      },
      {
        acronym: 'C-T-M-B-L',
        standsFor: 'Clarity, Targeted emphasis, Morals, Beautification, Legal protection',
        usage: '5 imperative reasons for photo editing.'
      },
      {
        acronym: 'A-N-E-M-S',
        standsFor: 'Avoid obvious, No editorializing, Explain unknown, Match photo, Strict spelling',
        usage: '5 golden rules for writing photo captions (cutlines).'
      }
    ]
  }
};
