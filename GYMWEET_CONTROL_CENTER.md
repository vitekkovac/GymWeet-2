# GYMWEET CONTROL CENTER

> Hlavní checkpoint projektu GYMWEET.
> Tento soubor je zdroj pravdy pro navázání práce po novém chatu, přerušení práce nebo změně zařízení.

---

## 📍 AKTUÁLNÍ FÁZE

PHASE 1 — START / ONBOARDING

Aktuální Git branch:

`phase-1-start-onboarding`

Phase 0 — FOUNDATION: ✅ DOKONČENA

## ✅ POSLEDNÍ OVĚŘENÝ STAV

Projekt je v čistém a funkčním stavu.

- Production build: ✅ PASS
- Git working tree: ✅ CLEAN
- Lokální změny: žádné
- Poslední změny jsou pushnuté na GitHub

---

## ✅ DOKONČENÉ CHECKPOINTY
### Design system foundation

Hotovo:

- `app/src/styles/tokens.css`
- primitive color tokens
- semantic design tokens
- design tokens připojené k aplikaci
- základní komponenty sjednocené s design tokeny
- component foundation token audit dokončen
- 27 používaných chybějících tokenů doplněno
- po opravě: 0 chybějících `--gw-*` tokenů
- build: ✅ PASS
- lint: ✅ 0 warnings / 0 errors
### Dark / Light theme foundation

Hotovo:

- `app/src/app/theme.ts`
- `app/src/main.tsx` inicializuje theme při startu
- `app/src/index.css` používá semantic theme tokeny
- `data-theme="light"` / `data-theme="dark"` funguje
- výchozí theme: Light
- změna theme se ukládá do `localStorage`
- uložený Dark theme přežije reload
- uložený Light theme přežije reload
- globální pozadí a text reagují na theme
- build: ✅ PASS
- lint: ✅ 0 warnings / 0 errors
- runtime Light test: ✅ PASS
- runtime Dark test: ✅ PASS
### UI component foundation

Hotovo:

- Button
- Input
- Card
- Chip
- Toggle
- Progress
- Toast
- Alert
- Loading
- Skeleton
- IconButton
- ListRow
- SectionHeader
- Divider
- BottomNavigation
- SegmentedControl
- Modal

Komponenty jsou uložené v:

`app/src/components/`

### Runtime / config foundation

Hotovo:

- `app/src/app/errors/AppErrorBoundary.tsx`
- `app/src/config/env.ts`
- Error Boundary je připojený k aplikaci
- RouterProvider je připojený k aplikaci
- design tokens jsou načítané při startu aplikace
### Domain foundation

Hotovo:

- `app/src/domain/ids.ts`
- `app/src/domain/confidence.ts`
- `app/src/domain/provenance.ts`
- `app/src/domain/scope.ts`
- `app/src/domain/time.ts`

### App foundation

Hotovo:

- `app/src/app/router.tsx`
- `app/src/app/shell/AppShell.tsx`
- základní AppShell
- React Router Outlet
- základní routy aplikace

Aktuální hlavní routy:

- `/`
- `/today`
- `/workout`
- `/progress`
- `/profile`
- `/onboarding`

---

## ✅ POSLEDNÍ COMMITY
### Dark / Light theme foundation

`59ca05c`

`Add dark and light theme foundation`

Ověřeno:
- Light startup: ✅ PASS
- Light → Dark: ✅ PASS
- Dark persistence after reload: ✅ PASS
- Dark → Light: ✅ PASS
- Light persistence after reload: ✅ PASS
- build: ✅ PASS
- lint: ✅ PASS
### Scope foundation

`a731bb3`

`Add domain scope foundation`

### App shell + routing + time

`c25061b`

`Add app shell routing and time foundation`
### Component foundation design tokens

`5af3ea5`

`Complete component foundation design tokens`

Ověřeno:
- missing token audit: ✅ PASS
- build: ✅ PASS
- lint: ✅ PASS
Všechny výše uvedené checkpointy byly otestované a pushnuté na GitHub.

---

## 🧪 POSLEDNÍ TEST

Spuštěno:

`npm.cmd run build`

Výsledek:

✅ BUILD SUCCESS

Vite:
`v8.2.2`

---

## 🚫 NEDĚLAT ZNOVU

Při pokračování projektu neopakovat již dokončené checkpointy bez konkrétního důvodu.

Nevytvářet znovu:

- ids foundation
- confidence foundation
- provenance foundation
- scope foundation
- time foundation
- AppShell foundation
- základní router foundation

Nezačínat projekt od začátku.

Neobnovovat starou strukturu jen podle starších chatů.

GitHub + tento Control Center mají přednost před dohady.

---

## 🧭 PRAVIDLA VÝVOJE

Pracujeme v malých uzavřených krocích.

Každý důležitý krok:

1. implementovat
2. uložit
3. zkontrolovat diff/status
4. spustit build/test
5. commit
6. push
7. aktualizovat CONTROL CENTER

Nikdy neoznačit něco jako hotové pouze podle vzhledu.

---

## 🎨 PRODUCT / DESIGN SOURCE OF TRUTH

Master design:

`GYMWEET_MASTER_DESIGN.md`

Schválený GYMWEET Master Design se nemění bez výslovného rozhodnutí.

Dark + Light režim jsou součástí master systému.

Nové nápady nesmí svévolně přepisovat již schválenou architekturu.

---

## 📚 MASTER BIBLE

Master Bible / Blueprint zůstává hlavní produktovou specifikací GYMWEET.

Vývoj kódu musí navazovat na schválený Blueprint.

Nevynechávat části Blueprintu.

Nevymýšlet novou strukturu jen proto, že začal nový chat.

---

## ➡️ DALŠÍ KROK

PHASE 1 — START / ONBOARDING

Dokončeno:

- A01 — Vítej v GYMWEET ✅
- A02 — Plán, který se přizpůsobí tobě ✅
- A03 — Sleduj progres, který tě posouvá dál ✅
- A04 — Všechno na jednom místě pro tvůj progress ✅

Ověřeno:

- mobilní runtime ✅
- swipe mezi onboarding slidy ✅
- build ✅
- lint ✅
- Git checkpointy pushnuté ✅

Další cíl:

AUTH FLOW

První krok:

Login — „Přihlas se“

Vývoj pokračuje podle:

1. GYMWEET Master Bible / Blueprint
2. GYMWEET Master Design
3. Research Control Layer
4. Core loop priority

Hlavní research filtr:

„Dělá to GYMWEET lepším trenérem, nebo jen větší aplikací?“

Design onboarding obrazovek je zatím funkční základ.
Finální premium design polish proběhne před finálním spuštěním aplikace.

## 🆘 POSTUP PŘI NOVÉM CHATU

Pokud konverzace dosáhne limitu:

1. otevřít nový chat
2. říct: „Pokračujeme GYMWEET podle CONTROL CENTER“
3. zkontrolovat `GYMWEET_CONTROL_CENTER.md`
4. zkontrolovat aktuální Git branch
5. zkontrolovat poslední commit
6. pokračovat od položky `DALŠÍ KROK`

NIC NEZAČÍNAT ZNOVU.