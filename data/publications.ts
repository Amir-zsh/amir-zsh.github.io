import { Publication } from '../types';
import { links } from './links';

export const publications: Publication[] = [
  {
    title: 'ASPIRE: Asynchronous Batched Self-Speculative Decoding for Long-Context LLM Inference',
    authors: 'Amir Ziashahabi*, Hossein Entezari Zarch*, Lei Gao, Murali Annavaram, Salman Avestimehr',
    venue: 'Conference on Language Modeling (COLM)',
    year: '2026',
    status: 'accepted',
    description: 'Combines per-request speculation scheduling, mixed draft-and-verify batches, and lightweight context refresh to accelerate long-context LLM inference. Achieves 1.70–4.58× decoding throughput over autoregressive baselines across three models and five benchmarks.',
    links: { code: 'https://github.com/Amir-zsh/ASPIRE', pdf: 'https://arxiv.org/abs/2609.17943' },
    figureSrc: '/figures/aspire.png'
  },
  {
    title: 'Spend Bits Where Queries Look: KV Cache Vector Quantization with Attention-Preserving Transforms',
    authors: 'Samuel Fernández-Menduiña*, Amir Ziashahabi*, Eduardo Pavez, Antonio Ortega, Salman Avestimehr',
    venue: 'Under review',
    year: '2026',
    status: 'under-review',
    description: 'NOVA-KV compresses the KV cache using attention-aware transforms and fixed-width vector quantization. At two bits per element, it recovers much of the long-context retrieval accuracy lost by scalar quantization while maintaining comparable throughput.',
    links: { code: 'https://github.com/Amir-zsh/nova-kv', pdf: 'https://arxiv.org/abs/2608.04074' },
    figureSrc: '/figures/nova-kv.png'
  },
  {
    title: 'ORBIT: Training-Free Multi-Attribute Behavioral Steering via Orthogonal Subspace Rotation',
    authors: 'Narges Ghasemi, Amir Ziashahabi, Salman Avestimehr, Jonathan May',
    venue: 'Under review',
    year: '2026',
    status: 'under-review',
    description: 'Steers multiple behavioral attributes without training by combining attribute planes into a shared subspace and applying a norm-preserving rotation. Adaptive per-token gating improves balanced attribute control while preserving output coherence.',
    links: { pdf: 'https://arxiv.org/abs/2606.22357' },
    figureSrc: '/figures/orbit.png'
  },
  {
    title: 'Understanding Communication Backends in Cross-Silo Federated Learning',
    authors: 'Amir Ziashahabi, Chaoyang He, Salman Avestimehr',
    venue: 'IEEE International Conference on Communications (ICC)',
    year: '2026',
    status: 'published',
    links: { pdf: 'https://ieeexplore.ieee.org/document/11587537/' },
    description: 'Benchmarks MPI, gRPC, and PyTorch RPC across local and geographically distributed federated learning deployments. Introduces a hybrid gRPC+S3 backend that accelerates large-model communication, achieving up to 3.8× end-to-end speedup over gRPC.',
    figureSrc: '/figures/fl-backends.png'
  },
  {
    title: 'Reject Only Critical Tokens: Pivot-Aware Speculative Decoding',
    authors: 'Amir Ziashahabi*, Yavuz Faruk Bakman*, Duygu Nur Yaldiz, Mostafa El-Khamy, Sai Praneeth Karimireddy, Salman Avestimehr',
    venue: 'NeurIPS 2025 Efficient Reasoning Workshop',
    year: '2025',
    status: 'accepted',
    links: { code: links.PAD, pdf: 'https://arxiv.org/abs/2511.00351' },
    description: 'Uses a lightweight classifier to identify tokens that matter most for task performance, rejecting only these critical tokens during speculative decoding. Increases draft-token acceptance and achieves up to 2.5× speedup while maintaining comparable task utility.',
    figureSrc: '/figures/pad.png'
  },
  {
    title: 'MobiZO: Enabling Efficient LLM Fine-Tuning at the Edge via Inference Engines',
    authors: 'Lei Gao*, Amir Ziashahabi*, Yue Niu, Salman Avestimehr, Murali Annavaram',
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP)',
    year: '2025',
    status: 'accepted',
    links: { code: links.MobiZO, pdf: 'https://arxiv.org/abs/2409.15520' },
    description: 'Enables on-device LLM fine-tuning through inference engines using gradient-free optimization. Parallel gradient estimation and Multi-Perturbed LoRA reduce runtime and memory demands, with direct integration into ExecuTorch for resource-constrained edge devices.',
    figureSrc: '/figures/mobizo.png'
  },
  {
    title: 'GeoToken: Hierarchical Geolocalization of Images via Next Token Prediction',
    authors: 'Narges Ghasemi*, Amir Ziashahabi*, Salman Avestimehr, Cyrus Shahabi',
    venue: 'IEEE International Conference on Data Mining (ICDM)',
    year: '2025',
    status: 'accepted',
    links: { code: links.GeoToken, pdf: 'https://arxiv.org/abs/2511.01082' },
    description: 'Locates images by predicting a sequence of geographic tokens, progressively narrowing from broad regions to precise locations. Combines a hierarchical global grid with beam search and multi-sample inference to explore plausible locations and improve geolocalization accuracy.',
    figureSrc: '/figures/geotoken.png'
  },
  {
    title: 'OSMGen: Highly Controllable Satellite Image Synthesis using OpenStreetMap Data',
    authors: 'Amir Ziashahabi*, Narges Ghasemi*, Sajjad Shahabi, John Krumm, Salman Avestimehr, Cyrus Shahabi',
    venue: 'NeurIPS 2025 UrbanAI Workshop',
    year: '2025',
    status: 'accepted',
    links: { code: links.OSMGen, pdf: 'https://arxiv.org/abs/2511.00345' },
    description: 'Generates realistic satellite imagery from raw OpenStreetMap geometry, tags, location, and time. Edits to map data produce targeted changes in consistent before-and-after images, supporting synthetic training data and previews of urban interventions.',
    figureSrc: '/figures/osmgen.png'
  },
  {
    title: 'Frequency Domain Diffusion Model with Scale-Dependent Noise Schedule',
    authors: 'Amir Ziashahabi, Baturalp Buyukates, Artan Sheshmani, Yi-Zhuang You, Salman Avestimehr',
    venue: 'IEEE International Symposium on Information Theory (ISIT)',
    year: '2024',
    status: 'published',
    links: { code: links.FDDM, pdf: '/files/FourierDiffusion-ISIT.pdf' },
    description: 'Moves image diffusion into the frequency domain, where a scale-dependent noise schedule controls coarse structure and fine detail separately. Exploits sparse frequency representations to achieve 2.7–8.5× computational speedups without a significant loss in generated image quality.',
    figureSrc: '/figures/fddm.png'
  },
  {
    title: 'Hawk: Accurate and Fast Privacy-Preserving Machine Learning Using Secure Lookup Table Computation',
    authors: 'Hamza Saleem, Amir Ziashahabi, Muhammad Naveed, Salman Avestimehr',
    venue: 'Privacy Enhancing Technologies Symposium (PETS)',
    year: '2024',
    status: 'published',
    links: { code: undefined, pdf: 'https://arxiv.org/abs/2403.17296' },
    description: 'Trains and evaluates models on secret-shared data using two servers and efficient lookup-table protocols for nonlinear functions. Develops both leakage-free methods and a formally analyzed privacy relaxation to improve the efficiency of privacy-preserving learning.',
    figureSrc: '/figures/hawk.png'
  },
  {
    title: 'Renormalization Group flow, Optimal Transport and Diffusion-based Generative Model',
    authors: 'Artan Sheshmani, Yi-Zhuang You, Baturalp Buyukates, Amir Ziashahabi, Salman Avestimehr',
    venue: 'Physical Review E',
    year: '2024',
    status: 'published',
    links: { code: undefined, pdf: 'https://arxiv.org/abs/2402.17090' },
    description: 'Connects renormalization group flow with optimal transport to derive a physics-inspired generative model. Reverses diffusion in Fourier space with a scale-dependent noise schedule, separating image features across scales and reducing training time while preserving image quality.',
    figureSrc: '/figures/rgnorm.png'
  },
  {
    title: 'PyTorch RPC: Distributed Deep Learning Built on Tensor-Optimized Remote Procedure Calls',
    authors: 'Shen Li, Pritam Damania, Luca Wehrstedt, et al., including Amir Ziashahabi',
    venue: 'Proceedings of Machine Learning and Systems (MLSys)',
    year: '2023',
    status: 'published',
    links: { code: undefined, pdf: 'https://proceedings.mlsys.org/paper_files/paper/2023/hash/47d096470b10eba0c1805697c4445101-Abstract-mlsys2023.html' },
    description: 'Provides a flexible foundation for distributed deep learning with optimized tensor communication, remote memory management, and distributed automatic differentiation. Supports applications from reinforcement learning to federated learning, with tensor transfers up to two orders of magnitude faster than gRPC.',
    figureSrc: '/figures/pytorch-rpc.png'
  },
];
