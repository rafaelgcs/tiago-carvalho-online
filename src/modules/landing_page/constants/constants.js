const tiers = [
    {
        popular: false,
        title: 'TC Mensal',
        subheader: 'Vagas Limitadas',
        promotion: true,
        promotion_price: '197,00',
        price: '236,40',
        url: 'https://www.mfitpersonal.com.br/index?share=MjE1MjIvMC84LzU0ODY=',
        description: ['No plano mensal da consultoria, você receberá um planejamento de treinos com validade de 30 dias.'],
    },
    {
        popular: true,
        title: 'TC Trimestral',
        subheader: 'Vagas Limitadas',
        promotion: true,
        promotion_price: '377,00',
        price: '452,40',
        url: 'https://www.mfitpersonal.com.br/index?share=MjE1MjIvMC84LzU0ODc=',
        description: [
            'No plano trimestral da consultoria, você receberá três planejamentos de treinos, um por mês, cada um com validade de 30 dias.',
        ],
    },
    {
        popular: false,
        title: 'TC Semestral',
        subheader: 'Vagas Limitadas',
        promotion: true,
        promotion_price: '697,00',
        price: '836,40',
        url: 'https://www.mfitpersonal.com.br/index?share=MjE1MjIvMC84LzU0ODg=',
        description: [
            'No plano semestral da consultoria, você receberá 6 planejamentos de treinos, um por mês, cada um com validade de 30 dias.',
        ],
    },
];

const links = [
    {
        isDropdown: true,
        dropdownList: [
            {
                link: "https://www.mfitpersonal.com.br/index?share=MjE1MjIvMC84LzU0ODY=",
                title: "TC Mensal",
                local: false,
                target: "_blank"
            },
            {
                link: "https://www.mfitpersonal.com.br/index?share=MjE1MjIvMC84LzU0ODc=",
                title: "TC Trimestral",
                local: false,
                target: "_blank"
            },
            {
                link: "https://www.mfitpersonal.com.br/index?share=MjE1MjIvMC84LzU0ODg=",
                title: "TC Semestral",
                local: false,
                target: "_blank"
            },

        ],
        tooltip: false,
        tooltipText: "",
        tooltipDirection: "bottom",
        icon: null,
        target: null,
        text: "Planos",
        link: null
    },
    {
        isDropdown: false,
        dropdownList: [
            {
                link: "",
                title: "",
                local: false,
                target: ""
            }
        ],
        tooltip: true,
        tooltipText: "Preencha o formulário e receba atendimento especializado!",
        tooltipDirection: "bottom",
        icon: null,
        target: "_blank",
        text: "Cadastre-se",
        link: "https://www.mfitpersonal.com.br/index?share=MjE1MjIvMC85LzA="
    },
    {
        isDropdown: false,
        dropdownList: [
            {
                link: "",
                title: "",
                local: false,
                target: ""
            }
        ],
        tooltip: true,
        tooltipText: "Fale comigo no whatsapp",
        tooltipDirection: "bottom",
        icon: "fab fa-whatsapp",
        target: "_blank",
        text: "Whatsapp",
        link: "https://api.whatsapp.com/send?phone=5571992483233"
    }
]


export { tiers, links }