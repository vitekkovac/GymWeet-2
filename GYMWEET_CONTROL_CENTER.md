# GYMWEET CONTROL CENTER

> Hlavní checkpoint projektu GYMWEET.
> Tento soubor je zdroj pravdy pro navázání práce po novém chatu, přerušení práce nebo změně zařízení.

---

## 📍 AKTUÁLNÍ FÁZE

PHASE 0 — FOUNDATION

Aktuální Git branch:

`phase-0-foundation`

---

## ✅ POSLEDNÍ OVĚŘENÝ STAV

Projekt je v čistém a funkčním stavu.

- Production build: ✅ PASS
- Git working tree: ✅ CLEAN
- Lokální změny: žádné
- Poslední změny jsou pushnuté na GitHub

---

## ✅ DOKONČENÉ CHECKPOINTY

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

### Scope foundation

`a731bb3`

`Add domain scope foundation`

### App shell + routing + time

`c25061b`

`Add app shell routing and time foundation`

Oba checkpointy byly otestované a pushnuté na GitHub.

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

Pokračovat v:

PHASE 0 — FOUNDATION

Nejdříve zkontrolovat tento Control Center a aktuální stav Git branch.

Potom pokračovat dalším dosud nedokončeným foundation krokem.

---

## 🆘 POSTUP PŘI NOVÉM CHATU

Pokud konverzace dosáhne limitu:

1. otevřít nový chat
2. říct: „Pokračujeme GYMWEET podle CONTROL CENTER“
3. zkontrolovat `GYMWEET_CONTROL_CENTER.md`
4. zkontrolovat aktuální Git branch
5. zkontrolovat poslední commit
6. pokračovat od položky `DALŠÍ KROK`

NIC NEZAČÍNAT ZNOVU.