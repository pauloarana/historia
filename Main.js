const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o objetivo principal da Lei das Fake News?",
        alternativas: [
            {
                texto: "O objetivo principal da Lei das Fake News é proteger a sociedade contra a desinformação que pode causar danos significativos à democracia e à segurança pública. Ao promover a veracidade das informações compartilhadas online, a lei busca fortalecer a confiança nas plataformas digitais e garantir um ambiente mais seguro para os usuários.",
                afirmação: "A favor"
            },
            {
                texto: " O objetivo principal da Lei das Fake News pode ser visto como uma tentativa de controle excessivo do discurso online, limitando a liberdade de expressão e incentivando a censura. Além disso, há o receio de que a legislação possa ser usada politicamente para reprimir vozes dissidentes e silenciar críticas legítimas.",
                afirmação: "Contra"
            }
        ]
    },
    {
        enunciado: "Quais são as principais penalidades previstas pela Lei das Fake News?",
        alternativas: [
            {
                texto: "As penalidades previstas pela Lei das Fake News são cruciais para desencorajar a disseminação de desinformação deliberada. A imposição de multas pesadas e até mesmo penas de prisão para aqueles que criam ou propagam fake news envia um forte sinal de que a manipulação da verdade não será tolerada, protegendo assim a integridade da informação.",
                afirmação: "A favor",
            },
            {
                texto: "As penalidades previstas pela Lei das Fake News podem ser vistas como draconianas e desproporcionais em alguns casos. Há preocupações de que punições severas possam desencorajar a liberdade de expressão legítima e inibir o debate aberto e saudável. Além disso, a aplicação inconsistente das penalidades pode levar a injustiças e arbitrariedades.",
                afirmação: "Contra"
            }
        ]
    },
    {
        enunciado: "Como a Lei das Fake News define uma notícia falsa?",
        alternativas: [
            {
                texto: "A definição clara de uma "notícia falsa" pela Lei das Fake News é essencial para distinguir entre informação verificada e desinformação. Isso ajuda a estabelecer critérios objetivos para identificar e combater conteúdos enganosos, promovendo assim a transparência e a responsabilidade nas plataformas digitais.",
                afirmação: "A favor",
            },
            {
                texto: "A definição de uma notícia falsa pela Lei das Fake News pode ser muito ampla ou vaga, deixando margem para interpretações arbitrárias. Isso pode resultar em aplicação seletiva da legislação e potencialmente permitir abusos de poder por parte das autoridades, minando a confiança no sistema legal e na imparcialidade das medidas adotadas.",
                afirmação: "É contra",
            }
        ]
    },
    {
        enunciado: "Quais são os mecanismos de aplicação da Lei das Fake News?",
        alternativas: [
            {
                texto: "Os mecanismos de aplicação da Lei das Fake News incluem tecnologias avançadas de detecção de desinformação e colaboração entre plataformas digitais e autoridades regulatórias. Isso permite uma resposta rápida e eficaz à propagação de fake news, protegendo assim os usuários de danos potenciais.",
                afirmação: "A favor",
            },
        {
            texto: "Os mecanismos de aplicação da Lei das Fake News podem ser insuficientes para lidar com a complexidade e a escala das informações digitais. A falta de coordenação entre diferentes jurisdições e a resistência das plataformas em cooperar podem dificultar a eficácia das medidas implementadas, deixando lacunas na aplicação da legislação.",
            afirmação: "É contra",
        }
        ]
    },
    {
        enunciado: "Quais críticas têm sido levantadas contra a Lei das Fake News?",
        alternativas: [
            {
                texto: "As críticas levantadas contra a Lei das Fake News muitas vezes refletem preocupações legítimas sobre o equilíbrio entre liberdade de expressão e responsabilidade online. No entanto, é importante reconhecer que a legislação é um passo necessário para combater a desinformação prejudicial que pode ameaçar a coesão social e a democracia.",
                afirmação: "A favor",
            },
            {
                texto: "As críticas contra a Lei das Fake News destacam falhas na implementação, potenciais abusos de poder e impactos negativos na liberdade de expressão. Argumenta-se que a legislação pode ser utilizada de forma seletiva para reprimir oposições políticas e vozes dissidentes, enfraquecendo assim os princípios democráticos fundamentais.",
                afirmação: "É contra",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntaAtual.length) {
        mostraResultado();
        return;
    }
    perguntasAtual1 = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaselecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
}