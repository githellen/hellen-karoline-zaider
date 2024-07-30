const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "O trabalho do influenciador para você é algo valido?",
        alternativas: [
            {
                texto: "Sim, é um trabalho valido!",
                afirmacao: "O trabalho de um influenciador pode ter um impacto positivo significativo em várias áreas. Eles têm o poder de inspirar e motivar pessoas ao redor do mundo, compartilhando mensagens positivas, promovendo hábitos saudáveis, e educando sobre questões importantes, como sustentabilidade e bem-estar mental."
            },
            {
                texto: "Não, não é um trabalho valido!",
                afirmacao: "Embora alguns influenciadores tenham impactos positivos, há também preocupações crescentes sobre os efeitos negativos de seu trabalho. Muitas vezes, eles podem promover um estilo de vida superficial, criar expectativas irreais e contribuir para a cultura de consumo excessivo."
            }
        ]
    },
    {
        enunciado: "o futuro do influenciador é algo positivo?",
        alternativas: [
            {
                texto: "Sim, é algo positivo1",
                afirmacao: "O futuro dos influenciadores promete ser positivo à medida que evoluem para papéis mais responsáveis e impactantes na sociedade digital. Com a crescente conscientização sobre questões como autenticidade, transparência e responsabilidade social, espera-se que os influenciadores adotem práticas mais éticas e orientadas para o bem comum."
            },
            {
                texto: "Não, não é algo positivo!",
                afirmacao: "O futuro dos influenciadores pode apresentar desafios significativos à medida que questões como autenticidade, transparência e impacto ético continuam a ser pontos críticos. Com o crescimento exponencial das redes sociais e da influência digital, há o risco de que alguns influenciadores priorizem o lucro sobre a responsabilidade social, promovendo um estilo de vida superficial e inatingível."
            }
        ]
    },
    {
        enunciado: "o impacto social do influenciador é algo positivo?",
        alternativas: [
            {
                texto: "sim, é algo positivo!",
                afirmacao: "O impacto social dos influenciadores pode ser extremamente positivo, à medida que eles utilizam suas plataformas para promover mudanças significativas e inspirar suas audiências. Influenciadores têm a capacidade única de amplificar vozes minoritárias, aumentar a conscientização sobre questões importantes como saúde mental, inclusão e sustentabilidade, e mobilizar comunidades para a ação positiva. "
            },
            {
                texto: "Não, não é algo positivo!",
                afirmacao: "O impacto social dos influenciadores também pode ter aspectos negativos, especialmente quando não há transparência, autenticidade ou responsabilidade em suas práticas. Alguns influenciadores podem promover padrões de beleza irreais, incentivar o consumo desenfreado, ou perpetuar estereótipos prejudiciais."
            }
        ]
    },
    {
        enunciado: "o futuro do influenciador no marketing é algo positivo?",
        alternativas: [
            {
                texto: "sim, é algo positivo!",
                afirmacao: "O futuro dos influenciadores no marketing promete ser positivo, com um aumento na valorização da autenticidade e da conexão genuína entre influenciadores e seus seguidores. À medida que as plataformas digitais evoluem, os influenciadores têm a oportunidade de se tornarem verdadeiros embaixadores de marcas, promovendo produtos e serviços de maneira mais integrada e transparente. Além disso, a capacidade dos influenciadores de segmentar públicos específicos e criar conteúdos personalizados oferece às marcas uma maneira eficaz de alcançar e engajar consumidores de forma autêntica"
            },
            {
                texto: "Não, não é algo positivo!",
                afirmacao: "O futuro dos influenciadores no marketing pode apresentar desafios significativos, especialmente no que diz respeito à saturação do mercado e à falta de transparência. Com o crescimento exponencial do número de influenciadores, há o risco de que a autenticidade seja sacrificada em favor de parcerias comerciais excessivas e conteúdos superficiais."
            }
        ]
    },
    {
        enunciado: "o impacto do influencer em adolescentes é algo positivo?",
        alternativas: [
            {
                texto: "sim, é algo positivo!",
                afirmacao: "O impacto dos influenciadores nos adolescentes pode ser positivo ao proporcionar modelos inspiradores e promover mensagens de autoaceitação, diversidade e empatia. Influenciadores que compartilham experiências autênticas e incentivam um estilo de vida saudável, tanto física quanto mentalmente, podem ajudar os adolescentes a desenvolverem uma visão positiva de si mesmos e do mundo ao seu redor."
            },
            {
                texto: "Não, não é algo positivo!",
                afirmacao: "O impacto dos influenciadores nos adolescentes também pode ter aspectos negativos, especialmente quando influenciam padrões de comportamento prejudiciais ou promovem valores superficiais. Alguns influenciadores podem perpetuar uma visão distorcida da realidade, levando os adolescentes a compararem-se constantemente e a sentirem-se inadequados. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Suas Respostas...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();