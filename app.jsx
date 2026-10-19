/* ============================================
   Jo Yaku Portfolio — Main App (VibeCoding Style)
   ============================================ */

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#a3e635",
  "heroStyle": "gradient"
}/*EDITMODE-END*/;

// ============================================
// DATA
// ============================================

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'journey', label: 'JOURNEY' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'career', label: 'CAREER' },
  { id: 'contact', label: 'CONTACT' },
];

// ============================================
// JOURNEY (4 years + graduation)
// ============================================
const JOURNEY_DATA = [
  {
    year: '2024',
    grade: '1年次',
    title: 'FOUNDATION',
    desc: 'ITエンジニアとして必要となる基礎知識を幅広く学習した1年目',
    learning: [
      'プログラミング基礎',
      'Web（HTML / CSS / JavaScript）',
      'データベース基礎（MySQL / SQL）',
      'ネットワーク基礎',
      'Linux コマンドライン',
      '情報セキュリティ基礎',
      'AI / IoT 概論',
      'オブジェクト指向プログラミング（Java）',
      'Office スキル',
    ],
    technologies: [
      'Java', 'JavaScript', 'HTML', 'CSS',
      'MySQL', 'SQL', 'Linux', 'Network',
    ],
    projects: [
      'プログラミング基礎演習',
      'Webサイト制作',
    ],
    learned: [
      'ITとコンピュータの基本的な仕組みの理解',
      '基礎を着実に積み上げる学習習慣',
      '自ら調べて問題を解決する姿勢',
    ]
  },
  {
    year: '2025',
    grade: '2年次',
    title: 'DEVELOPMENT',
    desc: '基礎技術から、より実践的なアプリケーション・システム開発へ',
    learning: [
      'Webアプリケーション開発',
      'Web API開発',
      'システム設計',
      '要件定義',
      'UML',
      'UX / UI デザイン',
      'ソフトウェアテスト',
      'セキュリティ応用',
      'AWS クラウド基礎',
      'RPA',
      'モバイルアプリケーション',
      'ロボット開発',
    ],
    technologies: [
      'Java', 'PHP', 'JavaScript',
      'MySQL', 'AWS', 'UML', 'RPA',
    ],
    projects: [
      'FE TraceMaster（トレース学習アプリ）',
      'ブロック崩しゲーム（グループ）',
      'データベース設計演習',
      'Webアプリケーション制作',
    ],
    learned: [
      'システム開発の一連の流れ（要件〜テスト）',
      'チームで協力して開発する重要性',
      '複数技術を組み合わせてシステムを作る経験',
    ]
  },
  {
    year: '2026',
    grade: '3年次',
    title: 'PRACTICAL DEVELOPMENT',
    desc: 'より実践的な開発やプロジェクト活動に取り組んでいる現在（学習中）',
    current: true,
    learning: [
      'プロジェクトマネジメント',
      'データベース実践（MySQL）',
      '機械学習 / ディープラーニング',
      'スマートフォンアプリケーション',
      'アニメーション制作',
      'チーム開発（総合実践）',
    ],
    technologies: [
      'MySQL', 'Python',
      'Machine Learning', 'Deep Learning',
      'WBS', 'Git', 'GitHub',
    ],
    projects: [
      'SIW学生ポータル開発',
      'データベース設計実践',
      'Project Management / Team Project',
      'スマートフォンアプリ開発',
    ],
    learned: [
      'チーム開発におけるコミュニケーションと役割分担',
      'プロジェクト計画と進捗管理の重要性',
      '課題を整理し、解決策を考えて実行する力',
    ]
  },
  {
    year: '2027',
    grade: '4年次',
    title: 'ADVANCED DEVELOPMENT',
    desc: 'これまで学んだ技術を活かし、より実践的な開発・制作に取り組む予定（今後追加予定）',
    upcoming: true,
    learning: [
      'Advanced Development',
      '卒業研究',
      'キャリア形成',
      '今後追加予定',
    ],
    technologies: [
      '今後追加予定',
    ],
    projects: [
      '卒業研究',
      '今後追加予定',
    ],
    learned: [
      '今後追加予定',
    ]
  },
  {
    year: '2028.03',
    grade: '卒業予定',
    title: 'GRADUATION',
    desc: '4年間の学習・制作・プロジェクト経験を活かし、ITエンジニアとして社会に羽ばたく',
    graduation: true,
    learning: [
      '卒業研究発表',
      '高度専門士取得予定',
      'ITエンジニアとして就職',
    ],
    technologies: [
      '4年間で学んだすべての技術',
    ],
    projects: [
      '卒業研究',
    ],
    learned: [
      '未経験からITエンジニアを目指して成長し続ける4年間',
      '学び続ける姿勢と課題解決力',
    ]
  }
];

