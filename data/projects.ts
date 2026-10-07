import { Project } from '../types';

export const projects: Project[] = [
  { 
    name: 'Software Fault Prediction', 
    stack: ['R'], 
    desc: 'Designed and evaluated a concise fault‑prediction method on software‑evolution data.' 
  },
  { 
    name: 'Toy Language + JVM Backend', 
    stack: ['ANTLR','Jasmin'], 
    desc: 'Built a small language with a compiler front‑end and JVM bytecode backend.' 
  },
  { 
    name: 'Hunterguh: 2D Multiplayer', 
    stack: ['Unity','C#'], 
    desc: 'Implemented a 2D multiplayer action game.' 
  },
  { 
    name: '2D Game Engine (from scratch)', 
    stack: ['Python','PyGame','PyQt'], 
    desc: 'Lightweight engine with UI, input handling, and a scene/update loop.' 
  },
  { 
    name: 'Arcade Game', 
    stack: ['C++'], 
    desc: 'Fixed‑shooter arcade game implemented from scratch.' 
  },
  { 
    name: 'ChaapArt: Card‑Design Web App', 
    stack: ['PHP','Laravel'], 
    desc: 'Co‑founded and built the backend for a templated card‑design platform.' 
  },
];

