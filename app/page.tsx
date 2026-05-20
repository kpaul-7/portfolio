"use client";

import Hero3D from "@/components/Hero3D";
import { motion } from "framer-motion";
import { Github, Mail, MapPin, Terminal, Youtube, Gamepad2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero3D />
      
      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        
        {/* Header Section */}
        <motion.section 
          initial="hidden" animate="visible" variants={fadeIn}
          className="max-w-3xl glass-panel p-8 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Koushik Paul
          </h1>
          <h2 className="text-2xl text-slate-300 font-medium mb-6">
            Dynamic Full-Stack Developer & Team Lead
          </h2>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-8">
            <span className="flex items-center gap-2"><MapPin size={16} /> Kolkata, India</span>
            <span className="flex items-center gap-2"><Mail size={16} /> koushikpaul8961@gmail.com</span>
            <span className="flex items-center gap-2"><Github size={16} /> github.com/kpaul7</span>
          </div>

          <p className="text-lg leading-relaxed text-slate-300">
            With ~3 years of experience architecting scalable web applications. 
            Proven track record of leading cross-functional teams in Agile environments to deliver high-quality features. 
            Recognized as Employee of the Quarter for exceptional technical ownership.
          </p>
        </motion.section>

        {/* Experience & Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          
          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-blue-400">
              <Terminal size={24} /> Experience
            </h3>
            <div className="border-l-2 border-slate-800 pl-4 ml-2">
              <div className="mb-8 relative">
                <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <h4 className="text-xl font-medium text-slate-200">Software Developer (Full-Stack)</h4>
                <p className="text-blue-400 text-sm mb-2">Sigilotech | July 2023 – Present</p>
                <ul className="list-disc list-outside ml-4 text-slate-400 space-y-2 text-sm">
                  <li>Directed a 10-member team, improving Agile sprint delivery speed by 20%.</li>
                  <li>Engineered end-to-end solutions reducing critical post-release bugs by 50%.</li>
                  <li>Executed microservices deployments utilizing Docker, AWS Amplify, and Azure.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Key Projects</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-slate-200">Healthcare & Form Management</h4>
              <p className="text-sm text-slate-400 mt-2">
                Engineered a dynamic form builder for medical data and an appointment engine using React and NestJS for high performance in clinical environments.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-slate-200">Multi-Tenant Restaurant SaaS</h4>
              <p className="text-sm text-slate-400 mt-2">
                Built a platform with strict data isolation and RBAC. Implemented frontend with React/MUI and scalable backend using NestJS/PostgreSQL.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Skills & Beyond Code Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="mt-12 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Tech Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'NestJS', '.NET Core', 'Docker', 'Azure', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Beyond Code</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Youtube className="text-red-500 mt-1" size={20} />
                  <div>
                    <h4 className="text-slate-200 font-medium">Content Creator</h4>
                    <p className="text-sm text-slate-400">Managing a travel and food YouTube channel with an engaged community of over 1K subscribers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gamepad2 className="text-purple-500 mt-1" size={20} />
                  <div>
                    <h4 className="text-slate-200 font-medium">Competitive Gaming</h4>
                    <p className="text-sm text-slate-400">Optimizing hardware and strategies for competitive titles like Valorant and Apex Legends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}