// ============================================
// SKILLS
// ============================================
const SKILL_DATA = [
  {
    category: 'Programming',
    icon: 'code',
    skills: [
      { name: 'Java', level: 'project' },
      { name: 'JavaScript', level: 'project' },
      { name: 'Python', level: 'project' },
      { name: 'オブジェクト指向プログラミング', level: 'learning' },
      { name: 'アルゴリズム', level: 'current' },
      { name: 'データ構造', level: 'current' },
    ]
  },
  {
    category: 'Web Development',
    icon: 'frontend',
    skills: [
      { name: 'HTML', level: 'project' },
      { name: 'CSS', level: 'project' },
      { name: 'JavaScript', level: 'project' },
      { name: 'Webアプリケーション', level: 'project' },
      { name: 'Web API', level: 'learning' },
    ]
  },
  {
    category: 'Database',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 'project' },
      { name: 'SQL', level: 'project' },
      { name: 'データベース設計', level: 'project' },
      { name: 'ER図', level: 'project' },
      { name: '正規化', level: 'learning' },
    ]
  },
  {
    category: 'System Development',
    icon: 'system',
    skills: [
      { name: '要件整理', level: 'learning' },
      { name: '要件定義', level: 'learning' },
      { name: 'システム設計', level: 'learning' },
      { name: 'UML', level: 'learning' },
      { name: 'アーキテクチャ', level: 'learning' },
      { name: 'テスト', level: 'learning' },
      { name: 'セキュリティ', level: 'learning' },
    ]
  },
  {
    category: 'Cloud / Infrastructure',
    icon: 'cloud',
    skills: [
      { name: 'AWS（基礎）', level: 'learning' },
      { name: 'Linux', level: 'learning' },
      { name: 'Network', level: 'learning' },
      { name: 'IoT', level: 'learning' },
    ]
  },
  {
    category: 'AI',
    icon: 'ai',
    skills: [
      { name: 'AI 概論', level: 'learning' },
      { name: 'Machine Learning', level: 'learning' },
      { name: 'Deep Learning', level: 'learning' },
    ]
  },
  {
    category: 'Application Development',
    icon: 'app',
    skills: [
      { name: 'Web Application', level: 'project' },
      { name: 'Smartphone Application', level: 'learning' },
      { name: 'RPA', level: 'learning' },
      { name: 'Robot Development', level: 'learning' },
    ]
  },
  {
    category: 'Project Management',
    icon: 'pm',
    skills: [
      { name: 'WBS（P-WBS / F-WBS）', level: 'project' },
      { name: 'Persona', level: 'learning' },
      { name: 'ヒアリング', level: 'learning' },
      { name: '要件整理', level: 'learning' },
      { name: '課題整理', level: 'learning' },
      { name: 'KPI', level: 'learning' },
      { name: 'チーム開発', level: 'project' },
    ]
  },
  {
    category: 'Tools',
    icon: 'tools',
    skills: [
      { name: 'Git', level: 'project' },
      { name: 'GitHub', level: 'project' },
      { name: 'Visual Studio Code', level: 'project' },
    ]
  }
];

// ============================================
// QUALIFICATIONS
// ============================================
const QUALIFICATIONS = [
  {
    name: '日本語能力試験（JLPT）N1',
    status: 'achieved',
    statusLabel: '取得済み',
    desc: '日本語によるコミュニケーション能力を証明。ビジネスシーンでの会話・読解・文章作成が可能。',
    icon: 'language'
  },
  {
    name: '基本情報技術者試験',
    status: 'learning',
    statusLabel: '学習中',
    desc: 'コンピュータシステム・アルゴリズム・ネットワーク・データベース・セキュリティ・マネジメントなど、ITの基礎知識を体系的に学習中。',
    icon: 'grad'
  }
];

