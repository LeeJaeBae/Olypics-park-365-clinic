"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/navigation";

export default function PageNavigation() {
  const pathname = usePathname();
  
  // 현재 페이지의 인덱스 찾기
  const currentIndex = navItems.findIndex(item => item.href === pathname);
  
  // 이전 페이지와 다음 페이지 정보
  const prevPage = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextPage = currentIndex < navItems.length - 1 && currentIndex !== -1 
    ? navItems[currentIndex + 1] 
    : null;

  // 페이지가 라우트 목록에 없으면 네비게이션을 표시하지 않음
  if (currentIndex === -1) return null;

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          {/* 이전 페이지 버튼 */}
          <div className="flex-1">
            {prevPage ? (
              <Link 
                href={prevPage.href}
                className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium font-space-grotesk">{prevPage.label}</span>
              </Link>
            ) : (
              <div className="invisible">
                <span className="inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">이전</span>
                </span>
              </div>
            )}
          </div>

          {/* 다음 페이지 버튼 */}
          <div className="flex-1 text-right">
            {nextPage ? (
              <Link 
                href={nextPage.href}
                className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity group justify-end"
              >
                <span className="text-sm font-medium font-space-grotesk">{nextPage.label}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div className="invisible inline-flex items-center gap-2 justify-end">
                <span className="text-sm">다음</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}