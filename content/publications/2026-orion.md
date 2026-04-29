---
title: "ORION: Intent-Aware Orchestration in Open RAN for SLA-Driven Network Management"
authors: "Gabriela da Silva Machado, Gustavo Z. Bruno, Alexandre Huff, Jose Marcos Camara Brito, Cristiano B. Both"
venue: "arXiv - Networking and Internet Architecture (cs.NI)"
date: 2026-03-04T23:10:43-03:00
pdf_link: "https://arxiv.org/abs/2603.03667"
doi: "https://doi.org/10.48550/arXiv.2603.03667"
tags: ["Orchestration", "Intent", "SLA"]
---

The disaggregation of the Radio Access Network (RAN) introduces unprecedented flexibility but significant operational complexity, necessitating automated management frameworks. However, current Open RAN (O-RAN) orchestration relies on fragmented manual policies, lacking end-to-end intent assurance from high-level requirements to low-level configurations. In this paper, we propose ORION, an O-RAN compliant intent orchestration framework that integrates Large Language Models (LLMs) via the Model Context Protocol (MCP) to translate natural language intents into enforceable network policies. ORION leverages a hierarchical agent architecture, combining an MCP-based Service Management and Orchestration (SMO) layer for semantic translation with a Non-Real-Time RIC rApp and Near-Real-Time RIC xApp for closed-loop enforcement. Extensive evaluations using GPT-5, Gemini 3 Pro, and Claude Opus demonstrate a 100% policy generation success rate for high-capacity models, highlighting significant trade-offs in reasoning efficiency. We show that ORION reduces provisioning complexity by automating the complete intent lifecycle, from ingestion to E2-level enforcement, paving the way for autonomous 6G networks.
