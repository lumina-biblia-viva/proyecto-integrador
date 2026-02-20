---

> “Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna.”  
> — Juan 5:39

---

# LUMINA — La Biblia Viva con IA  
### Proyecto Integrador · Maestría en Inteligencia Artificial Aplicada  
Tecnológico de Monterrey  

---

## ¿Qué es LUMINA?

**LUMINA — La Biblia Viva con IA** es un sistema basado en técnicas modernas de *Natural Language Processing (NLP)* y *Retrieval-Augmented Generation (RAG)* cuyo objetivo es permitir la exploración inteligente, trazable y estructuralmente fiel del texto bíblico.

El proyecto integra:

- Procesamiento estructurado del corpus bíblico (66 libros, 1188 capítulos, 30,938 versículos).
- Ingeniería de características semánticas y estructurales.
- Generación de embeddings multilingües.
- Recuperación vectorial (vector search).
- Integración con modelos LLM vía API.
- Interfaz web (Angular) para interacción del usuario.

El enfoque del proyecto sigue la metodología **CRISP-ML(Q)**, garantizando trazabilidad, control de calidad y documentación en cada fase del ciclo de vida del modelo.

---

## Objetivo del Proyecto Integrador

Desarrollar un sistema RAG funcional que:

- Permita consultas semánticas profundas sobre el texto bíblico.
- Evite sesgos estructurales derivados de la distribución desigual del corpus.
- Mantenga trazabilidad completa de las fuentes.
- Sea escalable hacia infraestructura productiva (AWS, OpenSearch, Bedrock, etc.).

---

## Equipo de Trabajo

**Equipo 19**

- A01732505 - Steven Sebastian Brutscher Cortez 
- A01795323 - Anghelo Daniel Pérez Martínez 
- A01423059 - Esmeralda González García 

---

## 🗂 Estructura del Repositorio

proyecto-integrador/
│
├── README.md # Este documento
│
├── ml-project/ # Proyecto de Machine Learning (estructura tipo Cookiecutter)
│ ├── notebooks/ # Entregables en formato Jupyter Notebook
│ │ ├── Avance1_Equipo19.ipynb
│ │ ├── Avance2_Equipo19.ipynb
│ │ └── Avance3_Equipo19.ipynb
│ │
│ ├── data/ # (No versionado) Datos procesados y artefactos
│ ├── models/ # Modelos entrenados
│ ├── src/ # Código fuente reutilizable
│ └── .gitignore
│
└── lumina-ui/ # Frontend Angular


---

## Entregables Académicos

Para revisión por parte de los profesores:

**ml-project/notebooks/**

Ahí se encuentran organizados los avances del Proyecto Integrador:

- **Avance 1** – Análisis Exploratorio de Datos (EDA)  
- **Avance 2** – Ingeniería de Características  
- **Avance 3** – Baseline  

Cada notebook incluye documentación metodológica alineada con CRISP-ML(Q).

---

## Metodología

El proyecto sigue la metodología:

> **CRISP-ML(Q)** — A lifecycle model for Machine Learning systems  
> Visengeriyeva et al. (2023)

Fases completadas hasta el momento:

1. Business & Data Understanding  
2. Data Preparation (EDA + Feature Engineering)  
3. Baseline Modeling  

Fases siguientes:

- Model Refinement
- Evaluation avanzada
- Deployment (RAG + infraestructura)

---

## Sobre los Datos y Artefactos

Por motivos de tamaño y buenas prácticas:

- Los datasets procesados
- Embeddings (.npz)
- Archivos .parquet
- Índices FAISS
- Modelos entrenados

**NO se versionan en Git.**

Estos se regeneran a partir de los notebooks o se almacenan en almacenamiento externo.

---

## Estado Actual

✔ Corpus estructurado y validado  
✔ Chunking adaptativo implementado  
✔ Embeddings semánticos generados  
✔ Baseline RAG funcional  
✔ Repositorio organizado para escalabilidad  

---

## Visión a Futuro

- Evaluación sistemática de calidad de respuestas LLM.
- Optimización de estrategias de retrieval (top-k, re-ranking).
- Migración a infraestructura productiva (OpenSearch + Bedrock).
- Integración de evaluación automática con LLM-as-a-judge.
- Versión pública del sistema.

---

**LUMINA no busca reemplazar la interpretación humana, sino ampliarla mediante herramientas tecnológicas responsables.**


