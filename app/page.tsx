import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import  { Button } from "@/components/ui/button";
import HomeComponent from "./home";
import SidePanel from "@/components/sidepanel";
import { Menu } from "lucide-react";
export default function Home() {

  return (
    <>
     <div className="min-h-screen bg-[#f8f9f6] text-[#1c1c1c]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#eef3ea] border-b border-[#d2e3c8]">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6 text-[#6e8c6f]" />
          <span className="text-xl font-semibold text-[#446442]">Dua & Ruqyah</span>
        </div>
        <Button className="bg-[#e6f2dc] text-[#446442] border border-[#bfd6ac] hover:bg-[#d4e6c2]">Export to PDF</Button>
      </header>

      {/* Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white border-r border-[#e0e4dc] p-4">
          <SidePanel />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">

          <HomeComponent />

          <section>
            <h1 className="text-2xl font-bold text-[#446442] mb-6">The servant is dependent on his Lord</h1>
            {/* Card 1 */}
            <Card className="bg-white border border-[#e0e4dc] mb-3 shadow-sm">
              <CardContent className="space-y-3 p-5">
                <p className="text-[#446442] text-right text-lg font-semibold">أَيُّهَا النَّاسُ أَنْتُمُ الْفُقَرَاءُ إِلَى اللَّهِ</p>
                <p className="text-sm">All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.</p>
                <p className="text-xs text-gray-500 italic">Surah al-Fatir 35:15</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white border border-[#e0e4dc] mb-3 shadow-sm">
              <CardContent className="space-y-3 p-5">
                <p className="text-[#446442] text-lg text-right font-semibold leading-relaxed">
                  لا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
                </p>
                <p className="text-sm">There is none worthy of worship except Allah alone with no partner or associate. His is the Dominion and to Him be all praise, and He is able to do all things.</p>
                <p className="text-xs text-gray-500 italic">Surah al-Fatir 35:15</p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white border border-[#e0e4dc] shadow-sm">
              <CardContent className="space-y-3 p-5">
                <p className="text-[#446442] text-lg text-right font-semibold leading-relaxed">
                  لا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
                </p>
                <p className="text-sm">Say the following statement (10 times): The person who says the above statement 10 times it would be as if he had freed four of Ishmael (RA)’s children from slavery.</p>
                <p className="text-xs text-gray-500 italic">Surah al-Fatir 35:15</p>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
    </>
  );
}
