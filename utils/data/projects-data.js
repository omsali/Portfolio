export const projectsData = [
    {
        id: 1,
        name: 'AI over SMS: Distributed Offline Assistant',
        description: "AI over SMS is a distributed, event-driven platform designed to democratize access to Large Language Models for users in low-connectivity regions. Built on a microservices architecture using Spring Boot and Apache Kafka, the system decouples high-throughput SMS ingestion from compute-intensive AI inference, ensuring high availability and fault tolerance under burst loads. I engineered a hybrid Retrieval-Augmented Generation (RAG) pipeline that intelligently routes queries between cost-effective local models (Ollama) and cloud APIs (OpenAI) based on complexity, significantly reducing operational costs. The infrastructure is secured via Kong API Gateway for rate limiting and fully observable through Prometheus and Grafana, delivering a production-grade solution that maintains <5s p95 latency even on constrained edge hardware.",
        tools: ['Python', 'FastAPI', 'Twilio', 'PostgreSQL', 'Docker'],
        role: '',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Sentinel |Real-Time Distributed Observability',
        description: 'Sentinel is a high-throughput monitoring platform designed to provide visibility into distributed systems with sub-100ms latency. Built with TypeScript and Node.js, the system utilizes a "dual-path" architecture to solve the trade-off between speed and storage: live metrics are broadcast instantly to a React dashboard via WebSockets, while data persistence is handled by an asynchronous batch-write engine. This design allows the system to absorb high-burst traffic without lag, reducing InfluxDB I/O overhead by 40%. The entire microservices ecosystem is containerized with Docker Compose, ensuring a reproducible and resilient environment for telemetry ingestion, time-series analysis, and automated alerting.',
        tools: ['Node.js', 'React', 'InfluxDB', 'Socket.io', 'TypeScript'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Distributed LLM Training Pipeline',
        description: 'This project is a scalable data engineering solution designed to optimize the training of Large Language Models on massive datasets. Built on a 5-node AWS EMR cluster, the system utilizes Apache Spark to efficiently tokenize and encode 65.4GB of OpenWebText2 data, achieving a 23% reduction in end-to-end training runtime. To overcome scale-induced memory bottlenecks, I implemented custom partitioning strategies for the ingestion of 500K+ token sequences and leveraged Deeplearning4j to manage parameter synchronization across the multi-node environment. The architecture further optimizes performance by integrating an S3-backed data lake, decoupling storage from compute to reduce I/O latency by 60% between preprocessing and training stages.',
        tools: ['AWS EMR', 'Apache Spark', 'DL4J'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    },
    {
        id: 4,
        name: 'High-Performance Financial Data Analysis Tool',
        description: "High-Performance Financial Data Analysis Tool This project is a low-latency trading engine simulation designed for the real-time processing and analysis of financial market data. Engineered with C++ and Boost libraries, the application features a multi-threaded architecture that handles network communication and volatility calculations concurrently to maximize throughput. I implemented custom order book management logic using optimized data structures—including hash maps and balanced trees—to minimize memory usage and execution time during order matching. To ensure system reliability, the engine underwent extensive unit testing, validating algorithmic correctness and performance stability under various simulated market conditions.",
        tools: ["C++"],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Machine Learning–Plant Disease Classification',
        description: "This project advances precision agriculture by deploying a high-performance computer vision pipeline designed to identify plant diseases with 98.28% accuracy. Leveraging a dataset of 87,000 images across 38 distinct disease classes, I developed and benchmarked an ensemble of architectures including ResNet-18, VGG16, and custom CNNs, alongside traditional classifiers like SVM. To ensure model robustness and interpretability—a critical factor in agricultural deployment—I utilized transfer learning and data augmentation techniques while implementing Grad-CAM heatmaps to visually validate the specific leaf regions driving the model's predictions. The result is a scalable, automated diagnostic tool capable of significantly reducing manual inspection efforts and improving crop sustainability.",
        tools: ["Python", 'PyTorch', 'ResNet-18', 'Custom CNN', 'VGG16', 'SVM', 'Random Forest'],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },