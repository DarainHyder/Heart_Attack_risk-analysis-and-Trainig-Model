"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Cpu, ArrowUpRight, ChevronRight } from "lucide-react";
import { useState } from "react";
import Predictor from "@/components/Predictor";

export default function Home() {
  const [activeTab, setActiveTab] = useState("analysis");

  return (
    <main className="min-h-screen">
      {/* Cinematic Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="z-10"
        >
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-semibold mb-6 block">
            Clinical Intelligence
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 reveal-text leading-tight">
            Precise Risk <br /> Assessment
          </h1>
          <p className="text-muted max-w-xl mx-auto text-lg leading-relaxed mb-12">
            Harnessing optimized Logistic Regression models to identify 
            cardiac vulnerabilities with 91.3% predictive accuracy.
          </p>
          <div className="flex gap-6 justify-center">
            <button className="px-8 py-4 bg-primary text-background font-bold tracking-wide hover:opacity-90 transition-all flex items-center gap-2">
              START ANALYSIS <ChevronRight size={18} />
            </button>
            <button className="px-8 py-4 border border-glass-border hover:bg-glass transition-all text-xs tracking-[0.2em]">
              VIEW METHODOLOGY
            </button>
          </div>
        </motion.div>

        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] aurora-pulse" />
      </section>

      {/* Model Metrics - No Container Grid */}
      <section className="border-t border-glass-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-12">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="text-muted text-sm tracking-widest uppercase">Predictive Accuracy</span>
            <div className="text-5xl font-mono text-primary">91.36%</div>
            <p className="text-muted text-sm leading-relaxed">
              Validated through robust K-fold cross-testing on diversified patient datasets.
            </p>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <span className="text-muted text-sm tracking-widest uppercase">ROC-AUC Score</span>
            <div className="text-5xl font-mono text-secondary">0.9740</div>
            <p className="text-muted text-sm leading-relaxed">
              High sensitivity and specificity across critical clinical thresholds.
            </p>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <span className="text-muted text-sm tracking-widest uppercase">Model Precision</span>
            <div className="text-5xl font-mono text-white">0.92+</div>
            <p className="text-muted text-sm leading-relaxed">
              Minimizing false negatives in clinical cardiac risk categorization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Heart Attack Predictor Component */}
      <Predictor />

      {/* Methodology & Logic Footnote */}
      <section className="bg-glass/30 border-y border-glass-border relative">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">Clinical Methodology</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/20 bg-primary/5 text-primary">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Multi-Feature Encoding</h3>
                  <p className="text-muted leading-relaxed">
                    Data transformation layers for blood pressure categorization and demographic encoding.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-secondary/20 bg-secondary/5 text-secondary">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Troponin Sensitivity</h3>
                  <p className="text-muted leading-relaxed">
                    Advanced analysis of peptide levels adjusted for patient age and categorical risk factors.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center border border-white/20 bg-white/5 text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hypothesis Validation</h3>
                  <p className="text-muted leading-relaxed">
                    Statistical rejection of null hypotheses (p-value: 0.0135) to ensure causal relevance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full p-8 border border-glass-border bg-background/50 backdrop-blur-md">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs tracking-[0.3em] font-bold text-muted">ANALYSIS LOG</span>
              <div className="flex gap-2">
                 <div className="w-2 h-2 bg-red-500 rounded-full" />
                 <div className="w-2 h-2 bg-orange-500 rounded-full" />
                 <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
            </div>
            <pre className="text-xs font-mono text-muted/80 overflow-auto max-h-[300px] leading-relaxed">
              {"[SYSTEM] Initializing Analysis Architecture...\n"}
              {"[DATA] Loading Heart Attack clinical dataset...\n"}
              {"[INFO] Shape: (1319, 9) samples found.\n"}
              {"[PROC] Executing Standard Scaling on feature set...\n"}
              {"[TRAIN] Training Logistic Regression model (C=1.0)...\n"}
              {"[EVAL] Accuracy Score: 0.91358\n"}
              {"[EVAL] ROC_AUC Score: 0.97401\n"}
              {"[EVAL] Confusion Matrix generated.\n"}
              {"[SUCC] Model ready for production inference.\n"}
              {"\n"}
              {"# Key Observations:\n"}
              {"- P-Value (Gender/Risk): 0.0135\n"}
              {"- Conf. Interval (95%): (0.12, 0.13)\n"}
              {"- No significant troponin correlation with age detected."}
            </pre>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-20 text-center border-t border-glass-border">
        <p className="text-muted text-xs tracking-widest uppercase">
          &copy; 2026 Aura Intelligent Systems &bull; Powered by Medical Data Science
        </p>
      </footer>
    </main>
  );
}
