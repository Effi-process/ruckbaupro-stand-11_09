/**
 * German Cities Database for SEO-Optimized Local Pages
 * 50 Largest Cities Around Bielefeld for Professional Demolition Services
 */

export interface CityData {
  name: string;
  slug: string;
  state: string;
  population: number;
  postalCodes: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceFromBielefeld: number; // in km
  seoKeywords: string[];
  localFeatures: string[];
  emergencyNumber: string;
  serviceAreas: string[];
}

export const CITIES_DATA: CityData[] = [
  // Major NRW Cities
  {
    name: "Bielefeld",
    slug: "bielefeld",
    state: "Nordrhein-Westfalen",
    population: 334755,
    postalCodes: ["33602", "33604", "33605", "33607", "33609", "33611", "33613", "33615", "33617", "33619"],
    coordinates: { lat: 52.0302, lng: 8.5325 },
    distanceFromBielefeld: 0,
    seoKeywords: ["Rückbau Bielefeld", "Abbruch Bielefeld", "Entkernung Bielefeld", "Entsorgung Bielefeld"],
    localFeatures: ["Teutoburger Wald", "Sparrenburg", "Universität Bielefeld", "Senne"],
    emergencyNumber: "+49 174 8083023",
    serviceAreas: ["Innenstadt", "Senne", "Heepen", "Stieghorst", "Brackwede", "Gadderbaum", "Sennestadt", "Jöllenbeck", "Dornberg", "Mitte"]
  },
  {
    name: "Hannover",
    slug: "hannover",
    state: "Niedersachsen",
    population: 535932,
    postalCodes: ["30159", "30161", "30163", "30165", "30167", "30169", "30171", "30173", "30175", "30177", "30179", "30419", "30451", "30453", "30455", "30457", "30459", "30519", "30521", "30539", "30559", "30625", "30627", "30629", "30655", "30657", "30659", "30669", "30823", "30827", "30880", "30890", "30916", "30918", "30952", "30966", "30974", "30989", "31061", "31137", "31139"],
    coordinates: { lat: 52.3759, lng: 9.7320 },
    distanceFromBielefeld: 120,
    seoKeywords: ["Rückbau Hannover", "Abbruch Hannover", "Entkernung Hannover", "Entsorgung Hannover", "Gebäuderückbau Hannover"],
    localFeatures: ["Herrenhäuser Gärten", "Maschsee", "Altstadt", "Eilenriede"],
    emergencyNumber: "+49 174 8083023",
    serviceAreas: ["Mitte", "Vahrenwald-List", "Bothfeld-Vahrenheide", "Buchholz-Kleefeld", "Misburg-Anderten", "Kirchrode-Bemerode-Wülferode", "Südstadt-Bult", "Döhren-Wülfel", "Ricklingen", "Linden-Limmer", "Ahlem-Badenstedt-Davenstedt", "Herrenhausen-Stöcken", "Nord"]
  },
  {
    name: "Münster",
    slug: "muenster",
    state: "Nordrhein-Westfalen",
    population: 315293,
    postalCodes: ["48143", "48145", "48147", "48149", "48151", "48153", "48155", "48157", "48159", "48161", "48163", "48165", "48167"],
    coordinates: { lat: 51.9607, lng: 7.6261 },
    distanceFromBielefeld: 65,
    seoKeywords: ["Rückbau Münster", "Abbruch Münster", "Entkernung Münster", "KMF Sanierung Münster", "Asbestgutachten Münster"],
    localFeatures: ["Prinzipalmarkt", "Schloss Münster", "Aasee", "Universität Münster"],
    emergencyNumber: "0800-251-0060970",
    serviceAreas: ["Mitte", "Nord", "Ost", "West", "Süd-Ost", "Hiltrup", "Amelsbüren", "Roxel", "Nienberge", "Sprakel", "Gelmer", "Kinderhaus", "Coerde", "Gievenbeck", "Sentrup", "Mauritz", "St. Mauritz", "Pluggendorf", "Gremmendorf", "Angelmodde", "Wolbeck", "Berg Fidel", "Geist", "Düesberg", "Albachten", "Häger"]
  },
  {
    name: "Osnabrück",
    slug: "osnabrueck",
    state: "Niedersachsen",
    population: 165034,
    postalCodes: ["49074", "49076", "49078", "49080", "49082", "49084", "49086", "49088", "49090", "49124", "49134", "49143", "49191", "49201", "49203", "49205", "49207", "49209", "49324", "49326", "49328", "49356", "49377", "49393"],
    coordinates: { lat: 52.2799, lng: 8.0472 },
    distanceFromBielefeld: 45,
    seoKeywords: ["Rückbau Osnabrück", "Abbruch Osnabrück", "Entkernung Osnabrück", "Asbestanalyse Osnabrück", "TRGS 519 Osnabrück"],
    localFeatures: ["Altstadt", "Teutoburger Wald", "Universität Osnabrück", "Wiehengebirge"],
    emergencyNumber: "0800-541-0060970",
    serviceAreas: ["Innenstadt", "Weststadt", "Westerberg", "Eversburg", "Hafen", "Fledder", "Schölerberg", "Kalkhügel", "Wüste", "Sonnenhügel", "Haste", "Dodesheide", "Atter", "Pye", "Hellern", "Belm", "Sutthausen", "Gretesch", "Lüstringen", "Voxtrup", "Nahne"]
  },
  {
    name: "Paderborn",
    slug: "paderborn",
    state: "Nordrhein-Westfalen",
    population: 152531,
    postalCodes: ["33098", "33100", "33102", "33104", "33106", "33129", "33154", "33178", "33181", "33184", "33189"],
    coordinates: { lat: 51.7189, lng: 8.7575 },
    distanceFromBielefeld: 42,
    seoKeywords: ["Rückbau Paderborn", "Abbruch Paderborn", "Entkernung Paderborn", "Eternitplatten Paderborn", "Asbestdach Paderborn"],
    localFeatures: ["Dom", "Universität Paderborn", "Paderquellgebiet", "Heinz Nixdorf MuseumsForum"],
    emergencyNumber: "0800-5251-0060970",
    serviceAreas: ["Zentrum", "Elsen", "Schloß Neuhaus", "Sande", "Marienloh", "Dahl", "Neuenbeken", "Wewer", "Benhausen"]
  },
  {
    name: "Göttingen",
    slug: "goettingen",
    state: "Niedersachsen",
    population: 117665,
    postalCodes: ["37073", "37075", "37077", "37079", "37081", "37083", "37085", "37115", "37120", "37124", "37127", "37130", "37133", "37136", "37139", "37154", "37176", "37181", "37186", "37191", "37194", "37196", "37199"],
    coordinates: { lat: 51.5414, lng: 9.9156 },
    distanceFromBielefeld: 130,
    seoKeywords: ["Rückbau Göttingen", "Abbruch Göttingen", "Entkernung Göttingen", "Universität Göttingen Asbest", "Asbesttest Göttingen"],
    localFeatures: ["Georg-August-Universität", "Altstadt", "Gänseliesel", "Hainberg"],
    emergencyNumber: "0800-551-0060970",
    serviceAreas: ["Innenstadt", "Nordstadt", "Weststadt", "Oststadt", "Südstadt", "Weende", "Nikolausberg", "Herberhausen", "Geismar", "Grone", "Elliehausen", "Hetjershausen", "Roringen", "Groß Ellershausen"]
  },
  {
    name: "Kassel",
    slug: "kassel",
    state: "Hessen",
    population: 201048,
    postalCodes: ["34117", "34119", "34121", "34123", "34125", "34127", "34128", "34130", "34131", "34132", "34134", "34136", "34212", "34225", "34233", "34246", "34253", "34260", "34270", "34277", "34281", "34302", "34308", "34317", "34320", "34346", "34369", "34379", "34385", "34388", "34393", "34396", "34399"],
    coordinates: { lat: 51.3127, lng: 9.4797 },
    distanceFromBielefeld: 145,
    seoKeywords: ["Rückbau Kassel", "Abbruch Kassel", "Entkernung Kassel", "Wilhelmshöhe Asbest", "Documenta Stadt Rückbau"],
    localFeatures: ["Bergpark Wilhelmshöhe", "Documenta", "Universität Kassel", "Karlsaue"],
    emergencyNumber: "0800-561-0060970",
    serviceAreas: ["Mitte", "Süd", "West", "Nord-Holland", "Ost", "Bad Wilhelmshöhe", "Brasselsberg", "Harleshausen", "Kirchditmold", "Rothenditmold", "Fasanenhof", "Wehlheiden", "Unterneustadt", "Philippinenhof/Warteberg", "Waldau", "Niederzwehren", "Oberzwehren", "Nordshausen", "Jungfernkopf", "Forstfeld", "Sandershausen", "Wolfsanger/Hasenhecke"]
  },
  {
    name: "Gütersloh",
    slug: "guetersloh",
    state: "Nordrhein-Westfalen",
    population: 102424,
    postalCodes: ["33330", "33332", "33334", "33335"],
    coordinates: { lat: 51.9066, lng: 8.3859 },
    distanceFromBielefeld: 19,
    seoKeywords: ["Rückbau Gütersloh", "Abbruch Gütersloh", "Entkernung Gütersloh", "Bertelsmann Stadt Asbest", "Gütersloh TRGS 519"],
    localFeatures: ["Stadtpark", "Bertelsmann", "Mohns Park", "Parkbad"],
    emergencyNumber: "0800-5241-0060970",
    serviceAreas: ["Innenstadt", "Kattenstroth", "Spexard", "Friedrichsdorf", "Pavenstädt", "Niehorst", "Sundern", "Avenwedde", "Isselhorst"]
  },
  {
    name: "Detmold",
    slug: "detmold",
    state: "Nordrhein-Westfalen",
    population: 74335,
    postalCodes: ["32756", "32758", "32760"],
    coordinates: { lat: 51.9387, lng: 8.8793 },
    distanceFromBielefeld: 30,
    seoKeywords: ["Rückbau Detmold", "Abbruch Detmold", "Entkernung Detmold", "Lippe Rückbau", "Hermannsdenkmal Asbest"],
    localFeatures: ["Hermannsdenkmal", "Residenzschloss", "Teutoburger Wald", "Externsteine"],
    emergencyNumber: "0800-5231-0060970",
    serviceAreas: ["Innenstadt", "Hiddesen", "Heiligenkirchen", "Berlebeck", "Diestelbruch", "Pivitsheide", "Pivitsheide V.H.", "Remmighausen", "Hakedahl", "Nienhagen", "Jerxen-Orbke", "Klüt", "Spork-Eichholz"]
  },
  {
    name: "Lemgo",
    slug: "lemgo",
    state: "Nordrhein-Westfalen",
    population: 41666,
    postalCodes: ["32657"],
    coordinates: { lat: 52.0277, lng: 9.0413 },
    distanceFromBielefeld: 25,
    seoKeywords: ["Rückbau Lemgo", "Abbruch Lemgo", "Entkernung Lemgo", "Weserrenaissance Asbest", "Hexenbürgermeisterhaus Sanierung"],
    localFeatures: ["Weserrenaissance", "Hexenbürgermeisterhaus", "Altstadt", "Weser"],
    emergencyNumber: "0800-5261-0060970",
    serviceAreas: ["Altstadt", "Brake", "Lieme", "Voßheide", "Kirchheide", "Lüerdissen", "Wahmbeck", "Matorf"]
  },
  // Additional major cities within service range
  {
    name: "Düsseldorf",
    slug: "duesseldorf",
    state: "Nordrhein-Westfalen",
    population: 619477,
    postalCodes: ["40210", "40211", "40212", "40213", "40215", "40217", "40219", "40221", "40223", "40225", "40227", "40229", "40231", "40233", "40235", "40237", "40239", "40468", "40470", "40472", "40474", "40476", "40477", "40479", "40489", "40545", "40547", "40549", "40591", "40593", "40595", "40597", "40599", "40625", "40627", "40629", "40670", "40721", "40723", "40724", "40880", "40882", "40883", "40885"],
    coordinates: { lat: 51.2277, lng: 6.7735 },
    distanceFromBielefeld: 180,
    seoKeywords: ["Rückbau Düsseldorf", "Abbruch Düsseldorf", "Entkernung Düsseldorf", "Königsallee Rückbau", "Altstadt Düsseldorf Asbest"],
    localFeatures: ["Königsallee", "Rheinuferpromenade", "Altstadt", "Medienhafen"],
    emergencyNumber: "0800-211-0060970",
    serviceAreas: ["Stadtmitte", "Carlstadt", "Altstadt", "Pempelfort", "Derendorf", "Golzheim", "Stockum", "Lohausen", "Kaiserswerth", "Wittlaer", "Angermund", "Kalkum", "Oberkassel", "Niederkassel", "Lörick", "Heerdt", "Bilk", "Volmerswerth", "Flehe", "Himmelgeist", "Itter", "Holthausen", "Reisholz", "Benrath", "Urdenbach", "Hassels", "Garath", "Hellerhof", "Wersten", "Eller", "Lierenfeld", "Unterbach", "Vennhausen", "Düsseltal", "Flingern-Nord", "Flingern-Süd", "Oberbilk", "Friedrichstadt", "Unterbilk", "Hafen", "Hamm", "Volmerswerth", "Gerresheim", "Grafenberg", "Hubbelrath", "Knittkuhl", "Ludenberg", "Rath", "Mörsenbroich", "Unterrath", "Lichtenbroich", "Unterrath"]
  },
  {
    name: "Dortmund",
    slug: "dortmund",
    state: "Nordrhein-Westfalen",
    population: 588250,
    postalCodes: ["44135", "44137", "44139", "44141", "44143", "44145", "44147", "44149", "44225", "44227", "44229", "44263", "44265", "44267", "44269", "44287", "44289", "44291", "44293", "44295", "44309", "44319", "44328", "44339", "44357", "44369", "44379", "44388", "44532", "44534", "44536", "44577", "44579", "44581", "44627", "44629", "44649", "44651", "44653", "44661", "44663", "44665", "44667", "44669", "44671", "44673", "44675", "44677", "44679", "44681", "44683", "44685", "44687", "44689", "44691", "44693", "44695", "44697", "44699", "44701", "44703", "44705", "44707", "44709", "44711", "44713", "44715", "44717", "44719", "44721", "44787", "44789", "44791", "44793", "44795", "44797", "44799", "44801", "44803", "44805", "44807", "44809", "44811", "44813", "44815", "44817", "44819", "44821", "44823", "44825", "44827", "44829", "44831", "44833", "44835", "44837", "44839", "44841", "44843", "44845", "44847", "44849", "44851", "44853", "44855", "44857", "44859", "44861", "44863", "44865", "44867", "44869", "44871", "44873", "44875", "44877", "44879", "44881", "44883", "44885", "44887", "44889", "44891", "44893", "44895", "44897", "44899"],
    coordinates: { lat: 51.5136, lng: 7.4653 },
    distanceFromBielefeld: 120,
    seoKeywords: ["Rückbau Dortmund", "Abbruch Dortmund", "Entkernung Dortmund", "BVB Stadion Asbest", "Ruhrgebiet Rückbau"],
    localFeatures: ["Signal Iduna Park", "Deutsches Fußballmuseum", "Dortmunder U", "Phoenix Lake"],
    emergencyNumber: "0800-231-0060970",
    serviceAreas: ["Innenstadt-West", "Innenstadt-Nord", "Innenstadt-Ost", "Eving", "Scharnhorst", "Brackel", "Aplerbeck", "Hörde", "Hombruch", "Lütgendortmund", "Huckarde", "Mengede"]
  },
  {
    name: "Essen",
    slug: "essen",
    state: "Nordrhein-Westfalen",
    population: 579432,
    postalCodes: ["45127", "45128", "45130", "45131", "45133", "45134", "45136", "45138", "45139", "45141", "45143", "45144", "45145", "45147", "45149", "45219", "45239", "45257", "45259", "45276", "45277", "45279", "45307", "45309", "45326", "45327", "45329", "45355", "45356", "45357", "45359", "45365", "45367", "45369", "45375", "45377", "45379", "45388", "45389", "45143", "45144", "45145", "45147", "45149", "45219", "45239", "45257", "45259", "45276", "45277", "45279", "45307", "45309", "45326", "45327", "45329", "45355", "45356", "45357", "45359", "45365", "45367", "45369", "45375", "45377", "45379", "45388", "45389"],
    coordinates: { lat: 51.4556, lng: 7.0116 },
    distanceFromBielefeld: 150,
    seoKeywords: ["Rückbau Essen", "Abbruch Essen", "Entkernung Essen", "Zollverein Asbest", "Ruhrgebiet Entkernung"],
    localFeatures: ["Zollverein", "Ruhrmuseum", "Grugapark", "Baldeneysee"],
    emergencyNumber: "0800-201-0060970",
    serviceAreas: ["I (Stadtmitte)", "II (Rüttenscheid)", "III (Essen-West)", "IV (Borbeck)", "V (Altenessen)", "VI (Zollverein)", "VII (Steele)", "VIII (Essen-Ost)", "IX (Werden)"]
  },
  {
    name: "Bremen",
    slug: "bremen",
    state: "Bremen",
    population: 569352,
    postalCodes: ["28195", "28197", "28199", "28203", "28205", "28207", "28209", "28211", "28213", "28215", "28217", "28259", "28277", "28279", "28307", "28309", "28325", "28327", "28329", "28355", "28357", "28359", "28361", "28717", "28719", "28755", "28757", "28759"],
    coordinates: { lat: 53.0793, lng: 8.8017 },
    distanceFromBielefeld: 120,
    seoKeywords: ["Rückbau Bremen", "Abbruch Bremen", "Entkernung Bremen", "Hansestadt Bremen Asbest", "Weser Rückbau"],
    localFeatures: ["Bremer Stadtmusikanten", "Schnoor", "Überseemuseum", "Bürgerpark"],
    emergencyNumber: "0800-421-0060970",
    serviceAreas: ["Mitte", "Schwachhausen", "Vahr", "Horn-Lehe", "Borgfeld", "Oberneuland", "Osterholz", "Hemelingen", "Sebaldsbrück", "Ostertor", "Steintor", "Östliche Vorstadt", "Schwachhausen", "Radio Bremen", "Barkhof", "Bürgerweide", "Peterswerder", "Neustadt", "Hohentor", "Gartenstadt Süd", "Buntentor", "Obervieland", "Habenhausen", "Arsten", "Kattenturm", "Kattenesch", "Woltmershausen", "Strom", "Seehausen", "Steffensweg", "Huckelriede", "Südervorstadt"]
  },
  {
    name: "Hamburg",
    slug: "hamburg",
    state: "Hamburg",
    population: 1899160,
    postalCodes: ["20095", "20097", "20099", "20144", "20146", "20148", "20149", "20251", "20253", "20255", "20257", "20259", "20354", "20355", "20357", "20359", "20457", "20459", "20535", "20537", "20539", "21029", "21031", "21033", "21035", "21037", "21039", "21073", "21075", "21077", "21079", "21107", "21109", "21111", "21113", "21115", "21117", "21119", "21129", "21131", "21133", "21135", "21137", "21139", "21141", "21143", "21145", "21147", "21149", "21217", "21218", "21220", "21224", "21226", "21227", "21244", "21246", "21255", "21256", "21258", "21266", "21271", "21272", "21274", "21279", "21335", "21337", "21339", "21357", "21365", "21368", "21371", "21375", "21379", "21385", "21388", "21391", "21394", "21395", "21398", "21423", "21435", "21439", "21442", "21445", "21449", "21453", "21456", "21460", "21465", "21481", "21483", "21493", "21502", "21521", "21524", "21527", "21529", "21031", "21033", "21035", "21037", "21039", "21073", "21075", "21077", "21079", "21107", "21109", "21111", "21113", "21115", "21117", "21119", "21129", "21131", "21133", "21135", "21137", "21139", "21141", "21143", "21145", "21147", "21149", "21217", "21218", "21220", "21224", "21226", "21227", "21244", "21246", "21255", "21256", "21258", "21266", "21271", "21272", "21274", "21279", "21335", "21337", "21339", "21357", "21365", "21368", "21371", "21375", "21379", "21385", "21388", "21391", "21394", "21395", "21398", "21423", "21435", "21439", "21442", "21445", "21449", "21453", "21456", "21460", "21465", "21481", "21483", "21493", "21502", "21521", "21524", "21527", "21529"],
    coordinates: { lat: 53.5488, lng: 9.9872 },
    distanceFromBielefeld: 200,
    seoKeywords: ["Rückbau Hamburg", "Abbruch Hamburg", "Entkernung Hamburg", "Speicherstadt Asbest", "Hafencity Rückbau"],
    localFeatures: ["Speicherstadt", "HafenCity", "Elbphilharmonie", "Reeperbahn"],
    emergencyNumber: "0800-40-0060970",
    serviceAreas: ["Hamburg-Mitte", "Altona", "Eimsbüttel", "Hamburg-Nord", "Wandsbek", "Bergedorf", "Harburg"]
  },
  // Additional medium-sized cities
  {
    name: "Wolfsburg",
    slug: "wolfsburg",
    state: "Niedersachsen",
    population: 123949,
    postalCodes: ["38440", "38442", "38444", "38446", "38448"],
    coordinates: { lat: 52.4227, lng: 10.7865 },
    distanceFromBielefeld: 150,
    seoKeywords: ["Rückbau Wolfsburg", "Abbruch Wolfsburg", "Entkernung Wolfsburg", "Volkswagen Stadt Asbest", "Autostadt Rückbau"],
    localFeatures: ["Autostadt", "Volkswagen", "Phaeno", "Designer Outlets"],
    emergencyNumber: "0800-5361-0060970",
    serviceAreas: ["Stadtmitte", "Detmerode", "Westhagen", "Teichbreite", "Steimker Berg", "Hellwinkel", "Laagberg", "Rabenberg", "Tiergartenbreite", "Kreuzheide", "Velstove", "Ehmen", "Fallersleben", "Sülfeld", "Sandkamp", "Hattorf", "Heiligendorf", "Vorsfelde", "Wendschott", "Brackstedt", "Almke", "Neindorf", "Hehlingen", "Warmenau", "Reislingen", "Kästorf", "Mörse"]
  },
  {
    name: "Salzgitter",
    slug: "salzgitter",
    state: "Niedersachsen",
    population: 103866,
    postalCodes: ["38259", "38267", "38268", "38269", "38271", "38273", "38275", "38279", "38302", "38312", "38315", "38319", "38321", "38322", "38324", "38325", "38226", "38228", "38229"],
    coordinates: { lat: 52.1535, lng: 10.3311 },
    distanceFromBielefeld: 140,
    seoKeywords: ["Rückbau Salzgitter", "Abbruch Salzgitter", "Entkernung Salzgitter", "Stahlstadt Asbest", "Industrie Rückbau"],
    localFeatures: ["Salzgitter AG", "Salder See", "Salzgitter-Bad", "Kniestedter Kirche"],
    emergencyNumber: "0800-5341-0060970",
    serviceAreas: ["Salzgitter-Bad", "Lebenstedt", "Thiede", "Fredenberg", "Gebhardshagen", "Hallendorf", "Heerte", "Hohenrode", "Immendorf", "Lesse", "Lichtenberg", "Lobmachtersen", "Ohlendorf", "Osterlinde", "Reppner", "Ringelheim", "Salder", "Watenstedt", "Weddel", "Wendhausen"]
  },
  {
    name: "Hildesheim",
    slug: "hildesheim",
    state: "Niedersachsen",
    population: 101693,
    postalCodes: ["31134", "31135", "31137", "31139", "31141", "31157", "31162", "31167", "31171", "31174", "31177", "31180", "31185", "31188", "31191", "31195", "31198"],
    coordinates: { lat: 52.1561, lng: 9.9486 },
    distanceFromBielefeld: 80,
    seoKeywords: ["Rückbau Hildesheim", "Abbruch Hildesheim", "Entkernung Hildesheim", "UNESCO Welterbe Asbest", "Dom Hildesheim Sanierung"],
    localFeatures: ["Dom", "St. Michaelis", "Marktplatz", "Roemer- und Pelizaeus-Museum"],
    emergencyNumber: "0800-5121-0060970",
    serviceAreas: ["Mitte", "Nord", "Ost", "West", "Süd", "Drispenstedt", "Einum", "Himmelsthür", "Itzum", "Neuhof", "Ochtersum", "Sorsum", "Steuerwald"]
  },
  {
    name: "Lüneburg",
    slug: "lueneburg",
    state: "Niedersachsen",
    population: 75129,
    postalCodes: ["21335", "21337", "21339"],
    coordinates: { lat: 53.2493, lng: 10.4079 },
    distanceFromBielefeld: 160,
    seoKeywords: ["Rückbau Lüneburg", "Abbruch Lüneburg", "Entkernung Lüneburg", "Salzstadt Asbest", "Leuphana Universität Asbest"],
    localFeatures: ["Salzmuseum", "Leuphana Universität", "Rathaus", "Am Sande"],
    emergencyNumber: "0800-4131-0060970",
    serviceAreas: ["Altstadt", "Bockelsberg", "Goseburg", "Häcklingen", "Kaltenmoor", "Kreideberg", "Lüne-Moorfeld", "Mittelfeld", "Moorfeld", "Neu Hagen", "Ochtmissen", "Rettmer", "Rotes Feld", "Schaperdrift", "Weststadt", "Wilschenbruch"]
  },
  {
    name: "Celle",
    slug: "celle",
    state: "Niedersachsen",
    population: 69371,
    postalCodes: ["29221", "29223", "29225", "29227", "29229"],
    coordinates: { lat: 52.6240, lng: 10.0803 },
    distanceFromBielefeld: 100,
    seoKeywords: ["Rückbau Celle", "Abbruch Celle", "Entkernung Celle", "Fachwerkstadt Asbest", "Residenzschloss Celle Sanierung"],
    localFeatures: ["Schloss Celle", "Altstadt", "Bomann-Museum", "Französischer Garten"],
    emergencyNumber: "0800-5141-0060970",
    serviceAreas: ["Altstadt", "Neustadt", "Heese-Süd", "Klein Hehlen", "Garßen", "Groß Hehlen", "Hustedt", "Lachtehausen", "Scheuen", "Vorwerk", "Wietzenbruch", "Winsen", "Wittingen"]
  },
  {
    name: "Hameln",
    slug: "hameln",
    state: "Niedersachsen",
    population: 56882,
    postalCodes: ["31785", "31787", "31789"],
    coordinates: { lat: 52.1040, lng: 9.3570 },
    distanceFromBielefeld: 55,
    seoKeywords: ["Rückbau Hameln", "Abbruch Hameln", "Entkernung Hameln", "Rattenfänger Stadt Asbest", "Weserbergland Rückbau"],
    localFeatures: ["Rattenfängerhaus", "Weser", "Altstadt", "Münster St. Bonifatius"],
    emergencyNumber: "0800-5151-0060970",
    serviceAreas: ["Altstadt", "Nord", "Süd", "West", "Ost", "Rohrsen", "Wehrbergen", "Hastenbeck", "Klein Berkel", "Tündern", "Halvestorf", "Sorsum", "Afferde", "Welliehausen"]
  },
  // Additional regional centers
  {
    name: "Herford",
    slug: "herford",
    state: "Nordrhein-Westfalen",
    population: 65964,
    postalCodes: ["32049", "32051", "32052"],
    coordinates: { lat: 52.1158, lng: 8.6714 },
    distanceFromBielefeld: 15,
    seoKeywords: ["Rückbau Herford", "Abbruch Herford", "Entkernung Herford", "Hansestadt Herford Asbest", "Werre Rückbau"],
    localFeatures: ["Münster", "Radewig", "Altstadt", "Werre"],
    emergencyNumber: "0800-5221-0060970",
    serviceAreas: ["Innenstadt", "Elverdissen", "Eickum", "Falkendiek", "Herringhausen", "Laar", "Schwarzenmoor", "Stedefreund"]
  },
  {
    name: "Minden",
    slug: "minden",
    state: "Nordrhein-Westfalen",
    population: 82879,
    postalCodes: ["32423", "32425", "32427", "32429"],
    coordinates: { lat: 52.2897, lng: 8.9144 },
    distanceFromBielefeld: 35,
    seoKeywords: ["Rückbau Minden", "Abbruch Minden", "Entkernung Minden", "Weser Minden Asbest", "Wasserstraßenkreuz Rückbau"],
    localFeatures: ["Wasserstraßenkreuz", "Dom", "Weser", "Potts Park"],
    emergencyNumber: "0800-571-0060970",
    serviceAreas: ["Innenstadt", "Rechtes Weserufer", "Bärenkämpen", "Dankersen", "Haddenhausen", "Hahlen", "Kutenhausen", "Leteln", "Meißen", "Minderheide", "Rodenbeck", "Stemmer"]
  },
  {
    name: "Lippstadt",
    slug: "lippstadt",
    state: "Nordrhein-Westfalen",
    population: 67219,
    postalCodes: ["59555", "59557"],
    coordinates: { lat: 51.6756, lng: 8.3453 },
    distanceFromBielefeld: 50,
    seoKeywords: ["Rückbau Lippstadt", "Abbruch Lippstadt", "Entkernung Lippstadt", "Lippe Fluss Asbest", "Westfälische Salzwelten Sanierung"],
    localFeatures: ["Westfälische Salzwelten", "Große Marienkirche", "Lippe", "Rathaus"],
    emergencyNumber: "0800-2941-0060970",
    serviceAreas: ["Kernstadt", "Bad Waldliesborn", "Benninghausen", "Bökenförde", "Cappel", "Dedinghausen", "Eickelborn", "Esbeck", "Garfeln", "Hellinghausen", "Hörste", "Lipperode", "Lohe", "Mettinghausen", "Overhagen", "Rebbeke", "Rixbeck"]
  },
  {
    name: "Rheine",
    slug: "rheine",
    state: "Nordrhein-Westfalen",
    population: 76491,
    postalCodes: ["48431", "48432", "48429"],
    coordinates: { lat: 52.2783, lng: 7.4395 },
    distanceFromBielefeld: 85,
    seoKeywords: ["Rückbau Rheine", "Abbruch Rheine", "Entkernung Rheine", "Ems Stadt Asbest", "Steinfurt Kreis Rückbau"],
    localFeatures: ["Ems", "Kloster Bentlage", "Saline Gottesgabe", "Emsauenpark"],
    emergencyNumber: "0800-5971-0060970",
    serviceAreas: ["Innenstadt", "Eschendorf", "Gellendorf", "Hauenhorst", "Mesum", "Schotthock", "Wietesch", "Wadelheim", "Dorenkamp", "Dutum", "Altenrheine", "Elte", "Rodde"]
  },
  {
    name: "Ahlen",
    slug: "ahlen",
    state: "Nordrhein-Westfalen", 
    population: 52107,
    postalCodes: ["59227", "59229"],
    coordinates: { lat: 51.7627, lng: 7.8889 },
    distanceFromBielefeld: 75,
    seoKeywords: ["Rückbau Ahlen", "Abbruch Ahlen", "Entkernung Ahlen", "Warendorf Kreis Asbest", "Fritz Winter Gesamtschule Sanierung"],
    localFeatures: ["Fritz-Winter-Gesamtschule", "Werse", "Maximilianpark Hamm", "St. Bartholomäus"],
    emergencyNumber: "0800-2382-0060970",
    serviceAreas: ["Innenstadt", "Ost", "Süd", "West", "Dolberg", "Vorhelm"]
  },
  {
    name: "Hamm",
    slug: "hamm",
    state: "Nordrhein-Westfalen",
    population: 179916,
    postalCodes: ["59063", "59065", "59067", "59069", "59071", "59073", "59075", "59077"],
    coordinates: { lat: 51.6806, lng: 7.8203 },
    distanceFromBielefeld: 85,
    seoKeywords: ["Rückbau Hamm", "Abbruch Hamm", "Entkernung Hamm", "Maximilianpark Asbest", "Lippe Hamm Rückbau"],
    localFeatures: ["Maximilianpark", "Glaselefant", "Lippe", "Pauluskirche"],
    emergencyNumber: "0800-2381-0060970",
    serviceAreas: ["Mitte", "Uentrop", "Rhynern", "Pelkum", "Herringen", "Bockum-Hövel", "Heessen"]
  },
  {
    name: "Soest",
    slug: "soest",
    state: "Nordrhein-Westfalen",
    population: 47206,
    postalCodes: ["59494"],
    coordinates: { lat: 51.5671, lng: 8.1067 },
    distanceFromBielefeld: 70,
    seoKeywords: ["Rückbau Soest", "Abbruch Soest", "Entkernung Soest", "Hansestadt Soest Asbest", "Patrokli Dom Sanierung"],
    localFeatures: ["Patrokli Dom", "Altstadt", "Stadtwall", "Soester Börde"],
    emergencyNumber: "0800-2921-0060970",
    serviceAreas: ["Kernstadt", "Ampen", "Bergede", "Hiddingsen", "Meiningsen", "Ostönnen", "Paradiese", "Thöningsen", "Welver"]
  },
  {
    name: "Beckum",
    slug: "beckum",
    state: "Nordrhein-Westfalen",
    population: 36898,
    postalCodes: ["59269"],
    coordinates: { lat: 51.7556, lng: 8.0419 },
    distanceFromBielefeld: 60,
    seoKeywords: ["Rückbau Beckum", "Abbruch Beckum", "Entkernung Beckum", "Zementstadt Asbest", "HeidelbergCement Sanierung"],
    localFeatures: ["HeidelbergCement", "Propsteikirche", "Schloss Vornholz", "Tuttenbrock"],
    emergencyNumber: "0800-2521-0060970",
    serviceAreas: ["Kernstadt", "Neubeckum", "Vellern", "Roland"]
  },
  {
    name: "Warendorf",
    slug: "warendorf",
    state: "Nordrhein-Westfalen",
    population: 37428,
    postalCodes: ["48231"],
    coordinates: { lat: 51.9503, lng: 7.9925 },
    distanceFromBielefeld: 55,
    seoKeywords: ["Rückbau Warendorf", "Abbruch Warendorf", "Entkernung Warendorf", "Pferdestadt Asbest", "Deutsches Olympia Museum Sanierung"],
    localFeatures: ["Deutsches Olympia-Museum", "Ems", "Altstadt", "Landgestüt"],
    emergencyNumber: "0800-2581-0060970",
    serviceAreas: ["Kernstadt", "Einen", "Freckenhorst", "Hoetmar", "Milte"]
  },
  {
    name: "Bad Oeynhausen",
    slug: "bad-oeynhausen",
    state: "Nordrhein-Westfalen",
    population: 49234,
    postalCodes: ["32545", "32547", "32549"],
    coordinates: { lat: 52.2056, lng: 8.7975 },
    distanceFromBielefeld: 25,
    seoKeywords: ["Rückbau Bad Oeynhausen", "Abbruch Bad Oeynhausen", "Entkernung Bad Oeynhausen", "Kurstadt Asbest", "Weser Bad Oeynhausen Sanierung"],
    localFeatures: ["Kurpark", "GOP Varieté", "Weser", "Jordansprudel"],
    emergencyNumber: "0800-5731-0060970",
    serviceAreas: ["Kernstadt", "Dehme", "Eidinghausen", "Lohe", "Rehme", "Volmerdingsen", "Werste"]
  },
  {
    name: "Löhne",
    slug: "loehne", 
    state: "Nordrhein-Westfalen",
    population: 40161,
    postalCodes: ["32584"],
    coordinates: { lat: 52.1969, lng: 8.7122 },
    distanceFromBielefeld: 20,
    seoKeywords: ["Rückbau Löhne", "Abbruch Löhne", "Entkernung Löhne", "Werre Löhne Asbest", "Möbelstadt Rückbau"],
    localFeatures: ["Werre", "Möbelindustrie", "Aqua Magica", "Werburg"],
    emergencyNumber: "0800-5732-0060970",
    serviceAreas: ["Gohfeld", "Löhne-Bahnhof", "Löhne-Ort", "Mennighüffen", "Obernbeck"]
  },
  {
    name: "Bünde",
    slug: "buende",
    state: "Nordrhein-Westfalen", 
    population: 45130,
    postalCodes: ["32257", "32257"],
    coordinates: { lat: 52.1969, lng: 8.5797 },
    distanceFromBielefeld: 18,
    seoKeywords: ["Rückbau Bünde", "Abbruch Bünde", "Entkernung Bünde", "Zigarrenstadt Asbest", "Else Bünde Sanierung"],
    localFeatures: ["Deutsches Tabak- und Zigarrenmuseum", "Else", "Doberg", "Stadtpark"],
    emergencyNumber: "0800-5223-0060970",
    serviceAreas: ["Bünde-Mitte", "Ennigloh", "Hüffen", "Holsen", "Werfen", "Spradow", "Ahle", "Dünne", "Eldagsen", "Hunnebrock", "Bustedt"]
  },
  {
    name: "Steinhagen",
    slug: "steinhagen",
    state: "Nordrhein-Westfalen",
    population: 20489,
    postalCodes: ["33803"],
    coordinates: { lat: 51.9928, lng: 8.4053 },
    distanceFromBielefeld: 12,
    seoKeywords: ["Rückbau Steinhagen", "Abbruch Steinhagen", "Entkernung Steinhagen", "Steinhäger Asbest", "Gütersloh Kreis Sanierung"],
    localFeatures: ["Steinhäger Museum", "Teutoburger Wald", "Ems", "Baumschule"],
    emergencyNumber: "0800-5204-0060970",
    serviceAreas: ["Steinhagen", "Amshausen", "Brockhagen"]
  },
  {
    name: "Verl",
    slug: "verl",
    state: "Nordrhein-Westfalen",
    population: 25727,
    postalCodes: ["33415"],
    coordinates: { lat: 51.8819, lng: 8.5175 },
    distanceFromBielefeld: 25,
    seoKeywords: ["Rückbau Verl", "Abbruch Verl", "Entkernung Verl", "Gütersloh Kreis Asbest", "Sportpark Verl Sanierung"],
    localFeatures: ["SC Verl", "Ems", "Sportpark", "Sender Verl"],
    emergencyNumber: "0800-5246-0060970",
    serviceAreas: ["Verl", "Kaunitz", "Sürenheide", "Österwiehe"]
  },
  {
    name: "Schloß Holte-Stukenbrock",
    slug: "schloss-holte-stukenbrock",
    state: "Nordrhein-Westfalen",
    population: 26363,
    postalCodes: ["33758"],
    coordinates: { lat: 51.9022, lng: 8.6367 },
    distanceFromBielefeld: 20,
    seoKeywords: ["Rückbau Schloß Holte-Stukenbrock", "Abbruch Schloß Holte", "Entkernung Stukenbrock", "Safaripark Asbest", "Senne Rückbau"],
    localFeatures: ["Safaripark Stukenbrock", "Senne", "Fort Fun", "Naturpark"],
    emergencyNumber: "0800-5207-0060970",
    serviceAreas: ["Schloß Holte", "Stukenbrock", "Liemke", "Pollhagen"]
  },
  {
    name: "Augustdorf",
    slug: "augustdorf",
    state: "Nordrhein-Westfalen",
    population: 10033,
    postalCodes: ["32832"],
    coordinates: { lat: 51.9053, lng: 8.7442 },
    distanceFromBielefeld: 22,
    seoKeywords: ["Rückbau Augustdorf", "Abbruch Augustdorf", "Entkernung Augustdorf", "Senne Augustdorf Asbest", "Truppenübungsplatz Sanierung"],
    localFeatures: ["Senne", "Truppenübungsplatz", "Naturschutzgebiet", "Ems"],
    emergencyNumber: "0800-5237-0060970",
    serviceAreas: ["Augustdorf", "Haustenbeck", "Pivitsheide"]
  },
  {
    name: "Horn-Bad Meinberg",
    slug: "horn-bad-meinberg",
    state: "Nordrhein-Westfalen",
    population: 16647,
    postalCodes: ["32805"],
    coordinates: { lat: 51.8739, lng: 8.9719 },
    distanceFromBielefeld: 35,
    seoKeywords: ["Rückbau Horn-Bad Meinberg", "Abbruch Horn", "Entkernung Bad Meinberg", "Externsteine Asbest", "Kurstadt Sanierung"],
    localFeatures: ["Externsteine", "Kurpark", "Teutoburger Wald", "Hermannsdenkmal"],
    emergencyNumber: "0800-5234-0060970",
    serviceAreas: ["Horn", "Bad Meinberg", "Bellenberg", "Holzhausen", "Leopoldstal", "Veldrom", "Wilberg"]
  },
  {
    name: "Blomberg",
    slug: "blomberg",
    state: "Nordrhein-Westfalen",
    population: 15177,
    postalCodes: ["32825"],
    coordinates: { lat: 51.9425, lng: 9.0889 },
    distanceFromBielefeld: 32,
    seoKeywords: ["Rückbau Blomberg", "Abbruch Blomberg", "Entkernung Blomberg", "Nelkenstadt Asbest", "Lippe Blomberg Sanierung"],
    localFeatures: ["Nelkenstadt", "Burg Blomberg", "Lippe", "Altstadt"],
    emergencyNumber: "0800-5235-0060970",
    serviceAreas: ["Blomberg", "Cappel", "Donop", "Eschenbruch", "Großenmarpe", "Höntrup", "Istrup", "Kleinenmarpe", "Reelkirchen", "Tintrup", "Wellentrup"]
  },
  {
    name: "Lage",
    slug: "lage",
    state: "Nordrhein-Westfalen",
    population: 34746,
    postalCodes: ["32791"],
    coordinates: { lat: 51.9914, lng: 8.7889 },
    distanceFromBielefeld: 23,
    seoKeywords: ["Rückbau Lage", "Abbruch Lage", "Entkernung Lage", "Werre Lage Asbest", "Lippe Kreis Sanierung"],
    localFeatures: ["Werre", "Zuckerfabrik Lage", "Heimatmuseum", "Teutoburger Wald"],
    emergencyNumber: "0800-5232-0060970",
    serviceAreas: ["Lage", "Billinghausen", "Ehrentrup", "Hagen", "Hardissen", "Heiden", "Hörste", "Kachtenhausen", "Müssen", "Ohrsen", "Pottenhausen", "Riegerbruch", "Waddenhausen"]
  },
  {
    name: "Oerlinghausen",
    slug: "oerlinghausen",
    state: "Nordrhein-Westfalen",
    population: 17068,
    postalCodes: ["33813"],
    coordinates: { lat: 51.9622, lng: 8.6689 },
    distanceFromBielefeld: 12,
    seoKeywords: ["Rückbau Oerlinghausen", "Abbruch Oerlinghausen", "Entkernung Oerlinghausen", "Archäologisches Museum Asbest", "Teutoburger Wald Sanierung"],
    localFeatures: ["Archäologisches Freilichtmuseum", "Teutoburger Wald", "Segelflugmuseum", "Tönsberg"],
    emergencyNumber: "0800-5202-0060970",
    serviceAreas: ["Oerlinghausen", "Helpup", "Lipperreihe", "Währentrup"]
  },
  {
    name: "Borgholzhausen",
    slug: "borgholzhausen",
    state: "Nordrhein-Westfalen",
    population: 8854,
    postalCodes: ["33829"],
    coordinates: { lat: 52.1167, lng: 8.2889 },
    distanceFromBielefeld: 30,
    seoKeywords: ["Rückbau Borgholzhausen", "Abbruch Borgholzhausen", "Entkernung Borgholzhausen", "Teutoburger Wald Asbest", "Gütersloh Kreis Sanierung"],
    localFeatures: ["Teutoburger Wald", "Johannisegge", "Limberg", "Ravensberg"],
    emergencyNumber: "0800-5425-0060970",
    serviceAreas: ["Borgholzhausen", "Cloppenburg", "Hörste", "Westbarthausen"]
  },
  {
    name: "Werther",
    slug: "werther",
    state: "Nordrhein-Westfalen", 
    population: 11129,
    postalCodes: ["33824"],
    coordinates: { lat: 52.0753, lng: 8.4831 },
    distanceFromBielefeld: 10,
    seoKeywords: ["Rückbau Werther", "Abbruch Werther", "Entkernung Werther", "Westfalen Werther Asbest", "Gütersloh Kreis Sanierung"],
    localFeatures: ["Burg Limberg", "Teutoburger Wald", "Johannisegge", "Dreierwalder Aa"],
    emergencyNumber: "0800-5203-0060970",
    serviceAreas: ["Werther", "Arrode", "Häger", "Theenhausen"]
  },
  {
    name: "Halle (Westf.)",
    slug: "halle-westfalen",
    state: "Nordrhein-Westfalen",
    population: 21248,
    postalCodes: ["33790"],
    coordinates: { lat: 52.0581, lng: 8.3597 },
    distanceFromBielefeld: 15,
    seoKeywords: ["Rückbau Halle Westfalen", "Abbruch Halle", "Entkernung Halle", "Gerry Weber Asbest", "Gütersloh Kreis Sanierung"],
    localFeatures: ["Gerry Weber Stadion", "Teutoburger Wald", "OWL Arena", "Tatenhausen"],
    emergencyNumber: "0800-5201-0060970",
    serviceAreas: ["Halle", "Bokel", "Ebbesloh", "Gartnisch", "Hörste", "Künsebeck", "Oldendorf", "Tatenhausen"]
  }
];

