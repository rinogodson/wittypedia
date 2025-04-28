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
  window.innerHTML = `
  <div class="topBar"
  style="display: flex; justify-content: end; width: 100%;"
  >
    <button
    style="background-color: rgba(0,0,0,0.5); border: none; padding: 10px; border-radius: 50%; width: 3em; height: 3em; color: white; display: flex; justify-content: center; align-items: center;"
    onClick="this.parentElement.remove()">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/>
      </svg>
    </button>
  </div>
  <div>hello</div>
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
  window.style.padding = "30px";
  html.appendChild(window);
})();
