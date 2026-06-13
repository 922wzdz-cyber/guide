import { useState, useMemo, useRef, Fragment } from "react";
import { Search, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, Phone, Clock, Lightbulb, AlertTriangle, Check, ExternalLink } from "lucide-react";

const BRAND = "#F25C05";
const BRAND_SOFT = "#FFF1EA";
const WARN_SOFT = "#FFF6E5";
const WARN = "#D9820A";
const PANEL = "#EEF1F5";
const PAGE = "#F3F4F6";
const FONT = "'Pretendard Variable','Pretendard','Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',system-ui,sans-serif";

/* ---------- 글자 라벨이 들어간 화면 도식 ---------- */
function Mock({ name }) {
  const wrap = "w-full rounded-xl bg-white border border-slate-200 overflow-hidden";
  const bar = { backgroundColor: BRAND, color: "#fff" };
  switch (name) {
    case "appstore": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-400" style={{ backgroundColor: PANEL }}>앱스토어 / 플레이스토어</div>
        <div className="p-2.5">
          <div className="flex items-center gap-1.5 rounded-lg border-2 px-2 py-1.5 mb-2" style={{ borderColor: BRAND }}>
            <Search className="w-3 h-3 text-slate-400" /><span className="text-[11px] font-bold text-slate-700">콴다과외</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-extrabold text-white flex-shrink-0" style={{ backgroundColor: BRAND }}>과외</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-800 truncate">콴다과외: 1:1 맞춤 온라인 과외</div>
              <div className="text-[9px] text-slate-400 truncate">누구에게나 딱 맞는 인생선생님</div>
            </div>
            <div className="text-[10px] font-bold px-2.5 py-1 rounded-full border-2 flex-shrink-0" style={{ borderColor: BRAND, color: BRAND }}>받기</div>
          </div>
        </div>
      </div>
    );
    case "qandaapp": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-400" style={{ backgroundColor: PANEL }}>앱스토어 / 플레이스토어</div>
        <div className="p-2.5">
          <div className="flex items-center gap-1.5 rounded-lg border-2 px-2 py-1.5 mb-2" style={{ borderColor: BRAND }}>
            <Search className="w-3 h-3 text-slate-400" /><span className="text-[11px] font-bold text-slate-700">콴다</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 relative" style={{ backgroundColor: "#1A1A1A" }}>
              <div className="w-4 h-4 rounded-full bg-white" /><div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: BRAND }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-800 truncate">콴다 - 전 과목 AI 학습</div>
              <div className="text-[9px] text-slate-400 truncate">사진 찍으면 바로 풀이 검색</div>
            </div>
            <div className="text-[10px] font-bold px-2.5 py-1 rounded-full border-2 flex-shrink-0" style={{ borderColor: BRAND, color: BRAND }}>받기</div>
          </div>
        </div>
      </div>
    );
    case "country": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-500 text-center border-b border-slate-100">계정 설정</div>
        <div className="p-3">
          <div className="flex items-center justify-between rounded-lg border-2 px-3 py-2.5" style={{ borderColor: BRAND }}>
            <span className="text-[11px] font-bold text-slate-700">국가/지역</span>
            <span className="text-[11px] text-slate-500">대한민국 ›</span>
          </div>
          <div className="text-[9px] text-slate-400 mt-2 leading-relaxed">설정 &gt; Apple 계정 &gt; 미디어 및 구입 항목 &gt; 국가/지역</div>
        </div>
      </div>
    );
    case "login": return (
      <div className={wrap} style={{ maxWidth: 260, margin: "0 auto" }}>
        <div className="p-2.5 space-y-1.5">
          {[["Google 로그인", "#fff", "#334155", "border border-slate-200"], ["Kakao 로그인", "#FEE500", "#3A1D1D", ""], ["Facebook 로그인", "#4267B2", "#fff", ""], ["Naver 로그인", "#03C75A", "#fff", ""], ["Apple로 로그인", "#1A1A1A", "#fff", ""]].map((b, i) => (
            <div key={i} className={`text-[10px] font-bold rounded-md py-1.5 text-center ${b[3]}`} style={{ backgroundColor: b[1], color: b[2] }}>{b[0]}</div>
          ))}
        </div>
      </div>
    );
    case "findclass": return (
      <div className={wrap} style={{ maxWidth: 260, margin: "0 auto" }}>
        <div className="p-3.5 text-center">
          <div className="text-[11px] font-bold text-slate-800 mb-1">아직 신청한 수업이 없어요</div>
          <div className="text-[9px] text-slate-400 mb-3 leading-relaxed">수업을 신청했는데 보이지 않는다면<br />가져올 수 있는 수업을 찾아보세요.</div>
          <div className="text-[10px] font-bold text-white rounded-md py-1.5 mb-1.5" style={bar}>콴다과외 신청하기</div>
          <div className="text-[10px] font-bold rounded-md py-1.5 border-2" style={{ borderColor: BRAND, color: BRAND }}>수업 찾기</div>
        </div>
      </div>
    );
    case "appform": return (
      <div className={wrap} style={{ maxWidth: 260, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-500 text-center border-b border-slate-100">수업</div>
        <div className="p-3 text-center">
          <div className="text-[10px] font-bold text-slate-700 mb-1">아직 수업 신청서를 작성하지 않으셨네요!</div>
          <div className="text-[9px] text-slate-400 mb-3 leading-relaxed">딱 맞는 선생님을 빠르게 매칭하기 위해<br />꼭 결제 당일 내 제출해 주세요.</div>
          <div className="text-[10px] font-bold text-white rounded-md py-2" style={bar}>작성하기</div>
        </div>
      </div>
    );
    case "talk": return (
      <div className={wrap} style={{ maxWidth: 270, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 flex items-center gap-1.5 border-b border-slate-100">
          <div className="w-4 h-4 rounded-md flex items-center justify-center text-[7px] font-extrabold text-white" style={{ backgroundColor: BRAND }}>과외</div>
          <span className="text-[10px] font-bold text-slate-600">콴다과외</span>
          <span className="ml-auto text-[8px] font-bold text-slate-500 bg-yellow-300 rounded px-1">kakao</span>
        </div>
        <div className="p-2.5">
          <div className="rounded-lg p-2" style={{ backgroundColor: "#FEF6C8" }}>
            <div className="text-[10px] font-bold text-[#7A6A00] mb-1">알림톡 도착</div>
            <div className="text-[9px] text-slate-600 leading-relaxed">&lt;수업 신청서 작성 요청&gt;<br />작성하지 않으면 선생님 매칭이 지연돼요.</div>
          </div>
          <div className="text-[10px] font-bold rounded-md py-1.5 mt-2 text-center border-2" style={{ borderColor: BRAND, color: BRAND }}>수업신청서 작성</div>
        </div>
      </div>
    );
    case "timetable": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-700">수업 가능한 요일·시간 선택</div>
        <div className="px-2.5 pb-2.5">
          <div className="grid grid-cols-8 gap-px text-[8px]">
            <div></div>{["월","화","수","목","금","토","일"].map(d => <div key={d} className="text-center text-slate-500 font-bold pb-0.5">{d}</div>)}
            {["12시","13시","14시","15시"].map((t, r) => (
              <Fragment key={t}>
                <div className="text-slate-400 pr-0.5 text-right leading-4">{t}</div>
                {[0,1,2,3,4,5,6].map(c => {
                  let bg = "#F1F3F6";
                  if (r < 3 && c < 5) bg = "#FFE3D3";
                  if (r === 3 && (c < 2 || c === 4)) bg = BRAND;
                  return <div key={c} className="h-4 rounded-sm" style={{ backgroundColor: bg }} />;
                })}
              </Fragment>
            ))}
          </div>
          <div className="text-[8px] text-slate-400 mt-1.5">■ 선택 시간 / ▨ 혼잡 시간대</div>
        </div>
      </div>
    );
    case "filter": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="p-2.5 space-y-2">
          {[["선호하는 선생님 성별", ["여자", "남자", "상관 없음"], 2], ["전공 계열", ["문과", "이과", "상관 없음"], 1], ["입시 전형", ["정시", "수시", "상관 없음"], 1]].map((row, i) => (
            <div key={i}>
              <div className="text-[9px] font-bold text-slate-600 mb-1">{row[0]}</div>
              <div className="flex gap-1">
                {row[1].map((chip, j) => (
                  <span key={j} className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={j === row[2] ? { backgroundColor: "#2E3742", color: "#fff" } : { backgroundColor: "#EDEFF3", color: "#64748B" }}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    case "matching": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-700 border-b border-slate-100">수학(전범위)</div>
        <div className="p-2.5">
          <div className="flex items-center gap-2 rounded-lg border-2 p-2 mb-2" style={{ borderColor: BRAND }}>
            <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-xs flex-shrink-0">?</div>
            <div><div className="text-[10px] font-bold text-slate-800">인생선생님을 찾고 있어요</div><div className="text-[9px] text-slate-400">2영업일 내 매칭해 드릴게요!</div></div>
          </div>
          <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full" style={{ width: "65%", backgroundColor: "#1FC16B" }} /></div>
          <div className="text-[9px] text-slate-400 mt-1.5">매칭이 완료되면 알림톡으로 알려드려요</div>
        </div>
      </div>
    );
    case "teacher": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-700 border-b border-slate-100">수학(전범위)</div>
        <div className="p-2.5 flex items-center gap-2">
          <div className="w-9 h-9 rounded-full flex-shrink-0" style={{ backgroundColor: "#FFD9A8" }} />
          <div><div className="text-[10px] font-bold text-slate-800">강콴다 선생님</div><div className="text-[9px] text-slate-500">콴다대학교 수학</div><div className="text-[9px] text-slate-400">010-1234-5678</div></div>
        </div>
        <div className="px-2.5 pb-2.5 text-[9px] text-slate-400">매칭 완료 · 알림톡으로도 안내드려요</div>
      </div>
    );
    case "consult": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-700">상담에서 정하는 내용</div>
        <div className="p-2.5 space-y-1.5">
          {[["🎯", "학습 방향 설정"], ["📅", "수업 일정 논의"], ["📚", "교재 선정"]].map((r, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg p-1.5" style={{ backgroundColor: "#FCE8DC" }}>
              <span className="text-sm">{r[0]}</span><span className="text-[10px] font-bold text-slate-700">{r[1]}</span>
            </div>
          ))}
        </div>
      </div>
    );
    case "bookcheck": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="p-2.5 space-y-2">
          <div className="rounded-lg overflow-hidden border border-slate-100">
            <div className="px-2 py-1 text-[10px] font-bold flex items-center gap-1" style={{ backgroundColor: "#D6F2DF", color: "#1B7A45" }}>✓ 등록 가능한 교재</div>
            <div className="px-2 py-1.5 text-[9px] text-slate-500 leading-relaxed">시중 출판사 교재 · 인터넷 서점 구매 가능 교재</div>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-100">
            <div className="px-2 py-1 text-[10px] font-bold flex items-center gap-1" style={{ backgroundColor: "#FCE6CF", color: "#B45309" }}>! 등록 불가능한 교재</div>
            <div className="px-2 py-1.5 text-[9px] text-slate-500 leading-relaxed">교과서 · 사설 인강 교재 · 제휴 종료/절판 · 부록 교재</div>
          </div>
        </div>
      </div>
    );
    case "booksearch": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-2 text-[10px] font-extrabold" style={{ backgroundColor: "#8B5CF6", color: "#fff" }}>QANDA · 등록가능 교재 검색</div>
        <div className="p-2.5">
          <div className="flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1.5" style={{ borderColor: BRAND }}>
            <span className="text-[9px] text-slate-400 flex-1">교재 이름 또는 ISBN 검색</span><Search className="w-3 h-3" style={{ color: BRAND }} />
          </div>
          <div className="flex gap-1 mt-2 text-[8px]">{["초6","중1","중2","중3","고1","고2"].map(g => <span key={g} className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-bold">{g}</span>)}</div>
        </div>
      </div>
    );
    case "bookcover": return (
      <div className={wrap} style={{ maxWidth: 200, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-500 text-center border-b border-slate-100">교재 표지 촬영</div>
        <div className="p-3 flex justify-center">
          <div className="w-24 h-32 rounded-lg border-2 flex flex-col items-center justify-between py-3" style={{ borderColor: BRAND, backgroundColor: "#fff" }}>
            <div className="w-16 h-9 rounded" style={{ backgroundColor: "#FFE3D3" }} />
            <div className="text-[11px] font-extrabold italic text-slate-700">김콴다</div>
            <div className="text-[8px] text-slate-400">고2 수학 Ⅰ</div>
          </div>
        </div>
      </div>
    );
    case "bookwait": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-700 border-b border-slate-100">교재 등록 상태</div>
        <div className="p-2.5 flex items-start justify-between gap-1.5">
          {[["등록 전", "#EDEFF3", "#64748B", "#CBD3DD", "+"], ["심사 중", "#FFF1EA", BRAND, BRAND, "⏳"], ["등록 완료", "#E3F6EA", "#1B7A45", "#1F9D57", "✓"]].map((s, i) => (
            <Fragment key={i}>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full rounded-md border-2 flex items-center justify-center mb-1" style={{ aspectRatio: "3/4", borderColor: s[3], backgroundColor: s[1] }}>
                  <span className="text-base" style={{ color: s[2] }}>{s[4]}</span>
                </div>
                <div className="text-[9px] font-bold text-center" style={{ color: s[2] }}>{s[0]}</div>
              </div>
              {i < 2 && <span className="text-slate-300 text-xs self-center mt-5">›</span>}
            </Fragment>
          ))}
        </div>
        <div className="px-2.5 pb-2.5 text-[9px] text-slate-400 leading-relaxed">보유 교재 1~2일 · 미보유 교재 최대 7일 (영업일 기준)</div>
      </div>
    );
    case "envcheck": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-2 flex items-center gap-2 border-b border-slate-100">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold border-2" style={{ borderColor: BRAND, color: BRAND }}>콴다</div>
          <span className="text-[10px] font-bold text-slate-700">김콴다</span>
          <div className="ml-auto flex gap-0.5 items-end h-4">{[3,5,4,6,3,2].map((h, i) => <div key={i} className="w-1 rounded-sm" style={{ height: h * 2.5, backgroundColor: i < 3 ? BRAND : "#E2E6EC" }} />)}</div>
        </div>
        <div className="p-2.5 space-y-1.5">
          <div className="text-[10px] font-bold rounded-md py-1.5 text-center border-2 flex items-center justify-center gap-1" style={{ borderColor: BRAND, color: BRAND }}>▶ 스피커 테스트</div>
          <div className="text-[10px] font-bold text-white rounded-md py-1.5 text-center" style={bar}>입장</div>
        </div>
      </div>
    );
    case "plan": return (
      <div className={wrap} style={{ maxWidth: 280, margin: "0 auto" }}>
        <div className="px-2.5 py-1.5 text-[10px] font-extrabold" style={{ color: BRAND }}>01. 현재 학습 상태 확인</div>
        <div className="px-2.5 pb-2.5">
          <div className="text-[9px] font-bold text-slate-600 mb-1">01-1. 현재 성적 확인하기</div>
          <div className="grid grid-cols-2 gap-1 text-[8px]">
            <div className="rounded p-1.5" style={{ backgroundColor: PANEL }}><div className="font-bold text-slate-600">내신</div><div className="text-slate-400">95점 (1등급)</div></div>
            <div className="rounded p-1.5" style={{ backgroundColor: PANEL }}><div className="font-bold text-slate-600">모의고사</div><div className="text-slate-400">아직 치르지 않음</div></div>
          </div>
          <div className="text-[9px] font-bold text-slate-600 mt-2 mb-1">01-2. 학습 현황 확인하기</div>
          <div className="rounded p-1.5 text-[8px] text-slate-400" style={{ backgroundColor: PANEL }}>학습 형태 · 교재 · 진도 · 선행 여부</div>
        </div>
      </div>
    );
    case "replay": return (<MiniScreen label="수업 · 영어(전범위)">{[4,3,2].map((n)=>(<div key={n} className="flex items-center justify-between gap-2 rounded-lg border border-slate-100 p-2 mb-1.5"><div><div className="flex items-center gap-1"><span className="text-[10px] font-bold text-slate-700">{n}회차 수업</span><span className="text-[8px] px-1 py-0.5 rounded bg-slate-100 text-slate-500">완료</span></div><div className="text-[8px] text-slate-400">2026.00.00 (월) 22:00</div></div><span className="text-[9px] font-bold px-2 py-1 rounded text-white" style={{backgroundColor:BRAND}}>다시보기</span></div>))}</MiniScreen>);
    case "report": return (<MiniScreen label="수업 · 학습리포트"><div className="text-[9px] font-bold text-slate-400 mb-1">수업 태도</div><div className="space-y-1 mb-2">{[["🙋‍♀️","적극적으로 질문했어요"],["🔥","높은 집중력을 보여줬어요"]].map((r,i)=>(<div key={i} className="flex items-center gap-1.5 rounded-md border border-slate-100 px-1.5 py-1"><span className="text-[10px]">{r[0]}</span><span className="text-[9px] text-slate-600">{r[1]}</span></div>))}</div><div className="text-[9px] font-bold text-slate-400 mb-1">숙제 피드백</div><div className="flex items-center gap-1.5 rounded-md border border-slate-100 px-1.5 py-1"><span className="text-[10px]">💯</span><span className="text-[9px] text-slate-600">숙제를 모두 완료했어요</span></div></MiniScreen>);
    case "library_book": return (<MiniScreen label="교재 · 자료실"><div className="flex gap-1.5 mb-2 items-center"><span className="text-[9px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-0.5" style={{borderColor:BRAND,color:BRAND}}>교재 <ChevronDown className="w-2.5 h-2.5" /></span><span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">공통수학1</span></div><div className="flex gap-2 justify-center py-1">{["#3B6FB5","#C0392B","#1F9D57"].map((c,i)=>(<div key={i} className="rounded-sm border border-black/10 flex items-end justify-center pb-1.5" style={{width:34,height:46,backgroundColor:c}}><div className="w-5 h-1.5 rounded-sm bg-white/70"/></div>))}</div><div className="text-[8px] text-slate-400 mt-1.5">직접 등록한 교재를 볼 수 있어요</div></MiniScreen>);
    case "library": return (<MiniScreen label="콴다 컨텐츠 · 자료실"><div className="flex gap-1.5 mb-2 items-center"><span className="text-[9px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-0.5" style={{borderColor:BRAND,color:BRAND}}>콴다 컨텐츠 <ChevronDown className="w-2.5 h-2.5" /></span><span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">공통수학1</span></div><div className="flex gap-2 justify-center py-1">{[["#1E3A5F","이과"],["#1F5F3A","의대"],["#7A1F1F","약대"]].map((c,i)=>(<div key={i} className="flex flex-col items-center"><div className="rounded-sm border border-black/10 flex items-end justify-center pb-1.5" style={{width:34,height:46,backgroundColor:c[0]}}><div className="w-5 h-1.5 rounded-sm bg-white/70"/></div><span className="text-[7px] text-slate-500 mt-0.5">{c[1]}</span></div>))}</div><div className="text-[8px] text-slate-400 mt-0.5 text-center">합격생기부 · 선생님들의 생활기록부예요</div></MiniScreen>);
    case "library_pick": return (<MiniScreen label="자료실 · 교재 선택"><div className="flex gap-1.5 mb-2 items-center"><span className="text-[9px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-0.5" style={{borderColor:BRAND,color:BRAND}}>교재 <ChevronDown className="w-2.5 h-2.5" /></span><span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">공통수학1</span></div><div className="flex gap-2 justify-center py-1">{[["#3B6FB5",false],["#C0392B",true],["#1F9D57",false]].map((b,i)=>(<div key={i} className="rounded-sm flex items-end justify-center pb-1.5 relative" style={{width:34,height:46,backgroundColor:b[0],outline:b[1]?`2px solid ${BRAND}`:"1px solid rgba(0,0,0,0.1)",outlineOffset:b[1]?2:0}}>{b[1]&&<span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{backgroundColor:BRAND}}><Check className="w-2 h-2 text-white" /></span>}<div className="w-5 h-1.5 rounded-sm bg-white/70"/></div>))}</div><div className="text-[8px] text-slate-400 mt-1.5">풀 교재를 선택하면 바로 풀 수 있어요</div></MiniScreen>);
    case "homework": return (<MiniScreen label="숙제 제출"><div className="flex justify-end mb-1"><span className="text-[9px] font-bold px-1.5 py-0.5 rounded border" style={{borderColor:BRAND,color:BRAND}}>제출 5/20</span></div><div className="grid grid-cols-6 gap-1">{Array.from({length:12}).map((_,i)=>{const sel=i>=4&&i<=8;return(<div key={i} className="rounded border flex items-end justify-center pb-0.5" style={{height:24,backgroundColor:sel?"#1A1A1A":"#fff",borderColor:sel?BRAND:"#E2E6EC"}}>{sel&&<span className="text-white text-[7px]">✓</span>}</div>);})}</div><div className="text-[8px] text-slate-400 mt-1.5">풀이가 끝난 페이지를 선택하고 제출</div></MiniScreen>);
    case "premium": return (<MiniScreen label="콴다 앱 · 홈"><div className="flex items-center justify-center py-2"><div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{backgroundColor:BRAND_SOFT}}><span className="text-2xl">🧑‍🎓</span></div></div><div className="flex gap-2"><div className="flex-1 rounded-full py-1.5 flex items-center justify-center gap-1 bg-slate-200"><span className="text-xs">💬</span><span className="text-[9px] font-bold text-slate-600">말풍선</span></div><div className="flex-1 rounded-full py-1.5 flex items-center justify-center gap-1" style={{backgroundColor:"#1A1A1A"}}><span className="text-xs">📷</span><span className="text-[9px] font-bold text-white">카메라</span></div></div></MiniScreen>);
    case "coin": return (<MiniScreen label="콴다 앱 · 전체 메뉴"><div className="flex items-center justify-center pt-1 pb-2"><div className="w-11 h-11 rounded-full flex items-center justify-center" style={{backgroundColor:"#FEF3C7"}}><span className="text-xl">🪙</span></div></div><div className="flex rounded-lg overflow-hidden border border-slate-100"><div className="flex-1 text-center py-1.5 border-r border-slate-100"><div className="text-[8px] text-slate-400">내 구독</div><div className="text-[10px] font-bold text-slate-600">-</div></div><div className="flex-1 text-center py-1.5"><div className="text-[8px] text-slate-400">내 코인</div><div className="text-[10px] font-extrabold" style={{color:BRAND}}>74,000 C</div></div></div><div className="text-[8px] text-slate-400 mt-2 text-center">[전체 메뉴] 상단에서 코인을 확인해요</div></MiniScreen>);
    case "qna": return (<MiniScreen label="콴다 앱 · 선생님 Q&A"><div className="text-[9px] font-bold text-slate-600 mb-1.5">누구에게 질문할까요?</div><div className="rounded-lg border border-slate-100 p-2 flex items-center gap-2"><div className="w-7 h-7 rounded-full" style={{backgroundColor:"#F2A56B"}}/><div className="flex-1"><div className="text-[10px] font-bold text-slate-700">선생님</div><div className="text-[8px] text-slate-400">명문대 출신 · 추가 질문 가능</div></div><div className="flex items-center gap-0.5"><span className="text-xs">🪙</span><span className="text-[9px] font-bold text-slate-600">1350~</span></div></div><div className="text-[8px] text-slate-400 mt-1.5">코인으로 선생님께 1:1로 질문해요</div></MiniScreen>);
    case "schedule_pull": return (<MiniScreen label="수업 일정 변경 — 결제 시점"><div className="text-[9px] font-bold text-slate-600 mb-1">주 1회 (예시) · 매주 월, 4주차에 결제</div><WeekRow plan={[["수업"],["수업"],["수업"],["수업","결제"]]} /><div className="text-center text-[9px] font-bold my-2" style={{color:BRAND}}>↓ 한 주에 2회로 당겨 들으면</div><div className="text-[9px] font-bold text-slate-600 mb-1">주 2회로 당겨 소진 · 3주차에 결제</div><WeekRow plan={[["수업"],["수업","수업"],["수업","결제"],[]]} /><div className="text-[8px] mt-2" style={{color:BRAND}}>수업을 당겨 소진한 만큼 결제일도 앞당겨져요</div></MiniScreen>);
    case "absent": return (<MiniScreen label="수업 결석"><div className="rounded-lg p-2 text-center" style={{backgroundColor:WARN_SOFT}}><span className="text-[10px] font-bold" style={{color:"#B45309"}}>시작 15분 경과 시 무단결석</span></div><div className="text-[8px] text-slate-400 mt-1.5">최소 12시간 전 선생님께 알려주세요</div></MiniScreen>);
    case "pause": return (<MiniScreen label="수업 일시 중단"><div className="flex items-center justify-center py-4"><div className="flex gap-1.5"><div className="w-3 h-8 rounded-sm" style={{backgroundColor:BRAND}}/><div className="w-3 h-8 rounded-sm" style={{backgroundColor:BRAND}}/></div></div><div className="text-[8px] text-slate-400">2주 이상은 고객센터로 문의</div></MiniScreen>);
    case "rematch": return (<MiniScreen label="선생님 변경"><div className="text-[9px] text-slate-700 leading-relaxed mb-1.5">김콴다 선생님과 <span className="font-bold rounded px-1 py-0.5" style={{backgroundColor:"#E7ECFF",color:"#3B5BDB"}}>1월 18일(화) 18:00 ✎</span> 을 마지막으로 중등 수학 선생님을 변경합니다.</div><div className="text-[9px] text-slate-700 leading-relaxed mb-2">24시간 이내에 시작되는 수업 <span className="font-bold" style={{color:"#3B5BDB"}}>1회</span>는 진행 여부와 상관 없이 차감됩니다.</div><div className="rounded-lg border border-slate-100 p-1.5 mb-2"><div className="text-[8px] font-bold text-slate-500 mb-0.5">꼭 확인해 주세요</div><div className="text-[7px] text-slate-400 leading-relaxed">· 영업일 1~2일 내 변경<br />· 마지막 수업일은 신청 후 변경 불가</div></div><div className="text-[10px] font-bold text-white rounded-md py-2 text-center" style={{backgroundColor:BRAND}}>신청서 작성하기</div></MiniScreen>);
    case "rematch_progress": return (<MiniScreen label="재매칭 진행"><div className="rounded-lg border border-slate-100 p-2 mb-2"><div className="text-[10px] font-bold text-slate-700">중등 수학</div><div className="text-[8px] text-slate-400">변경 신청 접수 완료 · 영업일 3일 내 매칭</div></div><div className="flex items-center gap-1.5"><div className="flex-1 rounded-lg p-1.5 text-center" style={{backgroundColor:PANEL}}><div className="text-[8px] text-slate-400">이전 선생님</div><div className="text-[9px] font-bold text-slate-500">김콴다</div></div><span style={{color:BRAND}}>→</span><div className="flex-1 rounded-lg p-1.5 text-center" style={{backgroundColor:BRAND_SOFT}}><div className="text-[8px]" style={{color:BRAND}}>새 선생님</div><div className="text-[9px] font-bold" style={{color:BRAND}}>매칭 중</div></div></div><div className="text-[8px] text-slate-400 mt-2">학습 기록·리포트는 그대로 이어받아요</div></MiniScreen>);
    case "renew": return (<MiniScreen label="정기 결제"><Row t="마지막 수업 종료 시 자동 결제" /><Bar w="100%" /><div className="text-[8px] text-slate-400 mt-1.5">결제 7일 전 문자로 안내드려요</div></MiniScreen>);
    case "count": return (<MiniScreen label="수업 횟수·시간 변경"><div className="space-y-1.5"><div className="flex items-center justify-center gap-2 rounded-lg py-1.5" style={{backgroundColor:PANEL}}><span className="text-[10px] font-bold text-slate-400">주 1회</span><span style={{color:BRAND}}>→</span><span className="text-[10px] font-bold" style={{color:BRAND}}>주 2회</span></div><div className="flex items-center justify-center gap-2 rounded-lg py-1.5" style={{backgroundColor:PANEL}}><span className="text-[10px] font-bold text-slate-400">60분</span><span style={{color:BRAND}}>→</span><span className="text-[10px] font-bold" style={{color:BRAND}}>90분</span></div></div><div className="text-[8px] text-slate-400 text-center mt-1.5">변경은 고객센터로 문의해 주세요</div></MiniScreen>);
    case "card": return (<MiniScreen label="결제 관리"><div className="space-y-1.5"><div className="rounded-lg border-2 px-2 py-1.5 flex items-center justify-between" style={{borderColor:BRAND}}><div><div className="text-[10px] font-bold text-slate-700">결제 수단</div><div className="text-[8px] text-slate-400">OO카드 / **00</div></div><span className="text-slate-300 text-xs">›</span></div><div className="rounded-lg border border-slate-100 px-2 py-1.5 flex items-center justify-between"><span className="text-[10px] text-slate-600">정기 결제</span><span className="text-slate-300 text-xs">›</span></div><div className="rounded-lg border border-slate-100 px-2 py-1.5 flex items-center justify-between"><span className="text-[10px] text-slate-600">결제 내역</span><span className="text-slate-300 text-xs">›</span></div></div></MiniScreen>);
    case "fail": return (<MiniScreen label="결제 실패"><div className="rounded-lg p-2 text-center" style={{backgroundColor:WARN_SOFT}}><span className="text-[10px] font-bold" style={{color:"#B45309"}}>! 결제에 실패했어요</span></div><div className="text-[8px] text-slate-400 mt-1.5 text-center">사용 중인 계정에서 결제 수단 변경 후 문의</div></MiniScreen>);
    case "cancel": return (<MiniScreen label="정기 결제"><div className="flex items-center justify-between mb-1.5"><span className="text-[10px] font-bold text-slate-700">중등 수학</span><span className="text-[8px] font-bold px-2 py-0.5 rounded" style={{backgroundColor:BRAND_SOFT,color:BRAND}}>해지하기</span></div><div className="text-[9px] font-bold mb-1.5"><span style={{color:BRAND}}>0</span> <span className="text-slate-500">/ 0회</span></div><div className="rounded-lg p-1.5" style={{backgroundColor:PANEL}}><div className="text-[8px] text-slate-500 leading-relaxed">정기 결제 예정일은 수업 일정에 따라 달라져요.</div></div></MiniScreen>);
    case "refund": return (<MiniScreen label="환불"><div className="flex items-center justify-center gap-1 py-3"><span className="text-base font-extrabold" style={{color:BRAND}}>₩</span><span className="text-[11px] font-bold text-slate-600">남은 횟수만큼 환불</span></div><div className="text-[8px] text-slate-400 text-center">환불 신청은 고객센터로 접수해요</div></MiniScreen>);
    case "material": return (<MiniScreen label="수업장 · 자료 불러오기"><div className="flex items-center gap-1 border-b border-slate-100 pb-1.5 mb-2"><span className="text-slate-300 text-[9px]">⇤</span><div className="flex gap-1 ml-1">{Array.from({length:8}).map((_,i)=><div key={i} className="w-3.5 h-3.5 rounded-sm" style={{backgroundColor:i===2?"#D8DEE6":"#F1F3F6"}}/>)}</div></div><div className="flex items-start gap-2"><div className="w-7 h-7 rounded-md flex items-center justify-center text-white text-sm flex-shrink-0" style={{backgroundColor:BRAND}}>+</div><div className="flex-1 rounded-lg border border-slate-100 overflow-hidden">{[["📄","새 페이지"],["▦","줄 및 격자 페이지"],["📁","파일 업로드"],["🗂️","파일 관리자 열기"]].map((t,i)=>(<div key={i} className="flex items-center gap-1.5 text-[9px] text-slate-600 px-2 py-1.5 border-b border-slate-50 last:border-0"><span>{t[0]}</span><span>{t[1]}</span></div>))}</div></div></MiniScreen>);
    case "tools": return (<MiniScreen label="수업장 · 필기 도구"><div className="flex items-center gap-0.5 border-b border-slate-100 pb-1.5 mb-2 justify-between">{["▸","✋","✎","▭","⌫","⊞","T","🔗"].map((t,i)=>(<div key={i} className="w-4 h-4 rounded-sm flex items-center justify-center text-[8px]" style={{backgroundColor:i===2?"#D8DEE6":"transparent",color:"#475569"}}>{t}</div>))}</div><div className="flex gap-1.5 mb-2">{["✎","🖊","✦"].map((t,i)=><div key={i} className="w-5 h-5 rounded-md flex items-center justify-center text-[9px]" style={{backgroundColor:i===0?"#D8DEE6":"#F1F3F6"}}>{t}</div>)}</div><div className="grid grid-cols-6 gap-1">{["#2E3742","#E2E6EC","#EC6A5E","#5B8DEF","#F2C94C","#1A1A1A","#FFE34D","#16C7C0","#7A5230","#F2A9B8","#7FD3F7"].map((c,i)=>(<div key={i} className="w-3.5 h-3.5 rounded-full border border-black/10" style={{backgroundColor:c}}/>))}</div></MiniScreen>);
    case "error": return (<MiniScreen label="오류 해결"><div className="space-y-1"><Row t="앱 종료 후 재실행" /><Row t="최신 버전 업데이트" /><Row t="와이파이 재연결" /></div><div className="rounded-lg p-1.5 mt-2 flex items-center gap-1.5" style={{backgroundColor:BRAND_SOFT}}><span className="text-xs">📸</span><span className="text-[8px] font-bold" style={{color:BRAND}}>화면 캡처·녹화 후 고객센터 문의</span></div></MiniScreen>);
    case "account": return (<MiniScreen label="내 정보"><div className="flex justify-end mb-1"><span className="text-[8px] text-slate-400">로그아웃</span></div><div className="flex items-center gap-2 mb-2"><div className="w-9 h-9 rounded-full flex items-center justify-center" style={{backgroundColor:BRAND_SOFT}}><span className="text-base">🧑‍🎓</span></div><div><div className="text-[10px] font-bold text-slate-700">김콴다</div><div className="text-[8px] text-slate-400">G · Google 로그인</div></div></div><div className="space-y-1"><div className="rounded-lg border border-slate-100 px-2 py-1.5 flex items-center justify-between"><div><div className="text-[9px] font-bold text-slate-600">휴대폰 번호</div><div className="text-[8px] text-slate-400">010-****-****</div></div><span className="text-slate-300 text-[10px]">›</span></div><div className="rounded-lg border border-slate-100 px-2 py-1.5 flex items-center justify-between"><div><div className="text-[9px] font-bold text-slate-600">학교/학년</div><div className="text-[8px] text-slate-400">콴다고등학교 2학년</div></div><span className="text-slate-300 text-[10px]">›</span></div></div></MiniScreen>);
    case "support": return (<MiniScreen label="고객센터"><div className="space-y-1.5"><div className="rounded-lg p-2 flex items-center gap-2" style={{backgroundColor:BRAND_SOFT}}><span className="text-sm">💬</span><div><div className="text-[9px] font-bold text-slate-700">채팅 문의</div><div className="text-[8px] text-slate-400">평일 10~20시 · 주말·공휴일 10~18시</div></div></div><div className="rounded-lg p-2 flex items-center gap-2" style={{backgroundColor:PANEL}}><span className="text-sm">📞</span><div><div className="text-[9px] font-bold text-slate-700">전화 02-6956-9243</div><div className="text-[8px] text-slate-400">평일 10~20시 · 주말·공휴일 휴무</div></div></div></div></MiniScreen>);
    case "addsubject": return (<MiniScreen label="수강 과목"><div className="space-y-1.5"><div className="rounded-lg border border-slate-100 px-2 py-1.5 flex items-center gap-2"><span className="w-5 h-5 rounded-md flex items-center justify-center text-[9px]" style={{backgroundColor:PANEL}}>📐</span><span className="text-[10px] font-bold text-slate-700">중등 수학</span><span className="ml-auto text-[8px] text-slate-400">수강 중</span></div><div className="rounded-lg border border-slate-100 px-2 py-1.5 flex items-center gap-2"><span className="w-5 h-5 rounded-md flex items-center justify-center text-[9px]" style={{backgroundColor:PANEL}}>📖</span><span className="text-[10px] font-bold text-slate-700">중등 국어</span><span className="ml-auto text-[8px] text-slate-400">수강 중</span></div><div className="rounded-lg border-2 border-dashed px-2 py-1.5 flex items-center gap-2" style={{borderColor:BRAND}}><span className="w-5 h-5 rounded-md flex items-center justify-center text-white text-sm" style={{backgroundColor:BRAND}}>+</span><span className="text-[10px] font-bold" style={{color:BRAND}}>과목 추가하기</span></div></div><div className="text-[8px] text-slate-400 text-center mt-1.5">새 과목은 고객센터로 신청해요</div></MiniScreen>);
    case "trouble": return (<MiniScreen label="고객센터 접수 필요"><div className="rounded-lg p-2.5 text-center" style={{backgroundColor:"#FDE8E8"}}><span className="text-lg">⚠️</span><div className="text-[10px] font-bold mt-1" style={{color:"#C0392B"}}>선생님 노쇼·지연은 꼭 접수</div></div></MiniScreen>);
    default: return <div className="w-full h-24 rounded-xl" style={{ backgroundColor: PANEL }} />;
  }
}

function MiniScreen({ label, children }) {
  return (
    <div className="w-full rounded-xl bg-white border border-slate-200 overflow-hidden" style={{ maxWidth: 280, margin: "0 auto" }}>
      <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-500 border-b border-slate-100">{label}</div>
      <div className="p-2.5">{children}</div>
    </div>
  );
}
function WeekRow({ plan }) {
  return (
    <div className="flex gap-1">
      {plan.map((cell, w) => (
        <div key={w} className="flex-1 rounded-md border border-slate-100 p-1 text-center" style={{ minHeight: 44, backgroundColor: cell.length ? "#fff" : "#F8FAFC" }}>
          <div className="text-[7px] text-slate-400 mb-0.5">{w + 1}주차</div>
          {cell.length === 0 ? <div className="text-[8px] text-slate-300 mt-1">-</div> : cell.map((c, j) => (
            <div key={j} className="text-[7px] font-bold rounded px-0.5 py-0.5 mt-0.5" style={c === "결제" ? { backgroundColor: BRAND, color: "#fff" } : { backgroundColor: "#FEF3C7", color: "#7A6A00" }}>{c}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
function Row({ t }) { return <div className="text-[10px] text-slate-600 py-0.5">· {t}</div>; }
function Bar({ w }) { return <div className="h-1.5 rounded-full my-1" style={{ width: w, backgroundColor: "#E2E6EC" }} />; }
function Btn({ t }) { return <div className="text-[10px] font-bold text-white rounded-md py-1.5 text-center mt-1" style={{ backgroundColor: BRAND }}>{t}</div>; }


const steps = [
  { emoji: "📱", title: "앱 설치 및 로그인", time: "약 10분", kw: "앱 설치 다운로드 로그인 콴다과외 검색 계정 수업 찾기 가져오기", slides: [
    { illus: "appstore", title: [{ t: "콴다과외 앱을 " }, { t: "설치", b: true }, { t: "해요." }], points: [
      { t: "태블릿에서 앱스토어 또는 플레이스토어를 열어주세요." },
      { t: "'콴다'가 아닌 '콴다과외'를 검색해 설치해 주세요.", warn: true },
      { t: "수업은 태블릿에서만 수강할 수 있어요." }] },
    { illus: "country", title: [{ t: "콴다과외 앱 " }, { t: "검색이 안 돼요", b: true }, { t: "." }], points: [
      { t: "앱스토어 국가 설정이 대한민국이 아니면 검색되지 않을 수 있어요.", warn: true },
      { t: "[설정 > Apple 계정 > 미디어 및 구입 항목 > 국가/지역]에서 대한민국으로 바꿔주세요." }] },
    { illus: "login", title: [{ t: "앱에 " }, { t: "로그인", b: true }, { t: "해요." }], points: [
      { t: "Google·Kakao·Facebook·Naver·Apple 중 편한 방식으로 로그인해 주세요." },
      { t: "실제 수업을 들을 학생의 계정인지 꼭 확인해 주세요.", warn: true }] },
    { illus: "findclass", title: [{ t: "신청한 수업이 " }, { t: "없다고 나와요", b: true }, { t: "." }], points: [
      { t: "로그인했는데 수업이 안 보이면 [수업 찾기]를 눌러주세요." },
      { t: "결제한 계정의 휴대폰 번호로 인증하면 수업을 가져올 수 있어요." },
      { t: "내가 결제한 수업이 맞는지 꼭 확인해 주세요.", warn: true }] },
  ] },
  { emoji: "✏️", title: "수업신청서 작성", time: "약 7분", kw: "수업신청서 신청서 작성 제출 가능 시간 요일 선생님 조건 성별 전공 전형", slides: [
    { illus: "appform", title: [{ t: "수업신청서를 " }, { t: "작성", b: true }, { t: "해요." }], points: [
      { t: "앱에서 [작성하기] 버튼을 눌러 바로 작성할 수 있어요." },
      { t: "딱 맞는 선생님을 빠르게 매칭하려면 결제 당일 내 제출해 주세요." }] },
    { illus: "talk", title: [{ t: "카카오톡으로도 " }, { t: "안내", b: true }, { t: "드려요." }], points: [
      { t: "일정 시간 내 작성하지 않으면 카카오톡 알림톡으로 안내드려요." },
      { t: "알림톡의 [수업신청서 작성] 버튼으로도 작성할 수 있어요." }] },
    { illus: "timetable", title: [{ t: "수업 가능 " }, { t: "시간을 선택", b: true }, { t: "해요." }], points: [
      { t: "수업 가능한 요일·시간은 자유롭게 선택할 수 있어요." },
      { t: "가능한 시간대를 최대한 많이 체크하면 매칭이 빨라져요." },
      { t: "빗금 친 칸은 매칭이 느려질 수 있는 혼잡 시간대예요." }] },
    { illus: "filter", title: [{ t: "선생님 " }, { t: "조건을 선택", b: true }, { t: "해요." }], points: [
      { t: "선호 성별, 전공 계열, 입시 전형, 출신 대학을 선택할 수 있어요." },
      { t: "세부 요청 사항은 [기타] 메모란을 활용해 주세요." }] },
  ] },
  { emoji: "🤝", title: "선생님 매칭", time: "영업일 기준 2일", kw: "선생님 매칭 인생선생님 상담 연락 학습 방향 수업 일정 교재 선정", slides: [
    { illus: "matching", title: [{ t: "선생님을 " }, { t: "찾고 있어요", b: true }, { t: "." }], points: [
      { t: "수업신청서 작성 후 영업일 기준 2일 내 매칭돼요. (주말·공휴일 제외)" },
      { t: "매칭이 완료되면 카카오톡 알림톡으로 알려드려요." }] },
    { illus: "teacher", title: [{ t: "선생님 " }, { t: "정보를 확인", b: true }, { t: "해요." }], points: [
      { t: "매칭이 완료되면 앱과 카카오톡에서 선생님 정보를 확인할 수 있어요." },
      { t: "선생님이 3일 내로 연락드려요. 연락이 없으면 고객센터로 문의해 주세요." }] },
    { illus: "consult", title: [{ t: "선생님과 " }, { t: "상담", b: true }, { t: "해요." }], points: [
      { t: "학습 방향 설정 — 성적·학습 환경, 학습 목표와 수업 방식을 함께 정해요." },
      { t: "수업 일정 논의 — 첫 수업 날짜를 정하면 앱에 수업장이 생성돼요." },
      { t: "교재 선정 — 기존 교재를 쓸지, 새 교재를 추천받을지 정해요." }] },
  ] },
  { emoji: "📚", title: "교재 등록", time: "영업일 기준 2~7일", kw: "교재 등록 책 등록 가능 불가능 검색기 isbn 표지 촬영 승인 심사", slides: [
    { illus: "bookcheck", title: [{ t: "등록 전 " }, { t: "꼭 확인", b: true }, { t: "해 주세요." }],
      ok: ["현재 서점에서 판매 중인 시중 문제집·참고서 등은 모두 자유롭게 등록할 수 있어요."],
      no: [
        "교과서",
        "사설 인강 교재",
        "진학사 교재 (블랙라벨 등)",
        "다락원 교재 (다락원 마스터, 다락원 뉴코스 등)",
        "비상교육 교재 (만렙, 오투, 완자 등)",
        "에듀원 교재 (백발백중 등)",
        "절판 도서 등 현 시점 기준 인터넷 서점에서 구매 불가한 교재",
        "부록 교재",
        "전과목 세트 상품으로 출시된 교재는 세트 내 한 과목만 신청 불가",
        "개념원리, 능률, 쎄듀, 지학사, 키출판사, 마더텅 교재는 일부 교재만 신청 가능",
      ],
      points: [] },
    { illus: "booksearch", title: [{ t: "교재 검색기로 " }, { t: "확인", b: true }, { t: "해요." }], points: [
      { t: "교재명 또는 ISBN으로 등록 가능 여부를 검색할 수 있어요." },
      { t: "같은 시리즈라도 책마다 다를 수 있으니 꼭 확인해 주세요.", warn: true },
      { t: "학년별 인기 교재 정보도 함께 볼 수 있어요." }], link: { label: "교재 검색기 바로가기", url: "https://qanda-booklist.vercel.app/" } },
    { illus: "bookcover", title: [{ t: "교재를 " }, { t: "등록", b: true }, { t: "해요." }], points: [
      { t: "앱에서 수강 과목을 선택한 뒤 [자료실] > [교재 등록]을 눌러주세요." },
      { t: "교재 표지에 학생 이름을 직접 써서 촬영해 주세요. 포스트잇·노트는 안 돼요.", warn: true },
      { t: "표지와 학생 이름이 잘리지 않고 선명하게 나오도록 찍어주세요." }] },
    { illus: "bookwait", title: [{ t: "등록은 " }, { t: "미리", b: true }, { t: " 해주세요." }], points: [
      { t: "콴다가 보유한 교재는 영업일 기준 1~2일 내 승인돼요." },
      { t: "보유하지 않은 교재는 최대 영업일 기준 7일까지 걸릴 수 있어요." },
      { t: "교재 등록은 학생 계정에서 직접 진행해 주세요." }] },
  ] },
  { emoji: "🎒", title: "첫 수업 진행하기", time: "약 10분", kw: "첫 수업 진행 수업 환경 점검 마이크 스피커 펜 입장 학습 설계 계획", slides: [
    { illus: "envcheck", title: [{ t: "수업 환경을 " }, { t: "점검", b: true }, { t: "해요." }], points: [
      { t: "수업 12시간 전부터 수업장에 입장할 수 있어요." },
      { t: "마이크, 스피커, 펜이 정상적으로 작동하는지 확인해 주세요." },
      { t: "[스피커 테스트]로 소리를 미리 확인할 수 있어요." }] },
    { illus: "plan", title: [{ t: "1:1 맞춤 " }, { t: "학습 설계", b: true }, { t: "를 진행해요." }], points: [
      { t: "첫 수업에서는 1:1 맞춤 학습 설계를 진행해요." },
      { t: "현재 성적과 학습 현황을 확인해요. (내신·모의고사 성적, 학습 형태 등)" },
      { t: "앞으로의 수업 계획과 목표를 선생님과 함께 세워요." }] },
  ] },
];

const categories = [
  { id: "learning", title: "수업 활용 & 학습 관리", emoji: "📝", badge: "수업 활용", sub: ["다시보기", "자료실", "숙제", "콴다 프리미엄"],
    kw: "녹화 복습 다시보기 학습 리포트 생기부 합격생기부 코인 프리미엄 ai 말풍선 카메라 자료실 교재 숙제 제출",
    intro: "수업 다시보기, 학습 리포트, 자료실, 숙제, 콴다 프리미엄까지 한 번에 알아보세요.",
    blocks: [
      { heading: "수업 다시보기가 궁금해요.", illus: "replay", kw: "다시보기 녹화 복습 영상 다시 보기 재생",
        points: [
        { t: "수업 시간에 배운 내용을 다시 확인하고 싶으신가요?", lead: true },
        { t: "콴다과외는 모든 수업을 녹화해, 언제든 복습할 수 있어요." },
        { t: "'수업' 화면에서 회차별 [다시보기]를 눌러 영상을 볼 수 있어요." },
        { t: "첫 수업은 학부모님도 볼 수 있게 문자로 다시보기 링크가 전송돼요.", warn: true },
        { t: "다시보기가 재생되지 않으면 고객센터로 문의해 주세요.", help: true }] },
      { heading: "학습 리포트는 어떻게 보나요?", illus: "report", kw: "학습 리포트 피드백 이해도 학습리포트",
        points: [
        { t: "수업마다 선생님 피드백이 궁금하신가요?", lead: true },
        { t: "수업이 끝나면 '학습 관리'에 수업 내용·이해도·다음 학습 방향이 정리돼요." },
        { t: "'수업' 화면의 [학습리포트] 버튼을 눌러 확인해 보세요." },
        { t: "학부모님도 함께 확인할 수 있어요." },
        { t: "리포트가 보이지 않으면 고객센터로 문의해 주세요.", help: true }] },
      { heading: "자료실은 어디서 확인하나요?", illus: "library_book", illus2: "library", kw: "자료실 교재 콴다 컨텐츠 합격생기부 생기부 자료",
        points: [
        { t: "등록한 교재나 콴다 컨텐츠를 찾고 계신가요?", lead: true },
        { t: "앱 하단의 [자료실]에 접속하면 교재와 콴다 컨텐츠를 볼 수 있어요." },
        { t: "상단 버튼을 눌러 [교재]와 [콴다 컨텐츠]를 전환하고, 오른쪽에서 과목을 선택해요." },
        { t: "[교재]에서는 직접 등록한 교재를 확인할 수 있어요." },
        { t: "[콴다 컨텐츠]에서는 합격 생기부 등 콴다과외가 준비한 자료를 볼 수 있어요." },
        { t: "교재를 누르면 페이지 위에 바로 문제를 풀 수도 있어요." },
        { t: "자료가 보이지 않으면 고객센터로 문의해 주세요.", help: true }] },
      { heading: "숙제는 어디서 제출하나요?", illus: "library_pick", illus2: "homework", kw: "숙제 제출 풀이 자료실 과제",
        points: [
        { t: "푼 숙제를 어떻게 내야 할지 궁금하신가요?", lead: true },
        { t: "[자료실]에서 풀 교재를 선택하면 바로 문제를 풀 수 있어요." },
        { t: "풀이가 끝난 페이지를 선택하고 [제출] 버튼을 눌러주세요." },
        { t: "제출하면 다음 수업장에 자동으로 업로드돼요." },
        { t: "등록 교재 외 숙제는 수업장에 직접 올리거나 선생님께 따로 제출해 주세요.", warn: true },
        { t: "제출이 안 되면 고객센터로 문의해 주세요.", help: true }] },
      { heading: "콴다 프리미엄은 어떻게 활용하나요?", illus: "qandaapp", illus2: "premium", kw: "콴다 프리미엄 콴다 앱 설치 말풍선 카메라 ai 문제 풀이",
        points: [
        { t: "콴다과외를 수강하는 동안 콴다 앱을 100% 활용할 수 있어요.", lead: true },
        { t: "먼저 앱스토어·플레이스토어에서 '콴다' 앱을 설치하고 같은 계정으로 로그인해 주세요." },
        { t: "콴다 앱 홈에서 [말풍선] 버튼으로 AI에게 채팅으로 질문할 수 있어요." },
        { t: "[카메라] 버튼으로 문제 사진을 올리면 풀이와 동영상 풀이를 볼 수 있어요." },
        { t: "수업 시간 외에도 모르는 문제를 바로 해결할 수 있어요." },
        { t: "콴다 앱은 콴다과외 앱과 달라요. 콴다 앱 문의는 '콴다' 고객센터로 해주세요.", warn: true }] },
      { heading: "콴다 코인은 어떻게 사용하나요?", illus: "coin", illus2: "qna", kw: "콴다 코인 q&a 질문 포인트 선생님 질문",
        points: [
        { t: "매월 지급되는 콴다 코인을 어떻게 쓰는지 궁금하신가요?", lead: true },
        { t: "콴다 앱 [전체 메뉴] 상단의 [내 코인]에서 보유 코인을 확인할 수 있어요." },
        { t: "[스터디] > 선생님 Q&A에서 명문대 선생님께 1:1로 질문할 수 있어요." },
        { t: "코인은 선생님 Q&A에만 사용할 수 있어요." },
        { t: "코인은 수강하는 동안 매월 지급되며, 지급일로부터 30일이 지나면 소멸돼요.", warn: true }] },
    ] },
  { id: "schedule", title: "수업 일정 관리", emoji: "📅", badge: "수업 일정", sub: ["일정 변경", "수업 결석", "일시 중단"],
    kw: "일정 변경 수업 시간 변경 시각 날짜 조정 결석 무단결석 휴강 홀딩 중단",
    intro: "수업 일정을 변경하거나, 수업을 잠시 중단하는 방법을 알아보세요.",
    blocks: [
      { heading: "수업 일정을 변경하고 싶어요.", illus: "schedule_pull", kw: "수업 일정 변경 시간 시각 날짜 요일 조정",
        points: [
        { t: "고객센터를 거치지 않고 선생님과 직접 일정을 조정하면 돼요. (선생님이 변경해야 반영돼요.)" },
        { t: "회차를 당겨서 소진한 만큼 결제일도 앞당겨질 수 있어요." },
        { t: "주 2회 수업을 듣다가 앞으로 계속 주 3회로 늘리고 싶다면 재결제가 필요해요. 고객센터로 문의해 주세요.", warn: true }] },
      { heading: "예정된 수업을 못 들을 것 같아요.", illus: "absent", kw: "결석 못 들을 빠질 취소 무단결석 노쇼 연기",
        points: [
        { t: "수업 시작 12시간 전까지 선생님께 말씀하시면 다른 날로 변경할 수 있어요." },
        { t: "수업 시작 12시간 이내에 변경을 요청하면 수업이 차감될 수 있어요.", warn: true },
        { t: "수업 시작 후 15분이 지나도록 입장하지 않으면 무단결석으로 차감돼요.", warn: true }] },
      { heading: "수업을 잠시 중단하고 싶어요.", illus: "pause", kw: "중단 휴강 홀딩 잠시 멈춤 쉬기",
        points: [
        { t: "일시 휴강이 필요하면 선생님과 일정을 조정해 주세요." },
        { t: "2주 이상 중단(홀딩)이 필요하면 선생님과 상의 후 고객센터로 말씀해 주세요." }] },
    ] },
  { id: "rematch", title: "선생님 변경 (재매칭)", emoji: "🔄", badge: "재매칭", sub: ["선생님 변경 방법", "선생님 변경 규정"],
    kw: "선생님 변경 재매칭 교체 바꾸기 신청서",
    intro: "선생님이 마음에 들지 않거나 일정이 안 맞으면 언제든, 몇 번이든 선생님 변경을 요청할 수 있어요.",
    blocks: [
      { heading: "선생님을 바꾸고 싶어요.", illus: "rematch", kw: "선생님 변경 교체 바꾸기 재매칭 신청서 방법",
        points: [
        { t: "앱 > 마이 페이지 > [수업 및 선생님 관리]에서 변경할 과목을 선택해 주세요." },
        { t: "기존 선생님과의 마지막 수업일을 선택해 주세요. (다음 날 매칭이 초기화돼요.)" },
        { t: "[신청서 작성하기]를 눌러 변경 신청서를 작성하면 재매칭이 접수돼요." }] },
      { heading: "재매칭은 어떻게 진행되나요?", illus: "rematch_progress", kw: "선생님 변경 재매칭 진행 새 선생님 기간 규정 차감",
        points: [
        { t: "영업일 기준 3일 이내 새 선생님을 매칭해 드려요." },
        { t: "지금까지의 수업 기록과 학습 리포트는 그대로 남아 새 선생님이 이어받아요." },
        { t: "24시간 이내 수업이 예정되어 있을 경우 수업 차감 후 선생님 변경이 가능해요.", warn: true },
        { t: "변경 후 이전 선생님과 다시 매칭은 어려워요. 신중하게 결정해 주세요.", warn: true }] },
    ] },
  { id: "pay", title: "결제 & 환불", emoji: "💳", badge: "결제·환불", sub: ["과목 추가", "결제 수단", "정기결제", "환불"],
    kw: "결제 환불 수업 시간 변경 시수 90분 60분 연장 횟수 카드 카카오페이 정기결제 해지 영수증 쿠폰 과목 추가",
    intro: "과목 추가, 수업 연장, 횟수·시간 변경, 결제 수단·실패, 정기결제 중단, 환불을 안내해드려요.",
    blocks: [
      { heading: "다른 과목 수업도 추가하고 싶어요.", illus: "addsubject", kw: "과목 추가 다른 과목 새 과목 추가 수강 신청 늘리기",
        points: [
        { t: "지금 듣는 과목 외에 다른 과목 수업을 더 추가할 수 있어요.", lead: true },
        { t: "과목 추가는 고객센터로 연락해 주시면 도와드려요.", help: true },
        { t: "과목마다 선생님 매칭과 결제가 따로 진행돼요." }] },
      { heading: "다음 수업은 어떻게 이어지나요?", illus: "renew", kw: "정기 결제 자동 결제 다음 수업 연장 이어서",
        points: [
        { t: "결제한 수업 중 마지막 수업이 종료되는 시점에 정기 결제가 자동으로 진행돼요." },
        { t: "마지막 수업 일정이 변경되면 결제 예정일도 함께 변경돼요." },
        { t: "결제 내용은 결제 7일 전 문자로 미리 알려드려요." }] },
      { heading: "수업 횟수나 시간을 변경하고 싶어요.", illus: "count", kw: "수업 시간 변경 횟수 변경 시수 90분 60분 주 1회 주 2회 연장 늘리기 줄이기",
        points: [
        { t: "수업 횟수(주 1회 → 주 2회)나 수업 시간(60분 → 90분)을 바꿀 수 있어요.", lead: true },
        { t: "횟수나 시간을 변경하려면 고객센터로 연락해 주세요." },
        { t: "변경한 횟수·시간 상품으로 다시 결제하면 다음 회차부터 적용돼요." },
        { t: "수업 날짜·시각만 바꾸고 싶다면 '수업 일정 관리'에서 선생님과 직접 조정하면 돼요." }] },
      { heading: "결제 수단을 변경하고 싶어요.", illus: "card", kw: "결제 수단 변경 카드 카카오페이 결제 관리",
        points: [
        { t: "콴다과외 앱 [전체 메뉴] > [결제 관리] > [결제 수단]에서 변경할 수 있어요." },
        { t: "다른 카드 또는 카카오페이로 바꿀 수 있고, 다음 결제부터 적용돼요." }] },
      { heading: "결제에 실패했어요.", illus: "fail", kw: "결제 실패 오류 카드 한도 잔액",
        points: [
        { t: "학습자가 사용 중인 계정에서 결제 수단을 변경해 주세요." },
        { t: "결제 수단을 변경한 뒤 고객센터로 연락해 주시면 도와드려요.", help: true }] },
      { heading: "정기결제를 중단하고 싶어요.", illus: "cancel", kw: "정기 결제 해지 중단 취소 구독 끊기",
        points: [
        { t: "콴다과외 앱 [전체 메뉴] > [결제 관리] > [정기 결제]로 들어가 주세요." },
        { t: "우측 상단의 [해지하기] 버튼으로 정기 결제를 해지할 수 있어요." },
        { t: "해지하면 더 이상 결제되지 않으며, 현재 결제하신 수업까지는 모두 수강할 수 있어요." }] },
      { heading: "환불은 어떻게 진행되나요?", illus: "refund", kw: "환불 취소 쿠폰 정가 수강료 반환",
        points: [
        { t: "아직 시작하지 않은 수업은 전액 환불돼요." },
        { t: "이미 일부 수업을 들은 경우 남은 횟수만큼 환불해드려요." },
        { t: "24시간 이내 시작되는 수업이 예정되어 있으면 해당 회차를 차감한 뒤 환불돼요.", warn: true },
        { t: "할인 쿠폰 등을 사용했다면 수강료 정가를 기준으로 환불 처리돼요.", warn: true },
        { t: "환불 신청은 고객센터를 통해 접수해 주세요.", help: true }] },
    ] },
  { id: "classroom", title: "수업장 활용 / 오류", emoji: "🖥️", badge: "수업장", sub: ["자료 활용", "필기 도구", "소리/화면 오류"],
    kw: "수업장 자료 불러오기 새 페이지 파일 업로드 필기 펜 도형 텍스트 지우개 색상 소리 화면 접속 오류 끊김 캡처 녹화",
    intro: "수업장에서 자료와 도구를 활용하는 방법, 소리·화면·접속 오류 해결법을 알아보세요.",
    blocks: [
      { heading: "수업 중 자료를 불러오고 싶어요.", illus: "material", kw: "수업장 자료 불러오기 새 페이지 줄 격자 파일 업로드 파일 관리자",
        points: [
        { t: "수업장 왼쪽 위 [+] 버튼을 눌러주세요." },
        { t: "[새 페이지], [줄 및 격자 페이지]를 추가할 수 있어요." },
        { t: "[파일 업로드], [파일 관리자 열기]로 필요한 자료를 불러올 수 있어요." }] },
      { heading: "필기 도구는 어떻게 쓰나요?", illus: "tools", kw: "필기 도구 펜 도형 텍스트 지우개 색상 굵기 형광펜",
        points: [
        { t: "상단 도구 모음에서 펜, 도형, 텍스트, 지우개 등 다양한 도구를 쓸 수 있어요." },
        { t: "펜을 누르면 형광펜·지우개 등 세부 도구와 색상·굵기를 고를 수 있어요." }] },
      { heading: "소리·화면·접속 오류가 생겼어요.", illus: "error", kw: "소리 화면 접속 오류 끊김 안 들려 안 보여 버벅 캡처 녹화 안 됨",
        points: [
        { t: "화면이 안 열리면 앱을 완전히 종료한 뒤 다시 실행해 주세요." },
        { t: "앱을 최신 버전으로 업데이트하고 태블릿을 재시작해 주세요." },
        { t: "소리·화면이 끊기면 와이파이를 다시 연결하고 다른 앱을 종료해 주세요." },
        { t: "그래도 해결되지 않으면 지금 발생한 화면을 캡처하거나 화면 녹화해서 고객센터로 문의해 주세요.", help: true }] },
    ] },
  { id: "device", title: "기기 반납 & 계정", emoji: "📦", badge: "기기·계정", sub: ["개인정보 수정", "기기 반납"],
    kw: "개인정보 수정 휴대폰 번호 학교 학년 계정 기기 반납 태블릿 아이패드 갤럭시탭 초기화 회수 구성품",
    intro: "개인정보 수정과 대여 기기 반납 방법을 안내해드려요.",
    blocks: [
      { heading: "개인정보를 수정하고 싶어요.", illus: "account", kw: "개인정보 수정 휴대폰 번호 학교 학년 이름 계정 정보",
        points: [
        { t: "마이 페이지 > 상단의 학습자 이름을 선택해 주세요." },
        { t: "휴대폰 번호, 학교/학년 정보를 수정할 수 있어요." }] },
      { heading: "대여한 기기를 반납하고 싶어요.", kw: "기기 반납 태블릿 아이패드 갤럭시탭 초기화 회수 구성품 포장 반납하기",
        points: [
        { t: "다음과 같은 경우 대여 기기 반납을 위해 고객센터로 접수해 주세요.", lead: true },
        { t: "콴다과외 수업이 모두 종료된 경우" },
        { t: "개인 태블릿 기기를 사용하게 된 경우" },
        { t: "반납 전 계정 로그아웃과 공장 초기화를 반드시 진행해 주세요.", warn: true }],
        sections: [
          { head: "갤럭시탭 공장초기화 방법", steps: [
            "설정 → 계정 및 백업 → 사용 중인 구글 또는 삼성 계정을 로그아웃해요.",
            "연락처 프로필에서 '프로필 유지' 체크를 꼭 해제해요.",
            "설정 → 일반 → 초기화 메뉴를 선택해 초기화를 진행해요." ] },
          { head: "아이패드 초기화 방법", steps: [
            "설정 → 일반 → 재설정 → 모든 콘텐츠 및 설정 지우기로 들어가요.",
            "iCloud 백업을 원하면 [업로드 완료 후 지우기], 없으면 [지금 지우기]를 눌러요.",
            "안내에 따라 6자리 비밀번호 → 지우기 → Apple 암호를 입력하면 자동 초기화돼요." ] },
        ],
        links: [
          { label: "아이패드 반납 방법 안내", url: "https://tr4at.app.goo.gl/jyXm" },
          { label: "갤럭시탭 반납 방법 안내", url: "https://tr4at.app.goo.gl/GV32" },
        ],
        warns: [
          "위 [반납 방법 안내]에서 기기별 구성품을 확인하고, 초기화된 기기와 구성품을 누락 없이 포장해 주세요.",
          "패드 박스, 펜슬 등 모든 구성품과 상자까지 반납되어야 해요.",
          "담당 방문 기사님은 마지막 수업일 다음 날 방문해요. 직접 포장 후 전달해 주세요.",
          "박스에 다른 송장·테이프·스티커 등 이물질이 있으면 모두 제거해 주세요.",
          "구성품이 한 개라도 누락되면 비용이 청구될 수 있어요.",
          "택배 회수로만 반납 가능하고, 본사에 직접 방문 반납은 어려워요.",
          "구성품 외 개인 물품을 함께 보내면 돌려받기 어려우니 포장 전 꼭 확인해 주세요.",
        ] },
    ] },
  { id: "trouble", title: "문제 해결", emoji: "⚠️", badge: "문제 해결", sub: ["선생님 미참여", "잦은 일정 변경", "기타 문의"],
    kw: "문제 해결 노쇼 미참여 일정 변경 지연 보강 불편 고객센터 문의 운영시간",
    intro: "수업이 예정대로 진행되지 않거나 불편한 점이 있다면 고객센터로 접수해 주세요.",
    blocks: [
      { heading: "수업이 예정대로 진행되지 않았어요.", illus: "trouble", kw: "노쇼 미참여 선생님 안 들어옴 일정 지연 보강 잦은 변경 문제",
        points: [
        { t: "선생님이 수업에 참여하지 않은 경우(노쇼) 고객센터로 꼭 접수해 주세요." },
        { t: "선생님이 일정을 자주 변경하거나, 수업 일정 생성이 계속 지연되는 경우에도 알려주세요." },
        { t: "확인 후 보강 또는 선생님 변경 등으로 빠르게 조치해 드릴게요." },
        { t: "이런 경우는 반드시 고객센터(전화 또는 채팅) 접수가 필요해요. 앱에서 자동 처리되지 않아요.", warn: true }] },
      { heading: "그 외 다른 문제가 있어요.", illus: "support", kw: "기타 문의 불편 고객센터 운영시간 채팅 전화 상담",
        points: [
        { t: "콴다과외 이용 중 불편하신 점이 있다면 고객센터로 문의해 주세요.", lead: true },
        { t: "채팅 문의 — 평일 10:00 ~ 20:00 / 주말·공휴일 10:00 ~ 18:00" },
        { t: "전화 문의 (02-6956-9243) — 평일 10:00 ~ 20:00 / 주말·공휴일 휴무" },
        { t: "점심시간 12:00 ~ 13:00은 상담이 어려워요.", warn: true }] },
    ] },
];

function searchBlocks(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const rows = [];
  // 첫 수업 전 가이드(steps) 검색
  steps.forEach((s, si) => {
    const head = s.title.toLowerCase();
    const skw = (s.kw || "").toLowerCase();
    const slideText = s.slides.map((sl) => {
      const tt = sl.title.map((seg) => seg.t).join("");
      const pts = (sl.points || []).map((p) => p.t).join(" ");
      const ok = (sl.ok || []).join(" ");
      const no = (sl.no || []).join(" ");
      return tt + " " + pts + " " + ok + " " + no;
    }).join(" ").toLowerCase();
    const strongHay = head + " " + skw;
    const allHay = strongHay + " " + slideText;
    if (!tokens.every((t) => allHay.includes(t))) return;
    const strong = tokens.every((t) => strongHay.includes(t));
    let score = 0;
    if (head.includes(q) || skw.includes(q)) score += 200;
    tokens.forEach((t) => {
      if (head.includes(t)) score += 25;
      if (skw.includes(t)) score += 15;
      if (slideText.includes(t)) score += 4;
    });
    rows.push({ type: "step", si, title: s.title, sub: "첫 수업 전 가이드 · STEP " + (si + 1), emoji: s.emoji, score, strong });
  });
  // 이용 가이드(categories) 검색
  categories.forEach((cat) => {
    cat.blocks.forEach((b, bi) => {
      const head = b.heading.toLowerCase();
      const bkw = (b.kw || "").toLowerCase();
      const pts = b.points.map((p) => p.t).join(" ").toLowerCase();
      const ckw = (cat.kw || "").toLowerCase();
      const ctitle = cat.title.toLowerCase();
      const csub = cat.sub.join(" ").toLowerCase();
      const strongHay = head + " " + bkw;
      const allHay = strongHay + " " + pts + " " + ckw + " " + ctitle + " " + csub;
      if (!tokens.every((t) => allHay.includes(t))) return;
      const strong = tokens.every((t) => strongHay.includes(t));
      let score = 0;
      if (head.includes(q)) score += 200;
      if (bkw.includes(q)) score += 140;
      tokens.forEach((t) => {
        if (head.includes(t)) score += 25;
        if (bkw.includes(t)) score += 15;
        if (pts.includes(t)) score += 4;
        if (ckw.includes(t) || ctitle.includes(t)) score += 2;
      });
      rows.push({ type: "block", cat, bi, title: b.heading, sub: cat.title, emoji: cat.emoji, score, strong });
    });
  });
  const hasStrong = rows.some((r) => r.strong);
  const filtered = hasStrong ? rows.filter((r) => r.strong) : rows;
  return filtered.sort((a, b) => b.score - a.score).slice(0, 15);
}

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState(null);
  const [openStep, setOpenStep] = useState(null);
  const [openQ, setOpenQ] = useState(null);

  const searching = query.trim() !== "";
  const results = useMemo(() => (searching ? searchBlocks(query) : []), [query, searching]);

  const activeCatData = categories.find((c) => c.id === activeCat);
  const goHome = () => { setActiveCat(null); setOpenQ(null); };
  const openResult = (r) => {
    if (r.type === "step") {
      setActiveCat(null); setOpenQ(null); setOpenStep(r.si); setQuery("");
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
    } else {
      setActiveCat(r.cat.id); setOpenQ(r.bi); setQuery("");
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PAGE, fontFamily: FONT }}>
      <style>{`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');.hs::-webkit-scrollbar{display:none}.hs{scrollbar-width:none;-ms-overflow-style:none}`}</style>
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-7">
          <div className="inline-flex items-center justify-center mb-4">
            <svg width="52" height="52" viewBox="0 0 100 100" aria-label="콴다 로고">
              <circle cx="46" cy="44" r="34" fill="#111111" />
              <circle cx="46" cy="44" r="14" fill="#ffffff" />
              <circle cx="74" cy="72" r="15" fill="url(#qg)" />
              <defs>
                <linearGradient id="qg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF7A18" />
                  <stop offset="100%" stopColor="#F23005" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">무엇을 도와드릴까요?</h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">궁금한 점을 검색하거나 아래 항목에서 찾아보세요.</p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input type="text" value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveCat(null); }}
            placeholder="예: 시간 변경, 환불, 기기 반납"
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none transition"
            style={{ fontFamily: FONT }}
            onFocus={(e) => (e.target.style.boxShadow = `0 0 0 3px ${BRAND_SOFT}, 0 0 0 1px ${BRAND}`)}
            onBlur={(e) => (e.target.style.boxShadow = "")} />
        </div>

        {searching ? (
          <div>
            <p className="text-sm text-slate-600 mb-3">'{query}' 검색 결과 {results.length}개</p>
            {results.length === 0 ? (
              <div className="text-center py-12 text-slate-400"><Search className="w-8 h-8 mx-auto mb-3 opacity-50" /><p>검색 결과가 없어요.</p></div>
            ) : (
              <div className="space-y-2.5">
                {results.map((r, i) => (
                  <button key={i} onClick={() => openResult(r)} className="w-full flex items-center gap-3 bg-white rounded-2xl border-2 border-transparent shadow-sm px-4 py-3.5 text-left transition hover:shadow-md"
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = BRAND)} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: BRAND_SOFT }}>{r.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-slate-800 text-sm">{r.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{r.sub}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : activeCat ? (
          <div>
            <button onClick={openQ !== null ? () => setOpenQ(null) : goHome} className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 mb-4 transition"><ChevronLeft className="w-4 h-4" /> {openQ !== null ? "질문 목록으로" : "전체 항목으로"}</button>
            <div className="rounded-3xl p-6 mb-5 bg-white border border-slate-200">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>{activeCatData.badge} ✅</span>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ backgroundColor: BRAND_SOFT }}>{activeCatData.emoji}</div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{activeCatData.title}</h2>
                  <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{activeCatData.intro}</p>
                </div>
              </div>
            </div>
            {openQ === null ? (
              <div className="space-y-2.5">
                {activeCatData.blocks.map((b, i) => (
                  <button key={i} onClick={() => setOpenQ(i)} className="w-full flex items-center justify-between gap-3 bg-white rounded-2xl border border-slate-200 shadow-sm px-5 py-4 text-left transition hover:shadow-md"
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = BRAND)} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}>
                    <span className="font-bold text-slate-800 text-sm sm:text-base">{b.heading}</span>
                    <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
                  </button>
                ))}
              </div>
            ) : (
              <QSlide b={activeCatData.blocks[openQ]} />
            )}
          </div>
        ) : (
          <>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-1"><span className="text-xl">👋</span><h2 className="text-lg sm:text-xl font-bold text-slate-900">첫 수업 전 가이드</h2></div>
              <p className="text-slate-600 text-sm mb-4">첫 수업 전까지 필요한 준비 과정이에요. 단계를 눌러 자세히 확인해 보세요.</p>
              <div className="space-y-3">
                {steps.map((s, i) => {
                  const open = openStep === i;
                  return (
                    <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden transition" style={{ border: open ? `2px solid ${BRAND}` : "2px solid transparent" }}>
                      <button onClick={() => setOpenStep(open ? null : i)} className="w-full flex items-center gap-3 p-3.5 text-left">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: BRAND_SOFT }}>{s.emoji}</div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-900 text-sm sm:text-base">STEP {i + 1}. {s.title}</div>
                          <span className="inline-flex items-center gap-1 mt-1 text-xs px-2 py-0.5 rounded-full" style={{ color: BRAND, backgroundColor: BRAND_SOFT }}><Clock className="w-3 h-3" /> {s.time}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                      </button>
                      {open && <div className="px-3 pb-4 pt-1"><Carousel slides={s.slides} /></div>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2 mb-1"><span className="text-xl">📖</span><h2 className="text-lg sm:text-xl font-bold text-slate-900">콴다과외 이용 가이드</h2></div>
            <p className="text-sm text-slate-600 mb-4">수업을 시작한 뒤 궁금한 점을 카테고리별로 모았어요.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">{categories.map((c) => <CatCard key={c.id} c={c} onClick={() => { setActiveCat(c.id); setOpenQ(null); }} />)}</div>
          </>
        )}

        <div className="mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          <h2 className="text-base font-bold text-slate-900 mb-3">더 궁금한 점이 있나요?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://tutor.qanda.ai/" target="_blank" rel="noopener noreferrer" className="rounded-xl p-4 block transition hover:opacity-90" style={{ backgroundColor: BRAND_SOFT }}>
              <div className="flex items-center gap-2 mb-2"><MessageCircle className="w-5 h-5" style={{ color: BRAND }} /><span className="font-semibold text-slate-900 text-sm">채팅 문의</span><ExternalLink className="w-3.5 h-3.5 ml-auto" style={{ color: BRAND }} /></div>
              <p className="text-xs text-slate-700 leading-relaxed">평일 10:00 ~ 20:00<br />주말·공휴일 10:00 ~ 18:00</p>
            </a>
            <a href="tel:02-6956-9243" className="rounded-xl p-4 block transition hover:opacity-90" style={{ backgroundColor: PANEL }}>
              <div className="flex items-center gap-2 mb-2"><Phone className="w-5 h-5 text-slate-500" /><span className="font-semibold text-slate-900 text-sm">전화 문의 · 02-6956-9243</span><ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-400" /></div>
              <p className="text-xs text-slate-700 leading-relaxed">평일 10:00 ~ 20:00<br />주말·공휴일 휴무</p>
            </a>
          </div>
          <p className="text-xs text-slate-400 mt-3">※ 점심시간 12:00 ~ 13:00은 상담이 어려워요.</p>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">찾으시는 답변이 없다면 언제든 문의해 주세요.</p>
      </div>
    </div>
  );
}

function Carousel({ slides }) {
  const ref = useRef(null);
  const [idx, setIdx] = useState(0);
  const go = (i) => { const el = ref.current; if (!el) return; const n = Math.max(0, Math.min(slides.length - 1, i)); el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" }); };
  const onScroll = () => { const el = ref.current; if (!el) return; setIdx(Math.round(el.scrollLeft / el.clientWidth)); };
  return (
    <div>
      <div ref={ref} onScroll={onScroll} className="hs flex overflow-x-auto snap-x snap-mandatory">
        {slides.map((sl, i) => (<div key={i} className="flex-shrink-0 w-full snap-center px-0.5"><Slide sl={sl} /></div>))}
      </div>
      {slides.length > 1 && (
        <div className="flex items-center justify-between mt-3 px-1">
          <div className="flex gap-1.5 items-center">{slides.map((_, i) => (<span key={i} onClick={() => go(i)} className="rounded-full cursor-pointer transition-all" style={{ width: i === idx ? 18 : 7, height: 7, backgroundColor: i === idx ? BRAND : "#CBD3DD" }} />))}</div>
          <div className="flex gap-2">
            <button onClick={() => go(idx - 1)} disabled={idx === 0} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center disabled:opacity-40 border border-slate-200"><ChevronLeft className="w-4 h-4 text-slate-600" /></button>
            <button onClick={() => go(idx + 1)} disabled={idx === slides.length - 1} className="w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-40" style={{ backgroundColor: BRAND }}><ChevronRight className="w-4 h-4 text-white" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

function Slide({ sl }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {sl.illus !== "bookcheck" && (
        <div className="flex items-center justify-center py-5 px-4" style={{ backgroundColor: PANEL }}>
          <Mock name={sl.illus} />
        </div>
      )}
      <div className="p-5">
        <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 leading-snug">{sl.title.map((seg, i) => (<span key={i} style={seg.b ? { color: BRAND } : undefined}>{seg.t}</span>))}</h4>
        {sl.ok && (
          <div className="mb-3 rounded-xl overflow-hidden border border-slate-100">
            <div className="px-3 py-1.5 text-xs font-bold flex items-center gap-1.5" style={{ backgroundColor: "#E3F6EA", color: "#1B7A45" }}><Check className="w-3.5 h-3.5" /> 등록 가능한 교재</div>
            <ul className="p-3 space-y-1.5">
              {sl.ok.map((t, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-700 items-start"><Check className="w-3.5 h-3.5 flex-shrink-0 mt-1" style={{ color: "#1F9D57" }} /><span>{t}</span></li>
              ))}
            </ul>
          </div>
        )}
        {sl.no && (
          <div className="mb-1 rounded-xl overflow-hidden border border-slate-100">
            <div className="px-3 py-1.5 text-xs font-bold flex items-center gap-1.5" style={{ backgroundColor: "#FCE6CF", color: "#B45309" }}><AlertTriangle className="w-3.5 h-3.5" /> 등록 불가능한 교재</div>
            <ul className="p-3 space-y-1.5">
              {sl.no.map((t, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed items-start" style={{ color: "#B45309" }}><AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-1" style={{ color: WARN }} /><span>{t}</span></li>
              ))}
            </ul>
          </div>
        )}
        {sl.points.length > 0 && (
        <ul className="space-y-2.5">
          {sl.points.map((p, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed items-start" style={{ color: p.warn ? "#B45309" : "#334155" }}>
              {p.warn ? <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: WARN }} /> : <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: BRAND_SOFT }}><Check className="w-3 h-3" style={{ color: BRAND }} /></span>}
              <span>{p.t}</span>
            </li>
          ))}
        </ul>
        )}
        {sl.link && (
          <a href={sl.link.url} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-1.5 w-full py-3 rounded-xl text-sm font-bold text-white transition hover:opacity-90" style={{ backgroundColor: BRAND }}>
            {sl.link.label} <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function CatCard({ c, onClick }) {
  return (
    <button onClick={onClick} className="bg-white rounded-2xl p-4 sm:p-5 text-left border-2 border-transparent transition"
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = BRAND; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.transform = ""; }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3" style={{ backgroundColor: BRAND_SOFT }}>{c.emoji}</div>
      <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2 leading-snug">{c.title}</h3>
      <div className="flex flex-wrap gap-1">{c.sub.map((t) => (<span key={t} className="text-[11px] text-slate-500 rounded-full px-2 py-0.5" style={{ backgroundColor: PANEL }}>{t}</span>))}</div>
    </button>
  );
}

function QSlide({ b }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {b.illus && (
        <div className="flex flex-col items-center justify-center gap-3 py-5 px-4" style={{ backgroundColor: PANEL }}>
          <Mock name={b.illus} />
          {b.illus2 && <Mock name={b.illus2} />}
        </div>
      )}
      <div className="p-5">
        <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 leading-snug">{b.heading}</h4>
        {b.points.filter((p) => p.lead).map((p, i) => (
          <p key={i} className="text-sm font-bold mb-3 leading-relaxed" style={{ color: BRAND }}>{p.t}</p>
        ))}
        <ul className="space-y-2.5">
          {b.points.filter((p) => !p.lead && !p.help).map((p, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed items-start" style={{ color: p.warn ? "#B45309" : "#334155" }}>
              {p.warn ? <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: WARN }} />
                : p.tip ? <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: BRAND }} />
                : <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: BRAND_SOFT }}><Check className="w-3 h-3" style={{ color: BRAND }} /></span>}
              <span>{p.t}</span>
            </li>
          ))}
        </ul>
        {b.sections && b.sections.map((s, i) => (
          <div key={i} className="mt-3 rounded-xl border border-slate-100 p-3">
            <div className="text-xs font-bold text-slate-700 mb-2">{s.head}</div>
            <ol className="space-y-1.5">
              {s.steps.map((st, j) => (
                <li key={j} className="flex gap-2 text-xs text-slate-600 leading-relaxed">
                  <span className="flex-shrink-0 w-4 h-4 rounded-md text-white text-[9px] flex items-center justify-center font-bold mt-0.5" style={{ backgroundColor: BRAND }}>{j + 1}</span>
                  <span>{st}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
        {b.links && (
          <div className="mt-3 space-y-2">
            {b.links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-bold border-2 transition hover:opacity-90" style={{ borderColor: BRAND, color: BRAND }}>
                {l.label} <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}
        {b.warns && (
          <div className="mt-3 rounded-xl p-3" style={{ backgroundColor: WARN_SOFT }}>
            <div className="flex items-center gap-1.5 mb-1.5"><AlertTriangle className="w-4 h-4" style={{ color: WARN }} /><span className="text-xs font-bold" style={{ color: "#B45309" }}>반납 전 꼭 확인해 주세요</span></div>
            <ul className="space-y-1">
              {b.warns.map((w, i) => (<li key={i} className="text-xs leading-relaxed" style={{ color: "#B45309" }}>· {w}</li>))}
            </ul>
          </div>
        )}
        {b.points.filter((p) => p.help).map((p, i) => (
          <div key={i} className="mt-3 flex gap-2 items-start rounded-xl p-3" style={{ backgroundColor: BRAND_SOFT }}>
            <MessageCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: BRAND }} />
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{p.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