// ============================================
// PROJECTS
// ============================================
const FEATURED_PROJECTS = [
  {
    id: 'p1',
    name: 'FE TraceMaster',
    subtitle: '基本情報技術者試験 トレース学習アプリ',
    category: 'Web Application',
    status: '2026 / Personal Project',
    thumbClass: '',
    thumbColor: 'linear-gradient(135deg, #065f46, #10b981)',
    icon: '◈',
    desc: '基本情報技術者試験の学習をサポートするトレース学習アプリ。学習者がアルゴリズムなどの処理を実際にトレースしながら理解することを目的としたアプリケーション。',
    tech: ['Flask', 'Tailwind CSS', 'Jinja', 'Chart.js', 'MathJax'],
    role: 'フロントエンド',
    demoUrl: 'https://pear0123.pythonanywhere.com/home',
    overview: '基本情報技術者試験の学習をサポートするトレース学習アプリ。学習者がアルゴリズムやプログラムの処理を実際にトレースしながら、理解を深めることを目的としています。',
    background: '基本情報技術者試験のトレース問題は、多くの学習者にとって難易度が高く、紙と鉛筆での学習では効率が上がりにくいという課題がありました。インタラクティブにトレース学習ができるツールがあれば、学習効率を上げられると考えて制作しました。',
    goal: '学習者が直感的にトレース学習を進められるWebアプリケーションを作ること。',
    myRole: 'フロントエンドを担当。画面設計、コンポーネント作成、バックエンドとの連携部分の実装を行いました。',
    technologies: ['Flask', 'SQLAlchemy', 'SQLite', 'Jinja', 'Tailwind CSS', 'Chart.js', 'MathJax', 'JSON', 'GitHub', 'Discord'],
    process: [
      '企画・構成：学習者のニーズ整理と機能案の検討',
      '画面設計：UI/UXを考慮した画面構成の設計',
      '環境構築：Flask + SQLiteの開発環境を準備',
      'フロントエンド実装：Jinja + Tailwind CSSで画面を作成',
      'バックエンド連携：ログイン認証、データの受け渡し',
      'グラフ・数式表示：Chart.js、MathJaxの導入',
      '動作確認・修正',
      '公開：pythonanywhereにデプロイ',
    ],
    problem: '基本情報技術者試験のアルゴリズム分野では、処理の流れを手計算でトレースする学習方法が一般的ですが、紙での学習は効率が悪く、自分がどこでつまずいているのかを把握しにくいという課題がありました。また、学習進捗を記録・可視化する仕組みもなく、モチベーションを維持しにくい点も問題でした。',
    solution: 'アルゴリズムの処理過程をステップごとに画面上でトレースできる機能を実装しました。Chart.jsを用いて学習進捗や正答率をグラフで可視化し、MathJaxで数式を見やすく表示しました。Flaskのログイン認証システムとSQLiteを組み合わせてユーザーごとの進捗を管理し、JSON形式で問題データを管理することでコンテンツの追加・修正を容易にしました。',
    result: '基本情報技術者試験のアルゴリズム学習を効率化できるWebアプリケーションを完成させ、PythonAnywhereにデプロイして実際に使用できる状態にしました。トレース機能により処理の流れを視覚的に理解できるようになり、学習進捗をグラフで確認することでモチベーションの維持にもつながりました。フロントエンド開発を通して、バックエンドやデータベースとの連携を意識した画面設計の経験を得ることができました。',
    learning: 'フロントエンド開発を担当し、バックエンドやデータベースとの連携を意識しながら、ユーザーが直感的に操作できる画面を設計・実装する経験を得ました。',
  },
  {
    id: 'p2',
    name: 'ブロック崩しゲーム',
    subtitle: 'Group Project',
    category: 'Game / Group Project',
    status: '2026 / Team Project',
    thumbClass: 'alt',
    thumbColor: 'linear-gradient(135deg, #7c2d12, #f97316)',
    icon: '▣',
    desc: 'グループで制作したブロック崩しゲーム。ゲーム制作を通して、チーム内での役割分担や情報共有、共同で一つの成果物を完成させる経験を積みました。',
    tech: ['Python', 'Pygame'],
    role: 'ステージ作成、アイテム機能の実装',
    overview: 'グループで制作したブロック崩しゲーム。プログラミングの実践だけでなく、チームで一つの作品を作り上げるプロセスを学びました。',
    background: 'チームで協力して一つの成果物を作り上げる経験を積むことを目的に、グループでのゲーム制作に取り組みました。',
    goal: 'チームで役割を分担し、期限内に完成度の高いゲームを作り上げること。',
    myRole: 'ステージ作成、アイテム機能の実装を担当。チーム内での進捗共有・調整にも参加しました。',
    technologies: ['Python', 'Pygame'],
    process: [
      '企画・構成：ゲーム内容と仕様の検討',
      '役割分担：メンバーごとの担当決め',
      '開発：各担当パートの実装',
      '統合・調整：各パーツの組み合わせと微調整',
      '発表・フィードバック',
    ],
    problem: 'メンバー間の作業の進捗に差が生まれ、統合作業に影響が出そうになる場面がありました。',
    solution: '定期的に進捗を共有し、お互いに助け合える体制を作りました。また、仕様を事前に明確にすることで、統合時の手戻りを減らしました。',
    result: 'チーム全員で協力し、期限内にゲームを完成させることができました。',
    learning: 'ステージ作成やアイテム機能の実装を通して、ゲームとしての操作性やバランスを考えるだけでなく、チームで相談しながら一つの作品を完成させる経験を得ました。',
  },
  {
    id: 'p3',
    name: 'SIW学生ポータル開発',
    subtitle: 'Student Portal System',
    category: 'Web System / Team Project',
    status: '2026 / Team Project · 開発中',
    thumbClass: 'alt2',
    thumbColor: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
    icon: '◉',
    desc: '学校関連の学生向けWebシステム開発。ログイン、学生情報、お知らせ、課題提出などの機能を想定し、チームで開発に取り組みました。',
    tech: ['Figma', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    role: 'ヒアリング記録、資料作成',
    overview: '学生が授業情報・お知らせ・課題提出などを一元的に確認できる学生ポータルシステムの開発プロジェクト。',
    background: '学生が必要な情報にアクセスしやすい環境を整えることで、学習環境をより良くすることを目的にスタートしました。',
    goal: '学生の利便性を向上させるWebシステムを、チームで協力して開発すること。',
    myRole: 'ヒアリング記録、資料作成を担当。開発段階でFigmaを使用した画面設計にも参加しました。',
    technologies: ['Figma', '[使用技術を追加]'],    process: [
      '要件定義',
      'システム設計',
      'データベース設計',
      'チームでの実装',
      'テスト',
      '発表',
    ],
    problem: 'チーム開発において、進捗の管理やコミュニケーションの重要性を実感する場面が多くありました。',
    solution: 'WBSを活用して計画を立て、定期的なミーティングで進捗と課題を共有しました。',
    result: 'Webシステム開発を通して、システムの機能を考えるだけでなく、チームで開発を進めるための役割分担、情報共有、課題整理などについて学ぶことができました。',
    learning: 'システム開発では技術力だけでなく、チームで協力する力やプロジェクトを管理する力が重要であると学びました。',
  }
];

const OTHER_PROJECTS = [
  {
    id: 'p4',
    name: 'データベース設計',
    category: 'Database',
    desc: 'ITイベント情報を扱うシステムを題材に、データ整理・テーブル設計・ER図・正規化・SQLに取り組みました。',
    tech: ['MySQL', 'SQL', 'ER図', '正規化'],
    icon: '▣'
  },
  {
    id: 'p5',
    name: 'Project Management / Team Project',
    category: 'Project Management',
    desc: 'グループプロジェクトを通して、プロジェクトを計画・管理するための考え方を学びました。',
    tech: ['WBS', 'Persona', 'ヒアリング', 'KPI'],
    icon: '◉'
  }
];
  {
    id: 'p6',
    name: 'Orbloom',
    category: 'Game / Personal Project',
    desc: 'ピンボールをモチーフにした放置系ゲーム。ボールの自動射出や釘の強化、レア度アップなどのアップグレードシステムを実装しました。',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '◈',
    demoUrl: 'https://joyaku.github.io/orbloom/game.html'
  }
];

