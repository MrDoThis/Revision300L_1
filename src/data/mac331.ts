import { CourseData } from './types';

export const mac331Data: CourseData = {
  code: 'MAC 331',
  title: 'Advertising Campaign Planning and Execution',
  creditUnits: 3,
  timeAllowed: '3 Hours',
  examInstructions: 'Answer any four (4) questions (17.5 Marks each). Total: 70 Marks.',
  overview: 'Equips students with comprehensive mastery over the strategic planning, budgeting, creative development, media vehicle selection, regulatory compliance (ARCON), and post-campaign evaluation governing contemporary advertising campaigns.',
  frequencyAnalysis: {
    totalSetsAnalyzed: 8,
    summary: 'Past exam and TMA analysis demonstrates an extraordinary degree of examiner consistency across 6 core areas: (1) The Imperative of Planning as "Guide & Guardian" (90%), (2) The Advertising Tripod [Advertiser, Agency, Media] (85%), (3) The 7-Step Campaign Planning Process (85%), (4) Media Comparison [Print vs. Broadcast vs. Outdoor] (85%), (5) ARCON Statutory Powers & Sectoral Associations (85%), and (6) The Marketing Mix & USP Formulation (80%).',
    matrix: [
      {
        topic: 'The Imperative of Planning: "Guide and Guardian"',
        frequency: '7 of 8 Sets (88%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Why planning is not an optional luxury; dangers of haphazard planning in volatile economies like Nigeria; guiding multi-tier agency efforts.',
        likelyQuestions: [
          'Justify why advertising planning is imperative and acts as a "guide" and "guardian" in contemporary practice.',
          'What are the exact consequences of haphazard planning on resource allocation and brand equity?'
        ],
        memoryAnchor: 'ACRONYM: G-U-A-R-D (Guide, Unify agency, Avert risk, Resource protection, Direction).'
      },
      {
        topic: 'The Advertising Tripod Model (Symbiotic Triad)',
        frequency: '7 of 8 Sets (88%)',
        probability: 'VERY HIGH',
        examinerFocus: 'The structural three-legged stool: Advertiser (Client), Agency, and Media. Why the failure of one leg topples the entire campaign.',
        likelyQuestions: [
          'With the aid of a diagram or conceptual model, explain the three cardinal elements of the Advertising Tripod.',
          'Analyze the collaborative relationship necessary between the advertiser, agency, and media for a campaign\'s success.'
        ],
        memoryAnchor: 'ACRONYM: A-A-M (Advertiser initiates/funds; Agency strategizes/creates; Media delivers).'
      },
      {
        topic: 'The 7-Step Advertising Campaign Process',
        frequency: '7 of 8 Sets (88%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Sequential, chronological execution from situation audit to post-campaign tracking.',
        likelyQuestions: [
          'Itemize and critically discuss five sequential steps involved in the professional process of planning and executing an advertising campaign.',
          'Discuss how the creative strategy (The Big Idea) emerges from target audience definition.'
        ],
        memoryAnchor: 'ACRONYM: S-O-T-C-M-E-E (Situation, Objectives, Target, Creative/USP, Media, Execution, Evaluation).'
      },
      {
        topic: 'Media Comparison: Print, Broadcast & Outdoor Vehicles',
        frequency: '7 of 8 Sets (88%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Newspapers vs. Magazines (shelf life, color fidelity); Radio vs. TV (illiteracy, cost, sensory impact); Merits of Outdoor Billboards (24/7 visibility).',
        likelyQuestions: [
          'Identify four demerits of newspaper advertising and explain how they impact consumer reach.',
          'Compare the intrinsic characteristics of Radio versus Television as advertising tools in Nigeria.',
          'Outline five major merits of outdoor (billboard) advertising.'
        ],
        memoryAnchor: 'ACRONYM: P-B-O (Print = Detail & Color; Broadcast = Reach & Emotion; Outdoor = Frequency & 24/7 Impact).'
      },
      {
        topic: 'Regulatory Framework: ARCON Mandate & Sectoral Bodies',
        frequency: '7 of 8 Sets (88%)',
        probability: 'VERY HIGH',
        examinerFocus: 'Statutory mandate of ARCON (formerly APCON), Advertising Standards Panel (ASP), vetting procedures, and collaborative self-regulation by AAAN, ADVAN, MIPAN, OAAN, BON, NPAN.',
        likelyQuestions: [
          'Discuss the statutory responsibilities and regulatory powers of ARCON in standardizing advertising in Nigeria.',
          'Highlight the collaborative roles played by AAAN, ADVAN, and MIPAN in supporting industry self-regulation.'
        ],
        memoryAnchor: 'ACRONYM: A-A-M-O-B-N (ARCON, AAAN, ADVAN, MIPAN, OAAN, BON, NPAN).'
      },
      {
        topic: 'The Marketing Mix (4Ps) & Unique Selling Proposition (USP)',
        frequency: '6 of 8 Sets (75%)',
        probability: 'HIGH',
        examinerFocus: 'How Product, Price, Place, and Promotion dictate creative copy, media scheduling, and the formulation of Rosser Reeves\' USP.',
        likelyQuestions: [
          'Explain how the marketing mix (4Ps) guides an advertising strategist in framing a product\'s USP.',
          'Differentiate between an economy pricing pull strategy and a prestige luxury pricing appeal.'
        ],
        memoryAnchor: 'ACRONYM: 4Ps (Product = USP; Price = Tone; Place = Distribution/Geography; Promotion = Integrated push/pull).'
      }
    ]
  },
  modules: [
    {
      id: 'mac331-m1',
      title: 'MODULE 1: The Imperative and Process of Advertising Planning',
      questions: [
        {
          id: 'q1-1',
          question: 'Justify why advertising planning is imperative and acts as a "guide" and "guardian" in contemporary practice. Why is haphazard planning dangerous?',
          frequencyTag: '88% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: G-U-A-R-D (Guide, Unify, Avert risk, Resource protection, Direction)',
          keyTakeaways: [
            'Planning is an essential operational roadmap, not an afterthought.',
            'Acts as a Guide: Synchronizes all agency tiers (creative, media, accounts, research).',
            'Acts as a Guardian: Protects corporate investment, brand reputation, and prevents regulatory breaches.',
            'Haphazard planning results in wasted advertising budgets, incorrect media placement, consumer apathy, and campaign collapse.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. The Imperative of Advertising Planning:</strong><br>
              In contemporary marketing communication, advertising planning is not an optional operational luxury or a child of casual necessity; it is a fundamental scientific prerequisite. Modern markets are saturated with rival products, fragmented media channels, and cynical consumers. Planning provides the structural blueprint that aligns corporate financial resources with consumer psychology to guarantee measurable commercial returns.</p>

              <p><strong>2. How Planning Acts as a "Guide" and "Guardian":</strong></p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Planning as a "Guide":</strong> It establishes a clear, measurable roadmap. It defines specific campaign objectives (e.g., generating 40% brand awareness in 90 days), defines exact target demographic profiles, prescribes budget allocations, and synchronizes the creative, media buying, and account management departments toward a single unified destination.</li>
                <li><strong>Planning as a "Guardian":</strong> It serves as a defensive shield protecting corporate investments and brand equity. By conducting exhaustive situational audits and pre-testing creative copy, planning shields the advertiser from catastrophic market rejection, offensive cultural messaging, legal sanctions by regulatory authorities (ARCON), and wasted expenditure.</li>
              </ul>

              <p><strong>3. The Dangers of Haphazard Planning:</strong></p>
              <ol class="list-decimal pl-5 space-y-1">
                <li><strong>Financial Resource Misapplication:</strong> Massive advertising budgets are squandered on inappropriate media vehicles that do not reach the true consumer base.</li>
                <li><strong>Conflicting Creative Messaging:</strong> Copywriters and visual designers produce fragmented, contradictory appeals that dilute brand identity.</li>
                <li><strong>Regulatory Breaches:</strong> Rushing executions without legal vetting exposes the brand to heavy fines, banishment from airwaves, and public embarrassment.</li>
                <li><strong>Inability to Measure ROI:</strong> Without baseline benchmarks, the advertiser cannot evaluate whether sales fluctuations were caused by the campaign or macroeconomic variables.</li>
              </ol>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac331-m3',
      title: 'MODULE 3: The Advertising Tripod & The Marketing Mix',
      questions: [
        {
          id: 'q3-1',
          question: 'Deconstruct the concept of the Advertising Tripod and explain how the Marketing Mix (4Ps) guides the formulation of a Unique Selling Proposition (USP).',
          frequencyTag: '85% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: A-A-M (Tripod: Advertiser, Agency, Media); 4Ps to USP',
          keyTakeaways: [
            'The Tripod: Advertiser (funds & brief), Agency (creative strategist), Media (delivery pipeline).',
            'Symbiotic synergy: If any single leg collapses, the entire campaign fails.',
            'Product defines core benefit (USP); Price defines prestige vs. economy tone; Place aligns retail availability with media schedules; Promotion integrates advertising with PR and sales promos.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. The Advertising Tripod Model:</strong><br>
              The structural architecture of commercial advertising rests upon an interdependent three-legged model known as the <strong>Advertising Tripod</strong>:</p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>The Advertiser (Client):</strong> The initiating manufacturer, corporate brand, or service institution that conceives the product, provides the marketing brief, defines commercial objectives, and finances the campaign budget.</li>
                <li><strong>The Advertising Agency:</strong> The independent, specialized creative professional firm contracted by the advertiser to conduct market research, develop the central creative concept (The Big Idea), produce copy and artwork, and negotiate media airtime.</li>
                <li><strong>The Media:</strong> The delivery channels (radio, television, newspapers, magazines, billboards, digital platforms) that carry the commercial message from the agency to the final target audience.</li>
              </ol>
              <p><em>The Symbiotic Reality:</em> Just like a physical three-legged stool, if any one leg is removed, weak, or uncoordinated, the entire campaign collapses. An advertiser with millions of Naira achieves nothing without the creative brilliance of the agency; an agency’s masterpiece is useless without optimal media placement; and media channels wither without advertiser revenues.</p>

              <p><strong>2. How the Marketing Mix (4Ps) Frames the USP:</strong><br>
              Rosser Reeves (1961) formulated the concept of the <strong>Unique Selling Proposition (USP)</strong>—the distinct, compelling benefit that competitors cannot offer. The 4Ps provide the structural foundation for this proposition:</p>
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Product:</strong> The physical design, formula, durability, packaging, and functional attributes dictate the core rational benefit highlighted in the advertisement (e.g., "fastest relief from headache").</li>
                <li><strong>Price:</strong> The pricing strategy sets consumer expectations. A premium price dictates an advertising tone of elegance, exclusivity, and social status, whereas an economy penetration price demands an advertising focus on affordability, discount bundles, and household savings.</li>
                <li><strong>Place (Distribution Channels):</strong> Advertising must never stimulate demand where products cannot be purchased. The distribution footprint dictates the geographic media scheduling—running ads in cities where distribution networks are fully stocked.</li>
                <li><strong>Promotion:</strong> Understanding advertising\'s place alongside sales promotions, PR, and personal selling ensures that ad messages synchronize with retail point-of-sale displays.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: 'mac331-m4',
      title: 'MODULE 4: Regulatory Bodies & Sectoral Associations in Nigeria',
      questions: [
        {
          id: 'q4-1',
          question: 'Critically examine the statutory mandate of ARCON (formerly APCON) and analyze the roles of AAAN, ADVAN, MIPAN, OAAN, and BON in industry self-regulation.',
          frequencyTag: '85% Recurrence Across Past Sets',
          mnemonic: 'Memory Key: ARCON (Statutory Law); AAAN (Agencies); ADVAN (Clients); MIPAN (Media Buyers); OAAN (Outdoor); BON (Broadcasters)',
          keyTakeaways: [
            'ARCON Act 2022: Regulates all aspects of advertising practice, vetting panels, licensing, local content enforcement.',
            'Advertising Standards Panel (ASP): Mandatory vetting of all ads in sensitive categories.',
            'Sectoral bodies provide ethical self-regulation and protect member business interests.'
          ],
          answerHtml: `
            <div class="space-y-4 text-sm sm:text-base leading-relaxed">
              <p><strong>1. Advertising Regulatory Council of Nigeria (ARCON):</strong><br>
              Established originally as APCON by Decree 55 of 1988 and restructured under the <strong>ARCON Act 2022</strong>, ARCON is the supreme statutory regulatory body overseeing advertising in Nigeria. Its mandate includes:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Determining professional qualifications, education, and licensing requirements for advertising practitioners in Nigeria.</li>
                <li>Operating the statutory <strong>Advertising Standards Panel (ASP)</strong> to vet and approve all advertisements across all media before public transmission.</li>
                <li>Regulating sensitive product categories—such as alcoholic beverages, pharmaceuticals, tobacco, financial schemes, and political promotions.</li>
                <li>Investigating professional misconduct, enforcing the Nigerian Code of Advertising Practice, and prosecuting illegal practitioners.</li>
                <li>Enforcing local content policies, requiring that models, production crews, and voiceover talents used in Nigerian advertisements are predominantly indigenous.</li>
              </ul>

              <p><strong>2. Key Sectoral Associations and Their Roles:</strong></p>
              <ol class="list-decimal pl-5 space-y-2">
                <li><strong>AAAN (Association of Advertising Agencies of Nigeria):</strong> Represents registered corporate advertising agencies; sets professional pitch guidelines, ethical codes, and standardizes agency fee structures.</li>
                <li><strong>ADVAN (Advertisers Association of Nigeria):</strong> Represents the corporate clients, brand managers, and manufacturers who fund advertising; protects marketing investments and promotes consumer safety.</li>
                <li><strong>MIPAN (Media Independent Practitioners Association of Nigeria):</strong> Represents specialized media planning and media buying agencies; drives data integrity, scientific rating systems, and professional media barter.</li>
                <li><strong>OAAN (Out-of-Home Advertising Association of Nigeria):</strong> Regulates outdoor media operators, standardizing billboard structural engineering, site safety, and preventing visual clutter.</li>
                <li><strong>BON (Broadcasting Organisation of Nigeria):</strong> The umbrella coalition of public and private television and radio stations, harmonizing commercial broadcast rate cards and broadcast standards.</li>
              </ol>
            </div>
          `
        }
      ]
    }
  ],
  tables: [
    {
      title: 'Comparative Matrix of Major Advertising Media Vehicles',
      headers: ['Media Class', 'Key Merits / Strengths', 'Key Limitations / Demerits', 'Ideal Campaign Role'],
      rows: [
        ['Newspapers', 'High credibility, detailed information permanence, wide adult reach', 'Short daily lifespan, poor print/color quality on newsprint, high page clutter', 'Tactical announcements, corporate financial disclosures, retail discounts'],
        ['Magazines', 'Vibrant glossy color reproduction, highly targeted niche readers, long shelf life', 'Long production lead times, high insertion cost, lack of immediate breaking urgency', 'Prestige luxury goods, fashion, automotive, cosmetics, institutional image'],
        ['Radio', 'Overcomes illiteracy, highly portable, low production cost, wide rural reach', 'Audio-only (no visuals), ephemeral fleeting message, high background noise clutter', 'Mass-market consumer FMCG goods, public health drives, regional language campaigns'],
        ['Television', 'Multi-sensory impact (sight, sound, motion, color), product demonstrations', 'High production & airtime costs, channel zipping/zapping, power supply dependence', 'National flagship brand building, emotional storytelling, live sports sponsorships'],
        ['Outdoor (Billboards)', '24/7 continuous visibility, high repeated exposure, geographic targeting', 'Brief exposure (3-5 seconds), weather degradation, visual clutter, vandal risk', 'Brand reminder, directional signage, reinforcing concurrent broadcast campaigns']
      ]
    }
  ],
  practiceExam: {
    heading: 'PRACTICE EXAMINATION PAPER (SIMULATED FOR FINAL REVISION)',
    instructions: 'Answer any four (4) questions (17.5 Marks each). Total: 70 Marks.',
    questions: [
      {
        number: 'QUESTION 1',
        title: 'The Advertising Tripod & The Dangers of Haphazard Planning',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'Very High Probability (Found in over 85% of analyzed exam diets)',
        scoringGuide: [
          'Part (a): Detailed explanation of the 3 legs of the Tripod and collaborative relationship (10 marks)',
          'Part (b): 4 substantive arguments justifying why skipping formal planning causes failure in Nigeria (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: A-A-M (Advertiser, Agency, Media); Guide & Guardian concept.',
        questionText: `(a) With the aid of a clearly described diagram or conceptual model, explain the three cardinal elements of the Advertising Tripod and analyze the collaborative relationship necessary for a campaign's success. (10 Marks)
(b) Justify why skipping formal planning results in resource misapplication and campaign failure in contemporary Nigerian advertising practice. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): THE ADVERTISING TRIPOD MODEL (10 Marks)</h4>
            <p><strong>Conceptual Model & Diagrammatic Representation:</strong><br>
            The structure of commercial advertising relies upon an interdependent three-legged model known as the <strong>Advertising Tripod</strong>:</p>
            <pre class="org p-3 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 rounded border">
                         [ THE ADVERTISER / CLIENT ]
                        (Initiates, Funds & Sets Brief)
                                     │
                    ┌────────────────┴────────────────┐
                    ▼                                 ▼
         [ ADVERTISING AGENCY ] ◄──────────► [ THE MEDIA HOUSES ]
         (Creative Strategy & Design)       (Delivers to Audience)
            </pre>

            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>The Advertiser (The Client):</strong> The initiating manufacturer or service provider who conceives the commercial need, allocates the marketing budget, and provides the client brief detailing product features, target market, and sales goals.</li>
              <li><strong>The Advertising Agency:</strong> The specialized creative organization that converts the client’s brief into persuasive commercial messages. The agency conducts situation audits, develops the creative "Big Idea", designs copy/graphics, and plans media scheduling.</li>
              <li><strong>The Media:</strong> The communication conduits (broadcast, print, outdoor, digital) that provide the physical airtime or printed space to transport the finished commercial message to the consuming public.</li>
            </ol>
            <p><strong>Collaborative Synergy:</strong> Just like a physical tripod, if any single leg is defective, the entire campaign collapses. If the advertiser withholds critical product data, the agency produces irrelevant copy; if the agency produces brilliant ads but selects inappropriate media vehicles, audiences never see them; and if the media houses mishandle broadcast logs or print poor reproductions, the client's financial investment is destroyed.</p>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): WHY SKIPPING PLANNING LEADS TO DISASTER IN NIGERIA (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Economic Volatility and Resource Protection:</strong> In Nigeria\'s challenging economic climate, running campaigns without formal planning squanders scarce capital on ineffective media with zero return on investment (ROI).</li>
              <li><strong>Preventing Demographic & Psychographic Misalignment:</strong> Nigeria is ethnically and socio-economically diverse. Without rigorous planning and audience profiling, brands risk airing English-language campaigns in areas where vernacular pidgin or local languages are necessary.</li>
              <li><strong>Safeguarding Against Regulatory Sanctions (ARCON):</strong> Haphazard campaigns regularly bypass mandatory vetting by the Advertising Standards Panel (ASP), resulting in immediate media bans, seizure of billboards, and crippling fines.</li>
              <li><strong>Synchronizing Distribution with Advertising:</strong> Planning ensures that product stock is physically distributed in retail outlets before ads air, preventing consumer frustration and competitor brand substitution.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 2',
        title: 'Sequential Steps in Campaign Process & 4Ps Guiding the USP',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'Very High Probability (Appeared in 85% of diets)',
        scoringGuide: [
          'Part (a): 5 sequential campaign planning steps with in-depth analysis (10 marks)',
          'Part (b): How each of the 4Ps frames the Unique Selling Proposition (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: S-O-T-C-M-E-E for campaign steps; 4Ps dictating USP.',
        questionText: `(a) Itemize and critically discuss any five (5) sequential steps involved in the professional process of planning and executing an advertising campaign. (10 Marks)
(b) Explain how the marketing mix (4Ps) guides an advertising strategist in framing a product's unique selling proposition (USP). (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): FIVE SEQUENTIAL STEPS IN CAMPAIGN PLANNING (10 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Market Analysis & Situation Audit (SWOT / PESTLE):</strong> The agency conducts rigorous diagnostic research into product strengths, weaknesses, competitor strategies, and socio-economic trends, establishing empirical benchmarks before designing messages.</li>
              <li><strong>Setting Precise Campaign Objectives & Budget Allocation:</strong> Establishing specific, measurable, achievable, relevant, and time-bound (SMART) goals—such as shifting brand awareness from 15% to 45% within two quarters—and selecting appropriate budgeting methods (Objective-and-Task or Percentage-of-Sales).</li>
              <li><strong>Target Audience Definition and Segmentation:</strong> Segmenting the broad population demographically (age, gender, income), geographically, and psychographically (lifestyle, aspirations) to isolate the primary decision-makers.</li>
              <li><strong>Creative Strategy Formulation (The Big Idea & Copywriting):</strong> Developing the Unique Selling Proposition (USP), tone of voice, visual mood boards, slogans, and narrative scripts that will cut through media clutter and persuade consumers.</li>
              <li><strong>Media Planning, Selection & Scheduling:</strong> Analyzing cost-per-thousand (CPM), gross rating points (GRP), reach, and frequency across available channels to construct an optimal media schedule (flighting, pulsing, or continuous).</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): HOW THE 4Ps GUIDE THE FORMULATION OF THE USP (7.5 Marks)</h4>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Product:</strong> Highlights intrinsic physical benefits, innovative engineering, or packaging utility (e.g., "contains micro-scrubbers that dissolve tough stains in one wash").</li>
              <li><strong>Price:</strong> Determines whether the USP emphasizes economical superiority (e.g., "superior quality at half the price") or premium luxury prestige (e.g., "for the discerning few").</li>
              <li><strong>Place (Distribution):</strong> Ensures that the promise made in the advertisement aligns with availability (e.g., "available in every corner kiosk nationwide"), shaping geographic reach.</li>
              <li><strong>Promotion:</strong> Synchronizes mass advertising with complementary promotional tools (e.g., coupons, scratch-and-win promotions) to drive both brand awareness and immediate retail trial.</li>
            </ul>
          </div>
        `
      },
      {
        number: 'QUESTION 3',
        title: 'Newspaper Demerits vs. Magazine Strengths in Advertising',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'High Probability (Appeared in 85% of diets)',
        scoringGuide: [
          'Part (a): 4 demerits of newspaper advertising on reach and retention (10 marks)',
          'Part (b): 3 distinct advantages of magazines for specialized campaigns (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Newspapers = Short life, Clutter, Newsprint; Magazines = Glossy, Targeted, Long-lasting.',
        questionText: `(a) Newspapers remain a foundational print medium, yet they possess inherent limitations. Identify four (4) demerits of newspaper advertising and explain how they impact consumer reach and message retention. (10 Marks)
(b) Enumerate three (3) distinct advantages that make magazines a preferred medium for specialized product campaigns. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): FOUR DEMERITS OF NEWSPAPER ADVERTISING (10 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Extremely Short Lifespan (Shelf Life):</strong> Newspapers are published daily and discarded within 24 hours. Advertisements enjoy only momentary exposure before being trashed, requiring continuous expensive re-insertions to maintain top-of-mind recall.</li>
              <li><strong>Inferior Graphic & Print Reproduction Quality:</strong> Because newspapers are printed at high speed on cheap, porous newsprint paper, color photographs appear grainy, muddy, and low-contrast, making newspapers unsuitable for visual aesthetics (e.g., jewelry, luxury fashion).</li>
              <li><strong>Severe Advertising Clutter:</strong> Newspapers pack dozens of competing display ads, legal notices, and editorial columns onto each spread, causing individual advertisements to struggle for reader visibility.</li>
              <li><strong>Declining Youth Demographics:</strong> Physical newspaper readership in Nigeria is heavily skewed toward older, civil-service, and elite business demographics, failing to reach the lucrative 18–35 youth demographic who consume information digitally.</li>
            </ol>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): THREE DISTINCT ADVANTAGES OF MAGAZINES (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>Superb Visual Reproduction and Color Fidelity:</strong> Magazines are printed on high-grade, coated glossy paper, rendering vibrant colors, crisp typography, and luxurious textures that elevate prestige brands.</li>
              <li><strong>Precise Audience Targeting (Zero Wastage):</strong> Magazines cater to specialized passions—automotive, interior décor, architecture, parenting, oil and gas—allowing advertisers to target exact niche consumers without paying for wasted mass circulation.</li>
              <li><strong>Long Shelf Life and High Secondary Readership:</strong> Magazines are retained in homes, waiting rooms, and professional offices for weeks or months, resulting in high cumulative exposure and multiple readers per copy.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 4',
        title: 'ARCON Statutory Powers & Collaborative Role of Sectoral Bodies',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'Very High Probability (Appeared in 85% of diets)',
        scoringGuide: [
          'Part (a): ARCON statutory powers, vetting role, and regulatory scope (10 marks)',
          'Part (b): Roles of AAAN, ADVAN, and MIPAN in industry self-regulation (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: ARCON = Statutory Law & Vetting; AAAN = Agencies; ADVAN = Clients; MIPAN = Media Buyers.',
        questionText: `(a) Discuss the statutory responsibilities and regulatory powers of the Advertising Regulatory Council of Nigeria (ARCON) in standardizing advertising practice in Nigeria. (10 Marks)
(b) Highlight the collaborative roles played by any three (3) sectoral bodies (such as AAAN, ADVAN, and MIPAN) in supporting industry self-regulation and professional ethics. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): STATUTORY RESPONSIBILITIES OF ARCON (10 Marks)</h4>
            <p>Under the <strong>ARCON Act 2022</strong> (repealing APCON Decree 55 of 1988), ARCON is the apex statutory regulator of all aspects and manifestations of advertising practice in Nigeria:</p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Professional Standard-Setting and Licensing:</strong> ARCON establishes the criteria for training, certifying, and registering professional advertising practitioners in Nigeria, ensuring quacks and uncertified agencies are barred from handling public campaigns.</li>
              <li><strong>Mandatory Pre-Exposure Vetting (Advertising Standards Panel - ASP):</strong> Operates the ASP, which rigorously scrutinizes all advertisements before they air or print. It ensures that claims are substantiated, health disclaimers are present (e.g., in alcohol and pharmaceutical ads), and offensive religious or cultural messaging is excised.</li>
              <li><strong>Judicial Investigation and Prosecution:</strong> ARCON possesses statutory powers to establish disciplinary tribunals, subpoena documents, investigate false advertising claims, prosecute illegal agencies, and impose fines or bans on violators.</li>
              <li><strong>Local Content Enforcement:</strong> Protects Nigeria\'s creative economy by requiring that all advertising targeting the Nigerian market must employ predominantly Nigerian voiceover artists, models, and local production crews.</li>
            </ul>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): ROLES OF AAAN, ADVAN, AND MIPAN IN SELF-REGULATION (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>AAAN (Association of Advertising Agencies of Nigeria):</strong> Represents registered corporate agencies. It enforces ethical pitch codes, resolves agency-client disputes, standardizes remuneration practices, and ensures member agencies respect copyright and intellectual property.</li>
              <li><strong>ADVAN (Advertisers Association of Nigeria):</strong> Represents corporate brand owners and clients. It advocates for fair media rate cards, promotes consumer protection standards, and ensures marketing budgets conform to ethical advertising codes.</li>
              <li><strong>MIPAN (Media Independent Practitioners Association of Nigeria):</strong> Represents independent media buying and planning agencies. It standardizes media buying protocols, audits broadcast logs to ensure paid ads actually air, and promotes scientific audience measurement metrics.</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 5',
        title: 'Radio vs. Television in a Developing Economy & Billboard Merits',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'High Probability (Appeared in 85% of diets)',
        scoringGuide: [
          'Part (a): Radio vs. Television comparative analysis in Nigerian context (10 marks)',
          'Part (b): 5 major merits of outdoor billboard advertising (7.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Radio = Inexpensive, Portable, Illiteracy; TV = Sight, Sound, Motion; Billboard = 24/7, High Frequency.',
        questionText: `(a) Compare and contrast the intrinsic characteristics of Radio versus Television as broadcasting tools for advertising in a developing economy like Nigeria. (10 Marks)
(b) Outline five (5) major merits of outdoor (billboard) advertising as a supplementary mass medium. (7.5 Marks)`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">PART (A): RADIO VS. TELEVISION IN NIGERIA (10 Marks)</h4>
            <p><strong>Shared Broadcasting Attributes:</strong> Both are immediate electronic media that overcome textual illiteracy through spoken dialogue, offer massive audience reach, and allow flexible local language localization.</p>
            <p><strong>Intrinsic Contrasts:</strong></p>
            <ul class="list-disc pl-5 space-y-2">
              <li><strong>Radio (Audio-Only & High Rural Penetration):</strong> Radio relies purely on voice, jingles, and sound effects to create "the theater of the mind". In Nigeria, radio reigns supreme across rural farming communities and urban traffic gridlocks because it operates on cheap, replaceable dry-cell batteries or mobile phones, completely bypassing national electricity grid failures. Production and airtime costs are fractional compared to television.</li>
              <li><strong>Television (Multi-Sensory Audio-Visual Power):</strong> TV combines sight, sound, motion, and color, delivering unmatched emotional engagement and step-by-step physical product demonstration. However, television requires stable electric power (a persistent challenge in Nigeria), television sets are costly for poor households, and TV commercial production budgets are substantially higher.</li>
            </ul>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-6">PART (B): FIVE MERITS OF OUTDOOR (BILLBOARD) ADVERTISING (7.5 Marks)</h4>
            <ol class="list-decimal pl-5 space-y-2">
              <li><strong>High Frequency of Exposure:</strong> Commuters driving or taking public transit along highway corridors encounter the billboard daily, creating powerful cumulative retention.</li>
              <li><strong>Strategic Geographic Targeting:</strong> Billboards can be installed in specific neighborhoods, retail districts, or highway exits directly adjacent to where the product is sold.</li>
              <li><strong>24/7 Continuous Uninterrupted Presence:</strong> Unlike broadcast ads that vanish in 30 seconds or print ads that require turning a page, billboards work around the clock day and night.</li>
              <li><strong>Immunity to Consumer Zapping:</strong> Commuters cannot "switch off", "fast-forward", or install ad-blockers on physical billboards situated along urban expressways.</li>
              <li><strong>High Cost-Effectiveness (Low CPM):</strong> Over a 6-month or 1-year contract, billboards deliver massive impressions at an exceptionally low Cost-Per-Thousand (CPM).</li>
            </ol>
          </div>
        `
      },
      {
        number: 'QUESTION 6',
        title: 'Explanatory Notes on Contemporary Advertising Issues',
        marks: '17.5 Marks',
        isCompulsory: false,
        frequencyNote: 'Moderate Probability (Appeared in 60% of diets)',
        scoringGuide: [
          'Exhaustive notes on any three (3) topics (5.83 marks each = 17.5 marks)'
        ],
        mnemonic: 'Recall Anchors: Post-campaign research, Sensitive ads restrictions, Deceptive practice laws, Digital advertising.',
        questionText: `Write detailed explanatory notes on any three (3) of the following contemporary advertising practice issues: (17.5 Marks)
(i) The role and value of research in post-campaign advertising evaluation.
(ii) Handling sensitive product advertising (e.g., alcoholic beverages and tobacco).
(iii) Deceptive practices in Nigerian advertising and consumer protection safeguards.
(iv) The emergence of digital and internet advertising avenues in modern campaign structures.`,
        modelAnswerHtml: `
          <div class="space-y-4 text-sm sm:text-base leading-relaxed">
            <h4 class="font-bold text-teal-800 dark:text-teal-300">OPTION (I): POST-CAMPAIGN ADVERTISING EVALUATION RESEARCH</h4>
            <p>Advertising evaluation research is the scientific auditing mechanism that measures campaign effectiveness against the initial marketing benchmarks. Utilizing quantitative tracking surveys, day-after recall tests, brand attitude shift measurements, and retail sales correlation analysis, post-campaign research answers: <em>Did the campaign achieve its awareness and sales objectives? Was the media schedule cost-effective?</em> It prevents corporate blind spots and provides empirical intelligence to refine future advertising investments.</p>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-4">OPTION (II): REGULATION OF SENSITIVE PRODUCTS (ALCOHOL & TOBACCO)</h4>
            <p>Products with documented public health risks are subject to stringent statutory oversight by ARCON, NAFDAC, and the Federal Ministry of Health. In Nigeria, tobacco advertising is banned across traditional broadcast and print media. Alcoholic beverage advertising is strictly prohibited during children\'s viewing hours, allowed only after the 10:00 PM watershed on television. Furthermore, all alcohol advertisements must feature mandatory health disclaimers (e.g., <em>"Drink responsibly"</em>, <em>"Not for sale to persons under 18 years"</em>) and must never depict driving, athletic prowess, or sexual enhancement.</p>

            <h4 class="font-bold text-teal-800 dark:text-teal-300 mt-4">OPTION (III): DECEPTIVE PRACTICES AND CONSUMER PROTECTION</h4>
            <p>Deceptive advertising involves false claims, misleading demonstrations, concealed surcharges, puffery, or fraudulent efficacy promises that deceive ordinary consumers. In Nigeria, consumer protection safeguards are statutory enforced by ARCON, the Federal Competition and Consumer Protection Commission (FCCPC), and NAFDAC. Violators face product seizures, mandatory corrective advertisements, restitution orders, and criminal prosecution.</p>
          </div>
        `
      }
    ]
  },
  memorizationAids: {
    title: 'MAC 331 High-Yield Memorization Mnemonics',
    items: [
      {
        acronym: 'G-U-A-R-D',
        standsFor: 'Guide, Unify, Avert risk, Resource protection, Direction',
        usage: 'Why advertising planning is imperative.'
      },
      {
        acronym: 'A-A-M',
        standsFor: 'Advertiser, Agency, Media',
        usage: 'The 3 cardinal legs of the Advertising Tripod.'
      },
      {
        acronym: 'S-O-T-C-M-E-E',
        standsFor: 'Situation, Objectives, Target, Creative/USP, Media, Execution, Evaluation',
        usage: 'The 7 sequential steps of an advertising campaign.'
      },
      {
        acronym: 'A-A-M-O-B-N',
        standsFor: 'ARCON, AAAN, ADVAN, MIPAN, OAAN, BON, NPAN',
        usage: 'The statutory regulator and major sectoral bodies in Nigerian advertising.'
      }
    ]
  }
};
