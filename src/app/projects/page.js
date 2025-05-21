"use client";

import {
  UserIcon,
  ExternalLinkIcon,
  GithubIcon,
  House,
  Target,
  Mail,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Code, Parentheses, Braces } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Dock, DockIcon } from "@/components/magicui/dock";
import useScrollRestoration from "@/hooks/useScrollRestoration";

export default function Projects() {
  // Use the hook to fix scrolling issues
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Background Clouds */}
      <div className="absolute top-20 right-20">
        <Code className="w-32 h-32 text-gray-200" />
      </div>
      <div className="absolute bottom-40 left-20">
        <Parentheses className="w-24 h-24 text-gray-200" />
      </div>
      <div className="absolute top-1/2 right-1/5">
        <Braces className="w-40 h-40 text-gray-200" />
      </div>
      <div className="absolute bottom-20 right-32">
        <Code className="w-36 h-36 text-gray-200" />
      </div>
      <div className="absolute top-40 left-1/4">
        <Braces className="w-28 h-28 text-gray-200" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-center w-full pt-10 px-4 sm:px-0">
        <div className=" flex items-center justify-center w-full sm:w-[80%]  bg-white/50 backdrop-blur-sm">
          <header className="flex  flex-col sm:flex-row justify-between items-center p-4 sm:p-6">
            <div
              className=" text-xl sm:text-2xl font-black uppercase mb-2 sm:mb-0 "
              style={{ fontFamily: "var(--font-dela-gothic)" }}
            >
              Adarsh Verma
            </div>
          </header>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-8 md:px-16 lg:px-24 min-h-[80vh] relative py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Projects
            </h1>
          </div>

          {/* Projects Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Row 1 */}
            <div className="md:col-span-2 aspect-[2/1] relative group overflow-hidden rounded-xl">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <Image
                src="/img/kairo.png"
                alt="Kairo"
                fill
                className="object-cover"
                priority
              />

              {/* Small screen label: visible only below md */}
              <div className="absolute top-2 -left-1 bg-white bg-opacity-70 text-black text-xs font-semibold px-3 py-1 rounded  block lg:hidden z-30">
                Kairo — Job Scheduler WebApp
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">Kairo</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    A Job-schedular and Management Web-Application
                  </p>
                  <div className="flex justify-between items-center">
                    <a
                      href="https://github.com/exorcist09/kairo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      {/* Fixed GithubIcon padding & added border */}
                      <GithubIcon className="w-5 h-5 bg-white rounded-full p-1 " />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-square relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/natter.png"
                alt="Natter"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 -left-1 bg-white bg-opacity-70 text-black text-xs font-semibold px-3 py-1 rounded block lg:hidden z-30">
                Natter - Realtime Chatting Application
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">Natter</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    A Web-Application for Real-Time Chatting
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/exorcist09/Natter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://natter-kvvj.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="aspect-square relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/streampod.png"
                alt="streampod"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 -left-1 bg-white bg-opacity-70 text-black text-xs font-semibold px-3 py-1 rounded block lg:hidden z-30">
                Streampod - A Movie recommendation Website
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">Streampod</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    A web platform for Movie Recommendation and Enjoyment
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/exorcist09/Stream-pod"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://streampod-black.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 aspect-[2/1] relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 "></div>
              <Image
                src="/img/sigma.png"
                alt="6-sigma"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 -left-1 bg-black bg-opacity-70 text-white text-xs font-semibold px-3 py-1 rounded z-30 block lg:hidden">
                6-sigma
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">6-sigma</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    A ML project with Full stack integration which helps
                    factories to grow to 6-sigma industry level
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/exorcist09/6-sigma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}

            <div className="md:col-span-2 aspect-[2/1] relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/prozion.png"
                alt="Prozion"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-0 bg-white bg-opacity-70 text-black text-xs font-semibold px-3 py-1 rounded block lg:hidden z-30 ">
                Prozion - Ecommerce Store for Gym supplements
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">Prozion</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    An Ecommerce store for gym enthusiast
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/exorcist09/Prozion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square relative group overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/img/project6.jpg"
                alt="COMING SOON"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    More projects are underway.
                  </p>
                  <div className="flex justify-between">
                    <a
                      href="https://github.com/exorcist09/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-gray-700"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Quote - only visible on small screens */}
          <div className="mt-10 md:hidden"></div>
        </div>
      </main>

      {/* Dock at the bottom */}
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Dock className="gap-8 backdrop-blur-md bg-white dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 shadow-lg rounded-xl px-4 py-2 flex justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="group transition-transform duration-300 hover:scale-150"
                >
                  <DockIcon>
                    <House className="h-5 w-5" />
                  </DockIcon>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/about"
                  className="group transition-transform duration-300 hover:scale-150"
                >
                  <DockIcon>
                    <UserIcon className="h-5 w-5" />
                  </DockIcon>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>About / Skills</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/projects"
                  className="group transition-transform duration-300 hover:scale-150"
                >
                  <DockIcon isActive={true}>
                    <Target className="h-5 w-5" />
                  </DockIcon>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Projects</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/contact"
                  className="group transition-transform duration-300 "
                >
                  <DockIcon>
                    <Mail className="h-5 w-5" />
                  </DockIcon>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Contact</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Dock>
      </div>
    </div>
  );
}
