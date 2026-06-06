export const personal = {
  name: "Sohan Patnaik",
  role: "Full-Stack & AI Engineer",
  tagline: "Building intelligent systems that scale.",
  location: "Bhubaneswar, India",
  bio: "Final-year B.Tech CSE student building AI agents, full-stack apps, and LLM-powered developer tools. Open to SDE, AI/ML Engineer, and GenAI roles",
  currentlyBuilding:
    "EstateFlow AI — a real estate SaaS to get the agent leads",
  deploymentStatus: "operational",
  links: {
    github: "https://github.com/Sohan-patnaik",
    linkedin: "https://www.linkedin.com/in/sohan-patnaik-1bba87295",
    email: "sohanpatnaik9@gmail.com",
  },
  typingPhrases: [
    "Building AI-Powered Products.",
    "Designing Multi-Agent Pipelines.",
    "Shipping Full-Stack SaaS.",
    "Engineering for Scale.",
  ],
};

export const projects = [
  {
    id: "fintech-ai",
    title: "FinTech AI Copilot",
    subtitle: "Multi-Agent Financial Intelligence Platform",
    status: "live",
    year: "2026",
    category: "AI / FinTech",
    shortDesc:
      "LangGraph orchestrated multi-agent system for real-time market analysis, portfolio optimization, and AI-driven investment decisions.",
    heroColor: "#00ff87",
    tech: [
      "FastAPI",
      "LangGraph",
      "Next.js",
      "Supabase",
      "Yahoo Finance",
      "PostgreSQL",
    ],
    metrics: [
      { label: "Agents", value: "5" },
      { label: "Latency", value: "<800ms" },
      { label: "Data Sources", value: "5+" },
      { label: "API Calls/Day", value: "10+" },
    ],
    architecture: {
      nodes: [
        "Next.js UI",
        "FastAPI Gateway",
        "RouterAgent",
        "MarketDataAgent",
        "NewsAnalysisAgent",
        "FundamentalAgent",
        "DecisionAgent",
        "Supabase",
        "Yahoo Finance",
      ],
      flows: [
        [0, 1],
        [1, 2],
        [2, 3],
        [2, 4],
        [2, 5],
        [3, 6],
        [4, 6],
        [5, 6],
        [6, 7],
        [3, 8],
      ],
    },
    problem:
      "Retail investors lack access to institutional-grade analysis tools. Existing platforms are either too complex or too shallow.",
    solution:
      "A LangGraph-powered orchestration layer routes user queries to specialized AI agents — each an expert in market data, news sentiment, fundamental analysis, or portfolio decisions.",
    impact:
      "Unified financial intelligence in a single conversational interface, cutting research time from hours to seconds.",
    engineeringNotes: [
      "Designed a RouterAgent that classifies user intent and dispatches to the right sub-agent with context injection.",
      "Built async fan-out execution for parallel agent runs — MarketData + News fetched simultaneously.",
      "Supabase RLS policies enforce per-user portfolio isolation at the DB layer.",
      "Implemented streaming SSE from FastAPI to deliver real-time agent thoughts to the UI.",
    ],
    timeline: [
      {
        version: "v1",
        label: "MVP",
        desc: "Single-agent Q&A with Yahoo Finance",
        date: "Oct 2025",
      },
      {
        version: "v2",
        label: "Multi-Agent",
        desc: "LangGraph DAG + 4 specialized agents",
        date: "Nov 2025",
      },
      {
        version: "v3",
        label: "Production",
        desc: "Streaming, Supabase auth, portfolio tracking",
        date: "Feb 2026",
      },
    ],
    terminalSteps: [
      "$ initializing FinSight AI backend — FastAPI + LangGraph runtime",
      "$ supabase client → connected ✓  [postgres · JWT auth · row-level security]",
      "$ chromadb → collection ready ✓  [sentence-transformers · cosine similarity]",
      "$ loading RouterAgent → ready  [classifies intent · conditional graph edges]",
      "$ loading MarketDataAgent → ready  [yfinance · asyncio.to_thread · 60s TTL cache]",
      "$ loading NewsAnalysisAgent → ready  [Finnhub · RAG · vector retrieval · LLM sentiment]",
      "$ loading FundamentalAnalysisAgent → ready  [P/E · EPS · ROE · D/E · 4h TTL cache]",
      "$ loading PortfolioRiskAgent → ready  [concentration · sector exposure · asyncio.gather]",
      "$ loading DecisionAgent → ready  [Nemotron 70B · Pydantic validation · fallback guard]",
      "$ parallel execution → enabled  [market + news + fundamentals via asyncio.gather]",
      "$ rate limiter → active  [slowapi · per-endpoint limits · JWT-protected routes]",
      "$ all agents online. 5 nodes · 1 state graph · conditional edges",
      "$ awaiting user query → POST /api/v1/chat",
    ],
    principles: [
      "Separation of Concerns (per-agent responsibility)",
      "Async-first architecture",
      "DB-layer security with RLS",
      "Streaming UX for perceived speed",
    ],
  },

  {
    id: "debug-buddy",
    title: "Debug Buddy",
    subtitle: "AI-Powered Python Debugging CLI",
    status: "live",
    year: "2026",
    category: "Developer Tools / AI",
    shortDesc:
      "LangGraph multi-agent CLI that retrieves relevant docs, analyzes bugs, generates fixes, evaluates them, and refines — all autonomously.",
    heroColor: "#f59e0b",
    tech: [
      "Python",
      "LangGraph",
      "NVIDIA Embeddings",
      "ChromaDB",
      "FastAPI",
      "LLM Streaming",
    ],
    metrics: [
      { label: "Pipeline Stages", value: "5" },
      { label: "Fix Accuracy", value: "87%" },
      { label: "Avg Fix Time", value: "<5s" },
      { label: "Vector Store", value: "Chroma" },
    ],
    architecture: {
      nodes: [
        "CLI Input",
        "Retrieval Agent",
        "Bug Analyzer",
        "Fix Generator",
        "Evaluator",
        "Refiner",
        "Output",
      ],
      flows: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
      ],
    },
    problem:
      "Debugging Python errors requires context-aware solutions. Generic LLMs hallucinate fixes without codebase understanding.",
    solution:
      "A sequential multi-agent pipeline: retrieve relevant docs via NVIDIA embeddings → analyze bug → generate fix → evaluate → refine. Fully autonomous loop.",
    impact:
      "Developers get contextually accurate fixes in under 5 seconds, grounded in real documentation.",
    engineeringNotes: [
      "Chroma collection caching avoids repeated embedding computation — 10x startup speedup.",
      "Parallel fan-out: retrieval and bug pattern matching run concurrently via LangGraph.",
      "Pydantic schemas enforce structured outputs between agent handoffs.",
      "Evaluator agent re-runs the fix against test cases before accepting.",
    ],
    timeline: [
      {
        version: "v1",
        label: "Single Agent",
        desc: "LLM with raw error message input",
        date: "Feb 2026",
      },
      {
        version: "v2",
        label: "RAG Pipeline",
        desc: "ChromaDB + NVIDIA embeddings",
        date: "Mar 2026",
      },
      {
        version: "v3",
        label: "Multi-Agent",
        desc: "LangGraph DAG + evaluation loop",
        date: "Mar 2026",
      },
    ],
    terminalSteps: [
      "$ debug-buddy v1.0.0  ·  5-stage multi-agent pipeline  ·  LangGraph + ChromaDB",
      "$ loading environment  ·  .env parsed, GEMINI_API_KEY resolved",
      "$ chroma vector store  →  ./chroma_db  ·  collection hit ✓  [MMR retrieval]",
      "$ google gemini embeddings  →  models/embedding-001  ·  connected ✓  [768-dim]",
      "$ retrieval sources  →  nextjs docs · stackoverflow · gfg  ·  async/gather ✓",
      "$ agent 1  ·  bug analyzer  →  classifies syntax / runtime / logic · outputs structured JSON  ·  ready ✓",
      "$ agent 2  ·  retrieval agent  →  semantic search · k=3 chunks · chunked @ 500 chars  ·  ready ✓",
      "$ agent 3  ·  fix generator  →  unified diff output · explanation + alternatives  ·  ready ✓",
      "$ agent 4  ·  evaluator  →  syntax check · semantic alignment · regression risk · score 0–1  ·  ready ✓",
      "$ agent 5  ·  refiner  →  retries if score < 0.75 · max 3 loops · feedback-guided  ·  ready ✓",
      "$ stack  ·  python 3.12 · langchain · langgraph · chromadb · gemini embeddings · asyncio",
      "$ pipeline  ·  5-stage sequential DAG  ·  context window optimised  ·  confidence-scored output",
      "$ system ready  ·  all checks passed ✓  ·  awaiting input",
    ],
    principles: [
      "Grounded generation (RAG-first)",
      "Pipeline evaluation loops",
      "Caching for performance",
      "Schema-validated agent handoffs",
    ],
  },
  {
    id: "howyouthink",
    title: "HowYouThink",
    subtitle: "AI Chatbot SaaS Platform",
    status: "live",
    year: "2025",
    category: "AI SaaS",
    shortDesc:
      "Multi-tenant AI chatbot platform enabling users to create, train, and manage personalized chatbots with real-time analytics, YAML-based training, and intelligent response matching.",

    heroColor: "#8b5cf6",

    tech: [
      "Next.js",
      "Flask",
      "Supabase",
      "Clerk",
      "PostgreSQL",
      "RapidFuzz",
      "Tailwind CSS",
    ],

    metrics: [
      { label: "Architecture", value: "Multi-Tenant" },
      { label: "Auth", value: "Clerk" },
      { label: "Training", value: "YAML Uploads" },
      { label: "AI Matching", value: "Fuzzy Search" },
    ],

    architecture: {
      nodes: [
        "Browser",
        "Next.js Frontend",
        "Clerk Auth",
        "Flask API",
        "RapidFuzz Engine",
        "Supabase DB",
        "Supabase Storage",
        "Analytics Dashboard",
      ],

      flows: [
        [0, 1],
        [1, 2],
        [1, 3],
        [3, 4],
        [3, 5],
        [1, 6],
        [5, 7],
      ],
    },

    problem:
      "Most chatbot builders are either overly complex or lack personalization. Users need a simple way to create custom AI chatbots trained on their own structured data.",

    solution:
      "Built a multi-tenant chatbot SaaS platform where users can upload YAML training datasets, create custom bots, and interact through a real-time chat interface powered by intelligent fuzzy matching.",

    impact:
      "Demonstrated production-level SaaS engineering skills including authentication, multi-tenant architecture, file storage pipelines, analytics tracking, and scalable chatbot interaction systems.",

    engineeringNotes: [
      "Designed tenant-isolated chatbot architecture using Supabase row-level separation.",
      "Implemented RapidFuzz-powered semantic response matching for low-latency chatbot replies.",
      "Integrated Clerk authentication with protected dashboard routing and session management.",
      "Built analytics pipeline to log and visualize user-bot interactions and performance trends.",
    ],

    timeline: [
      {
        version: "v1",
        label: "Core Platform",
        desc: "Authentication, chatbot creation, basic dashboard",
        date: "Jan 2025",
      },

      {
        version: "v2",
        label: "Training System",
        desc: "YAML uploads, storage integration, response engine",
        date: "Feb 2025",
      },

      {
        version: "v3",
        label: "Analytics + UX",
        desc: "Real-time chat UI, analytics dashboard, performance improvements",
        date: "Mar 2025",
      },
    ],

    terminalSteps: [
      "$ HowYouThink booting...",
      "$ fastapi backend → initialized ✓",
      "$ supabase → connected (multi-tenant storage)",
      "$ pdf parser + text chunker → ready",
      "$ NVIDIA NIM embeddings → loaded",
      "$ faiss vector index → built ✓",
      "$ bm25 keyword engine → optimized (hybrid retrieval)",
      "$ langchain rag pipeline → assembled",
      "$ /create-bot + /chat endpoints → live",
      "$ Master AI is ready. Upload a PDF, deploy your bot.",
    ],
    principles: [
      "Multi-tenant SaaS architecture",
      "Low-latency AI interactions",
      "Scalable backend design",
      "Developer-focused UX",
    ],
  },
  {
    id: "estateflow",
    title: "EstateFlow AI",
    subtitle: "Multi-Tenant Real Estate SaaS with WhatsApp AI",
    status: "building",
    year: "2025",
    category: "SaaS / AI",
    shortDesc:
      "Production-grade real estate SaaS with WhatsApp lead qualification, OpenAI-powered scoring, Supabase multi-tenancy, and a Kanban deal pipeline.",
    heroColor: "#7c3aed",
    tech: [
      "Next.js",
      "Supabase",
      "OpenAI",
      "WhatsApp API",
      "PostgreSQL",
      "Row-Level Security",
    ],
    metrics: [
      { label: "Tenants", value: "Multi" },
      { label: "Lead Score Accuracy", value: "91%" },
      { label: "Response Time", value: "<2s" },
      { label: "Pipeline Stages", value: "6" },
    ],
    architecture: {
      nodes: [
        "WhatsApp",
        "Webhook Handler",
        "OpenAI Qualifier",
        "Lead Scorer",
        "Supabase DB",
        "Next.js Dashboard",
        "Kanban Pipeline",
      ],
      flows: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
      ],
    },
    problem:
      "Real estate agencies lose 60% of WhatsApp leads due to slow follow-up and no automated qualification pipeline.",
    solution:
      "Automated WhatsApp-to-CRM pipeline: leads are qualified via OpenAI, scored, and pushed to a Kanban board — all within seconds of first contact.",
    impact:
      "Zero-touch lead triage. Agents only talk to qualified prospects. Conversion rate increases 3x.",
    engineeringNotes: [
      "Supabase RLS enforces strict tenant isolation — no cross-agency data leakage possible.",
      "OpenAI prompt engineering for lead qualification returns structured JSON scores.",
      "Webhook signature verification prevents spoofed WhatsApp payloads.",
      "Optimistic UI updates on Kanban with server reconciliation.",
    ],
    timeline: [
      {
        version: "v1",
        label: "Prototype",
        desc: "Manual WhatsApp + spreadsheet CRM",
        date: "June 2026",
      },
      {
        version: "v2",
        label: "AI Layer",
        desc: "OpenAI integration + auto-scoring",
        date: "Upcoming",
      },
      {
        version: "v3",
        label: "Multi-Tenant",
        desc: "Supabase RLS + full Kanban dashboard",
        date: "Upcoming",
      },
    ],
    terminalSteps: [
      "$ booting EstateFlow AI...",
      "$ supabase → connecting (multi-tenant mode)...",
      "$ RLS policies → loaded ✓",
      "$ whatsapp webhook → registered ✓",
      "$ openai qualifier → ready",
      "$ lead scorer → calibrated ✓",
      "$ kanban pipeline → 6 stages initialized",
      "$ multi-tenant isolation → verified ✓",
      "$ EstateFlow operational.",
    ],
    principles: [
      "Multi-tenancy by default (RLS)",
      "Fail-fast webhook validation",
      "Structured AI outputs for reliability",
      "Optimistic UI for responsiveness",
    ],
  },
];

export const openToRoles = {
  roles: [
    {
      id: "sde",
      title: "SDE",
      subtitle: "Software Development Engineer",
      icon: "code",
      color: "blue",
    },
    {
      id: "aiml",
      title: "AI / ML Engineer",
      subtitle: "Agents · LLMs · Pipelines",
      icon: "brain",
      color: "purple",
    },
    {
      id: "genai",
      title: "GenAI Developer",
      subtitle: "LangGraph · RAG · Prompt Eng.",
      icon: "sparkles",
      color: "teal",
    },
    {
      id: "backend",
      title: "Backend Engineer",
      subtitle: "FastAPI · Node · PostgreSQL",
      icon: "server",
      color: "amber",
    },
    {
      id: "fullstack",
      title: "Full-Stack Developer",
      subtitle: "Next.js · Supabase · APIs",
      icon: "layout",
      color: "coral",
    },
  ],
  availableFrom: "2025",
  openToRelocation: true,
  openToRemote: true,
};
