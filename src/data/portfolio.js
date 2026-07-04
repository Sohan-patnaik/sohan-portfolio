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
    resume: "https://drive.google.com/file/d/1iUU32CZ5Gi57NKVa8N28IbOMwbi55v2b/view?usp=sharing",
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
    id: "agentops-sdk",
    title: "AgentOps SDK",
    subtitle: "Open-Source LLM Observability & Evaluation SDK",
    status: "live",
    year: "2026",
    category: "Developer Tools / AI Infrastructure",
    githubUrl: "https://github.com/Sohan-patnaik/agent-ops",
    demoUrl: "https://pypi.org/project/agentops-sdk/",

    shortDesc:
      "Published lightweight Python SDK on PyPI for real-time latency tracing, token cost accounting, and response evaluation, backed by an auto-scaling FastAPI service running inside Docker containers on AWS EC2.",

    heroColor: "#3b82f6",

    tech: [
      "Python",
      "FastAPI",
      "OpenTelemetry",
      "Docker",
      "AWS EC2",
      "PyPI",
      "REST API",
      "LangChain",
      "Heuristic Evaluation",
    ],

    metrics: [
      { label: "SDK APIs", value: "3 (Monitor, Eval, Report)" },
      { label: "Deployment", value: "Docker / AWS EC2" },
      { label: "Package", value: "PyPI Published" },
      { label: "Scale", value: "10k req/min load-tested" },
    ],

    architecture: {
      nodes: [
        "Developer App",
        "AgentOps SDK",
        "OpenTelemetry",
        "Docker Container",
        "FastAPI Backend",
        "Evaluation Engine",
        "Reporting Engine",
      ],
      flows: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [4, 6],
        [5, 6],
      ],
    },

    problem:
      "Developers building LLM applications often lack a lightweight, developer-friendly way to monitor latency, token usage, response quality, and generate evaluation reports without building custom observability tooling.",

    solution:
      "Built and published an open-source Python SDK that exposes simple monitor(), evaluate(), and report() APIs. The SDK automatically instruments LLM requests using OpenTelemetry, evaluates responses with heuristic metrics, and communicates with a FastAPI backend for centralized processing and reporting.",

    impact:
      "Reduced the effort required to add LLM observability from dozens of lines of custom instrumentation to three simple SDK calls, providing a foundation for production-ready monitoring and evaluation workflows.",

    engineeringNotes: [
      "Designed a modular client-server SDK architecture separating core instrumentation, heuristics evaluation, and backend reporting.",
      "Integrated OpenTelemetry-native tracing to automatically monitor asynchronous LLM API calls, request latency, and token distributions.",
      "Implemented automatic response normalization for LangChain AIMessage objects.",
      "Developed heuristic-based faithfulness and relevance evaluators running asynchronously on client runtimes.",
      "Containerized the FastAPI backend using Docker for stateless, horizontal scaling on AWS EC2.",
      "Built a REST-based SDK ↔ Backend communication layer to keep client applications lightweight.",
    ],

    timeline: [
      {
        version: "v0.1.0",
        label: "MVP Release",
        desc: "Published SDK on PyPI with monitoring, evaluation and reporting APIs.",
        date: "July 2026",
      },
      {
        version: "v0.2",
        label: "Observability",
        desc: "OpenTelemetry instrumentation and modular evaluation engine.",
        date: "Upcoming",
      },
      {
        version: "v1.0",
        label: "Production Platform",
        desc: "RAGAS integration, persistent storage, dashboard and multi-provider support.",
        date: "Planned",
      },
    ],

    terminalSteps: [
      "$ pip install agentops",
      "$ importing AgentOps...",
      "$ sdk initialized ✓",
      "$ monitor() → OpenTelemetry tracing enabled",
      "$ evaluate() → heuristic evaluator ready",
      "$ report() → backend aggregation enabled",
      "$ FastAPI backend → connected",
      "$ AWS EC2 endpoint → healthy ✓",
      "$ AgentOps SDK ready.",
    ],

    principles: [
      "Developer-first API design",
      "Modular SDK architecture",
      "OpenTelemetry-native instrumentation",
      "Extensible evaluation pipeline",
      "Lightweight client, backend-powered processing",
    ],
  },
  {
    id: "fintech-ai",
    title: "FinTech AI Copilot",
    subtitle: "Multi-Agent Financial Intelligence Platform",
    status: "live",
    year: "2026",
    category: "AI / FinTech",
    githubUrl: "https://github.com/Sohan-patnaik/ai-fintech",
    demoUrl: "https://fincopilot-ai.vercel.app",
    shortDesc:
      "Production-ready multi-agent AI system utilizing LangGraph DAG workflows for real-time market data retrieval, sentiment analysis, and risk scoring in under 800ms, deployed in containerized environments.",
    heroColor: "#00ff87",
    tech: [
      "FastAPI",
      "LangGraph",
      "Docker",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Yahoo Finance",
    ],
    metrics: [
      { label: "DAG Nodes", value: "5 Specialized Agents" },
      { label: "Avg Latency", value: "<800ms (Parallel)" },
      { label: "DB Security", value: "Supabase RLS Policies" },
      { label: "Environments", value: "Docker Containerized" },
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
        "Supabase DB (RLS)",
        "Yahoo Finance API",
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
      "Orchestrated a 5-node agent network using LangGraph state graphs with conditional routing and self-correction loops.",
      "Implemented async parallel execution (asyncio.gather) to concurrently fetch market fundamentals and sentiment data, reducing total latency by 45%.",
      "Secured Postgres data layers using Supabase Row-Level Security (RLS) policies to isolate user portfolio records.",
      "Designed a high-throughput streaming backend returning FastAPI Server-Sent Events (SSE) for real-time agent reasoning step visualization.",
      "Containerized backend workflows with Docker to ensure environmental parity between staging and production.",
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
    id: "howyouthink",
    title: "CustomGPT Studio",
    subtitle: "AI Chatbot SaaS Platform",
    status: "live",
    year: "2025",
    category: "AI SaaS",
    githubUrl: "https://github.com/Sohan-patnaik/HowYouThink",
    demoUrl: "https://trainmybot.vercel.app",
    shortDesc:
      "A scalable multi-tenant SaaS platform allowing businesses to train and deploy custom chatbots using YAML documents, featuring low-latency fuzzy matching, PostgreSQL storage, and real-time analytics.",

    heroColor: "#8b5cf6",

    tech: [
      "Next.js",
      "Flask",
      "Supabase",
      "Clerk",
      "PostgreSQL",
      "RapidFuzz",
      "Docker",
    ],

    metrics: [
      { label: "Tenancy", value: "Multi-Tenant (Isolated)" },
      { label: "Matching Latency", value: "<15ms (RapidFuzz Engine)" },
      { label: "Authentication", value: "Clerk JWT Middleware" },
      { label: "Containers", value: "Multi-stage Docker builds" },
    ],

    architecture: {
      nodes: [
        "Browser",
        "Next.js Frontend",
        "Clerk Auth",
        "Flask API",
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
      "Implemented RapidFuzz-powered semantic response matching for low-latency chatbot replies under 15ms.",
      "Integrated Clerk authentication with protected dashboard routing and session management.",
      "Built analytics pipeline to log and visualize user-bot interactions and performance trends.",
      "Used multi-stage Docker builds to package both the Next.js frontend and Python API into minimal footprint production images.",
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
      "$ CustomGPT Studio booting...",
      "$ fastapi backend → initialized ✓",
      "$ supabase → connected (multi-tenant storage)",
      "$ pdf parser + text chunker → ready",
      "$ NVIDIA NIM embeddings → loaded",
      "$ faiss vector index → built ✓",
      "$ bm25 keyword engine → optimized (hybrid retrieval)",
      "$ langchain rag pipeline → assembled",
      "$ /create-bot + /chat endpoints → live",
      "$ CustomGPT is ready. Upload a PDF, deploy your bot.",
    ],
    principles: [
      "Multi-tenant SaaS architecture",
      "Low-latency AI interactions",
      "Scalable backend design",
      "Developer-focused UX",
    ],
  },
  {
    id: "debug-buddy",
    title: "Debug Buddy",
    subtitle: "AI-Powered Python Debugging CLI",
    status: "live",
    year: "2026",
    category: "Developer Tools / AI",
    githubUrl: "https://github.com/Sohan-patnaik/debug-buddy",
    demoUrl: "",
    shortDesc:
      "Command-line agentic tool running a 5-stage LangGraph execution loop to locate stack traces, semantic search vector stores, and autonomously generate score-evaluated diffs in secure sandboxes.",
    heroColor: "#f59e0b",
    tech: [
      "Python",
      "LangGraph",
      "Docker",
      "NVIDIA Embeddings",
      "ChromaDB",
      "FastAPI",
      "LLM Streaming",
    ],
    metrics: [
      { label: "Execution Loop", value: "5-Stage Self-Correction" },
      { label: "Fix Accuracy", value: "87% (on 100+ bugs)" },
      { label: "Vector Store", value: "Chroma / NVIDIA Embeddings" },
      { label: "Sandbox Runtime", value: "Docker Isolated" },
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
      "Orchestrated a self-evaluating debugging agent utilizing LangGraph DAG loops to retry code fixes guided by feedback scores.",
      "Chroma collection caching avoids repeated embedding computation — 10x startup speedup.",
      "Parallel fan-out: retrieval and bug pattern matching run concurrently via LangGraph.",
      "Pydantic schemas enforce structured outputs between agent handoffs.",
      "Built Docker images containing isolated runtime sandboxes for safe local execution of LLM-generated code fixes.",
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


export const demo =[
  {},{},{},{}
]