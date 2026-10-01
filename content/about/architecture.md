---
title: "Architecture"
description: "OpenHealth5G Platform Architecture"
---

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