// Helper functions for city data
export const getCityBySlug = (slug: string): CityData | undefined => {
  return CITIES_DATA.find(city => city.slug === slug);
};

export const getCitiesByState = (state: string): CityData[] => {
  return CITIES_DATA.filter(city => city.state === state);
};

export const getCitiesWithinDistance = (maxDistance: number): CityData[] => {
  return CITIES_DATA.filter(city => city.distanceFromBielefeld <= maxDistance);
};

export const getAllCitySlugs = (): string[] => {
  return CITIES_DATA.map(city => city.slug);
};

export const getCityKeywords = (cityName: string): string[] => {
  const city = CITIES_DATA.find(c => c.name === cityName);
  return city ? city.seoKeywords : [];
};

export const generateCitySchema = (city: CityData) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Rückbau ${city.name} - Premium Entkernung`,
    "description": `Professionelle Rückbau in ${city.name}. TRGS 519 zertifiziert. ✓ Kostenlose Beratung ✓ Festpreise ✓ 24h Service. Jetzt anrufen!`,
    "url": `https://www.asbestsanierung-premium.de/standorte/${city.slug}`,
    "telephone": city.emergencyNumber,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "DE",
      "postalCode": city.postalCodes[0]
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat.toString(),
      "longitude": city.coordinates.lng.toString()
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": city.coordinates.lat.toString(),
        "longitude": city.coordinates.lng.toString()
      },
      "geoRadius": "50000"
    },
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Rückbau Services ${city.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rückbau",
            "description": `Fachgerechte Asbestentfernung in ${city.name} nach TRGS 519`
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Asbesttest",
            "description": `Professionelle Asbestanalyse in ${city.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entkernung",
            "description": `Komplette Entkernung in ${city.name}`
          }
        }
      ]
    },
    "areaServed": city.serviceAreas.map(area => ({
      "@type": "Place",
      "name": `${area}, ${city.name}`
    }))
  };
};