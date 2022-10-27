const Products = [
    {
      id: 0,
      brand: "Mugler",
      model: "ANGEL NOVA",
      price: 28200,
      image: "https://fraguru.com/mdimg/perfume/375x500.61519.jpg",
      stock:5,
      description: "Angel Nova de Mugler, el nuevo perfume inspirado en la heroína moderna, una mujer valiente y libre que transforma sus sueños en realidad y la realidad en sueño.\n Una fragancia cautivadora nacida de la fusión inesperada entre el dulzor de notas afrutadas, la exclusiva rosa tecnológica de Mugler y un elegante collar amaderado.\n Angel Nova es increíblemente femenina, ofrece un placer desmesurado y una invitación al disfrute lleno de sorpresa y tentación.",
      category: "Fragancias"
    },
    {
      id: 1,
      brand: "Mugler",
      model: "ALIEN GODDESS",
      price: 36100,
      image: "https://fraguru.com/mdimg/perfume/375x500.68354.jpg",
      stock:5,
      description:"Alien Goddess es una promesa sagrada de feminidad y esperanza. La nueva fragancia de mujer de Mugler es un abrazo luminoso, incandescente y generoso, así como la evocación de un mundo místico que promete cambiar lo ordinario. La mujer que la lleva es de otro mundo, y se caracteriza por un resplandor luminoso y cálido que la envuelve allí donde va.\n Brille tanto como el sol con el perfume ALIEN GODDESS y celebre su feminidad: su fragancia es tan extraordinaria como usted. ALIEN GODDESS, una llamada universal a todas las mujeres.",
      category: "Fragancias"
    },
    {
      id: 2,
      brand: "Lancôme",
      model: "LA VIE EST BELLE",
      price: 22500,
      image: "https://fraguru.com/mdimg/perfume/375x500.73903.jpg",
      stock:5,
      description:"Comparte tu felicidad con esta majestuosa reinterpretación de una fragancia que captura la luminosidad de la esencia de magnolia. Haz tu vida incluso más hermosa con la fragancia femenina de Lancôme, La Vie est Belle.\n Personificado por Julia Roberts, La Vie est Belle es una declaración universal de la belleza de la vida. Una marca olfativa esencia de perfume única creada por tres líderes perfumistas de Francia, La Vie est Belle presenta un nuevo lenguaje olfativo con preciosos ingredientes.",
      category: "Fragancias"
    },
    {
      id: 3,
      brand: "Burberry",
      model: "BURBERRY HER",
      price: 28900,
      image: "https://fraguru.com/mdimg/perfume/375x500.51694.jpg",
      stock:5,
      description:"Burberry Her Eau de Parfum es el primer gourmand afrutado de Burberry. Un aroma para mujeres que saben quiénes son.\n Del maestro perfumista Francis Kurkdjian, que entrelaza el legado personalizado de la Maison con giros inesperados, se abre con una densa explosión de bayas, con grosellas negras, arándanos y frambuesas que permanecen en una intensa dulzura afrutada floral. El jazmín y la violeta desenrollan sus zarcillos en un acorde amaderado. Se profundiza en ámbar seco y almizcle empolvado.\n Una esencia Elegante, ecléctica y creativa de corazón.",
      category: "Fragancias"
    },
    {
      id: 4,
      brand: "Kayali",
      model: "VANILLA 28",
      price: 24200,
      image: "https://fraguru.com/mdimg/perfume/375x500.52616.jpg",
      stock:5,
      description:"Vanilla 28 de Kayali es una fragancia de la familia olfativa Ámbar Vainilla para Hombres y Mujeres.\n Las Notas de Salida son orquídea de vainilla y jazmín; las Notas de Corazón son azúcar moreno y haba tonka; las Notas de Fondo son ámbar, Amberwood, almizcle y pachulí.",
      category: "Fragancias"
    },
    {
      id: 5,
      brand: "Yves Saint Laurent",
      model: "BLACK OPIUM",
      price: 19800,
      image: "https://fraguru.com/mdimg/perfume/375x500.25324.jpg",
      stock:5,
      description:"Atrevete a probar el perfume adictivo y sensual de Yves Saint Laurent y preparate para rockear toda la noche. Liberá tus sentidos y desafía todas las reglas en la oscuridad de la noche. Black Opium, un perfume de YSL para una mujer joven y sexy que no le tiene miedo a la noche.\n Con Black Opoim de Yves Saint Laurent podés estar siempre en la última tendencia internacional.",
      category: "Fragancias"
    },
    {
      id: 6,
      brand: "Dior",
      model: "DIOR ADDICT SHINE LIPSTICK",
      price: 8700,
      image: "https://juleriaque.vteximg.com.br/arquivos/ids/187046-1000-1000/dior-addict-shine-lipstick-243FC69DFE5049323E9359C44AC1BA3F.jpg?v=637919537466600000",
      stock:5,
      description:"Dior Addict es la barra de labios brillante Dior creada como un accesorio de moda, con una fórmula ahora compuesta por un 90 % de ingredientes de origen natural y en un estuche recargable ultracouture. Un brillo efecto vinilo y un color intensos, 24 horas de hidratación, 6 horas de duración y una fórmula enriquecida con cera floral de jazmín con propiedades hidratantes: la barra de labios Dior Addict sublima los labios con matices radiantes y luminosos de un brillo sensacional.",
      category: "MakeUp"
    },
    {
      id: 7,
      brand: "Dior",
      model: "DIOR ADDICT LIP TINT",
      price: 6800,
      image: "https://juleriaque.vteximg.com.br/arquivos/ids/187037-1000-1000/dior-addict-lip-tint-BEB571CEB94F9E6D8AD5A9EB985799A0.jpg?v=637919537350030000",
      stock:5,
      description:"Dior Addict Lip Tint es el primer tinte de labios Dior que no transfiere y dura 12 horas, realza los labios con un color intenso y un acabado semimate y se funde con la piel para una sensación natural. Compuesto por un 95 % de ingredientes de origen natural, Dior Addict Lip Tint está enriquecido con aceite de cereza para hidratar los labios durante 24 horas y aportarles un confort de larga duración.",
      category: "MakeUp"
    },
    {
      id: 8,
      brand: "Dior",
      model: "ROUGE DIOR MATTE",
      price: 8700,
      image: "https://juleriaque.vteximg.com.br/arquivos/ids/171988-1000-1000/rouge-dior-matte-2DBC45472C3676A3C57D69D3DBD2D7D6.jpg?v=637509947260770000",
      stock:5,
      description:"Traspasando los límites del acabado mate, el nuevo Rouge Dior combina la pasión por la alta costura, el color y los tejidos con la innovación cosmética. Ofrece un acabado mate extremo que no compromete el cuidado de los labios con 16 horas de comodidad, sin resecar los labios ni difuminarlos.",
      category: "MakeUp"
    },
    {
      id: 9,
      brand: "Kerastase",
      model: "CICAEXTREME HUILE",
      price: 11865,
      image: "https://juleriaque.vteximg.com.br/arquivos/ids/173863-1000-1000/cicaextreme-huile-74D1D3D4EBBC2986AAF791C5100D2796.jpg?v=637582358857100000",
      stock:5,
      description:"Este aceite reparador sin aclarado ofrece un tratamiento intenso para el pelo post-decolorado con protección contra el calor de hasta 230°. Restaura las cutículas y reduce las puntas abiertas, nutriendo la fibra desde el interior. Al instante, pelo 91% más fuerte y 6 veces más brillante. El extracto oleoso de Edelweiss protege y aporta elasticidad a la fibra.",
      category: "Capilar"
    },
    {
      id: 10,
      brand: "Kerastase",
      model: "DISCIPLINE HUILE OLEO",
      price: 11865,
      image: "https://juleriaque.vteximg.com.br/arquivos/ids/179387-1000-1000/discipline-huile-oleo-relax-9CCEC0A6F884EEA07947F57664A1FD26.jpg?v=637708003332070000",
      stock:5,
      description:"Serum de tratamiento Control Oléo-relax que controla el cabello seco y rebelde. Reduce el volumen y da un acabado brillante y pulido. El cabello tendrá protección térmica evitando el frizz gracias a su tecnología anti-humedad.",
      category: "Capilar"
    },
    {
      id: 11,
      brand: "Kerastase",
      model: "ELIXIR ULTIME HUILE",
      price: 11865,
      image: "https://juleriaque.vteximg.com.br/arquivos/ids/167671-1000-1000/elixir-ultime-original-398905AE45B8D1DF0B953D612E1D1696.jpg?v=637363932626970000",
      stock:5,
      description:"Óleo Brillo y protección térmica para todo tipo de cabellos Elixir.",
      category: "Capilar"
    },
  ];

  export default Products