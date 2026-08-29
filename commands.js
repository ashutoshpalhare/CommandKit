/**
 * ChatGPT Command Library - Command Data
 * ---------------------------------------
 * Each command is a structured object. To add a new command, copy one of
 * the objects below, change the fields, and increment the id.
 *
 * Fields:
 *   id          - unique number
 *   command     - the slash command (starts with /)
 *   title       - human-friendly name
 *   category    - one of the categories listed in the sidebar
 *   description - short one-line description
 *   example     - a full example prompt using the command
 *   details     - longer explanation shown when the card is expanded
 *   tips        - array of usage tips shown when the card is expanded
 *   favorite    - default favorite state (managed by LocalStorage at runtime)
 */

const commands = [
  /* ===================== WRITING ===================== */
  {
    id: 1,
    command: "/rewrite",
    title: "Rewrite Text",
    category: "Writing",
    description: "Rewrite text while preserving its original meaning.",
    example: "/rewrite Make this email more professional.",
    details: "Rephrases the provided text using different wording and sentence structure while keeping the core message intact. Useful for improving tone, clarity, or style.",
    tips: ["Specify a target tone (professional, casual, academic).", "Works best on paragraphs under 300 words."],
    favorite: false
  },
  {
    id: 2,
    command: "/summarize",
    title: "Summarize",
    category: "Writing",
    description: "Condense long text into a concise summary.",
    example: "/summarize Paste your long article here.",
    details: "Produces a short summary that captures the key points of a longer passage. Great for digesting articles, transcripts, or meeting notes.",
    tips: ["Ask for bullet points or a single paragraph.", "Mention a word limit for tighter results."],
    favorite: false
  },
  {
    id: 3,
    command: "/grammar",
    title: "Fix Grammar",
    category: "Writing",
    description: "Correct grammar, spelling, and punctuation errors.",
    example: "/grammar Their going to the store later.",
    details: "Scans text for grammatical mistakes and returns a corrected version along with brief explanations of each fix.",
    tips: ["Use before sending important emails.", "Ask for an explanation of each correction to learn from mistakes."],
    favorite: false
  },
  {
    id: 4,
    command: "/tone",
    title: "Adjust Tone",
    category: "Writing",
    description: "Change the tone of your text to match any audience.",
    example: "/tone friendly Make this announcement sound warmer.",
    details: "Rewrites text to adopt a specified tone such as friendly, formal, persuasive, or urgent, while preserving the underlying message.",
    tips: ["Combine with /rewrite for a full rework.", "Try 'empathetic' or 'confident' for nuanced tones."],
    favorite: false
  },
  {
    id: 5,
    command: "/translate",
    title: "Translate",
    category: "Writing",
    description: "Translate text between languages naturally.",
    example: "/translate Spanish Good morning, how are you?",
    details: "Translates the given text into the specified target language, accounting for context and idioms rather than translating word-for-word.",
    tips: ["Specify the target language before the text.", "Ask for a back-translation to double-check meaning."],
    favorite: false
  },
  {
    id: 6,
    command: "/expand",
    title: "Expand Text",
    category: "Writing",
    description: "Add detail and depth to short or thin text.",
    example: "/expand The project was a success.",
    details: "Takes a brief passage and elaborates with supporting detail, examples, and transitions, making it more substantial without changing the meaning.",
    tips: ["Set a target word count.", "Ask for specific kinds of detail (examples, statistics, anecdotes)."],
    favorite: false
  },
  {
    id: 7,
    command: "/simplify",
    title: "Simplify Text",
    category: "Writing",
    description: "Make complex text easier to understand.",
    example: "/simplify The utilization of multifaceted methodologies...",
    details: "Rewrites dense or jargon-heavy text in plain language so a general audience can follow it easily.",
    tips: ["Specify a reading level (e.g., 5th grade).", "Great for turning technical docs into user guides."],
    favorite: false
  },
  {
    id: 8,
    command: "/outline",
    title: "Create Outline",
    category: "Writing",
    description: "Generate a structured outline from a topic.",
    example: "/outline The future of renewable energy.",
    details: "Produces a hierarchical outline with headings and sub-points that you can use as a skeleton for an article, essay, or presentation.",
    tips: ["Specify the number of sections you want.", "Ask for bullet points under each heading."],
    favorite: false
  },
  {
    id: 9,
    command: "/paraphrase",
    title: "Paraphrase",
    category: "Writing",
    description: "Restate text using different words.",
    example: "/paraphrase The quick brown fox jumps over the lazy dog.",
    details: "Rephrases a sentence or passage while keeping the original meaning, useful for avoiding repetition or adjusting style.",
    tips: ["Ask for multiple variations.", "Combine with /tone for a targeted rewrite."],
    favorite: false
  },
  {
    id: 10,
    command: "/proofread",
    title: "Proofread",
    category: "Writing",
    description: "Review text for errors and suggest improvements.",
    example: "/proofread Please review the attached paragraph.",
    details: "Performs a thorough proofreading pass, flagging typos, awkward phrasing, and consistency issues, then returns a polished version.",
    tips: ["Ask for a tracked-changes style list of edits.", "Use before publishing or submitting work."],
    favorite: false
  },

  /* ===================== CODING ===================== */
  {
    id: 11,
    command: "/code",
    title: "Generate Code",
    category: "Coding",
    description: "Generate code from a plain-language description.",
    example: "/code A Python function that returns the factorial of a number.",
    details: "Produces a working code snippet based on your description, including comments and a brief explanation of how to use it.",
    tips: ["Specify the programming language explicitly.", "Mention any libraries or frameworks to use."],
    favorite: false
  },
  {
    id: 12,
    command: "/debug",
    title: "Debug Code",
    category: "Coding",
    description: "Find and fix bugs in your code.",
    example: "/debug My function returns undefined when the input is 0.",
    details: "Analyzes code for errors, explains the root cause, and provides a corrected version along with tips to prevent the issue.",
    tips: ["Paste the full error message if you have one.", "Include the surrounding context, not just the failing line."],
    favorite: false
  },
  {
    id: 13,
    command: "/explain",
    title: "Explain Code",
    category: "Coding",
    description: "Explain how a piece of code works in plain English.",
    example: "/explain function debounce(fn, delay) { ... }",
    details: "Breaks down code line by line, describing what each part does and how the pieces work together.",
    tips: ["Ask for an ELI5 version for beginners.", "Request a diagram or flow description for complex logic."],
    favorite: false
  },
  {
    id: 14,
    command: "/refactor",
    title: "Refactor Code",
    category: "Coding",
    description: "Improve code structure without changing behavior.",
    example: "/refactor Make this function more readable.",
    details: "Rewrites code to be cleaner, more maintainable, and more efficient while preserving its original functionality.",
    tips: ["Ask for before/after comparisons.", "Request specific improvements (naming, DRY, performance)."],
    favorite: false
  },
  {
    id: 15,
    command: "/optimize",
    title: "Optimize Code",
    category: "Coding",
    description: "Make code faster and more efficient.",
    example: "/optimize This loop is too slow for large arrays.",
    details: "Identifies performance bottlenecks and provides an optimized version with explanations of the changes made.",
    tips: ["Mention your performance goals.", "Ask about time and space complexity trade-offs."],
    favorite: false
  },
  {
    id: 16,
    command: "/comment",
    title: "Add Comments",
    category: "Coding",
    description: "Generate clear comments for your code.",
    example: "/comment Add JSDoc comments to this function.",
    details: "Inserts meaningful, well-formatted comments that explain the intent behind the code, not just what it does line by line.",
    tips: ["Specify a comment style (JSDoc, inline, block).", "Ask for a summary comment at the top of the file."],
    favorite: false
  },
  {
    id: 17,
    command: "/test",
    title: "Write Tests",
    category: "Coding",
    description: "Generate unit tests for your code.",
    example: "/test Write Jest tests for this utility function.",
    details: "Creates test cases covering normal usage, edge cases, and error handling, using the testing framework you specify.",
    tips: ["Name the testing framework (Jest, PyTest, etc.).", "Ask for edge-case coverage specifically."],
    favorite: false
  },
  {
    id: 18,
    command: "/regex",
    title: "Regex Helper",
    category: "Coding",
    description: "Create or explain regular expressions.",
    example: "/regex Match all email addresses in this text.",
    details: "Builds a regular expression based on your description, explains each part, and provides example matches.",
    tips: ["Describe what you want to match in plain English.", "Ask for the regex to be broken down token by token."],
    favorite: false
  },
  {
    id: 19,
    command: "/convert",
    title: "Convert Code",
    category: "Coding",
    description: "Translate code from one language to another.",
    example: "/convert Python to JavaScript",
    details: "Rewrites code in a different programming language, preserving logic and adapting to the target language's idioms.",
    tips: ["Mention the target language's version.", "Ask about library equivalents (e.g., pandas to lodash)."],
    favorite: false
  },
  {
    id: 20,
    command: "/docstring",
    title: "Generate Docs",
    category: "Coding",
    description: "Create documentation for functions and modules.",
    example: "/docstring Document this Python module.",
    details: "Generates standard-format documentation strings (JSDoc, docstrings, etc.) describing parameters, return values, and usage.",
    tips: ["Specify the documentation standard.", "Ask for usage examples in the docs."],
    favorite: false
  },

  /* ===================== BUSINESS ===================== */
  {
    id: 21,
    command: "/email",
    title: "Write Email",
    category: "Business",
    description: "Draft a professional email from a brief description.",
    example: "/email Follow up with a client after a meeting.",
    details: "Generates a complete, well-structured email including subject line, greeting, body, and sign-off based on your short description.",
    tips: ["Specify the recipient and your relationship.", "Mention the desired tone (formal, warm, urgent)."],
    favorite: false
  },
  {
    id: 22,
    command: "/proposal",
    title: "Write Proposal",
    category: "Business",
    description: "Create a structured business proposal.",
    example: "/proposal Pitch a social media management service to a local bakery.",
    details: "Produces a proposal with executive summary, objectives, scope, timeline, and pricing sections tailored to your scenario.",
    tips: ["Provide the client name and industry.", "Mention any budget or timeline constraints."],
    favorite: false
  },
  {
    id: 23,
    command: "/report",
    title: "Generate Report",
    category: "Business",
    description: "Turn raw notes into a formatted business report.",
    example: "/report Q3 sales increased 15%, churn down 3%.",
    details: "Transforms bullet points or raw data into a polished report with headings, analysis, and recommendations.",
    tips: ["Provide all key data points.", "Ask for an executive summary at the top."],
    favorite: false
  },
  {
    id: 24,
    command: "/meeting",
    title: "Meeting Notes",
    category: "Business",
    description: "Summarize and organize meeting notes.",
    example: "/meeting Discussed roadmap, assigned tasks, next review in 2 weeks.",
    details: "Converts rough meeting notes into a clean summary with decisions, action items, and owners.",
    tips: ["Include attendee names for action items.", "Ask for a follow-up email draft too."],
    favorite: false
  },
  {
    id: 25,
    command: "/swot",
    title: "SWOT Analysis",
    category: "Business",
    description: "Generate a SWOT analysis for a business or project.",
    example: "/swot A new mobile app for local food delivery.",
    details: "Produces a structured Strengths, Weaknesses, Opportunities, and Threats analysis with specific points for each quadrant.",
    tips: ["Provide context about the business or project.", "Ask for actionable recommendations based on the SWOT."],
    favorite: false
  },
  {
    id: 26,
    command: "/pitch",
    title: "Elevator Pitch",
    category: "Business",
    description: "Craft a concise elevator pitch.",
    example: "/pitch A SaaS tool that automates invoice processing.",
    details: "Creates a 30-60 second pitch that communicates the problem, solution, value proposition, and call to action.",
    tips: ["Specify your audience (investors, customers).", "Ask for a one-line version and a full version."],
    favorite: false
  },
  {
    id: 27,
    command: "/kpi",
    title: "Define KPIs",
    category: "Business",
    description: "Suggest key performance indicators for a goal.",
    example: "/kpi Improve customer onboarding for a SaaS product.",
    details: "Recommends relevant KPIs, explains why each matters, and suggests how to measure them.",
    tips: ["State your business model clearly.", "Ask for leading and lagging indicators."],
    favorite: false
  },
  {
    id: 28,
    command: "/businessplan",
    title: "Business Plan",
    category: "Business",
    description: "Outline a full business plan.",
    example: "/businessplan An eco-friendly clothing brand.",
    details: "Generates a comprehensive business plan covering market analysis, product strategy, operations, financials, and milestones.",
    tips: ["Mention your target market size.", "Ask for a lean canvas version for a quick overview."],
    favorite: false
  },

  /* ===================== LEARNING ===================== */
  {
    id: 29,
    command: "/explain5",
    title: "Explain Like I'm 5",
    category: "Learning",
    description: "Explain a concept in the simplest terms possible.",
    example: "/explain5 How does the stock market work?",
    details: "Breaks down complex topics using simple language, everyday analogies, and no jargon, as if explaining to a young child.",
    tips: ["Great for onboarding non-technical stakeholders.", "Ask for an analogy to make it stick."],
    favorite: false
  },
  {
    id: 30,
    command: "/quiz",
    title: "Create Quiz",
    category: "Learning",
    description: "Generate a quiz on any topic.",
    example: "/quiz 10 questions on world geography.",
    details: "Creates multiple-choice or open-ended questions with answers and explanations, useful for studying or teaching.",
    tips: ["Specify the difficulty level.", "Ask for an answer key with explanations."],
    favorite: false
  },
  {
    id: 31,
    command: "/flashcards",
    title: "Flashcards",
    category: "Learning",
    description: "Create study flashcards from a topic or text.",
    example: "/flashcards Key terms from chapter 3 of biology.",
    details: "Generates question/answer pairs formatted as flashcards, ideal for spaced repetition study.",
    tips: ["Ask for a CSV format to import into Anki.", "Request difficulty ratings per card."],
    favorite: false
  },
  {
    id: 32,
    command: "/teach",
    title: "Teach Me",
    category: "Learning",
    description: "Learn a topic step by step with a structured plan.",
    example: "/teach me the basics of machine learning.",
    details: "Creates a step-by-step learning path with prerequisites, core concepts, practice exercises, and resources.",
    tips: ["State your current knowledge level.", "Ask for a timeline (e.g., 4-week plan)."],
    favorite: false
  },
  {
    id: 33,
    command: "/analogy",
    title: "Analogy",
    category: "Learning",
    description: "Explain a concept using a relatable analogy.",
    example: "/analogy Explain how databases work using a library metaphor.",
    details: "Creates a vivid analogy that maps the unfamiliar concept to something familiar, making it easier to grasp and remember.",
    tips: ["Suggest a domain for the analogy (cooking, sports).", "Ask for multiple analogies to find the best fit."],
    favorite: false
  },
  {
    id: 34,
    command: "/studyplan",
    title: "Study Plan",
    category: "Learning",
    description: "Build a personalized study schedule.",
    example: "/studyplan Prepare for the GRE in 8 weeks.",
    details: "Creates a day-by-day or week-by-week study plan with topics, practice time, and review sessions.",
    tips: ["Mention your available hours per week.", "Ask for built-in buffer days."],
    favorite: false
  },
  {
    id: 35,
    command: "/define",
    title: "Define Term",
    category: "Learning",
    description: "Get a clear definition with context and examples.",
    example: "/define blockchain",
    details: "Provides a concise definition, expanded explanation, real-world examples, and related terms for any concept.",
    tips: ["Ask for the etymology or origin of the term.", "Request related terms to build vocabulary."],
    favorite: false
  },

  /* ===================== MARKETING ===================== */
  {
    id: 36,
    command: "/adcopy",
    title: "Ad Copy",
    category: "Marketing",
    description: "Write persuasive ad copy for any platform.",
    example: "/adcopy Facebook ad for a new fitness app.",
    details: "Generates attention-grabbing headlines, body copy, and a call to action tailored to the platform and audience you specify.",
    tips: ["Specify the platform (Facebook, Google, LinkedIn).", "Ask for multiple variations to A/B test."],
    favorite: false
  },
  {
    id: 37,
    command: "/headline",
    title: "Headlines",
    category: "Marketing",
    description: "Generate catchy headlines for articles or ads.",
    example: "/headline 10 headlines about time-saving productivity tools.",
    details: "Produces a list of headline options using proven formulas (how-to, listicle, question, curiosity gap) for you to choose from.",
    tips: ["Ask for SEO-friendly headlines with keywords.", "Request different emotional angles."],
    favorite: false
  },
  {
    id: 38,
    command: "/socialpost",
    title: "Social Post",
    category: "Marketing",
    description: "Create engaging social media posts.",
    example: "/socialpost Announce a Black Friday sale on Instagram.",
    details: "Drafts a platform-appropriate post with hook, body, hashtags, and a call to action.",
    tips: ["Mention the platform and tone.", "Ask for hashtag suggestions."],
    favorite: false
  },
  {
    id: 39,
    command: "/hashtag",
    title: "Hashtag Generator",
    category: "Marketing",
    description: "Suggest relevant hashtags for a post or campaign.",
    example: "/hashtag Post about sustainable fashion.",
    details: "Generates a mix of popular, niche, and branded hashtags relevant to your content and target audience.",
    tips: ["Ask for a mix of high and low volume tags.", "Request platform-specific sets (Instagram vs. LinkedIn)."],
    favorite: false
  },
  {
    id: 40,
    command: "/contentplan",
    title: "Content Plan",
    category: "Marketing",
    description: "Build a content calendar for a month.",
    example: "/contentplan 30 days of content for a fitness brand.",
    details: "Creates a day-by-day content calendar with post topics, formats, and suggested angles for a cohesive strategy.",
    tips: ["Mention your posting frequency.", "Ask for platform-specific content ideas."],
    favorite: false
  },
  {
    id: 41,
    command: "/landing",
    title: "Landing Page Copy",
    category: "Marketing",
    description: "Write conversion-focused landing page copy.",
    example: "/landing Copy for a SaaS tool that automates accounting.",
    details: "Generates hero headline, subheadline, feature sections, social proof placeholders, and a call to action optimized for conversions.",
    tips: ["Describe your target customer.", "Ask for A/B test variants of the hero section."],
    favorite: false
  },
  {
    id: 42,
    command: "/newsletter",
    title: "Newsletter",
    category: "Marketing",
    description: "Draft an engaging email newsletter.",
    example: "/newsletter Weekly roundup of AI news for developers.",
    details: "Creates a structured newsletter with intro, curated sections, and a closing note, ready to send or paste into your email tool.",
    tips: ["Provide the key topics to cover.", "Ask for a subject line that boosts open rates."],
    favorite: false
  },
  {
    id: 43,
    command: "/brandvoice",
    title: "Brand Voice",
    category: "Marketing",
    description: "Define a consistent brand voice guide.",
    example: "/brandvoice A playful but knowledgeable coffee brand.",
    details: "Creates a brand voice document covering tone, vocabulary, do's and don'ts, and example phrases to keep all content consistent.",
    tips: ["Provide existing brand examples for reference.", "Ask for a one-page style guide format."],
    favorite: false
  },

  /* ===================== PRODUCTIVITY ===================== */
  {
    id: 44,
    command: "/todo",
    title: "To-Do List",
    category: "Productivity",
    description: "Turn a brain dump into an organized to-do list.",
    example: "/todo Email John, finish report, book flights, call dentist.",
    details: "Takes a stream-of-consciousness list of tasks and organizes them by priority, category, or time block.",
    tips: ["Ask for Eisenhower matrix categorization.", "Request estimated time per task."],
    favorite: false
  },
  {
    id: 45,
    command: "/schedule",
    title: "Schedule Maker",
    category: "Productivity",
    description: "Create a time-blocked schedule for your day.",
    example: "/schedule 9am to 5pm with a lunch break and 2 deep work blocks.",
    details: "Generates a time-blocked daily schedule that balances focused work, meetings, and breaks based on your inputs.",
    tips: ["Mention your most productive hours.", "Ask for buffer time between meetings."],
    favorite: false
  },
  {
    id: 46,
    command: "/pomodoro",
    title: "Pomodoro Plan",
    category: "Productivity",
    description: "Break work into focused pomodoro sessions.",
    example: "/pomodoro 4 sessions to write a blog post.",
    details: "Divides a task into 25-minute focused work blocks with 5-minute breaks, including what to tackle in each session.",
    tips: ["Specify the task you're working on.", "Ask for a longer break after 4 sessions."],
    favorite: false
  },
  {
    id: 47,
    command: "/automate",
    title: "Automate Task",
    category: "Productivity",
    description: "Suggest ways to automate a repetitive task.",
    example: "/automate I manually copy data from emails into a spreadsheet.",
    details: "Analyzes a repetitive workflow and recommends tools, integrations, or scripts that could automate it.",
    tips: ["Describe each step of the current process.", "Mention tools you already use."],
    favorite: false
  },
  {
    id: 48,
    command: "/priority",
    title: "Prioritize Tasks",
    category: "Productivity",
    description: "Rank your tasks by urgency and importance.",
    example: "/priority Prepare slides, reply to client, update website, plan trip.",
    details: "Sorts a list of tasks using the Eisenhower matrix (urgent/important) and suggests what to do first, schedule, delegate, or drop.",
    tips: ["Include deadlines if you have them.", "Ask for a recommended order of execution."],
    favorite: false
  },
  {
    id: 49,
    command: "/decision",
    title: "Decision Matrix",
    category: "Productivity",
    description: "Build a weighted decision matrix.",
    example: "/decision Choosing between 3 job offers.",
    details: "Creates a decision matrix with criteria, weights, and scores to help you objectively compare options.",
    tips: ["List the criteria that matter most to you.", "Ask for a recommendation based on the matrix."],
    favorite: false
  },
  {
    id: 50,
    command: "/checklist",
    title: "Checklist",
    category: "Productivity",
    description: "Generate a checklist for any process.",
    example: "/checklist Onboarding a new employee.",
    details: "Creates a comprehensive, ordered checklist covering every step of a process so nothing falls through the cracks.",
    tips: ["Mention the context or industry.", "Ask for sub-checklists for each phase."],
    favorite: false
  },

  /* ===================== ANALYSIS ===================== */
  {
    id: 51,
    command: "/analyze",
    title: "Analyze Data",
    category: "Analysis",
    description: "Interpret and summarize raw data or text.",
    example: "/analyze Here are my monthly sales figures: ...",
    details: "Reviews data you provide and surfaces trends, outliers, and insights in plain language, often with suggested next steps.",
    tips: ["Provide as much raw data as possible.", "Ask for a summary of key trends."],
    favorite: false
  },
  {
    id: 52,
    command: "/compare",
    title: "Compare Options",
    category: "Analysis",
    description: "Create a side-by-side comparison of options.",
    example: "/compare React vs Vue vs Svelte.",
    details: "Produces a structured comparison table covering features, pros, cons, and use cases to help you choose.",
    tips: ["Specify the criteria you care about.", "Ask for a final recommendation."],
    favorite: false
  },
  {
    id: 53,
    command: "/trends",
    title: "Identify Trends",
    category: "Analysis",
    description: "Spot patterns and trends in information.",
    example: "/trends Based on these customer reviews, what are the common complaints?",
    details: "Analyzes a body of information to identify recurring themes, patterns, and shifts that matter for decision-making.",
    tips: ["Provide a large sample for better accuracy.", "Ask for quantitative vs. qualitative trends."],
    favorite: false
  },
  {
    id: 54,
    command: "/proscons",
    title: "Pros and Cons",
    category: "Analysis",
    description: "List the pros and cons of a decision or idea.",
    example: "/proscons Switching from freelance to a full-time job.",
    details: "Generates a balanced list of advantages and disadvantages, often with a weighted summary to help you decide.",
    tips: ["Ask for a recommendation based on the pros and cons.", "Request a risk assessment."],
    favorite: false
  },
  {
    id: 55,
    command: "/rootcause",
    title: "Root Cause Analysis",
    category: "Analysis",
    description: "Find the root cause of a problem.",
    example: "/rootcause Our app's user retention dropped 20% last month.",
    details: "Uses techniques like the 5 Whys to dig past symptoms and identify the underlying cause of an issue.",
    tips: ["Describe the problem and when it started.", "Ask for corrective and preventive actions."],
    favorite: false
  },
  {
    id: 56,
    command: "/sentiment",
    title: "Sentiment Analysis",
    category: "Analysis",
    description: "Analyze the sentiment of text or feedback.",
    example: "/sentiment Here are 50 customer reviews from last week.",
    details: "Classifies text as positive, negative, or neutral and summarizes the overall sentiment with key themes.",
    tips: ["Provide raw text for best results.", "Ask for a breakdown by topic."],
    favorite: false
  },
  {
    id: 57,
    command: "/forecast",
    title: "Forecast",
    category: "Analysis",
    description: "Project future outcomes based on current data.",
    example: "/forecast Based on 12 months of revenue data, project the next quarter.",
    details: "Uses the patterns in your data to create a reasonable forecast, noting assumptions and confidence levels.",
    tips: ["Provide historical data for accuracy.", "Ask for best, worst, and likely case scenarios."],
    favorite: false
  },

  /* ===================== PROMPT ENGINEERING ===================== */
  {
    id: 58,
    command: "/prompt",
    title: "Improve Prompt",
    category: "Prompt Engineering",
    description: "Rewrite a prompt to get better results.",
    example: "/prompt Write a blog post about AI.",
    details: "Takes a basic prompt and rewrites it with clear context, instructions, constraints, and output format for higher-quality results.",
    tips: ["Include your goal and audience.", "Ask for a few variations with different approaches."],
    favorite: false
  },
  {
    id: 59,
    command: "/role",
    title: "Set Role",
    category: "Prompt Engineering",
    description: "Assign a persona to the AI for expert responses.",
    example: "/role You are a senior cybersecurity analyst.",
    details: "Frames the AI as a specific expert, which shapes the depth, terminology, and perspective of its answers.",
    tips: ["Be specific about the expertise level.", "Combine with a task for best results."],
    favorite: false
  },
  {
    id: 60,
    command: "/chain",
    title: "Chain Prompts",
    category: "Prompt Engineering",
    description: "Break a complex task into a prompt chain.",
    example: "/chain Write, edit, and format a 1000-word article.",
    details: "Splits a complex request into a sequence of smaller prompts, each building on the previous output for better quality.",
    tips: ["List each step of the task.", "Ask for the output of each step separately."],
    favorite: false
  },
  {
    id: 61,
    command: "/fewshot",
    title: "Few-Shot Example",
    category: "Prompt Engineering",
    description: "Add examples to guide the AI's output format.",
    example: "/fewshot Show 3 examples of how I want this formatted.",
    details: "Provides the AI with example inputs and outputs so it can mimic the exact format, tone, and structure you want.",
    tips: ["Provide 2-3 diverse examples.", "Keep examples consistent in format."],
    favorite: false
  },
  {
    id: 62,
    command: "/constraints",
    title: "Set Constraints",
    category: "Prompt Engineering",
    description: "Add rules and limits to a prompt.",
    example: "/constraints Max 200 words, no jargon, include a call to action.",
    details: "Defines boundaries for the AI's response such as word count, tone, structure, and topics to avoid or include.",
    tips: ["Be explicit about what to avoid.", "Combine with /prompt for a full rewrite."],
    favorite: false
  },
  {
    id: 63,
    command: "/format",
    title: "Format Output",
    category: "Prompt Engineering",
    description: "Specify the exact output format you need.",
    example: "/format Return as a markdown table with 3 columns.",
    details: "Tells the AI exactly how to structure its response (table, JSON, bullet list, etc.) so the output is ready to use.",
    tips: ["Provide a template or schema.", "Ask for a specific delimiter if parsing automatically."],
    favorite: false
  },
  {
    id: 64,
    command: "/persona",
    title: "User Persona",
    category: "Prompt Engineering",
    description: "Create a detailed user persona for targeting.",
    example: "/persona A first-time homebuyer in their 30s.",
    details: "Generates a rich persona with demographics, goals, pain points, and behaviors to guide product or content decisions.",
    tips: ["Mention the product or context.", "Ask for multiple personas to compare."],
    favorite: false
  },

  /* ===================== CAREER ===================== */
  {
    id: 65,
    command: "/resume",
    title: "Improve Resume",
    category: "Career",
    description: "Optimize your resume for a specific role.",
    example: "/resume Tailor my resume for a Senior Product Manager role.",
    details: "Rewrites your resume to highlight relevant experience, use strong action verbs, and align with the job description.",
    tips: ["Paste the job description alongside your resume.", "Ask for bullet-point improvements with metrics."],
    favorite: false
  },
  {
    id: 66,
    command: "/coverletter",
    title: "Cover Letter",
    category: "Career",
    description: "Write a tailored cover letter.",
    example: "/coverletter For a marketing role at a startup.",
    details: "Drafts a cover letter that connects your experience to the job requirements and shows genuine interest in the company.",
    tips: ["Provide the job description.", "Mention a specific reason you want this company."],
    favorite: false
  },
  {
    id: 67,
    command: "/interview",
    title: "Mock Interview",
    category: "Career",
    description: "Practice interview questions for a role.",
    example: "/interview Conduct a mock interview for a data scientist position.",
    details: "Generates realistic interview questions, asks them one by one, and gives feedback on your answers.",
    tips: ["Specify the seniority level.", "Ask for behavioral and technical questions."],
    favorite: false
  },
  {
    id: 68,
    command: "/linkedin",
    title: "LinkedIn Summary",
    category: "Career",
    description: "Write a compelling LinkedIn about section.",
    example: "/linkedin I'm a UX designer with 5 years in fintech.",
    details: "Crafts a first-person LinkedIn summary that highlights your skills, experience, and personality in a professional tone.",
    tips: ["Mention your career goals.", "Ask for a shorter version for the headline."],
    favorite: false
  },
  {
    id: 69,
    command: "/negotiate",
    title: "Salary Negotiation",
    category: "Career",
    description: "Draft a salary negotiation email or script.",
    example: "/negotiate Ask for a 10% raise based on recent project success.",
    details: "Creates a polite, evidence-based negotiation message that states your case and leaves room for discussion.",
    tips: ["Mention your current and target salary.", "Ask for a verbal script and a written version."],
    favorite: false
  },
  {
    id: 70,
    command: "/resign",
    title: "Resignation Letter",
    category: "Career",
    description: "Write a professional resignation letter.",
    example: "/resign Two weeks notice, grateful for the opportunity.",
    details: "Generates a gracious resignation letter that states your departure date and leaves on positive terms.",
    tips: ["Provide your last working day.", "Keep it brief and positive."],
    favorite: false
  },
  {
    id: 71,
    command: "/skills",
    title: "Skills Gap",
    category: "Career",
    description: "Identify skills to develop for a target role.",
    example: "/skills What skills do I need to become a cloud architect?",
    details: "Compares your current skills to a target role and suggests specific skills, courses, and projects to close the gap.",
    tips: ["List your current skills.", "Ask for a prioritized learning roadmap."],
    favorite: false
  },

  /* ===================== SOCIAL MEDIA ===================== */
  {
    id: 72,
    command: "/caption",
    title: "Caption Writer",
    category: "Social Media",
    description: "Write catchy captions for photos or videos.",
    example: "/caption A photo of a sunset over the mountains.",
    details: "Generates engaging caption options with hooks, emojis, and hashtags tailored to the platform and mood.",
    tips: ["Mention the platform (Instagram, TikTok).", "Ask for short and long versions."],
    favorite: false
  },
  {
    id: 73,
    command: "/thread",
    title: "Twitter Thread",
    category: "Social Media",
    description: "Turn a topic into an engaging thread.",
    example: "/thread 7 lessons from building my first startup.",
    details: "Breaks a topic into a numbered thread with a strong hook tweet, concise points, and a closing call to action.",
    tips: ["Provide your main points or a rough draft.", "Ask for a hook that drives clicks."],
    favorite: false
  },
  {
    id: 74,
    command: "/reels",
    title: "Reel Ideas",
    category: "Social Media",
    description: "Generate short-form video ideas.",
    example: "/reels 5 ideas for a cooking channel.",
    details: "Suggests creative short-form video concepts with hooks, visual ideas, and trending audio suggestions.",
    tips: ["Mention your niche and audience.", "Ask for a script for each idea."],
    favorite: false
  },
  {
    id: 75,
    command: "/bio",
    title: "Bio Writer",
    category: "Social Media",
    description: "Write a bio for any social profile.",
    example: "/bio Instagram bio for a travel photographer.",
    details: "Creates a concise, personality-filled bio that communicates who you are and what you do, with optional emoji and link CTA.",
    tips: ["Mention your niche and personality.", "Ask for a few variations."],
    favorite: false
  },
  {
    id: 76,
    command: "/hashtags",
    title: "Hashtag Strategy",
    category: "Social Media",
    description: "Build a hashtag strategy for reach.",
    example: "/hashtags Strategy for a fitness influencer on Instagram.",
    details: "Recommends a mix of broad, niche, and community hashtags with guidance on placement and volume per post.",
    tips: ["Mention your follower count for tier-appropriate tags.", "Ask for a set to rotate across posts."],
    favorite: false
  },
  {
    id: 77,
    command: "/calendar",
    title: "Social Calendar",
    category: "Social Media",
    description: "Plan a week of social media content.",
    example: "/calendar 7 days of posts for a skincare brand.",
    details: "Creates a day-by-day content calendar with post ideas, formats, and captions for a consistent posting schedule.",
    tips: ["Mention your platforms and posting frequency.", "Ask for content pillars to stay organized."],
    favorite: false
  },

  /* ===================== GENERAL ===================== */
  {
    id: 78,
    command: "/brainstorm",
    title: "Brainstorm",
    category: "General",
    description: "Generate ideas on any topic.",
    example: "/brainstorm 20 ideas for a weekend project.",
    details: "Produces a large list of creative ideas across different angles, giving you a wide pool to choose from.",
    tips: ["Ask for wild and practical ideas separately.", "Request a specific number of ideas."],
    favorite: false
  },
  {
    id: 79,
    command: "/ask",
    title: "Ask Anything",
    category: "General",
    description: "Get a clear answer to any question.",
    example: "/ask What's the difference between TCP and UDP?",
    details: "Provides a direct, well-structured answer to a question, with context and examples when helpful.",
    tips: ["Be specific for a more precise answer.", "Ask for sources or further reading."],
    favorite: false
  },
  {
    id: 80,
    command: "/eli5",
    title: "Explain Simply",
    category: "General",
    description: "Explain something in simple terms.",
    example: "/eli5 How do interest rates work?",
    details: "Breaks down a concept using plain language and everyday analogies, avoiding jargon entirely.",
    tips: ["Great for explaining to non-experts.", "Ask for an analogy to reinforce understanding."],
    favorite: false
  },
  {
    id: 81,
    command: "/list",
    title: "Make a List",
    category: "General",
    description: "Generate a structured list on any topic.",
    example: "/list 10 healthy breakfast ideas.",
    details: "Creates a clean, organized list with optional descriptions for each item.",
    tips: ["Specify the number of items.", "Ask for pros/cons per item."],
    favorite: false
  },
  {
    id: 82,
    command: "/ideas",
    title: "Creative Ideas",
    category: "General",
    description: "Spark creative ideas for projects or content.",
    example: "/ideas Creative ways to reuse glass jars.",
    details: "Generates inventive, out-of-the-box ideas that push beyond the obvious, useful for breaking creative blocks.",
    tips: ["Give constraints for more focused ideas.", "Ask for ideas grouped by theme."],
    favorite: false
  },
  {
    id: 83,
    command: "/fact",
    title: "Fun Fact",
    category: "General",
    description: "Get an interesting fact on a topic.",
    example: "/fact Tell me a surprising fact about space.",
    details: "Shares a verified, interesting fact with brief context to make it memorable.",
    tips: ["Ask for a specific domain (history, science).", "Request a source for accuracy."],
    favorite: false
  },
  {
    id: 84,
    command: "/feedback",
    title: "Get Feedback",
    category: "General",
    description: "Get constructive feedback on anything.",
    example: "/feedback Review this short story and give feedback.",
    details: "Provides balanced, actionable feedback highlighting strengths, weaknesses, and specific suggestions for improvement.",
    tips: ["Specify what kind of feedback you want.", "Ask for feedback ranked by priority."],
    favorite: false
  },
  {
    id: 85,
    command: "/improve",
    title: "Improve This",
    category: "General",
    description: "Suggest improvements for any content.",
    example: "/improve How can I make this landing page better?",
    details: "Analyzes content and provides specific, prioritized suggestions to improve clarity, impact, and effectiveness.",
    tips: ["Mention your goal for the content.", "Ask for a before/after example."],
    favorite: false
  },

  /* ===================== Extra Writing / Productivity ===================== */
  {
    id: 86,
    command: "/blog",
    title: "Blog Post",
    category: "Writing",
    description: "Draft a full blog post from an outline or topic.",
    example: "/blog The benefits of remote work for small businesses.",
    details: "Generates a structured blog post with intro, headings, body paragraphs, and a conclusion, ready to edit and publish.",
    tips: ["Provide an outline for better structure.", "Mention your target word count."],
    favorite: false
  },
  {
    id: 87,
    command: "/story",
    title: "Write Story",
    category: "Writing",
    description: "Create a short story or narrative.",
    example: "/story A lighthouse keeper discovers a message in a bottle.",
    details: "Writes a short narrative with characters, setting, and plot based on your prompt or premise.",
    tips: ["Specify the genre and tone.", "Ask for a specific length (flash fiction, short story)."],
    favorite: false
  },
  {
    id: 88,
    command: "/edit",
    title: "Edit Text",
    category: "Writing",
    description: "Edit text for clarity, flow, and impact.",
    example: "/edit Tighten this paragraph and improve flow.",
    details: "Performs a line edit that improves sentence flow, removes redundancy, and sharpens word choice without rewriting from scratch.",
    tips: ["Ask for a before/after comparison.", "Specify what to prioritize (clarity, brevity, punch)."],
    favorite: false
  },
  {
    id: 89,
    command: "/note",
    title: "Smart Notes",
    category: "Productivity",
    description: "Turn rough notes into clean, organized notes.",
    example: "/note meeting at 3, talked about budget, need to follow up with Sarah.",
    details: "Transforms messy, shorthand notes into well-organized, readable notes with headings and action items.",
    tips: ["Include all raw details for best results.", "Ask for action items to be separated out."],
    favorite: false
  },
  {
    id: 90,
    command: "/plan",
    title: "Project Plan",
    category: "Productivity",
    description: "Create a structured project plan.",
    example: "/plan Launch a new podcast in 4 weeks.",
    details: "Generates a project plan with phases, milestones, tasks, and a timeline to guide execution from start to finish.",
    tips: ["Mention your team size and budget.", "Ask for a Gantt-style breakdown."],
    favorite: false
  },

  /* ===================== Extra Coding ===================== */
  {
    id: 91,
    command: "/snippet",
    title: "Code Snippet",
    category: "Coding",
    description: "Generate a reusable code snippet.",
    example: "/snippet A debounce function in JavaScript.",
    details: "Produces a clean, self-contained snippet you can drop into a project, with a brief usage example.",
    tips: ["Specify the language and version.", "Ask for edge-case handling."],
    favorite: false
  },
  {
    id: 92,
    command: "/architect",
    title: "System Design",
    category: "Coding",
    description: "Design a software architecture for a system.",
    example: "/architect Design a URL shortener that handles 10M requests/day.",
    details: "Outlines a system architecture with components, data flow, scaling considerations, and technology choices.",
    tips: ["Mention your scale and latency requirements.", "Ask for a diagram description."],
    favorite: false
  },
  {
    id: 93,
    command: "/security",
    title: "Security Review",
    category: "Coding",
    description: "Review code for security vulnerabilities.",
    example: "/security Review this authentication function.",
    details: "Scans code for common vulnerabilities (injection, XSS, auth flaws) and provides fixes with explanations.",
    tips: ["Mention the framework and language.", "Ask for OWASP category references."],
    favorite: false
  },

  /* ===================== Extra Marketing ===================== */
  {
    id: 94,
    command: "/seo",
    title: "SEO Optimize",
    category: "Marketing",
    description: "Optimize content for search engines.",
    example: "/seo Optimize this blog post for the keyword 'home workouts'.",
    details: "Analyzes content and suggests keyword placement, meta tags, headings, and internal linking improvements.",
    tips: ["Provide your target keyword.", "Ask for a meta description and title tag."],
    favorite: false
  },
  {
    id: 95,
    command: "/slogan",
    title: "Slogan Generator",
    category: "Marketing",
    description: "Create catchy slogans for a brand.",
    example: "/slogan An eco-friendly cleaning products brand.",
    details: "Generates a list of short, memorable slogans that capture the brand's value proposition and personality.",
    tips: ["Mention your brand personality.", "Ask for rhyming and non-rhyming options."],
    favorite: false
  },

  /* ===================== Extra Analysis ===================== */
  {
    id: 96,
    command: "/metrics",
    title: "Define Metrics",
    category: "Analysis",
    description: "Suggest metrics to track for a goal.",
    example: "/metrics Track the success of a new onboarding flow.",
    details: "Recommends specific, measurable metrics with definitions and explains how each ties to your goal.",
    tips: ["Mention your current tools (analytics, CRM).", "Ask for leading vs. lagging indicators."],
    favorite: false
  },
  {
    id: 97,
    command: "/benchmark",
    title: "Benchmark",
    category: "Analysis",
    description: "Compare your performance against benchmarks.",
    example: "/benchmark How does my SaaS churn rate compare to industry standards?",
    details: "Provides industry benchmark ranges for a metric and contextualizes your performance against them.",
    tips: ["Specify your industry and company size.", "Ask for improvement suggestions if you're below benchmark."],
    favorite: false
  },

  /* ===================== Extra Learning ===================== */
  {
    id: 98,
    command: "/mnemonic",
    title: "Mnemonic Device",
    category: "Learning",
    description: "Create a memory aid for hard-to-remember info.",
    example: "/mnemonic Help me remember the planets in order.",
    details: "Generates a memorable phrase, acronym, or visual association to help you recall information easily.",
    tips: ["Provide the list of items to remember.", "Ask for a vivid visual association."],
    favorite: false
  },
  {
    id: 99,
    command: "/practice",
    title: "Practice Problems",
    category: "Learning",
    description: "Generate practice problems on a topic.",
    example: "/practice 5 algebra problems with solutions.",
    details: "Creates practice problems at a difficulty you choose, complete with step-by-step solutions for self-study.",
    tips: ["Specify the difficulty level.", "Ask for hints before full solutions."],
    favorite: false
  },
  {
    id: 100,
    command: "/resources",
    title: "Learning Resources",
    category: "Learning",
    description: "Recommend resources to learn a topic.",
    example: "/resources Best resources to learn React in 2024.",
    details: "Curates a list of free and paid resources (courses, books, docs, videos) organized by learning style and level.",
    tips: ["Mention your preferred learning style.", "Ask for free vs. paid options."],
    favorite: false
  }
];

// Expose for both browser global and module environments
if (typeof window !== "undefined") {
  window.commands = commands;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = commands;
}