// ============================================
// ICONS
// ============================================

function Icon({ name, size = 20 }) {
  const s = size;
  const paths = {
    frontend: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </g>
    ),
    code: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </g>
    ),
    database: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/>
        <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/>
      </g>
    ),
    system: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 3v18M3 9h18"/>
      </g>
    ),
    cloud: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </g>
    ),
    ai: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="2"/>
        <circle cx="8.5" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="15.5" cy="12" r="1.5" fill="currentColor"/>
        <path d="M6 2v4M18 2v4M12 2v4"/>
      </g>
    ),
    app: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="2"/>
        <line x1="10" y1="18" x2="14" y2="18"/>
      </g>
    ),
    tools: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </g>
    ),
    pm: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </g>
    ),
    language: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </g>
    ),
    grad: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </g>
    ),
    github: (
      <g fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </g>
    ),
    mail: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M3 7l9 6 9-6"/>
      </g>
    ),
    arrow: (
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </g>
    ),
    user: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </g>
    ),
    target: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </g>
    ),
    lightbulb: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 014 12.7V17H8v-2.3A7 7 0 0112 2z"/>
      </g>
    ),
    check: (
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </g>
    ),
    close: (
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </g>
    ),
    external: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </g>
    ),
    team: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </g>
    ),
    spark: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </g>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" width={s} height={s} style={{ display: 'block' }}>
      {paths[name] || paths.code}
    </svg>
  );
}

// ============================================
// NAVIGATION
// ============================================

function Navigation({ activeSection, scrolled, mobileOpen, setMobileOpen, accent }) {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const logoStyle = {
    background: accent,
    color: '#000',
  };

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => handleNavClick(e, 'home')}
            style={logoStyle}
          >
            JoYaku
          </a>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={activeSection === item.id ? { color: accent, background: `${accent}12` } : {}}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, 'contact')}
            style={logoStyle}
          >
            お問い合わせ
          </a>
          <button
            className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={(e) => handleNavClick(e, item.id)}
            style={activeSection === item.id ? { color: accent, background: `${accent}12` } : {}}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

// ============================================
// HERO
// ============================================

function Hero({ accent, heroImage }) {
  return (
    <section className="hero" id="home">
      {heroImage && (
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
      )}
      {!heroImage && <div className="hero-gradient-bg"></div>}
      <div className="hero-noise"></div>

      <div className="hero-inner">
        <div className="hero-top-badge">
          <span className="dot" style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}></span>
          Available for 2028 Spring Internship
        </div>

        <div className="hero-portfolio-label">PORTFOLIO</div>
        <h1 className="hero-name-main" style={{ color: accent }}>
          徐 躍
        </h1>
        <div className="hero-name-en">Jo Yaku</div>

        <div className="hero-role">
          IT Engineer <span style={{ color: accent }}>/</span> Student Developer
        </div>

        <div className="hero-school-line">
          埼玉ITWEB専門学校 高度専門士課程 4年制
        </div>
        <div className="hero-grad">Saitama IT &amp; WEB College · Class of 2028</div>

        <div className="hero-philosophy" style={{ borderLeftColor: accent }}>
          人の役に立つシステムを、<br />技術と挑戦で形にする。
        </div>

        <div className="hero-ctas">
          <a
            href="#projects"
            className="btn-primary"
            style={{ background: accent, color: '#000' }}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('projects');
              if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
            }}
          >
            View Projects
            <Icon name="arrow" size={16} />
          </a>
          <a href="#about" className="btn-secondary" onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('about');
            if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
          }}>
            About Me
            <Icon name="arrow" size={16} />
          </a>
        </div>

        <div className="hero-quick-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">4<span className="unit" style={{ color: accent }}>年制</span></div>
            <div className="hero-stat-label">高度専門士課程</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">5<span className="unit" style={{ color: accent }}>+</span></div>
            <div className="hero-stat-label">プロジェクト</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">9<span className="unit" style={{ color: accent }}>分野</span></div>
            <div className="hero-stat-label">学習領域</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">2028.3</div>
            <div className="hero-stat-label">卒業予定</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        Scroll
        <div className="hero-scroll-line" style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }}></div>
      </div>
    </section>
  );
}

// ============================================
// ABOUT
// ============================================

