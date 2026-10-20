import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Download,
  Printer,
  Moon,
  Sun,
  ChevronDown,
  ChevronUp,
  Brain,
  Award,
  Sparkles,
  Phone,
  Globe,
  CheckCircle2,
  HelpCircle,
  FileText,
  Clock,
  Layers,
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';
import { allCourses, CourseData, ExamQuestion, ModuleQuestion } from './data';
import { generateStandaloneHtml } from './utils/generateStandaloneHtml';

export default function App() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [highFreqOnly, setHighFreqOnly] = useState(false);
  const [selfTestMode, setSelfTestMode] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [allExpanded, setAllExpanded] = useState(true);

  // Sync dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const currentCourse = allCourses[selectedCourseIndex];

  // Standalone HTML Download Handler
  const handleDownloadStandalone = () => {
    const htmlContent = generateStandaloneHtml();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MAC_300L_Study_Package_Jabbok_Media.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    // Open all details before printing
    setAllExpanded(true);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const toggleAnswerReveal = (id: string) => {
    setRevealedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter modules based on search or frequency
  const filteredModules = useMemo(() => {
    return currentCourse.modules.map(mod => {
      const filteredQuestions = mod.questions.filter(q => {
        const matchesSearch =
          searchQuery === '' ||
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answerHtml.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (q.mnemonic && q.mnemonic.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesFreq = !highFreqOnly || (q.frequencyTag && q.frequencyTag.includes('High'));

        return matchesSearch && matchesFreq;
      });

      return {
        ...mod,
        questions: filteredQuestions
      };
    }).filter(mod => mod.questions.length > 0);
  }, [currentCourse, searchQuery, highFreqOnly]);

  // Filter practice exam questions
  const filteredExamQuestions = useMemo(() => {
    return currentCourse.practiceExam.questions.filter(q => {
      const matchesSearch =
        searchQuery === '' ||
        q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.modelAnswerHtml.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.title.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFreq = !highFreqOnly || q.frequencyNote.includes('High') || q.isCompulsory;

      return matchesSearch && matchesFreq;
    });
  }, [currentCourse, searchQuery, highFreqOnly]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm no-print">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 dark:bg-teal-500 flex items-center justify-center text-white shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-teal-800 dark:text-teal-300">
                  MAC 300L Study Package
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200">
                  Exam Master
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Prepared by <strong className="text-slate-700 dark:text-slate-200">Jabbok Media Services</strong> &middot; Frequency Analysis & Unabridged Answers
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
            <button
              onClick={() => setAllExpanded(!allExpanded)}
              className="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:border-teal-500 bg-white dark:bg-slate-800 transition"
              title="Expand or collapse all answers"
            >
              {allExpanded ? 'Collapse All' : 'Expand All'}
            </button>

            <button
              onClick={() => setSelfTestMode(!selfTestMode)}
              className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border flex items-center gap-1 transition ${
                selfTestMode
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'border-slate-300 dark:border-slate-700 hover:border-amber-500 bg-white dark:bg-slate-800'
              }`}
              title="Self-Test Mode: Hides model answers so you can test active recall"
            >
              {selfTestMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span className="hidden xs:inline">{selfTestMode ? 'Self-Test ON' : 'Self-Test'}</span>
            </button>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-teal-500 transition"
              title="Toggle Dark / Light theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={handlePrint}
              className="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:border-teal-500 bg-white dark:bg-slate-800 flex items-center gap-1 transition"
              title="Print or export revision booklet to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export PDF</span>
            </button>

            <button
              onClick={handleDownloadStandalone}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 text-white shadow-sm flex items-center gap-1.5 transition"
              title="Download 100% self-contained standalone HTML file for offline phone/laptop study"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Standalone HTML</span>
            </button>
          </div>
        </div>
      </header>

      {/* Course Navigation Tabs (Horizontally scrollable on mobile) */}
      <nav className="sticky top-[57px] z-30 bg-slate-100 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 no-print">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-1.5 flex gap-1.5 overflow-x-auto scrollbar-none">
          {allCourses.map((course, idx) => (
            <button
              key={course.code}
              onClick={() => {
                setSelectedCourseIndex(idx);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex-shrink-0 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
                selectedCourseIndex === idx
                  ? 'bg-teal-700 dark:bg-teal-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>{course.code}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${
                  selectedCourseIndex === idx
                    ? 'bg-teal-800 text-teal-100'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}
              >
                {course.creditUnits}CU
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-3 sm:px-6 py-6 space-y-8">
        {/* Course Banner */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300">
              {currentCourse.code} &middot; {currentCourse.creditUnits} Credit Units
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Time Allowed: {currentCourse.timeAllowed}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {currentCourse.title}
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {currentCourse.overview}
          </p>

          {/* Quick Jump Bar */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-xs font-semibold no-print">
            <a
              href="#frequency-matrix"
              className="px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 hover:bg-teal-100 border border-teal-200 dark:border-teal-800 transition"
            >
              ⚡ Examiner Frequency Matrix
            </a>
            <a
              href="#course-modules"
              className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 border border-slate-200 dark:border-slate-700 transition"
            >
              📚 Course Modules ({currentCourse.modules.length})
            </a>
            {currentCourse.tables && (
              <a
                href="#tables-section"
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 border border-slate-200 dark:border-slate-700 transition"
              >
                📊 Comparative Tables
              </a>
            )}
            <a
              href="#practice-exam"
              className="px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 border border-emerald-200 dark:border-emerald-800 transition"
            >
              📝 Practice Exam & Full Model Answers
            </a>
            <a
              href="#memorization-aids"
              className="px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 border border-amber-200 dark:border-amber-800 transition"
            >
              🧠 Memorization Mnemonics
            </a>
          </div>
        </section>

        {/* Search & High-Yield Filter Bar */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 sm:p-4 shadow-sm space-y-3 no-print">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={`Search questions, answers, or mnemonics in ${currentCourse.code}...`}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={() => setHighFreqOnly(!highFreqOnly)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg border flex items-center justify-center gap-1.5 transition ${
                highFreqOnly
                  ? 'bg-teal-700 text-white border-teal-700'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-teal-500'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{highFreqOnly ? 'High Frequency (≥70%) Filter Active' : 'Filter High Frequency Only'}</span>
            </button>
          </div>

          {searchQuery && (
            <p className="text-xs text-teal-700 dark:text-teal-400 font-medium">
              Showing filtered results matching &ldquo;{searchQuery}&rdquo; in {currentCourse.code}
            </p>
          )}
        </section>

        {/* SECTION 1: FREQUENCY ANALYSIS & EXAMINER PROBABILITY MATRIX */}
        <section id="frequency-matrix" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-teal-800 dark:text-teal-300 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              Examiner Frequency Analysis & Probability Matrix
            </h2>
          </div>

          <div className="bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-xl p-4 text-xs sm:text-sm text-teal-900 dark:text-teal-100 leading-relaxed">
            <p className="font-semibold mb-1">
              📊 Historical Analysis of {currentCourse.frequencyAnalysis.totalSetsAnalyzed} Past Examination Sets & TMAs:
            </p>
            <p>{currentCourse.frequencyAnalysis.summary}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {currentCourse.frequencyAnalysis.matrix.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm hover:border-teal-500 transition space-y-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 leading-snug">
                    {item.topic}
                  </h3>
                  <span
                    className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full flex-shrink-0 ${
                      item.probability === 'VERY HIGH'
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                        : item.probability === 'HIGH'
                        ? 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300'
                        : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                    }`}
                  >
                    {item.probability} ({item.frequency})
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-800 dark:text-slate-200">Examiner Mindset & Focus:</strong> {item.examinerFocus}
                </p>

                <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Likely Question Permutations:</p>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 list-disc pl-4">
                    {item.likelyQuestions.map((lq, lqIdx) => (
                      <li key={lqIdx}>{lq}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-400">
                  <Brain className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{item.memoryAnchor}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: COURSE MODULES & COMPREHENSIVE QUESTIONS */}
        <section id="course-modules" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-teal-800 dark:text-teal-300 flex items-center gap-2">
              <Layers className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              Master Modules & In-Depth Revision Guide
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              {filteredModules.length} Modules Available
            </span>
          </div>

          <div className="space-y-4">
            {filteredModules.map((module) => (
              <details
                key={module.id}
                open={allExpanded}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm"
              >
                <summary className="p-4 cursor-pointer font-bold text-base sm:text-lg text-teal-800 dark:text-teal-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition flex items-center justify-between">
                  <span>{module.title}</span>
                  <span className="text-xs font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {module.questions.length} Questions
                  </span>
                </summary>

                <div className="p-4 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-6">
                  {module.questions.map((q) => {
                    const isRevealed = !selfTestMode || revealedAnswers[q.id];
                    return (
                      <div
                        key={q.id}
                        className="bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-4 space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                            {q.question}
                          </h3>
                          {q.frequencyTag && (
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200">
                              {q.frequencyTag}
                            </span>
                          )}
                        </div>

                        {q.mnemonic && (
                          <div className="p-2 bg-amber-50 dark:bg-amber-950/40 border-l-3 border-amber-500 text-xs font-bold text-amber-900 dark:text-amber-200 rounded-r">
                            {q.mnemonic}
                          </div>
                        )}

                        {/* Self-Test Toggle */}
                        {selfTestMode && (
                          <div className="pt-1">
                            <button
                              onClick={() => toggleAnswerReveal(q.id)}
                              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-1.5 transition"
                            >
                              {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                              <span>{isRevealed ? 'Hide Model Answer' : 'Reveal Model Answer'}</span>
                            </button>
                          </div>
                        )}

                        {isRevealed && (
                          <div
                            className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: q.answerHtml }}
                          />
                        )}

                        {isRevealed && q.keyTakeaways && q.keyTakeaways.length > 0 && (
                          <div className="mt-3 p-3 bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-900/40 rounded-lg">
                            <strong className="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider block mb-1">
                              Key Exam Hall Takeaways:
                            </strong>
                            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-4">
                              {q.keyTakeaways.map((item, ktIdx) => (
                                <li key={ktIdx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* SECTION 3: COMPARATIVE TABLES & FRAMEWORKS */}
        {currentCourse.tables && currentCourse.tables.length > 0 && (
          <section id="tables-section" className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-teal-800 dark:text-teal-300 flex items-center gap-2">
              <FileText className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              Comparative Tables & Structural Frameworks
            </h2>

            <div className="space-y-4">
              {currentCourse.tables.map((table, tIdx) => (
                <div
                  key={tIdx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm space-y-3"
                >
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                    {table.title}
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-xs sm:text-sm text-left border-collapse">
                      <thead>
                        <tr className="bg-teal-50 dark:bg-teal-950/50 text-teal-900 dark:text-teal-200">
                          {table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-2.5 border-b border-slate-200 dark:border-slate-800 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={rIdx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/40'}
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-2.5 border-b border-slate-100 dark:border-slate-800/60 align-top ${
                                  cIdx === 0 ? 'font-semibold text-slate-900 dark:text-slate-200' : 'text-slate-600 dark:text-slate-400'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* ASCII Diagrams if any */}
            {currentCourse.diagrams && currentCourse.diagrams.map((diag, dIdx) => (
              <div
                key={dIdx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm space-y-2"
              >
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  {diag.title}
                </h3>
                <pre className="p-3 bg-slate-950 text-emerald-400 text-xs sm:text-sm rounded-lg overflow-x-auto font-mono leading-snug">
                  {diag.content}
                </pre>
              </div>
            ))}
          </section>
        )}

        {/* SECTION 4: PRACTICE EXAMINATION PAPER WITH FULL MODEL ANSWERS */}
        <section id="practice-exam" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-teal-800 dark:text-teal-300 flex items-center gap-2">
              <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              Practice Examination Paper & Full Model Answers
            </h2>
          </div>

          {/* Exam Header */}
          <div className="bg-white dark:bg-slate-900 border-2 border-teal-600 dark:border-teal-500 rounded-2xl p-4 sm:p-6 text-center space-y-2 shadow-sm">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200">
              {currentCourse.practiceExam.heading}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100">
              {currentCourse.code}: {currentCourse.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              <strong>Instructions:</strong> {currentCourse.practiceExam.instructions}
            </p>
          </div>

          {/* Exam Questions */}
          <div className="space-y-6">
            {filteredExamQuestions.map((eq, eqIdx) => {
              const qKey = `exam-${currentCourse.code}-${eqIdx}`;
              const isRevealed = !selfTestMode || revealedAnswers[qKey];

              return (
                <article
                  key={eqIdx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-base sm:text-lg text-teal-800 dark:text-teal-300">
                        {eq.number}: {eq.title}
                      </h3>
                      {eq.isCompulsory && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                          COMPULSORY
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {eq.marks}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                    🎯 {eq.frequencyNote}
                  </p>

                  {/* Question Box */}
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-sm sm:text-base text-slate-900 dark:text-slate-100 font-medium whitespace-pre-line leading-relaxed">
                    {eq.questionText}
                  </div>

                  {/* Scoring Allocation */}
                  {eq.scoringGuide && (
                    <div className="p-2.5 bg-slate-100/70 dark:bg-slate-800/40 rounded-lg text-xs space-y-1">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Scoring Allocation:</span>
                      <ul className="list-disc pl-4 space-y-0.5 text-slate-600 dark:text-slate-400">
                        {eq.scoringGuide.map((sg, sgIdx) => (
                          <li key={sgIdx}>{sg}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {eq.mnemonic && (
                    <div className="p-2 bg-amber-50 dark:bg-amber-950/40 border-l-3 border-amber-500 text-xs font-bold text-amber-900 dark:text-amber-200 rounded-r">
                      {eq.mnemonic}
                    </div>
                  )}

                  {/* Self-Test Toggle */}
                  {selfTestMode && (
                    <div className="pt-1">
                      <button
                        onClick={() => toggleAnswerReveal(qKey)}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-1.5 transition"
                      >
                        {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{isRevealed ? 'Hide Full Model Answer' : 'Reveal Full Model Answer'}</span>
                      </button>
                    </div>
                  )}

                  {/* Full Model Answer */}
                  {isRevealed && (
                    <details
                      open={allExpanded}
                      className="bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200/70 dark:border-teal-900/50 rounded-xl overflow-hidden"
                    >
                      <summary className="p-3.5 cursor-pointer font-bold text-xs sm:text-sm uppercase tracking-wider text-teal-800 dark:text-teal-300 hover:bg-teal-100/50 dark:hover:bg-teal-900/30 transition flex items-center justify-between">
                        <span>Full Unabridged Model Answer (Academic Essay)</span>
                        <ChevronDown className="w-4 h-4" />
                      </summary>
                      <div className="p-4 pt-2 border-t border-teal-100 dark:border-teal-900/40">
                        <div
                          className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: eq.modelAnswerHtml }}
                        />
                      </div>
                    </details>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: HIGH-YIELD MEMORIZATION MNEMONICS */}
        {currentCourse.memorizationAids && (
          <section id="memorization-aids" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-teal-800 dark:text-teal-300 flex items-center gap-2">
                <Brain className="w-6 h-6 text-amber-500" />
                {currentCourse.memorizationAids.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {currentCourse.memorizationAids.items.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-gradient-to-br from-amber-50/70 to-orange-50/40 dark:from-slate-900 dark:to-slate-800/80 border border-amber-200 dark:border-amber-900/40 rounded-xl p-4 space-y-1.5 shadow-sm"
                >
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    Mnemonic Acronym
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 tracking-tight">
                    {m.acronym}
                  </h3>
                  <p className="text-xs font-bold text-teal-800 dark:text-teal-300">
                    {m.standsFor}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                    <strong>Exam Hall Usage:</strong> {m.usage}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-4 text-center text-xs text-slate-500 dark:text-slate-400 space-y-3">
        <div className="max-w-md mx-auto space-y-1.5">
          <p className="font-bold text-sm text-slate-800 dark:text-slate-200">
            Prepared by Jabbok Media Services
          </p>
          <div className="flex items-center justify-center gap-4 text-teal-700 dark:text-teal-400 font-semibold">
            <a
              href="https://wa.me/2349120840850"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" /> WhatsApp: +2349120840850
            </a>
            <a
              href="https://www.jabbokmedia.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Globe className="w-3.5 h-3.5" /> www.jabbokmedia.com.ng
            </a>
          </div>
          <p className="text-[11px] text-slate-400 pt-2">
            Designed for 300-Level Mass Communication Students &bull; All 7 Courses: MAC 311, 313, 323, 331, 333, 341, 343.
          </p>
        </div>
      </footer>
    </div>
  );
}
