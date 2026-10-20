import { CourseData } from './types';

export const mac341Data: CourseData = {
  code: 'MAC 341',
  title: 'Development Communication and Broadcasting',
  creditUnits: 3,
  timeAllowed: '3 Hours',
  examInstructions: 'Answer Question One (1) (Compulsory – 25 Marks) and any other three (3) questions (15 Marks each). Total: 70 Marks.',
  overview: 'Explores the strategic integration of communication processes, broadcasting media, and participatory dialogues to drive socio-economic transformation, poverty reduction, public health improvements, and grassroots community empowerment.',
  frequencyAnalysis: {
    totalSetsAnalyzed: 12,
    summary: 'Exhaustive cross-analysis of 12 examination diets identifies that examiners consistently emphasize 6 core topics: (1) Dominant Paradigm Failure & Participatory Model (75%), (2) Roles of Mass Media in National Development [Okigbo & Soola] (75%), (3) Communication Elements & Process Dynamics (58%), (4) Development Journalism vs. Conventional Journalism [Galtung & Vincent] (58%), (5) Why Radio Rules Supreme in Rural Development (58%), and (6) Participatory Development Communication & Communication Planner Functions (58%).',
    matrix: [
      {
        topic: 'Dominant vs. Participatory Paradigm & Why Dominant Paradigm Failed',
        frequency: '9 of 12 Sets (75%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Post-WWII top-down modernization model, why it was branded a "sham", and 5-7 factors causing its collapse in the Third World.',
        likelyQuestions: [
          'The dominant paradigm of development communication is considered a sham. What five factors are responsible for this failure?',
          'Discuss seven reasons for the adoption of the participatory/alternative paradigm of development with concrete examples.'
        ],
        memoryAnchor: 'ACRONYM: T-N-O-W-A (Top-down, Neglect of culture, Over-emphasis on capital, Widening gaps, Assuming homogeneity).'
      },
      {
        topic: 'Roles of Mass Media & Communication in National Development',
        frequency: '9 of 12 Sets (75%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Okigbo (1991) and Soola (2003) conceptualizations: Information, Education, Social Mobilization, Agenda-Setting, and Watchdog accountability.',
        likelyQuestions: [
          'According to Okigbo (1991) and Soola (2003), mass media should perform some roles in the development process. Explain six of these roles.',
          'Discuss how communication can improve people\'s participation, community mobilization, and lifestyle changes.'
        ],
        memoryAnchor: 'ACRONYM: I-E-S-A-W (Information, Education, Social mobilization, Agenda-setting, Watchdog).'
      },
      {
        topic: 'Development Journalism vs. Conventional Journalism & Writing Rules',
        frequency: '7 of 12 Sets (58%)',
        probability: 'HIGH',
        examinerFocus: 'Contrastive matrix ("if it bleeds, it leads" vs. long-term process reporting); Galtung & Vincent\'s 10 proposals; 5 writing principles for development journalists.',
        likelyQuestions: [
          'In so many ways, development communication is distinct from conventional journalism. Provide at least five contrastive features.',
          'Discuss five techniques of writing for development journalism with relevant examples.'
        ],
        memoryAnchor: 'ACRONYM: P-S-A-C (Process over events, Social utility, Active citizen role, Constructive solutions).'
      },
      {
        topic: 'Participatory Development Communication (PDC) & Planner Roles',
        frequency: '7 of 12 Sets (58%)',
        probability: 'HIGH',
        examinerFocus: 'Grassroots dialogic communication, PRA methods, and 5-6 roles of the communication planner (Facilitator, Needs Analyst, Bridge-Builder, Media Integrator).',
        likelyQuestions: [
          'What do you understand by Participatory Development Communication (PDC)?',
          'Discuss five functions of the communication planner in participatory development communication.'
        ],
        memoryAnchor: 'ACRONYM: F-A-B-M-C (Facilitator, Analyst, Bridge-builder, Media integrator, Capacity builder).'
      },
      {
        topic: 'Why Radio Rules Supreme in Rural Development vs. Television',
        frequency: '7 of 12 Sets (58%)',
        probability: 'HIGH',
        examinerFocus: 'Comparing radio and television in rural third-world environments: overcoming illiteracy, lack of electricity, cheap receivers, indigenous languages, portability.',
        likelyQuestions: [
          'Radio has been adjudged the best medium of development communication. Justify this axiom in the rural development context.',
          'Explain the advantages television has over radio in propagating communication for development.'
        ],
        memoryAnchor: 'ACRONYM: U-L-P-C-B (Ubiquity, Language diversity, Portability, Cheap cost, Battery powered).'
      },
      {
        topic: 'Development Communication Theories (Diffusion, Rostow, ACADA)',
        frequency: '6 of 12 Sets (50%)',
        probability: 'HIGH',
        examinerFocus: 'Rogers\' Diffusion of Innovations (5 attributes, 5 decision stages), Rostow\'s Modernization stages, and the UNICEF ACADA Model.',
        likelyQuestions: [
          'Explain the five stages in the Innovation-Decision Process with practical examples.',
          'Briefly discuss the relevance of the Diffusion of Innovations theory, Agenda-Setting theory, and ACADA Model.'
        ],
        memoryAnchor: 'ACRONYM: K-P-D-I-C (Knowledge, Persuasion, Decision, Implementation, Confirmation).'
      }
    ]
  },
  modules: [
    {
      id: 'mac341-m1',
      title: 'MODULE 1: Foundations of Communication & Process',
      questions: [
        {
          id: 'q1-1',
          question: 'Define communication and development, establish their dynamic relationship, and discuss the communication elements in sequential order.',
          frequencyTag: '58% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: S-E-M-C-R-D-F-N (Source, Encoding, Message, Channel, Receiver, Decoding, Feedback, Noise)',
          keyTakeaways: [
            'Communication: Latin "communis" (to make common) - dynamic transactional meaning exchange.',
            'Development: Multi-dimensional socio-economic and structural transformation improving quality of life.',
            'Relationship: Communication is the engine and catalyst of development; development cannot occur in a vacuum.',
            'Osgood & Schramm Model: Circular two-way model where meaning is negotiated within shared fields of experience.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Definitions and Relationship:</strong></p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Communication:</strong> Originating from Latin <em>communis</em> ("to share" or "to make common"), it is the dynamic, two-way process of sharing information, ideas, and attitudes between a sender and receiver through an agreed symbolic code.</li>
                <li><strong>Development:</strong> A continuous, multidimensional process involving the qualitative and quantitative transformation of a society’s economic, cultural, and political structures to improve human well-being and dignity.</li>
                <li><strong>The Relationship:</strong> Communication is the <strong>engine, catalyst, and lifeblood</strong> of development. Development is not merely about constructing physical infrastructure; it is about changing minds, transferring technical skills, and building consensus. Communication creates awareness of innovations, facilitates grassroots participation, and mobilizes communities for collective action.</li>
              </ul>

              <p><strong>2. The Elements of Communication in Sequential Order:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Sender / Source:</strong> Originates the idea and initiates the development transaction.</li>
                <li><strong>Encoding:</strong> Converting thoughts into culturally understandable signs, words, or illustrations.</li>
                <li><strong>Message:</strong> The physical or symbolic embodiment of the development idea (e.g., proper hygiene steps).</li>
                <li><strong>Channel / Medium:</strong> The physical vehicle (radio, town crier, village square meeting, poster).</li>
                <li><strong>Receiver:</strong> The target community member who receives the message.</li>
                <li><strong>Decoding:</strong> Translating symbols back into thought against their personal field of experience.</li>
                <li><strong>Feedback:</strong> The receiver’s response, converting the process into an active two-way loop.</li>
                <li><strong>Noise:</strong> Any semantic, physical, or psychological interference distorting the message.</li>
              </ol>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac341-m4',
      title: 'MODULE 4: Development Paradigms & Why Dominant Model Failed',
      questions: [
        {
          id: 'q4-1',
          question: 'Critically analyze the Dominant Paradigm of development communication, explain why it was branded a "sham", and discuss seven reasons for adopting the participatory model.',
          frequencyTag: '75% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: Failure Factors = T-N-O-W-A; Participatory Reasons = Ownership, Indigenous knowledge, Sustainability',
          keyTakeaways: [
            'Dominant Paradigm (1950s-1970s): Westernization, economic growth = development, top-down monologic transmission.',
            'Why it failed: Ignored local culture, treated rural dwellers as passive, widened rich-poor gaps, relied on capital transfers without human capacity.',
            'Participatory Paradigm: Bottom-up dialogue, local ownership, democratic empowerment, sustainability.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. The Dominant Paradigm and Why It Failed:</strong><br>
              Emerging after World War II under Western modernization scholars (Lerner, Schramm, Rostow), the <strong>Dominant Paradigm</strong> equated development with Western industrialization, capital accumulation, and gross national product (GNP) growth. It assumed that Western mass media would broadcast modernizing ideas downward into traditional societies, miraculously "modernizing" peasant populations. Scholars eventually branded it a complete sham due to five catastrophic flaws:</p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Top-Down Monologic Transmission:</strong> Treated rural communities as passive, ignorant vessels waiting to be filled with Western expertise rather than active agents of change.</li>
                <li><strong>Neglect of Socio-Cultural Contexts:</strong> Assumed Western institutions could be transplanted blindly into developing nations, ignoring local religious, cultural, and indigenous governance systems.</li>
                <li><strong>Over-Emphasis on Capital and Hardware:</strong> Assumed purchasing tractors or building dams constituted development, neglecting human capacity building, maintenance training, and community readiness.</li>
                <li><strong>Widening the Socio-Economic Gap:</strong> Urban elites and large landowners monopolized the incoming technologies and resources, impoverishing rural peasant majorities even further.</li>
                <li><strong>Assuming Audience Homogeneity:</strong> Treated entire rural populations as a single monolith, ignoring critical differences in gender, age, literacy, and land ownership.</li>
              </ol>

              <p><strong>2. Seven Reasons for Adopting the Participatory / Alternative Paradigm:</strong></p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Ensures Local Ownership:</strong> Communities protect and maintain projects they conceived and built themselves, preventing abandoned boreholes or clinics.</li>
                <li><strong>Harnesses Indigenous Knowledge Systems:</strong> Integrates generations of local ecological, agricultural, and cultural wisdom into modern solutions.</li>
                <li><strong>Fosters Democratic Empowerment:</strong> Gives marginalized groups (especially women and rural youth) a voice in civic decisions.</li>
                <li><strong>Aligns with Genuine Felt Needs:</strong> Avoids deploying perceived or manufactured needs devised by bureaucrats in distant capital cities.</li>
                <li><strong>Reduces Project Rejection:</strong> Dialogue eliminates suspicion and cultural friction.</li>
                <li><strong>Ensures Project Sustainability:</strong> Local community members are trained to manage operations after international donors depart.</li>
                <li><strong>Drives Permanent Behavioral Change:</strong> People adopt new habits (sanitation, immunization) when they debate and agree on benefits in communal forums.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac341-m5',
      title: 'MODULE 5: Development Journalism vs. Conventional Journalism',
      questions: [
        {
          id: 'q5-1',
          question: 'Contrast Development Journalism with Conventional Journalism, and detail five writing techniques for development reporting.',
          frequencyTag: '58% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: Process vs. Event; Human interest framing, Jargon-free prose, Solution angle',
          keyTakeaways: [
            'Conventional: "If it bleeds, it leads" - political conflict, celebrity gossip, immediate crises.',
            'Development Journalism: Long-term socio-economic progress, grassroots empowerment, solutions journalism.',
            'Writing rules: Plain language, human-interest narratives, empirical background context, solution orientation, cultural metaphors.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Contrastive Matrix: Development vs. Conventional Journalism:</strong></p>
              <div class="tw overflow-x-auto border rounded-lg">
                <table class="w-full text-xs sm:text-sm">
                  <thead>
                    <tr class="bg-teal-50 dark:bg-teal-950/40">
                      <th class="p-2 border">Dimension</th>
                      <th class="p-2 border">Conventional Journalism</th>
                      <th class="p-2 border">Development Journalism</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="p-2 border font-semibold">Core News Value</td>
                      <td class="p-2 border">"If it bleeds, it leads"—sensationalism, political warfare, crime, celebrity scandals.</td>
                      <td class="p-2 border">Social utility, grassroots progress, health breakthroughs, rural empowerment.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Temporal Orientation</td>
                      <td class="p-2 border">Spot news; ephemeral isolated events.</td>
                      <td class="p-2 border">Long-term socio-economic processes and historical trends.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Primary Sources</td>
                      <td class="p-2 border">Government officials, political elites, corporate titans.</td>
                      <td class="p-2 border">Ordinary citizens, peasant farmers, rural women, field health workers.</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Audience Positioning</td>
                      <td class="p-2 border">Passive media consumers and commercial targets.</td>
                      <td class="p-2 border">Active participants and drivers of communal development.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p><strong>2. Five Writing Techniques for Development Journalists:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Simplification of Scientific/Technical Jargon:</strong> Translating complex medical, agricultural, or economic terms into clear, conversational language understandable by ordinary citizens.</li>
                <li><strong>Human-Interest Narrative Framing:</strong> Anchoring the story in the lived experience of an individual human being (e.g., telling the story of one rural mother to illustrate maternal health deficits).</li>
                <li><strong>Providing Contextual and Empirical Depth:</strong> Supplying historical background, trend analysis, and cause-and-effect explanations rather than mere isolated statistics.</li>
                <li><strong>Solution-Oriented Journalism:</strong> Highlighting workable solutions, community self-help innovations, and policy alternatives rather than merely lamenting poverty.</li>
                <li><strong>Integration of Local Idiom and Metaphors:</strong> Utilizing culturally familiar expressions, proverbs, and allegories to make abstract development ideas resonate emotionally.</li>
              </ol>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac341-m9',
      title: 'MODULE 9: Broadcasting for Development: The Supremacy of Radio',
      questions: [
        {
          id: 'q9-1',
          question: 'Justify why radio is adjudged the best and most effective medium for rural development over television and print in developing nations like Nigeria.',
          frequencyTag: '58% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: U-L-P-C-B (Ubiquity, Language diversity, Portability, Cheap cost, Battery powered)',
          keyTakeaways: [
            'Overcomes textual illiteracy barrier via spoken audio.',
            'Bypasses national electricity grid failures using cheap dry-cell batteries or solar.',
            'Cost-effective production and low receiver purchase costs.',
            'Local language customization in indigenous dialects.',
            'High portability: Farmers listen in farm fields, traders in open markets.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>In developing nations, development communication scholars universally designate radio as the undisputed king of rural development media for five empirical reasons:</p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>Overcomes the Illiteracy Barrier:</strong> Unlike print newspapers or internet text requiring literacy, radio relies entirely on the spoken word, sound effects, and music, enabling illiterate rural citizens to access vital development information effortlessly.</li>
                <li><strong>Independence from Electricity Grids:</strong> Rural areas across Nigeria suffer from chronic electricity deficits. Radio sets run on inexpensive, replaceable flashlight batteries or solar panels, operating where television sets are completely useless.</li>
                <li><strong>Affordability of Receivers and Low Production Cost:</strong> A radio receiver costs a small fraction of a television set or smartphone. Similarly, creating radio content costs a fraction of television programming budgets.</li>
                <li><strong>Language Diversity and Localization:</strong> Radio easily broadcasts in diverse indigenous dialects and vernacular languages, ensuring that nuanced agricultural or immunization instructions are fully grasped.</li>
                <li><strong>Portability and Occupational Compatibility:</strong> Radio is a mobile medium. Farmers can listen while hoeing fields, market women while selling commodities, and artisans while working, without interrupting productive physical labor.</li>
              </ol>
            </div>
          `
        }
      ]
    }
  ],
  tables: [
    {
      title: 'Contrastive Analysis of Development vs. Conventional Journalism',
      headers: ['Dimension', 'Conventional Journalism', 'Development Journalism'],
      rows: [
        ['News Philosophy', 'Commercial entertainment, sensationalism, "if it bleeds, it leads"', 'Social transformation, problem solving, civic empowerment'],
        ['Event vs. Process', 'Discrete events, spot news, breaking scandals', 'Continuous long-term socio-economic processes and societal trends'],
        ['Source Dominance', 'Presidents, ministers, corporate elites, celebrities', 'Grassroots citizens, local farmers, rural cooperatives, field workers'],
        ['Audience Role', 'Passive consumers to be entertained or shocked', 'Active citizens empowered to participate in community self-help'],
        ['Tone & Perspective', 'Cynical, conflict-driven, detached observer', 'Constructive, investigative, empathetic, solution-oriented']
      ]
    }
  ],
  practiceExam: {
    heading: 'PRACTICE EXAMINATION PAPER (SIMULATED FOR FINAL REVISION)',
    instructions: 'Answer Question One (1) (Compulsory – 25 Marks) and any other three (3) questions (15 Marks each). Total: 70 Marks.',
    questions: [
      {
        number: 'QUESTION 1',
        title: 'Communication Elements in Development & Failure of the Dominant Paradigm',
        marks: '25 Marks',
        isCompulsory: true,
        frequencyNote: 'Very High Probability (Found in over 75% of analyzed past papers)',
        scoringGuide: [
          'Part (a): 5 communication elements and their direct impact on DevComm (12.5 marks)',
          'Part (b): 5 factors responsible for the failure of the Dominant Paradigm (12.5 marks)'
        ],
        mnemonic: 'Recall Anchors: S-M-C-R-F for elements; Top-down, Culture neglect, Capital obsession for failure.',
        questionText: `(a) Communication operates through an interrelated set of elements and is dynamic in nature. Identify five (5) elements of communication and explain how each directly affects the development communication process. (12.5 Marks)
(b) The Dominant Paradigm of development communication has faced severe criticism and is often considered a failure. As a mass communication scholar, discuss five (5) major factors responsible for this failure. (12.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): FIVE ELEMENTS OF COMMUNICATION IN DEVCOMM (12.5 Marks)</h4>
            <p>Communication is an organic, transactional system. In development communication (DevComm), each element directly determines whether an intervention produces lasting behavioral adoption or community rejection:</p>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>The Source / Sender:</strong> In DevComm, the credibility, cultural empathy, and perceived trustworthiness of the source (e.g., an agricultural extension agent, public health nurse, or village elder) dictate reception. If the source is perceived as an arrogant outsider who looks down on rural traditions, the community will reject the development initiative regardless of how beneficial the innovation is.</li>
              <li><strong>The Encoded Message:</strong> The development concept must be encoded into clear, culturally sensitive, simple, and actionable language. Messages that employ complex technical jargon or violate local cultural/religious taboos (e.g., insensitive family planning phrasing) provoke defensiveness and defeat the campaign.</li>
              <li><strong>The Channel / Medium:</strong> The selected transmission conduit (radio, town crier, village square demonstration, mobile cinema) must align with the target audience\'s physical access and media habits. Selecting print flyers in a community where 80% of adults cannot read guarantees campaign failure.</li>
              <li><strong>The Receiver / Decoder:</strong> The rural community members who decode the message against their personal "field of experience" and belief systems. Development succeeds only when planners diagnose the receiver\'s pre-existing fears, misconceptions, and economic constraints.</li>
              <li><strong>The Feedback Loop:</strong> The reaction, questions, or behavioral adoption communicated back to project planners. In DevComm, feedback transforms a one-way lecture into an authentic two-way dialogue, allowing planners to adapt interventions to community realities.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): FIVE FACTORS RESPONSIBLE FOR THE FAILURE OF THE DOMINANT PARADIGM (12.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Top-Down, Monologic Communication Pipeline:</strong> The dominant modernization paradigm assumed development consisted of urban technocrats transmitting instructions downward to passive peasant recipients. This authoritarian mode bred apathy, suspicion, and deep community alienation.</li>
              <li><strong>Gross Disregard of Indigenous Knowledge Systems:</strong> It arrogantly dismissed centuries of traditional ecological, agricultural, and medicinal knowledge as "primitive superstition", attempting to impose Western formulas that often failed in tropical African ecosystems.</li>
              <li><strong>Over-Emphasis on Capital and Hardware Transfers:</strong> It operated on the false premise that shipping tractors, heavy machinery, or fertilizer without training local operators or establishing supply chains would produce instant prosperity, resulting in graveyards of abandoned machinery.</li>
              <li><strong>Widening the Socio-Economic Gap:</strong> Information and capital channeled through the dominant paradigm were captured by powerful urban elites and large commercial farms, widening the divide between the rich and the poor.</li>
              <li><strong>Failure to Address Structural Inequality:</strong> The paradigm treated underdevelopment as a psychological defect of traditional peoples rather than addressing international trade exploitation, land tenure inequities, and corrupt political governance.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 2',
        title: 'Appellations of DevComm & Mass Media Roles in National Development',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'Very High Probability (Appeared in 75% of diets)',
        scoringGuide: [
          'Part (a): DevComm definition + 4 distinct appellations (7.5 marks)',
          'Part (b): 3 key media roles according to Okigbo (1991) and Soola (2003) with Nigerian examples (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: DSC, C4D, Programme Comm, Social Change; Information, Mobilization, Agenda-setting.',
        questionText: `(a) Define Development Communication and outline four (4) appellations (alternative names or conceptual shifts) associated with the field. (7.5 Marks)
(b) Okigbo (1991) and Soola (2003) emphasize that the mass media must perform critical roles in societal transformation. With ample Nigerian examples, discuss three (3) key roles that communication plays in national and community development. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): DEFINITION AND FOUR APPELLATIONS OF DEVCOMM (7.5 Marks)</h4>
            <p><strong>Definition:</strong> Development Communication (DevComm) is the planned, systematic integration of communication processes, media tools, and participatory dialogues to mobilize communities, eliminate poverty, foster socio-economic equity, and improve human dignity.</p>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Development Support Communication (DSC):</strong> Focuses on using communication to support specific, project-based operational interventions (e.g., an irrigation project or maternal clinic).</li>
              <li><strong>Communication for Development (C4D):</strong> Widely utilized by United Nations agencies (UNICEF, UNESCO), emphasizing human rights, beneficiary participation, and social inclusion at the center of change.</li>
              <li><strong>Programme Communication:</strong> Refers to targeted communication interventions designed to support specific social sector initiatives, focusing on behavior change communication (BCC).</li>
              <li><strong>Social Change Communication:</strong> Focuses on shifting deep-seated social norms, traditional cultural practices, and institutional power dynamics (e.g., eliminating female genital mutilation).</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THREE ROLES OF COMMUNICATION IN DEVELOPMENT (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Information Dissemination and Educational Skill Acquisition:</strong><br>
              <em>Role:</em> Equipping citizens with actionable technical knowledge to overcome survival challenges.<br>
              <em>Nigerian Example:</em> Agricultural instructional radio broadcasts across Kaduna, Kano, and Benue educating smallholder farmers on modern grain storage and pest management.</li>
              <li><strong>Social Mobilization and Collective Grassroots Action:</strong><br>
              <em>Role:</em> Galvanizing communities to unite, pool voluntary labor, and execute communal self-help projects.<br>
              <em>Nigerian Example:</em> Community radio stations in rural Enugu mobilizing villagers to grade rural access roads and build community health posts.</li>
              <li><strong>Agenda-Setting, Transparency, and Accountability:</strong><br>
              <em>Role:</em> Focusing public and government attention on critical neglected issues and investigating corruption.<br>
              <em>Nigerian Example:</em> Investigative reporting by Nigerian news outlets uncovering abandoned primary healthcare centers, compelling state ministries to complete them.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 3',
        title: 'Development Journalism vs. Conventional & Five Writing Principles',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Probability (Appeared in 58% of diets)',
        scoringGuide: [
          'Part (a): Contrastive matrix between Development and Conventional Journalism (7.5 marks)',
          'Part (b): 3 development writing principles with examples (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Event vs Process; Elite vs Peasant; Jargon-free, Human interest, Solution.',
        questionText: `(a) How does Development Journalism fundamentally differ from conventional journalism in terms of focus, news values, and audience positioning? Use a contrastive comparison to illustrate your answer. (7.5 Marks)
(b) Due to the unique nature and goals of development journalism, specialized writing techniques are required. Discuss three (3) writing principles/techniques essential for a development journalist. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): CONTRASTIVE ANALYSIS OF JOURNALISM TYPES (7.5 Marks)</h4>
            <p><strong>1. News Philosophy & Focus:</strong> Conventional journalism is dominated by commercial news values, sensationalism, and breaking political conflict ("if it bleeds, it leads"). Development journalism prioritizes socio-economic progress, poverty reduction, and public health breakthroughs.</p>
            <p><strong>2. Event vs. Process:</strong> Conventional journalism reports isolated, spot events (e.g., a train derailment or a minister\'s press release). Development journalism tracks long-term historical processes (e.g., evaluating five years of rural water schemes).</p>
            <p><strong>3. Primary News Sources:</strong> Conventional journalism relies heavily on political bigwigs and corporate executives. Development journalism gives voice to ordinary rural citizens, peasant farmers, and grassroots cooperatives.</p>
            <p><strong>4. Audience Positioning:</strong> Conventional journalism treats readers as passive consumers. Development journalism treats audiences as active, empowered agents of community transformation.</p>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THREE WRITING TECHNIQUES FOR DEVELOPMENT JOURNALISTS (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Translating Jargon into Conversational Prose:</strong> A development reporter must convert technical medical, agricultural, or economic jargon into everyday language (e.g., explaining "micro-nutrient deficiency" simply as "hidden hunger caused by poor food variety").</li>
              <li><strong>Human-Interest Narrative Framing:</strong> Instead of reciting dry government statistics, anchor the article in the lived reality of a real person (e.g., profiling one mother\'s daily walk for clean water to highlight a broken bore-hole system).</li>
              <li><strong>Constructive, Solution-Oriented Framing:</strong> Beyond exposing a crisis, investigate workable community solutions, policy remedies, and successful case studies from other regions to inspire positive action.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 4',
        title: 'Participatory Development Communication & Communication Planner Roles',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Probability (Appeared in 58% of diets)',
        scoringGuide: [
          'Part (a): Definition of PDC and justification over top-down approaches (7.5 marks)',
          'Part (b): 3 core functions of the communication planner in PDC (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Dialogue, Local ownership; Facilitator, Needs analyst, Bridge-builder.',
        questionText: `(a) What do you understand by Participatory Development Communication (PDC), and why is the participatory paradigm preferred over top-down approaches in rural development? (7.5 Marks)
(b) Communication planners perform vital functions in driving PDC projects. Discuss three (3) primary roles of a communication planner in this context. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): PDC AND WHY PARTICIPATION IS PREFERRED (7.5 Marks)</h4>
            <p><strong>Definition:</strong> Participatory Development Communication (PDC) is a two-way, dialogic communication methodology that actively involves local community members in identifying their problems, setting development priorities, designing interventions, and managing implementation.</p>
            <p><strong>Why PDC is Preferred over Top-Down Approaches:</strong></p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Fosters Local Ownership:</strong> When villagers contribute ideas and labor to a project, they view it as their personal property and safeguard it against vandalism, ensuring long-term sustainability.</li>
              <li><strong>Respects and Integrates Indigenous Wisdom:</strong> Rural dwellers possess invaluable ecological and cultural intelligence; PDC incorporates these insights rather than imposing ill-fitting foreign models.</li>
              <li><strong>Prevents White-Elephant Failures:</strong> Avoids building projects that the community neither requested nor understands how to maintain.</li>
            </ul>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THREE FUNCTIONS OF THE COMMUNICATION PLANNER IN PDC (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Facilitator of Democratic Dialogue:</strong> The planner creates a non-judgmental atmosphere (town halls, focus groups) ensuring marginalized groups—particularly women and youth—speak openly without intimidation.</li>
              <li><strong>Participatory Needs Assessment Analyst:</strong> Utilizing Participatory Rural Appraisal (PRA) tools, the planner guides the community to identify the root causes of their challenges rather than treating superficial symptoms.</li>
              <li><strong>Bridge-Builder / Linkage Coordinator:</strong> Connects the community with external funding donors, technical experts, and government ministries to secure needed resources.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 5',
        title: 'The Supremacy of Radio in Rural Development & TV Formats',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'High Probability (Appeared in 58% of diets)',
        scoringGuide: [
          'Part (a): Justification of radio\'s supremacy in rural development (7.5 marks)',
          'Part (b): 2 TV development formats with Nigerian broadcast examples (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Battery power, illiterate access, low cost; Edutainment Drama (MTV Shuga), Documentary (Environment Matters).',
        questionText: `(a) Radio has consistently been adjudged the best and most effective medium for rural development compared to television and print. Justify this assertion. (7.5 Marks)
(b) Television employs specialized formats to propagate developmental goals. Identify and discuss two (2) television formats used for development communication, citing real examples from television stations in Nigeria (e.g., NTA, Channels TV). (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): JUSTIFYING RADIO\'S SUPREMACY IN RURAL DEVELOPMENT (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Complete Independence from Electricity Grids:</strong> Rural Nigerian villages suffer severe power poverty. Radio receivers operate reliably on cheap dry-cell batteries or solar energy, functioning where televisions are useless.</li>
              <li><strong>Overcomes Textual Illiteracy:</strong> Radio uses the human voice, storytelling, and sound effects, enabling illiterate rural citizens to access vital knowledge without reading barriers.</li>
              <li><strong>Affordability and Low Production Costs:</strong> A radio receiver is affordable for low-income households, and producing radio jingles or agricultural broadcasts costs a fraction of television budgets.</li>
              <li><strong>Linguistic Flexibility and Cultural Localization:</strong> Radio easily broadcasts in diverse indigenous dialects, fostering deep trust and comprehension.</li>
              <li><strong>Portability:</strong> Farmers and market traders listen while working in fields and stalls without disrupting their daily physical labor.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): TWO TELEVISION FORMATS FOR DEVCOMM WITH NIGERIAN EXAMPLES (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Television Drama / Soap Operas (Edutainment):</strong><br>
              <em>Discussion:</em> Weaves critical developmental themes (reproductive health, maternal care, HIV stigma) into compelling fictional narratives.<br>
              <em>Nigerian Example:</em> <em>MTV Shuga Naija</em> (aired on NTA and Silverbird TV), which educates youth on adolescent sexual health and gender-based violence.</li>
              <li><strong>Documentary Format:</strong><br>
              <em>Discussion:</em> Provides an in-depth, visually substantiated investigation of a pressing developmental crisis, combining evidence, expert interviews, and affected citizen testimonies.<br>
              <em>Nigerian Example:</em> <em>Environment Matters</em> on Channels Television, exploring environmental degradation, soil erosion in Eastern Nigeria, and oil pollution in the Niger Delta.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 6',
        title: 'Interpersonal Communication Strengths & UNICEF Backbone Activities',
        marks: '15 Marks',
        isCompulsory: false,
        frequencyNote: 'Moderate to High Probability (Appeared in 50% of diets)',
        scoringGuide: [
          'Part (a): 3 distinct strengths of IPC in behavior change (7.5 marks)',
          'Part (b): 2 UNICEF (2000) backbone activities (Advocacy, Social Mobilization) (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Trust, Immediate feedback, High persuasion; Advocacy (leaders), Mobilization (masses).',
        questionText: `(a) Interpersonal communication remains exceptionally strong in supporting the behavioral change process. Discuss three (3) distinct strengths of interpersonal communication in social change campaigns. (7.5 Marks)
(b) According to UNICEF (2000), key activities form the backbone of development communication program implementation. Explain two (2) of such core activities (such as advocacy or social mobilization). (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): THREE STRENGTHS OF INTERPERSONAL COMMUNICATION (IPC) (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>High Personal Trust and Credibility:</strong> In traditional societies, people adopt unfamiliar behaviors (such as childhood immunization or exclusive breastfeeding) much faster when advised face-to-face by a trusted neighbor, community health worker, or village elder than through anonymous mass media broadcasts.</li>
              <li><strong>Immediate Two-Way Feedback and Doubt Clarification:</strong> IPC allows community members to ask private questions, voice deep-seated fears, and receive immediate clarification in real-time.</li>
              <li><strong>Superior Persuasive Power for Behavioral Adoption:</strong> While mass media excel at creating general awareness, interpersonal communication is the most effective channel for converting that awareness into actual habit change.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): TWO UNICEF (2000) BACKBONE ACTIVITIES (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Advocacy:</strong> Targeted communication efforts aimed at influential political leaders, traditional rulers, and policymakers to secure political commitment, favorable legislation, policy backing, and government budget allocations.</li>
              <li><strong>Social Mobilization:</strong> Engaging civil society organizations, youth groups, women\'s associations, religious bodies, and community leadership to build broad-based social alliances for sustained grassroots action.</li>
            </ol>
          </div>
        `
      }
    ]
  },
  memorizationAids: {
    title: 'MAC 341 High-Yield Memorization Mnemonics',
    items: [
      {
        acronym: 'T-N-O-W-A',
        standsFor: 'Top-down, Neglect of culture, Over-emphasis on capital, Widening gaps, Assuming homogeneity',
        usage: '5 reasons why the Dominant Paradigm of development failed.'
      },
      {
        acronym: 'I-E-S-A-W',
        standsFor: 'Information, Education, Social mobilization, Agenda-setting, Watchdog',
        usage: '5 key roles of mass media in national development (Okigbo & Soola).'
      },
      {
        acronym: 'U-L-P-C-B',
        standsFor: 'Ubiquity, Language diversity, Portability, Cheap cost, Battery powered',
        usage: 'Why radio reigns supreme in rural African development.'
      },
      {
        acronym: 'F-A-B-M-C',
        standsFor: 'Facilitator, Analyst, Bridge-builder, Media integrator, Capacity builder',
        usage: '5 core roles of the communication planner in Participatory Development Communication (PDC).'
      }
    ]
  }
};
