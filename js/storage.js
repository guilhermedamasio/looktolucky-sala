// Ponte mínima para o localStorage, usada pelos serviços compartilhados
// (ChannelStore, SupabaseAuthService). Navegadores só deixam o localStorage
// ser acessado por JavaScript, então o C# chama estas duas funções.
//
// Existe uma cópia em cada app, e não uma só na biblioteca compartilhada,
// de propósito. Servir arquivo estático de biblioteca para dentro de um
// Blazor WebAssembly exige um encanamento que não funcionou aqui (o
// _content/ dava 404). São três linhas sem lógica nenhuma: duplicar sai
// mais barato que depender daquilo. Se mexer numa, mexa na outra.
window.appStorage = {
    get: (key) => localStorage.getItem(key),
    set: (key, value) => localStorage.setItem(key, value),
};
