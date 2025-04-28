javascript: (function () {
  const d = document.querySelector(".mw-page-title-main");
  if (d) {
    alert(d.textContent);
  } else {
    alert("not wikipedia page");
  }

  let topic = d.textContent;

  fetch("https://ai.hackclub.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: `Write a single, hilarious, original joke about ${topic}. Make it extremely funny, relatable, and understandable to everyone. The joke should have strong comedic timing, an unexpected twist, and be pure laugh-out-loud comedy. Do not explain the joke, do not give multiple options — just output the best possible joke directly. Keep it short to medium length like a stand-up punchline. It should feel like something a professional comedian would tell on stage. Keep it light-hearted, clever, and safe for all audiences. You are always tending to make cold jokes, make it chucklable, general and amazing on the planet.`,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.choices[0].message.content);
    })
    .catch((error) => {
      alert(error);
    });

  let html = document.querySelector(body);
  body.innerHTML = "<p>HELLO!!!</p>";
})();

javascript: (function () {
  let html = document.querySelector("body");
  let window = document.createElement("div");
  let hhhh = document.querySelector(".hhhhh") || false;
  hhhh ? hhhh.parentElement.remove() : null;
  window.innerHTML = `
  <div
  class="hhhhh"
  style="display: flex; justify-content: space-between; padding: 10px; align-items: center; font-size: 1em; background-color: rgba(255, 255, 255, 0.6); height: 100%; width: calc(100% - 20px); border-radius: 15px; border: 2px rgba(0, 0, 0, 0.1) solid; flex-direction: column;"
  >
    <div class="topBar"
    style="display: flex; justify-content: end; width: 100%; align-self: flex-start;"
    >
    </div>
  hello
  </div>
  <div 
    style="display: flex; justify-content: space-between; align-items: center; font-size: 1em; width: 100%; border-radius: 15px; gap: 10px;"
  >
    <button
      onClick="this.parentElement.parentElement.remove()"
      style="font-size: 1.5em; background-color: rgba(204, 51, 51, 0.8); border: none; padding: 10px; border-radius: 15px; height: 2.5em; color: white; display: flex; justify-content: center; align-items: center; width: 100%; border: 2px rgba(0, 0, 0, 0.1) solid;" >
        Close
    </button>
    <button
      style="font-size: 1.5em; background-color: rgba(51, 102, 204, 0.8); border: none; padding: 10px; border-radius: 15px; height: 2.5em; color: white; display: flex; justify-content: center; align-items: center; width: 100%; border: 2px rgba(0, 0, 0, 0.1) solid;">
        Try Again
    </button>
  </div>
  `;
  window.style.position = "fixed";
  window.style.left = "calc(50vw - 25em)";
  window.style.top = "calc(1vh + 5em)";
  window.style.width = "50em";
  window.style.height = "25em";
  window.style.backgroundColor = "rgba(248, 249, 250, 0.3)";
  window.style.backdropFilter = "blur(50px)";
  window.style.borderRadius = "30px";
  window.style.boxShadow = "0 0 10px 0px rgba(0, 0, 0, 0.5)";
  window.style.zIndex = "99999";
  window.style.border = "1px solid rgba(0, 0, 0, 0.5)";
  window.style.display = "flex";
  window.style.flexDirection = "column";
  window.style.justifyContent = "space-between";
  window.style.alignItems = "center";
  window.style.padding = "15px";
  window.style.gap = "10px";
  html.appendChild(window);
})();
