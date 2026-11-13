/* =========================================================
   CARDÁPIO CHEERS EMPÓRIO
   Para alterar preços, basta editar os valores abaixo.
   p  = preço único          v = variações [rótulo, preço]
   d  = descrição            tag = selo opcional
   ========================================================= */
window.CHEERS_MENU = [
  {
    id: "entradas", title: "Entradas", img: "assets/fondue.jpg",
    blocks: [{ items: [
      { n: "Trinca", p: "49,90", d: "Presunto de parma, salaminho temperado, azeitonas verdes e pretas." },
      { n: "Tábua Quatro Queijos", p: "84,90", d: "Queijo parmesão, queijo gorgonzola, queijo brie, queijo provolone, mel de rapadura e geleia de pimenta." },
      { n: "Coalho Adocicado", p: "33,90", d: "Fatias de queijo coalho grelhado, cobertas com geleia de pimenta." },
      { n: "Provoleta", p: "44,90", d: "Fatias de queijo provolone grelhado, cobertas com azeite de ervas, acompanhado de torradas da casa." },
      { n: "Brie Folhado", p: "79,90", d: "Queijo brie envolto na massa folhada, coberto com geleia de damasco, acompanhado de torradas da casa." },
      { n: "Mignon na Fonduta Trufada", p: "77,90", d: "Cubos de filé mignon marinados e salteados na manteiga de ervas, fonduta de parmesão e toque de azeite trufado. Acompanhado de torradas da casa.", tag: "Destaque" },
      { n: "Camarão na Fonduta Trufada", p: "99,90", d: "Filé de camarão marinados e salteados na manteiga de ervas, fonduta de parmesão e toque de azeite trufado. Acompanhado de torradas da casa." }
    ]}]
  },
  {
    id: "petiscos", title: "Petiscos", img: "assets/croquetes.jpg",
    blocks: [
      { items: [
        { n: "Amostradinho de Carne de Sol", p: "44,90", d: "Purê de macaxeira cremoso, carne de sol desfiada e salteada na manteiga da terra, cebola roxa, queijo coalho gratinado e pixaim de carne de sol." },
        { n: "Croquete de Carne de Sol", p: "42,90", d: "Massa à base de farinha de trigo e fundo aromatizante de legumes, envolvida com carne de sol desfiada, acompanhados com creme de nata e coentro." },
        { n: "Croquete de Camarão", p: "62,90", d: "Massa à base de farinha de trigo e fundo aromatizante de legumes, envolvida com pedaços de filé de camarão, acompanhados com maionese de limão siciliano." },
        { n: "Frango à Passarinha", p: "39,90", d: "Coxa e sobrecoxa marinada, frita sob imersão e salteadas no alho e óleo. Acompanha torradas e maionese grill." },
        { n: "Frango Crocante", p: "39,90", d: "Iscas de coxa e sobrecoxa de frango desossada e marinada, fritas sob imersão, acompanhado de molho barbecue." },
        { n: "Iscas de Frango", p: "34,90", d: "Tiras de filé de frango empanadas fritas sob imersão, acompanhado de molho rosé." },
        { n: "Camarão Alho e Óleo", p: "69,90", d: "Filé de camarão salteados no alho e óleo." },
        { n: "Camarão Croc", p: "64,90", d: "Filé de camarão marinado ao leite de coco, empanado com farinha panko e frito sob imersão, acompanhado de maionese de limão siciliano." },
        { n: "Picanha Importada na Chapa", v: [["Serve 2 pessoas", "179,90"], ["Serve 4 pessoas", "319,90"]], d: "Cortes de picanha especial grelhada na chapa, acompanhada de batata canoa e cebolas douradas.", tag: "Para compartilhar" },
        { n: "Picanha Cheese", p: "182,90", d: "Tiras de picanha importada salteadas na manteiga da terra com cebola, acompanhada de batata canoa frita, creme de cheddar com catupiry e alho." },
        { n: "Costela Suína", p: "74,90", d: "Carne suína com osso, marinada, cozida no vapor e frita sob imersão, acompanhada de batata canoa e molho barbecue." },
        { n: "Suíno à Passarinha", p: "54,90", d: "Pedaços de costela suína marinados e fritos sob imersão, acompanhado de maionese de limão e batata frita." },
        { n: "Filé com Fritas", p: "89,90", d: "Tiras de filé mignon salteados ao molho madeira, acompanhado de batata frita." },
        { n: "Batata Cheers", p: "41,90", d: "Batatas canoa fritas e temperadas com manteiga de ervas, bacon e queijo provolone.", tag: "Da casa" },
        { n: "Batata Frita", p: "24,90", d: "Batata palito frita, acompanhada de molho rosé." },
        { n: "Torresmo Mineiro", p: "29,90", d: "Barriga de suíno super crocante, frita sob imersão." }
      ]},
      { sub: "Caldinhos", list: [["Feijão", "19,90"], ["Peixe", "22,90"], ["Camarão", "24,90"]] },
      { sub: "Pastéis", list: [["Carne com Azeitonas", "24,90"], ["Coalho com Orégano", "24,90"], ["Camarão com Catupiry", "34,90"], ["Carne de Sol na Nata", "24,90"], ["Frango com Bacon", "24,90"]] },
      { sub: "Adicionais", list: [["Arroz", "11,90"], ["Feijão", "11,90"], ["Espaguete", "11,90"], ["Farofa", "9,90"], ["Torradas", "9,90"], ["Ovo inteiro", "3,90"], ["Purê de Batatas", "12,90"]] }
    ]
  },
  {
    id: "carnes", title: "Carnes", group: "Pratos principais", img: "assets/risoto-file.jpg",
    blocks: [{ items: [
      { n: "Picanha Importada", p: "79,90", d: "Corte de picanha especial grelhado, acompanhado de arroz de alho e batata canoa." },
      { n: "Filé ao Dijon", p: "74,90", d: "Medalhões de filé mignon marinados e grelhados, cobertos com molho à base de mostarda dijon, acompanhados de arroz cremoso com queijo mussarela e presunto de parma crocante.", tag: "Destaque" },
      { n: "Bife Amadeirado", p: "42,90", d: "Bife de carne bovina marinado e grelhado, coberto com molho madeira, acompanhado de arroz cremoso de queijo parmesão e batata frita." },
      { n: "Filé à Parmegiana", p: "53,90", d: "Bife de filé mignon marinado, empanado e frito, coberto com nosso molho de tomate artesanal e queijo mussarela maçaricado, acompanhado de espaguete ao mesmo molho e batata frita." },
      { n: "Bife à Parmegiana", p: "99,90", d: "Serve 3 pessoas. Bife bovino marinado, empanado e frito, coberto com nosso molho de tomate artesanal e queijo mussarela maçaricado, acompanhado de espaguete ao mesmo molho e batata frita.", tag: "Serve 3" },
      { n: "Bife Grelhado", p: "34,90", d: "Bife bovino grelhado, acompanhado de arroz branco, feijão no caldo, farofa e vinagrete." },
      { n: "Carne de Sol na Nata", p: "36,90", d: "Carne de sol desfiada e salteada na manteiga da terra com cebolas roxas e creme de nata, acompanhada de arroz de leite, feijão verde, farofa e vinagrete." },
      { n: "Baião de Dois", v: [["Individual", "44,90"], ["Serve 4 pessoas", "99,90"]], d: "Carne de charque salteada na manteiga da terra com cebolas roxas em tiras, feijão carioca, arroz branco e queijo coalho em cubos." },
      { n: "Porpetone à Italiana", p: "39,90", d: "Blend de carne bovina recheado com queijo mussarela, empanado e frito sob imersão, coberto com molho de tomate artesanal, acompanhado de espaguete ao alho e óleo." },
      { n: "Espaguete à Bolonhesa", p: "32,90", d: "Espaguete cozido e salteado ao alho e óleo, molho de tomate artesanal com carne moída e queijo parmesão." },
      { n: "Almôndegas", v: [["Individual", "32,90"], ["Serve 3 pessoas", "79,90"]], d: "Bolinhos de carne ensopados no molho de tomate artesanal com espaguete." }
    ]}]
  },
  {
    id: "frangos", title: "Frangos", group: "Pratos principais", img: "assets/frango-espaguete.jpg",
    blocks: [{ items: [
      { n: "Frango à Parmegiana", p: "26,90", d: "Filé de frango marinado, empanado e frito, coberto com nosso molho de tomate artesanal e queijo mussarela maçaricado, acompanhado de arroz e purê." },
      { n: "Frango à Parmegiana (Serve 3)", p: "79,90", d: "Filé de frango marinado, empanado e frito, coberto com nosso molho de tomate artesanal e queijo mussarela maçaricado, acompanhado de espaguete ao mesmo molho e batata frita.", tag: "Serve 3" },
      { n: "Frango à Cubana", p: "32,90", d: "Filé de frango marinado, empanado e frito, acompanhado de arroz à grega, banana empanada e purê de batatas." },
      { n: "Frango Crispy", p: "29,90", d: "Iscas de coxa e sobrecoxa de frango desossada, marinada, empanada e frita, acompanhada de espaguete ao quatro queijos." },
      { n: "Filé de Frango", p: "29,90", d: "Filé de frango grelhado, acompanhado de arroz branco, salada e feijão no caldo." },
      { n: "Strogonoff de Frango", p: "22,90", d: "Iscas de filé de frango salteadas com cogumelos champignon ao creme flambado com conhaque, acompanhado de arroz branco e batata palha." },
      { n: "Frango Grelhado", p: "29,90", d: "Filé de frango grelhado, acompanhado de arroz integral com brócolis e salada." }
    ]}]
  },
  {
    id: "frutos-do-mar", title: "Frutos do Mar", group: "Pratos principais", img: "assets/risoto-camarao.jpg",
    blocks: [{ items: [
      { n: "Risoto de Camarão", p: "69,90", d: "Filé de camarão salteado com manteiga de camarão da casa, arroz arbóreo cremoso, cubos de tomate e queijo parmesão curado." },
      { n: "Camarão aos Queijos", p: "49,90", d: "Filé de camarão salteado e ensopado com molho de queijos especiais, acompanhado de fettuccine alho e óleo." },
      { n: "Camarão Internacional do Empório", v: [["Individual", "74,90"], ["Serve 3 pessoas", "159,90"]], d: "Filé de camarão salteado na manteiga de ervas com arroz, presunto, azeitonas, tomate seco, salsinha, queijo parmesão, queijo mussarela, creme de leite e queijo catupiry, acompanhado de batata palha.", tag: "Assinatura" },
      { n: "Peixe à Dorê", p: "54,90", d: "Filé de pescada amarela marinado com ervas, envolvido no creme de ovo e frito, acompanhado de arroz cremoso de limão e legumes salteados." },
      { n: "Camarões Panko", p: "54,90", d: "Filé de camarão marinado e empanado na farinha panko, frito sob imersão, acompanhado de risoto cremoso de queijo parmesão." },
      { n: "Salmão Grelhado", p: "89,90", d: "Filé de salmão grelhado com manteiga de ervas, acompanhado de risoto de brie com damasco." },
      { n: "Camarão Grelhado", p: "45,90", d: "Filé de camarão marinado e grelhado, acompanhado de arroz branco e salada." },
      { n: "Peixe Grelhado", p: "45,90", d: "Filé de pescada amarela marinado ao limão e grelhado, acompanhado de arroz integral com cenoura ralada e purê de batata." }
    ]}]
  },
  {
    id: "saladas-veganos", title: "Saladas & Veganos", group: "Pratos principais", img: "assets/salada.jpg",
    blocks: [
      { sub: "Salada", items: [
        { n: "Salada Cheers", p: "24,90", d: "Mix de folhas com tomates-cereja, croutons, picles de cebola roxa e molho cheers." }
      ]},
      { sub: "Adicione uma proteína (100g)", list: [["Carne", "15,90"], ["Frango", "12,90"], ["Camarão", "27,90"]] },
      { sub: "Veganos", items: [
        { n: "Risoto Vegano", p: "36,90", d: "Cogumelos champignon salteados com ervas finas e caldo de legumes artesanal, arroz arbóreo cremoso, alho-poró e cebola roxa.", tag: "Vegano" },
        { n: "Strogonoff de Banana da Terra", p: "36,90", d: "Rodelas de banana da terra salteadas com cogumelos champignon ao creme de aveia com molho de tomate artesanal e mostarda. Acompanhado de arroz branco e batata palha.", tag: "Vegano" }
      ]}
    ]
  },
  {
    id: "sobremesas", title: "Sobremesas", img: "assets/sobremesa.jpg",
    blocks: [{ items: [
      { n: "Cartola Caramelizada", p: "34,90", d: "Banana grelhada com açúcar, canela e queijo de manteiga envolto na massa de crepe doce, coberta de açúcar caramelizado na mesa.", tag: "Na mesa" },
      { n: "Brownie", p: "24,90", d: "Fatia de brownie quente, recheado com chocolate, servido com uma bola de sorvete de creme e coberto de calda de nutella." },
      { n: "Petit Gateau", p: "29,90", d: "Bolinho de chocolate com sorvete de creme e calda de chocolate." },
      { n: "Le Chocolat", p: "34,90", d: "Esfera de chocolate recheada com sorvete de creme, geleia de morango, farofa de castanha e crocante de amendoim, acompanhada de calda de chocolate quente." },
      { n: "Banoffee", p: "19,90", d: "Bananas em rodelas com doce de leite, açúcar, canela e chantilly." }
    ]}]
  },
  {
    id: "lanches", title: "Lanches",
    blocks: [
      { items: [
        { n: "Queijo Quente", p: "9,90", d: "Pão de caixa assado e recheado com queijo mussarela gratinado." },
        { n: "Misto Quente", p: "8,90", d: "Pão de caixa assado e recheado com queijo e presunto gratinado." },
        { n: "Americano", p: "16,90", d: "Pão de caixa assado e recheado com queijo, presunto, ovo frito e salada." },
        { n: "Mercadão", p: "19,90", d: "Pão francês assado recheado com bastante mortadela defumada e queijo mussarela gratinado." },
        { n: "Pão na Chapa", p: "4,90", d: "Pão francês com manteiga tostado na chapa." },
        { n: "Churras no Pão", p: "29,90", d: "Fatia dupla de pão de caixa grelhado, recheado com contrafilé grelhado, molho branco e catupiry." },
        { n: "Frango Cheers", p: "21,90", d: "Fatias de pão de caixa tostadas na chapa, recheado com creme de frango, catupiry, cenoura e salada." },
        { n: "Cheers Burguer", p: "34,90", d: "Pão bola assado na chapa, recheado com blend de carne bovina com queijo mussarela, grelhado na chapa, salada, molho rosé e presunto de parma crocante.", tag: "Da casa" }
      ]},
      { sub: "Tapioca com Manteiga · R$ 3,90", note: "Acompanha vinagrete. Adicionais:", list: [["Frango desfiado com bacon", "16,90"], ["Frango desfiado", "11,90"], ["Carne de sol na nata", "16,90"], ["Carne acebolada", "14,90"], ["Calabresa acebolada", "12,90"], ["Queijo coalho", "13,90"], ["Ovo", "3,90"]] },
      { sub: "Crepiocas", note: "Acompanha vinagrete.", list: [["Frango desfiado com bacon", "21,90"], ["Frango desfiado", "15,90"], ["Carne de sol na nata", "21,90"], ["Carne acebolada", "19,90"], ["Calabresa acebolada", "17,90"], ["Queijo coalho", "18,90"], ["Ovo", "3,90"]] },
      { sub: "Cuscuz com Manteiga · R$ 4,90", note: "Acompanha vinagrete. Adicionais:", list: [["Frango desfiado com bacon", "16,90"], ["Frango desfiado", "11,90"], ["Carne de sol na nata", "16,90"], ["Carne acebolada", "14,90"], ["Calabresa acebolada", "12,90"], ["Ovo mexido ou frito", "3,90"], ["Charque acebolada", "14,90"], ["Queijo coalho", "13,90"]] }
    ]
  },
  {
    id: "sucos-cafes", title: "Sucos, Cafés & Bebidas",
    blocks: [
      { sub: "Sucos", note: "Copo ou jarra.", items: [
        { n: "Limão", v: [["Copo", "10,90"], ["Jarra", "22,90"]] },
        { n: "Laranja", v: [["Copo", "11,90"], ["Jarra", "23,90"]] },
        { n: "Morango", v: [["Copo", "12,90"], ["Jarra", "24,90"]] },
        { n: "Laranja com Morango", v: [["Copo", "16,90"], ["Jarra", "26,90"]] },
        { n: "Abacaxi", v: [["Copo", "11,90"], ["Jarra", "22,90"]] },
        { n: "Abacaxi com Hortelã", v: [["Copo", "13,90"], ["Jarra", "24,90"]] },
        { n: "Maracujá", v: [["Copo", "12,90"], ["Jarra", "22,90"]] },
        { n: "Limonada Suíça", v: [["Copo", "17,90"], ["Jarra", "29,90"]] }
      ]},
      { sub: "Cafés", list: [["Café coado pequeno", "2,00"], ["Café coado grande", "4,00"], ["Café expresso pequeno", "6,00"], ["Café expresso grande", "10,00"], ["Café com leite", "8,00"], ["Cappuccino", "12,00"]] },
      { sub: "Águas", list: [["Com gás 500ml", "6,00"], ["Sem gás 500ml", "4,00"], ["Tônica", "6,50"]] },
      { sub: "Refrigerantes lata", list: [["Guaraná Antarctica", "7,00"], ["Coca-Cola", "7,00"], ["Fanta", "7,00"], ["Soda", "7,00"], ["Sprite", "7,00"], ["Pepsi", "7,00"], ["H2O", "7,50"]] },
      { sub: "Energéticos", list: [["Red Bull 250ml", "14,90"], ["Red Bull Sabores 250ml", "16,90"], ["Monster 473ml", "16,90"]] }
    ]
  },
  {
    id: "drinks", title: "Drinks",
    blocks: [
      { sub: "Caipiroska", list: [["Smirnoff + limão", "21,90"], ["Smirnoff + morango, abacaxi, maracujá ou kiwi", "24,90"], ["Smirnoff + duas frutas", "32,90"], ["Absolut + limão", "26,90"], ["Absolut + morango, abacaxi, maracujá ou kiwi", "31,90"], ["Absolut + duas frutas", "36,90"]] },
      { sub: "Caipirinha", list: [["Limão", "14,90"], ["Morango, abacaxi, maracujá ou kiwi", "16,90"], ["Duas frutas", "19,90"]] },
      { sub: "Autorais & clássicos", items: [
        { n: "Lemon 43", p: "36,90", d: "Licor 43, sumo de limão, schweppes e gelo." },
        { n: "Big Father", p: "44,90", d: "Black Label, conhaque, licor de maçã verde e água com gás." },
        { n: "Junino", p: "32,90", d: "Conhaque, leite condensado, creme de leite e paçoca." },
        { n: "Lagoa Azul", p: "22,90", d: "Vodka, curaçau blue, sumo de limão e soda." },
        { n: "Nebulosa", p: "29,90", d: "Vodka, licor de cassis, fanta uva e glíter comestível." },
        { n: "Ilha da Magia", p: "29,90", d: "Gin, licor de kiwi, sumo de limão e glíter comestível." },
        { n: "Alexandre", p: "34,90", d: "Conhaque, leite condensado, licor de chocolate e creme de leite." },
        { n: "Amarula Cream", p: "39,90", d: "Amarula, vodka e maracujá." },
        { n: "Moscow Mule", p: "36,90", d: "Vodka, xarope de gengibre, sumo de limão e espuma de gengibre." },
        { n: "Gin Frutada", p: "29,90", d: "Gin, tônica, xarope e frutas." },
        { n: "Gin Pitaia", p: "34,90", d: "Gin, tônica e pitaia." },
        { n: "Gin Tônica", v: [["Nacional", "26,90"], ["Importada", "39,90"]], d: "Gin, água tônica, limão siciliano e gelo." },
        { n: "Dry Martini", p: "26,90", d: "Martini extra dry, gin e limão." },
        { n: "Mojito", p: "22,90", d: "Rum Montilla cristal, sumo de limão, soda e hortelã." },
        { n: "Coquetel sem Álcool", p: "22,90", d: "Escolha sua fruta.", tag: "Sem álcool" },
        { n: "Marguerita", p: "29,90", d: "Tequila, cointreau, sumo de limão e licor de laranja." },
        { n: "Sexy on the Beach", p: "32,90", d: "Vodka, licor de pêssego e suco de laranja." },
        { n: "Piña Colada", p: "29,90", d: "Abacaxi, rum Montilla, creme de leite, leite condensado, leite de coco e coco ralado." },
        { n: "Soda Italiana", p: "19,90", d: "Xarope de fruta e água com gás.", tag: "Sem álcool" },
        { n: "Cozumel", p: "34,90", d: "Corona, limão e sal." },
        { n: "Cosmopolitan", p: "34,90", d: "Vodka, licor de laranja e cranberry." },
        { n: "Brandy", p: "34,90", d: "Licor Amarula, conhaque e creme de leite." },
        { n: "Barbie Drink", p: "29,90", d: "Vodka, soda, xarope de morango e chantilly." },
        { n: "Blueblend", p: "36,90", d: "Licor de pêssego, whisky e limão siciliano." },
        { n: "Tropicalia", p: "32,90", d: "Cachaça, limão siciliano, manjericão e maracujá." },
        { n: "Campari Tônica", p: "22,90", d: "Campari e água tônica." },
        { n: "Negroni", p: "36,90", d: "Gin, campari e martini rosso." }
      ]}
    ]
  },
  {
    id: "cervejas", title: "Cervejas",
    blocks: [
      { items: [
        { n: "Budweiser", v: [["Garrafa 600ml", "13,90"], ["Long neck", "9,90"]] },
        { n: "Heineken", v: [["Garrafa 600ml", "18,90"], ["Long neck", "10,90"], ["Long neck zero", "10,90"]] },
        { n: "Spaten", v: [["Garrafa 600ml", "15,90"], ["Long neck", "9,90"]] },
        { n: "Stella Artois", v: [["Garrafa 600ml", "16,90"], ["Long neck", "10,90"]] },
        { n: "Original", v: [["Garrafa 600ml", "14,90"]] },
        { n: "Coronita", v: [["Long neck", "9,90"]] },
        { n: "Corona", v: [["Long neck", "12,90"]] }
      ]},
      { sub: "Drinks prontos", list: [["Skol Beats Senses · long neck", "12,90"], ["Skol Beats Red Mix · long neck", "12,90"], ["Skol Beats GT · long neck", "12,90"]] }
    ]
  },
  {
    id: "destilados", title: "Destilados",
    blocks: [
      { sub: "Whisky", items: [
        { n: "Johnnie Walker Gold", v: [["Litro", "499,90"], ["Dose", "39,90"]] },
        { n: "Johnnie Walker Black", v: [["Litro", "299,90"], ["Dose", "24,90"]] },
        { n: "Johnnie Walker Red", v: [["Litro", "179,90"], ["Dose", "19,90"]] },
        { n: "Buchanan's 12 Anos", v: [["Litro", "389,90"], ["Dose", "29,90"]] },
        { n: "Old Parr", v: [["Litro", "299,90"], ["Dose", "24,90"]] },
        { n: "Black & White", v: [["Litro", "119,90"], ["Dose", "14,90"]] }
      ]},
      { sub: "Vodka", items: [
        { n: "Grey Goose", v: [["Litro", "299,90"], ["Dose", "24,90"]] },
        { n: "Cîroc", v: [["Litro", "319,90"], ["Dose", "26,90"]] },
        { n: "Absolut", v: [["Litro", "179,90"], ["Dose", "19,90"]] },
        { n: "Smirnoff", v: [["Litro", "99,90"], ["Dose", "10,90"]] }
      ]},
      { sub: "Gin", items: [
        { n: "Tanqueray", v: [["Litro", "199,90"], ["Dose", "24,90"]] },
        { n: "Bombay", v: [["Litro", "189,90"], ["Dose", "22,90"]] }
      ]},
      { sub: "Tequila", items: [
        { n: "José Cuervo Silver", v: [["Litro", "289,90"], ["Dose", "22,90"]] },
        { n: "José Cuervo Gold", v: [["Litro", "289,90"], ["Dose", "22,90"]] }
      ]},
      { sub: "Destilados diversos", items: [
        { n: "Campari", v: [["Litro", "99,90"], ["Dose", "10,90"]] },
        { n: "Aperol", v: [["Garrafa", "129,90"], ["Dose", "15,90"]] },
        { n: "Rum Montilla", v: [["Litro", "74,90"], ["Dose", "9,90"]] },
        { n: "Rum Bacardi", v: [["Litro", "119,90"], ["Dose", "14,90"]] },
        { n: "Conhaque Domecq", v: [["Dose", "15,90"]] },
        { n: "Martini Bianco", v: [["Litro", "79,90"], ["Dose", "9,90"]] },
        { n: "Martini Rosé", v: [["Litro", "99,90"], ["Dose", "10,90"]] },
        { n: "Licor 43", v: [["700ml", "299,90"], ["Dose", "22,90"]] },
        { n: "Amarula", v: [["Dose", "24,90"]] },
        { n: "Cointreau", v: [["Dose", "24,90"]] }
      ]},
      { sub: "Cachaça", items: [
        { n: "Rainha", v: [["600ml", "59,90"], ["Dose", "7,90"]] },
        { n: "Salinas", v: [["Litro", "109,90"], ["Dose", "7,90"]] },
        { n: "Volúpia", v: [["Litro", "79,90"], ["Dose", "6,90"]] },
        { n: "Serra Preta", v: [["700ml", "59,90"], ["Dose", "6,90"]] },
        { n: "Serra Limpa", v: [["355ml", "59,90"]] },
        { n: "Matuta Abelha Rainha", v: [["Long neck", "24,90"]] },
        { n: "Matuta Umburana", v: [["Long neck", "24,90"]] },
        { n: "Matuta Bálsamo", v: [["Long neck", "24,90"]] },
        { n: "Matuta Canela", v: [["Long neck", "24,90"]] },
        { n: "Matuta Cristal", v: [["Long neck", "19,90"]] }
      ]},
      { note: "Taxa de rolha: R$ 100,00." }
    ]
  }
];
