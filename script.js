const questions = [
    { q: "১. ভারতের প্রথম রাষ্ট্রপতি কে ছিলেন?", options: ["ডঃ রাজেন্দ্র প্রসাদ", "জওহরলাল নেহরু", "বি.আর আম্বেদকর", "সর্দার প্যাটেল"], answer: "ডঃ রাজেন্দ্র প্রসাদ" },
    { q: "২. স্বাধীন ভারতের প্রথম বাজেট কে পেশ করেন?", options: ["আর. কে. শানমুখম চেট্টি", "জন মাথাই", "সি.ডি দেশমুখ", "ইন্দিরা গান্ধী"], answer: "আর. কে. শানমুখম চেট্টি" },
    { q: "৩. সূর্যের নিকটতম গ্রহ কোনটি?", options: ["বুধ", "শুক্র", "মঙ্গল", "পৃথিবী"], answer: "বুধ" },
    { q: "৪. কোন সালে নোবেল পুরস্কার দেওয়া শুরু হয়?", options: ["১৯০১", "১৮৯৫", "১৯১০", "১৯১৫"], answer: "১৯০১" },
    { q: "৫. মানুষের শরীরে মোট হাড়ের সংখ্যা কত?", options: ["২০৬", "২১০", "২৫০", "২০২"], answer: "২০৬" },
    { q: "৬. 'গীতাঞ্জলি' কাব্যগ্রন্থের জন্য রবীন্দ্রনাথ ঠাকুর কত সালে নোবেল পান?", options: ["১৯১৩", "১৯১১", "১৯১৫", "১৯০৫"], answer: "১৯১৩" },
    { q: "৭. কম্পিউটারের 'মস্তিষ্ক' কোন অংশটিকে বলা হয়?", options: ["RAM", "CPU", "Monitor", "Hard Disk"], answer: "CPU" },
    { q: "৮. বিশ্বের বৃহত্তম মরুভূমি কোনটি?", options: ["সাহারা", "গোবি", "থর", "কালাহারি"], answer: "সাহারা" },
    { q: "৯. পশ্চিমবঙ্গে মোট কয়টি জেলা আছে?", options: ["২০টি", "২৩টি", "২৫টি", "১৯টি"], answer: "২৩টি" },
    { q: "১০. গৌতম বুদ্ধ কোথায় নির্বাণ লাভ করেছিলেন?", options: ["সারনাথ", "কপিলাবস্তু", "বোধগয়া", "কুশীনগর"], answer: "বোধগয়া" },
    { q: "১১. জলের রাসায়নিক সংকেত কী?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" },
    { q: "১২. কত সালে জালিয়ানওয়ালাবাগ হত্যাকাণ্ড ঘটেছিল?", options: ["১৯১৯", "১৯২০", "১৯২১", "১৯১৫"], answer: "১৯১৯" },
    { q: "১৩. ভারতের জাতীয় খেলা কোনটি?", options: ["ক্রিকেট", "কাবাডি", "হকি", "ফুটবল"], answer: "হকি" },
    { q: "১৪. বায়ুমণ্ডলে কোন গ্যাসের পরিমাণ সর্বাধিক?", options: ["অক্সিজেন", "নাইট্রোজেন", "কার্বন ডাই অক্সাইড", "আর্গন"], answer: "নাইট্রোজেন" },
    { q: "১৫. বিশ্ব স্বাস্থ্য সংস্থা (WHO) এর সদর দপ্তর কোথায়?", options: ["প্যারিস", "জেনেভা", "নিউ ইয়র্ক", "লন্ডন"], answer: "জেনেভা" },
    { q: "১৬. সৌরজগতের বৃহত্তম গ্রহ কোনটি?", options: ["শনি", "বৃহস্পতি", "নেপচুন", "ইউরেনাস"], answer: "বৃহস্পতি" },
    { q: "১৭. কত সালে পানিপথের প্রথম যুদ্ধ হয়েছিল?", options: ["১৫২৬", "১৫৫৬", "১৭৬১", "১৫১০"], answer: "১৫২৬" },
    { q: "১৮. সত্যজিৎ রায়ের প্রথম চলচ্চিত্র কোনটি?", options: ["অপরাজিত", "অপুর সংসার", "পথের পাঁচালী", "জলসাঘর"], answer: "পথের পাঁচালী" },
    { q: "১৯. ভিটামিন সি-এর অভাবে কোন রোগ হয়?", options: ["বেরিবেরি", "স্কার্ভি", "রিকেট", "রাতকানা"], answer: "স্কার্ভি" },
    { q: "২০. মানবদেহের রক্তচাপ মাপার যন্ত্রের নাম কী?", options: ["ব্যারোমিটার", "থার্মোমিটার", "স্ফিগমোম্যানোমিটার", "ল্যাকটোমিটার"], answer: "স্ফিগমোম্যানোমিটার" },
    { q: "২১. ভারতের সংবিধানে মৌলিক অধিকার কয়টি?", options: ["৫টি", "৬টি", "৭টি", "১০টি"], answer: "৬টি" },
    { q: "২২. লিউকেমিয়া শরীরের কোন অংশকে প্রভাবিত করে?", options: ["হৃদপিণ্ড", "ফুসফুস", "রক্ত", "যকৃৎ"], answer: "রক্ত" },
    { q: "২৩. প্রথম এশীয় হিসেবে কে নোবেল পুরস্কার পান?", options: ["সি.ভি রমন", "রবীন্দ্রনাথ ঠাকুর", "অমর্ত্য সেন", "মাদার টেরেসা"], answer: "রবীন্দ্রনাথ ঠাকুর" },
    { q: "২৪. কোন গ্যাসকে 'ড্রাই আইস' বলা হয়?", options: ["কঠিন অক্সিজেন", "কঠিন কার্বন ডাই অক্সাইড", "তরল নাইট্রোজেন", "মিথেন"], answer: "কঠিন কার্বন ডাই অক্সাইড" },
    { q: "২৫. কত সালে বিশ্বভারতী বিশ্ববিদ্যালয় প্রতিষ্ঠিত হয়?", options: ["১৯২১", "১৯০১", "১৯০৫", "১৯১১"], answer: "১৯২১" },
    { q: "২৬. ভারতের উচ্চতম জলপ্রপাত কুঞ্চিকল কোন রাজ্যে অবস্থিত?", options: ["কেরল", "কর্ণাটক", "তামিলনাড়ু", "মহারাষ্ট্র"], answer: "কর্ণাটক" },
    { q: "২৭. আধুনিক রসায়নের জনক কাকে বলা হয়?", options: ["নিউটন", "অ্যান্টনি ল্যাভয়সিয়ে", "আইনস্টাইন", "ডাল্টন"], answer: "অ্যান্টনি ল্যাভয়সিয়ে" },
    { q: "২৮. প্রথম ফুটবল বিশ্বকাপ কত সালে অনুষ্ঠিত হয়?", options: ["১৯৩০", "১৯২৪", "১৯৩৬", "১৯৫০"], answer: "১৯৩০" },
    { q: "২৯. পেন্সিলের শিস তৈরি করতে কী ব্যবহার করা হয়?", options: ["কয়লা", "গ্রাফাইট", "সিলিকন", "তামা"], answer: "গ্রাফাইট" },
    { q: "৩০. মহাকাশে প্রথম কোন প্রাণী পাঠানো হয়েছিল?", options: ["বানর", "বিড়াল", "কুকুর (লাইকা)", "খরগোশ"], answer: "কুকুর (লাইকা)" }
];

