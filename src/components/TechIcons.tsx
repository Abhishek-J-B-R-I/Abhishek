import React from 'react';

export function FlutterIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 166 202" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M103.5 0L0 103.5L31.8 135.3L166 1.1L103.5 0Z" fill="#42A5F5" />
      <path d="M103.5 101.4L49.5 155.4L81.3 187.2L135.3 133.2L103.5 101.4Z" fill="#02569B" />
      <path d="M81.3 187.2L103.5 201.6L166 139.1L135.3 133.2L81.3 187.2Z" fill="#01579B" />
      <path d="M49.5 155.4L81.3 187.2L135.3 133.2L103.5 101.4L49.5 155.4Z" fill="#29B6F6" />
    </svg>
  );
}

export function DartIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0L9.4 40.6L19 78.4L59.4 97L90.6 65.8L100 28.2L50 0Z" fill="#0081C6" />
      <path d="M19 78.4L59.4 97L90.6 65.8L38 43L19 78.4Z" fill="#006399" />
      <path d="M50 0L100 28.2L68 59L9.4 40.6L50 0Z" fill="#29B6F6" />
      <path d="M9.4 40.6L38 43L68 59L50 0L9.4 40.6Z" fill="#00B4AB" />
      <path d="M19 78.4L38 43L9.4 40.6L19 78.4Z" fill="#00796B" />
    </svg>
  );
}

export function FirebaseIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 115 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 56.6L36.8 27.2C37.8 25.3 40.8 25.4 41.5 27.5L52.8 62.8L21.5 56.6Z" fill="#FFA000" />
      <path d="M2.3 124.9L18.6 22.8C18.9 20.8 21.6 20.1 22.9 21.7L62.7 70.8L2.3 124.9Z" fill="#FF8F00" />
      <path d="M112.5 124.9L62.7 70.8L52.8 62.8L2.3 124.9L51.8 152.9C55.4 154.9 59.8 154.9 63.3 152.9L112.5 124.9Z" fill="#FFC107" />
      <path d="M112.5 124.9L96.2 22.8C95.9 20.8 93.2 20.1 91.9 21.7L62.7 70.8L112.5 124.9Z" fill="#FF8F00" />
    </svg>
  );
}

export function NodeIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 289" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M128 0L256 74V222L128 289L0 222V74L128 0Z" fill="#339933" />
      <path d="M128 25L232 85V205L128 260L24 205V85L128 25Z" fill="#026E00" />
      <path d="M128 50L208 96V188L128 234L48 188V96L128 50Z" fill="#339933" />
      <text x="128" y="160" fill="white" fontSize="70" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">JS</text>
    </svg>
  );
}

export function PythonIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M54.5 0C24.7 0 26.6 13 26.6 13L26.7 26.4H55V30.4H17.2C17.2 30.4 0 28.5 0 58.4C0 88.3 15.1 86.8 15.1 86.8H24.1V74.2C24.1 74.2 23.6 59.1 38.8 59.1H66.9C66.9 59.1 81.3 59.1 81.3 45.1V14.1C81.3 14.1 83.7 0 54.5 0ZM40.8 9.3C44.4 9.3 47.3 12.2 47.3 15.8C47.3 19.4 44.4 22.3 40.8 22.3C37.2 22.3 34.3 19.4 34.3 15.8C34.3 12.2 37.2 9.3 40.8 9.3Z" fill="#3776AB" />
      <path d="M55.5 110C85.3 110 83.4 97 83.4 97L83.3 83.6H55V79.6H92.8C92.8 79.6 110 81.5 110 51.6C110 21.7 94.9 23.2 94.9 23.2H85.9V35.8C85.9 35.8 86.4 50.9 71.2 50.9H43.1C43.1 50.9 28.7 50.9 28.7 64.9V95.9C28.7 95.9 26.3 110 55.5 110ZM69.2 100.7C65.6 100.7 62.7 97.8 62.7 94.2C62.7 90.6 65.6 87.7 69.2 87.7C72.8 87.7 75.7 90.6 75.7 94.2C75.7 97.8 72.8 100.7 69.2 100.7Z" fill="#FFD43B" />
    </svg>
  );
}

export function ReactIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function MysqlIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#00758F" />
      <path d="M30 65C30 50 40 40 50 35C45 45 42 55 45 65" stroke="#F29111" strokeWidth="6" strokeLinecap="round" />
      <path d="M50 35C60 40 70 50 70 65C62 60 55 58 45 65" stroke="#F29111" strokeWidth="6" strokeLinecap="round" />
      <circle cx="50" cy="30" r="4" fill="#FFFFFF" />
    </svg>
  );
}

export function RestApiIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <div className={`${className} rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200/60 dark:border-sky-800/60 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold font-mono text-[10px]`}>
      REST
    </div>
  );
}
