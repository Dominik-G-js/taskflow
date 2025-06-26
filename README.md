#  Kanban Task Manager

Tento projekt je plnohodnotná full-stack webová aplikace pro správu úkolů ve stylu Kanban nástěnky. Uživatelé mohou vytvářet, aktualizovat, mazat a vizuálně přesouvat úkoly mezi sloupci. Aplikace byla vytvořena jako portfolio piece s cílem demonstrovat schopnost postavit a nasadit kompletní aplikaci od databáze až po interaktivní uživatelské rozhraní.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

**[🚀 Živé Demo na GitHub Pages](https://dominik-g-js.github.io/taskflow/)**

---

## 📸 Náhled aplikace

![image](https://github.com/user-attachments/assets/44936435-07be-4303-8fe7-4779bc660d2e)


---

## ✨ Klíčové funkce

* **Plná CRUD funkcionalita:** Uživatelé mohou vytvářet, číst, aktualizovat a mazat úkoly.
* **Interaktivní Kanban nástěnka:** Úkoly jsou vizuálně rozděleny do sloupců podle jejich stavu (To Do, In Progress, Done).
* **Drag-and-Drop:** Intuitivní přesouvání úkolů mezi sloupci myší pro změnu jejich stavu.
* **Optimistic Updates:** Změny v UI (jako přesun úkolu) se projeví okamžitě, ještě před potvrzením ze serveru, což zajišťuje bleskově rychlý uživatelský zážitek.
* **Vlastní REST API:** Veškerá komunikace probíhá přes vlastní backend postavený na Node.js a Express.js.

---

## 🛠️ Použité technologie

Projekt je rozdělen na dvě hlavní části: frontend (klient) a backend (server), každá s vlastním stackem moderních technologií.

### Frontend (`/client`)

| Technologie | Účel a přínos |
| :--- | :--- |
| **React (s Vite)** | Základní knihovna pro tvorbu rychlého a interaktivního uživatelského rozhraní. |
| **TypeScript** | Zajišťuje typovou bezpečnost a usnadňuje údržbu kódu. |
| **TanStack Query** | Robustní správa dat z API, včetně cachování, automatické aktualizace a implementace optimistických aktualizací pro skvělé UX. |
| **Axios** | Moderní a pohodlný klient pro provádění HTTP požadavků na backend. |
| **`@hello-pangea/dnd`** | Udržovaná a moderní knihovna pro implementaci drag-and-drop funkčnosti. |
| **Shadcn/ui & TailwindCSS** | Pro rychlou tvorbu profesionálně vypadajícího a konzistentního designu. |

### Backend (`/server`)

| Technologie | Účel a přínos |
| :--- | :--- |
| **Node.js + Express.js**| Vytvoření rychlého a spolehlivého REST API serveru. |
| **Prisma** | Moderní ORM, který zjednodušuje a zabezpečuje komunikaci s databází pomocí typově bezpečných dotazů. |
| **PostgreSQL & SQLite** | Projekt je nakonfigurován pro běh s PostgreSQL v produkci (na Render.com) a se souborovou databází SQLite pro lokální vývoj. |
| **CORS** | Middleware pro bezpečné povolení komunikace mezi frontendem a backendem na různých doménách. |

---

## 🔧 Instalace a spuštění lokálně

Projekt vyžaduje spuštění backendu i frontendu v oddělených terminálech.

1.  **Naklonujte repozitář:**
    ```bash
    git clone [https://github.com/Dominik-G-js/taskflow.git](https://github.com/Dominik-G-js/taskflow.git)
    cd taskflow
    ```

2.  **Nastavení Backendu:**
    ```bash
    cd server
    npm install
    # Vytvořte .env soubor a vložte DATABASE_URL="file:./dev.db"
    npx prisma migrate dev
    npm run dev
    ```
    *Server nyní běží na `http://localhost:3000`.*

3.  **Nastavení Frontendu (v druhém terminálu):**
    ```bash
    cd client
    npm install
    npm run dev
    ```
    *Aplikace je dostupná na `http://localhost:5173` (nebo podobném portu).*

---

## 🚀 Nasazení (Deployment)

Aplikace je plně nasazená a funkční:
* **Backend** je nasazený jako Web Service na **Render.com** s využitím PostgreSQL databáze.
* **Frontend** je nasazený jako statická stránka na **GitHub Pages**.

---

## ✍️ Autor

**Dominik G.**

* **GitHub:** [@Dominik-G-js](https://github.com/Dominik-G-js)
* **LinkedIn:** [linkedin.com/in/dominik-g-9aab2b225/](https://www.linkedin.com/in/dominik-g-9aab2b225/)
