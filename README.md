# Project Name

A modern, type-safe, full-stack web application built with **TanStack Start**, **React**, **TypeScript**, and a production-ready server architecture.

The project is designed around a strongly typed end-to-end development experience, server-side rendering, efficient data fetching, and a clean separation between UI, application logic, API procedures, and persistence.

---

## ✨ Features

* ⚡ **TanStack Start** — Full-stack React framework
* 🧭 **TanStack Router** — Type-safe file-based routing
* 🔄 **TanStack Query** — Server-state management, caching, mutations, and invalidation
* 🔌 **oRPC** — End-to-end type-safe RPC APIs
* 🗄️ **Drizzle ORM** — Type-safe SQL database access
* 🐘 **PostgreSQL** — Relational database
* 🎨 **Tailwind CSS** — Utility-first styling
* 🧩 **shadcn/ui** — Accessible and composable UI components
* ⚛️ **React Compiler** — Automatic React optimization
* 📦 **Vite** — Fast development and production build tooling
* 🚀 **Nitro** — Deployment/runtime abstraction
* 🧰 **TanStack Devtools** — Development and debugging tools
* 📱 SSR-ready and suitable for modern web applications
* 🔒 Server/client boundaries for secure server-side operations

---

## 🏗️ Tech Stack

| Layer          | Technology        |
| -------------- | ----------------- |
| Framework      | TanStack Start    |
| UI             | React             |
| Language       | TypeScript        |
| Routing        | TanStack Router   |
| Server State   | TanStack Query    |
| API            | oRPC              |
| ORM            | Drizzle ORM       |
| Database       | PostgreSQL        |
| Styling        | Tailwind CSS      |
| Components     | shadcn/ui         |
| Build Tool     | Vite              |
| Server Runtime | Nitro             |
| Devtools       | TanStack Devtools |

---

## 🧠 Architecture

The application follows a layered full-stack architecture:

```text
┌─────────────────────────────────────────────┐
│                   Browser                   │
│                                             │
│  React + TanStack Query + TanStack Router  │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│              TanStack Start                │
│                                             │
│  SSR • Routing • Server Functions • Vite   │
└──────────────────────┬──────────────────────┘
                       │
              ┌────────┴────────┐
              ▼                 ▼
        ┌──────────┐       ┌──────────┐
        │  oRPC    │       │  Server  │
        │   API    │       │ Functions│
        └────┬─────┘       └────┬─────┘
             │                  │
             └────────┬─────────┘
                      ▼
               ┌─────────────┐
               │   Drizzle   │
               │     ORM     │
               └──────┬──────┘
                      │
                      ▼
               ┌─────────────┐
               │ PostgreSQL  │
               └─────────────┘


                Deployment Layer
                       │
                       ▼
                    Nitro
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Vercel        Node.js      Render
```

### Responsibility boundaries

#### TanStack Start

Responsible for:

* SSR
* Server functions
* Application lifecycle
* Client/server builds
* Integration with Vite

#### TanStack Router

Responsible for:

* File-based routing
* Route loaders
* Navigation
* Route context
* Search params
* Route-level data dependencies

#### TanStack Query

Responsible for:

* Server-state caching
* Query lifecycle
* Mutations
* Background refetching
* Cache invalidation
* SSR hydration

TanStack's current Start integration creates a `QueryClient` per router/request and uses `@tanstack/react-router-ssr-query` for SSR dehydration, hydration, and streaming.

#### oRPC

Responsible for:

* Type-safe API procedures
* Input validation
* Server/client contract
* RPC communication

###
