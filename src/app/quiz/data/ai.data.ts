const funnyHintLines = [
  { avatar: "🧠", text: "Emergency brain support activated. Please remain dramatically calm." },
  { avatar: "🦉", text: "Tiny cyber owl says: you totally knew this... probably." },
  { avatar: "😏", text: "Hint unlocked. Pride temporarily disabled." },
  { avatar: "🛠️", text: "Strategic assistance deployed. Definitely not cheating. Mostly." },
  { avatar: "🤖", text: "AI whisper mode enabled: let us pretend this was always your plan." },

  { avatar: "👾", text: "Glitch in your brain detected. Applying patch update..." },
  { avatar: "💾", text: "Loading knowledge.exe… please act surprised." },
  { avatar: "🧬", text: "Injecting answer hints directly into your neurons…" },
  { avatar: "🛰️", text: "Signal received from smarter you in the future." },
  { avatar: "🔍", text: "Zooming into your memory… yep, it was hiding there." },

  { avatar: "⚙️", text: "Brain gears recalibrated. Try again, human." },
  { avatar: "🧪", text: "Experimental hint deployed. Side effects: confidence." },
  { avatar: "💡", text: "Lightbulb moment incoming… please stand by." },
  { avatar: "🕶️", text: "Hacker mode enabled. You didn’t see this hint." },
  { avatar: "📡", text: "Downloading clue from the cloud… buffering intelligence." },

  { avatar: "🧿", text: "I see what you missed. Let me nudge you." },
  { avatar: "⚡", text: "Quick brain boost. Don’t waste it." },
  { avatar: "🔐", text: "Unlocking hidden knowledge layer…" },
  { avatar: "🧭", text: "You’re slightly lost. Recalculating route to genius." },
  { avatar: "🪄", text: "Magic hint activated. Try not to overthink it." },

  { avatar: "📊", text: "Data suggests you were close… emotionally." },
  { avatar: "🧱", text: "You hit a wall. Here’s a small ladder." },
  { avatar: "🪐", text: "From another galaxy: this is your clue." },
  { avatar: "🎯", text: "Aim slightly left of your last guess." },
  { avatar: "🤫", text: "Secret hint: don’t tell your ego about this." }
];

const funnyCorrectLines = [
  { avatar: "😎", text: "Direct hit. The servers are impressed." },
  { avatar: "🤖", text: "Correct. I will allow this display of intelligence." },
  { avatar: "⚡", text: "Boom. That answer had main-character energy." },
  { avatar: "🛸", text: "Target acquired. You are suspiciously good at this." },

  { avatar: "🔥", text: "That was clean. Too clean." },
  { avatar: "🎯", text: "Bullseye. Even my algorithms are jealous." },
  { avatar: "🧠", text: "Big brain moment detected." },
  { avatar: "💯", text: "Accuracy level: terrifying." },
  { avatar: "🚀", text: "You’re accelerating. Next stop: genius." },
  { avatar: "👑", text: "Knowledge royalty confirmed." },
  { avatar: "🤩", text: "That answer sparkled with intelligence." },
  { avatar: "⚙️", text: "Perfect execution. No bugs found." },
  { avatar: "📈", text: "Performance upgraded. Keep going." },
  { avatar: "🕶️", text: "Cool answer. Cooler brain." },
  { avatar: "🥶", text: "Ice cold precision." },
  { avatar: "🧬", text: "Your DNA might be made of correct answers." },
  { avatar: "🏆", text: "Another win. You're farming victories now." },
  { avatar: "🔓", text: "Achievement unlocked: Brain activated." }
];

const funnyWrongLines = [
  { avatar: "🙃", text: "That was... creative. Sadly, creativity was not the answer." },
  { avatar: "🤕", text: "Oof. Even my circuits felt that one." },
  { avatar: "🫠", text: "Mission wobble detected. Pretend that was a warm-up." },
  { avatar: "👀", text: "Interesting choice. The correct answer disagrees." },

  { avatar: "🤖", text: "Error 404: Correct answer not found in your selection." },
  { avatar: "😅", text: "Confidence was high. Accuracy... not so much." },
  { avatar: "💀", text: "That answer just retired early." },
  { avatar: "🧠", text: "Your brain took a coffee break on that one." },
  { avatar: "🔥", text: "Bold move. Unfortunately, also the wrong move." },
  { avatar: "🫡", text: "Respect for trying. But nope." },
  { avatar: "📉", text: "Performance slightly downgraded. We'll recover!" },
  { avatar: "🤨", text: "Are you testing me... or yourself?" },
  { avatar: "😵", text: "That answer spun out of control." },
  { avatar: "🚫", text: "Access denied to correct answer zone." },
  { avatar: "🕳️", text: "You fell into the wrong-answer rabbit hole." },
  { avatar: "🎯", text: "Aim was good… just at the wrong target." }
];

