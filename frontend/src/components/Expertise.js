import React from 'react';

function Expertise() {
  const techCategories = [
    {
      title: "Data Processing",
      description: "Performant, high-load bearing and scalable pipelines. Move raw information to clean destinations. Real-time streaming to batch processing, orchestration, yes - and no-code tools. We architect solutions that handle millions of events reliably and efficiently.",
      items: [
        { name: "Spark", logo: "/images/spark.png" },
        { name: "Airflow", logo: "/images/airflow.png" },
        { name: "Kafka", logo: "/images/kafka.png" },
        { name: "Databricks", logo: "/images/databricks.png" },
        { name: "dbt", logo: "/images/dbt.png" },
        { name: "Airbyte", logo: "/images/airbyte.png" }
      ]
    },
    {
      title: "Cloud Engineering",
      description: "Design and maintain cloud-native infrastructure that scales with your business. Expert in both modular and integral cloud architecture, cost optimization, pipelines and plug-and-play tools. Building resilient and intuitive systems across GCP and AWS.",
      items: [
        {
          name: "GCP",
          logo: "/images/gcp.png",
          subservices: ["BigQuery", "Cloud Storage", "Dataflow", "Pub/Sub", "Cloud Functions", "Cloud Run"]
        },
        {
          name: "AWS",
          logo: "/images/aws.png",
          subservices: ["S3", "Redshift", "Lambda", "EC2", "RDS", "Glue"]
        }
      ]
    },
    {
      title: "Analytics & BI",
      description: "Data-to-Decision with graphical and interactive instruments - business intelligence, self-service tools, and automated reporting to empower stakeholders of every domain.",
      items: [
        { name: "Looker", logo: "/images/looker.png" },
        { name: "PowerBI", logo: "/images/powerbi.png" },
        { name: "Hex", logo: "/images/hex.png" },
        { name: "Jupyter", logo: "/images/jupyter.png" },
        { name: "Tableau", logo: "/images/tableau.png" },
        { name: "Metabase", logo: "/images/metabase.png" }
      ]
    },
    {
      title: "Programming",
      description: "The backbone to data workflows is efficient, documented and maintainable code. Transform, analyse and automate business development. From light-weight scripting and complex business queries, to heavy lifting functional or object-oriented repositories. We deliver both performant and elegant code.",
      items: [
        { name: "Python", logo: "/images/python.png" },
        { name: "SQL", logo: "/images/sql.png" },
        { name: "Scala", logo: "/images/scala.png" },
        { name: "R", logo: "/images/r.png" }
      ]
    },
    {
      title: "System & DevOps",
      description: "Efficient, cost saving and maintainable system components which quietly power data and business automation. Computing, dev-ops, infra as code, containerization, CI/CD. Build reliable deployment pipelines that enable rapid iteration and maintain overall stability.",
      items: [
        { name: "Git", logo: "/images/git.png" },
        { name: "Bash", logo: "/images/bash.png" },
        { name: "Terraform", logo: "/images/terraform.png" },
        { name: "CircleCI", logo: "/images/circleci.png" },
        { name: "Docker", logo: "/images/docker.png" },
        { name: "K8S", logo: "/images/kubernetes.png" },
        { name: "GH-Actions", logo: "/images/github_actions.png" }
      ]
    },
    {
      title: "Payments",
      description: "Navigate the multi-agent payment processing scene with our expertise to re-conciliate individual providers as a single source of truth. Secure, compliant payment flows that optimize conversion, provide a seamless checkout experience, and power accounting projections.",
      items: [
        { name: "Stripe", logo: "/images/stripe.png" },
        { name: "Adyen", logo: "/images/adyen.png" },
        { name: "PayPal", logo: "/images/paypal.png" },
        { name: "Braintree", logo: "/images/braintree.png" },
        { name: "ApplePay", logo: "/images/apple.png" },
        { name: "GooglePay", logo: "/images/google.png" }
      ]
    }
  ];

  return (
    <>
      <style>{`
.expertise-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f9f7f4 0%, #e8e4de 40%, #d4cfc7 100%);
  min-height: 100vh;
  padding: 80px 0;
}

/* Animated gradient overlay for depth */
.expertise-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background:
    radial-gradient(circle at 20% 30%, rgba(160, 130, 100, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(139, 107, 74, 0.06) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(178, 140, 104, 0.04) 0%, transparent 50%);
  animation: gradient-shift 15s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}

@keyframes gradient-shift {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

/* Tech grid pattern overlay */
.expertise-section::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image:
    linear-gradient(rgba(160, 130, 100, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(160, 130, 100, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
  pointer-events: none;
  animation: grid-flow 20s linear infinite;
}

@keyframes grid-flow {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Floating data particles */
.data-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(139, 107, 74, 0.3);
  border-radius: 50%;
  z-index: 1;
  pointer-events: none;
  animation: float-particle 15s ease-in-out infinite;
}

.data-particle:nth-child(1) { left: 10%; top: 15%; animation-delay: 0s; }
.data-particle:nth-child(2) { left: 30%; top: 25%; animation-delay: 2s; }
.data-particle:nth-child(3) { left: 50%; top: 35%; animation-delay: 4s; }
.data-particle:nth-child(4) { left: 70%; top: 45%; animation-delay: 6s; }
.data-particle:nth-child(5) { left: 90%; top: 55%; animation-delay: 8s; }
.data-particle:nth-child(6) { left: 20%; top: 65%; animation-delay: 1s; }
.data-particle:nth-child(7) { left: 60%; top: 75%; animation-delay: 3s; }
.data-particle:nth-child(8) { left: 80%; top: 85%; animation-delay: 5s; }

@keyframes float-particle {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.2;
  }
  25% {
    transform: translate(30px, -40px) scale(1.5);
    opacity: 0.5;
  }
  50% {
    transform: translate(-20px, -80px) scale(1);
    opacity: 0.3;
  }
  75% {
    transform: translate(40px, -120px) scale(1.2);
    opacity: 0.4;
  }
}

        /* Background animation keyframes - matching About.js */
        @keyframes pulse-node {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.25;
          }
        }

        @keyframes flow-horizontal {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        @keyframes flow-vertical {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 200%; }
        }

        .data-pipeline-network {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .pipeline-node {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(139, 107, 74, 0.2);
          box-shadow: 0 0 20px rgba(139, 107, 74, 0.15);
          z-index: 3;
        }

        .pipeline-node.pulse {
          animation: pulse-node 3s ease-in-out infinite;
        }

        .pipeline-line {
          position: absolute;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(139, 107, 74, 0.12) 25%,
            rgba(139, 107, 74, 0.2) 50%,
            rgba(139, 107, 74, 0.12) 75%,
            transparent 100%
          );
          z-index: 2;
        }

        .pipeline-line.horizontal {
          height: 2px;
          background-size: 200% 100%;
        }

        .pipeline-line.vertical {
          width: 2px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(139, 107, 74, 0.12) 25%,
            rgba(139, 107, 74, 0.2) 50%,
            rgba(139, 107, 74, 0.12) 75%,
            transparent 100%
          );
          background-size: 100% 200%;
        }

        .pipeline-line.diagonal {
          height: 2px;
        }

        .pipeline-line.animated-flow {
          animation: flow-horizontal 8s linear infinite;
        }

        .pipeline-line.animated-flow-vertical {
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(139, 107, 74, 0.12) 25%,
            rgba(139, 107, 74, 0.2) 50%,
            rgba(139, 107, 74, 0.12) 75%,
            transparent 100%
          );
          background-size: 100% 200%;
          animation: flow-vertical 12s linear infinite;
        }

        .expertise-category {
          margin-bottom: 60px;
        }

        .expertise-category h3 {
          color: #8b6b4a;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 15px;
          text-align: center;
          font-family: 'Proxima Nova', sans-serif;
          letter-spacing: 0.5px;
        }

        .category-description {
          max-width: 700px;
          margin: 0 auto 30px;
          padding: 20px 30px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(160, 130, 100, 0.12);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          position: relative;
          overflow: hidden;
        }

        .category-description::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, rgba(139, 107, 74, 0.6) 0%, rgba(178, 140, 104, 0.4) 100%);
        }

        .category-description p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #5a4a3a;
          font-family: 'Proxima Nova', sans-serif;
          text-align: center;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 20px;
          justify-items: center;
          align-items: center;
        }

        .expertise-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.75) !important;
          backdrop-filter: blur(20px) saturate(180%);
          border-radius: 16px;
          width: 110px;
          height: 110px;
          padding: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(160, 130, 100, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .expertise-item:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .expertise-item.has-subservices {
          width: auto;
          min-width: 110px;
          padding: 15px 20px;
          gap: 15px;
          flex-direction: row;
          height: auto;
          min-height: 110px;
        }

        .expertise-item-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 110px;
        }

        .expertise-item img {
          width: 45px;
          height: 45px;
          object-fit: contain;
          /* Force all images to black */
          filter: brightness(0) saturate(100%);
        }

        /* Keep Spark, Metabase, Docker, and Python with original colors */
        .expertise-item img[alt="Spark"],
        .expertise-item img[alt="Metabase"],
        .expertise-item img[alt="Docker"],
        .expertise-item img[alt="Python"] {
          filter: none;
        }

        .expertise-item p {
          margin-top: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.2;
          color: #3b2f2f;
          font-family: 'Proxima Nova', sans-serif;
        }

        .subservices-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-left: 15px;
          border-left: 2px solid rgba(160, 130, 100, 0.2);
        }

        .subservice-item {
          font-size: 0.75rem;
          color: #6a5a4a;
          font-family: 'Proxima Nova', sans-serif;
          font-weight: 500;
          line-height: 1.3;
          white-space: nowrap;
        }

        /* Special layout for cloud engineering section */
        .expertise-grid.cloud-grid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>

      <section id="expertise" className="skills expertise expertise-section">
        {/* Background pipeline network */}
        <div className="data-pipeline-network">
          {/* Animated Nodes */}
          <div className="pipeline-node pulse" style={{left: '8%', top: '20%'}}></div>
          <div className="pipeline-node pulse" style={{left: '8%', bottom: '20%', animationDelay: '0.5s'}}></div>
          <div className="pipeline-node pulse" style={{right: '8%', top: '20%', animationDelay: '1s'}}></div>
          <div className="pipeline-node pulse" style={{right: '8%', bottom: '20%', animationDelay: '1.5s'}}></div>
          <div className="pipeline-node pulse" style={{left: '50%', top: '10%', animationDelay: '2s'}}></div>
          <div className="pipeline-node pulse" style={{left: '50%', bottom: '10%', animationDelay: '2.5s'}}></div>

          {/* Animated pipeline lines */}
          <div className="pipeline-line horizontal animated-flow" style={{left: '8%', right: '8%', top: '20%'}}></div>
          <div className="pipeline-line horizontal animated-flow" style={{left: '8%', right: '8%', bottom: '20%', animationDelay: '1s'}}></div>

          <div className="pipeline-line vertical animated-flow-vertical" style={{left: '8%', top: '20%', bottom: '20%'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical" style={{right: '8%', top: '20%', bottom: '20%', animationDelay: '0.8s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical" style={{left: '50%', top: '10%', height: '30%', animationDelay: '1.5s'}}></div>
          <div className="pipeline-line vertical animated-flow-vertical" style={{left: '50%', bottom: '10%', height: '30%', animationDelay: '2s'}}></div>

          {/* Diagonal connections */}
          <div className="pipeline-line diagonal animated-flow" style={{left: '8%', top: '20%', width: '40%', transform: 'rotate(-10deg)', transformOrigin: 'left top', animationDelay: '0.3s'}}></div>
          <div className="pipeline-line diagonal animated-flow" style={{right: '8%', top: '20%', width: '40%', transform: 'rotate(10deg)', transformOrigin: 'right top', animationDelay: '1.3s'}}></div>
        </div>

        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2>On-Demand Expertise</h2>

          {techCategories.map((category, idx) => (
            <div key={idx} className="expertise-category">
              <h3>{category.title}</h3>
              <div className="category-description">
                <p>{category.description}</p>
              </div>
              <div className={`expertise-grid ${category.title === "Cloud Engineering" ? "cloud-grid" : ""}`}>
                {category.items.map((tech, index) => (
                  <div key={index} className={`expertise-item ${tech.subservices ? 'has-subservices' : ''}`}>
                    <div className="expertise-item-main">
                      <img src={tech.logo} alt={tech.name} />
                      <p>{tech.name}</p>
                    </div>
                    {tech.subservices && (
                      <div className="subservices-list">
                        {tech.subservices.map((service, sIdx) => (
                          <span key={sIdx} className="subservice-item">{service}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Expertise;