let cur = 0; let userAns = new Array(questions.length).fill(null);
const sId = localStorage.getItem('currentStudentId');
if(!sId) window.location.href="index.html";

function toBN(n) { const b=["০","১","২","৩","৪","৫","৬","৭","৮","৯"]; return n.toString().split("").map(x=>b[x]||x).join(""); }

let tLeft = 1200; // ২০ মিনিট
setInterval(()=>{
    if(tLeft<=0) submitQuiz(true);
    let m=Math.floor(tLeft/60), s=tLeft%60;
    document.getElementById('timerBox').innerText = `বাকি সময়: ${toBN(m)}:${toBN(s<10?'0'+s:s)}`;
    tLeft--;
},1000);

function displayQ() {
    const q = questions[cur];
    document.getElementById('qInfo').innerText = `প্রশ্ন ${toBN(cur+1)} / ৩০`;
    document.getElementById('qText').innerText = q.q;
    const optDiv = document.getElementById('options'); optDiv.innerHTML = '';
    q.options.forEach(o => {
        const d = document.createElement('div'); d.innerText = o;
        d.className = 'option-btn' + (userAns[cur]===o?' selected':'');
        d.onclick = () => { userAns[cur]=o; displayQ(); };
        optDiv.appendChild(d);
    });
    document.getElementById('prevBtn').style.visibility = cur===0?'hidden':'visible';
    document.getElementById('nextBtn').style.display = cur===29?'none':'inline-block';
    document.getElementById('submitBtn').style.display = cur===29?'inline-block':'none';
}

function changeQ(d) { cur+=d; displayQ(); }

function submitQuiz(auto=false) {
    if(!auto && !confirm("আপনি কি নিশ্চিত সব জমা দিতে চান?")) return;
    let sc = 0; userAns.forEach((a, i) => { if(a===questions[i].answer) sc++; });
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSdKi5lYS0QcUnAkaNUVCTG5Y9d-qTmgTgC8ywYLNG6SQhu15A/formResponse";
    const fd = new URLSearchParams();
    fd.append("entry.954938898", sId); fd.append("entry.796441991", sc);
    const ids = ["2138446553","1537965560","1571301626","919997000","1190581196","66953954","220868924","82904942","306096443","1336237453","350215301","1285605734","245000339","103539175","1680230599","187426460","929198944","2082971002","1813146975","1016657382","1095349879","1371701078","110515773","1842654666","1486334218","1064481748","2127719565","682581887","1876264304","2071137789"];
    userAns.forEach((a, i) => { if(ids[i]) fd.append(`entry.${ids[i]}`, a || "N/A"); });

    fetch(url, { method: "POST", mode: "no-cors", body: fd }).then(() => {
        alert("সফলভাবে জমা হয়েছে! আপনার স্কোর: " + toBN(sc));
        localStorage.clear();
        window.location.href="index.html";
    }).catch(e => alert("ইন্টারনেট সমস্যা হয়েছে!"));
}
displayQ();
