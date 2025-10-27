import { Publication } from '../types';
import { links } from './links';

export const publications: Publication[] = [
  {
    title: 'Reject Only Critical Tokens: Pivot-Aware Speculative Decoding',
    authors: 'Amir Ziashahabi*, Yavuz Faruk Bakman*, Duygu Nur Yaldiz, Mostafa El-Khamy, Sai Praneeth Karimireddy, Salman Avestimehr',
    venue: 'NeurIPS 2025 Efficient Reasoning Workshop',
    year: '2025',
    status: 'accepted',
    links: { code: links.PAD, pdf: undefined },
    figureSrc: '/figures/pad.png',
    tags: ['LLMs','Decoding','Efficiency']
  },
  {
    title: 'MobiZO: Enabling Efficient LLM Fine-Tuning at the Edge via Inference Engines',
    authors: 'Lei Gao*, Amir Ziashahabi*, Yue Niu, Salman Avestimehr, Murali Annavaram',
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP)',
    year: '2025',
    status: 'accepted',
    links: { code: links.MobiZO, pdf: undefined },
    figureSrc: '/figures/mobizo.png',
    tags: ['LLMs','Edge','Fine-Tuning']
  },
  {
    title: 'GeoToken: Hierarchical Geolocalization of Images via Next Token Prediction',
    authors: 'Narges Ghasemi*, Amir Ziashahabi*, Salman Avestimehr, Cyrus Shahabi',
    venue: 'IEEE International Conference on Data Mining (ICDM)',
    year: '2025',
    status: 'accepted',
    links: { code: links.GeoToken, pdf: undefined },
    figureSrc: '/figures/geotoken.png',
    tags: ['Vision','Geolocalization','Transformers']
  },
  {
    title: 'OSMGen: Highly Controllable Satellite Image Synthesis using OpenStreetMap Data',
    authors: 'Amir Ziashahabi, Narges Ghasemi, Sajjad Shahabi, John Krumm, Salman Avestimehr, Cyrus Shahabi',
    venue: 'NeurIPS 2025 UrbanAI Workshop',
    year: '2025',
    status: 'accepted',
    links: { code: links.OSMGen, pdf: undefined },
    figureSrc: '/figures/osmgen.png',
    tags: ['Diffusion','Remote Sensing','Control']
  },
  {
    title: 'Frequency Domain Diffusion Model with Scale-Dependent Noise Schedule',
    authors: 'Amir Ziashahabi, Baturalp Buyukates, Artan Sheshmani, Yi-Zhuang You, Salman Avestimehr',
    venue: 'IEEE International Symposium on Information Theory (ISIT)',
    year: '2024',
    status: 'published',
    links: { code: links.FDDM, pdf: undefined },
    figureSrc: '/figures/fddm.png',
    tags: ['Diffusion','Frequency-Domain']
  },
  {
    title: 'Hawk: Accurate and Fast Privacy-Preserving Machine Learning Using Secure Lookup Table Computation',
    authors: 'Hamza Saleem, Amir Ziashahabi, Muhammad Naveed, Salman Avestimehr',
    venue: 'Privacy Enhancing Technologies Symposium (PETS)',
    year: '2024',
    status: 'published',
    links: { code: undefined, pdf: undefined },
    figureSrc: '/figures/hawk.png',
    tags: ['Privacy','SMP','Crypto']
  },
  {
    title: 'Renormalization Group flow, Optimal Transport and Diffusion-based Generative Model',
    authors: 'Artan Sheshmani, Yi-Zhuang You, Baturalp Buyukates, Amir Ziashahabi, Salman Avestimehr',
    venue: 'Physical Review E',
    year: '2024',
    status: 'published',
    links: { code: undefined, pdf: undefined },
    figureSrc: '/figures/rgnorm.png',
    tags: ['Theory','Diffusion']
  },
  {
    title: 'PyTorch RPC: Distributed Deep Learning Built on Tensor-Optimized Remote Procedure Calls',
    authors: 'Shen Li, Pritam Damania, Luca Wehrstedt, et al., including Amir Ziashahabi',
    venue: 'Proceedings of Machine Learning and Systems (MLSys)',
    year: '2023',
    status: 'published',
    links: { code: undefined, pdf: undefined },
    figureSrc: '/figures/pytorch-rpc.png',
    tags: ['Distributed','PyTorch']
  },
  {
    title: 'Understanding the Communication Backends of Federated Learning',
    authors: 'Amir Ziashahabi, Chaoyang He, Salman Avestimehr',
    venue: 'Under Review',
    year: '—',
    status: 'preprint',
    links: { code: undefined, pdf: undefined },
    figureSrc: '/figures/fl-backends.png',
    tags: ['Federated Learning','Systems']
  },
];

