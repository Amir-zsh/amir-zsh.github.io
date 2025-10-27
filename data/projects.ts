import { Project } from '../types';
import { links } from './links';

export const projects: Project[] = [
  { 
    name: 'Pivot-Aware Speculative Decoding', 
    stack: ['Python','PyTorch','Transformers','vLLM','GPT-Fast'], 
    link: links.PAD, 
    desc: 'Speculative decoding that rejects only pivot-critical tokens to keep accuracy while boosting throughput.' 
  },
  { 
    name: 'GeoToken: Hierarchical Image Geolocalization', 
    stack: ['Python','PyTorch','Transformers'], 
    link: links.GeoToken, 
    desc: 'Geolocalization framed as next-token prediction for accurate location inference.' 
  },
  { 
    name: 'OSMGen: Controllable Satellite Image Synthesis', 
    stack: ['Python','PyTorch','Transformers','Diffusers'], 
    link: links.OSMGen, 
    desc: 'Satellite image generation conditioned on OpenStreetMap for structure-faithful, controllable outputs.' 
  },
  { 
    name: 'MobiZO: Efficient LLM Fine-Tuning at the Edge', 
    stack: ['Python','PyTorch','Transformers','PEFT','ExecuTorch'], 
    link: links.MobiZO, 
    desc: 'Edge-focused fine-tuning leveraging inference engines to remove backprop and cut VRAM on mobile/edge hardware.' 
  },
  { 
    name: 'FDDM: Frequency‑Domain Diffusion', 
    stack: ['Python','PyTorch'], 
    link: links.FDDM, 
    desc: 'Diffusion in the frequency domain with a scale‑dependent noise schedule; faster training and sampling.' 
  },
  { 
    name: 'Hierarchical Federated Learning (FedML OSS)', 
    stack: ['FedML','PyTorch','PyTorch RPC','MPI','gRPC','MQTT'], 
    link: links.FedML, 
    desc: 'Added hierarchical FL to FedML open‑source stack by implementing distributed training primitives.' 
  },
];

export const otherProjects: Project[] = [
  { 
    name: 'Software Fault Prediction', 
    stack: ['R'], 
    link: undefined, 
    desc: 'Designed and evaluated a concise fault‑prediction method on software‑evolution data.' 
  },
  { 
    name: 'Toy Language + JVM Backend', 
    stack: ['ANTLR','Jasmin'], 
    link: undefined, 
    desc: 'Built a small language with a compiler front‑end and JVM bytecode backend.' 
  },
  { 
    name: 'Hunterguh: 2D Multiplayer', 
    stack: ['Unity','C#'], 
    link: undefined, 
    desc: 'Implemented a 2D multiplayer action game.' 
  },
  { 
    name: '2D Game Engine (from scratch)', 
    stack: ['Python','PyGame','PyQt'], 
    link: undefined, 
    desc: 'Lightweight engine with UI, input handling, and a scene/update loop.' 
  },
  { 
    name: 'Arcade Game', 
    stack: ['C++'], 
    link: undefined, 
    desc: 'Fixed‑shooter arcade game implemented from scratch.' 
  },
  { 
    name: 'ChaapArt: Card‑Design Web App', 
    stack: ['PHP','Laravel'], 
    link: undefined, 
    desc: 'Co‑founded and built the backend for a templated card‑design platform.' 
  },
];

