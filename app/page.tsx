import { Button } from "@/components/ui/button";
import { CheckCircle2, ClipboardList, Clock, Coins, Megaphone, QrCode, ShieldCheck, Store, Lock, Server, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl sm:text-5xl flex flex-col items-center">
      {/* Sponsor Recruitment Banner */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeq6hDRFIO9aSg-RwuTtbWwsTXcaPAxbEviNxMTSOIxVvkvpQ/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 px-4 sm:px-6 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 cursor-pointer"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Megaphone className="text-slate-900 shrink-0" size={24} />
            <p className="text-base sm:text-lg font-bold text-slate-900">
              学生の支援を行ってくださる<span className="hidden sm:inline">プラットフォーム</span>スポンサー募集中
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-semibold text-slate-800">
              月額2万円でプラットフォーム内に広告を掲載可能
            </span>
            <ArrowRight className="text-slate-900 shrink-0" size={20} />
          </div>
        </div>
      </a>

      <section className="flex sm:flex-row items-center gap-20 mt-20 flex-col px-5">
        <div className="flex-col order-2 sm:order-1">
          <h1 className="font-bold max-w-lg">現金決済から解放。<br />学校食堂の<span className="bg-yellow-300">「速い・安全・無駄がない」</span>をGakuPayで実現。</h1>
          <p className="text-base max-w-sm mt-2 font-bold text-gray-500">ランチタイムの行列、現金の管理、保護者の不安。
            全てを解決するスマートな電子食券システム。
          </p>
          <div className="flex gap-4">
            <Button className="bg-yellow-400 text-black font-bold h-13 rounded-full gap-1 !px-5 mt-5 flex items-center hover:bg-yellow-500">
              <span>お問い合わせ</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Button>
            <Button className="border-2 border-yellow-400 text-black font-bold h-13 rounded-full gap-1 !px-5 mt-5 flex items-center hover:bg-yellow-100 bg-white">
              <span>機能をもっとみる</span>
            </Button>
          </div>
        </div>

        <div className="w-full px-20 max-w-lg order-1 sm:order-2 sm:w-1/2">
          <Image
            src="/lp_1.png"
            alt="Hero Image"
            width={600}
            height={400}
            className="relative w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="mt-40 flex flex-col items-center max-w-6xl px-5">
        <div>
          <h1 className="text-3xl font-bold text-center">なぜ、あなたの学校にGakuPayが必要なのか？</h1>
          <p className="text-gray-600 text-base text-center mt-2 font-bold">多くの学校管理者が抱える、食堂運営の「3つの課題」</p>
        </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {/* Card 1 */}
            <div className="bg-slate-50 p-10 rounded-3xl transition duration-300 hover:shadow-sm group">
              <div className="w-13 h-13 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <Clock className="text-slate-900" size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">レジの深刻な渋滞</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                限られた昼休み。5分以上のレジ待ちが、生徒の大切な休憩時間やコミュニケーションの時間を奪っています。
              </p>
            </div>

            {/* Card 2 */}
          <div className="bg-slate-50 p-10 rounded-3xl transition duration-300 hover:shadow-sm group">
              <div className="w-13 h-13 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-slate-900" size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">保護者の不安・不満</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                「現金を子供に持たせるのが心配」「食費が正しく使われているか見えない」という保護者の声は増え続けています。
              </p>
            </div>

            {/* Card 3 */}
          <div className="bg-slate-50 p-10 rounded-3xl transition duration-300 hover:shadow-sm group">
              <div className="w-13 h-13 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <ClipboardList className="text-slate-900" size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">管理業務の非効率</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                毎日の現金集計、在庫管理、発注予測。アナログな管理が現場の先生やスタッフの大きな負担になっています。
              </p>
            </div>
          </div>
      </section>
      <section className="w-full max-w-6xl px-5">
        <div className="mt-40">
          <span className="text-yellow-600 font-bold tracking-wider uppercase text-xs border-b-2 border-yellow-400 pb-1">Features</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mt-6 leading-tight">
            GakuPayが提供する<br />3つの核となる価値
          </h2>
        </div>
        <div className="space-y-32 mt-10">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-gray-100 sm:p-12 rounded-[2.5rem] relative overflow-hidden">
                <Image
                  src="/lp/tickets.png"
                  alt="チケット画面"
                  width={600}
                  height={400}
                  className="relative w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-6 text-slate-900 font-bold text-xl">1</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">完全キャッシュレスで<br />「行列ゼロ」へ</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                スマホからの事前注文・決済により、食堂ではQRコードをかざすだけ。
                現金のやり取りが一切なくなることで、提供スピードが劇的に向上。
                生徒は休憩時間をフルに活用できます。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-slate-900 rounded-full p-0.5">
                    <CheckCircle2 className="text-white" size={12} />
                  </div>
                  <span className="text-slate-800 font-medium text-base">Stripe連携による安全なクレジットカード事前決済</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-slate-900 rounded-full p-0.5">
                    <CheckCircle2 className="text-white" size={12} />
                  </div>
                  <span className="text-slate-800 font-medium text-base">QRコードの瞬間スキャンで、1人あたり数秒で受取完了</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-6 text-slate-900 font-bold text-xl">2</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">保護者に「安心」を届ける<br />透明性</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                保護者専用アカウントから、お子様の購入履歴や食券残高をいつでも確認可能。
                「今日はお弁当を持たせられない」という時も、オンラインで食券を購入して送ることができます。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-slate-900 rounded-full p-0.5">
                    <CheckCircle2 className="text-white" size={12} />
                  </div>
                  <span className="text-slate-800 font-medium text-base">招待コードによる簡単な親子アカウント連携</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-slate-900 rounded-full p-0.5">
                    <CheckCircle2 className="text-white" size={12} />
                  </div>
                  <span className="text-slate-800 font-medium text-base">利用履歴の可視化で、食生活の見守りが可能に</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 sm:p-12 rounded-[2.5rem] relative overflow-hidden">
                <Image
                  src="/lp/parent.png"
                  alt="保護者ダッシュボード"
                  width={600}
                  height={400}
                  className="relative w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-gray-100 sm:p-12 rounded-[2.5rem] relative overflow-hidden">
                <Image
                  src="/lp/shop.png"
                  alt="チケット画面"
                  width={600}
                  height={400}
                  className="relative w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-6 text-slate-900 font-bold text-xl">3</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">在庫のズレを許さない<br />堅牢な管理</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                「購入したのに売り切れだった」というトラブルをシステムレベルで防止。
                独自の二重販売防止の仕組みにより、残り1食の注文まで正確に処理します。
                管理者はリアルタイムで売れ行きを把握でき、発注精度の向上にも繋がります。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-slate-900 rounded-full p-0.5">
                    <CheckCircle2 className="text-white" size={12} />
                  </div>
                  <span className="text-slate-800 font-medium text-base">注文殺到時も正確に在庫を確保する制御システム</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-slate-900 rounded-full p-0.5">
                    <CheckCircle2 className="text-white" size={12} />
                  </div>
                  <span className="text-slate-800 font-medium text-base">リアルタイムなデータ反映で、フードロスを削減</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="py-24 bg-white overflow-hidden relative border-t border-slate-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block bg-yellow-100 px-3 py-1 rounded text-xs font-bold text-yellow-800 mb-4">NEW FEATURE</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                プラットフォームスポンサー<br />になりませんか？
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                GakuPayは、地域のお店や学習塾と学校をつなぐ機能も提供しています。
                スポンサー広告を掲載することで、学校コミュニティへの認知拡大と、地域貢献を同時に実現できます。
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Coins className="text-slate-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">月額2万円からの収益モデル</h3>
                    <p className="text-slate-600 mt-2 text-base">
                      学校食堂の利用者に直接リーチできる貴重な広告枠を、月額2万円からご提供。コストパフォーマンスの高いマーケティングが可能です。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Megaphone className="text-slate-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">圧倒的な注目度</h3>
                    <p className="text-slate-600 mt-2 text-base">
                      食堂利用時に必ず目にする広告枠で、他の広告媒体にはない高い注目度を実現。ブランド認知と集客効果を最大化します。
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeq6hDRFIO9aSg-RwuTtbWwsTXcaPAxbEviNxMTSOIxVvkvpQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-400 text-black font-bold h-14 rounded-full gap-2 px-8 mt-8 flex items-center hover:bg-yellow-500 text-lg w-full sm:w-auto">
                  <span>スポンサー申し込み</span>
                  <ArrowRight className="text-black" size={20} />
                </Button>
              </a>
            </div>

            {/* Visuals for Sponsorship */}
            <div className="lg:w-1/2 relative">
              <div className="relative mx-auto w-full max-w-[500px] h-[400px] flex justify-center items-center">
                {/* Mobile Ad Mockup */}
                <div className="absolute left-0 bottom-0 w-56 bg-white rounded-3xl border border-slate-200 shadow-2xl transform -rotate-3 z-20 overflow-hidden">
                  <div className="bg-slate-50 h-10 border-b border-gray-100 flex justify-center items-center">
                    <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                    <div className="space-y-3">
                      <div className="h-16 bg-slate-50 rounded p-2 flex gap-3 items-center">
                        <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 bg-slate-200 w-full rounded"></div>
                          <div className="h-2 bg-slate-200 w-2/3 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* The Ad */}
                  <div className="bg-yellow-50 p-4 border-t border-yellow-100 mt-4">
                    <p className="text-[10px] text-yellow-600 mb-1 font-bold uppercase tracking-wider">Sponsored</p>
                    <div className="bg-white border border-yellow-200 rounded-xl p-3 shadow-sm flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                        <Store size={18} className="text-yellow-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">○○スポーツ用品店</p>
                        <p className="text-xs text-slate-500 truncate">部活動応援キャンペーン</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kiosk Ad Mockup */}
                <div className="absolute right-4 top-10 w-72 bg-slate-900 rounded-xl shadow-2xl transform rotate-3 z-10 overflow-hidden border border-slate-800">
                  <div className="bg-slate-800 p-3 flex justify-between items-center">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    </div>
                  </div>
                  <div className="bg-white h-56 flex flex-col items-center justify-center p-6 relative">
                    <p className="font-bold text-slate-900 mb-6 text-base">食券を購入しました</p>

                    {/* The Ad */}
                    <div className="absolute bottom-0 w-full bg-slate-50 border-t border-slate-100 p-4 flex justify-between items-center">
                      <div>
                        <p className="text-xs font-bold text-slate-900">個別指導塾△△△</p>
                        <p className="text-[10px] text-slate-500">夏期講習 受付開始</p>
                      </div>
                      <button className="bg-slate-900 text-white text-[10px] px-3 py-1.5 rounded font-bold">詳細</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="security" className="py-24 bg-slate-50 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                教育現場だからこそ、<br />
                妥協のない安全性を。
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                GakuPayは、大切なお金と個人情報を扱うシステムとして、
                金融機関レベルのセキュリティ基準と、止まらない安定性を兼ね備えています。
              </p>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <Lock className="text-slate-900 mb-6" size={36} />
                <h3 className="text-lg font-bold text-slate-900 mb-3">国際基準の決済セキュリティ</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  決済機能には世界標準のStripeを採用。カード情報はシステム内に保持せず、最高レベルの安全性で処理されます。
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <Server className="text-slate-900 mb-6" size={36} />
                <h3 className="text-lg font-bold text-slate-900 mb-3">ピーク時も止まらない耐久性</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ランチタイムのアクセス集中時も自動でサーバー能力を拡張。遅延やダウンのない快適な動作を保証します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            学校食堂を、もっとスマートに。<br />
            もっと安心に。
          </h2>
          <p className="text-slate-600 text-lg mb-5 max-w-2xl mx-auto">
            GakuPayは、生徒の笑顔と保護者の安心、そして学校の業務効率化を同時に実現します。
            まずは資料請求から、新しい食堂体験を始めませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-400 text-black font-bold h-20 rounded-full gap-1 !px-10 mt-5 flex items-center hover:bg-yellow-500 text-2xl">
              <span>お問い合わせ</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}