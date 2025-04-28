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
  let html = document.querySelector('body');
  let window = document.createElement('div');
  window.innerHTML = 'Hello Peeps!';
  window.style.position='fixed';
  window.style.left='calc(50vw - 25em)';
  window.style.top='calc(1vh + 5em)';
  window.style.width='50em';
  window.style.height='25em';
  window.style.backgroundColor='rgba(248, 249, 250, 0.3)';
  window.style.backdropFilter='blur(50px)';
  window.style.borderRadius='30px';
  window.style.boxShadow='0 0 10px 0px rgba(0, 0, 0, 0.5)';
  window.style.zIndex='99999';
  window.style.border='1px solid rgba(0, 0, 0, 0.5)';
  window.style.display='flex';
  window.style.justifyContent='center';
  window.style.alignItems='center';
  html.appendChild(window);
})();