function About({ accent }) {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-eyebrow" style={{ color: accent }}>About</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-desc">
            IT専門学校で4年間を通して学び、着実に成長してきました。
          </p>
        </div>

        <div className="about-grid reveal">
          <div className="about-photo-wrap">
            <div className="about-photo-frame">
              <img src="assets/profile.jpg" alt="徐 躍 プロフィール写真" className="about-photo" />
              <div className="about-photo-badge">
                <span className="status-dot" style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}></span>
                就職活動中
              </div>
            </div>
            <div className="about-photo-caption">
              <div className="name">徐 躍</div>
              <div className="name-en">Jo Yaku</div>
              <div className="role-tag">IT Engineer · Student</div>
            </div>
          </div>

          <div className="about-content">
            <h3>IT分野に興味を持ち、4年間で幅広く学んできました。</h3>
            <p>
              IT分野に興味を持ち、埼玉ITWEB専門学校の高度専門士課程で、
              4年間を通してITに関する幅広い知識と技術を学んでいます。
            </p>
            <p>
              これまで、プログラミング、Web開発、データベース、システム開発、
              ネットワーク、Linux、セキュリティ、クラウド、AI、
              アプリケーション開発、プロジェクトマネジメントなど、
              ITエンジニアに必要となるさまざまな分野について学習してきました。
            </p>
            <p>
              学習やプロジェクト活動では、単にプログラムを書くことだけではなく、
              要件を整理すること、課題を明確にすること、
              チームで役割を分担すること、情報を共有しながらプロジェクトを
              進めることの重要性を学びました。
            </p>
            <p>
              分からない技術やエラーに直面した際には、まず自分で原因や解決方法を調べ、
              実際に試しながら問題を解決することを意識しています。
            </p>
            <p>
              また、IT技術は常に変化しているため、一度学んで終わりにするのではなく、
              新しい技術や知識を継続して学習することを大切にしています。
            </p>
            <p>
              将来は、技術力だけでなく、ユーザーやチームメンバーの立場も考えながら、
              IT技術を活用して課題を解決できるエンジニアを目指しています。
            </p>

            <div className="about-info">
              <div className="about-info-item">
                <div className="label">氏名</div>
                <div className="value">徐 躍（じょ やく / Jo Yaku）</div>
              </div>
              <div className="about-info-item">
                <div className="label">学校</div>
                <div className="value">埼玉ITWEB専門学校</div>
              </div>
              <div className="about-info-item">
                <div className="label">課程</div>
                <div className="value">高度専門士課程 4年制</div>
              </div>
              <div className="about-info-item">
                <div className="label">学年</div>
                <div className="value">3年次（2026年8月現在）</div>
              </div>
              <div className="about-info-item">
                <div className="label">卒業予定</div>
                <div className="value">2028年3月</div>
              </div>
              <div className="about-info-item">
                <div className="label">志望職種</div>
                <div className="value">ITエンジニア / SE / Webエンジニア</div>
              </div>
              <div className="about-info-item">
                <div className="label">興味のある業界</div>
                <div className="value">IT業界 / ゲーム業界</div>
              </div>
              <div className="about-info-item">
                <div className="label">日本語能力</div>
                <div className="value">JLPT N1 取得済み</div>
              </div>
            </div>

            {/* Strengths */}
            <div className="about-strengths">
              <h4>Strengths — 4つの強み</h4>
              <div className="strengths-grid">
                <div className="strength-item">
                  <div className="strength-icon" style={{ background: `${accent}22`, color: accent }}>
                    <Icon name="grad" size={18} />
                  </div>
                  <h5>継続して学習する力</h5>
                  <p>
                    4年間のIT専門教育を通して、プログラミングだけでなくWeb、データベース、
                    システム開発、クラウド、AI、プロジェクトマネジメントなど、
                    幅広い分野を継続して学習しています。
                  </p>
                </div>
                <div className="strength-item">
                  <div className="strength-icon" style={{ background: `${accent}22`, color: accent }}>
                    <Icon name="lightbulb" size={18} />
                  </div>
                  <h5>自分で調べて問題を解決する力</h5>
                  <p>
                    分からない技術やエラーが発生した際には、すぐに答えを求めるのではなく、
                    まず自分で原因を調べ、情報を比較し、実際に試しながら
                    解決方法を考えることを意識しています。
                  </p>
                </div>
                <div className="strength-item">
                  <div className="strength-icon" style={{ background: `${accent}22`, color: accent }}>
                    <Icon name="spark" size={18} />
                  </div>
                  <h5>幅広いIT分野への興味</h5>
                  <p>
                    プログラミングだけに限定せず、Web、データベース、ネットワーク、
                    Linux、AWS、AI、セキュリティ、システム設計など、
                    システム開発に関わるさまざまな分野に興味を持って学習しています。
                  </p>
                </div>
                <div className="strength-item">
                  <div className="strength-icon" style={{ background: `${accent}22`, color: accent }}>
                    <Icon name="team" size={18} />
                  </div>
                  <h5>チームで協力する力</h5>
                  <p>
                    グループ開発やプロジェクト活動を通して、役割分担、情報共有、
                    ヒアリング、課題整理など、チームで協力してプロジェクトを
                    進める経験を積んでいます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// QUALIFICATIONS
// ============================================