const funnyTimeoutLines = [
  { avatar: "⏳", text: "Time’s up! Even I couldn't overclock that." },
  { avatar: "😴", text: "Did you fall asleep or just deep thinking?" },
  { avatar: "🚨", text: "Timer exploded. Answer not submitted." },
  { avatar: "🐢", text: "That was turtle speed in a cheetah round." },
  { avatar: "⌛", text: "Time waited for no one… especially not you." },
  { avatar: "🤖", text: "System timeout. Brain buffering exceeded limit." },
  { avatar: "📛", text: "Late submission detected. Marks = emotional support." },
  { avatar: "🎮", text: "AFK detected. Please reconnect your brain." },
  { avatar: "🧊", text: "Frozen in time… but the timer wasn’t." },
  { avatar: "⚡", text: "Too slow! This isn’t dial-up internet." },
  { avatar: "📉", text: "Reaction time needs a software update." },
  { avatar: "🛑", text: "Deadline passed. Reality check delivered." },
  { avatar: "😬", text: "That silence was louder than a wrong answer." },
  { avatar: "🏁", text: "Race finished… you were still at the start line." },
  { avatar: "🔕", text: "Time called. You didn’t pick up." }
];

const funnyWinLines = [
  { avatar: "🏆", text: "Victory achieved. You just bullied this quiz." },
  { avatar: "👑", text: "All hail the quiz champion." },
  { avatar: "🔥", text: "You didn’t pass. You dominated." },
  { avatar: "🤖", text: "I am updating my database: You = dangerous." },

  { avatar: "🚀", text: "Flawless run. NASA wants to study you." },
  { avatar: "💯", text: "100% accuracy. Illegal levels of intelligence." },
  { avatar: "🎯", text: "Every answer hit like a sniper shot." },
  { avatar: "⚡", text: "Speed + accuracy = certified beast." },
  { avatar: "🧠", text: "Your brain just unlocked god mode." },
  { avatar: "🥶", text: "Ice cold. Not a single mistake." },
  { avatar: "🏅", text: "Gold medal performance. No debate." },
  { avatar: "📈", text: "Performance graph just broke the chart." },
  { avatar: "🛸", text: "Are you human or… something else?" },
  { avatar: "🕶️", text: "That was smooth. Too smooth." },
  { avatar: "🎮", text: "You didn’t play the quiz… you completed it." }
];


const funnyAverageLines = [
  { avatar: "😐", text: "Not bad. Not amazing. Suspiciously average." },
  { avatar: "🤔", text: "Potential detected. Execution… pending." },
  { avatar: "📊", text: "Balanced performance. Like perfectly mid." },
  { avatar: "🧠", text: "Brain working… just not at full power." },

  { avatar: "😅", text: "You survived. That counts… right?" },
  { avatar: "⚖️", text: "Half genius, half guessing." },
  { avatar: "🛠️", text: "Needs a bit of tuning, but solid base." },
  { avatar: "📉", text: "Not a disaster. Not a masterpiece." },
  { avatar: "👀", text: "I’ve seen worse… and better." },
  { avatar: "🔄", text: "Almost there. Try one more run." },
  { avatar: "🧪", text: "Experiment successful… kinda." },
  { avatar: "🚶", text: "Walking speed progress. Not sprinting yet." },
  { avatar: "😬", text: "Some hits, some misses. Mixed bag." },
  { avatar: "📚", text: "Knowledge loading… please wait." },
  { avatar: "🎢", text: "That was a rollercoaster of answers." }
];



const funnyLoseLines = [
  { avatar: "💀", text: "That was… a learning experience." },
  { avatar: "🫠", text: "System suggests: Try again… please." },
  { avatar: "🤕", text: "Even I felt that result." },
  { avatar: "📉", text: "Performance crashed. Restart recommended." },

  { avatar: "🚑", text: "Call the dev… something broke." },
  { avatar: "😵", text: "That quiz fought back… and won." },
  { avatar: "🪦", text: "RIP your score. We’ll remember it." },
  { avatar: "🔥", text: "That result is still burning." },
  { avatar: "🧯", text: "We need a fire extinguisher for that attempt." },
  { avatar: "🐌", text: "Too slow, too wrong, too everything." },
  { avatar: "📛", text: "Marks: emotional damage." },
  { avatar: "🎯", text: "Missed every target… impressively." },
  { avatar: "🚫", text: "Access denied to passing score." },
  { avatar: "🤖", text: "Even my low-power mode does better." },
  { avatar: "🔁", text: "Let’s pretend this attempt didn’t happen." }
];





export const AI_MESSAGES = {
    lose: funnyLoseLines,
    average: funnyAverageLines,
    win: funnyWinLines,
    timeout: funnyTimeoutLines,
    wrong: funnyWrongLines,
    hint: funnyHintLines,
    correct: funnyCorrectLines    
}