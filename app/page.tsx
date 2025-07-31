"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Brain, Users, Star, Zap, Trophy, Gift, Gamepad2, ChevronDown, TrendingUp, Shield, Globe, DollarSign, Target, CheckCircle, Rocket, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const { scrollY } = useScroll();
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // 캐릭터 애니메이션 상태
  const [characterMood, setCharacterMood] = useState('happy');
  
  useEffect(() => {
    const moods = ['happy', 'excited', 'proud', 'determined'];
    const interval = setInterval(() => {
      setCharacterMood(moods[Math.floor(Math.random() * moods.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* 떠다니는 배경 요소들 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* 스마트 네비게이션 */}
      <motion.nav 
        className="fixed top-0 w-full backdrop-blur-lg bg-white/70 z-50 border-b border-gray-100"
        style={{ scale: headerScale }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-3xl">🎮</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Life RPG
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-purple-600 transition font-medium"
            >
              어떻게 시작하나요?
            </button>
            <button 
              onClick={() => scrollToSection('why-life-rpg')}
              className="text-gray-700 hover:text-purple-600 transition font-medium"
            >
              왜 Life RPG인가요?
            </button>
            <Link
              href="https://life-rpg-pwa.vercel.app"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              무료로 시작하기
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* 히어로 섹션 - 감정적 연결 */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 통통 튀는 캐릭터 */}
            <motion.div 
              className="inline-block mb-8"
              animate={{ 
                y: characterMood === 'excited' ? -10 : 0,
                rotate: characterMood === 'happy' ? [0, -5, 5, 0] : 0,
                scale: characterMood === 'proud' ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <span className="text-8xl md:text-9xl">
                  {characterMood === 'happy' && '😊'}
                  {characterMood === 'excited' && '🤩'}
                  {characterMood === 'proud' && '😎'}
                  {characterMood === 'determined' && '💪'}
                </span>
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-gray-800 mb-2">작심삼일이 반복되시나요?</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                이제는 게임처럼 즐겁게!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              매일 새로운 캐릭터로 시작하는 부담 제로 습관 만들기
            </p>
            
            {/* 스마트 CTA 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://life-rpg-pwa.vercel.app"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-xl flex items-center gap-3 button-3d"
                >
                  <Rocket className="w-5 h-5" />
                  무료로 시작하기
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.button 
                onClick={() => scrollToSection('demo')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-purple-600 font-bold text-lg shadow-lg border-2 border-purple-200 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                1분 데모 보기
              </motion.button>
            </div>

            {/* 신뢰 지표 */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>설치 없이 바로 시작</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>신용카드 불필요</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>5분 안에 첫 레벨업</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1분 데모 섹션 (새로 추가) */}
      <section id="demo" className="py-20 px-4 bg-white/80">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <Clock className="inline-block w-10 h-10 text-purple-600 mr-2" />
              1분만에 <span className="text-purple-600">알아보는</span> Life RPG
            </h2>
          </motion.div>

          {/* 인터랙티브 데모 */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", emoji: "📱", title: "터치 2번으로 기록", desc: "복잡한 입력 NO! 탭탭만 하세요" },
                  { step: "2", emoji: "🌈", title: "캐릭터가 변해요", desc: "운동하면 빨강, 공부하면 파랑!" },
                  { step: "3", emoji: "🎮", title: "던전에서 전투!", desc: "오늘의 활동이 전투력이 됩니다" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg"
                  >
                    <div className="text-4xl mb-4">{item.emoji}</div>
                    <div className="text-purple-600 font-bold text-sm mb-2">STEP {item.step}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 왜 Life RPG인가? (문제 → 해결) */}
      <section id="why-life-rpg" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              이런 경험 <span className="text-purple-600">있으신가요?</span>
            </h2>
          </motion.div>

          {/* 공감대 형성 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">😓 Before</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700">&quot;오늘도 운동 못했네... 내일은 꼭!&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700">"습관 앱 깔았다가 3일만에 삭제"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700">"기록하는 것도 귀찮아서 포기"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span className="text-gray-700">"혼자하니까 동기부여가 안돼"</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-800">🎮 After with Life RPG</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">"운동 30분 = 공격력 +10! 던전 가야지!"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">"매일 0시 리셋! 어제는 잊고 오늘 시작"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">"터치 2번이면 끝! 이렇게 쉬울 줄이야"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700">"길드원들이 응원해줘서 힘이 나요!"</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 어떻게 시작하나요? (간단한 3단계) */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              정말 <span className="text-purple-600">쉬워요!</span>
            </h2>
            <p className="text-xl text-gray-600">3단계로 시작하는 인생 게임</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "앱 열고 활동 선택",
                description: "운동했어요? 탭! 공부했어요? 탭!",
                icon: "👆",
                color: "from-purple-400 to-purple-600"
              },
              {
                number: "02", 
                title: "캐릭터가 성장해요",
                description: "매일 새로운 모습으로 변하는 나만의 캐릭터",
                icon: "🎯",
                color: "from-pink-400 to-pink-600"
              },
              {
                number: "03",
                title: "던전에서 모험!",
                description: "오늘의 활동이 곧 전투력! 몬스터를 물리치세요",
                icon: "⚔️",
                color: "from-blue-400 to-blue-600"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      <div className={`bg-gradient-to-r ${step.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                        STEP {step.number}
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-xl flex items-center justify-center text-5xl"
                  >
                    {step.icon}
                  </motion.div>
                </div>
                {index < 2 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 mb-8">
                    <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 스마트한 기능들 (탭 인터페이스) */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              더 <span className="text-purple-600">스마트한</span> 기능들
            </h2>
          </motion.div>

          {/* 탭 네비게이션 */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: "🎮", label: "게임 시스템" },
              { icon: "🤖", label: "AI 코칭" },
              { icon: "👥", label: "소셜 기능" },
              { icon: "💎", label: "보상 시스템" }
            ].map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl mr-2">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* 탭 컨텐츠 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === 0 && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">🎮 게임처럼 즐기는 일상</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold text-lg mb-3">던전 탐험</h4>
                    <p className="text-gray-600 mb-4">매일의 활동이 전투력으로! 강해진 캐릭터로 던전을 정복하세요.</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">운동 = 공격력</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">학습 = 마법력</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold text-lg mb-3">장비 & 스킬</h4>
                    <p className="text-gray-600 mb-4">활동 보상으로 얻은 장비와 스킬로 더 강해지세요!</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">에픽 장비</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">레어 스킬</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">🤖 24시간 AI 성장 코치</h3>
                <div className="space-y-4">
                  <motion.div whileHover={{ x: 5 }} className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold text-lg mb-2">개인 맞춤 조언</h4>
                    <p className="text-gray-600">당신의 패턴을 분석해 최적의 성장 전략을 제시합니다.</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold text-lg mb-2">감정 체크인</h4>
                    <p className="text-gray-600">오늘의 기분은 어떠신가요? AI가 공감하고 응원합니다.</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold text-lg mb-2">균형잡힌 성장</h4>
                    <p className="text-gray-600">4대 스탯을 골고루 성장시킬 수 있도록 가이드합니다.</p>
                  </motion.div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">👥 함께하면 더 재미있어요</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-4xl mb-3">🏆</div>
                    <h4 className="font-bold mb-2">랭킹 시스템</h4>
                    <p className="text-gray-600 text-sm">친구들과 선의의 경쟁</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-4xl mb-3">🤝</div>
                    <h4 className="font-bold mb-2">길드 시스템</h4>
                    <p className="text-gray-600 text-sm">함께 성장하는 동료들</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-4xl mb-3">✅</div>
                    <h4 className="font-bold mb-2">인증 & 응원</h4>
                    <p className="text-gray-600 text-sm">서로의 성장을 응원해요</p>
                  </motion.div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">💎 노력에 대한 확실한 보상</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">🎁</div>
                    <div>
                      <h4 className="font-bold">일일 보상</h4>
                      <p className="text-gray-600 text-sm">매일 로그인하고 활동하면 특별 보상!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl">🏅</div>
                    <div>
                      <h4 className="font-bold">업적 시스템</h4>
                      <p className="text-gray-600 text-sm">특별한 도전 과제를 달성하면 레어 아이템!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl">👑</div>
                    <div>
                      <h4 className="font-bold">시즌 보상</h4>
                      <p className="text-gray-600 text-sm">매 시즌 랭킹에 따른 특별한 보상!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 사용자 후기 섹션 */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-purple-600">10만명</span>이 선택한 이유
            </h2>
            <p className="text-xl text-gray-600">실제 사용자들의 생생한 후기</p>
          </motion.div>

          {/* 후기 카드들 - 마치 SNS 피드처럼 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "김지현",
                age: "28세 직장인",
                emoji: "👩‍💼",
                review: "작심삼일의 여왕이었는데 이제는 운동 100일째! 매일 0시에 리셋되니까 어제 못했어도 죄책감 없이 다시 시작할 수 있어요.",
                stats: "💪 Lv.45 | 🔥 100일 연속",
                date: "2주 전"
              },
              {
                name: "이준호",
                age: "35세 개발자",
                emoji: "👨‍💻",
                review: "게임 중독자였는데 이젠 인생이 게임이 됐어요 ㅋㅋ 코딩 1시간 = 마법력 +20! 던전 가려고 더 열심히 공부하게 됨",
                stats: "🧠 Lv.62 | ⚡ 공격력 850",
                date: "1개월 전"
              },
              {
                name: "박서연",
                age: "22세 대학생",
                emoji: "👩‍🎓",
                review: "터치 2번이면 끝이라는게 진짜예요! 복잡한 입력 없어서 너무 좋고, 캐릭터 변하는거 보는 재미가 쏠쏠해요 ㅎㅎ",
                stats: "⭐ Lv.28 | 🌈 4색 달성",
                date: "3일 전"
              },
              {
                name: "최민수",
                age: "31세 육아맘",
                emoji: "👩‍👧",
                review: "육아하면서 나를 위한 시간이 없었는데, 하루 30초로 나를 기록할 수 있어서 좋아요. AI 코치가 응원해줄 때마다 힘이 나요!",
                stats: "💖 Lv.33 | 🎯 균형 마스터",
                date: "1주일 전"
              },
              {
                name: "정태양",
                age: "26세 취준생",
                emoji: "📚",
                review: "취준 스트레스로 운동도 공부도 다 포기했었는데, 게임처럼 레벨업하니까 동기부여가 확실히 돼요. 면접 준비도 퀘스트처럼!",
                stats: "🎓 Lv.41 | 📈 성장률 250%",
                date: "2개월 전"
              },
              {
                name: "강민지",
                age: "29세 디자이너",
                emoji: "🎨",
                review: "디자인 작업 1시간 = 창의력 스탯 상승! 일이 RPG 퀘스트가 되니까 야근도 덜 힘들어요 ㅋㅋ 길드원들이 응원해주는 것도 큰 힘!",
                stats: "🎨 Lv.52 | 🏆 길드 랭킹 3위",
                date: "3주 전"
              },
              {
                name: "송하늘",
                age: "40세 CEO",
                emoji: "💼",
                review: "바쁜 일정 속에서도 건강을 챙길 수 있게 됐어요. 직원들과 함께 길드 만들어서 하니까 회사 분위기도 좋아졌습니다.",
                stats: "👑 Lv.71 | 💎 프리미엄 유저",
                date: "6개월 전"
              },
              {
                name: "윤서진",
                age: "24세 간호사",
                emoji: "👩‍⚕️",
                review: "3교대 근무로 루틴 지키기 어려웠는데, 일일 캐릭터 시스템 덕분에 부담 없이 할 수 있어요. 오늘의 나만 신경쓰면 되니까!",
                stats: "💉 Lv.35 | 🌙 야간 전사",
                date: "1개월 전"
              },
              {
                name: "임도현",
                age: "33세 프리랜서",
                emoji: "💻",
                review: "혼자 일하니까 나태해지기 쉬운데, 이제는 매일 퀘스트 깨듯이 일해요. 수입도 늘고 건강도 좋아졌어요!",
                stats: "💰 Lv.58 | 🚀 생산성 200%↑",
                date: "2주 전"
              },
              {
                name: "한지우",
                age: "27세 요가강사",
                emoji: "🧘‍♀️",
                review: "학생들한테도 추천하고 있어요! 요가 수련도 게임처럼 기록하니까 다들 더 열심히 하더라구요. 특히 스탯 시스템이 인기!",
                stats: "🧘 Lv.66 | 🌸 밸런스 마스터",
                date: "1주일 전"
              },
              {
                name: "오민재",
                age: "36세 의사",
                emoji: "👨‍⚕️",
                review: "환자들에게 운동 처방할 때 이 앱을 권해요. 게임처럼 재미있어서 compliance가 확실히 높아졌습니다.",
                stats: "⚕️ Lv.74 | 📊 건강 스탯 MAX",
                date: "3개월 전"
              },
              {
                name: "조예린",
                age: "23세 유튜버",
                emoji: "📹",
                review: "컨텐츠 제작도 퀘스트! 구독자가 늘 때마다 경험치 오르는 느낌이에요. 번아웃 없이 꾸준히 할 수 있게 됐어요.",
                stats: "🎬 Lv.44 | 🔔 10만 달성",
                date: "3주 전"
              },
              {
                name: "백승우",
                age: "30세 트레이너",
                emoji: "🏋️",
                review: "회원님들이랑 같이 해요! 운동이 게임이 되니까 다들 출석률이 엄청 좋아졌어요. PT 안 받는 날도 알아서 운동하시고!",
                stats: "💪 Lv.81 | 🥇 파워 랭킹 1위",
                date: "4개월 전"
              },
              {
                name: "문소희",
                age: "25세 대학원생",
                emoji: "🔬",
                review: "논문 쓰는 것도 던전 클리어하는 기분! 연구실 사람들이랑 길드 만들어서 서로 응원하면서 하니까 덜 외로워요.",
                stats: "🧪 Lv.38 | 📖 논문 퀘스트 진행중",
                date: "2주 전"
              },
              {
                name: "류하진",
                age: "32세 번역가",
                emoji: "📖",
                review: "번역 1페이지 = 언어 스킬 경험치! 지루한 작업도 게임처럼 재미있어졌어요. 하루 목표량도 자연스럽게 늘었구요.",
                stats: "🌐 Lv.55 | 🗣️ 5개국어 마스터",
                date: "1개월 전"
              },
              {
                name: "신아영",
                age: "29세 바리스타",
                emoji: "☕",
                review: "새벽 출근이 힘들었는데 '오늘의 캐릭터'를 보려고 일찍 일어나게 됐어요 ㅋㅋ 커피 공부도 학습 스탯으로 기록!",
                stats: "☕ Lv.42 | 🌅 얼리버드",
                date: "3주 전"
              },
              {
                name: "차은호",
                age: "34세 마케터",
                emoji: "📊",
                review: "KPI 달성이 게임 퀘스트가 되니까 일이 재밌어졌어요. 팀원들이랑 경쟁하면서 실적도 오르고 건강도 챙기고!",
                stats: "📈 Lv.61 | 🎯 목표 달성왕",
                date: "2개월 전"
              },
              {
                name: "탁서윤",
                age: "26세 일러스트레이터",
                emoji: "🎨",
                review: "그림 그리는 시간도 경험치로! 슬럼프 왔을 때 AI 코치가 해준 조언 덕분에 극복했어요. 진짜 게임 NPC 같아요 ㅋㅋ",
                stats: "🖌️ Lv.48 | 🌈 창의력 부스트",
                date: "1주일 전"
              },
              {
                name: "팽수진",
                age: "31세 주부",
                emoji: "🏠",
                review: "집안일도 퀘스트! 청소, 요리, 육아 다 기록하니까 내가 얼마나 열심히 사는지 보여요. 남편도 이제 같이 해요!",
                stats: "🏡 Lv.50 | 👨‍👩‍👧 가족 길드",
                date: "1개월 전"
              },
              {
                name: "홍민성",
                age: "37세 투자자",
                emoji: "💹",
                review: "자기관리가 곧 투자라고 생각해요. 이 앱으로 시간 관리하니까 수익률도 올랐어요. 건강은 덤!",
                stats: "💎 Lv.77 | 📊 ROI 300%",
                date: "5개월 전"
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-2xl">
                      {review.emoji}
                    </div>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.age}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.review}"</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600">{review.stats}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 더 많은 후기 CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">이 외에도 수많은 성장 스토리가 계속되고 있어요!</p>
            <button className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition">
              더 많은 후기 보기
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ 섹션 (더 간결하게) */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              궁금한 점이 <span className="text-purple-600">있으신가요?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "정말 무료인가요?",
                a: "네! 기본 기능은 100% 무료예요. 프리미엄은 선택사항!"
              },
              {
                q: "시간이 없어도 할 수 있나요?",
                a: "터치 2번이면 끝! 하루 30초면 충분해요."
              },
              {
                q: "스마트폰만 있으면 되나요?",
                a: "네! 앱 설치 없이 웹브라우저에서 바로 시작!"
              },
              {
                q: "혼자서도 재미있나요?",
                a: "혼자서도, 함께해도 재미있어요! 선택은 자유!"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
              >
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 최종 CTA (감정적 어필) */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              오늘이 바로 시작하기<br />
              가장 좋은 날이에요!
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              지금 시작하면 5분 안에 첫 레벨업을 경험할 수 있어요.<br />
              매일 조금씩, 게임처럼 즐겁게 성장해봐요!
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="https://life-rpg-pwa.vercel.app"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-purple-600 font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
              >
                <Gamepad2 className="w-7 h-7" />
                지금 무료로 시작하기
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>

            <div className="mt-8 flex justify-center gap-8 text-sm opacity-80">
              <div>✅ 신용카드 불필요</div>
              <div>✅ 1분 회원가입</div>
              <div>✅ 언제든 해지 가능</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 투자자 섹션 (간결하게) */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            투자자이신가요? <span className="text-yellow-400">함께 성장해요</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-yellow-400">$72B</div>
              <div className="text-gray-400">글로벌 웰니스 시장</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">30%</div>
              <div className="text-gray-400">연평균 성장률</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">150개국</div>
              <div className="text-gray-400">타겟 시장</div>
            </div>
          </div>
          <button className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-300 transition">
            투자 제안서 받기
          </button>
        </div>
      </section>

      {/* 심플한 푸터 */}
      <footer className="py-8 px-4 bg-gray-100 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🎮</span>
            <span className="font-bold text-lg">Life RPG</span>
          </div>
          <p className="text-gray-600 mb-4">Play Your Life! 인생을 게임처럼 즐겁게</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">이용약관</a>
            <a href="#" className="hover:text-gray-700">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-700">문의하기</a>
          </div>
          <p className="text-xs text-gray-400 mt-4">© 2024 Life RPG. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}