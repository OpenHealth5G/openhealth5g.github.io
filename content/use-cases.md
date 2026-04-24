---
title: "Use Cases"
description: "Emergency Telehealth and Immersive Health Education"
---

## Use Case 1: Emergency Telehealth

Emergency telehealth leverages ultra-low-latency 5G connectivity to enable real-time remote emergency medical response, connecting first responders in the field with remote medical specialists.

![telehealth](/images/use-case-1-telehealth.png)

### Scenario

A patient is involved in a traffic accident on a highway. A first-response team equipped with connected devices arrives at the scene. The responder uses a **4K camera** attached to their uniform to transmit ultra-high-definition images of the environment and the victim's clinical condition to specialists at a remote medical center. Simultaneously, a **portable ultrasound** and **vital signs sensors** are connected to a 5G tablet or smartphone, allowing examination images and patient monitoring to be sent in real-time to a reference hospital.

The ultra-low latency and stable uplink of 5G ensure that video and clinical signals arrive without interruption, enabling remote specialists to guide the local team in executing immediate procedures such as immobilization, hemorrhage control, or internal injury assessment.

### Connected Equipment

- **Portable cardiac ultrasound** (convex linear 3x1) with Wi-Fi and USB transmission via N3IWF
- **4K helmet camera** for first-person procedural view
- **Pulse oximeter** for real-time oxygenation data transmission
- **Polar H10 belt** for high-precision ECG transmission via Bluetooth/ANT+
- **Smart medical cameras** with intelligent features

### 5G-Enabled Capabilities

| Capability | Benefit |
|---|---|
| Ultra-low latency | Uninterrupted video and clinical signal transmission |
| Network slicing | Dedicated network segments for telehealth with traffic isolation |
| Open RAN | Dynamic spectrum allocation prioritizing video, clinical signals, or real-time sensors |
| High bandwidth | Loss-free transmission of ultra-high-definition video and ultrasound images |
| Data synchronization | Temporal alignment of physiological signals, images, and video for precise diagnosis |
| Mobile connectivity | Equipment usable across different environments without fixed infrastructure |

---

## Use Case 2: Immersive Health Education (XR)

This scenario develops an XR application leveraging the OpenRAN@Brasil experimental environment to integrate clinical simulation with supervised real examination in health training.

![education](/images/use-case-2-xr-education.png)

### Scenario

A practical class is held in a clinical simulation center, hospital, or even equipped ambulances with a portable ultrasound, 4K camera, and XR system — all connected to the 5G network. A professor demonstrates examination techniques using portable equipment on a high-fidelity mannequin or real patient, while high-definition cameras transmit first-person images. Examination images are sent in real-time to students connected at other institutions, who use audio and video resources to follow the class interactively, with high quality and no perceptible latency.

Students can interact with the instructor, ask questions, and observe immediate responses to equipment manipulation, creating a remote, immersive, and collaborative learning experience.

### XR Technologies

- **Smart glasses** for student-surgeon interaction during procedures
- **Connected mannequins** with vital sign sensors
- **XR overlay elements**: arrows, markers, and visual instructions anchored to live video
- **Meta Glasses API** for first-person communication
- **Unity** for immersive scenario creation
- **WebRTC/LiveKit** for real-time streaming pipelines

### 5G-Enabled Capabilities

| Capability | Benefit |
|---|---|
| Mobility | Devices, sensors, and high-tech equipment usable across different environments without fixed infrastructure |
| Rapid deployment | 5G mobile available in hours vs. structural fiber installation |
| High throughput | Simultaneous multiple streams for vital signals, medical images, and procedure video |
| End-to-end network slicing | Prioritizes critical sensor traffic over video traffic, ensuring clinical alerts deliver immediately |
| Low latency | Enables students to interact with instructors and observe immediate responses to equipment manipulation |

### Educational Applications

- Stroke rehabilitation technique training via XR
- Remote clinical training with AR overlays during procedures
- Real examination transmission to classrooms across partner institutions
- Collaborative multi-institution simulation scenarios
- Robotic surgery demonstrations transmitted via 5G