function Qualifications({ accent }) {
  return (
    <section className="section bg-soft" id="qualifications">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-eyebrow" style={{ color: accent }}>Qualifications</div>
          <h2 className="section-title">資格 / 検定</h2>
          <p className="section-desc">
            取得済みの資格と、現在学習中の資格についてご紹介します。
          </p>
        </div>

        <div className="qualifications-grid reveal-stagger">
          {QUALIFICATIONS.map((q, i) => (
            <div className="qual-card" key={i}>
              <div
                className={`qual-icon ${q.status === 'learning' ? 'learning' : ''}`}
                style={q.status === 'achieved' ? { background: `${accent}22`, color: accent } : {}}
              >
                <Icon name={q.icon} size={22} />
              </div>
              <div className="qual-body">
                <h4>{q.name}</h4>
                <span
                  className={`status ${q.status}`}
                  style={q.status === 'achieved' ? { background: `${accent}15`, color: accent, borderColor: `${accent}33` } : {}}
                >
                  <span className="status-dot"></span>
                  {q.statusLabel}
                </span>
                <p>{q.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// JOURNEY
// ============================================

function Journey({ accent }) {
  const [active, setActive] = useState(2); // 3rd year default
  const data = JOURNEY_DATA[active];

  return (
    <section className="section" id="journey">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-eyebrow" style={{ color: accent }}>4 Years Journey</div>
          <h2 className="section-title">4年間の成長軌跡</h2>
          <p className="section-desc">
            1年次から4年次、そして卒業まで。
            学び、挑戦し、成長してきた過程をご覧ください。
          </p>
        </div>

        <div className="journey-timeline reveal">
          <div className="journey-tabs reveal-stagger">
            {JOURNEY_DATA.map((item, i) => (
              <button
                key={item.year}
                className={`journey-tab ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                style={i === active ? { borderColor: accent, background: `${accent}0d` } : {}}
              >
                <span className="journey-tab-year" style={i === active ? { color: accent } : {}}>
                  {item.year}
                  {item.current && ' · NOW'}
                </span>
                <span className="journey-tab-title" style={i === active ? { color: accent } : {}}>
                  {item.title}
                </span>
                <span className="journey-tab-grade">{item.grade}</span>
              </button>
            ))}
          </div>

          <div className="journey-detail">
            <div className="journey-detail-head">
              <div className="journey-detail-year" style={{ color: accent }}>{data.year}</div>
              <div className="journey-detail-title-wrap">
                <h3>
                  {data.title} — {data.grade}
                  {data.current && (
                    <span style={{
                      display: 'inline-block',
                      marginLeft: 12,
                      padding: '2px 10px',
                      background: `${accent}15`,
                      color: accent,
                      borderRadius: 999,
                      fontSize: 11,
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      verticalAlign: 'middle',
                      border: `1px solid ${accent}33`,
                    }}>
                      現在学習中
                    </span>
                  )}
                  {data.upcoming && (
                    <span style={{
                      display: 'inline-block',
                      marginLeft: 12,
                      padding: '2px 10px',
                      background: 'rgba(250, 204, 21, 0.1)',
                      color: '#facc15',
                      borderRadius: 999,
                      fontSize: 11,
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      verticalAlign: 'middle',
                      border: '1px solid rgba(250, 204, 21, 0.2)',
                    }}>
                      今後追加予定
                    </span>
                  )}
                  {data.graduation && (
                    <span style={{
                      display: 'inline-block',
                      marginLeft: 12,
                      padding: '2px 10px',
                      background: `${accent}15`,
                      color: accent,
                      borderRadius: 999,
                      fontSize: 11,
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      verticalAlign: 'middle',
                      border: `1px solid ${accent}33`,
                    }}>
                      卒業予定
                    </span>
                  )}
                </h3>
                <p>{data.desc}</p>
              </div>
            </div>
            <div className="journey-detail-grid">
              <div className="journey-block">
                <h4 style={{ color: accent }}>
                  <span className="num" style={{ background: `${accent}22` }}>01</span> LEARNING
                </h4>
                <ul>
                  {data.learning.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="journey-block">
                <h4 style={{ color: accent }}>
                  <span className="num" style={{ background: `${accent}22` }}>02</span> TECHNOLOGIES
                </h4>
                <div className="journey-tech-tags">
                  {data.technologies.map((t, i) => <span className="tech-tag" key={i}>{t}</span>)}
                </div>
              </div>
              <div className="journey-block">
                <h4 style={{ color: accent }}>
                  <span className="num" style={{ background: `${accent}22` }}>03</span> PROJECTS
                </h4>
                <ul>
                  {data.projects.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="journey-block">
                <h4 style={{ color: accent }}>
                  <span className="num" style={{ background: `${accent}22` }}>04</span> WHAT I LEARNED
                </h4>
                <ul>
                  {data.learned.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SKILLS
// ============================================

function Skills({ accent }) {
  const levelLabels = {
    learning: 'Learning',
    project: 'Used in Projects',
    current: 'Currently Learning'
  };

  return (
    <section className="section bg-soft" id="skills">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-eyebrow" style={{ color: accent }}>Skills</div>
          <h2 className="section-title">スキルセット</h2>
          <p className="section-desc">
            4年間で学んできた技術と、現在進行形で学んでいる分野をご紹介します。
          </p>
        </div>

        <div className="skills-container reveal-stagger">
          {SKILL_DATA.map((cat, i) => (
            <div className="skill-category" key={i}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name={cat.icon} size={20} />
                </div>
                <h4>{cat.category}</h4>
              </div>
              <div className="skill-items">
                {cat.skills.map((skill, j) => (
                  <div className="skill-item" key={j}>
                    <span className="skill-name">{skill.name}</span>
                    <span
                      className={`skill-level ${skill.level}`}
                      style={skill.level === 'learning' ? { background: `${accent}15`, color: accent, borderColor: `${accent}33` } : {}}
                    >
                      {levelLabels[skill.level]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-legend reveal">
          <div className="skill-legend-item">
            <span className="dot" style={{ background: accent }}></span>
            Learning — 学習中
          </div>
          <div className="skill-legend-item">
            <span className="dot" style={{ background: '#14b8a6' }}></span>
            Used in Projects — プロジェクトで使用経験あり
          </div>
          <div className="skill-legend-item">
            <span className="dot" style={{ background: '#facc15' }}></span>
            Currently Learning — 現在重点的に学習中
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROJECTS
// ============================================

function Projects({ onOpenProject, accent }) {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-eyebrow" style={{ color: accent }}>Projects</div>
          <h2 className="section-title">プロジェクト</h2>
          <p className="section-desc">
            これまでに制作したプロジェクトの一部をご紹介します。
          </p>
        </div>

        {/* Featured — horizontal scroll */}
        <div className="projects-featured reveal-stagger">
          {FEATURED_PROJECTS.map((p) => (
            <div
              key={p.id}
              className="project-card-featured"
              onClick={() => onOpenProject(p)}
            >
              <div
                className="project-thumb"
                style={{ background: p.thumbColor }}
              >
                <div className="project-thumb-inner">
                  <div className="project-thumb-icon">{p.icon}</div>
                  <div className="project-thumb-text">{p.category}</div>
                </div>
                <div className="project-thumb-overlay">
                  <div className="project-thumb-overlay-content">
                    <span className="project-thumb-category">{p.category}</span>
                    <h3 className="project-thumb-title">{p.name}</h3>
                    <span className="project-thumb-cta">
                      View Detail <Icon name="arrow" size={14} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span
                    className="project-category"
                    style={{ background: `${accent}22`, color: accent }}
                  >
                    {p.category}
                  </span>
                  <span className="project-status">{p.status}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <div className="project-role">
                  <span>My Role:</span>
                  <strong>{p.role}</strong>
                  <span style={{ flex: 1 }}></span>
                  <span className="project-view-link" style={{ color: accent }}>
                    View Detail <Icon name="arrow" size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other */}
        <h3 className="projects-other-title reveal">Other Projects</h3>
        <div className="projects-other reveal-stagger">
          {OTHER_PROJECTS.map((p) => (
            <div
              key={p.id}
              className="project-card-small"
              onClick={() => onOpenProject(p)}
            >
              <div className="project-small-icon" style={{ background: `${accent}22`, color: accent }}>
                {p.icon}
              </div>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
              <div className="project-small-meta">{p.category} · {p.tech.join(', ')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROJECT DETAIL MODAL
// ============================================

function ProjectModal({ project, onClose, accent }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (project) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  const isFeatured = !!project.overview;

  const heroBg = project.thumbColor || 'linear-gradient(135deg, #1e40af, #3b82f6)';

  return (
    <div className={`modal-overlay open`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero" style={{ background: heroBg }}>
          <button className="modal-close" onClick={onClose} aria-label="閉じる">
            <Icon name="close" size={20} />
          </button>
          <div className="modal-hero-content">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', marginBottom: 8, opacity: 0.85, color: 'rgba(0,0,0,0.7)' }}>
              {project.category || 'Project'}
            </p>
            <h2 style={{ color: '#000' }}>{project.name}</h2>
            {project.subtitle && (
              <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: 14, marginTop: 4 }}>
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="modal-body">
          {isFeatured ? (
            <>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">01</span> Overview · 概要</h3>
                <p>{project.overview}</p>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">02</span> Background · 制作背景</h3>
                <p>{project.background}</p>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">03</span> Goal · 目標</h3>
                <p>{project.goal}</p>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">04</span> My Role · 担当</h3>
                <p>{project.myRole}</p>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">05</span> Technologies · 使用技術</h3>
                <div className="detail-tech-grid">
                  {project.technologies.map((t, i) => <span key={i}>{t}</span>)}
                </div>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">06</span> Process · 開発プロセス</h3>
                <ul>
                  {project.process.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">07</span> Problem · 課題</h3>
                <p>{project.problem}</p>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">08</span> Solution · 解決策</h3>
                <p>{project.solution}</p>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">09</span> Result · 成果</h3>
                <p>{project.result}</p>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">10</span> Learning · 学び</h3>
                <p>{project.learning}</p>
              </div>
              <div className="detail-links">
                <a href="#" className="detail-link-btn" onClick={(e) => e.preventDefault()}>
                  <Icon name="github" size={16} /> GitHub
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} className="detail-link-btn" target="_blank" rel="noopener noreferrer">
                    <Icon name="external" size={16} /> Demo
                  </a>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">01</span> Overview · 概要</h3>
                <p>{project.desc}</p>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">02</span> Technologies · 使用技術</h3>
                <div className="detail-tech-grid">
                  {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">03</span> Category · カテゴリ</h3>
                <p>{project.category}</p>
              </div>
              <div className="detail-section">
                <h3 style={{ color: accent }}><span className="num">04</span> Note · 備考</h3>
                <p>詳細は今後順次追加していく予定です。</p>
              </div>
              <div className="detail-links">
                <a href="#" className="detail-link-btn" onClick={(e) => e.preventDefault()}>
                  <Icon name="github" size={16} /> GitHub
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// CAREER
// ============================================

function Career({ accent }) {
  return (
    <section className="section bg-soft" id="career">
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-eyebrow" style={{ color: accent }}>Career &amp; Future</div>
          <h2 className="section-title">キャリア目標</h2>
          <p className="section-desc">
            将来は、ユーザーの課題やニーズを理解し、IT技術を活用して解決できるエンジニアになりたいと考えています。
          </p>
        </div>

        <div className="career-grid reveal-stagger">
          <div className="career-card">
            <div className="career-phase">Short Term</div>
            <h3>開発現場で実践経験を積む</h3>
            <p>
              まずは開発現場でプログラミング、Webシステム、データベースなどの
              実務経験を積み、チームメンバーと協力しながら、
              品質の高いシステムを開発できるエンジニアを目指します。
            </p>
            <div className="career-items">
              <div className="career-item">
                <span className="check" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name="check" size={10} />
                </span>
                プログラミング実務経験
              </div>
              <div className="career-item">
                <span className="check" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name="check" size={10} />
                </span>
                Webシステム開発
              </div>
              <div className="career-item">
                <span className="check" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name="check" size={10} />
                </span>
                チームでの開発
              </div>
            </div>
          </div>

          <div className="career-card current" style={{ borderColor: accent, boxShadow: `0 0 0 4px ${accent}12` }}>
            <div className="career-phase" style={{ color: accent }}>Middle Term</div>
            <h3>開発プロセス全体の理解を深める</h3>
            <p>
              その後、要件定義、設計、テストなど
              システム開発全体への理解を深めていきます。
            </p>
            <div className="career-items">
              <div className="career-item">
                <span className="check" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name="check" size={10} />
                </span>
                要件定義
              </div>
              <div className="career-item">
                <span className="check" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name="check" size={10} />
                </span>
                システム設計
              </div>
              <div className="career-item">
                <span className="check" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name="check" size={10} />
                </span>
                テスト / 品質管理
              </div>
            </div>
          </div>

          <div className="career-card">
            <div className="career-phase">Long Term</div>
            <h3>上流工程にも関わる<br />エンジニアへ成長</h3>
            <p>
              将来的にはプロジェクトマネジメントや上流工程にも関わり、
              技術だけでなくユーザーやチームの視点から課題を解決できる
              エンジニアへ成長したいと考えています。
            </p>
            <div className="career-items">
              <div className="career-item">
                <span className="check" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name="check" size={10} />
                </span>
                プロジェクトマネジメント
              </div>
              <div className="career-item">
                <span className="check" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name="check" size={10} />
                </span>
                上流工程への参画
              </div>
              <div className="career-item">
                <span className="check" style={{ background: `${accent}22`, color: accent }}>
                  <Icon name="check" size={10} />
                </span>
                ユーザー視点での課題解決
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT
// ============================================

function Contact({ accent }) {
  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="contact-inner">
          <div className="section-header reveal">
            <div className="section-eyebrow" style={{ color: accent }}>Contact</div>
            <h2 className="section-title">お問い合わせ</h2>
          </div>

          <div className="contact-card reveal">
            <h3>ご興味をお持ちいただき<br />ありがとうございます。</h3>
            <p className="lead">
              採用に関するご相談やご質問など、
              お気軽にご連絡ください。
            </p>
            <div className="contact-links">
              <a href="https://github.com/JoYaku" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-icon"><Icon name="github" size={18} /></span>
                GitHub
              </a>
              <button
                className="contact-link copyable"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText('siw24010018@class.siw.ac.jp');
                    const el = e.currentTarget;
                    el.classList.add('copied');
                    setTimeout(() => el.classList.remove('copied'), 1800);
                  } catch (err) {
                    console.error('コピー失敗:', err);
                  }
                }}
              >
                <span className="contact-link-icon"><Icon name="mail" size={18} /></span>
                siw24010018@class.siw.ac.jp
              </button>
            </div>
            <div className="contact-thanks">
              <strong>最後までご覧いただき、ありがとうございました。</strong><br />
              ご連絡を心よりお待ちしております。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================

function Footer({ accent }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-logo" style={{ background: accent, color: '#000' }}>
            JoYaku
          </div>
          <div className="footer-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#journey">JOURNEY</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Jo Yaku. All rights reserved.</p>
          <p className="jp">埼玉ITWEB専門学校 高度専門士課程 4年制 · 2028年3月卒業予定</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// APP
// ============================================

const HERO_IMAGE_URL = "assets/hero-bg.jpg";

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const accent = t.accentColor;

  // Scroll: nav style & active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 120;

      let current = 'home';
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Apply accent color CSS vars
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', accent);
    root.style.setProperty('--accent-600', accent);
    root.style.setProperty('--accent-100', `${accent}22`);
    root.style.setProperty('--accent-50', `${accent}0d`);
  }, [accent]);

  // Announce upgrade
  useEffect(() => {
    const announce = () => {
      window.parent.postMessage({ type: 'miaoda:upgrade:available', kind: 'interactive-prototype' }, '*');
    };
    announce();
    if (document.readyState !== 'complete') {
      window.addEventListener('load', announce, { once: true });
    }
  }, []);

  return (
    <>
      <Navigation
        activeSection={activeSection}
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        accent={accent}
      />

      <main>
        <Hero accent={accent} heroImage={HERO_IMAGE_URL} />
        <About accent={accent} />
        <Journey accent={accent} />
        <Skills accent={accent} />
        <Projects onOpenProject={setSelectedProject} accent={accent} />
        <Qualifications accent={accent} />
        <Career accent={accent} />
        <Contact accent={accent} />
      </main>

      <Footer accent={accent} />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} accent={accent} />

      <TweaksPanel>
        <TweakSection label="カラー" />
        <TweakColor
          label="アクセント"
          value={t.accentColor}
          options={['#a3e635', '#22d3ee', '#f472b6', '#fb923c', '#c084fc', '#4ade80']}
          onChange={(v) => setTweak('accentColor', v)}
        />
        <TweakSection label="スタイル" />
        <TweakRadio
          label="ヒーロー背景"
          value={t.heroStyle}
          options={['gradient', 'image']}
          onChange={(v) => setTweak('heroStyle', v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
