---
title: "About"
description: "Platform Architecture and Distributed Ecosystem"
---

## Executive Summary

The OpenHealth5G project proposes the development and experimentation of innovative digital health and connected care applications, exploring the potential of open 5G and Open RAN network technologies. The prioritized use cases include **emergency telehealth**, enabling remote care in critical situations with support for connected medical devices and sensors, and **immersive medical education**, utilizing augmented and virtual reality resources for training health students and professionals. These applications are developed collaboratively by researchers from partner universities — UFRGS, UFCSPA, UNISINOS, and PUCRS — across the health, computing, and networking disciplines, ensuring both technical performance and usability in real operational contexts.

To enable these scenarios, the project uses a **distributed experimentation infrastructure** supported by the [OpenRAN@Brasil](https://www.openran.org.br) program, involving the consortium universities under technical coordination of PoP-RS. This infrastructure will validate Open RAN technologies, network slicing, Open Gateway, and RAN Intelligent Controllers (RICs), integrated with an open-source 5G core. Intelligent network control and orchestration mechanisms will be developed, along with a cross-cutting Machine Learning Operations (MLOps) layer supporting ML models applied to automation, optimization, and monitoring of applications and services.

Expected outcomes include scientific and technological advances positioning Brazil at the frontier of fifth-generation open network research for critical applications, direct impacts on workforce development in networks, artificial intelligence, and digital health, and contribution to strengthening the national innovation and experimentation ecosystem for open networks — amplifying social impact through improved quality and access to health services.

## Distributed Ecosystem

The project encompasses the development and integration of a distributed experimentation infrastructure and 5G Open RAN applications, articulating the environments of partner universities in the Porto Alegre metropolitan region — **UFRGS, PUCRS, UNISINOS, and UFCSPA** — in cooperation with PoP-RS, which hosts the network core and main Open RAN architecture components.

![Distributed Ecosystem](/images/distributed-ecosystem.png)

**PoP-RS** hosts the 5G core (5GC) of the OpenRAN@Brasil infrastructure, along with the main control components of the Open RAN architecture, including Near-Real-Time and Non-Real-Time RAN Intelligent Controllers (RICs), the Central Unit (CU), and Distributed Units (DUs) serving the partner universities.

**UFRGS** and **UNISINOS** concentrate advanced experimentation environments with outdoor O-RAN Radio Units (RUs), edge computing nodes, and capability to execute local DUs, serving as advanced points of the OpenRAN@Brasil testbed for distributed application execution.

**PUCRS** and **UFCSPA** host the execution environments for connected health applications, interconnected to the testbed via indoor RUs and 5G connectivity. PUCRS utilizes its Simulation and Learning Laboratory for medical education and remote training experiments with immersive (VR/AR) technologies. UFCSPA concentrates telehealth development and emergency telemedicine validation, including sensors, cameras, and portable medical devices.

## Platform Architecture

![OpenHealth5G Architecture](/images/architecture.png)

## Technology Stack

### Network Technologies

- **5G Core**: Open5GS, Free5GC with full end-to-end network slicing
- **Open RAN**: O-RAN architecture with Near-RT and Non-RT RICs
- **Network Slicing**: uRLLC (ultra-reliable low-latency) for telehealth, eMBB (enhanced mobile broadband) for XR
- **Open Gateway**: GSMA CAMARA Project APIs via NEF integration for direct 5G core access
- **Intelligent Control**: xApps and rApps on RICs for real-time resource optimization
- **Analytics**: NWDAF (Network Data Analytics Function) for predictive optimization
- **MLOps**: MLflow/KubeFlow infrastructure for ML lifecycle automation

### Application Technologies

- **N3IWF**: Non-3GPP interconnection for medical devices (BLE, Wi-Fi) into 5G core
- **Medical Devices**: Portable cardiac ultrasound, pulse oximeter, Polar H10 ECG belt
- **Dashboards**: React Native/ReactJS/NodeJS for real-time patient information visualization
- **XR Platform**: Meta Glasses API, Unity, WebRTC/LiveKit streaming pipelines
- **Security**: STRIDE, LINDDUN, DREAD threat modeling frameworks

### Scientific Differentiators

1. **NWDAF predictive analytics** for dynamic resource optimization using near-real-time traffic and application behavior data
2. **N3IWF cross-network connectivity** for secure interconnection of medical devices on untrusted networks with the 5G infrastructure
3. **Open Gateway / NEF API integration** exposing network capabilities via standardized open APIs for programmable health applications
4. **Distributed intelligence** via RICs with adaptive slicing integrating Non-RT and Near-RT controllers with dedicated rApps and xApps
5. **Multi-institution distributed testbed** connecting UNISINOS, UFRGS, PUCRS, and UFCSPA via Metropoa metropolitan network
