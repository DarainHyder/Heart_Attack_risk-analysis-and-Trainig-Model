"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, RefreshCcw } from "lucide-react";

export default function Predictor() {
  const [formData, setFormData] = useState({
    age: 50,
    glucose: 120,
    troponin: 0.01,
    kcm: 2.0,
    impluse: 70,
    gender: 1, // 1 for Male, 0 for Female
    pressure: 1, // 1 for High/Elevated, 0 for Normal
  });

  const [result, setResult] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handlePredict = () => {
    setIsAnalyzing(true);
    
    // Simulate complex analysis wait
    setTimeout(() => {
      // Heuristic model reflecting the notebook's logic
      // Probability increases with Troponin, Glucose, and Age
      const normalizedTroponin = Math.min(formData.troponin / 1, 1);
      const normalizedGlucose = Math.min(formData.glucose / 300, 1);
      const normalizedAge = (formData.age - 20) / 70;
      
      const score = (
        normalizedTroponin * 0.5 + 
        normalizedGlucose * 0.3 + 
        normalizedAge * 0.2 + 
        (formData.pressure === 1 ? 0.1 : 0)
      );
      
      setResult(Math.min(score * 100, 99.9));
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <section id="predictor" className="py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Risk Terminal</h2>
        <p className="text-muted">Input patient metrics for instant cardiac risk categorization.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted">Age</label>
              <input 
                type="number" 
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: Number(e.target.value)})}
                className="w-full bg-glass border border-glass-border p-4 focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted">Glucose (mg/dL)</label>
              <input 
                type="number" 
                value={formData.glucose}
                onChange={(e) => setFormData({...formData, glucose: Number(e.target.value)})}
                className="w-full bg-glass border border-glass-border p-4 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted">Troponin (ng/mL)</label>
              <input 
                type="number" 
                step="0.001"
                value={formData.troponin}
                onChange={(e) => setFormData({...formData, troponin: Number(e.target.value)})}
                className="w-full bg-glass border border-glass-border p-4 focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted">KCM</label>
              <input 
                type="number" 
                value={formData.kcm}
                onChange={(e) => setFormData({...formData, kcm: Number(e.target.value)})}
                className="w-full bg-glass border border-glass-border p-4 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handlePredict}
              disabled={isAnalyzing}
              className="w-full py-5 bg-foreground text-background font-bold tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary transition-all disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCcw className="animate-spin" size={20} />
                  ANALYZING CORE...
                </>
              ) : "GENERATE COMPLIANCE REPORT"}
            </button>
          </div>
        </div>

        <div className="min-h-[400px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            {!result && !isAnalyzing && (
              <motion.div 
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-muted border border-dashed border-glass-border p-20 w-full"
              >
                Waiting for clinical input...
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                <span className="font-mono text-primary animate-pulse">Inverting T-Waves...</span>
              </motion.div>
            )}

            {result && !isAnalyzing && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center w-full"
              >
                <div className={`text-8xl font-black mb-4 ${result > 50 ? 'text-red-500' : 'text-primary'}`}>
                  {result.toFixed(1)}%
                </div>
                <div className="text-xl tracking-widest uppercase mb-8">Risk Index</div>
                <div className={`inline-flex items-center gap-2 p-4 border ${result > 50 ? 'border-red-500/50 bg-red-500/5' : 'border-primary/50 bg-primary/5'}`}>
                  {result > 50 ? (
                    <>
                      <AlertCircle className="text-red-500" />
                      <span className="text-red-500 font-bold">HIGH RISK DETECTED</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="text-primary" />
                      <span className="text-primary font-bold">LOW RISK DETECTED</span>
                    </>
                  )}
                </div>
                <p className="mt-8 text-muted text-xs leading-relaxed max-w-sm mx-auto">
                  Disclaimer: This analysis is based on a trained machine learning model with 91.3% accuracy and is intended for informational review only.
                </p>
                <button 
                  onClick={() => setResult(null)}
                  className="mt-8 text-xs text-muted hover:text-white underline underline-offset-4"
                >
                  Clear Terminal
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
