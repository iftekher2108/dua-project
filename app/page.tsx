import  { Button } from "@/components/ui/button";
import HomeComponent from "./home";
import SidePanel from "@/components/sidepanel";
export default function Home() {


  return (
    <>
  
      {/* Layout */}
      <div className=" grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 bg-base-300">
          <SidePanel />
        </aside>

        {/* Main Content */}
        <main className="col-span-9 p-6 space-y-6">

          <HomeComponent />

          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{}</h2>

            </div>

          </div>

          {/* <section>
            <h1 className="text-2xl font-bold text-[#446442] mb-6">The servant is dependent on his Lord</h1>
            <Card className="bg-white border border-[#e0e4dc] mb-3 shadow-sm">
              <CardContent className="space-y-3 p-5">
                <p className="text-[#446442] text-right text-lg font-semibold">أَيُّهَا النَّاسُ أَنْتُمُ الْفُقَرَاءُ إِلَى اللَّهِ</p>
                <p className="text-sm">All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.</p>
                <p className="text-xs text-gray-500 italic">Surah al-Fatir 35:15</p>
              </CardContent>
            </Card>


            <Card className="bg-white border border-[#e0e4dc] mb-3 shadow-sm">
              <CardContent className="space-y-3 p-5">
                <p className="text-[#446442] text-lg text-right font-semibold leading-relaxed">
                  لا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
                </p>
                <p className="text-sm">There is none worthy of worship except Allah alone with no partner or associate. His is the Dominion and to Him be all praise, and He is able to do all things.</p>
                <p className="text-xs text-gray-500 italic">Surah al-Fatir 35:15</p>
              </CardContent>
            </Card>


            <Card className="bg-white border border-[#e0e4dc] shadow-sm">
              <CardContent className="space-y-3 p-5">
                <p className="text-[#446442] text-lg text-right font-semibold leading-relaxed">
                  لا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
                </p>
                <p className="text-sm">Say the following statement (10 times): The person who says the above statement 10 times it would be as if he had freed four of Ishmael (RA)’s children from slavery.</p>
                <p className="text-xs text-gray-500 italic">Surah al-Fatir 35:15</p>
              </CardContent>
            </Card>

          </section> */}
        </main>
      </div>
    </>
  );
}
