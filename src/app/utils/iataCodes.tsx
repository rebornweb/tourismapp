
const iataCodes = [
  {
    "code": "MWR",
    "country_code": "ZA",
    "city": "Motswari"
  },
  {
    "code": "TIM",
    "country_code": "ID",
    "city": "Tembagapura"
  },
  {
    "code": "BMJ",
    "country_code": "GY",
    "city": "Baramita"
  },
  {
    "code": "TSD",
    "country_code": "ZA",
    "city": "Tshipise"
  },
  {
    "code": "YAO",
    "country_code": "CM",
    "city": "Yaounde"
  },
  {
    "code": "WBK",
    "country_code": "US",
    "city": "West Branch"
  },
  {
    "code": "OZH",
    "country_code": "UA",
    "city": "Zaporozhye"
  },
  {
    "code": "ТИО",
    "country_code": "RU",
    "city": "Taksimo"
  },
  {
    "code": "MWV",
    "country_code": "KH",
    "city": "Mundulkiri"
  },
  {
    "code": "RAJ",
    "country_code": "IN",
    "city": "Rajkot"
  },
  {
    "code": "BQA",
    "country_code": "PH",
    "city": "Baler"
  },
  {
    "code": "ALB",
    "country_code": "US",
    "city": "Albany"
  },
  {
    "code": "MQN",
    "country_code": "NO",
    "city": "Mo i Rana"
  },
  {
    "code": "NKV",
    "country_code": "US",
    "city": "Nichen Cove"
  },
  {
    "code": "WKR",
    "country_code": "BS",
    "city": "Walker's Cay"
  },
  {
    "code": "MDN",
    "country_code": "US",
    "city": "Madison"
  },
  {
    "code": "RSK",
    "country_code": "ID",
    "city": "Ransiki"
  },
  {
    "code": "SSJ",
    "country_code": "NO",
    "city": "Sandnessjoen"
  },
  {
    "code": "AXL",
    "country_code": "AU",
    "city": "Alexandria"
  },
  {
    "code": "IMT",
    "country_code": "US",
    "city": "Iron Mountain"
  },
  {
    "code": "SKP",
    "country_code": "MK",
    "city": "Skopje"
  },
  {
    "code": "OKK",
    "country_code": "US",
    "city": "Kokomo"
  },
  {
    "code": "WTR",
    "country_code": "US",
    "city": "White River"
  },
  {
    "code": "APT",
    "country_code": "US",
    "city": "Jasper"
  },
  {
    "code": "DLH",
    "country_code": "US",
    "city": "Duluth"
  },
  {
    "code": "BZH",
    "country_code": "ZW",
    "city": "Bumi Hills"
  },
  {
    "code": "OZZ",
    "country_code": "MA",
    "city": "Ouarzazate"
  },
  {
    "code": "BUP",
    "country_code": "IN",
    "city": "Bhatinda"
  },
  {
    "code": "MSA",
    "country_code": "CA",
    "city": "Muskrat Dam"
  },
  {
    "code": "YKK",
    "country_code": "CA",
    "city": "Kitkatla"
  },
  {
    "code": "ELQ",
    "country_code": "SA",
    "city": "Gassim"
  },
  {
    "code": "BDA",
    "country_code": "BM",
    "city": "Bermuda"
  },
  {
    "code": "KMK",
    "country_code": "CG",
    "city": "Makabana"
  },
  {
    "code": "KSR",
    "country_code": "US",
    "city": "Sandy River"
  },
  {
    "code": "QZM",
    "country_code": "AU",
    "city": "Bullocks Flat"
  },
  {
    "code": "XRC",
    "country_code": "GB",
    "city": "Runcorn"
  },
  {
    "code": "PUZ",
    "country_code": "NI",
    "city": "Puerto Cabezas"
  },
  {
    "code": "HFN",
    "country_code": "IS",
    "city": "Hornafjordur"
  },
  {
    "code": "VOH",
    "country_code": "MG",
    "city": "Vohemar"
  },
  {
    "code": "AUZ",
    "country_code": "US",
    "city": "Aurora"
  },
  {
    "code": "CFA",
    "country_code": "US",
    "city": "Coffee Point"
  },
  {
    "code": "ICR",
    "country_code": "CU",
    "city": "Nicaro"
  },
  {
    "code": "JAU",
    "country_code": "PE",
    "city": "Jauja"
  },
  {
    "code": "LIJ",
    "country_code": "US",
    "city": "Long Island"
  },
  {
    "code": "BTX",
    "country_code": "AU",
    "city": "Betoota"
  },
  {
    "code": "PEG",
    "country_code": "IT",
    "city": "Perugia"
  },
  {
    "code": "KWE",
    "country_code": "CN",
    "city": "Guiyang"
  },
  {
    "code": "XLY",
    "country_code": "CA",
    "city": "Aldershot"
  },
  {
    "code": "KCJ",
    "country_code": "PG",
    "city": "Komaio"
  },
  {
    "code": "HLF",
    "country_code": "SE",
    "city": "Hultsfred"
  },
  {
    "code": "LRG",
    "country_code": "PK",
    "city": "Lora Lai"
  },
  {
    "code": "ZJD",
    "country_code": "CH",
    "city": "Lenzerheide/Lai"
  },
  {
    "code": "BGQ",
    "country_code": "US",
    "city": "Big Lake"
  },
  {
    "code": "COM",
    "country_code": "US",
    "city": "Coleman"
  },
  {
    "code": "JCO",
    "country_code": "MT",
    "city": "Comino"
  },
  {
    "code": "KQH",
    "country_code": "IN",
    "city": "Ajmer"
  },
  {
    "code": "SBE",
    "country_code": "PG",
    "city": "Suabi"
  },
  {
    "code": "GAN",
    "country_code": "MV",
    "city": "Gan Island"
  },
  {
    "code": "ECP",
    "country_code": "US",
    "city": "Panama City"
  },
  {
    "code": "VLI",
    "country_code": "VU",
    "city": "Port Vila"
  },
  {
    "code": "LEB",
    "country_code": "US",
    "city": "Lebanon"
  },
  {
    "code": "ZKK",
    "country_code": "CH",
    "city": "Schwyz"
  },
  {
    "code": "KOO",
    "country_code": "CD",
    "city": "Kongolo"
  },
  {
    "code": "PCR",
    "country_code": "CO",
    "city": "Puerto Carreno"
  },
  {
    "code": "ТЛО",
    "country_code": "RU",
    "city": "Talovka"
  },
  {
    "code": "XOR",
    "country_code": "NO",
    "city": "Otta"
  },
  {
    "code": "TGU",
    "country_code": "HN",
    "city": "Tegucigalpa"
  },
  {
    "code": "GXX",
    "country_code": "CM",
    "city": "Yagoua"
  },
  {
    "code": "VRS",
    "country_code": "US",
    "city": "Versailles"
  },
  {
    "code": "MII",
    "country_code": "BR",
    "city": "Marilia"
  },
  {
    "code": "KVK",
    "country_code": "RU",
    "city": "Kirovsk"
  },
  {
    "code": "RGN",
    "country_code": "MM",
    "city": "Yangon"
  },
  {
    "code": "TSN",
    "country_code": "CN",
    "city": "Tianjin"
  },
  {
    "code": "MEM",
    "country_code": "US",
    "city": "Memphis"
  },
  {
    "code": "AGR",
    "country_code": "IN",
    "city": "Agra"
  },
  {
    "code": "JAR",
    "country_code": "IR",
    "city": "Jahrom"
  },
  {
    "code": "RWF",
    "country_code": "US",
    "city": "Redwood Falls"
  },
  {
    "code": "GOR",
    "country_code": "ET",
    "city": "Gore"
  },
  {
    "code": "DAR",
    "country_code": "TZ",
    "city": "Dar Es Salaam"
  },
  {
    "code": "PYN",
    "country_code": "CO",
    "city": "Payan"
  },
  {
    "code": "UGN",
    "country_code": "US",
    "city": "Waukegan"
  },
  {
    "code": "LQS",
    "country_code": "CN",
    "city": "Lingshui"
  },
  {
    "code": "MHK",
    "country_code": "US",
    "city": "Manhattan"
  },
  {
    "code": "SSL",
    "country_code": "CO",
    "city": "Santa Rosalia"
  },
  {
    "code": "LAQ",
    "country_code": "LY",
    "city": "Beida"
  },
  {
    "code": "CLW",
    "country_code": "US",
    "city": "Clearwater"
  },
  {
    "code": "JGO",
    "country_code": "GL",
    "city": "Qeqertarsuaq"
  },
  {
    "code": "QHU",
    "country_code": "DE",
    "city": "Husum"
  },
  {
    "code": "KRW",
    "country_code": "TM",
    "city": "Turkmanbashi"
  },
  {
    "code": "VSG",
    "country_code": "UA",
    "city": "Lugansk"
  },
  {
    "code": "VDE",
    "country_code": "ES",
    "city": "Valverde"
  },
  {
    "code": "UWA",
    "country_code": "US",
    "city": "Ware"
  },
  {
    "code": "AUL",
    "country_code": "MH",
    "city": "Aur Island"
  },
  {
    "code": "FET",
    "country_code": "US",
    "city": "Fremont"
  },
  {
    "code": "SPT",
    "country_code": "MY",
    "city": "Sipitang"
  },
  {
    "code": "PLO",
    "country_code": "AU",
    "city": "Port Lincoln"
  },
  {
    "code": "SNZ",
    "country_code": "BR",
    "city": "Santa Cruz"
  },
  {
    "code": "GOA",
    "country_code": "IT",
    "city": "Genoa"
  },
  {
    "code": "YLJ",
    "country_code": "CA",
    "city": "Meadow Lake"
  },
  {
    "code": "BCP",
    "country_code": "PG",
    "city": "Bambu"
  },
  {
    "code": "CAE",
    "country_code": "US",
    "city": "Columbia"
  },
  {
    "code": "YQG",
    "country_code": "CA",
    "city": "Windsor"
  },
  {
    "code": "TQS",
    "country_code": "CO",
    "city": "Tres Esquinas"
  },
  {
    "code": "PIW",
    "country_code": "CA",
    "city": "Pikwitonei"
  },
  {
    "code": "TDA",
    "country_code": "CO",
    "city": "Trinidad"
  },
  {
    "code": "MMD",
    "country_code": "JP",
    "city": "Minami Daito"
  },
  {
    "code": "MSP",
    "country_code": "US",
    "city": "Minneapolis"
  },
  {
    "code": "FTE",
    "country_code": "AR",
    "city": "El Calafate"
  },
  {
    "code": "KBA",
    "country_code": "SL",
    "city": "Kabala"
  },
  {
    "code": "UOL",
    "country_code": "ID",
    "city": "Buol"
  },
  {
    "code": "NAN",
    "country_code": "FJ",
    "city": "Nadi"
  },
  {
    "code": "FMA",
    "country_code": "AR",
    "city": "Formosa"
  },
  {
    "code": "BRY",
    "country_code": "US",
    "city": "Bardstown"
  },
  {
    "code": "DEA",
    "country_code": "PK",
    "city": "Dera Ghazi Khan"
  },
  {
    "code": "TSC",
    "country_code": "EC",
    "city": "Taisha"
  },
  {
    "code": "ZIG",
    "country_code": "SN",
    "city": "Ziguinchor"
  },
  {
    "code": "GLL",
    "country_code": "NO",
    "city": "Gol"
  },
  {
    "code": "FOD",
    "country_code": "US",
    "city": "Fort Dodge"
  },
  {
    "code": "BZD",
    "country_code": "AU",
    "city": "Balranald"
  },
  {
    "code": "PYL",
    "country_code": "US",
    "city": "Perry Island"
  },
  {
    "code": "KAP",
    "country_code": "CD",
    "city": "Kapanga"
  },
  {
    "code": "XXT",
    "country_code": "SE",
    "city": "Arboga"
  },
  {
    "code": "КИЮ",
    "country_code": "RU",
    "city": "Korliki"
  },
  {
    "code": "PLM",
    "country_code": "ID",
    "city": "Palembang"
  },
  {
    "code": "TEL",
    "country_code": "MY",
    "city": "Telupid"
  },
  {
    "code": "QUG",
    "country_code": "GB",
    "city": "Chichester"
  },
  {
    "code": "DHO",
    "country_code": "CA",
    "city": "Horn River"
  },
  {
    "code": "WVK",
    "country_code": "MG",
    "city": "Manakara"
  },
  {
    "code": "SJB",
    "country_code": "BO",
    "city": "San Joaquin"
  },
  {
    "code": "MVE",
    "country_code": "US",
    "city": "Montevideo"
  },
  {
    "code": "WKK",
    "country_code": "US",
    "city": "Aleknagik"
  },
  {
    "code": "FVM",
    "country_code": "MV",
    "city": "Fuwamula"
  },
  {
    "code": "ROP",
    "country_code": "MP",
    "city": "Rota"
  },
  {
    "code": "XKN",
    "country_code": "NO",
    "city": "Finse"
  },
  {
    "code": "XMA",
    "country_code": "PH",
    "city": "Maramag"
  },
  {
    "code": "FDF",
    "country_code": "MQ",
    "city": "Fort De France"
  },
  {
    "code": "ITN",
    "country_code": "BR",
    "city": "Itabuna"
  },
  {
    "code": "JJI",
    "country_code": "PE",
    "city": "Juanjui"
  },
  {
    "code": "VHZ",
    "country_code": "PF",
    "city": "Vahitahi"
  },
  {
    "code": "TZN",
    "country_code": "BS",
    "city": "South Andros"
  },
  {
    "code": "LVB",
    "country_code": "BR",
    "city": "Livramento"
  },
  {
    "code": "YYW",
    "country_code": "CA",
    "city": "Armstrong"
  },
  {
    "code": "TEB",
    "country_code": "US",
    "city": "Teterboro"
  },
  {
    "code": "RLG",
    "country_code": "DE",
    "city": "Rostock-Laage"
  },
  {
    "code": "WSY",
    "country_code": "AU",
    "city": "Airlie Beach"
  },
  {
    "code": "TAK",
    "country_code": "JP",
    "city": "Takamatsu"
  },
  {
    "code": "HAK",
    "country_code": "CN",
    "city": "Haikou"
  },
  {
    "code": "SBS",
    "country_code": "US",
    "city": "Steamboat Springs"
  },
  {
    "code": "ATG",
    "country_code": "PK",
    "city": "Attock"
  },
  {
    "code": "PLV",
    "country_code": "UA",
    "city": "Poltava"
  },
  {
    "code": "DLY",
    "country_code": "VU",
    "city": "Dillons Bay"
  },
  {
    "code": "BEF",
    "country_code": "NI",
    "city": "Bluefields"
  },
  {
    "code": "GUP",
    "country_code": "US",
    "city": "Gallup"
  },
  {
    "code": "COL",
    "country_code": "GB",
    "city": "Isle Of Coll"
  },
  {
    "code": "RDP",
    "country_code": "IN",
    "city": "Durgapur"
  },
  {
    "code": "RAO",
    "country_code": "BR",
    "city": "Ribeirao Preto"
  },
  {
    "code": "CME",
    "country_code": "MX",
    "city": "Ciudad Del Carmen"
  },
  {
    "code": "YDC",
    "country_code": "CA",
    "city": "Drayton Valley"
  },
  {
    "code": "TJN",
    "country_code": "PF",
    "city": "Takume"
  },
  {
    "code": "YHA",
    "country_code": "CA",
    "city": "Port Hope Simpson"
  },
  {
    "code": "OTD",
    "country_code": "PA",
    "city": "Contadora"
  },
  {
    "code": "ZBM",
    "country_code": "CA",
    "city": "Bromont"
  },
  {
    "code": "BSQ",
    "country_code": "US",
    "city": "Bisbee"
  },
  {
    "code": "YSU",
    "country_code": "CA",
    "city": "Summerside"
  },
  {
    "code": "YCO",
    "country_code": "CA",
    "city": "Kugluktuk/Coppermine"
  },
  {
    "code": "CJJ",
    "country_code": "KR",
    "city": "Cheongju"
  },
  {
    "code": "HCQ",
    "country_code": "AU",
    "city": "Halls Creek"
  },
  {
    "code": "GAT",
    "country_code": "FR",
    "city": "Gap"
  },
  {
    "code": "SLL",
    "country_code": "OM",
    "city": "Salalah"
  },
  {
    "code": "PVC",
    "country_code": "US",
    "city": "Provincetown"
  },
  {
    "code": "CCS",
    "country_code": "VE",
    "city": "Caracas"
  },
  {
    "code": "GTA",
    "country_code": "SB",
    "city": "Gatokae"
  },
  {
    "code": "YRC",
    "country_code": "CA",
    "city": "Refuge Cove"
  },
  {
    "code": "SAI",
    "country_code": "KH",
    "city": "Siem Reap"
  },
  {
    "code": "CFV",
    "country_code": "US",
    "city": "Coffeyville"
  },
  {
    "code": "LOQ",
    "country_code": "BW",
    "city": "Lobatse"
  },
  {
    "code": "GFB",
    "country_code": "US",
    "city": "Togiak Fish"
  },
  {
    "code": "USK",
    "country_code": "RU",
    "city": "Usinsk"
  },
  {
    "code": "GBG",
    "country_code": "US",
    "city": "Galesburg"
  },
  {
    "code": "HRB",
    "country_code": "CN",
    "city": "Harbin"
  },
  {
    "code": "AAC",
    "country_code": "EG",
    "city": "El Arish"
  },
  {
    "code": "EUE",
    "country_code": "US",
    "city": "Eureka"
  },
  {
    "code": "ROY",
    "country_code": "AR",
    "city": "Rio Mayo"
  },
  {
    "code": "NLL",
    "country_code": "AU",
    "city": "Nullagine"
  },
  {
    "code": "BIS",
    "country_code": "US",
    "city": "Bismarck"
  },
  {
    "code": "XQS",
    "country_code": "FI",
    "city": "Sotkamo"
  },
  {
    "code": "SZT",
    "country_code": "MX",
    "city": "S.Cristobal deL Casas"
  },
  {
    "code": "CCQ",
    "country_code": "BR",
    "city": "Cachoeira"
  },
  {
    "code": "GLY",
    "country_code": "AU",
    "city": "Goldsworthy"
  },
  {
    "code": "ПАЧ",
    "country_code": "RU",
    "city": "Pakhachi"
  },
  {
    "code": "YTF",
    "country_code": "CA",
    "city": "Alma"
  },
  {
    "code": "KZC",
    "country_code": "KH",
    "city": "Kompong-Chhna"
  },
  {
    "code": "GRZ",
    "country_code": "AT",
    "city": "Graz"
  },
  {
    "code": "PTI",
    "country_code": "AU",
    "city": "Port Douglas"
  },
  {
    "code": "ROL",
    "country_code": "US",
    "city": "Roosevelt"
  },
  {
    "code": "HRO",
    "country_code": "US",
    "city": "Harrison"
  },
  {
    "code": "RZS",
    "country_code": "PK",
    "city": "Sawan"
  },
  {
    "code": "YJS",
    "country_code": "KP",
    "city": "Samjiyon"
  },
  {
    "code": "PNB",
    "country_code": "BR",
    "city": "Porto Nacional"
  },
  {
    "code": "MTJ",
    "country_code": "US",
    "city": "Montrose"
  },
  {
    "code": "MZO",
    "country_code": "CU",
    "city": "Manzanillo"
  },
  {
    "code": "XBG",
    "country_code": "BF",
    "city": "Bogande"
  },
  {
    "code": "BGI",
    "country_code": "BB",
    "city": "Bridgetown"
  },
  {
    "code": "FSP",
    "country_code": "PM",
    "city": "Saint Pierre"
  },
  {
    "code": "SOC",
    "country_code": "ID",
    "city": "Surakarta"
  },
  {
    "code": "LZM",
    "country_code": "AO",
    "city": "Luzamba"
  },
  {
    "code": "DVN",
    "country_code": "US",
    "city": "Davenport"
  },
  {
    "code": "RLR",
    "country_code": "MG",
    "city": "Isalo"
  },
  {
    "code": "BDQ",
    "country_code": "IN",
    "city": "Vadodara"
  },
  {
    "code": "HRR",
    "country_code": "CO",
    "city": "Herrera"
  },
  {
    "code": "ANY",
    "country_code": "US",
    "city": "Anthony"
  },
  {
    "code": "CMW",
    "country_code": "CU",
    "city": "Camaguey"
  },
  {
    "code": "WSG",
    "country_code": "US",
    "city": "Washington"
  },
  {
    "code": "CUO",
    "country_code": "CO",
    "city": "Caruru"
  },
  {
    "code": "MHW",
    "country_code": "BO",
    "city": "Monteagudo"
  },
  {
    "code": "SKQ",
    "country_code": "LS",
    "city": "Sekakes"
  },
  {
    "code": "SJY",
    "country_code": "FI",
    "city": "Seinajoki"
  },
  {
    "code": "AZD",
    "country_code": "IR",
    "city": "Yazd"
  },
  {
    "code": "MXG",
    "country_code": "US",
    "city": "Marlborough"
  },
  {
    "code": "HSA",
    "country_code": "KZ",
    "city": "Turkistan"
  },
  {
    "code": "YKT",
    "country_code": "CA",
    "city": "Klemtu"
  },
  {
    "code": "PME",
    "country_code": "GB",
    "city": "Portsmouth"
  },
  {
    "code": "MDK",
    "country_code": "CD",
    "city": "Mbandaka"
  },
  {
    "code": "TYM",
    "country_code": "BS",
    "city": "Staniel Cay"
  },
  {
    "code": "MLA",
    "country_code": "MT",
    "city": "Malta"
  },
  {
    "code": "SGW",
    "country_code": "US",
    "city": "Saginaw Bay"
  },
  {
    "code": "OKB",
    "country_code": "AU",
    "city": "Orchid Beach"
  },
  {
    "code": "NBU",
    "country_code": "US",
    "city": "Glenview"
  },
  {
    "code": "MWD",
    "country_code": "PK",
    "city": "Mianwali"
  },
  {
    "code": "BGZ",
    "country_code": "PT",
    "city": "Braga"
  },
  {
    "code": "ZHL",
    "country_code": "CH",
    "city": "Heerbrugg"
  },
  {
    "code": "AQY",
    "country_code": "US",
    "city": "Alyeska"
  },
  {
    "code": "WST",
    "country_code": "US",
    "city": "Westerly"
  },
  {
    "code": "HJT",
    "country_code": "MN",
    "city": "Khujirt"
  },
  {
    "code": "CFH",
    "country_code": "AU",
    "city": "Clifton Hills"
  },
  {
    "code": "FRA",
    "country_code": "DE",
    "city": "Frankfurt"
  },
  {
    "code": "SVM",
    "country_code": "AU",
    "city": "St Pauls"
  },
  {
    "code": "QYV",
    "country_code": "NL",
    "city": "Deventer"
  },
  {
    "code": "ALU",
    "country_code": "SO",
    "city": "Alula"
  },
  {
    "code": "BSJ",
    "country_code": "AU",
    "city": "Bairnsdale"
  },
  {
    "code": "HYL",
    "country_code": "US",
    "city": "Hollis"
  },
  {
    "code": "IMK",
    "country_code": "NP",
    "city": "Simikot"
  },
  {
    "code": "ZHI",
    "country_code": "CH",
    "city": "Grenchen"
  },
  {
    "code": "HIS",
    "country_code": "AU",
    "city": "Hayman Island"
  },
  {
    "code": "YGE",
    "country_code": "CA",
    "city": "Gorge Harbor"
  },
  {
    "code": "KTO",
    "country_code": "GY",
    "city": "Kato"
  },
  {
    "code": "PSU",
    "country_code": "ID",
    "city": "Putussibau"
  },
  {
    "code": "WGN",
    "country_code": "NZ",
    "city": "Waitangi"
  },
  {
    "code": "TNQ",
    "country_code": "KI",
    "city": "Teraina"
  },
  {
    "code": "TTS",
    "country_code": "MG",
    "city": "Tsaratanana"
  },
  {
    "code": "POL",
    "country_code": "MZ",
    "city": "Pemba"
  },
  {
    "code": "BEH",
    "country_code": "US",
    "city": "Benton Harbor"
  },
  {
    "code": "CXF",
    "country_code": "US",
    "city": "Coldfoot"
  },
  {
    "code": "WFI",
    "country_code": "MG",
    "city": "Fianarantsoa"
  },
  {
    "code": "XAH",
    "country_code": "DK",
    "city": "Silkeborg"
  },
  {
    "code": "XCL",
    "country_code": "CA",
    "city": "Cluff Lake"
  },
  {
    "code": "PBG",
    "country_code": "US",
    "city": "Plattsburgh"
  },
  {
    "code": "QFB",
    "country_code": "DE",
    "city": "Freiburg"
  },
  {
    "code": "OTO",
    "country_code": "US",
    "city": "Otto"
  },
  {
    "code": "BDD",
    "country_code": "AU",
    "city": "Badu Island"
  },
  {
    "code": "FMY",
    "country_code": "US",
    "city": "Fort Myers"
  },
  {
    "code": "ECH",
    "country_code": "AU",
    "city": "Echuca"
  },
  {
    "code": "UAK",
    "country_code": "GL",
    "city": "Narsarsuaq"
  },
  {
    "code": "BCG",
    "country_code": "GY",
    "city": "Bemichi"
  },
  {
    "code": "ZTW",
    "country_code": "HK",
    "city": "Tsuen Wan"
  },
  {
    "code": "KMS",
    "country_code": "GH",
    "city": "Kumasi"
  },
  {
    "code": "YQE",
    "country_code": "CA",
    "city": "Kimberley"
  },
  {
    "code": "MHT",
    "country_code": "US",
    "city": "Manchester"
  },
  {
    "code": "MFJ",
    "country_code": "FJ",
    "city": "Moala"
  },
  {
    "code": "CSW",
    "country_code": "BR",
    "city": "Colorado do Oeste"
  },
  {
    "code": "YQX",
    "country_code": "CA",
    "city": "Gander"
  },
  {
    "code": "XML",
    "country_code": "AU",
    "city": "Minlaton"
  },
  {
    "code": "XPP",
    "country_code": "CA",
    "city": "Poplar River"
  },
  {
    "code": "PGG",
    "country_code": "BR",
    "city": "Progresso"
  },
  {
    "code": "ZAZ",
    "country_code": "ES",
    "city": "Zaragoza"
  },
  {
    "code": "SZJ",
    "country_code": "CU",
    "city": "Siguanea"
  },
  {
    "code": "DAF",
    "country_code": "PG",
    "city": "Daup"
  },
  {
    "code": "CEU",
    "country_code": "US",
    "city": "Clemson"
  },
  {
    "code": "AEE",
    "country_code": "SS",
    "city": "Adareil"
  },
  {
    "code": "LMA",
    "country_code": "US",
    "city": "Lake Minchumina"
  },
  {
    "code": "BUI",
    "country_code": "ID",
    "city": "Bokondini"
  },
  {
    "code": "CED",
    "country_code": "AU",
    "city": "Ceduna"
  },
  {
    "code": "FUO",
    "country_code": "CN",
    "city": "Fuoshan"
  },
  {
    "code": "ZHG",
    "country_code": "CH",
    "city": "Glarus"
  },
  {
    "code": "JDF",
    "country_code": "BR",
    "city": "Juiz de Fora"
  },
  {
    "code": "ELC",
    "country_code": "AU",
    "city": "Elcho Island"
  },
  {
    "code": "BYD",
    "country_code": "YE",
    "city": "Beidah"
  },
  {
    "code": "WJR",
    "country_code": "KE",
    "city": "Wajir"
  },
  {
    "code": "BJW",
    "country_code": "ID",
    "city": "Bajawa"
  },
  {
    "code": "FSL",
    "country_code": "AU",
    "city": "Fossil Downs"
  },
  {
    "code": "OUS",
    "country_code": "BR",
    "city": "Ourinhos"
  },
  {
    "code": "AWM",
    "country_code": "US",
    "city": "West Memphis"
  },
  {
    "code": "KPW",
    "country_code": "RU",
    "city": "Keperveyem"
  },
  {
    "code": "SPZ",
    "country_code": "US",
    "city": "Springdale"
  },
  {
    "code": "RAL",
    "country_code": "US",
    "city": "Riverside"
  },
  {
    "code": "KTK",
    "country_code": "PG",
    "city": "Kanua"
  },
  {
    "code": "CAZ",
    "country_code": "AU",
    "city": "Cobar"
  },
  {
    "code": "ANQ",
    "country_code": "US",
    "city": "Angola"
  },
  {
    "code": "KJA",
    "country_code": "RU",
    "city": "Krasnojarsk"
  },
  {
    "code": "TCQ",
    "country_code": "PE",
    "city": "Tacna"
  },
  {
    "code": "BYT",
    "country_code": "IE",
    "city": "Bantry"
  },
  {
    "code": "CRF",
    "country_code": "CF",
    "city": "Carnot"
  },
  {
    "code": "MWX",
    "country_code": "KR",
    "city": "Gwangju"
  },
  {
    "code": "TKC",
    "country_code": "CM",
    "city": "Tiko"
  },
  {
    "code": "CIH",
    "country_code": "CN",
    "city": "Changzhi"
  },
  {
    "code": "RJA",
    "country_code": "IN",
    "city": "Rajahmundry"
  },
  {
    "code": "RVN",
    "country_code": "FI",
    "city": "Rovaniemi"
  },
  {
    "code": "GAY",
    "country_code": "IN",
    "city": "Gaya"
  },
  {
    "code": "NND",
    "country_code": "MZ",
    "city": "Nangade"
  },
  {
    "code": "ZPF",
    "country_code": "DE",
    "city": "Passau"
  },
  {
    "code": "BBQ",
    "country_code": "AG",
    "city": "Barbuda"
  },
  {
    "code": "HAQ",
    "country_code": "MV",
    "city": "Hanimaadhoo"
  },
  {
    "code": "YXE",
    "country_code": "CA",
    "city": "Saskatoon"
  },
  {
    "code": "AYW",
    "country_code": "ID",
    "city": "Ayawasi"
  },
  {
    "code": "NLP",
    "country_code": "ZA",
    "city": "Nelspruit"
  },
  {
    "code": "BKJ",
    "country_code": "GN",
    "city": "Boke"
  },
  {
    "code": "XEE",
    "country_code": "CA",
    "city": "Lac Edouard"
  },
  {
    "code": "SJC",
    "country_code": "US",
    "city": "San Jose"
  },
  {
    "code": "EMN",
    "country_code": "MR",
    "city": "Nema"
  },
  {
    "code": "JIN",
    "country_code": "UG",
    "city": "Jinja"
  },
  {
    "code": "SHW",
    "country_code": "SA",
    "city": "Sharurah"
  },
  {
    "code": "UTP",
    "country_code": "TH",
    "city": "Utapao"
  },
  {
    "code": "ABA",
    "country_code": "RU",
    "city": "Abakan"
  },
  {
    "code": "SMX",
    "country_code": "US",
    "city": "Santa Maria"
  },
  {
    "code": "SRH",
    "country_code": "TD",
    "city": "Sarh"
  },
  {
    "code": "WAR",
    "country_code": "ID",
    "city": "Waris"
  },
  {
    "code": "SNX",
    "country_code": "DO",
    "city": "Sabana De Mar"
  },
  {
    "code": "EVV",
    "country_code": "US",
    "city": "Evansville"
  },
  {
    "code": "KAY",
    "country_code": "FJ",
    "city": "Wakaya Island"
  },
  {
    "code": "SMO",
    "country_code": "US",
    "city": "Santa Monica"
  },
  {
    "code": "EZV",
    "country_code": "RU",
    "city": "Berezovo"
  },
  {
    "code": "UGI",
    "country_code": "US",
    "city": "Uganik"
  },
  {
    "code": "MVC",
    "country_code": "US",
    "city": "Monroeville"
  },
  {
    "code": "ROA",
    "country_code": "US",
    "city": "Roanoke"
  },
  {
    "code": "HLI",
    "country_code": "US",
    "city": "Hollister"
  },
  {
    "code": "MEH",
    "country_code": "NO",
    "city": "Mehamn"
  },
  {
    "code": "MXB",
    "country_code": "ID",
    "city": "Masamba"
  },
  {
    "code": "PDX",
    "country_code": "US",
    "city": "Portland"
  },
  {
    "code": "IVA",
    "country_code": "MG",
    "city": "Ambanja"
  },
  {
    "code": "CUT",
    "country_code": "AR",
    "city": "Cutral"
  },
  {
    "code": "CZK",
    "country_code": "US",
    "city": "Cascade Locks"
  },
  {
    "code": "SZS",
    "country_code": "NZ",
    "city": "Stewart Island"
  },
  {
    "code": "ENF",
    "country_code": "FI",
    "city": "Enontekio"
  },
  {
    "code": "ZAP",
    "country_code": "CH",
    "city": "Appenzell"
  },
  {
    "code": "DIP",
    "country_code": "BF",
    "city": "Diapaga"
  },
  {
    "code": "BLN",
    "country_code": "AU",
    "city": "Benalla"
  },
  {
    "code": "SWU",
    "country_code": "KR",
    "city": "Suwon"
  },
  {
    "code": "STH",
    "country_code": "AU",
    "city": "Strathmore"
  },
  {
    "code": "AAZ",
    "country_code": "GT",
    "city": "Quetzaltenango"
  },
  {
    "code": "BKT",
    "country_code": "US",
    "city": "Blackstone"
  },
  {
    "code": "HTR",
    "country_code": "JP",
    "city": "Hateruma"
  },
  {
    "code": "YCP",
    "country_code": "CA",
    "city": "Co-op Point"
  },
  {
    "code": "GNR",
    "country_code": "AR",
    "city": "General Roca"
  },
  {
    "code": "ЯМБ",
    "country_code": "RU",
    "city": "Yamburg"
  },
  {
    "code": "BAK",
    "country_code": "AZ",
    "city": "Baku"
  },
  {
    "code": "NGD",
    "country_code": "VG",
    "city": "Anegada"
  },
  {
    "code": "DZI",
    "country_code": "CO",
    "city": "Codazzi"
  },
  {
    "code": "GKL",
    "country_code": "AU",
    "city": "Great Keppel Island"
  },
  {
    "code": "LNO",
    "country_code": "AU",
    "city": "Leonora"
  },
  {
    "code": "HAD",
    "country_code": "SE",
    "city": "Halmstad"
  },
  {
    "code": "BUM",
    "country_code": "US",
    "city": "Butler"
  },
  {
    "code": "MNV",
    "country_code": "AU",
    "city": "Mountain Valley"
  },
  {
    "code": "FMC",
    "country_code": "US",
    "city": "Five Mile"
  },
  {
    "code": "REO",
    "country_code": "US",
    "city": "Rome"
  },
  {
    "code": "AUR",
    "country_code": "FR",
    "city": "Aurillac"
  },
  {
    "code": "ZTI",
    "country_code": "CN",
    "city": "Humen"
  },
  {
    "code": "OSB",
    "country_code": "US",
    "city": "Osage Beach"
  },
  {
    "code": "ZHS",
    "country_code": "CH",
    "city": "Klosters"
  },
  {
    "code": "TMH",
    "country_code": "ID",
    "city": "Tanahmerah"
  },
  {
    "code": "CDP",
    "country_code": "IN",
    "city": "Cuddapah"
  },
  {
    "code": "CNA",
    "country_code": "MX",
    "city": "Cananea"
  },
  {
    "code": "PKF",
    "country_code": "US",
    "city": "Park Falls"
  },
  {
    "code": "CZS",
    "country_code": "BR",
    "city": "Cruzeiro Do Sul"
  },
  {
    "code": "OLC",
    "country_code": "BR",
    "city": "Sao Paulo de Olivenca"
  },
  {
    "code": "KPP",
    "country_code": "AU",
    "city": "Kalpowar"
  },
  {
    "code": "ZHA",
    "country_code": "CN",
    "city": "Zhanjiang"
  },
  {
    "code": "GKT",
    "country_code": "US",
    "city": "Gatlinburg"
  },
  {
    "code": "BDZ",
    "country_code": "PG",
    "city": "Baindoung"
  },
  {
    "code": "DAB",
    "country_code": "US",
    "city": "Daytona Beach"
  },
  {
    "code": "TOT",
    "country_code": "SR",
    "city": "Totness"
  },
  {
    "code": "YQJ",
    "country_code": "CA",
    "city": "Quadra Island"
  },
  {
    "code": "YRJ",
    "country_code": "CA",
    "city": "Roberval"
  },
  {
    "code": "ZMK",
    "country_code": "MY",
    "city": "Bintulu"
  },
  {
    "code": "OWB",
    "country_code": "US",
    "city": "Owensboro"
  },
  {
    "code": "BAS",
    "country_code": "SB",
    "city": "Balalae"
  },
  {
    "code": "HCR",
    "country_code": "US",
    "city": "Holy Cross"
  },
  {
    "code": "YLI",
    "country_code": "FI",
    "city": "Ylivieska"
  },
  {
    "code": "WPR",
    "country_code": "CL",
    "city": "Porvenir"
  },
  {
    "code": "DTM",
    "country_code": "DE",
    "city": "Dortmund"
  },
  {
    "code": "SEG",
    "country_code": "US",
    "city": "Selinsgrove"
  },
  {
    "code": "NOU",
    "country_code": "NC",
    "city": "Noumea"
  },
  {
    "code": "GCN",
    "country_code": "US",
    "city": "Flagstaff"
  },
  {
    "code": "BHN",
    "country_code": "YE",
    "city": "Beihan"
  },
  {
    "code": "TNB",
    "country_code": "ID",
    "city": "Tanah Grogot"
  },
  {
    "code": "ДМЙ",
    "country_code": "RU",
    "city": "Dombay"
  },
  {
    "code": "GLM",
    "country_code": "AU",
    "city": "Glenormiston"
  },
  {
    "code": "GCV",
    "country_code": "BR",
    "city": "Gravatai"
  },
  {
    "code": "CBH",
    "country_code": "DZ",
    "city": "Béchar"
  },
  {
    "code": "COX",
    "country_code": "BS",
    "city": "Congo Town"
  },
  {
    "code": "SRL",
    "country_code": "MX",
    "city": "Santa Rosalia"
  },
  {
    "code": "УТЕ",
    "country_code": "RU",
    "city": "Ust-Kolikjegan"
  },
  {
    "code": "MLW",
    "country_code": "LR",
    "city": "Monrovia"
  },
  {
    "code": "XXI",
    "country_code": "SE",
    "city": "Koping"
  },
  {
    "code": "ASZ",
    "country_code": "PG",
    "city": "Asirim"
  },
  {
    "code": "ZLV",
    "country_code": "FI",
    "city": "Luosto"
  },
  {
    "code": "NHF",
    "country_code": "SD",
    "city": "New Halfa"
  },
  {
    "code": "PSX",
    "country_code": "US",
    "city": "Palacios"
  },
  {
    "code": "BSB",
    "country_code": "BR",
    "city": "Brasilia"
  },
  {
    "code": "QVY",
    "country_code": "FI",
    "city": "Kouvola"
  },
  {
    "code": "BHH",
    "country_code": "SA",
    "city": "Bisha"
  },
  {
    "code": "WKB",
    "country_code": "AU",
    "city": "Warracknabeal"
  },
  {
    "code": "EAN",
    "country_code": "US",
    "city": "Wheatland"
  },
  {
    "code": "MES",
    "country_code": "ID",
    "city": "Medan"
  },
  {
    "code": "LLY",
    "country_code": "US",
    "city": "Mount Holly"
  },
  {
    "code": "AMU",
    "country_code": "PG",
    "city": "Amanab"
  },
  {
    "code": "HOE",
    "country_code": "LA",
    "city": "Houeisay"
  },
  {
    "code": "NIC",
    "country_code": "NY",
    "city": "Nicosia"
  },
  {
    "code": "VNE",
    "country_code": "FR",
    "city": "Vannes"
  },
  {
    "code": "KIK",
    "country_code": "IQ",
    "city": "Kirkuk"
  },
  {
    "code": "PDD",
    "country_code": "MZ",
    "city": "Ponta de Ouro"
  },
  {
    "code": "NNL",
    "country_code": "US",
    "city": "Nondalton"
  },
  {
    "code": "SAR",
    "country_code": "US",
    "city": "Sparta"
  },
  {
    "code": "NUX",
    "country_code": "RU",
    "city": "Novyj Urengoj"
  },
  {
    "code": "ZLF",
    "country_code": "CH",
    "city": "Wettingen"
  },
  {
    "code": "LVS",
    "country_code": "US",
    "city": "Las Vegas"
  },
  {
    "code": "NTQ",
    "country_code": "JP",
    "city": "Wajima"
  },
  {
    "code": "GPA",
    "country_code": "GR",
    "city": "Patras"
  },
  {
    "code": "OKV",
    "country_code": "PG",
    "city": "Okao"
  },
  {
    "code": "NPO",
    "country_code": "ID",
    "city": "Nangapinoh"
  },
  {
    "code": "STQ",
    "country_code": "US",
    "city": "St Marys"
  },
  {
    "code": "WTL",
    "country_code": "US",
    "city": "Tuntutuliak"
  },
  {
    "code": "MOJ",
    "country_code": "SR",
    "city": "Moengo"
  },
  {
    "code": "SYF",
    "country_code": "CA",
    "city": "Silva Bay"
  },
  {
    "code": "MPJ",
    "country_code": "US",
    "city": "Morrilton"
  },
  {
    "code": "HAU",
    "country_code": "NO",
    "city": "Haugesund"
  },
  {
    "code": "BWD",
    "country_code": "US",
    "city": "Brownwood"
  },
  {
    "code": "PGH",
    "country_code": "IN",
    "city": "Pantnagar"
  },
  {
    "code": "BVS",
    "country_code": "BR",
    "city": "Breves"
  },
  {
    "code": "PKB",
    "country_code": "US",
    "city": "Parkersburg"
  },
  {
    "code": "DRS",
    "country_code": "DE",
    "city": "Dresden"
  },
  {
    "code": "EDA",
    "country_code": "US",
    "city": "Edna Bay"
  },
  {
    "code": "EMX",
    "country_code": "AR",
    "city": "El Maiten"
  },
  {
    "code": "SSM",
    "country_code": "US",
    "city": "Sault Ste. Marie"
  },
  {
    "code": "TOV",
    "country_code": "VG",
    "city": "Tortola"
  },
  {
    "code": "PWE",
    "country_code": "RU",
    "city": "Pevek"
  },
  {
    "code": "PIU",
    "country_code": "PE",
    "city": "Piura"
  },
  {
    "code": "YCE",
    "country_code": "CA",
    "city": "Centralia"
  },
  {
    "code": "NMS",
    "country_code": "MM",
    "city": "Namsang"
  },
  {
    "code": "WLG",
    "country_code": "NZ",
    "city": "Wellington"
  },
  {
    "code": "JUV",
    "country_code": "GL",
    "city": "Upernavik"
  },
  {
    "code": "ETR",
    "country_code": "EC",
    "city": "Santa Rosa"
  },
  {
    "code": "AKE",
    "country_code": "GA",
    "city": "Akieni"
  },
  {
    "code": "DWA",
    "country_code": "MW",
    "city": "Dwangwa"
  },
  {
    "code": "RSL",
    "country_code": "US",
    "city": "Russell"
  },
  {
    "code": "KUX",
    "country_code": "PG",
    "city": "Kuyol"
  },
  {
    "code": "BTD",
    "country_code": "AU",
    "city": "Brunette Downs"
  },
  {
    "code": "YCD",
    "country_code": "CA",
    "city": "Nanaimo"
  },
  {
    "code": "QMO",
    "country_code": "BE",
    "city": "Mons"
  },
  {
    "code": "POM",
    "country_code": "PG",
    "city": "Port Moresby"
  },
  {
    "code": "JQE",
    "country_code": "PA",
    "city": "Jaque"
  },
  {
    "code": "OES",
    "country_code": "AR",
    "city": "San Antonio Oeste"
  },
  {
    "code": "EIK",
    "country_code": "RU",
    "city": "Yeysk"
  },
  {
    "code": "NWI",
    "country_code": "GB",
    "city": "Norwich"
  },
  {
    "code": "CMX",
    "country_code": "US",
    "city": "Hancock"
  },
  {
    "code": "TKT",
    "country_code": "TH",
    "city": "Tak"
  },
  {
    "code": "KWA",
    "country_code": "MH",
    "city": "Kwajalein"
  },
  {
    "code": "FDE",
    "country_code": "NO",
    "city": "Forde"
  },
  {
    "code": "TRG",
    "country_code": "NZ",
    "city": "Tauranga"
  },
  {
    "code": "CZN",
    "country_code": "US",
    "city": "Chisana"
  },
  {
    "code": "XUW",
    "country_code": "NO",
    "city": "Storen"
  },
  {
    "code": "CCG",
    "country_code": "US",
    "city": "Crane"
  },
  {
    "code": "MFL",
    "country_code": "AU",
    "city": "Mount Full Stop"
  },
  {
    "code": "CAM",
    "country_code": "BO",
    "city": "Camiri"
  },
  {
    "code": "JFR",
    "country_code": "GL",
    "city": "Paamiut"
  },
  {
    "code": "BOS",
    "country_code": "US",
    "city": "Boston"
  },
  {
    "code": "XRP",
    "country_code": "CA",
    "city": "Riviere-a-Pierre"
  },
  {
    "code": "WSX",
    "country_code": "US",
    "city": "Westsound"
  },
  {
    "code": "LBD",
    "country_code": "TJ",
    "city": "Khujand"
  },
  {
    "code": "ELS",
    "country_code": "ZA",
    "city": "East London"
  },
  {
    "code": "OLQ",
    "country_code": "PG",
    "city": "Olsobip"
  },
  {
    "code": "GTS",
    "country_code": "AU",
    "city": "Granites"
  },
  {
    "code": "SCM",
    "country_code": "US",
    "city": "Scammon Bay"
  },
  {
    "code": "IPU",
    "country_code": "BR",
    "city": "Ipiau"
  },
  {
    "code": "SWQ",
    "country_code": "ID",
    "city": "Sumbawa Besar"
  },
  {
    "code": "PPW",
    "country_code": "GB",
    "city": "Papa Westray"
  },
  {
    "code": "APQ",
    "country_code": "BR",
    "city": "Arapiraca"
  },
  {
    "code": "BRZ",
    "country_code": "IT",
    "city": "Borotou"
  },
  {
    "code": "KQA",
    "country_code": "US",
    "city": "Akutan"
  },
  {
    "code": "DLC",
    "country_code": "CN",
    "city": "Dalian"
  },
  {
    "code": "ODD",
    "country_code": "AU",
    "city": "Oodnadatta"
  },
  {
    "code": "CJH",
    "country_code": "CA",
    "city": "Chilko Lake"
  },
  {
    "code": "MSN",
    "country_code": "US",
    "city": "Madison"
  },
  {
    "code": "GUV",
    "country_code": "PG",
    "city": "Mougulu"
  },
  {
    "code": "KER",
    "country_code": "IR",
    "city": "Kerman"
  },
  {
    "code": "TCF",
    "country_code": "HN",
    "city": "Tocoa"
  },
  {
    "code": "RKR",
    "country_code": "US",
    "city": "Poteau"
  },
  {
    "code": "SLM",
    "country_code": "ES",
    "city": "Salamanca"
  },
  {
    "code": "OSS",
    "country_code": "KG",
    "city": "Osh"
  },
  {
    "code": "UTC",
    "country_code": "NL",
    "city": "Utrecht"
  },
  {
    "code": "YBV",
    "country_code": "CA",
    "city": "Berens River"
  },
  {
    "code": "OTG",
    "country_code": "US",
    "city": "Worthington"
  },
  {
    "code": "SJO",
    "country_code": "CR",
    "city": "San Jose"
  },
  {
    "code": "DLS",
    "country_code": "US",
    "city": "The Dalles"
  },
  {
    "code": "DZA",
    "country_code": "YT",
    "city": "Dzaoudzi"
  },
  {
    "code": "MAS",
    "country_code": "PG",
    "city": "Manus Island"
  },
  {
    "code": "CSO",
    "country_code": "DE",
    "city": "Cochstedt"
  },
  {
    "code": "KYX",
    "country_code": "PG",
    "city": "Yalumet"
  },
  {
    "code": "NQZ",
    "country_code": "KZ",
    "city": "Astana"
  },
  {
    "code": "XIE",
    "country_code": "LA",
    "city": "Xienglom"
  },
  {
    "code": "AIR",
    "country_code": "BR",
    "city": "Aripuana"
  },
  {
    "code": "WNE",
    "country_code": "GA",
    "city": "Wora Na Ye"
  },
  {
    "code": "LXV",
    "country_code": "US",
    "city": "Leadville"
  },
  {
    "code": "CGY",
    "country_code": "PH",
    "city": "Cagayan De Oro"
  },
  {
    "code": "HNX",
    "country_code": "US",
    "city": "Hanna"
  },
  {
    "code": "RSH",
    "country_code": "US",
    "city": "Russian Mission"
  },
  {
    "code": "YKN",
    "country_code": "US",
    "city": "Yankton"
  },
  {
    "code": "NRL",
    "country_code": "GB",
    "city": "North Ronaldsay"
  },
  {
    "code": "YDN",
    "country_code": "CA",
    "city": "Dauphin"
  },
  {
    "code": "PIX",
    "country_code": "PT",
    "city": "Pico Island (Azores)"
  },
  {
    "code": "MSU",
    "country_code": "LS",
    "city": "Maseru"
  },
  {
    "code": "PBT",
    "country_code": "PY",
    "city": "Puerto Leda"
  },
  {
    "code": "MYJ",
    "country_code": "JP",
    "city": "Matsuyama"
  },
  {
    "code": "CKT",
    "country_code": "IR",
    "city": "Sarakhs"
  },
  {
    "code": "EFK",
    "country_code": "US",
    "city": "Newport"
  },
  {
    "code": "PUV",
    "country_code": "NC",
    "city": "Poum"
  },
  {
    "code": "MSW",
    "country_code": "ER",
    "city": "Massawa"
  },
  {
    "code": "SAH",
    "country_code": "YE",
    "city": "Sana'a"
  },
  {
    "code": "GGR",
    "country_code": "SO",
    "city": "Garoe"
  },
  {
    "code": "CIX",
    "country_code": "PE",
    "city": "Chiclayo"
  },
  {
    "code": "AXP",
    "country_code": "BS",
    "city": "Spring Point"
  },
  {
    "code": "JWN",
    "country_code": "IR",
    "city": "Zanjan"
  },
  {
    "code": "SPW",
    "country_code": "US",
    "city": "Spencer"
  },
  {
    "code": "GMV",
    "country_code": "US",
    "city": "Monument Valley Gldngs"
  },
  {
    "code": "BQW",
    "country_code": "AU",
    "city": "Balgo Hills"
  },
  {
    "code": "OMO",
    "country_code": "BA",
    "city": "Mostar"
  },
  {
    "code": "POD",
    "country_code": "SN",
    "city": "Podor"
  },
  {
    "code": "GET",
    "country_code": "AU",
    "city": "Geraldton"
  },
  {
    "code": "MBL",
    "country_code": "US",
    "city": "Manistee"
  },
  {
    "code": "BHL",
    "country_code": "MX",
    "city": "Bahia Angeles"
  },
  {
    "code": "YPN",
    "country_code": "CA",
    "city": "Port Menier"
  },
  {
    "code": "SMB",
    "country_code": "CL",
    "city": "Cerro Sombrero"
  },
  {
    "code": "KOH",
    "country_code": "AU",
    "city": "Koolatah"
  },
  {
    "code": "CVL",
    "country_code": "PG",
    "city": "Cape Vogel"
  },
  {
    "code": "HNS",
    "country_code": "US",
    "city": "Haines"
  },
  {
    "code": "YSB",
    "country_code": "CA",
    "city": "Sudbury"
  },
  {
    "code": "ХРП",
    "country_code": "RU",
    "city": "Kherpuchi"
  },
  {
    "code": "MBR",
    "country_code": "MR",
    "city": "Mbout"
  },
  {
    "code": "WEI",
    "country_code": "AU",
    "city": "Weipa"
  },
  {
    "code": "LSL",
    "country_code": "CR",
    "city": "Los Chiles"
  },
  {
    "code": "IGH",
    "country_code": "AU",
    "city": "Ingham"
  },
  {
    "code": "CBE",
    "country_code": "US",
    "city": "Cumberland"
  },
  {
    "code": "MOU",
    "country_code": "US",
    "city": "Mountain Village"
  },
  {
    "code": "NZE",
    "country_code": "GN",
    "city": "Nzerekore"
  },
  {
    "code": "PUO",
    "country_code": "US",
    "city": "Prudhoe Bay"
  },
  {
    "code": "PON",
    "country_code": "GT",
    "city": "Poptun"
  },
  {
    "code": "YZT",
    "country_code": "CA",
    "city": "Port Hardy"
  },
  {
    "code": "KHD",
    "country_code": "IR",
    "city": "Khorramabad"
  },
  {
    "code": "YGV",
    "country_code": "CA",
    "city": "Havre St Pierre"
  },
  {
    "code": "ECN",
    "country_code": "NY",
    "city": "Ercan"
  },
  {
    "code": "JAV",
    "country_code": "GL",
    "city": "Ilulissat"
  },
  {
    "code": "CYR",
    "country_code": "UY",
    "city": "Colonia"
  },
  {
    "code": "GWA",
    "country_code": "MM",
    "city": "Gwa"
  },
  {
    "code": "XDJ",
    "country_code": "BF",
    "city": "Djibo"
  },
  {
    "code": "EFG",
    "country_code": "PG",
    "city": "Efogi"
  },
  {
    "code": "BHJ",
    "country_code": "IN",
    "city": "Bhuj"
  },
  {
    "code": "TYD",
    "country_code": "RU",
    "city": "Tynda"
  },
  {
    "code": "PQM",
    "country_code": "MX",
    "city": "Palenque"
  },
  {
    "code": "MBF",
    "country_code": "AU",
    "city": "Mount Buffalo"
  },
  {
    "code": "NUM",
    "country_code": "SA",
    "city": "Neom"
  },
  {
    "code": "ZTK",
    "country_code": "CH",
    "city": "Thun"
  },
  {
    "code": "XWB",
    "country_code": "GB",
    "city": "Stirling"
  },
  {
    "code": "VSK",
    "country_code": "US",
    "city": "Kennewick"
  },
  {
    "code": "GAJ",
    "country_code": "JP",
    "city": "Yamagata"
  },
  {
    "code": "TIO",
    "country_code": "MM",
    "city": "Tilin"
  },
  {
    "code": "DNX",
    "country_code": "SD",
    "city": "Dinder"
  },
  {
    "code": "MLI",
    "country_code": "US",
    "city": "Moline"
  },
  {
    "code": "SYN",
    "country_code": "US",
    "city": "Stanton"
  },
  {
    "code": "CBG",
    "country_code": "GB",
    "city": "Cambridge"
  },
  {
    "code": "TKH",
    "country_code": "TH",
    "city": "Takhli"
  },
  {
    "code": "NGX",
    "country_code": "NP",
    "city": "Manang"
  },
  {
    "code": "BXD",
    "country_code": "ID",
    "city": "Bade"
  },
  {
    "code": "FAB",
    "country_code": "GB",
    "city": "Farnborough"
  },
  {
    "code": "OPU",
    "country_code": "PG",
    "city": "Balimo"
  },
  {
    "code": "PMW",
    "country_code": "BR",
    "city": "Palmas"
  },
  {
    "code": "MZR",
    "country_code": "AF",
    "city": "Mazar-I-Sharif"
  },
  {
    "code": "ORI",
    "country_code": "US",
    "city": "Port Lions"
  },
  {
    "code": "SGQ",
    "country_code": "ID",
    "city": "Sanggata"
  },
  {
    "code": "AUV",
    "country_code": "PG",
    "city": "Aumo"
  },
  {
    "code": "SME",
    "country_code": "US",
    "city": "Somerset"
  },
  {
    "code": "YMD",
    "country_code": "CA",
    "city": "Mould Bay"
  },
  {
    "code": "IQM",
    "country_code": "CN",
    "city": "Qiemo"
  },
  {
    "code": "HAV",
    "country_code": "CU",
    "city": "Havana"
  },
  {
    "code": "STJ",
    "country_code": "US",
    "city": "St Joseph"
  },
  {
    "code": "CTX",
    "country_code": "US",
    "city": "Cortland"
  },
  {
    "code": "UEO",
    "country_code": "JP",
    "city": "Kume-jima"
  },
  {
    "code": "RTI",
    "country_code": "ID",
    "city": "Roti"
  },
  {
    "code": "AOG",
    "country_code": "CN",
    "city": "Anshan"
  },
  {
    "code": "GPD",
    "country_code": "AU",
    "city": "Mount Gordon Mine"
  },
  {
    "code": "IHN",
    "country_code": "YE",
    "city": "Qishn"
  },
  {
    "code": "BWI",
    "country_code": "US",
    "city": "Baltimore"
  },
  {
    "code": "HDG",
    "country_code": "CN",
    "city": "Handan"
  },
  {
    "code": "RGA",
    "country_code": "AR",
    "city": "Rio Grande"
  },
  {
    "code": "LPT",
    "country_code": "TH",
    "city": "Lampang"
  },
  {
    "code": "BRL",
    "country_code": "US",
    "city": "Burlington"
  },
  {
    "code": "ZSK",
    "country_code": "DE",
    "city": "Pasewalk"
  },
  {
    "code": "ZKP",
    "country_code": "RU",
    "city": "Zyryanka"
  },
  {
    "code": "PBX",
    "country_code": "BR",
    "city": "Porto Alegre Do Norte"
  },
  {
    "code": "KIL",
    "country_code": "CD",
    "city": "Kilwa"
  },
  {
    "code": "JSO",
    "country_code": "SE",
    "city": "Sodertalje"
  },
  {
    "code": "IRE",
    "country_code": "BR",
    "city": "Irece"
  },
  {
    "code": "HMR",
    "country_code": "NO",
    "city": "Hamar"
  },
  {
    "code": "ЧАР",
    "country_code": "RU",
    "city": "Chara"
  },
  {
    "code": "KCB",
    "country_code": "SR",
    "city": "Kasikasima"
  },
  {
    "code": "TCD",
    "country_code": "CO",
    "city": "Tarapaca"
  },
  {
    "code": "ZKJ",
    "country_code": "CH",
    "city": "Schaffhausen"
  },
  {
    "code": "IHA",
    "country_code": "JP",
    "city": "Niihama"
  },
  {
    "code": "CPB",
    "country_code": "CO",
    "city": "Capurgana"
  },
  {
    "code": "ERQ",
    "country_code": "AU",
    "city": "Elrose Mine"
  },
  {
    "code": "ZQY",
    "country_code": "DE",
    "city": "Giessen"
  },
  {
    "code": "BKZ",
    "country_code": "TZ",
    "city": "Bukoba"
  },
  {
    "code": "TLJ",
    "country_code": "US",
    "city": "Tatalina"
  },
  {
    "code": "PDE",
    "country_code": "AU",
    "city": "Pandie Pandie"
  },
  {
    "code": "SIV",
    "country_code": "US",
    "city": "Sullivan"
  },
  {
    "code": "YSW",
    "country_code": "CA",
    "city": "Salluit"
  },
  {
    "code": "HGN",
    "country_code": "TH",
    "city": "Mae Hong Son"
  },
  {
    "code": "PCB",
    "country_code": "ID",
    "city": "Pondok Cabe"
  },
  {
    "code": "HST",
    "country_code": "US",
    "city": "Homestead"
  },
  {
    "code": "UPC",
    "country_code": "VE",
    "city": "Puerto la Cruz"
  },
  {
    "code": "ZMD",
    "country_code": "BR",
    "city": "Sena Madureira"
  },
  {
    "code": "RGL",
    "country_code": "AR",
    "city": "Rio Gallegos"
  },
  {
    "code": "HPA",
    "country_code": "TO",
    "city": "Ha'Apai"
  },
  {
    "code": "AOM",
    "country_code": "OM",
    "city": "Adam"
  },
  {
    "code": "CNX",
    "country_code": "TH",
    "city": "Chiang Mai"
  },
  {
    "code": "SXZ",
    "country_code": "TR",
    "city": "Siirt"
  },
  {
    "code": "ZNE",
    "country_code": "AU",
    "city": "Newman"
  },
  {
    "code": "BDR",
    "country_code": "US",
    "city": "Bridgeport"
  },
  {
    "code": "NCH",
    "country_code": "TZ",
    "city": "Nachingwea"
  },
  {
    "code": "SXR",
    "country_code": "IN",
    "city": "Srinagar"
  },
  {
    "code": "XRU",
    "country_code": "GB",
    "city": "Rugby"
  },
  {
    "code": "XNR",
    "country_code": "DK",
    "city": "Aabenraa"
  },
  {
    "code": "SIP",
    "country_code": "KX",
    "city": "Simferopol"
  },
  {
    "code": "IMB",
    "country_code": "GY",
    "city": "Imbaimadai"
  },
  {
    "code": "NRG",
    "country_code": "AU",
    "city": "Narrogin"
  },
  {
    "code": "OMH",
    "country_code": "IR",
    "city": "Nazluy-ye Jonubi"
  },
  {
    "code": "RDD",
    "country_code": "US",
    "city": "Redding"
  },
  {
    "code": "GOS",
    "country_code": "AU",
    "city": "Gosford"
  },
  {
    "code": "REW",
    "country_code": "IN",
    "city": "Rewa"
  },
  {
    "code": "MUD",
    "country_code": "MZ",
    "city": "Mueda"
  },
  {
    "code": "CDN",
    "country_code": "US",
    "city": "Camden"
  },
  {
    "code": "BZP",
    "country_code": "AU",
    "city": "Bizant"
  },
  {
    "code": "SLI",
    "country_code": "ZM",
    "city": "Solwezi"
  },
  {
    "code": "OHH",
    "country_code": "RU",
    "city": "Okha"
  },
  {
    "code": "ZSD",
    "country_code": "DE",
    "city": "Schwanheide"
  },
  {
    "code": "GUR",
    "country_code": "PG",
    "city": "Alotau"
  },
  {
    "code": "FIE",
    "country_code": "GB",
    "city": "Fair Isle"
  },
  {
    "code": "SJU",
    "country_code": "PR",
    "city": "San Juan"
  },
  {
    "code": "ITR",
    "country_code": "BR",
    "city": "Itumbiara"
  },
  {
    "code": "KAE",
    "country_code": "US",
    "city": "Kake"
  },
  {
    "code": "CTD",
    "country_code": "PA",
    "city": "Chitre"
  },
  {
    "code": "IXW",
    "country_code": "IN",
    "city": "Jamshedpur"
  },
  {
    "code": "ODO",
    "country_code": "RU",
    "city": "Bodaybo"
  },
  {
    "code": "QLU",
    "country_code": "PL",
    "city": "Lublin"
  },
  {
    "code": "XWP",
    "country_code": "SE",
    "city": "Hassleholm"
  },
  {
    "code": "SNM",
    "country_code": "BO",
    "city": "San Ignacio De M"
  },
  {
    "code": "MYC",
    "country_code": "VE",
    "city": "Maracay"
  },
  {
    "code": "HTI",
    "country_code": "AU",
    "city": "Hamilton Island"
  },
  {
    "code": "PEC",
    "country_code": "US",
    "city": "Pelican"
  },
  {
    "code": "NGS",
    "country_code": "JP",
    "city": "Nagasaki"
  },
  {
    "code": "FMM",
    "country_code": "DE",
    "city": "Memmingen"
  },
  {
    "code": "LOC",
    "country_code": "AU",
    "city": "Lock"
  },
  {
    "code": "MCG",
    "country_code": "US",
    "city": "McGrath"
  },
  {
    "code": "KVG",
    "country_code": "PG",
    "city": "Kavieng"
  },
  {
    "code": "MJM",
    "country_code": "CD",
    "city": "Mbuji-Mayi"
  },
  {
    "code": "MSZ",
    "country_code": "AO",
    "city": "Namibe"
  },
  {
    "code": "LAD",
    "country_code": "AO",
    "city": "Luanda"
  },
  {
    "code": "LVA",
    "country_code": "FR",
    "city": "Laval"
  },
  {
    "code": "ILQ",
    "country_code": "PE",
    "city": "Ilo"
  },
  {
    "code": "NAC",
    "country_code": "AU",
    "city": "Naracoorte"
  },
  {
    "code": "VER",
    "country_code": "MX",
    "city": "Veracruz"
  },
  {
    "code": "TBN",
    "country_code": "US",
    "city": "Fort Leonard Wood"
  },
  {
    "code": "ZHO",
    "country_code": "CA",
    "city": "Houston"
  },
  {
    "code": "LFM",
    "country_code": "IR",
    "city": "Lamerd"
  },
  {
    "code": "LTB",
    "country_code": "AU",
    "city": "Latrobe"
  },
  {
    "code": "LBW",
    "country_code": "ID",
    "city": "Long Bawan"
  },
  {
    "code": "ERB",
    "country_code": "AU",
    "city": "Ernabella"
  },
  {
    "code": "RTG",
    "country_code": "ID",
    "city": "Ruteng"
  },
  {
    "code": "YNN",
    "country_code": "AU",
    "city": "Yandicoogina"
  },
  {
    "code": "TCW",
    "country_code": "AU",
    "city": "Tocumwal"
  },
  {
    "code": "OTZ",
    "country_code": "US",
    "city": "Kotzebue"
  },
  {
    "code": "AYY",
    "country_code": "LK",
    "city": "Pothuvil"
  },
  {
    "code": "KEE",
    "country_code": "CG",
    "city": "Kelle"
  },
  {
    "code": "THT",
    "country_code": "MR",
    "city": "Tamchakett"
  },
  {
    "code": "HRT",
    "country_code": "GB",
    "city": "Harrogate"
  },
  {
    "code": "BGD",
    "country_code": "US",
    "city": "Borger"
  },
  {
    "code": "MTD",
    "country_code": "AU",
    "city": "Mount Sandford"
  },
  {
    "code": "BTW",
    "country_code": "ID",
    "city": "Batu Licin"
  },
  {
    "code": "GBR",
    "country_code": "US",
    "city": "Great Barrington"
  },
  {
    "code": "LAA",
    "country_code": "US",
    "city": "Lamar"
  },
  {
    "code": "SCW",
    "country_code": "RU",
    "city": "Syktyvkar"
  },
  {
    "code": "BIQ",
    "country_code": "FR",
    "city": "Biarritz"
  },
  {
    "code": "BVG",
    "country_code": "NO",
    "city": "Berlevag"
  },
  {
    "code": "MYT",
    "country_code": "MM",
    "city": "Myitkyina"
  },
  {
    "code": "PLD",
    "country_code": "CR",
    "city": "Playa Samara"
  },
  {
    "code": "DSI",
    "country_code": "US",
    "city": "Destin"
  },
  {
    "code": "MGN",
    "country_code": "CO",
    "city": "Magangue"
  },
  {
    "code": "QYL",
    "country_code": "NL",
    "city": "Almelo"
  },
  {
    "code": "WXN",
    "country_code": "CN",
    "city": "Wanxian"
  },
  {
    "code": "PRR",
    "country_code": "GY",
    "city": "Paruima"
  },
  {
    "code": "HRI",
    "country_code": "LK",
    "city": "Hambantota"
  },
  {
    "code": "QTH",
    "country_code": "AU",
    "city": "Thredbo"
  },
  {
    "code": "KIJ",
    "country_code": "JP",
    "city": "Niigata"
  },
  {
    "code": "MJA",
    "country_code": "MG",
    "city": "Manja"
  },
  {
    "code": "ЕСИ",
    "country_code": "RU",
    "city": "Essey"
  },
  {
    "code": "AMC",
    "country_code": "TD",
    "city": "Am Timan"
  },
  {
    "code": "KUM",
    "country_code": "JP",
    "city": "Yakushima"
  },
  {
    "code": "BFN",
    "country_code": "ZA",
    "city": "Bloemfontein"
  },
  {
    "code": "JKV",
    "country_code": "US",
    "city": "Jacksonville"
  },
  {
    "code": "UOS",
    "country_code": "US",
    "city": "Sewanee"
  },
  {
    "code": "PPQ",
    "country_code": "NZ",
    "city": "Paraparaumu"
  },
  {
    "code": "BZA",
    "country_code": "NI",
    "city": "Bonanza"
  },
  {
    "code": "LRA",
    "country_code": "GR",
    "city": "Larisa"
  },
  {
    "code": "LOP",
    "country_code": "ID",
    "city": "Praya"
  },
  {
    "code": "GLP",
    "country_code": "PG",
    "city": "Gulgubip"
  },
  {
    "code": "ZVK",
    "country_code": "LA",
    "city": "Savannakhet"
  },
  {
    "code": "SGC",
    "country_code": "RU",
    "city": "Surgut"
  },
  {
    "code": "JMS",
    "country_code": "US",
    "city": "Jamestown"
  },
  {
    "code": "BZZ",
    "country_code": "GB",
    "city": "Brize Norton"
  },
  {
    "code": "TRS",
    "country_code": "IT",
    "city": "Trieste"
  },
  {
    "code": "GIY",
    "country_code": "ZA",
    "city": "Giyani"
  },
  {
    "code": "ICA",
    "country_code": "VE",
    "city": "Icabaru"
  },
  {
    "code": "BCD",
    "country_code": "PH",
    "city": "Bacolod"
  },
  {
    "code": "OZC",
    "country_code": "PH",
    "city": "Ozamis City"
  },
  {
    "code": "HED",
    "country_code": "US",
    "city": "Herendeen"
  },
  {
    "code": "NVR",
    "country_code": "RU",
    "city": "Novgorod"
  },
  {
    "code": "REC",
    "country_code": "BR",
    "city": "Recife"
  },
  {
    "code": "MGW",
    "country_code": "US",
    "city": "Morgantown"
  },
  {
    "code": "CIZ",
    "country_code": "BR",
    "city": "Coari"
  },
  {
    "code": "KKM",
    "country_code": "TH",
    "city": "Lop Buri"
  },
  {
    "code": "XZA",
    "country_code": "BF",
    "city": "Zabre"
  },
  {
    "code": "JYR",
    "country_code": "IR",
    "city": "Jiroft"
  },
  {
    "code": "ZDL",
    "country_code": "CH",
    "city": "Brig"
  },
  {
    "code": "JSI",
    "country_code": "GR",
    "city": "Skiathos"
  },
  {
    "code": "MIJ",
    "country_code": "MH",
    "city": "Mili Island"
  },
  {
    "code": "DHI",
    "country_code": "NP",
    "city": "Dhangarhi"
  },
  {
    "code": "PLJ",
    "country_code": "BZ",
    "city": "Placencia"
  },
  {
    "code": "ЭЛБ",
    "country_code": "RU",
    "city": "Elbrus"
  },
  {
    "code": "GZA",
    "country_code": "PS",
    "city": "Rafah"
  },
  {
    "code": "SMG",
    "country_code": "PE",
    "city": "Santa Maria"
  },
  {
    "code": "LIL",
    "country_code": "FR",
    "city": "Lille"
  },
  {
    "code": "GTY",
    "country_code": "US",
    "city": "Gettysburg"
  },
  {
    "code": "MEL",
    "country_code": "AU",
    "city": "Melbourne"
  },
  {
    "code": "SMQ",
    "country_code": "ID",
    "city": "Sampit"
  },
  {
    "code": "LNS",
    "country_code": "US",
    "city": "Lancaster"
  },
  {
    "code": "PSS",
    "country_code": "AR",
    "city": "Posadas"
  },
  {
    "code": "MAL",
    "country_code": "ID",
    "city": "Mangole"
  },
  {
    "code": "RHA",
    "country_code": "IS",
    "city": "Reykholar"
  },
  {
    "code": "ONN",
    "country_code": "US",
    "city": "Onion Bay"
  },
  {
    "code": "CHW",
    "country_code": "CN",
    "city": "Jiuquan"
  },
  {
    "code": "SQC",
    "country_code": "AU",
    "city": "Southern Cross"
  },
  {
    "code": "ZRJ",
    "country_code": "CA",
    "city": "Round Lake"
  },
  {
    "code": "HXX",
    "country_code": "AU",
    "city": "Hay"
  },
  {
    "code": "DHR",
    "country_code": "NL",
    "city": "Den Helder"
  },
  {
    "code": "YLW",
    "country_code": "CA",
    "city": "Kelowna"
  },
  {
    "code": "QKB",
    "country_code": "US",
    "city": "Breckenridge"
  },
  {
    "code": "BVJ",
    "country_code": "RU",
    "city": "Bovanenkovo"
  },
  {
    "code": "PTP",
    "country_code": "GP",
    "city": "Abymes"
  },
  {
    "code": "XPY",
    "country_code": "FI",
    "city": "Pyha"
  },
  {
    "code": "AGD",
    "country_code": "ID",
    "city": "Anggi"
  },
  {
    "code": "WGP",
    "country_code": "ID",
    "city": "Waingapu"
  },
  {
    "code": "OCE",
    "country_code": "US",
    "city": "Ocean City"
  },
  {
    "code": "PAB",
    "country_code": "IN",
    "city": "Bilaspur"
  },
  {
    "code": "RBS",
    "country_code": "AU",
    "city": "Orbost"
  },
  {
    "code": "ZYG",
    "country_code": "NO",
    "city": "Gjovik"
  },
  {
    "code": "MAI",
    "country_code": "MW",
    "city": "Mangochi"
  },
  {
    "code": "SHC",
    "country_code": "ET",
    "city": "Indaselassie"
  },
  {
    "code": "SRO",
    "country_code": "CO",
    "city": "Santana Ramos"
  },
  {
    "code": "SVW",
    "country_code": "US",
    "city": "Sparrevohn"
  },
  {
    "code": "TED",
    "country_code": "DK",
    "city": "Thisted"
  },
  {
    "code": "NLD",
    "country_code": "MX",
    "city": "Nuevo Laredo"
  },
  {
    "code": "MXI",
    "country_code": "PH",
    "city": "Mati"
  },
  {
    "code": "AIB",
    "country_code": "US",
    "city": "Anita Bay"
  },
  {
    "code": "ZEY",
    "country_code": "DE",
    "city": "Hagen"
  },
  {
    "code": "ZFM",
    "country_code": "CA",
    "city": "Fort Mcpherson"
  },
  {
    "code": "GXY",
    "country_code": "US",
    "city": "Greeley"
  },
  {
    "code": "ZAK",
    "country_code": "IT",
    "city": "Chiusa/Klausen"
  },
  {
    "code": "MCW",
    "country_code": "US",
    "city": "Mason City"
  },
  {
    "code": "UAE",
    "country_code": "PG",
    "city": "Mount Aue"
  },
  {
    "code": "VJI",
    "country_code": "US",
    "city": "Abingdon"
  },
  {
    "code": "IKS",
    "country_code": "RU",
    "city": "Tiksi"
  },
  {
    "code": "DGE",
    "country_code": "AU",
    "city": "Mudgee"
  },
  {
    "code": "SLS",
    "country_code": "BG",
    "city": "Silistra"
  },
  {
    "code": "ARD",
    "country_code": "ID",
    "city": "Alor Island"
  },
  {
    "code": "QCA",
    "country_code": "SA",
    "city": "Makkah"
  },
  {
    "code": "BTP",
    "country_code": "US",
    "city": "Butler"
  },
  {
    "code": "MCT",
    "country_code": "OM",
    "city": "Muscat"
  },
  {
    "code": "UTD",
    "country_code": "AU",
    "city": "Nutwood Downs"
  },
  {
    "code": "MBG",
    "country_code": "US",
    "city": "Mobridge"
  },
  {
    "code": "ICT",
    "country_code": "US",
    "city": "Wichita"
  },
  {
    "code": "ALA",
    "country_code": "KZ",
    "city": "Almaty"
  },
  {
    "code": "LLG",
    "country_code": "AU",
    "city": "Chillagoe"
  },
  {
    "code": "FLI",
    "country_code": "IS",
    "city": "Flateyri"
  },
  {
    "code": "YBR",
    "country_code": "CA",
    "city": "Brandon"
  },
  {
    "code": "SZU",
    "country_code": "ML",
    "city": "Segou"
  },
  {
    "code": "FSZ",
    "country_code": "JP",
    "city": "Shizuoka"
  },
  {
    "code": "TBR",
    "country_code": "US",
    "city": "Statesboro"
  },
  {
    "code": "HGD",
    "country_code": "AU",
    "city": "Hughenden"
  },
  {
    "code": "UTL",
    "country_code": "ES",
    "city": "Torremolinos"
  },
  {
    "code": "PXL",
    "country_code": "US",
    "city": "Polacca"
  },
  {
    "code": "MNM",
    "country_code": "US",
    "city": "Menominee"
  },
  {
    "code": "YPL",
    "country_code": "CA",
    "city": "Pickle Lake"
  },
  {
    "code": "MFW",
    "country_code": "MZ",
    "city": "Magaruque"
  },
  {
    "code": "BQO",
    "country_code": "CI",
    "city": "Bouna"
  },
  {
    "code": "TGL",
    "country_code": "PG",
    "city": "Tagula"
  },
  {
    "code": "LIB",
    "country_code": "AU",
    "city": "Limbunya"
  },
  {
    "code": "XWS",
    "country_code": "GB",
    "city": "Swindon"
  },
  {
    "code": "KOQ",
    "country_code": "DE",
    "city": "Koethen"
  },
  {
    "code": "HTB",
    "country_code": "GP",
    "city": "Terre-de-Bas"
  },
  {
    "code": "MZG",
    "country_code": "TW",
    "city": "Makung"
  },
  {
    "code": "WNN",
    "country_code": "CA",
    "city": "Wunnummin Lake"
  },
  {
    "code": "XTY",
    "country_code": "CA",
    "city": "Strathroy"
  },
  {
    "code": "NPT",
    "country_code": "US",
    "city": "Newport"
  },
  {
    "code": "EBA",
    "country_code": "IT",
    "city": "Elba Island"
  },
  {
    "code": "MFI",
    "country_code": "US",
    "city": "Marshfield"
  },
  {
    "code": "KIW",
    "country_code": "ZM",
    "city": "Kitwe"
  },
  {
    "code": "OHA",
    "country_code": "NZ",
    "city": "Ohakea"
  },
  {
    "code": "GVE",
    "country_code": "US",
    "city": "Gordonsville"
  },
  {
    "code": "MAK",
    "country_code": "SS",
    "city": "Malakal"
  },
  {
    "code": "KHL",
    "country_code": "BD",
    "city": "Khulna"
  },
  {
    "code": "MDI",
    "country_code": "NG",
    "city": "Makurdi"
  },
  {
    "code": "TAV",
    "country_code": "AS",
    "city": "Luma"
  },
  {
    "code": "MQV",
    "country_code": "DZ",
    "city": "Mostaganem"
  },
  {
    "code": "SUH",
    "country_code": "OM",
    "city": "Sur"
  },
  {
    "code": "VTL",
    "country_code": "FR",
    "city": "Vittel"
  },
  {
    "code": "WEM",
    "country_code": "GB",
    "city": "West Malling"
  },
  {
    "code": "NKO",
    "country_code": "MG",
    "city": "Ankokoambo"
  },
  {
    "code": "STE",
    "country_code": "US",
    "city": "Stevens Point"
  },
  {
    "code": "MFU",
    "country_code": "ZM",
    "city": "Mfuwe"
  },
  {
    "code": "JCU",
    "country_code": "ES",
    "city": "Ceuta"
  },
  {
    "code": "ЧМИ",
    "country_code": "RU",
    "city": "Chumikan"
  },
  {
    "code": "ICY",
    "country_code": "US",
    "city": "Icy Bay"
  },
  {
    "code": "TWF",
    "country_code": "US",
    "city": "Twin Falls"
  },
  {
    "code": "YRE",
    "country_code": "CA",
    "city": "Resolution Island"
  },
  {
    "code": "KCR",
    "country_code": "US",
    "city": "Colorado Creek"
  },
  {
    "code": "ZKB",
    "country_code": "ZM",
    "city": "Kasaba Bay"
  },
  {
    "code": "TIV",
    "country_code": "ME",
    "city": "Tivat"
  },
  {
    "code": "HYF",
    "country_code": "PG",
    "city": "Hayfields"
  },
  {
    "code": "SVI",
    "country_code": "CO",
    "city": "San Vicente"
  },
  {
    "code": "KVC",
    "country_code": "US",
    "city": "King Cove"
  },
  {
    "code": "PAZ",
    "country_code": "MX",
    "city": "Poza Rica"
  },
  {
    "code": "DLB",
    "country_code": "PG",
    "city": "Dalbertis"
  },
  {
    "code": "ITB",
    "country_code": "BR",
    "city": "Itaituba"
  },
  {
    "code": "BWM",
    "country_code": "US",
    "city": "Bowman"
  },
  {
    "code": "KLF",
    "country_code": "RU",
    "city": "Kaluga"
  },
  {
    "code": "GSY",
    "country_code": "GB",
    "city": "Grimsby"
  },
  {
    "code": "BYJ",
    "country_code": "PT",
    "city": "Beja"
  },
  {
    "code": "JTI",
    "country_code": "BR",
    "city": "Jatai"
  },
  {
    "code": "FAG",
    "country_code": "IS",
    "city": "Fagurholsmyri"
  },
  {
    "code": "UIQ",
    "country_code": "VU",
    "city": "Quine Hill"
  },
  {
    "code": "AXK",
    "country_code": "YE",
    "city": "Ataq"
  },
  {
    "code": "SRZ",
    "country_code": "BO",
    "city": "Santa Cruz"
  },
  {
    "code": "PSI",
    "country_code": "PK",
    "city": "Pasni"
  },
  {
    "code": "CSA",
    "country_code": "GB",
    "city": "Isle Of Colonsay"
  },
  {
    "code": "OTL",
    "country_code": "MR",
    "city": "Boutilimit"
  },
  {
    "code": "OAI",
    "country_code": "AF",
    "city": "Bagram"
  },
  {
    "code": "RIZ",
    "country_code": "PA",
    "city": "Rio Alzucar"
  },
  {
    "code": "MNF",
    "country_code": "FJ",
    "city": "Mana Island"
  },
  {
    "code": "ZSE",
    "country_code": "RE",
    "city": "St Pierre dela Reunion"
  },
  {
    "code": "OGL",
    "country_code": "GY",
    "city": "Georgetown"
  },
  {
    "code": "IPA",
    "country_code": "VU",
    "city": "Ipota"
  },
  {
    "code": "AZL",
    "country_code": "BR",
    "city": "Sapezal"
  },
  {
    "code": "VJB",
    "country_code": "MZ",
    "city": "Xai Xai"
  },
  {
    "code": "LOH",
    "country_code": "EC",
    "city": "Loja"
  },
  {
    "code": "ACL",
    "country_code": "CO",
    "city": "Aguaclara"
  },
  {
    "code": "MBI",
    "country_code": "TZ",
    "city": "Mbeya"
  },
  {
    "code": "YVP",
    "country_code": "CA",
    "city": "Kuujjuaq"
  },
  {
    "code": "REA",
    "country_code": "PF",
    "city": "Reao"
  },
  {
    "code": "PUQ",
    "country_code": "CL",
    "city": "Punta Arenas"
  },
  {
    "code": "SHI",
    "country_code": "JP",
    "city": "Shimojishima"
  },
  {
    "code": "STK",
    "country_code": "US",
    "city": "Sterling"
  },
  {
    "code": "GRJ",
    "country_code": "ZA",
    "city": "George"
  },
  {
    "code": "ERD",
    "country_code": "UA",
    "city": "Berdyansk"
  },
  {
    "code": "IOA",
    "country_code": "GR",
    "city": "Ioannina"
  },
  {
    "code": "BLW",
    "country_code": "US",
    "city": "Waimanalo"
  },
  {
    "code": "AJF",
    "country_code": "SA",
    "city": "Jouf"
  },
  {
    "code": "ATJ",
    "country_code": "MG",
    "city": "Antsirabe"
  },
  {
    "code": "YPX",
    "country_code": "CA",
    "city": "Povungnituk"
  },
  {
    "code": "ONY",
    "country_code": "US",
    "city": "Olney"
  },
  {
    "code": "POY",
    "country_code": "US",
    "city": "Powell"
  },
  {
    "code": "KZH",
    "country_code": "US",
    "city": "Kizhuyak"
  },
  {
    "code": "BUF",
    "country_code": "US",
    "city": "Buffalo"
  },
  {
    "code": "DGC",
    "country_code": "ET",
    "city": "Degahbur"
  },
  {
    "code": "AAB",
    "country_code": "AU",
    "city": "Arrabury"
  },
  {
    "code": "LTI",
    "country_code": "MN",
    "city": "Altai"
  },
  {
    "code": "HOV",
    "country_code": "NO",
    "city": "Orsta-Volda"
  },
  {
    "code": "JNU",
    "country_code": "US",
    "city": "Juneau"
  },
  {
    "code": "VTE",
    "country_code": "LA",
    "city": "Vientiane"
  },
  {
    "code": "KSH",
    "country_code": "IR",
    "city": "Kermanshah"
  },
  {
    "code": "KKQ",
    "country_code": "RU",
    "city": "Krasnoselkup"
  },
  {
    "code": "OGV",
    "country_code": "NA",
    "city": "Ongava Game Reserve"
  },
  {
    "code": "ARQ",
    "country_code": "CO",
    "city": "Arauquita"
  },
  {
    "code": "ORQ",
    "country_code": "US",
    "city": "Norwalk"
  },
  {
    "code": "BMM",
    "country_code": "GA",
    "city": "Bitam"
  },
  {
    "code": "KOD",
    "country_code": "ID",
    "city": "Kotabangun"
  },
  {
    "code": "YQN",
    "country_code": "CA",
    "city": "Nakina"
  },
  {
    "code": "KNV",
    "country_code": "CA",
    "city": "Knights Inlet"
  },
  {
    "code": "ILY",
    "country_code": "GB",
    "city": "Islay"
  },
  {
    "code": "CNK",
    "country_code": "US",
    "city": "Concordia"
  },
  {
    "code": "ZQS",
    "country_code": "CA",
    "city": "Queen Charlotte Island"
  },
  {
    "code": "YHG",
    "country_code": "CA",
    "city": "Charlottetown"
  },
  {
    "code": "EPN",
    "country_code": "CG",
    "city": "Epena"
  },
  {
    "code": "GOO",
    "country_code": "AU",
    "city": "Goondiwindi"
  },
  {
    "code": "LRT",
    "country_code": "FR",
    "city": "Lorient"
  },
  {
    "code": "GIC",
    "country_code": "AU",
    "city": "Boigu Island"
  },
  {
    "code": "GYL",
    "country_code": "AU",
    "city": "Argyle"
  },
  {
    "code": "ARS",
    "country_code": "BR",
    "city": "Aragarcas"
  },
  {
    "code": "CRR",
    "country_code": "AR",
    "city": "Ceres"
  },
  {
    "code": "ILK",
    "country_code": "MG",
    "city": "Ilaka"
  },
  {
    "code": "SLP",
    "country_code": "MX",
    "city": "San Luis Potosi"
  },
  {
    "code": "BKG",
    "country_code": "US",
    "city": "Branson"
  },
  {
    "code": "GHA",
    "country_code": "DZ",
    "city": "Ghardaia"
  },
  {
    "code": "ALS",
    "country_code": "US",
    "city": "Alamosa"
  },
  {
    "code": "LNJ",
    "country_code": "CN",
    "city": "Lincang"
  },
  {
    "code": "BRC",
    "country_code": "AR",
    "city": "San Carlos de Bariloche"
  },
  {
    "code": "VRB",
    "country_code": "US",
    "city": "Vero Beach"
  },
  {
    "code": "XVA",
    "country_code": "GB",
    "city": "Stockport"
  },
  {
    "code": "YQH",
    "country_code": "CA",
    "city": "Watson Lake"
  },
  {
    "code": "KUY",
    "country_code": "PG",
    "city": "Kamusi"
  },
  {
    "code": "QRY",
    "country_code": "GL",
    "city": "Ikerasaarsuk"
  },
  {
    "code": "SJP",
    "country_code": "BR",
    "city": "Sao Jose Do Rio Preto"
  },
  {
    "code": "NUH",
    "country_code": "CO",
    "city": "Nunchia"
  },
  {
    "code": "HZL",
    "country_code": "US",
    "city": "Hazleton"
  },
  {
    "code": "KGT",
    "country_code": "CN",
    "city": "Kangding"
  },
  {
    "code": "SXG",
    "country_code": "ZM",
    "city": "Senanga"
  },
  {
    "code": "DRO",
    "country_code": "US",
    "city": "Durango"
  },
  {
    "code": "LWL",
    "country_code": "US",
    "city": "Wells"
  },
  {
    "code": "ABO",
    "country_code": "CI",
    "city": "Aboisso"
  },
  {
    "code": "KEP",
    "country_code": "NP",
    "city": "Nepalganj"
  },
  {
    "code": "TCC",
    "country_code": "US",
    "city": "Tucumcari"
  },
  {
    "code": "CSE",
    "country_code": "US",
    "city": "Crested Butte"
  },
  {
    "code": "KHI",
    "country_code": "PK",
    "city": "Karachi"
  },
  {
    "code": "OCN",
    "country_code": "US",
    "city": "Oceanside"
  },
  {
    "code": "TBG",
    "country_code": "PG",
    "city": "Tabubil"
  },
  {
    "code": "BON",
    "country_code": "BQ",
    "city": "Bonaire"
  },
  {
    "code": "SZQ",
    "country_code": "AR",
    "city": "Saenz Pena"
  },
  {
    "code": "CPD",
    "country_code": "AU",
    "city": "Coober Pedy"
  },
  {
    "code": "SYJ",
    "country_code": "IR",
    "city": "Sirjan"
  },
  {
    "code": "CHU",
    "country_code": "US",
    "city": "Chuathbaluk"
  },
  {
    "code": "UDE",
    "country_code": "NL",
    "city": "Uden"
  },
  {
    "code": "SHP",
    "country_code": "CN",
    "city": "Qinhuangdao"
  },
  {
    "code": "BDY",
    "country_code": "US",
    "city": "Bandon"
  },
  {
    "code": "HLS",
    "country_code": "AU",
    "city": "St Helens"
  },
  {
    "code": "YHD",
    "country_code": "CA",
    "city": "Dryden"
  },
  {
    "code": "RDC",
    "country_code": "BR",
    "city": "Redencao"
  },
  {
    "code": "BLG",
    "country_code": "MY",
    "city": "Belaga"
  },
  {
    "code": "ZFL",
    "country_code": "CA",
    "city": "South Trout Lake"
  },
  {
    "code": "SEA",
    "country_code": "US",
    "city": "Seattle"
  },
  {
    "code": "MAW",
    "country_code": "US",
    "city": "Malden"
  },
  {
    "code": "NDI",
    "country_code": "PG",
    "city": "Namudi"
  },
  {
    "code": "POR",
    "country_code": "FI",
    "city": "Pori"
  },
  {
    "code": "TPU",
    "country_code": "NP",
    "city": "Tikapur"
  },
  {
    "code": "ECS",
    "country_code": "US",
    "city": "Newcastle"
  },
  {
    "code": "KCS",
    "country_code": "AU",
    "city": "Kings Creek Station"
  },
  {
    "code": "KUW",
    "country_code": "US",
    "city": "Kugururok River"
  },
  {
    "code": "SVC",
    "country_code": "US",
    "city": "Silver City"
  },
  {
    "code": "PKD",
    "country_code": "US",
    "city": "Park Rapids"
  },
  {
    "code": "CLI",
    "country_code": "US",
    "city": "Clintonville"
  },
  {
    "code": "OKU",
    "country_code": "NA",
    "city": "Mokuti Lodge"
  },
  {
    "code": "MXS",
    "country_code": "WS",
    "city": "Maota Savaii Island"
  },
  {
    "code": "AJY",
    "country_code": "NE",
    "city": "Agades"
  },
  {
    "code": "TYB",
    "country_code": "AU",
    "city": "Tibooburra"
  },
  {
    "code": "ZBZ",
    "country_code": "CN",
    "city": "Xin Hui"
  },
  {
    "code": "BTH",
    "country_code": "ID",
    "city": "Batam"
  },
  {
    "code": "ZXU",
    "country_code": "NO",
    "city": "Rygge"
  },
  {
    "code": "SFA",
    "country_code": "TN",
    "city": "Sfax"
  },
  {
    "code": "CTR",
    "country_code": "AU",
    "city": "Cattle Creek"
  },
  {
    "code": "OEL",
    "country_code": "RU",
    "city": "Orel"
  },
  {
    "code": "PDZ",
    "country_code": "VE",
    "city": "Pedernales"
  },
  {
    "code": "NTN",
    "country_code": "AU",
    "city": "Normanton"
  },
  {
    "code": "MVH",
    "country_code": "AU",
    "city": "Macksville"
  },
  {
    "code": "VAV",
    "country_code": "TO",
    "city": "Vava'u"
  },
  {
    "code": "YOJ",
    "country_code": "CA",
    "city": "High Level"
  },
  {
    "code": "GFL",
    "country_code": "US",
    "city": "Glens Falls"
  },
  {
    "code": "IWK",
    "country_code": "JP",
    "city": "Iwakuni"
  },
  {
    "code": "MCD",
    "country_code": "US",
    "city": "Mackinac Island"
  },
  {
    "code": "RCK",
    "country_code": "US",
    "city": "Rockdale"
  },
  {
    "code": "PNA",
    "country_code": "ES",
    "city": "Pamplona"
  },
  {
    "code": "TEY",
    "country_code": "IS",
    "city": "Thingeyri"
  },
  {
    "code": "SAD",
    "country_code": "US",
    "city": "Safford"
  },
  {
    "code": "UNE",
    "country_code": "LS",
    "city": "Qachas Nek"
  },
  {
    "code": "NCY",
    "country_code": "FR",
    "city": "Annecy"
  },
  {
    "code": "ASW",
    "country_code": "EG",
    "city": "Aswan"
  },
  {
    "code": "CWG",
    "country_code": "US",
    "city": "Callaway Gardens"
  },
  {
    "code": "YAD",
    "country_code": "CA",
    "city": "Moose Lake"
  },
  {
    "code": "PIS",
    "country_code": "FR",
    "city": "Poitiers"
  },
  {
    "code": "BCF",
    "country_code": "CF",
    "city": "Bouca"
  },
  {
    "code": "GFK",
    "country_code": "US",
    "city": "Grand Forks"
  },
  {
    "code": "YBW",
    "country_code": "CA",
    "city": "Bedwell Harbor"
  },
  {
    "code": "WAA",
    "country_code": "US",
    "city": "Wales"
  },
  {
    "code": "DPL",
    "country_code": "PH",
    "city": "Dipolog"
  },
  {
    "code": "DCT",
    "country_code": "BS",
    "city": "Duncan Town"
  },
  {
    "code": "MCM",
    "country_code": "MC",
    "city": "Monte Carlo"
  },
  {
    "code": "SIH",
    "country_code": "NP",
    "city": "Silgadi Doti"
  },
  {
    "code": "MQG",
    "country_code": "NA",
    "city": "Midgard"
  },
  {
    "code": "IRN",
    "country_code": "HN",
    "city": "Iriona"
  },
  {
    "code": "CWW",
    "country_code": "AU",
    "city": "Corowa"
  },
  {
    "code": "IXH",
    "country_code": "IN",
    "city": "Kailashahar"
  },
  {
    "code": "MCL",
    "country_code": "US",
    "city": "Mount Mckinley"
  },
  {
    "code": "AUN",
    "country_code": "US",
    "city": "Auburn"
  },
  {
    "code": "ZDG",
    "country_code": "CH",
    "city": "Baden"
  },
  {
    "code": "CVQ",
    "country_code": "AU",
    "city": "Carnarvon"
  },
  {
    "code": "SJJ",
    "country_code": "BA",
    "city": "Sarajevo"
  },
  {
    "code": "OYN",
    "country_code": "AU",
    "city": "Ouyen"
  },
  {
    "code": "FNA",
    "country_code": "SL",
    "city": "Freetown"
  },
  {
    "code": "RBG",
    "country_code": "US",
    "city": "Roseburg"
  },
  {
    "code": "BPX",
    "country_code": "CN",
    "city": "Bangda"
  },
  {
    "code": "RSJ",
    "country_code": "US",
    "city": "Rosario"
  },
  {
    "code": "VEE",
    "country_code": "US",
    "city": "Venetie"
  },
  {
    "code": "THC",
    "country_code": "LR",
    "city": "Tchien"
  },
  {
    "code": "BXX",
    "country_code": "SO",
    "city": "Borama"
  },
  {
    "code": "KAZ",
    "country_code": "ID",
    "city": "Kau"
  },
  {
    "code": "NKY",
    "country_code": "CG",
    "city": "Nkayi"
  },
  {
    "code": "EAL",
    "country_code": "MH",
    "city": "Kwajalein Atoll"
  },
  {
    "code": "BIT",
    "country_code": "NP",
    "city": "Baitadi"
  },
  {
    "code": "TAI",
    "country_code": "YE",
    "city": "Taiz"
  },
  {
    "code": "GNU",
    "country_code": "US",
    "city": "Goodnews Bay"
  },
  {
    "code": "SOA",
    "country_code": "VN",
    "city": "Soc Trang"
  },
  {
    "code": "SQM",
    "country_code": "BR",
    "city": "São Miguel de Aragao"
  },
  {
    "code": "ZYY",
    "country_code": "NO",
    "city": "Marnardal"
  },
  {
    "code": "MPN",
    "country_code": "FK",
    "city": "Mount Pleasant"
  },
  {
    "code": "PTO",
    "country_code": "BR",
    "city": "Pato Branco"
  },
  {
    "code": "ИФА",
    "country_code": "KG",
    "city": "Isfana"
  },
  {
    "code": "HAC",
    "country_code": "JP",
    "city": "Hachijo Jima"
  },
  {
    "code": "LUP",
    "country_code": "US",
    "city": "Kalaupapa"
  },
  {
    "code": "MTA",
    "country_code": "NZ",
    "city": "Matamata"
  },
  {
    "code": "XHF",
    "country_code": "NO",
    "city": "Honefoss"
  },
  {
    "code": "TXF",
    "country_code": "BR",
    "city": "Teixeira de Freitas"
  },
  {
    "code": "BKH",
    "country_code": "US",
    "city": "Kekaha"
  },
  {
    "code": "GBJ",
    "country_code": "GP",
    "city": "Marie Galante"
  },
  {
    "code": "GFY",
    "country_code": "NA",
    "city": "Grootfontein"
  },
  {
    "code": "TLR",
    "country_code": "US",
    "city": "Tulare"
  },
  {
    "code": "LRR",
    "country_code": "IR",
    "city": "Lar"
  },
  {
    "code": "KOJ",
    "country_code": "JP",
    "city": "Kagoshima"
  },
  {
    "code": "BZT",
    "country_code": "US",
    "city": "Brazoria"
  },
  {
    "code": "AFR",
    "country_code": "PG",
    "city": "Afore"
  },
  {
    "code": "FIN",
    "country_code": "PG",
    "city": "Finschhafen"
  },
  {
    "code": "TUW",
    "country_code": "PA",
    "city": "Tubala"
  },
  {
    "code": "BYB",
    "country_code": "OM",
    "city": "Dibaa"
  },
  {
    "code": "ZBH",
    "country_code": "FR",
    "city": "Severac-le-Chateau"
  },
  {
    "code": "BCZ",
    "country_code": "AU",
    "city": "Bickerton Island"
  },
  {
    "code": "UKG",
    "country_code": "RU",
    "city": "Ust-Kuiga"
  },
  {
    "code": "XNU",
    "country_code": "BF",
    "city": "Nouna"
  },
  {
    "code": "FLB",
    "country_code": "BR",
    "city": "Floriano"
  },
  {
    "code": "YFX",
    "country_code": "CA",
    "city": "Fox Harbour (St Lewis)"
  },
  {
    "code": "ACZ",
    "country_code": "IR",
    "city": "Zabol"
  },
  {
    "code": "GBH",
    "country_code": "US",
    "city": "Galbraith Lake"
  },
  {
    "code": "HSI",
    "country_code": "US",
    "city": "Hastings"
  },
  {
    "code": "ECA",
    "country_code": "US",
    "city": "East Tawas"
  },
  {
    "code": "TGT",
    "country_code": "TZ",
    "city": "Tanga"
  },
  {
    "code": "WMK",
    "country_code": "US",
    "city": "Meyers Chuck"
  },
  {
    "code": "OPA",
    "country_code": "IS",
    "city": "Kopasker"
  },
  {
    "code": "SIM",
    "country_code": "PG",
    "city": "Simbai"
  },
  {
    "code": "KKZ",
    "country_code": "KH",
    "city": "Koh Kong"
  },
  {
    "code": "DAK",
    "country_code": "EG",
    "city": "Dakhla Oasis"
  },
  {
    "code": "RCB",
    "country_code": "ZA",
    "city": "Richards Bay"
  },
  {
    "code": "FEC",
    "country_code": "BR",
    "city": "Feira De Santana"
  },
  {
    "code": "RUR",
    "country_code": "PF",
    "city": "Rurutu"
  },
  {
    "code": "TKP",
    "country_code": "PF",
    "city": "Takapoto"
  },
  {
    "code": "XEO",
    "country_code": "GL",
    "city": "Oqatsut"
  },
  {
    "code": "BEB",
    "country_code": "GB",
    "city": "Benbecula"
  },
  {
    "code": "WTT",
    "country_code": "PG",
    "city": "Wantoat"
  },
  {
    "code": "ZNW",
    "country_code": "DE",
    "city": "Limburg"
  },
  {
    "code": "AIS",
    "country_code": "KI",
    "city": "Arorae Island"
  },
  {
    "code": "BHB",
    "country_code": "US",
    "city": "Bar Harbor"
  },
  {
    "code": "MPA",
    "country_code": "NA",
    "city": "Mpacha"
  },
  {
    "code": "TYS",
    "country_code": "US",
    "city": "Knoxville"
  },
  {
    "code": "WJU",
    "country_code": "KR",
    "city": "Wonju"
  },
  {
    "code": "GEB",
    "country_code": "ID",
    "city": "Gebe"
  },
  {
    "code": "CLN",
    "country_code": "BR",
    "city": "Carolina"
  },
  {
    "code": "ROH",
    "country_code": "AU",
    "city": "Robinhood"
  },
  {
    "code": "MAX",
    "country_code": "SN",
    "city": "Matam"
  },
  {
    "code": "DAX",
    "country_code": "CN",
    "city": "Dazhou"
  },
  {
    "code": "CKO",
    "country_code": "BR",
    "city": "Cornelio Procopio"
  },
  {
    "code": "ZLL",
    "country_code": "CH",
    "city": "Zofingen"
  },
  {
    "code": "NIX",
    "country_code": "ML",
    "city": "Nioro"
  },
  {
    "code": "MKT",
    "country_code": "US",
    "city": "Mankato"
  },
  {
    "code": "LMQ",
    "country_code": "LY",
    "city": "Marsa Brega"
  },
  {
    "code": "WBA",
    "country_code": "ID",
    "city": "Wahai"
  },
  {
    "code": "SNP",
    "country_code": "US",
    "city": "Saint Paul Island"
  },
  {
    "code": "TVC",
    "country_code": "US",
    "city": "Traverse City"
  },
  {
    "code": "ENH",
    "country_code": "CN",
    "city": "Enshi"
  },
  {
    "code": "ZDA",
    "country_code": "CH",
    "city": "Aarau"
  },
  {
    "code": "MBY",
    "country_code": "US",
    "city": "Moberly"
  },
  {
    "code": "BXI",
    "country_code": "CI",
    "city": "Boundiali"
  },
  {
    "code": "PCM",
    "country_code": "MX",
    "city": "Playa Del Carmen"
  },
  {
    "code": "QLI",
    "country_code": "CY",
    "city": "Limassol"
  },
  {
    "code": "ACC",
    "country_code": "GH",
    "city": "Accra"
  },
  {
    "code": "LDV",
    "country_code": "FR",
    "city": "Landivisiau"
  },
  {
    "code": "YCW",
    "country_code": "CA",
    "city": "Chilliwack"
  },
  {
    "code": "MWI",
    "country_code": "PG",
    "city": "Maramuni"
  },
  {
    "code": "JIP",
    "country_code": "EC",
    "city": "Jipijapa"
  },
  {
    "code": "XHQ",
    "country_code": "TR",
    "city": "Artvin"
  },
  {
    "code": "ALH",
    "country_code": "AU",
    "city": "Albany"
  },
  {
    "code": "NQL",
    "country_code": "BR",
    "city": "Niquelandia"
  },
  {
    "code": "EML",
    "country_code": "CH",
    "city": "Luzern"
  },
  {
    "code": "ZFD",
    "country_code": "CA",
    "city": "Fond Du Lac"
  },
  {
    "code": "ABK",
    "country_code": "ET",
    "city": "Kabri Dar"
  },
  {
    "code": "CKR",
    "country_code": "US",
    "city": "Crane Island"
  },
  {
    "code": "ISQ",
    "country_code": "US",
    "city": "Manistique"
  },
  {
    "code": "AUH",
    "country_code": "AE",
    "city": "Abu Dhabi"
  },
  {
    "code": "MLX",
    "country_code": "TR",
    "city": "Malatya"
  },
  {
    "code": "COB",
    "country_code": "AU",
    "city": "Coolibah"
  },
  {
    "code": "LTD",
    "country_code": "LY",
    "city": "Ghadames"
  },
  {
    "code": "EPI",
    "country_code": "VU",
    "city": "Epi"
  },
  {
    "code": "OHD",
    "country_code": "MK",
    "city": "Ohrid"
  },
  {
    "code": "LAI",
    "country_code": "FR",
    "city": "Lannion"
  },
  {
    "code": "MYX",
    "country_code": "PG",
    "city": "Menyamya"
  },
  {
    "code": "MDR",
    "country_code": "US",
    "city": "Medfra"
  },
  {
    "code": "GZI",
    "country_code": "AF",
    "city": "Ghazni"
  },
  {
    "code": "UET",
    "country_code": "PK",
    "city": "Quetta"
  },
  {
    "code": "UGC",
    "country_code": "UZ",
    "city": "Urgench"
  },
  {
    "code": "KFA",
    "country_code": "MR",
    "city": "Kiffa"
  },
  {
    "code": "OGD",
    "country_code": "US",
    "city": "Ogden"
  },
  {
    "code": "XOO",
    "country_code": "AT",
    "city": "Soelden"
  },
  {
    "code": "LUC",
    "country_code": "FJ",
    "city": "Laucala Island"
  },
  {
    "code": "YBM",
    "country_code": "CA",
    "city": "Bronson Creek"
  },
  {
    "code": "EMY",
    "country_code": "EG",
    "city": "El Minya"
  },
  {
    "code": "PXO",
    "country_code": "PT",
    "city": "Porto Santo (Madeira)"
  },
  {
    "code": "BFW",
    "country_code": "DZ",
    "city": "Sidi Belabbes"
  },
  {
    "code": "SPA",
    "country_code": "US",
    "city": "Spartanburg"
  },
  {
    "code": "SBC",
    "country_code": "PG",
    "city": "Selbang"
  },
  {
    "code": "MFB",
    "country_code": "CO",
    "city": "Monfort"
  },
  {
    "code": "GJL",
    "country_code": "DZ",
    "city": "Jijel"
  },
  {
    "code": "АМУ",
    "country_code": "RU",
    "city": "Amgu"
  },
  {
    "code": "SWD",
    "country_code": "US",
    "city": "Seward"
  },
  {
    "code": "FAZ",
    "country_code": "IR",
    "city": "Fasa"
  },
  {
    "code": "KLY",
    "country_code": "CD",
    "city": "Kalima"
  },
  {
    "code": "AHL",
    "country_code": "GY",
    "city": "Aishalton"
  },
  {
    "code": "ZCO",
    "country_code": "CL",
    "city": "Temuco"
  },
  {
    "code": "LGL",
    "country_code": "MY",
    "city": "Long Lellang"
  },
  {
    "code": "LEX",
    "country_code": "US",
    "city": "Lexington"
  },
  {
    "code": "ELO",
    "country_code": "AR",
    "city": "Eldorado"
  },
  {
    "code": "MHE",
    "country_code": "US",
    "city": "Mitchell"
  },
  {
    "code": "ELY",
    "country_code": "US",
    "city": "Ely"
  },
  {
    "code": "NHS",
    "country_code": "PK",
    "city": "Nushki"
  },
  {
    "code": "MAZ",
    "country_code": "PR",
    "city": "Mayaguez"
  },
  {
    "code": "MCY",
    "country_code": "AU",
    "city": "Sunshine Coast"
  },
  {
    "code": "RBM",
    "country_code": "DE",
    "city": "Straubing"
  },
  {
    "code": "VAI",
    "country_code": "PG",
    "city": "Vanimo"
  },
  {
    "code": "RBO",
    "country_code": "BO",
    "city": "Robore"
  },
  {
    "code": "SXE",
    "country_code": "AU",
    "city": "Sale"
  },
  {
    "code": "GOK",
    "country_code": "US",
    "city": "Guthrie"
  },
  {
    "code": "BLU",
    "country_code": "US",
    "city": "Blue Canyon"
  },
  {
    "code": "OCC",
    "country_code": "EC",
    "city": "Coca"
  },
  {
    "code": "DUC",
    "country_code": "US",
    "city": "Duncan"
  },
  {
    "code": "WLS",
    "country_code": "WF",
    "city": "Wallis Island"
  },
  {
    "code": "LCB",
    "country_code": "BR",
    "city": "Pontes e Lacerda"
  },
  {
    "code": "NIA",
    "country_code": "LR",
    "city": "Nimba"
  },
  {
    "code": "XPW",
    "country_code": "GB",
    "city": "Didcot"
  },
  {
    "code": "HTG",
    "country_code": "RU",
    "city": "Hatanga"
  },
  {
    "code": "CNP",
    "country_code": "GL",
    "city": "Neerlerit Inaat"
  },
  {
    "code": "MZB",
    "country_code": "MZ",
    "city": "Mocimboa Praia"
  },
  {
    "code": "AVI",
    "country_code": "CU",
    "city": "Ciego De Avila"
  },
  {
    "code": "AHT",
    "country_code": "US",
    "city": "Amchitka"
  },
  {
    "code": "YRM",
    "country_code": "CA",
    "city": "Rocky Mountain House"
  },
  {
    "code": "ZDV",
    "country_code": "CH",
    "city": "Davos"
  },
  {
    "code": "LBE",
    "country_code": "US",
    "city": "Latrobe"
  },
  {
    "code": "NCS",
    "country_code": "ZA",
    "city": "Newcastle"
  },
  {
    "code": "RWN",
    "country_code": "UA",
    "city": "Rovno"
  },
  {
    "code": "DWB",
    "country_code": "MG",
    "city": "Soalala"
  },
  {
    "code": "GCK",
    "country_code": "US",
    "city": "Garden City"
  },
  {
    "code": "LIR",
    "country_code": "CR",
    "city": "Liberia"
  },
  {
    "code": "USN",
    "country_code": "KR",
    "city": "Ulsan"
  },
  {
    "code": "TND",
    "country_code": "CU",
    "city": "Trinidad"
  },
  {
    "code": "JAC",
    "country_code": "US",
    "city": "Jackson"
  },
  {
    "code": "LLA",
    "country_code": "SE",
    "city": "Lulea"
  },
  {
    "code": "ZTH",
    "country_code": "GR",
    "city": "Zakinthos"
  },
  {
    "code": "LDS",
    "country_code": "CN",
    "city": "Yichun"
  },
  {
    "code": "LCP",
    "country_code": "AR",
    "city": "Loncopue"
  },
  {
    "code": "NBL",
    "country_code": "PA",
    "city": "San Blas"
  },
  {
    "code": "XWI",
    "country_code": "GB",
    "city": "Wigan"
  },
  {
    "code": "KIU",
    "country_code": "KE",
    "city": "Kiunga"
  },
  {
    "code": "MXD",
    "country_code": "AU",
    "city": "Marion Downs"
  },
  {
    "code": "HJJ",
    "country_code": "CN",
    "city": "Huaihua"
  },
  {
    "code": "RRA",
    "country_code": "ES",
    "city": "Ronda"
  },
  {
    "code": "ДЛЧ",
    "country_code": "RU",
    "city": "Dalnerechensk"
  },
  {
    "code": "MJT",
    "country_code": "GR",
    "city": "Mytilene"
  },
  {
    "code": "YRV",
    "country_code": "CA",
    "city": "Revelstoke"
  },
  {
    "code": "XCC",
    "country_code": "FR",
    "city": "Le Creusot/Montceau"
  },
  {
    "code": "GUF",
    "country_code": "US",
    "city": "Gulf Shores"
  },
  {
    "code": "HYC",
    "country_code": "GB",
    "city": "High Wycombe"
  },
  {
    "code": "ELH",
    "country_code": "BS",
    "city": "North Eleuthera"
  },
  {
    "code": "BIL",
    "country_code": "US",
    "city": "Billings"
  },
  {
    "code": "ZTV",
    "country_code": "US",
    "city": "Sturtevant"
  },
  {
    "code": "HTN",
    "country_code": "CN",
    "city": "Hotan"
  },
  {
    "code": "RMQ",
    "country_code": "TW",
    "city": "Shalu"
  },
  {
    "code": "OLU",
    "country_code": "US",
    "city": "Columbus"
  },
  {
    "code": "YQY",
    "country_code": "CA",
    "city": "Sydney"
  },
  {
    "code": "NKC",
    "country_code": "MR",
    "city": "Nouakchott"
  },
  {
    "code": "TKI",
    "country_code": "US",
    "city": "Tokeen"
  },
  {
    "code": "NLN",
    "country_code": "US",
    "city": "Kneeland"
  },
  {
    "code": "YVH",
    "country_code": "NO",
    "city": "Hjerkinn"
  },
  {
    "code": "LUD",
    "country_code": "NA",
    "city": "Luderitz"
  },
  {
    "code": "XLW",
    "country_code": "DE",
    "city": "Lemwerder"
  },
  {
    "code": "ZZU",
    "country_code": "MW",
    "city": "Mzuzu"
  },
  {
    "code": "ZHD",
    "country_code": "CH",
    "city": "Fluelen"
  },
  {
    "code": "BVE",
    "country_code": "FR",
    "city": "Brive-La-Gaillarde"
  },
  {
    "code": "DAC",
    "country_code": "BD",
    "city": "Dhaka"
  },
  {
    "code": "BZI",
    "country_code": "TR",
    "city": "Balikesir"
  },
  {
    "code": "UUK",
    "country_code": "US",
    "city": "Kuparuk"
  },
  {
    "code": "TRQ",
    "country_code": "BR",
    "city": "Tarauaca"
  },
  {
    "code": "TQD",
    "country_code": "IQ",
    "city": "Al Fallujah"
  },
  {
    "code": "KVL",
    "country_code": "US",
    "city": "Kivalina"
  },
  {
    "code": "DWD",
    "country_code": "SA",
    "city": "Dawadmi"
  },
  {
    "code": "CRA",
    "country_code": "RO",
    "city": "Craiova"
  },
  {
    "code": "CFU",
    "country_code": "GR",
    "city": "Kerkyra"
  },
  {
    "code": "ABN",
    "country_code": "SR",
    "city": "Albina"
  },
  {
    "code": "EYW",
    "country_code": "US",
    "city": "Key West"
  },
  {
    "code": "SKX",
    "country_code": "RU",
    "city": "Saransk"
  },
  {
    "code": "FON",
    "country_code": "CR",
    "city": "Fortuna"
  },
  {
    "code": "OZI",
    "country_code": "ES",
    "city": "Bobadilla"
  },
  {
    "code": "GYN",
    "country_code": "BR",
    "city": "Goiania"
  },
  {
    "code": "TYN",
    "country_code": "CN",
    "city": "Taiyuan"
  },
  {
    "code": "MPT",
    "country_code": "TL",
    "city": "Maliana"
  },
  {
    "code": "KGD",
    "country_code": "RU",
    "city": "Kaliningrad"
  },
  {
    "code": "BSU",
    "country_code": "CD",
    "city": "Basankusu"
  },
  {
    "code": "LUR",
    "country_code": "US",
    "city": "Cape Lisburne"
  },
  {
    "code": "ABV",
    "country_code": "NG",
    "city": "Abuja"
  },
  {
    "code": "BDC",
    "country_code": "BR",
    "city": "Barra Do Corda"
  },
  {
    "code": "PND",
    "country_code": "BZ",
    "city": "Punta Gorda"
  },
  {
    "code": "KLZ",
    "country_code": "ZA",
    "city": "Kleinzee"
  },
  {
    "code": "LSR",
    "country_code": "US",
    "city": "Lost River"
  },
  {
    "code": "SYH",
    "country_code": "NP",
    "city": "Syangboche"
  },
  {
    "code": "LDA",
    "country_code": "IN",
    "city": "Malda"
  },
  {
    "code": "CXJ",
    "country_code": "BR",
    "city": "Caxias do Sul"
  },
  {
    "code": "MTG",
    "country_code": "BR",
    "city": "Mato Grosso"
  },
  {
    "code": "MVT",
    "country_code": "PF",
    "city": "Mataiva"
  },
  {
    "code": "IGE",
    "country_code": "GA",
    "city": "Iguela"
  },
  {
    "code": "RSB",
    "country_code": "AU",
    "city": "Roseberth"
  },
  {
    "code": "DSK",
    "country_code": "PK",
    "city": "Dera Ismail Khan"
  },
  {
    "code": "PPS",
    "country_code": "PH",
    "city": "Puerto Princesa"
  },
  {
    "code": "CNN",
    "country_code": "IN",
    "city": "Kannur"
  },
  {
    "code": "FFL",
    "country_code": "US",
    "city": "Fairfield"
  },
  {
    "code": "QQY",
    "country_code": "GB",
    "city": "York"
  },
  {
    "code": "LNP",
    "country_code": "US",
    "city": "Wise"
  },
  {
    "code": "VDZ",
    "country_code": "US",
    "city": "Valdez"
  },
  {
    "code": "LEZ",
    "country_code": "HN",
    "city": "La Esperanza"
  },
  {
    "code": "GSR",
    "country_code": "SO",
    "city": "Gardo"
  },
  {
    "code": "NHX",
    "country_code": "US",
    "city": "Foley"
  },
  {
    "code": "LSB",
    "country_code": "US",
    "city": "Lordsburg"
  },
  {
    "code": "YGT",
    "country_code": "CA",
    "city": "Igloolik"
  },
  {
    "code": "PPE",
    "country_code": "MX",
    "city": "Puerto Penasco"
  },
  {
    "code": "KKH",
    "country_code": "US",
    "city": "Kongiganak"
  },
  {
    "code": "QWQ",
    "country_code": "DK",
    "city": "Struer"
  },
  {
    "code": "YVE",
    "country_code": "CA",
    "city": "Vernon"
  },
  {
    "code": "DTT",
    "country_code": "US",
    "city": "Detroit"
  },
  {
    "code": "XOA",
    "country_code": "DK",
    "city": "Aalbaek"
  },
  {
    "code": "OGS",
    "country_code": "US",
    "city": "Ogdensburg"
  },
  {
    "code": "LUO",
    "country_code": "AO",
    "city": "Luena"
  },
  {
    "code": "KRT",
    "country_code": "SD",
    "city": "Khartoum"
  },
  {
    "code": "LMH",
    "country_code": "HN",
    "city": "Limon"
  },
  {
    "code": "PBF",
    "country_code": "US",
    "city": "Pine Bluff"
  },
  {
    "code": "WLK",
    "country_code": "US",
    "city": "Selawik"
  },
  {
    "code": "KEM",
    "country_code": "FI",
    "city": "Kemi/Tornio"
  },
  {
    "code": "DEZ",
    "country_code": "SY",
    "city": "Deirezzor"
  },
  {
    "code": "ILG",
    "country_code": "US",
    "city": "Wilmington"
  },
  {
    "code": "JUN",
    "country_code": "AU",
    "city": "Jundah"
  },
  {
    "code": "MVK",
    "country_code": "AU",
    "city": "Mulka"
  },
  {
    "code": "KRP",
    "country_code": "DK",
    "city": "Karup"
  },
  {
    "code": "MRX",
    "country_code": "IR",
    "city": "Bandar Mahshahr"
  },
  {
    "code": "KAX",
    "country_code": "AU",
    "city": "Kalbarri"
  },
  {
    "code": "MZY",
    "country_code": "ZA",
    "city": "Mossel Bay"
  },
  {
    "code": "AAL",
    "country_code": "DK",
    "city": "Aalborg"
  },
  {
    "code": "KDV",
    "country_code": "FJ",
    "city": "Kandavu"
  },
  {
    "code": "HUE",
    "country_code": "ET",
    "city": "Humera"
  },
  {
    "code": "JJG",
    "country_code": "BR",
    "city": "Jaguaruna"
  },
  {
    "code": "YDO",
    "country_code": "CA",
    "city": "Dolbeau"
  },
  {
    "code": "CAV",
    "country_code": "AO",
    "city": "Cazombo"
  },
  {
    "code": "SAT",
    "country_code": "US",
    "city": "San Antonio"
  },
  {
    "code": "SWE",
    "country_code": "PG",
    "city": "Siwea"
  },
  {
    "code": "LAC",
    "country_code": "MY",
    "city": "Pulau Layang-Layang Island"
  },
  {
    "code": "WNH",
    "country_code": "CN",
    "city": "Wenshan"
  },
  {
    "code": "LUG",
    "country_code": "CH",
    "city": "Lugano"
  },
  {
    "code": "TSZ",
    "country_code": "MN",
    "city": "Tsetserleg"
  },
  {
    "code": "SQH",
    "country_code": "VN",
    "city": "Son-La"
  },
  {
    "code": "TER",
    "country_code": "PT",
    "city": "Terceira"
  },
  {
    "code": "LSY",
    "country_code": "AU",
    "city": "Lismore"
  },
  {
    "code": "NIT",
    "country_code": "FR",
    "city": "Niort"
  },
  {
    "code": "BIB",
    "country_code": "SO",
    "city": "Baidoa"
  },
  {
    "code": "ПАН",
    "country_code": "RU",
    "city": "Palana"
  },
  {
    "code": "LPL",
    "country_code": "GB",
    "city": "Liverpool"
  },
  {
    "code": "GBF",
    "country_code": "PG",
    "city": "Negarbo"
  },
  {
    "code": "OSY",
    "country_code": "NO",
    "city": "Namsos"
  },
  {
    "code": "QXF",
    "country_code": "DK",
    "city": "Vestbjerg"
  },
  {
    "code": "ZGU",
    "country_code": "VU",
    "city": "Gaua"
  },
  {
    "code": "NYE",
    "country_code": "KE",
    "city": "Nyeri"
  },
  {
    "code": "IHU",
    "country_code": "PG",
    "city": "Ihu"
  },
  {
    "code": "ELK",
    "country_code": "US",
    "city": "Elk City"
  },
  {
    "code": "ZWR",
    "country_code": "MY",
    "city": "Kota Kinabalu"
  },
  {
    "code": "CSS",
    "country_code": "BR",
    "city": "Cassilandia"
  },
  {
    "code": "ZHQ",
    "country_code": "CN",
    "city": "Zhuhai"
  },
  {
    "code": "CSI",
    "country_code": "AU",
    "city": "Casino"
  },
  {
    "code": "LSS",
    "country_code": "GP",
    "city": "Terre-de-Haut"
  },
  {
    "code": "QWZ",
    "country_code": "NL",
    "city": "Best"
  },
  {
    "code": "ZHH",
    "country_code": "CH",
    "city": "Gossau SG"
  },
  {
    "code": "SMS",
    "country_code": "MG",
    "city": "Sainte Marie"
  },
  {
    "code": "OCV",
    "country_code": "CO",
    "city": "Ocana"
  },
  {
    "code": "PAL",
    "country_code": "CO",
    "city": "Palanquero"
  },
  {
    "code": "PZH",
    "country_code": "PK",
    "city": "Zhob"
  },
  {
    "code": "ALK",
    "country_code": "ET",
    "city": "Asela"
  },
  {
    "code": "KUG",
    "country_code": "AU",
    "city": "Kubin Island"
  },
  {
    "code": "INE",
    "country_code": "MZ",
    "city": "Chinde"
  },
  {
    "code": "NDV",
    "country_code": "US",
    "city": "Anacostia"
  },
  {
    "code": "CVN",
    "country_code": "US",
    "city": "Clovis"
  },
  {
    "code": "TJG",
    "country_code": "ID",
    "city": "Tanjung Warukin"
  },
  {
    "code": "ATO",
    "country_code": "US",
    "city": "Athens"
  },
  {
    "code": "XSI",
    "country_code": "CA",
    "city": "South Indian Lake"
  },
  {
    "code": "CKH",
    "country_code": "RU",
    "city": "Chokurdah"
  },
  {
    "code": "JSJ",
    "country_code": "CN",
    "city": "Jiansanjiang"
  },
  {
    "code": "LSX",
    "country_code": "ID",
    "city": "Lhok Sukon"
  },
  {
    "code": "KLC",
    "country_code": "SN",
    "city": "Kaolack"
  },
  {
    "code": "HLV",
    "country_code": "AU",
    "city": "Helenvale"
  },
  {
    "code": "EVX",
    "country_code": "FR",
    "city": "Evreux"
  },
  {
    "code": "DCI",
    "country_code": "IT",
    "city": "Decimomannu"
  },
  {
    "code": "DEC",
    "country_code": "US",
    "city": "Decatur"
  },
  {
    "code": "OIC",
    "country_code": "US",
    "city": "Norwich"
  },
  {
    "code": "WEH",
    "country_code": "CN",
    "city": "Weihai"
  },
  {
    "code": "KEH",
    "country_code": "US",
    "city": "Kenmore Air Harbor"
  },
  {
    "code": "GYS",
    "country_code": "CN",
    "city": "Guang Yuan"
  },
  {
    "code": "TPP",
    "country_code": "PE",
    "city": "Tarapoto"
  },
  {
    "code": "LAE",
    "country_code": "PG",
    "city": "Lae"
  },
  {
    "code": "GKD",
    "country_code": "TR",
    "city": "Gokceada"
  },
  {
    "code": "SUV",
    "country_code": "FJ",
    "city": "Suva"
  },
  {
    "code": "LHS",
    "country_code": "AR",
    "city": "Las Heras"
  },
  {
    "code": "BOE",
    "country_code": "CG",
    "city": "Boundji"
  },
  {
    "code": "PAQ",
    "country_code": "US",
    "city": "Palmer"
  },
  {
    "code": "AZG",
    "country_code": "MX",
    "city": "Apatzingan"
  },
  {
    "code": "ZLM",
    "country_code": "CH",
    "city": "Zug"
  },
  {
    "code": "ROT",
    "country_code": "NZ",
    "city": "Rotorua"
  },
  {
    "code": "ZGO",
    "country_code": "DE",
    "city": "Gotha"
  },
  {
    "code": "CHL",
    "country_code": "US",
    "city": "Challis"
  },
  {
    "code": "MCR",
    "country_code": "GT",
    "city": "Melchor De Menco"
  },
  {
    "code": "KIM",
    "country_code": "ZA",
    "city": "Kimberley"
  },
  {
    "code": "ZWN",
    "country_code": "DE",
    "city": "Wittenberge"
  },
  {
    "code": "BIW",
    "country_code": "AU",
    "city": "Billiluna"
  },
  {
    "code": "SKU",
    "country_code": "GR",
    "city": "Skiros"
  },
  {
    "code": "ZHF",
    "country_code": "CH",
    "city": "Fribourg"
  },
  {
    "code": "XUL",
    "country_code": "NO",
    "city": "Nesbyen"
  },
  {
    "code": "YLP",
    "country_code": "CA",
    "city": "Mingan"
  },
  {
    "code": "SBM",
    "country_code": "US",
    "city": "Sheboygan"
  },
  {
    "code": "NYR",
    "country_code": "RU",
    "city": "Nyurba"
  },
  {
    "code": "ILL",
    "country_code": "US",
    "city": "Willmar"
  },
  {
    "code": "YPC",
    "country_code": "CA",
    "city": "Paulatuk"
  },
  {
    "code": "FFT",
    "country_code": "US",
    "city": "Frankfort"
  },
  {
    "code": "GVN",
    "country_code": "RU",
    "city": "Sovetskaya Gavan"
  },
  {
    "code": "FLS",
    "country_code": "AU",
    "city": "Flinders Island"
  },
  {
    "code": "YDU",
    "country_code": "CA",
    "city": "Kasba Lake"
  },
  {
    "code": "PLF",
    "country_code": "TD",
    "city": "Pala"
  },
  {
    "code": "ATB",
    "country_code": "SD",
    "city": "Atbara"
  },
  {
    "code": "LET",
    "country_code": "CO",
    "city": "Leticia"
  },
  {
    "code": "EGS",
    "country_code": "IS",
    "city": "Egilsstadir"
  },
  {
    "code": "POF",
    "country_code": "US",
    "city": "Poplar Bluff"
  },
  {
    "code": "YTR",
    "country_code": "CA",
    "city": "Trenton"
  },
  {
    "code": "NHZ",
    "country_code": "US",
    "city": "Brunswick"
  },
  {
    "code": "WTA",
    "country_code": "MG",
    "city": "Tambohorano"
  },
  {
    "code": "DAY",
    "country_code": "US",
    "city": "Dayton"
  },
  {
    "code": "AYS",
    "country_code": "US",
    "city": "Waycross"
  },
  {
    "code": "IXK",
    "country_code": "IN",
    "city": "Keshod"
  },
  {
    "code": "BYW",
    "country_code": "US",
    "city": "Blakely Island"
  },
  {
    "code": "VLR",
    "country_code": "CL",
    "city": "Vallenar"
  },
  {
    "code": "LLL",
    "country_code": "AU",
    "city": "Lissadell"
  },
  {
    "code": "YEL",
    "country_code": "CA",
    "city": "Elliot Lake"
  },
  {
    "code": "RVK",
    "country_code": "NO",
    "city": "Roervik"
  },
  {
    "code": "URT",
    "country_code": "TH",
    "city": "Surat Thani"
  },
  {
    "code": "BXA",
    "country_code": "US",
    "city": "Bogalusa"
  },
  {
    "code": "TKK",
    "country_code": "FM",
    "city": "Truk, Caroline Islands"
  },
  {
    "code": "VMU",
    "country_code": "PG",
    "city": "Baimuru"
  },
  {
    "code": "JIW",
    "country_code": "PK",
    "city": "Jiwani"
  },
  {
    "code": "YTB",
    "country_code": "CA",
    "city": "Hartley Bay"
  },
  {
    "code": "EDD",
    "country_code": "AU",
    "city": "Erldunda"
  },
  {
    "code": "VCV",
    "country_code": "US",
    "city": "Victorville"
  },
  {
    "code": "MFT",
    "country_code": "PE",
    "city": "Machu Picchu"
  },
  {
    "code": "EWK",
    "country_code": "US",
    "city": "Newton"
  },
  {
    "code": "NLI",
    "country_code": "RU",
    "city": "Nikolaevsk-na-Amure"
  },
  {
    "code": "ZKZ",
    "country_code": "CH",
    "city": "Vevey"
  },
  {
    "code": "KIF",
    "country_code": "CA",
    "city": "Kingfisher Lake"
  },
  {
    "code": "ASR",
    "country_code": "TR",
    "city": "Kayseri"
  },
  {
    "code": "KEQ",
    "country_code": "ID",
    "city": "Kebar"
  },
  {
    "code": "BXY",
    "country_code": "KZ",
    "city": "Baikonur"
  },
  {
    "code": "YAA",
    "country_code": "CA",
    "city": "Anahim Lake"
  },
  {
    "code": "VAA",
    "country_code": "FI",
    "city": "Vaasa"
  },
  {
    "code": "HBA",
    "country_code": "AU",
    "city": "Hobart"
  },
  {
    "code": "DVR",
    "country_code": "AU",
    "city": "Daly River"
  },
  {
    "code": "PVU",
    "country_code": "US",
    "city": "Provo"
  },
  {
    "code": "CWX",
    "country_code": "US",
    "city": "Willcox"
  },
  {
    "code": "KTN",
    "country_code": "US",
    "city": "Ketchikan"
  },
  {
    "code": "KBE",
    "country_code": "US",
    "city": "Bell Island"
  },
  {
    "code": "OZP",
    "country_code": "ES",
    "city": "Moron"
  },
  {
    "code": "WET",
    "country_code": "ID",
    "city": "Wagethe"
  },
  {
    "code": "NEC",
    "country_code": "AR",
    "city": "Necochea"
  },
  {
    "code": "TCB",
    "country_code": "BS",
    "city": "Treasure Cay"
  },
  {
    "code": "MQF",
    "country_code": "RU",
    "city": "Magnitogorsk"
  },
  {
    "code": "ING",
    "country_code": "AR",
    "city": "Lago Argentino"
  },
  {
    "code": "UKR",
    "country_code": "YE",
    "city": "Mukeiras"
  },
  {
    "code": "BIO",
    "country_code": "ES",
    "city": "Bilbao"
  },
  {
    "code": "YOA",
    "country_code": "CA",
    "city": "Ekati"
  },
  {
    "code": "KSY",
    "country_code": "TR",
    "city": "Kars"
  },
  {
    "code": "BMB",
    "country_code": "CD",
    "city": "Bumba"
  },
  {
    "code": "GDE",
    "country_code": "ET",
    "city": "Gode/Iddidole"
  },
  {
    "code": "MGB",
    "country_code": "AU",
    "city": "Mount Gambier"
  },
  {
    "code": "BOQ",
    "country_code": "PG",
    "city": "Boku"
  },
  {
    "code": "OPS",
    "country_code": "BR",
    "city": "Sinop"
  },
  {
    "code": "BHU",
    "country_code": "IN",
    "city": "Bhavnagar"
  },
  {
    "code": "SXY",
    "country_code": "US",
    "city": "Sidney"
  },
  {
    "code": "AIW",
    "country_code": "NA",
    "city": "Ai-ais"
  },
  {
    "code": "QNC",
    "country_code": "CH",
    "city": "Neuchatel"
  },
  {
    "code": "XUS",
    "country_code": "NO",
    "city": "Snartemo"
  },
  {
    "code": "KBX",
    "country_code": "ID",
    "city": "Kambuaya"
  },
  {
    "code": "TMZ",
    "country_code": "NZ",
    "city": "Thames"
  },
  {
    "code": "YLN",
    "country_code": "CN",
    "city": "Yilan"
  },
  {
    "code": "XWD",
    "country_code": "GB",
    "city": "Wakefield"
  },
  {
    "code": "YYA",
    "country_code": "CA",
    "city": "Big Bay Yacht Club"
  },
  {
    "code": "WIO",
    "country_code": "AU",
    "city": "Wilcannia"
  },
  {
    "code": "FOY",
    "country_code": "LR",
    "city": "Foya"
  },
  {
    "code": "YGH",
    "country_code": "CA",
    "city": "Fort Good Hope"
  },
  {
    "code": "SHZ",
    "country_code": "LS",
    "city": "Seshutes"
  },
  {
    "code": "IVH",
    "country_code": "US",
    "city": "Ivishak"
  },
  {
    "code": "SKT",
    "country_code": "PK",
    "city": "Sialkot"
  },
  {
    "code": "TUJ",
    "country_code": "ET",
    "city": "Tum"
  },
  {
    "code": "YHY",
    "country_code": "CA",
    "city": "Hay River"
  },
  {
    "code": "QGN",
    "country_code": "ES",
    "city": "Tarragona"
  },
  {
    "code": "THV",
    "country_code": "US",
    "city": "York"
  },
  {
    "code": "ISW",
    "country_code": "US",
    "city": "Wisconsin Rapids"
  },
  {
    "code": "OBC",
    "country_code": "DJ",
    "city": "Obock"
  },
  {
    "code": "PHO",
    "country_code": "US",
    "city": "Point Hope"
  },
  {
    "code": "FKQ",
    "country_code": "ID",
    "city": "Fak Fak"
  },
  {
    "code": "BMC",
    "country_code": "US",
    "city": "Brigham City"
  },
  {
    "code": "ZGA",
    "country_code": "DE",
    "city": "Gera"
  },
  {
    "code": "XKV",
    "country_code": "CA",
    "city": "Sackville"
  },
  {
    "code": "AIU",
    "country_code": "CK",
    "city": "Atiu Island"
  },
  {
    "code": "SNH",
    "country_code": "AU",
    "city": "Stanthorpe"
  },
  {
    "code": "PKL",
    "country_code": "NZ",
    "city": "Pakatoa Island"
  },
  {
    "code": "RST",
    "country_code": "US",
    "city": "Rochester"
  },
  {
    "code": "ZMQ",
    "country_code": "NO",
    "city": "Raufoss"
  },
  {
    "code": "HUG",
    "country_code": "GT",
    "city": "Huehuetenango"
  },
  {
    "code": "KKO",
    "country_code": "NZ",
    "city": "Kaikohe"
  },
  {
    "code": "HAB",
    "country_code": "US",
    "city": "Hamilton"
  },
  {
    "code": "DLO",
    "country_code": "US",
    "city": "Dolomi"
  },
  {
    "code": "ASV",
    "country_code": "KE",
    "city": "Amboseli"
  },
  {
    "code": "LLH",
    "country_code": "HN",
    "city": "Las Limas"
  },
  {
    "code": "RUV",
    "country_code": "GT",
    "city": "Rubelsanto"
  },
  {
    "code": "KMJ",
    "country_code": "JP",
    "city": "Kumamoto"
  },
  {
    "code": "RUT",
    "country_code": "US",
    "city": "Rutland"
  },
  {
    "code": "SOK",
    "country_code": "LS",
    "city": "Semongkong"
  },
  {
    "code": "AMR",
    "country_code": "ES",
    "city": "Almeria"
  },
  {
    "code": "KEC",
    "country_code": "CD",
    "city": "Kasenga"
  },
  {
    "code": "CJU",
    "country_code": "KR",
    "city": "Jeju"
  },
  {
    "code": "YZC",
    "country_code": "CA",
    "city": "Beatton River"
  },
  {
    "code": "KVE",
    "country_code": "PG",
    "city": "Kitava"
  },
  {
    "code": "SNS",
    "country_code": "US",
    "city": "Salinas"
  },
  {
    "code": "REB",
    "country_code": "DE",
    "city": "Rechlin"
  },
  {
    "code": "BMU",
    "country_code": "ID",
    "city": "Bima"
  },
  {
    "code": "MIA",
    "country_code": "US",
    "city": "Miami"
  },
  {
    "code": "NEK",
    "country_code": "ET",
    "city": "Nekemt"
  },
  {
    "code": "KNW",
    "country_code": "US",
    "city": "New Stuyahok"
  },
  {
    "code": "LDC",
    "country_code": "AU",
    "city": "Lindeman Island"
  },
  {
    "code": "HBX",
    "country_code": "IN",
    "city": "Hubli"
  },
  {
    "code": "SVB",
    "country_code": "MG",
    "city": "Sambava"
  },
  {
    "code": "MFX",
    "country_code": "FR",
    "city": "Meribel"
  },
  {
    "code": "HUQ",
    "country_code": "LY",
    "city": "Houn"
  },
  {
    "code": "NDO",
    "country_code": "ES",
    "city": "La Palma Del Condado"
  },
  {
    "code": "LQM",
    "country_code": "CO",
    "city": "Puerto Leguizamo"
  },
  {
    "code": "MTK",
    "country_code": "KI",
    "city": "Makin Island"
  },
  {
    "code": "MJO",
    "country_code": "NA",
    "city": "Mount Etjo Lodge"
  },
  {
    "code": "TOR",
    "country_code": "US",
    "city": "Torrington"
  },
  {
    "code": "KTX",
    "country_code": "ML",
    "city": "Koutiala"
  },
  {
    "code": "JDR",
    "country_code": "BR",
    "city": "Sao Joao Del Rei"
  },
  {
    "code": "LIK",
    "country_code": "MH",
    "city": "Likiep Island"
  },
  {
    "code": "KCM",
    "country_code": "TR",
    "city": "Kahramanmaras"
  },
  {
    "code": "MVD",
    "country_code": "UY",
    "city": "Montevideo"
  },
  {
    "code": "DIM",
    "country_code": "CI",
    "city": "Dimbokro"
  },
  {
    "code": "SQR",
    "country_code": "ID",
    "city": "Soroako"
  },
  {
    "code": "XNO",
    "country_code": "GB",
    "city": "Northallerton"
  },
  {
    "code": "FRG",
    "country_code": "US",
    "city": "Farmingdale"
  },
  {
    "code": "PLP",
    "country_code": "PA",
    "city": "La Palma"
  },
  {
    "code": "IMA",
    "country_code": "PG",
    "city": "Iamalele"
  },
  {
    "code": "ZMC",
    "country_code": "PL",
    "city": "Miedzyzdroje"
  },
  {
    "code": "HGZ",
    "country_code": "US",
    "city": "Hogatza"
  },
  {
    "code": "XVX",
    "country_code": "DK",
    "city": "Vejle"
  },
  {
    "code": "JEJ",
    "country_code": "MH",
    "city": "Jeh"
  },
  {
    "code": "KRN",
    "country_code": "SE",
    "city": "Kiruna"
  },
  {
    "code": "BWA",
    "country_code": "NP",
    "city": "Bhairawa"
  },
  {
    "code": "ESN",
    "country_code": "US",
    "city": "Easton"
  },
  {
    "code": "ARX",
    "country_code": "US",
    "city": "Neptune"
  },
  {
    "code": "SLE",
    "country_code": "US",
    "city": "Salem"
  },
  {
    "code": "ABM",
    "country_code": "AU",
    "city": "Bamaga"
  },
  {
    "code": "WDB",
    "country_code": "US",
    "city": "Deep Bay"
  },
  {
    "code": "LIO",
    "country_code": "CR",
    "city": "Limon"
  },
  {
    "code": "ENJ",
    "country_code": "GT",
    "city": "El Naranjo"
  },
  {
    "code": "XSM",
    "country_code": "US",
    "city": "St Marys"
  },
  {
    "code": "REX",
    "country_code": "MX",
    "city": "Reynosa"
  },
  {
    "code": "TPX",
    "country_code": "PF",
    "city": "Tupai"
  },
  {
    "code": "TBM",
    "country_code": "ID",
    "city": "Tumbang Samba"
  },
  {
    "code": "VAS",
    "country_code": "TR",
    "city": "Sivas"
  },
  {
    "code": "FAU",
    "country_code": "OM",
    "city": "Fahud"
  },
  {
    "code": "BNL",
    "country_code": "US",
    "city": "Barnwell"
  },
  {
    "code": "GLN",
    "country_code": "MA",
    "city": "Goulimime"
  },
  {
    "code": "NTJ",
    "country_code": "US",
    "city": "Manti"
  },
  {
    "code": "KZO",
    "country_code": "KZ",
    "city": "Kzyl-Orda"
  },
  {
    "code": "SBO",
    "country_code": "US",
    "city": "Salina"
  },
  {
    "code": "КГЬ",
    "country_code": "RU",
    "city": "Kuskurgul"
  },
  {
    "code": "YCY",
    "country_code": "CA",
    "city": "Clyde River"
  },
  {
    "code": "SVS",
    "country_code": "US",
    "city": "Stevens Village"
  },
  {
    "code": "АЗУ",
    "country_code": "RU",
    "city": "Agzu"
  },
  {
    "code": "PKA",
    "country_code": "US",
    "city": "Napaskiak"
  },
  {
    "code": "KFS",
    "country_code": "TR",
    "city": "Kastamonu"
  },
  {
    "code": "PYY",
    "country_code": "TH",
    "city": "Pai"
  },
  {
    "code": "TUU",
    "country_code": "SA",
    "city": "Tabuk"
  },
  {
    "code": "BKE",
    "country_code": "US",
    "city": "Baker"
  },
  {
    "code": "DIR",
    "country_code": "ET",
    "city": "Dire Dawa"
  },
  {
    "code": "LBN",
    "country_code": "KE",
    "city": "Lake Baringo"
  },
  {
    "code": "HIL",
    "country_code": "ET",
    "city": "Shillavo"
  },
  {
    "code": "DEB",
    "country_code": "HU",
    "city": "Debrecen"
  },
  {
    "code": "ZUK",
    "country_code": "US",
    "city": "Lake Cook Road"
  },
  {
    "code": "HOO",
    "country_code": "VN",
    "city": "Quanduc"
  },
  {
    "code": "MCZ",
    "country_code": "BR",
    "city": "Maceio"
  },
  {
    "code": "SIF",
    "country_code": "NP",
    "city": "Simara"
  },
  {
    "code": "BHE",
    "country_code": "NZ",
    "city": "Blenheim"
  },
  {
    "code": "IGT",
    "country_code": "RU",
    "city": "Magas"
  },
  {
    "code": "GQQ",
    "country_code": "US",
    "city": "Galion"
  },
  {
    "code": "LMM",
    "country_code": "MX",
    "city": "Los Mochis"
  },
  {
    "code": "HRS",
    "country_code": "ZA",
    "city": "Harrismith"
  },
  {
    "code": "CDR",
    "country_code": "US",
    "city": "Chadron"
  },
  {
    "code": "ESM",
    "country_code": "EC",
    "city": "Esmeraldas"
  },
  {
    "code": "MMN",
    "country_code": "US",
    "city": "Stow"
  },
  {
    "code": "AME",
    "country_code": "MZ",
    "city": "Alto Molocue"
  },
  {
    "code": "JSD",
    "country_code": "US",
    "city": "Stratford"
  },
  {
    "code": "JKR",
    "country_code": "NP",
    "city": "Janakpur"
  },
  {
    "code": "DEY",
    "country_code": "CN",
    "city": "Deyang"
  },
  {
    "code": "QPV",
    "country_code": "AU",
    "city": "Perisher Valley"
  },
  {
    "code": "AHM",
    "country_code": "US",
    "city": "Ashland"
  },
  {
    "code": "UMI",
    "country_code": "PE",
    "city": "Quincemil"
  },
  {
    "code": "KNL",
    "country_code": "PG",
    "city": "Kelanoa"
  },
  {
    "code": "TKM",
    "country_code": "GT",
    "city": "Tikal"
  },
  {
    "code": "KYL",
    "country_code": "US",
    "city": "Key Largo"
  },
  {
    "code": "KSI",
    "country_code": "GN",
    "city": "Kissidougou"
  },
  {
    "code": "BMK",
    "country_code": "DE",
    "city": "Borkum"
  },
  {
    "code": "GSO",
    "country_code": "US",
    "city": "Greensboro/High Point"
  },
  {
    "code": "TVS",
    "country_code": "CN",
    "city": "Tangshan"
  },
  {
    "code": "PCC",
    "country_code": "CO",
    "city": "Puerto Rico"
  },
  {
    "code": "PER",
    "country_code": "AU",
    "city": "Perth"
  },
  {
    "code": "PMT",
    "country_code": "GY",
    "city": "Paramakotoi"
  },
  {
    "code": "JST",
    "country_code": "US",
    "city": "Johnstown"
  },
  {
    "code": "WRW",
    "country_code": "AU",
    "city": "Warrawagine"
  },
  {
    "code": "FNG",
    "country_code": "BF",
    "city": "Fada Ngourma"
  },
  {
    "code": "IXP",
    "country_code": "IN",
    "city": "Pathankot"
  },
  {
    "code": "XRR",
    "country_code": "CA",
    "city": "Ross River"
  },
  {
    "code": "JNP",
    "country_code": "US",
    "city": "Newport Beach"
  },
  {
    "code": "XWZ",
    "country_code": "SE",
    "city": "Nykoping"
  },
  {
    "code": "OMJ",
    "country_code": "JP",
    "city": "Omura"
  },
  {
    "code": "LZA",
    "country_code": "CD",
    "city": "Luiza"
  },
  {
    "code": "QJI",
    "country_code": "GL",
    "city": "Ikamiut"
  },
  {
    "code": "DIL",
    "country_code": "TL",
    "city": "Dili"
  },
  {
    "code": "UTS",
    "country_code": "RU",
    "city": "Ust-Tsilma"
  },
  {
    "code": "IDB",
    "country_code": "SE",
    "city": "Idre"
  },
  {
    "code": "SLV",
    "country_code": "IN",
    "city": "Simla"
  },
  {
    "code": "TNH",
    "country_code": "CN",
    "city": "Sanyuanpu"
  },
  {
    "code": "PCG",
    "country_code": "GT",
    "city": "Paso Caballos"
  },
  {
    "code": "BRS",
    "country_code": "GB",
    "city": "Bristol"
  },
  {
    "code": "MMY",
    "country_code": "JP",
    "city": "Miyako"
  },
  {
    "code": "EBB",
    "country_code": "UG",
    "city": "Entebbe"
  },
  {
    "code": "HLY",
    "country_code": "GB",
    "city": "Holyhead"
  },
  {
    "code": "GRX",
    "country_code": "ES",
    "city": "Granada"
  },
  {
    "code": "OCA",
    "country_code": "US",
    "city": "Ocean Reef"
  },
  {
    "code": "BLE",
    "country_code": "SE",
    "city": "Borlange/Falun"
  },
  {
    "code": "YPG",
    "country_code": "CA",
    "city": "Portage La Prairie"
  },
  {
    "code": "KBN",
    "country_code": "CD",
    "city": "Kabinda"
  },
  {
    "code": "SWP",
    "country_code": "NA",
    "city": "Swakopmund"
  },
  {
    "code": "ZSM",
    "country_code": "US",
    "city": "Santa Clara"
  },
  {
    "code": "SII",
    "country_code": "MA",
    "city": "Sidi Ifni"
  },
  {
    "code": "BBW",
    "country_code": "US",
    "city": "Broken Bow"
  },
  {
    "code": "ZMW",
    "country_code": "DK",
    "city": "Brande"
  },
  {
    "code": "TGK",
    "country_code": "RU",
    "city": "Taganrog"
  },
  {
    "code": "PKV",
    "country_code": "RU",
    "city": "Pskov"
  },
  {
    "code": "KDR",
    "country_code": "PG",
    "city": "Kandrian"
  },
  {
    "code": "GWL",
    "country_code": "IN",
    "city": "Gwalior"
  },
  {
    "code": "MVX",
    "country_code": "GA",
    "city": "Minvoul"
  },
  {
    "code": "JPA",
    "country_code": "BR",
    "city": "Joao Pessoa"
  },
  {
    "code": "KCA",
    "country_code": "CN",
    "city": "Kuqa"
  },
  {
    "code": "YLR",
    "country_code": "CA",
    "city": "Leaf Rapids"
  },
  {
    "code": "PKG",
    "country_code": "MY",
    "city": "Pangkor"
  },
  {
    "code": "MIY",
    "country_code": "AU",
    "city": "Mittiebah"
  },
  {
    "code": "BMX",
    "country_code": "US",
    "city": "Big Mountain"
  },
  {
    "code": "IAG",
    "country_code": "US",
    "city": "Niagara Falls"
  },
  {
    "code": "DFI",
    "country_code": "US",
    "city": "Defiance"
  },
  {
    "code": "GLT",
    "country_code": "AU",
    "city": "Gladstone"
  },
  {
    "code": "MRU",
    "country_code": "MU",
    "city": "Mauritius"
  },
  {
    "code": "SXX",
    "country_code": "BR",
    "city": "Sao Felix Do Xingu"
  },
  {
    "code": "ETS",
    "country_code": "US",
    "city": "Enterprise"
  },
  {
    "code": "LLP",
    "country_code": "AU",
    "city": "Linda Downs"
  },
  {
    "code": "MRJ",
    "country_code": "HN",
    "city": "Marcala"
  },
  {
    "code": "YCU",
    "country_code": "CN",
    "city": "Yuncheng"
  },
  {
    "code": "TBC",
    "country_code": "US",
    "city": "Tuba City"
  },
  {
    "code": "ESP",
    "country_code": "US",
    "city": "East Stroudsburg"
  },
  {
    "code": "JTR",
    "country_code": "GR",
    "city": "Thira"
  },
  {
    "code": "PSF",
    "country_code": "US",
    "city": "Pittsfield"
  },
  {
    "code": "FLP",
    "country_code": "US",
    "city": "Flippin"
  },
  {
    "code": "FOX",
    "country_code": "US",
    "city": "Fox"
  },
  {
    "code": "ELW",
    "country_code": "US",
    "city": "Ellamar"
  },
  {
    "code": "MRB",
    "country_code": "US",
    "city": "Martinsburg"
  },
  {
    "code": "SSH",
    "country_code": "EG",
    "city": "Sharm el Sheikh"
  },
  {
    "code": "URC",
    "country_code": "CN",
    "city": "Urumqi"
  },
  {
    "code": "CSR",
    "country_code": "CO",
    "city": "Casuarito"
  },
  {
    "code": "MEW",
    "country_code": "CD",
    "city": "Mweka"
  },
  {
    "code": "TGI",
    "country_code": "PE",
    "city": "Tingo Maria"
  },
  {
    "code": "AUB",
    "country_code": "BR",
    "city": "Itauba"
  },
  {
    "code": "RHE",
    "country_code": "FR",
    "city": "Reims"
  },
  {
    "code": "LAW",
    "country_code": "US",
    "city": "Lawton"
  },
  {
    "code": "ZEI",
    "country_code": "DE",
    "city": "Garmisch-Partenkirchen"
  },
  {
    "code": "ZFR",
    "country_code": "DE",
    "city": "Frankfurt (Oder)"
  },
  {
    "code": "PNP",
    "country_code": "PG",
    "city": "Popondetta"
  },
  {
    "code": "PEQ",
    "country_code": "US",
    "city": "Pecos City"
  },
  {
    "code": "MWF",
    "country_code": "VU",
    "city": "Maewo"
  },
  {
    "code": "MTL",
    "country_code": "AU",
    "city": "Maitland"
  },
  {
    "code": "LYU",
    "country_code": "US",
    "city": "Ely"
  },
  {
    "code": "CBK",
    "country_code": "US",
    "city": "Colby"
  },
  {
    "code": "TCP",
    "country_code": "EG",
    "city": "Taba"
  },
  {
    "code": "DSA",
    "country_code": "GB",
    "city": "Doncaster"
  },
  {
    "code": "LIP",
    "country_code": "BR",
    "city": "Lins"
  },
  {
    "code": "COS",
    "country_code": "US",
    "city": "Colorado Springs"
  },
  {
    "code": "HZH",
    "country_code": "CN",
    "city": "Liping"
  },
  {
    "code": "DTL",
    "country_code": "US",
    "city": "Detroit Lakes"
  },
  {
    "code": "SUI",
    "country_code": "GE",
    "city": "Sukhumi"
  },
  {
    "code": "APY",
    "country_code": "BR",
    "city": "Alto Parnaiba"
  },
  {
    "code": "AFA",
    "country_code": "AR",
    "city": "San Rafael"
  },
  {
    "code": "EAE",
    "country_code": "VU",
    "city": "Emae"
  },
  {
    "code": "YTE",
    "country_code": "CA",
    "city": "Cape Dorset"
  },
  {
    "code": "НУВ",
    "country_code": "RU",
    "city": "Novokurovka"
  },
  {
    "code": "LOF",
    "country_code": "MH",
    "city": "Loen"
  },
  {
    "code": "PIA",
    "country_code": "US",
    "city": "Peoria"
  },
  {
    "code": "HCW",
    "country_code": "US",
    "city": "Cheraw"
  },
  {
    "code": "AUI",
    "country_code": "PG",
    "city": "Aua Island"
  },
  {
    "code": "ВТЛ",
    "country_code": "RU",
    "city": "Vuktyl"
  },
  {
    "code": "HUD",
    "country_code": "US",
    "city": "Humboldt"
  },
  {
    "code": "CIF",
    "country_code": "CN",
    "city": "Chifeng"
  },
  {
    "code": "ESG",
    "country_code": "PY",
    "city": "Mariscal Estigarribia"
  },
  {
    "code": "LAF",
    "country_code": "US",
    "city": "Lafayette"
  },
  {
    "code": "AGS",
    "country_code": "US",
    "city": "Augusta"
  },
  {
    "code": "XPA",
    "country_code": "BF",
    "city": "Pama"
  },
  {
    "code": "SGG",
    "country_code": "MY",
    "city": "Simanggang"
  },
  {
    "code": "DAP",
    "country_code": "NP",
    "city": "Gokuleshwar"
  },
  {
    "code": "MYL",
    "country_code": "US",
    "city": "Mccall"
  },
  {
    "code": "UEN",
    "country_code": "RU",
    "city": "Urengoy"
  },
  {
    "code": "RUD",
    "country_code": "IR",
    "city": "Shahrud"
  },
  {
    "code": "MWG",
    "country_code": "PG",
    "city": "Marawaka"
  },
  {
    "code": "WBO",
    "country_code": "MG",
    "city": "Beroroha"
  },
  {
    "code": "GFE",
    "country_code": "AU",
    "city": "Grenfell"
  },
  {
    "code": "OLJ",
    "country_code": "VU",
    "city": "Olpoi"
  },
  {
    "code": "КСЮ",
    "country_code": "RU",
    "city": "Kislokan"
  },
  {
    "code": "MLZ",
    "country_code": "UY",
    "city": "Melo"
  },
  {
    "code": "BBD",
    "country_code": "US",
    "city": "Brady"
  },
  {
    "code": "JJN",
    "country_code": "CN",
    "city": "Jinjiang"
  },
  {
    "code": "GZP",
    "country_code": "TR",
    "city": "Gazipasa"
  },
  {
    "code": "ATT",
    "country_code": "US",
    "city": "Atmautluak"
  },
  {
    "code": "BKO",
    "country_code": "ML",
    "city": "Bamako"
  },
  {
    "code": "LDY",
    "country_code": "GB",
    "city": "Derry"
  },
  {
    "code": "CMS",
    "country_code": "SO",
    "city": "Scusciuban"
  },
  {
    "code": "BTY",
    "country_code": "US",
    "city": "Beatty"
  },
  {
    "code": "EVW",
    "country_code": "US",
    "city": "Evanston"
  },
  {
    "code": "SHJ",
    "country_code": "AE",
    "city": "Sharjah"
  },
  {
    "code": "KVB",
    "country_code": "SE",
    "city": "Skovde"
  },
  {
    "code": "ZAD",
    "country_code": "HR",
    "city": "Zadar"
  },
  {
    "code": "AOS",
    "country_code": "US",
    "city": "Amook"
  },
  {
    "code": "MUN",
    "country_code": "VE",
    "city": "Maturin"
  },
  {
    "code": "BQB",
    "country_code": "AU",
    "city": "Bussellton"
  },
  {
    "code": "DRN",
    "country_code": "AU",
    "city": "Dirranbandi"
  },
  {
    "code": "ССМ",
    "country_code": "RU",
    "city": "Susuman"
  },
  {
    "code": "BIJ",
    "country_code": "PG",
    "city": "Biliau"
  },
  {
    "code": "TNP",
    "country_code": "US",
    "city": "Twentynine Palms"
  },
  {
    "code": "HRM",
    "country_code": "DZ",
    "city": "Hassi R'mel"
  },
  {
    "code": "BDE",
    "country_code": "US",
    "city": "Baudette"
  },
  {
    "code": "GOV",
    "country_code": "AU",
    "city": "Gove"
  },
  {
    "code": "JVI",
    "country_code": "US",
    "city": "Manville"
  },
  {
    "code": "ТУУ",
    "country_code": "RU",
    "city": "Tugur"
  },
  {
    "code": "YSH",
    "country_code": "CA",
    "city": "Smith Falls"
  },
  {
    "code": "SLZ",
    "country_code": "BR",
    "city": "Sao Luiz"
  },
  {
    "code": "FRS",
    "country_code": "GT",
    "city": "Flores"
  },
  {
    "code": "BSS",
    "country_code": "BR",
    "city": "Balsas"
  },
  {
    "code": "KJP",
    "country_code": "JP",
    "city": "Kerama"
  },
  {
    "code": "BAZ",
    "country_code": "BR",
    "city": "Barcelos"
  },
  {
    "code": "PHL",
    "country_code": "US",
    "city": "Philadelphia"
  },
  {
    "code": "SBD",
    "country_code": "US",
    "city": "San Bernardino"
  },
  {
    "code": "LOY",
    "country_code": "KE",
    "city": "Loyangalani"
  },
  {
    "code": "TRY",
    "country_code": "UG",
    "city": "Tororo"
  },
  {
    "code": "YBK",
    "country_code": "CA",
    "city": "Baker Lake"
  },
  {
    "code": "MHQ",
    "country_code": "AX",
    "city": "Mariehamn"
  },
  {
    "code": "ION",
    "country_code": "CG",
    "city": "Impfondo"
  },
  {
    "code": "XLZ",
    "country_code": "CA",
    "city": "Truro"
  },
  {
    "code": "SKE",
    "country_code": "NO",
    "city": "Skien"
  },
  {
    "code": "WRE",
    "country_code": "NZ",
    "city": "Whangarei"
  },
  {
    "code": "MWM",
    "country_code": "US",
    "city": "Windom"
  },
  {
    "code": "YIB",
    "country_code": "CA",
    "city": "Atikokan"
  },
  {
    "code": "LCE",
    "country_code": "HN",
    "city": "La Ceiba"
  },
  {
    "code": "HOG",
    "country_code": "CU",
    "city": "Holguin"
  },
  {
    "code": "MJF",
    "country_code": "NO",
    "city": "Mosjoen"
  },
  {
    "code": "CXB",
    "country_code": "BD",
    "city": "Coxs Bazar"
  },
  {
    "code": "RMZ",
    "country_code": "RU",
    "city": "Tobolsk"
  },
  {
    "code": "KIG",
    "country_code": "ZA",
    "city": "Koingnaas"
  },
  {
    "code": "TDV",
    "country_code": "MG",
    "city": "Tanandava"
  },
  {
    "code": "IXT",
    "country_code": "IN",
    "city": "Pasighat"
  },
  {
    "code": "YLH",
    "country_code": "CA",
    "city": "Lansdowne House"
  },
  {
    "code": "KWB",
    "country_code": "ID",
    "city": "Karimunjawa"
  },
  {
    "code": "ACJ",
    "country_code": "LK",
    "city": "Anuradhapura"
  },
  {
    "code": "XZC",
    "country_code": "CA",
    "city": "Glencoe"
  },
  {
    "code": "APB",
    "country_code": "BO",
    "city": "Apolo"
  },
  {
    "code": "HPN",
    "country_code": "US",
    "city": "Westchester County"
  },
  {
    "code": "WIT",
    "country_code": "AU",
    "city": "Wittenoom"
  },
  {
    "code": "FRI",
    "country_code": "US",
    "city": "Fort Riley"
  },
  {
    "code": "DSC",
    "country_code": "CM",
    "city": "Dschang"
  },
  {
    "code": "IRG",
    "country_code": "AU",
    "city": "Lockhart River"
  },
  {
    "code": "CSG",
    "country_code": "US",
    "city": "Columbus"
  },
  {
    "code": "CIQ",
    "country_code": "GT",
    "city": "Chiquimula"
  },
  {
    "code": "YKA",
    "country_code": "CA",
    "city": "Kamloops"
  },
  {
    "code": "LNE",
    "country_code": "VU",
    "city": "Lonorore"
  },
  {
    "code": "MCK",
    "country_code": "US",
    "city": "McCook"
  },
  {
    "code": "XVS",
    "country_code": "FR",
    "city": "Valenciennes"
  },
  {
    "code": "KLN",
    "country_code": "US",
    "city": "Larsen Bay"
  },
  {
    "code": "PNS",
    "country_code": "US",
    "city": "Pensacola"
  },
  {
    "code": "TGM",
    "country_code": "RO",
    "city": "Tirgu Mures"
  },
  {
    "code": "SHU",
    "country_code": "AU",
    "city": "Smith Point"
  },
  {
    "code": "JNG",
    "country_code": "CN",
    "city": "Jining"
  },
  {
    "code": "FBR",
    "country_code": "US",
    "city": "Fort Bridger"
  },
  {
    "code": "TFM",
    "country_code": "PG",
    "city": "Telefomin"
  },
  {
    "code": "TCR",
    "country_code": "IN",
    "city": "Tuticorin"
  },
  {
    "code": "CZZ",
    "country_code": "US",
    "city": "Campo"
  },
  {
    "code": "KTW",
    "country_code": "PL",
    "city": "Katowice"
  },
  {
    "code": "XAY",
    "country_code": "LA",
    "city": "Xayabury"
  },
  {
    "code": "MIO",
    "country_code": "US",
    "city": "Miami"
  },
  {
    "code": "PNO",
    "country_code": "MX",
    "city": "Pinotepa Nacional"
  },
  {
    "code": "MBD",
    "country_code": "ZA",
    "city": "Mmabatho"
  },
  {
    "code": "ZMH",
    "country_code": "CA",
    "city": "108 Mile Ranch"
  },
  {
    "code": "RHG",
    "country_code": "RW",
    "city": "Ruhengeri"
  },
  {
    "code": "CHA",
    "country_code": "US",
    "city": "Chattanooga"
  },
  {
    "code": "SNK",
    "country_code": "US",
    "city": "Snyder"
  },
  {
    "code": "CTT",
    "country_code": "FR",
    "city": "Le Castellet"
  },
  {
    "code": "SXW",
    "country_code": "PG",
    "city": "Sauren"
  },
  {
    "code": "HSC",
    "country_code": "CN",
    "city": "Shaoguan"
  },
  {
    "code": "ANG",
    "country_code": "FR",
    "city": "Angouleme"
  },
  {
    "code": "KEL",
    "country_code": "DE",
    "city": "Kiel"
  },
  {
    "code": "BBJ",
    "country_code": "DE",
    "city": "Bitburg"
  },
  {
    "code": "AFT",
    "country_code": "SB",
    "city": "Afutara"
  },
  {
    "code": "JUO",
    "country_code": "CO",
    "city": "Jurado"
  },
  {
    "code": "БОК",
    "country_code": "RU",
    "city": "Bolshoy Larjak"
  },
  {
    "code": "PMF",
    "country_code": "IT",
    "city": "Parma"
  },
  {
    "code": "YCS",
    "country_code": "CA",
    "city": "Chesterfield Inlet"
  },
  {
    "code": "LEO",
    "country_code": "GA",
    "city": "Leconi"
  },
  {
    "code": "YVG",
    "country_code": "CA",
    "city": "Vermilion"
  },
  {
    "code": "OSE",
    "country_code": "PG",
    "city": "Omora"
  },
  {
    "code": "NNX",
    "country_code": "ID",
    "city": "Nunukan"
  },
  {
    "code": "BAG",
    "country_code": "PH",
    "city": "Baguio"
  },
  {
    "code": "MMZ",
    "country_code": "AF",
    "city": "Maimana"
  },
  {
    "code": "TGZ",
    "country_code": "MX",
    "city": "Tuxtla Gutierrez"
  },
  {
    "code": "HUL",
    "country_code": "US",
    "city": "Houlton"
  },
  {
    "code": "YIV",
    "country_code": "CA",
    "city": "Island Lake"
  },
  {
    "code": "ORL",
    "country_code": "US",
    "city": "Orlando"
  },
  {
    "code": "PUJ",
    "country_code": "DO",
    "city": "Punta Cana"
  },
  {
    "code": "PEM",
    "country_code": "PE",
    "city": "Puerto Maldonado"
  },
  {
    "code": "XVL",
    "country_code": "VN",
    "city": "Vinh Long"
  },
  {
    "code": "CRU",
    "country_code": "GD",
    "city": "Carriacou Island"
  },
  {
    "code": "ZOO",
    "country_code": "DE",
    "city": "Muelheim an der Ruhr"
  },
  {
    "code": "KUD",
    "country_code": "MY",
    "city": "Kudat"
  },
  {
    "code": "XNE",
    "country_code": "GB",
    "city": "Newport"
  },
  {
    "code": "REH",
    "country_code": "US",
    "city": "Rehoboth Beach"
  },
  {
    "code": "KXE",
    "country_code": "ZA",
    "city": "Klerksdorp"
  },
  {
    "code": "ZPA",
    "country_code": "DE",
    "city": "Offenburg"
  },
  {
    "code": "TAG",
    "country_code": "PH",
    "city": "Tagbilaran"
  },
  {
    "code": "СЛУ",
    "country_code": "RU",
    "city": "Slautnoe"
  },
  {
    "code": "SKC",
    "country_code": "PG",
    "city": "Suki"
  },
  {
    "code": "YWO",
    "country_code": "CA",
    "city": "Lupin"
  },
  {
    "code": "PTD",
    "country_code": "US",
    "city": "Port Alexander"
  },
  {
    "code": "WWS",
    "country_code": "US",
    "city": "Wildwood"
  },
  {
    "code": "SYZ",
    "country_code": "IR",
    "city": "Shiraz"
  },
  {
    "code": "BIU",
    "country_code": "IS",
    "city": "Bildudalur"
  },
  {
    "code": "SYY",
    "country_code": "GB",
    "city": "Stornoway, Outer Stat Hebrides"
  },
  {
    "code": "PWI",
    "country_code": "ET",
    "city": "Pawi"
  },
  {
    "code": "KGB",
    "country_code": "PG",
    "city": "Konge"
  },
  {
    "code": "SDN",
    "country_code": "NO",
    "city": "Sandane"
  },
  {
    "code": "XJQ",
    "country_code": "CA",
    "city": "Jonquiere"
  },
  {
    "code": "HIP",
    "country_code": "AU",
    "city": "Headingly"
  },
  {
    "code": "WEA",
    "country_code": "US",
    "city": "Weatherford"
  },
  {
    "code": "KCU",
    "country_code": "UG",
    "city": "Masindi"
  },
  {
    "code": "CYP",
    "country_code": "PH",
    "city": "Calbayog"
  },
  {
    "code": "YYY",
    "country_code": "CA",
    "city": "Mont Joli"
  },
  {
    "code": "XRG",
    "country_code": "GB",
    "city": "Rugeley"
  },
  {
    "code": "XYA",
    "country_code": "SB",
    "city": "Yandina"
  },
  {
    "code": "HTV",
    "country_code": "US",
    "city": "Huntsville"
  },
  {
    "code": "CQT",
    "country_code": "CO",
    "city": "Caquetaia"
  },
  {
    "code": "SIE",
    "country_code": "PT",
    "city": "Sines"
  },
  {
    "code": "MPP",
    "country_code": "PA",
    "city": "Mulatupo"
  },
  {
    "code": "YBF",
    "country_code": "CA",
    "city": "Bamfield"
  },
  {
    "code": "HUH",
    "country_code": "PF",
    "city": "Huahine"
  },
  {
    "code": "ISB",
    "country_code": "PK",
    "city": "Islamabad"
  },
  {
    "code": "SUP",
    "country_code": "ID",
    "city": "Sumenep"
  },
  {
    "code": "HAW",
    "country_code": "GB",
    "city": "Haverfordwest"
  },
  {
    "code": "SOJ",
    "country_code": "NO",
    "city": "Sorkjosen"
  },
  {
    "code": "BQL",
    "country_code": "AU",
    "city": "Boulia"
  },
  {
    "code": "SVX",
    "country_code": "RU",
    "city": "Yekaterinburg"
  },
  {
    "code": "BUB",
    "country_code": "US",
    "city": "Burwell"
  },
  {
    "code": "ESA",
    "country_code": "PG",
    "city": "Esa'Ala"
  },
  {
    "code": "LAZ",
    "country_code": "BR",
    "city": "Bom Jesus Da Lapa"
  },
  {
    "code": "RDS",
    "country_code": "AR",
    "city": "Rincon de los Sauces"
  },
  {
    "code": "FME",
    "country_code": "US",
    "city": "Fort Meade"
  },
  {
    "code": "BKP",
    "country_code": "AU",
    "city": "Barkly Downs"
  },
  {
    "code": "HNY",
    "country_code": "CN",
    "city": "Hengyang"
  },
  {
    "code": "GOY",
    "country_code": "RU",
    "city": "Tura"
  },
  {
    "code": "WAF",
    "country_code": "PK",
    "city": "Wana"
  },
  {
    "code": "KSB",
    "country_code": "PG",
    "city": "Kasanombe"
  },
  {
    "code": "ARG",
    "country_code": "US",
    "city": "Walnut Ridge"
  },
  {
    "code": "KUO",
    "country_code": "FI",
    "city": "Kuopio"
  },
  {
    "code": "NKL",
    "country_code": "CD",
    "city": "Nkolo"
  },
  {
    "code": "SGK",
    "country_code": "PG",
    "city": "Sangapi"
  },
  {
    "code": "ZAF",
    "country_code": "FR",
    "city": "Arles"
  },
  {
    "code": "LWY",
    "country_code": "MY",
    "city": "Lawas"
  },
  {
    "code": "ETH",
    "country_code": "IL",
    "city": "Elat"
  },
  {
    "code": "HTZ",
    "country_code": "CO",
    "city": "Hato Corozal"
  },
  {
    "code": "KKI",
    "country_code": "US",
    "city": "Akiachak"
  },
  {
    "code": "RKW",
    "country_code": "US",
    "city": "Rockwood"
  },
  {
    "code": "DYR",
    "country_code": "RU",
    "city": "Anadyr"
  },
  {
    "code": "IWD",
    "country_code": "US",
    "city": "Ironwood"
  },
  {
    "code": "FBL",
    "country_code": "US",
    "city": "Faribault"
  },
  {
    "code": "LXN",
    "country_code": "US",
    "city": "Lexington"
  },
  {
    "code": "KBY",
    "country_code": "AU",
    "city": "Streaky Bay"
  },
  {
    "code": "FLR",
    "country_code": "IT",
    "city": "Florence"
  },
  {
    "code": "MDE",
    "country_code": "CO",
    "city": "Medellin"
  },
  {
    "code": "GHF",
    "country_code": "DE",
    "city": "Giebelstadt"
  },
  {
    "code": "ZLW",
    "country_code": "MY",
    "city": "Pasir Gudang"
  },
  {
    "code": "CBF",
    "country_code": "US",
    "city": "Council Bluffs"
  },
  {
    "code": "YZS",
    "country_code": "CA",
    "city": "Coral Harbour"
  },
  {
    "code": "KLM",
    "country_code": "IR",
    "city": "Kalaleh"
  },
  {
    "code": "DEM",
    "country_code": "ET",
    "city": "Dembidollo"
  },
  {
    "code": "DCM",
    "country_code": "FR",
    "city": "Castres"
  },
  {
    "code": "CTP",
    "country_code": "BR",
    "city": "Carutapera"
  },
  {
    "code": "AFD",
    "country_code": "ZA",
    "city": "Port Alfred"
  },
  {
    "code": "CMR",
    "country_code": "FR",
    "city": "Colmar"
  },
  {
    "code": "MSE",
    "country_code": "GB",
    "city": "Manston"
  },
  {
    "code": "NAL",
    "country_code": "RU",
    "city": "Nalchik"
  },
  {
    "code": "WNP",
    "country_code": "PH",
    "city": "Naga"
  },
  {
    "code": "YMM",
    "country_code": "CA",
    "city": "Fort McMurray"
  },
  {
    "code": "XDL",
    "country_code": "CA",
    "city": "Chandler"
  },
  {
    "code": "PKP",
    "country_code": "PF",
    "city": "Puka Puka"
  },
  {
    "code": "ILF",
    "country_code": "CA",
    "city": "Ilford"
  },
  {
    "code": "YVR",
    "country_code": "CA",
    "city": "Vancouver"
  },
  {
    "code": "VNR",
    "country_code": "AU",
    "city": "Vanrook"
  },
  {
    "code": "MDU",
    "country_code": "PG",
    "city": "Mendi"
  },
  {
    "code": "SZI",
    "country_code": "KZ",
    "city": "Zaisan"
  },
  {
    "code": "LNV",
    "country_code": "PG",
    "city": "Lihir Island"
  },
  {
    "code": "SAK",
    "country_code": "IS",
    "city": "Saudarkrokur"
  },
  {
    "code": "HPE",
    "country_code": "AU",
    "city": "Hope Vale"
  },
  {
    "code": "ЧИР",
    "country_code": "RU",
    "city": "Chirinda"
  },
  {
    "code": "YRD",
    "country_code": "CA",
    "city": "Dean River"
  },
  {
    "code": "FAI",
    "country_code": "US",
    "city": "Fairbanks"
  },
  {
    "code": "MJK",
    "country_code": "AU",
    "city": "Monkey Mia"
  },
  {
    "code": "RVV",
    "country_code": "PF",
    "city": "Rairua"
  },
  {
    "code": "SQB",
    "country_code": "CO",
    "city": "Santa Ana"
  },
  {
    "code": "YTI",
    "country_code": "CA",
    "city": "Triple Island"
  },
  {
    "code": "ADD",
    "country_code": "ET",
    "city": "Addis Ababa"
  },
  {
    "code": "LHI",
    "country_code": "ID",
    "city": "Lereh"
  },
  {
    "code": "MBT",
    "country_code": "PH",
    "city": "Masbate"
  },
  {
    "code": "ZUC",
    "country_code": "CA",
    "city": "Ignace"
  },
  {
    "code": "ANF",
    "country_code": "CL",
    "city": "Antofagasta"
  },
  {
    "code": "ZSN",
    "country_code": "DE",
    "city": "Stendal"
  },
  {
    "code": "MDQ",
    "country_code": "AR",
    "city": "Mar Del Plata"
  },
  {
    "code": "BNS",
    "country_code": "VE",
    "city": "Barinas"
  },
  {
    "code": "BHG",
    "country_code": "HN",
    "city": "Brus Laguna"
  },
  {
    "code": "FKN",
    "country_code": "US",
    "city": "Franklin"
  },
  {
    "code": "MVP",
    "country_code": "CO",
    "city": "Mitu"
  },
  {
    "code": "PMR",
    "country_code": "NZ",
    "city": "Palmerston North"
  },
  {
    "code": "OGX",
    "country_code": "DZ",
    "city": "Ouargla"
  },
  {
    "code": "MDS",
    "country_code": "TC",
    "city": "Middle Caicos"
  },
  {
    "code": "MTU",
    "country_code": "MZ",
    "city": "Montepuez"
  },
  {
    "code": "ULP",
    "country_code": "AU",
    "city": "Quilpie"
  },
  {
    "code": "WNC",
    "country_code": "US",
    "city": "Tuxekan Island"
  },
  {
    "code": "NZJ",
    "country_code": "US",
    "city": "Irvine"
  },
  {
    "code": "GOM",
    "country_code": "CD",
    "city": "Goma"
  },
  {
    "code": "XGN",
    "country_code": "AO",
    "city": "Xangongo"
  },
  {
    "code": "GLS",
    "country_code": "US",
    "city": "Galveston"
  },
  {
    "code": "NCN",
    "country_code": "US",
    "city": "New Chenega"
  },
  {
    "code": "ARU",
    "country_code": "BR",
    "city": "Aracatuba"
  },
  {
    "code": "CEH",
    "country_code": "MW",
    "city": "Chelinda"
  },
  {
    "code": "YCF",
    "country_code": "CA",
    "city": "Cortes Bay"
  },
  {
    "code": "VIC",
    "country_code": "IT",
    "city": "Vicenza"
  },
  {
    "code": "BGB",
    "country_code": "GA",
    "city": "Booue"
  },
  {
    "code": "CNL",
    "country_code": "DK",
    "city": "Sindal"
  },
  {
    "code": "PAH",
    "country_code": "US",
    "city": "Paducah"
  },
  {
    "code": "DDU",
    "country_code": "PK",
    "city": "Dadu"
  },
  {
    "code": "GYP",
    "country_code": "AU",
    "city": "Gympie"
  },
  {
    "code": "BYK",
    "country_code": "CI",
    "city": "Bouake"
  },
  {
    "code": "ULM",
    "country_code": "US",
    "city": "New Ulm"
  },
  {
    "code": "BAT",
    "country_code": "BR",
    "city": "Barretos"
  },
  {
    "code": "DOK",
    "country_code": "UA",
    "city": "Donetsk"
  },
  {
    "code": "YTQ",
    "country_code": "CA",
    "city": "Tasiujuaq"
  },
  {
    "code": "TEN",
    "country_code": "CN",
    "city": "Tongren"
  },
  {
    "code": "TPK",
    "country_code": "ID",
    "city": "Tapaktuan"
  },
  {
    "code": "YAP",
    "country_code": "FM",
    "city": "Yap, Caroline Islands"
  },
  {
    "code": "AJJ",
    "country_code": "MR",
    "city": "Akjoujt"
  },
  {
    "code": "EPG",
    "country_code": "US",
    "city": "Weeping Water"
  },
  {
    "code": "RBW",
    "country_code": "US",
    "city": "Walterboro"
  },
  {
    "code": "RIW",
    "country_code": "US",
    "city": "Riverton"
  },
  {
    "code": "ALE",
    "country_code": "US",
    "city": "Alpine"
  },
  {
    "code": "YCJ",
    "country_code": "CA",
    "city": "Cape St James"
  },
  {
    "code": "AGE",
    "country_code": "DE",
    "city": "Wangerooge"
  },
  {
    "code": "HTT",
    "country_code": "CN",
    "city": "Mangnai"
  },
  {
    "code": "MVQ",
    "country_code": "BY",
    "city": "Mogilev"
  },
  {
    "code": "QCY",
    "country_code": "GB",
    "city": "Coningsby"
  },
  {
    "code": "NUF",
    "country_code": "LK",
    "city": "Hatton"
  },
  {
    "code": "THI",
    "country_code": "MR",
    "city": "Tichitt"
  },
  {
    "code": "RME",
    "country_code": "US",
    "city": "Rome"
  },
  {
    "code": "YTO",
    "country_code": "CA",
    "city": "Toronto"
  },
  {
    "code": "RRV",
    "country_code": "AU",
    "city": "Robinson River"
  },
  {
    "code": "EPU",
    "country_code": "EE",
    "city": "Parnu"
  },
  {
    "code": "BDJ",
    "country_code": "ID",
    "city": "Banjarmasin"
  },
  {
    "code": "BXR",
    "country_code": "IR",
    "city": "Bam"
  },
  {
    "code": "VIS",
    "country_code": "US",
    "city": "Visalia"
  },
  {
    "code": "UII",
    "country_code": "HN",
    "city": "Utila"
  },
  {
    "code": "KLJ",
    "country_code": "LT",
    "city": "Palanga"
  },
  {
    "code": "CSP",
    "country_code": "US",
    "city": "Cape Spencer"
  },
  {
    "code": "AKM",
    "country_code": "TD",
    "city": "Zakouma"
  },
  {
    "code": "BHC",
    "country_code": "PK",
    "city": "Bhurban"
  },
  {
    "code": "AWZ",
    "country_code": "IR",
    "city": "Ahwaz"
  },
  {
    "code": "SPH",
    "country_code": "PG",
    "city": "Sopu"
  },
  {
    "code": "SBP",
    "country_code": "US",
    "city": "San Luis Obispo"
  },
  {
    "code": "KDI",
    "country_code": "ID",
    "city": "Kendari"
  },
  {
    "code": "MCQ",
    "country_code": "HU",
    "city": "Miskolc"
  },
  {
    "code": "ANP",
    "country_code": "US",
    "city": "Annapolis"
  },
  {
    "code": "ZJL",
    "country_code": "CH",
    "city": "Lyss"
  },
  {
    "code": "RKT",
    "country_code": "AE",
    "city": "Ras al-Khaimah"
  },
  {
    "code": "CGZ",
    "country_code": "US",
    "city": "Casa Grande"
  },
  {
    "code": "XQI",
    "country_code": "GB",
    "city": "Loughborough"
  },
  {
    "code": "UVO",
    "country_code": "PG",
    "city": "Uvol"
  },
  {
    "code": "YKQ",
    "country_code": "CA",
    "city": "Waskaganish"
  },
  {
    "code": "KDA",
    "country_code": "SN",
    "city": "Kolda"
  },
  {
    "code": "YIK",
    "country_code": "CA",
    "city": "Ivujivik"
  },
  {
    "code": "KPA",
    "country_code": "PG",
    "city": "Kopiago"
  },
  {
    "code": "FMO",
    "country_code": "DE",
    "city": "Muenster"
  },
  {
    "code": "BMY",
    "country_code": "NC",
    "city": "Belep Island"
  },
  {
    "code": "DRF",
    "country_code": "US",
    "city": "Drift River"
  },
  {
    "code": "BYS",
    "country_code": "US",
    "city": "Fort Irwin"
  },
  {
    "code": "UZU",
    "country_code": "AR",
    "city": "Curuzu Cuatia"
  },
  {
    "code": "DSE",
    "country_code": "ET",
    "city": "Dessie"
  },
  {
    "code": "NRE",
    "country_code": "ID",
    "city": "Namrole"
  },
  {
    "code": "PTM",
    "country_code": "VE",
    "city": "Palmarito"
  },
  {
    "code": "OCF",
    "country_code": "US",
    "city": "Ocala"
  },
  {
    "code": "ZIC",
    "country_code": "CL",
    "city": "Victoria"
  },
  {
    "code": "OSA",
    "country_code": "JP",
    "city": "Osaka"
  },
  {
    "code": "MEZ",
    "country_code": "ZA",
    "city": "Musina"
  },
  {
    "code": "PMB",
    "country_code": "US",
    "city": "Pembina"
  },
  {
    "code": "NHV",
    "country_code": "PF",
    "city": "Nuku Hiva"
  },
  {
    "code": "BKM",
    "country_code": "MY",
    "city": "Bakalalan"
  },
  {
    "code": "GPI",
    "country_code": "CO",
    "city": "Guapi"
  },
  {
    "code": "MOO",
    "country_code": "AU",
    "city": "Moomba"
  },
  {
    "code": "PBH",
    "country_code": "BT",
    "city": "Paro"
  },
  {
    "code": "GYR",
    "country_code": "US",
    "city": "Goodyear"
  },
  {
    "code": "AMN",
    "country_code": "US",
    "city": "Alma"
  },
  {
    "code": "OLS",
    "country_code": "US",
    "city": "Nogales"
  },
  {
    "code": "FMS",
    "country_code": "US",
    "city": "Fort Madison"
  },
  {
    "code": "CBZ",
    "country_code": "US",
    "city": "Cabin Creek"
  },
  {
    "code": "LZI",
    "country_code": "CD",
    "city": "Luozi"
  },
  {
    "code": "TSW",
    "country_code": "PG",
    "city": "Tsewi"
  },
  {
    "code": "YGG",
    "country_code": "CA",
    "city": "Ganges Harbor"
  },
  {
    "code": "BRM",
    "country_code": "VE",
    "city": "Barquisimeto"
  },
  {
    "code": "SXM",
    "country_code": "SX",
    "city": "Sint Maarten"
  },
  {
    "code": "UAC",
    "country_code": "MX",
    "city": "San Luis Rio Colorado"
  },
  {
    "code": "BPY",
    "country_code": "MG",
    "city": "Besalampy"
  },
  {
    "code": "NDC",
    "country_code": "IN",
    "city": "Nanded"
  },
  {
    "code": "YXT",
    "country_code": "CA",
    "city": "Terrace"
  },
  {
    "code": "FTX",
    "country_code": "CG",
    "city": "Owando"
  },
  {
    "code": "WAG",
    "country_code": "NZ",
    "city": "Wanganui"
  },
  {
    "code": "XDU",
    "country_code": "CA",
    "city": "Hervey"
  },
  {
    "code": "SXK",
    "country_code": "ID",
    "city": "Saumlaki"
  },
  {
    "code": "GLB",
    "country_code": "US",
    "city": "Globe"
  },
  {
    "code": "YCR",
    "country_code": "CA",
    "city": "Cross Lake"
  },
  {
    "code": "QUY",
    "country_code": "GB",
    "city": "Wyton"
  },
  {
    "code": "XLV",
    "country_code": "CA",
    "city": "Niagara Falls"
  },
  {
    "code": "OSD",
    "country_code": "SE",
    "city": "Ostersund"
  },
  {
    "code": "QUL",
    "country_code": "DE",
    "city": "Ulm"
  },
  {
    "code": "SQV",
    "country_code": "US",
    "city": "Sequim"
  },
  {
    "code": "AEL",
    "country_code": "US",
    "city": "Albert Lea"
  },
  {
    "code": "NQU",
    "country_code": "CO",
    "city": "Nuqui"
  },
  {
    "code": "JNX",
    "country_code": "GR",
    "city": "Naxos, Cyclades Islands"
  },
  {
    "code": "SIC",
    "country_code": "PA",
    "city": "Sinop"
  },
  {
    "code": "EGV",
    "country_code": "US",
    "city": "Eagle River"
  },
  {
    "code": "BMZ",
    "country_code": "PG",
    "city": "Bamu"
  },
  {
    "code": "PJM",
    "country_code": "CR",
    "city": "Puerto Jimenez"
  },
  {
    "code": "VXE",
    "country_code": "CV",
    "city": "Sao Vicente"
  },
  {
    "code": "SRX",
    "country_code": "LY",
    "city": "Sert"
  },
  {
    "code": "ODA",
    "country_code": "CF",
    "city": "Ouadda"
  },
  {
    "code": "AKN",
    "country_code": "US",
    "city": "King Salmon"
  },
  {
    "code": "CMZ",
    "country_code": "MZ",
    "city": "Caia"
  },
  {
    "code": "WLA",
    "country_code": "AU",
    "city": "Wallal"
  },
  {
    "code": "HDR",
    "country_code": "IR",
    "city": "Havadarya"
  },
  {
    "code": "JAA",
    "country_code": "AF",
    "city": "Jalalabad"
  },
  {
    "code": "IEV",
    "country_code": "UA",
    "city": "Kyiv"
  },
  {
    "code": "YPB",
    "country_code": "CA",
    "city": "Port Alberni"
  },
  {
    "code": "MTH",
    "country_code": "US",
    "city": "Marathon"
  },
  {
    "code": "XWQ",
    "country_code": "SE",
    "city": "Enkoping"
  },
  {
    "code": "PYM",
    "country_code": "US",
    "city": "Plymouth"
  },
  {
    "code": "TBW",
    "country_code": "RU",
    "city": "Tambov"
  },
  {
    "code": "KUA",
    "country_code": "MY",
    "city": "Kuantan"
  },
  {
    "code": "OAJ",
    "country_code": "US",
    "city": "Richlands"
  },
  {
    "code": "OWD",
    "country_code": "US",
    "city": "Norwood"
  },
  {
    "code": "DER",
    "country_code": "PG",
    "city": "Derim"
  },
  {
    "code": "МИЛ",
    "country_code": "RU",
    "city": "Manily"
  },
  {
    "code": "KKG",
    "country_code": "GY",
    "city": "Konawaruk"
  },
  {
    "code": "TPG",
    "country_code": "MY",
    "city": "Taiping"
  },
  {
    "code": "ZKS",
    "country_code": "CH",
    "city": "Solothurn"
  },
  {
    "code": "GLX",
    "country_code": "ID",
    "city": "Galela"
  },
  {
    "code": "PMK",
    "country_code": "AU",
    "city": "Palm Island"
  },
  {
    "code": "CPT",
    "country_code": "ZA",
    "city": "Cape Town"
  },
  {
    "code": "DED",
    "country_code": "IN",
    "city": "Dehra Dun"
  },
  {
    "code": "MWY",
    "country_code": "AU",
    "city": "Miranda Downs"
  },
  {
    "code": "IXL",
    "country_code": "IN",
    "city": "Leh"
  },
  {
    "code": "YMA",
    "country_code": "CA",
    "city": "Mayo"
  },
  {
    "code": "LTT",
    "country_code": "FR",
    "city": "Saint Tropez"
  },
  {
    "code": "FFM",
    "country_code": "US",
    "city": "Fergus Falls"
  },
  {
    "code": "ISN",
    "country_code": "US",
    "city": "Williston"
  },
  {
    "code": "KOI",
    "country_code": "GB",
    "city": "Kirkwall"
  },
  {
    "code": "HHQ",
    "country_code": "TH",
    "city": "Hua Hin"
  },
  {
    "code": "GUQ",
    "country_code": "VE",
    "city": "Guanare"
  },
  {
    "code": "ELX",
    "country_code": "VE",
    "city": "El Tigre"
  },
  {
    "code": "BOD",
    "country_code": "FR",
    "city": "Bordeaux"
  },
  {
    "code": "GDP",
    "country_code": "BR",
    "city": "Guadalupe"
  },
  {
    "code": "LMR",
    "country_code": "ZA",
    "city": "Lime Acres"
  },
  {
    "code": "UTB",
    "country_code": "AU",
    "city": "Muttaburra"
  },
  {
    "code": "ELL",
    "country_code": "ZA",
    "city": "Ellisras"
  },
  {
    "code": "KYK",
    "country_code": "US",
    "city": "Karluk"
  },
  {
    "code": "ANI",
    "country_code": "US",
    "city": "Aniak"
  },
  {
    "code": "KDW",
    "country_code": "LK",
    "city": "Kandy"
  },
  {
    "code": "PSV",
    "country_code": "GB",
    "city": "Papa Stour"
  },
  {
    "code": "DCK",
    "country_code": "US",
    "city": "Dahl Creek"
  },
  {
    "code": "SXQ",
    "country_code": "US",
    "city": "Soldotna"
  },
  {
    "code": "TRP",
    "country_code": "US",
    "city": "Tree Point"
  },
  {
    "code": "RVE",
    "country_code": "CO",
    "city": "Saravena"
  },
  {
    "code": "OSH",
    "country_code": "US",
    "city": "Oshkosh"
  },
  {
    "code": "MOX",
    "country_code": "US",
    "city": "Morris"
  },
  {
    "code": "BAC",
    "country_code": "CO",
    "city": "Barranca De Upia"
  },
  {
    "code": "АХЗ",
    "country_code": "RU",
    "city": "Arkhyz"
  },
  {
    "code": "CJC",
    "country_code": "CL",
    "city": "Calama"
  },
  {
    "code": "MXN",
    "country_code": "FR",
    "city": "Morlaix"
  },
  {
    "code": "ВМП",
    "country_code": "RU",
    "city": "Vampugolsk"
  },
  {
    "code": "RDV",
    "country_code": "US",
    "city": "Red Devil"
  },
  {
    "code": "AMG",
    "country_code": "PG",
    "city": "Amboin"
  },
  {
    "code": "YDX",
    "country_code": "CA",
    "city": "Doc Creek"
  },
  {
    "code": "BBN",
    "country_code": "MY",
    "city": "Bario"
  },
  {
    "code": "ACI",
    "country_code": "GB",
    "city": "Alderney"
  },
  {
    "code": "VAG",
    "country_code": "BR",
    "city": "Varginha"
  },
  {
    "code": "LDX",
    "country_code": "GF",
    "city": "St Laurent du Maroni"
  },
  {
    "code": "KKP",
    "country_code": "AU",
    "city": "Koolburra"
  },
  {
    "code": "MGZ",
    "country_code": "MM",
    "city": "Myeik"
  },
  {
    "code": "FDU",
    "country_code": "CD",
    "city": "Bandundu"
  },
  {
    "code": "BFX",
    "country_code": "CM",
    "city": "Bafoussam"
  },
  {
    "code": "DYA",
    "country_code": "AU",
    "city": "Dysart"
  },
  {
    "code": "RFN",
    "country_code": "IS",
    "city": "Raufarhofn"
  },
  {
    "code": "HEB",
    "country_code": "MM",
    "city": "Henzada"
  },
  {
    "code": "ILH",
    "country_code": "DE",
    "city": "Illisheim"
  },
  {
    "code": "YMG",
    "country_code": "CA",
    "city": "Manitouwadge"
  },
  {
    "code": "OLP",
    "country_code": "AU",
    "city": "Olympic Dam"
  },
  {
    "code": "ZDZ",
    "country_code": "CH",
    "city": "Einsiedeln"
  },
  {
    "code": "TCA",
    "country_code": "AU",
    "city": "Tennant Creek"
  },
  {
    "code": "GEX",
    "country_code": "AU",
    "city": "Geelong"
  },
  {
    "code": "DIN",
    "country_code": "VN",
    "city": "Dien Bien Phu"
  },
  {
    "code": "CTY",
    "country_code": "US",
    "city": "Cross City"
  },
  {
    "code": "AED",
    "country_code": "US",
    "city": "Aleneva"
  },
  {
    "code": "TWA",
    "country_code": "US",
    "city": "Twin Hills"
  },
  {
    "code": "SWO",
    "country_code": "US",
    "city": "Stillwater"
  },
  {
    "code": "SMP",
    "country_code": "PG",
    "city": "Stockholm"
  },
  {
    "code": "SYP",
    "country_code": "PA",
    "city": "Santiago"
  },
  {
    "code": "PPI",
    "country_code": "AU",
    "city": "Port Pirie"
  },
  {
    "code": "CZP",
    "country_code": "US",
    "city": "Cape Pole"
  },
  {
    "code": "CZA",
    "country_code": "MX",
    "city": "Chichen Itza"
  },
  {
    "code": "NOB",
    "country_code": "CR",
    "city": "Nosara Beach"
  },
  {
    "code": "SAY",
    "country_code": "IT",
    "city": "Siena"
  },
  {
    "code": "BIK",
    "country_code": "ID",
    "city": "Biak"
  },
  {
    "code": "RDZ",
    "country_code": "FR",
    "city": "Rodez"
  },
  {
    "code": "JAM",
    "country_code": "BG",
    "city": "Jambol"
  },
  {
    "code": "ICO",
    "country_code": "PH",
    "city": "Sicogon Island"
  },
  {
    "code": "OAG",
    "country_code": "AU",
    "city": "Orange"
  },
  {
    "code": "KAW",
    "country_code": "MM",
    "city": "Kawthaung"
  },
  {
    "code": "СМЧ",
    "country_code": "RU",
    "city": "Seymchan"
  },
  {
    "code": "AOC",
    "country_code": "DE",
    "city": "Altenburg"
  },
  {
    "code": "VEG",
    "country_code": "GY",
    "city": "Maikwak"
  },
  {
    "code": "NJA",
    "country_code": "JP",
    "city": "Atsugi"
  },
  {
    "code": "KVU",
    "country_code": "FJ",
    "city": "Korolevu"
  },
  {
    "code": "CYO",
    "country_code": "CU",
    "city": "Cayo Largo Del Sur"
  },
  {
    "code": "ONR",
    "country_code": "AU",
    "city": "Monkira"
  },
  {
    "code": "HKY",
    "country_code": "US",
    "city": "Hickory"
  },
  {
    "code": "SPU",
    "country_code": "HR",
    "city": "Split"
  },
  {
    "code": "BJF",
    "country_code": "NO",
    "city": "Batsfjord"
  },
  {
    "code": "XAQ",
    "country_code": "DK",
    "city": "Bronderslev"
  },
  {
    "code": "KRD",
    "country_code": "AU",
    "city": "Kurundi"
  },
  {
    "code": "YGX",
    "country_code": "CA",
    "city": "Gillam"
  },
  {
    "code": "ZDQ",
    "country_code": "CH",
    "city": "Champery"
  },
  {
    "code": "BJK",
    "country_code": "ID",
    "city": "Benjina"
  },
  {
    "code": "DNR",
    "country_code": "FR",
    "city": "Dinard"
  },
  {
    "code": "OEA",
    "country_code": "US",
    "city": "Vincennes"
  },
  {
    "code": "TOO",
    "country_code": "CR",
    "city": "San Vito"
  },
  {
    "code": "LYK",
    "country_code": "ID",
    "city": "Lunyuk"
  },
  {
    "code": "SXP",
    "country_code": "US",
    "city": "Sheldon Point"
  },
  {
    "code": "SLQ",
    "country_code": "US",
    "city": "Sleetmute"
  },
  {
    "code": "RRK",
    "country_code": "IN",
    "city": "Rourkela"
  },
  {
    "code": "XCO",
    "country_code": "AU",
    "city": "Colac"
  },
  {
    "code": "SUN",
    "country_code": "US",
    "city": "Sun Valley"
  },
  {
    "code": "LKR",
    "country_code": "SO",
    "city": "Las Khorey"
  },
  {
    "code": "BGJ",
    "country_code": "IS",
    "city": "Borgarfjordur Eystri"
  },
  {
    "code": "AOJ",
    "country_code": "JP",
    "city": "Aomori"
  },
  {
    "code": "YXF",
    "country_code": "CA",
    "city": "Snake River"
  },
  {
    "code": "PSC",
    "country_code": "US",
    "city": "Pasco"
  },
  {
    "code": "GRV",
    "country_code": "RU",
    "city": "Groznyy"
  },
  {
    "code": "PPR",
    "country_code": "ID",
    "city": "Pasir Pangarayan"
  },
  {
    "code": "ONE",
    "country_code": "SB",
    "city": "Onepusu"
  },
  {
    "code": "BXU",
    "country_code": "PH",
    "city": "Butuan"
  },
  {
    "code": "TOB",
    "country_code": "LY",
    "city": "Tobruk"
  },
  {
    "code": "DOG",
    "country_code": "SD",
    "city": "Dongola"
  },
  {
    "code": "NMT",
    "country_code": "MM",
    "city": "Namtu"
  },
  {
    "code": "LAB",
    "country_code": "PG",
    "city": "Lablab"
  },
  {
    "code": "PCJ",
    "country_code": "PY",
    "city": "Puerto La Victoria"
  },
  {
    "code": "ERN",
    "country_code": "BR",
    "city": "Eirunepe"
  },
  {
    "code": "RUU",
    "country_code": "PG",
    "city": "Ruti"
  },
  {
    "code": "JUT",
    "country_code": "HN",
    "city": "Juticalpa"
  },
  {
    "code": "HLG",
    "country_code": "US",
    "city": "Wheeling"
  },
  {
    "code": "YOD",
    "country_code": "CA",
    "city": "Cold Lake"
  },
  {
    "code": "LME",
    "country_code": "FR",
    "city": "Le Mans"
  },
  {
    "code": "EPR",
    "country_code": "AU",
    "city": "Esperance"
  },
  {
    "code": "MDX",
    "country_code": "AR",
    "city": "Mercedes"
  },
  {
    "code": "IBB",
    "country_code": "EC",
    "city": "Isabela Island"
  },
  {
    "code": "MIW",
    "country_code": "US",
    "city": "Marshalltown"
  },
  {
    "code": "XAL",
    "country_code": "MX",
    "city": "Alamos"
  },
  {
    "code": "KMN",
    "country_code": "CD",
    "city": "Kamina"
  },
  {
    "code": "VPG",
    "country_code": "KE",
    "city": "Vipingo"
  },
  {
    "code": "MBM",
    "country_code": "ZA",
    "city": "Mkambati"
  },
  {
    "code": "MNY",
    "country_code": "SB",
    "city": "Mono"
  },
  {
    "code": "BJJ",
    "country_code": "US",
    "city": "Wooster"
  },
  {
    "code": "GRT",
    "country_code": "PK",
    "city": "Gujrat"
  },
  {
    "code": "YPE",
    "country_code": "CA",
    "city": "Peace River"
  },
  {
    "code": "MWJ",
    "country_code": "GY",
    "city": "Matthews Ridge"
  },
  {
    "code": "KBI",
    "country_code": "CM",
    "city": "Kribi"
  },
  {
    "code": "XAZ",
    "country_code": "CA",
    "city": "Campbellton"
  },
  {
    "code": "ZTB",
    "country_code": "CA",
    "city": "Tete-a-La Baleine"
  },
  {
    "code": "MBE",
    "country_code": "JP",
    "city": "Monbetsu"
  },
  {
    "code": "STX",
    "country_code": "VI",
    "city": "Saint Croix"
  },
  {
    "code": "QLJ",
    "country_code": "CH",
    "city": "Lucerne"
  },
  {
    "code": "CIO",
    "country_code": "PY",
    "city": "Concepcion"
  },
  {
    "code": "FEG",
    "country_code": "UZ",
    "city": "Fergana"
  },
  {
    "code": "BST",
    "country_code": "AF",
    "city": "Bost"
  },
  {
    "code": "BCH",
    "country_code": "TL",
    "city": "Baucau"
  },
  {
    "code": "WAM",
    "country_code": "MG",
    "city": "Ambatondrazaka"
  },
  {
    "code": "САГ",
    "country_code": "RU",
    "city": "Sangar"
  },
  {
    "code": "XUX",
    "country_code": "NO",
    "city": "Ustaoset"
  },
  {
    "code": "QSC",
    "country_code": "BR",
    "city": "Sao Carlos"
  },
  {
    "code": "MJZ",
    "country_code": "RU",
    "city": "Mirnyj"
  },
  {
    "code": "XAJ",
    "country_code": "DK",
    "city": "Hirtshals"
  },
  {
    "code": "GTC",
    "country_code": "BS",
    "city": "Green Turtle"
  },
  {
    "code": "OLE",
    "country_code": "US",
    "city": "Olean"
  },
  {
    "code": "NIR",
    "country_code": "US",
    "city": "Beeville"
  },
  {
    "code": "PCD",
    "country_code": "US",
    "city": "Prairie Du Chien"
  },
  {
    "code": "VPY",
    "country_code": "MZ",
    "city": "Chimoio"
  },
  {
    "code": "ASN",
    "country_code": "US",
    "city": "Talladega"
  },
  {
    "code": "MCH",
    "country_code": "EC",
    "city": "Machala"
  },
  {
    "code": "IGO",
    "country_code": "CO",
    "city": "Chigorodo"
  },
  {
    "code": "BGK",
    "country_code": "BZ",
    "city": "Big Creek"
  },
  {
    "code": "TKO",
    "country_code": "LS",
    "city": "Tlokoeng"
  },
  {
    "code": "MSX",
    "country_code": "CG",
    "city": "Mossendjo"
  },
  {
    "code": "YKH",
    "country_code": "CN",
    "city": "Yingkou"
  },
  {
    "code": "LOM",
    "country_code": "MX",
    "city": "Lagos De Moreno"
  },
  {
    "code": "TDP",
    "country_code": "PE",
    "city": "Trompeteros"
  },
  {
    "code": "EHL",
    "country_code": "AR",
    "city": "El Bolson"
  },
  {
    "code": "YWR",
    "country_code": "CA",
    "city": "White River"
  },
  {
    "code": "OOA",
    "country_code": "US",
    "city": "Oskaloosa"
  },
  {
    "code": "AOH",
    "country_code": "US",
    "city": "Lima"
  },
  {
    "code": "GDG",
    "country_code": "RU",
    "city": "Magdagachi"
  },
  {
    "code": "USM",
    "country_code": "TH",
    "city": "Koh Samui"
  },
  {
    "code": "KRF",
    "country_code": "SE",
    "city": "Kramfors"
  },
  {
    "code": "BSK",
    "country_code": "DZ",
    "city": "Biskra"
  },
  {
    "code": "OLH",
    "country_code": "US",
    "city": "Old Harbor"
  },
  {
    "code": "SFH",
    "country_code": "MX",
    "city": "San Felipe"
  },
  {
    "code": "GOJ",
    "country_code": "RU",
    "city": "Nizhniy Novgorod"
  },
  {
    "code": "BRJ",
    "country_code": "AU",
    "city": "Bright"
  },
  {
    "code": "JJD",
    "country_code": "BR",
    "city": "Jericoacoara"
  },
  {
    "code": "YSL",
    "country_code": "CA",
    "city": "St Leonard"
  },
  {
    "code": "IRP",
    "country_code": "CD",
    "city": "Isiro"
  },
  {
    "code": "CAL",
    "country_code": "GB",
    "city": "Campbeltown"
  },
  {
    "code": "WRZ",
    "country_code": "LK",
    "city": "Wirawila"
  },
  {
    "code": "TFU",
    "country_code": "CN",
    "city": "Chengdu"
  },
  {
    "code": "QPA",
    "country_code": "IT",
    "city": "Padova"
  },
  {
    "code": "YIN",
    "country_code": "CN",
    "city": "Yining"
  },
  {
    "code": "PIT",
    "country_code": "US",
    "city": "Pittsburgh"
  },
  {
    "code": "XFI",
    "country_code": "CA",
    "city": "Port-Daniel"
  },
  {
    "code": "ANK",
    "country_code": "TR",
    "city": "Ankara"
  },
  {
    "code": "UKU",
    "country_code": "PG",
    "city": "Nuku"
  },
  {
    "code": "ZDB",
    "country_code": "CH",
    "city": "Adelboden"
  },
  {
    "code": "PPM",
    "country_code": "US",
    "city": "Pompano Beach"
  },
  {
    "code": "BJQ",
    "country_code": "OM",
    "city": "Bahja"
  },
  {
    "code": "KED",
    "country_code": "MR",
    "city": "Kaedi"
  },
  {
    "code": "IHC",
    "country_code": "MZ",
    "city": "Inhaca"
  },
  {
    "code": "FRR",
    "country_code": "US",
    "city": "Front Royal"
  },
  {
    "code": "ZDK",
    "country_code": "CH",
    "city": "Biel/Bienne"
  },
  {
    "code": "SIB",
    "country_code": "CG",
    "city": "Sibiti"
  },
  {
    "code": "GII",
    "country_code": "GN",
    "city": "Siguiri"
  },
  {
    "code": "URO",
    "country_code": "FR",
    "city": "Rouen"
  },
  {
    "code": "OUZ",
    "country_code": "MR",
    "city": "Zouerate"
  },
  {
    "code": "JNA",
    "country_code": "BR",
    "city": "Januaria"
  },
  {
    "code": "SCG",
    "country_code": "AU",
    "city": "Spring Creek"
  },
  {
    "code": "TNL",
    "country_code": "UA",
    "city": "Ternopol"
  },
  {
    "code": "XED",
    "country_code": "FR",
    "city": "Disneyland Paris"
  },
  {
    "code": "ASM",
    "country_code": "ER",
    "city": "Asmara"
  },
  {
    "code": "LIT",
    "country_code": "US",
    "city": "Little Rock"
  },
  {
    "code": "SKK",
    "country_code": "US",
    "city": "Shaktoolik"
  },
  {
    "code": "PYS",
    "country_code": "US",
    "city": "Paradise"
  },
  {
    "code": "ZLD",
    "country_code": "CH",
    "city": "Weinfelden"
  },
  {
    "code": "RER",
    "country_code": "GT",
    "city": "Retalhuleu"
  },
  {
    "code": "CIR",
    "country_code": "US",
    "city": "Cairo"
  },
  {
    "code": "OLY",
    "country_code": "US",
    "city": "Olney"
  },
  {
    "code": "NTL",
    "country_code": "AU",
    "city": "Newcastle"
  },
  {
    "code": "CTB",
    "country_code": "US",
    "city": "Cut Bank"
  },
  {
    "code": "MMB",
    "country_code": "JP",
    "city": "Memanbetsu"
  },
  {
    "code": "KLO",
    "country_code": "PH",
    "city": "Kalibo"
  },
  {
    "code": "HNG",
    "country_code": "NC",
    "city": "Hienghene"
  },
  {
    "code": "GUY",
    "country_code": "US",
    "city": "Guymon"
  },
  {
    "code": "ILR",
    "country_code": "NG",
    "city": "Ilorin"
  },
  {
    "code": "TBT",
    "country_code": "BR",
    "city": "Tabatinga"
  },
  {
    "code": "OUT",
    "country_code": "TD",
    "city": "Bousso"
  },
  {
    "code": "OKP",
    "country_code": "PG",
    "city": "Oksapmin"
  },
  {
    "code": "BPN",
    "country_code": "ID",
    "city": "Balikpapan"
  },
  {
    "code": "CEN",
    "country_code": "MX",
    "city": "Ciudad Obregon"
  },
  {
    "code": "ULH",
    "country_code": "SA",
    "city": "Al Ula"
  },
  {
    "code": "MJG",
    "country_code": "CU",
    "city": "Mayajigua"
  },
  {
    "code": "ZSO",
    "country_code": "DE",
    "city": "Suhl"
  },
  {
    "code": "TTO",
    "country_code": "US",
    "city": "Britton"
  },
  {
    "code": "TLK",
    "country_code": "RU",
    "city": "Talakan"
  },
  {
    "code": "LNR",
    "country_code": "US",
    "city": "Lone Rock"
  },
  {
    "code": "LMY",
    "country_code": "PG",
    "city": "Lake Murray"
  },
  {
    "code": "BET",
    "country_code": "US",
    "city": "Bethel"
  },
  {
    "code": "XPN",
    "country_code": "CA",
    "city": "Brampton"
  },
  {
    "code": "SKL",
    "country_code": "GB",
    "city": "Isle Of Skye"
  },
  {
    "code": "UES",
    "country_code": "US",
    "city": "Waukesha"
  },
  {
    "code": "TLN",
    "country_code": "FR",
    "city": "Toulon"
  },
  {
    "code": "PZE",
    "country_code": "GB",
    "city": "Penzance"
  },
  {
    "code": "LNG",
    "country_code": "PG",
    "city": "Lese"
  },
  {
    "code": "PEY",
    "country_code": "AU",
    "city": "Penong"
  },
  {
    "code": "LYP",
    "country_code": "PK",
    "city": "Faisalabad"
  },
  {
    "code": "BSF",
    "country_code": "US",
    "city": "Pohakuloa"
  },
  {
    "code": "CPO",
    "country_code": "CL",
    "city": "Copiapo"
  },
  {
    "code": "ASY",
    "country_code": "US",
    "city": "Ashley"
  },
  {
    "code": "YTU",
    "country_code": "CA",
    "city": "Tasu"
  },
  {
    "code": "YYC",
    "country_code": "CA",
    "city": "Calgary"
  },
  {
    "code": "YHC",
    "country_code": "CA",
    "city": "Hakai Pass"
  },
  {
    "code": "ACK",
    "country_code": "US",
    "city": "Nantucket"
  },
  {
    "code": "OHC",
    "country_code": "US",
    "city": "Northeast Cape"
  },
  {
    "code": "BHF",
    "country_code": "CO",
    "city": "Bahia Cupica"
  },
  {
    "code": "BXG",
    "country_code": "AU",
    "city": "Bendigo"
  },
  {
    "code": "BFV",
    "country_code": "TH",
    "city": "Buri Ram"
  },
  {
    "code": "MGX",
    "country_code": "GA",
    "city": "Moabi"
  },
  {
    "code": "WPL",
    "country_code": "CA",
    "city": "Powell Lake"
  },
  {
    "code": "XNK",
    "country_code": "GB",
    "city": "Newark"
  },
  {
    "code": "CPC",
    "country_code": "AR",
    "city": "San Martin De Los Andes"
  },
  {
    "code": "HPT",
    "country_code": "US",
    "city": "Hampton"
  },
  {
    "code": "UIH",
    "country_code": "VN",
    "city": "Qui Nhon"
  },
  {
    "code": "EDO",
    "country_code": "TR",
    "city": "Edremit"
  },
  {
    "code": "URN",
    "country_code": "AF",
    "city": "Urgoon"
  },
  {
    "code": "JCH",
    "country_code": "GL",
    "city": "Qasigiannguit"
  },
  {
    "code": "TMC",
    "country_code": "ID",
    "city": "Tambolaka"
  },
  {
    "code": "WMX",
    "country_code": "ID",
    "city": "Wamena"
  },
  {
    "code": "BUY",
    "country_code": "AU",
    "city": "Bunbury"
  },
  {
    "code": "BLJ",
    "country_code": "DZ",
    "city": "Batna"
  },
  {
    "code": "SRT",
    "country_code": "UG",
    "city": "Soroti"
  },
  {
    "code": "TIN",
    "country_code": "DZ",
    "city": "Tindouf"
  },
  {
    "code": "TIP",
    "country_code": "LY",
    "city": "Tripoli"
  },
  {
    "code": "OSL",
    "country_code": "NO",
    "city": "Oslo"
  },
  {
    "code": "EMK",
    "country_code": "US",
    "city": "Emmonak"
  },
  {
    "code": "SSI",
    "country_code": "US",
    "city": "Brunswick"
  },
  {
    "code": "XAI",
    "country_code": "CN",
    "city": "Xinyang"
  },
  {
    "code": "ORA",
    "country_code": "AR",
    "city": "Oran"
  },
  {
    "code": "RBN",
    "country_code": "US",
    "city": "Fort Jefferson"
  },
  {
    "code": "KRA",
    "country_code": "AU",
    "city": "Kerang"
  },
  {
    "code": "CJS",
    "country_code": "MX",
    "city": "Ciudad Juarez"
  },
  {
    "code": "ZJQ",
    "country_code": "CH",
    "city": "Morges"
  },
  {
    "code": "OXF",
    "country_code": "GB",
    "city": "Oxford"
  },
  {
    "code": "KEJ",
    "country_code": "RU",
    "city": "Kemerovo"
  },
  {
    "code": "MEQ",
    "country_code": "ID",
    "city": "Meulaboh"
  },
  {
    "code": "TMA",
    "country_code": "US",
    "city": "Tifton"
  },
  {
    "code": "IDG",
    "country_code": "US",
    "city": "Ida Grove"
  },
  {
    "code": "POO",
    "country_code": "BR",
    "city": "Pocos De Caldas"
  },
  {
    "code": "RUF",
    "country_code": "ID",
    "city": "Yuruf"
  },
  {
    "code": "BNR",
    "country_code": "BF",
    "city": "Banfora"
  },
  {
    "code": "DNN",
    "country_code": "US",
    "city": "Dalton"
  },
  {
    "code": "XKF",
    "country_code": "NO",
    "city": "Fredrikstad"
  },
  {
    "code": "KGA",
    "country_code": "CD",
    "city": "Kananga"
  },
  {
    "code": "PDG",
    "country_code": "ID",
    "city": "Padang"
  },
  {
    "code": "RMT",
    "country_code": "PF",
    "city": "Rimatara"
  },
  {
    "code": "XAR",
    "country_code": "BF",
    "city": "Aribinda"
  },
  {
    "code": "LIH",
    "country_code": "US",
    "city": "Kauai Island"
  },
  {
    "code": "MKY",
    "country_code": "AU",
    "city": "Mackay"
  },
  {
    "code": "AGG",
    "country_code": "PG",
    "city": "Angoram"
  },
  {
    "code": "EYS",
    "country_code": "KE",
    "city": "Eliye Springs"
  },
  {
    "code": "UTA",
    "country_code": "ZW",
    "city": "Mutare"
  },
  {
    "code": "NBH",
    "country_code": "AU",
    "city": "Nambucca Heads"
  },
  {
    "code": "ULE",
    "country_code": "PG",
    "city": "Sule"
  },
  {
    "code": "ZHE",
    "country_code": "CH",
    "city": "Frauenfeld"
  },
  {
    "code": "TIW",
    "country_code": "US",
    "city": "Tacoma"
  },
  {
    "code": "AZS",
    "country_code": "DO",
    "city": "El Catey"
  },
  {
    "code": "MCN",
    "country_code": "US",
    "city": "Macon"
  },
  {
    "code": "RSI",
    "country_code": "PA",
    "city": "Rio Sidra"
  },
  {
    "code": "PNY",
    "country_code": "IN",
    "city": "Pondicherry"
  },
  {
    "code": "WOA",
    "country_code": "PG",
    "city": "Wonenara"
  },
  {
    "code": "BAI",
    "country_code": "CR",
    "city": "Buenos Aires"
  },
  {
    "code": "GOG",
    "country_code": "NA",
    "city": "Gobabis"
  },
  {
    "code": "GEL",
    "country_code": "BR",
    "city": "Santo Angelo"
  },
  {
    "code": "BQI",
    "country_code": "NA",
    "city": "Bagani"
  },
  {
    "code": "BXO",
    "country_code": "CH",
    "city": "Buochs"
  },
  {
    "code": "EAR",
    "country_code": "US",
    "city": "Kearney"
  },
  {
    "code": "KMH",
    "country_code": "ZA",
    "city": "Kuruman"
  },
  {
    "code": "APF",
    "country_code": "US",
    "city": "Naples"
  },
  {
    "code": "NTX",
    "country_code": "ID",
    "city": "Natuna Ranai"
  },
  {
    "code": "КСВ",
    "country_code": "RU",
    "city": "Kislovodsk"
  },
  {
    "code": "OSO",
    "country_code": "AU",
    "city": "Osborne Mine"
  },
  {
    "code": "MNZ",
    "country_code": "US",
    "city": "Manassas"
  },
  {
    "code": "TBV",
    "country_code": "MH",
    "city": "Tabal"
  },
  {
    "code": "RMK",
    "country_code": "AU",
    "city": "Renmark"
  },
  {
    "code": "MRG",
    "country_code": "AU",
    "city": "Mareeba"
  },
  {
    "code": "LBT",
    "country_code": "US",
    "city": "Lumberton"
  },
  {
    "code": "SVD",
    "country_code": "VC",
    "city": "Saint Vincent"
  },
  {
    "code": "ERF",
    "country_code": "DE",
    "city": "Erfurt"
  },
  {
    "code": "WYB",
    "country_code": "US",
    "city": "Yes Bay"
  },
  {
    "code": "CXN",
    "country_code": "SO",
    "city": "Candala"
  },
  {
    "code": "XYF",
    "country_code": "SE",
    "city": "Falkoping"
  },
  {
    "code": "BPS",
    "country_code": "BR",
    "city": "Porto Seguro"
  },
  {
    "code": "CBL",
    "country_code": "VE",
    "city": "Ciudad Bolivar"
  },
  {
    "code": "YKL",
    "country_code": "CA",
    "city": "Schefferville"
  },
  {
    "code": "NNT",
    "country_code": "TH",
    "city": "Nan"
  },
  {
    "code": "QJY",
    "country_code": "PL",
    "city": "Kolobrzeg"
  },
  {
    "code": "PTQ",
    "country_code": "BR",
    "city": "Porto de Moz"
  },
  {
    "code": "TZO",
    "country_code": "MG",
    "city": "Ankisatra"
  },
  {
    "code": "VRN",
    "country_code": "IT",
    "city": "Verona"
  },
  {
    "code": "FRB",
    "country_code": "AU",
    "city": "Forbes"
  },
  {
    "code": "COT",
    "country_code": "US",
    "city": "Cotulla"
  },
  {
    "code": "AXN",
    "country_code": "US",
    "city": "Alexandria"
  },
  {
    "code": "TSB",
    "country_code": "NA",
    "city": "Tsumeb"
  },
  {
    "code": "CIL",
    "country_code": "US",
    "city": "Council"
  },
  {
    "code": "DUT",
    "country_code": "US",
    "city": "Dutch Harbor"
  },
  {
    "code": "XFH",
    "country_code": "SE",
    "city": "Strangnas"
  },
  {
    "code": "BCB",
    "country_code": "US",
    "city": "Blacksburg"
  },
  {
    "code": "SOE",
    "country_code": "CG",
    "city": "Souanke"
  },
  {
    "code": "KHE",
    "country_code": "UA",
    "city": "Kherson"
  },
  {
    "code": "YHZ",
    "country_code": "CA",
    "city": "Halifax"
  },
  {
    "code": "CEC",
    "country_code": "US",
    "city": "Crescent City"
  },
  {
    "code": "PFB",
    "country_code": "BR",
    "city": "Passo Fundo"
  },
  {
    "code": "MGE",
    "country_code": "US",
    "city": "Marietta"
  },
  {
    "code": "RGH",
    "country_code": "IN",
    "city": "Balurghat"
  },
  {
    "code": "SDZ",
    "country_code": "GB",
    "city": "Shetland Islands"
  },
  {
    "code": "LBA",
    "country_code": "GB",
    "city": "Leeds"
  },
  {
    "code": "HFE",
    "country_code": "CN",
    "city": "Hefei"
  },
  {
    "code": "IPW",
    "country_code": "GB",
    "city": "Ipswich"
  },
  {
    "code": "BDG",
    "country_code": "US",
    "city": "Blanding"
  },
  {
    "code": "ZIT",
    "country_code": "DE",
    "city": "Zittau"
  },
  {
    "code": "ZKC",
    "country_code": "CH",
    "city": "Sarnen"
  },
  {
    "code": "WPU",
    "country_code": "CL",
    "city": "Puerto Williams"
  },
  {
    "code": "JOR",
    "country_code": "US",
    "city": "Orange"
  },
  {
    "code": "EUM",
    "country_code": "DE",
    "city": "Neumuenster"
  },
  {
    "code": "RUI",
    "country_code": "US",
    "city": "Ruidoso"
  },
  {
    "code": "DPO",
    "country_code": "AU",
    "city": "Devonport"
  },
  {
    "code": "OUU",
    "country_code": "GA",
    "city": "Ouanga"
  },
  {
    "code": "CSU",
    "country_code": "BR",
    "city": "Santa Cruz Do Sul"
  },
  {
    "code": "BRE",
    "country_code": "DE",
    "city": "Bremen"
  },
  {
    "code": "PMC",
    "country_code": "CL",
    "city": "Puerto Montt"
  },
  {
    "code": "SAB",
    "country_code": "BQ",
    "city": "Saba"
  },
  {
    "code": "POC",
    "country_code": "US",
    "city": "La Verne"
  },
  {
    "code": "HLT",
    "country_code": "AU",
    "city": "Hamilton"
  },
  {
    "code": "MGR",
    "country_code": "US",
    "city": "Moultrie"
  },
  {
    "code": "WEP",
    "country_code": "PG",
    "city": "Weam"
  },
  {
    "code": "ZJT",
    "country_code": "MY",
    "city": "Tanjung Pelepas"
  },
  {
    "code": "OLF",
    "country_code": "US",
    "city": "Wolf Point"
  },
  {
    "code": "CFK",
    "country_code": "DZ",
    "city": "Chlef"
  },
  {
    "code": "XPF",
    "country_code": "GB",
    "city": "Penrith"
  },
  {
    "code": "NIG",
    "country_code": "KI",
    "city": "Nikunau"
  },
  {
    "code": "PIC",
    "country_code": "TC",
    "city": "Pine Cay"
  },
  {
    "code": "TAP",
    "country_code": "MX",
    "city": "Tapachula"
  },
  {
    "code": "XYN",
    "country_code": "SE",
    "city": "Kristinehamn"
  },
  {
    "code": "VBM",
    "country_code": "US",
    "city": "Blue Mountain"
  },
  {
    "code": "SIJ",
    "country_code": "IS",
    "city": "Siglufjordur"
  },
  {
    "code": "RSD",
    "country_code": "BS",
    "city": "Rock Sound"
  },
  {
    "code": "FUE",
    "country_code": "ES",
    "city": "Puerto del Rosario"
  },
  {
    "code": "VQS",
    "country_code": "PR",
    "city": "Vieques"
  },
  {
    "code": "FOO",
    "country_code": "ID",
    "city": "Numfoor"
  },
  {
    "code": "KSA",
    "country_code": "FM",
    "city": "Kosrae, Caroline Islands"
  },
  {
    "code": "HRA",
    "country_code": "PK",
    "city": "Mansehra"
  },
  {
    "code": "VTF",
    "country_code": "FJ",
    "city": "Vatulele"
  },
  {
    "code": "BIP",
    "country_code": "AU",
    "city": "Bulimba"
  },
  {
    "code": "UGA",
    "country_code": "MN",
    "city": "Bulgan"
  },
  {
    "code": "WVI",
    "country_code": "US",
    "city": "Watsonville"
  },
  {
    "code": "SNQ",
    "country_code": "MX",
    "city": "San Quintin"
  },
  {
    "code": "EVE",
    "country_code": "NO",
    "city": "Harstad-Narvik"
  },
  {
    "code": "NVN",
    "country_code": "US",
    "city": "Beckwourth"
  },
  {
    "code": "DJG",
    "country_code": "DZ",
    "city": "Djanet"
  },
  {
    "code": "INL",
    "country_code": "US",
    "city": "International Falls"
  },
  {
    "code": "ABE",
    "country_code": "US",
    "city": "Allentown"
  },
  {
    "code": "VDP",
    "country_code": "VE",
    "city": "Valle De Pascua"
  },
  {
    "code": "ERE",
    "country_code": "PG",
    "city": "Erave"
  },
  {
    "code": "KBH",
    "country_code": "PK",
    "city": "Kalat"
  },
  {
    "code": "INK",
    "country_code": "US",
    "city": "Wink"
  },
  {
    "code": "IMN",
    "country_code": "PG",
    "city": "Imane"
  },
  {
    "code": "JXA",
    "country_code": "CN",
    "city": "Jixi"
  },
  {
    "code": "TRD",
    "country_code": "NO",
    "city": "Trondheim"
  },
  {
    "code": "IDF",
    "country_code": "CD",
    "city": "Idiofa"
  },
  {
    "code": "WFK",
    "country_code": "US",
    "city": "Frenchville"
  },
  {
    "code": "EMT",
    "country_code": "US",
    "city": "El Monte"
  },
  {
    "code": "KWG",
    "country_code": "UA",
    "city": "Krivoy Rog"
  },
  {
    "code": "PKZ",
    "country_code": "LA",
    "city": "Pakse"
  },
  {
    "code": "YLD",
    "country_code": "CA",
    "city": "Chapleau"
  },
  {
    "code": "OTH",
    "country_code": "US",
    "city": "North Bend"
  },
  {
    "code": "NVK",
    "country_code": "NO",
    "city": "Narvik"
  },
  {
    "code": "KXA",
    "country_code": "US",
    "city": "Kasaan"
  },
  {
    "code": "MXR",
    "country_code": "UA",
    "city": "Mirgorod"
  },
  {
    "code": "OSZ",
    "country_code": "PL",
    "city": "Koszalin"
  },
  {
    "code": "CXI",
    "country_code": "KI",
    "city": "Christmas Island"
  },
  {
    "code": "XHV",
    "country_code": "RO",
    "city": "Brasov"
  },
  {
    "code": "BTZ",
    "country_code": "TH",
    "city": "Betong"
  },
  {
    "code": "GEI",
    "country_code": "PG",
    "city": "Green Islands"
  },
  {
    "code": "EDK",
    "country_code": "US",
    "city": "El Dorado"
  },
  {
    "code": "KSL",
    "country_code": "SD",
    "city": "Kassala"
  },
  {
    "code": "IYK",
    "country_code": "US",
    "city": "Inyokern"
  },
  {
    "code": "DPU",
    "country_code": "PG",
    "city": "Dumpu"
  },
  {
    "code": "MHI",
    "country_code": "DJ",
    "city": "Musha"
  },
  {
    "code": "RXE",
    "country_code": "US",
    "city": "Rexburg"
  },
  {
    "code": "YCN",
    "country_code": "CA",
    "city": "Cochrane"
  },
  {
    "code": "KIS",
    "country_code": "KE",
    "city": "Kisumu"
  },
  {
    "code": "GGL",
    "country_code": "CO",
    "city": "Gilgal"
  },
  {
    "code": "POT",
    "country_code": "JM",
    "city": "Port Antonio"
  },
  {
    "code": "YRL",
    "country_code": "CA",
    "city": "Red Lake"
  },
  {
    "code": "KLH",
    "country_code": "IN",
    "city": "Kolhapur"
  },
  {
    "code": "SQG",
    "country_code": "ID",
    "city": "Sorong"
  },
  {
    "code": "TKV",
    "country_code": "PF",
    "city": "Tatakoto"
  },
  {
    "code": "TSG",
    "country_code": "US",
    "city": "Tanacross"
  },
  {
    "code": "AXX",
    "country_code": "US",
    "city": "Angel Fire"
  },
  {
    "code": "GNY",
    "country_code": "TR",
    "city": "Golgen"
  },
  {
    "code": "XES",
    "country_code": "US",
    "city": "Lake Geneva"
  },
  {
    "code": "BWO",
    "country_code": "RU",
    "city": "Balakovo"
  },
  {
    "code": "SVF",
    "country_code": "BJ",
    "city": "Save"
  },
  {
    "code": "PNG",
    "country_code": "BR",
    "city": "Paranagua"
  },
  {
    "code": "SZK",
    "country_code": "ZA",
    "city": "Skukuza"
  },
  {
    "code": "BGU",
    "country_code": "CF",
    "city": "Bangassou"
  },
  {
    "code": "GRN",
    "country_code": "US",
    "city": "Gordon"
  },
  {
    "code": "RAB",
    "country_code": "PG",
    "city": "Rabaul"
  },
  {
    "code": "XKP",
    "country_code": "NO",
    "city": "Porsgrunn"
  },
  {
    "code": "FLN",
    "country_code": "BR",
    "city": "Florianopolis"
  },
  {
    "code": "KNE",
    "country_code": "PG",
    "city": "Kanainj"
  },
  {
    "code": "DNH",
    "country_code": "CN",
    "city": "Dunhuang"
  },
  {
    "code": "PIO",
    "country_code": "PE",
    "city": "Pisco"
  },
  {
    "code": "LMD",
    "country_code": "AR",
    "city": "Los Menucos"
  },
  {
    "code": "TAQ",
    "country_code": "AU",
    "city": "Tarcoola"
  },
  {
    "code": "TIH",
    "country_code": "PF",
    "city": "Tikehau Atoll"
  },
  {
    "code": "TMI",
    "country_code": "NP",
    "city": "Tumling Tar"
  },
  {
    "code": "NGO",
    "country_code": "JP",
    "city": "Nagoya"
  },
  {
    "code": "CBO",
    "country_code": "PH",
    "city": "Cotabato"
  },
  {
    "code": "JIR",
    "country_code": "NP",
    "city": "Jiri"
  },
  {
    "code": "RIT",
    "country_code": "PA",
    "city": "Rio Tigre"
  },
  {
    "code": "MHL",
    "country_code": "US",
    "city": "Marshall"
  },
  {
    "code": "KDC",
    "country_code": "BJ",
    "city": "Kandi"
  },
  {
    "code": "CTJ",
    "country_code": "IT",
    "city": "Caserta"
  },
  {
    "code": "AHU",
    "country_code": "MA",
    "city": "Al Hoceima"
  },
  {
    "code": "BSP",
    "country_code": "PG",
    "city": "Bensbach"
  },
  {
    "code": "QYM",
    "country_code": "NL",
    "city": "Amersfoort"
  },
  {
    "code": "HLM",
    "country_code": "US",
    "city": "Holland"
  },
  {
    "code": "AWN",
    "country_code": "AU",
    "city": "Alton Downs"
  },
  {
    "code": "KWZ",
    "country_code": "CD",
    "city": "Kolwezi"
  },
  {
    "code": "PSZ",
    "country_code": "BO",
    "city": "Puerto Suarez"
  },
  {
    "code": "PHC",
    "country_code": "NG",
    "city": "Port Harcourt"
  },
  {
    "code": "RTN",
    "country_code": "US",
    "city": "Raton"
  },
  {
    "code": "MMM",
    "country_code": "AU",
    "city": "Middlemount"
  },
  {
    "code": "OTM",
    "country_code": "US",
    "city": "Ottumwa"
  },
  {
    "code": "SUB",
    "country_code": "ID",
    "city": "Surabaya"
  },
  {
    "code": "URS",
    "country_code": "RU",
    "city": "Kursk"
  },
  {
    "code": "WYE",
    "country_code": "SL",
    "city": "Yengema"
  },
  {
    "code": "ZFU",
    "country_code": "BR",
    "city": "Aruja"
  },
  {
    "code": "MIG",
    "country_code": "CN",
    "city": "Mian Yang"
  },
  {
    "code": "AIN",
    "country_code": "US",
    "city": "Wainwright"
  },
  {
    "code": "CQM",
    "country_code": "ES",
    "city": "Ciudad Real"
  },
  {
    "code": "WEW",
    "country_code": "AU",
    "city": "Wee Waa"
  },
  {
    "code": "EUN",
    "country_code": "EH",
    "city": "Laayoune"
  },
  {
    "code": "XYM",
    "country_code": "SE",
    "city": "Falkenberg"
  },
  {
    "code": "TEQ",
    "country_code": "TR",
    "city": "Tekirdag"
  },
  {
    "code": "KTR",
    "country_code": "AU",
    "city": "Katherine"
  },
  {
    "code": "GAF",
    "country_code": "TN",
    "city": "Gafsa"
  },
  {
    "code": "SJA",
    "country_code": "PE",
    "city": "San Juan"
  },
  {
    "code": "RJI",
    "country_code": "IN",
    "city": "Rajouri"
  },
  {
    "code": "ELB",
    "country_code": "CO",
    "city": "El Banco"
  },
  {
    "code": "DAH",
    "country_code": "YE",
    "city": "Dathina"
  },
  {
    "code": "OMF",
    "country_code": "JO",
    "city": "Mafraq"
  },
  {
    "code": "MUU",
    "country_code": "US",
    "city": "Mount Union"
  },
  {
    "code": "SNU",
    "country_code": "CU",
    "city": "Santa Clara"
  },
  {
    "code": "KHR",
    "country_code": "MN",
    "city": "Kharkhorin"
  },
  {
    "code": "YQM",
    "country_code": "CA",
    "city": "Moncton"
  },
  {
    "code": "COA",
    "country_code": "US",
    "city": "Columbia"
  },
  {
    "code": "CNS",
    "country_code": "AU",
    "city": "Cairns"
  },
  {
    "code": "HMB",
    "country_code": "EG",
    "city": "Sohag"
  },
  {
    "code": "TOW",
    "country_code": "BR",
    "city": "Toledo"
  },
  {
    "code": "YXI",
    "country_code": "CA",
    "city": "Killaloe"
  },
  {
    "code": "GYU",
    "country_code": "CN",
    "city": "Guyuan"
  },
  {
    "code": "YTA",
    "country_code": "CA",
    "city": "Pembroke"
  },
  {
    "code": "CZC",
    "country_code": "US",
    "city": "Copper Centre"
  },
  {
    "code": "EBL",
    "country_code": "IQ",
    "city": "Erbil"
  },
  {
    "code": "MQS",
    "country_code": "VC",
    "city": "Mustique Island"
  },
  {
    "code": "URD",
    "country_code": "DE",
    "city": "Burg Feuerstein"
  },
  {
    "code": "LCF",
    "country_code": "GT",
    "city": "Rio Dulce"
  },
  {
    "code": "MGC",
    "country_code": "US",
    "city": "Michigan City"
  },
  {
    "code": "SGS",
    "country_code": "PH",
    "city": "Sanga Sanga"
  },
  {
    "code": "FAE",
    "country_code": "FO",
    "city": "Faroe Islands"
  },
  {
    "code": "HMV",
    "country_code": "SE",
    "city": "Hemavan"
  },
  {
    "code": "OKM",
    "country_code": "US",
    "city": "Okmulgee"
  },
  {
    "code": "SEK",
    "country_code": "RU",
    "city": "Srednekolymsk"
  },
  {
    "code": "THR",
    "country_code": "IR",
    "city": "Tehran"
  },
  {
    "code": "CMY",
    "country_code": "US",
    "city": "Sparta"
  },
  {
    "code": "BUN",
    "country_code": "CO",
    "city": "Buenaventura"
  },
  {
    "code": "VUS",
    "country_code": "RU",
    "city": "Velikij Ustyug"
  },
  {
    "code": "MJX",
    "country_code": "US",
    "city": "Toms River"
  },
  {
    "code": "WFD",
    "country_code": "GB",
    "city": "Woodford"
  },
  {
    "code": "MEP",
    "country_code": "MY",
    "city": "Mersing"
  },
  {
    "code": "MLO",
    "country_code": "GR",
    "city": "Milos"
  },
  {
    "code": "BKR",
    "country_code": "TD",
    "city": "Bokoro"
  },
  {
    "code": "PSB",
    "country_code": "US",
    "city": "Bellefonte"
  },
  {
    "code": "NOJ",
    "country_code": "RU",
    "city": "Nojabrxsk"
  },
  {
    "code": "SBH",
    "country_code": "GP",
    "city": "Saint Barthelemy"
  },
  {
    "code": "BZC",
    "country_code": "BR",
    "city": "Buzios"
  },
  {
    "code": "KCT",
    "country_code": "LK",
    "city": "Koggala"
  },
  {
    "code": "LLT",
    "country_code": "AO",
    "city": "Lobito"
  },
  {
    "code": "HGI",
    "country_code": "IN",
    "city": "Itanagar"
  },
  {
    "code": "EDM",
    "country_code": "FR",
    "city": "La Roche"
  },
  {
    "code": "FTU",
    "country_code": "MG",
    "city": "Fort Dauphin"
  },
  {
    "code": "MQM",
    "country_code": "TR",
    "city": "Mardin"
  },
  {
    "code": "IFL",
    "country_code": "AU",
    "city": "Innisfail"
  },
  {
    "code": "UBJ",
    "country_code": "JP",
    "city": "Ube"
  },
  {
    "code": "ERL",
    "country_code": "CN",
    "city": "Eren Hot"
  },
  {
    "code": "PSE",
    "country_code": "PR",
    "city": "Ponce"
  },
  {
    "code": "YGZ",
    "country_code": "CA",
    "city": "Grise Fiord"
  },
  {
    "code": "YQB",
    "country_code": "CA",
    "city": "Quebec"
  },
  {
    "code": "JOI",
    "country_code": "BR",
    "city": "Joinville"
  },
  {
    "code": "РМК",
    "country_code": "RU",
    "city": "Romantik"
  },
  {
    "code": "SIA",
    "country_code": "CN",
    "city": "Xian"
  },
  {
    "code": "PEW",
    "country_code": "PK",
    "city": "Peshawar"
  },
  {
    "code": "OMG",
    "country_code": "NA",
    "city": "Omega"
  },
  {
    "code": "ZIE",
    "country_code": "IT",
    "city": "Vulcano"
  },
  {
    "code": "CZY",
    "country_code": "AU",
    "city": "Cluny"
  },
  {
    "code": "УХЙ",
    "country_code": "RU",
    "city": "Ust-Khayryuzovo"
  },
  {
    "code": "RNJ",
    "country_code": "JP",
    "city": "Yoronjima"
  },
  {
    "code": "OGE",
    "country_code": "PG",
    "city": "Ogeranang"
  },
  {
    "code": "MPW",
    "country_code": "UA",
    "city": "Mariupol"
  },
  {
    "code": "KSC",
    "country_code": "SK",
    "city": "Kosice"
  },
  {
    "code": "IQQ",
    "country_code": "CL",
    "city": "Iquique"
  },
  {
    "code": "LAR",
    "country_code": "US",
    "city": "Laramie"
  },
  {
    "code": "IDA",
    "country_code": "US",
    "city": "Idaho Falls"
  },
  {
    "code": "ANN",
    "country_code": "US",
    "city": "Annette Island"
  },
  {
    "code": "KLX",
    "country_code": "GR",
    "city": "Kalamata"
  },
  {
    "code": "DLI",
    "country_code": "VN",
    "city": "Dalat"
  },
  {
    "code": "RYO",
    "country_code": "AR",
    "city": "Rio Turbio"
  },
  {
    "code": "KYP",
    "country_code": "MM",
    "city": "Kyaukpyu"
  },
  {
    "code": "OHR",
    "country_code": "DE",
    "city": "Wyk Auf Foehr"
  },
  {
    "code": "PLY",
    "country_code": "US",
    "city": "Plymouth"
  },
  {
    "code": "LGB",
    "country_code": "US",
    "city": "Long Beach"
  },
  {
    "code": "FHZ",
    "country_code": "PF",
    "city": "Fakahina"
  },
  {
    "code": "SNA",
    "country_code": "US",
    "city": "Santa Ana"
  },
  {
    "code": "KAG",
    "country_code": "KR",
    "city": "Gangneung"
  },
  {
    "code": "UKI",
    "country_code": "US",
    "city": "Ukiah"
  },
  {
    "code": "LYH",
    "country_code": "US",
    "city": "Lynchburg"
  },
  {
    "code": "KOM",
    "country_code": "PG",
    "city": "Komo-Manda"
  },
  {
    "code": "PRX",
    "country_code": "US",
    "city": "Paris"
  },
  {
    "code": "DRY",
    "country_code": "AU",
    "city": "Drysdale River"
  },
  {
    "code": "HHR",
    "country_code": "US",
    "city": "Hawthorne"
  },
  {
    "code": "PNQ",
    "country_code": "IN",
    "city": "Pune"
  },
  {
    "code": "KKB",
    "country_code": "US",
    "city": "Kitoi Bay"
  },
  {
    "code": "SCD",
    "country_code": "HN",
    "city": "Sulaco"
  },
  {
    "code": "FTK",
    "country_code": "US",
    "city": "Fort Knox"
  },
  {
    "code": "LTS",
    "country_code": "US",
    "city": "Altus"
  },
  {
    "code": "PHU",
    "country_code": "VN",
    "city": "Phu Vinh"
  },
  {
    "code": "MXZ",
    "country_code": "CN",
    "city": "Mei Xian"
  },
  {
    "code": "JTY",
    "country_code": "GR",
    "city": "Astypalaia Island"
  },
  {
    "code": "HID",
    "country_code": "AU",
    "city": "Horn Island"
  },
  {
    "code": "XIB",
    "country_code": "CA",
    "city": "Ingersoll"
  },
  {
    "code": "BAE",
    "country_code": "FR",
    "city": "Barcelonnette"
  },
  {
    "code": "YTT",
    "country_code": "CA",
    "city": "Tisdale"
  },
  {
    "code": "WAK",
    "country_code": "MG",
    "city": "Ankazoabo"
  },
  {
    "code": "QGQ",
    "country_code": "GL",
    "city": "Attu"
  },
  {
    "code": "ENB",
    "country_code": "AU",
    "city": "Eneabba West"
  },
  {
    "code": "CRV",
    "country_code": "IT",
    "city": "Crotone"
  },
  {
    "code": "CEI",
    "country_code": "TH",
    "city": "Chiang Rai"
  },
  {
    "code": "YSF",
    "country_code": "CA",
    "city": "Stony Rapids"
  },
  {
    "code": "LVI",
    "country_code": "ZM",
    "city": "Livingstone"
  },
  {
    "code": "HVD",
    "country_code": "MN",
    "city": "Khovd"
  },
  {
    "code": "GAK",
    "country_code": "US",
    "city": "Gakona"
  },
  {
    "code": "ZAJ",
    "country_code": "AF",
    "city": "Zaranj"
  },
  {
    "code": "MSI",
    "country_code": "ID",
    "city": "Masalembo"
  },
  {
    "code": "RPX",
    "country_code": "US",
    "city": "Roundup"
  },
  {
    "code": "WWR",
    "country_code": "US",
    "city": "Woodward"
  },
  {
    "code": "WAV",
    "country_code": "AU",
    "city": "Wave Hill"
  },
  {
    "code": "SBI",
    "country_code": "GN",
    "city": "Koundara"
  },
  {
    "code": "IRB",
    "country_code": "US",
    "city": "Iraan"
  },
  {
    "code": "EPH",
    "country_code": "US",
    "city": "Ephrata"
  },
  {
    "code": "MGM",
    "country_code": "US",
    "city": "Montgomery"
  },
  {
    "code": "AST",
    "country_code": "US",
    "city": "Astoria"
  },
  {
    "code": "IXI",
    "country_code": "IN",
    "city": "Lilabari"
  },
  {
    "code": "YMQ",
    "country_code": "CA",
    "city": "Montreal"
  },
  {
    "code": "RAQ",
    "country_code": "ID",
    "city": "Raha"
  },
  {
    "code": "USA",
    "country_code": "US",
    "city": "Concord"
  },
  {
    "code": "BUZ",
    "country_code": "IR",
    "city": "Bushehr"
  },
  {
    "code": "EWB",
    "country_code": "US",
    "city": "New Bedford"
  },
  {
    "code": "ZEL",
    "country_code": "CA",
    "city": "Bella Bella"
  },
  {
    "code": "BVW",
    "country_code": "AU",
    "city": "Batavia Downs"
  },
  {
    "code": "NYA",
    "country_code": "RU",
    "city": "Nyagan"
  },
  {
    "code": "WIR",
    "country_code": "NZ",
    "city": "Wairoa"
  },
  {
    "code": "IXU",
    "country_code": "IN",
    "city": "Aurangabad"
  },
  {
    "code": "XIQ",
    "country_code": "GL",
    "city": "Ilimanaq"
  },
  {
    "code": "SUG",
    "country_code": "PH",
    "city": "Surigao"
  },
  {
    "code": "DOX",
    "country_code": "AU",
    "city": "Dongara"
  },
  {
    "code": "PHA",
    "country_code": "VN",
    "city": "Phan Rang"
  },
  {
    "code": "SFK",
    "country_code": "BR",
    "city": "Soure"
  },
  {
    "code": "NUJ",
    "country_code": "IR",
    "city": "Nojeh"
  },
  {
    "code": "AML",
    "country_code": "PA",
    "city": "Puerto Armuellas"
  },
  {
    "code": "AWK",
    "country_code": "UM",
    "city": "Wake Island"
  },
  {
    "code": "HBU",
    "country_code": "MN",
    "city": "Bulgan (Khovd)"
  },
  {
    "code": "GGE",
    "country_code": "US",
    "city": "Georgetown"
  },
  {
    "code": "QYZ",
    "country_code": "NL",
    "city": "Heerenveen"
  },
  {
    "code": "YSQ",
    "country_code": "CA",
    "city": "Spring Island"
  },
  {
    "code": "XWE",
    "country_code": "GB",
    "city": "Wellingborough"
  },
  {
    "code": "TCT",
    "country_code": "US",
    "city": "Takotna"
  },
  {
    "code": "AOL",
    "country_code": "AR",
    "city": "Paso De Los Libres"
  },
  {
    "code": "XQH",
    "country_code": "GB",
    "city": "Derby"
  },
  {
    "code": "YLM",
    "country_code": "CA",
    "city": "Clinton Creek"
  },
  {
    "code": "ULY",
    "country_code": "RU",
    "city": "Ulyanovsk"
  },
  {
    "code": "KSS",
    "country_code": "ML",
    "city": "Sikasso"
  },
  {
    "code": "NTA",
    "country_code": "FJ",
    "city": "Natadola"
  },
  {
    "code": "JON",
    "country_code": "UM",
    "city": "Johnston Island"
  },
  {
    "code": "XBJ",
    "country_code": "IR",
    "city": "Birjand"
  },
  {
    "code": "YMH",
    "country_code": "CA",
    "city": "Mary's Harbour"
  },
  {
    "code": "LSF",
    "country_code": "US",
    "city": "Fort Benning"
  },
  {
    "code": "XFV",
    "country_code": "CA",
    "city": "Brantford"
  },
  {
    "code": "JBQ",
    "country_code": "DO",
    "city": "Santo Domingo"
  },
  {
    "code": "NAW",
    "country_code": "TH",
    "city": "Narathiwat"
  },
  {
    "code": "KOU",
    "country_code": "GA",
    "city": "Koulamoutou"
  },
  {
    "code": "IPN",
    "country_code": "BR",
    "city": "Ipatinga"
  },
  {
    "code": "BAW",
    "country_code": "GA",
    "city": "Biawonque"
  },
  {
    "code": "XKB",
    "country_code": "NO",
    "city": "Kongsberg"
  },
  {
    "code": "GAH",
    "country_code": "AU",
    "city": "Gayndah"
  },
  {
    "code": "XIM",
    "country_code": "CA",
    "city": "Saint Hyacinthe"
  },
  {
    "code": "KAT",
    "country_code": "NZ",
    "city": "Kaitaia"
  },
  {
    "code": "BZG",
    "country_code": "PL",
    "city": "Bydgoszcz"
  },
  {
    "code": "WBD",
    "country_code": "MG",
    "city": "Befandriana"
  },
  {
    "code": "CCO",
    "country_code": "CO",
    "city": "Carimagua"
  },
  {
    "code": "CNC",
    "country_code": "AU",
    "city": "Coconut Island"
  },
  {
    "code": "GEE",
    "country_code": "AU",
    "city": "George Town"
  },
  {
    "code": "WMB",
    "country_code": "AU",
    "city": "Warrnambool"
  },
  {
    "code": "OKR",
    "country_code": "AU",
    "city": "Yorke Island"
  },
  {
    "code": "JKL",
    "country_code": "GR",
    "city": "Kalymnos"
  },
  {
    "code": "TEM",
    "country_code": "AU",
    "city": "Temora"
  },
  {
    "code": "RGR",
    "country_code": "US",
    "city": "Ranger"
  },
  {
    "code": "UUD",
    "country_code": "RU",
    "city": "Ulan-Ude"
  },
  {
    "code": "FAA",
    "country_code": "GN",
    "city": "Faranah"
  },
  {
    "code": "ISE",
    "country_code": "TR",
    "city": "Isparta"
  },
  {
    "code": "BBV",
    "country_code": "CI",
    "city": "Bereby"
  },
  {
    "code": "DIK",
    "country_code": "US",
    "city": "Dickinson"
  },
  {
    "code": "BKN",
    "country_code": "TM",
    "city": "Balkanabat"
  },
  {
    "code": "CFT",
    "country_code": "US",
    "city": "Clifton"
  },
  {
    "code": "ZRY",
    "country_code": "DK",
    "city": "Herning"
  },
  {
    "code": "YMC",
    "country_code": "CA",
    "city": "Maricourt Airstrip"
  },
  {
    "code": "TNI",
    "country_code": "IN",
    "city": "Satna"
  },
  {
    "code": "FOK",
    "country_code": "US",
    "city": "Westhampton"
  },
  {
    "code": "VLC",
    "country_code": "ES",
    "city": "Valencia"
  },
  {
    "code": "ONM",
    "country_code": "US",
    "city": "Socorro"
  },
  {
    "code": "BIG",
    "country_code": "US",
    "city": "Big Delta"
  },
  {
    "code": "MHS",
    "country_code": "US",
    "city": "Mount Shasta"
  },
  {
    "code": "UPA",
    "country_code": "CU",
    "city": "Punta Alegre"
  },
  {
    "code": "DBP",
    "country_code": "PG",
    "city": "Debepare"
  },
  {
    "code": "ZSQ",
    "country_code": "DE",
    "city": "Salzwedel"
  },
  {
    "code": "COV",
    "country_code": "PT",
    "city": "Covilha"
  },
  {
    "code": "EVA",
    "country_code": "US",
    "city": "Evadale"
  },
  {
    "code": "HMS",
    "country_code": "US",
    "city": "Homeshore"
  },
  {
    "code": "FUB",
    "country_code": "PG",
    "city": "Fulleborn"
  },
  {
    "code": "DBB",
    "country_code": "EG",
    "city": "Dabaa City"
  },
  {
    "code": "SFR",
    "country_code": "US",
    "city": "San Fernando"
  },
  {
    "code": "LSC",
    "country_code": "CL",
    "city": "La Serena"
  },
  {
    "code": "FCB",
    "country_code": "ZA",
    "city": "Ficksburg"
  },
  {
    "code": "IKI",
    "country_code": "JP",
    "city": "Iki"
  },
  {
    "code": "DRA",
    "country_code": "US",
    "city": "Mercury"
  },
  {
    "code": "ELD",
    "country_code": "US",
    "city": "El Dorado"
  },
  {
    "code": "PKY",
    "country_code": "ID",
    "city": "Palangkaraya"
  },
  {
    "code": "KJU",
    "country_code": "PG",
    "city": "Kamiraba"
  },
  {
    "code": "YCL",
    "country_code": "CA",
    "city": "Charlo"
  },
  {
    "code": "MUQ",
    "country_code": "AU",
    "city": "Muccan"
  },
  {
    "code": "AIO",
    "country_code": "US",
    "city": "Atlantic"
  },
  {
    "code": "JAF",
    "country_code": "LK",
    "city": "Jaffna"
  },
  {
    "code": "ATI",
    "country_code": "UY",
    "city": "Artigas"
  },
  {
    "code": "DTD",
    "country_code": "ID",
    "city": "Datadawai"
  },
  {
    "code": "TVF",
    "country_code": "US",
    "city": "Thief River Falls"
  },
  {
    "code": "TYL",
    "country_code": "PE",
    "city": "Talara"
  },
  {
    "code": "JDN",
    "country_code": "US",
    "city": "Jordan"
  },
  {
    "code": "DSG",
    "country_code": "PH",
    "city": "Dilasag"
  },
  {
    "code": "AKT",
    "country_code": "CY",
    "city": "Akrotiri"
  },
  {
    "code": "LBI",
    "country_code": "FR",
    "city": "Albi"
  },
  {
    "code": "LZO",
    "country_code": "CN",
    "city": "Luzhou"
  },
  {
    "code": "UJN",
    "country_code": "KR",
    "city": "Uljin"
  },
  {
    "code": "APK",
    "country_code": "PF",
    "city": "Apataki"
  },
  {
    "code": "UKE",
    "country_code": "IN",
    "city": "Bhawanipatna"
  },
  {
    "code": "VCD",
    "country_code": "AU",
    "city": "Victoria River Downs"
  },
  {
    "code": "LWA",
    "country_code": "PH",
    "city": "Lebak"
  },
  {
    "code": "VAQ",
    "country_code": "RU",
    "city": "Vanavara"
  },
  {
    "code": "SIX",
    "country_code": "AU",
    "city": "Singleton"
  },
  {
    "code": "ESR",
    "country_code": "CL",
    "city": "El Salvador"
  },
  {
    "code": "UEL",
    "country_code": "MZ",
    "city": "Quelimane"
  },
  {
    "code": "СЕЯ",
    "country_code": "RU",
    "city": "Svetlaya"
  },
  {
    "code": "MWB",
    "country_code": "AU",
    "city": "Morawa"
  },
  {
    "code": "ТЕЬ",
    "country_code": "RU",
    "city": "terskol"
  },
  {
    "code": "STO",
    "country_code": "SE",
    "city": "Stockholm"
  },
  {
    "code": "SGP",
    "country_code": "AU",
    "city": "Shay Gap"
  },
  {
    "code": "SVL",
    "country_code": "FI",
    "city": "Savonlinna"
  },
  {
    "code": "MRT",
    "country_code": "AU",
    "city": "Moroak"
  },
  {
    "code": "OKY",
    "country_code": "AU",
    "city": "Oakey"
  },
  {
    "code": "QYQ",
    "country_code": "DK",
    "city": "Sulsted"
  },
  {
    "code": "SKO",
    "country_code": "NG",
    "city": "Sokoto"
  },
  {
    "code": "GMT",
    "country_code": "US",
    "city": "Granite Mountain"
  },
  {
    "code": "YUA",
    "country_code": "CN",
    "city": "Yuanmou"
  },
  {
    "code": "XXV",
    "country_code": "SE",
    "city": "Kumla"
  },
  {
    "code": "LDJ",
    "country_code": "US",
    "city": "Linden"
  },
  {
    "code": "CAX",
    "country_code": "GB",
    "city": "Carlisle"
  },
  {
    "code": "NRB",
    "country_code": "US",
    "city": "Mayport"
  },
  {
    "code": "EMM",
    "country_code": "US",
    "city": "Kemerer"
  },
  {
    "code": "GCY",
    "country_code": "US",
    "city": "Greenville"
  },
  {
    "code": "DGB",
    "country_code": "US",
    "city": "Danger Bay"
  },
  {
    "code": "TYP",
    "country_code": "AU",
    "city": "Tobermorey"
  },
  {
    "code": "RNM",
    "country_code": "OM",
    "city": "Qarn Alam"
  },
  {
    "code": "PAW",
    "country_code": "PG",
    "city": "Pambwa"
  },
  {
    "code": "ZMO",
    "country_code": "IT",
    "city": "Modena"
  },
  {
    "code": "GNM",
    "country_code": "BR",
    "city": "Guanambi"
  },
  {
    "code": "LCD",
    "country_code": "ZA",
    "city": "Louis Trichardt"
  },
  {
    "code": "GYM",
    "country_code": "MX",
    "city": "Guaymas"
  },
  {
    "code": "BPA",
    "country_code": "US",
    "city": "Bethpage"
  },
  {
    "code": "OSG",
    "country_code": "PG",
    "city": "Ossima"
  },
  {
    "code": "NML",
    "country_code": "CA",
    "city": "Mildred Lake"
  },
  {
    "code": "CQA",
    "country_code": "BR",
    "city": "Canarana"
  },
  {
    "code": "GVL",
    "country_code": "US",
    "city": "Gainesville"
  },
  {
    "code": "CCB",
    "country_code": "US",
    "city": "Upland"
  },
  {
    "code": "CEQ",
    "country_code": "FR",
    "city": "Cannes"
  },
  {
    "code": "UPP",
    "country_code": "US",
    "city": "Upolu Point"
  },
  {
    "code": "SLD",
    "country_code": "SK",
    "city": "Sliac"
  },
  {
    "code": "CEL",
    "country_code": "BS",
    "city": "Cape Eleuthera"
  },
  {
    "code": "BVX",
    "country_code": "US",
    "city": "Batesville"
  },
  {
    "code": "PIR",
    "country_code": "US",
    "city": "Pierre"
  },
  {
    "code": "CIJ",
    "country_code": "BO",
    "city": "Cobija"
  },
  {
    "code": "EOZ",
    "country_code": "VE",
    "city": "Elorza"
  },
  {
    "code": "TBO",
    "country_code": "TZ",
    "city": "Tabora"
  },
  {
    "code": "CPR",
    "country_code": "US",
    "city": "Casper"
  },
  {
    "code": "ERZ",
    "country_code": "TR",
    "city": "Erzurum"
  },
  {
    "code": "HMJ",
    "country_code": "UA",
    "city": "Khmelnitskiy"
  },
  {
    "code": "KHY",
    "country_code": "IR",
    "city": "Khoy"
  },
  {
    "code": "YAU",
    "country_code": "CA",
    "city": "Kattiniq"
  },
  {
    "code": "FNL",
    "country_code": "US",
    "city": "Fort Collins"
  },
  {
    "code": "SIW",
    "country_code": "ID",
    "city": "Sibisa"
  },
  {
    "code": "LUB",
    "country_code": "GY",
    "city": "Lumid Pau"
  },
  {
    "code": "PVH",
    "country_code": "BR",
    "city": "Porto Velho"
  },
  {
    "code": "AQP",
    "country_code": "PE",
    "city": "Arequipa"
  },
  {
    "code": "JCM",
    "country_code": "BR",
    "city": "Jacobina"
  },
  {
    "code": "MPH",
    "country_code": "PH",
    "city": "Caticlan"
  },
  {
    "code": "KZR",
    "country_code": "TR",
    "city": "Kutahya"
  },
  {
    "code": "CFB",
    "country_code": "BR",
    "city": "Cabo Frio"
  },
  {
    "code": "NAH",
    "country_code": "ID",
    "city": "Naha"
  },
  {
    "code": "DXR",
    "country_code": "US",
    "city": "Danbury"
  },
  {
    "code": "VPN",
    "country_code": "IS",
    "city": "Vopnafjordur"
  },
  {
    "code": "MHO",
    "country_code": "AU",
    "city": "Mount House"
  },
  {
    "code": "VEL",
    "country_code": "US",
    "city": "Vernal"
  },
  {
    "code": "ILO",
    "country_code": "PH",
    "city": "Iloilo"
  },
  {
    "code": "XGP",
    "country_code": "NO",
    "city": "Dombas"
  },
  {
    "code": "YPO",
    "country_code": "CA",
    "city": "Peawanuck"
  },
  {
    "code": "QYP",
    "country_code": "NL",
    "city": "Apeldoorn"
  },
  {
    "code": "DOM",
    "country_code": "DM",
    "city": "Dominica"
  },
  {
    "code": "CHV",
    "country_code": "PT",
    "city": "Chaves"
  },
  {
    "code": "BYO",
    "country_code": "BR",
    "city": "Bonito"
  },
  {
    "code": "CSB",
    "country_code": "RO",
    "city": "Caransebes"
  },
  {
    "code": "CZH",
    "country_code": "BZ",
    "city": "Corozal"
  },
  {
    "code": "LHU",
    "country_code": "NA",
    "city": "Caprivi"
  },
  {
    "code": "TRB",
    "country_code": "CO",
    "city": "Turbo"
  },
  {
    "code": "FSU",
    "country_code": "US",
    "city": "Fort Sumner"
  },
  {
    "code": "LDZ",
    "country_code": "ZA",
    "city": "Londolozi"
  },
  {
    "code": "GUG",
    "country_code": "PG",
    "city": "Guari"
  },
  {
    "code": "CGI",
    "country_code": "US",
    "city": "Cape Girardeau"
  },
  {
    "code": "EGL",
    "country_code": "ET",
    "city": "Neghelli"
  },
  {
    "code": "CUY",
    "country_code": "AU",
    "city": "Cue"
  },
  {
    "code": "TLT",
    "country_code": "US",
    "city": "Tuluksak"
  },
  {
    "code": "EWO",
    "country_code": "CG",
    "city": "Ewo"
  },
  {
    "code": "YBG",
    "country_code": "CA",
    "city": "La Baie"
  },
  {
    "code": "PTT",
    "country_code": "US",
    "city": "Pratt"
  },
  {
    "code": "AEG",
    "country_code": "ID",
    "city": "Aek Godang"
  },
  {
    "code": "MAD",
    "country_code": "ES",
    "city": "Madrid"
  },
  {
    "code": "XMN",
    "country_code": "CN",
    "city": "Xiamen"
  },
  {
    "code": "AXC",
    "country_code": "AU",
    "city": "Aramac"
  },
  {
    "code": "PRA",
    "country_code": "AR",
    "city": "Parana"
  },
  {
    "code": "SRA",
    "country_code": "BR",
    "city": "Santa Rosa"
  },
  {
    "code": "FRC",
    "country_code": "BR",
    "city": "Franca"
  },
  {
    "code": "MOB",
    "country_code": "US",
    "city": "Mobile"
  },
  {
    "code": "BMP",
    "country_code": "AU",
    "city": "Brampton Island"
  },
  {
    "code": "CUQ",
    "country_code": "AU",
    "city": "Coen"
  },
  {
    "code": "QII",
    "country_code": "DE",
    "city": "Lindau"
  },
  {
    "code": "SNI",
    "country_code": "LR",
    "city": "Sinoe"
  },
  {
    "code": "XHS",
    "country_code": "CA",
    "city": "Chemainus"
  },
  {
    "code": "TOI",
    "country_code": "US",
    "city": "Troy"
  },
  {
    "code": "VKG",
    "country_code": "VN",
    "city": "Rach Gia"
  },
  {
    "code": "VXC",
    "country_code": "MZ",
    "city": "Lichinga"
  },
  {
    "code": "HAM",
    "country_code": "DE",
    "city": "Hamburg"
  },
  {
    "code": "FDH",
    "country_code": "DE",
    "city": "Friedrichshafen"
  },
  {
    "code": "DGA",
    "country_code": "BZ",
    "city": "Dangriga"
  },
  {
    "code": "KAV",
    "country_code": "VE",
    "city": "Kavanayen"
  },
  {
    "code": "XBN",
    "country_code": "PG",
    "city": "Biniguni"
  },
  {
    "code": "IKO",
    "country_code": "US",
    "city": "Nikolski"
  },
  {
    "code": "AEB",
    "country_code": "CN",
    "city": "Baise"
  },
  {
    "code": "BWQ",
    "country_code": "AU",
    "city": "Brewarrina"
  },
  {
    "code": "MKE",
    "country_code": "US",
    "city": "Milwaukee"
  },
  {
    "code": "FIH",
    "country_code": "CD",
    "city": "Kinshasa"
  },
  {
    "code": "OVR",
    "country_code": "AR",
    "city": "Olavarria"
  },
  {
    "code": "ZZV",
    "country_code": "US",
    "city": "Zanesville"
  },
  {
    "code": "LEY",
    "country_code": "NL",
    "city": "Lelystad"
  },
  {
    "code": "MXA",
    "country_code": "US",
    "city": "Manila"
  },
  {
    "code": "HGT",
    "country_code": "US",
    "city": "Jolon"
  },
  {
    "code": "YXN",
    "country_code": "CA",
    "city": "Whale Cove"
  },
  {
    "code": "RCN",
    "country_code": "AU",
    "city": "American River"
  },
  {
    "code": "TPN",
    "country_code": "EC",
    "city": "Tiputini"
  },
  {
    "code": "ZLU",
    "country_code": "DE",
    "city": "Ludwigslust"
  },
  {
    "code": "GES",
    "country_code": "PH",
    "city": "General Santos City"
  },
  {
    "code": "NUI",
    "country_code": "US",
    "city": "Nuiqsut"
  },
  {
    "code": "DMT",
    "country_code": "BR",
    "city": "Diamantino"
  },
  {
    "code": "LPB",
    "country_code": "BO",
    "city": "La Paz"
  },
  {
    "code": "DMD",
    "country_code": "AU",
    "city": "Doomadgee"
  },
  {
    "code": "WOK",
    "country_code": "VE",
    "city": "Wonken"
  },
  {
    "code": "CGQ",
    "country_code": "CN",
    "city": "Changchun"
  },
  {
    "code": "БУЫ",
    "country_code": "RU",
    "city": "Burnyj"
  },
  {
    "code": "JTO",
    "country_code": "US",
    "city": "Thousand Oaks"
  },
  {
    "code": "BBM",
    "country_code": "KH",
    "city": "Battambang"
  },
  {
    "code": "UME",
    "country_code": "SE",
    "city": "Umea"
  },
  {
    "code": "MKW",
    "country_code": "ID",
    "city": "Manokwari"
  },
  {
    "code": "НЛН",
    "country_code": "RU",
    "city": "Nelkan"
  },
  {
    "code": "QZD",
    "country_code": "HU",
    "city": "Szeged"
  },
  {
    "code": "JED",
    "country_code": "SA",
    "city": "Jeddah"
  },
  {
    "code": "MLR",
    "country_code": "AU",
    "city": "Millicent"
  },
  {
    "code": "AJU",
    "country_code": "BR",
    "city": "Aracaju"
  },
  {
    "code": "BLI",
    "country_code": "US",
    "city": "Bellingham"
  },
  {
    "code": "SSS",
    "country_code": "PG",
    "city": "Siassi"
  },
  {
    "code": "BKC",
    "country_code": "US",
    "city": "Buckland"
  },
  {
    "code": "YFJ",
    "country_code": "CA",
    "city": "Snare Lake"
  },
  {
    "code": "XIN",
    "country_code": "CN",
    "city": "Xingning"
  },
  {
    "code": "LIZ",
    "country_code": "US",
    "city": "Limestone"
  },
  {
    "code": "SMY",
    "country_code": "SN",
    "city": "Simenti"
  },
  {
    "code": "QGL",
    "country_code": "CH",
    "city": "St Gallen"
  },
  {
    "code": "ZKI",
    "country_code": "CH",
    "city": "Saas-Fee"
  },
  {
    "code": "LIY",
    "country_code": "US",
    "city": "Hinesville"
  },
  {
    "code": "KBK",
    "country_code": "IN",
    "city": "Kushinagar"
  },
  {
    "code": "ZRR",
    "country_code": "IT",
    "city": "Fiumicino"
  },
  {
    "code": "MBH",
    "country_code": "AU",
    "city": "Maryborough"
  },
  {
    "code": "XPR",
    "country_code": "US",
    "city": "Pine Ridge"
  },
  {
    "code": "ZQN",
    "country_code": "NZ",
    "city": "Queenstown"
  },
  {
    "code": "RTM",
    "country_code": "NL",
    "city": "Rotterdam"
  },
  {
    "code": "PEE",
    "country_code": "RU",
    "city": "Perm"
  },
  {
    "code": "NYG",
    "country_code": "US",
    "city": "Quantico"
  },
  {
    "code": "PCE",
    "country_code": "US",
    "city": "Painter Creek"
  },
  {
    "code": "DIV",
    "country_code": "CI",
    "city": "Divo"
  },
  {
    "code": "PRZ",
    "country_code": "US",
    "city": "Prineville"
  },
  {
    "code": "NPH",
    "country_code": "US",
    "city": "Nephi"
  },
  {
    "code": "WIN",
    "country_code": "AU",
    "city": "Winton"
  },
  {
    "code": "OGR",
    "country_code": "TD",
    "city": "Bongor"
  },
  {
    "code": "TZL",
    "country_code": "BA",
    "city": "Tuzla"
  },
  {
    "code": "BSN",
    "country_code": "CF",
    "city": "Bossangoa"
  },
  {
    "code": "SAA",
    "country_code": "US",
    "city": "Saratoga"
  },
  {
    "code": "XXO",
    "country_code": "SE",
    "city": "Leksand"
  },
  {
    "code": "ULD",
    "country_code": "ZA",
    "city": "Ulundi"
  },
  {
    "code": "BED",
    "country_code": "US",
    "city": "Bedford"
  },
  {
    "code": "PUP",
    "country_code": "BF",
    "city": "Po"
  },
  {
    "code": "TET",
    "country_code": "MZ",
    "city": "Tete"
  },
  {
    "code": "CHR",
    "country_code": "FR",
    "city": "Chateauroux"
  },
  {
    "code": "BMW",
    "country_code": "DZ",
    "city": "Bordj Badji Mokhtar"
  },
  {
    "code": "XXC",
    "country_code": "NO",
    "city": "Bo"
  },
  {
    "code": "TDG",
    "country_code": "PH",
    "city": "Tandag"
  },
  {
    "code": "NRS",
    "country_code": "US",
    "city": "Imperial Beach"
  },
  {
    "code": "ARY",
    "country_code": "AU",
    "city": "Ararat"
  },
  {
    "code": "PKJ",
    "country_code": "GT",
    "city": "Playa Grande"
  },
  {
    "code": "LVD",
    "country_code": "US",
    "city": "Lime Village"
  },
  {
    "code": "KNH",
    "country_code": "TW",
    "city": "Kinmen"
  },
  {
    "code": "CGU",
    "country_code": "VE",
    "city": "Ciudad Guayana"
  },
  {
    "code": "YEU",
    "country_code": "CA",
    "city": "Eureka"
  },
  {
    "code": "XDM",
    "country_code": "CA",
    "city": "Drummondville"
  },
  {
    "code": "ADZ",
    "country_code": "CO",
    "city": "San Andres Island"
  },
  {
    "code": "WMC",
    "country_code": "US",
    "city": "Winnemucca"
  },
  {
    "code": "DUF",
    "country_code": "US",
    "city": "Corolla"
  },
  {
    "code": "LPE",
    "country_code": "CO",
    "city": "La Primavera"
  },
  {
    "code": "UER",
    "country_code": "ES",
    "city": "Puertollano"
  },
  {
    "code": "HFD",
    "country_code": "US",
    "city": "Hartford"
  },
  {
    "code": "FKB",
    "country_code": "DE",
    "city": "Karlsruhe/Baden Baden"
  },
  {
    "code": "XEM",
    "country_code": "CA",
    "city": "New Richmond"
  },
  {
    "code": "KTB",
    "country_code": "US",
    "city": "Thorne Bay"
  },
  {
    "code": "XMS",
    "country_code": "EC",
    "city": "Macas"
  },
  {
    "code": "ISJ",
    "country_code": "MX",
    "city": "Isla Mujeres"
  },
  {
    "code": "QJE",
    "country_code": "GL",
    "city": "Kitsissuarsuit"
  },
  {
    "code": "JBK",
    "country_code": "US",
    "city": "Berkeley"
  },
  {
    "code": "AGM",
    "country_code": "GL",
    "city": "Tasiilaq"
  },
  {
    "code": "VGZ",
    "country_code": "CO",
    "city": "Villagarzon"
  },
  {
    "code": "PHP",
    "country_code": "US",
    "city": "Philip"
  },
  {
    "code": "SJK",
    "country_code": "BR",
    "city": "Sao Jose Dos Campos"
  },
  {
    "code": "AZT",
    "country_code": "CO",
    "city": "Zapatoca"
  },
  {
    "code": "CRD",
    "country_code": "AR",
    "city": "Comodoro Rivadavia"
  },
  {
    "code": "YVZ",
    "country_code": "CA",
    "city": "Deer Lake"
  },
  {
    "code": "KWX",
    "country_code": "PG",
    "city": "Kiwai Island"
  },
  {
    "code": "PVO",
    "country_code": "EC",
    "city": "Portoviejo"
  },
  {
    "code": "PAP",
    "country_code": "HT",
    "city": "Port Au Prince"
  },
  {
    "code": "OSC",
    "country_code": "US",
    "city": "Oscoda"
  },
  {
    "code": "YKY",
    "country_code": "CA",
    "city": "Kindersley"
  },
  {
    "code": "PCH",
    "country_code": "HN",
    "city": "Palacios"
  },
  {
    "code": "XZD",
    "country_code": "NO",
    "city": "Kongsvinger"
  },
  {
    "code": "KKK",
    "country_code": "US",
    "city": "Kalakaket"
  },
  {
    "code": "VTZ",
    "country_code": "IN",
    "city": "Vishakhapatnam"
  },
  {
    "code": "ATY",
    "country_code": "US",
    "city": "Watertown"
  },
  {
    "code": "IGS",
    "country_code": "DE",
    "city": "Ingolstadt-manching"
  },
  {
    "code": "LJA",
    "country_code": "CD",
    "city": "Lodja"
  },
  {
    "code": "SPE",
    "country_code": "MY",
    "city": "Sepulot"
  },
  {
    "code": "AAR",
    "country_code": "DK",
    "city": "Aarhus"
  },
  {
    "code": "MRA",
    "country_code": "LY",
    "city": "Misurata"
  },
  {
    "code": "МКИ",
    "country_code": "RU",
    "city": "Maximovka"
  },
  {
    "code": "CZJ",
    "country_code": "PA",
    "city": "Corazon De Jesus"
  },
  {
    "code": "PAE",
    "country_code": "US",
    "city": "Everett"
  },
  {
    "code": "YTH",
    "country_code": "CA",
    "city": "Thompson"
  },
  {
    "code": "PUF",
    "country_code": "FR",
    "city": "Pau"
  },
  {
    "code": "DDG",
    "country_code": "CN",
    "city": "Dandong"
  },
  {
    "code": "IRD",
    "country_code": "BD",
    "city": "Ishurdi"
  },
  {
    "code": "MFD",
    "country_code": "US",
    "city": "Mansfield"
  },
  {
    "code": "MSK",
    "country_code": "BS",
    "city": "Mastic Point"
  },
  {
    "code": "GAV",
    "country_code": "ID",
    "city": "Gag Island"
  },
  {
    "code": "PYA",
    "country_code": "CO",
    "city": "Puerto Boyaca"
  },
  {
    "code": "HOX",
    "country_code": "MM",
    "city": "Homalin"
  },
  {
    "code": "JUH",
    "country_code": "CN",
    "city": "Chizhou"
  },
  {
    "code": "MTZ",
    "country_code": "IL",
    "city": "Masada"
  },
  {
    "code": "WKL",
    "country_code": "US",
    "city": "Waikoloa"
  },
  {
    "code": "KAJ",
    "country_code": "FI",
    "city": "Kajaani"
  },
  {
    "code": "GKN",
    "country_code": "US",
    "city": "Gulkana"
  },
  {
    "code": "XGJ",
    "country_code": "CA",
    "city": "Cobourg"
  },
  {
    "code": "SBG",
    "country_code": "ID",
    "city": "Sabang"
  },
  {
    "code": "OCJ",
    "country_code": "JM",
    "city": "Ocho Rios"
  },
  {
    "code": "EWD",
    "country_code": "US",
    "city": "Wildman Lake"
  },
  {
    "code": "PLK",
    "country_code": "US",
    "city": "Point Lookout"
  },
  {
    "code": "GAM",
    "country_code": "US",
    "city": "Gambell"
  },
  {
    "code": "EBW",
    "country_code": "CM",
    "city": "Ebolowa"
  },
  {
    "code": "LTW",
    "country_code": "US",
    "city": "Leonardtown"
  },
  {
    "code": "VAP",
    "country_code": "CL",
    "city": "Valparaiso"
  },
  {
    "code": "BLR",
    "country_code": "IN",
    "city": "Bengaluru"
  },
  {
    "code": "FNT",
    "country_code": "US",
    "city": "Flint"
  },
  {
    "code": "SON",
    "country_code": "VU",
    "city": "Espiritu Santo"
  },
  {
    "code": "KOA",
    "country_code": "US",
    "city": "Kailua-Kona"
  },
  {
    "code": "EMP",
    "country_code": "US",
    "city": "Emporia"
  },
  {
    "code": "ZGL",
    "country_code": "AU",
    "city": "South Galway"
  },
  {
    "code": "WAO",
    "country_code": "PG",
    "city": "Wabo"
  },
  {
    "code": "GAR",
    "country_code": "PG",
    "city": "Garaina"
  },
  {
    "code": "BCK",
    "country_code": "AU",
    "city": "Bolwarra"
  },
  {
    "code": "ALO",
    "country_code": "US",
    "city": "Waterloo"
  },
  {
    "code": "ACS",
    "country_code": "RU",
    "city": "Achinsk"
  },
  {
    "code": "HIH",
    "country_code": "AU",
    "city": "Hook Island"
  },
  {
    "code": "ADE",
    "country_code": "YE",
    "city": "Aden"
  },
  {
    "code": "HSL",
    "country_code": "US",
    "city": "Huslia"
  },
  {
    "code": "KYZ",
    "country_code": "RU",
    "city": "Kyzyl"
  },
  {
    "code": "ONH",
    "country_code": "US",
    "city": "Oneonta"
  },
  {
    "code": "ABD",
    "country_code": "IR",
    "city": "Abadan"
  },
  {
    "code": "RBC",
    "country_code": "AU",
    "city": "Robinvale"
  },
  {
    "code": "UYU",
    "country_code": "BO",
    "city": "Uyuni"
  },
  {
    "code": "NUG",
    "country_code": "PG",
    "city": "Nuguria"
  },
  {
    "code": "GLV",
    "country_code": "US",
    "city": "Golovin"
  },
  {
    "code": "ZVG",
    "country_code": "AU",
    "city": "Springvale"
  },
  {
    "code": "EBG",
    "country_code": "CO",
    "city": "El Bagre"
  },
  {
    "code": "PDB",
    "country_code": "US",
    "city": "Pedro Bay"
  },
  {
    "code": "HLN",
    "country_code": "US",
    "city": "Helena"
  },
  {
    "code": "BRQ",
    "country_code": "CZ",
    "city": "Brno"
  },
  {
    "code": "SJV",
    "country_code": "BO",
    "city": "San Javier"
  },
  {
    "code": "BYC",
    "country_code": "BO",
    "city": "Yacuiba"
  },
  {
    "code": "HBN",
    "country_code": "VN",
    "city": "Phu-bon"
  },
  {
    "code": "YZY",
    "country_code": "CN",
    "city": "Zhangye"
  },
  {
    "code": "DPG",
    "country_code": "US",
    "city": "Dugway"
  },
  {
    "code": "LKW",
    "country_code": "OM",
    "city": "Lekhwair"
  },
  {
    "code": "MAU",
    "country_code": "PF",
    "city": "Maupiti"
  },
  {
    "code": "LTA",
    "country_code": "ZA",
    "city": "Tzaneen"
  },
  {
    "code": "VNS",
    "country_code": "IN",
    "city": "Varanasi"
  },
  {
    "code": "KHW",
    "country_code": "BW",
    "city": "Khwai River Lodge"
  },
  {
    "code": "PMN",
    "country_code": "PG",
    "city": "Pumani"
  },
  {
    "code": "TKF",
    "country_code": "US",
    "city": "Truckee"
  },
  {
    "code": "LAU",
    "country_code": "KE",
    "city": "Lamu"
  },
  {
    "code": "TXR",
    "country_code": "AU",
    "city": "Tanbar"
  },
  {
    "code": "QOR",
    "country_code": "TR",
    "city": "Ordu-Gulyali"
  },
  {
    "code": "PFD",
    "country_code": "US",
    "city": "Port Frederick"
  },
  {
    "code": "ODS",
    "country_code": "UA",
    "city": "Odessa"
  },
  {
    "code": "AUU",
    "country_code": "AU",
    "city": "Aurukun Mission"
  },
  {
    "code": "KAQ",
    "country_code": "PG",
    "city": "Kamulai"
  },
  {
    "code": "VLD",
    "country_code": "US",
    "city": "Valdosta"
  },
  {
    "code": "YOW",
    "country_code": "CA",
    "city": "Ottawa"
  },
  {
    "code": "SRE",
    "country_code": "BO",
    "city": "Sucre"
  },
  {
    "code": "HNE",
    "country_code": "US",
    "city": "Tahneta Pass Lodge"
  },
  {
    "code": "BDP",
    "country_code": "NP",
    "city": "Bhadrapur"
  },
  {
    "code": "YXY",
    "country_code": "CA",
    "city": "Whitehorse"
  },
  {
    "code": "PRG",
    "country_code": "CZ",
    "city": "Prague"
  },
  {
    "code": "YKS",
    "country_code": "RU",
    "city": "Yakutsk"
  },
  {
    "code": "FBY",
    "country_code": "US",
    "city": "Fairbury"
  },
  {
    "code": "YBN",
    "country_code": "CA",
    "city": "Borden"
  },
  {
    "code": "YKD",
    "country_code": "CA",
    "city": "Kincardine"
  },
  {
    "code": "SDQ",
    "country_code": "DO",
    "city": "Santo Domingo"
  },
  {
    "code": "XRE",
    "country_code": "GB",
    "city": "Reading"
  },
  {
    "code": "TII",
    "country_code": "AF",
    "city": "Tirinkot"
  },
  {
    "code": "OTA",
    "country_code": "ET",
    "city": "Mota"
  },
  {
    "code": "IAA",
    "country_code": "RU",
    "city": "Igarka"
  },
  {
    "code": "AHN",
    "country_code": "US",
    "city": "Athens"
  },
  {
    "code": "XFN",
    "country_code": "CN",
    "city": "Xiangyang"
  },
  {
    "code": "PNL",
    "country_code": "IT",
    "city": "Pantelleria"
  },
  {
    "code": "NKU",
    "country_code": "LS",
    "city": "Nkaus"
  },
  {
    "code": "JUB",
    "country_code": "SS",
    "city": "Juba"
  },
  {
    "code": "VCF",
    "country_code": "AR",
    "city": "Valcheta"
  },
  {
    "code": "KSP",
    "country_code": "PG",
    "city": "Kosipe"
  },
  {
    "code": "XGA",
    "country_code": "BF",
    "city": "Gaoua"
  },
  {
    "code": "RAN",
    "country_code": "IT",
    "city": "Ravenna"
  },
  {
    "code": "HUB",
    "country_code": "AU",
    "city": "Humbert River"
  },
  {
    "code": "LHK",
    "country_code": "CN",
    "city": "Guanghua"
  },
  {
    "code": "MCV",
    "country_code": "AU",
    "city": "Mcarthur River"
  },
  {
    "code": "CNQ",
    "country_code": "AR",
    "city": "Corrientes"
  },
  {
    "code": "ONS",
    "country_code": "AU",
    "city": "Onslow"
  },
  {
    "code": "ALN",
    "country_code": "US",
    "city": "Alton"
  },
  {
    "code": "EXI",
    "country_code": "US",
    "city": "Excursion Inlet"
  },
  {
    "code": "YLX",
    "country_code": "CA",
    "city": "Long Point"
  },
  {
    "code": "INZ",
    "country_code": "DZ",
    "city": "In Salah"
  },
  {
    "code": "XPL",
    "country_code": "HN",
    "city": "Comayagua"
  },
  {
    "code": "UZR",
    "country_code": "KZ",
    "city": "Urzhar"
  },
  {
    "code": "MAG",
    "country_code": "PG",
    "city": "Madang"
  },
  {
    "code": "RVT",
    "country_code": "AU",
    "city": "Ravensthorpe"
  },
  {
    "code": "TLA",
    "country_code": "US",
    "city": "Teller"
  },
  {
    "code": "PZB",
    "country_code": "ZA",
    "city": "Pietermaritzburg"
  },
  {
    "code": "XLB",
    "country_code": "CA",
    "city": "Lac Brochet"
  },
  {
    "code": "BCQ",
    "country_code": "LY",
    "city": "Brack"
  },
  {
    "code": "WDG",
    "country_code": "US",
    "city": "Enid"
  },
  {
    "code": "UVA",
    "country_code": "US",
    "city": "Uvalde"
  },
  {
    "code": "LNN",
    "country_code": "US",
    "city": "Willoughby"
  },
  {
    "code": "STY",
    "country_code": "UY",
    "city": "Salto"
  },
  {
    "code": "JHY",
    "country_code": "US",
    "city": "Cambridge"
  },
  {
    "code": "TUB",
    "country_code": "PF",
    "city": "Tubuai"
  },
  {
    "code": "BBC",
    "country_code": "US",
    "city": "Bay City"
  },
  {
    "code": "BRK",
    "country_code": "AU",
    "city": "Bourke"
  },
  {
    "code": "BFF",
    "country_code": "US",
    "city": "Scottsbluff"
  },
  {
    "code": "RZP",
    "country_code": "PH",
    "city": "Taytay Sandoval"
  },
  {
    "code": "SWA",
    "country_code": "CN",
    "city": "Jieyang"
  },
  {
    "code": "JOS",
    "country_code": "NG",
    "city": "Jos"
  },
  {
    "code": "IUS",
    "country_code": "PG",
    "city": "Inus"
  },
  {
    "code": "LBM",
    "country_code": "MZ",
    "city": "Luabo"
  },
  {
    "code": "SQF",
    "country_code": "CO",
    "city": "Solano"
  },
  {
    "code": "GGD",
    "country_code": "AU",
    "city": "Gregory Downs"
  },
  {
    "code": "HWO",
    "country_code": "US",
    "city": "Hollywood"
  },
  {
    "code": "PHF",
    "country_code": "US",
    "city": "Newport News"
  },
  {
    "code": "RIA",
    "country_code": "BR",
    "city": "Santa Maria"
  },
  {
    "code": "KMR",
    "country_code": "PG",
    "city": "Karimui"
  },
  {
    "code": "ZSC",
    "country_code": "DE",
    "city": "Schoena"
  },
  {
    "code": "HYR",
    "country_code": "US",
    "city": "Hayward"
  },
  {
    "code": "OSN",
    "country_code": "KR",
    "city": "Osan"
  },
  {
    "code": "MJP",
    "country_code": "AU",
    "city": "Manjimup"
  },
  {
    "code": "SZW",
    "country_code": "DE",
    "city": "Schwerin"
  },
  {
    "code": "XGM",
    "country_code": "GB",
    "city": "Grantham"
  },
  {
    "code": "YGJ",
    "country_code": "JP",
    "city": "Yonago"
  },
  {
    "code": "MZS",
    "country_code": "MY",
    "city": "Mostyn"
  },
  {
    "code": "BID",
    "country_code": "US",
    "city": "Block Island"
  },
  {
    "code": "DNI",
    "country_code": "SD",
    "city": "Wad Medani"
  },
  {
    "code": "FNC",
    "country_code": "PT",
    "city": "Funchal"
  },
  {
    "code": "PEL",
    "country_code": "LS",
    "city": "Pelaneng"
  },
  {
    "code": "ESC",
    "country_code": "US",
    "city": "Escanaba"
  },
  {
    "code": "JCY",
    "country_code": "US",
    "city": "Johnson"
  },
  {
    "code": "БНГ",
    "country_code": "RU",
    "city": "Beringovskiy"
  },
  {
    "code": "GCI",
    "country_code": "GG",
    "city": "Guernsey"
  },
  {
    "code": "UFA",
    "country_code": "RU",
    "city": "Ufa"
  },
  {
    "code": "MUK",
    "country_code": "CK",
    "city": "Mauke Island"
  },
  {
    "code": "BEN",
    "country_code": "LY",
    "city": "Benghazi"
  },
  {
    "code": "YAI",
    "country_code": "CL",
    "city": "Chillan"
  },
  {
    "code": "OLD",
    "country_code": "US",
    "city": "Old Town"
  },
  {
    "code": "RIO",
    "country_code": "BR",
    "city": "Rio De Janeiro"
  },
  {
    "code": "SNW",
    "country_code": "MM",
    "city": "Thandwe"
  },
  {
    "code": "ODN",
    "country_code": "MY",
    "city": "Long Seridan"
  },
  {
    "code": "CGO",
    "country_code": "CN",
    "city": "Zhengzhou"
  },
  {
    "code": "BAX",
    "country_code": "RU",
    "city": "Barnaul"
  },
  {
    "code": "SPK",
    "country_code": "JP",
    "city": "Sapporo"
  },
  {
    "code": "TJC",
    "country_code": "PA",
    "city": "Ticantiki"
  },
  {
    "code": "YSY",
    "country_code": "CA",
    "city": "Sachs Harbour"
  },
  {
    "code": "CBJ",
    "country_code": "DO",
    "city": "Cabo Rojo"
  },
  {
    "code": "ZMA",
    "country_code": "GB",
    "city": "Mansfield"
  },
  {
    "code": "KOG",
    "country_code": "LA",
    "city": "Khong"
  },
  {
    "code": "KDY",
    "country_code": "LK",
    "city": "Mahaweli"
  },
  {
    "code": "MOY",
    "country_code": "CO",
    "city": "Monterrey"
  },
  {
    "code": "VCL",
    "country_code": "VN",
    "city": "Tamky-Chulai Airport"
  },
  {
    "code": "PRE",
    "country_code": "CO",
    "city": "Pore"
  },
  {
    "code": "JBR",
    "country_code": "US",
    "city": "Jonesboro"
  },
  {
    "code": "MUX",
    "country_code": "PK",
    "city": "Multan"
  },
  {
    "code": "ZBY",
    "country_code": "LA",
    "city": "Sayaboury"
  },
  {
    "code": "TBQ",
    "country_code": "PG",
    "city": "Tarabo"
  },
  {
    "code": "YEM",
    "country_code": "CA",
    "city": "Manitowaning"
  },
  {
    "code": "APC",
    "country_code": "US",
    "city": "Napa"
  },
  {
    "code": "PEX",
    "country_code": "RU",
    "city": "Pechora"
  },
  {
    "code": "BXF",
    "country_code": "AU",
    "city": "Belburn"
  },
  {
    "code": "WHT",
    "country_code": "US",
    "city": "Wharton"
  },
  {
    "code": "CBI",
    "country_code": "AU",
    "city": "Cape Barren Island"
  },
  {
    "code": "TJU",
    "country_code": "TJ",
    "city": "Kulyab"
  },
  {
    "code": "EYL",
    "country_code": "ML",
    "city": "Yelimane"
  },
  {
    "code": "GAX",
    "country_code": "GA",
    "city": "Gamba"
  },
  {
    "code": "KEI",
    "country_code": "ID",
    "city": "Kepi"
  },
  {
    "code": "LNM",
    "country_code": "PG",
    "city": "Langimar"
  },
  {
    "code": "GSL",
    "country_code": "CA",
    "city": "Taltheilei Narrows"
  },
  {
    "code": "SBB",
    "country_code": "VE",
    "city": "Santa Barbara de Barinas"
  },
  {
    "code": "HOT",
    "country_code": "US",
    "city": "Hot Springs"
  },
  {
    "code": "MSJ",
    "country_code": "JP",
    "city": "Misawa"
  },
  {
    "code": "XLO",
    "country_code": "VN",
    "city": "Long Xuyen"
  },
  {
    "code": "JRK",
    "country_code": "GL",
    "city": "Arsuk"
  },
  {
    "code": "QYT",
    "country_code": "NL",
    "city": "Paterswolde"
  },
  {
    "code": "SYR",
    "country_code": "US",
    "city": "Syracuse"
  },
  {
    "code": "SSC",
    "country_code": "US",
    "city": "Sumter"
  },
  {
    "code": "AMP",
    "country_code": "MG",
    "city": "Ampanihy"
  },
  {
    "code": "LKZ",
    "country_code": "GB",
    "city": "Brandon"
  },
  {
    "code": "TBD",
    "country_code": "CO",
    "city": "Timbiqui"
  },
  {
    "code": "CRI",
    "country_code": "BS",
    "city": "Crooked Island"
  },
  {
    "code": "BIZ",
    "country_code": "PG",
    "city": "Bimin"
  },
  {
    "code": "OKG",
    "country_code": "CG",
    "city": "Okoyo"
  },
  {
    "code": "TRC",
    "country_code": "MX",
    "city": "Torreon"
  },
  {
    "code": "FAM",
    "country_code": "US",
    "city": "Farmington"
  },
  {
    "code": "IXR",
    "country_code": "IN",
    "city": "Ranchi"
  },
  {
    "code": "ШГШ",
    "country_code": "RU",
    "city": "Sheregesh"
  },
  {
    "code": "LFT",
    "country_code": "US",
    "city": "Lafayette"
  },
  {
    "code": "XSC",
    "country_code": "TC",
    "city": "South Caicos"
  },
  {
    "code": "BEA",
    "country_code": "PG",
    "city": "Bereina"
  },
  {
    "code": "ORP",
    "country_code": "BW",
    "city": "Orapa"
  },
  {
    "code": "MBA",
    "country_code": "KE",
    "city": "Mombasa"
  },
  {
    "code": "ДЖБ",
    "country_code": "KG",
    "city": "Dzhalal-Abad"
  },
  {
    "code": "LKU",
    "country_code": "KE",
    "city": "Lake Rudolf"
  },
  {
    "code": "ENW",
    "country_code": "US",
    "city": "Kenosha"
  },
  {
    "code": "PVD",
    "country_code": "US",
    "city": "Providence"
  },
  {
    "code": "СМХ",
    "country_code": "RU",
    "city": "Smirnykh"
  },
  {
    "code": "JZH",
    "country_code": "CN",
    "city": "Song Pan"
  },
  {
    "code": "SEL",
    "country_code": "KR",
    "city": "Seoul"
  },
  {
    "code": "BPU",
    "country_code": "JP",
    "city": "Beppu"
  },
  {
    "code": "IKK",
    "country_code": "US",
    "city": "Kankakee"
  },
  {
    "code": "MTV",
    "country_code": "VU",
    "city": "Mota Lava"
  },
  {
    "code": "BFH",
    "country_code": "BR",
    "city": "Curitiba."
  },
  {
    "code": "AIC",
    "country_code": "MH",
    "city": "Airok"
  },
  {
    "code": "MKN",
    "country_code": "PG",
    "city": "Malekolon"
  },
  {
    "code": "MSF",
    "country_code": "AU",
    "city": "Mount Swan"
  },
  {
    "code": "ZWD",
    "country_code": "DE",
    "city": "Warnemuende"
  },
  {
    "code": "JSY",
    "country_code": "GR",
    "city": "Syros Island"
  },
  {
    "code": "CFF",
    "country_code": "AO",
    "city": "Cafunfo"
  },
  {
    "code": "SJN",
    "country_code": "US",
    "city": "St Johns"
  },
  {
    "code": "OGM",
    "country_code": "PA",
    "city": "Ustupu Island"
  },
  {
    "code": "RLP",
    "country_code": "AU",
    "city": "Rosella Plains"
  },
  {
    "code": "PZK",
    "country_code": "CK",
    "city": "Puka Puka"
  },
  {
    "code": "GUD",
    "country_code": "ML",
    "city": "Goundam"
  },
  {
    "code": "QFH",
    "country_code": "DK",
    "city": "Frederikshavn"
  },
  {
    "code": "NVI",
    "country_code": "UZ",
    "city": "Navoi"
  },
  {
    "code": "UDN",
    "country_code": "IT",
    "city": "Udine"
  },
  {
    "code": "CPH",
    "country_code": "DK",
    "city": "Copenhagen"
  },
  {
    "code": "BYN",
    "country_code": "MN",
    "city": "Bayankhongor"
  },
  {
    "code": "GIU",
    "country_code": "LK",
    "city": "Sigiriya"
  },
  {
    "code": "UMB",
    "country_code": "US",
    "city": "Umnak Island"
  },
  {
    "code": "MXC",
    "country_code": "US",
    "city": "Monticello"
  },
  {
    "code": "CNR",
    "country_code": "CL",
    "city": "Chanaral"
  },
  {
    "code": "KET",
    "country_code": "MM",
    "city": "Keng Tung"
  },
  {
    "code": "HVZ",
    "country_code": "HU",
    "city": "Heviz"
  },
  {
    "code": "LQK",
    "country_code": "US",
    "city": "Pickens"
  },
  {
    "code": "HTU",
    "country_code": "AU",
    "city": "Hopetoun"
  },
  {
    "code": "VAM",
    "country_code": "MV",
    "city": "Maamigili"
  },
  {
    "code": "VSO",
    "country_code": "VN",
    "city": "Phuoclong"
  },
  {
    "code": "XWM",
    "country_code": "SE",
    "city": "Hallsberg"
  },
  {
    "code": "NMG",
    "country_code": "PA",
    "city": "San Miguel"
  },
  {
    "code": "ISG",
    "country_code": "JP",
    "city": "Ishigaki"
  },
  {
    "code": "DUQ",
    "country_code": "CA",
    "city": "Duncan/Quam"
  },
  {
    "code": "MMV",
    "country_code": "PG",
    "city": "Mal"
  },
  {
    "code": "IDN",
    "country_code": "PG",
    "city": "Indagen"
  },
  {
    "code": "FRW",
    "country_code": "BW",
    "city": "Francistown"
  },
  {
    "code": "ULB",
    "country_code": "VU",
    "city": "Ulei"
  },
  {
    "code": "RNE",
    "country_code": "FR",
    "city": "Roanne"
  },
  {
    "code": "KWF",
    "country_code": "US",
    "city": "Waterfall"
  },
  {
    "code": "WAP",
    "country_code": "CL",
    "city": "Alto Palena"
  },
  {
    "code": "AZZ",
    "country_code": "AO",
    "city": "Ambriz"
  },
  {
    "code": "SDG",
    "country_code": "IR",
    "city": "Sanandaj"
  },
  {
    "code": "AZN",
    "country_code": "UZ",
    "city": "Andizhan"
  },
  {
    "code": "LHN",
    "country_code": "TW",
    "city": "Lishan"
  },
  {
    "code": "XHA",
    "country_code": "FI",
    "city": "Yllasjarvi"
  },
  {
    "code": "UNN",
    "country_code": "TH",
    "city": "Ranong"
  },
  {
    "code": "WAY",
    "country_code": "US",
    "city": "Waynesburg"
  },
  {
    "code": "LRF",
    "country_code": "US",
    "city": "Jacksonville"
  },
  {
    "code": "OKJ",
    "country_code": "JP",
    "city": "Okayama"
  },
  {
    "code": "YDP",
    "country_code": "CA",
    "city": "Nain"
  },
  {
    "code": "LXA",
    "country_code": "CN",
    "city": "Lhasa"
  },
  {
    "code": "ULX",
    "country_code": "ZA",
    "city": "Ulusaba"
  },
  {
    "code": "CSN",
    "country_code": "US",
    "city": "Carson City"
  },
  {
    "code": "UPV",
    "country_code": "GB",
    "city": "Upavon"
  },
  {
    "code": "ENK",
    "country_code": "GB",
    "city": "Enniskillen"
  },
  {
    "code": "MQR",
    "country_code": "CO",
    "city": "Mosquera"
  },
  {
    "code": "ZYL",
    "country_code": "BD",
    "city": "Sylhet"
  },
  {
    "code": "INH",
    "country_code": "MZ",
    "city": "Inhambane"
  },
  {
    "code": "HAZ",
    "country_code": "PG",
    "city": "Hatzfeldthaven"
  },
  {
    "code": "TCJ",
    "country_code": "PG",
    "city": "Torembi"
  },
  {
    "code": "TGR",
    "country_code": "DZ",
    "city": "Touggourt"
  },
  {
    "code": "TTI",
    "country_code": "PF",
    "city": "Tetiaroa Island"
  },
  {
    "code": "VHV",
    "country_code": "RU",
    "city": "Verhnevilyuisk"
  },
  {
    "code": "XUH",
    "country_code": "NO",
    "city": "Levanger"
  },
  {
    "code": "RCO",
    "country_code": "FR",
    "city": "Rochefort"
  },
  {
    "code": "BKW",
    "country_code": "US",
    "city": "Beckley"
  },
  {
    "code": "YYG",
    "country_code": "CA",
    "city": "Charlottetown"
  },
  {
    "code": "ATD",
    "country_code": "SB",
    "city": "Atoifi"
  },
  {
    "code": "ROV",
    "country_code": "RU",
    "city": "Rostov"
  },
  {
    "code": "BSR",
    "country_code": "IQ",
    "city": "Basra"
  },
  {
    "code": "IRK",
    "country_code": "US",
    "city": "Kirksville"
  },
  {
    "code": "LBB",
    "country_code": "US",
    "city": "Lubbock"
  },
  {
    "code": "MGG",
    "country_code": "PG",
    "city": "Margarima"
  },
  {
    "code": "KMA",
    "country_code": "PG",
    "city": "Kerema"
  },
  {
    "code": "NWA",
    "country_code": "KM",
    "city": "Moheli"
  },
  {
    "code": "YIH",
    "country_code": "CN",
    "city": "Yichang"
  },
  {
    "code": "GZO",
    "country_code": "SB",
    "city": "Gizo"
  },
  {
    "code": "SBV",
    "country_code": "PG",
    "city": "Sabah"
  },
  {
    "code": "ABT",
    "country_code": "SA",
    "city": "Al-Baha"
  },
  {
    "code": "CMA",
    "country_code": "AU",
    "city": "Cunnamulla"
  },
  {
    "code": "VDS",
    "country_code": "NO",
    "city": "Vadso"
  },
  {
    "code": "NUD",
    "country_code": "SD",
    "city": "En Nahud"
  },
  {
    "code": "MZD",
    "country_code": "EC",
    "city": "Mendez"
  },
  {
    "code": "NIB",
    "country_code": "US",
    "city": "Nikolai"
  },
  {
    "code": "CVE",
    "country_code": "CO",
    "city": "Covenas"
  },
  {
    "code": "TNV",
    "country_code": "KI",
    "city": "Tabuaeran"
  },
  {
    "code": "JNI",
    "country_code": "AR",
    "city": "Junin"
  },
  {
    "code": "IKT",
    "country_code": "RU",
    "city": "Irkutsk"
  },
  {
    "code": "AUD",
    "country_code": "AU",
    "city": "Augustus Downs"
  },
  {
    "code": "MPG",
    "country_code": "PG",
    "city": "Makini"
  },
  {
    "code": "UIN",
    "country_code": "US",
    "city": "Quincy"
  },
  {
    "code": "ZJU",
    "country_code": "CH",
    "city": "Olten"
  },
  {
    "code": "BJD",
    "country_code": "IS",
    "city": "Bakkafjordur"
  },
  {
    "code": "CFD",
    "country_code": "US",
    "city": "Bryan"
  },
  {
    "code": "GYA",
    "country_code": "BO",
    "city": "Guayaramerin"
  },
  {
    "code": "YDL",
    "country_code": "CA",
    "city": "Dease Lake"
  },
  {
    "code": "MID",
    "country_code": "MX",
    "city": "Merida"
  },
  {
    "code": "CRY",
    "country_code": "AU",
    "city": "Carlton Hill"
  },
  {
    "code": "HMT",
    "country_code": "US",
    "city": "Hemet"
  },
  {
    "code": "LBF",
    "country_code": "US",
    "city": "North Platte"
  },
  {
    "code": "TDT",
    "country_code": "ZA",
    "city": "Timbavati"
  },
  {
    "code": "VNT",
    "country_code": "LV",
    "city": "Ventspils"
  },
  {
    "code": "MZL",
    "country_code": "CO",
    "city": "Manizales"
  },
  {
    "code": "OME",
    "country_code": "US",
    "city": "Nome"
  },
  {
    "code": "LGH",
    "country_code": "AU",
    "city": "Leigh Creek"
  },
  {
    "code": "KGW",
    "country_code": "PG",
    "city": "Kagi"
  },
  {
    "code": "ZBK",
    "country_code": "ME",
    "city": "Zabljak"
  },
  {
    "code": "SFC",
    "country_code": "GP",
    "city": "St Francois"
  },
  {
    "code": "GDX",
    "country_code": "RU",
    "city": "Magadan"
  },
  {
    "code": "YFL",
    "country_code": "CA",
    "city": "Fort Reliance"
  },
  {
    "code": "LUI",
    "country_code": "HN",
    "city": "La Union"
  },
  {
    "code": "PAT",
    "country_code": "IN",
    "city": "Patna"
  },
  {
    "code": "CDH",
    "country_code": "US",
    "city": "Camden"
  },
  {
    "code": "TLB",
    "country_code": "PK",
    "city": "Tarbela"
  },
  {
    "code": "YAN",
    "country_code": "CD",
    "city": "Yangambi"
  },
  {
    "code": "QQD",
    "country_code": "GB",
    "city": "Dover"
  },
  {
    "code": "KLL",
    "country_code": "US",
    "city": "Levelock"
  },
  {
    "code": "TXN",
    "country_code": "CN",
    "city": "Tunxi"
  },
  {
    "code": "YXC",
    "country_code": "CA",
    "city": "Cranbrook"
  },
  {
    "code": "QWA",
    "country_code": "CA",
    "city": "Oshawa"
  },
  {
    "code": "MYA",
    "country_code": "AU",
    "city": "Moruya"
  },
  {
    "code": "CXL",
    "country_code": "US",
    "city": "Calexico"
  },
  {
    "code": "HOA",
    "country_code": "KE",
    "city": "Hola"
  },
  {
    "code": "LCH",
    "country_code": "US",
    "city": "Lake Charles"
  },
  {
    "code": "OUN",
    "country_code": "US",
    "city": "Norman"
  },
  {
    "code": "DIW",
    "country_code": "LK",
    "city": "Dikwella"
  },
  {
    "code": "XRH",
    "country_code": "AU",
    "city": "Richmond"
  },
  {
    "code": "HCC",
    "country_code": "US",
    "city": "Hudson"
  },
  {
    "code": "MHZ",
    "country_code": "GB",
    "city": "Mildenhall"
  },
  {
    "code": "TZC",
    "country_code": "US",
    "city": "Caro"
  },
  {
    "code": "WUZ",
    "country_code": "CN",
    "city": "Wuzhou"
  },
  {
    "code": "UCY",
    "country_code": "US",
    "city": "Union City"
  },
  {
    "code": "CMG",
    "country_code": "BR",
    "city": "Corumba"
  },
  {
    "code": "GGM",
    "country_code": "KE",
    "city": "Kakamega"
  },
  {
    "code": "TUQ",
    "country_code": "BF",
    "city": "Tougan"
  },
  {
    "code": "WOS",
    "country_code": "KP",
    "city": "Wonsan"
  },
  {
    "code": "SBZ",
    "country_code": "RO",
    "city": "Sibiu"
  },
  {
    "code": "NOO",
    "country_code": "PG",
    "city": "Naoro"
  },
  {
    "code": "NOT",
    "country_code": "US",
    "city": "Novato"
  },
  {
    "code": "TLE",
    "country_code": "MG",
    "city": "Tulear"
  },
  {
    "code": "GPL",
    "country_code": "CR",
    "city": "Guapiles"
  },
  {
    "code": "DEO",
    "country_code": "US",
    "city": "Dearborn"
  },
  {
    "code": "NMA",
    "country_code": "UZ",
    "city": "Namangan"
  },
  {
    "code": "CKE",
    "country_code": "US",
    "city": "Clear Lake"
  },
  {
    "code": "KRB",
    "country_code": "AU",
    "city": "Karumba"
  },
  {
    "code": "NMP",
    "country_code": "AU",
    "city": "New Moon"
  },
  {
    "code": "ZKL",
    "country_code": "ID",
    "city": "Steenkool"
  },
  {
    "code": "CUF",
    "country_code": "IT",
    "city": "Cuneo"
  },
  {
    "code": "SPP",
    "country_code": "AO",
    "city": "Menongue"
  },
  {
    "code": "NVT",
    "country_code": "BR",
    "city": "Navegantes"
  },
  {
    "code": "IAN",
    "country_code": "US",
    "city": "Kiana"
  },
  {
    "code": "MMG",
    "country_code": "AU",
    "city": "Mount Magnet"
  },
  {
    "code": "HAI",
    "country_code": "US",
    "city": "Three Rivers"
  },
  {
    "code": "JAL",
    "country_code": "MX",
    "city": "Jalapa"
  },
  {
    "code": "FIZ",
    "country_code": "AU",
    "city": "Fitzroy Crossing"
  },
  {
    "code": "KKW",
    "country_code": "CD",
    "city": "Kikwit"
  },
  {
    "code": "OBY",
    "country_code": "GL",
    "city": "Ittoqqortoormiit"
  },
  {
    "code": "PCU",
    "country_code": "US",
    "city": "Picayune"
  },
  {
    "code": "BWF",
    "country_code": "GB",
    "city": "Barrow-In-Furness"
  },
  {
    "code": "SWW",
    "country_code": "US",
    "city": "Sweetwater"
  },
  {
    "code": "LPM",
    "country_code": "VU",
    "city": "Lamap"
  },
  {
    "code": "BKB",
    "country_code": "IN",
    "city": "Bikaner"
  },
  {
    "code": "KWP",
    "country_code": "US",
    "city": "West Point"
  },
  {
    "code": "CMM",
    "country_code": "GT",
    "city": "Carmelita"
  },
  {
    "code": "RMN",
    "country_code": "PG",
    "city": "Rumginae"
  },
  {
    "code": "UDO",
    "country_code": "LA",
    "city": "Udomxay"
  },
  {
    "code": "SYK",
    "country_code": "IS",
    "city": "Stykkisholmur"
  },
  {
    "code": "HAF",
    "country_code": "US",
    "city": "Half Moon"
  },
  {
    "code": "JDA",
    "country_code": "US",
    "city": "John Day"
  },
  {
    "code": "MVB",
    "country_code": "GA",
    "city": "Franceville"
  },
  {
    "code": "SGV",
    "country_code": "AR",
    "city": "Sierra Grande"
  },
  {
    "code": "DNO",
    "country_code": "BR",
    "city": "Dianopolis"
  },
  {
    "code": "JJU",
    "country_code": "GL",
    "city": "Qaqortoq"
  },
  {
    "code": "YPD",
    "country_code": "CA",
    "city": "Parry Sound"
  },
  {
    "code": "FLY",
    "country_code": "AU",
    "city": "Finley"
  },
  {
    "code": "TTA",
    "country_code": "MA",
    "city": "Tan Tan"
  },
  {
    "code": "KCN",
    "country_code": "US",
    "city": "Chernofski"
  },
  {
    "code": "BBG",
    "country_code": "KI",
    "city": "Butaritari"
  },
  {
    "code": "GAG",
    "country_code": "US",
    "city": "Gage"
  },
  {
    "code": "GCC",
    "country_code": "US",
    "city": "Gillette"
  },
  {
    "code": "SJM",
    "country_code": "DO",
    "city": "San Juan"
  },
  {
    "code": "DGT",
    "country_code": "PH",
    "city": "Dumaguete"
  },
  {
    "code": "MWN",
    "country_code": "TZ",
    "city": "Mwadui"
  },
  {
    "code": "WPM",
    "country_code": "PG",
    "city": "Wipim"
  },
  {
    "code": "ЗЛА",
    "country_code": "RU",
    "city": "Zaliv Lavrentija"
  },
  {
    "code": "KMB",
    "country_code": "PG",
    "city": "Koinambe"
  },
  {
    "code": "MRM",
    "country_code": "PG",
    "city": "Manare"
  },
  {
    "code": "KNS",
    "country_code": "AU",
    "city": "King Island"
  },
  {
    "code": "LKN",
    "country_code": "NO",
    "city": "Leknes"
  },
  {
    "code": "PLA",
    "country_code": "CO",
    "city": "Planadas"
  },
  {
    "code": "YCB",
    "country_code": "CA",
    "city": "Cambridge Bay"
  },
  {
    "code": "GGC",
    "country_code": "AO",
    "city": "Lumbala"
  },
  {
    "code": "URI",
    "country_code": "CO",
    "city": "Uribe"
  },
  {
    "code": "KTG",
    "country_code": "ID",
    "city": "Ketapang"
  },
  {
    "code": "SBQ",
    "country_code": "PK",
    "city": "Sibi"
  },
  {
    "code": "CPU",
    "country_code": "BR",
    "city": "Cururupu"
  },
  {
    "code": "IEG",
    "country_code": "PL",
    "city": "Zielona Gora"
  },
  {
    "code": "RWS",
    "country_code": "BR",
    "city": "Sumare"
  },
  {
    "code": "ZJC",
    "country_code": "CH",
    "city": "Lenzburg"
  },
  {
    "code": "LPN",
    "country_code": "PG",
    "city": "Leron Plains"
  },
  {
    "code": "KKE",
    "country_code": "NZ",
    "city": "Kerikeri"
  },
  {
    "code": "DAO",
    "country_code": "PG",
    "city": "Dabo"
  },
  {
    "code": "CDV",
    "country_code": "US",
    "city": "Cordova"
  },
  {
    "code": "SOO",
    "country_code": "SE",
    "city": "Soderhamn"
  },
  {
    "code": "CIG",
    "country_code": "US",
    "city": "Craig"
  },
  {
    "code": "LII",
    "country_code": "ID",
    "city": "Mulia"
  },
  {
    "code": "XUF",
    "country_code": "ES",
    "city": "Cartagena"
  },
  {
    "code": "EMG",
    "country_code": "ZA",
    "city": "Empangeni"
  },
  {
    "code": "ZPC",
    "country_code": "CL",
    "city": "Pucon"
  },
  {
    "code": "MVL",
    "country_code": "US",
    "city": "Stowe"
  },
  {
    "code": "SCQ",
    "country_code": "ES",
    "city": "Santiago De Compostela"
  },
  {
    "code": "CCC",
    "country_code": "CU",
    "city": "Cayo Coco"
  },
  {
    "code": "TIQ",
    "country_code": "MP",
    "city": "Tinian"
  },
  {
    "code": "KBM",
    "country_code": "PG",
    "city": "Kabwum"
  },
  {
    "code": "XZK",
    "country_code": "CA",
    "city": "Amherst"
  },
  {
    "code": "QQX",
    "country_code": "GB",
    "city": "Bath"
  },
  {
    "code": "PWN",
    "country_code": "BS",
    "city": "Pitts Town"
  },
  {
    "code": "MLQ",
    "country_code": "PG",
    "city": "Malalaua"
  },
  {
    "code": "PTA",
    "country_code": "US",
    "city": "Port Alsworth"
  },
  {
    "code": "VIN",
    "country_code": "UA",
    "city": "Vinnytsia"
  },
  {
    "code": "GRQ",
    "country_code": "NL",
    "city": "Groningen"
  },
  {
    "code": "SPG",
    "country_code": "US",
    "city": "St Petersburg"
  },
  {
    "code": "KPR",
    "country_code": "US",
    "city": "Port Williams"
  },
  {
    "code": "RBA",
    "country_code": "MA",
    "city": "Rabat"
  },
  {
    "code": "XMI",
    "country_code": "TZ",
    "city": "Masasi"
  },
  {
    "code": "AXD",
    "country_code": "GR",
    "city": "Alexandroupolis"
  },
  {
    "code": "MTR",
    "country_code": "CO",
    "city": "Monteria"
  },
  {
    "code": "LIV",
    "country_code": "US",
    "city": "Livengood"
  },
  {
    "code": "IWA",
    "country_code": "RU",
    "city": "Ivanovo"
  },
  {
    "code": "ТИЛ",
    "country_code": "RU",
    "city": "Tilichiki"
  },
  {
    "code": "KAB",
    "country_code": "ZW",
    "city": "Kariba"
  },
  {
    "code": "ODB",
    "country_code": "ES",
    "city": "Cordoba"
  },
  {
    "code": "KZI",
    "country_code": "GR",
    "city": "Kozani"
  },
  {
    "code": "URB",
    "country_code": "BR",
    "city": "Urubupunga"
  },
  {
    "code": "BOY",
    "country_code": "BF",
    "city": "Bobo Dioulasso"
  },
  {
    "code": "GAL",
    "country_code": "US",
    "city": "Galena"
  },
  {
    "code": "ZNC",
    "country_code": "US",
    "city": "Nyac"
  },
  {
    "code": "КСЧ",
    "country_code": "RU",
    "city": "Krasnyiy Chikoy"
  },
  {
    "code": "HIM",
    "country_code": "LK",
    "city": "Hingurakgoda"
  },
  {
    "code": "BFL",
    "country_code": "US",
    "city": "Bakersfield"
  },
  {
    "code": "YDV",
    "country_code": "CA",
    "city": "Bloodvein"
  },
  {
    "code": "GAS",
    "country_code": "KE",
    "city": "Garissa"
  },
  {
    "code": "RAS",
    "country_code": "IR",
    "city": "Rasht"
  },
  {
    "code": "COG",
    "country_code": "CO",
    "city": "Condoto"
  },
  {
    "code": "KIR",
    "country_code": "IE",
    "city": "Kerry County"
  },
  {
    "code": "NCT",
    "country_code": "CR",
    "city": "Nicoya"
  },
  {
    "code": "WOD",
    "country_code": "US",
    "city": "Wood River"
  },
  {
    "code": "ATH",
    "country_code": "GR",
    "city": "Athens"
  },
  {
    "code": "DDC",
    "country_code": "US",
    "city": "Dodge City"
  },
  {
    "code": "TLZ",
    "country_code": "BR",
    "city": "Catalao"
  },
  {
    "code": "DOS",
    "country_code": "PG",
    "city": "Dios"
  },
  {
    "code": "KAD",
    "country_code": "NG",
    "city": "Kaduna"
  },
  {
    "code": "NAX",
    "country_code": "US",
    "city": "Kapolei"
  },
  {
    "code": "LRM",
    "country_code": "DO",
    "city": "La Romana"
  },
  {
    "code": "BNC",
    "country_code": "CD",
    "city": "Beni"
  },
  {
    "code": "QSF",
    "country_code": "DZ",
    "city": "Setif"
  },
  {
    "code": "BBZ",
    "country_code": "ZM",
    "city": "Zambezi"
  },
  {
    "code": "WWP",
    "country_code": "US",
    "city": "Whale Pass"
  },
  {
    "code": "NBX",
    "country_code": "ID",
    "city": "Nabire"
  },
  {
    "code": "YPZ",
    "country_code": "CA",
    "city": "Burns Lake"
  },
  {
    "code": "SXB",
    "country_code": "FR",
    "city": "Strasbourg"
  },
  {
    "code": "BEZ",
    "country_code": "KI",
    "city": "Beru"
  },
  {
    "code": "TTB",
    "country_code": "IT",
    "city": "Tortoli"
  },
  {
    "code": "GHE",
    "country_code": "PA",
    "city": "Garachine"
  },
  {
    "code": "MRP",
    "country_code": "AU",
    "city": "Marla"
  },
  {
    "code": "FOB",
    "country_code": "US",
    "city": "Fort Bragg"
  },
  {
    "code": "HVN",
    "country_code": "US",
    "city": "New Haven"
  },
  {
    "code": "NZC",
    "country_code": "PE",
    "city": "Nazca"
  },
  {
    "code": "FPR",
    "country_code": "US",
    "city": "Fort Pierce"
  },
  {
    "code": "AKU",
    "country_code": "CN",
    "city": "Aksu"
  },
  {
    "code": "SOB",
    "country_code": "HU",
    "city": "Sármellék"
  },
  {
    "code": "AIF",
    "country_code": "BR",
    "city": "Assis"
  },
  {
    "code": "CRC",
    "country_code": "CO",
    "city": "Cartago"
  },
  {
    "code": "ZKV",
    "country_code": "CH",
    "city": "Thalwil"
  },
  {
    "code": "OAS",
    "country_code": "AF",
    "city": "Sharana"
  },
  {
    "code": "BXE",
    "country_code": "SN",
    "city": "Bakel"
  },
  {
    "code": "ZIH",
    "country_code": "MX",
    "city": "Ixtapa/Zihuatanejo"
  },
  {
    "code": "PAF",
    "country_code": "UG",
    "city": "Pakuba"
  },
  {
    "code": "ZFW",
    "country_code": "CA",
    "city": "Fairview"
  },
  {
    "code": "OIR",
    "country_code": "JP",
    "city": "Okushiri"
  },
  {
    "code": "EEN",
    "country_code": "US",
    "city": "Keene"
  },
  {
    "code": "SVU",
    "country_code": "FJ",
    "city": "Savusavu"
  },
  {
    "code": "UCA",
    "country_code": "US",
    "city": "Utica"
  },
  {
    "code": "LVR",
    "country_code": "BR",
    "city": "Lucas Do Rio Verde"
  },
  {
    "code": "TKG",
    "country_code": "ID",
    "city": "Bandar Lampung"
  },
  {
    "code": "WWY",
    "country_code": "AU",
    "city": "West Wyalong"
  },
  {
    "code": "YHO",
    "country_code": "CA",
    "city": "Hopedale"
  },
  {
    "code": "TAN",
    "country_code": "AU",
    "city": "Tangalooma"
  },
  {
    "code": "TEG",
    "country_code": "BF",
    "city": "Tenkodogo"
  },
  {
    "code": "WLB",
    "country_code": "US",
    "city": "Labouchere Bay"
  },
  {
    "code": "YPH",
    "country_code": "CA",
    "city": "Inukjuak"
  },
  {
    "code": "QWU",
    "country_code": "DE",
    "city": "Wuerzburg"
  },
  {
    "code": "PSR",
    "country_code": "IT",
    "city": "Pescara"
  },
  {
    "code": "OMK",
    "country_code": "US",
    "city": "Omak"
  },
  {
    "code": "NDG",
    "country_code": "CN",
    "city": "Qiqihar"
  },
  {
    "code": "MEJ",
    "country_code": "US",
    "city": "Meadville"
  },
  {
    "code": "LLB",
    "country_code": "CN",
    "city": "Libo City"
  },
  {
    "code": "HOW",
    "country_code": "PA",
    "city": "Fort Kobbe"
  },
  {
    "code": "KCK",
    "country_code": "RU",
    "city": "Kirensk"
  },
  {
    "code": "FCA",
    "country_code": "US",
    "city": "Kalispell"
  },
  {
    "code": "AAN",
    "country_code": "AE",
    "city": "Al Ain"
  },
  {
    "code": "LEC",
    "country_code": "BR",
    "city": "Lencois"
  },
  {
    "code": "SSG",
    "country_code": "GQ",
    "city": "Malabo"
  },
  {
    "code": "NEF",
    "country_code": "RU",
    "city": "Neftekamsk"
  },
  {
    "code": "MIZ",
    "country_code": "AU",
    "city": "Mainoru"
  },
  {
    "code": "ARW",
    "country_code": "RO",
    "city": "Arad"
  },
  {
    "code": "KUH",
    "country_code": "JP",
    "city": "Kushiro"
  },
  {
    "code": "IDP",
    "country_code": "US",
    "city": "Independence"
  },
  {
    "code": "CDU",
    "country_code": "AU",
    "city": "Camden"
  },
  {
    "code": "SXT",
    "country_code": "MY",
    "city": "Taman Negara"
  },
  {
    "code": "RFA",
    "country_code": "CF",
    "city": "Rafai"
  },
  {
    "code": "MSG",
    "country_code": "LS",
    "city": "Matsaile"
  },
  {
    "code": "EWI",
    "country_code": "ID",
    "city": "Enarotali"
  },
  {
    "code": "NDK",
    "country_code": "MH",
    "city": "Namdrik Island"
  },
  {
    "code": "WBM",
    "country_code": "PG",
    "city": "Wapenamanda"
  },
  {
    "code": "KBZ",
    "country_code": "NZ",
    "city": "Kaikoura"
  },
  {
    "code": "CPN",
    "country_code": "PG",
    "city": "Cape Rodney"
  },
  {
    "code": "ROZ",
    "country_code": "ES",
    "city": "Rota"
  },
  {
    "code": "YOC",
    "country_code": "CA",
    "city": "Old Crow"
  },
  {
    "code": "CYA",
    "country_code": "HT",
    "city": "Les Cayes"
  },
  {
    "code": "SOW",
    "country_code": "US",
    "city": "Show Low"
  },
  {
    "code": "ELR",
    "country_code": "ID",
    "city": "Elelim"
  },
  {
    "code": "ANX",
    "country_code": "NO",
    "city": "Andenes"
  },
  {
    "code": "SBU",
    "country_code": "ZA",
    "city": "Springbok"
  },
  {
    "code": "NZH",
    "country_code": "CN",
    "city": "Manzhouli"
  },
  {
    "code": "PEH",
    "country_code": "AR",
    "city": "Pehuajo"
  },
  {
    "code": "SLW",
    "country_code": "MX",
    "city": "Saltillo"
  },
  {
    "code": "BJN",
    "country_code": "MZ",
    "city": "Bajone"
  },
  {
    "code": "JIA",
    "country_code": "BR",
    "city": "Juina"
  },
  {
    "code": "AFS",
    "country_code": "UZ",
    "city": "Zarafshan"
  },
  {
    "code": "SKB",
    "country_code": "KN",
    "city": "Saint Kitts"
  },
  {
    "code": "BOT",
    "country_code": "PG",
    "city": "Boset"
  },
  {
    "code": "LNY",
    "country_code": "US",
    "city": "Lanai"
  },
  {
    "code": "ZSS",
    "country_code": "CI",
    "city": "Sassandra"
  },
  {
    "code": "BHI",
    "country_code": "AR",
    "city": "Bahia Blanca"
  },
  {
    "code": "CCP",
    "country_code": "CL",
    "city": "Concepcion"
  },
  {
    "code": "DZO",
    "country_code": "UY",
    "city": "Durazno"
  },
  {
    "code": "YCQ",
    "country_code": "CA",
    "city": "Chetwynd"
  },
  {
    "code": "RBY",
    "country_code": "US",
    "city": "Ruby"
  },
  {
    "code": "NGL",
    "country_code": "ZA",
    "city": "Ngala"
  },
  {
    "code": "DYW",
    "country_code": "AU",
    "city": "Daly Waters"
  },
  {
    "code": "KPH",
    "country_code": "US",
    "city": "Pauloff Harbor"
  },
  {
    "code": "LMU",
    "country_code": "ID",
    "city": "Jemaja Island"
  },
  {
    "code": "RTW",
    "country_code": "RU",
    "city": "Saratov"
  },
  {
    "code": "HGO",
    "country_code": "CI",
    "city": "Korhogo"
  },
  {
    "code": "GLH",
    "country_code": "US",
    "city": "Greenville"
  },
  {
    "code": "EXT",
    "country_code": "GB",
    "city": "Exeter"
  },
  {
    "code": "CIM",
    "country_code": "CO",
    "city": "Cimitarra"
  },
  {
    "code": "BUA",
    "country_code": "PG",
    "city": "Buka"
  },
  {
    "code": "KNQ",
    "country_code": "NC",
    "city": "Kone"
  },
  {
    "code": "OZU",
    "country_code": "ES",
    "city": "Montilla"
  },
  {
    "code": "ELU",
    "country_code": "DZ",
    "city": "El Oued"
  },
  {
    "code": "CUW",
    "country_code": "US",
    "city": "Cube Cove"
  },
  {
    "code": "ZAW",
    "country_code": "DK",
    "city": "Nykobing Mors"
  },
  {
    "code": "VIF",
    "country_code": "IT",
    "city": "Vieste"
  },
  {
    "code": "SDS",
    "country_code": "JP",
    "city": "Sado Shima"
  },
  {
    "code": "BLH",
    "country_code": "US",
    "city": "Blythe"
  },
  {
    "code": "WAS",
    "country_code": "US",
    "city": "Washington"
  },
  {
    "code": "DXD",
    "country_code": "AU",
    "city": "Dixie"
  },
  {
    "code": "KJI",
    "country_code": "CN",
    "city": "Buerjin"
  },
  {
    "code": "CWT",
    "country_code": "AU",
    "city": "Cowra"
  },
  {
    "code": "TXM",
    "country_code": "ID",
    "city": "Teminabuan"
  },
  {
    "code": "FMU",
    "country_code": "US",
    "city": "Florence"
  },
  {
    "code": "CAR",
    "country_code": "US",
    "city": "Caribou"
  },
  {
    "code": "WVB",
    "country_code": "NA",
    "city": "Walvis Bay"
  },
  {
    "code": "ADG",
    "country_code": "US",
    "city": "Adrian"
  },
  {
    "code": "BWJ",
    "country_code": "PG",
    "city": "Bawan"
  },
  {
    "code": "ALR",
    "country_code": "NZ",
    "city": "Alexandra"
  },
  {
    "code": "TOY",
    "country_code": "JP",
    "city": "Toyama"
  },
  {
    "code": "GOZ",
    "country_code": "BG",
    "city": "Gorna Oriahovitsa"
  },
  {
    "code": "CFO",
    "country_code": "BR",
    "city": "Confreza"
  },
  {
    "code": "BTL",
    "country_code": "US",
    "city": "Battle Creek"
  },
  {
    "code": "UDJ",
    "country_code": "UA",
    "city": "Uzhgorod"
  },
  {
    "code": "SKM",
    "country_code": "GY",
    "city": "Skeldon"
  },
  {
    "code": "SOF",
    "country_code": "BG",
    "city": "Sofia"
  },
  {
    "code": "KOV",
    "country_code": "KZ",
    "city": "Kokshetau"
  },
  {
    "code": "OBD",
    "country_code": "ID",
    "city": "Obano"
  },
  {
    "code": "LEA",
    "country_code": "AU",
    "city": "Learmonth"
  },
  {
    "code": "MQZ",
    "country_code": "AU",
    "city": "Margaret River"
  },
  {
    "code": "MFC",
    "country_code": "LS",
    "city": "Mafeteng"
  },
  {
    "code": "VIH",
    "country_code": "US",
    "city": "Vichy"
  },
  {
    "code": "NUP",
    "country_code": "US",
    "city": "Nunapitchuk"
  },
  {
    "code": "BMS",
    "country_code": "BR",
    "city": "Brumado"
  },
  {
    "code": "OZA",
    "country_code": "US",
    "city": "Ozona"
  },
  {
    "code": "TDL",
    "country_code": "AR",
    "city": "Tandil"
  },
  {
    "code": "DGF",
    "country_code": "CA",
    "city": "Douglas Lake"
  },
  {
    "code": "NDU",
    "country_code": "NA",
    "city": "Rundu"
  },
  {
    "code": "MOK",
    "country_code": "UZ",
    "city": "Muynak"
  },
  {
    "code": "IAM",
    "country_code": "DZ",
    "city": "In Amenas"
  },
  {
    "code": "IZM",
    "country_code": "TR",
    "city": "Izmir"
  },
  {
    "code": "IXV",
    "country_code": "IN",
    "city": "Along"
  },
  {
    "code": "TAT",
    "country_code": "SK",
    "city": "Poprad/Tatry"
  },
  {
    "code": "GDM",
    "country_code": "US",
    "city": "Gardner"
  },
  {
    "code": "YAZ",
    "country_code": "CA",
    "city": "Tofino"
  },
  {
    "code": "GBT",
    "country_code": "IR",
    "city": "Gorgon"
  },
  {
    "code": "DSV",
    "country_code": "US",
    "city": "Dansville"
  },
  {
    "code": "ZMT",
    "country_code": "CA",
    "city": "Masset"
  },
  {
    "code": "JGB",
    "country_code": "IN",
    "city": "Jagdalpur"
  },
  {
    "code": "BGL",
    "country_code": "NP",
    "city": "Baglung"
  },
  {
    "code": "BXK",
    "country_code": "US",
    "city": "Buckeye"
  },
  {
    "code": "WML",
    "country_code": "MG",
    "city": "Malaimbandy"
  },
  {
    "code": "CVI",
    "country_code": "AR",
    "city": "Caleta Olivia"
  },
  {
    "code": "CDQ",
    "country_code": "AU",
    "city": "Croydon"
  },
  {
    "code": "GZW",
    "country_code": "IR",
    "city": "Ghazvin"
  },
  {
    "code": "BMH",
    "country_code": "PG",
    "city": "Bomai"
  },
  {
    "code": "UCC",
    "country_code": "US",
    "city": "Yucca Flat"
  },
  {
    "code": "WTK",
    "country_code": "US",
    "city": "Noatak"
  },
  {
    "code": "PGM",
    "country_code": "US",
    "city": "Port Graham"
  },
  {
    "code": "INU",
    "country_code": "NR",
    "city": "Nauru Island"
  },
  {
    "code": "PAY",
    "country_code": "MY",
    "city": "Pamol"
  },
  {
    "code": "WNR",
    "country_code": "AU",
    "city": "Windorah"
  },
  {
    "code": "MSS",
    "country_code": "US",
    "city": "Massena"
  },
  {
    "code": "TLD",
    "country_code": "BW",
    "city": "Tuli Block"
  },
  {
    "code": "ZTM",
    "country_code": "CA",
    "city": "Shamattawa"
  },
  {
    "code": "GFN",
    "country_code": "AU",
    "city": "Grafton"
  },
  {
    "code": "NEA",
    "country_code": "US",
    "city": "Glynco"
  },
  {
    "code": "ATE",
    "country_code": "US",
    "city": "Antlers"
  },
  {
    "code": "WUU",
    "country_code": "SS",
    "city": "Wau"
  },
  {
    "code": "ATZ",
    "country_code": "EG",
    "city": "Assiut"
  },
  {
    "code": "TGO",
    "country_code": "CN",
    "city": "Tongliao"
  },
  {
    "code": "MGF",
    "country_code": "BR",
    "city": "Maringa"
  },
  {
    "code": "KNX",
    "country_code": "AU",
    "city": "Kununurra"
  },
  {
    "code": "SPI",
    "country_code": "US",
    "city": "Springfield"
  },
  {
    "code": "CBN",
    "country_code": "ID",
    "city": "Cirebon"
  },
  {
    "code": "TJS",
    "country_code": "ID",
    "city": "Tanjung Selor"
  },
  {
    "code": "AXA",
    "country_code": "AI",
    "city": "The Valley"
  },
  {
    "code": "NGI",
    "country_code": "FJ",
    "city": "Ngau Island"
  },
  {
    "code": "AHF",
    "country_code": "US",
    "city": "Arapahoe"
  },
  {
    "code": "AJN",
    "country_code": "KM",
    "city": "Anjouan"
  },
  {
    "code": "AYA",
    "country_code": "CO",
    "city": "Ayapel"
  },
  {
    "code": "KKD",
    "country_code": "PG",
    "city": "Kokoda"
  },
  {
    "code": "STA",
    "country_code": "DK",
    "city": "Skjern"
  },
  {
    "code": "JEG",
    "country_code": "GL",
    "city": "Aasiaat"
  },
  {
    "code": "BCJ",
    "country_code": "US",
    "city": "Baca Grande"
  },
  {
    "code": "YQS",
    "country_code": "CA",
    "city": "St Thomas"
  },
  {
    "code": "CSC",
    "country_code": "CR",
    "city": "Canas"
  },
  {
    "code": "LCO",
    "country_code": "CG",
    "city": "Lague"
  },
  {
    "code": "IIA",
    "country_code": "IE",
    "city": "Galloway"
  },
  {
    "code": "RMI",
    "country_code": "IT",
    "city": "Rimini"
  },
  {
    "code": "QWO",
    "country_code": "DK",
    "city": "Holstebro"
  },
  {
    "code": "OOL",
    "country_code": "AU",
    "city": "Coolangatta (Gold Coast)"
  },
  {
    "code": "FLC",
    "country_code": "AU",
    "city": "Falls Creek"
  },
  {
    "code": "MBQ",
    "country_code": "UG",
    "city": "Mbarara"
  },
  {
    "code": "MEA",
    "country_code": "BR",
    "city": "Macae"
  },
  {
    "code": "AHO",
    "country_code": "IT",
    "city": "Alghero"
  },
  {
    "code": "SKV",
    "country_code": "EG",
    "city": "Santa Katarina"
  },
  {
    "code": "UMS",
    "country_code": "RU",
    "city": "Ust-Maya"
  },
  {
    "code": "PBC",
    "country_code": "MX",
    "city": "Puebla"
  },
  {
    "code": "JEF",
    "country_code": "US",
    "city": "Jefferson City"
  },
  {
    "code": "ENU",
    "country_code": "NG",
    "city": "Enugu"
  },
  {
    "code": "VAO",
    "country_code": "SB",
    "city": "Suavanao"
  },
  {
    "code": "PAJ",
    "country_code": "PK",
    "city": "Para Chinar"
  },
  {
    "code": "MUE",
    "country_code": "US",
    "city": "Kamuela"
  },
  {
    "code": "ALF",
    "country_code": "NO",
    "city": "Alta"
  },
  {
    "code": "LKP",
    "country_code": "US",
    "city": "Lake Placid"
  },
  {
    "code": "YDI",
    "country_code": "CA",
    "city": "Davis Inlet"
  },
  {
    "code": "MIT",
    "country_code": "US",
    "city": "Shafter"
  },
  {
    "code": "XEW",
    "country_code": "SE",
    "city": "Flemingsberg"
  },
  {
    "code": "ZAM",
    "country_code": "PH",
    "city": "Zamboanga"
  },
  {
    "code": "PIM",
    "country_code": "US",
    "city": "Pine Mountain"
  },
  {
    "code": "AYI",
    "country_code": "CO",
    "city": "Yari"
  },
  {
    "code": "TLP",
    "country_code": "PG",
    "city": "Tumolbil"
  },
  {
    "code": "ZBT",
    "country_code": "DK",
    "city": "Kolding"
  },
  {
    "code": "NLF",
    "country_code": "AU",
    "city": "Darnley Island"
  },
  {
    "code": "NSE",
    "country_code": "US",
    "city": "Milton"
  },
  {
    "code": "NAZ",
    "country_code": "SB",
    "city": "Star Harbour"
  },
  {
    "code": "XGQ",
    "country_code": "FI",
    "city": "Saariselka"
  },
  {
    "code": "RNH",
    "country_code": "US",
    "city": "New Richmond"
  },
  {
    "code": "SRV",
    "country_code": "US",
    "city": "Stony River"
  },
  {
    "code": "PSG",
    "country_code": "US",
    "city": "Petersburg"
  },
  {
    "code": "DLK",
    "country_code": "AU",
    "city": "Dulkaninna"
  },
  {
    "code": "EGX",
    "country_code": "US",
    "city": "Egegik"
  },
  {
    "code": "OAX",
    "country_code": "MX",
    "city": "Oaxaca"
  },
  {
    "code": "TAO",
    "country_code": "CN",
    "city": "Qingdao"
  },
  {
    "code": "PBR",
    "country_code": "GT",
    "city": "Puerto Barrios"
  },
  {
    "code": "BGO",
    "country_code": "NO",
    "city": "Bergen"
  },
  {
    "code": "UAI",
    "country_code": "TL",
    "city": "Suai"
  },
  {
    "code": "FAR",
    "country_code": "US",
    "city": "Fargo"
  },
  {
    "code": "NRY",
    "country_code": "AU",
    "city": "Newry"
  },
  {
    "code": "VRL",
    "country_code": "PT",
    "city": "Vila Real"
  },
  {
    "code": "PJZ",
    "country_code": "MX",
    "city": "Puerto Juarez"
  },
  {
    "code": "RNT",
    "country_code": "US",
    "city": "Renton"
  },
  {
    "code": "YQI",
    "country_code": "CA",
    "city": "Yarmouth"
  },
  {
    "code": "LLX",
    "country_code": "US",
    "city": "Lyndonville"
  },
  {
    "code": "WRO",
    "country_code": "PL",
    "city": "Wroclaw"
  },
  {
    "code": "XFG",
    "country_code": "CA",
    "city": "Perce"
  },
  {
    "code": "KRE",
    "country_code": "BI",
    "city": "Kirundo"
  },
  {
    "code": "UDA",
    "country_code": "AU",
    "city": "Undarra"
  },
  {
    "code": "YMR",
    "country_code": "CA",
    "city": "Merry Island"
  },
  {
    "code": "RVA",
    "country_code": "MG",
    "city": "Farafangana"
  },
  {
    "code": "PDT",
    "country_code": "US",
    "city": "Pendleton"
  },
  {
    "code": "ISD",
    "country_code": "CO",
    "city": "Iscuande"
  },
  {
    "code": "DGD",
    "country_code": "AU",
    "city": "Dalgaranga"
  },
  {
    "code": "NAA",
    "country_code": "AU",
    "city": "Narrabri"
  },
  {
    "code": "POH",
    "country_code": "US",
    "city": "Pocahontas"
  },
  {
    "code": "PKT",
    "country_code": "AU",
    "city": "Port Keats"
  },
  {
    "code": "VLN",
    "country_code": "VE",
    "city": "Valencia"
  },
  {
    "code": "OVS",
    "country_code": "RU",
    "city": "Sovetsky"
  },
  {
    "code": "YST",
    "country_code": "CA",
    "city": "Ste Therese Point"
  },
  {
    "code": "BUC",
    "country_code": "AU",
    "city": "Burketown"
  },
  {
    "code": "XQW",
    "country_code": "GB",
    "city": "Motherwell"
  },
  {
    "code": "BXV",
    "country_code": "IS",
    "city": "Breiddalsvik"
  },
  {
    "code": "GPB",
    "country_code": "BR",
    "city": "Guarapuava"
  },
  {
    "code": "BZR",
    "country_code": "FR",
    "city": "Beziers"
  },
  {
    "code": "SXH",
    "country_code": "PG",
    "city": "Sehulea"
  },
  {
    "code": "PAK",
    "country_code": "US",
    "city": "Hanapepe"
  },
  {
    "code": "ODE",
    "country_code": "DK",
    "city": "Odense"
  },
  {
    "code": "ODC",
    "country_code": "US",
    "city": "Oakdale"
  },
  {
    "code": "MQB",
    "country_code": "US",
    "city": "Macomb"
  },
  {
    "code": "EIY",
    "country_code": "IL",
    "city": "Ein Yahav"
  },
  {
    "code": "GWE",
    "country_code": "ZW",
    "city": "Gweru"
  },
  {
    "code": "BTF",
    "country_code": "US",
    "city": "Bountiful"
  },
  {
    "code": "NYT",
    "country_code": "MM",
    "city": "Naypyidaw"
  },
  {
    "code": "BOK",
    "country_code": "US",
    "city": "Brookings"
  },
  {
    "code": "TUK",
    "country_code": "PK",
    "city": "Turbat"
  },
  {
    "code": "XSR",
    "country_code": "GB",
    "city": "Salisbury"
  },
  {
    "code": "LAM",
    "country_code": "US",
    "city": "Los Alamos"
  },
  {
    "code": "HKG",
    "country_code": "HK",
    "city": "Hong Kong"
  },
  {
    "code": "MYK",
    "country_code": "US",
    "city": "May Creek"
  },
  {
    "code": "JIQ",
    "country_code": "CN",
    "city": "Qianjiang"
  },
  {
    "code": "UMY",
    "country_code": "UA",
    "city": "Sumy"
  },
  {
    "code": "HOC",
    "country_code": "PG",
    "city": "Komako"
  },
  {
    "code": "JHG",
    "country_code": "CN",
    "city": "Jinghong"
  },
  {
    "code": "MSY",
    "country_code": "US",
    "city": "New Orleans"
  },
  {
    "code": "TLF",
    "country_code": "US",
    "city": "Telida"
  },
  {
    "code": "AGU",
    "country_code": "MX",
    "city": "Aguascalientes"
  },
  {
    "code": "KIE",
    "country_code": "PG",
    "city": "Kieta"
  },
  {
    "code": "MOE",
    "country_code": "MM",
    "city": "Momeik"
  },
  {
    "code": "MPE",
    "country_code": "US",
    "city": "Madison"
  },
  {
    "code": "GAI",
    "country_code": "US",
    "city": "Gaithersburg"
  },
  {
    "code": "RJH",
    "country_code": "BD",
    "city": "Rajshahi"
  },
  {
    "code": "BOA",
    "country_code": "CD",
    "city": "Boma"
  },
  {
    "code": "ERU",
    "country_code": "PG",
    "city": "Erume"
  },
  {
    "code": "MOA",
    "country_code": "CU",
    "city": "Moa"
  },
  {
    "code": "YET",
    "country_code": "CA",
    "city": "Edson"
  },
  {
    "code": "BOO",
    "country_code": "NO",
    "city": "Bodo"
  },
  {
    "code": "TIX",
    "country_code": "US",
    "city": "Titusville"
  },
  {
    "code": "EUQ",
    "country_code": "PH",
    "city": "Antique"
  },
  {
    "code": "OUA",
    "country_code": "BF",
    "city": "Ouagadougou"
  },
  {
    "code": "ZYO",
    "country_code": "NL",
    "city": "Roosendaal"
  },
  {
    "code": "KGI",
    "country_code": "AU",
    "city": "Kalgoorlie"
  },
  {
    "code": "NKS",
    "country_code": "CM",
    "city": "Nkongsamba"
  },
  {
    "code": "DUG",
    "country_code": "US",
    "city": "Douglas"
  },
  {
    "code": "MNG",
    "country_code": "AU",
    "city": "Maningrida"
  },
  {
    "code": "EGA",
    "country_code": "PG",
    "city": "Engati"
  },
  {
    "code": "TTW",
    "country_code": "LK",
    "city": "Tissa Tank"
  },
  {
    "code": "KIH",
    "country_code": "IR",
    "city": "Kish Island"
  },
  {
    "code": "TCU",
    "country_code": "ZA",
    "city": "Thaba Nchu"
  },
  {
    "code": "CTQ",
    "country_code": "BR",
    "city": "Santa Vitoria"
  },
  {
    "code": "AMA",
    "country_code": "US",
    "city": "Amarillo"
  },
  {
    "code": "NDM",
    "country_code": "ET",
    "city": "Mendi"
  },
  {
    "code": "APX",
    "country_code": "BR",
    "city": "Arapongas"
  },
  {
    "code": "RMB",
    "country_code": "OM",
    "city": "Buraimi"
  },
  {
    "code": "BND",
    "country_code": "IR",
    "city": "Bandar Abbas"
  },
  {
    "code": "MFG",
    "country_code": "PK",
    "city": "Muzaffarabad"
  },
  {
    "code": "PCO",
    "country_code": "MX",
    "city": "Punta Colorada"
  },
  {
    "code": "MJC",
    "country_code": "CI",
    "city": "Man"
  },
  {
    "code": "JQA",
    "country_code": "GL",
    "city": "Qaarsut"
  },
  {
    "code": "FLJ",
    "country_code": "US",
    "city": "Falls Bay"
  },
  {
    "code": "CZU",
    "country_code": "CO",
    "city": "Corozal"
  },
  {
    "code": "XYY",
    "country_code": "SE",
    "city": "Arvika"
  },
  {
    "code": "TYT",
    "country_code": "UY",
    "city": "Treinta-y-Tres"
  },
  {
    "code": "LYC",
    "country_code": "SE",
    "city": "Lycksele"
  },
  {
    "code": "YSR",
    "country_code": "CA",
    "city": "Nanisivik"
  },
  {
    "code": "ЭКО",
    "country_code": "RU",
    "city": "Ekonda"
  },
  {
    "code": "MYY",
    "country_code": "MY",
    "city": "Miri"
  },
  {
    "code": "RSN",
    "country_code": "US",
    "city": "Ruston"
  },
  {
    "code": "WKI",
    "country_code": "ZW",
    "city": "Hwange"
  },
  {
    "code": "YWY",
    "country_code": "CA",
    "city": "Wrigley"
  },
  {
    "code": "GOE",
    "country_code": "PG",
    "city": "Gonalia"
  },
  {
    "code": "YMP",
    "country_code": "CA",
    "city": "Port McNeil"
  },
  {
    "code": "USS",
    "country_code": "CU",
    "city": "Sancti Spiritus"
  },
  {
    "code": "RSG",
    "country_code": "BR",
    "city": "Serra Pelada"
  },
  {
    "code": "ZGR",
    "country_code": "CA",
    "city": "Little Grand Rapids"
  },
  {
    "code": "GGN",
    "country_code": "CI",
    "city": "Gagnoa"
  },
  {
    "code": "GAB",
    "country_code": "US",
    "city": "Gabbs"
  },
  {
    "code": "SJW",
    "country_code": "CN",
    "city": "Shijiazhuang"
  },
  {
    "code": "HRN",
    "country_code": "AU",
    "city": "Heron Island"
  },
  {
    "code": "ZXM",
    "country_code": "NO",
    "city": "Rognan"
  },
  {
    "code": "ZEQ",
    "country_code": "GB",
    "city": "Dewsbury"
  },
  {
    "code": "KNN",
    "country_code": "GN",
    "city": "Kankan"
  },
  {
    "code": "ZSG",
    "country_code": "DE",
    "city": "Sonneberg"
  },
  {
    "code": "ORX",
    "country_code": "BR",
    "city": "Oriximina"
  },
  {
    "code": "JWA",
    "country_code": "BW",
    "city": "Jwaneng"
  },
  {
    "code": "IOS",
    "country_code": "BR",
    "city": "Ilheus"
  },
  {
    "code": "APG",
    "country_code": "US",
    "city": "Aberdeen"
  },
  {
    "code": "SNV",
    "country_code": "VE",
    "city": "Santa Elena"
  },
  {
    "code": "YHN",
    "country_code": "CA",
    "city": "Hornepayne"
  },
  {
    "code": "PVY",
    "country_code": "US",
    "city": "Pope Vanoy"
  },
  {
    "code": "CIW",
    "country_code": "VC",
    "city": "Canouan Island"
  },
  {
    "code": "KGG",
    "country_code": "SN",
    "city": "Kedougou"
  },
  {
    "code": "EDE",
    "country_code": "US",
    "city": "Edenton"
  },
  {
    "code": "ZYV",
    "country_code": "NO",
    "city": "Vegarshei"
  },
  {
    "code": "EGP",
    "country_code": "US",
    "city": "Eagle Pass"
  },
  {
    "code": "ASF",
    "country_code": "RU",
    "city": "Astrakhan"
  },
  {
    "code": "SDT",
    "country_code": "PK",
    "city": "Saidu Sharif"
  },
  {
    "code": "PYB",
    "country_code": "IN",
    "city": "Jeypore"
  },
  {
    "code": "LKK",
    "country_code": "US",
    "city": "Kulik Lake"
  },
  {
    "code": "MOD",
    "country_code": "US",
    "city": "Modesto"
  },
  {
    "code": "CTI",
    "country_code": "AO",
    "city": "Cuito Cuanavale"
  },
  {
    "code": "KPT",
    "country_code": "US",
    "city": "Jackpot"
  },
  {
    "code": "BCO",
    "country_code": "ET",
    "city": "Jinka"
  },
  {
    "code": "ABG",
    "country_code": "AU",
    "city": "Abingdon"
  },
  {
    "code": "EZS",
    "country_code": "TR",
    "city": "Elazig"
  },
  {
    "code": "ZQV",
    "country_code": "DE",
    "city": "Worms"
  },
  {
    "code": "ADL",
    "country_code": "AU",
    "city": "Adelaide"
  },
  {
    "code": "CDS",
    "country_code": "US",
    "city": "Childress"
  },
  {
    "code": "DKS",
    "country_code": "RU",
    "city": "Dikson"
  },
  {
    "code": "ESD",
    "country_code": "US",
    "city": "Eastsound"
  },
  {
    "code": "CHC",
    "country_code": "NZ",
    "city": "Christchurch"
  },
  {
    "code": "NNR",
    "country_code": "IE",
    "city": "Spiddal"
  },
  {
    "code": "BQU",
    "country_code": "VC",
    "city": "Bequia"
  },
  {
    "code": "VNG",
    "country_code": "LA",
    "city": "Viengxay"
  },
  {
    "code": "LDW",
    "country_code": "AU",
    "city": "Lansdowne"
  },
  {
    "code": "RMU",
    "country_code": "ES",
    "city": "Corvera"
  },
  {
    "code": "USQ",
    "country_code": "TR",
    "city": "Usak"
  },
  {
    "code": "OGZ",
    "country_code": "RU",
    "city": "Vladikavkaz"
  },
  {
    "code": "XKA",
    "country_code": "BF",
    "city": "Kantchari"
  },
  {
    "code": "KCD",
    "country_code": "ID",
    "city": "Kamur"
  },
  {
    "code": "IAO",
    "country_code": "PH",
    "city": "Sayak (Siargao)"
  },
  {
    "code": "MFF",
    "country_code": "GA",
    "city": "Moanda"
  },
  {
    "code": "EAB",
    "country_code": "YE",
    "city": "Abbse"
  },
  {
    "code": "JUI",
    "country_code": "DE",
    "city": "Juist"
  },
  {
    "code": "SYV",
    "country_code": "US",
    "city": "Sylvester"
  },
  {
    "code": "NNK",
    "country_code": "US",
    "city": "Naknek"
  },
  {
    "code": "SGD",
    "country_code": "DK",
    "city": "Sonderborg"
  },
  {
    "code": "AGJ",
    "country_code": "JP",
    "city": "Aguni"
  },
  {
    "code": "QFI",
    "country_code": "GL",
    "city": "Iginniarfik"
  },
  {
    "code": "DHN",
    "country_code": "US",
    "city": "Dothan"
  },
  {
    "code": "XYP",
    "country_code": "SE",
    "city": "Avesta Krylbo"
  },
  {
    "code": "UIB",
    "country_code": "CO",
    "city": "Quibdo"
  },
  {
    "code": "CLZ",
    "country_code": "VE",
    "city": "Calabozo"
  },
  {
    "code": "DIB",
    "country_code": "IN",
    "city": "Dibrugarh"
  },
  {
    "code": "OPI",
    "country_code": "AU",
    "city": "Oenpelli"
  },
  {
    "code": "HHI",
    "country_code": "US",
    "city": "Wahiawa"
  },
  {
    "code": "WUN",
    "country_code": "AU",
    "city": "Wiluna"
  },
  {
    "code": "AOK",
    "country_code": "GR",
    "city": "Karpathos"
  },
  {
    "code": "MKQ",
    "country_code": "ID",
    "city": "Merauke"
  },
  {
    "code": "XUI",
    "country_code": "NO",
    "city": "Lysaker"
  },
  {
    "code": "OKC",
    "country_code": "US",
    "city": "Oklahoma City"
  },
  {
    "code": "WSA",
    "country_code": "PG",
    "city": "Wasua"
  },
  {
    "code": "IAR",
    "country_code": "RU",
    "city": "Yaroslavl"
  },
  {
    "code": "ZIL",
    "country_code": "DK",
    "city": "Horsens"
  },
  {
    "code": "YEK",
    "country_code": "CA",
    "city": "Arviat"
  },
  {
    "code": "YSI",
    "country_code": "CA",
    "city": "Sans Souci"
  },
  {
    "code": "SZZ",
    "country_code": "PL",
    "city": "Szczecin"
  },
  {
    "code": "POZ",
    "country_code": "PL",
    "city": "Poznan"
  },
  {
    "code": "YQL",
    "country_code": "CA",
    "city": "Lethbridge"
  },
  {
    "code": "PMG",
    "country_code": "BR",
    "city": "Ponta Pora"
  },
  {
    "code": "PHT",
    "country_code": "US",
    "city": "Paris"
  },
  {
    "code": "EBD",
    "country_code": "SD",
    "city": "El Obeid"
  },
  {
    "code": "BFT",
    "country_code": "US",
    "city": "Beaufort"
  },
  {
    "code": "CWS",
    "country_code": "US",
    "city": "Center Island"
  },
  {
    "code": "KTQ",
    "country_code": "FI",
    "city": "Kitee"
  },
  {
    "code": "RDR",
    "country_code": "US",
    "city": "Red River"
  },
  {
    "code": "SKZ",
    "country_code": "PK",
    "city": "Sukkur"
  },
  {
    "code": "YVT",
    "country_code": "CA",
    "city": "Buffalo Narrows"
  },
  {
    "code": "PUY",
    "country_code": "HR",
    "city": "Pula"
  },
  {
    "code": "ISC",
    "country_code": "GB",
    "city": "Isles of Scilly"
  },
  {
    "code": "YRR",
    "country_code": "CA",
    "city": "Stuart Island"
  },
  {
    "code": "BVH",
    "country_code": "BR",
    "city": "Vilhena"
  },
  {
    "code": "KQT",
    "country_code": "TJ",
    "city": "Kurgon-Tyube (Bokhtar)"
  },
  {
    "code": "PNI",
    "country_code": "FM",
    "city": "Pohnpei, Caroline Islands"
  },
  {
    "code": "RNU",
    "country_code": "MY",
    "city": "Ranau"
  },
  {
    "code": "SKY",
    "country_code": "US",
    "city": "Sandusky"
  },
  {
    "code": "AKO",
    "country_code": "US",
    "city": "Akron"
  },
  {
    "code": "YQW",
    "country_code": "CA",
    "city": "North Battleford"
  },
  {
    "code": "RBJ",
    "country_code": "JP",
    "city": "Rebun"
  },
  {
    "code": "JUM",
    "country_code": "NP",
    "city": "Jumla"
  },
  {
    "code": "UNG",
    "country_code": "PG",
    "city": "Kiunga"
  },
  {
    "code": "ZIN",
    "country_code": "CH",
    "city": "Interlaken"
  },
  {
    "code": "AYG",
    "country_code": "CO",
    "city": "Yaguara"
  },
  {
    "code": "VPS",
    "country_code": "US",
    "city": "Fort Walton Beach"
  },
  {
    "code": "REK",
    "country_code": "IS",
    "city": "Reykjavik"
  },
  {
    "code": "XLU",
    "country_code": "BF",
    "city": "Leo"
  },
  {
    "code": "LIG",
    "country_code": "FR",
    "city": "Limoges"
  },
  {
    "code": "IPZ",
    "country_code": "CR",
    "city": "San Isidro de El General"
  },
  {
    "code": "RBU",
    "country_code": "AU",
    "city": "Roebourne"
  },
  {
    "code": "LED",
    "country_code": "RU",
    "city": "Saint Petersburg"
  },
  {
    "code": "ROG",
    "country_code": "US",
    "city": "Rogers"
  },
  {
    "code": "YSM",
    "country_code": "CA",
    "city": "Fort Smith"
  },
  {
    "code": "FGR",
    "country_code": "ES",
    "city": "Fuengirola"
  },
  {
    "code": "FEK",
    "country_code": "CI",
    "city": "Ferkessedougou"
  },
  {
    "code": "BYU",
    "country_code": "DE",
    "city": "Bayreuth"
  },
  {
    "code": "SDI",
    "country_code": "PG",
    "city": "Saidor"
  },
  {
    "code": "FAS",
    "country_code": "IS",
    "city": "Faskrudsfjordur"
  },
  {
    "code": "AUS",
    "country_code": "US",
    "city": "Austin"
  },
  {
    "code": "HAT",
    "country_code": "AU",
    "city": "Heathlands"
  },
  {
    "code": "DJO",
    "country_code": "CI",
    "city": "Daloa"
  },
  {
    "code": "XGD",
    "country_code": "NO",
    "city": "Arendal"
  },
  {
    "code": "PKM",
    "country_code": "GY",
    "city": "Port Kaituma"
  },
  {
    "code": "IXS",
    "country_code": "IN",
    "city": "Silchar"
  },
  {
    "code": "YPJ",
    "country_code": "CA",
    "city": "Aupaluk"
  },
  {
    "code": "PUE",
    "country_code": "PA",
    "city": "Puerto Obaldia"
  },
  {
    "code": "HNA",
    "country_code": "JP",
    "city": "Hanamaki"
  },
  {
    "code": "ADA",
    "country_code": "TR",
    "city": "Adana"
  },
  {
    "code": "KSU",
    "country_code": "NO",
    "city": "Kristiansund"
  },
  {
    "code": "OGA",
    "country_code": "US",
    "city": "Ogallala"
  },
  {
    "code": "ZAH",
    "country_code": "IR",
    "city": "Zahedan"
  },
  {
    "code": "TEZ",
    "country_code": "IN",
    "city": "Salonibari"
  },
  {
    "code": "KEO",
    "country_code": "CI",
    "city": "Odienne"
  },
  {
    "code": "BMN",
    "country_code": "IQ",
    "city": "Bamerny"
  },
  {
    "code": "ZYK",
    "country_code": "CN",
    "city": "Shekou"
  },
  {
    "code": "SMZ",
    "country_code": "SR",
    "city": "Stoelmans Eiland"
  },
  {
    "code": "AKX",
    "country_code": "KZ",
    "city": "Aktyubinsk"
  },
  {
    "code": "NEL",
    "country_code": "US",
    "city": "Lakehurst"
  },
  {
    "code": "BUS",
    "country_code": "GE",
    "city": "Batumi"
  },
  {
    "code": "YTY",
    "country_code": "CN",
    "city": "Yangzhou"
  },
  {
    "code": "ORN",
    "country_code": "DZ",
    "city": "Oran"
  },
  {
    "code": "TDD",
    "country_code": "BO",
    "city": "Trinidad"
  },
  {
    "code": "RLK",
    "country_code": "CN",
    "city": "Bayannur"
  },
  {
    "code": "CHX",
    "country_code": "PA",
    "city": "Changuinola"
  },
  {
    "code": "KGN",
    "country_code": "CD",
    "city": "Kasongo Lunda"
  },
  {
    "code": "USU",
    "country_code": "PH",
    "city": "Busuanga"
  },
  {
    "code": "APU",
    "country_code": "BR",
    "city": "Apucarana"
  },
  {
    "code": "JJA",
    "country_code": "SB",
    "city": "Jajao"
  },
  {
    "code": "XFK",
    "country_code": "CA",
    "city": "Senneterre"
  },
  {
    "code": "CNH",
    "country_code": "US",
    "city": "Claremont"
  },
  {
    "code": "BUG",
    "country_code": "AO",
    "city": "Benguela"
  },
  {
    "code": "FFD",
    "country_code": "GB",
    "city": "Fairford"
  },
  {
    "code": "EOS",
    "country_code": "US",
    "city": "Neosho"
  },
  {
    "code": "GUC",
    "country_code": "US",
    "city": "Gunnison"
  },
  {
    "code": "BTB",
    "country_code": "CG",
    "city": "Betou"
  },
  {
    "code": "KEX",
    "country_code": "PG",
    "city": "Kanabea"
  },
  {
    "code": "IBP",
    "country_code": "PE",
    "city": "Iberia"
  },
  {
    "code": "PIL",
    "country_code": "PY",
    "city": "Pilar"
  },
  {
    "code": "UKA",
    "country_code": "KE",
    "city": "Ukunda"
  },
  {
    "code": "JXN",
    "country_code": "US",
    "city": "Jackson"
  },
  {
    "code": "MKP",
    "country_code": "PF",
    "city": "Makemo"
  },
  {
    "code": "KKU",
    "country_code": "US",
    "city": "Ekuk"
  },
  {
    "code": "DNV",
    "country_code": "US",
    "city": "Danville"
  },
  {
    "code": "RPA",
    "country_code": "NP",
    "city": "Rolpa"
  },
  {
    "code": "KIY",
    "country_code": "TZ",
    "city": "Kilwa Masoko"
  },
  {
    "code": "OKH",
    "country_code": "GB",
    "city": "Oakham"
  },
  {
    "code": "ARV",
    "country_code": "US",
    "city": "Minocqua"
  },
  {
    "code": "CUZ",
    "country_code": "PE",
    "city": "Cuzco"
  },
  {
    "code": "УКО",
    "country_code": "RU",
    "city": "Ust'-Koksa"
  },
  {
    "code": "YLB",
    "country_code": "CA",
    "city": "Lac Biche"
  },
  {
    "code": "SAE",
    "country_code": "ID",
    "city": "Sangir"
  },
  {
    "code": "IAU",
    "country_code": "PG",
    "city": "Iaura"
  },
  {
    "code": "BIA",
    "country_code": "FR",
    "city": "Bastia"
  },
  {
    "code": "GBA",
    "country_code": "VU",
    "city": "Big Bay"
  },
  {
    "code": "WMN",
    "country_code": "MG",
    "city": "Maroantsetra"
  },
  {
    "code": "SDR",
    "country_code": "ES",
    "city": "Santander"
  },
  {
    "code": "WAB",
    "country_code": "PG",
    "city": "Wabag"
  },
  {
    "code": "UTK",
    "country_code": "MH",
    "city": "Utirik Island"
  },
  {
    "code": "IDC",
    "country_code": "MZ",
    "city": "Ila Da Chilonzuene"
  },
  {
    "code": "OCI",
    "country_code": "US",
    "city": "Oceanic"
  },
  {
    "code": "CMU",
    "country_code": "PG",
    "city": "Kundiawa"
  },
  {
    "code": "THE",
    "country_code": "BR",
    "city": "Teresina"
  },
  {
    "code": "RSS",
    "country_code": "SD",
    "city": "Roseires"
  },
  {
    "code": "PYG",
    "country_code": "IN",
    "city": "Gangtok"
  },
  {
    "code": "PCP",
    "country_code": "ST",
    "city": "Principe"
  },
  {
    "code": "NSH",
    "country_code": "IR",
    "city": "Now Shahr"
  },
  {
    "code": "WMH",
    "country_code": "US",
    "city": "Mountain Home"
  },
  {
    "code": "UTW",
    "country_code": "ZA",
    "city": "Queenstown"
  },
  {
    "code": "LDN",
    "country_code": "NP",
    "city": "Lamidanda"
  },
  {
    "code": "YRS",
    "country_code": "CA",
    "city": "Red Sucker Lake"
  },
  {
    "code": "DOY",
    "country_code": "CN",
    "city": "Dongying"
  },
  {
    "code": "JDY",
    "country_code": "US",
    "city": "Downey"
  },
  {
    "code": "KBS",
    "country_code": "SL",
    "city": "Bo"
  },
  {
    "code": "BXB",
    "country_code": "ID",
    "city": "Babo"
  },
  {
    "code": "RWL",
    "country_code": "US",
    "city": "Rawlins"
  },
  {
    "code": "SUL",
    "country_code": "PK",
    "city": "Sui"
  },
  {
    "code": "EGN",
    "country_code": "SD",
    "city": "Geneina"
  },
  {
    "code": "QQR",
    "country_code": "GB",
    "city": "Ramsgate"
  },
  {
    "code": "GAE",
    "country_code": "TN",
    "city": "Gabes"
  },
  {
    "code": "ITQ",
    "country_code": "BR",
    "city": "Itaqui"
  },
  {
    "code": "NSV",
    "country_code": "AU",
    "city": "Noosaville"
  },
  {
    "code": "XKE",
    "country_code": "NO",
    "city": "Rena"
  },
  {
    "code": "LPO",
    "country_code": "US",
    "city": "Laporte"
  },
  {
    "code": "MGT",
    "country_code": "AU",
    "city": "Milingimbi"
  },
  {
    "code": "ВЛМ",
    "country_code": "RU",
    "city": "Vladimir"
  },
  {
    "code": "ZDE",
    "country_code": "CH",
    "city": "Arosa"
  },
  {
    "code": "IPE",
    "country_code": "PH",
    "city": "Ipil"
  },
  {
    "code": "TNW",
    "country_code": "EC",
    "city": "Tena"
  },
  {
    "code": "JVA",
    "country_code": "MG",
    "city": "Ankavandra"
  },
  {
    "code": "MFS",
    "country_code": "CO",
    "city": "Miraflores"
  },
  {
    "code": "DWR",
    "country_code": "AF",
    "city": "Dwyer"
  },
  {
    "code": "HUY",
    "country_code": "GB",
    "city": "Humberside"
  },
  {
    "code": "GBB",
    "country_code": "AZ",
    "city": "Gabala"
  },
  {
    "code": "VXO",
    "country_code": "SE",
    "city": "Vaxjo"
  },
  {
    "code": "JEE",
    "country_code": "HT",
    "city": "Jeremie"
  },
  {
    "code": "GMZ",
    "country_code": "ES",
    "city": "San Sebastian de la Gomera"
  },
  {
    "code": "HGU",
    "country_code": "PG",
    "city": "Mount Hagen"
  },
  {
    "code": "GHC",
    "country_code": "BS",
    "city": "Great Harbour"
  },
  {
    "code": "UNR",
    "country_code": "MN",
    "city": "Underkhaan"
  },
  {
    "code": "KYU",
    "country_code": "US",
    "city": "Koyukuk"
  },
  {
    "code": "JHB",
    "country_code": "MY",
    "city": "Johor Bharu"
  },
  {
    "code": "PHR",
    "country_code": "FJ",
    "city": "Pacific Harbor"
  },
  {
    "code": "DAD",
    "country_code": "VN",
    "city": "Da Nang"
  },
  {
    "code": "KSQ",
    "country_code": "UZ",
    "city": "Karshi"
  },
  {
    "code": "YKU",
    "country_code": "CA",
    "city": "Chisasibi"
  },
  {
    "code": "PKU",
    "country_code": "ID",
    "city": "Pekanbaru"
  },
  {
    "code": "CAG",
    "country_code": "IT",
    "city": "Cagliari"
  },
  {
    "code": "HUS",
    "country_code": "US",
    "city": "Hughes"
  },
  {
    "code": "SUO",
    "country_code": "US",
    "city": "Sun River"
  },
  {
    "code": "SXA",
    "country_code": "PG",
    "city": "Sialum"
  },
  {
    "code": "GMB",
    "country_code": "ET",
    "city": "Gambela"
  },
  {
    "code": "IAQ",
    "country_code": "IR",
    "city": "Bahregan"
  },
  {
    "code": "HIN",
    "country_code": "KR",
    "city": "Jinju"
  },
  {
    "code": "NOZ",
    "country_code": "RU",
    "city": "Novokuznetsk"
  },
  {
    "code": "GNT",
    "country_code": "US",
    "city": "Grants"
  },
  {
    "code": "XFC",
    "country_code": "CA",
    "city": "Fredericton Junction"
  },
  {
    "code": "SHR",
    "country_code": "US",
    "city": "Sheridan"
  },
  {
    "code": "LDU",
    "country_code": "MY",
    "city": "Lahad Datu"
  },
  {
    "code": "GLC",
    "country_code": "ET",
    "city": "Geladi"
  },
  {
    "code": "PFO",
    "country_code": "CY",
    "city": "Paphos"
  },
  {
    "code": "ZHV",
    "country_code": "CH",
    "city": "La Chaux-de-Fonds"
  },
  {
    "code": "GGO",
    "country_code": "CI",
    "city": "Guiglo"
  },
  {
    "code": "CLE",
    "country_code": "US",
    "city": "Cleveland"
  },
  {
    "code": "AYD",
    "country_code": "AU",
    "city": "Alroy Downs"
  },
  {
    "code": "OML",
    "country_code": "PG",
    "city": "Omkalai"
  },
  {
    "code": "BDH",
    "country_code": "IR",
    "city": "Bandar Lengeh"
  },
  {
    "code": "YEP",
    "country_code": "CA",
    "city": "Estevan Point"
  },
  {
    "code": "YVM",
    "country_code": "CA",
    "city": "Qikiqtarjuaq"
  },
  {
    "code": "CEE",
    "country_code": "RU",
    "city": "Cherepovets"
  },
  {
    "code": "BBI",
    "country_code": "IN",
    "city": "Bhubaneswar"
  },
  {
    "code": "DNP",
    "country_code": "NP",
    "city": "Dang"
  },
  {
    "code": "SSZ",
    "country_code": "BR",
    "city": "Santos"
  },
  {
    "code": "SVZ",
    "country_code": "VE",
    "city": "San Antonio"
  },
  {
    "code": "YLG",
    "country_code": "AU",
    "city": "Yalgoo"
  },
  {
    "code": "GUJ",
    "country_code": "BR",
    "city": "Guaratingueta"
  },
  {
    "code": "CRT",
    "country_code": "US",
    "city": "Crossett"
  },
  {
    "code": "KMU",
    "country_code": "SO",
    "city": "Kismayu"
  },
  {
    "code": "YCK",
    "country_code": "CA",
    "city": "Colville Lake"
  },
  {
    "code": "MZH",
    "country_code": "TR",
    "city": "Merzifon"
  },
  {
    "code": "AMD",
    "country_code": "IN",
    "city": "Ahmedabad"
  },
  {
    "code": "HOI",
    "country_code": "PF",
    "city": "Hao Island"
  },
  {
    "code": "MJU",
    "country_code": "ID",
    "city": "Mamuju"
  },
  {
    "code": "KIB",
    "country_code": "US",
    "city": "Ivanof Bay"
  },
  {
    "code": "ELI",
    "country_code": "US",
    "city": "Elim"
  },
  {
    "code": "OUK",
    "country_code": "GB",
    "city": "Out Skerries"
  },
  {
    "code": "RRO",
    "country_code": "IT",
    "city": "Naples"
  },
  {
    "code": "CIK",
    "country_code": "US",
    "city": "Chalkyitsik"
  },
  {
    "code": "MKB",
    "country_code": "GA",
    "city": "Mekambo"
  },
  {
    "code": "EAT",
    "country_code": "US",
    "city": "Wenatchee"
  },
  {
    "code": "CPF",
    "country_code": "ID",
    "city": "Cepu"
  },
  {
    "code": "THD",
    "country_code": "VN",
    "city": "Thanh Hoa"
  },
  {
    "code": "ENL",
    "country_code": "US",
    "city": "Centralia"
  },
  {
    "code": "MIX",
    "country_code": "CO",
    "city": "Miriti"
  },
  {
    "code": "IPH",
    "country_code": "MY",
    "city": "Ipoh"
  },
  {
    "code": "BVO",
    "country_code": "US",
    "city": "Bartlesville"
  },
  {
    "code": "CIY",
    "country_code": "IT",
    "city": "Comiso"
  },
  {
    "code": "BQJ",
    "country_code": "RU",
    "city": "Batagay"
  },
  {
    "code": "CEB",
    "country_code": "PH",
    "city": "Cebu City"
  },
  {
    "code": "IAS",
    "country_code": "RO",
    "city": "Iasi"
  },
  {
    "code": "QHX",
    "country_code": "CN",
    "city": "Qionghai"
  },
  {
    "code": "RAC",
    "country_code": "US",
    "city": "Racine"
  },
  {
    "code": "ADH",
    "country_code": "RU",
    "city": "Aldan"
  },
  {
    "code": "AXM",
    "country_code": "CO",
    "city": "Armenia"
  },
  {
    "code": "CCY",
    "country_code": "US",
    "city": "Charles City"
  },
  {
    "code": "SLT",
    "country_code": "US",
    "city": "Salida"
  },
  {
    "code": "CCM",
    "country_code": "BR",
    "city": "Criciuma"
  },
  {
    "code": "GAZ",
    "country_code": "PG",
    "city": "Guasopa"
  },
  {
    "code": "ZIZ",
    "country_code": "PK",
    "city": "Zamzama"
  },
  {
    "code": "BYG",
    "country_code": "US",
    "city": "Buffalo"
  },
  {
    "code": "AHZ",
    "country_code": "FR",
    "city": "Alpe D Huez"
  },
  {
    "code": "CKL",
    "country_code": "RU",
    "city": "Chkalovsky"
  },
  {
    "code": "LFR",
    "country_code": "VE",
    "city": "La Fria"
  },
  {
    "code": "KDT",
    "country_code": "TH",
    "city": "Kamphangsaen"
  },
  {
    "code": "FUL",
    "country_code": "US",
    "city": "Fullerton"
  },
  {
    "code": "BRU",
    "country_code": "BE",
    "city": "Brussels"
  },
  {
    "code": "GMS",
    "country_code": "BR",
    "city": "Guimaraes"
  },
  {
    "code": "MGS",
    "country_code": "CK",
    "city": "Mangaia Island"
  },
  {
    "code": "DVD",
    "country_code": "MG",
    "city": "Andavadoaka"
  },
  {
    "code": "YTG",
    "country_code": "CA",
    "city": "Sullivan Bay"
  },
  {
    "code": "JDO",
    "country_code": "BR",
    "city": "Juazeiro Do Norte"
  },
  {
    "code": "FSM",
    "country_code": "US",
    "city": "Fort Smith"
  },
  {
    "code": "YXU",
    "country_code": "CA",
    "city": "London"
  },
  {
    "code": "ENI",
    "country_code": "PH",
    "city": "El Nido"
  },
  {
    "code": "QRS",
    "country_code": "RO",
    "city": "Resita"
  },
  {
    "code": "CGJ",
    "country_code": "ZM",
    "city": "Chingola"
  },
  {
    "code": "MQD",
    "country_code": "AR",
    "city": "Maquinchao"
  },
  {
    "code": "RAX",
    "country_code": "PG",
    "city": "Oram"
  },
  {
    "code": "PKS",
    "country_code": "LA",
    "city": "Paksane"
  },
  {
    "code": "KWN",
    "country_code": "US",
    "city": "Quinhagak"
  },
  {
    "code": "SGH",
    "country_code": "US",
    "city": "Springfield"
  },
  {
    "code": "ULA",
    "country_code": "AR",
    "city": "San Julian"
  },
  {
    "code": "APL",
    "country_code": "MZ",
    "city": "Nampula"
  },
  {
    "code": "ZER",
    "country_code": "IN",
    "city": "Ziro"
  },
  {
    "code": "WIK",
    "country_code": "NZ",
    "city": "Surfdale"
  },
  {
    "code": "SHA",
    "country_code": "CN",
    "city": "Shanghai"
  },
  {
    "code": "BKA",
    "country_code": "RU",
    "city": "Bajkit"
  },
  {
    "code": "ATM",
    "country_code": "BR",
    "city": "Altamira"
  },
  {
    "code": "TMD",
    "country_code": "MR",
    "city": "Timbedra"
  },
  {
    "code": "FHU",
    "country_code": "US",
    "city": "Sierra Vista"
  },
  {
    "code": "XGZ",
    "country_code": "AT",
    "city": "Bregenz"
  },
  {
    "code": "RVD",
    "country_code": "BR",
    "city": "Rio Verde"
  },
  {
    "code": "WGT",
    "country_code": "AU",
    "city": "Wangaratta"
  },
  {
    "code": "HOU",
    "country_code": "US",
    "city": "Houston"
  },
  {
    "code": "NSZ",
    "country_code": "CN",
    "city": "Nansha"
  },
  {
    "code": "ISU",
    "country_code": "IQ",
    "city": "Sulaimaniyah"
  },
  {
    "code": "IDR",
    "country_code": "IN",
    "city": "Indore"
  },
  {
    "code": "AAI",
    "country_code": "BR",
    "city": "Arraias"
  },
  {
    "code": "PLE",
    "country_code": "PG",
    "city": "Paiela"
  },
  {
    "code": "SFZ",
    "country_code": "US",
    "city": "Pawtucket"
  },
  {
    "code": "SOH",
    "country_code": "CO",
    "city": "Solita"
  },
  {
    "code": "YPW",
    "country_code": "CA",
    "city": "Powell River"
  },
  {
    "code": "KCI",
    "country_code": "ID",
    "city": "Kon"
  },
  {
    "code": "YPR",
    "country_code": "CA",
    "city": "Prince Rupert"
  },
  {
    "code": "EEK",
    "country_code": "US",
    "city": "Eek"
  },
  {
    "code": "AYP",
    "country_code": "PE",
    "city": "Ayacucho"
  },
  {
    "code": "BBH",
    "country_code": "DE",
    "city": "Barth"
  },
  {
    "code": "TMP",
    "country_code": "FI",
    "city": "Tampere"
  },
  {
    "code": "VGD",
    "country_code": "RU",
    "city": "Vologda"
  },
  {
    "code": "ZMR",
    "country_code": "IT",
    "city": "Merano/Meran"
  },
  {
    "code": "KOP",
    "country_code": "TH",
    "city": "Nakhon Phanom"
  },
  {
    "code": "BCV",
    "country_code": "BZ",
    "city": "Belmopan"
  },
  {
    "code": "IDI",
    "country_code": "US",
    "city": "Indiana"
  },
  {
    "code": "OXC",
    "country_code": "US",
    "city": "Oxford"
  },
  {
    "code": "ZJZ",
    "country_code": "CH",
    "city": "Rorschach"
  },
  {
    "code": "LYT",
    "country_code": "AU",
    "city": "Lady Elliot Island"
  },
  {
    "code": "GSA",
    "country_code": "MY",
    "city": "Long Pasia"
  },
  {
    "code": "QYH",
    "country_code": "NL",
    "city": "Hengelo"
  },
  {
    "code": "YYU",
    "country_code": "CA",
    "city": "Kapuskasing"
  },
  {
    "code": "SZF",
    "country_code": "TR",
    "city": "Samsun"
  },
  {
    "code": "HUW",
    "country_code": "BR",
    "city": "Humaita"
  },
  {
    "code": "LMT",
    "country_code": "US",
    "city": "Klamath Falls"
  },
  {
    "code": "OVB",
    "country_code": "RU",
    "city": "Novosibirsk"
  },
  {
    "code": "LIC",
    "country_code": "US",
    "city": "Limon"
  },
  {
    "code": "TEP",
    "country_code": "PG",
    "city": "Teptep"
  },
  {
    "code": "QXK",
    "country_code": "FR",
    "city": "St-Genis"
  },
  {
    "code": "SVY",
    "country_code": "SB",
    "city": "Savo"
  },
  {
    "code": "KSZ",
    "country_code": "RU",
    "city": "Kotlas"
  },
  {
    "code": "LYI",
    "country_code": "CN",
    "city": "Linyi"
  },
  {
    "code": "MOR",
    "country_code": "US",
    "city": "Morristown"
  },
  {
    "code": "CHB",
    "country_code": "PK",
    "city": "Chilas"
  },
  {
    "code": "RTA",
    "country_code": "FJ",
    "city": "Rotuma Island"
  },
  {
    "code": "LUN",
    "country_code": "ZM",
    "city": "Lusaka"
  },
  {
    "code": "BRV",
    "country_code": "DE",
    "city": "Bremerhaven"
  },
  {
    "code": "ZLB",
    "country_code": "CH",
    "city": "Visp"
  },
  {
    "code": "VCT",
    "country_code": "US",
    "city": "Victoria"
  },
  {
    "code": "AIK",
    "country_code": "US",
    "city": "Aiken"
  },
  {
    "code": "KKJ",
    "country_code": "JP",
    "city": "Kitakyushu"
  },
  {
    "code": "FRT",
    "country_code": "CL",
    "city": "Frutillar"
  },
  {
    "code": "KSV",
    "country_code": "AU",
    "city": "Springvale"
  },
  {
    "code": "INI",
    "country_code": "RS",
    "city": "Nis"
  },
  {
    "code": "PVW",
    "country_code": "US",
    "city": "Plainview"
  },
  {
    "code": "DBU",
    "country_code": "LK",
    "city": "Dambula"
  },
  {
    "code": "LAY",
    "country_code": "ZA",
    "city": "Ladysmith"
  },
  {
    "code": "KHH",
    "country_code": "TW",
    "city": "Kaohsiung"
  },
  {
    "code": "MUA",
    "country_code": "SB",
    "city": "Munda"
  },
  {
    "code": "QSN",
    "country_code": "CU",
    "city": "San Nicolas de Bari"
  },
  {
    "code": "IHR",
    "country_code": "IR",
    "city": "Iran Shahr"
  },
  {
    "code": "FOG",
    "country_code": "IT",
    "city": "Foggia"
  },
  {
    "code": "RNS",
    "country_code": "FR",
    "city": "Rennes"
  },
  {
    "code": "WAJ",
    "country_code": "PG",
    "city": "Wawoi Falls"
  },
  {
    "code": "MPC",
    "country_code": "ID",
    "city": "Muko-Muko"
  },
  {
    "code": "TAA",
    "country_code": "SB",
    "city": "Tarapaina"
  },
  {
    "code": "PAU",
    "country_code": "MM",
    "city": "Pauk"
  },
  {
    "code": "HAR",
    "country_code": "US",
    "city": "Middletown"
  },
  {
    "code": "DTE",
    "country_code": "PH",
    "city": "Daet"
  },
  {
    "code": "AOU",
    "country_code": "LA",
    "city": "Attopeu"
  },
  {
    "code": "IST",
    "country_code": "TR",
    "city": "Istanbul"
  },
  {
    "code": "DOI",
    "country_code": "PG",
    "city": "Doini"
  },
  {
    "code": "NDA",
    "country_code": "ID",
    "city": "Bandanaira"
  },
  {
    "code": "PEZ",
    "country_code": "RU",
    "city": "Penza"
  },
  {
    "code": "CYZ",
    "country_code": "PH",
    "city": "Cauayan"
  },
  {
    "code": "ARM",
    "country_code": "AU",
    "city": "Armidale"
  },
  {
    "code": "ZIJ",
    "country_code": "DK",
    "city": "Nykobing Sjaelland"
  },
  {
    "code": "SUD",
    "country_code": "US",
    "city": "Stroud"
  },
  {
    "code": "SXO",
    "country_code": "BR",
    "city": "Sao Felix Do Araguaia"
  },
  {
    "code": "INT",
    "country_code": "US",
    "city": "Winston-Salem"
  },
  {
    "code": "BXC",
    "country_code": "US",
    "city": "Boxborough"
  },
  {
    "code": "SUW",
    "country_code": "US",
    "city": "Superior"
  },
  {
    "code": "YCI",
    "country_code": "CA",
    "city": "Caribou Island"
  },
  {
    "code": "MWO",
    "country_code": "US",
    "city": "Middletown"
  },
  {
    "code": "MBJ",
    "country_code": "JM",
    "city": "Montego Bay"
  },
  {
    "code": "KWT",
    "country_code": "US",
    "city": "Kwethluk"
  },
  {
    "code": "VCH",
    "country_code": "UY",
    "city": "Vichadero"
  },
  {
    "code": "HIR",
    "country_code": "SB",
    "city": "Honiara"
  },
  {
    "code": "INW",
    "country_code": "US",
    "city": "Winslow"
  },
  {
    "code": "RMD",
    "country_code": "IN",
    "city": "Ramagundam"
  },
  {
    "code": "CCF",
    "country_code": "FR",
    "city": "Carcassonne"
  },
  {
    "code": "YIC",
    "country_code": "CN",
    "city": "Yichun"
  },
  {
    "code": "LGJ",
    "country_code": "RO",
    "city": "Lugoj"
  },
  {
    "code": "DCY",
    "country_code": "CN",
    "city": "Daocheng"
  },
  {
    "code": "BMQ",
    "country_code": "KE",
    "city": "Bamburi"
  },
  {
    "code": "SQQ",
    "country_code": "LT",
    "city": "Siauliai"
  },
  {
    "code": "BNA",
    "country_code": "US",
    "city": "Nashville"
  },
  {
    "code": "ZGI",
    "country_code": "CA",
    "city": "Gods River"
  },
  {
    "code": "QUP",
    "country_code": "GL",
    "city": "Saqqaq"
  },
  {
    "code": "TRU",
    "country_code": "PE",
    "city": "Trujillo"
  },
  {
    "code": "ZSI",
    "country_code": "DE",
    "city": "Sassnitz"
  },
  {
    "code": "FID",
    "country_code": "US",
    "city": "Fishers Island"
  },
  {
    "code": "RRN",
    "country_code": "BR",
    "city": "Serra Norte"
  },
  {
    "code": "GGS",
    "country_code": "AR",
    "city": "Gobernador Gregores"
  },
  {
    "code": "YNY",
    "country_code": "KR",
    "city": "Yangyang"
  },
  {
    "code": "AGV",
    "country_code": "VE",
    "city": "Acarigua"
  },
  {
    "code": "ESW",
    "country_code": "US",
    "city": "Easton"
  },
  {
    "code": "BMD",
    "country_code": "MG",
    "city": "Belo"
  },
  {
    "code": "VLG",
    "country_code": "AR",
    "city": "Villa Gesell"
  },
  {
    "code": "SWJ",
    "country_code": "VU",
    "city": "South West Bay"
  },
  {
    "code": "UBI",
    "country_code": "PG",
    "city": "Buin"
  },
  {
    "code": "IOU",
    "country_code": "NC",
    "city": "Ile Ouen"
  },
  {
    "code": "QMZ",
    "country_code": "DE",
    "city": "Mainz"
  },
  {
    "code": "TRK",
    "country_code": "ID",
    "city": "Tarakan"
  },
  {
    "code": "DMR",
    "country_code": "YE",
    "city": "Dhamar"
  },
  {
    "code": "MNB",
    "country_code": "CD",
    "city": "Moanda"
  },
  {
    "code": "AAM",
    "country_code": "ZA",
    "city": "Mala Mala"
  },
  {
    "code": "LWR",
    "country_code": "NL",
    "city": "Leeuwarden"
  },
  {
    "code": "SQO",
    "country_code": "SE",
    "city": "Storuman"
  },
  {
    "code": "YYJ",
    "country_code": "CA",
    "city": "Victoria"
  },
  {
    "code": "ZJY",
    "country_code": "IT",
    "city": "Ponza"
  },
  {
    "code": "OAZ",
    "country_code": "AF",
    "city": "Camp Bastion"
  },
  {
    "code": "SXJ",
    "country_code": "CN",
    "city": "Shanshan"
  },
  {
    "code": "PBS",
    "country_code": "TH",
    "city": "Patong Beach"
  },
  {
    "code": "PRN",
    "country_code": "XK",
    "city": "Pristina"
  },
  {
    "code": "ZLH",
    "country_code": "CH",
    "city": "Wil"
  },
  {
    "code": "LBZ",
    "country_code": "AO",
    "city": "Lukapa"
  },
  {
    "code": "FLH",
    "country_code": "GB",
    "city": "Flotta"
  },
  {
    "code": "QDL",
    "country_code": "BR",
    "city": "Guarapari"
  },
  {
    "code": "TBJ",
    "country_code": "TN",
    "city": "Tabarka"
  },
  {
    "code": "ONB",
    "country_code": "PG",
    "city": "Ononge"
  },
  {
    "code": "DYU",
    "country_code": "TJ",
    "city": "Dushanbe"
  },
  {
    "code": "MMP",
    "country_code": "CO",
    "city": "Mompos"
  },
  {
    "code": "TFT",
    "country_code": "PK",
    "city": "Taftan"
  },
  {
    "code": "TUM",
    "country_code": "AU",
    "city": "Tumut"
  },
  {
    "code": "QPL",
    "country_code": "RO",
    "city": "Ploiesti"
  },
  {
    "code": "NDR",
    "country_code": "MA",
    "city": "Nador"
  },
  {
    "code": "TNO",
    "country_code": "CR",
    "city": "Tamarindo"
  },
  {
    "code": "BVF",
    "country_code": "FJ",
    "city": "Bua"
  },
  {
    "code": "IMG",
    "country_code": "MZ",
    "city": "Inhaminga"
  },
  {
    "code": "NNB",
    "country_code": "SB",
    "city": "Santa Ana"
  },
  {
    "code": "GRG",
    "country_code": "AF",
    "city": "Gardez"
  },
  {
    "code": "LUQ",
    "country_code": "AR",
    "city": "San Luis"
  },
  {
    "code": "PTJ",
    "country_code": "AU",
    "city": "Portland"
  },
  {
    "code": "CMN",
    "country_code": "MA",
    "city": "Casablanca"
  },
  {
    "code": "TKA",
    "country_code": "US",
    "city": "Talkeetna"
  },
  {
    "code": "UMM",
    "country_code": "US",
    "city": "Summit"
  },
  {
    "code": "LUM",
    "country_code": "CN",
    "city": "Mangshi"
  },
  {
    "code": "NAV",
    "country_code": "TR",
    "city": "Nevsehir"
  },
  {
    "code": "CBA",
    "country_code": "US",
    "city": "Corner Bay"
  },
  {
    "code": "KWL",
    "country_code": "CN",
    "city": "Guilin"
  },
  {
    "code": "БЫЛ",
    "country_code": "RU",
    "city": "Bylino"
  },
  {
    "code": "URY",
    "country_code": "SA",
    "city": "Gurayat"
  },
  {
    "code": "BGT",
    "country_code": "US",
    "city": "Bagdad"
  },
  {
    "code": "AJL",
    "country_code": "IN",
    "city": "Aizawl"
  },
  {
    "code": "EWR",
    "country_code": "US",
    "city": "Newark"
  },
  {
    "code": "HDH",
    "country_code": "US",
    "city": "Oahu"
  },
  {
    "code": "NTM",
    "country_code": "BR",
    "city": "Miracema Do Norte"
  },
  {
    "code": "MKO",
    "country_code": "US",
    "city": "Muskogee"
  },
  {
    "code": "HZK",
    "country_code": "IS",
    "city": "Husavik"
  },
  {
    "code": "GXQ",
    "country_code": "CL",
    "city": "Coyhaique"
  },
  {
    "code": "EQS",
    "country_code": "AR",
    "city": "Esquel"
  },
  {
    "code": "ASD",
    "country_code": "BS",
    "city": "Andros Town"
  },
  {
    "code": "TRI",
    "country_code": "US",
    "city": "Bristol, VA/Johnson City/Kingsport"
  },
  {
    "code": "IBR",
    "country_code": "JP",
    "city": "Omitami"
  },
  {
    "code": "BEX",
    "country_code": "GB",
    "city": "Benson"
  },
  {
    "code": "TLY",
    "country_code": "RU",
    "city": "Plastun"
  },
  {
    "code": "TNC",
    "country_code": "US",
    "city": "Tin City"
  },
  {
    "code": "DAA",
    "country_code": "US",
    "city": "Fort Belvoir"
  },
  {
    "code": "СОЛ",
    "country_code": "RU",
    "city": "Stary Oskol"
  },
  {
    "code": "CFG",
    "country_code": "CU",
    "city": "Cienfuegos"
  },
  {
    "code": "MRV",
    "country_code": "RU",
    "city": "Mineralnye Vody"
  },
  {
    "code": "XVB",
    "country_code": "GB",
    "city": "Stafford"
  },
  {
    "code": "AAO",
    "country_code": "VE",
    "city": "Anaco"
  },
  {
    "code": "UKX",
    "country_code": "RU",
    "city": "Ust-Kut"
  },
  {
    "code": "BME",
    "country_code": "AU",
    "city": "Broome"
  },
  {
    "code": "TKZ",
    "country_code": "NZ",
    "city": "Tokoroa"
  },
  {
    "code": "TIB",
    "country_code": "CO",
    "city": "Tibu"
  },
  {
    "code": "SQX",
    "country_code": "BR",
    "city": "Sao Miguel do Oeste"
  },
  {
    "code": "LTP",
    "country_code": "AU",
    "city": "Lyndhurst"
  },
  {
    "code": "CEV",
    "country_code": "US",
    "city": "Connersville"
  },
  {
    "code": "FXM",
    "country_code": "US",
    "city": "Flaxman Island"
  },
  {
    "code": "KLB",
    "country_code": "ZM",
    "city": "Kalabo"
  },
  {
    "code": "GJM",
    "country_code": "BR",
    "city": "Guajara-Mirim"
  },
  {
    "code": "PCN",
    "country_code": "NZ",
    "city": "Picton"
  },
  {
    "code": "ADR",
    "country_code": "US",
    "city": "Andrews"
  },
  {
    "code": "HRY",
    "country_code": "AU",
    "city": "Henbury"
  },
  {
    "code": "CKK",
    "country_code": "US",
    "city": "Cherokee"
  },
  {
    "code": "GSH",
    "country_code": "US",
    "city": "Goshen"
  },
  {
    "code": "VDB",
    "country_code": "NO",
    "city": "Fagernes"
  },
  {
    "code": "TBY",
    "country_code": "BW",
    "city": "Tsabong"
  },
  {
    "code": "BTN",
    "country_code": "US",
    "city": "Bennettsville"
  },
  {
    "code": "DUK",
    "country_code": "ZA",
    "city": "Dukuduku"
  },
  {
    "code": "VSA",
    "country_code": "MX",
    "city": "Villahermosa"
  },
  {
    "code": "EJA",
    "country_code": "CO",
    "city": "Barrancabermeja"
  },
  {
    "code": "MYQ",
    "country_code": "IN",
    "city": "Mysore"
  },
  {
    "code": "PTX",
    "country_code": "CO",
    "city": "Pitalito"
  },
  {
    "code": "ESL",
    "country_code": "RU",
    "city": "Elista"
  },
  {
    "code": "HAG",
    "country_code": "NL",
    "city": "The Hague"
  },
  {
    "code": "LST",
    "country_code": "AU",
    "city": "Launceston"
  },
  {
    "code": "ENO",
    "country_code": "PY",
    "city": "Encarnacion"
  },
  {
    "code": "AIH",
    "country_code": "PG",
    "city": "Aiambak"
  },
  {
    "code": "SOG",
    "country_code": "NO",
    "city": "Sogndal"
  },
  {
    "code": "ZGF",
    "country_code": "CA",
    "city": "Grand Forks"
  },
  {
    "code": "KHJ",
    "country_code": "FI",
    "city": "Kauhajoki"
  },
  {
    "code": "BVU",
    "country_code": "US",
    "city": "Beluga"
  },
  {
    "code": "IGG",
    "country_code": "US",
    "city": "Igiugig"
  },
  {
    "code": "SAQ",
    "country_code": "BS",
    "city": "San Andros"
  },
  {
    "code": "WKA",
    "country_code": "NZ",
    "city": "Wanaka"
  },
  {
    "code": "MYB",
    "country_code": "GA",
    "city": "Mayoumba"
  },
  {
    "code": "KNY",
    "country_code": "RU",
    "city": "Kodinsk"
  },
  {
    "code": "KLI",
    "country_code": "CD",
    "city": "Kota Koli"
  },
  {
    "code": "TAS",
    "country_code": "UZ",
    "city": "Tashkent"
  },
  {
    "code": "TIG",
    "country_code": "PG",
    "city": "Tingwon"
  },
  {
    "code": "KIO",
    "country_code": "MH",
    "city": "Kili Island"
  },
  {
    "code": "CVG",
    "country_code": "US",
    "city": "Cincinnati"
  },
  {
    "code": "CEG",
    "country_code": "GB",
    "city": "Chester"
  },
  {
    "code": "GMC",
    "country_code": "CO",
    "city": "Guerima"
  },
  {
    "code": "ХАИ",
    "country_code": "RU",
    "city": "Khailino"
  },
  {
    "code": "OND",
    "country_code": "NA",
    "city": "Ondangwa"
  },
  {
    "code": "YKG",
    "country_code": "CA",
    "city": "Kangirsuk"
  },
  {
    "code": "ALP",
    "country_code": "SY",
    "city": "Aleppo"
  },
  {
    "code": "KPE",
    "country_code": "PG",
    "city": "Yapsiei"
  },
  {
    "code": "BSW",
    "country_code": "US",
    "city": "Boswell Bay"
  },
  {
    "code": "WGB",
    "country_code": "PK",
    "city": "Bahawalnagar"
  },
  {
    "code": "UTI",
    "country_code": "FI",
    "city": "Valkeala"
  },
  {
    "code": "PTG",
    "country_code": "ZA",
    "city": "Polokwane"
  },
  {
    "code": "CEY",
    "country_code": "US",
    "city": "Murray"
  },
  {
    "code": "AYO",
    "country_code": "PY",
    "city": "Ayolas"
  },
  {
    "code": "LMS",
    "country_code": "US",
    "city": "Louisville"
  },
  {
    "code": "WAU",
    "country_code": "AU",
    "city": "Wauchope"
  },
  {
    "code": "UBU",
    "country_code": "AU",
    "city": "Kalumburu"
  },
  {
    "code": "BDB",
    "country_code": "AU",
    "city": "Bundaberg"
  },
  {
    "code": "LJN",
    "country_code": "US",
    "city": "Lake Jackson"
  },
  {
    "code": "ARJ",
    "country_code": "ID",
    "city": "Arso"
  },
  {
    "code": "BGW",
    "country_code": "IQ",
    "city": "Baghdad"
  },
  {
    "code": "LHW",
    "country_code": "CN",
    "city": "Lanzhou"
  },
  {
    "code": "CWB",
    "country_code": "BR",
    "city": "Curitiba"
  },
  {
    "code": "ESE",
    "country_code": "MX",
    "city": "Ensenada"
  },
  {
    "code": "MZZ",
    "country_code": "US",
    "city": "Marion"
  },
  {
    "code": "YSZ",
    "country_code": "CA",
    "city": "Squirrel Cove"
  },
  {
    "code": "SLJ",
    "country_code": "AU",
    "city": "Chandler"
  },
  {
    "code": "EBN",
    "country_code": "MH",
    "city": "Ebadon"
  },
  {
    "code": "KOL",
    "country_code": "CF",
    "city": "Koumala"
  },
  {
    "code": "XGL",
    "country_code": "CA",
    "city": "Granville Lake"
  },
  {
    "code": "OIM",
    "country_code": "JP",
    "city": "Oshima"
  },
  {
    "code": "XAP",
    "country_code": "BR",
    "city": "Chapeco"
  },
  {
    "code": "SUZ",
    "country_code": "PG",
    "city": "Suria"
  },
  {
    "code": "OHS",
    "country_code": "OM",
    "city": "Sohar"
  },
  {
    "code": "AUE",
    "country_code": "EG",
    "city": "Abu Rudeis"
  },
  {
    "code": "ПБЕ",
    "country_code": "RU",
    "city": "Pobeda"
  },
  {
    "code": "LRH",
    "country_code": "FR",
    "city": "La Rochelle"
  },
  {
    "code": "GSN",
    "country_code": "AU",
    "city": "Mount Gunson"
  },
  {
    "code": "RUB",
    "country_code": "IN",
    "city": "Rasulabad"
  },
  {
    "code": "WOW",
    "country_code": "US",
    "city": "Willow"
  },
  {
    "code": "WWT",
    "country_code": "US",
    "city": "Newtok"
  },
  {
    "code": "AUG",
    "country_code": "US",
    "city": "Augusta"
  },
  {
    "code": "BDX",
    "country_code": "US",
    "city": "Broadus"
  },
  {
    "code": "GSC",
    "country_code": "AU",
    "city": "Gascoyne Junction"
  },
  {
    "code": "HYN",
    "country_code": "CN",
    "city": "Taizhou"
  },
  {
    "code": "ORV",
    "country_code": "US",
    "city": "Noorvik"
  },
  {
    "code": "IXB",
    "country_code": "IN",
    "city": "Bagdogra"
  },
  {
    "code": "XUJ",
    "country_code": "NO",
    "city": "Moelv"
  },
  {
    "code": "MDL",
    "country_code": "MM",
    "city": "Mandalay"
  },
  {
    "code": "IDY",
    "country_code": "FR",
    "city": "Ile d'Yeu"
  },
  {
    "code": "MPX",
    "country_code": "PG",
    "city": "Miyanmin"
  },
  {
    "code": "WIB",
    "country_code": "US",
    "city": "Wilbarger"
  },
  {
    "code": "AEX",
    "country_code": "US",
    "city": "Alexandria"
  },
  {
    "code": "DON",
    "country_code": "GT",
    "city": "Dos Lagunas"
  },
  {
    "code": "ISP",
    "country_code": "US",
    "city": "Ronkonkoma"
  },
  {
    "code": "MEV",
    "country_code": "US",
    "city": "Minden"
  },
  {
    "code": "MQY",
    "country_code": "US",
    "city": "Smyrna"
  },
  {
    "code": "CUG",
    "country_code": "AU",
    "city": "Cudal"
  },
  {
    "code": "AKG",
    "country_code": "PG",
    "city": "Anguganak"
  },
  {
    "code": "ORO",
    "country_code": "HN",
    "city": "Yoro"
  },
  {
    "code": "CXP",
    "country_code": "ID",
    "city": "Cilacap"
  },
  {
    "code": "BIX",
    "country_code": "US",
    "city": "Biloxi"
  },
  {
    "code": "RDO",
    "country_code": "PL",
    "city": "Radom"
  },
  {
    "code": "RNG",
    "country_code": "US",
    "city": "Rangely"
  },
  {
    "code": "TRX",
    "country_code": "US",
    "city": "Trenton"
  },
  {
    "code": "PHY",
    "country_code": "TH",
    "city": "Phetchabun"
  },
  {
    "code": "HRK",
    "country_code": "UA",
    "city": "Kharkov"
  },
  {
    "code": "BRO",
    "country_code": "US",
    "city": "Brownsville"
  },
  {
    "code": "VTB",
    "country_code": "BY",
    "city": "Vitebsk"
  },
  {
    "code": "WYA",
    "country_code": "AU",
    "city": "Whyalla"
  },
  {
    "code": "CDZ",
    "country_code": "ES",
    "city": "Cadiz"
  },
  {
    "code": "PFA",
    "country_code": "US",
    "city": "Paf Warren"
  },
  {
    "code": "BDF",
    "country_code": "US",
    "city": "Bradford"
  },
  {
    "code": "FRU",
    "country_code": "KG",
    "city": "Bishkek"
  },
  {
    "code": "TDK",
    "country_code": "KZ",
    "city": "Taldykorgan"
  },
  {
    "code": "XMD",
    "country_code": "US",
    "city": "Madison"
  },
  {
    "code": "AKL",
    "country_code": "NZ",
    "city": "Auckland"
  },
  {
    "code": "MMF",
    "country_code": "CM",
    "city": "Mamfe"
  },
  {
    "code": "NRM",
    "country_code": "ML",
    "city": "Nara"
  },
  {
    "code": "JEM",
    "country_code": "US",
    "city": "Emeryville"
  },
  {
    "code": "VRU",
    "country_code": "ZA",
    "city": "Vryburg"
  },
  {
    "code": "XPK",
    "country_code": "CA",
    "city": "Pukatawagan"
  },
  {
    "code": "PLL",
    "country_code": "BR",
    "city": "Ponta Pelada"
  },
  {
    "code": "TMY",
    "country_code": "ID",
    "city": "Tiom"
  },
  {
    "code": "CSM",
    "country_code": "US",
    "city": "Clinton"
  },
  {
    "code": "XUQ",
    "country_code": "NO",
    "city": "Ringebu"
  },
  {
    "code": "SZM",
    "country_code": "NA",
    "city": "Sesriem"
  },
  {
    "code": "YZR",
    "country_code": "CA",
    "city": "Sarnia"
  },
  {
    "code": "LBR",
    "country_code": "BR",
    "city": "Labrea"
  },
  {
    "code": "LGT",
    "country_code": "CO",
    "city": "Las Gaviotas"
  },
  {
    "code": "TNR",
    "country_code": "MG",
    "city": "Antananarivo"
  },
  {
    "code": "SOV",
    "country_code": "US",
    "city": "Seldovia"
  },
  {
    "code": "NIU",
    "country_code": "PF",
    "city": "Niau"
  },
  {
    "code": "HKV",
    "country_code": "BG",
    "city": "Haskovo"
  },
  {
    "code": "RTS",
    "country_code": "AU",
    "city": "Rottnest Island"
  },
  {
    "code": "PBZ",
    "country_code": "ZA",
    "city": "Plettenberg Bay"
  },
  {
    "code": "JUR",
    "country_code": "AU",
    "city": "Jurien Bay"
  },
  {
    "code": "ABI",
    "country_code": "US",
    "city": "Abilene"
  },
  {
    "code": "SZA",
    "country_code": "AO",
    "city": "Soyo"
  },
  {
    "code": "EGM",
    "country_code": "SB",
    "city": "Sege"
  },
  {
    "code": "LGG",
    "country_code": "BE",
    "city": "Liege"
  },
  {
    "code": "OTV",
    "country_code": "SB",
    "city": "Ontong Java"
  },
  {
    "code": "PBV",
    "country_code": "BR",
    "city": "Porto Dos Gauchos"
  },
  {
    "code": "CLR",
    "country_code": "US",
    "city": "Calipatria"
  },
  {
    "code": "CAT",
    "country_code": "PT",
    "city": "Tires"
  },
  {
    "code": "OFJ",
    "country_code": "IS",
    "city": "Olafsfjordur"
  },
  {
    "code": "DUA",
    "country_code": "US",
    "city": "Durant"
  },
  {
    "code": "SRG",
    "country_code": "ID",
    "city": "Semarang"
  },
  {
    "code": "TRZ",
    "country_code": "IN",
    "city": "Tiruchirappalli"
  },
  {
    "code": "BHS",
    "country_code": "AU",
    "city": "Bathurst"
  },
  {
    "code": "KAK",
    "country_code": "PG",
    "city": "Kar"
  },
  {
    "code": "VPE",
    "country_code": "AO",
    "city": "Ondjiva"
  },
  {
    "code": "KAM",
    "country_code": "YE",
    "city": "Kamaran Island"
  },
  {
    "code": "EKI",
    "country_code": "US",
    "city": "Elkhart"
  },
  {
    "code": "TWT",
    "country_code": "PH",
    "city": "Tawitawi"
  },
  {
    "code": "WAC",
    "country_code": "ET",
    "city": "Waca"
  },
  {
    "code": "XFE",
    "country_code": "CA",
    "city": "Parent"
  },
  {
    "code": "TAB",
    "country_code": "TT",
    "city": "Tobago"
  },
  {
    "code": "YEN",
    "country_code": "CA",
    "city": "Estevan"
  },
  {
    "code": "SFE",
    "country_code": "PH",
    "city": "San Fernando"
  },
  {
    "code": "MRC",
    "country_code": "US",
    "city": "Columbia"
  },
  {
    "code": "SFP",
    "country_code": "AU",
    "city": "Surfers Paradise"
  },
  {
    "code": "TTM",
    "country_code": "CO",
    "city": "Tablon De Tamara"
  },
  {
    "code": "NHT",
    "country_code": "GB",
    "city": "Northolt"
  },
  {
    "code": "LFO",
    "country_code": "ET",
    "city": "Kelafo"
  },
  {
    "code": "SRD",
    "country_code": "BO",
    "city": "San Ramon"
  },
  {
    "code": "BNQ",
    "country_code": "PH",
    "city": "Baganga"
  },
  {
    "code": "BUD",
    "country_code": "HU",
    "city": "Budapest"
  },
  {
    "code": "QRW",
    "country_code": "NG",
    "city": "Warri"
  },
  {
    "code": "AWB",
    "country_code": "PG",
    "city": "Awaba"
  },
  {
    "code": "POE",
    "country_code": "US",
    "city": "Fort Polk"
  },
  {
    "code": "ZNB",
    "country_code": "DE",
    "city": "Hamm"
  },
  {
    "code": "IXN",
    "country_code": "IN",
    "city": "Khowai"
  },
  {
    "code": "RLD",
    "country_code": "US",
    "city": "Richland"
  },
  {
    "code": "SDE",
    "country_code": "AR",
    "city": "Santiago Del Estero"
  },
  {
    "code": "LKB",
    "country_code": "FJ",
    "city": "Lakeba"
  },
  {
    "code": "LPX",
    "country_code": "LV",
    "city": "Liepaya"
  },
  {
    "code": "YXJ",
    "country_code": "CA",
    "city": "Fort St. John"
  },
  {
    "code": "KMY",
    "country_code": "US",
    "city": "Moser Bay"
  },
  {
    "code": "SOZ",
    "country_code": "FR",
    "city": "Solenzara"
  },
  {
    "code": "КСЫ",
    "country_code": "RU",
    "city": "Krasny Kut"
  },
  {
    "code": "CZO",
    "country_code": "US",
    "city": "Chistochina"
  },
  {
    "code": "MNQ",
    "country_code": "AU",
    "city": "Monto"
  },
  {
    "code": "ZLI",
    "country_code": "CH",
    "city": "Winterthur"
  },
  {
    "code": "REQ",
    "country_code": "PK",
    "city": "Reko Diq"
  },
  {
    "code": "CVH",
    "country_code": "AR",
    "city": "Caviahue"
  },
  {
    "code": "MYP",
    "country_code": "TM",
    "city": "Mary"
  },
  {
    "code": "XTR",
    "country_code": "AU",
    "city": "Tara"
  },
  {
    "code": "NIN",
    "country_code": "US",
    "city": "Ninilchik"
  },
  {
    "code": "LNF",
    "country_code": "PG",
    "city": "Munbil"
  },
  {
    "code": "LYE",
    "country_code": "GB",
    "city": "Lyneham"
  },
  {
    "code": "WHF",
    "country_code": "SD",
    "city": "Wadi Halfa"
  },
  {
    "code": "PXM",
    "country_code": "MX",
    "city": "Puerto Escondido"
  },
  {
    "code": "YXQ",
    "country_code": "CA",
    "city": "Beaver Creek"
  },
  {
    "code": "KTF",
    "country_code": "NZ",
    "city": "Takaka"
  },
  {
    "code": "BUW",
    "country_code": "ID",
    "city": "Baubau"
  },
  {
    "code": "MIP",
    "country_code": "IL",
    "city": "Mitspeh Ramon"
  },
  {
    "code": "OAM",
    "country_code": "NZ",
    "city": "Oamaru"
  },
  {
    "code": "WTO",
    "country_code": "MH",
    "city": "Wotho Island"
  },
  {
    "code": "PHB",
    "country_code": "BR",
    "city": "Parnaiba"
  },
  {
    "code": "YNZ",
    "country_code": "CN",
    "city": "Yancheng"
  },
  {
    "code": "ACT",
    "country_code": "US",
    "city": "Waco"
  },
  {
    "code": "MMO",
    "country_code": "CV",
    "city": "Maio"
  },
  {
    "code": "INC",
    "country_code": "CN",
    "city": "Yinchuan"
  },
  {
    "code": "WHU",
    "country_code": "CN",
    "city": "Wuhu"
  },
  {
    "code": "PNR",
    "country_code": "CG",
    "city": "Pointe Noire"
  },
  {
    "code": "BPE",
    "country_code": "MM",
    "city": "Bagan"
  },
  {
    "code": "XCN",
    "country_code": "PH",
    "city": "Puerto Princesa City"
  },
  {
    "code": "CAP",
    "country_code": "HT",
    "city": "Cap Haitien"
  },
  {
    "code": "HLC",
    "country_code": "US",
    "city": "Hill City"
  },
  {
    "code": "ELP",
    "country_code": "US",
    "city": "El Paso"
  },
  {
    "code": "IVR",
    "country_code": "AU",
    "city": "Inverell"
  },
  {
    "code": "SDF",
    "country_code": "US",
    "city": "Louisville"
  },
  {
    "code": "CAB",
    "country_code": "AO",
    "city": "Cabinda"
  },
  {
    "code": "SEQ",
    "country_code": "ID",
    "city": "Sungai Pakning"
  },
  {
    "code": "YHI",
    "country_code": "CA",
    "city": "Holman"
  },
  {
    "code": "MRL",
    "country_code": "AU",
    "city": "Miners Lake"
  },
  {
    "code": "XAW",
    "country_code": "CA",
    "city": "Capreol"
  },
  {
    "code": "VSF",
    "country_code": "US",
    "city": "Springfield"
  },
  {
    "code": "LAT",
    "country_code": "CO",
    "city": "La Uribe"
  },
  {
    "code": "TUC",
    "country_code": "AR",
    "city": "Tucuman"
  },
  {
    "code": "UWP",
    "country_code": "DE",
    "city": "Wuppertal"
  },
  {
    "code": "EDG",
    "country_code": "US",
    "city": "Edgewood"
  },
  {
    "code": "DRW",
    "country_code": "AU",
    "city": "Darwin"
  },
  {
    "code": "CHS",
    "country_code": "US",
    "city": "Charleston"
  },
  {
    "code": "NNG",
    "country_code": "CN",
    "city": "Nanning"
  },
  {
    "code": "TSM",
    "country_code": "US",
    "city": "Taos"
  },
  {
    "code": "IOP",
    "country_code": "PG",
    "city": "Ioma"
  },
  {
    "code": "KUT",
    "country_code": "GE",
    "city": "Kutaisi"
  },
  {
    "code": "CYS",
    "country_code": "US",
    "city": "Cheyenne"
  },
  {
    "code": "PHH",
    "country_code": "VN",
    "city": "Phan Thiet"
  },
  {
    "code": "DIQ",
    "country_code": "BR",
    "city": "Divinopolis"
  },
  {
    "code": "AMM",
    "country_code": "JO",
    "city": "Amman"
  },
  {
    "code": "HWN",
    "country_code": "ZW",
    "city": "Hwange Nat Park"
  },
  {
    "code": "LLW",
    "country_code": "MW",
    "city": "Lilongwe"
  },
  {
    "code": "FES",
    "country_code": "ES",
    "city": "San Fernando"
  },
  {
    "code": "DIU",
    "country_code": "IN",
    "city": "Diu"
  },
  {
    "code": "XVH",
    "country_code": "GB",
    "city": "Peterborough"
  },
  {
    "code": "PAO",
    "country_code": "US",
    "city": "Palo Alto"
  },
  {
    "code": "BQS",
    "country_code": "RU",
    "city": "Blagoveschensk"
  },
  {
    "code": "WSU",
    "country_code": "PG",
    "city": "Wasu"
  },
  {
    "code": "SLA",
    "country_code": "AR",
    "city": "Salta"
  },
  {
    "code": "PKR",
    "country_code": "NP",
    "city": "Pokhara"
  },
  {
    "code": "CPE",
    "country_code": "MX",
    "city": "Campeche"
  },
  {
    "code": "EIB",
    "country_code": "DE",
    "city": "Eisenach"
  },
  {
    "code": "YUY",
    "country_code": "CA",
    "city": "Rouyn"
  },
  {
    "code": "LSA",
    "country_code": "PG",
    "city": "Losuia"
  },
  {
    "code": "QOW",
    "country_code": "NG",
    "city": "Imo"
  },
  {
    "code": "TES",
    "country_code": "ER",
    "city": "Tessenei"
  },
  {
    "code": "PVS",
    "country_code": "RU",
    "city": "Provideniya"
  },
  {
    "code": "GPO",
    "country_code": "AR",
    "city": "General Pico"
  },
  {
    "code": "AEH",
    "country_code": "TD",
    "city": "Abéché"
  },
  {
    "code": "DHL",
    "country_code": "YE",
    "city": "Dhala"
  },
  {
    "code": "FNK",
    "country_code": "US",
    "city": "Fin Creek"
  },
  {
    "code": "BZK",
    "country_code": "RU",
    "city": "Bryansk"
  },
  {
    "code": "CRP",
    "country_code": "US",
    "city": "Corpus Christi"
  },
  {
    "code": "KUP",
    "country_code": "PG",
    "city": "Kupiano"
  },
  {
    "code": "GOH",
    "country_code": "GL",
    "city": "Nuuk"
  },
  {
    "code": "SIU",
    "country_code": "NI",
    "city": "Siuna"
  },
  {
    "code": "KTT",
    "country_code": "FI",
    "city": "Kittila"
  },
  {
    "code": "MRO",
    "country_code": "NZ",
    "city": "Masterton"
  },
  {
    "code": "UCE",
    "country_code": "US",
    "city": "Eunice"
  },
  {
    "code": "ZWJ",
    "country_code": "NO",
    "city": "Haugastol"
  },
  {
    "code": "ACV",
    "country_code": "US",
    "city": "Arcata"
  },
  {
    "code": "IKB",
    "country_code": "US",
    "city": "Wilkesboro"
  },
  {
    "code": "VAH",
    "country_code": "BO",
    "city": "Vallegrande"
  },
  {
    "code": "CBU",
    "country_code": "DE",
    "city": "Cottbus"
  },
  {
    "code": "AVA",
    "country_code": "CN",
    "city": "An Shun"
  },
  {
    "code": "YAJ",
    "country_code": "CA",
    "city": "Lyall Harbour"
  },
  {
    "code": "BEW",
    "country_code": "MZ",
    "city": "Beira"
  },
  {
    "code": "TLS",
    "country_code": "FR",
    "city": "Toulouse"
  },
  {
    "code": "TNM",
    "country_code": "AQ",
    "city": "Teniente R. Marsh Martin"
  },
  {
    "code": "EJH",
    "country_code": "SA",
    "city": "Wedjh"
  },
  {
    "code": "IJU",
    "country_code": "BR",
    "city": "Ijui"
  },
  {
    "code": "HAA",
    "country_code": "NO",
    "city": "Hasvik"
  },
  {
    "code": "KYE",
    "country_code": "LB",
    "city": "Tripoli"
  },
  {
    "code": "QUB",
    "country_code": "LY",
    "city": "Ubari"
  },
  {
    "code": "KWM",
    "country_code": "AU",
    "city": "Kowanyama"
  },
  {
    "code": "KNK",
    "country_code": "US",
    "city": "Kokhanok"
  },
  {
    "code": "XQG",
    "country_code": "GB",
    "city": "Berwick-upon-Tweed"
  },
  {
    "code": "AHY",
    "country_code": "MG",
    "city": "Ambatolahy"
  },
  {
    "code": "IXY",
    "country_code": "IN",
    "city": "Kandla"
  },
  {
    "code": "SAO",
    "country_code": "BR",
    "city": "Sao Paulo"
  },
  {
    "code": "PTC",
    "country_code": "US",
    "city": "Port Alice"
  },
  {
    "code": "CAA",
    "country_code": "HN",
    "city": "Catacamas"
  },
  {
    "code": "EKO",
    "country_code": "US",
    "city": "Elko"
  },
  {
    "code": "XLP",
    "country_code": "CA",
    "city": "Matapedia"
  },
  {
    "code": "WLD",
    "country_code": "US",
    "city": "Winfield"
  },
  {
    "code": "NYU",
    "country_code": "MM",
    "city": "Nyaung-u"
  },
  {
    "code": "COI",
    "country_code": "US",
    "city": "Cocoa"
  },
  {
    "code": "AQI",
    "country_code": "SA",
    "city": "Qaisumah"
  },
  {
    "code": "SRR",
    "country_code": "AU",
    "city": "Stradbroke Island"
  },
  {
    "code": "CIE",
    "country_code": "AU",
    "city": "Collie"
  },
  {
    "code": "SZV",
    "country_code": "CN",
    "city": "Suzhou"
  },
  {
    "code": "KMI",
    "country_code": "JP",
    "city": "Miyazaki"
  },
  {
    "code": "MGI",
    "country_code": "US",
    "city": "Matagorda Island"
  },
  {
    "code": "HWA",
    "country_code": "PG",
    "city": "Hawabango"
  },
  {
    "code": "SAX",
    "country_code": "PA",
    "city": "Sambu"
  },
  {
    "code": "ARP",
    "country_code": "PG",
    "city": "Aragip"
  },
  {
    "code": "KAN",
    "country_code": "NG",
    "city": "Kano"
  },
  {
    "code": "WRA",
    "country_code": "ET",
    "city": "Warder"
  },
  {
    "code": "YOK",
    "country_code": "JP",
    "city": "Yokohama"
  },
  {
    "code": "GIL",
    "country_code": "PK",
    "city": "Gilgit"
  },
  {
    "code": "YNO",
    "country_code": "CA",
    "city": "North Spirit Lake"
  },
  {
    "code": "PGK",
    "country_code": "ID",
    "city": "Pangkal Pinang"
  },
  {
    "code": "DPE",
    "country_code": "FR",
    "city": "Dieppe"
  },
  {
    "code": "TSH",
    "country_code": "CD",
    "city": "Tshikapa"
  },
  {
    "code": "AIL",
    "country_code": "PA",
    "city": "Ailigandi"
  },
  {
    "code": "LWH",
    "country_code": "AU",
    "city": "Lawn Hill"
  },
  {
    "code": "AVU",
    "country_code": "SB",
    "city": "Avu Avu"
  },
  {
    "code": "AUW",
    "country_code": "US",
    "city": "Wausau"
  },
  {
    "code": "МАМ",
    "country_code": "RU",
    "city": "Mama"
  },
  {
    "code": "HDF",
    "country_code": "DE",
    "city": "Heringsdorf"
  },
  {
    "code": "FVL",
    "country_code": "AU",
    "city": "Flora Valley"
  },
  {
    "code": "DZN",
    "country_code": "KZ",
    "city": "Zhezkazgan"
  },
  {
    "code": "TOC",
    "country_code": "US",
    "city": "Toccoa"
  },
  {
    "code": "MUB",
    "country_code": "BW",
    "city": "Maun"
  },
  {
    "code": "TIY",
    "country_code": "MR",
    "city": "Tidjikja"
  },
  {
    "code": "PCL",
    "country_code": "PE",
    "city": "Pucallpa"
  },
  {
    "code": "TAH",
    "country_code": "VU",
    "city": "Tanna"
  },
  {
    "code": "WWA",
    "country_code": "US",
    "city": "Wasilla"
  },
  {
    "code": "JKH",
    "country_code": "GR",
    "city": "Chios"
  },
  {
    "code": "CMB",
    "country_code": "LK",
    "city": "Colombo"
  },
  {
    "code": "ANZ",
    "country_code": "AU",
    "city": "Angus Downs"
  },
  {
    "code": "AAH",
    "country_code": "DE",
    "city": "Aachen"
  },
  {
    "code": "SKS",
    "country_code": "DK",
    "city": "Vojens"
  },
  {
    "code": "MGV",
    "country_code": "AU",
    "city": "Margaret River Station"
  },
  {
    "code": "CHT",
    "country_code": "NZ",
    "city": "Chatham Island"
  },
  {
    "code": "JGD",
    "country_code": "CN",
    "city": "Jiagedaqi District"
  },
  {
    "code": "JCR",
    "country_code": "BR",
    "city": "Jacareacanga"
  },
  {
    "code": "JPD",
    "country_code": "US",
    "city": "Pasadena"
  },
  {
    "code": "FOU",
    "country_code": "GA",
    "city": "Fougamou"
  },
  {
    "code": "KQL",
    "country_code": "PG",
    "city": "Kol"
  },
  {
    "code": "DOH",
    "country_code": "QA",
    "city": "Doha"
  },
  {
    "code": "WPA",
    "country_code": "CL",
    "city": "Puerto Aisen"
  },
  {
    "code": "VNA",
    "country_code": "LA",
    "city": "Saravane"
  },
  {
    "code": "NBA",
    "country_code": "PG",
    "city": "Nambaiyufa"
  },
  {
    "code": "CSF",
    "country_code": "FR",
    "city": "Creil"
  },
  {
    "code": "LBL",
    "country_code": "US",
    "city": "Liberal"
  },
  {
    "code": "EME",
    "country_code": "DE",
    "city": "Emden"
  },
  {
    "code": "XYO",
    "country_code": "SE",
    "city": "Karlshamn"
  },
  {
    "code": "TUI",
    "country_code": "SA",
    "city": "Turaif"
  },
  {
    "code": "WAZ",
    "country_code": "AU",
    "city": "Warwick"
  },
  {
    "code": "AMI",
    "country_code": "ID",
    "city": "Mataram"
  },
  {
    "code": "BTO",
    "country_code": "SR",
    "city": "Botopasie"
  },
  {
    "code": "APN",
    "country_code": "US",
    "city": "Alpena"
  },
  {
    "code": "GMN",
    "country_code": "NZ",
    "city": "Greymouth"
  },
  {
    "code": "DEP",
    "country_code": "IN",
    "city": "Deparizo"
  },
  {
    "code": "SIR",
    "country_code": "CH",
    "city": "Sion"
  },
  {
    "code": "BEY",
    "country_code": "LB",
    "city": "Beirut"
  },
  {
    "code": "CKY",
    "country_code": "GN",
    "city": "Conakry"
  },
  {
    "code": "TRR",
    "country_code": "LK",
    "city": "Trincomalee"
  },
  {
    "code": "ABL",
    "country_code": "US",
    "city": "Ambler"
  },
  {
    "code": "LKD",
    "country_code": "AU",
    "city": "Lakeland Downs"
  },
  {
    "code": "RAF",
    "country_code": "AR",
    "city": "Rafaela"
  },
  {
    "code": "ZAO",
    "country_code": "FR",
    "city": "Cahors"
  },
  {
    "code": "IKU",
    "country_code": "KG",
    "city": "Tamchy"
  },
  {
    "code": "TMT",
    "country_code": "BR",
    "city": "Trombetas"
  },
  {
    "code": "CVB",
    "country_code": "PG",
    "city": "Chungribu"
  },
  {
    "code": "ANJ",
    "country_code": "CG",
    "city": "Zanaga"
  },
  {
    "code": "ADY",
    "country_code": "ZA",
    "city": "Alldays"
  },
  {
    "code": "KMF",
    "country_code": "PG",
    "city": "Kamina"
  },
  {
    "code": "YMW",
    "country_code": "CA",
    "city": "Maniwaki"
  },
  {
    "code": "XID",
    "country_code": "CA",
    "city": "Maxville"
  },
  {
    "code": "BAL",
    "country_code": "TR",
    "city": "Batman"
  },
  {
    "code": "GLF",
    "country_code": "CR",
    "city": "Golfito"
  },
  {
    "code": "NQY",
    "country_code": "GB",
    "city": "Newquay"
  },
  {
    "code": "CTO",
    "country_code": "US",
    "city": "Calverton"
  },
  {
    "code": "SID",
    "country_code": "CV",
    "city": "Sal"
  },
  {
    "code": "TWB",
    "country_code": "AU",
    "city": "Toowoomba"
  },
  {
    "code": "HRE",
    "country_code": "ZW",
    "city": "Harare"
  },
  {
    "code": "MFH",
    "country_code": "US",
    "city": "Mesquite"
  },
  {
    "code": "PKN",
    "country_code": "ID",
    "city": "Pangkalanbun"
  },
  {
    "code": "LEW",
    "country_code": "US",
    "city": "Lewiston"
  },
  {
    "code": "LCC",
    "country_code": "IT",
    "city": "Lecce"
  },
  {
    "code": "NOR",
    "country_code": "IS",
    "city": "Nordfjordur"
  },
  {
    "code": "PYH",
    "country_code": "VE",
    "city": "Puerto Ayacucho"
  },
  {
    "code": "YCC",
    "country_code": "CA",
    "city": "Cornwall"
  },
  {
    "code": "CJA",
    "country_code": "PE",
    "city": "Cajamarca"
  },
  {
    "code": "YTM",
    "country_code": "CA",
    "city": "Mont Tremblant"
  },
  {
    "code": "YZV",
    "country_code": "CA",
    "city": "Sept-Iles"
  },
  {
    "code": "HUI",
    "country_code": "VN",
    "city": "Hue"
  },
  {
    "code": "CDE",
    "country_code": "PA",
    "city": "Caledonia"
  },
  {
    "code": "ENY",
    "country_code": "CN",
    "city": "Yan'an"
  },
  {
    "code": "ICK",
    "country_code": "SR",
    "city": "Nieuw Nickerie"
  },
  {
    "code": "RVO",
    "country_code": "ZA",
    "city": "Reivilo"
  },
  {
    "code": "PET",
    "country_code": "BR",
    "city": "Pelotas"
  },
  {
    "code": "LLE",
    "country_code": "ZA",
    "city": "Malelane"
  },
  {
    "code": "BWP",
    "country_code": "PG",
    "city": "Bewani"
  },
  {
    "code": "LLI",
    "country_code": "ET",
    "city": "Lalibela"
  },
  {
    "code": "LEE",
    "country_code": "US",
    "city": "Leesburg"
  },
  {
    "code": "EPS",
    "country_code": "DO",
    "city": "Samana"
  },
  {
    "code": "FIK",
    "country_code": "AU",
    "city": "Finke"
  },
  {
    "code": "KCO",
    "country_code": "TR",
    "city": "Izmit"
  },
  {
    "code": "CLX",
    "country_code": "AR",
    "city": "Clorinda"
  },
  {
    "code": "LGK",
    "country_code": "MY",
    "city": "Langkawi"
  },
  {
    "code": "SSY",
    "country_code": "AO",
    "city": "M'banza Congo"
  },
  {
    "code": "LCM",
    "country_code": "AR",
    "city": "La Cumbre"
  },
  {
    "code": "BWC",
    "country_code": "US",
    "city": "Brawley"
  },
  {
    "code": "VLK",
    "country_code": "RU",
    "city": "Volgodonsk"
  },
  {
    "code": "XBW",
    "country_code": "CA",
    "city": "Killineq"
  },
  {
    "code": "MOS",
    "country_code": "US",
    "city": "Moses Point"
  },
  {
    "code": "KHM",
    "country_code": "MM",
    "city": "Khamti"
  },
  {
    "code": "SCV",
    "country_code": "RO",
    "city": "Suceava"
  },
  {
    "code": "GTK",
    "country_code": "MY",
    "city": "Sungei Tekai"
  },
  {
    "code": "KGM",
    "country_code": "PG",
    "city": "Kungum"
  },
  {
    "code": "MZC",
    "country_code": "GA",
    "city": "Mitzic"
  },
  {
    "code": "RJN",
    "country_code": "IR",
    "city": "Rafsanjan"
  },
  {
    "code": "SOY",
    "country_code": "GB",
    "city": "Stronsay"
  },
  {
    "code": "BCX",
    "country_code": "RU",
    "city": "Beloreck"
  },
  {
    "code": "YMB",
    "country_code": "CA",
    "city": "Merritt"
  },
  {
    "code": "AZB",
    "country_code": "PG",
    "city": "Amazon Bay"
  },
  {
    "code": "JAS",
    "country_code": "US",
    "city": "Jasper"
  },
  {
    "code": "FLA",
    "country_code": "CO",
    "city": "Florencia"
  },
  {
    "code": "FFU",
    "country_code": "CL",
    "city": "Futaleufu"
  },
  {
    "code": "PUC",
    "country_code": "US",
    "city": "Price"
  },
  {
    "code": "YER",
    "country_code": "CA",
    "city": "Fort Severn"
  },
  {
    "code": "BJO",
    "country_code": "BO",
    "city": "Bermejo"
  },
  {
    "code": "UKK",
    "country_code": "KZ",
    "city": "Ust-Kamenogorsk"
  },
  {
    "code": "AKH",
    "country_code": "SA",
    "city": "Al Kharj"
  },
  {
    "code": "RCT",
    "country_code": "US",
    "city": "Reed City"
  },
  {
    "code": "BXL",
    "country_code": "FJ",
    "city": "Blue Lagoon"
  },
  {
    "code": "BUL",
    "country_code": "PG",
    "city": "Bulolo"
  },
  {
    "code": "EIE",
    "country_code": "RU",
    "city": "Eniseysk"
  },
  {
    "code": "CIC",
    "country_code": "US",
    "city": "Chico"
  },
  {
    "code": "OZR",
    "country_code": "US",
    "city": "Ozark"
  },
  {
    "code": "ISO",
    "country_code": "US",
    "city": "Kinston"
  },
  {
    "code": "GKH",
    "country_code": "NP",
    "city": "Gorkha"
  },
  {
    "code": "LSM",
    "country_code": "MY",
    "city": "Long Semado"
  },
  {
    "code": "GNI",
    "country_code": "TW",
    "city": "Green Island"
  },
  {
    "code": "AAS",
    "country_code": "ID",
    "city": "Apalapsili"
  },
  {
    "code": "TCZ",
    "country_code": "CN",
    "city": "Tengchong"
  },
  {
    "code": "CYU",
    "country_code": "PH",
    "city": "Cuyo"
  },
  {
    "code": "XGI",
    "country_code": "NO",
    "city": "Andalsnes"
  },
  {
    "code": "SLF",
    "country_code": "SA",
    "city": "Sulayel"
  },
  {
    "code": "STF",
    "country_code": "AU",
    "city": "Stephens Island"
  },
  {
    "code": "PMX",
    "country_code": "US",
    "city": "Palmer"
  },
  {
    "code": "CLQ",
    "country_code": "MX",
    "city": "Colima"
  },
  {
    "code": "USL",
    "country_code": "AU",
    "city": "Useless Loop"
  },
  {
    "code": "SWT",
    "country_code": "RU",
    "city": "Strezhevoy"
  },
  {
    "code": "AMJ",
    "country_code": "BR",
    "city": "Almenara"
  },
  {
    "code": "LBP",
    "country_code": "MY",
    "city": "Long Banga"
  },
  {
    "code": "LRO",
    "country_code": "US",
    "city": "Lathrop"
  },
  {
    "code": "VVN",
    "country_code": "PE",
    "city": "Malvinas"
  },
  {
    "code": "CII",
    "country_code": "TR",
    "city": "Aydin"
  },
  {
    "code": "NYI",
    "country_code": "GH",
    "city": "Sunyani"
  },
  {
    "code": "PWL",
    "country_code": "ID",
    "city": "Purwokerto"
  },
  {
    "code": "ANA",
    "country_code": "US",
    "city": "Anaheim"
  },
  {
    "code": "PGX",
    "country_code": "FR",
    "city": "Perigueux"
  },
  {
    "code": "BCR",
    "country_code": "BR",
    "city": "Boca Do Acre"
  },
  {
    "code": "COE",
    "country_code": "US",
    "city": "Coeur D'Alene"
  },
  {
    "code": "WUT",
    "country_code": "CN",
    "city": "Xinzhou"
  },
  {
    "code": "AKA",
    "country_code": "CN",
    "city": "Ankang"
  },
  {
    "code": "OSK",
    "country_code": "SE",
    "city": "Oskarshamn"
  },
  {
    "code": "YAV",
    "country_code": "CA",
    "city": "Miners Bay"
  },
  {
    "code": "LZH",
    "country_code": "CN",
    "city": "Liuzhou"
  },
  {
    "code": "ZTA",
    "country_code": "PF",
    "city": "Tureira"
  },
  {
    "code": "DZU",
    "country_code": "CN",
    "city": "Dazu"
  },
  {
    "code": "CPA",
    "country_code": "LR",
    "city": "Cape Palmas"
  },
  {
    "code": "NUS",
    "country_code": "VU",
    "city": "Norsup"
  },
  {
    "code": "AMX",
    "country_code": "AU",
    "city": "Ammaroo"
  },
  {
    "code": "SKW",
    "country_code": "US",
    "city": "Skwentna"
  },
  {
    "code": "XOK",
    "country_code": "CA",
    "city": "Oakville"
  },
  {
    "code": "CLT",
    "country_code": "US",
    "city": "Charlotte"
  },
  {
    "code": "THN",
    "country_code": "SE",
    "city": "Trollhattan"
  },
  {
    "code": "MNA",
    "country_code": "ID",
    "city": "Melangguane"
  },
  {
    "code": "MLC",
    "country_code": "US",
    "city": "Mc Alester"
  },
  {
    "code": "MZF",
    "country_code": "ZA",
    "city": "Mzamba(Wild Coast Sun)"
  },
  {
    "code": "HME",
    "country_code": "DZ",
    "city": "Hassi Messaoud"
  },
  {
    "code": "ZVA",
    "country_code": "MG",
    "city": "Miandrivazo"
  },
  {
    "code": "TRT",
    "country_code": "US",
    "city": "Tremonton"
  },
  {
    "code": "HGH",
    "country_code": "CN",
    "city": "Hangzhou"
  },
  {
    "code": "LKO",
    "country_code": "IN",
    "city": "Lucknow"
  },
  {
    "code": "MDC",
    "country_code": "ID",
    "city": "Manado"
  },
  {
    "code": "LOX",
    "country_code": "GT",
    "city": "Los Tablones"
  },
  {
    "code": "AXT",
    "country_code": "JP",
    "city": "Akita"
  },
  {
    "code": "PRB",
    "country_code": "US",
    "city": "Paso Robles"
  },
  {
    "code": "VIB",
    "country_code": "MX",
    "city": "Villa Constitucion"
  },
  {
    "code": "IBE",
    "country_code": "CO",
    "city": "Ibague"
  },
  {
    "code": "ELN",
    "country_code": "US",
    "city": "Ellensburg"
  },
  {
    "code": "PBL",
    "country_code": "VE",
    "city": "Puerto Cabello"
  },
  {
    "code": "DNS",
    "country_code": "US",
    "city": "Denison"
  },
  {
    "code": "DGP",
    "country_code": "LV",
    "city": "Daugavpils"
  },
  {
    "code": "YPF",
    "country_code": "CA",
    "city": "Esquimalt"
  },
  {
    "code": "HEH",
    "country_code": "MM",
    "city": "Heho"
  },
  {
    "code": "NTE",
    "country_code": "FR",
    "city": "Nantes"
  },
  {
    "code": "SRQ",
    "country_code": "US",
    "city": "Sarasota"
  },
  {
    "code": "NBB",
    "country_code": "CO",
    "city": "Barrancominas"
  },
  {
    "code": "YXL",
    "country_code": "CA",
    "city": "Sioux Lookout"
  },
  {
    "code": "OMI",
    "country_code": "IR",
    "city": "Omidieh"
  },
  {
    "code": "GSB",
    "country_code": "US",
    "city": "Goldsboro"
  },
  {
    "code": "ENV",
    "country_code": "US",
    "city": "Wendover"
  },
  {
    "code": "PMO",
    "country_code": "IT",
    "city": "Palermo"
  },
  {
    "code": "DAU",
    "country_code": "PG",
    "city": "Daru"
  },
  {
    "code": "PFQ",
    "country_code": "IR",
    "city": "Parsabad"
  },
  {
    "code": "GUT",
    "country_code": "DE",
    "city": "Guetersloh"
  },
  {
    "code": "MTP",
    "country_code": "US",
    "city": "Montauk"
  },
  {
    "code": "WGA",
    "country_code": "AU",
    "city": "Wagga Wagga"
  },
  {
    "code": "PTZ",
    "country_code": "EC",
    "city": "Pastaza"
  },
  {
    "code": "SMN",
    "country_code": "US",
    "city": "Salmon"
  },
  {
    "code": "NRR",
    "country_code": "PR",
    "city": "Roosevelt Roads"
  },
  {
    "code": "EKE",
    "country_code": "GY",
    "city": "Ekereku"
  },
  {
    "code": "LEM",
    "country_code": "US",
    "city": "Lemmon"
  },
  {
    "code": "DSM",
    "country_code": "US",
    "city": "Des Moines"
  },
  {
    "code": "BLK",
    "country_code": "GB",
    "city": "Blackpool"
  },
  {
    "code": "AOP",
    "country_code": "PE",
    "city": "Andoas"
  },
  {
    "code": "CQP",
    "country_code": "AU",
    "city": "Cape Flattery"
  },
  {
    "code": "SPQ",
    "country_code": "US",
    "city": "San Pedro"
  },
  {
    "code": "YBT",
    "country_code": "CA",
    "city": "Brochet"
  },
  {
    "code": "BFR",
    "country_code": "US",
    "city": "Bedford"
  },
  {
    "code": "PRF",
    "country_code": "US",
    "city": "Port Johnson"
  },
  {
    "code": "MZQ",
    "country_code": "ZA",
    "city": "Mkuze"
  },
  {
    "code": "ZSJ",
    "country_code": "CA",
    "city": "Sandy Lake"
  },
  {
    "code": "SED",
    "country_code": "IL",
    "city": "Sedom"
  },
  {
    "code": "WNS",
    "country_code": "PK",
    "city": "Nawabshah"
  },
  {
    "code": "LSO",
    "country_code": "FR",
    "city": "Les Sables"
  },
  {
    "code": "RAZ",
    "country_code": "PK",
    "city": "Rawala Kot"
  },
  {
    "code": "TML",
    "country_code": "GH",
    "city": "Tamale"
  },
  {
    "code": "OTR",
    "country_code": "CR",
    "city": "Coto 47"
  },
  {
    "code": "MXM",
    "country_code": "MG",
    "city": "Morombe"
  },
  {
    "code": "PEV",
    "country_code": "HU",
    "city": "Pecs"
  },
  {
    "code": "WRY",
    "country_code": "GB",
    "city": "Westray"
  },
  {
    "code": "GSI",
    "country_code": "SB",
    "city": "Guadalcanal"
  },
  {
    "code": "BVR",
    "country_code": "CV",
    "city": "Brava"
  },
  {
    "code": "CRH",
    "country_code": "AU",
    "city": "Cherribah"
  },
  {
    "code": "HOP",
    "country_code": "US",
    "city": "Hopkinsville"
  },
  {
    "code": "NON",
    "country_code": "KI",
    "city": "Rotima"
  },
  {
    "code": "MVU",
    "country_code": "AU",
    "city": "Musgrave"
  },
  {
    "code": "WDR",
    "country_code": "US",
    "city": "Winder"
  },
  {
    "code": "HTW",
    "country_code": "US",
    "city": "Huntington"
  },
  {
    "code": "REG",
    "country_code": "IT",
    "city": "Reggio Calabria"
  },
  {
    "code": "TOZ",
    "country_code": "CI",
    "city": "Touba"
  },
  {
    "code": "KSM",
    "country_code": "US",
    "city": "Saint Mary's"
  },
  {
    "code": "LHA",
    "country_code": "DE",
    "city": "Lahr"
  },
  {
    "code": "TDN",
    "country_code": "AU",
    "city": "Theda"
  },
  {
    "code": "BDS",
    "country_code": "IT",
    "city": "Brindisi"
  },
  {
    "code": "IPC",
    "country_code": "CL",
    "city": "Easter Island"
  },
  {
    "code": "HPH",
    "country_code": "VN",
    "city": "Haiphong"
  },
  {
    "code": "SFT",
    "country_code": "SE",
    "city": "Skelleftea"
  },
  {
    "code": "HAS",
    "country_code": "SA",
    "city": "Hail"
  },
  {
    "code": "UKN",
    "country_code": "US",
    "city": "Waukon"
  },
  {
    "code": "ANE",
    "country_code": "FR",
    "city": "Angers"
  },
  {
    "code": "SCJ",
    "country_code": "US",
    "city": "Smith Cove"
  },
  {
    "code": "YKO",
    "country_code": "TR",
    "city": "Hakkari"
  },
  {
    "code": "BJM",
    "country_code": "BI",
    "city": "Bujumbura"
  },
  {
    "code": "GJR",
    "country_code": "IS",
    "city": "Gjogur"
  },
  {
    "code": "OGO",
    "country_code": "CI",
    "city": "Abengourou"
  },
  {
    "code": "YRN",
    "country_code": "CA",
    "city": "Owekeno Village"
  },
  {
    "code": "PNC",
    "country_code": "US",
    "city": "Ponca City"
  },
  {
    "code": "STS",
    "country_code": "US",
    "city": "Santa Rosa"
  },
  {
    "code": "KCF",
    "country_code": "PK",
    "city": "Kadanwari"
  },
  {
    "code": "ASQ",
    "country_code": "US",
    "city": "Austin"
  },
  {
    "code": "UZH",
    "country_code": "SA",
    "city": "Unayzah"
  },
  {
    "code": "НЖГ",
    "country_code": "RU",
    "city": "Nizhneangarsk"
  },
  {
    "code": "BNW",
    "country_code": "US",
    "city": "Boone"
  },
  {
    "code": "BFP",
    "country_code": "US",
    "city": "Beaver Falls"
  },
  {
    "code": "GEK",
    "country_code": "US",
    "city": "Ganes Creek"
  },
  {
    "code": "SCI",
    "country_code": "VE",
    "city": "San Cristobal"
  },
  {
    "code": "MVM",
    "country_code": "US",
    "city": "Kayenta"
  },
  {
    "code": "YBX",
    "country_code": "CA",
    "city": "Blanc Sablon"
  },
  {
    "code": "AQJ",
    "country_code": "JO",
    "city": "Aqaba"
  },
  {
    "code": "RVY",
    "country_code": "UY",
    "city": "Rivera"
  },
  {
    "code": "CWC",
    "country_code": "UA",
    "city": "Chernivtsi"
  },
  {
    "code": "YDB",
    "country_code": "CA",
    "city": "Burwash Landings"
  },
  {
    "code": "OPL",
    "country_code": "US",
    "city": "Opelousas"
  },
  {
    "code": "PLS",
    "country_code": "TC",
    "city": "Providenciales"
  },
  {
    "code": "CGC",
    "country_code": "PG",
    "city": "Cape Gloucester"
  },
  {
    "code": "KOW",
    "country_code": "CN",
    "city": "Ganzhou"
  },
  {
    "code": "EYK",
    "country_code": "RU",
    "city": "Beloyarsky"
  },
  {
    "code": "QLE",
    "country_code": "AU",
    "city": "Leeton"
  },
  {
    "code": "RUH",
    "country_code": "SA",
    "city": "Riyadh"
  },
  {
    "code": "MRS",
    "country_code": "FR",
    "city": "Marseille"
  },
  {
    "code": "HSK",
    "country_code": "ES",
    "city": "Huesca"
  },
  {
    "code": "BVM",
    "country_code": "BR",
    "city": "Belmonte"
  },
  {
    "code": "CKI",
    "country_code": "AU",
    "city": "Croker Island"
  },
  {
    "code": "SDW",
    "country_code": "IN",
    "city": "Malvan"
  },
  {
    "code": "XWY",
    "country_code": "CA",
    "city": "Wyoming"
  },
  {
    "code": "BWH",
    "country_code": "MY",
    "city": "Butterworth"
  },
  {
    "code": "YVC",
    "country_code": "CA",
    "city": "La Ronge"
  },
  {
    "code": "TUE",
    "country_code": "PA",
    "city": "Tupile"
  },
  {
    "code": "PGR",
    "country_code": "US",
    "city": "Paragould"
  },
  {
    "code": "SHL",
    "country_code": "IN",
    "city": "Umroi"
  },
  {
    "code": "TMU",
    "country_code": "CR",
    "city": "Tambor"
  },
  {
    "code": "PBJ",
    "country_code": "VU",
    "city": "Paama"
  },
  {
    "code": "YXX",
    "country_code": "CA",
    "city": "Abbotsford"
  },
  {
    "code": "VCR",
    "country_code": "VE",
    "city": "Carora"
  },
  {
    "code": "QWL",
    "country_code": "AU",
    "city": "Crackenback Village"
  },
  {
    "code": "QEQ",
    "country_code": "CH",
    "city": "Embrach/Rorbas"
  },
  {
    "code": "NYM",
    "country_code": "RU",
    "city": "Nadym"
  },
  {
    "code": "VCS",
    "country_code": "VN",
    "city": "Con Dao"
  },
  {
    "code": "YUB",
    "country_code": "CA",
    "city": "Tuktoyaktuk"
  },
  {
    "code": "TUF",
    "country_code": "FR",
    "city": "Tours"
  },
  {
    "code": "FOT",
    "country_code": "AU",
    "city": "Forster"
  },
  {
    "code": "CMJ",
    "country_code": "TW",
    "city": "Chi Mei"
  },
  {
    "code": "HOS",
    "country_code": "AR",
    "city": "Chos Malal"
  },
  {
    "code": "OER",
    "country_code": "SE",
    "city": "Ornskoldsvik"
  },
  {
    "code": "STB",
    "country_code": "VE",
    "city": "Santa Barbara Ed"
  },
  {
    "code": "BOH",
    "country_code": "GB",
    "city": "Bournemouth"
  },
  {
    "code": "ZAU",
    "country_code": "DE",
    "city": "Aue"
  },
  {
    "code": "TFB",
    "country_code": "PG",
    "city": "Tifalmin"
  },
  {
    "code": "GNJ",
    "country_code": "AZ",
    "city": "Ganja"
  },
  {
    "code": "RTY",
    "country_code": "AU",
    "city": "Merty"
  },
  {
    "code": "AER",
    "country_code": "RU",
    "city": "Adler/Sochi"
  },
  {
    "code": "ARH",
    "country_code": "RU",
    "city": "Arkhangelsk"
  },
  {
    "code": "KUF",
    "country_code": "RU",
    "city": "Samara"
  },
  {
    "code": "BNY",
    "country_code": "SB",
    "city": "Bellona"
  },
  {
    "code": "UGT",
    "country_code": "MN",
    "city": "Umnugobitour"
  },
  {
    "code": "XWN",
    "country_code": "GB",
    "city": "Warrington"
  },
  {
    "code": "POA",
    "country_code": "BR",
    "city": "Porto Alegre"
  },
  {
    "code": "BCL",
    "country_code": "CR",
    "city": "Barra Colorado"
  },
  {
    "code": "AMS",
    "country_code": "NL",
    "city": "Amsterdam"
  },
  {
    "code": "KML",
    "country_code": "AU",
    "city": "Kamileroi"
  },
  {
    "code": "TSJ",
    "country_code": "JP",
    "city": "Tsushima"
  },
  {
    "code": "MJJ",
    "country_code": "PG",
    "city": "Moki"
  },
  {
    "code": "БИХ",
    "country_code": "RU",
    "city": "Belokurikha"
  },
  {
    "code": "TTG",
    "country_code": "AR",
    "city": "Tartagal"
  },
  {
    "code": "JGS",
    "country_code": "CN",
    "city": "Ji'An"
  },
  {
    "code": "NHA",
    "country_code": "VN",
    "city": "Nha Trang"
  },
  {
    "code": "BAF",
    "country_code": "US",
    "city": "Westfield"
  },
  {
    "code": "ALM",
    "country_code": "US",
    "city": "Alamogordo"
  },
  {
    "code": "MDH",
    "country_code": "US",
    "city": "Carbondale"
  },
  {
    "code": "ILD",
    "country_code": "ES",
    "city": "Alguaire"
  },
  {
    "code": "SLX",
    "country_code": "TC",
    "city": "Salt Cay"
  },
  {
    "code": "ZSP",
    "country_code": "CA",
    "city": "St Paul"
  },
  {
    "code": "KPS",
    "country_code": "AU",
    "city": "Kempsey"
  },
  {
    "code": "ZRW",
    "country_code": "DE",
    "city": "Rastatt"
  },
  {
    "code": "JRO",
    "country_code": "TZ",
    "city": "Kilimanjaro"
  },
  {
    "code": "МЗН",
    "country_code": "RU",
    "city": "Mezen"
  },
  {
    "code": "FTI",
    "country_code": "AS",
    "city": "Fitiuta"
  },
  {
    "code": "SLY",
    "country_code": "RU",
    "city": "Salekhard"
  },
  {
    "code": "BDM",
    "country_code": "TR",
    "city": "Bandirma"
  },
  {
    "code": "YEI",
    "country_code": "TR",
    "city": "Bursa"
  },
  {
    "code": "TAZ",
    "country_code": "TM",
    "city": "Dashoguz"
  },
  {
    "code": "CAU",
    "country_code": "BR",
    "city": "Caruaru"
  },
  {
    "code": "EGO",
    "country_code": "RU",
    "city": "Belgorod"
  },
  {
    "code": "BLF",
    "country_code": "US",
    "city": "Princeton"
  },
  {
    "code": "EWN",
    "country_code": "US",
    "city": "New Bern"
  },
  {
    "code": "UZC",
    "country_code": "RS",
    "city": "Uzice"
  },
  {
    "code": "BGA",
    "country_code": "CO",
    "city": "Bucaramanga"
  },
  {
    "code": "YWP",
    "country_code": "CA",
    "city": "Webequie"
  },
  {
    "code": "GRR",
    "country_code": "US",
    "city": "Grand Rapids"
  },
  {
    "code": "TOL",
    "country_code": "US",
    "city": "Toledo"
  },
  {
    "code": "XGR",
    "country_code": "CA",
    "city": "Kangiqsualujjuaq"
  },
  {
    "code": "CGD",
    "country_code": "CN",
    "city": "Changde"
  },
  {
    "code": "SJE",
    "country_code": "CO",
    "city": "San Jose Del Gua"
  },
  {
    "code": "IXE",
    "country_code": "IN",
    "city": "Mangalore"
  },
  {
    "code": "AKB",
    "country_code": "US",
    "city": "Atka"
  },
  {
    "code": "BTS",
    "country_code": "SK",
    "city": "Bratislava"
  },
  {
    "code": "YTS",
    "country_code": "CA",
    "city": "Timmins"
  },
  {
    "code": "BJE",
    "country_code": "SD",
    "city": "Baleela"
  },
  {
    "code": "PBQ",
    "country_code": "BR",
    "city": "Pimenta Bueno"
  },
  {
    "code": "PHI",
    "country_code": "BR",
    "city": "Pinheiro"
  },
  {
    "code": "UTN",
    "country_code": "ZA",
    "city": "Upington"
  },
  {
    "code": "CSD",
    "country_code": "AU",
    "city": "Cresswell Downs"
  },
  {
    "code": "KAU",
    "country_code": "FI",
    "city": "Kauhava"
  },
  {
    "code": "ROO",
    "country_code": "BR",
    "city": "Rondonopolis"
  },
  {
    "code": "YMJ",
    "country_code": "CA",
    "city": "Moose Jaw"
  },
  {
    "code": "SEY",
    "country_code": "MR",
    "city": "Selibaby"
  },
  {
    "code": "MJD",
    "country_code": "PK",
    "city": "Mohenjodaro"
  },
  {
    "code": "KEK",
    "country_code": "US",
    "city": "Ekwok"
  },
  {
    "code": "OFU",
    "country_code": "AS",
    "city": "Vaoto"
  },
  {
    "code": "XOB",
    "country_code": "NO",
    "city": "Bryne"
  },
  {
    "code": "КБЗ",
    "country_code": "RU",
    "city": "Krabozavodsk"
  },
  {
    "code": "YDS",
    "country_code": "CA",
    "city": "Desolation Sound"
  },
  {
    "code": "FRQ",
    "country_code": "PG",
    "city": "Feramin"
  },
  {
    "code": "MYZ",
    "country_code": "MW",
    "city": "Monkey Bay"
  },
  {
    "code": "RBL",
    "country_code": "US",
    "city": "Red Bluff"
  },
  {
    "code": "NDS",
    "country_code": "AU",
    "city": "Sandstone"
  },
  {
    "code": "OWE",
    "country_code": "GA",
    "city": "Owendo"
  },
  {
    "code": "SRY",
    "country_code": "IR",
    "city": "Sary"
  },
  {
    "code": "EHM",
    "country_code": "US",
    "city": "Cape Newenham"
  },
  {
    "code": "CLP",
    "country_code": "US",
    "city": "Clarks Point"
  },
  {
    "code": "KHG",
    "country_code": "CN",
    "city": "Kashi"
  },
  {
    "code": "MHV",
    "country_code": "US",
    "city": "Mojave"
  },
  {
    "code": "UUS",
    "country_code": "RU",
    "city": "Yuzhno-Sakhalinsk"
  },
  {
    "code": "MCJ",
    "country_code": "CO",
    "city": "Maicao"
  },
  {
    "code": "SEH",
    "country_code": "ID",
    "city": "Senggeh"
  },
  {
    "code": "GWO",
    "country_code": "US",
    "city": "Greenwood"
  },
  {
    "code": "HEA",
    "country_code": "AF",
    "city": "Herat"
  },
  {
    "code": "NOG",
    "country_code": "MX",
    "city": "Nogales"
  },
  {
    "code": "RCU",
    "country_code": "AR",
    "city": "Rio Cuarto"
  },
  {
    "code": "BOV",
    "country_code": "PG",
    "city": "Boang"
  },
  {
    "code": "VAC",
    "country_code": "DE",
    "city": "Varrelbusch"
  },
  {
    "code": "SHS",
    "country_code": "CN",
    "city": "Shashi"
  },
  {
    "code": "CCR",
    "country_code": "US",
    "city": "Concord"
  },
  {
    "code": "LWI",
    "country_code": "PG",
    "city": "Lowai"
  },
  {
    "code": "JUA",
    "country_code": "BR",
    "city": "Juara"
  },
  {
    "code": "CDC",
    "country_code": "US",
    "city": "Cedar City"
  },
  {
    "code": "YTJ",
    "country_code": "CA",
    "city": "Terrace Bay"
  },
  {
    "code": "MMQ",
    "country_code": "ZM",
    "city": "Mbala"
  },
  {
    "code": "MUR",
    "country_code": "MY",
    "city": "Marudi"
  },
  {
    "code": "BHY",
    "country_code": "CN",
    "city": "Beihai"
  },
  {
    "code": "GNV",
    "country_code": "US",
    "city": "Gainesville"
  },
  {
    "code": "ZIQ",
    "country_code": "IT",
    "city": "Salina Island"
  },
  {
    "code": "ZYI",
    "country_code": "CN",
    "city": "Zunyi"
  },
  {
    "code": "XEK",
    "country_code": "CA",
    "city": "Melville"
  },
  {
    "code": "AEU",
    "country_code": "IR",
    "city": "Abu Musa"
  },
  {
    "code": "SXU",
    "country_code": "ET",
    "city": "Soddu"
  },
  {
    "code": "MJB",
    "country_code": "MH",
    "city": "Mejit Island"
  },
  {
    "code": "EMD",
    "country_code": "AU",
    "city": "Emerald"
  },
  {
    "code": "КЗВ",
    "country_code": "RU",
    "city": "Kuzmovka"
  },
  {
    "code": "MUG",
    "country_code": "MX",
    "city": "Mulege"
  },
  {
    "code": "MTT",
    "country_code": "MX",
    "city": "Minatitlan"
  },
  {
    "code": "ZEU",
    "country_code": "DE",
    "city": "Goettingen"
  },
  {
    "code": "WOR",
    "country_code": "MG",
    "city": "Ankorefo"
  },
  {
    "code": "MJN",
    "country_code": "MG",
    "city": "Majunga"
  },
  {
    "code": "TMM",
    "country_code": "MG",
    "city": "Tamatave"
  },
  {
    "code": "ПГУ",
    "country_code": "RU",
    "city": "Poligus"
  },
  {
    "code": "KHC",
    "country_code": "UA",
    "city": "Kerch"
  },
  {
    "code": "LAJ",
    "country_code": "BR",
    "city": "Lages"
  },
  {
    "code": "BMG",
    "country_code": "US",
    "city": "Bloomington"
  },
  {
    "code": "МГА",
    "country_code": "RU",
    "city": "Miriuga"
  },
  {
    "code": "PMA",
    "country_code": "TZ",
    "city": "Pemba"
  },
  {
    "code": "FGL",
    "country_code": "NZ",
    "city": "Fox Glacier"
  },
  {
    "code": "OWK",
    "country_code": "US",
    "city": "Norridgewock"
  },
  {
    "code": "GEN",
    "country_code": "ES",
    "city": "Puente Genil"
  },
  {
    "code": "HZB",
    "country_code": "FR",
    "city": "Hazebrouck"
  },
  {
    "code": "ABY",
    "country_code": "US",
    "city": "Albany"
  },
  {
    "code": "IFJ",
    "country_code": "IS",
    "city": "Isafjordur"
  },
  {
    "code": "BKI",
    "country_code": "MY",
    "city": "Kota Kinabalu"
  },
  {
    "code": "QXB",
    "country_code": "FR",
    "city": "Aix-en-Provence"
  },
  {
    "code": "LXR",
    "country_code": "EG",
    "city": "Luxor"
  },
  {
    "code": "ART",
    "country_code": "US",
    "city": "Watertown"
  },
  {
    "code": "XJO",
    "country_code": "ES",
    "city": "Soria"
  },
  {
    "code": "BAP",
    "country_code": "PG",
    "city": "Baibara"
  },
  {
    "code": "RIX",
    "country_code": "LV",
    "city": "Riga"
  },
  {
    "code": "GRE",
    "country_code": "US",
    "city": "Greenville"
  },
  {
    "code": "LAV",
    "country_code": "WS",
    "city": "Lalomalava"
  },
  {
    "code": "FIV",
    "country_code": "US",
    "city": "Five Finger Coast Guard Heliport"
  },
  {
    "code": "AWR",
    "country_code": "PG",
    "city": "Awar"
  },
  {
    "code": "APV",
    "country_code": "US",
    "city": "Apple Valley"
  },
  {
    "code": "RTC",
    "country_code": "IN",
    "city": "Ratnagiri"
  },
  {
    "code": "SYO",
    "country_code": "JP",
    "city": "Shonai"
  },
  {
    "code": "YWA",
    "country_code": "CA",
    "city": "Petawawa"
  },
  {
    "code": "AAA",
    "country_code": "PF",
    "city": "Anaa"
  },
  {
    "code": "YNX",
    "country_code": "CA",
    "city": "Snap Lake"
  },
  {
    "code": "YRI",
    "country_code": "CA",
    "city": "Riviere Du Loup"
  },
  {
    "code": "NVG",
    "country_code": "NI",
    "city": "Nueva Guinea"
  },
  {
    "code": "FLV",
    "country_code": "US",
    "city": "Fort Leavenworth"
  },
  {
    "code": "ZPM",
    "country_code": "DE",
    "city": "Regensburg"
  },
  {
    "code": "FRH",
    "country_code": "US",
    "city": "French Lick"
  },
  {
    "code": "MAR",
    "country_code": "VE",
    "city": "Maracaibo"
  },
  {
    "code": "GUE",
    "country_code": "PG",
    "city": "Guriaso"
  },
  {
    "code": "TBH",
    "country_code": "PH",
    "city": "Tablas"
  },
  {
    "code": "BPK",
    "country_code": "PG",
    "city": "Biangabip"
  },
  {
    "code": "LML",
    "country_code": "MH",
    "city": "Lae Island"
  },
  {
    "code": "USH",
    "country_code": "AR",
    "city": "Ushuaia"
  },
  {
    "code": "SJZ",
    "country_code": "PT",
    "city": "Sao Jorge Island"
  },
  {
    "code": "YNP",
    "country_code": "CA",
    "city": "Natuashish"
  },
  {
    "code": "CER",
    "country_code": "FR",
    "city": "Cherbourg"
  },
  {
    "code": "TFI",
    "country_code": "PG",
    "city": "Tufi"
  },
  {
    "code": "KME",
    "country_code": "RW",
    "city": "Kamembe"
  },
  {
    "code": "BVB",
    "country_code": "BR",
    "city": "Boa Vista"
  },
  {
    "code": "RMY",
    "country_code": "US",
    "city": "Mariposa"
  },
  {
    "code": "АЧВ",
    "country_code": "RU",
    "city": "Achayvajam"
  },
  {
    "code": "RSU",
    "country_code": "KR",
    "city": "Yeosu"
  },
  {
    "code": "ILN",
    "country_code": "US",
    "city": "Wilmington"
  },
  {
    "code": "BTE",
    "country_code": "SL",
    "city": "Bonthe"
  },
  {
    "code": "MVW",
    "country_code": "US",
    "city": "Mount Vernon"
  },
  {
    "code": "XNH",
    "country_code": "IQ",
    "city": "Nasiriyah"
  },
  {
    "code": "APW",
    "country_code": "WS",
    "city": "Apia"
  },
  {
    "code": "MST",
    "country_code": "NL",
    "city": "Maastricht"
  },
  {
    "code": "ESS",
    "country_code": "DE",
    "city": "Essen"
  },
  {
    "code": "HUM",
    "country_code": "US",
    "city": "Houma"
  },
  {
    "code": "KKL",
    "country_code": "US",
    "city": "Karluk Lake"
  },
  {
    "code": "CIV",
    "country_code": "US",
    "city": "Chomley"
  },
  {
    "code": "AVO",
    "country_code": "US",
    "city": "Avon Park"
  },
  {
    "code": "MLB",
    "country_code": "US",
    "city": "Melbourne"
  },
  {
    "code": "WCA",
    "country_code": "CL",
    "city": "Castro"
  },
  {
    "code": "ACB",
    "country_code": "US",
    "city": "Bellaire"
  },
  {
    "code": "VOL",
    "country_code": "GR",
    "city": "Volos"
  },
  {
    "code": "WSF",
    "country_code": "US",
    "city": "Sarichef"
  },
  {
    "code": "BCI",
    "country_code": "AU",
    "city": "Barcaldine"
  },
  {
    "code": "SEO",
    "country_code": "CI",
    "city": "Seguela"
  },
  {
    "code": "NUT",
    "country_code": "PG",
    "city": "Nutuve"
  },
  {
    "code": "АЗА",
    "country_code": "RU",
    "city": "azau"
  },
  {
    "code": "SKN",
    "country_code": "NO",
    "city": "Stokmarknes"
  },
  {
    "code": "MCP",
    "country_code": "BR",
    "city": "Macapa"
  },
  {
    "code": "DFW",
    "country_code": "US",
    "city": "Dallas"
  },
  {
    "code": "QOB",
    "country_code": "DE",
    "city": "Ansbach"
  },
  {
    "code": "RIE",
    "country_code": "US",
    "city": "Rice Lake"
  },
  {
    "code": "SXL",
    "country_code": "IE",
    "city": "Sligo"
  },
  {
    "code": "RGO",
    "country_code": "KP",
    "city": "Orang"
  },
  {
    "code": "PNN",
    "country_code": "US",
    "city": "Princeton"
  },
  {
    "code": "BZU",
    "country_code": "CD",
    "city": "Buta"
  },
  {
    "code": "XNT",
    "country_code": "CN",
    "city": "Xingtai"
  },
  {
    "code": "DLU",
    "country_code": "CN",
    "city": "Dali City"
  },
  {
    "code": "BRG",
    "country_code": "US",
    "city": "Whitesburg"
  },
  {
    "code": "ETN",
    "country_code": "US",
    "city": "Eastland"
  },
  {
    "code": "BJL",
    "country_code": "GM",
    "city": "Banjul"
  },
  {
    "code": "LHB",
    "country_code": "US",
    "city": "Lost Harbor"
  },
  {
    "code": "YQA",
    "country_code": "CA",
    "city": "Muskoka"
  },
  {
    "code": "LIW",
    "country_code": "MM",
    "city": "Loikaw"
  },
  {
    "code": "PRV",
    "country_code": "CZ",
    "city": "Prerov"
  },
  {
    "code": "NPR",
    "country_code": "BR",
    "city": "Novo Progresso"
  },
  {
    "code": "LMB",
    "country_code": "MW",
    "city": "Salima"
  },
  {
    "code": "GOQ",
    "country_code": "CN",
    "city": "Golmud"
  },
  {
    "code": "PXH",
    "country_code": "AU",
    "city": "Prominent Hill"
  },
  {
    "code": "DJB",
    "country_code": "ID",
    "city": "Jambi"
  },
  {
    "code": "KKA",
    "country_code": "US",
    "city": "Koyuk"
  },
  {
    "code": "YPM",
    "country_code": "CA",
    "city": "Pikangikum"
  },
  {
    "code": "TIA",
    "country_code": "AL",
    "city": "Tirana"
  },
  {
    "code": "UAQ",
    "country_code": "AR",
    "city": "San Juan"
  },
  {
    "code": "DIS",
    "country_code": "CG",
    "city": "Loubomo"
  },
  {
    "code": "KBR",
    "country_code": "MY",
    "city": "Kota Bharu"
  },
  {
    "code": "WTD",
    "country_code": "BS",
    "city": "West End"
  },
  {
    "code": "MBS",
    "country_code": "US",
    "city": "Saginaw"
  },
  {
    "code": "NKT",
    "country_code": "TR",
    "city": "Shirnak"
  },
  {
    "code": "AMF",
    "country_code": "PG",
    "city": "Ama"
  },
  {
    "code": "IBI",
    "country_code": "PG",
    "city": "Iboki"
  },
  {
    "code": "YAQ",
    "country_code": "CA",
    "city": "Maple Bay"
  },
  {
    "code": "XKJ",
    "country_code": "NO",
    "city": "Steinkjer"
  },
  {
    "code": "REI",
    "country_code": "GF",
    "city": "Regina"
  },
  {
    "code": "HYS",
    "country_code": "US",
    "city": "Hays"
  },
  {
    "code": "TMR",
    "country_code": "DZ",
    "city": "Tamanrasset"
  },
  {
    "code": "THU",
    "country_code": "GL",
    "city": "Pituffik"
  },
  {
    "code": "YNC",
    "country_code": "CA",
    "city": "Wemindji"
  },
  {
    "code": "UAS",
    "country_code": "KE",
    "city": "Samburu"
  },
  {
    "code": "CUI",
    "country_code": "CO",
    "city": "Currillo"
  },
  {
    "code": "LUZ",
    "country_code": "PL",
    "city": "Swidnik"
  },
  {
    "code": "SRM",
    "country_code": "AU",
    "city": "Sandringham"
  },
  {
    "code": "BEK",
    "country_code": "IN",
    "city": "Bareli"
  },
  {
    "code": "OZG",
    "country_code": "MA",
    "city": "Zagora"
  },
  {
    "code": "SYI",
    "country_code": "US",
    "city": "Shelbyville"
  },
  {
    "code": "SKJ",
    "country_code": "US",
    "city": "Sitkinak Island"
  },
  {
    "code": "TUR",
    "country_code": "BR",
    "city": "Tucurui"
  },
  {
    "code": "MOZ",
    "country_code": "PF",
    "city": "Moorea"
  },
  {
    "code": "BBK",
    "country_code": "BW",
    "city": "Kasane"
  },
  {
    "code": "FMI",
    "country_code": "CD",
    "city": "Kalemie"
  },
  {
    "code": "LEH",
    "country_code": "FR",
    "city": "Le Havre"
  },
  {
    "code": "PGS",
    "country_code": "US",
    "city": "Peach Springs"
  },
  {
    "code": "MXL",
    "country_code": "MX",
    "city": "Mexicali"
  },
  {
    "code": "KDG",
    "country_code": "BG",
    "city": "Kardzhali"
  },
  {
    "code": "TNG",
    "country_code": "MA",
    "city": "Tangier"
  },
  {
    "code": "ALG",
    "country_code": "DZ",
    "city": "Algiers"
  },
  {
    "code": "PSW",
    "country_code": "BR",
    "city": "Passos"
  },
  {
    "code": "TNJ",
    "country_code": "ID",
    "city": "Tanjung Pinang"
  },
  {
    "code": "NTI",
    "country_code": "ID",
    "city": "Bintuni"
  },
  {
    "code": "FXO",
    "country_code": "MZ",
    "city": "Cuamba"
  },
  {
    "code": "MWQ",
    "country_code": "MM",
    "city": "Magwe"
  },
  {
    "code": "SNB",
    "country_code": "AU",
    "city": "Snake Bay"
  },
  {
    "code": "LPK",
    "country_code": "RU",
    "city": "Lipetsk"
  },
  {
    "code": "NIK",
    "country_code": "SN",
    "city": "Niokolo Koba"
  },
  {
    "code": "YRQ",
    "country_code": "CA",
    "city": "Trois-Rivieres"
  },
  {
    "code": "TMG",
    "country_code": "MY",
    "city": "Tomanggong"
  },
  {
    "code": "YDJ",
    "country_code": "CA",
    "city": "Hatchet Lake"
  },
  {
    "code": "AXU",
    "country_code": "ET",
    "city": "Axum"
  },
  {
    "code": "SHB",
    "country_code": "JP",
    "city": "Nakashibetsu"
  },
  {
    "code": "GSP",
    "country_code": "US",
    "city": "Greenville"
  },
  {
    "code": "GTF",
    "country_code": "US",
    "city": "Great Falls"
  },
  {
    "code": "BTC",
    "country_code": "LK",
    "city": "Batticaloa"
  },
  {
    "code": "RPN",
    "country_code": "IL",
    "city": "Rosh Pina"
  },
  {
    "code": "TAU",
    "country_code": "CO",
    "city": "Tauramena"
  },
  {
    "code": "SDX",
    "country_code": "US",
    "city": "Sedona"
  },
  {
    "code": "OHO",
    "country_code": "RU",
    "city": "Okhotsk"
  },
  {
    "code": "BDO",
    "country_code": "ID",
    "city": "Bandung"
  },
  {
    "code": "PBK",
    "country_code": "US",
    "city": "Pack Creek"
  },
  {
    "code": "AHC",
    "country_code": "US",
    "city": "Herlong"
  },
  {
    "code": "XHU",
    "country_code": "GB",
    "city": "Huntingdon"
  },
  {
    "code": "YOI",
    "country_code": "CA",
    "city": "Opinaca"
  },
  {
    "code": "AXV",
    "country_code": "US",
    "city": "Wapakoneta"
  },
  {
    "code": "DAZ",
    "country_code": "AF",
    "city": "Darwaz"
  },
  {
    "code": "IND",
    "country_code": "US",
    "city": "Indianapolis"
  },
  {
    "code": "NUR",
    "country_code": "AU",
    "city": "Nullarbor"
  },
  {
    "code": "HBH",
    "country_code": "US",
    "city": "Hobart Bay"
  },
  {
    "code": "ORR",
    "country_code": "AU",
    "city": "Yorketown"
  },
  {
    "code": "SXI",
    "country_code": "IR",
    "city": "Sirri Island"
  },
  {
    "code": "TCI",
    "country_code": "ES",
    "city": "Tenerife"
  },
  {
    "code": "DPK",
    "country_code": "US",
    "city": "Deer Park"
  },
  {
    "code": "HCA",
    "country_code": "US",
    "city": "Big Spring"
  },
  {
    "code": "YWB",
    "country_code": "CA",
    "city": "Kangiqsujuaq"
  },
  {
    "code": "ZHM",
    "country_code": "BD",
    "city": "Shamshernagar"
  },
  {
    "code": "TIU",
    "country_code": "NZ",
    "city": "Timaru"
  },
  {
    "code": "TUX",
    "country_code": "CA",
    "city": "Tumbler Ridge"
  },
  {
    "code": "MCX",
    "country_code": "RU",
    "city": "Makhachkala"
  },
  {
    "code": "MCB",
    "country_code": "US",
    "city": "Mccomb"
  },
  {
    "code": "OSX",
    "country_code": "US",
    "city": "Kosciusko"
  },
  {
    "code": "GTG",
    "country_code": "US",
    "city": "Grantsburg"
  },
  {
    "code": "TKU",
    "country_code": "FI",
    "city": "Turku"
  },
  {
    "code": "KKF",
    "country_code": "US",
    "city": "Kagvik Creek"
  },
  {
    "code": "BOJ",
    "country_code": "BG",
    "city": "Bourgas"
  },
  {
    "code": "KYD",
    "country_code": "TW",
    "city": "Orchid Island"
  },
  {
    "code": "DLN",
    "country_code": "US",
    "city": "Dillon"
  },
  {
    "code": "JSA",
    "country_code": "IN",
    "city": "Jaisalmer"
  },
  {
    "code": "BYI",
    "country_code": "US",
    "city": "Rupert"
  },
  {
    "code": "ASX",
    "country_code": "US",
    "city": "Ashland"
  },
  {
    "code": "RUM",
    "country_code": "NP",
    "city": "Rumjatar"
  },
  {
    "code": "BJG",
    "country_code": "ID",
    "city": "Bolaang"
  },
  {
    "code": "RPB",
    "country_code": "AU",
    "city": "Roper Bar"
  },
  {
    "code": "CLM",
    "country_code": "US",
    "city": "Port Angeles"
  },
  {
    "code": "CIN",
    "country_code": "US",
    "city": "Carroll"
  },
  {
    "code": "AUK",
    "country_code": "US",
    "city": "Alakanuk"
  },
  {
    "code": "BSY",
    "country_code": "SO",
    "city": "Bardera"
  },
  {
    "code": "BZB",
    "country_code": "MZ",
    "city": "Bazaruto Island"
  },
  {
    "code": "PMU",
    "country_code": "US",
    "city": "Paimiut"
  },
  {
    "code": "GEW",
    "country_code": "PG",
    "city": "Gewoia"
  },
  {
    "code": "GDA",
    "country_code": "CF",
    "city": "Gounda"
  },
  {
    "code": "NTC",
    "country_code": "MZ",
    "city": "Santa Carolina"
  },
  {
    "code": "XGC",
    "country_code": "SE",
    "city": "Lund"
  },
  {
    "code": "MVN",
    "country_code": "US",
    "city": "Mount Vernon"
  },
  {
    "code": "SBL",
    "country_code": "BO",
    "city": "Santa Ana"
  },
  {
    "code": "GNZ",
    "country_code": "BW",
    "city": "Ghanzi"
  },
  {
    "code": "JMC",
    "country_code": "US",
    "city": "Sausalito"
  },
  {
    "code": "DDP",
    "country_code": "PR",
    "city": "Dorado"
  },
  {
    "code": "BJC",
    "country_code": "US",
    "city": "Broomfield"
  },
  {
    "code": "CHI",
    "country_code": "US",
    "city": "Chicago"
  },
  {
    "code": "MBN",
    "country_code": "AU",
    "city": "Mount Barnett"
  },
  {
    "code": "KGP",
    "country_code": "RU",
    "city": "Kogalym"
  },
  {
    "code": "KPF",
    "country_code": "PG",
    "city": "Kondubol"
  },
  {
    "code": "GUU",
    "country_code": "IS",
    "city": "Grundarfjordur"
  },
  {
    "code": "MSV",
    "country_code": "US",
    "city": "Monticello"
  },
  {
    "code": "NAI",
    "country_code": "GY",
    "city": "Annai"
  },
  {
    "code": "PVF",
    "country_code": "US",
    "city": "Placerville"
  },
  {
    "code": "VOK",
    "country_code": "US",
    "city": "Camp Douglas"
  },
  {
    "code": "PSO",
    "country_code": "CO",
    "city": "Pasto"
  },
  {
    "code": "DAG",
    "country_code": "US",
    "city": "Daggett"
  },
  {
    "code": "COO",
    "country_code": "BJ",
    "city": "Cotonou"
  },
  {
    "code": "BLA",
    "country_code": "VE",
    "city": "Barcelona"
  },
  {
    "code": "USR",
    "country_code": "RU",
    "city": "Ust-Nera"
  },
  {
    "code": "SAL",
    "country_code": "SV",
    "city": "San Salvador"
  },
  {
    "code": "PZA",
    "country_code": "CO",
    "city": "Paz De Ariporo"
  },
  {
    "code": "СБР",
    "country_code": "RU",
    "city": "Sosnovy Bor"
  },
  {
    "code": "ANS",
    "country_code": "PE",
    "city": "Andahuaylas"
  },
  {
    "code": "SBT",
    "country_code": "RU",
    "city": "Sabetta"
  },
  {
    "code": "ZAX",
    "country_code": "CN",
    "city": "Pan Yu"
  },
  {
    "code": "SHT",
    "country_code": "AU",
    "city": "Shepparton"
  },
  {
    "code": "ADC",
    "country_code": "PG",
    "city": "Andakombe"
  },
  {
    "code": "ZAR",
    "country_code": "NG",
    "city": "Zaria"
  },
  {
    "code": "RAT",
    "country_code": "RU",
    "city": "Raduzhnyi"
  },
  {
    "code": "ILX",
    "country_code": "PG",
    "city": "Ileg"
  },
  {
    "code": "ORS",
    "country_code": "AU",
    "city": "Orpheus Island Resort"
  },
  {
    "code": "AQG",
    "country_code": "CN",
    "city": "Anqing"
  },
  {
    "code": "YTL",
    "country_code": "CA",
    "city": "Big Trout"
  },
  {
    "code": "YNS",
    "country_code": "CA",
    "city": "Nemiscau"
  },
  {
    "code": "OLL",
    "country_code": "CG",
    "city": "Oyo"
  },
  {
    "code": "CTL",
    "country_code": "AU",
    "city": "Charleville"
  },
  {
    "code": "PYR",
    "country_code": "GR",
    "city": "Pyrgos"
  },
  {
    "code": "ODJ",
    "country_code": "CF",
    "city": "Ouanda Djalle"
  },
  {
    "code": "PUU",
    "country_code": "CO",
    "city": "Puerto Asis"
  },
  {
    "code": "NET",
    "country_code": "BS",
    "city": "New Bight"
  },
  {
    "code": "UKS",
    "country_code": "KX",
    "city": "Sevastopol"
  },
  {
    "code": "NDB",
    "country_code": "MR",
    "city": "Nouadhibou"
  },
  {
    "code": "УКЧ",
    "country_code": "RU",
    "city": "Ust-Kamchatsk"
  },
  {
    "code": "TCY",
    "country_code": "NA",
    "city": "Terrace Bay"
  },
  {
    "code": "KWO",
    "country_code": "PG",
    "city": "Kawito"
  },
  {
    "code": "BSM",
    "country_code": "IR",
    "city": "Bishe-kola"
  },
  {
    "code": "LMG",
    "country_code": "PG",
    "city": "Lamassa"
  },
  {
    "code": "DYG",
    "country_code": "CN",
    "city": "Dayong"
  },
  {
    "code": "MXK",
    "country_code": "PG",
    "city": "Mindik"
  },
  {
    "code": "YBO",
    "country_code": "CA",
    "city": "Bobquinn Lake"
  },
  {
    "code": "WJF",
    "country_code": "US",
    "city": "Lancaster"
  },
  {
    "code": "ZDT",
    "country_code": "CH",
    "city": "Chur"
  },
  {
    "code": "SWC",
    "country_code": "AU",
    "city": "Stawell"
  },
  {
    "code": "DGO",
    "country_code": "MX",
    "city": "Durango"
  },
  {
    "code": "DUM",
    "country_code": "ID",
    "city": "Dumai"
  },
  {
    "code": "XPT",
    "country_code": "GB",
    "city": "Preston"
  },
  {
    "code": "MFM",
    "country_code": "MO",
    "city": "Macau"
  },
  {
    "code": "CTH",
    "country_code": "US",
    "city": "Coatesville"
  },
  {
    "code": "PHX",
    "country_code": "US",
    "city": "Phoenix"
  },
  {
    "code": "OLO",
    "country_code": "CZ",
    "city": "Olomouc"
  },
  {
    "code": "KZD",
    "country_code": "KH",
    "city": "Krakor"
  },
  {
    "code": "XTG",
    "country_code": "AU",
    "city": "Thargomindah"
  },
  {
    "code": "CXT",
    "country_code": "AU",
    "city": "Charters Towers"
  },
  {
    "code": "UVL",
    "country_code": "EG",
    "city": "Kharga"
  },
  {
    "code": "QQH",
    "country_code": "GB",
    "city": "Harwich"
  },
  {
    "code": "HAE",
    "country_code": "US",
    "city": "Havasupai"
  },
  {
    "code": "SBF",
    "country_code": "AF",
    "city": "Sardeh Band"
  },
  {
    "code": "IGB",
    "country_code": "AR",
    "city": "Ingeniero Jacobacci"
  },
  {
    "code": "AZO",
    "country_code": "US",
    "city": "Kalamazoo"
  },
  {
    "code": "KRC",
    "country_code": "ID",
    "city": "Kerinci"
  },
  {
    "code": "KHV",
    "country_code": "RU",
    "city": "Khabarovsk"
  },
  {
    "code": "JRH",
    "country_code": "IN",
    "city": "Jorhat"
  },
  {
    "code": "PPZ",
    "country_code": "VE",
    "city": "Puerto Paez"
  },
  {
    "code": "PYJ",
    "country_code": "RU",
    "city": "Udachnyj"
  },
  {
    "code": "YSS",
    "country_code": "CA",
    "city": "Slate Island"
  },
  {
    "code": "BFC",
    "country_code": "AU",
    "city": "Bloomfield"
  },
  {
    "code": "LPS",
    "country_code": "US",
    "city": "Lopez Island"
  },
  {
    "code": "GRB",
    "country_code": "US",
    "city": "Green Bay"
  },
  {
    "code": "KRL",
    "country_code": "CN",
    "city": "Korla"
  },
  {
    "code": "SRB",
    "country_code": "BO",
    "city": "Santa Rosa"
  },
  {
    "code": "ROU",
    "country_code": "BG",
    "city": "Rousse"
  },
  {
    "code": "AYZ",
    "country_code": "US",
    "city": "Amityville"
  },
  {
    "code": "KSN",
    "country_code": "KZ",
    "city": "Kostanay"
  },
  {
    "code": "HCM",
    "country_code": "SO",
    "city": "Eil"
  },
  {
    "code": "BQN",
    "country_code": "PR",
    "city": "Aguadilla"
  },
  {
    "code": "SYW",
    "country_code": "PK",
    "city": "Sehwen Sharif"
  },
  {
    "code": "SDO",
    "country_code": "JP",
    "city": "Ryotsu Sado Island"
  },
  {
    "code": "PPA",
    "country_code": "US",
    "city": "Pampa"
  },
  {
    "code": "CLH",
    "country_code": "AU",
    "city": "Coolah"
  },
  {
    "code": "XBK",
    "country_code": "FR",
    "city": "Bourg-en-Bresse"
  },
  {
    "code": "ZLJ",
    "country_code": "CH",
    "city": "Yverdon-les-Bains"
  },
  {
    "code": "SAZ",
    "country_code": "LR",
    "city": "Sasstown"
  },
  {
    "code": "GWS",
    "country_code": "US",
    "city": "Glenwood Springs"
  },
  {
    "code": "NAP",
    "country_code": "IT",
    "city": "Naples"
  },
  {
    "code": "DUB",
    "country_code": "IE",
    "city": "Dublin"
  },
  {
    "code": "DKV",
    "country_code": "AU",
    "city": "Docker River"
  },
  {
    "code": "BRH",
    "country_code": "PG",
    "city": "Brahman"
  },
  {
    "code": "DCU",
    "country_code": "US",
    "city": "Decatur"
  },
  {
    "code": "ILI",
    "country_code": "US",
    "city": "Iliamna"
  },
  {
    "code": "OKL",
    "country_code": "ID",
    "city": "Oksibil"
  },
  {
    "code": "EHT",
    "country_code": "US",
    "city": "East Hartford"
  },
  {
    "code": "KZF",
    "country_code": "PG",
    "city": "Kaintiba"
  },
  {
    "code": "CEX",
    "country_code": "US",
    "city": "Chena Hot Springs"
  },
  {
    "code": "PQS",
    "country_code": "US",
    "city": "Pilot Station"
  },
  {
    "code": "HUT",
    "country_code": "US",
    "city": "Hutchinson"
  },
  {
    "code": "VSE",
    "country_code": "PT",
    "city": "Viseu"
  },
  {
    "code": "XQP",
    "country_code": "CR",
    "city": "Quepos"
  },
  {
    "code": "PRH",
    "country_code": "TH",
    "city": "Phrae"
  },
  {
    "code": "PRQ",
    "country_code": "AR",
    "city": "Pres. Roque Saenz Pena"
  },
  {
    "code": "XUB",
    "country_code": "NO",
    "city": "Berkak"
  },
  {
    "code": "CMF",
    "country_code": "FR",
    "city": "Chambery"
  },
  {
    "code": "LOS",
    "country_code": "NG",
    "city": "Lagos"
  },
  {
    "code": "ZGS",
    "country_code": "CA",
    "city": "Gethsemani"
  },
  {
    "code": "VIJ",
    "country_code": "VG",
    "city": "Virgin Gorda"
  },
  {
    "code": "KBG",
    "country_code": "UG",
    "city": "Kabalega Falls"
  },
  {
    "code": "SOR",
    "country_code": "SY",
    "city": "Al Thaurah"
  },
  {
    "code": "VEY",
    "country_code": "IS",
    "city": "Vestmannaeyjar"
  },
  {
    "code": "SSW",
    "country_code": "US",
    "city": "Stuart Island"
  },
  {
    "code": "SCO",
    "country_code": "KZ",
    "city": "Aktau"
  },
  {
    "code": "KXR",
    "country_code": "PG",
    "city": "Karoola"
  },
  {
    "code": "ERC",
    "country_code": "TR",
    "city": "Erzincan"
  },
  {
    "code": "KYA",
    "country_code": "TR",
    "city": "Konya"
  },
  {
    "code": "YTN",
    "country_code": "CA",
    "city": "Riviere Au Tonnerre"
  },
  {
    "code": "BIN",
    "country_code": "AF",
    "city": "Bamiyan"
  },
  {
    "code": "AVN",
    "country_code": "FR",
    "city": "Avignon"
  },
  {
    "code": "FEB",
    "country_code": "NP",
    "city": "Sanfebagar"
  },
  {
    "code": "WUM",
    "country_code": "PG",
    "city": "Wasum"
  },
  {
    "code": "GAQ",
    "country_code": "ML",
    "city": "Gao"
  },
  {
    "code": "LPD",
    "country_code": "CO",
    "city": "La Pedrera"
  },
  {
    "code": "ATL",
    "country_code": "US",
    "city": "Atlanta"
  },
  {
    "code": "DPT",
    "country_code": "RU",
    "city": "Deputatsky"
  },
  {
    "code": "RJL",
    "country_code": "ES",
    "city": "Logrono"
  },
  {
    "code": "INQ",
    "country_code": "IE",
    "city": "Inisheer"
  },
  {
    "code": "OHE",
    "country_code": "CN",
    "city": "Mohe"
  },
  {
    "code": "USI",
    "country_code": "GY",
    "city": "Mabaruma"
  },
  {
    "code": "IIL",
    "country_code": "IR",
    "city": "Ilaam"
  },
  {
    "code": "DGU",
    "country_code": "BF",
    "city": "Dedougou"
  },
  {
    "code": "ENN",
    "country_code": "US",
    "city": "Nenana"
  },
  {
    "code": "WSB",
    "country_code": "US",
    "city": "Steamboat Bay"
  },
  {
    "code": "HVK",
    "country_code": "IS",
    "city": "Holmavik"
  },
  {
    "code": "BLC",
    "country_code": "CM",
    "city": "Bali"
  },
  {
    "code": "CMP",
    "country_code": "BR",
    "city": "Santana Do Araguaia"
  },
  {
    "code": "OOT",
    "country_code": "KI",
    "city": "Onotoa"
  },
  {
    "code": "XPS",
    "country_code": "FR",
    "city": "Provins"
  },
  {
    "code": "BHR",
    "country_code": "NP",
    "city": "Bharatpur"
  },
  {
    "code": "BYF",
    "country_code": "FR",
    "city": "Albert"
  },
  {
    "code": "RPM",
    "country_code": "AU",
    "city": "Ngukurr"
  },
  {
    "code": "FYT",
    "country_code": "TD",
    "city": "Faya"
  },
  {
    "code": "WBN",
    "country_code": "US",
    "city": "Woburn"
  },
  {
    "code": "PZU",
    "country_code": "SD",
    "city": "Port Sudan"
  },
  {
    "code": "QLS",
    "country_code": "CH",
    "city": "Lausanne"
  },
  {
    "code": "BNU",
    "country_code": "BR",
    "city": "Blumenau"
  },
  {
    "code": "OZL",
    "country_code": "ES",
    "city": "Orzola"
  },
  {
    "code": "LDR",
    "country_code": "YE",
    "city": "Lodar"
  },
  {
    "code": "RLA",
    "country_code": "US",
    "city": "Rolla"
  },
  {
    "code": "TFL",
    "country_code": "BR",
    "city": "Teofilo Otoni"
  },
  {
    "code": "KRS",
    "country_code": "NO",
    "city": "Kristiansand"
  },
  {
    "code": "PRL",
    "country_code": "US",
    "city": "Port Oceanic"
  },
  {
    "code": "GNF",
    "country_code": "US",
    "city": "Quincy"
  },
  {
    "code": "MPK",
    "country_code": "KR",
    "city": "Mokpo"
  },
  {
    "code": "DEE",
    "country_code": "RU",
    "city": "Kunashir Island"
  },
  {
    "code": "TOF",
    "country_code": "RU",
    "city": "Tomsk"
  },
  {
    "code": "JSR",
    "country_code": "BD",
    "city": "Jessore"
  },
  {
    "code": "PJB",
    "country_code": "US",
    "city": "Payson"
  },
  {
    "code": "PYV",
    "country_code": "PA",
    "city": "Yaviza"
  },
  {
    "code": "XFL",
    "country_code": "CA",
    "city": "Shawinigan"
  },
  {
    "code": "SEU",
    "country_code": "TZ",
    "city": "Seronera"
  },
  {
    "code": "ZDR",
    "country_code": "CH",
    "city": "Chateau-d'Oex"
  },
  {
    "code": "KMM",
    "country_code": "ID",
    "city": "Kimam"
  },
  {
    "code": "LUS",
    "country_code": "CD",
    "city": "Lusanga"
  },
  {
    "code": "ATS",
    "country_code": "US",
    "city": "Artesia"
  },
  {
    "code": "RDG",
    "country_code": "US",
    "city": "Reading"
  },
  {
    "code": "YGN",
    "country_code": "CA",
    "city": "Greenway Sound"
  },
  {
    "code": "ESO",
    "country_code": "US",
    "city": "Espanola"
  },
  {
    "code": "WUH",
    "country_code": "CN",
    "city": "Wuhan"
  },
  {
    "code": "EMI",
    "country_code": "PG",
    "city": "Emirau"
  },
  {
    "code": "KVX",
    "country_code": "RU",
    "city": "Kirov"
  },
  {
    "code": "TNZ",
    "country_code": "MN",
    "city": "Tosontsengel"
  },
  {
    "code": "YSE",
    "country_code": "CA",
    "city": "Squamish"
  },
  {
    "code": "LHG",
    "country_code": "AU",
    "city": "Lightning Ridge"
  },
  {
    "code": "SQU",
    "country_code": "PE",
    "city": "Saposoa"
  },
  {
    "code": "LTF",
    "country_code": "PG",
    "city": "Leitre"
  },
  {
    "code": "ABS",
    "country_code": "EG",
    "city": "Abu Simbel"
  },
  {
    "code": "DMO",
    "country_code": "US",
    "city": "Sedalia"
  },
  {
    "code": "CLO",
    "country_code": "CO",
    "city": "Cali"
  },
  {
    "code": "NGR",
    "country_code": "PG",
    "city": "Ningerum"
  },
  {
    "code": "YJF",
    "country_code": "CA",
    "city": "Fort Liard"
  },
  {
    "code": "YQC",
    "country_code": "CA",
    "city": "Quaqtaq"
  },
  {
    "code": "MYE",
    "country_code": "JP",
    "city": "Miyake Jima"
  },
  {
    "code": "PPC",
    "country_code": "US",
    "city": "Prospect Creek"
  },
  {
    "code": "EMS",
    "country_code": "PG",
    "city": "Embessa"
  },
  {
    "code": "IPI",
    "country_code": "CO",
    "city": "Ipiales"
  },
  {
    "code": "EST",
    "country_code": "US",
    "city": "Estherville"
  },
  {
    "code": "YXP",
    "country_code": "CA",
    "city": "Pangnirtung"
  },
  {
    "code": "SSR",
    "country_code": "VU",
    "city": "Sara"
  },
  {
    "code": "ALZ",
    "country_code": "US",
    "city": "Alitak"
  },
  {
    "code": "XMZ",
    "country_code": "GB",
    "city": "Macclesfield"
  },
  {
    "code": "ZHK",
    "country_code": "CH",
    "city": "Gstaad"
  },
  {
    "code": "BJH",
    "country_code": "NP",
    "city": "Bajhang"
  },
  {
    "code": "MVJ",
    "country_code": "JM",
    "city": "Mandeville"
  },
  {
    "code": "CBR",
    "country_code": "AU",
    "city": "Canberra"
  },
  {
    "code": "TOD",
    "country_code": "MY",
    "city": "Tioman"
  },
  {
    "code": "BAQ",
    "country_code": "CO",
    "city": "Barranquilla"
  },
  {
    "code": "GID",
    "country_code": "BI",
    "city": "Gitega"
  },
  {
    "code": "MCU",
    "country_code": "FR",
    "city": "Montlucon"
  },
  {
    "code": "PZI",
    "country_code": "CN",
    "city": "Pan Zhi Hua"
  },
  {
    "code": "AMY",
    "country_code": "MG",
    "city": "Ambatomainty"
  },
  {
    "code": "IMF",
    "country_code": "IN",
    "city": "Imphal"
  },
  {
    "code": "FAF",
    "country_code": "US",
    "city": "Fort Eustis"
  },
  {
    "code": "SCN",
    "country_code": "DE",
    "city": "Saarbruecken"
  },
  {
    "code": "HAP",
    "country_code": "AU",
    "city": "Long Island"
  },
  {
    "code": "GLA",
    "country_code": "GB",
    "city": "Glasgow"
  },
  {
    "code": "NSX",
    "country_code": "VG",
    "city": "Nord Sound"
  },
  {
    "code": "JSH",
    "country_code": "GR",
    "city": "Sitia"
  },
  {
    "code": "ПУГ",
    "country_code": "RU",
    "city": "Pug-Jug"
  },
  {
    "code": "EUO",
    "country_code": "CO",
    "city": "Paratebueno"
  },
  {
    "code": "TOU",
    "country_code": "NC",
    "city": "Touho"
  },
  {
    "code": "TXU",
    "country_code": "CI",
    "city": "Tabou"
  },
  {
    "code": "YYR",
    "country_code": "CA",
    "city": "Goose Bay"
  },
  {
    "code": "KZS",
    "country_code": "GR",
    "city": "Kastellorizo"
  },
  {
    "code": "PRD",
    "country_code": "AU",
    "city": "Pardoo"
  },
  {
    "code": "EPA",
    "country_code": "AR",
    "city": "El Palomar"
  },
  {
    "code": "SKG",
    "country_code": "GR",
    "city": "Thessaloniki"
  },
  {
    "code": "ONK",
    "country_code": "RU",
    "city": "Olenyok"
  },
  {
    "code": "AET",
    "country_code": "US",
    "city": "Allakaket"
  },
  {
    "code": "ADT",
    "country_code": "US",
    "city": "Ada"
  },
  {
    "code": "TTC",
    "country_code": "CL",
    "city": "Taltal"
  },
  {
    "code": "MZE",
    "country_code": "BZ",
    "city": "Manatee"
  },
  {
    "code": "RBF",
    "country_code": "US",
    "city": "Big Bear"
  },
  {
    "code": "PAN",
    "country_code": "TH",
    "city": "Pattani"
  },
  {
    "code": "SVK",
    "country_code": "BZ",
    "city": "Silver Creek"
  },
  {
    "code": "ОЗР",
    "country_code": "RU",
    "city": "Ozernaya"
  },
  {
    "code": "LTR",
    "country_code": "IE",
    "city": "Letterkenny"
  },
  {
    "code": "EAP",
    "country_code": "CH",
    "city": "Basel, Switzerland/Mulhouse"
  },
  {
    "code": "KBB",
    "country_code": "AU",
    "city": "Kirkimbie"
  },
  {
    "code": "NZW",
    "country_code": "US",
    "city": "South Weymouth"
  },
  {
    "code": "ZNZ",
    "country_code": "TZ",
    "city": "Zanzibar"
  },
  {
    "code": "HNL",
    "country_code": "US",
    "city": "Honolulu"
  },
  {
    "code": "YYI",
    "country_code": "CA",
    "city": "Rivers"
  },
  {
    "code": "WPB",
    "country_code": "MG",
    "city": "Port Berge"
  },
  {
    "code": "UQE",
    "country_code": "US",
    "city": "Queen"
  },
  {
    "code": "PUA",
    "country_code": "PG",
    "city": "Puas"
  },
  {
    "code": "RUY",
    "country_code": "HN",
    "city": "Copan"
  },
  {
    "code": "HKB",
    "country_code": "US",
    "city": "Healy Lake"
  },
  {
    "code": "CVU",
    "country_code": "PT",
    "city": "Corvo Island (Azores)"
  },
  {
    "code": "GTW",
    "country_code": "CZ",
    "city": "Zlin"
  },
  {
    "code": "YKE",
    "country_code": "CA",
    "city": "Knee Lake"
  },
  {
    "code": "MMC",
    "country_code": "MX",
    "city": "Mante"
  },
  {
    "code": "SNR",
    "country_code": "FR",
    "city": "Saint Nazaire"
  },
  {
    "code": "ACD",
    "country_code": "CO",
    "city": "Acandi"
  },
  {
    "code": "NUE",
    "country_code": "DE",
    "city": "Nuremberg"
  },
  {
    "code": "ZBD",
    "country_code": "CN",
    "city": "Jiang Men"
  },
  {
    "code": "CQD",
    "country_code": "IR",
    "city": "Shahre-kord"
  },
  {
    "code": "TRH",
    "country_code": "US",
    "city": "Trona"
  },
  {
    "code": "MZU",
    "country_code": "IN",
    "city": "Muzaffarpur"
  },
  {
    "code": "IHO",
    "country_code": "MG",
    "city": "Ihosy"
  },
  {
    "code": "CGR",
    "country_code": "BR",
    "city": "Campo Grande"
  },
  {
    "code": "LGN",
    "country_code": "PG",
    "city": "Linga Linga"
  },
  {
    "code": "COZ",
    "country_code": "DO",
    "city": "Constanza"
  },
  {
    "code": "EUA",
    "country_code": "TO",
    "city": "Eua"
  },
  {
    "code": "BXT",
    "country_code": "ID",
    "city": "Bontang"
  },
  {
    "code": "AOT",
    "country_code": "IT",
    "city": "Aosta"
  },
  {
    "code": "OBO",
    "country_code": "JP",
    "city": "Obihiro"
  },
  {
    "code": "PSH",
    "country_code": "DE",
    "city": "St Peter"
  },
  {
    "code": "TLX",
    "country_code": "CL",
    "city": "Talca"
  },
  {
    "code": "PLZ",
    "country_code": "ZA",
    "city": "Port Elizabeth"
  },
  {
    "code": "TBB",
    "country_code": "VN",
    "city": "Tuy Hoa"
  },
  {
    "code": "LTH",
    "country_code": "US",
    "city": "Lathrop Wells"
  },
  {
    "code": "EPL",
    "country_code": "FR",
    "city": "Epinal"
  },
  {
    "code": "KEV",
    "country_code": "FI",
    "city": "Kuorevesi"
  },
  {
    "code": "LWM",
    "country_code": "US",
    "city": "Lawrence"
  },
  {
    "code": "YYF",
    "country_code": "CA",
    "city": "Penticton"
  },
  {
    "code": "ZHW",
    "country_code": "CH",
    "city": "Langenthal"
  },
  {
    "code": "XMY",
    "country_code": "AU",
    "city": "Yam Island"
  },
  {
    "code": "YUX",
    "country_code": "CA",
    "city": "Hall Beach"
  },
  {
    "code": "PSL",
    "country_code": "GB",
    "city": "Perth"
  },
  {
    "code": "VCA",
    "country_code": "VN",
    "city": "Can Tho"
  },
  {
    "code": "MKH",
    "country_code": "LS",
    "city": "Mokhotlong"
  },
  {
    "code": "BPT",
    "country_code": "US",
    "city": "Beaumont"
  },
  {
    "code": "BUJ",
    "country_code": "DZ",
    "city": "Boussaada"
  },
  {
    "code": "HOK",
    "country_code": "AU",
    "city": "Hooker Creek"
  },
  {
    "code": "SER",
    "country_code": "US",
    "city": "Seymour"
  },
  {
    "code": "PJC",
    "country_code": "PY",
    "city": "Pedro Juan Caballero"
  },
  {
    "code": "FMH",
    "country_code": "US",
    "city": "Falmouth"
  },
  {
    "code": "KWY",
    "country_code": "KE",
    "city": "Kiwayu"
  },
  {
    "code": "ABJ",
    "country_code": "CI",
    "city": "Abidjan"
  },
  {
    "code": "ZJE",
    "country_code": "IT",
    "city": "Panarea"
  },
  {
    "code": "XHL",
    "country_code": "NO",
    "city": "Nelaug"
  },
  {
    "code": "NOI",
    "country_code": "RU",
    "city": "Novorossijsk"
  },
  {
    "code": "XHM",
    "country_code": "CA",
    "city": "Georgetown"
  },
  {
    "code": "MAT",
    "country_code": "CD",
    "city": "Matadi"
  },
  {
    "code": "ТЦП",
    "country_code": "RU",
    "city": "Troitsko-Pechorsk"
  },
  {
    "code": "KJK",
    "country_code": "BE",
    "city": "Kortrijk"
  },
  {
    "code": "LOD",
    "country_code": "VU",
    "city": "Longana"
  },
  {
    "code": "LFB",
    "country_code": "MZ",
    "city": "Lumbo"
  },
  {
    "code": "PRT",
    "country_code": "US",
    "city": "Point Retreat"
  },
  {
    "code": "HCB",
    "country_code": "US",
    "city": "Shoal Cove"
  },
  {
    "code": "CDI",
    "country_code": "BR",
    "city": "Cachoeiro Itapemirim"
  },
  {
    "code": "YGS",
    "country_code": "CA",
    "city": "Germansen"
  },
  {
    "code": "KNT",
    "country_code": "US",
    "city": "Kennett"
  },
  {
    "code": "KTS",
    "country_code": "US",
    "city": "Teller Mission"
  },
  {
    "code": "OYL",
    "country_code": "KE",
    "city": "Moyale"
  },
  {
    "code": "KOF",
    "country_code": "ZA",
    "city": "Komatipoort"
  },
  {
    "code": "DBD",
    "country_code": "IN",
    "city": "Dhanbad"
  },
  {
    "code": "CIS",
    "country_code": "KI",
    "city": "Canton Island"
  },
  {
    "code": "CTE",
    "country_code": "PA",
    "city": "Carti"
  },
  {
    "code": "ZBO",
    "country_code": "AU",
    "city": "Bowen"
  },
  {
    "code": "MCE",
    "country_code": "US",
    "city": "Merced"
  },
  {
    "code": "СЛЙ",
    "country_code": "RU",
    "city": "Svetly"
  },
  {
    "code": "YHS",
    "country_code": "CA",
    "city": "Sechelt"
  },
  {
    "code": "ILB",
    "country_code": "BR",
    "city": "Ilha Solteira"
  },
  {
    "code": "EJT",
    "country_code": "MH",
    "city": "Mili Atoll"
  },
  {
    "code": "CZL",
    "country_code": "DZ",
    "city": "Constantine"
  },
  {
    "code": "AGO",
    "country_code": "US",
    "city": "Magnolia"
  },
  {
    "code": "CRX",
    "country_code": "US",
    "city": "Corinth"
  },
  {
    "code": "YMF",
    "country_code": "CA",
    "city": "Montagne Harbor"
  },
  {
    "code": "LEI",
    "country_code": "ES",
    "city": "Almeria"
  },
  {
    "code": "PKK",
    "country_code": "MM",
    "city": "Pakokku"
  },
  {
    "code": "VDI",
    "country_code": "US",
    "city": "Vidalia"
  },
  {
    "code": "SGM",
    "country_code": "MX",
    "city": "San Ignacio"
  },
  {
    "code": "CUA",
    "country_code": "MX",
    "city": "Ciudad Constitucion"
  },
  {
    "code": "DOD",
    "country_code": "TZ",
    "city": "Dodoma"
  },
  {
    "code": "RDE",
    "country_code": "ID",
    "city": "Merdey"
  },
  {
    "code": "IIS",
    "country_code": "PG",
    "city": "Nissan Island"
  },
  {
    "code": "RKH",
    "country_code": "US",
    "city": "Rock Hill"
  },
  {
    "code": "LPG",
    "country_code": "AR",
    "city": "La Plata"
  },
  {
    "code": "CDB",
    "country_code": "US",
    "city": "Cold Bay"
  },
  {
    "code": "CAQ",
    "country_code": "CO",
    "city": "Caucasia"
  },
  {
    "code": "PSA",
    "country_code": "IT",
    "city": "Pisa"
  },
  {
    "code": "FYJ",
    "country_code": "CN",
    "city": "Fuyuan"
  },
  {
    "code": "DBS",
    "country_code": "US",
    "city": "Dubois"
  },
  {
    "code": "BVC",
    "country_code": "CV",
    "city": "Boa Vista"
  },
  {
    "code": "GRH",
    "country_code": "PG",
    "city": "Garuahi"
  },
  {
    "code": "VOI",
    "country_code": "LR",
    "city": "Voinjama"
  },
  {
    "code": "ZNU",
    "country_code": "CA",
    "city": "Namu"
  },
  {
    "code": "MSM",
    "country_code": "CD",
    "city": "Masi Manimba"
  },
  {
    "code": "TKQ",
    "country_code": "TZ",
    "city": "Kigoma"
  },
  {
    "code": "XBO",
    "country_code": "BF",
    "city": "Boulsa"
  },
  {
    "code": "SBJ",
    "country_code": "BR",
    "city": "Sao Mateus"
  },
  {
    "code": "AES",
    "country_code": "NO",
    "city": "Aalesund"
  },
  {
    "code": "DES",
    "country_code": "SC",
    "city": "Desroches"
  },
  {
    "code": "QHJ",
    "country_code": "DK",
    "city": "Hjorring"
  },
  {
    "code": "PGV",
    "country_code": "US",
    "city": "Greenville"
  },
  {
    "code": "EFW",
    "country_code": "US",
    "city": "Jefferson"
  },
  {
    "code": "XON",
    "country_code": "CA",
    "city": "Carleton"
  },
  {
    "code": "LDE",
    "country_code": "FR",
    "city": "Lourdes"
  },
  {
    "code": "BCU",
    "country_code": "NG",
    "city": "Bauchi"
  },
  {
    "code": "NTO",
    "country_code": "CV",
    "city": "Santo Antao"
  },
  {
    "code": "IBL",
    "country_code": "MZ",
    "city": "Indigo Bay Lodge"
  },
  {
    "code": "JOK",
    "country_code": "RU",
    "city": "Yoshkar-Ola"
  },
  {
    "code": "VDM",
    "country_code": "AR",
    "city": "Viedma"
  },
  {
    "code": "LGY",
    "country_code": "VE",
    "city": "Lagunillas"
  },
  {
    "code": "ACN",
    "country_code": "MX",
    "city": "Acuna"
  },
  {
    "code": "PUD",
    "country_code": "AR",
    "city": "Puerto Deseado"
  },
  {
    "code": "NFR",
    "country_code": "LY",
    "city": "Nafoora"
  },
  {
    "code": "XEN",
    "country_code": "CN",
    "city": "Xingcheng"
  },
  {
    "code": "KID",
    "country_code": "SE",
    "city": "Kristianstad"
  },
  {
    "code": "QRO",
    "country_code": "MX",
    "city": "Queretaro"
  },
  {
    "code": "ERM",
    "country_code": "BR",
    "city": "Erechim"
  },
  {
    "code": "PAS",
    "country_code": "GR",
    "city": "Paros"
  },
  {
    "code": "YAR",
    "country_code": "CA",
    "city": "Lagrande 3"
  },
  {
    "code": "JPR",
    "country_code": "BR",
    "city": "Ji-Parana"
  },
  {
    "code": "BGR",
    "country_code": "US",
    "city": "Bangor"
  },
  {
    "code": "NKI",
    "country_code": "US",
    "city": "Naukiti"
  },
  {
    "code": "YZW",
    "country_code": "CA",
    "city": "Teslin"
  },
  {
    "code": "PBO",
    "country_code": "AU",
    "city": "Paraburdoo"
  },
  {
    "code": "RHL",
    "country_code": "AU",
    "city": "Roy Hill"
  },
  {
    "code": "JMU",
    "country_code": "CN",
    "city": "Jiamusi"
  },
  {
    "code": "NRA",
    "country_code": "AU",
    "city": "Narrandera"
  },
  {
    "code": "SGZ",
    "country_code": "TH",
    "city": "Songkhla"
  },
  {
    "code": "NAU",
    "country_code": "PF",
    "city": "Napuka Island"
  },
  {
    "code": "LEG",
    "country_code": "MR",
    "city": "Aleg"
  },
  {
    "code": "AFI",
    "country_code": "CO",
    "city": "Amalfi"
  },
  {
    "code": "MWP",
    "country_code": "NP",
    "city": "Mountain"
  },
  {
    "code": "REN",
    "country_code": "RU",
    "city": "Orenburg"
  },
  {
    "code": "EVM",
    "country_code": "US",
    "city": "Eveleth"
  },
  {
    "code": "VRE",
    "country_code": "ZA",
    "city": "Vredendal"
  },
  {
    "code": "LRK",
    "country_code": "US",
    "city": "Lincoln Rock"
  },
  {
    "code": "HNC",
    "country_code": "US",
    "city": "Hatteras"
  },
  {
    "code": "HSB",
    "country_code": "US",
    "city": "Harrisburg"
  },
  {
    "code": "NDL",
    "country_code": "CF",
    "city": "Ndele"
  },
  {
    "code": "OWA",
    "country_code": "US",
    "city": "Owatonna"
  },
  {
    "code": "KTH",
    "country_code": "US",
    "city": "Tikchik"
  },
  {
    "code": "RRL",
    "country_code": "US",
    "city": "Merrill"
  },
  {
    "code": "HIB",
    "country_code": "US",
    "city": "Hibbing"
  },
  {
    "code": "BEP",
    "country_code": "IN",
    "city": "Bellary"
  },
  {
    "code": "HHZ",
    "country_code": "PF",
    "city": "Hikueru"
  },
  {
    "code": "RFS",
    "country_code": "NI",
    "city": "Rosita"
  },
  {
    "code": "GUI",
    "country_code": "VE",
    "city": "Guiria"
  },
  {
    "code": "BUE",
    "country_code": "AR",
    "city": "Buenos Aires"
  },
  {
    "code": "LBO",
    "country_code": "CD",
    "city": "Lusambo"
  },
  {
    "code": "YIF",
    "country_code": "CA",
    "city": "Pakuashipi"
  },
  {
    "code": "FLF",
    "country_code": "DE",
    "city": "Flensburg"
  },
  {
    "code": "LGI",
    "country_code": "BS",
    "city": "Deadmans Cay"
  },
  {
    "code": "SGX",
    "country_code": "TZ",
    "city": "Songea"
  },
  {
    "code": "PVA",
    "country_code": "CO",
    "city": "Providencia"
  },
  {
    "code": "VIT",
    "country_code": "ES",
    "city": "Vitoria"
  },
  {
    "code": "BCC",
    "country_code": "US",
    "city": "Bear Creek"
  },
  {
    "code": "MQT",
    "country_code": "US",
    "city": "Marquette"
  },
  {
    "code": "AYE",
    "country_code": "US",
    "city": "Fort Devens"
  },
  {
    "code": "LCG",
    "country_code": "ES",
    "city": "La Coruna"
  },
  {
    "code": "LIS",
    "country_code": "PT",
    "city": "Lisbon"
  },
  {
    "code": "AXG",
    "country_code": "US",
    "city": "Algona"
  },
  {
    "code": "LGP",
    "country_code": "PH",
    "city": "Legaspi"
  },
  {
    "code": "YQT",
    "country_code": "CA",
    "city": "Thunder Bay"
  },
  {
    "code": "SIO",
    "country_code": "AU",
    "city": "Smithton"
  },
  {
    "code": "YQV",
    "country_code": "CA",
    "city": "Yorkton"
  },
  {
    "code": "DSN",
    "country_code": "CN",
    "city": "Dongsheng"
  },
  {
    "code": "RUG",
    "country_code": "CN",
    "city": "Rugao"
  },
  {
    "code": "YZF",
    "country_code": "CA",
    "city": "Yellowknife"
  },
  {
    "code": "URA",
    "country_code": "KZ",
    "city": "Uralsk"
  },
  {
    "code": "SHE",
    "country_code": "CN",
    "city": "Shenyang"
  },
  {
    "code": "SNC",
    "country_code": "EC",
    "city": "Salinas"
  },
  {
    "code": "UIT",
    "country_code": "MH",
    "city": "Jaluit Island"
  },
  {
    "code": "ADM",
    "country_code": "US",
    "city": "Ardmore"
  },
  {
    "code": "OOK",
    "country_code": "US",
    "city": "Toksook Bay"
  },
  {
    "code": "NGK",
    "country_code": "RU",
    "city": "Nogliki"
  },
  {
    "code": "HOH",
    "country_code": "AT",
    "city": "Hohenems"
  },
  {
    "code": "RAE",
    "country_code": "SA",
    "city": "Arar"
  },
  {
    "code": "HHE",
    "country_code": "JP",
    "city": "Hachinohe"
  },
  {
    "code": "HVA",
    "country_code": "MG",
    "city": "Analalava"
  },
  {
    "code": "PNT",
    "country_code": "CL",
    "city": "Puerto Natales"
  },
  {
    "code": "HKN",
    "country_code": "PG",
    "city": "Hoskins"
  },
  {
    "code": "SMJ",
    "country_code": "PG",
    "city": "Sim"
  },
  {
    "code": "HAJ",
    "country_code": "DE",
    "city": "Hanover"
  },
  {
    "code": "ASE",
    "country_code": "US",
    "city": "Aspen"
  },
  {
    "code": "BNI",
    "country_code": "NG",
    "city": "Benin City"
  },
  {
    "code": "RIL",
    "country_code": "US",
    "city": "Rifle"
  },
  {
    "code": "ROC",
    "country_code": "US",
    "city": "Rochester"
  },
  {
    "code": "YWL",
    "country_code": "CA",
    "city": "Williams Lake"
  },
  {
    "code": "XWV",
    "country_code": "SE",
    "city": "Varberg"
  },
  {
    "code": "JMH",
    "country_code": "US",
    "city": "Schaumburg"
  },
  {
    "code": "AFL",
    "country_code": "BR",
    "city": "Alta Floresta"
  },
  {
    "code": "LUE",
    "country_code": "SK",
    "city": "Lucenec"
  },
  {
    "code": "LZC",
    "country_code": "MX",
    "city": "Lazaro Cardenas"
  },
  {
    "code": "MAV",
    "country_code": "MH",
    "city": "Maloelap Island"
  },
  {
    "code": "XMC",
    "country_code": "AU",
    "city": "Mallacoota"
  },
  {
    "code": "SHN",
    "country_code": "US",
    "city": "Shelton"
  },
  {
    "code": "ORB",
    "country_code": "SE",
    "city": "Orebro"
  },
  {
    "code": "MCS",
    "country_code": "AR",
    "city": "Monte Caseros"
  },
  {
    "code": "HSV",
    "country_code": "US",
    "city": "Huntsville"
  },
  {
    "code": "PGC",
    "country_code": "US",
    "city": "Petersburg"
  },
  {
    "code": "MWZ",
    "country_code": "TZ",
    "city": "Mwanza"
  },
  {
    "code": "MDZ",
    "country_code": "AR",
    "city": "Mendoza"
  },
  {
    "code": "MIK",
    "country_code": "FI",
    "city": "Mikkeli"
  },
  {
    "code": "RRE",
    "country_code": "AU",
    "city": "Marree"
  },
  {
    "code": "SBR",
    "country_code": "AU",
    "city": "Saibai Island"
  },
  {
    "code": "BNK",
    "country_code": "AU",
    "city": "Ballina"
  },
  {
    "code": "KOX",
    "country_code": "ID",
    "city": "Kokonao"
  },
  {
    "code": "PPV",
    "country_code": "US",
    "city": "Port Protection"
  },
  {
    "code": "BGN",
    "country_code": "RU",
    "city": "Belaya Gora"
  },
  {
    "code": "CYL",
    "country_code": "HN",
    "city": "Coyoles"
  },
  {
    "code": "ARC",
    "country_code": "US",
    "city": "Arctic Village"
  },
  {
    "code": "PFR",
    "country_code": "CD",
    "city": "Ilebo"
  },
  {
    "code": "QNM",
    "country_code": "BE",
    "city": "Namur"
  },
  {
    "code": "DRG",
    "country_code": "US",
    "city": "Deering"
  },
  {
    "code": "XWX",
    "country_code": "SE",
    "city": "Nassjo"
  },
  {
    "code": "DOR",
    "country_code": "BF",
    "city": "Dori"
  },
  {
    "code": "LBU",
    "country_code": "MY",
    "city": "Labuan"
  },
  {
    "code": "LGS",
    "country_code": "AR",
    "city": "Malargue"
  },
  {
    "code": "SPO",
    "country_code": "ES",
    "city": "San Pablo"
  },
  {
    "code": "NCO",
    "country_code": "US",
    "city": "Quonset Point"
  },
  {
    "code": "AQM",
    "country_code": "BR",
    "city": "Ariquemes"
  },
  {
    "code": "YZH",
    "country_code": "CA",
    "city": "Slave Lake"
  },
  {
    "code": "NZL",
    "country_code": "CN",
    "city": "Zalantun"
  },
  {
    "code": "EXM",
    "country_code": "AU",
    "city": "Exmouth Gulf"
  },
  {
    "code": "MLS",
    "country_code": "US",
    "city": "Miles City"
  },
  {
    "code": "SWG",
    "country_code": "PG",
    "city": "Satwag"
  },
  {
    "code": "TPL",
    "country_code": "US",
    "city": "Temple"
  },
  {
    "code": "LZN",
    "country_code": "TW",
    "city": "Nangan"
  },
  {
    "code": "JNN",
    "country_code": "GL",
    "city": "Nanortalik"
  },
  {
    "code": "MJV",
    "country_code": "ES",
    "city": "Murcia"
  },
  {
    "code": "DNU",
    "country_code": "PG",
    "city": "Dinangat"
  },
  {
    "code": "GHT",
    "country_code": "LY",
    "city": "Ghat"
  },
  {
    "code": "LGX",
    "country_code": "SO",
    "city": "Lugh Ganane"
  },
  {
    "code": "SMA",
    "country_code": "PT",
    "city": "Santa Maria (Azores)"
  },
  {
    "code": "HDD",
    "country_code": "PK",
    "city": "Hyderabad"
  },
  {
    "code": "PDV",
    "country_code": "BG",
    "city": "Plovdiv"
  },
  {
    "code": "JOH",
    "country_code": "ZA",
    "city": "Port Saint Johns"
  },
  {
    "code": "XDO",
    "country_code": "CA",
    "city": "Grande-Riviere"
  },
  {
    "code": "EFB",
    "country_code": "US",
    "city": "Eight Fathom Bight"
  },
  {
    "code": "HOB",
    "country_code": "US",
    "city": "Hobbs"
  },
  {
    "code": "ONT",
    "country_code": "US",
    "city": "Ontario"
  },
  {
    "code": "ANL",
    "country_code": "AO",
    "city": "Andulo"
  },
  {
    "code": "CXC",
    "country_code": "US",
    "city": "Chitina"
  },
  {
    "code": "ULO",
    "country_code": "MN",
    "city": "Ulaangom"
  },
  {
    "code": "OSM",
    "country_code": "IQ",
    "city": "Mosul"
  },
  {
    "code": "BJR",
    "country_code": "ET",
    "city": "Bahar Dar"
  },
  {
    "code": "EDB",
    "country_code": "SD",
    "city": "Eldebba"
  },
  {
    "code": "CAH",
    "country_code": "VN",
    "city": "Kamau"
  },
  {
    "code": "KDN",
    "country_code": "GA",
    "city": "Ndende"
  },
  {
    "code": "ЕДИ",
    "country_code": "RU",
    "city": "Edinka"
  },
  {
    "code": "PTH",
    "country_code": "US",
    "city": "Port Heiden"
  },
  {
    "code": "ZJR",
    "country_code": "MY",
    "city": "Penang"
  },
  {
    "code": "ITP",
    "country_code": "BR",
    "city": "Itaperuna"
  },
  {
    "code": "HAO",
    "country_code": "US",
    "city": "Hamilton"
  },
  {
    "code": "SQW",
    "country_code": "DK",
    "city": "Skive"
  },
  {
    "code": "CUN",
    "country_code": "MX",
    "city": "Cancun"
  },
  {
    "code": "ZSA",
    "country_code": "BS",
    "city": "San Salvador"
  },
  {
    "code": "RNL",
    "country_code": "SB",
    "city": "Rennell"
  },
  {
    "code": "FSI",
    "country_code": "US",
    "city": "Fort Sill"
  },
  {
    "code": "WMA",
    "country_code": "MG",
    "city": "Mandritsara"
  },
  {
    "code": "NVS",
    "country_code": "FR",
    "city": "Nevers"
  },
  {
    "code": "SMH",
    "country_code": "PG",
    "city": "Sapmanga"
  },
  {
    "code": "PGF",
    "country_code": "FR",
    "city": "Perpignan"
  },
  {
    "code": "DEL",
    "country_code": "IN",
    "city": "Delhi"
  },
  {
    "code": "KGF",
    "country_code": "KZ",
    "city": "Karaganda"
  },
  {
    "code": "MGK",
    "country_code": "MM",
    "city": "Mong Ton"
  },
  {
    "code": "CYB",
    "country_code": "KY",
    "city": "Cayman Brac Island"
  },
  {
    "code": "IXD",
    "country_code": "IN",
    "city": "Prayagraj"
  },
  {
    "code": "SFL",
    "country_code": "CV",
    "city": "São Filipe"
  },
  {
    "code": "YRF",
    "country_code": "CA",
    "city": "Cartwright"
  },
  {
    "code": "ZCA",
    "country_code": "CN",
    "city": "Tai Shan"
  },
  {
    "code": "LZR",
    "country_code": "AU",
    "city": "Lizard Island"
  },
  {
    "code": "NYK",
    "country_code": "KE",
    "city": "Nanyuki"
  },
  {
    "code": "MNJ",
    "country_code": "MG",
    "city": "Mananjary"
  },
  {
    "code": "KDZ",
    "country_code": "LK",
    "city": "Kandy"
  },
  {
    "code": "ZKW",
    "country_code": "CH",
    "city": "Wetzikon"
  },
  {
    "code": "FCN",
    "country_code": "DE",
    "city": "Cuxhaven"
  },
  {
    "code": "ILP",
    "country_code": "NC",
    "city": "Ile Des Pins"
  },
  {
    "code": "VLM",
    "country_code": "BO",
    "city": "Villamontes"
  },
  {
    "code": "EKT",
    "country_code": "SE",
    "city": "Eskilstuna"
  },
  {
    "code": "AKF",
    "country_code": "LY",
    "city": "Kufrah"
  },
  {
    "code": "OLK",
    "country_code": "PY",
    "city": "Fuerte Olimpo"
  },
  {
    "code": "HZG",
    "country_code": "CN",
    "city": "Hanzhong"
  },
  {
    "code": "GIM",
    "country_code": "GA",
    "city": "Miele Mimbale"
  },
  {
    "code": "VRA",
    "country_code": "CU",
    "city": "Varadero"
  },
  {
    "code": "BEJ",
    "country_code": "ID",
    "city": "Berau"
  },
  {
    "code": "DRU",
    "country_code": "US",
    "city": "Drummond"
  },
  {
    "code": "BFG",
    "country_code": "US",
    "city": "Bullfrog Basin"
  },
  {
    "code": "MNI",
    "country_code": "MS",
    "city": "Montserrat"
  },
  {
    "code": "YQF",
    "country_code": "CA",
    "city": "Red Deer"
  },
  {
    "code": "YYB",
    "country_code": "CA",
    "city": "North Bay"
  },
  {
    "code": "IVI",
    "country_code": "PA",
    "city": "Isla Viveros"
  },
  {
    "code": "HTS",
    "country_code": "US",
    "city": "Huntington"
  },
  {
    "code": "XFQ",
    "country_code": "CA",
    "city": "Weymont"
  },
  {
    "code": "VNX",
    "country_code": "MZ",
    "city": "Vilanculos"
  },
  {
    "code": "PNZ",
    "country_code": "BR",
    "city": "Petrolina"
  },
  {
    "code": "AHH",
    "country_code": "US",
    "city": "Amery"
  },
  {
    "code": "BKU",
    "country_code": "MG",
    "city": "Betioky"
  },
  {
    "code": "KND",
    "country_code": "CD",
    "city": "Kindu"
  },
  {
    "code": "XQB",
    "country_code": "GB",
    "city": "Basingstoke"
  },
  {
    "code": "FNJ",
    "country_code": "KP",
    "city": "Pyongyang"
  },
  {
    "code": "LTC",
    "country_code": "TD",
    "city": "Lai"
  },
  {
    "code": "XUZ",
    "country_code": "CN",
    "city": "Xuzhou"
  },
  {
    "code": "NCA",
    "country_code": "TC",
    "city": "North Caicos"
  },
  {
    "code": "OGN",
    "country_code": "JP",
    "city": "Yonaguni Jima"
  },
  {
    "code": "RBH",
    "country_code": "US",
    "city": "Brooks Lodge"
  },
  {
    "code": "LDK",
    "country_code": "SE",
    "city": "Lidkoping"
  },
  {
    "code": "ZAT",
    "country_code": "CN",
    "city": "Zhaotong"
  },
  {
    "code": "PGN",
    "country_code": "PG",
    "city": "Pangia"
  },
  {
    "code": "PRJ",
    "country_code": "IT",
    "city": "Capri"
  },
  {
    "code": "ZYS",
    "country_code": "NO",
    "city": "Sandefjord"
  },
  {
    "code": "CDY",
    "country_code": "PH",
    "city": "Cagayan De Sulu"
  },
  {
    "code": "YUT",
    "country_code": "CA",
    "city": "Repulse Bay"
  },
  {
    "code": "WAD",
    "country_code": "MG",
    "city": "Andriamena"
  },
  {
    "code": "ZJJ",
    "country_code": "IT",
    "city": "Procida"
  },
  {
    "code": "KTE",
    "country_code": "MY",
    "city": "Kerteh"
  },
  {
    "code": "KCH",
    "country_code": "MY",
    "city": "Kuching"
  },
  {
    "code": "OYS",
    "country_code": "US",
    "city": "Yosemite"
  },
  {
    "code": "ZMX",
    "country_code": "NO",
    "city": "Tynset"
  },
  {
    "code": "MIU",
    "country_code": "NG",
    "city": "Maiduguri"
  },
  {
    "code": "KOK",
    "country_code": "FI",
    "city": "Kokkola/Pietarsaari"
  },
  {
    "code": "MYO",
    "country_code": "AU",
    "city": "Myroodah"
  },
  {
    "code": "ERR",
    "country_code": "US",
    "city": "Errol"
  },
  {
    "code": "QEW",
    "country_code": "GB",
    "city": "Leicester"
  },
  {
    "code": "CBD",
    "country_code": "IN",
    "city": "Car Nicobar"
  },
  {
    "code": "MXO",
    "country_code": "US",
    "city": "Monticello"
  },
  {
    "code": "ZFK",
    "country_code": "DK",
    "city": "Guderup"
  },
  {
    "code": "KWU",
    "country_code": "NZ",
    "city": "Mansion House"
  },
  {
    "code": "JTC",
    "country_code": "BR",
    "city": "Baura-Arealva"
  },
  {
    "code": "MSO",
    "country_code": "US",
    "city": "Missoula"
  },
  {
    "code": "MJQ",
    "country_code": "US",
    "city": "Jackson"
  },
  {
    "code": "KTY",
    "country_code": "LK",
    "city": "Katukurunda"
  },
  {
    "code": "RMC",
    "country_code": "US",
    "city": "Rockford"
  },
  {
    "code": "NKA",
    "country_code": "GA",
    "city": "Nkan"
  },
  {
    "code": "ТЕЙ",
    "country_code": "RU",
    "city": "Terney"
  },
  {
    "code": "IPG",
    "country_code": "BR",
    "city": "Ipiranga"
  },
  {
    "code": "JLD",
    "country_code": "SE",
    "city": "Landskrona"
  },
  {
    "code": "TTL",
    "country_code": "FJ",
    "city": "Turtle Island"
  },
  {
    "code": "OUR",
    "country_code": "CM",
    "city": "Batouri"
  },
  {
    "code": "VIU",
    "country_code": "SB",
    "city": "Viru"
  },
  {
    "code": "TMW",
    "country_code": "AU",
    "city": "Tamworth"
  },
  {
    "code": "PPO",
    "country_code": "BS",
    "city": "Powell Point"
  },
  {
    "code": "PJA",
    "country_code": "SE",
    "city": "Pajala"
  },
  {
    "code": "XHC",
    "country_code": "FI",
    "city": "Akaslompolo"
  },
  {
    "code": "USJ",
    "country_code": "KZ",
    "city": "Usharal"
  },
  {
    "code": "HTH",
    "country_code": "US",
    "city": "Hawthorne"
  },
  {
    "code": "AVX",
    "country_code": "US",
    "city": "Avalon"
  },
  {
    "code": "PBI",
    "country_code": "US",
    "city": "West Palm Beach"
  },
  {
    "code": "YYT",
    "country_code": "CA",
    "city": "St. John's"
  },
  {
    "code": "PNX",
    "country_code": "US",
    "city": "Sherman-Denison"
  },
  {
    "code": "SFO",
    "country_code": "US",
    "city": "San Francisco"
  },
  {
    "code": "LTG",
    "country_code": "NP",
    "city": "Langtang"
  },
  {
    "code": "FEZ",
    "country_code": "MA",
    "city": "Fez"
  },
  {
    "code": "ZIX",
    "country_code": "RU",
    "city": "Zhigansk"
  },
  {
    "code": "UKT",
    "country_code": "US",
    "city": "Quakertown"
  },
  {
    "code": "LOK",
    "country_code": "KE",
    "city": "Lodwar"
  },
  {
    "code": "KCP",
    "country_code": "UA",
    "city": "Kamenets-podolskiy"
  },
  {
    "code": "GBV",
    "country_code": "AU",
    "city": "Gibb River"
  },
  {
    "code": "OBS",
    "country_code": "FR",
    "city": "Aubenas"
  },
  {
    "code": "AUY",
    "country_code": "VU",
    "city": "Aneityum"
  },
  {
    "code": "TIC",
    "country_code": "MH",
    "city": "Tinak Island"
  },
  {
    "code": "GOL",
    "country_code": "US",
    "city": "Gold Beach"
  },
  {
    "code": "NAG",
    "country_code": "IN",
    "city": "Nagpur"
  },
  {
    "code": "PUK",
    "country_code": "PF",
    "city": "Pukarua"
  },
  {
    "code": "KLW",
    "country_code": "US",
    "city": "Klawock"
  },
  {
    "code": "PIQ",
    "country_code": "GY",
    "city": "Pipillipai"
  },
  {
    "code": "RON",
    "country_code": "CO",
    "city": "Rondon"
  },
  {
    "code": "BWL",
    "country_code": "US",
    "city": "Blackwell"
  },
  {
    "code": "CNG",
    "country_code": "FR",
    "city": "Cognac"
  },
  {
    "code": "MLY",
    "country_code": "US",
    "city": "Manley Hot Springs"
  },
  {
    "code": "HDA",
    "country_code": "US",
    "city": "Hidden Falls"
  },
  {
    "code": "TRW",
    "country_code": "KI",
    "city": "Tarawa"
  },
  {
    "code": "DRR",
    "country_code": "AU",
    "city": "Durrie"
  },
  {
    "code": "RNI",
    "country_code": "NI",
    "city": "Corn Island"
  },
  {
    "code": "LAG",
    "country_code": "VE",
    "city": "La Guaira"
  },
  {
    "code": "BSA",
    "country_code": "SO",
    "city": "Bossaso"
  },
  {
    "code": "YZM",
    "country_code": "CA",
    "city": "Buchans"
  },
  {
    "code": "YBI",
    "country_code": "CA",
    "city": "Black Tickle"
  },
  {
    "code": "DRD",
    "country_code": "AU",
    "city": "Dorunda Station"
  },
  {
    "code": "SRP",
    "country_code": "NO",
    "city": "Stord"
  },
  {
    "code": "URM",
    "country_code": "VE",
    "city": "Uriman"
  },
  {
    "code": "GVI",
    "country_code": "PG",
    "city": "Green River"
  },
  {
    "code": "NLC",
    "country_code": "US",
    "city": "Lemoore"
  },
  {
    "code": "TIF",
    "country_code": "SA",
    "city": "Taif"
  },
  {
    "code": "LBS",
    "country_code": "FJ",
    "city": "Labasa"
  },
  {
    "code": "ASI",
    "country_code": "SH",
    "city": "Georgetown"
  },
  {
    "code": "RRI",
    "country_code": "SB",
    "city": "Barora"
  },
  {
    "code": "LWS",
    "country_code": "US",
    "city": "Lewiston"
  },
  {
    "code": "VTN",
    "country_code": "US",
    "city": "Valentine"
  },
  {
    "code": "ZWV",
    "country_code": "US",
    "city": "Glenview"
  },
  {
    "code": "BJU",
    "country_code": "NP",
    "city": "Bajura"
  },
  {
    "code": "LVO",
    "country_code": "AU",
    "city": "Laverton"
  },
  {
    "code": "KWV",
    "country_code": "PG",
    "city": "Kurwina"
  },
  {
    "code": "KUS",
    "country_code": "GL",
    "city": "Kulusuk"
  },
  {
    "code": "ZKY",
    "country_code": "CH",
    "city": "Verbier"
  },
  {
    "code": "UMC",
    "country_code": "PG",
    "city": "Umba"
  },
  {
    "code": "ULL",
    "country_code": "GB",
    "city": "Mull"
  },
  {
    "code": "NKB",
    "country_code": "AU",
    "city": "Noonkanbah"
  },
  {
    "code": "BOG",
    "country_code": "CO",
    "city": "Bogota"
  },
  {
    "code": "KSD",
    "country_code": "SE",
    "city": "Karlstad"
  },
  {
    "code": "LKC",
    "country_code": "CG",
    "city": "Lekana"
  },
  {
    "code": "HNI",
    "country_code": "PG",
    "city": "Heiweni"
  },
  {
    "code": "ZEF",
    "country_code": "CN",
    "city": "Nanhai"
  },
  {
    "code": "QZB",
    "country_code": "CH",
    "city": "Zermatt"
  },
  {
    "code": "VTU",
    "country_code": "CU",
    "city": "Las Tunas"
  },
  {
    "code": "BHK",
    "country_code": "UZ",
    "city": "Bukhara"
  },
  {
    "code": "FAH",
    "country_code": "AF",
    "city": "Farah"
  },
  {
    "code": "KPB",
    "country_code": "US",
    "city": "Point Baker"
  },
  {
    "code": "DYM",
    "country_code": "AU",
    "city": "Diamantina Lakes"
  },
  {
    "code": "SIY",
    "country_code": "US",
    "city": "Montague"
  },
  {
    "code": "MLN",
    "country_code": "ES",
    "city": "Melilla"
  },
  {
    "code": "KDS",
    "country_code": "AU",
    "city": "Kamaran Downs"
  },
  {
    "code": "PST",
    "country_code": "CU",
    "city": "Preston"
  },
  {
    "code": "NAE",
    "country_code": "BJ",
    "city": "Natitingou"
  },
  {
    "code": "LOL",
    "country_code": "US",
    "city": "Lovelock"
  },
  {
    "code": "NAM",
    "country_code": "ID",
    "city": "Namlea"
  },
  {
    "code": "LTU",
    "country_code": "IN",
    "city": "Latur"
  },
  {
    "code": "SWR",
    "country_code": "PG",
    "city": "Silur"
  },
  {
    "code": "AMB",
    "country_code": "MG",
    "city": "Ambilobe"
  },
  {
    "code": "ABX",
    "country_code": "AU",
    "city": "Albury"
  },
  {
    "code": "EDI",
    "country_code": "GB",
    "city": "Edinburgh"
  },
  {
    "code": "MNE",
    "country_code": "AU",
    "city": "Mungeranie"
  },
  {
    "code": "ZUL",
    "country_code": "SA",
    "city": "Zilfi"
  },
  {
    "code": "AUF",
    "country_code": "FR",
    "city": "Auxerre"
  },
  {
    "code": "ATV",
    "country_code": "TD",
    "city": "Ati"
  },
  {
    "code": "JOP",
    "country_code": "PG",
    "city": "Josephstaal"
  },
  {
    "code": "ZHN",
    "country_code": "CH",
    "city": "Herzogenbuchsee"
  },
  {
    "code": "LUL",
    "country_code": "US",
    "city": "Laurel"
  },
  {
    "code": "UUU",
    "country_code": "PG",
    "city": "Manumu"
  },
  {
    "code": "RJK",
    "country_code": "HR",
    "city": "Rijeka"
  },
  {
    "code": "TRN",
    "country_code": "IT",
    "city": "Turin"
  },
  {
    "code": "BNG",
    "country_code": "US",
    "city": "Banning"
  },
  {
    "code": "SFJ",
    "country_code": "GL",
    "city": "Kangerlussuaq"
  },
  {
    "code": "BTT",
    "country_code": "US",
    "city": "Bettles"
  },
  {
    "code": "ОША",
    "country_code": "RU",
    "city": "Osharovo"
  },
  {
    "code": "KLS",
    "country_code": "US",
    "city": "Kelso"
  },
  {
    "code": "YSC",
    "country_code": "CA",
    "city": "Sherbrooke"
  },
  {
    "code": "YOG",
    "country_code": "CA",
    "city": "Ogoki"
  },
  {
    "code": "PGL",
    "country_code": "US",
    "city": "Pascagoula"
  },
  {
    "code": "PKC",
    "country_code": "RU",
    "city": "Petropavlovsk-Kamchatsky"
  },
  {
    "code": "MRR",
    "country_code": "EC",
    "city": "Macara"
  },
  {
    "code": "LCI",
    "country_code": "US",
    "city": "Laconia"
  },
  {
    "code": "YWG",
    "country_code": "CA",
    "city": "Winnipeg"
  },
  {
    "code": "AIM",
    "country_code": "MH",
    "city": "Ailuk Island"
  },
  {
    "code": "ADN",
    "country_code": "CO",
    "city": "Andes"
  },
  {
    "code": "HDE",
    "country_code": "US",
    "city": "Holdrege"
  },
  {
    "code": "MWA",
    "country_code": "US",
    "city": "Marion"
  },
  {
    "code": "CUR",
    "country_code": "CW",
    "city": "Curacao"
  },
  {
    "code": "CBY",
    "country_code": "AU",
    "city": "Canobie"
  },
  {
    "code": "ATP",
    "country_code": "PG",
    "city": "Aitape"
  },
  {
    "code": "YAX",
    "country_code": "CA",
    "city": "Angling Lake"
  },
  {
    "code": "ZNV",
    "country_code": "DE",
    "city": "Koblenz"
  },
  {
    "code": "LPA",
    "country_code": "ES",
    "city": "Las Palmas"
  },
  {
    "code": "ERV",
    "country_code": "US",
    "city": "Kerrville"
  },
  {
    "code": "AHB",
    "country_code": "SA",
    "city": "Abha"
  },
  {
    "code": "KMG",
    "country_code": "CN",
    "city": "Kunming"
  },
  {
    "code": "MKG",
    "country_code": "US",
    "city": "Muskegon"
  },
  {
    "code": "SRI",
    "country_code": "ID",
    "city": "Samarinda"
  },
  {
    "code": "POU",
    "country_code": "US",
    "city": "Poughkeepsie"
  },
  {
    "code": "TJA",
    "country_code": "BO",
    "city": "Tarija"
  },
  {
    "code": "SDK",
    "country_code": "MY",
    "city": "Sandakan"
  },
  {
    "code": "КДД",
    "country_code": "RU",
    "city": "Kedrovy"
  },
  {
    "code": "KGK",
    "country_code": "US",
    "city": "New Koliganek"
  },
  {
    "code": "TOQ",
    "country_code": "CL",
    "city": "Tocopilla"
  },
  {
    "code": "YSO",
    "country_code": "CA",
    "city": "Postville"
  },
  {
    "code": "ZIP",
    "country_code": "IT",
    "city": "Lipari"
  },
  {
    "code": "VRC",
    "country_code": "PH",
    "city": "Virac"
  },
  {
    "code": "CCN",
    "country_code": "AF",
    "city": "Chakcharan"
  },
  {
    "code": "TBP",
    "country_code": "PE",
    "city": "Tumbes"
  },
  {
    "code": "LRB",
    "country_code": "LS",
    "city": "Leribe"
  },
  {
    "code": "TGS",
    "country_code": "MZ",
    "city": "Chokwe"
  },
  {
    "code": "RBV",
    "country_code": "SB",
    "city": "Ramata"
  },
  {
    "code": "PMV",
    "country_code": "VE",
    "city": "Porlamar"
  },
  {
    "code": "YPA",
    "country_code": "CA",
    "city": "Prince Albert"
  },
  {
    "code": "TCL",
    "country_code": "US",
    "city": "Tuscaloosa"
  },
  {
    "code": "DRT",
    "country_code": "US",
    "city": "Del Rio"
  },
  {
    "code": "EFL",
    "country_code": "GR",
    "city": "Kefallinia"
  },
  {
    "code": "NAJ",
    "country_code": "AZ",
    "city": "Nakhichevan"
  },
  {
    "code": "ISM",
    "country_code": "US",
    "city": "Kissimmee"
  },
  {
    "code": "VFA",
    "country_code": "ZW",
    "city": "Victoria Falls"
  },
  {
    "code": "ULU",
    "country_code": "UG",
    "city": "Gulu"
  },
  {
    "code": "KGJ",
    "country_code": "MW",
    "city": "Karonga"
  },
  {
    "code": "MZN",
    "country_code": "PG",
    "city": "Minj"
  },
  {
    "code": "EIA",
    "country_code": "PG",
    "city": "Eia"
  },
  {
    "code": "ITE",
    "country_code": "BR",
    "city": "Itubera"
  },
  {
    "code": "YMV",
    "country_code": "CA",
    "city": "Mary River"
  },
  {
    "code": "QXZ",
    "country_code": "AT",
    "city": "Woergl"
  },
  {
    "code": "SWS",
    "country_code": "GB",
    "city": "Swansea"
  },
  {
    "code": "MJE",
    "country_code": "MH",
    "city": "Majkin"
  },
  {
    "code": "KXF",
    "country_code": "FJ",
    "city": "Koro Island"
  },
  {
    "code": "VAL",
    "country_code": "BR",
    "city": "Valenca"
  },
  {
    "code": "KUR",
    "country_code": "AF",
    "city": "Kuran-Wa-Munjan"
  },
  {
    "code": "OLI",
    "country_code": "IS",
    "city": "Olafsvik"
  },
  {
    "code": "SRU",
    "country_code": "US",
    "city": "Santa Cruz"
  },
  {
    "code": "BKK",
    "country_code": "TH",
    "city": "Bangkok"
  },
  {
    "code": "CCI",
    "country_code": "BR",
    "city": "Concordia"
  },
  {
    "code": "TKL",
    "country_code": "US",
    "city": "Taku Lodge"
  },
  {
    "code": "ТЬК",
    "country_code": "RU",
    "city": "Tolka"
  },
  {
    "code": "LVP",
    "country_code": "IR",
    "city": "Lavan"
  },
  {
    "code": "YMK",
    "country_code": "RU",
    "city": "Mys-Kamenny"
  },
  {
    "code": "GJA",
    "country_code": "HN",
    "city": "Guanaja"
  },
  {
    "code": "CSY",
    "country_code": "RU",
    "city": "Cheboksary"
  },
  {
    "code": "YGC",
    "country_code": "CA",
    "city": "Grande Cache"
  },
  {
    "code": "UAH",
    "country_code": "PF",
    "city": "Ua Huka"
  },
  {
    "code": "MPU",
    "country_code": "PG",
    "city": "Mapua"
  },
  {
    "code": "GHN",
    "country_code": "CN",
    "city": "Guanghan"
  },
  {
    "code": "SPR",
    "country_code": "BZ",
    "city": "San Pedro"
  },
  {
    "code": "KTI",
    "country_code": "KH",
    "city": "Kratie"
  },
  {
    "code": "DGK",
    "country_code": "MZ",
    "city": "Dugong"
  },
  {
    "code": "UBA",
    "country_code": "BR",
    "city": "Uberaba"
  },
  {
    "code": "AEY",
    "country_code": "IS",
    "city": "Akureyri"
  },
  {
    "code": "LZU",
    "country_code": "US",
    "city": "Lawrenceville"
  },
  {
    "code": "HKK",
    "country_code": "NZ",
    "city": "Hokitika"
  },
  {
    "code": "XFO",
    "country_code": "CA",
    "city": "Taschereau"
  },
  {
    "code": "STL",
    "country_code": "US",
    "city": "Saint Louis"
  },
  {
    "code": "PPT",
    "country_code": "PF",
    "city": "Papeete"
  },
  {
    "code": "NDD",
    "country_code": "AO",
    "city": "Sumbe"
  },
  {
    "code": "LHV",
    "country_code": "US",
    "city": "Lock Haven"
  },
  {
    "code": "YMS",
    "country_code": "PE",
    "city": "Yurimaguas"
  },
  {
    "code": "MLV",
    "country_code": "AU",
    "city": "Merluna"
  },
  {
    "code": "MHN",
    "country_code": "US",
    "city": "Mullen"
  },
  {
    "code": "BFU",
    "country_code": "CN",
    "city": "Bengbu"
  },
  {
    "code": "PGZ",
    "country_code": "BR",
    "city": "Ponta Grossa"
  },
  {
    "code": "LGC",
    "country_code": "US",
    "city": "La Grange"
  },
  {
    "code": "VEX",
    "country_code": "US",
    "city": "Tioga"
  },
  {
    "code": "YEA",
    "country_code": "CA",
    "city": "Edmonton"
  },
  {
    "code": "BEI",
    "country_code": "ET",
    "city": "Beica"
  },
  {
    "code": "ZDC",
    "country_code": "CH",
    "city": "Aigle"
  },
  {
    "code": "LFN",
    "country_code": "US",
    "city": "Louisburg"
  },
  {
    "code": "EIS",
    "country_code": "VG",
    "city": "Beef Island"
  },
  {
    "code": "AGZ",
    "country_code": "ZA",
    "city": "Aggeneys"
  },
  {
    "code": "TGC",
    "country_code": "MY",
    "city": "Sarikei"
  },
  {
    "code": "GAW",
    "country_code": "MM",
    "city": "Gangaw"
  },
  {
    "code": "KBO",
    "country_code": "CD",
    "city": "Kabalo"
  },
  {
    "code": "NJC",
    "country_code": "RU",
    "city": "Nizhnevartovsk"
  },
  {
    "code": "MAH",
    "country_code": "ES",
    "city": "Menorca"
  },
  {
    "code": "ENA",
    "country_code": "US",
    "city": "Kenai"
  },
  {
    "code": "LCJ",
    "country_code": "PL",
    "city": "Lodz"
  },
  {
    "code": "XNG",
    "country_code": "VN",
    "city": "Quang Ngai"
  },
  {
    "code": "AGN",
    "country_code": "US",
    "city": "Angoon"
  },
  {
    "code": "BLT",
    "country_code": "AU",
    "city": "Blackwater"
  },
  {
    "code": "GTP",
    "country_code": "US",
    "city": "Grants Pass"
  },
  {
    "code": "KSK",
    "country_code": "SE",
    "city": "Karlskoga"
  },
  {
    "code": "ZND",
    "country_code": "NE",
    "city": "Zinder"
  },
  {
    "code": "SVV",
    "country_code": "VE",
    "city": "San Salvador De Paul"
  },
  {
    "code": "KZG",
    "country_code": "DE",
    "city": "Kitzingen"
  },
  {
    "code": "CVO",
    "country_code": "US",
    "city": "Albany"
  },
  {
    "code": "SMI",
    "country_code": "GR",
    "city": "Samos"
  },
  {
    "code": "WOL",
    "country_code": "AU",
    "city": "Wollongong"
  },
  {
    "code": "KMZ",
    "country_code": "ZM",
    "city": "Kaoma"
  },
  {
    "code": "FNR",
    "country_code": "US",
    "city": "Funter Bay"
  },
  {
    "code": "SFW",
    "country_code": "PA",
    "city": "Santa Fe"
  },
  {
    "code": "YLY",
    "country_code": "CA",
    "city": "Langley"
  },
  {
    "code": "RMP",
    "country_code": "US",
    "city": "Rampart"
  },
  {
    "code": "KTJ",
    "country_code": "KE",
    "city": "Kichwa Tembo"
  },
  {
    "code": "CGV",
    "country_code": "AU",
    "city": "Caiguna"
  },
  {
    "code": "LDO",
    "country_code": "SR",
    "city": "Ladouanie"
  },
  {
    "code": "CMI",
    "country_code": "US",
    "city": "Champaign"
  },
  {
    "code": "ODH",
    "country_code": "GB",
    "city": "Odiham"
  },
  {
    "code": "VAU",
    "country_code": "FJ",
    "city": "Vatukoula"
  },
  {
    "code": "RCY",
    "country_code": "BS",
    "city": "Rum Cay"
  },
  {
    "code": "CYX",
    "country_code": "RU",
    "city": "Cherskiy"
  },
  {
    "code": "ADO",
    "country_code": "AU",
    "city": "Andamooka"
  },
  {
    "code": "IJX",
    "country_code": "US",
    "city": "Jacksonville"
  },
  {
    "code": "COK",
    "country_code": "IN",
    "city": "Kochi"
  },
  {
    "code": "KNI",
    "country_code": "AU",
    "city": "Katanning"
  },
  {
    "code": "TUP",
    "country_code": "US",
    "city": "Tupelo"
  },
  {
    "code": "GBD",
    "country_code": "US",
    "city": "Great Bend"
  },
  {
    "code": "ILA",
    "country_code": "ID",
    "city": "Illaga"
  },
  {
    "code": "BLY",
    "country_code": "IE",
    "city": "Belmullet"
  },
  {
    "code": "BYH",
    "country_code": "US",
    "city": "Blytheville"
  },
  {
    "code": "KEB",
    "country_code": "US",
    "city": "Nanwalek"
  },
  {
    "code": "VUP",
    "country_code": "CO",
    "city": "Valledupar"
  },
  {
    "code": "MWU",
    "country_code": "PG",
    "city": "Mussau"
  },
  {
    "code": "AGA",
    "country_code": "MA",
    "city": "Agadir"
  },
  {
    "code": "IQA",
    "country_code": "IQ",
    "city": "Al Asad"
  },
  {
    "code": "AKR",
    "country_code": "NG",
    "city": "Akure"
  },
  {
    "code": "WSP",
    "country_code": "NI",
    "city": "Waspam"
  },
  {
    "code": "MKC",
    "country_code": "US",
    "city": "Kansas City"
  },
  {
    "code": "ZBJ",
    "country_code": "DK",
    "city": "Fredericia"
  },
  {
    "code": "RCR",
    "country_code": "US",
    "city": "Rochester"
  },
  {
    "code": "MVY",
    "country_code": "US",
    "city": "Martha's Vineyard"
  },
  {
    "code": "XKH",
    "country_code": "LA",
    "city": "Xieng Khouang"
  },
  {
    "code": "ZDX",
    "country_code": "CH",
    "city": "Dietikon"
  },
  {
    "code": "BCN",
    "country_code": "ES",
    "city": "Barcelona"
  },
  {
    "code": "PBB",
    "country_code": "BR",
    "city": "Paranaiba"
  },
  {
    "code": "ATW",
    "country_code": "US",
    "city": "Appleton"
  },
  {
    "code": "BPH",
    "country_code": "PH",
    "city": "Bislig"
  },
  {
    "code": "XIF",
    "country_code": "CA",
    "city": "Napanee"
  },
  {
    "code": "BRB",
    "country_code": "BR",
    "city": "Barreirinhas"
  },
  {
    "code": "RZZ",
    "country_code": "US",
    "city": "Roanoke Rapids"
  },
  {
    "code": "STT",
    "country_code": "VI",
    "city": "Saint Thomas"
  },
  {
    "code": "WRG",
    "country_code": "US",
    "city": "Wrangell"
  },
  {
    "code": "NYC",
    "country_code": "US",
    "city": "New York"
  },
  {
    "code": "UMA",
    "country_code": "CU",
    "city": "Punta De Maisi"
  },
  {
    "code": "LRD",
    "country_code": "US",
    "city": "Laredo"
  },
  {
    "code": "YLK",
    "country_code": "CA",
    "city": "Oro Station"
  },
  {
    "code": "TDJ",
    "country_code": "DJ",
    "city": "Tadjoura"
  },
  {
    "code": "AUC",
    "country_code": "CO",
    "city": "Arauca"
  },
  {
    "code": "DEF",
    "country_code": "IR",
    "city": "Dezful"
  },
  {
    "code": "XKK",
    "country_code": "NO",
    "city": "Larvik"
  },
  {
    "code": "WWD",
    "country_code": "US",
    "city": "Wildwood"
  },
  {
    "code": "PBW",
    "country_code": "ID",
    "city": "Palibelo"
  },
  {
    "code": "TNU",
    "country_code": "US",
    "city": "Newton"
  },
  {
    "code": "PQT",
    "country_code": "GL",
    "city": "Qeqertaq"
  },
  {
    "code": "AIY",
    "country_code": "US",
    "city": "Atlantic City"
  },
  {
    "code": "CAF",
    "country_code": "BR",
    "city": "Carauari"
  },
  {
    "code": "NUB",
    "country_code": "AU",
    "city": "Numbulwar"
  },
  {
    "code": "PEI",
    "country_code": "CO",
    "city": "Pereira"
  },
  {
    "code": "DEH",
    "country_code": "US",
    "city": "Decorah"
  },
  {
    "code": "BLP",
    "country_code": "PE",
    "city": "Bellavista"
  },
  {
    "code": "KRV",
    "country_code": "KE",
    "city": "Kerio Valley"
  },
  {
    "code": "YQR",
    "country_code": "CA",
    "city": "Regina"
  },
  {
    "code": "IOR",
    "country_code": "IE",
    "city": "Inishmore"
  },
  {
    "code": "HFF",
    "country_code": "US",
    "city": "Hoffman"
  },
  {
    "code": "HDS",
    "country_code": "ZA",
    "city": "Hoedspruit"
  },
  {
    "code": "UYN",
    "country_code": "CN",
    "city": "Yulin"
  },
  {
    "code": "AUT",
    "country_code": "ID",
    "city": "Atauro"
  },
  {
    "code": "RZN",
    "country_code": "RU",
    "city": "Ryazan"
  },
  {
    "code": "SMT",
    "country_code": "TW",
    "city": "Sun Moon Lake"
  },
  {
    "code": "SLO",
    "country_code": "US",
    "city": "Salem"
  },
  {
    "code": "LAP",
    "country_code": "MX",
    "city": "La Paz"
  },
  {
    "code": "IVO",
    "country_code": "CO",
    "city": "Chivolo"
  },
  {
    "code": "CUK",
    "country_code": "BZ",
    "city": "Caye Caulker"
  },
  {
    "code": "MED",
    "country_code": "SA",
    "city": "Madinah"
  },
  {
    "code": "GRY",
    "country_code": "IS",
    "city": "Grimsey"
  },
  {
    "code": "IXJ",
    "country_code": "IN",
    "city": "Jammu"
  },
  {
    "code": "WTP",
    "country_code": "PG",
    "city": "Woitape"
  },
  {
    "code": "TVA",
    "country_code": "MG",
    "city": "Morafenobe"
  },
  {
    "code": "TBZ",
    "country_code": "IR",
    "city": "Tabriz"
  },
  {
    "code": "AGP",
    "country_code": "ES",
    "city": "Malaga"
  },
  {
    "code": "CML",
    "country_code": "AU",
    "city": "Camooweal"
  },
  {
    "code": "GSJ",
    "country_code": "GT",
    "city": "Puerto San Jose"
  },
  {
    "code": "CMT",
    "country_code": "BR",
    "city": "Cameta"
  },
  {
    "code": "SOD",
    "country_code": "BR",
    "city": "Sorocaba"
  },
  {
    "code": "VIE",
    "country_code": "AT",
    "city": "Vienna"
  },
  {
    "code": "SBK",
    "country_code": "FR",
    "city": "Tremuson"
  },
  {
    "code": "XPQ",
    "country_code": "MY",
    "city": "Port Klang"
  },
  {
    "code": "PTB",
    "country_code": "US",
    "city": "Petersburg"
  },
  {
    "code": "BRN",
    "country_code": "CH",
    "city": "Berne"
  },
  {
    "code": "ВЕШ",
    "country_code": "RU",
    "city": "Vershinskie"
  },
  {
    "code": "BPG",
    "country_code": "BR",
    "city": "Barra Do Garcas"
  },
  {
    "code": "EBO",
    "country_code": "MH",
    "city": "Ebon"
  },
  {
    "code": "AVP",
    "country_code": "US",
    "city": "Wilkes-Barre"
  },
  {
    "code": "DOB",
    "country_code": "ID",
    "city": "Dobo"
  },
  {
    "code": "JAN",
    "country_code": "US",
    "city": "Jackson"
  },
  {
    "code": "ADW",
    "country_code": "US",
    "city": "Camp Springs"
  },
  {
    "code": "MHA",
    "country_code": "GY",
    "city": "Mahdia"
  },
  {
    "code": "MEY",
    "country_code": "NP",
    "city": "Meghauli"
  },
  {
    "code": "JVL",
    "country_code": "US",
    "city": "Janesville"
  },
  {
    "code": "TKS",
    "country_code": "JP",
    "city": "Tokushima"
  },
  {
    "code": "TBS",
    "country_code": "GE",
    "city": "Tbilisi"
  },
  {
    "code": "LFQ",
    "country_code": "CN",
    "city": "Linfen"
  },
  {
    "code": "SMC",
    "country_code": "CO",
    "city": "Santa Maria"
  },
  {
    "code": "FTA",
    "country_code": "VU",
    "city": "Futuna Island"
  },
  {
    "code": "MTB",
    "country_code": "CO",
    "city": "Monte Libano"
  },
  {
    "code": "IUL",
    "country_code": "ID",
    "city": "Ilu"
  },
  {
    "code": "SMV",
    "country_code": "CH",
    "city": "St Moritz"
  },
  {
    "code": "YPT",
    "country_code": "CA",
    "city": "Pender Harbor"
  },
  {
    "code": "BPD",
    "country_code": "PG",
    "city": "Bapi"
  },
  {
    "code": "YWQ",
    "country_code": "CA",
    "city": "Chute-Des-Passes"
  },
  {
    "code": "CDO",
    "country_code": "ZA",
    "city": "Cradock"
  },
  {
    "code": "RLU",
    "country_code": "US",
    "city": "Bornite"
  },
  {
    "code": "AOD",
    "country_code": "TD",
    "city": "Abou Deia"
  },
  {
    "code": "EUG",
    "country_code": "US",
    "city": "Eugene"
  },
  {
    "code": "UIO",
    "country_code": "EC",
    "city": "Quito"
  },
  {
    "code": "DTB",
    "country_code": "ID",
    "city": "Siborong-Borong"
  },
  {
    "code": "AVK",
    "country_code": "MN",
    "city": "Arvaikheer"
  },
  {
    "code": "HSS",
    "country_code": "IN",
    "city": "Hissar"
  },
  {
    "code": "CWL",
    "country_code": "GB",
    "city": "Cardiff"
  },
  {
    "code": "DJA",
    "country_code": "BJ",
    "city": "Djougou"
  },
  {
    "code": "CNM",
    "country_code": "US",
    "city": "Carlsbad"
  },
  {
    "code": "HFA",
    "country_code": "IL",
    "city": "Haifa"
  },
  {
    "code": "SCR",
    "country_code": "SE",
    "city": "Sälen"
  },
  {
    "code": "CKV",
    "country_code": "US",
    "city": "Clarksville"
  },
  {
    "code": "ZPB",
    "country_code": "CA",
    "city": "Sachigo Lake"
  },
  {
    "code": "JGE",
    "country_code": "KR",
    "city": "Geoje"
  },
  {
    "code": "CDT",
    "country_code": "ES",
    "city": "Castellon de la Plana"
  },
  {
    "code": "BMO",
    "country_code": "MM",
    "city": "Bhamo"
  },
  {
    "code": "FLL",
    "country_code": "US",
    "city": "Fort Lauderdale"
  },
  {
    "code": "JKT",
    "country_code": "ID",
    "city": "Jakarta"
  },
  {
    "code": "YCT",
    "country_code": "CA",
    "city": "Coronation"
  },
  {
    "code": "KBF",
    "country_code": "ID",
    "city": "Karubaga"
  },
  {
    "code": "FLD",
    "country_code": "US",
    "city": "Fond Du Lac"
  },
  {
    "code": "DNG",
    "country_code": "AU",
    "city": "Doongan"
  },
  {
    "code": "ZJA",
    "country_code": "CH",
    "city": "Le Locle"
  },
  {
    "code": "GEO",
    "country_code": "GY",
    "city": "Georgetown"
  },
  {
    "code": "YZE",
    "country_code": "CA",
    "city": "Gore Bay"
  },
  {
    "code": "MKM",
    "country_code": "MY",
    "city": "Mukah"
  },
  {
    "code": "NNU",
    "country_code": "BR",
    "city": "Nanuque"
  },
  {
    "code": "ANR",
    "country_code": "BE",
    "city": "Antwerp"
  },
  {
    "code": "KRQ",
    "country_code": "UA",
    "city": "Kramatorsk"
  },
  {
    "code": "HYV",
    "country_code": "FI",
    "city": "Hyvinkaa"
  },
  {
    "code": "IPL",
    "country_code": "US",
    "city": "Imperial"
  },
  {
    "code": "ARA",
    "country_code": "US",
    "city": "New Iberia"
  },
  {
    "code": "AAT",
    "country_code": "CN",
    "city": "Altay"
  },
  {
    "code": "BML",
    "country_code": "US",
    "city": "Berlin"
  },
  {
    "code": "ORC",
    "country_code": "CO",
    "city": "Orocue"
  },
  {
    "code": "NOP",
    "country_code": "TR",
    "city": "Sinop"
  },
  {
    "code": "IXQ",
    "country_code": "IN",
    "city": "Kamalpur"
  },
  {
    "code": "УДС",
    "country_code": "RU",
    "city": "Udskoe"
  },
  {
    "code": "JCT",
    "country_code": "US",
    "city": "Junction"
  },
  {
    "code": "BII",
    "country_code": "MH",
    "city": "Bikini Atoll"
  },
  {
    "code": "BBB",
    "country_code": "US",
    "city": "Benson"
  },
  {
    "code": "TGE",
    "country_code": "US",
    "city": "Tuskegee"
  },
  {
    "code": "MFE",
    "country_code": "US",
    "city": "McAllen"
  },
  {
    "code": "YBL",
    "country_code": "CA",
    "city": "Campbell River"
  },
  {
    "code": "UEE",
    "country_code": "AU",
    "city": "Queenstown"
  },
  {
    "code": "KUK",
    "country_code": "US",
    "city": "Kasigluk"
  },
  {
    "code": "NBV",
    "country_code": "BR",
    "city": "Cana Brava"
  },
  {
    "code": "OOM",
    "country_code": "AU",
    "city": "Cooma"
  },
  {
    "code": "ELF",
    "country_code": "SD",
    "city": "El Fasher"
  },
  {
    "code": "YHT",
    "country_code": "CA",
    "city": "Haines Junction"
  },
  {
    "code": "OXO",
    "country_code": "AU",
    "city": "Orientos"
  },
  {
    "code": "DVL",
    "country_code": "US",
    "city": "Devils Lake"
  },
  {
    "code": "WOO",
    "country_code": "US",
    "city": "Woodchopper"
  },
  {
    "code": "HBC",
    "country_code": "US",
    "city": "Hanus Bay"
  },
  {
    "code": "DJN",
    "country_code": "US",
    "city": "Delta Junction"
  },
  {
    "code": "CSJ",
    "country_code": "VN",
    "city": "Cape St Jacques"
  },
  {
    "code": "REU",
    "country_code": "ES",
    "city": "Reus"
  },
  {
    "code": "YVB",
    "country_code": "CA",
    "city": "Bonaventure"
  },
  {
    "code": "PAR",
    "country_code": "FR",
    "city": "Paris"
  },
  {
    "code": "MZW",
    "country_code": "DZ",
    "city": "Mechria"
  },
  {
    "code": "GBK",
    "country_code": "SL",
    "city": "Gbangbatok"
  },
  {
    "code": "MDV",
    "country_code": "GA",
    "city": "Medouneu"
  },
  {
    "code": "LMI",
    "country_code": "PG",
    "city": "Lumi"
  },
  {
    "code": "SYE",
    "country_code": "YE",
    "city": "Sadah"
  },
  {
    "code": "BRP",
    "country_code": "PG",
    "city": "Biaru"
  },
  {
    "code": "YDQ",
    "country_code": "CA",
    "city": "Dawson Creek"
  },
  {
    "code": "TBE",
    "country_code": "PG",
    "city": "Timbunke"
  },
  {
    "code": "KRR",
    "country_code": "RU",
    "city": "Krasnodar"
  },
  {
    "code": "RUE",
    "country_code": "CD",
    "city": "Butembo"
  },
  {
    "code": "BAR",
    "country_code": "US",
    "city": "Baker Island"
  },
  {
    "code": "XRY",
    "country_code": "ES",
    "city": "Jerez De La Frontera"
  },
  {
    "code": "MMW",
    "country_code": "MZ",
    "city": "Moma"
  },
  {
    "code": "TAY",
    "country_code": "EE",
    "city": "Tartu"
  },
  {
    "code": "QBO",
    "country_code": "DE",
    "city": "Bochum"
  },
  {
    "code": "PLH",
    "country_code": "GB",
    "city": "Plymouth"
  },
  {
    "code": "YAK",
    "country_code": "US",
    "city": "Yakutat"
  },
  {
    "code": "SHV",
    "country_code": "US",
    "city": "Shreveport"
  },
  {
    "code": "LSJ",
    "country_code": "PG",
    "city": "Long Island"
  },
  {
    "code": "IBO",
    "country_code": "MZ",
    "city": "Ibo"
  },
  {
    "code": "QFQ",
    "country_code": "NO",
    "city": "Maloy"
  },
  {
    "code": "FBG",
    "country_code": "US",
    "city": "Fort Bragg"
  },
  {
    "code": "RHD",
    "country_code": "AR",
    "city": "Rio Hondo"
  },
  {
    "code": "DHG",
    "country_code": "RU",
    "city": "Dalnegorsk"
  },
  {
    "code": "TSY",
    "country_code": "ID",
    "city": "Tasikmalaya"
  },
  {
    "code": "JHM",
    "country_code": "US",
    "city": "Kapalua"
  },
  {
    "code": "WNU",
    "country_code": "PG",
    "city": "Wanuma"
  },
  {
    "code": "KNB",
    "country_code": "US",
    "city": "Kanab"
  },
  {
    "code": "EDR",
    "country_code": "AU",
    "city": "Edward River"
  },
  {
    "code": "PCA",
    "country_code": "US",
    "city": "Portage Creek"
  },
  {
    "code": "SCT",
    "country_code": "YE",
    "city": "Socotra"
  },
  {
    "code": "YHB",
    "country_code": "CA",
    "city": "Hudson Bay"
  },
  {
    "code": "VLP",
    "country_code": "BR",
    "city": "Vila Rica"
  },
  {
    "code": "MMS",
    "country_code": "US",
    "city": "Marks"
  },
  {
    "code": "GCW",
    "country_code": "US",
    "city": "Grand Canyon West"
  },
  {
    "code": "BHZ",
    "country_code": "BR",
    "city": "Belo Horizonte"
  },
  {
    "code": "GOP",
    "country_code": "IN",
    "city": "Gorakhpur"
  },
  {
    "code": "URJ",
    "country_code": "RU",
    "city": "Uraj"
  },
  {
    "code": "DSD",
    "country_code": "GP",
    "city": "La Desirade"
  },
  {
    "code": "CVC",
    "country_code": "AU",
    "city": "Cleve"
  },
  {
    "code": "ZGX",
    "country_code": "DK",
    "city": "Viborg"
  },
  {
    "code": "STZ",
    "country_code": "BR",
    "city": "Santa Terezinha"
  },
  {
    "code": "RXA",
    "country_code": "YE",
    "city": "Raudha"
  },
  {
    "code": "TOS",
    "country_code": "NO",
    "city": "Tromso"
  },
  {
    "code": "YZU",
    "country_code": "CA",
    "city": "Whitecourt"
  },
  {
    "code": "DDN",
    "country_code": "AU",
    "city": "Delta Downs"
  },
  {
    "code": "PWM",
    "country_code": "US",
    "city": "Portland"
  },
  {
    "code": "UCN",
    "country_code": "LR",
    "city": "Buchanan"
  },
  {
    "code": "RUP",
    "country_code": "IN",
    "city": "Rupsi"
  },
  {
    "code": "MLG",
    "country_code": "ID",
    "city": "Malang"
  },
  {
    "code": "AJR",
    "country_code": "SE",
    "city": "Arvidsjaur"
  },
  {
    "code": "FIC",
    "country_code": "US",
    "city": "Fire Cove"
  },
  {
    "code": "TYR",
    "country_code": "US",
    "city": "Tyler"
  },
  {
    "code": "JMK",
    "country_code": "GR",
    "city": "Mikonos"
  },
  {
    "code": "XKS",
    "country_code": "CA",
    "city": "Kasabonika"
  },
  {
    "code": "MZK",
    "country_code": "KI",
    "city": "Marakei"
  },
  {
    "code": "HEO",
    "country_code": "PG",
    "city": "Haelogo"
  },
  {
    "code": "JFM",
    "country_code": "AU",
    "city": "Fremantle"
  },
  {
    "code": "LOV",
    "country_code": "MX",
    "city": "Monclova"
  },
  {
    "code": "TIS",
    "country_code": "AU",
    "city": "Thursday Island"
  },
  {
    "code": "NMR",
    "country_code": "AU",
    "city": "Nappa Merry"
  },
  {
    "code": "YEB",
    "country_code": "CA",
    "city": "Bar River"
  },
  {
    "code": "EVG",
    "country_code": "SE",
    "city": "Sveg"
  },
  {
    "code": "LTO",
    "country_code": "MX",
    "city": "Loreto"
  },
  {
    "code": "TFC",
    "country_code": "IT",
    "city": "Taormina"
  },
  {
    "code": "TTQ",
    "country_code": "CR",
    "city": "Tortuquero"
  },
  {
    "code": "BGC",
    "country_code": "PT",
    "city": "Braganca"
  },
  {
    "code": "INX",
    "country_code": "ID",
    "city": "Inanwatan"
  },
  {
    "code": "BSE",
    "country_code": "MY",
    "city": "Sematan"
  },
  {
    "code": "CRK",
    "country_code": "PH",
    "city": "Luzon Island"
  },
  {
    "code": "RMA",
    "country_code": "AU",
    "city": "Roma"
  },
  {
    "code": "CTW",
    "country_code": "US",
    "city": "Cottonwood"
  },
  {
    "code": "PLR",
    "country_code": "US",
    "city": "Pell City"
  },
  {
    "code": "FRK",
    "country_code": "SC",
    "city": "Fregate Island"
  },
  {
    "code": "COD",
    "country_code": "US",
    "city": "Cody"
  },
  {
    "code": "GOI",
    "country_code": "IN",
    "city": "Goa"
  },
  {
    "code": "ZLE",
    "country_code": "CH",
    "city": "Wengen"
  },
  {
    "code": "DLA",
    "country_code": "CM",
    "city": "Douala"
  },
  {
    "code": "SOU",
    "country_code": "GB",
    "city": "Southampton"
  },
  {
    "code": "BKS",
    "country_code": "ID",
    "city": "Bengkulu"
  },
  {
    "code": "KVA",
    "country_code": "GR",
    "city": "Kavala"
  },
  {
    "code": "PTU",
    "country_code": "US",
    "city": "Platinum"
  },
  {
    "code": "HSN",
    "country_code": "CN",
    "city": "Zhoushan"
  },
  {
    "code": "PPG",
    "country_code": "AS",
    "city": "Pago Pago"
  },
  {
    "code": "DHM",
    "country_code": "IN",
    "city": "Dharamsala"
  },
  {
    "code": "GDB",
    "country_code": "IN",
    "city": "Gondia"
  },
  {
    "code": "HLL",
    "country_code": "AU",
    "city": "Hillside"
  },
  {
    "code": "WKJ",
    "country_code": "JP",
    "city": "Wakkanai"
  },
  {
    "code": "ZRN",
    "country_code": "CH",
    "city": "Nyon"
  },
  {
    "code": "SOP",
    "country_code": "US",
    "city": "Southern Pines"
  },
  {
    "code": "XCI",
    "country_code": "CA",
    "city": "Chambord"
  },
  {
    "code": "TBF",
    "country_code": "KI",
    "city": "Tabiteuea North"
  },
  {
    "code": "KAC",
    "country_code": "SY",
    "city": "Kameshli"
  },
  {
    "code": "CTG",
    "country_code": "CO",
    "city": "Cartagena"
  },
  {
    "code": "FAQ",
    "country_code": "PG",
    "city": "Freida River"
  },
  {
    "code": "DNB",
    "country_code": "AU",
    "city": "Dunbar"
  },
  {
    "code": "ETZ",
    "country_code": "FR",
    "city": "Metz/Nancy"
  },
  {
    "code": "ZGE",
    "country_code": "DE",
    "city": "Goerlitz"
  },
  {
    "code": "FKL",
    "country_code": "US",
    "city": "Franklin"
  },
  {
    "code": "AYR",
    "country_code": "AU",
    "city": "Ayr"
  },
  {
    "code": "SAM",
    "country_code": "PG",
    "city": "Salamo"
  },
  {
    "code": "NAF",
    "country_code": "ID",
    "city": "Banaina"
  },
  {
    "code": "ILE",
    "country_code": "US",
    "city": "Killeen"
  },
  {
    "code": "BGF",
    "country_code": "CF",
    "city": "Bangui"
  },
  {
    "code": "OLR",
    "country_code": "AF",
    "city": "Salerno"
  },
  {
    "code": "СЧУ",
    "country_code": "RU",
    "city": "Strelka-Chunya"
  },
  {
    "code": "UMT",
    "country_code": "US",
    "city": "Umiat"
  },
  {
    "code": "BJA",
    "country_code": "DZ",
    "city": "Bejaia"
  },
  {
    "code": "GVP",
    "country_code": "AU",
    "city": "Greenvale"
  },
  {
    "code": "BFQ",
    "country_code": "PA",
    "city": "Bahia Pinas"
  },
  {
    "code": "MSH",
    "country_code": "OM",
    "city": "Masirah"
  },
  {
    "code": "SYU",
    "country_code": "AU",
    "city": "Warraber"
  },
  {
    "code": "OUI",
    "country_code": "LA",
    "city": "Ban Houei"
  },
  {
    "code": "CZW",
    "country_code": "PL",
    "city": "Czestochowa"
  },
  {
    "code": "CVR",
    "country_code": "US",
    "city": "Culver City"
  },
  {
    "code": "MSR",
    "country_code": "TR",
    "city": "Mus"
  },
  {
    "code": "TEK",
    "country_code": "US",
    "city": "Tatitlek"
  },
  {
    "code": "YOY",
    "country_code": "CA",
    "city": "Valcartier"
  },
  {
    "code": "GHU",
    "country_code": "AR",
    "city": "Gualeguaychu"
  },
  {
    "code": "DBM",
    "country_code": "ET",
    "city": "Debra Marcos"
  },
  {
    "code": "SSP",
    "country_code": "AU",
    "city": "Silver Plains"
  },
  {
    "code": "BHQ",
    "country_code": "AU",
    "city": "Broken Hill"
  },
  {
    "code": "QZC",
    "country_code": "AU",
    "city": "Smiggin Holes"
  },
  {
    "code": "BOC",
    "country_code": "PA",
    "city": "Bocas Del Toro"
  },
  {
    "code": "SSQ",
    "country_code": "CA",
    "city": "La Sarre"
  },
  {
    "code": "ULK",
    "country_code": "RU",
    "city": "Lensk"
  },
  {
    "code": "XGW",
    "country_code": "CA",
    "city": "Gananoque"
  },
  {
    "code": "PTL",
    "country_code": "US",
    "city": "Port Armstrong"
  },
  {
    "code": "BVL",
    "country_code": "BO",
    "city": "Baures"
  },
  {
    "code": "XNN",
    "country_code": "CN",
    "city": "Xining"
  },
  {
    "code": "MNX",
    "country_code": "BR",
    "city": "Manicore"
  },
  {
    "code": "GST",
    "country_code": "US",
    "city": "Gustavus"
  },
  {
    "code": "TWD",
    "country_code": "US",
    "city": "Port Townsend"
  },
  {
    "code": "XSE",
    "country_code": "BF",
    "city": "Sebba"
  },
  {
    "code": "KPD",
    "country_code": "US",
    "city": "King Of Prussia"
  },
  {
    "code": "HRZ",
    "country_code": "BR",
    "city": "Horizontina"
  },
  {
    "code": "MTI",
    "country_code": "CV",
    "city": "Mosteiros"
  },
  {
    "code": "ELG",
    "country_code": "DZ",
    "city": "El Golea"
  },
  {
    "code": "IKP",
    "country_code": "AU",
    "city": "Inkerman"
  },
  {
    "code": "UPR",
    "country_code": "PG",
    "city": "Upiara"
  },
  {
    "code": "AEK",
    "country_code": "PG",
    "city": "Aseki"
  },
  {
    "code": "RGE",
    "country_code": "PG",
    "city": "Porgera"
  },
  {
    "code": "TMO",
    "country_code": "VE",
    "city": "Tumeremo"
  },
  {
    "code": "EBU",
    "country_code": "FR",
    "city": "Saint Etienne"
  },
  {
    "code": "GPN",
    "country_code": "AU",
    "city": "Garden Point"
  },
  {
    "code": "SOM",
    "country_code": "VE",
    "city": "San Tome"
  },
  {
    "code": "LBX",
    "country_code": "PH",
    "city": "Lubang"
  },
  {
    "code": "FAJ",
    "country_code": "PR",
    "city": "Fajardo"
  },
  {
    "code": "MZV",
    "country_code": "MY",
    "city": "Mulu"
  },
  {
    "code": "TSV",
    "country_code": "AU",
    "city": "Townsville"
  },
  {
    "code": "EIH",
    "country_code": "AU",
    "city": "Einasleigh"
  },
  {
    "code": "FRY",
    "country_code": "US",
    "city": "Fryeburg"
  },
  {
    "code": "SFN",
    "country_code": "AR",
    "city": "Santa Fe"
  },
  {
    "code": "RAW",
    "country_code": "PG",
    "city": "Arawa"
  },
  {
    "code": "YJO",
    "country_code": "CA",
    "city": "Johnny Mountain"
  },
  {
    "code": "MYN",
    "country_code": "YE",
    "city": "Mareb"
  },
  {
    "code": "MHU",
    "country_code": "AU",
    "city": "Mount Hotham"
  },
  {
    "code": "MEO",
    "country_code": "US",
    "city": "Manteo"
  },
  {
    "code": "GVR",
    "country_code": "BR",
    "city": "Governador Valadares"
  },
  {
    "code": "GUB",
    "country_code": "MX",
    "city": "Guerrero Negro"
  },
  {
    "code": "INA",
    "country_code": "RU",
    "city": "Inta"
  },
  {
    "code": "SJH",
    "country_code": "CO",
    "city": "San Juan Del Cesar"
  },
  {
    "code": "URG",
    "country_code": "BR",
    "city": "Uruguaiana"
  },
  {
    "code": "ZQZ",
    "country_code": "CN",
    "city": "Zhangjiakou"
  },
  {
    "code": "COU",
    "country_code": "US",
    "city": "Columbia"
  },
  {
    "code": "MMI",
    "country_code": "US",
    "city": "Athens"
  },
  {
    "code": "MQU",
    "country_code": "CO",
    "city": "Mariquita"
  },
  {
    "code": "GSQ",
    "country_code": "EG",
    "city": "Shark Elowainat"
  },
  {
    "code": "BPL",
    "country_code": "CN",
    "city": "Bole"
  },
  {
    "code": "RTD",
    "country_code": "US",
    "city": "Rotunda"
  },
  {
    "code": "RYN",
    "country_code": "FR",
    "city": "Royan"
  },
  {
    "code": "СПХ",
    "country_code": "RU",
    "city": "Srednie Pakhachi"
  },
  {
    "code": "KGO",
    "country_code": "UA",
    "city": "Kirovograd"
  },
  {
    "code": "MWT",
    "country_code": "AU",
    "city": "Moolawatana"
  },
  {
    "code": "DKA",
    "country_code": "NG",
    "city": "Katsina"
  },
  {
    "code": "MAY",
    "country_code": "BS",
    "city": "Mangrove Cay"
  },
  {
    "code": "KBT",
    "country_code": "MH",
    "city": "Kaben"
  },
  {
    "code": "KHO",
    "country_code": "ZA",
    "city": "Khoka Moya"
  },
  {
    "code": "USO",
    "country_code": "PG",
    "city": "Usino"
  },
  {
    "code": "KEZ",
    "country_code": "LK",
    "city": "Kelaniya"
  },
  {
    "code": "KSO",
    "country_code": "GR",
    "city": "Kastoria"
  },
  {
    "code": "COC",
    "country_code": "AR",
    "city": "Concordia"
  },
  {
    "code": "BWK",
    "country_code": "HR",
    "city": "Bol"
  },
  {
    "code": "ASK",
    "country_code": "CI",
    "city": "Yamoussoukro"
  },
  {
    "code": "UAX",
    "country_code": "GT",
    "city": "Uaxactun"
  },
  {
    "code": "RCH",
    "country_code": "CO",
    "city": "Riohacha"
  },
  {
    "code": "NTB",
    "country_code": "NO",
    "city": "Notodden"
  },
  {
    "code": "WHO",
    "country_code": "NZ",
    "city": "Franz Josef"
  },
  {
    "code": "GLD",
    "country_code": "US",
    "city": "Goodland"
  },
  {
    "code": "WCH",
    "country_code": "CL",
    "city": "Chaiten"
  },
  {
    "code": "CUM",
    "country_code": "VE",
    "city": "Cumana"
  },
  {
    "code": "CVJ",
    "country_code": "MX",
    "city": "Cuernavaca"
  },
  {
    "code": "NDF",
    "country_code": "AO",
    "city": "Ndalatandos"
  },
  {
    "code": "YTD",
    "country_code": "CA",
    "city": "Thicket Portage"
  },
  {
    "code": "SUJ",
    "country_code": "RO",
    "city": "Satu Mare"
  },
  {
    "code": "ZDO",
    "country_code": "CH",
    "city": "Buchs SG"
  },
  {
    "code": "WUA",
    "country_code": "CN",
    "city": "Wu Hai"
  },
  {
    "code": "AYT",
    "country_code": "TR",
    "city": "Antalya"
  },
  {
    "code": "LGO",
    "country_code": "DE",
    "city": "Langeoog"
  },
  {
    "code": "ACU",
    "country_code": "PA",
    "city": "Achutupo"
  },
  {
    "code": "VIQ",
    "country_code": "TL",
    "city": "Viqueque"
  },
  {
    "code": "XXM",
    "country_code": "SE",
    "city": "Mjolby"
  },
  {
    "code": "THB",
    "country_code": "LS",
    "city": "Thaba-Tseka"
  },
  {
    "code": "MFQ",
    "country_code": "NE",
    "city": "Maradi"
  },
  {
    "code": "ONL",
    "country_code": "US",
    "city": "Oneill"
  },
  {
    "code": "SYB",
    "country_code": "US",
    "city": "Seal Bay"
  },
  {
    "code": "SPC",
    "country_code": "ES",
    "city": "Santa Cruz De La Palma"
  },
  {
    "code": "SEP",
    "country_code": "US",
    "city": "Stephenville"
  },
  {
    "code": "NGE",
    "country_code": "CM",
    "city": "Ngaoundéré"
  },
  {
    "code": "ЮКТ",
    "country_code": "RU",
    "city": "Jukta"
  },
  {
    "code": "ПЛЧ",
    "country_code": "RU",
    "city": "Glade Cheget"
  },
  {
    "code": "SFS",
    "country_code": "PH",
    "city": "Subic Bay"
  },
  {
    "code": "CLJ",
    "country_code": "RO",
    "city": "Cluj"
  },
  {
    "code": "MQE",
    "country_code": "AU",
    "city": "Marqua"
  },
  {
    "code": "BOU",
    "country_code": "FR",
    "city": "Bourges"
  },
  {
    "code": "YDR",
    "country_code": "CA",
    "city": "Broadview"
  },
  {
    "code": "MUS",
    "country_code": "JP",
    "city": "Marcus Island"
  },
  {
    "code": "SNG",
    "country_code": "BO",
    "city": "San Ignacio De Velasco"
  },
  {
    "code": "PMM",
    "country_code": "TH",
    "city": "Phanom Sarakham"
  },
  {
    "code": "RHI",
    "country_code": "US",
    "city": "Rhinelander"
  },
  {
    "code": "HYA",
    "country_code": "US",
    "city": "Hyannis"
  },
  {
    "code": "DYL",
    "country_code": "US",
    "city": "Doylestown"
  },
  {
    "code": "YBY",
    "country_code": "CA",
    "city": "Bonnyville"
  },
  {
    "code": "NMU",
    "country_code": "MH",
    "city": "Namu"
  },
  {
    "code": "RCL",
    "country_code": "VU",
    "city": "Redcliffe"
  },
  {
    "code": "SCB",
    "country_code": "US",
    "city": "Scribner"
  },
  {
    "code": "STG",
    "country_code": "US",
    "city": "Saint George Island"
  },
  {
    "code": "AFY",
    "country_code": "TR",
    "city": "Afyon"
  },
  {
    "code": "MZP",
    "country_code": "NZ",
    "city": "Motueka"
  },
  {
    "code": "GTB",
    "country_code": "MY",
    "city": "Genting"
  },
  {
    "code": "EBH",
    "country_code": "DZ",
    "city": "El Bayadh"
  },
  {
    "code": "LLV",
    "country_code": "CN",
    "city": "Lyuliang"
  },
  {
    "code": "CGP",
    "country_code": "BD",
    "city": "Chittagong"
  },
  {
    "code": "ZGN",
    "country_code": "CN",
    "city": "Zhongshan"
  },
  {
    "code": "MTE",
    "country_code": "BR",
    "city": "Monte Alegre"
  },
  {
    "code": "BTM",
    "country_code": "US",
    "city": "Butte"
  },
  {
    "code": "АЯН",
    "country_code": "RU",
    "city": "Ajan"
  },
  {
    "code": "RID",
    "country_code": "US",
    "city": "Richmond"
  },
  {
    "code": "YGP",
    "country_code": "CA",
    "city": "Gaspe"
  },
  {
    "code": "PQQ",
    "country_code": "AU",
    "city": "Port Macquarie"
  },
  {
    "code": "PBU",
    "country_code": "MM",
    "city": "Putao"
  },
  {
    "code": "RHO",
    "country_code": "GR",
    "city": "Rhodes"
  },
  {
    "code": "YBJ",
    "country_code": "CA",
    "city": "Baie Johan Beetz"
  },
  {
    "code": "VVB",
    "country_code": "MG",
    "city": "Mahanoro"
  },
  {
    "code": "BCT",
    "country_code": "US",
    "city": "Boca Raton"
  },
  {
    "code": "OMR",
    "country_code": "RO",
    "city": "Oradea"
  },
  {
    "code": "WLM",
    "country_code": "US",
    "city": "Waltham"
  },
  {
    "code": "RIS",
    "country_code": "JP",
    "city": "Rishiri"
  },
  {
    "code": "TQL",
    "country_code": "RU",
    "city": "Tarko-Sale"
  },
  {
    "code": "MIL",
    "country_code": "IT",
    "city": "Milan"
  },
  {
    "code": "BHT",
    "country_code": "AU",
    "city": "Brighton Downs"
  },
  {
    "code": "BXZ",
    "country_code": "PG",
    "city": "Bunsil"
  },
  {
    "code": "YSJ",
    "country_code": "CA",
    "city": "Saint John"
  },
  {
    "code": "SFV",
    "country_code": "BR",
    "city": "Santa Fe Do Sul"
  },
  {
    "code": "PBN",
    "country_code": "AO",
    "city": "Porto Amboim"
  },
  {
    "code": "TUV",
    "country_code": "VE",
    "city": "Tucupita"
  },
  {
    "code": "QBX",
    "country_code": "BR",
    "city": "Sobral"
  },
  {
    "code": "COH",
    "country_code": "IN",
    "city": "Cooch Behar"
  },
  {
    "code": "SFU",
    "country_code": "PG",
    "city": "Safia"
  },
  {
    "code": "FYV",
    "country_code": "US",
    "city": "Fayetteville"
  },
  {
    "code": "FEJ",
    "country_code": "BR",
    "city": "Feijo"
  },
  {
    "code": "YWJ",
    "country_code": "CA",
    "city": "Deline"
  },
  {
    "code": "GBP",
    "country_code": "AU",
    "city": "Gamboola"
  },
  {
    "code": "YCG",
    "country_code": "CA",
    "city": "Castlegar"
  },
  {
    "code": "CHP",
    "country_code": "US",
    "city": "Circle Hot Springs"
  },
  {
    "code": "YAF",
    "country_code": "CA",
    "city": "Asbestos Hill"
  },
  {
    "code": "XQT",
    "country_code": "GB",
    "city": "Lichfield"
  },
  {
    "code": "YXZ",
    "country_code": "CA",
    "city": "Wawa"
  },
  {
    "code": "GBN",
    "country_code": "IT",
    "city": "San Giovanni Rotondo"
  },
  {
    "code": "MGJ",
    "country_code": "US",
    "city": "Montgomery"
  },
  {
    "code": "AMQ",
    "country_code": "ID",
    "city": "Ambon"
  },
  {
    "code": "CHO",
    "country_code": "US",
    "city": "Charlottesville"
  },
  {
    "code": "UIZ",
    "country_code": "US",
    "city": "Utica"
  },
  {
    "code": "TNX",
    "country_code": "KH",
    "city": "Stung Treng"
  },
  {
    "code": "RAA",
    "country_code": "PG",
    "city": "Rakanda"
  },
  {
    "code": "BSZ",
    "country_code": "US",
    "city": "Bartletts"
  },
  {
    "code": "JUL",
    "country_code": "PE",
    "city": "Juliaca"
  },
  {
    "code": "ZTF",
    "country_code": "US",
    "city": "Stamford"
  },
  {
    "code": "KES",
    "country_code": "CA",
    "city": "Kelsey"
  },
  {
    "code": "FTL",
    "country_code": "US",
    "city": "Fortuna Ledge"
  },
  {
    "code": "BZE",
    "country_code": "BZ",
    "city": "Belize City"
  },
  {
    "code": "SCL",
    "country_code": "CL",
    "city": "Santiago"
  },
  {
    "code": "SVT",
    "country_code": "BW",
    "city": "Savuti"
  },
  {
    "code": "ZIO",
    "country_code": "DE",
    "city": "Solingen"
  },
  {
    "code": "TSI",
    "country_code": "PG",
    "city": "Tsili Tsili"
  },
  {
    "code": "GRS",
    "country_code": "IT",
    "city": "Grosseto"
  },
  {
    "code": "YLL",
    "country_code": "CA",
    "city": "Lloydminster"
  },
  {
    "code": "LKV",
    "country_code": "US",
    "city": "Lakeview"
  },
  {
    "code": "SJQ",
    "country_code": "ZM",
    "city": "Sesheke"
  },
  {
    "code": "UNU",
    "country_code": "US",
    "city": "Juneau"
  },
  {
    "code": "BAY",
    "country_code": "RO",
    "city": "Baia Mare"
  },
  {
    "code": "NEU",
    "country_code": "LA",
    "city": "Sam Neua"
  },
  {
    "code": "BDU",
    "country_code": "NO",
    "city": "Bardufoss"
  },
  {
    "code": "OMA",
    "country_code": "US",
    "city": "Omaha"
  },
  {
    "code": "LOI",
    "country_code": "BR",
    "city": "Lontras"
  },
  {
    "code": "RZA",
    "country_code": "AR",
    "city": "Santa Cruz"
  },
  {
    "code": "IVG",
    "country_code": "ME",
    "city": "Berane"
  },
  {
    "code": "JAG",
    "country_code": "PK",
    "city": "Jacobabad"
  },
  {
    "code": "SUF",
    "country_code": "IT",
    "city": "Lamezia-Terme"
  },
  {
    "code": "XJA",
    "country_code": "NO",
    "city": "Alvdal"
  },
  {
    "code": "OTC",
    "country_code": "TD",
    "city": "Bol"
  },
  {
    "code": "DOV",
    "country_code": "US",
    "city": "Dover-Cheswold"
  },
  {
    "code": "ONJ",
    "country_code": "JP",
    "city": "Odate Noshiro"
  },
  {
    "code": "CNY",
    "country_code": "US",
    "city": "Moab"
  },
  {
    "code": "SXS",
    "country_code": "MY",
    "city": "Sahabat 16"
  },
  {
    "code": "KLD",
    "country_code": "RU",
    "city": "Tver"
  },
  {
    "code": "YFG",
    "country_code": "CA",
    "city": "Fontanges"
  },
  {
    "code": "SYS",
    "country_code": "RU",
    "city": "Saskylakh"
  },
  {
    "code": "LCX",
    "country_code": "CN",
    "city": "Longyan"
  },
  {
    "code": "XOW",
    "country_code": "AT",
    "city": "Seefeld"
  },
  {
    "code": "WSR",
    "country_code": "ID",
    "city": "Wasior"
  },
  {
    "code": "SCA",
    "country_code": "CO",
    "city": "Santa Catalina"
  },
  {
    "code": "PSY",
    "country_code": "FK",
    "city": "Port Stanley"
  },
  {
    "code": "OAH",
    "country_code": "AF",
    "city": "Shindand"
  },
  {
    "code": "LNQ",
    "country_code": "PG",
    "city": "Loani"
  },
  {
    "code": "PZY",
    "country_code": "SK",
    "city": "Piestany"
  },
  {
    "code": "ELZ",
    "country_code": "US",
    "city": "Wellsville"
  },
  {
    "code": "CCJ",
    "country_code": "IN",
    "city": "Kozhikode"
  },
  {
    "code": "CMQ",
    "country_code": "AU",
    "city": "Clermont"
  },
  {
    "code": "API",
    "country_code": "CO",
    "city": "Apiay"
  },
  {
    "code": "SCH",
    "country_code": "US",
    "city": "Schenectady"
  },
  {
    "code": "DEN",
    "country_code": "US",
    "city": "Denver"
  },
  {
    "code": "CKX",
    "country_code": "US",
    "city": "Chicken"
  },
  {
    "code": "DOU",
    "country_code": "BR",
    "city": "Dourados"
  },
  {
    "code": "DXB",
    "country_code": "AE",
    "city": "Dubai"
  },
  {
    "code": "ZWA",
    "country_code": "MG",
    "city": "Andapa"
  },
  {
    "code": "WEL",
    "country_code": "ZA",
    "city": "Welkom"
  },
  {
    "code": "KUZ",
    "country_code": "KR",
    "city": "Gunsan AB"
  },
  {
    "code": "MKR",
    "country_code": "AU",
    "city": "Meekatharra"
  },
  {
    "code": "ZYM",
    "country_code": "NL",
    "city": "Arnhem"
  },
  {
    "code": "CGS",
    "country_code": "US",
    "city": "College Park"
  },
  {
    "code": "JSM",
    "country_code": "AR",
    "city": "Jose De San Martin"
  },
  {
    "code": "ALL",
    "country_code": "IT",
    "city": "Albenga"
  },
  {
    "code": "MOC",
    "country_code": "BR",
    "city": "Montes Claros"
  },
  {
    "code": "MCA",
    "country_code": "GN",
    "city": "Macenta"
  },
  {
    "code": "RKD",
    "country_code": "US",
    "city": "Rockland"
  },
  {
    "code": "ZEN",
    "country_code": "PG",
    "city": "Zenag"
  },
  {
    "code": "СВЕ",
    "country_code": "RU",
    "city": "Evensk"
  },
  {
    "code": "LJG",
    "country_code": "CN",
    "city": "Lijiang"
  },
  {
    "code": "QWP",
    "country_code": "US",
    "city": "Winter Park"
  },
  {
    "code": "RTB",
    "country_code": "HN",
    "city": "Roatan"
  },
  {
    "code": "ТНЧ",
    "country_code": "RU",
    "city": "Tutonchany"
  },
  {
    "code": "ORK",
    "country_code": "IE",
    "city": "Cork"
  },
  {
    "code": "BIE",
    "country_code": "US",
    "city": "Beatrice"
  },
  {
    "code": "TQN",
    "country_code": "AF",
    "city": "Taluqan"
  },
  {
    "code": "SCY",
    "country_code": "EC",
    "city": "San Cristobal"
  },
  {
    "code": "CRW",
    "country_code": "US",
    "city": "Charleston"
  },
  {
    "code": "RSA",
    "country_code": "AR",
    "city": "Santa Rosa"
  },
  {
    "code": "SHD",
    "country_code": "US",
    "city": "Staunton"
  },
  {
    "code": "ZJN",
    "country_code": "CA",
    "city": "Swan River"
  },
  {
    "code": "PUS",
    "country_code": "KR",
    "city": "Busan"
  },
  {
    "code": "CSZ",
    "country_code": "AR",
    "city": "Coronel Suarez"
  },
  {
    "code": "XGH",
    "country_code": "NO",
    "city": "Flam"
  },
  {
    "code": "OKI",
    "country_code": "JP",
    "city": "Oki Island"
  },
  {
    "code": "MJS",
    "country_code": "MZ",
    "city": "Maganja Da Costa"
  },
  {
    "code": "AGX",
    "country_code": "IN",
    "city": "Agatti Island"
  },
  {
    "code": "WKN",
    "country_code": "PG",
    "city": "Wakunai"
  },
  {
    "code": "NPP",
    "country_code": "AU",
    "city": "Napperby"
  },
  {
    "code": "VDR",
    "country_code": "AR",
    "city": "Villa Dolores"
  },
  {
    "code": "TSR",
    "country_code": "RO",
    "city": "Timisoara"
  },
  {
    "code": "GZM",
    "country_code": "MT",
    "city": "Gozo"
  },
  {
    "code": "UPG",
    "country_code": "ID",
    "city": "Ujung Pandang"
  },
  {
    "code": "CWR",
    "country_code": "AU",
    "city": "Cowarie"
  },
  {
    "code": "BDW",
    "country_code": "AU",
    "city": "Bedford Downs"
  },
  {
    "code": "YVA",
    "country_code": "KM",
    "city": "Moroni"
  },
  {
    "code": "BCS",
    "country_code": "US",
    "city": "Belle Chasse"
  },
  {
    "code": "XMH",
    "country_code": "PF",
    "city": "Manihi"
  },
  {
    "code": "HLE",
    "country_code": "SH",
    "city": "Jamestown (Saint Helena)"
  },
  {
    "code": "KYN",
    "country_code": "GB",
    "city": "Milton Keynes"
  },
  {
    "code": "BTG",
    "country_code": "CF",
    "city": "Batangafo"
  },
  {
    "code": "MPQ",
    "country_code": "JO",
    "city": "Maan"
  },
  {
    "code": "MTO",
    "country_code": "US",
    "city": "Mattoon"
  },
  {
    "code": "ADK",
    "country_code": "US",
    "city": "Adak Island"
  },
  {
    "code": "TAE",
    "country_code": "KR",
    "city": "Daegu"
  },
  {
    "code": "HTM",
    "country_code": "MN",
    "city": "Khatgal"
  },
  {
    "code": "HVE",
    "country_code": "US",
    "city": "Hanksville"
  },
  {
    "code": "NLG",
    "country_code": "US",
    "city": "Nelson Lagoon"
  },
  {
    "code": "GRM",
    "country_code": "US",
    "city": "Grand Marais"
  },
  {
    "code": "AVB",
    "country_code": "IT",
    "city": "Aviano"
  },
  {
    "code": "HEV",
    "country_code": "ES",
    "city": "Huelva"
  },
  {
    "code": "YNI",
    "country_code": "CA",
    "city": "Nitchequon"
  },
  {
    "code": "BXM",
    "country_code": "ID",
    "city": "Batom"
  },
  {
    "code": "ISA",
    "country_code": "AU",
    "city": "Mount Isa"
  },
  {
    "code": "QKS",
    "country_code": "US",
    "city": "Keystone"
  },
  {
    "code": "ATC",
    "country_code": "BS",
    "city": "Arthur's Town"
  },
  {
    "code": "NQI",
    "country_code": "US",
    "city": "Kingsville"
  },
  {
    "code": "CLL",
    "country_code": "US",
    "city": "College Station"
  },
  {
    "code": "NTU",
    "country_code": "US",
    "city": "Oceana"
  },
  {
    "code": "NLV",
    "country_code": "UA",
    "city": "Nikolaev"
  },
  {
    "code": "PHD",
    "country_code": "US",
    "city": "New Philadelphia"
  },
  {
    "code": "ZOS",
    "country_code": "CL",
    "city": "Osorno"
  },
  {
    "code": "PRC",
    "country_code": "US",
    "city": "Prescott"
  },
  {
    "code": "DHB",
    "country_code": "US",
    "city": "Deer Harbor"
  },
  {
    "code": "KDD",
    "country_code": "PK",
    "city": "Khuzdar"
  },
  {
    "code": "BGV",
    "country_code": "BR",
    "city": "Bento Goncalves"
  },
  {
    "code": "MPZ",
    "country_code": "US",
    "city": "Mount Pleasant"
  },
  {
    "code": "ZHY",
    "country_code": "CN",
    "city": "Zhongwei"
  },
  {
    "code": "ZHJ",
    "country_code": "CH",
    "city": "Grindelwald"
  },
  {
    "code": "OBU",
    "country_code": "US",
    "city": "Kobuk"
  },
  {
    "code": "HAL",
    "country_code": "NA",
    "city": "Halali"
  },
  {
    "code": "MTM",
    "country_code": "US",
    "city": "Metlakatla"
  },
  {
    "code": "ZPH",
    "country_code": "US",
    "city": "Zephyrhills"
  },
  {
    "code": "GBM",
    "country_code": "SO",
    "city": "Garbaharey"
  },
  {
    "code": "UAP",
    "country_code": "PF",
    "city": "Ua Pou"
  },
  {
    "code": "ZPO",
    "country_code": "CA",
    "city": "Pine House"
  },
  {
    "code": "KGU",
    "country_code": "MY",
    "city": "Keningau"
  },
  {
    "code": "RDA",
    "country_code": "AU",
    "city": "Rockhampton Downs"
  },
  {
    "code": "YGO",
    "country_code": "CA",
    "city": "Gods Lake Narrows"
  },
  {
    "code": "XFU",
    "country_code": "SE",
    "city": "Tierp"
  },
  {
    "code": "CPM",
    "country_code": "US",
    "city": "Compton"
  },
  {
    "code": "DNF",
    "country_code": "LY",
    "city": "Derna"
  },
  {
    "code": "XUG",
    "country_code": "NO",
    "city": "Holmestrand"
  },
  {
    "code": "LNL",
    "country_code": "CN",
    "city": "Longnan"
  },
  {
    "code": "XUU",
    "country_code": "NO",
    "city": "Stjordal"
  },
  {
    "code": "MZT",
    "country_code": "MX",
    "city": "Mazatlan"
  },
  {
    "code": "ASA",
    "country_code": "ER",
    "city": "Assab"
  },
  {
    "code": "ADU",
    "country_code": "IR",
    "city": "Ardabil"
  },
  {
    "code": "SUA",
    "country_code": "US",
    "city": "Stuart"
  },
  {
    "code": "TJI",
    "country_code": "HN",
    "city": "Trujillo"
  },
  {
    "code": "SHH",
    "country_code": "US",
    "city": "Shishmaref"
  },
  {
    "code": "PLT",
    "country_code": "CO",
    "city": "Plato"
  },
  {
    "code": "YBB",
    "country_code": "CA",
    "city": "Kugaaruk"
  },
  {
    "code": "ORU",
    "country_code": "BO",
    "city": "Oruro"
  },
  {
    "code": "ALI",
    "country_code": "US",
    "city": "Alice"
  },
  {
    "code": "LMZ",
    "country_code": "MZ",
    "city": "Palma"
  },
  {
    "code": "OLB",
    "country_code": "IT",
    "city": "Olbia"
  },
  {
    "code": "LPW",
    "country_code": "US",
    "city": "Little Port Walter"
  },
  {
    "code": "LCQ",
    "country_code": "US",
    "city": "Lake City"
  },
  {
    "code": "MWH",
    "country_code": "US",
    "city": "Moses Lake"
  },
  {
    "code": "UGU",
    "country_code": "ID",
    "city": "Zugapa"
  },
  {
    "code": "IOW",
    "country_code": "US",
    "city": "Iowa City"
  },
  {
    "code": "WHL",
    "country_code": "AU",
    "city": "Welshpool"
  },
  {
    "code": "SFX",
    "country_code": "VE",
    "city": "San Felix"
  },
  {
    "code": "TRM",
    "country_code": "US",
    "city": "Thermal"
  },
  {
    "code": "FUT",
    "country_code": "WF",
    "city": "Futuna Island"
  },
  {
    "code": "BUH",
    "country_code": "RO",
    "city": "Bucharest"
  },
  {
    "code": "UNI",
    "country_code": "VC",
    "city": "Union Island"
  },
  {
    "code": "MFP",
    "country_code": "AU",
    "city": "Manners Creek"
  },
  {
    "code": "PCV",
    "country_code": "MX",
    "city": "Punta Chivato"
  },
  {
    "code": "CXA",
    "country_code": "VE",
    "city": "Caicara Del Orinoco"
  },
  {
    "code": "ADQ",
    "country_code": "US",
    "city": "Kodiak"
  },
  {
    "code": "PKO",
    "country_code": "BJ",
    "city": "Parakou"
  },
  {
    "code": "DMM",
    "country_code": "SA",
    "city": "Dammam"
  },
  {
    "code": "LIF",
    "country_code": "NC",
    "city": "Lifou"
  },
  {
    "code": "THL",
    "country_code": "MM",
    "city": "Tachilek"
  },
  {
    "code": "CUD",
    "country_code": "AU",
    "city": "Caloundra"
  },
  {
    "code": "CIP",
    "country_code": "ZM",
    "city": "Chipata"
  },
  {
    "code": "SJG",
    "country_code": "CO",
    "city": "San Pedro Jagua"
  },
  {
    "code": "YYD",
    "country_code": "CA",
    "city": "Smithers"
  },
  {
    "code": "NST",
    "country_code": "TH",
    "city": "Nakhon Si Thammarat"
  },
  {
    "code": "YJN",
    "country_code": "CA",
    "city": "St Jean"
  },
  {
    "code": "SYM",
    "country_code": "CN",
    "city": "Pu'er"
  },
  {
    "code": "IPT",
    "country_code": "US",
    "city": "Williamsport"
  },
  {
    "code": "CBT",
    "country_code": "AO",
    "city": "Catumbela"
  },
  {
    "code": "MPR",
    "country_code": "US",
    "city": "Mcpherson"
  },
  {
    "code": "MRZ",
    "country_code": "AU",
    "city": "Moree"
  },
  {
    "code": "ZHP",
    "country_code": "CA",
    "city": "High Prairie"
  },
  {
    "code": "HRC",
    "country_code": "KZ",
    "city": "Zhairem"
  },
  {
    "code": "BIM",
    "country_code": "BS",
    "city": "Bimini"
  },
  {
    "code": "YBP",
    "country_code": "CN",
    "city": "Yibin"
  },
  {
    "code": "JOL",
    "country_code": "PH",
    "city": "Jolo"
  },
  {
    "code": "MGA",
    "country_code": "NI",
    "city": "Managua"
  },
  {
    "code": "CNV",
    "country_code": "BR",
    "city": "Canavieiras"
  },
  {
    "code": "GRD",
    "country_code": "US",
    "city": "Greenwood"
  },
  {
    "code": "RDN",
    "country_code": "MY",
    "city": "Redang"
  },
  {
    "code": "NOK",
    "country_code": "BR",
    "city": "Nova Xavantina"
  },
  {
    "code": "AUJ",
    "country_code": "PG",
    "city": "Ambunti"
  },
  {
    "code": "KLK",
    "country_code": "KE",
    "city": "Kalokol"
  },
  {
    "code": "AKJ",
    "country_code": "JP",
    "city": "Asahikawa"
  },
  {
    "code": "CKW",
    "country_code": "AU",
    "city": "Christmas Creek Mine"
  },
  {
    "code": "WMR",
    "country_code": "MG",
    "city": "Mananara"
  },
  {
    "code": "AJA",
    "country_code": "FR",
    "city": "Ajaccio"
  },
  {
    "code": "BNP",
    "country_code": "PK",
    "city": "Bannu"
  },
  {
    "code": "MJR",
    "country_code": "AR",
    "city": "Miramar"
  },
  {
    "code": "SAC",
    "country_code": "US",
    "city": "Sacramento"
  },
  {
    "code": "AWP",
    "country_code": "AU",
    "city": "Austral Downs"
  },
  {
    "code": "CQS",
    "country_code": "BR",
    "city": "Costa Marques"
  },
  {
    "code": "SBW",
    "country_code": "MY",
    "city": "Sibu"
  },
  {
    "code": "TOE",
    "country_code": "TN",
    "city": "Tozeur"
  },
  {
    "code": "LNB",
    "country_code": "VU",
    "city": "Lamen Bay"
  },
  {
    "code": "MKU",
    "country_code": "GA",
    "city": "Makokou"
  },
  {
    "code": "TRJ",
    "country_code": "PG",
    "city": "Tarakbits"
  },
  {
    "code": "CBC",
    "country_code": "AU",
    "city": "Cherrabun"
  },
  {
    "code": "RMS",
    "country_code": "DE",
    "city": "Ramstein"
  },
  {
    "code": "WMI",
    "country_code": "PL",
    "city": "Nowy Dwor Mazowiecki"
  },
  {
    "code": "KAL",
    "country_code": "US",
    "city": "Kaltag"
  },
  {
    "code": "EGE",
    "country_code": "US",
    "city": "Vail"
  },
  {
    "code": "KZN",
    "country_code": "RU",
    "city": "Kazan"
  },
  {
    "code": "FDR",
    "country_code": "US",
    "city": "Frederick"
  },
  {
    "code": "TGJ",
    "country_code": "NC",
    "city": "Tiga"
  },
  {
    "code": "YFO",
    "country_code": "CA",
    "city": "Flin Flon"
  },
  {
    "code": "FDY",
    "country_code": "US",
    "city": "Findlay"
  },
  {
    "code": "YNJ",
    "country_code": "CN",
    "city": "Yanji"
  },
  {
    "code": "AYU",
    "country_code": "PG",
    "city": "Aiyura"
  },
  {
    "code": "PGE",
    "country_code": "PG",
    "city": "Yegepa"
  },
  {
    "code": "JFN",
    "country_code": "US",
    "city": "Jefferson"
  },
  {
    "code": "UTG",
    "country_code": "LS",
    "city": "Quthing"
  },
  {
    "code": "YYE",
    "country_code": "CA",
    "city": "Fort Nelson"
  },
  {
    "code": "HPY",
    "country_code": "US",
    "city": "Baytown"
  },
  {
    "code": "BBS",
    "country_code": "GB",
    "city": "Yateley"
  },
  {
    "code": "SLC",
    "country_code": "US",
    "city": "Salt Lake City"
  },
  {
    "code": "YOT",
    "country_code": "IL",
    "city": "Yotvata"
  },
  {
    "code": "KKC",
    "country_code": "TH",
    "city": "Khon Kaen"
  },
  {
    "code": "BNV",
    "country_code": "PG",
    "city": "Boana"
  },
  {
    "code": "YCX",
    "country_code": "CA",
    "city": "Gagetown"
  },
  {
    "code": "SKH",
    "country_code": "NP",
    "city": "Surkhet"
  },
  {
    "code": "BVD",
    "country_code": "US",
    "city": "Beaver Inlet"
  },
  {
    "code": "AKP",
    "country_code": "US",
    "city": "Anaktuvuk"
  },
  {
    "code": "EAM",
    "country_code": "SA",
    "city": "Nejran"
  },
  {
    "code": "ERA",
    "country_code": "SO",
    "city": "Erigavo"
  },
  {
    "code": "FRO",
    "country_code": "NO",
    "city": "Floro"
  },
  {
    "code": "BRI",
    "country_code": "IT",
    "city": "Bari"
  },
  {
    "code": "YYN",
    "country_code": "CA",
    "city": "Swift Current"
  },
  {
    "code": "NLT",
    "country_code": "CN",
    "city": "Xinyuan"
  },
  {
    "code": "ARF",
    "country_code": "CO",
    "city": "Acaricuara"
  },
  {
    "code": "VVO",
    "country_code": "RU",
    "city": "Vladivostok"
  },
  {
    "code": "DGR",
    "country_code": "NZ",
    "city": "Dargaville"
  },
  {
    "code": "HOF",
    "country_code": "SA",
    "city": "Hofuf"
  },
  {
    "code": "PNJ",
    "country_code": "CN",
    "city": "Peng Lai"
  },
  {
    "code": "YFE",
    "country_code": "CA",
    "city": "Forestville"
  },
  {
    "code": "UKH",
    "country_code": "OM",
    "city": "Mukhaizna"
  },
  {
    "code": "NSO",
    "country_code": "AU",
    "city": "Scone"
  },
  {
    "code": "DLL",
    "country_code": "US",
    "city": "Dillon"
  },
  {
    "code": "QMK",
    "country_code": "GL",
    "city": "Niaqornaarsuk"
  },
  {
    "code": "WMD",
    "country_code": "MG",
    "city": "Mandabe"
  },
  {
    "code": "BYL",
    "country_code": "LR",
    "city": "Bella Yella"
  },
  {
    "code": "SGB",
    "country_code": "PG",
    "city": "Singaua"
  },
  {
    "code": "PMH",
    "country_code": "US",
    "city": "Portsmouth"
  },
  {
    "code": "ZMZ",
    "country_code": "NO",
    "city": "Bjerka"
  },
  {
    "code": "WBR",
    "country_code": "US",
    "city": "Big Rapids"
  },
  {
    "code": "ERT",
    "country_code": "MN",
    "city": "Erdenet"
  },
  {
    "code": "KST",
    "country_code": "SD",
    "city": "Kosti"
  },
  {
    "code": "NWP",
    "country_code": "CA",
    "city": "Argentia"
  },
  {
    "code": "TUO",
    "country_code": "NZ",
    "city": "Taupo"
  },
  {
    "code": "LPP",
    "country_code": "FI",
    "city": "Lappeenranta"
  },
  {
    "code": "TLW",
    "country_code": "PG",
    "city": "Talasea"
  },
  {
    "code": "PBY",
    "country_code": "AU",
    "city": "Peppers Palm Bay"
  },
  {
    "code": "HBG",
    "country_code": "US",
    "city": "Hattiesburg"
  },
  {
    "code": "XKZ",
    "country_code": "NO",
    "city": "Vinstra"
  },
  {
    "code": "PPF",
    "country_code": "US",
    "city": "Parsons"
  },
  {
    "code": "MUT",
    "country_code": "US",
    "city": "Muscatine"
  },
  {
    "code": "INN",
    "country_code": "AT",
    "city": "Innsbruck"
  },
  {
    "code": "BMF",
    "country_code": "CF",
    "city": "Bakouma"
  },
  {
    "code": "BZN",
    "country_code": "US",
    "city": "Belgrade"
  },
  {
    "code": "WDN",
    "country_code": "US",
    "city": "Waldron Island"
  },
  {
    "code": "IOM",
    "country_code": "IM",
    "city": "Isle Of Man"
  },
  {
    "code": "FLO",
    "country_code": "US",
    "city": "Florence"
  },
  {
    "code": "IGR",
    "country_code": "AR",
    "city": "Iguazu"
  },
  {
    "code": "KPV",
    "country_code": "US",
    "city": "Perryville"
  },
  {
    "code": "CZB",
    "country_code": "BR",
    "city": "Cruz Alta"
  },
  {
    "code": "KDX",
    "country_code": "SD",
    "city": "Kadugli"
  },
  {
    "code": "YHE",
    "country_code": "CA",
    "city": "Hope"
  },
  {
    "code": "GSS",
    "country_code": "ZA",
    "city": "Sabi Sabi"
  },
  {
    "code": "YJT",
    "country_code": "CA",
    "city": "Stephenville"
  },
  {
    "code": "PEF",
    "country_code": "DE",
    "city": "Peenemuende"
  },
  {
    "code": "MGO",
    "country_code": "GA",
    "city": "Manega"
  },
  {
    "code": "CSQ",
    "country_code": "US",
    "city": "Creston"
  },
  {
    "code": "FYU",
    "country_code": "US",
    "city": "Fort Yukon"
  },
  {
    "code": "EDL",
    "country_code": "KE",
    "city": "Eldoret"
  },
  {
    "code": "YSK",
    "country_code": "CA",
    "city": "Sanikiluaq"
  },
  {
    "code": "LCN",
    "country_code": "AU",
    "city": "Balcanoona"
  },
  {
    "code": "XBL",
    "country_code": "ET",
    "city": "Buno Bedelle"
  },
  {
    "code": "PSJ",
    "country_code": "ID",
    "city": "Poso"
  },
  {
    "code": "BQG",
    "country_code": "RU",
    "city": "Bogorodskoye"
  },
  {
    "code": "OBA",
    "country_code": "AU",
    "city": "Oban"
  },
  {
    "code": "BBO",
    "country_code": "SO",
    "city": "Berbera"
  },
  {
    "code": "EVN",
    "country_code": "AM",
    "city": "Yerevan"
  },
  {
    "code": "VAT",
    "country_code": "MG",
    "city": "Vatomandry"
  },
  {
    "code": "JSU",
    "country_code": "GL",
    "city": "Maniitsoq"
  },
  {
    "code": "RBR",
    "country_code": "BR",
    "city": "Rio Branco"
  },
  {
    "code": "TSL",
    "country_code": "MX",
    "city": "Tamuin"
  },
  {
    "code": "CYT",
    "country_code": "US",
    "city": "Yakataga"
  },
  {
    "code": "BZO",
    "country_code": "IT",
    "city": "Bolzano"
  },
  {
    "code": "SRC",
    "country_code": "US",
    "city": "Searcy"
  },
  {
    "code": "OXD",
    "country_code": "US",
    "city": "Oxford"
  },
  {
    "code": "OMD",
    "country_code": "NA",
    "city": "Oranjemund"
  },
  {
    "code": "LVM",
    "country_code": "US",
    "city": "Livingston"
  },
  {
    "code": "TPO",
    "country_code": "US",
    "city": "Tanalian Point"
  },
  {
    "code": "LUW",
    "country_code": "ID",
    "city": "Luwuk"
  },
  {
    "code": "ITA",
    "country_code": "BR",
    "city": "Itacoatiara"
  },
  {
    "code": "NGQ",
    "country_code": "CN",
    "city": "Shiquanhe"
  },
  {
    "code": "WSN",
    "country_code": "US",
    "city": "South Naknek"
  },
  {
    "code": "YGM",
    "country_code": "CA",
    "city": "Gimli"
  },
  {
    "code": "GYI",
    "country_code": "RW",
    "city": "Gisenyi"
  },
  {
    "code": "XGG",
    "country_code": "BF",
    "city": "Gorom-Gorom"
  },
  {
    "code": "HDN",
    "country_code": "US",
    "city": "Hayden"
  },
  {
    "code": "RIN",
    "country_code": "SB",
    "city": "Ringi Cove"
  },
  {
    "code": "CTU",
    "country_code": "CN",
    "city": "Chengdu"
  },
  {
    "code": "XPH",
    "country_code": "CA",
    "city": "Port Hope"
  },
  {
    "code": "BVK",
    "country_code": "BO",
    "city": "Huacaraje"
  },
  {
    "code": "QCU",
    "country_code": "GL",
    "city": "Akunnaaq"
  },
  {
    "code": "BHX",
    "country_code": "GB",
    "city": "Birmingham"
  },
  {
    "code": "VAR",
    "country_code": "BG",
    "city": "Varna"
  },
  {
    "code": "MVS",
    "country_code": "BR",
    "city": "Mucuri"
  },
  {
    "code": "ALQ",
    "country_code": "BR",
    "city": "Alegrete"
  },
  {
    "code": "WDA",
    "country_code": "YE",
    "city": "Wadi Ain"
  },
  {
    "code": "PUM",
    "country_code": "ID",
    "city": "Pomala"
  },
  {
    "code": "PBP",
    "country_code": "CR",
    "city": "Punta Islita"
  },
  {
    "code": "VAK",
    "country_code": "US",
    "city": "Chevak"
  },
  {
    "code": "ZXO",
    "country_code": "NO",
    "city": "Fauske"
  },
  {
    "code": "KRI",
    "country_code": "PG",
    "city": "Kikori"
  },
  {
    "code": "XGS",
    "country_code": "NO",
    "city": "Gjerstad"
  },
  {
    "code": "IRC",
    "country_code": "US",
    "city": "Circle"
  },
  {
    "code": "DPS",
    "country_code": "ID",
    "city": "Denpasar (Bali)"
  },
  {
    "code": "AAX",
    "country_code": "BR",
    "city": "Araxa"
  },
  {
    "code": "TAL",
    "country_code": "US",
    "city": "Tanana"
  },
  {
    "code": "TGN",
    "country_code": "AU",
    "city": "Traralgon"
  },
  {
    "code": "MPS",
    "country_code": "US",
    "city": "Mount Pleasant"
  },
  {
    "code": "JAX",
    "country_code": "US",
    "city": "Jacksonville"
  },
  {
    "code": "HWD",
    "country_code": "US",
    "city": "Hayward"
  },
  {
    "code": "LRQ",
    "country_code": "CA",
    "city": "Laurie River"
  },
  {
    "code": "TTU",
    "country_code": "MA",
    "city": "Tetuan"
  },
  {
    "code": "RVC",
    "country_code": "LR",
    "city": "Rivercess"
  },
  {
    "code": "YBH",
    "country_code": "CA",
    "city": "Bull Harbour"
  },
  {
    "code": "WEF",
    "country_code": "CN",
    "city": "Weifang"
  },
  {
    "code": "BVZ",
    "country_code": "AU",
    "city": "Beverley Springs"
  },
  {
    "code": "RHP",
    "country_code": "NP",
    "city": "Ramechhap"
  },
  {
    "code": "CFP",
    "country_code": "AU",
    "city": "Carpentaria Downs"
  },
  {
    "code": "OYO",
    "country_code": "AR",
    "city": "Tres Arroyos"
  },
  {
    "code": "BFJ",
    "country_code": "CN",
    "city": "Bijie"
  },
  {
    "code": "DSO",
    "country_code": "KP",
    "city": "Sondok"
  },
  {
    "code": "LWC",
    "country_code": "US",
    "city": "Lawrence"
  },
  {
    "code": "BFO",
    "country_code": "ZW",
    "city": "Buffalo Range"
  },
  {
    "code": "ZAS",
    "country_code": "CN",
    "city": "Shunde"
  },
  {
    "code": "YFR",
    "country_code": "CA",
    "city": "Fort Resolution"
  },
  {
    "code": "AHS",
    "country_code": "HN",
    "city": "Ahuas"
  },
  {
    "code": "RZV",
    "country_code": "TR",
    "city": "Rize"
  },
  {
    "code": "ZEJ",
    "country_code": "DE",
    "city": "Gelsenkirchen"
  },
  {
    "code": "RUN",
    "country_code": "RE",
    "city": "Saint Denis de la Reunion"
  },
  {
    "code": "ANU",
    "country_code": "AG",
    "city": "Antigua"
  },
  {
    "code": "TTH",
    "country_code": "OM",
    "city": "Thumrait"
  },
  {
    "code": "TNF",
    "country_code": "FR",
    "city": "Toussus-Le-Noble"
  },
  {
    "code": "PZO",
    "country_code": "VE",
    "city": "Puerto Ordaz"
  },
  {
    "code": "KCC",
    "country_code": "US",
    "city": "Coffman Cove"
  },
  {
    "code": "TNA",
    "country_code": "CN",
    "city": "Jinan"
  },
  {
    "code": "LSE",
    "country_code": "US",
    "city": "La Crosse"
  },
  {
    "code": "WAE",
    "country_code": "SA",
    "city": "Wadi Ad Dawasir"
  },
  {
    "code": "CDW",
    "country_code": "US",
    "city": "Caldwell"
  },
  {
    "code": "NNM",
    "country_code": "RU",
    "city": "Naryan-Mar"
  },
  {
    "code": "MNO",
    "country_code": "CD",
    "city": "Manono"
  },
  {
    "code": "YSA",
    "country_code": "CA",
    "city": "Sable Island"
  },
  {
    "code": "INS",
    "country_code": "US",
    "city": "Indian Springs"
  },
  {
    "code": "JOT",
    "country_code": "US",
    "city": "Joliet"
  },
  {
    "code": "VLS",
    "country_code": "VU",
    "city": "Valesdir"
  },
  {
    "code": "BHO",
    "country_code": "IN",
    "city": "Bhopal"
  },
  {
    "code": "PWR",
    "country_code": "US",
    "city": "Port Walter"
  },
  {
    "code": "ATF",
    "country_code": "EC",
    "city": "Ambato"
  },
  {
    "code": "DVP",
    "country_code": "AU",
    "city": "Davenport Downs"
  },
  {
    "code": "NSR",
    "country_code": "BR",
    "city": "São Raimundo Nonato"
  },
  {
    "code": "RAH",
    "country_code": "SA",
    "city": "Rafha"
  },
  {
    "code": "MGP",
    "country_code": "PG",
    "city": "Manga"
  },
  {
    "code": "KUE",
    "country_code": "SB",
    "city": "Kukundu"
  },
  {
    "code": "ZIB",
    "country_code": "DK",
    "city": "Nyborg"
  },
  {
    "code": "CET",
    "country_code": "FR",
    "city": "Cholet"
  },
  {
    "code": "EPT",
    "country_code": "PG",
    "city": "Eliptamin"
  },
  {
    "code": "RKC",
    "country_code": "US",
    "city": "Yreka"
  },
  {
    "code": "ETE",
    "country_code": "ET",
    "city": "Genda Wuha"
  },
  {
    "code": "VRK",
    "country_code": "FI",
    "city": "Joroinen"
  },
  {
    "code": "HET",
    "country_code": "CN",
    "city": "Hohhot"
  },
  {
    "code": "TVY",
    "country_code": "MM",
    "city": "Dawe"
  },
  {
    "code": "BEQ",
    "country_code": "GB",
    "city": "Bury St Edmunds"
  },
  {
    "code": "HEK",
    "country_code": "CN",
    "city": "Heihe"
  },
  {
    "code": "LQN",
    "country_code": "AF",
    "city": "Qala Nau"
  },
  {
    "code": "XBE",
    "country_code": "CA",
    "city": "Bearskin Lake"
  },
  {
    "code": "TXE",
    "country_code": "ID",
    "city": "Takengon"
  },
  {
    "code": "KPN",
    "country_code": "US",
    "city": "Kipnuk"
  },
  {
    "code": "JRS",
    "country_code": "IL",
    "city": "Jerusalem"
  },
  {
    "code": "SDD",
    "country_code": "AO",
    "city": "Lubango"
  },
  {
    "code": "GOU",
    "country_code": "CM",
    "city": "Garoua"
  },
  {
    "code": "TIL",
    "country_code": "CA",
    "city": "Inverlake"
  },
  {
    "code": "FRN",
    "country_code": "US",
    "city": "Fort Richardson"
  },
  {
    "code": "ZPL",
    "country_code": "DE",
    "city": "Recklinghausen"
  },
  {
    "code": "BTR",
    "country_code": "US",
    "city": "Baton Rouge"
  },
  {
    "code": "AEO",
    "country_code": "MR",
    "city": "Aioun El Atrouss"
  },
  {
    "code": "BFS",
    "country_code": "GB",
    "city": "Belfast"
  },
  {
    "code": "ALC",
    "country_code": "ES",
    "city": "Alicante"
  },
  {
    "code": "MTW",
    "country_code": "US",
    "city": "Manitowoc"
  },
  {
    "code": "DOP",
    "country_code": "NP",
    "city": "Dolpa"
  },
  {
    "code": "GEV",
    "country_code": "SE",
    "city": "Gallivare"
  },
  {
    "code": "CUV",
    "country_code": "VE",
    "city": "Casigua"
  },
  {
    "code": "КЗЧ",
    "country_code": "RU",
    "city": "Kazachinsk"
  },
  {
    "code": "UTM",
    "country_code": "US",
    "city": "Tunica"
  },
  {
    "code": "YBE",
    "country_code": "CA",
    "city": "Uranium City"
  },
  {
    "code": "ZVB",
    "country_code": "NO",
    "city": "Brumunddal"
  },
  {
    "code": "TUN",
    "country_code": "TN",
    "city": "Tunis"
  },
  {
    "code": "VBV",
    "country_code": "FJ",
    "city": "Vanuabalavu"
  },
  {
    "code": "SOT",
    "country_code": "FI",
    "city": "Sodankyla"
  },
  {
    "code": "YPQ",
    "country_code": "CA",
    "city": "Peterborough"
  },
  {
    "code": "STD",
    "country_code": "VE",
    "city": "Santo Domingo"
  },
  {
    "code": "ARR",
    "country_code": "AR",
    "city": "Alto Rio Senguerr"
  },
  {
    "code": "FNU",
    "country_code": "IT",
    "city": "Oristano"
  },
  {
    "code": "WLH",
    "country_code": "VU",
    "city": "Walaha"
  },
  {
    "code": "MBX",
    "country_code": "SI",
    "city": "Maribor"
  },
  {
    "code": "MVV",
    "country_code": "FR",
    "city": "Megeve"
  },
  {
    "code": "XVG",
    "country_code": "GB",
    "city": "Darlington"
  },
  {
    "code": "ZXX",
    "country_code": "NO",
    "city": "Rade"
  },
  {
    "code": "CPX",
    "country_code": "PR",
    "city": "Culebra"
  },
  {
    "code": "HEL",
    "country_code": "FI",
    "city": "Helsinki"
  },
  {
    "code": "MQJ",
    "country_code": "RU",
    "city": "Khonu"
  },
  {
    "code": "MOP",
    "country_code": "US",
    "city": "Mount Pleasant"
  },
  {
    "code": "MUC",
    "country_code": "DE",
    "city": "Munich"
  },
  {
    "code": "RZR",
    "country_code": "IR",
    "city": "Ramsar"
  },
  {
    "code": "DOL",
    "country_code": "FR",
    "city": "Deauville"
  },
  {
    "code": "AUM",
    "country_code": "US",
    "city": "Austin"
  },
  {
    "code": "KOT",
    "country_code": "US",
    "city": "Kotlik"
  },
  {
    "code": "COW",
    "country_code": "CL",
    "city": "Coquimbo"
  },
  {
    "code": "HIA",
    "country_code": "CN",
    "city": "Huai'an"
  },
  {
    "code": "KGS",
    "country_code": "GR",
    "city": "Kos"
  },
  {
    "code": "OAK",
    "country_code": "US",
    "city": "Oakland"
  },
  {
    "code": "NSK",
    "country_code": "RU",
    "city": "Noril'sk"
  },
  {
    "code": "MNS",
    "country_code": "ZM",
    "city": "Mansa"
  },
  {
    "code": "ZRH",
    "country_code": "CH",
    "city": "Zurich"
  },
  {
    "code": "CBB",
    "country_code": "BO",
    "city": "Cochabamba"
  },
  {
    "code": "GGA",
    "country_code": "ES",
    "city": "La Graciosa"
  },
  {
    "code": "KWS",
    "country_code": "SB",
    "city": "Kwailabesi"
  },
  {
    "code": "KYT",
    "country_code": "MM",
    "city": "Kyauktaw"
  },
  {
    "code": "LPC",
    "country_code": "US",
    "city": "Lompoc"
  },
  {
    "code": "FRE",
    "country_code": "SB",
    "city": "Fera Island"
  },
  {
    "code": "MPL",
    "country_code": "FR",
    "city": "Montpellier"
  },
  {
    "code": "BPB",
    "country_code": "PG",
    "city": "Boridi"
  },
  {
    "code": "SVQ",
    "country_code": "ES",
    "city": "Sevilla"
  },
  {
    "code": "URR",
    "country_code": "CO",
    "city": "Urrao"
  },
  {
    "code": "SLK",
    "country_code": "US",
    "city": "Saranac Lake"
  },
  {
    "code": "ASH",
    "country_code": "US",
    "city": "Nashua"
  },
  {
    "code": "NCJ",
    "country_code": "AR",
    "city": "Sunchales"
  },
  {
    "code": "OMC",
    "country_code": "PH",
    "city": "Ormoc"
  },
  {
    "code": "COP",
    "country_code": "US",
    "city": "Cooperstown"
  },
  {
    "code": "MYV",
    "country_code": "US",
    "city": "Marysville"
  },
  {
    "code": "SCX",
    "country_code": "MX",
    "city": "Salina Cruz"
  },
  {
    "code": "XQM",
    "country_code": "GB",
    "city": "Market Harborough"
  },
  {
    "code": "YLS",
    "country_code": "CA",
    "city": "Lebel-Sur-Quevillon"
  },
  {
    "code": "АДМ",
    "country_code": "RU",
    "city": "Adamovka"
  },
  {
    "code": "OTY",
    "country_code": "PG",
    "city": "Oria"
  },
  {
    "code": "MGH",
    "country_code": "ZA",
    "city": "Margate"
  },
  {
    "code": "SDC",
    "country_code": "GY",
    "city": "Sandcreek"
  },
  {
    "code": "OHT",
    "country_code": "PK",
    "city": "Kohat"
  },
  {
    "code": "CEP",
    "country_code": "BO",
    "city": "Concepcion"
  },
  {
    "code": "ATQ",
    "country_code": "IN",
    "city": "Amritsar"
  },
  {
    "code": "BKF",
    "country_code": "US",
    "city": "Katmai National Park"
  },
  {
    "code": "SFD",
    "country_code": "VE",
    "city": "San Fernando De Apure"
  },
  {
    "code": "CGN",
    "country_code": "DE",
    "city": "Cologne"
  },
  {
    "code": "WRI",
    "country_code": "US",
    "city": "Wrightstown"
  },
  {
    "code": "DMB",
    "country_code": "KZ",
    "city": "Taraz"
  },
  {
    "code": "HLH",
    "country_code": "CN",
    "city": "Ulanhot"
  },
  {
    "code": "VDC",
    "country_code": "BR",
    "city": "Vitoria Da Conquista"
  },
  {
    "code": "SUQ",
    "country_code": "EC",
    "city": "Sucua"
  },
  {
    "code": "CRB",
    "country_code": "AU",
    "city": "Collarenebri"
  },
  {
    "code": "XOL",
    "country_code": "NO",
    "city": "Myrdal"
  },
  {
    "code": "MJL",
    "country_code": "GA",
    "city": "Mouila"
  },
  {
    "code": "IBA",
    "country_code": "NG",
    "city": "Ibadan"
  },
  {
    "code": "MZJ",
    "country_code": "US",
    "city": "Marana"
  },
  {
    "code": "JIM",
    "country_code": "ET",
    "city": "Jimma"
  },
  {
    "code": "CYF",
    "country_code": "US",
    "city": "Chefornak"
  },
  {
    "code": "ACX",
    "country_code": "CN",
    "city": "Xingyi"
  },
  {
    "code": "GWN",
    "country_code": "PG",
    "city": "Gnarowein"
  },
  {
    "code": "TGV",
    "country_code": "BG",
    "city": "Targovishte"
  },
  {
    "code": "PDN",
    "country_code": "AU",
    "city": "Parndana"
  },
  {
    "code": "RKU",
    "country_code": "PG",
    "city": "Yule Island"
  },
  {
    "code": "CFR",
    "country_code": "FR",
    "city": "Caen"
  },
  {
    "code": "XTO",
    "country_code": "AU",
    "city": "Taroom"
  },
  {
    "code": "NTT",
    "country_code": "TO",
    "city": "Niuatoputapu"
  },
  {
    "code": "MAJ",
    "country_code": "MH",
    "city": "Majuro"
  },
  {
    "code": "FBD",
    "country_code": "AF",
    "city": "Faizabad"
  },
  {
    "code": "KFZ",
    "country_code": "AL",
    "city": "Kukes"
  },
  {
    "code": "CEJ",
    "country_code": "UA",
    "city": "Chernihiv"
  },
  {
    "code": "ROD",
    "country_code": "ZA",
    "city": "Robertson"
  },
  {
    "code": "XSA",
    "country_code": "US",
    "city": "Tappahannock"
  },
  {
    "code": "WSH",
    "country_code": "US",
    "city": "Shirley"
  },
  {
    "code": "QUO",
    "country_code": "NG",
    "city": "Uyo"
  },
  {
    "code": "PAV",
    "country_code": "BR",
    "city": "Paulo Afonso"
  },
  {
    "code": "ООЛ",
    "country_code": "RU",
    "city": "Omolon"
  },
  {
    "code": "ONX",
    "country_code": "PA",
    "city": "Colon"
  },
  {
    "code": "MHH",
    "country_code": "BS",
    "city": "Marsh Harbour"
  },
  {
    "code": "OBN",
    "country_code": "GB",
    "city": "Oban"
  },
  {
    "code": "PYX",
    "country_code": "TH",
    "city": "Pattaya"
  },
  {
    "code": "NAS",
    "country_code": "BS",
    "city": "Nassau"
  },
  {
    "code": "XUV",
    "country_code": "NO",
    "city": "Storekvina"
  },
  {
    "code": "BMV",
    "country_code": "VN",
    "city": "Banmethuot"
  },
  {
    "code": "ZUH",
    "country_code": "CN",
    "city": "Zhuhai"
  },
  {
    "code": "WON",
    "country_code": "AU",
    "city": "Wondoola"
  },
  {
    "code": "ZSY",
    "country_code": "US",
    "city": "Scottsdale"
  },
  {
    "code": "LOZ",
    "country_code": "US",
    "city": "London"
  },
  {
    "code": "RKY",
    "country_code": "AU",
    "city": "Rokeby"
  },
  {
    "code": "БГГ",
    "country_code": "RU",
    "city": "Buguruslan"
  },
  {
    "code": "SYC",
    "country_code": "PE",
    "city": "Shiringayoc"
  },
  {
    "code": "KWH",
    "country_code": "AF",
    "city": "Khwahan"
  },
  {
    "code": "ONQ",
    "country_code": "TR",
    "city": "Zonguldak"
  },
  {
    "code": "ILM",
    "country_code": "US",
    "city": "Wilmington"
  },
  {
    "code": "КОС",
    "country_code": "RU",
    "city": "Koslan"
  },
  {
    "code": "GDO",
    "country_code": "VE",
    "city": "Guasdualito"
  },
  {
    "code": "LAN",
    "country_code": "US",
    "city": "Lansing"
  },
  {
    "code": "BIC",
    "country_code": "US",
    "city": "Big Creek"
  },
  {
    "code": "CXO",
    "country_code": "US",
    "city": "Conroe"
  },
  {
    "code": "SEB",
    "country_code": "LY",
    "city": "Sebha"
  },
  {
    "code": "FLW",
    "country_code": "PT",
    "city": "Flores Island (Azores)"
  },
  {
    "code": "MLE",
    "country_code": "MV",
    "city": "Male"
  },
  {
    "code": "STR",
    "country_code": "DE",
    "city": "Stuttgart"
  },
  {
    "code": "GUX",
    "country_code": "IN",
    "city": "Guna"
  },
  {
    "code": "WOT",
    "country_code": "TW",
    "city": "Wonan"
  },
  {
    "code": "OYP",
    "country_code": "GF",
    "city": "St Georges de l'Oyapock"
  },
  {
    "code": "OUG",
    "country_code": "BF",
    "city": "Ouahigouya"
  },
  {
    "code": "HWK",
    "country_code": "AU",
    "city": "Hawker"
  },
  {
    "code": "ЧГД",
    "country_code": "RU",
    "city": "Chegdomyn"
  },
  {
    "code": "YXR",
    "country_code": "CA",
    "city": "Earlton"
  },
  {
    "code": "BEV",
    "country_code": "IL",
    "city": "Beer Sheba"
  },
  {
    "code": "CJM",
    "country_code": "TH",
    "city": "Chumphon"
  },
  {
    "code": "ESK",
    "country_code": "TR",
    "city": "Eskisehir"
  },
  {
    "code": "CHG",
    "country_code": "CN",
    "city": "Chaoyang"
  },
  {
    "code": "GAA",
    "country_code": "CO",
    "city": "Guamal"
  },
  {
    "code": "CNE",
    "country_code": "US",
    "city": "Canon City"
  },
  {
    "code": "YTK",
    "country_code": "CA",
    "city": "Tulugak"
  },
  {
    "code": "SGN",
    "country_code": "VN",
    "city": "Ho Chi Minh City"
  },
  {
    "code": "NUU",
    "country_code": "KE",
    "city": "Nakuru"
  },
  {
    "code": "SYD",
    "country_code": "AU",
    "city": "Sydney"
  },
  {
    "code": "OSW",
    "country_code": "RU",
    "city": "Orsk"
  },
  {
    "code": "BLM",
    "country_code": "US",
    "city": "Belmar - Farmingdale"
  },
  {
    "code": "VME",
    "country_code": "AR",
    "city": "Villa Mercedes"
  },
  {
    "code": "RNO",
    "country_code": "US",
    "city": "Reno"
  },
  {
    "code": "AOR",
    "country_code": "MY",
    "city": "Alor Setar"
  },
  {
    "code": "CFI",
    "country_code": "AU",
    "city": "Camfield"
  },
  {
    "code": "MHG",
    "country_code": "DE",
    "city": "Mannheim"
  },
  {
    "code": "GGG",
    "country_code": "US",
    "city": "Longview"
  },
  {
    "code": "SQA",
    "country_code": "US",
    "city": "Santa Ynez"
  },
  {
    "code": "DTH",
    "country_code": "US",
    "city": "Death Valley"
  },
  {
    "code": "VYI",
    "country_code": "RU",
    "city": "Vilyuisk"
  },
  {
    "code": "MKL",
    "country_code": "US",
    "city": "Jackson"
  },
  {
    "code": "CZT",
    "country_code": "US",
    "city": "Carrizo Springs"
  },
  {
    "code": "BGS",
    "country_code": "RU",
    "city": "Boguchany"
  },
  {
    "code": "HEZ",
    "country_code": "US",
    "city": "Natchez"
  },
  {
    "code": "IFN",
    "country_code": "IR",
    "city": "Isfahan"
  },
  {
    "code": "MWK",
    "country_code": "ID",
    "city": "Matak"
  },
  {
    "code": "MGQ",
    "country_code": "SO",
    "city": "Mogadishu"
  },
  {
    "code": "MRW",
    "country_code": "DK",
    "city": "Maribo"
  },
  {
    "code": "PHE",
    "country_code": "AU",
    "city": "Port Hedland"
  },
  {
    "code": "CPI",
    "country_code": "PG",
    "city": "Cape Orford"
  },
  {
    "code": "LCL",
    "country_code": "CU",
    "city": "La Coloma"
  },
  {
    "code": "PUW",
    "country_code": "US",
    "city": "Pullman"
  },
  {
    "code": "KIT",
    "country_code": "GR",
    "city": "Kithira"
  },
  {
    "code": "OBT",
    "country_code": "US",
    "city": "Oakland"
  },
  {
    "code": "UIK",
    "country_code": "RU",
    "city": "Ust-Ilimsk"
  },
  {
    "code": "KAS",
    "country_code": "NA",
    "city": "Karasburg"
  },
  {
    "code": "FNE",
    "country_code": "PG",
    "city": "Fane"
  },
  {
    "code": "AJK",
    "country_code": "IR",
    "city": "Araak"
  },
  {
    "code": "MFO",
    "country_code": "PG",
    "city": "Manguna"
  },
  {
    "code": "SCP",
    "country_code": "FR",
    "city": "St Crepin"
  },
  {
    "code": "SZE",
    "country_code": "ET",
    "city": "Semera"
  },
  {
    "code": "TMN",
    "country_code": "KI",
    "city": "Tamana Island"
  },
  {
    "code": "RAM",
    "country_code": "AU",
    "city": "Ramingining"
  },
  {
    "code": "WGY",
    "country_code": "GA",
    "city": "Wagny"
  },
  {
    "code": "HBD",
    "country_code": "PG",
    "city": "Habi"
  },
  {
    "code": "BBR",
    "country_code": "GP",
    "city": "Basse Terre"
  },
  {
    "code": "PAG",
    "country_code": "PH",
    "city": "Pagadian"
  },
  {
    "code": "PDA",
    "country_code": "CO",
    "city": "Puerto Inirida"
  },
  {
    "code": "PDS",
    "country_code": "MX",
    "city": "Piedras Negras"
  },
  {
    "code": "ICS",
    "country_code": "US",
    "city": "Cascade"
  },
  {
    "code": "QLV",
    "country_code": "DE",
    "city": "Leverkusen"
  },
  {
    "code": "OIA",
    "country_code": "BR",
    "city": "Ourilandia"
  },
  {
    "code": "TGB",
    "country_code": "PH",
    "city": "Tagbita"
  },
  {
    "code": "YAT",
    "country_code": "CA",
    "city": "Attawapiskat"
  },
  {
    "code": "BCY",
    "country_code": "ET",
    "city": "Bulchi"
  },
  {
    "code": "XZB",
    "country_code": "CA",
    "city": "Casselman"
  },
  {
    "code": "SWY",
    "country_code": "MY",
    "city": "Sitiawan"
  },
  {
    "code": "PGU",
    "country_code": "IR",
    "city": "Ala'Marvdasht"
  },
  {
    "code": "FTW",
    "country_code": "US",
    "city": "Fort Worth"
  },
  {
    "code": "MEG",
    "country_code": "AO",
    "city": "Melanje"
  },
  {
    "code": "RNV",
    "country_code": "US",
    "city": "Cleveland"
  },
  {
    "code": "TTD",
    "country_code": "US",
    "city": "Troutdale"
  },
  {
    "code": "MGU",
    "country_code": "MM",
    "city": "Manaung"
  },
  {
    "code": "ERO",
    "country_code": "US",
    "city": "Eldred Rock"
  },
  {
    "code": "ITK",
    "country_code": "PG",
    "city": "Itokama"
  },
  {
    "code": "TEH",
    "country_code": "US",
    "city": "Tetlin"
  },
  {
    "code": "WUS",
    "country_code": "CN",
    "city": "Wuyishan"
  },
  {
    "code": "RNR",
    "country_code": "PG",
    "city": "Robinson River"
  },
  {
    "code": "GKO",
    "country_code": "GA",
    "city": "Kongoboumba"
  },
  {
    "code": "OOR",
    "country_code": "AU",
    "city": "Mooraberree"
  },
  {
    "code": "TPC",
    "country_code": "EC",
    "city": "Tarapoa"
  },
  {
    "code": "CHJ",
    "country_code": "ZW",
    "city": "Chipinge"
  },
  {
    "code": "NDY",
    "country_code": "GB",
    "city": "Sanday"
  },
  {
    "code": "TRO",
    "country_code": "AU",
    "city": "Taree"
  },
  {
    "code": "ZPY",
    "country_code": "DE",
    "city": "Siegburg"
  },
  {
    "code": "HIJ",
    "country_code": "JP",
    "city": "Hiroshima"
  },
  {
    "code": "LWO",
    "country_code": "UA",
    "city": "Lviv"
  },
  {
    "code": "RNB",
    "country_code": "SE",
    "city": "Ronneby"
  },
  {
    "code": "INJ",
    "country_code": "AU",
    "city": "Injune"
  },
  {
    "code": "TYO",
    "country_code": "JP",
    "city": "Tokyo"
  },
  {
    "code": "ZEG",
    "country_code": "ID",
    "city": "Senggo"
  },
  {
    "code": "ARL",
    "country_code": "BF",
    "city": "Arly"
  },
  {
    "code": "PRY",
    "country_code": "ZA",
    "city": "Pretoria"
  },
  {
    "code": "TJM",
    "country_code": "RU",
    "city": "Tyumen"
  },
  {
    "code": "DJJ",
    "country_code": "ID",
    "city": "Jayapura"
  },
  {
    "code": "RIJ",
    "country_code": "PE",
    "city": "Rioja"
  },
  {
    "code": "VVC",
    "country_code": "CO",
    "city": "Villavicencio"
  },
  {
    "code": "MAA",
    "country_code": "IN",
    "city": "Chennai"
  },
  {
    "code": "CHY",
    "country_code": "SB",
    "city": "Choiseul Bay"
  },
  {
    "code": "GWY",
    "country_code": "IE",
    "city": "Galway"
  },
  {
    "code": "NTG",
    "country_code": "CN",
    "city": "Nantong"
  },
  {
    "code": "RDU",
    "country_code": "US",
    "city": "Raleigh/Durham"
  },
  {
    "code": "FRP",
    "country_code": "US",
    "city": "Fresh Water Bay"
  },
  {
    "code": "AIA",
    "country_code": "US",
    "city": "Alliance"
  },
  {
    "code": "SAS",
    "country_code": "US",
    "city": "Salton Sea"
  },
  {
    "code": "PTS",
    "country_code": "US",
    "city": "Pittsburg"
  },
  {
    "code": "CID",
    "country_code": "US",
    "city": "Cedar Rapids"
  },
  {
    "code": "PDC",
    "country_code": "NC",
    "city": "Mueo"
  },
  {
    "code": "PCT",
    "country_code": "US",
    "city": "Princeton"
  },
  {
    "code": "ATU",
    "country_code": "US",
    "city": "Attu Island"
  },
  {
    "code": "PSP",
    "country_code": "US",
    "city": "Palm Springs"
  },
  {
    "code": "MBZ",
    "country_code": "BR",
    "city": "Maues"
  },
  {
    "code": "OVE",
    "country_code": "US",
    "city": "Oroville"
  },
  {
    "code": "YZZ",
    "country_code": "CA",
    "city": "Trail"
  },
  {
    "code": "AAE",
    "country_code": "DZ",
    "city": "Annaba"
  },
  {
    "code": "LFP",
    "country_code": "AU",
    "city": "Lakefield"
  },
  {
    "code": "ZWL",
    "country_code": "CA",
    "city": "Wollaston Lake"
  },
  {
    "code": "SJS",
    "country_code": "BO",
    "city": "San Jose"
  },
  {
    "code": "GSM",
    "country_code": "IR",
    "city": "Qeshm Island"
  },
  {
    "code": "JLH",
    "country_code": "US",
    "city": "Arlington Heights"
  },
  {
    "code": "EIN",
    "country_code": "NL",
    "city": "Eindhoven"
  },
  {
    "code": "LYR",
    "country_code": "SJ",
    "city": "Longyearbyen"
  },
  {
    "code": "AQS",
    "country_code": "FJ",
    "city": "Saqani"
  },
  {
    "code": "CNZ",
    "country_code": "AO",
    "city": "Cangamba"
  },
  {
    "code": "KRY",
    "country_code": "CN",
    "city": "Karamay"
  },
  {
    "code": "TJB",
    "country_code": "ID",
    "city": "Tanjung Balai"
  },
  {
    "code": "BKQ",
    "country_code": "AU",
    "city": "Blackall"
  },
  {
    "code": "CAI",
    "country_code": "EG",
    "city": "Cairo"
  },
  {
    "code": "MOM",
    "country_code": "MR",
    "city": "Moudjeria"
  },
  {
    "code": "HRL",
    "country_code": "US",
    "city": "Harlingen"
  },
  {
    "code": "THZ",
    "country_code": "NE",
    "city": "Tahoua"
  },
  {
    "code": "DAM",
    "country_code": "SY",
    "city": "Damascus"
  },
  {
    "code": "APP",
    "country_code": "PG",
    "city": "Asapa"
  },
  {
    "code": "CMC",
    "country_code": "BR",
    "city": "Camocim"
  },
  {
    "code": "MDY",
    "country_code": "UM",
    "city": "Midway Island"
  },
  {
    "code": "BRW",
    "country_code": "US",
    "city": "Barrow"
  },
  {
    "code": "ZCL",
    "country_code": "MX",
    "city": "Zacatecas"
  },
  {
    "code": "THA",
    "country_code": "US",
    "city": "Tullahoma"
  },
  {
    "code": "UBN",
    "country_code": "MN",
    "city": "Ulaanbaatar"
  },
  {
    "code": "CUH",
    "country_code": "US",
    "city": "Cushing"
  },
  {
    "code": "QKJ",
    "country_code": "DZ",
    "city": "Khenchela"
  },
  {
    "code": "SGO",
    "country_code": "AU",
    "city": "St George"
  },
  {
    "code": "NUA",
    "country_code": "LK",
    "city": "Nuwara Eliya"
  },
  {
    "code": "GIT",
    "country_code": "TZ",
    "city": "Geita"
  },
  {
    "code": "FBM",
    "country_code": "CD",
    "city": "Lubumbashi"
  },
  {
    "code": "HUF",
    "country_code": "US",
    "city": "Terre Haute"
  },
  {
    "code": "MQO",
    "country_code": "PG",
    "city": "Malam"
  },
  {
    "code": "SIZ",
    "country_code": "PG",
    "city": "Sissano"
  },
  {
    "code": "ZGW",
    "country_code": "DE",
    "city": "Greifswald"
  },
  {
    "code": "NCE",
    "country_code": "FR",
    "city": "Nice"
  },
  {
    "code": "VIL",
    "country_code": "MA",
    "city": "Dakhla"
  },
  {
    "code": "GFR",
    "country_code": "FR",
    "city": "Granville"
  },
  {
    "code": "PPY",
    "country_code": "BR",
    "city": "Pouso Alegre"
  },
  {
    "code": "MVG",
    "country_code": "GA",
    "city": "Mevang"
  },
  {
    "code": "RNZ",
    "country_code": "US",
    "city": "Rensselaer"
  },
  {
    "code": "XPU",
    "country_code": "US",
    "city": "West Kuparuk"
  },
  {
    "code": "HGL",
    "country_code": "DE",
    "city": "Helgoland"
  },
  {
    "code": "RVR",
    "country_code": "US",
    "city": "Green River"
  },
  {
    "code": "ADX",
    "country_code": "GB",
    "city": "St Andrews"
  },
  {
    "code": "KTM",
    "country_code": "NP",
    "city": "Kathmandu"
  },
  {
    "code": "ZVC",
    "country_code": "CL",
    "city": "Villarrica"
  },
  {
    "code": "XOD",
    "country_code": "NO",
    "city": "Oppdal"
  },
  {
    "code": "DOC",
    "country_code": "GB",
    "city": "Dornoch"
  },
  {
    "code": "GUW",
    "country_code": "KZ",
    "city": "Atyrau"
  },
  {
    "code": "ZGM",
    "country_code": "ZM",
    "city": "Ngoma"
  },
  {
    "code": "JOG",
    "country_code": "ID",
    "city": "Yogyakarta"
  },
  {
    "code": "BFA",
    "country_code": "PY",
    "city": "Bahia Negra"
  },
  {
    "code": "IGD",
    "country_code": "TR",
    "city": "Igdir"
  },
  {
    "code": "ROK",
    "country_code": "AU",
    "city": "Rockhampton"
  },
  {
    "code": "HPG",
    "country_code": "CN",
    "city": "Shennongjia"
  },
  {
    "code": "AMW",
    "country_code": "US",
    "city": "Ames"
  },
  {
    "code": "VDO",
    "country_code": "VN",
    "city": "Van Don"
  },
  {
    "code": "SGF",
    "country_code": "US",
    "city": "Springfield"
  },
  {
    "code": "YZX",
    "country_code": "CA",
    "city": "Greenwood"
  },
  {
    "code": "MBV",
    "country_code": "PG",
    "city": "Masa"
  },
  {
    "code": "TFF",
    "country_code": "BR",
    "city": "Tefe"
  },
  {
    "code": "MRH",
    "country_code": "PG",
    "city": "May River"
  },
  {
    "code": "MIF",
    "country_code": "US",
    "city": "Monahans"
  },
  {
    "code": "ULS",
    "country_code": "CO",
    "city": "Mulatos"
  },
  {
    "code": "TEU",
    "country_code": "NZ",
    "city": "Te Anau"
  },
  {
    "code": "QDH",
    "country_code": "GB",
    "city": "Ashford"
  },
  {
    "code": "YDH",
    "country_code": "CA",
    "city": "Daniels Harbour"
  },
  {
    "code": "WTZ",
    "country_code": "NZ",
    "city": "Whitianga"
  },
  {
    "code": "ENQ",
    "country_code": "HN",
    "city": "Coronel E Soto Cano AB"
  },
  {
    "code": "CXQ",
    "country_code": "AU",
    "city": "Christmas Creek"
  },
  {
    "code": "ABR",
    "country_code": "US",
    "city": "Aberdeen"
  },
  {
    "code": "XXE",
    "country_code": "NO",
    "city": "Vennesla"
  },
  {
    "code": "AMO",
    "country_code": "TD",
    "city": "Mao"
  },
  {
    "code": "GTZ",
    "country_code": "TZ",
    "city": "Grumeti"
  },
  {
    "code": "YNG",
    "country_code": "US",
    "city": "Youngstown"
  },
  {
    "code": "YPP",
    "country_code": "CA",
    "city": "Pine Point"
  },
  {
    "code": "AVL",
    "country_code": "US",
    "city": "Asheville"
  },
  {
    "code": "MUO",
    "country_code": "US",
    "city": "Mountain Home"
  },
  {
    "code": "ASP",
    "country_code": "AU",
    "city": "Alice Springs"
  },
  {
    "code": "NIS",
    "country_code": "PG",
    "city": "Simberi Island"
  },
  {
    "code": "ZBF",
    "country_code": "CA",
    "city": "Bathurst"
  },
  {
    "code": "NCG",
    "country_code": "MX",
    "city": "Paloma Grande"
  },
  {
    "code": "BTI",
    "country_code": "US",
    "city": "Barter Island"
  },
  {
    "code": "OPW",
    "country_code": "NA",
    "city": "Opuwa"
  },
  {
    "code": "INV",
    "country_code": "GB",
    "city": "Inverness"
  },
  {
    "code": "OSI",
    "country_code": "HR",
    "city": "Osijek"
  },
  {
    "code": "WHS",
    "country_code": "GB",
    "city": "Whalsay"
  },
  {
    "code": "CAY",
    "country_code": "GF",
    "city": "Cayenne"
  },
  {
    "code": "BVI",
    "country_code": "AU",
    "city": "Birdsville"
  },
  {
    "code": "UMR",
    "country_code": "AU",
    "city": "Woomera"
  },
  {
    "code": "LSQ",
    "country_code": "CL",
    "city": "Los Angeles de Chile"
  },
  {
    "code": "KXK",
    "country_code": "RU",
    "city": "Komsomolsk Na Amure"
  },
  {
    "code": "TGD",
    "country_code": "ME",
    "city": "Podgorica"
  },
  {
    "code": "DHD",
    "country_code": "AU",
    "city": "Durham Downs"
  },
  {
    "code": "CKS",
    "country_code": "BR",
    "city": "Carajas"
  },
  {
    "code": "RIC",
    "country_code": "US",
    "city": "Richmond"
  },
  {
    "code": "SPV",
    "country_code": "PG",
    "city": "Sepik Plains"
  },
  {
    "code": "DLE",
    "country_code": "FR",
    "city": "Dole"
  },
  {
    "code": "ZPD",
    "country_code": "DE",
    "city": "Oldenburg"
  },
  {
    "code": "BSV",
    "country_code": "MG",
    "city": "Besakoa"
  },
  {
    "code": "OLZ",
    "country_code": "RU",
    "city": "Olokminsk"
  },
  {
    "code": "YOP",
    "country_code": "CA",
    "city": "Rainbow Lake"
  },
  {
    "code": "ZBR",
    "country_code": "IR",
    "city": "Chah-Bahar"
  },
  {
    "code": "XFM",
    "country_code": "CA",
    "city": "Shawnigan"
  },
  {
    "code": "TAW",
    "country_code": "UY",
    "city": "Tacuarembo"
  },
  {
    "code": "ACH",
    "country_code": "CH",
    "city": "Altenrhein"
  },
  {
    "code": "NKG",
    "country_code": "CN",
    "city": "Nanjing"
  },
  {
    "code": "CFQ",
    "country_code": "CA",
    "city": "Creston"
  },
  {
    "code": "TUA",
    "country_code": "EC",
    "city": "Tulcan"
  },
  {
    "code": "ZFA",
    "country_code": "CA",
    "city": "Faro"
  },
  {
    "code": "LOO",
    "country_code": "DZ",
    "city": "Laghouat"
  },
  {
    "code": "KKY",
    "country_code": "IE",
    "city": "Kilkenny"
  },
  {
    "code": "TLU",
    "country_code": "CO",
    "city": "Tolu"
  },
  {
    "code": "PEA",
    "country_code": "AU",
    "city": "Penneshaw"
  },
  {
    "code": "TJH",
    "country_code": "JP",
    "city": "Toyooka"
  },
  {
    "code": "TCG",
    "country_code": "CN",
    "city": "Tacheng"
  },
  {
    "code": "ХЖР",
    "country_code": "RU",
    "city": "Khuzhir"
  },
  {
    "code": "AGK",
    "country_code": "PG",
    "city": "Kagua"
  },
  {
    "code": "MVI",
    "country_code": "PG",
    "city": "Manetai"
  },
  {
    "code": "ZUD",
    "country_code": "CL",
    "city": "Ancud"
  },
  {
    "code": "TLI",
    "country_code": "ID",
    "city": "Tolitoli"
  },
  {
    "code": "URU",
    "country_code": "PG",
    "city": "Uroubi"
  },
  {
    "code": "NOV",
    "country_code": "AO",
    "city": "Huambo"
  },
  {
    "code": "DRE",
    "country_code": "US",
    "city": "Drummond Island"
  },
  {
    "code": "OVA",
    "country_code": "MG",
    "city": "Bekily"
  },
  {
    "code": "KWK",
    "country_code": "US",
    "city": "Kwigillingok"
  },
  {
    "code": "NFO",
    "country_code": "TO",
    "city": "Niuafo'ou"
  },
  {
    "code": "AOO",
    "country_code": "US",
    "city": "Altoona"
  },
  {
    "code": "TUZ",
    "country_code": "BR",
    "city": "Tucuma"
  },
  {
    "code": "CCT",
    "country_code": "AR",
    "city": "Colonia Catriel"
  },
  {
    "code": "TCX",
    "country_code": "IR",
    "city": "Tabas"
  },
  {
    "code": "PPL",
    "country_code": "NP",
    "city": "Phaplu"
  },
  {
    "code": "RYY",
    "country_code": "US",
    "city": "Kennesaw"
  },
  {
    "code": "XYU",
    "country_code": "SE",
    "city": "Solvesborg"
  },
  {
    "code": "QBC",
    "country_code": "CA",
    "city": "Bella Coola"
  },
  {
    "code": "YQK",
    "country_code": "CA",
    "city": "Kenora"
  },
  {
    "code": "YOH",
    "country_code": "CA",
    "city": "Oxford House"
  },
  {
    "code": "MHD",
    "country_code": "IR",
    "city": "Mashad"
  },
  {
    "code": "WNA",
    "country_code": "US",
    "city": "Napakiak"
  },
  {
    "code": "XFD",
    "country_code": "CA",
    "city": "Stratford"
  },
  {
    "code": "WAH",
    "country_code": "US",
    "city": "Wahpeton"
  },
  {
    "code": "AID",
    "country_code": "US",
    "city": "Anderson"
  },
  {
    "code": "MEI",
    "country_code": "US",
    "city": "Meridian"
  },
  {
    "code": "VKS",
    "country_code": "US",
    "city": "Vicksburg"
  },
  {
    "code": "XCH",
    "country_code": "CX",
    "city": "Christmas Island"
  },
  {
    "code": "WLO",
    "country_code": "AU",
    "city": "Waterloo"
  },
  {
    "code": "ITH",
    "country_code": "US",
    "city": "Ithaca"
  },
  {
    "code": "IRO",
    "country_code": "CF",
    "city": "Birao"
  },
  {
    "code": "TKJ",
    "country_code": "US",
    "city": "Tok"
  },
  {
    "code": "LMO",
    "country_code": "GB",
    "city": "Lossiemouth"
  },
  {
    "code": "KAA",
    "country_code": "ZM",
    "city": "Kasama"
  },
  {
    "code": "WED",
    "country_code": "PG",
    "city": "Wedau"
  },
  {
    "code": "VVZ",
    "country_code": "DZ",
    "city": "Illizi"
  },
  {
    "code": "HRJ",
    "country_code": "NP",
    "city": "Chaurjahari"
  },
  {
    "code": "UMD",
    "country_code": "GL",
    "city": "Uummannaq"
  },
  {
    "code": "FUJ",
    "country_code": "JP",
    "city": "Fukue"
  },
  {
    "code": "ANB",
    "country_code": "US",
    "city": "Anniston"
  },
  {
    "code": "RYB",
    "country_code": "RU",
    "city": "Rybinsk"
  },
  {
    "code": "TQO",
    "country_code": "MX",
    "city": "Tulum"
  },
  {
    "code": "EKA",
    "country_code": "US",
    "city": "Eureka"
  },
  {
    "code": "ORT",
    "country_code": "US",
    "city": "Northway"
  },
  {
    "code": "ASU",
    "country_code": "PY",
    "city": "Asuncion"
  },
  {
    "code": "FYN",
    "country_code": "CN",
    "city": "Koktokay"
  },
  {
    "code": "LHE",
    "country_code": "PK",
    "city": "Lahore"
  },
  {
    "code": "WUV",
    "country_code": "PG",
    "city": "Wuvulu Island"
  },
  {
    "code": "MEK",
    "country_code": "MA",
    "city": "Meknes"
  },
  {
    "code": "KDU",
    "country_code": "PK",
    "city": "Skardu"
  },
  {
    "code": "GKE",
    "country_code": "DE",
    "city": "Geilenkirchen"
  },
  {
    "code": "ALT",
    "country_code": "BR",
    "city": "Alenquer"
  },
  {
    "code": "PKE",
    "country_code": "AU",
    "city": "Parkes"
  },
  {
    "code": "ISS",
    "country_code": "US",
    "city": "Wiscasset"
  },
  {
    "code": "LKG",
    "country_code": "KE",
    "city": "Lokichoggio"
  },
  {
    "code": "FKS",
    "country_code": "JP",
    "city": "Fukushima"
  },
  {
    "code": "LBK",
    "country_code": "KE",
    "city": "Liboi"
  },
  {
    "code": "XQL",
    "country_code": "GB",
    "city": "Lancaster"
  },
  {
    "code": "BUO",
    "country_code": "SO",
    "city": "Burao"
  },
  {
    "code": "EDW",
    "country_code": "US",
    "city": "Edwards"
  },
  {
    "code": "OGU",
    "country_code": "TR",
    "city": "Ordu"
  },
  {
    "code": "MYR",
    "country_code": "US",
    "city": "Myrtle Beach"
  },
  {
    "code": "ZKU",
    "country_code": "CH",
    "city": "Sursee"
  },
  {
    "code": "NNI",
    "country_code": "NA",
    "city": "Namutoni"
  },
  {
    "code": "MHY",
    "country_code": "PG",
    "city": "Morehead"
  },
  {
    "code": "ZWM",
    "country_code": "DE",
    "city": "Wismar"
  },
  {
    "code": "EFO",
    "country_code": "US",
    "city": "East Fork"
  },
  {
    "code": "GVA",
    "country_code": "CH",
    "city": "Geneva"
  },
  {
    "code": "YHR",
    "country_code": "CA",
    "city": "Chevery"
  },
  {
    "code": "YLO",
    "country_code": "CA",
    "city": "Shilo"
  },
  {
    "code": "YVD",
    "country_code": "PG",
    "city": "Yeva"
  },
  {
    "code": "RDT",
    "country_code": "SN",
    "city": "Richard Toll"
  },
  {
    "code": "TWU",
    "country_code": "MY",
    "city": "Tawau"
  },
  {
    "code": "NGZ",
    "country_code": "US",
    "city": "Alameda"
  },
  {
    "code": "LUH",
    "country_code": "IN",
    "city": "Ludhiana"
  },
  {
    "code": "JGX",
    "country_code": "US",
    "city": "Glendale"
  },
  {
    "code": "KPO",
    "country_code": "KR",
    "city": "Pohang"
  },
  {
    "code": "VYD",
    "country_code": "ZA",
    "city": "Vryheid"
  },
  {
    "code": "VBY",
    "country_code": "SE",
    "city": "Visby"
  },
  {
    "code": "TVL",
    "country_code": "US",
    "city": "South Lake Tahoe"
  },
  {
    "code": "YOS",
    "country_code": "CA",
    "city": "Owen Sound"
  },
  {
    "code": "ZKF",
    "country_code": "CH",
    "city": "St Margrethen"
  },
  {
    "code": "MIM",
    "country_code": "AU",
    "city": "Merimbula"
  },
  {
    "code": "GBE",
    "country_code": "BW",
    "city": "Gaborone"
  },
  {
    "code": "JIJ",
    "country_code": "ET",
    "city": "Jijiga"
  },
  {
    "code": "LLN",
    "country_code": "ID",
    "city": "Kelila"
  },
  {
    "code": "GLW",
    "country_code": "US",
    "city": "Glasgow"
  },
  {
    "code": "ВАГ",
    "country_code": "RU",
    "city": "Vagay"
  },
  {
    "code": "BUK",
    "country_code": "YE",
    "city": "Albuq"
  },
  {
    "code": "NMB",
    "country_code": "IN",
    "city": "Daman"
  },
  {
    "code": "MRK",
    "country_code": "US",
    "city": "Marco Island"
  },
  {
    "code": "TPH",
    "country_code": "US",
    "city": "Tonopah"
  },
  {
    "code": "ULQ",
    "country_code": "CO",
    "city": "Tulua"
  },
  {
    "code": "BKY",
    "country_code": "CD",
    "city": "Bukavu"
  },
  {
    "code": "HWI",
    "country_code": "US",
    "city": "Hawk Inlet"
  },
  {
    "code": "PTN",
    "country_code": "US",
    "city": "Patterson"
  },
  {
    "code": "BIY",
    "country_code": "ZA",
    "city": "Bisho"
  },
  {
    "code": "CNT",
    "country_code": "AR",
    "city": "Charata"
  },
  {
    "code": "KOZ",
    "country_code": "US",
    "city": "Ouzinkie"
  },
  {
    "code": "JDZ",
    "country_code": "CN",
    "city": "Jingdezhen"
  },
  {
    "code": "KNA",
    "country_code": "CL",
    "city": "Vina del Mar"
  },
  {
    "code": "MAP",
    "country_code": "PG",
    "city": "Mamai"
  },
  {
    "code": "HFS",
    "country_code": "SE",
    "city": "Hagfors"
  },
  {
    "code": "CKC",
    "country_code": "UA",
    "city": "Cherkassy"
  },
  {
    "code": "ZRI",
    "country_code": "ID",
    "city": "Serui"
  },
  {
    "code": "MAN",
    "country_code": "GB",
    "city": "Manchester"
  },
  {
    "code": "УМИ",
    "country_code": "RU",
    "city": "Uchami"
  },
  {
    "code": "IUM",
    "country_code": "CA",
    "city": "Summit Lake"
  },
  {
    "code": "CBW",
    "country_code": "BR",
    "city": "Campo Mourao"
  },
  {
    "code": "NAT",
    "country_code": "BR",
    "city": "Natal"
  },
  {
    "code": "CNI",
    "country_code": "CN",
    "city": "Changhai"
  },
  {
    "code": "JIU",
    "country_code": "CN",
    "city": "Jiujiang"
  },
  {
    "code": "ADP",
    "country_code": "LK",
    "city": "Ampara"
  },
  {
    "code": "PHN",
    "country_code": "US",
    "city": "Port Huron"
  },
  {
    "code": "KNU",
    "country_code": "IN",
    "city": "Kanpur"
  },
  {
    "code": "LER",
    "country_code": "AU",
    "city": "Leinster"
  },
  {
    "code": "LPI",
    "country_code": "SE",
    "city": "Linkoping"
  },
  {
    "code": "XOU",
    "country_code": "ES",
    "city": "Segovia"
  },
  {
    "code": "APO",
    "country_code": "CO",
    "city": "Apartado"
  },
  {
    "code": "BWS",
    "country_code": "US",
    "city": "Blaine"
  },
  {
    "code": "TDS",
    "country_code": "PG",
    "city": "Sasereme"
  },
  {
    "code": "SZG",
    "country_code": "AT",
    "city": "Salzburg"
  },
  {
    "code": "SSD",
    "country_code": "CO",
    "city": "San Felipe"
  },
  {
    "code": "PHS",
    "country_code": "TH",
    "city": "Phitsanulok"
  },
  {
    "code": "TIZ",
    "country_code": "PG",
    "city": "Tari"
  },
  {
    "code": "MYD",
    "country_code": "KE",
    "city": "Malindi"
  },
  {
    "code": "FAY",
    "country_code": "US",
    "city": "Fayetteville"
  },
  {
    "code": "WGU",
    "country_code": "PG",
    "city": "Wagau"
  },
  {
    "code": "UNC",
    "country_code": "CO",
    "city": "Unguia"
  },
  {
    "code": "МКО",
    "country_code": "RU",
    "city": "Markovo"
  },
  {
    "code": "CHZ",
    "country_code": "US",
    "city": "Chiloquin"
  },
  {
    "code": "CGM",
    "country_code": "PH",
    "city": "Camiguin"
  },
  {
    "code": "RED",
    "country_code": "US",
    "city": "Reedsville"
  },
  {
    "code": "PDO",
    "country_code": "ID",
    "city": "Pendopo"
  },
  {
    "code": "KHN",
    "country_code": "CN",
    "city": "Nanchang"
  },
  {
    "code": "FVR",
    "country_code": "AU",
    "city": "Forrest River"
  },
  {
    "code": "FAT",
    "country_code": "US",
    "city": "Fresno"
  },
  {
    "code": "THS",
    "country_code": "TH",
    "city": "Sukhothai"
  },
  {
    "code": "BNT",
    "country_code": "PG",
    "city": "Bundi"
  },
  {
    "code": "WPC",
    "country_code": "CA",
    "city": "Pincher Creek"
  },
  {
    "code": "FPO",
    "country_code": "BS",
    "city": "Freeport"
  },
  {
    "code": "PDL",
    "country_code": "PT",
    "city": "Ponta Delgada (Azores)"
  },
  {
    "code": "BDI",
    "country_code": "SC",
    "city": "Bird Island"
  },
  {
    "code": "SZR",
    "country_code": "BG",
    "city": "Stara Zagora"
  },
  {
    "code": "RIB",
    "country_code": "BO",
    "city": "Riberalta"
  },
  {
    "code": "PRM",
    "country_code": "PT",
    "city": "Portimao"
  },
  {
    "code": "AAY",
    "country_code": "YE",
    "city": "Al Ghaydah"
  },
  {
    "code": "ZJX",
    "country_code": "IT",
    "city": "Stromboli"
  },
  {
    "code": "XMG",
    "country_code": "NP",
    "city": "Mahendranagar"
  },
  {
    "code": "SQT",
    "country_code": "PG",
    "city": "Samarai Island"
  },
  {
    "code": "SYA",
    "country_code": "US",
    "city": "Shemya"
  },
  {
    "code": "SFY",
    "country_code": "US",
    "city": "Springfield"
  },
  {
    "code": "CDJ",
    "country_code": "BR",
    "city": "Conceicao Do Araguaia"
  },
  {
    "code": "GLR",
    "country_code": "US",
    "city": "Gaylord"
  },
  {
    "code": "SSE",
    "country_code": "IN",
    "city": "Sholapur"
  },
  {
    "code": "PUX",
    "country_code": "CL",
    "city": "Puerto Varas"
  },
  {
    "code": "SJR",
    "country_code": "CO",
    "city": "San Juan D Ur"
  },
  {
    "code": "DRK",
    "country_code": "CR",
    "city": "Drake Bay"
  },
  {
    "code": "KPC",
    "country_code": "US",
    "city": "Port Clarence"
  },
  {
    "code": "SGU",
    "country_code": "US",
    "city": "Saint George"
  },
  {
    "code": "OLV",
    "country_code": "US",
    "city": "Olive Branch"
  },
  {
    "code": "LUA",
    "country_code": "NP",
    "city": "Lukla"
  },
  {
    "code": "UUA",
    "country_code": "RU",
    "city": "Bugulma"
  },
  {
    "code": "HSM",
    "country_code": "AU",
    "city": "Horsham"
  },
  {
    "code": "WAN",
    "country_code": "AU",
    "city": "Waverney"
  },
  {
    "code": "AHE",
    "country_code": "PF",
    "city": "Ahe"
  },
  {
    "code": "ANM",
    "country_code": "MG",
    "city": "Antalaha"
  },
  {
    "code": "CEK",
    "country_code": "RU",
    "city": "Chelyabinsk"
  },
  {
    "code": "EOI",
    "country_code": "GB",
    "city": "Eday"
  },
  {
    "code": "GOC",
    "country_code": "PG",
    "city": "Gora"
  },
  {
    "code": "ТИГ",
    "country_code": "RU",
    "city": "Tigil"
  },
  {
    "code": "TUG",
    "country_code": "PH",
    "city": "Tuguegarao"
  },
  {
    "code": "BNM",
    "country_code": "PG",
    "city": "Bodinumu"
  },
  {
    "code": "RFK",
    "country_code": "US",
    "city": "Anguilla"
  },
  {
    "code": "ZTS",
    "country_code": "CA",
    "city": "Tahsis"
  },
  {
    "code": "YQU",
    "country_code": "CA",
    "city": "Grande Prairie"
  },
  {
    "code": "LAX",
    "country_code": "US",
    "city": "Los Angeles"
  },
  {
    "code": "GDH",
    "country_code": "US",
    "city": "Golden Horn Lodge"
  },
  {
    "code": "AAJ",
    "country_code": "SR",
    "city": "Awaradam"
  },
  {
    "code": "GMI",
    "country_code": "PG",
    "city": "Gasmata Island"
  },
  {
    "code": "ZTU",
    "country_code": "AZ",
    "city": "Zaqatala"
  },
  {
    "code": "DAJ",
    "country_code": "AU",
    "city": "Dauan Island"
  },
  {
    "code": "RPV",
    "country_code": "AU",
    "city": "Roper Valley"
  },
  {
    "code": "SNL",
    "country_code": "US",
    "city": "Shawnee"
  },
  {
    "code": "BVP",
    "country_code": "PG",
    "city": "Bolovip"
  },
  {
    "code": "RQW",
    "country_code": "IQ",
    "city": "Qayyarah"
  },
  {
    "code": "MUZ",
    "country_code": "TZ",
    "city": "Musoma"
  },
  {
    "code": "TTK",
    "country_code": "GB",
    "city": "Tottenham"
  },
  {
    "code": "GDN",
    "country_code": "PL",
    "city": "Gdansk"
  },
  {
    "code": "ZRO",
    "country_code": "IT",
    "city": "Reggio nell'Emilia"
  },
  {
    "code": "XIG",
    "country_code": "BR",
    "city": "Xinguara"
  },
  {
    "code": "TOK",
    "country_code": "PG",
    "city": "Torokina"
  },
  {
    "code": "HIO",
    "country_code": "US",
    "city": "Hillsboro"
  },
  {
    "code": "BRX",
    "country_code": "DO",
    "city": "Barahona"
  },
  {
    "code": "DLZ",
    "country_code": "MN",
    "city": "Dalanzadgad"
  },
  {
    "code": "GUL",
    "country_code": "AU",
    "city": "Goulburn"
  },
  {
    "code": "RDM",
    "country_code": "US",
    "city": "Redmond"
  },
  {
    "code": "KLR",
    "country_code": "SE",
    "city": "Kalmar"
  },
  {
    "code": "PVE",
    "country_code": "PA",
    "city": "El Porvenir"
  },
  {
    "code": "TZM",
    "country_code": "MX",
    "city": "Tizimin"
  },
  {
    "code": "YWM",
    "country_code": "CA",
    "city": "Williams Harbour"
  },
  {
    "code": "DBA",
    "country_code": "PK",
    "city": "Dalbandin"
  },
  {
    "code": "SJD",
    "country_code": "MX",
    "city": "San Jose del Cabo"
  },
  {
    "code": "YYQ",
    "country_code": "CA",
    "city": "Churchill"
  },
  {
    "code": "KPG",
    "country_code": "GY",
    "city": "Kurupung"
  },
  {
    "code": "BGH",
    "country_code": "MR",
    "city": "Boghe"
  },
  {
    "code": "GIR",
    "country_code": "CO",
    "city": "Girardot"
  },
  {
    "code": "WLN",
    "country_code": "US",
    "city": "Little Naukati"
  },
  {
    "code": "ESU",
    "country_code": "MA",
    "city": "Essaouira"
  },
  {
    "code": "NOM",
    "country_code": "PG",
    "city": "Nomad River"
  },
  {
    "code": "PRW",
    "country_code": "US",
    "city": "Prentice"
  },
  {
    "code": "NME",
    "country_code": "US",
    "city": "Nightmute"
  },
  {
    "code": "MXT",
    "country_code": "MG",
    "city": "Maintirano"
  },
  {
    "code": "OYK",
    "country_code": "BR",
    "city": "Oiapoque"
  },
  {
    "code": "JER",
    "country_code": "JE",
    "city": "Jersey"
  },
  {
    "code": "HNB",
    "country_code": "US",
    "city": "Huntingburg"
  },
  {
    "code": "WIU",
    "country_code": "PG",
    "city": "Witu"
  },
  {
    "code": "CDL",
    "country_code": "US",
    "city": "Candle"
  },
  {
    "code": "ELM",
    "country_code": "US",
    "city": "Elmira"
  },
  {
    "code": "BHA",
    "country_code": "EC",
    "city": "Bahia De Caraquez"
  },
  {
    "code": "SOX",
    "country_code": "CO",
    "city": "Sogamoso"
  },
  {
    "code": "WLR",
    "country_code": "US",
    "city": "Loring"
  },
  {
    "code": "DUI",
    "country_code": "DE",
    "city": "Duisburg"
  },
  {
    "code": "YBS",
    "country_code": "CA",
    "city": "Opapamiska Lake"
  },
  {
    "code": "YGY",
    "country_code": "CA",
    "city": "Deception"
  },
  {
    "code": "PVI",
    "country_code": "BR",
    "city": "Paranavai"
  },
  {
    "code": "CFS",
    "country_code": "AU",
    "city": "Coffs Harbour"
  },
  {
    "code": "BBP",
    "country_code": "GB",
    "city": "Bembridge"
  },
  {
    "code": "LEN",
    "country_code": "ES",
    "city": "Leon"
  },
  {
    "code": "GCM",
    "country_code": "KY",
    "city": "Grand Cayman Island"
  },
  {
    "code": "HBK",
    "country_code": "US",
    "city": "Holbrook"
  },
  {
    "code": "SPM",
    "country_code": "DE",
    "city": "Spangdahlem"
  },
  {
    "code": "FSN",
    "country_code": "US",
    "city": "Fort Sheridan"
  },
  {
    "code": "HLU",
    "country_code": "NC",
    "city": "Houailou"
  },
  {
    "code": "RNP",
    "country_code": "MH",
    "city": "Rongelap Island"
  },
  {
    "code": "HYG",
    "country_code": "US",
    "city": "Hydaburg"
  },
  {
    "code": "CRZ",
    "country_code": "TM",
    "city": "Turkmenabad"
  },
  {
    "code": "GMO",
    "country_code": "NG",
    "city": "Gombe"
  },
  {
    "code": "SBA",
    "country_code": "US",
    "city": "Santa Barbara"
  },
  {
    "code": "ZJV",
    "country_code": "CH",
    "city": "Pontresina"
  },
  {
    "code": "JCN",
    "country_code": "KR",
    "city": "Incheon"
  },
  {
    "code": "AIP",
    "country_code": "MH",
    "city": "Ailinglapalap Island"
  },
  {
    "code": "CCZ",
    "country_code": "BS",
    "city": "Chub Cay"
  },
  {
    "code": "WVL",
    "country_code": "US",
    "city": "Waterville"
  },
  {
    "code": "RSP",
    "country_code": "US",
    "city": "Raspberry Strait"
  },
  {
    "code": "SDP",
    "country_code": "US",
    "city": "Sand Point"
  },
  {
    "code": "TAM",
    "country_code": "MX",
    "city": "Tampico"
  },
  {
    "code": "LSH",
    "country_code": "MM",
    "city": "Lashio"
  },
  {
    "code": "UIL",
    "country_code": "US",
    "city": "Quillayute"
  },
  {
    "code": "WYN",
    "country_code": "AU",
    "city": "Wyndham"
  },
  {
    "code": "GUS",
    "country_code": "US",
    "city": "Peru"
  },
  {
    "code": "KDB",
    "country_code": "AU",
    "city": "Kambalda"
  },
  {
    "code": "NMN",
    "country_code": "PG",
    "city": "Nomane"
  },
  {
    "code": "GOT",
    "country_code": "SE",
    "city": "Gothenburg"
  },
  {
    "code": "KMO",
    "country_code": "US",
    "city": "Manokotak"
  },
  {
    "code": "MRF",
    "country_code": "US",
    "city": "Marfa"
  },
  {
    "code": "SKD",
    "country_code": "UZ",
    "city": "Samarkand"
  },
  {
    "code": "VLE",
    "country_code": "US",
    "city": "Valle"
  },
  {
    "code": "PEJ",
    "country_code": "IT",
    "city": "Peschici"
  },
  {
    "code": "PMY",
    "country_code": "AR",
    "city": "Puerto Madryn"
  },
  {
    "code": "ЗЕЯ",
    "country_code": "RU",
    "city": "Zeja"
  },
  {
    "code": "GTI",
    "country_code": "DE",
    "city": "Guettin"
  },
  {
    "code": "BOL",
    "country_code": "GB",
    "city": "Ballykelly"
  },
  {
    "code": "SVE",
    "country_code": "US",
    "city": "Susanville"
  },
  {
    "code": "VIG",
    "country_code": "VE",
    "city": "El Vigia"
  },
  {
    "code": "LEU",
    "country_code": "ES",
    "city": "Seo de Urgel"
  },
  {
    "code": "CHK",
    "country_code": "US",
    "city": "Chickasha"
  },
  {
    "code": "KSX",
    "country_code": "PG",
    "city": "Yasuru"
  },
  {
    "code": "LEQ",
    "country_code": "GB",
    "city": "Lands End"
  },
  {
    "code": "KFP",
    "country_code": "US",
    "city": "False Pass"
  },
  {
    "code": "KAR",
    "country_code": "GY",
    "city": "Kamarang"
  },
  {
    "code": "PCQ",
    "country_code": "LA",
    "city": "Phongsaly"
  },
  {
    "code": "CJL",
    "country_code": "PK",
    "city": "Chitral"
  },
  {
    "code": "CCU",
    "country_code": "IN",
    "city": "Kolkata"
  },
  {
    "code": "OFI",
    "country_code": "CI",
    "city": "Ouango Fitini"
  },
  {
    "code": "MYI",
    "country_code": "AU",
    "city": "Murray Island"
  },
  {
    "code": "VIA",
    "country_code": "BR",
    "city": "Videira"
  },
  {
    "code": "JIK",
    "country_code": "GR",
    "city": "Ikaria Island"
  },
  {
    "code": "PPB",
    "country_code": "BR",
    "city": "Presidente Prudente"
  },
  {
    "code": "SAF",
    "country_code": "US",
    "city": "Santa Fe"
  },
  {
    "code": "NTD",
    "country_code": "US",
    "city": "Port Hueneme"
  },
  {
    "code": "JUZ",
    "country_code": "CN",
    "city": "Quzhou, Zhejiang Province"
  },
  {
    "code": "YXS",
    "country_code": "CA",
    "city": "Prince George"
  },
  {
    "code": "VOZ",
    "country_code": "RU",
    "city": "Voronezh"
  },
  {
    "code": "CLU",
    "country_code": "US",
    "city": "Columbus"
  },
  {
    "code": "ETD",
    "country_code": "AU",
    "city": "Etadunna"
  },
  {
    "code": "YCH",
    "country_code": "CA",
    "city": "Miramichi"
  },
  {
    "code": "KOS",
    "country_code": "KH",
    "city": "Sihanoukville"
  },
  {
    "code": "KHK",
    "country_code": "IR",
    "city": "Khark Island"
  },
  {
    "code": "IZT",
    "country_code": "MX",
    "city": "Ixtepec"
  },
  {
    "code": "WTN",
    "country_code": "GB",
    "city": "Waddington"
  },
  {
    "code": "ZAG",
    "country_code": "HR",
    "city": "Zagreb"
  },
  {
    "code": "PYK",
    "country_code": "IR",
    "city": "Karaj"
  },
  {
    "code": "XGK",
    "country_code": "CA",
    "city": "Coteau"
  },
  {
    "code": "TFR",
    "country_code": "EG",
    "city": "Ramadan"
  },
  {
    "code": "IRJ",
    "country_code": "AR",
    "city": "La Rioja"
  },
  {
    "code": "ATA",
    "country_code": "PE",
    "city": "Anta"
  },
  {
    "code": "GRL",
    "country_code": "PG",
    "city": "Garasa"
  },
  {
    "code": "CEZ",
    "country_code": "US",
    "city": "Cortez"
  },
  {
    "code": "GUA",
    "country_code": "GT",
    "city": "Guatemala City"
  },
  {
    "code": "LYB",
    "country_code": "KY",
    "city": "Little Cayman"
  },
  {
    "code": "WUG",
    "country_code": "PG",
    "city": "Wau"
  },
  {
    "code": "NRK",
    "country_code": "SE",
    "city": "Norrkoping"
  },
  {
    "code": "SES",
    "country_code": "RU",
    "city": "Svetlogorsk"
  },
  {
    "code": "JRF",
    "country_code": "US",
    "city": "Kapolei"
  },
  {
    "code": "САЙ",
    "country_code": "RU",
    "city": "Sulomay"
  },
  {
    "code": "MEX",
    "country_code": "MX",
    "city": "Mexico City"
  },
  {
    "code": "SNN",
    "country_code": "IE",
    "city": "Shannon"
  },
  {
    "code": "TCK",
    "country_code": "PG",
    "city": "Tinboli"
  },
  {
    "code": "GUH",
    "country_code": "AU",
    "city": "Gunnedah"
  },
  {
    "code": "WMV",
    "country_code": "MG",
    "city": "Madirovalo"
  },
  {
    "code": "TUS",
    "country_code": "US",
    "city": "Tucson"
  },
  {
    "code": "DDI",
    "country_code": "AU",
    "city": "Daydream Island"
  },
  {
    "code": "OPB",
    "country_code": "PG",
    "city": "Open Bay"
  },
  {
    "code": "AIT",
    "country_code": "CK",
    "city": "Aitutaki"
  },
  {
    "code": "KBD",
    "country_code": "AU",
    "city": "Kimberley Downs"
  },
  {
    "code": "HUU",
    "country_code": "PE",
    "city": "Huanuco"
  },
  {
    "code": "JLN",
    "country_code": "US",
    "city": "Joplin"
  },
  {
    "code": "CBV",
    "country_code": "GT",
    "city": "Coban"
  },
  {
    "code": "ECR",
    "country_code": "CO",
    "city": "El Charco"
  },
  {
    "code": "KHZ",
    "country_code": "PF",
    "city": "Kauehi"
  },
  {
    "code": "AGF",
    "country_code": "FR",
    "city": "Agen"
  },
  {
    "code": "OVL",
    "country_code": "CL",
    "city": "Ovalle"
  },
  {
    "code": "ALX",
    "country_code": "US",
    "city": "Alexander City"
  },
  {
    "code": "CAJ",
    "country_code": "VE",
    "city": "Canaima"
  },
  {
    "code": "ZVD",
    "country_code": "NO",
    "city": "Drangedal"
  },
  {
    "code": "TEI",
    "country_code": "IN",
    "city": "Tezu"
  },
  {
    "code": "GCH",
    "country_code": "IR",
    "city": "Gachsaran"
  },
  {
    "code": "AUO",
    "country_code": "US",
    "city": "Auburn"
  },
  {
    "code": "YRG",
    "country_code": "CA",
    "city": "Rigolet"
  },
  {
    "code": "XTL",
    "country_code": "CA",
    "city": "Tadoule Lake"
  },
  {
    "code": "FWA",
    "country_code": "US",
    "city": "Fort Wayne"
  },
  {
    "code": "ZJS",
    "country_code": "DE",
    "city": "Jena"
  },
  {
    "code": "XDE",
    "country_code": "BF",
    "city": "Diebougou"
  },
  {
    "code": "IGM",
    "country_code": "US",
    "city": "Kingman"
  },
  {
    "code": "DUE",
    "country_code": "AO",
    "city": "Dundo"
  },
  {
    "code": "GVX",
    "country_code": "SE",
    "city": "Gavle"
  },
  {
    "code": "VAF",
    "country_code": "FR",
    "city": "Valence"
  },
  {
    "code": "TLV",
    "country_code": "IL",
    "city": "Tel Aviv-Yafo"
  },
  {
    "code": "SUR",
    "country_code": "CA",
    "city": "Summer Beaver"
  },
  {
    "code": "VGG",
    "country_code": "LA",
    "city": "Vangrieng"
  },
  {
    "code": "PFJ",
    "country_code": "IS",
    "city": "Patreksfjordur"
  },
  {
    "code": "UDI",
    "country_code": "BR",
    "city": "Uberlandia"
  },
  {
    "code": "MXH",
    "country_code": "PG",
    "city": "Moro"
  },
  {
    "code": "DIY",
    "country_code": "TR",
    "city": "Diyarbakir"
  },
  {
    "code": "OMS",
    "country_code": "RU",
    "city": "Omsk"
  },
  {
    "code": "BBY",
    "country_code": "CF",
    "city": "Bambari"
  },
  {
    "code": "BBF",
    "country_code": "US",
    "city": "Burlington"
  },
  {
    "code": "PUB",
    "country_code": "US",
    "city": "Pueblo"
  },
  {
    "code": "VLO",
    "country_code": "US",
    "city": "Vallejo"
  },
  {
    "code": "GGW",
    "country_code": "US",
    "city": "Glasgow"
  },
  {
    "code": "HBO",
    "country_code": "US",
    "city": "Humboldt"
  },
  {
    "code": "MQH",
    "country_code": "BR",
    "city": "Minacu"
  },
  {
    "code": "LUX",
    "country_code": "LU",
    "city": "Luxembourg"
  },
  {
    "code": "THP",
    "country_code": "US",
    "city": "Thermopolis"
  },
  {
    "code": "CLC",
    "country_code": "US",
    "city": "Clearlake"
  },
  {
    "code": "SWV",
    "country_code": "RU",
    "city": "Evensk"
  },
  {
    "code": "DNQ",
    "country_code": "AU",
    "city": "Deniliquin"
  },
  {
    "code": "LPJ",
    "country_code": "VE",
    "city": "Pijiguaos"
  },
  {
    "code": "RKI",
    "country_code": "ID",
    "city": "Rokot"
  },
  {
    "code": "KEG",
    "country_code": "PG",
    "city": "Keglsugl"
  },
  {
    "code": "TNK",
    "country_code": "US",
    "city": "Tununak"
  },
  {
    "code": "DNM",
    "country_code": "AU",
    "city": "Denham"
  },
  {
    "code": "GHM",
    "country_code": "US",
    "city": "Centerville"
  },
  {
    "code": "SQN",
    "country_code": "ID",
    "city": "Sanana"
  },
  {
    "code": "NLS",
    "country_code": "AU",
    "city": "Nicholson"
  },
  {
    "code": "LEP",
    "country_code": "BR",
    "city": "Leopoldina"
  },
  {
    "code": "FKJ",
    "country_code": "JP",
    "city": "Fukui"
  },
  {
    "code": "SZP",
    "country_code": "US",
    "city": "Santa Paula"
  },
  {
    "code": "NAO",
    "country_code": "CN",
    "city": "Nanchong"
  },
  {
    "code": "ZOY",
    "country_code": "DE",
    "city": "Oberhausen"
  },
  {
    "code": "TWE",
    "country_code": "US",
    "city": "Taylor"
  },
  {
    "code": "IXA",
    "country_code": "IN",
    "city": "Agartala"
  },
  {
    "code": "YKF",
    "country_code": "CA",
    "city": "Kitchener"
  },
  {
    "code": "DUN",
    "country_code": "GL",
    "city": "Dundas"
  },
  {
    "code": "DJU",
    "country_code": "IS",
    "city": "Djupivogur"
  },
  {
    "code": "EKX",
    "country_code": "US",
    "city": "Elizabethtown"
  },
  {
    "code": "XIP",
    "country_code": "CA",
    "city": "Woodstock"
  },
  {
    "code": "KBQ",
    "country_code": "MW",
    "city": "Kasungu"
  },
  {
    "code": "AEA",
    "country_code": "KI",
    "city": "Abemama Atoll"
  },
  {
    "code": "MLL",
    "country_code": "US",
    "city": "Marshall"
  },
  {
    "code": "OKN",
    "country_code": "GA",
    "city": "Okondja"
  },
  {
    "code": "GVW",
    "country_code": "US",
    "city": "Grandview"
  },
  {
    "code": "CES",
    "country_code": "AU",
    "city": "Cessnock"
  },
  {
    "code": "AKS",
    "country_code": "SB",
    "city": "Auki"
  },
  {
    "code": "BJP",
    "country_code": "BR",
    "city": "Braganca Paulista"
  },
  {
    "code": "SSK",
    "country_code": "AU",
    "city": "Sturt Creek"
  },
  {
    "code": "BNB",
    "country_code": "CD",
    "city": "Boende"
  },
  {
    "code": "OLN",
    "country_code": "AR",
    "city": "Colonia Sarmiento"
  },
  {
    "code": "AKD",
    "country_code": "IN",
    "city": "Akola"
  },
  {
    "code": "TDB",
    "country_code": "PG",
    "city": "Tetabedi"
  },
  {
    "code": "XKC",
    "country_code": "NO",
    "city": "Sandnes"
  },
  {
    "code": "UUN",
    "country_code": "MN",
    "city": "Baruun-Urt"
  },
  {
    "code": "GAO",
    "country_code": "CU",
    "city": "Guantanamo"
  },
  {
    "code": "EBM",
    "country_code": "TN",
    "city": "El Borma"
  },
  {
    "code": "UTH",
    "country_code": "TH",
    "city": "Udon Thani"
  },
  {
    "code": "CRS",
    "country_code": "US",
    "city": "Corsicana"
  },
  {
    "code": "OEM",
    "country_code": "SR",
    "city": "Paloemeu"
  },
  {
    "code": "MOG",
    "country_code": "MM",
    "city": "Mong Hsat"
  },
  {
    "code": "YEY",
    "country_code": "CA",
    "city": "Amos"
  },
  {
    "code": "XIA",
    "country_code": "CA",
    "city": "Guelph"
  },
  {
    "code": "IKL",
    "country_code": "CD",
    "city": "Ikela"
  },
  {
    "code": "VDY",
    "country_code": "IN",
    "city": "Vidyanagar"
  },
  {
    "code": "QSR",
    "country_code": "IT",
    "city": "Salerno"
  },
  {
    "code": "CMO",
    "country_code": "SO",
    "city": "Obbia"
  },
  {
    "code": "SEI",
    "country_code": "BR",
    "city": "Senhor Do Bonfim"
  },
  {
    "code": "NKN",
    "country_code": "PG",
    "city": "Nankina"
  },
  {
    "code": "ПАЙ",
    "country_code": "RU",
    "city": "Poronaisk"
  },
  {
    "code": "KBU",
    "country_code": "ID",
    "city": "Kotabaru"
  },
  {
    "code": "DDM",
    "country_code": "PG",
    "city": "Dodoima"
  },
  {
    "code": "APE",
    "country_code": "PE",
    "city": "San Juan Aposento"
  },
  {
    "code": "FAC",
    "country_code": "PF",
    "city": "Faaite"
  },
  {
    "code": "ORE",
    "country_code": "FR",
    "city": "Orleans"
  },
  {
    "code": "GRI",
    "country_code": "US",
    "city": "Grand Island"
  },
  {
    "code": "MDP",
    "country_code": "ID",
    "city": "Mindiptana"
  },
  {
    "code": "ENT",
    "country_code": "MH",
    "city": "Enewetak Island"
  },
  {
    "code": "ATK",
    "country_code": "US",
    "city": "Atqasuk"
  },
  {
    "code": "FAK",
    "country_code": "US",
    "city": "False Island"
  },
  {
    "code": "GYG",
    "country_code": "RU",
    "city": "Magan"
  },
  {
    "code": "IWO",
    "country_code": "JP",
    "city": "Iwo Jima Vol"
  },
  {
    "code": "XEQ",
    "country_code": "GL",
    "city": "Tasiuasaq"
  },
  {
    "code": "KLU",
    "country_code": "AT",
    "city": "Klagenfurt"
  },
  {
    "code": "LGE",
    "country_code": "AU",
    "city": "Lake Gregory"
  },
  {
    "code": "EEL",
    "country_code": "ES",
    "city": "Tudela"
  },
  {
    "code": "CYM",
    "country_code": "US",
    "city": "Chatham"
  },
  {
    "code": "KGL",
    "country_code": "RW",
    "city": "Kigali"
  },
  {
    "code": "JIL",
    "country_code": "CN",
    "city": "Jilin"
  },
  {
    "code": "SXN",
    "country_code": "BW",
    "city": "Suapan"
  },
  {
    "code": "PRK",
    "country_code": "ZA",
    "city": "Prieska"
  },
  {
    "code": "YAM",
    "country_code": "CA",
    "city": "Sault Ste. Marie"
  },
  {
    "code": "ZHR",
    "country_code": "CH",
    "city": "Kandersteg"
  },
  {
    "code": "GOB",
    "country_code": "ET",
    "city": "Goba"
  },
  {
    "code": "STM",
    "country_code": "BR",
    "city": "Santarem"
  },
  {
    "code": "SGA",
    "country_code": "AF",
    "city": "Sheghnan"
  },
  {
    "code": "ONI",
    "country_code": "ID",
    "city": "Moanamani"
  },
  {
    "code": "HAN",
    "country_code": "VN",
    "city": "Hanoi"
  },
  {
    "code": "PXS",
    "country_code": "ES",
    "city": "Puerto De Santa Maria"
  },
  {
    "code": "ONU",
    "country_code": "FJ",
    "city": "Ono I Lau"
  },
  {
    "code": "RNN",
    "country_code": "DK",
    "city": "Bornholm"
  },
  {
    "code": "IBZ",
    "country_code": "ES",
    "city": "Ibiza"
  },
  {
    "code": "NAD",
    "country_code": "CO",
    "city": "Macanal"
  },
  {
    "code": "TYE",
    "country_code": "US",
    "city": "Tyonek"
  },
  {
    "code": "DGG",
    "country_code": "PG",
    "city": "Daugo"
  },
  {
    "code": "JIC",
    "country_code": "CN",
    "city": "Jinchang"
  },
  {
    "code": "CMH",
    "country_code": "US",
    "city": "Columbus"
  },
  {
    "code": "KHS",
    "country_code": "OM",
    "city": "Khasab"
  },
  {
    "code": "DEI",
    "country_code": "SC",
    "city": "Denis Island"
  },
  {
    "code": "JGN",
    "country_code": "CN",
    "city": "Jiayuguan"
  },
  {
    "code": "SPF",
    "country_code": "US",
    "city": "Spearfish"
  },
  {
    "code": "XVW",
    "country_code": "GB",
    "city": "Wolverhampton"
  },
  {
    "code": "EAU",
    "country_code": "US",
    "city": "Eau Claire"
  },
  {
    "code": "JOE",
    "country_code": "FI",
    "city": "Joensuu"
  },
  {
    "code": "KLP",
    "country_code": "US",
    "city": "Kelp Bay"
  },
  {
    "code": "ОСО",
    "country_code": "RU",
    "city": "Ossora"
  },
  {
    "code": "CNJ",
    "country_code": "AU",
    "city": "Cloncurry"
  },
  {
    "code": "YRA",
    "country_code": "CA",
    "city": "Rae Lakes"
  },
  {
    "code": "BAV",
    "country_code": "CN",
    "city": "Baotou"
  },
  {
    "code": "IGA",
    "country_code": "BS",
    "city": "Inagua"
  },
  {
    "code": "RAP",
    "country_code": "US",
    "city": "Rapid City"
  },
  {
    "code": "LTV",
    "country_code": "AU",
    "city": "Lotusvale"
  },
  {
    "code": "MNR",
    "country_code": "ZM",
    "city": "Mongu"
  },
  {
    "code": "TJK",
    "country_code": "TR",
    "city": "Tokat"
  },
  {
    "code": "KVR",
    "country_code": "RU",
    "city": "Kavalerovo"
  },
  {
    "code": "SWN",
    "country_code": "PK",
    "city": "Sahiwal"
  },
  {
    "code": "SYX",
    "country_code": "CN",
    "city": "Sanya"
  },
  {
    "code": "IMM",
    "country_code": "US",
    "city": "Immokalee"
  },
  {
    "code": "ZWT",
    "country_code": "DE",
    "city": "Lutherstadt Wittenberg"
  },
  {
    "code": "NKD",
    "country_code": "ID",
    "city": "Sinak"
  },
  {
    "code": "LOG",
    "country_code": "US",
    "city": "Longview"
  },
  {
    "code": "KAF",
    "country_code": "PG",
    "city": "Karato"
  },
  {
    "code": "KMP",
    "country_code": "NA",
    "city": "Keetmanshoop"
  },
  {
    "code": "OVD",
    "country_code": "ES",
    "city": "Asturias"
  },
  {
    "code": "KEY",
    "country_code": "KE",
    "city": "Kericho"
  },
  {
    "code": "TAR",
    "country_code": "IT",
    "city": "Taranto"
  },
  {
    "code": "MFN",
    "country_code": "NZ",
    "city": "Milford Sound"
  },
  {
    "code": "TCE",
    "country_code": "RO",
    "city": "Tulcea"
  },
  {
    "code": "LWB",
    "country_code": "US",
    "city": "Lewisburg"
  },
  {
    "code": "PNH",
    "country_code": "KH",
    "city": "Phnom Penh"
  },
  {
    "code": "KON",
    "country_code": "VN",
    "city": "Kontum"
  },
  {
    "code": "PEN",
    "country_code": "MY",
    "city": "Penang"
  },
  {
    "code": "YHF",
    "country_code": "CA",
    "city": "Hearst"
  },
  {
    "code": "FMG",
    "country_code": "CR",
    "city": "Flamingo"
  },
  {
    "code": "NEG",
    "country_code": "JM",
    "city": "Negril"
  },
  {
    "code": "WMP",
    "country_code": "MG",
    "city": "Mampikony"
  },
  {
    "code": "IXZ",
    "country_code": "IN",
    "city": "Port Blair"
  },
  {
    "code": "GDT",
    "country_code": "TC",
    "city": "Grand Turk Island"
  },
  {
    "code": "SQE",
    "country_code": "CO",
    "city": "San Luis De Pale"
  },
  {
    "code": "ATN",
    "country_code": "PG",
    "city": "Namatanai"
  },
  {
    "code": "LBV",
    "country_code": "GA",
    "city": "Libreville"
  },
  {
    "code": "KIN",
    "country_code": "JM",
    "city": "Kingston"
  },
  {
    "code": "GIF",
    "country_code": "US",
    "city": "Winter Haven"
  },
  {
    "code": "BFE",
    "country_code": "DE",
    "city": "Bielefeld"
  },
  {
    "code": "WUD",
    "country_code": "AU",
    "city": "Wudinna"
  },
  {
    "code": "YMT",
    "country_code": "CA",
    "city": "Chibougamau"
  },
  {
    "code": "IWJ",
    "country_code": "JP",
    "city": "Masuda"
  },
  {
    "code": "CCV",
    "country_code": "VU",
    "city": "Craig Cove"
  },
  {
    "code": "SCE",
    "country_code": "US",
    "city": "State College"
  },
  {
    "code": "KDQ",
    "country_code": "PG",
    "city": "Kamberatoro"
  },
  {
    "code": "SZL",
    "country_code": "US",
    "city": "Warrensburg"
  },
  {
    "code": "NTY",
    "country_code": "ZA",
    "city": "Sun City"
  },
  {
    "code": "TPQ",
    "country_code": "MX",
    "city": "Tepic"
  },
  {
    "code": "BEL",
    "country_code": "BR",
    "city": "Belem"
  },
  {
    "code": "LSZ",
    "country_code": "HR",
    "city": "Mali Losinj"
  },
  {
    "code": "TKR",
    "country_code": "BD",
    "city": "Thakurgaon"
  },
  {
    "code": "MPV",
    "country_code": "US",
    "city": "Montpelier"
  },
  {
    "code": "GBZ",
    "country_code": "NZ",
    "city": "Great Barrier Island"
  },
  {
    "code": "WDH",
    "country_code": "NA",
    "city": "Windhoek"
  },
  {
    "code": "PPX",
    "country_code": "PG",
    "city": "Param"
  },
  {
    "code": "IGN",
    "country_code": "PH",
    "city": "Iligan"
  },
  {
    "code": "BTK",
    "country_code": "RU",
    "city": "Bratsk"
  },
  {
    "code": "DLV",
    "country_code": "AU",
    "city": "Delissaville"
  },
  {
    "code": "AOA",
    "country_code": "PG",
    "city": "Aroa"
  },
  {
    "code": "FOM",
    "country_code": "CM",
    "city": "Foumban"
  },
  {
    "code": "UTT",
    "country_code": "ZA",
    "city": "Umtata"
  },
  {
    "code": "XVC",
    "country_code": "GB",
    "city": "Crewe"
  },
  {
    "code": "YEO",
    "country_code": "GB",
    "city": "Yeovilton"
  },
  {
    "code": "JDH",
    "country_code": "IN",
    "city": "Jodhpur"
  },
  {
    "code": "BCE",
    "country_code": "US",
    "city": "Bryce"
  },
  {
    "code": "CDK",
    "country_code": "US",
    "city": "Cedar Key"
  },
  {
    "code": "AUQ",
    "country_code": "PF",
    "city": "Atuona"
  },
  {
    "code": "FNI",
    "country_code": "FR",
    "city": "Nimes"
  },
  {
    "code": "ASO",
    "country_code": "ET",
    "city": "Asosa"
  },
  {
    "code": "DFP",
    "country_code": "AU",
    "city": "Drumduff"
  },
  {
    "code": "DBN",
    "country_code": "US",
    "city": "Dublin"
  },
  {
    "code": "FBE",
    "country_code": "BR",
    "city": "Francisco Beltrao"
  },
  {
    "code": "VTM",
    "country_code": "IL",
    "city": "Nevatim"
  },
  {
    "code": "BER",
    "country_code": "DE",
    "city": "Berlin"
  },
  {
    "code": "TAC",
    "country_code": "PH",
    "city": "Tacloban"
  },
  {
    "code": "ROS",
    "country_code": "AR",
    "city": "Rosario"
  },
  {
    "code": "YIO",
    "country_code": "CA",
    "city": "Pond Inlet"
  },
  {
    "code": "XYI",
    "country_code": "SE",
    "city": "Flen"
  },
  {
    "code": "DRV",
    "country_code": "MV",
    "city": "Dharavandhoo Island"
  },
  {
    "code": "HLZ",
    "country_code": "NZ",
    "city": "Hamilton"
  },
  {
    "code": "SGY",
    "country_code": "US",
    "city": "Skagway"
  },
  {
    "code": "CGB",
    "country_code": "BR",
    "city": "Cuiaba"
  },
  {
    "code": "ASJ",
    "country_code": "JP",
    "city": "Amami O Shima"
  },
  {
    "code": "CUC",
    "country_code": "CO",
    "city": "Cucuta"
  },
  {
    "code": "PJS",
    "country_code": "US",
    "city": "Port San Juan"
  },
  {
    "code": "MDM",
    "country_code": "PG",
    "city": "Munduku"
  },
  {
    "code": "VIK",
    "country_code": "US",
    "city": "Kavik"
  },
  {
    "code": "CAK",
    "country_code": "US",
    "city": "Akron"
  },
  {
    "code": "KEN",
    "country_code": "SL",
    "city": "Kenema"
  },
  {
    "code": "LKS",
    "country_code": "US",
    "city": "Lakeside"
  },
  {
    "code": "YSX",
    "country_code": "CA",
    "city": "Shearwater"
  },
  {
    "code": "LRU",
    "country_code": "US",
    "city": "Las Cruces"
  },
  {
    "code": "WAI",
    "country_code": "MG",
    "city": "Antsohihy"
  },
  {
    "code": "CFE",
    "country_code": "FR",
    "city": "Clermont-Ferrand"
  },
  {
    "code": "YME",
    "country_code": "CA",
    "city": "Matane"
  },
  {
    "code": "OTJ",
    "country_code": "NA",
    "city": "Otjiwarongo"
  },
  {
    "code": "BEG",
    "country_code": "RS",
    "city": "Belgrade"
  },
  {
    "code": "ROM",
    "country_code": "IT",
    "city": "Rome"
  },
  {
    "code": "FLM",
    "country_code": "PY",
    "city": "Filadelfia"
  },
  {
    "code": "YNF",
    "country_code": "CA",
    "city": "Corner Brook"
  },
  {
    "code": "YAY",
    "country_code": "CA",
    "city": "St Anthony"
  },
  {
    "code": "SLB",
    "country_code": "US",
    "city": "Storm Lake"
  },
  {
    "code": "LIX",
    "country_code": "MW",
    "city": "Likoma Island"
  },
  {
    "code": "AGQ",
    "country_code": "GR",
    "city": "Agrinion"
  },
  {
    "code": "LXU",
    "country_code": "ZM",
    "city": "Lukulu"
  },
  {
    "code": "DAS",
    "country_code": "CA",
    "city": "Great Bear Lake"
  },
  {
    "code": "ЧЕХ",
    "country_code": "RU",
    "city": "Chekhlomej"
  },
  {
    "code": "NLA",
    "country_code": "ZM",
    "city": "Ndola"
  },
  {
    "code": "DBY",
    "country_code": "AU",
    "city": "Dalby"
  },
  {
    "code": "VEV",
    "country_code": "SB",
    "city": "Barakoma"
  },
  {
    "code": "PBD",
    "country_code": "IN",
    "city": "Porbandar"
  },
  {
    "code": "ЛАЙ",
    "country_code": "RU",
    "city": "Laitamak"
  },
  {
    "code": "ZJG",
    "country_code": "CA",
    "city": "Jenpeg"
  },
  {
    "code": "SVA",
    "country_code": "US",
    "city": "Savoonga"
  },
  {
    "code": "KGC",
    "country_code": "AU",
    "city": "Kingscote"
  },
  {
    "code": "OBM",
    "country_code": "PG",
    "city": "Morobe"
  },
  {
    "code": "MOV",
    "country_code": "AU",
    "city": "Moranbah"
  },
  {
    "code": "GLI",
    "country_code": "AU",
    "city": "Glen Innes"
  },
  {
    "code": "BWW",
    "country_code": "CU",
    "city": "Cayo Las Brujas"
  },
  {
    "code": "DCR",
    "country_code": "US",
    "city": "Decatur"
  },
  {
    "code": "CNU",
    "country_code": "US",
    "city": "Chanute"
  },
  {
    "code": "HZP",
    "country_code": "CA",
    "city": "Fort MacKay"
  },
  {
    "code": "SQI",
    "country_code": "US",
    "city": "Sterling Rockfalls"
  },
  {
    "code": "LSU",
    "country_code": "MY",
    "city": "Long Sukang"
  },
  {
    "code": "MIS",
    "country_code": "PG",
    "city": "Misima Island"
  },
  {
    "code": "HUC",
    "country_code": "PR",
    "city": "Humacao"
  },
  {
    "code": "LGD",
    "country_code": "US",
    "city": "La Grande"
  },
  {
    "code": "KDL",
    "country_code": "EE",
    "city": "Kardla"
  },
  {
    "code": "AKV",
    "country_code": "CA",
    "city": "Akulivik"
  },
  {
    "code": "TMX",
    "country_code": "DZ",
    "city": "Timimoun"
  },
  {
    "code": "YCA",
    "country_code": "CA",
    "city": "Courtenay"
  },
  {
    "code": "MRD",
    "country_code": "VE",
    "city": "Merida"
  },
  {
    "code": "MPO",
    "country_code": "US",
    "city": "Mount Pocono"
  },
  {
    "code": "TID",
    "country_code": "DZ",
    "city": "Tiaret"
  },
  {
    "code": "AIG",
    "country_code": "CF",
    "city": "Yalinga"
  },
  {
    "code": "YWS",
    "country_code": "CA",
    "city": "Whistler"
  },
  {
    "code": "UBR",
    "country_code": "ID",
    "city": "Ubrub"
  },
  {
    "code": "EMO",
    "country_code": "PG",
    "city": "Emo"
  },
  {
    "code": "ZBL",
    "country_code": "AU",
    "city": "Biloela"
  },
  {
    "code": "DKK",
    "country_code": "US",
    "city": "Dunkirk"
  },
  {
    "code": "MVF",
    "country_code": "BR",
    "city": "Mossoro"
  },
  {
    "code": "HOR",
    "country_code": "PT",
    "city": "Horta (Azores)"
  },
  {
    "code": "DQA",
    "country_code": "CN",
    "city": "Daqing"
  },
  {
    "code": "VUU",
    "country_code": "MW",
    "city": "Mvuu Camp"
  },
  {
    "code": "FST",
    "country_code": "US",
    "city": "Fort Stockton"
  },
  {
    "code": "PNK",
    "country_code": "ID",
    "city": "Pontianak"
  },
  {
    "code": "CTC",
    "country_code": "AR",
    "city": "Catamarca"
  },
  {
    "code": "YYL",
    "country_code": "CA",
    "city": "Lynn Lake"
  },
  {
    "code": "PLN",
    "country_code": "US",
    "city": "Pellston"
  },
  {
    "code": "OIL",
    "country_code": "US",
    "city": "Oil City"
  },
  {
    "code": "OXR",
    "country_code": "US",
    "city": "Ventura"
  },
  {
    "code": "XND",
    "country_code": "NO",
    "city": "Drammen"
  },
  {
    "code": "CUS",
    "country_code": "US",
    "city": "Columbus"
  },
  {
    "code": "HCN",
    "country_code": "TW",
    "city": "Hengchun"
  },
  {
    "code": "BTV",
    "country_code": "US",
    "city": "Burlington"
  },
  {
    "code": "XMP",
    "country_code": "CA",
    "city": "Macmillan Pass"
  },
  {
    "code": "TMQ",
    "country_code": "BF",
    "city": "Tambao"
  },
  {
    "code": "MKK",
    "country_code": "US",
    "city": "Hoolehua"
  },
  {
    "code": "GCA",
    "country_code": "CO",
    "city": "Guacamaya"
  },
  {
    "code": "HUZ",
    "country_code": "CN",
    "city": "Huizhou"
  },
  {
    "code": "THG",
    "country_code": "AU",
    "city": "Thangool"
  },
  {
    "code": "UTO",
    "country_code": "US",
    "city": "Utopia Creek"
  },
  {
    "code": "ORJ",
    "country_code": "GY",
    "city": "Orinduik"
  },
  {
    "code": "SOI",
    "country_code": "AU",
    "city": "South Molle Island"
  },
  {
    "code": "BCA",
    "country_code": "CU",
    "city": "Baracoa"
  },
  {
    "code": "CLS",
    "country_code": "US",
    "city": "Chehalis"
  },
  {
    "code": "RQY",
    "country_code": "IN",
    "city": "Shimoga"
  },
  {
    "code": "ABU",
    "country_code": "ID",
    "city": "Atambua"
  },
  {
    "code": "GME",
    "country_code": "BY",
    "city": "Gomel"
  },
  {
    "code": "FAO",
    "country_code": "PT",
    "city": "Faro"
  },
  {
    "code": "RZE",
    "country_code": "PL",
    "city": "Rzeszow"
  },
  {
    "code": "WAW",
    "country_code": "PL",
    "city": "Warsaw"
  },
  {
    "code": "SYT",
    "country_code": "FR",
    "city": "Saint Yan"
  },
  {
    "code": "PEU",
    "country_code": "HN",
    "city": "Puerto Lempira"
  },
  {
    "code": "GDD",
    "country_code": "AU",
    "city": "Gordon Downs"
  },
  {
    "code": "JCK",
    "country_code": "AU",
    "city": "Julia Creek"
  },
  {
    "code": "JRN",
    "country_code": "BR",
    "city": "Juruena"
  },
  {
    "code": "OGB",
    "country_code": "US",
    "city": "Orangeburg"
  },
  {
    "code": "QZF",
    "country_code": "FR",
    "city": "Font-Romeu"
  },
  {
    "code": "STC",
    "country_code": "US",
    "city": "Saint Cloud"
  },
  {
    "code": "LGU",
    "country_code": "US",
    "city": "Logan"
  },
  {
    "code": "DHA",
    "country_code": "SA",
    "city": "Dhahran"
  },
  {
    "code": "MKS",
    "country_code": "ET",
    "city": "Mekane Selam"
  },
  {
    "code": "JAB",
    "country_code": "AU",
    "city": "Jabiru"
  },
  {
    "code": "AQA",
    "country_code": "BR",
    "city": "Araraquara"
  },
  {
    "code": "MAB",
    "country_code": "BR",
    "city": "Maraba"
  },
  {
    "code": "WLL",
    "country_code": "AU",
    "city": "Wollogorang"
  },
  {
    "code": "NCP",
    "country_code": "PH",
    "city": "Luzon Island"
  },
  {
    "code": "СБО",
    "country_code": "RU",
    "city": "Sobolevo"
  },
  {
    "code": "GUM",
    "country_code": "GU",
    "city": "Guam"
  },
  {
    "code": "TKE",
    "country_code": "US",
    "city": "Tenakee Springs"
  },
  {
    "code": "LNI",
    "country_code": "US",
    "city": "Lonely"
  },
  {
    "code": "CAO",
    "country_code": "US",
    "city": "Clayton"
  },
  {
    "code": "VBA",
    "country_code": "MM",
    "city": "Ann"
  },
  {
    "code": "MUI",
    "country_code": "US",
    "city": "Fort Indiantown"
  },
  {
    "code": "MXJ",
    "country_code": "NG",
    "city": "Minna"
  },
  {
    "code": "AEI",
    "country_code": "ES",
    "city": "Algeciras"
  },
  {
    "code": "BGE",
    "country_code": "US",
    "city": "Bainbridge"
  },
  {
    "code": "XPB",
    "country_code": "CA",
    "city": "Parksville"
  },
  {
    "code": "YDE",
    "country_code": "CA",
    "city": "Paradise River"
  },
  {
    "code": "SEF",
    "country_code": "US",
    "city": "Sebring"
  },
  {
    "code": "FMN",
    "country_code": "US",
    "city": "Farmington"
  },
  {
    "code": "ENS",
    "country_code": "NL",
    "city": "Enschede"
  },
  {
    "code": "IDO",
    "country_code": "BR",
    "city": "Santa Isabel Do Morro"
  },
  {
    "code": "BKX",
    "country_code": "US",
    "city": "Brookings"
  },
  {
    "code": "PDF",
    "country_code": "BR",
    "city": "Prado"
  },
  {
    "code": "VGS",
    "country_code": "AR",
    "city": "General Villegas"
  },
  {
    "code": "PUR",
    "country_code": "BO",
    "city": "Puerto Rico"
  },
  {
    "code": "HUJ",
    "country_code": "US",
    "city": "Hugo"
  },
  {
    "code": "TSU",
    "country_code": "KI",
    "city": "Tabiteuea South"
  },
  {
    "code": "UAR",
    "country_code": "MA",
    "city": "Bouarfa"
  },
  {
    "code": "DUR",
    "country_code": "ZA",
    "city": "Durban"
  },
  {
    "code": "GLO",
    "country_code": "GB",
    "city": "Gloucester"
  },
  {
    "code": "MMJ",
    "country_code": "JP",
    "city": "Matsumoto"
  },
  {
    "code": "BSO",
    "country_code": "PH",
    "city": "Basco"
  },
  {
    "code": "JIB",
    "country_code": "DJ",
    "city": "Djibouti"
  },
  {
    "code": "ERG",
    "country_code": "RU",
    "city": "Erbogachen"
  },
  {
    "code": "SHY",
    "country_code": "TZ",
    "city": "Shinyanga"
  },
  {
    "code": "OST",
    "country_code": "BE",
    "city": "Bruges"
  },
  {
    "code": "BTQ",
    "country_code": "RW",
    "city": "Butare"
  },
  {
    "code": "MOQ",
    "country_code": "MG",
    "city": "Morondava"
  },
  {
    "code": "ANH",
    "country_code": "SB",
    "city": "Anuha Island Resort"
  },
  {
    "code": "MIH",
    "country_code": "AU",
    "city": "Mitchell Plateau"
  },
  {
    "code": "COQ",
    "country_code": "MN",
    "city": "Choibalsan"
  },
  {
    "code": "HOM",
    "country_code": "US",
    "city": "Homer"
  },
  {
    "code": "TCN",
    "country_code": "MX",
    "city": "Tehuacan"
  },
  {
    "code": "NGN",
    "country_code": "PA",
    "city": "Nargana"
  },
  {
    "code": "GRC",
    "country_code": "LR",
    "city": "Grand Cess"
  },
  {
    "code": "YUM",
    "country_code": "US",
    "city": "Yuma"
  },
  {
    "code": "PRP",
    "country_code": "FR",
    "city": "Propriano"
  },
  {
    "code": "YOE",
    "country_code": "CA",
    "city": "Falher"
  },
  {
    "code": "POW",
    "country_code": "SI",
    "city": "Portoroz"
  },
  {
    "code": "ZEE",
    "country_code": "DE",
    "city": "Fulda"
  },
  {
    "code": "TON",
    "country_code": "PG",
    "city": "Tonu"
  },
  {
    "code": "BXH",
    "country_code": "KZ",
    "city": "Balhash"
  },
  {
    "code": "ELA",
    "country_code": "US",
    "city": "Eagle Lake"
  },
  {
    "code": "ZOM",
    "country_code": "DE",
    "city": "Minden"
  },
  {
    "code": "HUX",
    "country_code": "MX",
    "city": "Huatulco"
  },
  {
    "code": "NIO",
    "country_code": "CD",
    "city": "Nioki"
  },
  {
    "code": "NEJ",
    "country_code": "ET",
    "city": "Nejjo"
  },
  {
    "code": "LEF",
    "country_code": "LS",
    "city": "Lebakeng"
  },
  {
    "code": "AUA",
    "country_code": "AW",
    "city": "Aruba"
  },
  {
    "code": "OXY",
    "country_code": "AU",
    "city": "Morney"
  },
  {
    "code": "MBC",
    "country_code": "GA",
    "city": "Mbigou"
  },
  {
    "code": "LTQ",
    "country_code": "FR",
    "city": "Le Touquet"
  },
  {
    "code": "KWI",
    "country_code": "KW",
    "city": "Kuwait"
  },
  {
    "code": "AND",
    "country_code": "US",
    "city": "Anderson"
  },
  {
    "code": "CRO",
    "country_code": "US",
    "city": "Corcoran"
  },
  {
    "code": "СДР",
    "country_code": "RU",
    "city": "Surinda"
  },
  {
    "code": "JMB",
    "country_code": "AO",
    "city": "Jamba"
  },
  {
    "code": "GEY",
    "country_code": "US",
    "city": "Greybull"
  },
  {
    "code": "OEC",
    "country_code": "TL",
    "city": "Ocussi"
  },
  {
    "code": "LRE",
    "country_code": "AU",
    "city": "Longreach"
  },
  {
    "code": "FCY",
    "country_code": "US",
    "city": "Forrest City"
  },
  {
    "code": "ACA",
    "country_code": "MX",
    "city": "Acapulco"
  },
  {
    "code": "KFE",
    "country_code": "AU",
    "city": "Cloudbreak"
  },
  {
    "code": "ZCB",
    "country_code": "DE",
    "city": "Aschaffenburg"
  },
  {
    "code": "NBE",
    "country_code": "TN",
    "city": "Enfidha"
  },
  {
    "code": "XUO",
    "country_code": "NO",
    "city": "Nordagutu"
  },
  {
    "code": "GPT",
    "country_code": "US",
    "city": "Gulfport"
  },
  {
    "code": "КНК",
    "country_code": "RU",
    "city": "Krasnokamensk"
  },
  {
    "code": "MTS",
    "country_code": "SZ",
    "city": "Manzini"
  },
  {
    "code": "TOP",
    "country_code": "US",
    "city": "Topeka"
  },
  {
    "code": "CUU",
    "country_code": "MX",
    "city": "Chihuahua"
  },
  {
    "code": "CHQ",
    "country_code": "GR",
    "city": "Chania"
  },
  {
    "code": "KOE",
    "country_code": "ID",
    "city": "Kupang"
  },
  {
    "code": "UON",
    "country_code": "LA",
    "city": "Muong Sai"
  },
  {
    "code": "AGL",
    "country_code": "PG",
    "city": "Wanigela"
  },
  {
    "code": "FEN",
    "country_code": "BR",
    "city": "Fernando De Noronha"
  },
  {
    "code": "ANT",
    "country_code": "AT",
    "city": "St Anton"
  },
  {
    "code": "LDM",
    "country_code": "US",
    "city": "Ludington"
  },
  {
    "code": "CMK",
    "country_code": "MW",
    "city": "Club Makokola"
  },
  {
    "code": "ЭГТ",
    "country_code": "RU",
    "city": "Egvekinot"
  },
  {
    "code": "XXN",
    "country_code": "SE",
    "city": "Kil"
  },
  {
    "code": "PKW",
    "country_code": "BW",
    "city": "Selebi-Phikwe"
  },
  {
    "code": "UHE",
    "country_code": "CZ",
    "city": "Uherske Hradiste"
  },
  {
    "code": "KUV",
    "country_code": "KR",
    "city": "Gunsan"
  },
  {
    "code": "CLG",
    "country_code": "US",
    "city": "Coalinga"
  },
  {
    "code": "ETB",
    "country_code": "US",
    "city": "West Bend"
  },
  {
    "code": "POQ",
    "country_code": "US",
    "city": "Polk Inlet"
  },
  {
    "code": "DRH",
    "country_code": "ID",
    "city": "Dabra"
  },
  {
    "code": "KBV",
    "country_code": "TH",
    "city": "Krabi"
  },
  {
    "code": "XWO",
    "country_code": "GB",
    "city": "Woking"
  },
  {
    "code": "TIJ",
    "country_code": "MX",
    "city": "Tijuana"
  },
  {
    "code": "LSK",
    "country_code": "US",
    "city": "Lusk"
  },
  {
    "code": "BGP",
    "country_code": "GA",
    "city": "Bongo"
  },
  {
    "code": "WIC",
    "country_code": "GB",
    "city": "Wick"
  },
  {
    "code": "ERI",
    "country_code": "US",
    "city": "Erie"
  },
  {
    "code": "VKT",
    "country_code": "RU",
    "city": "Vorkuta"
  },
  {
    "code": "HVS",
    "country_code": "US",
    "city": "Hartsville"
  },
  {
    "code": "BWE",
    "country_code": "DE",
    "city": "Braunschweig"
  },
  {
    "code": "FOS",
    "country_code": "AU",
    "city": "Forrest"
  },
  {
    "code": "ABP",
    "country_code": "PG",
    "city": "Atkamba"
  },
  {
    "code": "SSO",
    "country_code": "BR",
    "city": "Sao Lourenco"
  },
  {
    "code": "XQU",
    "country_code": "CA",
    "city": "Qualicum"
  },
  {
    "code": "KUJ",
    "country_code": "JP",
    "city": "Kushimoto"
  },
  {
    "code": "JNB",
    "country_code": "ZA",
    "city": "Johannesburg"
  },
  {
    "code": "TXG",
    "country_code": "TW",
    "city": "Taichung"
  },
  {
    "code": "MYG",
    "country_code": "BS",
    "city": "Mayaguana"
  },
  {
    "code": "FFA",
    "country_code": "US",
    "city": "Kill Devil Hills"
  },
  {
    "code": "MWE",
    "country_code": "SD",
    "city": "Merowe"
  },
  {
    "code": "TYF",
    "country_code": "SE",
    "city": "Torsby"
  },
  {
    "code": "RIG",
    "country_code": "BR",
    "city": "Rio Grande"
  },
  {
    "code": "UPL",
    "country_code": "CR",
    "city": "Upala"
  },
  {
    "code": "KMC",
    "country_code": "SA",
    "city": "King Khalid Mil. City"
  },
  {
    "code": "OTK",
    "country_code": "US",
    "city": "Tillamook"
  },
  {
    "code": "OTS",
    "country_code": "US",
    "city": "Anacortes"
  },
  {
    "code": "KGY",
    "country_code": "AU",
    "city": "Kingaroy"
  },
  {
    "code": "АПУ",
    "country_code": "RU",
    "city": "Apuka"
  },
  {
    "code": "MSD",
    "country_code": "US",
    "city": "Mount Pleasant"
  },
  {
    "code": "MEE",
    "country_code": "NC",
    "city": "Mare"
  },
  {
    "code": "BLS",
    "country_code": "AU",
    "city": "Bollon"
  },
  {
    "code": "CEW",
    "country_code": "US",
    "city": "Crestview"
  },
  {
    "code": "GRP",
    "country_code": "BR",
    "city": "Gurupi"
  },
  {
    "code": "BAH",
    "country_code": "BH",
    "city": "Bahrain"
  },
  {
    "code": "SSU",
    "country_code": "US",
    "city": "White Sulphur Springs"
  },
  {
    "code": "SOQ",
    "country_code": "ID",
    "city": "Sorong"
  },
  {
    "code": "MTC",
    "country_code": "US",
    "city": "Mt Clemens"
  },
  {
    "code": "RLT",
    "country_code": "NE",
    "city": "Arlit"
  },
  {
    "code": "CNO",
    "country_code": "US",
    "city": "Chino"
  },
  {
    "code": "APZ",
    "country_code": "AR",
    "city": "Zapala"
  },
  {
    "code": "XJL",
    "country_code": "CA",
    "city": "Joliette"
  },
  {
    "code": "CBQ",
    "country_code": "NG",
    "city": "Calabar"
  },
  {
    "code": "VEO",
    "country_code": "RU",
    "city": "Severo-Eniseyskiy"
  },
  {
    "code": "YHK",
    "country_code": "CA",
    "city": "Gjoa Haven"
  },
  {
    "code": "ABC",
    "country_code": "ES",
    "city": "Albacete"
  },
  {
    "code": "DMU",
    "country_code": "IN",
    "city": "Dimapur"
  },
  {
    "code": "PPN",
    "country_code": "CO",
    "city": "Popayan"
  },
  {
    "code": "MJW",
    "country_code": "ZW",
    "city": "Mahenye"
  },
  {
    "code": "QJV",
    "country_code": "DK",
    "city": "Skagen Z7"
  },
  {
    "code": "DBQ",
    "country_code": "US",
    "city": "Dubuque"
  },
  {
    "code": "SAP",
    "country_code": "HN",
    "city": "San Pedro Sula"
  },
  {
    "code": "MUW",
    "country_code": "DZ",
    "city": "Mascara-Ghriss"
  },
  {
    "code": "YNB",
    "country_code": "SA",
    "city": "Yanbu"
  },
  {
    "code": "YVN",
    "country_code": "CA",
    "city": "Cape Dyer"
  },
  {
    "code": "LND",
    "country_code": "US",
    "city": "Lander"
  },
  {
    "code": "RZH",
    "country_code": "RU",
    "city": "Preobrazheniye"
  },
  {
    "code": "MET",
    "country_code": "AU",
    "city": "Moreton"
  },
  {
    "code": "BYQ",
    "country_code": "ID",
    "city": "Bunyu"
  },
  {
    "code": "GMA",
    "country_code": "CD",
    "city": "Gemena"
  },
  {
    "code": "THY",
    "country_code": "ZA",
    "city": "Thohoyandou"
  },
  {
    "code": "GMR",
    "country_code": "PF",
    "city": "Gambier Island"
  },
  {
    "code": "TNN",
    "country_code": "TW",
    "city": "Tainan"
  },
  {
    "code": "KTL",
    "country_code": "KE",
    "city": "Kitale"
  },
  {
    "code": "MXU",
    "country_code": "AU",
    "city": "Mullewa"
  },
  {
    "code": "SAV",
    "country_code": "US",
    "city": "Savannah"
  },
  {
    "code": "CIT",
    "country_code": "KZ",
    "city": "Shymkent"
  },
  {
    "code": "CZM",
    "country_code": "MX",
    "city": "Cozumel"
  },
  {
    "code": "IJK",
    "country_code": "RU",
    "city": "Izhevsk"
  },
  {
    "code": "TUL",
    "country_code": "US",
    "city": "Tulsa"
  },
  {
    "code": "DAN",
    "country_code": "US",
    "city": "Danville"
  },
  {
    "code": "NIF",
    "country_code": "AU",
    "city": "Nifty"
  },
  {
    "code": "SQY",
    "country_code": "BR",
    "city": "Sao Lourenco Do Sul"
  },
  {
    "code": "MSQ",
    "country_code": "BY",
    "city": "Minsk"
  },
  {
    "code": "HLW",
    "country_code": "ZA",
    "city": "Hluhluwe"
  },
  {
    "code": "BQQ",
    "country_code": "BR",
    "city": "Barra"
  },
  {
    "code": "MAF",
    "country_code": "US",
    "city": "Midland"
  },
  {
    "code": "OAN",
    "country_code": "HN",
    "city": "Olanchito"
  },
  {
    "code": "DRC",
    "country_code": "AO",
    "city": "Dirico"
  },
  {
    "code": "TLH",
    "country_code": "US",
    "city": "Tallahassee"
  },
  {
    "code": "JAT",
    "country_code": "MH",
    "city": "Jabot"
  },
  {
    "code": "MSC",
    "country_code": "US",
    "city": "Mesa"
  },
  {
    "code": "WXJ",
    "country_code": "CN",
    "city": "Wanning"
  },
  {
    "code": "TCH",
    "country_code": "GA",
    "city": "Tchibanga"
  },
  {
    "code": "TOG",
    "country_code": "US",
    "city": "Togiak Village"
  },
  {
    "code": "SVH",
    "country_code": "US",
    "city": "Statesville"
  },
  {
    "code": "PNV",
    "country_code": "LT",
    "city": "Panevezys"
  },
  {
    "code": "BQT",
    "country_code": "BY",
    "city": "Brest"
  },
  {
    "code": "CPL",
    "country_code": "CO",
    "city": "Chaparral"
  },
  {
    "code": "LXS",
    "country_code": "GR",
    "city": "Limnos"
  },
  {
    "code": "YAC",
    "country_code": "CA",
    "city": "Cat Lake"
  },
  {
    "code": "BSX",
    "country_code": "MM",
    "city": "Bassein"
  },
  {
    "code": "BYX",
    "country_code": "AU",
    "city": "Baniyala"
  },
  {
    "code": "WYS",
    "country_code": "US",
    "city": "West Yellowstone"
  },
  {
    "code": "YTC",
    "country_code": "CA",
    "city": "Sturdee"
  },
  {
    "code": "NNA",
    "country_code": "MA",
    "city": "Kenitra"
  },
  {
    "code": "OBL",
    "country_code": "BE",
    "city": "Zoersel"
  },
  {
    "code": "QGY",
    "country_code": "HU",
    "city": "Per"
  },
  {
    "code": "YDW",
    "country_code": "CA",
    "city": "Obre Lake"
  },
  {
    "code": "SJF",
    "country_code": "VI",
    "city": "St John Island"
  },
  {
    "code": "RFG",
    "country_code": "US",
    "city": "Refugio"
  },
  {
    "code": "HUN",
    "country_code": "TW",
    "city": "Hualien"
  },
  {
    "code": "BNN",
    "country_code": "NO",
    "city": "Bronnoysund"
  },
  {
    "code": "WLW",
    "country_code": "US",
    "city": "Willows"
  },
  {
    "code": "CYW",
    "country_code": "MX",
    "city": "Celaya"
  },
  {
    "code": "GDQ",
    "country_code": "ET",
    "city": "Gondar"
  },
  {
    "code": "YFH",
    "country_code": "CA",
    "city": "Fort Hope"
  },
  {
    "code": "BHV",
    "country_code": "PK",
    "city": "Bahawalpur"
  },
  {
    "code": "RJB",
    "country_code": "NP",
    "city": "Rajbiraj"
  },
  {
    "code": "ASL",
    "country_code": "US",
    "city": "Marshall"
  },
  {
    "code": "XAU",
    "country_code": "GF",
    "city": "Saul"
  },
  {
    "code": "ASC",
    "country_code": "BO",
    "city": "Ascension"
  },
  {
    "code": "REZ",
    "country_code": "BR",
    "city": "Resende"
  },
  {
    "code": "JAP",
    "country_code": "CR",
    "city": "Punta Renes"
  },
  {
    "code": "UNA",
    "country_code": "BR",
    "city": "Una"
  },
  {
    "code": "VKW",
    "country_code": "US",
    "city": "West Kavik"
  },
  {
    "code": "IES",
    "country_code": "DE",
    "city": "Riesa"
  },
  {
    "code": "REY",
    "country_code": "BO",
    "city": "Reyes"
  },
  {
    "code": "AAV",
    "country_code": "PH",
    "city": "Surallah"
  },
  {
    "code": "XHD",
    "country_code": "FI",
    "city": "Ruka"
  },
  {
    "code": "YLA",
    "country_code": "CA",
    "city": "Langara"
  },
  {
    "code": "UKY",
    "country_code": "JP",
    "city": "Kyoto"
  },
  {
    "code": "NCL",
    "country_code": "GB",
    "city": "Newcastle"
  },
  {
    "code": "BYM",
    "country_code": "CU",
    "city": "Bayamo"
  },
  {
    "code": "AJI",
    "country_code": "TR",
    "city": "Agri"
  },
  {
    "code": "MNN",
    "country_code": "US",
    "city": "Marion"
  },
  {
    "code": "NPE",
    "country_code": "NZ",
    "city": "Napier"
  },
  {
    "code": "IXM",
    "country_code": "IN",
    "city": "Madurai"
  },
  {
    "code": "TKY",
    "country_code": "AU",
    "city": "Turkey Creek"
  },
  {
    "code": "MLJ",
    "country_code": "US",
    "city": "Milledgeville"
  },
  {
    "code": "PDP",
    "country_code": "UY",
    "city": "Punta Del Este"
  },
  {
    "code": "BOB",
    "country_code": "PF",
    "city": "Bora Bora"
  },
  {
    "code": "SMM",
    "country_code": "MY",
    "city": "Semporna"
  },
  {
    "code": "HZV",
    "country_code": "ZA",
    "city": "Hazyview"
  },
  {
    "code": "PYE",
    "country_code": "CK",
    "city": "Penrhyn Island"
  },
  {
    "code": "BTJ",
    "country_code": "ID",
    "city": "Banda Aceh"
  },
  {
    "code": "URE",
    "country_code": "EE",
    "city": "Kuressaare"
  },
  {
    "code": "SSA",
    "country_code": "BR",
    "city": "Salvador"
  },
  {
    "code": "MPD",
    "country_code": "PK",
    "city": "Mirpur Khas"
  },
  {
    "code": "VNC",
    "country_code": "US",
    "city": "Venice"
  },
  {
    "code": "BIR",
    "country_code": "NP",
    "city": "Biratnagar"
  },
  {
    "code": "LIM",
    "country_code": "PE",
    "city": "Lima"
  },
  {
    "code": "GMM",
    "country_code": "CG",
    "city": "Gamboma"
  },
  {
    "code": "YNH",
    "country_code": "CA",
    "city": "Hudson's  Hope"
  },
  {
    "code": "MLK",
    "country_code": "US",
    "city": "Malta"
  },
  {
    "code": "WBU",
    "country_code": "US",
    "city": "Boulder"
  },
  {
    "code": "PTV",
    "country_code": "US",
    "city": "Porterville"
  },
  {
    "code": "SAN",
    "country_code": "US",
    "city": "San Diego"
  },
  {
    "code": "BDV",
    "country_code": "CD",
    "city": "Moba"
  },
  {
    "code": "YNE",
    "country_code": "CA",
    "city": "Norway House"
  },
  {
    "code": "NJF",
    "country_code": "IQ",
    "city": "Al-Najaf"
  },
  {
    "code": "GBU",
    "country_code": "SD",
    "city": "Khashm El Girba"
  },
  {
    "code": "TYA",
    "country_code": "RU",
    "city": "Tula"
  },
  {
    "code": "KNP",
    "country_code": "AO",
    "city": "Capanda"
  },
  {
    "code": "TZX",
    "country_code": "TR",
    "city": "Trabzon"
  },
  {
    "code": "GBC",
    "country_code": "PG",
    "city": "Gasuke"
  },
  {
    "code": "SLU",
    "country_code": "LC",
    "city": "Saint Lucia"
  },
  {
    "code": "CCA",
    "country_code": "US",
    "city": "Fort Chaffee"
  },
  {
    "code": "KEW",
    "country_code": "CA",
    "city": "Keewaywin"
  },
  {
    "code": "YFS",
    "country_code": "CA",
    "city": "Fort Simpson"
  },
  {
    "code": "PVK",
    "country_code": "GR",
    "city": "Preveza"
  },
  {
    "code": "KAO",
    "country_code": "FI",
    "city": "Kuusamo"
  },
  {
    "code": "MNK",
    "country_code": "KI",
    "city": "Maiana"
  },
  {
    "code": "OMY",
    "country_code": "KH",
    "city": "Oddor Meanche"
  },
  {
    "code": "БАТ",
    "country_code": "KG",
    "city": "Batken"
  },
  {
    "code": "DTR",
    "country_code": "US",
    "city": "Decatur Island"
  },
  {
    "code": "KHA",
    "country_code": "IR",
    "city": "Khaneh"
  },
  {
    "code": "HLB",
    "country_code": "US",
    "city": "Batesville"
  },
  {
    "code": "MUP",
    "country_code": "AU",
    "city": "Mulga Park"
  },
  {
    "code": "NAK",
    "country_code": "TH",
    "city": "Nakhon Ratchasima"
  },
  {
    "code": "DBR",
    "country_code": "IN",
    "city": "Darbhanga"
  },
  {
    "code": "PIG",
    "country_code": "BR",
    "city": "Pitinga"
  },
  {
    "code": "NPG",
    "country_code": "PG",
    "city": "Nipa"
  },
  {
    "code": "YNL",
    "country_code": "CA",
    "city": "Points North Landing"
  },
  {
    "code": "RBK",
    "country_code": "US",
    "city": "Rancho"
  },
  {
    "code": "BSC",
    "country_code": "CO",
    "city": "Bahia Solano"
  },
  {
    "code": "TMS",
    "country_code": "ST",
    "city": "Sao Tome Island"
  },
  {
    "code": "BCW",
    "country_code": "MZ",
    "city": "Benguera Island"
  },
  {
    "code": "BOZ",
    "country_code": "CF",
    "city": "Bozoum"
  },
  {
    "code": "SUE",
    "country_code": "US",
    "city": "Sturgeon Bay"
  },
  {
    "code": "GLZ",
    "country_code": "NL",
    "city": "Breda"
  },
  {
    "code": "KPM",
    "country_code": "PG",
    "city": "Kompiam"
  },
  {
    "code": "CND",
    "country_code": "RO",
    "city": "Constanta"
  },
  {
    "code": "SPN",
    "country_code": "MP",
    "city": "Saipan"
  },
  {
    "code": "GTE",
    "country_code": "AU",
    "city": "Groote Island"
  },
  {
    "code": "KNM",
    "country_code": "CD",
    "city": "Kaniama"
  },
  {
    "code": "ELE",
    "country_code": "PA",
    "city": "El Real"
  },
  {
    "code": "BBX",
    "country_code": "US",
    "city": "Blue Bell"
  },
  {
    "code": "KXU",
    "country_code": "PF",
    "city": "Katiu"
  },
  {
    "code": "GPZ",
    "country_code": "US",
    "city": "Grand Rapids"
  },
  {
    "code": "PRU",
    "country_code": "MM",
    "city": "Prome"
  },
  {
    "code": "SRW",
    "country_code": "US",
    "city": "Salisbury"
  },
  {
    "code": "YAH",
    "country_code": "CA",
    "city": "Lagrande 4"
  },
  {
    "code": "VOT",
    "country_code": "BR",
    "city": "Votuporanga"
  },
  {
    "code": "ZQF",
    "country_code": "DE",
    "city": "Trier"
  },
  {
    "code": "OUE",
    "country_code": "CG",
    "city": "Ouesso"
  },
  {
    "code": "HVB",
    "country_code": "AU",
    "city": "Hervey Bay"
  },
  {
    "code": "ATX",
    "country_code": "KZ",
    "city": "Atbasar"
  },
  {
    "code": "GYE",
    "country_code": "EC",
    "city": "Guayaquil"
  },
  {
    "code": "BSI",
    "country_code": "US",
    "city": "Blairsville"
  },
  {
    "code": "VLV",
    "country_code": "VE",
    "city": "Valera"
  },
  {
    "code": "GAD",
    "country_code": "US",
    "city": "Gadsden"
  },
  {
    "code": "NYN",
    "country_code": "AU",
    "city": "Nyngan"
  },
  {
    "code": "MDG",
    "country_code": "CN",
    "city": "Mudanjiang"
  },
  {
    "code": "LUU",
    "country_code": "AU",
    "city": "Laura"
  },
  {
    "code": "RCQ",
    "country_code": "AR",
    "city": "Reconquista"
  },
  {
    "code": "MFK",
    "country_code": "TW",
    "city": "Matsu"
  },
  {
    "code": "DOA",
    "country_code": "MG",
    "city": "Doany"
  },
  {
    "code": "TTJ",
    "country_code": "JP",
    "city": "Tottori"
  },
  {
    "code": "IVC",
    "country_code": "NZ",
    "city": "Invercargill"
  },
  {
    "code": "CZF",
    "country_code": "US",
    "city": "Cape Romanzof"
  },
  {
    "code": "THH",
    "country_code": "NZ",
    "city": "Taharoa"
  },
  {
    "code": "SVG",
    "country_code": "NO",
    "city": "Stavanger"
  },
  {
    "code": "SCZ",
    "country_code": "SB",
    "city": "Santa Cruz Island"
  },
  {
    "code": "ULZ",
    "country_code": "MN",
    "city": "Uliastai"
  },
  {
    "code": "SCU",
    "country_code": "CU",
    "city": "Santiago"
  },
  {
    "code": "GPS",
    "country_code": "EC",
    "city": "Galapagos Islands"
  },
  {
    "code": "SDH",
    "country_code": "HN",
    "city": "Santa Rosa Copan"
  },
  {
    "code": "MVA",
    "country_code": "IS",
    "city": "Myvatn"
  },
  {
    "code": "SGJ",
    "country_code": "PG",
    "city": "Sagarai"
  },
  {
    "code": "SEV",
    "country_code": "UA",
    "city": "Severodoneck"
  },
  {
    "code": "PMP",
    "country_code": "PG",
    "city": "Pimaga"
  },
  {
    "code": "TYZ",
    "country_code": "US",
    "city": "Taylor"
  },
  {
    "code": "VAN",
    "country_code": "TR",
    "city": "Van"
  },
  {
    "code": "VYS",
    "country_code": "US",
    "city": "Peru"
  },
  {
    "code": "SPY",
    "country_code": "CI",
    "city": "San Pedro"
  },
  {
    "code": "BDL",
    "country_code": "US",
    "city": "Hartford"
  },
  {
    "code": "MQI",
    "country_code": "US",
    "city": "Quincy"
  },
  {
    "code": "TNS",
    "country_code": "CA",
    "city": "Tungsten"
  },
  {
    "code": "PEB",
    "country_code": "MZ",
    "city": "Pebane"
  },
  {
    "code": "YNK",
    "country_code": "CA",
    "city": "Nootka Sound"
  },
  {
    "code": "YGK",
    "country_code": "CA",
    "city": "Kingston"
  },
  {
    "code": "LNZ",
    "country_code": "AT",
    "city": "Linz"
  },
  {
    "code": "BSH",
    "country_code": "GB",
    "city": "Brighton"
  },
  {
    "code": "EOR",
    "country_code": "VE",
    "city": "El Dorado"
  },
  {
    "code": "KPL",
    "country_code": "PG",
    "city": "Kapal"
  },
  {
    "code": "FUG",
    "country_code": "CN",
    "city": "Fuyang"
  },
  {
    "code": "LNC",
    "country_code": "PG",
    "city": "Lengbati"
  },
  {
    "code": "LYX",
    "country_code": "GB",
    "city": "Lydd"
  },
  {
    "code": "AOB",
    "country_code": "PG",
    "city": "Annanberg"
  },
  {
    "code": "KWR",
    "country_code": "SB",
    "city": "Kwai Harbour"
  },
  {
    "code": "ZKO",
    "country_code": "CH",
    "city": "Sierre/Siders"
  },
  {
    "code": "XXK",
    "country_code": "SE",
    "city": "Katrineholm"
  },
  {
    "code": "ZDD",
    "country_code": "CH",
    "city": "Arbon"
  },
  {
    "code": "KOY",
    "country_code": "US",
    "city": "Olga Bay"
  },
  {
    "code": "TRE",
    "country_code": "GB",
    "city": "Tiree, Inner Hebrides"
  },
  {
    "code": "BPF",
    "country_code": "SB",
    "city": "Batuna"
  },
  {
    "code": "TPJ",
    "country_code": "NP",
    "city": "Taplejung"
  },
  {
    "code": "IVL",
    "country_code": "FI",
    "city": "Ivalo"
  },
  {
    "code": "HLD",
    "country_code": "CN",
    "city": "Hailar"
  },
  {
    "code": "MFV",
    "country_code": "US",
    "city": "Melfa"
  },
  {
    "code": "FUN",
    "country_code": "TV",
    "city": "Funafuti Atol"
  },
  {
    "code": "TGQ",
    "country_code": "BR",
    "city": "Tangara da Serra"
  },
  {
    "code": "PHK",
    "country_code": "US",
    "city": "Pahokee"
  },
  {
    "code": "HBR",
    "country_code": "US",
    "city": "Hobart"
  },
  {
    "code": "WSJ",
    "country_code": "US",
    "city": "San Juan"
  },
  {
    "code": "AMH",
    "country_code": "ET",
    "city": "Arba Mintch"
  },
  {
    "code": "KKX",
    "country_code": "JP",
    "city": "Kikaiga Shima"
  },
  {
    "code": "ZNG",
    "country_code": "CA",
    "city": "Negginan"
  },
  {
    "code": "ORW",
    "country_code": "PK",
    "city": "Ormara"
  },
  {
    "code": "IFO",
    "country_code": "UA",
    "city": "Ivano-Frankovsk"
  },
  {
    "code": "LAO",
    "country_code": "PH",
    "city": "Laoag"
  },
  {
    "code": "VOG",
    "country_code": "RU",
    "city": "Volgograd"
  },
  {
    "code": "MLT",
    "country_code": "US",
    "city": "Millinocket"
  },
  {
    "code": "DRI",
    "country_code": "US",
    "city": "De Ridder"
  },
  {
    "code": "PGA",
    "country_code": "US",
    "city": "Page"
  },
  {
    "code": "AWD",
    "country_code": "VU",
    "city": "Aniwa"
  },
  {
    "code": "TBU",
    "country_code": "TO",
    "city": "Nuku'alofa"
  },
  {
    "code": "GDW",
    "country_code": "US",
    "city": "Gladwin"
  },
  {
    "code": "RKS",
    "country_code": "US",
    "city": "Rock Springs"
  },
  {
    "code": "ALW",
    "country_code": "US",
    "city": "Walla Walla"
  },
  {
    "code": "PYC",
    "country_code": "PA",
    "city": "Playon Chico"
  },
  {
    "code": "KDH",
    "country_code": "AF",
    "city": "Kandahar"
  },
  {
    "code": "ЧЕМ",
    "country_code": "RU",
    "city": "Chemdalsk"
  },
  {
    "code": "KKN",
    "country_code": "NO",
    "city": "Kirkenes"
  },
  {
    "code": "RMG",
    "country_code": "US",
    "city": "Rome"
  },
  {
    "code": "ONA",
    "country_code": "US",
    "city": "Winona"
  },
  {
    "code": "LEJ",
    "country_code": "DE",
    "city": "Leipzig/Halle"
  },
  {
    "code": "PES",
    "country_code": "RU",
    "city": "Petrozavodsk"
  },
  {
    "code": "EUF",
    "country_code": "US",
    "city": "Eufaula"
  },
  {
    "code": "MLP",
    "country_code": "PH",
    "city": "Malabang"
  },
  {
    "code": "KRU",
    "country_code": "PG",
    "city": "Kerau"
  },
  {
    "code": "TTT",
    "country_code": "TW",
    "city": "Taitung City"
  },
  {
    "code": "LPU",
    "country_code": "ID",
    "city": "Long Apung"
  },
  {
    "code": "MKJ",
    "country_code": "CG",
    "city": "Makoua"
  },
  {
    "code": "AAQ",
    "country_code": "RU",
    "city": "Anapa"
  },
  {
    "code": "YHP",
    "country_code": "CA",
    "city": "Poplar Hill"
  },
  {
    "code": "YFT",
    "country_code": "MO",
    "city": "Taipa"
  },
  {
    "code": "IFF",
    "country_code": "AU",
    "city": "Iffley"
  },
  {
    "code": "RAV",
    "country_code": "CO",
    "city": "Cravo Norte"
  },
  {
    "code": "ZYW",
    "country_code": "NO",
    "city": "Sandvika"
  },
  {
    "code": "AGW",
    "country_code": "AU",
    "city": "Agnew"
  },
  {
    "code": "JHW",
    "country_code": "US",
    "city": "Jamestown"
  },
  {
    "code": "NGA",
    "country_code": "AU",
    "city": "Young"
  },
  {
    "code": "BPO",
    "country_code": "CN",
    "city": "Bo'ao"
  },
  {
    "code": "SEW",
    "country_code": "EG",
    "city": "Siwa"
  },
  {
    "code": "GGT",
    "country_code": "BS",
    "city": "George Town"
  },
  {
    "code": "HKT",
    "country_code": "TH",
    "city": "Phuket"
  },
  {
    "code": "GLE",
    "country_code": "US",
    "city": "Gainesville"
  },
  {
    "code": "UNT",
    "country_code": "GB",
    "city": "Unst Shetland Island"
  },
  {
    "code": "BAJ",
    "country_code": "PG",
    "city": "Bali"
  },
  {
    "code": "CCW",
    "country_code": "AU",
    "city": "Cowell"
  },
  {
    "code": "MRN",
    "country_code": "US",
    "city": "Morganton"
  },
  {
    "code": "FNH",
    "country_code": "ET",
    "city": "Fincha"
  },
  {
    "code": "ISK",
    "country_code": "IN",
    "city": "Nasik"
  },
  {
    "code": "CKM",
    "country_code": "US",
    "city": "Clarksdale"
  },
  {
    "code": "KIQ",
    "country_code": "PG",
    "city": "Kira"
  },
  {
    "code": "SST",
    "country_code": "AR",
    "city": "Santa Teresita"
  },
  {
    "code": "MML",
    "country_code": "US",
    "city": "Marshall"
  },
  {
    "code": "NPU",
    "country_code": "CO",
    "city": "San Pedro Uraba"
  },
  {
    "code": "PIP",
    "country_code": "US",
    "city": "Pilot Point"
  },
  {
    "code": "DHT",
    "country_code": "US",
    "city": "Dalhart"
  },
  {
    "code": "YMU",
    "country_code": "CA",
    "city": "Mansons Landing"
  },
  {
    "code": "ERH",
    "country_code": "MA",
    "city": "Errachidia"
  },
  {
    "code": "LLK",
    "country_code": "AZ",
    "city": "Lankaran"
  },
  {
    "code": "HMA",
    "country_code": "RU",
    "city": "Khanty-Mansiysk"
  },
  {
    "code": "EYR",
    "country_code": "US",
    "city": "Yerington"
  },
  {
    "code": "TQR",
    "country_code": "IT",
    "city": "San Domino Island"
  },
  {
    "code": "WDS",
    "country_code": "CN",
    "city": "Shiyan"
  },
  {
    "code": "HNM",
    "country_code": "US",
    "city": "Hana"
  },
  {
    "code": "NUW",
    "country_code": "US",
    "city": "Whidbey Island"
  },
  {
    "code": "PWQ",
    "country_code": "KZ",
    "city": "Pavlodar"
  },
  {
    "code": "EBJ",
    "country_code": "DK",
    "city": "Esbjerg"
  },
  {
    "code": "MYW",
    "country_code": "TZ",
    "city": "Mtwara"
  },
  {
    "code": "ZIY",
    "country_code": "CN",
    "city": "Lianhuashan"
  },
  {
    "code": "KUN",
    "country_code": "LT",
    "city": "Kaunas"
  },
  {
    "code": "ZJM",
    "country_code": "CH",
    "city": "Martigny"
  },
  {
    "code": "EAS",
    "country_code": "ES",
    "city": "San Sebastian"
  },
  {
    "code": "SWX",
    "country_code": "BW",
    "city": "Shakawe"
  },
  {
    "code": "BYR",
    "country_code": "DK",
    "city": "Laeso Island"
  },
  {
    "code": "PPP",
    "country_code": "AU",
    "city": "Proserpine"
  },
  {
    "code": "BZV",
    "country_code": "CG",
    "city": "Brazzaville"
  },
  {
    "code": "ZRS",
    "country_code": "AT",
    "city": "Zurs"
  },
  {
    "code": "PFC",
    "country_code": "US",
    "city": "Pacific City"
  },
  {
    "code": "PWD",
    "country_code": "US",
    "city": "Plentywood"
  },
  {
    "code": "MAM",
    "country_code": "MX",
    "city": "Matamoros"
  },
  {
    "code": "QLZ",
    "country_code": "DK",
    "city": "Ikast"
  },
  {
    "code": "KIA",
    "country_code": "PG",
    "city": "Kaiapit"
  },
  {
    "code": "PUG",
    "country_code": "AU",
    "city": "Port Augusta"
  },
  {
    "code": "LGR",
    "country_code": "CL",
    "city": "Cochrane"
  },
  {
    "code": "XCM",
    "country_code": "CA",
    "city": "Chatham"
  },
  {
    "code": "HEI",
    "country_code": "DE",
    "city": "Heide-Buesum"
  },
  {
    "code": "BES",
    "country_code": "FR",
    "city": "Brest"
  },
  {
    "code": "QJW",
    "country_code": "DK",
    "city": "Kjellerup"
  },
  {
    "code": "KSG",
    "country_code": "PG",
    "city": "Kisengan"
  },
  {
    "code": "NRC",
    "country_code": "US",
    "city": "Crows Landing"
  },
  {
    "code": "CEM",
    "country_code": "US",
    "city": "Central"
  },
  {
    "code": "AOI",
    "country_code": "IT",
    "city": "Ancona"
  },
  {
    "code": "AMV",
    "country_code": "RU",
    "city": "Amderma"
  },
  {
    "code": "ECG",
    "country_code": "US",
    "city": "Elizabeth City"
  },
  {
    "code": "GND",
    "country_code": "GD",
    "city": "St. George's"
  },
  {
    "code": "YVQ",
    "country_code": "CA",
    "city": "Norman Wells"
  },
  {
    "code": "BGG",
    "country_code": "TR",
    "city": "Bingol"
  },
  {
    "code": "SEZ",
    "country_code": "SC",
    "city": "Mahe Island"
  },
  {
    "code": "PUN",
    "country_code": "CD",
    "city": "Punia"
  },
  {
    "code": "TME",
    "country_code": "CO",
    "city": "Tame"
  },
  {
    "code": "GSU",
    "country_code": "SD",
    "city": "Gedaref"
  },
  {
    "code": "IUE",
    "country_code": "NU",
    "city": "Niue Island"
  },
  {
    "code": "LKY",
    "country_code": "TZ",
    "city": "Lake Manyara"
  },
  {
    "code": "PWO",
    "country_code": "CD",
    "city": "Pweto"
  },
  {
    "code": "XOI",
    "country_code": "AT",
    "city": "Ischgl"
  },
  {
    "code": "IRA",
    "country_code": "SB",
    "city": "Kirakira"
  },
  {
    "code": "TSK",
    "country_code": "PG",
    "city": "Taskul"
  },
  {
    "code": "SLR",
    "country_code": "US",
    "city": "Sulphur Springs"
  },
  {
    "code": "KUC",
    "country_code": "KI",
    "city": "Kuria"
  },
  {
    "code": "FRD",
    "country_code": "US",
    "city": "Friday Harbor"
  },
  {
    "code": "LOE",
    "country_code": "TH",
    "city": "Loei"
  },
  {
    "code": "KDE",
    "country_code": "PG",
    "city": "Koroba"
  },
  {
    "code": "DOO",
    "country_code": "PG",
    "city": "Dorobisoro"
  },
  {
    "code": "ABF",
    "country_code": "KI",
    "city": "Abaiang"
  },
  {
    "code": "YZP",
    "country_code": "CA",
    "city": "Sandspit"
  },
  {
    "code": "GAC",
    "country_code": "HN",
    "city": "Gracias"
  },
  {
    "code": "OVG",
    "country_code": "ZA",
    "city": "Overberg"
  },
  {
    "code": "CSH",
    "country_code": "RU",
    "city": "Solovetsky"
  },
  {
    "code": "FPY",
    "country_code": "US",
    "city": "Perry"
  },
  {
    "code": "KYS",
    "country_code": "ML",
    "city": "Kayes"
  },
  {
    "code": "ЕСН",
    "country_code": "RU",
    "city": "Essentuki"
  },
  {
    "code": "QXE",
    "country_code": "IT",
    "city": "Sora"
  },
  {
    "code": "PZL",
    "country_code": "ZA",
    "city": "Phinda"
  },
  {
    "code": "ESI",
    "country_code": "BR",
    "city": "Espinosa"
  },
  {
    "code": "KHU",
    "country_code": "UA",
    "city": "Kremenchug"
  },
  {
    "code": "HEE",
    "country_code": "US",
    "city": "Helena"
  },
  {
    "code": "LLU",
    "country_code": "GL",
    "city": "Alluitsup Paa"
  },
  {
    "code": "YRT",
    "country_code": "CA",
    "city": "Rankin Inlet"
  },
  {
    "code": "TGP",
    "country_code": "RU",
    "city": "Bor"
  },
  {
    "code": "VGO",
    "country_code": "ES",
    "city": "Vigo"
  },
  {
    "code": "MZI",
    "country_code": "ML",
    "city": "Mopti"
  },
  {
    "code": "ANC",
    "country_code": "US",
    "city": "Anchorage"
  },
  {
    "code": "JAI",
    "country_code": "IN",
    "city": "Jaipur"
  },
  {
    "code": "MRE",
    "country_code": "KE",
    "city": "Mara Lodges"
  },
  {
    "code": "IMP",
    "country_code": "BR",
    "city": "Imperatriz"
  },
  {
    "code": "MNP",
    "country_code": "PG",
    "city": "Maron"
  },
  {
    "code": "WOE",
    "country_code": "NL",
    "city": "Woensdrecht"
  },
  {
    "code": "PIH",
    "country_code": "US",
    "city": "Pocatello"
  },
  {
    "code": "MEN",
    "country_code": "FR",
    "city": "Mende"
  },
  {
    "code": "MUH",
    "country_code": "EG",
    "city": "Mersa Matruh"
  },
  {
    "code": "MTQ",
    "country_code": "AU",
    "city": "Mitchell"
  },
  {
    "code": "GCD",
    "country_code": "US",
    "city": "Electric City"
  },
  {
    "code": "YEC",
    "country_code": "KR",
    "city": "Yecheon"
  },
  {
    "code": "MAO",
    "country_code": "BR",
    "city": "Manaus"
  },
  {
    "code": "ZHU",
    "country_code": "CH",
    "city": "Kreuzlingen"
  },
  {
    "code": "MTF",
    "country_code": "ET",
    "city": "Mizan Teferi"
  },
  {
    "code": "YGL",
    "country_code": "CA",
    "city": "La Grande"
  },
  {
    "code": "BZM",
    "country_code": "MG",
    "city": "Bemolanga"
  },
  {
    "code": "SMK",
    "country_code": "US",
    "city": "Saint Michael"
  },
  {
    "code": "PDI",
    "country_code": "PG",
    "city": "Pindiu"
  },
  {
    "code": "YXK",
    "country_code": "CA",
    "city": "Rimouski"
  },
  {
    "code": "INB",
    "country_code": "BZ",
    "city": "Independence"
  },
  {
    "code": "ZDS",
    "country_code": "CH",
    "city": "Chiasso"
  },
  {
    "code": "SIK",
    "country_code": "US",
    "city": "Sikeston"
  },
  {
    "code": "PML",
    "country_code": "US",
    "city": "Port Moller"
  },
  {
    "code": "IFA",
    "country_code": "US",
    "city": "Iowa Falls"
  },
  {
    "code": "KEA",
    "country_code": "ID",
    "city": "Keisah"
  },
  {
    "code": "RUS",
    "country_code": "SB",
    "city": "Marau Sound"
  },
  {
    "code": "ZKA",
    "country_code": "CH",
    "city": "Sargans"
  },
  {
    "code": "NCI",
    "country_code": "CO",
    "city": "Necocli"
  },
  {
    "code": "CKD",
    "country_code": "US",
    "city": "Crooked Creek"
  },
  {
    "code": "APH",
    "country_code": "US",
    "city": "Bowling Green"
  },
  {
    "code": "АЯК",
    "country_code": "RU",
    "city": "Ajanka"
  },
  {
    "code": "BSG",
    "country_code": "GQ",
    "city": "Bata"
  },
  {
    "code": "CHM",
    "country_code": "PE",
    "city": "Chimbote"
  },
  {
    "code": "YAS",
    "country_code": "FJ",
    "city": "Yasawa Island"
  },
  {
    "code": "DND",
    "country_code": "GB",
    "city": "Dundee"
  },
  {
    "code": "DLG",
    "country_code": "US",
    "city": "Dillingham"
  },
  {
    "code": "APS",
    "country_code": "BR",
    "city": "Anapolis"
  },
  {
    "code": "EAA",
    "country_code": "US",
    "city": "Eagle"
  },
  {
    "code": "HDB",
    "country_code": "DE",
    "city": "Heidelberg"
  },
  {
    "code": "XWA",
    "country_code": "CA",
    "city": "Watford"
  },
  {
    "code": "ОСУ",
    "country_code": "RU",
    "city": "Omsukchan"
  },
  {
    "code": "MNU",
    "country_code": "MM",
    "city": "Maulmyine"
  },
  {
    "code": "ZKG",
    "country_code": "CA",
    "city": "Kegaska"
  },
  {
    "code": "TST",
    "country_code": "TH",
    "city": "Trang"
  },
  {
    "code": "CUP",
    "country_code": "VE",
    "city": "Carupano"
  },
  {
    "code": "VIX",
    "country_code": "BR",
    "city": "Vitoria"
  },
  {
    "code": "ZTR",
    "country_code": "UA",
    "city": "Zhitomir"
  },
  {
    "code": "XXD",
    "country_code": "SE",
    "city": "Degerfors"
  },
  {
    "code": "VGA",
    "country_code": "IN",
    "city": "Vijayawada"
  },
  {
    "code": "PCF",
    "country_code": "ZA",
    "city": "Potchefstroom"
  },
  {
    "code": "DOE",
    "country_code": "SR",
    "city": "Djoemoe"
  },
  {
    "code": "YIG",
    "country_code": "CA",
    "city": "Big Bay Marina"
  },
  {
    "code": "RPR",
    "country_code": "IN",
    "city": "Raipur"
  },
  {
    "code": "SIS",
    "country_code": "ZA",
    "city": "Sishen"
  },
  {
    "code": "IXC",
    "country_code": "IN",
    "city": "Chandigarh"
  },
  {
    "code": "KMV",
    "country_code": "MM",
    "city": "Kalemyo"
  },
  {
    "code": "PLI",
    "country_code": "VC",
    "city": "Palm Island"
  },
  {
    "code": "BLL",
    "country_code": "DK",
    "city": "Billund"
  },
  {
    "code": "NOD",
    "country_code": "DE",
    "city": "Norden"
  },
  {
    "code": "CZX",
    "country_code": "CN",
    "city": "Changzhou"
  },
  {
    "code": "DUD",
    "country_code": "NZ",
    "city": "Dunedin"
  },
  {
    "code": "GAP",
    "country_code": "PG",
    "city": "Gusap"
  },
  {
    "code": "STI",
    "country_code": "DO",
    "city": "Santiago"
  },
  {
    "code": "GER",
    "country_code": "CU",
    "city": "Nueva Gerona"
  },
  {
    "code": "HOL",
    "country_code": "US",
    "city": "Holikachu"
  },
  {
    "code": "PYO",
    "country_code": "EC",
    "city": "Putumayo"
  },
  {
    "code": "RYK",
    "country_code": "PK",
    "city": "Rahim Yar Khan"
  },
  {
    "code": "HES",
    "country_code": "US",
    "city": "Hermiston"
  },
  {
    "code": "WBG",
    "country_code": "DE",
    "city": "Schleswig-jagel"
  },
  {
    "code": "MPY",
    "country_code": "GF",
    "city": "Maripasoula"
  },
  {
    "code": "PMD",
    "country_code": "US",
    "city": "Palmdale"
  },
  {
    "code": "ITI",
    "country_code": "BR",
    "city": "Itambacuri"
  },
  {
    "code": "HFT",
    "country_code": "NO",
    "city": "Hammerfest"
  },
  {
    "code": "SHF",
    "country_code": "CN",
    "city": "Shihezi"
  },
  {
    "code": "TPT",
    "country_code": "LR",
    "city": "Tapeta"
  },
  {
    "code": "CBP",
    "country_code": "PT",
    "city": "Coimbra"
  },
  {
    "code": "KRM",
    "country_code": "GY",
    "city": "Karanambo"
  },
  {
    "code": "ROX",
    "country_code": "US",
    "city": "Roseau"
  },
  {
    "code": "IRM",
    "country_code": "RU",
    "city": "Igrim"
  },
  {
    "code": "KPK",
    "country_code": "US",
    "city": "Parks"
  },
  {
    "code": "LYA",
    "country_code": "CN",
    "city": "Luoyang"
  },
  {
    "code": "LWE",
    "country_code": "ID",
    "city": "Lewoleba"
  },
  {
    "code": "LVK",
    "country_code": "US",
    "city": "Livermore"
  },
  {
    "code": "JNS",
    "country_code": "GL",
    "city": "Narsaq"
  },
  {
    "code": "GRA",
    "country_code": "CO",
    "city": "Gamarra"
  },
  {
    "code": "SVJ",
    "country_code": "NO",
    "city": "Svolvaer"
  },
  {
    "code": "NOL",
    "country_code": "US",
    "city": "Nakolik River"
  },
  {
    "code": "AIE",
    "country_code": "PG",
    "city": "Aiome"
  },
  {
    "code": "HON",
    "country_code": "US",
    "city": "Huron"
  },
  {
    "code": "WGE",
    "country_code": "AU",
    "city": "Walgett"
  },
  {
    "code": "CUJ",
    "country_code": "PH",
    "city": "Culion"
  },
  {
    "code": "HMG",
    "country_code": "AU",
    "city": "Hermannsburg"
  },
  {
    "code": "KDP",
    "country_code": "PG",
    "city": "Kandep"
  },
  {
    "code": "CHH",
    "country_code": "PE",
    "city": "Chachapoyas"
  },
  {
    "code": "FBA",
    "country_code": "BR",
    "city": "Fonte Boa"
  },
  {
    "code": "TWP",
    "country_code": "AU",
    "city": "Torwood"
  },
  {
    "code": "XPX",
    "country_code": "CA",
    "city": "Pointe-aux-Trembles"
  },
  {
    "code": "YKC",
    "country_code": "CA",
    "city": "Collins Bay"
  },
  {
    "code": "CAN",
    "country_code": "CN",
    "city": "Guangzhou"
  },
  {
    "code": "BAM",
    "country_code": "US",
    "city": "Battle Mountain"
  },
  {
    "code": "WAQ",
    "country_code": "MG",
    "city": "Antsalova"
  },
  {
    "code": "TJV",
    "country_code": "IN",
    "city": "Thanjavur"
  },
  {
    "code": "AUP",
    "country_code": "PG",
    "city": "Agaun"
  },
  {
    "code": "PAD",
    "country_code": "DE",
    "city": "Paderborn"
  },
  {
    "code": "GNA",
    "country_code": "BY",
    "city": "Grodno"
  },
  {
    "code": "GLG",
    "country_code": "AU",
    "city": "Glengyle"
  },
  {
    "code": "PHZ",
    "country_code": "TH",
    "city": "Phi Phi Island"
  },
  {
    "code": "YVO",
    "country_code": "CA",
    "city": "Val D'Or"
  },
  {
    "code": "HIG",
    "country_code": "AU",
    "city": "Highbury"
  },
  {
    "code": "KRO",
    "country_code": "RU",
    "city": "Kurgan"
  },
  {
    "code": "VHM",
    "country_code": "SE",
    "city": "Vilhelmina"
  },
  {
    "code": "ABB",
    "country_code": "NG",
    "city": "Asaba"
  },
  {
    "code": "LOA",
    "country_code": "AU",
    "city": "Lorraine"
  },
  {
    "code": "KPI",
    "country_code": "MY",
    "city": "Kapit"
  },
  {
    "code": "WRL",
    "country_code": "US",
    "city": "Worland"
  },
  {
    "code": "EKB",
    "country_code": "KZ",
    "city": "Ekibastuz"
  },
  {
    "code": "CPQ",
    "country_code": "BR",
    "city": "Campinas"
  },
  {
    "code": "GBL",
    "country_code": "AU",
    "city": "Goulburn Island"
  },
  {
    "code": "CPV",
    "country_code": "BR",
    "city": "Campina Grande"
  },
  {
    "code": "QYX",
    "country_code": "SE",
    "city": "Uppsala"
  },
  {
    "code": "YKJ",
    "country_code": "CA",
    "city": "Key Lake"
  },
  {
    "code": "KWD",
    "country_code": "CF",
    "city": "Kawadjia"
  },
  {
    "code": "EUX",
    "country_code": "NL",
    "city": "Saint Eustatius"
  },
  {
    "code": "YDG",
    "country_code": "CA",
    "city": "Digby"
  },
  {
    "code": "YNT",
    "country_code": "CN",
    "city": "Yantai"
  },
  {
    "code": "LDH",
    "country_code": "AU",
    "city": "Lord Howe Island"
  },
  {
    "code": "HHH",
    "country_code": "US",
    "city": "Hilton Head"
  },
  {
    "code": "SBN",
    "country_code": "US",
    "city": "South Bend"
  },
  {
    "code": "RES",
    "country_code": "AR",
    "city": "Resistencia"
  },
  {
    "code": "CGA",
    "country_code": "US",
    "city": "Craig"
  },
  {
    "code": "VTA",
    "country_code": "HN",
    "city": "Victoria"
  },
  {
    "code": "CTZ",
    "country_code": "US",
    "city": "Clinton"
  },
  {
    "code": "YGR",
    "country_code": "CA",
    "city": "Iles De La Madeleine"
  },
  {
    "code": "CBX",
    "country_code": "AU",
    "city": "Condobolin"
  },
  {
    "code": "MPF",
    "country_code": "PG",
    "city": "Mapoda"
  },
  {
    "code": "ICL",
    "country_code": "US",
    "city": "Clarinda"
  },
  {
    "code": "XGY",
    "country_code": "CA",
    "city": "Grimsby"
  },
  {
    "code": "TPR",
    "country_code": "AU",
    "city": "Tom Price"
  },
  {
    "code": "UDR",
    "country_code": "IN",
    "city": "Udaipur"
  },
  {
    "code": "TKB",
    "country_code": "PG",
    "city": "Tekadu"
  },
  {
    "code": "PPU",
    "country_code": "MM",
    "city": "Papun"
  },
  {
    "code": "AWE",
    "country_code": "GA",
    "city": "Alowe"
  },
  {
    "code": "СМГ",
    "country_code": "RU",
    "city": "Samarga"
  },
  {
    "code": "KTD",
    "country_code": "JP",
    "city": "Kitadaito"
  },
  {
    "code": "TOM",
    "country_code": "ML",
    "city": "Tombouctou"
  },
  {
    "code": "LDB",
    "country_code": "BR",
    "city": "Londrina"
  },
  {
    "code": "LIQ",
    "country_code": "CD",
    "city": "Lisala"
  },
  {
    "code": "FGU",
    "country_code": "PF",
    "city": "Fangatau"
  },
  {
    "code": "MEC",
    "country_code": "EC",
    "city": "Manta"
  },
  {
    "code": "LMC",
    "country_code": "CO",
    "city": "Lamacarena"
  },
  {
    "code": "TIR",
    "country_code": "IN",
    "city": "Tirupati"
  },
  {
    "code": "YBC",
    "country_code": "CA",
    "city": "Baie Comeau"
  },
  {
    "code": "FAV",
    "country_code": "PF",
    "city": "Fakarava"
  },
  {
    "code": "ELT",
    "country_code": "EG",
    "city": "Tour Sinai City"
  },
  {
    "code": "AYJ",
    "country_code": "IN",
    "city": "Ayodhya"
  },
  {
    "code": "YCM",
    "country_code": "CA",
    "city": "St Catharines"
  },
  {
    "code": "SJL",
    "country_code": "BR",
    "city": "Sao Gabriel"
  },
  {
    "code": "ZMY",
    "country_code": "CN",
    "city": "Huangpu"
  },
  {
    "code": "ZLO",
    "country_code": "MX",
    "city": "Manzanillo"
  },
  {
    "code": "DKL",
    "country_code": "CA",
    "city": "Kiwigana Lodge"
  },
  {
    "code": "PQC",
    "country_code": "VN",
    "city": "Phu Quoc"
  },
  {
    "code": "SYQ",
    "country_code": "CR",
    "city": "San Jose"
  },
  {
    "code": "SKI",
    "country_code": "DZ",
    "city": "Skikda"
  },
  {
    "code": "DAV",
    "country_code": "PA",
    "city": "David"
  },
  {
    "code": "NCU",
    "country_code": "UZ",
    "city": "Nukus"
  },
  {
    "code": "NNY",
    "country_code": "CN",
    "city": "Nanyang"
  },
  {
    "code": "SCK",
    "country_code": "US",
    "city": "Stockton"
  },
  {
    "code": "YPI",
    "country_code": "CA",
    "city": "Port Simpson"
  },
  {
    "code": "SML",
    "country_code": "BS",
    "city": "Stella Maris"
  },
  {
    "code": "KZB",
    "country_code": "US",
    "city": "Zachar Bay"
  },
  {
    "code": "BJI",
    "country_code": "US",
    "city": "Bemidji"
  },
  {
    "code": "NAR",
    "country_code": "CO",
    "city": "Nare"
  },
  {
    "code": "OKF",
    "country_code": "NA",
    "city": "Okaukuejo"
  },
  {
    "code": "INM",
    "country_code": "AU",
    "city": "Innamincka"
  },
  {
    "code": "MAE",
    "country_code": "US",
    "city": "Madera"
  },
  {
    "code": "KTA",
    "country_code": "AU",
    "city": "Karratha"
  },
  {
    "code": "KBJ",
    "country_code": "AU",
    "city": "Kings Canyon"
  },
  {
    "code": "XNV",
    "country_code": "GB",
    "city": "Nuneaton"
  },
  {
    "code": "MIE",
    "country_code": "US",
    "city": "Muncie"
  },
  {
    "code": "MMH",
    "country_code": "US",
    "city": "Mammoth Lakes"
  },
  {
    "code": "PAX",
    "country_code": "HT",
    "city": "Port De Paix"
  },
  {
    "code": "CUL",
    "country_code": "MX",
    "city": "Culiacan"
  },
  {
    "code": "SHM",
    "country_code": "JP",
    "city": "Shirahama"
  },
  {
    "code": "NLK",
    "country_code": "NF",
    "city": "Norfolk Island"
  },
  {
    "code": "MNL",
    "country_code": "PH",
    "city": "Manila"
  },
  {
    "code": "RTE",
    "country_code": "US",
    "city": "Marguerite Bay"
  },
  {
    "code": "LIE",
    "country_code": "CD",
    "city": "Libenge"
  },
  {
    "code": "BDT",
    "country_code": "CD",
    "city": "Gbadolite"
  },
  {
    "code": "PXR",
    "country_code": "TH",
    "city": "Surin"
  },
  {
    "code": "ALY",
    "country_code": "EG",
    "city": "Alexandria"
  },
  {
    "code": "INF",
    "country_code": "DZ",
    "city": "In Guezzam"
  },
  {
    "code": "SSX",
    "country_code": "ZA",
    "city": "Singita Safari Lodge"
  },
  {
    "code": "GXF",
    "country_code": "YE",
    "city": "Seiyun"
  },
  {
    "code": "ACM",
    "country_code": "CO",
    "city": "Arica"
  },
  {
    "code": "DDD",
    "country_code": "MV",
    "city": "Kudahuvadhoo"
  },
  {
    "code": "IXG",
    "country_code": "IN",
    "city": "Belgaum"
  },
  {
    "code": "XFS",
    "country_code": "CA",
    "city": "Alexandria"
  },
  {
    "code": "RCS",
    "country_code": "GB",
    "city": "Rochester"
  },
  {
    "code": "KSF",
    "country_code": "DE",
    "city": "Kassel"
  },
  {
    "code": "NHK",
    "country_code": "US",
    "city": "Patuxent River"
  },
  {
    "code": "ASB",
    "country_code": "TM",
    "city": "Ashgabat"
  },
  {
    "code": "BAN",
    "country_code": "CD",
    "city": "Basongo"
  },
  {
    "code": "BOP",
    "country_code": "CF",
    "city": "Bouar"
  },
  {
    "code": "SGT",
    "country_code": "US",
    "city": "Stuttgart"
  },
  {
    "code": "MPI",
    "country_code": "PA",
    "city": "Mamitupo"
  },
  {
    "code": "RCE",
    "country_code": "US",
    "city": "Roche Harbor"
  },
  {
    "code": "BVV",
    "country_code": "RU",
    "city": "Iturup Island"
  },
  {
    "code": "KFG",
    "country_code": "AU",
    "city": "Kalkgurung"
  },
  {
    "code": "LHP",
    "country_code": "PG",
    "city": "Lehu"
  },
  {
    "code": "NEV",
    "country_code": "KN",
    "city": "Nevis"
  },
  {
    "code": "VAB",
    "country_code": "CO",
    "city": "Yavarate"
  },
  {
    "code": "ZRM",
    "country_code": "ID",
    "city": "Sarmi"
  },
  {
    "code": "BHP",
    "country_code": "NP",
    "city": "Bhojpur"
  },
  {
    "code": "AIV",
    "country_code": "US",
    "city": "Aliceville"
  },
  {
    "code": "MFY",
    "country_code": "YE",
    "city": "Mayfa'ah"
  },
  {
    "code": "TIE",
    "country_code": "ET",
    "city": "Tippi"
  },
  {
    "code": "WHK",
    "country_code": "NZ",
    "city": "Whakatane"
  },
  {
    "code": "NUQ",
    "country_code": "US",
    "city": "Mountain View"
  },
  {
    "code": "LCS",
    "country_code": "CR",
    "city": "Las Canas"
  },
  {
    "code": "GVT",
    "country_code": "US",
    "city": "Greenville"
  },
  {
    "code": "AGT",
    "country_code": "PY",
    "city": "Ciudad del Este"
  },
  {
    "code": "MND",
    "country_code": "CO",
    "city": "Medina"
  },
  {
    "code": "MDJ",
    "country_code": "US",
    "city": "Madras"
  },
  {
    "code": "XXG",
    "country_code": "NO",
    "city": "Verdal"
  },
  {
    "code": "CGT",
    "country_code": "MR",
    "city": "Chinguitti"
  },
  {
    "code": "MNT",
    "country_code": "US",
    "city": "Minto"
  },
  {
    "code": "NWH",
    "country_code": "US",
    "city": "Newport"
  },
  {
    "code": "KMX",
    "country_code": "SA",
    "city": "Khamis Mushait"
  },
  {
    "code": "YBD",
    "country_code": "CA",
    "city": "New Westminster"
  },
  {
    "code": "WMO",
    "country_code": "US",
    "city": "White Mountain"
  },
  {
    "code": "HRG",
    "country_code": "EG",
    "city": "Hurghada"
  },
  {
    "code": "XEY",
    "country_code": "CA",
    "city": "Miramichi"
  },
  {
    "code": "LLS",
    "country_code": "AR",
    "city": "Las Lomitas"
  },
  {
    "code": "КЛК",
    "country_code": "RU",
    "city": "Kolekjegan"
  },
  {
    "code": "KIZ",
    "country_code": "PG",
    "city": "Kikinonda"
  },
  {
    "code": "ULG",
    "country_code": "MN",
    "city": "Ulgii"
  },
  {
    "code": "KNZ",
    "country_code": "ML",
    "city": "Kenieba"
  },
  {
    "code": "FIG",
    "country_code": "GN",
    "city": "Fria"
  },
  {
    "code": "MQW",
    "country_code": "US",
    "city": "Mc Rae"
  },
  {
    "code": "KRZ",
    "country_code": "CD",
    "city": "Kiri"
  },
  {
    "code": "UYL",
    "country_code": "SD",
    "city": "Nyala"
  },
  {
    "code": "HNH",
    "country_code": "US",
    "city": "Hoonah"
  },
  {
    "code": "NAQ",
    "country_code": "GL",
    "city": "Qaanaaq"
  },
  {
    "code": "DBT",
    "country_code": "ET",
    "city": "Debra Tabor"
  },
  {
    "code": "RRR",
    "country_code": "PF",
    "city": "Raroia"
  },
  {
    "code": "LIA",
    "country_code": "CN",
    "city": "Liangping"
  },
  {
    "code": "LCA",
    "country_code": "CY",
    "city": "Larnaca"
  },
  {
    "code": "QMV",
    "country_code": "US",
    "city": "Montvale"
  },
  {
    "code": "TMJ",
    "country_code": "UZ",
    "city": "Termez"
  },
  {
    "code": "MPM",
    "country_code": "MZ",
    "city": "Maputo"
  },
  {
    "code": "YFB",
    "country_code": "CA",
    "city": "Iqaluit"
  },
  {
    "code": "LON",
    "country_code": "GB",
    "city": "London"
  },
  {
    "code": "CQF",
    "country_code": "FR",
    "city": "Calais"
  },
  {
    "code": "HAY",
    "country_code": "US",
    "city": "Haycock"
  },
  {
    "code": "ZDI",
    "country_code": "CH",
    "city": "Bellinzona"
  },
  {
    "code": "KRK",
    "country_code": "PL",
    "city": "Krakow"
  },
  {
    "code": "GDV",
    "country_code": "US",
    "city": "Glendive"
  },
  {
    "code": "XKO",
    "country_code": "CA",
    "city": "Kemano"
  },
  {
    "code": "WEC",
    "country_code": "CN",
    "city": "Wenchang"
  },
  {
    "code": "BJS",
    "country_code": "CN",
    "city": "Beijing"
  },
  {
    "code": "ABQ",
    "country_code": "US",
    "city": "Albuquerque"
  },
  {
    "code": "TNE",
    "country_code": "JP",
    "city": "Tanegashima"
  },
  {
    "code": "AAU",
    "country_code": "WS",
    "city": "Asau"
  },
  {
    "code": "LWT",
    "country_code": "US",
    "city": "Lewistown"
  },
  {
    "code": "YBA",
    "country_code": "CA",
    "city": "Banff"
  },
  {
    "code": "NDN",
    "country_code": "PG",
    "city": "Nadunumu"
  },
  {
    "code": "SGE",
    "country_code": "DE",
    "city": "Siegen"
  },
  {
    "code": "PTF",
    "country_code": "FJ",
    "city": "Malololailai"
  },
  {
    "code": "SNF",
    "country_code": "VE",
    "city": "San Felipe"
  },
  {
    "code": "SND",
    "country_code": "LA",
    "city": "Seno"
  },
  {
    "code": "YNM",
    "country_code": "CA",
    "city": "Matagami"
  },
  {
    "code": "SUT",
    "country_code": "TZ",
    "city": "Sumbawanga"
  },
  {
    "code": "AYC",
    "country_code": "CO",
    "city": "Ayacucho"
  },
  {
    "code": "EOK",
    "country_code": "US",
    "city": "Keokuk"
  },
  {
    "code": "CSK",
    "country_code": "SN",
    "city": "Cap Skirring"
  },
  {
    "code": "CRM",
    "country_code": "PH",
    "city": "Catarman"
  },
  {
    "code": "QPT",
    "country_code": "BR",
    "city": "Patos De Minas"
  },
  {
    "code": "NPL",
    "country_code": "NZ",
    "city": "New Plymouth"
  },
  {
    "code": "CNB",
    "country_code": "AU",
    "city": "Coonamble"
  },
  {
    "code": "CHF",
    "country_code": "KR",
    "city": "Jinhae"
  },
  {
    "code": "ASG",
    "country_code": "NZ",
    "city": "Ashburton"
  },
  {
    "code": "SNJ",
    "country_code": "CU",
    "city": "San Julian"
  },
  {
    "code": "OHB",
    "country_code": "MG",
    "city": "Moramanga"
  },
  {
    "code": "NBO",
    "country_code": "KE",
    "city": "Nairobi"
  },
  {
    "code": "RSX",
    "country_code": "US",
    "city": "Rouses Point"
  },
  {
    "code": "DUJ",
    "country_code": "US",
    "city": "Du Bois"
  },
  {
    "code": "XSO",
    "country_code": "PH",
    "city": "Siocon"
  },
  {
    "code": "ЛРЯ",
    "country_code": "RU",
    "city": "Larjak"
  },
  {
    "code": "ACE",
    "country_code": "ES",
    "city": "Lanzarote"
  },
  {
    "code": "YZA",
    "country_code": "CA",
    "city": "Ashcroft"
  },
  {
    "code": "DGM",
    "country_code": "LK",
    "city": "Dongguan"
  },
  {
    "code": "GNS",
    "country_code": "ID",
    "city": "Gunungsitoli"
  },
  {
    "code": "TXK",
    "country_code": "US",
    "city": "Texarkana"
  },
  {
    "code": "DJM",
    "country_code": "CG",
    "city": "Djambala"
  },
  {
    "code": "TCO",
    "country_code": "CO",
    "city": "Tumaco"
  },
  {
    "code": "AFO",
    "country_code": "US",
    "city": "Afton"
  },
  {
    "code": "SCC",
    "country_code": "US",
    "city": "Prudhoe Bay/Deadhorse"
  },
  {
    "code": "ORZ",
    "country_code": "BZ",
    "city": "Orange Walk"
  },
  {
    "code": "CAC",
    "country_code": "BR",
    "city": "Cascavel"
  },
  {
    "code": "ORF",
    "country_code": "US",
    "city": "Norfolk"
  },
  {
    "code": "SHQ",
    "country_code": "AU",
    "city": "Southport"
  },
  {
    "code": "FSC",
    "country_code": "FR",
    "city": "Figari"
  },
  {
    "code": "ZKE",
    "country_code": "CA",
    "city": "Kashechewan"
  },
  {
    "code": "AYN",
    "country_code": "CN",
    "city": "Anyang"
  },
  {
    "code": "XEL",
    "country_code": "CA",
    "city": "New Carlisle"
  },
  {
    "code": "ADI",
    "country_code": "NA",
    "city": "Arandis"
  },
  {
    "code": "HMI",
    "country_code": "CN",
    "city": "Hami"
  },
  {
    "code": "PNF",
    "country_code": "US",
    "city": "Peterson's Point"
  },
  {
    "code": "SQS",
    "country_code": "BZ",
    "city": "San Ignacio"
  },
  {
    "code": "VLY",
    "country_code": "GB",
    "city": "Valley"
  },
  {
    "code": "RCM",
    "country_code": "AU",
    "city": "Richmond"
  },
  {
    "code": "YVS",
    "country_code": "NO",
    "city": "Ski"
  },
  {
    "code": "DUS",
    "country_code": "DE",
    "city": "Dusseldorf"
  },
  {
    "code": "UIP",
    "country_code": "FR",
    "city": "Quimper"
  },
  {
    "code": "TTR",
    "country_code": "ID",
    "city": "Tana Toraja"
  },
  {
    "code": "TWY",
    "country_code": "PG",
    "city": "Tawa"
  },
  {
    "code": "SGI",
    "country_code": "PK",
    "city": "Sargodha"
  },
  {
    "code": "KGE",
    "country_code": "SB",
    "city": "Kagau"
  },
  {
    "code": "KNG",
    "country_code": "ID",
    "city": "Kaimana"
  },
  {
    "code": "UGS",
    "country_code": "US",
    "city": "Ugashik"
  },
  {
    "code": "SWF",
    "country_code": "US",
    "city": "Newburgh"
  },
  {
    "code": "LZY",
    "country_code": "CN",
    "city": "Nyingchi"
  },
  {
    "code": "KMT",
    "country_code": "KH",
    "city": "Kampot"
  },
  {
    "code": "RNC",
    "country_code": "US",
    "city": "Mcminnville"
  },
  {
    "code": "BZL",
    "country_code": "BD",
    "city": "Barisal"
  },
  {
    "code": "XJR",
    "country_code": "ES",
    "city": "Lorca"
  },
  {
    "code": "VRY",
    "country_code": "NO",
    "city": "Vaeroy"
  },
  {
    "code": "JGR",
    "country_code": "GL",
    "city": "Groennedal"
  },
  {
    "code": "YUE",
    "country_code": "AU",
    "city": "Yuendumu"
  },
  {
    "code": "ZSH",
    "country_code": "US",
    "city": "Santa Fe"
  },
  {
    "code": "PUH",
    "country_code": "MX",
    "city": "Pochutla"
  },
  {
    "code": "IFH",
    "country_code": "IR",
    "city": "Hesa"
  },
  {
    "code": "SDY",
    "country_code": "US",
    "city": "Sidney"
  },
  {
    "code": "AHI",
    "country_code": "ID",
    "city": "Amahai"
  },
  {
    "code": "SIQ",
    "country_code": "ID",
    "city": "Singkep"
  },
  {
    "code": "XYR",
    "country_code": "PG",
    "city": "Yellow River"
  },
  {
    "code": "VRI",
    "country_code": "RU",
    "city": "Varandey"
  },
  {
    "code": "YNR",
    "country_code": "CA",
    "city": "Arnes"
  },
  {
    "code": "XVV",
    "country_code": "CA",
    "city": "Belleville"
  },
  {
    "code": "NSP",
    "country_code": "PH",
    "city": "Sangley Point"
  },
  {
    "code": "PMQ",
    "country_code": "AR",
    "city": "Perito Moreno"
  },
  {
    "code": "RGS",
    "country_code": "ES",
    "city": "Burgos"
  },
  {
    "code": "EVD",
    "country_code": "AU",
    "city": "Eva Downs"
  },
  {
    "code": "LOT",
    "country_code": "US",
    "city": "Lockport"
  },
  {
    "code": "LPQ",
    "country_code": "LA",
    "city": "Luang Prabang"
  },
  {
    "code": "SRN",
    "country_code": "AU",
    "city": "Strahan"
  },
  {
    "code": "NRD",
    "country_code": "DE",
    "city": "Norderney"
  },
  {
    "code": "YSN",
    "country_code": "CA",
    "city": "Salmon Arm"
  },
  {
    "code": "RMF",
    "country_code": "EG",
    "city": "Marsa Alam"
  },
  {
    "code": "FSK",
    "country_code": "US",
    "city": "Fort Scott"
  },
  {
    "code": "YUS",
    "country_code": "CN",
    "city": "Yushu"
  },
  {
    "code": "TLQ",
    "country_code": "CN",
    "city": "Turpan"
  },
  {
    "code": "MQQ",
    "country_code": "TD",
    "city": "Moundou"
  },
  {
    "code": "MMK",
    "country_code": "RU",
    "city": "Murmansk"
  },
  {
    "code": "YQD",
    "country_code": "CA",
    "city": "The Pas"
  },
  {
    "code": "MQX",
    "country_code": "ET",
    "city": "Makale"
  },
  {
    "code": "HUV",
    "country_code": "SE",
    "city": "Hudiksvall"
  },
  {
    "code": "NSN",
    "country_code": "NZ",
    "city": "Nelson"
  },
  {
    "code": "XYX",
    "country_code": "SE",
    "city": "Sala"
  },
  {
    "code": "KOR",
    "country_code": "PG",
    "city": "Kokoro"
  },
  {
    "code": "KGX",
    "country_code": "US",
    "city": "Grayling"
  },
  {
    "code": "IDH",
    "country_code": "US",
    "city": "Grangeville"
  },
  {
    "code": "WBQ",
    "country_code": "US",
    "city": "Beaver"
  },
  {
    "code": "MIV",
    "country_code": "US",
    "city": "Millville"
  },
  {
    "code": "HSG",
    "country_code": "JP",
    "city": "Saga"
  },
  {
    "code": "ESH",
    "country_code": "GB",
    "city": "Shoreham By Sea"
  },
  {
    "code": "KGH",
    "country_code": "PG",
    "city": "Yongai"
  },
  {
    "code": "VLU",
    "country_code": "RU",
    "city": "Velikiye Luki"
  },
  {
    "code": "CCH",
    "country_code": "CL",
    "city": "Chile Chico"
  },
  {
    "code": "FOC",
    "country_code": "CN",
    "city": "Fuzhou"
  },
  {
    "code": "QYI",
    "country_code": "NL",
    "city": "Hilversum"
  },
  {
    "code": "WAT",
    "country_code": "IE",
    "city": "Waterford"
  },
  {
    "code": "NRI",
    "country_code": "US",
    "city": "Shangri-la"
  },
  {
    "code": "SUX",
    "country_code": "US",
    "city": "Sioux City"
  },
  {
    "code": "OSR",
    "country_code": "CZ",
    "city": "Ostrava"
  },
  {
    "code": "ZFB",
    "country_code": "CA",
    "city": "Old Fort Bay"
  },
  {
    "code": "PNU",
    "country_code": "US",
    "city": "Panguitch"
  },
  {
    "code": "LUT",
    "country_code": "AU",
    "city": "Laura Station"
  },
  {
    "code": "GDL",
    "country_code": "MX",
    "city": "Guadalajara"
  },
  {
    "code": "LRI",
    "country_code": "CO",
    "city": "Lorica"
  },
  {
    "code": "YYH",
    "country_code": "CA",
    "city": "Taloyoak"
  },
  {
    "code": "AXR",
    "country_code": "PF",
    "city": "Arutua"
  },
  {
    "code": "TMK",
    "country_code": "VN",
    "city": "Tamky"
  },
  {
    "code": "MXV",
    "country_code": "MN",
    "city": "Moron"
  },
  {
    "code": "KHT",
    "country_code": "AF",
    "city": "Khost"
  },
  {
    "code": "OAA",
    "country_code": "AF",
    "city": "Shank"
  },
  {
    "code": "YOL",
    "country_code": "NG",
    "city": "Yola"
  },
  {
    "code": "BRA",
    "country_code": "BR",
    "city": "Barreiras"
  },
  {
    "code": "VMI",
    "country_code": "PY",
    "city": "Vallemi"
  },
  {
    "code": "BUV",
    "country_code": "UY",
    "city": "Bella Union"
  },
  {
    "code": "ZKM",
    "country_code": "GA",
    "city": "Sette Cama"
  },
  {
    "code": "HNN",
    "country_code": "PG",
    "city": "Honinabi"
  },
  {
    "code": "BEU",
    "country_code": "AU",
    "city": "Bedourie"
  },
  {
    "code": "CEF",
    "country_code": "US",
    "city": "Chicopee"
  },
  {
    "code": "RAK",
    "country_code": "MA",
    "city": "Marrakech"
  },
  {
    "code": "CEO",
    "country_code": "AO",
    "city": "Waco Kungo"
  },
  {
    "code": "GFF",
    "country_code": "AU",
    "city": "Griffith"
  },
  {
    "code": "RIF",
    "country_code": "US",
    "city": "Richfield"
  },
  {
    "code": "KBL",
    "country_code": "AF",
    "city": "Kabul"
  },
  {
    "code": "MKV",
    "country_code": "AU",
    "city": "Mount Cavenagh"
  },
  {
    "code": "QXV",
    "country_code": "DK",
    "city": "Svendborg"
  },
  {
    "code": "BAA",
    "country_code": "PG",
    "city": "Bialla"
  },
  {
    "code": "THK",
    "country_code": "LA",
    "city": "Thakhek"
  },
  {
    "code": "LOB",
    "country_code": "CL",
    "city": "Los Andes"
  },
  {
    "code": "SWM",
    "country_code": "BR",
    "city": "Suia-Missu"
  },
  {
    "code": "PGD",
    "country_code": "US",
    "city": "Punta Gorda"
  },
  {
    "code": "MXW",
    "country_code": "MN",
    "city": "Mandalgobi"
  },
  {
    "code": "ZEC",
    "country_code": "ZA",
    "city": "Secunda"
  },
  {
    "code": "XOQ",
    "country_code": "NO",
    "city": "Sira"
  },
  {
    "code": "YCV",
    "country_code": "CA",
    "city": "Cartierville"
  },
  {
    "code": "DGH",
    "country_code": "IN",
    "city": "Deoghar"
  },
  {
    "code": "SDL",
    "country_code": "SE",
    "city": "Sundsvall"
  },
  {
    "code": "XLS",
    "country_code": "SN",
    "city": "St Louis"
  },
  {
    "code": "UBB",
    "country_code": "AU",
    "city": "Mabuiag Island"
  },
  {
    "code": "SBX",
    "country_code": "US",
    "city": "Shelby"
  },
  {
    "code": "XYC",
    "country_code": "SE",
    "city": "Herrljunga"
  },
  {
    "code": "DVO",
    "country_code": "PH",
    "city": "Davao"
  },
  {
    "code": "EKS",
    "country_code": "RU",
    "city": "Shakhtyorsk"
  },
  {
    "code": "RKP",
    "country_code": "US",
    "city": "Rockport"
  },
  {
    "code": "YFC",
    "country_code": "CA",
    "city": "Fredericton"
  },
  {
    "code": "ONO",
    "country_code": "US",
    "city": "Ontario"
  },
  {
    "code": "BLB",
    "country_code": "PA",
    "city": "Balboa"
  },
  {
    "code": "MOI",
    "country_code": "CK",
    "city": "Mitiaro Island"
  },
  {
    "code": "IZO",
    "country_code": "JP",
    "city": "Izumo"
  },
  {
    "code": "MUJ",
    "country_code": "ET",
    "city": "Mui"
  },
  {
    "code": "CYE",
    "country_code": "US",
    "city": "Crystal Lake"
  },
  {
    "code": "KYF",
    "country_code": "AU",
    "city": "Yeelirrie"
  },
  {
    "code": "SIN",
    "country_code": "SG",
    "city": "Singapore"
  },
  {
    "code": "OUL",
    "country_code": "FI",
    "city": "Oulu"
  },
  {
    "code": "LBJ",
    "country_code": "ID",
    "city": "Labuan Bajo"
  },
  {
    "code": "ENE",
    "country_code": "ID",
    "city": "Ende"
  },
  {
    "code": "SMR",
    "country_code": "CO",
    "city": "Santa Marta"
  },
  {
    "code": "OTN",
    "country_code": "US",
    "city": "Oaktown"
  },
  {
    "code": "XKI",
    "country_code": "NO",
    "city": "Lillestrom"
  },
  {
    "code": "ZIR",
    "country_code": "DK",
    "city": "Randers"
  },
  {
    "code": "YEV",
    "country_code": "CA",
    "city": "Inuvik"
  },
  {
    "code": "YSV",
    "country_code": "CA",
    "city": "Saglek"
  },
  {
    "code": "TEA",
    "country_code": "HN",
    "city": "Tela"
  },
  {
    "code": "CDD",
    "country_code": "HN",
    "city": "Cauquira"
  },
  {
    "code": "YMN",
    "country_code": "CA",
    "city": "Makkovik"
  },
  {
    "code": "TEC",
    "country_code": "BR",
    "city": "Telemaco Borba"
  },
  {
    "code": "GNG",
    "country_code": "US",
    "city": "Gooding"
  },
  {
    "code": "GON",
    "country_code": "US",
    "city": "New London"
  },
  {
    "code": "ANO",
    "country_code": "MZ",
    "city": "Angoche"
  },
  {
    "code": "RRG",
    "country_code": "MU",
    "city": "Rodrigues Island"
  },
  {
    "code": "MIN",
    "country_code": "AU",
    "city": "Minnipa"
  },
  {
    "code": "URZ",
    "country_code": "AF",
    "city": "Uruzgan"
  },
  {
    "code": "FDK",
    "country_code": "US",
    "city": "Frederick"
  },
  {
    "code": "SLH",
    "country_code": "VU",
    "city": "Sola"
  },
  {
    "code": "CSX",
    "country_code": "CN",
    "city": "Changsha"
  },
  {
    "code": "AVG",
    "country_code": "AU",
    "city": "Auvergne"
  },
  {
    "code": "KDJ",
    "country_code": "GA",
    "city": "Ndjole"
  },
  {
    "code": "ZBE",
    "country_code": "CZ",
    "city": "Zabreh"
  },
  {
    "code": "RRM",
    "country_code": "MZ",
    "city": "Marromeu"
  },
  {
    "code": "WBB",
    "country_code": "US",
    "city": "Stebbins"
  },
  {
    "code": "KCL",
    "country_code": "US",
    "city": "Chignik"
  },
  {
    "code": "BWX",
    "country_code": "ID",
    "city": "Banyuwangi"
  },
  {
    "code": "PVR",
    "country_code": "MX",
    "city": "Puerto Vallarta"
  },
  {
    "code": "YSD",
    "country_code": "CA",
    "city": "Suffield"
  },
  {
    "code": "HII",
    "country_code": "US",
    "city": "Lake Havasu City"
  },
  {
    "code": "OFK",
    "country_code": "US",
    "city": "Norfolk"
  },
  {
    "code": "LEK",
    "country_code": "GN",
    "city": "Labe"
  },
  {
    "code": "BJZ",
    "country_code": "ES",
    "city": "Badajoz"
  },
  {
    "code": "DKI",
    "country_code": "AU",
    "city": "Dunk Island"
  },
  {
    "code": "WAX",
    "country_code": "LY",
    "city": "Zwara"
  },
  {
    "code": "LMP",
    "country_code": "IT",
    "city": "Lampedusa"
  },
  {
    "code": "IOK",
    "country_code": "PG",
    "city": "Iokea"
  },
  {
    "code": "AHW",
    "country_code": "OM",
    "city": "Saih Rawl"
  },
  {
    "code": "YCZ",
    "country_code": "CA",
    "city": "Fairmont Hot Springs"
  },
  {
    "code": "NGB",
    "country_code": "CN",
    "city": "Ningbo"
  },
  {
    "code": "POP",
    "country_code": "DO",
    "city": "Puerto Plata"
  },
  {
    "code": "PEP",
    "country_code": "AU",
    "city": "Peppimenarti"
  },
  {
    "code": "LBY",
    "country_code": "FR",
    "city": "La Baule-Escoublac"
  },
  {
    "code": "ZAL",
    "country_code": "CL",
    "city": "Valdivia"
  },
  {
    "code": "GTO",
    "country_code": "ID",
    "city": "Gorontalo"
  },
  {
    "code": "YQZ",
    "country_code": "CA",
    "city": "Quesnel"
  },
  {
    "code": "CFN",
    "country_code": "IE",
    "city": "Donegal"
  },
  {
    "code": "CKN",
    "country_code": "US",
    "city": "Crookston"
  },
  {
    "code": "LNX",
    "country_code": "RU",
    "city": "Smolensk"
  },
  {
    "code": "ЖЕЗ",
    "country_code": "RU",
    "city": "Zheleznogorsk"
  },
  {
    "code": "RGT",
    "country_code": "ID",
    "city": "Rengat"
  },
  {
    "code": "MXX",
    "country_code": "SE",
    "city": "Mora"
  },
  {
    "code": "TBA",
    "country_code": "PG",
    "city": "Tabibuga"
  },
  {
    "code": "LFW",
    "country_code": "TG",
    "city": "Lome"
  },
  {
    "code": "SET",
    "country_code": "HN",
    "city": "San Esteban"
  },
  {
    "code": "YVK",
    "country_code": "NO",
    "city": "Koppang"
  },
  {
    "code": "PGB",
    "country_code": "PG",
    "city": "Pangoa"
  },
  {
    "code": "HKD",
    "country_code": "JP",
    "city": "Hakodate"
  },
  {
    "code": "KOC",
    "country_code": "NC",
    "city": "Koumac"
  },
  {
    "code": "IRI",
    "country_code": "TZ",
    "city": "Iringa"
  },
  {
    "code": "HJR",
    "country_code": "IN",
    "city": "Khajuraho"
  },
  {
    "code": "UTU",
    "country_code": "PA",
    "city": "Ustupo"
  },
  {
    "code": "DIE",
    "country_code": "MG",
    "city": "Antsiranana"
  },
  {
    "code": "PMI",
    "country_code": "ES",
    "city": "Palma Mallorca"
  },
  {
    "code": "SAU",
    "country_code": "ID",
    "city": "Sawu"
  },
  {
    "code": "AYK",
    "country_code": "KZ",
    "city": "Arkalyk"
  },
  {
    "code": "THQ",
    "country_code": "CN",
    "city": "Tianshui"
  },
  {
    "code": "PIF",
    "country_code": "TW",
    "city": "Pingtung"
  },
  {
    "code": "BIV",
    "country_code": "CF",
    "city": "Bria"
  },
  {
    "code": "SZH",
    "country_code": "ID",
    "city": "Senipah"
  },
  {
    "code": "POS",
    "country_code": "TT",
    "city": "Port Of Spain"
  },
  {
    "code": "UOX",
    "country_code": "US",
    "city": "Oxford"
  },
  {
    "code": "YIW",
    "country_code": "CN",
    "city": "Yiwu"
  },
  {
    "code": "AAW",
    "country_code": "PK",
    "city": "Abbottabad"
  },
  {
    "code": "MFA",
    "country_code": "TZ",
    "city": "Mafia"
  },
  {
    "code": "NVD",
    "country_code": "US",
    "city": "Nevada"
  },
  {
    "code": "OKE",
    "country_code": "JP",
    "city": "Okino Erabu"
  },
  {
    "code": "HMO",
    "country_code": "MX",
    "city": "Hermosillo"
  },
  {
    "code": "PTW",
    "country_code": "US",
    "city": "Pottstown"
  },
  {
    "code": "YLQ",
    "country_code": "CA",
    "city": "La Tuque"
  },
  {
    "code": "BEE",
    "country_code": "AU",
    "city": "Beagle Bay"
  },
  {
    "code": "GKK",
    "country_code": "MV",
    "city": "Kooddoo"
  },
  {
    "code": "CCX",
    "country_code": "BR",
    "city": "Caceres"
  },
  {
    "code": "WRH",
    "country_code": "US",
    "city": "Wrench Creek"
  },
  {
    "code": "EKN",
    "country_code": "US",
    "city": "Elkins"
  },
  {
    "code": "KAI",
    "country_code": "GY",
    "city": "Kaieteur"
  },
  {
    "code": "WVN",
    "country_code": "DE",
    "city": "Wilhelmshaven"
  },
  {
    "code": "BUX",
    "country_code": "CD",
    "city": "Bunia"
  },
  {
    "code": "RBE",
    "country_code": "KH",
    "city": "Ratanakiri"
  },
  {
    "code": "MUY",
    "country_code": "CG",
    "city": "Mouyondzi"
  },
  {
    "code": "COY",
    "country_code": "AU",
    "city": "Coolawanyah"
  },
  {
    "code": "NEN",
    "country_code": "US",
    "city": "Whitehouse"
  },
  {
    "code": "QYC",
    "country_code": "NL",
    "city": "Drachten"
  },
  {
    "code": "TLM",
    "country_code": "DZ",
    "city": "Tlemcen"
  },
  {
    "code": "CYC",
    "country_code": "BZ",
    "city": "Caye Chapel"
  },
  {
    "code": "RTP",
    "country_code": "AU",
    "city": "Rutland Plains"
  },
  {
    "code": "LTL",
    "country_code": "GA",
    "city": "Lastourville"
  },
  {
    "code": "LMX",
    "country_code": "CO",
    "city": "Lopez De Micay"
  },
  {
    "code": "KYI",
    "country_code": "AU",
    "city": "Yalata Mission"
  },
  {
    "code": "CBS",
    "country_code": "VE",
    "city": "Cabimas"
  },
  {
    "code": "RBQ",
    "country_code": "BO",
    "city": "Rurrenabaque"
  },
  {
    "code": "MYM",
    "country_code": "GY",
    "city": "Monkey Mountain"
  },
  {
    "code": "LWN",
    "country_code": "AM",
    "city": "Gyoumri"
  },
  {
    "code": "RWI",
    "country_code": "US",
    "city": "Rocky Mount"
  },
  {
    "code": "UTR",
    "country_code": "TH",
    "city": "Uttaradit"
  },
  {
    "code": "TPS",
    "country_code": "IT",
    "city": "Trapani"
  },
  {
    "code": "AYQ",
    "country_code": "AU",
    "city": "Ayers Rock"
  },
  {
    "code": "FGD",
    "country_code": "MR",
    "city": "Fderik"
  },
  {
    "code": "RBX",
    "country_code": "SS",
    "city": "Rumbek"
  },
  {
    "code": "BLZ",
    "country_code": "MW",
    "city": "Blantyre"
  },
  {
    "code": "OKQ",
    "country_code": "ID",
    "city": "Okaba"
  },
  {
    "code": "LCR",
    "country_code": "CO",
    "city": "La Chorrera"
  },
  {
    "code": "VII",
    "country_code": "VN",
    "city": "Vinh City"
  },
  {
    "code": "PMS",
    "country_code": "SY",
    "city": "Palmyra"
  },
  {
    "code": "UCK",
    "country_code": "UA",
    "city": "Lutsk"
  },
  {
    "code": "APR",
    "country_code": "PG",
    "city": "April River"
  },
  {
    "code": "PGI",
    "country_code": "AO",
    "city": "Chitato"
  },
  {
    "code": "ZHB",
    "country_code": "CH",
    "city": "Engelberg"
  },
  {
    "code": "EYP",
    "country_code": "CO",
    "city": "El Yopal"
  },
  {
    "code": "OEO",
    "country_code": "US",
    "city": "Osceola"
  },
  {
    "code": "TEE",
    "country_code": "DZ",
    "city": "Tebessa"
  },
  {
    "code": "PWT",
    "country_code": "US",
    "city": "Bremerton"
  },
  {
    "code": "BLX",
    "country_code": "IT",
    "city": "Belluno"
  },
  {
    "code": "HOY",
    "country_code": "GB",
    "city": "Hoy Island"
  },
  {
    "code": "UVE",
    "country_code": "NC",
    "city": "Ouvea"
  },
  {
    "code": "BWG",
    "country_code": "US",
    "city": "Bowling Green"
  },
  {
    "code": "SPD",
    "country_code": "BD",
    "city": "Saidpur"
  },
  {
    "code": "ZAC",
    "country_code": "CA",
    "city": "York Landing"
  },
  {
    "code": "BLV",
    "country_code": "US",
    "city": "Belleville"
  },
  {
    "code": "IQN",
    "country_code": "CN",
    "city": "Qingyang"
  },
  {
    "code": "BWN",
    "country_code": "BN",
    "city": "Bandar Seri Begawan"
  },
  {
    "code": "VIV",
    "country_code": "PG",
    "city": "Vivigani"
  },
  {
    "code": "PPK",
    "country_code": "KZ",
    "city": "Petropavlovsk"
  },
  {
    "code": "UJE",
    "country_code": "MH",
    "city": "Ujae Island"
  },
  {
    "code": "YSP",
    "country_code": "CA",
    "city": "Marathon"
  },
  {
    "code": "NVA",
    "country_code": "CO",
    "city": "Neiva"
  },
  {
    "code": "KNR",
    "country_code": "IR",
    "city": "Kangan"
  },
  {
    "code": "OTI",
    "country_code": "ID",
    "city": "Pitu"
  },
  {
    "code": "TBK",
    "country_code": "AU",
    "city": "Timber Creek"
  },
  {
    "code": "BUQ",
    "country_code": "ZW",
    "city": "Bulawayo"
  },
  {
    "code": "WWK",
    "country_code": "PG",
    "city": "Wewak"
  },
  {
    "code": "PLW",
    "country_code": "ID",
    "city": "Palu"
  },
  {
    "code": "DIG",
    "country_code": "CN",
    "city": "Diqing"
  },
  {
    "code": "YEQ",
    "country_code": "PG",
    "city": "Yenkis"
  },
  {
    "code": "GLQ",
    "country_code": "US",
    "city": "Glennallen"
  },
  {
    "code": "INO",
    "country_code": "CD",
    "city": "Inongo"
  },
  {
    "code": "XEH",
    "country_code": "CA",
    "city": "Ladysmith"
  },
  {
    "code": "EGC",
    "country_code": "FR",
    "city": "Bergerac"
  },
  {
    "code": "LWV",
    "country_code": "US",
    "city": "Lawrenceville"
  },
  {
    "code": "SPS",
    "country_code": "US",
    "city": "Wichita Falls"
  },
  {
    "code": "MBU",
    "country_code": "SB",
    "city": "Mbambanakira"
  },
  {
    "code": "KLQ",
    "country_code": "ID",
    "city": "Keluang"
  },
  {
    "code": "COR",
    "country_code": "AR",
    "city": "Cordoba"
  },
  {
    "code": "VDH",
    "country_code": "VN",
    "city": "Dong Hoi"
  },
  {
    "code": "MWL",
    "country_code": "US",
    "city": "Mineral Wells"
  },
  {
    "code": "VCE",
    "country_code": "IT",
    "city": "Venice"
  },
  {
    "code": "BNX",
    "country_code": "BA",
    "city": "Banja Luka"
  },
  {
    "code": "ZTZ",
    "country_code": "DE",
    "city": "Chemnitz"
  },
  {
    "code": "BPI",
    "country_code": "US",
    "city": "Big Piney"
  },
  {
    "code": "PDR",
    "country_code": "BR",
    "city": "Presidente Dutra"
  },
  {
    "code": "DRB",
    "country_code": "AU",
    "city": "Derby"
  },
  {
    "code": "ORM",
    "country_code": "GB",
    "city": "Northampton"
  },
  {
    "code": "TSP",
    "country_code": "US",
    "city": "Tehachapi"
  },
  {
    "code": "OBI",
    "country_code": "BR",
    "city": "Obidos"
  },
  {
    "code": "ZLC",
    "country_code": "CH",
    "city": "Waedenswil"
  },
  {
    "code": "KUL",
    "country_code": "MY",
    "city": "Kuala Lumpur"
  },
  {
    "code": "HYD",
    "country_code": "IN",
    "city": "Hyderabad"
  },
  {
    "code": "WBE",
    "country_code": "MG",
    "city": "Bealanana"
  },
  {
    "code": "XEJ",
    "country_code": "CA",
    "city": "Langford"
  },
  {
    "code": "BJT",
    "country_code": "LK",
    "city": "Bentota River"
  },
  {
    "code": "ADF",
    "country_code": "TR",
    "city": "Adiyaman"
  },
  {
    "code": "CTN",
    "country_code": "AU",
    "city": "Cooktown"
  },
  {
    "code": "NBC",
    "country_code": "RU",
    "city": "Naberezhnye Chelny"
  },
  {
    "code": "SUC",
    "country_code": "US",
    "city": "Sundance"
  },
  {
    "code": "SQL",
    "country_code": "US",
    "city": "San Carlos"
  },
  {
    "code": "YAE",
    "country_code": "RU",
    "city": "Yartsevo"
  },
  {
    "code": "DMN",
    "country_code": "US",
    "city": "Deming"
  },
  {
    "code": "ALJ",
    "country_code": "ZA",
    "city": "Alexander Bay"
  },
  {
    "code": "ZUM",
    "country_code": "CA",
    "city": "Churchill Falls"
  },
  {
    "code": "CDA",
    "country_code": "AU",
    "city": "Cooinda"
  },
  {
    "code": "ILU",
    "country_code": "KE",
    "city": "Kilaguni"
  },
  {
    "code": "KTU",
    "country_code": "IN",
    "city": "Kota"
  },
  {
    "code": "MBO",
    "country_code": "PH",
    "city": "Mamburao"
  },
  {
    "code": "YLF",
    "country_code": "CA",
    "city": "LaForges"
  },
  {
    "code": "LBQ",
    "country_code": "GA",
    "city": "Lambarene"
  },
  {
    "code": "ITO",
    "country_code": "US",
    "city": "Hilo"
  },
  {
    "code": "MHF",
    "country_code": "CO",
    "city": "Morichal"
  },
  {
    "code": "LSP",
    "country_code": "VE",
    "city": "Las Piedras"
  },
  {
    "code": "XUR",
    "country_code": "NO",
    "city": "Skoppum"
  },
  {
    "code": "POG",
    "country_code": "GA",
    "city": "Port Gentil"
  },
  {
    "code": "WSZ",
    "country_code": "NZ",
    "city": "Westport"
  },
  {
    "code": "SHK",
    "country_code": "LS",
    "city": "Sehonghong"
  },
  {
    "code": "KDO",
    "country_code": "MV",
    "city": "Kadhdhoo"
  },
  {
    "code": "ISH",
    "country_code": "IT",
    "city": "Ischia"
  },
  {
    "code": "MVZ",
    "country_code": "ZW",
    "city": "Masvingo"
  },
  {
    "code": "PXU",
    "country_code": "VN",
    "city": "Pleiku"
  },
  {
    "code": "NVP",
    "country_code": "BR",
    "city": "Novo Aripuana"
  },
  {
    "code": "LGQ",
    "country_code": "EC",
    "city": "Lago Agrio"
  },
  {
    "code": "BZX",
    "country_code": "CN",
    "city": "Bazhong"
  },
  {
    "code": "HQM",
    "country_code": "US",
    "city": "Hoquiam"
  },
  {
    "code": "XHI",
    "country_code": "DE",
    "city": "Herzogenaurach"
  },
  {
    "code": "PUT",
    "country_code": "IN",
    "city": "Puttaparthi"
  },
  {
    "code": "GDI",
    "country_code": "CF",
    "city": "Gordil"
  },
  {
    "code": "MUF",
    "country_code": "ID",
    "city": "Muting"
  },
  {
    "code": "VJQ",
    "country_code": "MZ",
    "city": "Gurue"
  },
  {
    "code": "AKK",
    "country_code": "US",
    "city": "Akhiok"
  },
  {
    "code": "ХАУ",
    "country_code": "RU",
    "city": "Kharuta"
  },
  {
    "code": "ISI",
    "country_code": "AU",
    "city": "Isisford"
  },
  {
    "code": "VND",
    "country_code": "MG",
    "city": "Vangaindrano"
  },
  {
    "code": "RKZ",
    "country_code": "CN",
    "city": "Xigaze/Rikaze"
  },
  {
    "code": "ZDW",
    "country_code": "CH",
    "city": "Delemont"
  },
  {
    "code": "ARO",
    "country_code": "CO",
    "city": "Arboletes"
  },
  {
    "code": "JRG",
    "country_code": "IN",
    "city": "Jharsuguda"
  },
  {
    "code": "SSV",
    "country_code": "PH",
    "city": "Siasi"
  },
  {
    "code": "HSZ",
    "country_code": "TW",
    "city": "Hsinchu"
  },
  {
    "code": "HGR",
    "country_code": "US",
    "city": "Hagerstown"
  },
  {
    "code": "WJA",
    "country_code": "MH",
    "city": "Woja"
  },
  {
    "code": "XKD",
    "country_code": "NO",
    "city": "Halden"
  },
  {
    "code": "ZFI",
    "country_code": "GB",
    "city": "Chesterfield"
  },
  {
    "code": "GIS",
    "country_code": "NZ",
    "city": "Gisborne"
  },
  {
    "code": "CLY",
    "country_code": "FR",
    "city": "Calvi"
  },
  {
    "code": "RTL",
    "country_code": "US",
    "city": "Spirit Lake"
  },
  {
    "code": "ARI",
    "country_code": "CL",
    "city": "Arica"
  },
  {
    "code": "THM",
    "country_code": "US",
    "city": "Thompsonfield"
  },
  {
    "code": "HBI",
    "country_code": "BS",
    "city": "Harbour Island"
  },
  {
    "code": "FKI",
    "country_code": "CD",
    "city": "Kisangani"
  },
  {
    "code": "JLS",
    "country_code": "BR",
    "city": "Jales"
  },
  {
    "code": "EKD",
    "country_code": "AU",
    "city": "Elkedra"
  },
  {
    "code": "KCZ",
    "country_code": "JP",
    "city": "Kochi"
  },
  {
    "code": "CAD",
    "country_code": "US",
    "city": "Cadillac"
  },
  {
    "code": "LCV",
    "country_code": "IT",
    "city": "Lucca"
  },
  {
    "code": "HOD",
    "country_code": "YE",
    "city": "Hodeidah"
  },
  {
    "code": "SKR",
    "country_code": "ET",
    "city": "Shakiso"
  },
  {
    "code": "SDJ",
    "country_code": "JP",
    "city": "Sendai"
  },
  {
    "code": "GWV",
    "country_code": "US",
    "city": "Glendale"
  },
  {
    "code": "AMT",
    "country_code": "AU",
    "city": "Amata"
  },
  {
    "code": "MOL",
    "country_code": "NO",
    "city": "Molde"
  },
  {
    "code": "XWH",
    "country_code": "GB",
    "city": "Stoke-on-Trent"
  },
  {
    "code": "JLA",
    "country_code": "US",
    "city": "Cooper Lodge"
  },
  {
    "code": "CMD",
    "country_code": "AU",
    "city": "Cootamundra"
  },
  {
    "code": "SFM",
    "country_code": "US",
    "city": "Sanford"
  },
  {
    "code": "RKA",
    "country_code": "PF",
    "city": "Aratika"
  },
  {
    "code": "LAL",
    "country_code": "US",
    "city": "Lakeland"
  },
  {
    "code": "CCK",
    "country_code": "CC",
    "city": "Cocos Islands"
  },
  {
    "code": "TKN",
    "country_code": "JP",
    "city": "Tokunoshima"
  },
  {
    "code": "IRS",
    "country_code": "US",
    "city": "Sturgis"
  },
  {
    "code": "UMU",
    "country_code": "BR",
    "city": "Umuarama"
  },
  {
    "code": "XTJ",
    "country_code": "ES",
    "city": "Toledo"
  },
  {
    "code": "ZFN",
    "country_code": "CA",
    "city": "Tulita"
  },
  {
    "code": "HSP",
    "country_code": "US",
    "city": "Hot Springs"
  },
  {
    "code": "MKZ",
    "country_code": "MY",
    "city": "Malacca"
  },
  {
    "code": "BSD",
    "country_code": "CN",
    "city": "Baoshan"
  },
  {
    "code": "DGN",
    "country_code": "US",
    "city": "Dahlgren"
  },
  {
    "code": "AII",
    "country_code": "DJ",
    "city": "Alisabieh"
  },
  {
    "code": "BGM",
    "country_code": "US",
    "city": "Binghamton"
  },
  {
    "code": "MDO",
    "country_code": "US",
    "city": "Middleton Island"
  },
  {
    "code": "ZLT",
    "country_code": "CA",
    "city": "La Tabatiere"
  },
  {
    "code": "WGC",
    "country_code": "IN",
    "city": "Warangal"
  },
  {
    "code": "TLO",
    "country_code": "PG",
    "city": "Tol"
  },
  {
    "code": "KMQ",
    "country_code": "JP",
    "city": "Komatsu"
  },
  {
    "code": "WTS",
    "country_code": "MG",
    "city": "Tsiroanomandidy"
  },
  {
    "code": "QCE",
    "country_code": "US",
    "city": "Copper Mountain"
  },
  {
    "code": "XUE",
    "country_code": "NO",
    "city": "Heimdal"
  },
  {
    "code": "KRG",
    "country_code": "GY",
    "city": "Karasabai"
  },
  {
    "code": "SWH",
    "country_code": "AU",
    "city": "Swan Hill"
  },
  {
    "code": "LEV",
    "country_code": "FJ",
    "city": "Bureta"
  },
  {
    "code": "YMO",
    "country_code": "CA",
    "city": "Moosonee"
  },
  {
    "code": "GZT",
    "country_code": "TR",
    "city": "Gaziantep"
  },
  {
    "code": "PTY",
    "country_code": "PA",
    "city": "Panama City"
  },
  {
    "code": "MSL",
    "country_code": "US",
    "city": "Muscle Shoals"
  },
  {
    "code": "HIE",
    "country_code": "US",
    "city": "Whitefield"
  },
  {
    "code": "BDK",
    "country_code": "CI",
    "city": "Bondoukou"
  },
  {
    "code": "YGA",
    "country_code": "CA",
    "city": "Gagnon"
  },
  {
    "code": "RYL",
    "country_code": "ZM",
    "city": "Lower Zambezi NP"
  },
  {
    "code": "BNE",
    "country_code": "AU",
    "city": "Brisbane"
  },
  {
    "code": "XBB",
    "country_code": "CA",
    "city": "Blubber Bay"
  },
  {
    "code": "TPA",
    "country_code": "US",
    "city": "Tampa"
  },
  {
    "code": "DAT",
    "country_code": "CN",
    "city": "Datong"
  },
  {
    "code": "TLG",
    "country_code": "SB",
    "city": "Tulagi Island"
  },
  {
    "code": "MKI",
    "country_code": "CF",
    "city": "Obo"
  },
  {
    "code": "OPO",
    "country_code": "PT",
    "city": "Porto"
  },
  {
    "code": "MXE",
    "country_code": "US",
    "city": "Maxton"
  },
  {
    "code": "SWL",
    "country_code": "BS",
    "city": "Spanish Wells"
  },
  {
    "code": "PPH",
    "country_code": "VE",
    "city": "Peraitepuy"
  },
  {
    "code": "EUC",
    "country_code": "AU",
    "city": "Eucla"
  },
  {
    "code": "RIK",
    "country_code": "CR",
    "city": "Carrillo"
  },
  {
    "code": "TAX",
    "country_code": "ID",
    "city": "Taliabu"
  },
  {
    "code": "AFZ",
    "country_code": "IR",
    "city": "Sabzevar"
  },
  {
    "code": "UZM",
    "country_code": "CA",
    "city": "Hope Bay"
  },
  {
    "code": "NIE",
    "country_code": "US",
    "city": "Niblack"
  },
  {
    "code": "ACR",
    "country_code": "CO",
    "city": "Araracuara"
  },
  {
    "code": "PRO",
    "country_code": "US",
    "city": "Perry"
  },
  {
    "code": "GNN",
    "country_code": "ET",
    "city": "Ghinnir"
  },
  {
    "code": "CLV",
    "country_code": "BR",
    "city": "Caldas Novas"
  },
  {
    "code": "LDI",
    "country_code": "TZ",
    "city": "Lindi"
  },
  {
    "code": "KWJ",
    "country_code": "KR",
    "city": "Gwangju"
  },
  {
    "code": "HDY",
    "country_code": "TH",
    "city": "Hat Yai"
  },
  {
    "code": "CRJ",
    "country_code": "AU",
    "city": "Coorabie"
  },
  {
    "code": "HOQ",
    "country_code": "DE",
    "city": "Hof"
  },
  {
    "code": "NFL",
    "country_code": "US",
    "city": "Fallon"
  },
  {
    "code": "YFA",
    "country_code": "CA",
    "city": "Fort Albany"
  },
  {
    "code": "CLA",
    "country_code": "BD",
    "city": "Comilla"
  },
  {
    "code": "ZDP",
    "country_code": "CH",
    "city": "Burgdorf"
  },
  {
    "code": "TDX",
    "country_code": "TH",
    "city": "Trat"
  },
  {
    "code": "SHX",
    "country_code": "US",
    "city": "Shageluk"
  },
  {
    "code": "SQZ",
    "country_code": "GB",
    "city": "Scampton"
  },
  {
    "code": "ZEM",
    "country_code": "CA",
    "city": "East Main"
  },
  {
    "code": "BRR",
    "country_code": "GB",
    "city": "Barra"
  },
  {
    "code": "KKT",
    "country_code": "US",
    "city": "Kentland"
  },
  {
    "code": "OUM",
    "country_code": "TD",
    "city": "Oum Hadjer"
  },
  {
    "code": "СКР",
    "country_code": "RU",
    "city": "Severo-Kurilsk"
  },
  {
    "code": "AKW",
    "country_code": "IR",
    "city": "Aghajari"
  },
  {
    "code": "FOA",
    "country_code": "GB",
    "city": "Foula"
  },
  {
    "code": "UPB",
    "country_code": "CU",
    "city": "Havana"
  },
  {
    "code": "ILZ",
    "country_code": "SK",
    "city": "Zilina"
  },
  {
    "code": "TKD",
    "country_code": "GH",
    "city": "Takoradi"
  },
  {
    "code": "VAW",
    "country_code": "NO",
    "city": "Vardoe"
  },
  {
    "code": "ZOG",
    "country_code": "DE",
    "city": "Lueneburg"
  },
  {
    "code": "LAH",
    "country_code": "ID",
    "city": "Labuha"
  },
  {
    "code": "SNY",
    "country_code": "US",
    "city": "Sidney"
  },
  {
    "code": "KLE",
    "country_code": "CM",
    "city": "Kaele"
  },
  {
    "code": "YES",
    "country_code": "IR",
    "city": "Yasouj"
  },
  {
    "code": "RFP",
    "country_code": "PF",
    "city": "Raiatea"
  },
  {
    "code": "YNA",
    "country_code": "CA",
    "city": "Natashquan"
  },
  {
    "code": "GFD",
    "country_code": "US",
    "city": "Greenfield"
  },
  {
    "code": "EBS",
    "country_code": "US",
    "city": "Webster City"
  },
  {
    "code": "BNZ",
    "country_code": "PG",
    "city": "Banz"
  },
  {
    "code": "MNW",
    "country_code": "AU",
    "city": "Macdonald Downs"
  },
  {
    "code": "GED",
    "country_code": "US",
    "city": "Georgetown"
  },
  {
    "code": "MVR",
    "country_code": "CM",
    "city": "Maroua"
  },
  {
    "code": "YRB",
    "country_code": "CA",
    "city": "Resolute"
  },
  {
    "code": "XIJ",
    "country_code": "KW",
    "city": "Ahmed Al Jaber"
  },
  {
    "code": "ATR",
    "country_code": "MR",
    "city": "Atar"
  },
  {
    "code": "IRU",
    "country_code": "LK",
    "city": "Iranamadu"
  },
  {
    "code": "XKY",
    "country_code": "BF",
    "city": "Kaya"
  },
  {
    "code": "XVM",
    "country_code": "FI",
    "city": "Vuokatti"
  },
  {
    "code": "AQB",
    "country_code": "GT",
    "city": "Quiche"
  },
  {
    "code": "CHN",
    "country_code": "KR",
    "city": "Jeonju"
  },
  {
    "code": "GEC",
    "country_code": "CY",
    "city": "Gecitkale"
  },
  {
    "code": "XAT",
    "country_code": "FR",
    "city": "Antibes"
  },
  {
    "code": "ABH",
    "country_code": "AU",
    "city": "Alpha"
  },
  {
    "code": "DKR",
    "country_code": "SN",
    "city": "Dakar"
  },
  {
    "code": "QFK",
    "country_code": "NO",
    "city": "Selje"
  },
  {
    "code": "XXU",
    "country_code": "SE",
    "city": "Hedemora"
  },
  {
    "code": "BNF",
    "country_code": "US",
    "city": "Baranof"
  },
  {
    "code": "KUI",
    "country_code": "NZ",
    "city": "Kawau Island"
  },
  {
    "code": "PUI",
    "country_code": "PG",
    "city": "Pureni"
  },
  {
    "code": "AAK",
    "country_code": "KI",
    "city": "Aranuka"
  },
  {
    "code": "DJE",
    "country_code": "TN",
    "city": "Djerba"
  },
  {
    "code": "OCW",
    "country_code": "US",
    "city": "Washington"
  },
  {
    "code": "ABW",
    "country_code": "PG",
    "city": "Abau"
  },
  {
    "code": "GXG",
    "country_code": "AO",
    "city": "Negage"
  },
  {
    "code": "KKR",
    "country_code": "PF",
    "city": "Kaukura Atoll"
  },
  {
    "code": "ONG",
    "country_code": "AU",
    "city": "Mornington"
  },
  {
    "code": "SMW",
    "country_code": "MA",
    "city": "Smara"
  },
  {
    "code": "NQN",
    "country_code": "AR",
    "city": "Neuquen"
  },
  {
    "code": "POV",
    "country_code": "SK",
    "city": "Presov"
  },
  {
    "code": "RLO",
    "country_code": "AR",
    "city": "Merlo"
  },
  {
    "code": "ABZ",
    "country_code": "GB",
    "city": "Aberdeen"
  },
  {
    "code": "BLQ",
    "country_code": "IT",
    "city": "Bologna"
  },
  {
    "code": "SLN",
    "country_code": "US",
    "city": "Salina"
  },
  {
    "code": "BJV",
    "country_code": "TR",
    "city": "Bodrum"
  },
  {
    "code": "YSG",
    "country_code": "CA",
    "city": "Lutselke"
  },
  {
    "code": "PSK",
    "country_code": "US",
    "city": "Dublin"
  },
  {
    "code": "SRF",
    "country_code": "US",
    "city": "San Rafael"
  },
  {
    "code": "YLE",
    "country_code": "CA",
    "city": "Wha Ti"
  },
  {
    "code": "NOA",
    "country_code": "AU",
    "city": "Nowra"
  },
  {
    "code": "RNA",
    "country_code": "SB",
    "city": "Arona"
  },
  {
    "code": "XJD",
    "country_code": "QA",
    "city": "Al Udeid"
  },
  {
    "code": "EDQ",
    "country_code": "HN",
    "city": "Erandique"
  },
  {
    "code": "NMC",
    "country_code": "BS",
    "city": "Norman's Cay"
  },
  {
    "code": "NDE",
    "country_code": "KE",
    "city": "Mandera"
  },
  {
    "code": "XRA",
    "country_code": "DK",
    "city": "Graasten"
  },
  {
    "code": "FRZ",
    "country_code": "DE",
    "city": "Fritzlar"
  },
  {
    "code": "LUV",
    "country_code": "ID",
    "city": "Langgur"
  },
  {
    "code": "NOS",
    "country_code": "MG",
    "city": "Nossi-be"
  },
  {
    "code": "LRL",
    "country_code": "TG",
    "city": "Niamtougou"
  },
  {
    "code": "BFB",
    "country_code": "US",
    "city": "Blue Fox Bay"
  },
  {
    "code": "DIJ",
    "country_code": "FR",
    "city": "Dijon"
  },
  {
    "code": "MKA",
    "country_code": "CZ",
    "city": "Marianske Lazne"
  },
  {
    "code": "LLF",
    "country_code": "CN",
    "city": "Yongzhou"
  },
  {
    "code": "RBT",
    "country_code": "KE",
    "city": "Marsabit"
  },
  {
    "code": "YAB",
    "country_code": "CA",
    "city": "Arctic Bay"
  },
  {
    "code": "NXX",
    "country_code": "US",
    "city": "Willow Grove"
  },
  {
    "code": "NUL",
    "country_code": "US",
    "city": "Nulato"
  },
  {
    "code": "YIE",
    "country_code": "CN",
    "city": "Arxan"
  },
  {
    "code": "KNF",
    "country_code": "GB",
    "city": "Kings Lynn"
  },
  {
    "code": "SAG",
    "country_code": "IN",
    "city": "Shirdi"
  },
  {
    "code": "YML",
    "country_code": "CA",
    "city": "Murray Bay"
  },
  {
    "code": "STV",
    "country_code": "IN",
    "city": "Surat Gujarat"
  },
  {
    "code": "JBS",
    "country_code": "US",
    "city": "Pleasanton"
  },
  {
    "code": "OUD",
    "country_code": "MA",
    "city": "Oujda"
  },
  {
    "code": "RUK",
    "country_code": "NP",
    "city": "Rukumkot"
  },
  {
    "code": "SIL",
    "country_code": "PG",
    "city": "Sila"
  },
  {
    "code": "LVL",
    "country_code": "US",
    "city": "Lawrenceville"
  },
  {
    "code": "TBL",
    "country_code": "AU",
    "city": "Tableland"
  },
  {
    "code": "DNK",
    "country_code": "UA",
    "city": "Dnipro"
  },
  {
    "code": "GWD",
    "country_code": "PK",
    "city": "Gwadar"
  },
  {
    "code": "SMU",
    "country_code": "US",
    "city": "Sheep Mountain"
  },
  {
    "code": "WPO",
    "country_code": "US",
    "city": "Paonia"
  },
  {
    "code": "KLG",
    "country_code": "US",
    "city": "Kalskag"
  },
  {
    "code": "TPI",
    "country_code": "PG",
    "city": "Tapini"
  },
  {
    "code": "KGZ",
    "country_code": "US",
    "city": "Glacier Creek"
  },
  {
    "code": "IIN",
    "country_code": "JP",
    "city": "Nishinoomote"
  },
  {
    "code": "YDK",
    "country_code": "CA",
    "city": "Main Duck Island"
  },
  {
    "code": "FEL",
    "country_code": "DE",
    "city": "Fuerstenfeldbruck"
  },
  {
    "code": "TVI",
    "country_code": "US",
    "city": "Thomasville"
  },
  {
    "code": "OMM",
    "country_code": "OM",
    "city": "Marmul"
  },
  {
    "code": "ZKX",
    "country_code": "CH",
    "city": "Uzwil"
  },
  {
    "code": "KVO",
    "country_code": "RS",
    "city": "Kraljevo"
  },
  {
    "code": "YGW",
    "country_code": "CA",
    "city": "Kuujjuarapik"
  },
  {
    "code": "ZMM",
    "country_code": "MX",
    "city": "Zamora"
  },
  {
    "code": "TEX",
    "country_code": "US",
    "city": "Telluride"
  },
  {
    "code": "KUQ",
    "country_code": "PG",
    "city": "Kuri"
  },
  {
    "code": "MME",
    "country_code": "GB",
    "city": "Durham Tees Valley"
  },
  {
    "code": "IML",
    "country_code": "US",
    "city": "Imperial"
  },
  {
    "code": "KIC",
    "country_code": "US",
    "city": "King City"
  },
  {
    "code": "AAF",
    "country_code": "US",
    "city": "Apalachicola"
  },
  {
    "code": "SZX",
    "country_code": "CN",
    "city": "Shenzhen"
  },
  {
    "code": "BWB",
    "country_code": "AU",
    "city": "Barrow Island"
  },
  {
    "code": "YKM",
    "country_code": "US",
    "city": "Yakima"
  },
  {
    "code": "ZZO",
    "country_code": "RU",
    "city": "Zonalnoye"
  },
  {
    "code": "CKB",
    "country_code": "US",
    "city": "Clarksburg"
  },
  {
    "code": "ANV",
    "country_code": "US",
    "city": "Anvik"
  },
  {
    "code": "ZAA",
    "country_code": "CA",
    "city": "Alice Arm"
  },
  {
    "code": "XUC",
    "country_code": "NO",
    "city": "Elverum"
  },
  {
    "code": "ZJP",
    "country_code": "CH",
    "city": "Montreux"
  },
  {
    "code": "TJQ",
    "country_code": "ID",
    "city": "Tanjung Pandan"
  },
  {
    "code": "YMI",
    "country_code": "CA",
    "city": "Minaki"
  },
  {
    "code": "SQJ",
    "country_code": "CN",
    "city": "Sanming"
  },
  {
    "code": "RGI",
    "country_code": "PF",
    "city": "Rangiroa"
  },
  {
    "code": "KGR",
    "country_code": "AU",
    "city": "Kulgera"
  },
  {
    "code": "CWI",
    "country_code": "US",
    "city": "Clinton"
  },
  {
    "code": "ULI",
    "country_code": "FM",
    "city": "Ulithi"
  },
  {
    "code": "AIZ",
    "country_code": "US",
    "city": "Kaiser"
  },
  {
    "code": "KII",
    "country_code": "PG",
    "city": "Kibuli"
  },
  {
    "code": "WSO",
    "country_code": "SR",
    "city": "Washabo"
  },
  {
    "code": "TEF",
    "country_code": "AU",
    "city": "Telfer"
  },
  {
    "code": "ZLG",
    "country_code": "HU",
    "city": "El Gouera"
  },
  {
    "code": "LKA",
    "country_code": "ID",
    "city": "Larantuka"
  },
  {
    "code": "HTY",
    "country_code": "TR",
    "city": "Antakya"
  },
  {
    "code": "VLA",
    "country_code": "US",
    "city": "Vandalia"
  },
  {
    "code": "SWB",
    "country_code": "AU",
    "city": "Shaw River"
  },
  {
    "code": "CUE",
    "country_code": "EC",
    "city": "Cuenca"
  },
  {
    "code": "GWT",
    "country_code": "DE",
    "city": "Westerland"
  },
  {
    "code": "XRD",
    "country_code": "NO",
    "city": "Egersund"
  },
  {
    "code": "BLO",
    "country_code": "IS",
    "city": "Blonduos"
  },
  {
    "code": "SXV",
    "country_code": "IN",
    "city": "Salem"
  },
  {
    "code": "XXR",
    "country_code": "NO",
    "city": "Al"
  },
  {
    "code": "VHN",
    "country_code": "US",
    "city": "Van Horn"
  },
  {
    "code": "IDK",
    "country_code": "AU",
    "city": "Indulkana"
  },
  {
    "code": "MYH",
    "country_code": "US",
    "city": "Marble Canyon"
  },
  {
    "code": "MBP",
    "country_code": "PE",
    "city": "Moyobamba"
  },
  {
    "code": "HVG",
    "country_code": "NO",
    "city": "Honningsvag"
  },
  {
    "code": "DBO",
    "country_code": "AU",
    "city": "Dubbo"
  },
  {
    "code": "ZLA",
    "country_code": "CH",
    "city": "Villars-sur-Ollon"
  },
  {
    "code": "ITU",
    "country_code": "RU",
    "city": "Iturup"
  },
  {
    "code": "MWS",
    "country_code": "US",
    "city": "Mount Wilson"
  },
  {
    "code": "TKX",
    "country_code": "PF",
    "city": "Takaroa"
  },
  {
    "code": "JUJ",
    "country_code": "AR",
    "city": "Jujuy"
  },
  {
    "code": "MQK",
    "country_code": "BO",
    "city": "San Matias"
  },
  {
    "code": "MIR",
    "country_code": "TN",
    "city": "Monastir"
  },
  {
    "code": "OYE",
    "country_code": "GA",
    "city": "Oyem"
  },
  {
    "code": "FYM",
    "country_code": "US",
    "city": "Fayetteville"
  },
  {
    "code": "VPZ",
    "country_code": "US",
    "city": "Valparaiso"
  },
  {
    "code": "ACP",
    "country_code": "IR",
    "city": "Sahand"
  },
  {
    "code": "ПОС",
    "country_code": "RU",
    "city": "Poliny Osipenko"
  },
  {
    "code": "YWK",
    "country_code": "CA",
    "city": "Wabush"
  },
  {
    "code": "SUU",
    "country_code": "US",
    "city": "Fairfield"
  },
  {
    "code": "RMO",
    "country_code": "MD",
    "city": "Chisinau"
  },
  {
    "code": "IRZ",
    "country_code": "BR",
    "city": "Santa Isabel Rio Negro"
  },
  {
    "code": "MXY",
    "country_code": "US",
    "city": "Mccarthy"
  },
  {
    "code": "XKG",
    "country_code": "NO",
    "city": "Grong"
  },
  {
    "code": "VCB",
    "country_code": "US",
    "city": "View Cove"
  },
  {
    "code": "LTX",
    "country_code": "EC",
    "city": "Latacunga"
  },
  {
    "code": "IMI",
    "country_code": "MH",
    "city": "Ine Island"
  },
  {
    "code": "GIB",
    "country_code": "GI",
    "city": "Gibraltar"
  },
  {
    "code": "OUH",
    "country_code": "ZA",
    "city": "Oudtshoorn"
  },
  {
    "code": "OXB",
    "country_code": "GW",
    "city": "Bissau"
  },
  {
    "code": "TTE",
    "country_code": "ID",
    "city": "Ternate"
  },
  {
    "code": "BTU",
    "country_code": "MY",
    "city": "Bintulu"
  },
  {
    "code": "WTE",
    "country_code": "MH",
    "city": "Wotje Island"
  },
  {
    "code": "HPB",
    "country_code": "US",
    "city": "Hooper Bay"
  },
  {
    "code": "BZY",
    "country_code": "MD",
    "city": "Beltsy"
  },
  {
    "code": "SRS",
    "country_code": "CO",
    "city": "San Marcos"
  },
  {
    "code": "MZX",
    "country_code": "ET",
    "city": "Mena"
  },
  {
    "code": "OKT",
    "country_code": "RU",
    "city": "Oktiabrskij"
  },
  {
    "code": "CJT",
    "country_code": "MX",
    "city": "Comitan"
  },
  {
    "code": "YKX",
    "country_code": "CA",
    "city": "Kirkland Lake"
  },
  {
    "code": "FEP",
    "country_code": "US",
    "city": "Freeport"
  },
  {
    "code": "JHC",
    "country_code": "US",
    "city": "Garden City"
  },
  {
    "code": "CGE",
    "country_code": "US",
    "city": "Cambridge"
  },
  {
    "code": "IFP",
    "country_code": "US",
    "city": "Bullhead City"
  },
  {
    "code": "BPC",
    "country_code": "CM",
    "city": "Bamenda"
  },
  {
    "code": "XTK",
    "country_code": "GB",
    "city": "Thirsk"
  },
  {
    "code": "TVU",
    "country_code": "FJ",
    "city": "Taveuni"
  },
  {
    "code": "XXA",
    "country_code": "SE",
    "city": "Alvesta"
  },
  {
    "code": "GRO",
    "country_code": "ES",
    "city": "Girona"
  },
  {
    "code": "ROI",
    "country_code": "TH",
    "city": "Roi Et"
  },
  {
    "code": "YLC",
    "country_code": "CA",
    "city": "Kimmirut"
  },
  {
    "code": "VHY",
    "country_code": "FR",
    "city": "Vichy"
  },
  {
    "code": "ARB",
    "country_code": "US",
    "city": "Ann Arbor"
  },
  {
    "code": "LES",
    "country_code": "LS",
    "city": "Lesobeng"
  },
  {
    "code": "YAL",
    "country_code": "CA",
    "city": "Alert Bay"
  },
  {
    "code": "LEL",
    "country_code": "AU",
    "city": "Lake Evella"
  },
  {
    "code": "PKH",
    "country_code": "GR",
    "city": "Porto Kheli"
  },
  {
    "code": "DVK",
    "country_code": "CA",
    "city": "Diavik"
  },
  {
    "code": "THX",
    "country_code": "RU",
    "city": "Turukhansk"
  },
  {
    "code": "PGP",
    "country_code": "ST",
    "city": "Porto Alegre"
  },
  {
    "code": "YUI",
    "country_code": "CA",
    "city": "Cape Young"
  },
  {
    "code": "NVY",
    "country_code": "IN",
    "city": "Neyveli"
  },
  {
    "code": "OTU",
    "country_code": "CO",
    "city": "Otu"
  },
  {
    "code": "OBF",
    "country_code": "DE",
    "city": "Oberpfaffenhofen"
  },
  {
    "code": "CTM",
    "country_code": "MX",
    "city": "Chetumal"
  },
  {
    "code": "WDI",
    "country_code": "AU",
    "city": "Wondai"
  },
  {
    "code": "ЖЛН",
    "country_code": "RU",
    "city": "Zheleznovodsk"
  },
  {
    "code": "MMA",
    "country_code": "SE",
    "city": "Malmo"
  },
  {
    "code": "TRV",
    "country_code": "IN",
    "city": "Thiruvananthapuram"
  },
  {
    "code": "XXL",
    "country_code": "NO",
    "city": "Lillehammer"
  },
  {
    "code": "LLM",
    "country_code": "MY",
    "city": "Long Lama"
  },
  {
    "code": "BJX",
    "country_code": "MX",
    "city": "Leon/Guanajuato"
  },
  {
    "code": "EVH",
    "country_code": "AU",
    "city": "Evans Head"
  },
  {
    "code": "KJH",
    "country_code": "CN",
    "city": "Kaili"
  },
  {
    "code": "NSL",
    "country_code": "US",
    "city": "Slayton"
  },
  {
    "code": "WND",
    "country_code": "AU",
    "city": "Windarra"
  },
  {
    "code": "PJG",
    "country_code": "PK",
    "city": "Panjgur"
  },
  {
    "code": "XKQ",
    "country_code": "NO",
    "city": "Sarpsborg"
  },
  {
    "code": "GEF",
    "country_code": "SB",
    "city": "Geva"
  },
  {
    "code": "BVA",
    "country_code": "FR",
    "city": "Paris"
  },
  {
    "code": "ODL",
    "country_code": "AU",
    "city": "Cordillo Downs"
  },
  {
    "code": "REL",
    "country_code": "AR",
    "city": "Trelew"
  },
  {
    "code": "CST",
    "country_code": "FJ",
    "city": "Castaway"
  },
  {
    "code": "GBI",
    "country_code": "IN",
    "city": "Kalaburagi"
  },
  {
    "code": "CKG",
    "country_code": "CN",
    "city": "Chongqing"
  },
  {
    "code": "CVT",
    "country_code": "GB",
    "city": "Coventry"
  },
  {
    "code": "LXG",
    "country_code": "LA",
    "city": "Luang Namtha"
  },
  {
    "code": "JOM",
    "country_code": "TZ",
    "city": "Njombe"
  },
  {
    "code": "TRL",
    "country_code": "US",
    "city": "Terrell"
  },
  {
    "code": "MRQ",
    "country_code": "PH",
    "city": "Marinduque"
  },
  {
    "code": "FOR",
    "country_code": "BR",
    "city": "Fortaleza"
  },
  {
    "code": "HUK",
    "country_code": "BW",
    "city": "Hukuntsi"
  },
  {
    "code": "OLM",
    "country_code": "US",
    "city": "Olympia"
  },
  {
    "code": "OLA",
    "country_code": "NO",
    "city": "Orland"
  },
  {
    "code": "UBP",
    "country_code": "TH",
    "city": "Ubon Ratchathani"
  },
  {
    "code": "GDJ",
    "country_code": "CD",
    "city": "Gandajika"
  },
  {
    "code": "YXH",
    "country_code": "CA",
    "city": "Medicine Hat"
  },
  {
    "code": "YLT",
    "country_code": "CA",
    "city": "Alert"
  },
  {
    "code": "PIV",
    "country_code": "BR",
    "city": "Pirapora"
  },
  {
    "code": "ELV",
    "country_code": "US",
    "city": "Elfin Cove"
  },
  {
    "code": "UBT",
    "country_code": "BR",
    "city": "Ubatuba"
  },
  {
    "code": "UPN",
    "country_code": "MX",
    "city": "Uruapan"
  },
  {
    "code": "MOT",
    "country_code": "US",
    "city": "Minot"
  },
  {
    "code": "AFN",
    "country_code": "US",
    "city": "Jaffrey"
  },
  {
    "code": "XLF",
    "country_code": "CA",
    "city": "Leaf Bay"
  },
  {
    "code": "HGA",
    "country_code": "SO",
    "city": "Hargeisa"
  },
  {
    "code": "OGG",
    "country_code": "US",
    "city": "Kahului"
  },
  {
    "code": "CWP",
    "country_code": "PK",
    "city": "Campbellpore"
  },
  {
    "code": "XKM",
    "country_code": "NO",
    "city": "Moss"
  },
  {
    "code": "WNZ",
    "country_code": "CN",
    "city": "Wenzhou"
  },
  {
    "code": "JAQ",
    "country_code": "PG",
    "city": "Jacquinot Bay"
  },
  {
    "code": "MGD",
    "country_code": "BO",
    "city": "Magdalena"
  },
  {
    "code": "FWL",
    "country_code": "US",
    "city": "Farewell"
  },
  {
    "code": "NOC",
    "country_code": "IE",
    "city": "Knock"
  },
  {
    "code": "MON",
    "country_code": "NZ",
    "city": "Mount Cook"
  },
  {
    "code": "ZOF",
    "country_code": "CA",
    "city": "Ocean Falls"
  },
  {
    "code": "SOL",
    "country_code": "US",
    "city": "Solomon"
  },
  {
    "code": "DOF",
    "country_code": "US",
    "city": "Dora Bay"
  },
  {
    "code": "FRL",
    "country_code": "IT",
    "city": "Forli"
  },
  {
    "code": "NWT",
    "country_code": "PG",
    "city": "Nowata"
  },
  {
    "code": "WWI",
    "country_code": "AU",
    "city": "Woodie Woodie"
  },
  {
    "code": "JNJ",
    "country_code": "OM",
    "city": "Duqm"
  },
  {
    "code": "ODR",
    "country_code": "AU",
    "city": "Ord River"
  },
  {
    "code": "VVK",
    "country_code": "SE",
    "city": "Vastervik"
  },
  {
    "code": "GTT",
    "country_code": "AU",
    "city": "Georgetown"
  },
  {
    "code": "UIR",
    "country_code": "AU",
    "city": "Quirindi"
  },
  {
    "code": "MLM",
    "country_code": "MX",
    "city": "Morelia"
  },
  {
    "code": "PTK",
    "country_code": "US",
    "city": "Pontiac"
  },
  {
    "code": "DNZ",
    "country_code": "TR",
    "city": "Denizli"
  },
  {
    "code": "YDF",
    "country_code": "CA",
    "city": "Deer Lake"
  },
  {
    "code": "XJS",
    "country_code": "AT",
    "city": "Kitzbuehl"
  },
  {
    "code": "NLE",
    "country_code": "US",
    "city": "Niles"
  },
  {
    "code": "WLC",
    "country_code": "AU",
    "city": "Walcha"
  },
  {
    "code": "RKO",
    "country_code": "ID",
    "city": "Sipora"
  },
  {
    "code": "XVJ",
    "country_code": "GB",
    "city": "Stevenage"
  },
  {
    "code": "FAL",
    "country_code": "US",
    "city": "Roma"
  },
  {
    "code": "AGI",
    "country_code": "SR",
    "city": "Wageningen"
  },
  {
    "code": "TGH",
    "country_code": "VU",
    "city": "Tongoa"
  },
  {
    "code": "MQL",
    "country_code": "AU",
    "city": "Mildura"
  },
  {
    "code": "FRM",
    "country_code": "US",
    "city": "Fairmont"
  },
  {
    "code": "KEU",
    "country_code": "US",
    "city": "Kelly Bar"
  },
  {
    "code": "XQD",
    "country_code": "GB",
    "city": "Bedford"
  },
  {
    "code": "CTF",
    "country_code": "GT",
    "city": "Coatepeque"
  },
  {
    "code": "DTA",
    "country_code": "US",
    "city": "Delta"
  },
  {
    "code": "AKY",
    "country_code": "MM",
    "city": "Sittwe"
  },
  {
    "code": "BYA",
    "country_code": "US",
    "city": "Boundary"
  },
  {
    "code": "RFR",
    "country_code": "CR",
    "city": "Rio Frio"
  },
  {
    "code": "PQI",
    "country_code": "US",
    "city": "Presque Isle"
  },
  {
    "code": "OBE",
    "country_code": "US",
    "city": "Okeechobee"
  },
  {
    "code": "ROW",
    "country_code": "US",
    "city": "Roswell"
  },
  {
    "code": "GYY",
    "country_code": "US",
    "city": "Gary"
  },
  {
    "code": "NDJ",
    "country_code": "TD",
    "city": "Ndjamena"
  },
  {
    "code": "JDG",
    "country_code": "KR",
    "city": "Jeongseok"
  },
  {
    "code": "WUX",
    "country_code": "CN",
    "city": "Wuxi"
  },
  {
    "code": "SJI",
    "country_code": "PH",
    "city": "San Jose"
  },
  {
    "code": "FZO",
    "country_code": "GB",
    "city": "Filton"
  },
  {
    "code": "ПДВ",
    "country_code": "RU",
    "city": "Podvolochnoe"
  },
  {
    "code": "LKL",
    "country_code": "NO",
    "city": "Lakselv"
  },
  {
    "code": "KTV",
    "country_code": "VE",
    "city": "Kamarata"
  },
  {
    "code": "WPK",
    "country_code": "AU",
    "city": "Wrotham Park"
  },
  {
    "code": "OYA",
    "country_code": "AR",
    "city": "Goya"
  },
  {
    "code": "PSN",
    "country_code": "US",
    "city": "Palestine"
  },
  {
    "code": "NIM",
    "country_code": "NE",
    "city": "Niamey"
  },
  {
    "code": "CJN",
    "country_code": "US",
    "city": "El Cajon"
  },
  {
    "code": "VTG",
    "country_code": "VN",
    "city": "Vung Tau"
  },
  {
    "code": "OMN",
    "country_code": "UZ",
    "city": "Jizzakh"
  },
  {
    "code": "RRS",
    "country_code": "NO",
    "city": "Roros"
  },
  {
    "code": "XBR",
    "country_code": "CA",
    "city": "Brockville"
  },
  {
    "code": "OAL",
    "country_code": "BR",
    "city": "Cacoal"
  },
  {
    "code": "GKA",
    "country_code": "PG",
    "city": "Goroka"
  },
  {
    "code": "SRJ",
    "country_code": "BO",
    "city": "San Borja"
  },
  {
    "code": "STW",
    "country_code": "RU",
    "city": "Stavropol"
  },
  {
    "code": "HVR",
    "country_code": "US",
    "city": "Havre"
  },
  {
    "code": "PCS",
    "country_code": "BR",
    "city": "Picos"
  },
  {
    "code": "YKI",
    "country_code": "CA",
    "city": "Kennosao Lake"
  },
  {
    "code": "MBK",
    "country_code": "BR",
    "city": "Matupa"
  },
  {
    "code": "YQQ",
    "country_code": "CA",
    "city": "Comox"
  },
  {
    "code": "LRS",
    "country_code": "GR",
    "city": "Leros"
  },
  {
    "code": "PTR",
    "country_code": "US",
    "city": "Pleasant Harbour"
  },
  {
    "code": "KCE",
    "country_code": "AU",
    "city": "Collinsville"
  },
  {
    "code": "GLK",
    "country_code": "SO",
    "city": "Galcaio"
  },
  {
    "code": "RDB",
    "country_code": "US",
    "city": "Red Dog"
  },
  {
    "code": "ARK",
    "country_code": "TZ",
    "city": "Arusha"
  },
  {
    "code": "LPY",
    "country_code": "FR",
    "city": "Le Puy"
  },
  {
    "code": "LNH",
    "country_code": "AU",
    "city": "Lake Nash"
  },
  {
    "code": "AAG",
    "country_code": "BR",
    "city": "Arapoti"
  },
  {
    "code": "JCB",
    "country_code": "BR",
    "city": "Joacaba"
  },
  {
    "code": "LKH",
    "country_code": "MY",
    "city": "Long Akah"
  },
  {
    "code": "KDM",
    "country_code": "MV",
    "city": "Kaadedhdhoo"
  },
  {
    "code": "JJM",
    "country_code": "KE",
    "city": "Meru"
  },
  {
    "code": "YPY",
    "country_code": "CA",
    "city": "Fort Chipewyan"
  },
  {
    "code": "LRJ",
    "country_code": "US",
    "city": "Lemars"
  },
  {
    "code": "RGK",
    "country_code": "RU",
    "city": "Gorno-Altaysk"
  },
  {
    "code": "PHW",
    "country_code": "ZA",
    "city": "Phalaborwa"
  },
  {
    "code": "PBE",
    "country_code": "CO",
    "city": "Puerto Berrio"
  },
  {
    "code": "DRJ",
    "country_code": "SR",
    "city": "Drietabbetje"
  },
  {
    "code": "MHM",
    "country_code": "US",
    "city": "Minchumina"
  },
  {
    "code": "MBB",
    "country_code": "AU",
    "city": "Marble Bar"
  },
  {
    "code": "NSM",
    "country_code": "AU",
    "city": "Norseman"
  },
  {
    "code": "RBB",
    "country_code": "BR",
    "city": "Borba"
  },
  {
    "code": "BOX",
    "country_code": "AU",
    "city": "Borroloola"
  },
  {
    "code": "DGW",
    "country_code": "US",
    "city": "Douglas"
  },
  {
    "code": "XII",
    "country_code": "CA",
    "city": "Prescott"
  },
  {
    "code": "LSW",
    "country_code": "ID",
    "city": "Lhoksumawe"
  },
  {
    "code": "BDN",
    "country_code": "PK",
    "city": "Badin"
  },
  {
    "code": "ZRC",
    "country_code": "ES",
    "city": "San Pedro de Alcantara"
  },
  {
    "code": "LAS",
    "country_code": "US",
    "city": "Las Vegas"
  },
  {
    "code": "КЮМ",
    "country_code": "RU",
    "city": "Kujumba"
  },
  {
    "code": "ELJ",
    "country_code": "CO",
    "city": "El Recreo"
  },
  {
    "code": "TDO",
    "country_code": "US",
    "city": "Toledo"
  },
  {
    "code": "QPW",
    "country_code": "GL",
    "city": "Kangaatsiaq"
  },
  {
    "code": "MTY",
    "country_code": "MX",
    "city": "Monterrey"
  },
  {
    "code": "FOP",
    "country_code": "US",
    "city": "Forest Park"
  },
  {
    "code": "MOW",
    "country_code": "RU",
    "city": "Moscow"
  },
  {
    "code": "CZE",
    "country_code": "VE",
    "city": "Coro"
  },
  {
    "code": "RBP",
    "country_code": "PG",
    "city": "Rabaraba"
  },
  {
    "code": "OIT",
    "country_code": "JP",
    "city": "Oita"
  },
  {
    "code": "TUD",
    "country_code": "SN",
    "city": "Tambacounda"
  },
  {
    "code": "MLF",
    "country_code": "US",
    "city": "Milford"
  },
  {
    "code": "YVV",
    "country_code": "CA",
    "city": "Wiarton"
  },
  {
    "code": "RIY",
    "country_code": "YE",
    "city": "Riyan Mukalla"
  },
  {
    "code": "DTI",
    "country_code": "BR",
    "city": "Diamantina"
  },
  {
    "code": "PAA",
    "country_code": "MM",
    "city": "Pa-an"
  },
  {
    "code": "ANW",
    "country_code": "US",
    "city": "Ainsworth"
  },
  {
    "code": "BFD",
    "country_code": "US",
    "city": "Bradford"
  },
  {
    "code": "ZJW",
    "country_code": "CH",
    "city": "Rapperswil"
  },
  {
    "code": "KRJ",
    "country_code": "PG",
    "city": "Karawari"
  },
  {
    "code": "IEJ",
    "country_code": "JP",
    "city": "Iejima"
  },
  {
    "code": "SYL",
    "country_code": "US",
    "city": "San Miguel"
  },
  {
    "code": "LMN",
    "country_code": "MY",
    "city": "Limbang"
  },
  {
    "code": "WAL",
    "country_code": "US",
    "city": "Chincoteague"
  },
  {
    "code": "WHD",
    "country_code": "US",
    "city": "Hyder"
  },
  {
    "code": "YAG",
    "country_code": "CA",
    "city": "Fort Frances"
  },
  {
    "code": "CAW",
    "country_code": "BR",
    "city": "Campos"
  },
  {
    "code": "JLR",
    "country_code": "IN",
    "city": "Jabalpur"
  },
  {
    "code": "LYO",
    "country_code": "US",
    "city": "Lyons"
  },
  {
    "code": "HIT",
    "country_code": "PG",
    "city": "Hivaro"
  },
  {
    "code": "NUK",
    "country_code": "PF",
    "city": "Nukutavake"
  },
  {
    "code": "CKZ",
    "country_code": "TR",
    "city": "Canakkale"
  },
  {
    "code": "CJB",
    "country_code": "IN",
    "city": "Coimbatore"
  },
  {
    "code": "SVP",
    "country_code": "AO",
    "city": "Kuito"
  },
  {
    "code": "OYG",
    "country_code": "UG",
    "city": "Moyo"
  },
  {
    "code": "CGG",
    "country_code": "PH",
    "city": "Casiguran"
  },
  {
    "code": "TRA",
    "country_code": "JP",
    "city": "Taramajima"
  },
  {
    "code": "VHC",
    "country_code": "AO",
    "city": "Saurimo"
  },
  {
    "code": "НИК",
    "country_code": "RU",
    "city": "Nikolskoe"
  },
  {
    "code": "DIO",
    "country_code": "US",
    "city": "Diomede Island"
  },
  {
    "code": "CKA",
    "country_code": "US",
    "city": "Cherokee"
  },
  {
    "code": "BAO",
    "country_code": "TH",
    "city": "Ban Mak Khaen"
  },
  {
    "code": "BNO",
    "country_code": "US",
    "city": "Burns"
  },
  {
    "code": "FEA",
    "country_code": "GB",
    "city": "Fetlar"
  },
  {
    "code": "GMD",
    "country_code": "MA",
    "city": "Ben Slimane"
  },
  {
    "code": "PBM",
    "country_code": "SR",
    "city": "Paramaribo"
  },
  {
    "code": "JEQ",
    "country_code": "BR",
    "city": "Jequie"
  },
  {
    "code": "YTX",
    "country_code": "CA",
    "city": "Telegraph Creek"
  },
  {
    "code": "TAD",
    "country_code": "US",
    "city": "Trinidad"
  },
  {
    "code": "KBC",
    "country_code": "US",
    "city": "Birch Creek"
  },
  {
    "code": "RBI",
    "country_code": "FJ",
    "city": "Rabi"
  },
  {
    "code": "KMW",
    "country_code": "RU",
    "city": "Kostroma"
  },
  {
    "code": "SJX",
    "country_code": "BZ",
    "city": "Sartaneja"
  },
  {
    "code": "NBS",
    "country_code": "CN",
    "city": "Baishan"
  },
  {
    "code": "GRW",
    "country_code": "PT",
    "city": "Graciosa Island (Azores)"
  },
  {
    "code": "FLT",
    "country_code": "US",
    "city": "Flat"
  },
  {
    "code": "MLD",
    "country_code": "US",
    "city": "Malad City"
  },
  {
    "code": "KPY",
    "country_code": "US",
    "city": "Port Bailey"
  },
  {
    "code": "TLL",
    "country_code": "EE",
    "city": "Tallinn"
  },
  {
    "code": "FXY",
    "country_code": "US",
    "city": "Forest City"
  },
  {
    "code": "PSD",
    "country_code": "EG",
    "city": "Port Said"
  },
  {
    "code": "OHI",
    "country_code": "NA",
    "city": "Oshakati"
  },
  {
    "code": "BCM",
    "country_code": "RO",
    "city": "Bacau"
  },
  {
    "code": "PIN",
    "country_code": "BR",
    "city": "Parintins"
  },
  {
    "code": "BVY",
    "country_code": "US",
    "city": "Beverly"
  },
  {
    "code": "NER",
    "country_code": "RU",
    "city": "Neryungri"
  },
  {
    "code": "OMB",
    "country_code": "GA",
    "city": "Omboue"
  },
  {
    "code": "LTM",
    "country_code": "GY",
    "city": "Lethem"
  },
  {
    "code": "UAL",
    "country_code": "AO",
    "city": "Luau"
  },
  {
    "code": "AGH",
    "country_code": "SE",
    "city": "Angelholm/Helsingborg"
  },
  {
    "code": "OKA",
    "country_code": "JP",
    "city": "Okinawa"
  },
  {
    "code": "AZR",
    "country_code": "DZ",
    "city": "Adrar"
  },
  {
    "code": "TSX",
    "country_code": "ID",
    "city": "Tanjung Santan"
  },
  {
    "code": "PIZ",
    "country_code": "US",
    "city": "Point Lay"
  },
  {
    "code": "DBV",
    "country_code": "HR",
    "city": "Dubrovnik"
  },
  {
    "code": "BKD",
    "country_code": "US",
    "city": "Breckenridge"
  },
  {
    "code": "BBA",
    "country_code": "CL",
    "city": "Balmaceda"
  },
  {
    "code": "LOW",
    "country_code": "US",
    "city": "Louisa"
  },
  {
    "code": "LSN",
    "country_code": "US",
    "city": "Los Banos"
  },
  {
    "code": "KRX",
    "country_code": "PG",
    "city": "Kar Kar"
  },
  {
    "code": "XKW",
    "country_code": "NO",
    "city": "Tonsberg"
  },
  {
    "code": "POI",
    "country_code": "BO",
    "city": "Potosi"
  },
  {
    "code": "BWT",
    "country_code": "AU",
    "city": "Burnie"
  },
  {
    "code": "MQA",
    "country_code": "AU",
    "city": "Mandora"
  },
  {
    "code": "PRS",
    "country_code": "SB",
    "city": "Parasi"
  },
  {
    "code": "BOI",
    "country_code": "US",
    "city": "Boise"
  },
  {
    "code": "UND",
    "country_code": "AF",
    "city": "Kunduz"
  },
  {
    "code": "YJP",
    "country_code": "CA",
    "city": "Jasper-hinton"
  },
  {
    "code": "GUO",
    "country_code": "HN",
    "city": "Gualaco"
  },
  {
    "code": "NFG",
    "country_code": "RU",
    "city": "Nefteyugansk"
  },
  {
    "code": "WSM",
    "country_code": "US",
    "city": "Wiseman"
  },
  {
    "code": "VLL",
    "country_code": "ES",
    "city": "Valladolid"
  },
  {
    "code": "YJA",
    "country_code": "CA",
    "city": "Jasper"
  },
  {
    "code": "PPJ",
    "country_code": "ID",
    "city": "Pulau Panjang"
  },
  {
    "code": "CSV",
    "country_code": "US",
    "city": "Crossville"
  },
  {
    "code": "LTK",
    "country_code": "SY",
    "city": "Latakia"
  },
  {
    "code": "MJY",
    "country_code": "RU",
    "city": "Motygino"
  },
  {
    "code": "ZJB",
    "country_code": "MY",
    "city": "Kuantan"
  },
  {
    "code": "MNC",
    "country_code": "MZ",
    "city": "Nacala"
  },
  {
    "code": "TKW",
    "country_code": "PG",
    "city": "Tekin"
  },
  {
    "code": "IVW",
    "country_code": "AU",
    "city": "Inverway"
  },
  {
    "code": "YPS",
    "country_code": "CA",
    "city": "Port Hawkesbury"
  },
  {
    "code": "TOH",
    "country_code": "VU",
    "city": "Torres"
  },
  {
    "code": "SNT",
    "country_code": "CO",
    "city": "Sabana De Torres"
  },
  {
    "code": "ZJI",
    "country_code": "CH",
    "city": "Locarno"
  },
  {
    "code": "FUM",
    "country_code": "PG",
    "city": "Fuma"
  },
  {
    "code": "WME",
    "country_code": "AU",
    "city": "Mount Keith"
  },
  {
    "code": "YDA",
    "country_code": "CA",
    "city": "Dawson City"
  },
  {
    "code": "BOW",
    "country_code": "US",
    "city": "Bartow"
  },
  {
    "code": "SZY",
    "country_code": "PL",
    "city": "Szymany"
  },
  {
    "code": "ZSU",
    "country_code": "DE",
    "city": "Dessau"
  },
  {
    "code": "HDM",
    "country_code": "IR",
    "city": "Hamadan"
  },
  {
    "code": "IGU",
    "country_code": "BR",
    "city": "Iguassu Falls"
  },
  {
    "code": "XIC",
    "country_code": "CN",
    "city": "Xichang"
  },
  {
    "code": "BIH",
    "country_code": "US",
    "city": "Bishop"
  },
  {
    "code": "KSW",
    "country_code": "IL",
    "city": "Kiryat Shmona"
  },
  {
    "code": "TYG",
    "country_code": "AU",
    "city": "Thylungra"
  },
  {
    "code": "UST",
    "country_code": "US",
    "city": "Saint Augustine"
  },
  {
    "code": "AXE",
    "country_code": "BR",
    "city": "Xanxere"
  },
  {
    "code": "BUR",
    "country_code": "US",
    "city": "Burbank"
  },
  {
    "code": "GJT",
    "country_code": "US",
    "city": "Grand Junction"
  },
  {
    "code": "BMR",
    "country_code": "DE",
    "city": "Baltrum Island"
  },
  {
    "code": "FUK",
    "country_code": "JP",
    "city": "Fukuoka"
  },
  {
    "code": "LAK",
    "country_code": "CA",
    "city": "Aklavik"
  },
  {
    "code": "MFZ",
    "country_code": "PG",
    "city": "Mesalia"
  },
  {
    "code": "ZGY",
    "country_code": "MY",
    "city": "Kuching"
  },
  {
    "code": "CYG",
    "country_code": "AU",
    "city": "Corryong"
  },
  {
    "code": "YGQ",
    "country_code": "CA",
    "city": "Geraldton"
  },
  {
    "code": "WGO",
    "country_code": "US",
    "city": "Winchester"
  },
  {
    "code": "BRT",
    "country_code": "AU",
    "city": "Bathurst Island"
  },
  {
    "code": "OTT",
    "country_code": "BR",
    "city": "Cotriguacu"
  },
  {
    "code": "SNE",
    "country_code": "CV",
    "city": "Sao Nicolau"
  },
  {
    "code": "SJT",
    "country_code": "US",
    "city": "San Angelo"
  },
  {
    "code": "XGX",
    "country_code": "FI",
    "city": "Levi"
  },
  {
    "code": "TUT",
    "country_code": "PG",
    "city": "Tauta"
  },
  {
    "code": "VNO",
    "country_code": "LT",
    "city": "Vilnius"
  },
  {
    "code": "AMZ",
    "country_code": "NZ",
    "city": "Ardmore"
  },
  {
    "code": "VDA",
    "country_code": "IL",
    "city": "Ovda"
  },
  {
    "code": "YUD",
    "country_code": "CA",
    "city": "Umiujaq"
  },
  {
    "code": "JGA",
    "country_code": "IN",
    "city": "Jamnagar"
  },
  {
    "code": "YYM",
    "country_code": "CA",
    "city": "Cowley"
  },
  {
    "code": "GHB",
    "country_code": "BS",
    "city": "Governor's Harbour"
  },
  {
    "code": "CRQ",
    "country_code": "BR",
    "city": "Caravelas"
  },
  {
    "code": "CCL",
    "country_code": "AU",
    "city": "Chinchilla"
  },
  {
    "code": "XIL",
    "country_code": "CN",
    "city": "Xilinhot"
  },
  {
    "code": "TDR",
    "country_code": "AU",
    "city": "Theodore"
  },
  {
    "code": "MLU",
    "country_code": "US",
    "city": "Monroe"
  },
  {
    "code": "EWE",
    "country_code": "ID",
    "city": "Ewer"
  },
  {
    "code": "FSD",
    "country_code": "US",
    "city": "Sioux Falls"
  },
  {
    "code": "BOM",
    "country_code": "IN",
    "city": "Mumbai"
  },
  {
    "code": "TPE",
    "country_code": "TW",
    "city": "Taipei"
  },
  {
    "code": "NCR",
    "country_code": "NI",
    "city": "San Carlos"
  },
  {
    "code": "PED",
    "country_code": "CZ",
    "city": "Pardubice"
  },
  {
    "code": "JHS",
    "country_code": "GL",
    "city": "Sisimiut"
  },
  {
    "code": "BQE",
    "country_code": "GW",
    "city": "Bubaque"
  },
  {
    "code": "PLC",
    "country_code": "CO",
    "city": "Planeta Rica"
  },
  {
    "code": "MHX",
    "country_code": "CK",
    "city": "Manihiki Island"
  },
  {
    "code": "FSS",
    "country_code": "GB",
    "city": "Forres"
  },
  {
    "code": "BTA",
    "country_code": "CM",
    "city": "Bertoua"
  },
  {
    "code": "AKI",
    "country_code": "US",
    "city": "Akiak"
  },
  {
    "code": "AXB",
    "country_code": "US",
    "city": "Alexandria Bay"
  },
  {
    "code": "NQT",
    "country_code": "GB",
    "city": "Leicestershire"
  },
  {
    "code": "EED",
    "country_code": "US",
    "city": "Needles"
  },
  {
    "code": "ARE",
    "country_code": "PR",
    "city": "Arecibo"
  },
  {
    "code": "SIT",
    "country_code": "US",
    "city": "Sitka"
  },
  {
    "code": "ODW",
    "country_code": "US",
    "city": "Oak Harbor"
  },
  {
    "code": "RXS",
    "country_code": "PH",
    "city": "Roxas City"
  },
  {
    "code": "PLX",
    "country_code": "KZ",
    "city": "Semey"
  },
  {
    "code": "TGG",
    "country_code": "MY",
    "city": "Kuala Terengganu"
  },
  {
    "code": "RRT",
    "country_code": "US",
    "city": "Warroad"
  },
  {
    "code": "ODY",
    "country_code": "LA",
    "city": "Oudomxay"
  },
  {
    "code": "AUX",
    "country_code": "BR",
    "city": "Araguaina"
  },
  {
    "code": "RIM",
    "country_code": "PE",
    "city": "Rodriguez De Mendoza"
  },
  {
    "code": "MAQ",
    "country_code": "TH",
    "city": "Mae Sot"
  },
  {
    "code": "AYL",
    "country_code": "AU",
    "city": "Anthony Lagoon"
  },
  {
    "code": "RET",
    "country_code": "NO",
    "city": "Rost"
  },
  {
    "code": "MEU",
    "country_code": "BR",
    "city": "Monte Dourado"
  },
  {
    "code": "VRO",
    "country_code": "CU",
    "city": "Matanzas"
  },
  {
    "code": "SPJ",
    "country_code": "GR",
    "city": "Sparta"
  },
  {
    "code": "RAR",
    "country_code": "CK",
    "city": "Rarotonga"
  },
  {
    "code": "PGO",
    "country_code": "US",
    "city": "Pagosa Springs"
  },
  {
    "code": "CON",
    "country_code": "US",
    "city": "Concord"
  },
  {
    "code": "LDG",
    "country_code": "RU",
    "city": "Leshukonskoye"
  },
  {
    "code": "ORH",
    "country_code": "US",
    "city": "Worcester"
  },
  {
    "code": "MNH",
    "country_code": "LK",
    "city": "Minneriya"
  },
  {
    "code": "RAI",
    "country_code": "CV",
    "city": "Praia"
  },
  {
    "code": "THO",
    "country_code": "IS",
    "city": "Thorshofn"
  },
  {
    "code": "WIE",
    "country_code": "DE",
    "city": "Wiesbaden"
  },
  {
    "code": "STU",
    "country_code": "BZ",
    "city": "Santa Cruz"
  },
  {
    "code": "MRY",
    "country_code": "US",
    "city": "Monterey"
  },
  {
    "code": "PUL",
    "country_code": "US",
    "city": "Poulsbo"
  },
  {
    "code": "AJS",
    "country_code": "MX",
    "city": "Abreojos"
  },
  {
    "code": "BMI",
    "country_code": "US",
    "city": "Bloomington"
  },
  {
    "code": "AWA",
    "country_code": "ET",
    "city": "Awassa"
  },
  {
    "code": "КДУ",
    "country_code": "RU",
    "city": "Kamenskoe"
  },
  {
    "code": "WBC",
    "country_code": "PG",
    "city": "Wapolu"
  },
  {
    "code": "SBY",
    "country_code": "US",
    "city": "Salisbury-Ocean City"
  },
  {
    "code": "YWN",
    "country_code": "CA",
    "city": "Winisk"
  },
  {
    "code": "ONP",
    "country_code": "US",
    "city": "Newport"
  },
  {
    "code": "MFR",
    "country_code": "US",
    "city": "Medford"
  },
  {
    "code": "ARZ",
    "country_code": "AO",
    "city": "N'zeto"
  },
  {
    "code": "BBT",
    "country_code": "CF",
    "city": "Berberati"
  },
  {
    "code": "PVZ",
    "country_code": "US",
    "city": "Painesville"
  },
  {
    "code": "XUM",
    "country_code": "NO",
    "city": "Neslandsvatn"
  },
  {
    "code": "HTO",
    "country_code": "US",
    "city": "East Hampton"
  },
  {
    "code": "AON",
    "country_code": "PG",
    "city": "Arona"
  },
  {
    "code": "TBI",
    "country_code": "BS",
    "city": "The Bight"
  },
  {
    "code": "SNO",
    "country_code": "TH",
    "city": "Sakon Nakhon"
  },
  {
    "code": "KLT",
    "country_code": "DE",
    "city": "Kaiserslautern"
  },
  {
    "code": "SUK",
    "country_code": "RU",
    "city": "Batagay-Alyta"
  },
  {
    "code": "MDF",
    "country_code": "US",
    "city": "Medford"
  },
  {
    "code": "CFC",
    "country_code": "BR",
    "city": "Cacador"
  },
  {
    "code": "RHN",
    "country_code": "NA",
    "city": "Rosh Pina"
  },
  {
    "code": "IMO",
    "country_code": "CF",
    "city": "Zemio"
  },
  {
    "code": "XIO",
    "country_code": "CA",
    "city": "St Marys"
  },
  {
    "code": "BHM",
    "country_code": "US",
    "city": "Birmingham"
  },
  {
    "code": "GFO",
    "country_code": "GY",
    "city": "Bartica"
  },
  {
    "code": "PMZ",
    "country_code": "CR",
    "city": "Palmar"
  },
  {
    "code": "JKG",
    "country_code": "SE",
    "city": "Jonkoping"
  },
  {
    "code": "MOF",
    "country_code": "ID",
    "city": "Maumere"
  },
  {
    "code": "KTC",
    "country_code": "CI",
    "city": "Katiola"
  },
  {
    "code": "KNJ",
    "country_code": "CG",
    "city": "Kindamba"
  },
  {
    "code": "GIZ",
    "country_code": "SA",
    "city": "Jazan"
  },
  {
    "code": "MEF",
    "country_code": "TD",
    "city": "Melfi"
  },
  {
    "code": "FIL",
    "country_code": "US",
    "city": "Fillmore"
  },
  {
    "code": "MYU",
    "country_code": "US",
    "city": "Mekoryuk"
  },
  {
    "code": "SHG",
    "country_code": "US",
    "city": "Shungnak"
  },
  {
    "code": "TEO",
    "country_code": "PG",
    "city": "Terapo"
  },
  {
    "code": "ECO",
    "country_code": "CO",
    "city": "El Encanto"
  },
  {
    "code": "SLG",
    "country_code": "US",
    "city": "Siloam Springs"
  },
  {
    "code": "AKQ",
    "country_code": "ID",
    "city": "Astraksetra"
  },
  {
    "code": "FWM",
    "country_code": "GB",
    "city": "Fort William"
  },
  {
    "code": "IQT",
    "country_code": "PE",
    "city": "Iquitos"
  },
  {
    "code": "ПУР",
    "country_code": "RU",
    "city": "Pokur"
  },
  {
    "code": "CPG",
    "country_code": "AR",
    "city": "Carmen De Patagones"
  },
  {
    "code": "IMD",
    "country_code": "PG",
    "city": "Imonda"
  },
  {
    "code": "KLV",
    "country_code": "CZ",
    "city": "Karlovy Vary"
  },
  {
    "code": "KUU",
    "country_code": "IN",
    "city": "Kulu"
  },
  {
    "code": "UGO",
    "country_code": "AO",
    "city": "Uige"
  },
  {
    "code": "BXP",
    "country_code": "PL",
    "city": "Biala Podlaska"
  },
  {
    "code": "NZA",
    "country_code": "AO",
    "city": "Nzagi"
  },
  {
    "code": "ICI",
    "country_code": "FJ",
    "city": "Cicia"
  },
  {
    "code": "SFG",
    "country_code": "MF",
    "city": "Saint Martin"
  },
  {
    "code": "MDB",
    "country_code": "BZ",
    "city": "Melinda"
  },
  {
    "code": "CTA",
    "country_code": "IT",
    "city": "Catania"
  },
  {
    "code": "SUY",
    "country_code": "RU",
    "city": "Suntar"
  },
  {
    "code": "RUA",
    "country_code": "UG",
    "city": "Arua"
  },
  {
    "code": "PRI",
    "country_code": "SC",
    "city": "Praslin Island"
  },
  {
    "code": "ROR",
    "country_code": "PW",
    "city": "Koror"
  },
  {
    "code": "HER",
    "country_code": "GR",
    "city": "Heraklion"
  },
  {
    "code": "JNZ",
    "country_code": "CN",
    "city": "Jinzhou"
  },
  {
    "code": "LYG",
    "country_code": "CN",
    "city": "Lianyungang"
  },
  {
    "code": "KSJ",
    "country_code": "GR",
    "city": "Kasos Island"
  },
  {
    "code": "OBX",
    "country_code": "PG",
    "city": "Obo"
  },
  {
    "code": "HTA",
    "country_code": "RU",
    "city": "Chita"
  },
  {
    "code": "RWB",
    "country_code": "US",
    "city": "Rowan Bay"
  },
  {
    "code": "TOA",
    "country_code": "US",
    "city": "Torrance"
  },
  {
    "code": "BXS",
    "country_code": "US",
    "city": "Borrego Springs"
  },
  {
    "code": "XGU",
    "country_code": "NO",
    "city": "Asker"
  },
  {
    "code": "XHO",
    "country_code": "CN",
    "city": "Dongguan"
  },
  {
    "code": "GBS",
    "country_code": "NZ",
    "city": "Port Fitzroy"
  },
  {
    "code": "JYV",
    "country_code": "FI",
    "city": "Jyvaskyla"
  },
  {
    "code": "ZST",
    "country_code": "CA",
    "city": "Stewart"
  },
  {
    "code": "LJU",
    "country_code": "SI",
    "city": "Ljubljana"
  },
  {
    "code": "FNB",
    "country_code": "DE",
    "city": "Neubrandenburg"
  },
  {
    "code": "MQC",
    "country_code": "PM",
    "city": "Miquelon"
  },
  {
    "code": "DCP",
    "country_code": "CA",
    "city": "Cabin Plant"
  },
  {
    "code": "CVF",
    "country_code": "FR",
    "city": "Courchevel"
  },
  {
    "code": "CJD",
    "country_code": "CO",
    "city": "Candilejas"
  },
  {
    "code": "SDB",
    "country_code": "ZA",
    "city": "Saldanha Bay"
  },
  {
    "code": "XVK",
    "country_code": "NO",
    "city": "Voss"
  },
  {
    "code": "JAK",
    "country_code": "HT",
    "city": "Jacmel"
  },
  {
    "code": "CYI",
    "country_code": "TW",
    "city": "Chiayi"
  },
  {
    "code": "BGX",
    "country_code": "BR",
    "city": "Bage"
  },
  {
    "code": "RAG",
    "country_code": "NZ",
    "city": "Raglan"
  },
  {
    "code": "HTL",
    "country_code": "US",
    "city": "Houghton"
  },
  {
    "code": "SZC",
    "country_code": "CR",
    "city": "Santa Cruz"
  },
  {
    "code": "UNK",
    "country_code": "US",
    "city": "Unalakleet"
  },
  {
    "code": "OBK",
    "country_code": "US",
    "city": "Northbrook"
  },
  {
    "code": "UBS",
    "country_code": "US",
    "city": "Columbus"
  },
  {
    "code": "KSE",
    "country_code": "UG",
    "city": "Kasese"
  },
  {
    "code": "SQK",
    "country_code": "EG",
    "city": "Sidi Barani"
  },
  {
    "code": "TCS",
    "country_code": "US",
    "city": "Truth Or Consequences"
  },
  {
    "code": "RCP",
    "country_code": "US",
    "city": "Cinder River"
  },
  {
    "code": "OCH",
    "country_code": "US",
    "city": "Nacogdoches"
  },
  {
    "code": "WSD",
    "country_code": "US",
    "city": "White Sands"
  },
  {
    "code": "CTK",
    "country_code": "US",
    "city": "Canton"
  },
  {
    "code": "JMO",
    "country_code": "NP",
    "city": "Jomsom"
  },
  {
    "code": "YBQ",
    "country_code": "CA",
    "city": "Telegraph Harbour"
  },
  {
    "code": "UCT",
    "country_code": "RU",
    "city": "Ukhta"
  },
  {
    "code": "XYE",
    "country_code": "MM",
    "city": "Ye"
  },
  {
    "code": "TSQ",
    "country_code": "BR",
    "city": "Torres"
  },
  {
    "code": "ШУШ",
    "country_code": "RU",
    "city": "Shushenskoe"
  },
  {
    "code": "FBS",
    "country_code": "US",
    "city": "Friday Harbor"
  },
  {
    "code": "COJ",
    "country_code": "AU",
    "city": "Coonabarabran"
  },
  {
    "code": "BJB",
    "country_code": "IR",
    "city": "Bojnord"
  },
  {
    "code": "LGM",
    "country_code": "PG",
    "city": "Laiagam"
  },
  {
    "code": "GEG",
    "country_code": "US",
    "city": "Spokane"
  },
  {
    "code": "LRV",
    "country_code": "VE",
    "city": "Los Roques"
  },
  {
    "code": "SGR",
    "country_code": "US",
    "city": "Sugar Land"
  },
  {
    "code": "INY",
    "country_code": "ZA",
    "city": "Inyati"
  },
  {
    "code": "WCR",
    "country_code": "US",
    "city": "Chandalar"
  },
  {
    "code": "BRD",
    "country_code": "US",
    "city": "Brainerd"
  },
  {
    "code": "CMV",
    "country_code": "NZ",
    "city": "Coromandel"
  },
  {
    "code": "XHT",
    "country_code": "NO",
    "city": "Arna"
  },
  {
    "code": "NSY",
    "country_code": "IT",
    "city": "Sigonella"
  },
  {
    "code": "LNK",
    "country_code": "US",
    "city": "Lincoln"
  },
  {
    "code": "CVM",
    "country_code": "MX",
    "city": "Ciudad Victoria"
  },
  {
    "code": "CXY",
    "country_code": "BS",
    "city": "Cat Cays"
  },
  {
    "code": "GAU",
    "country_code": "IN",
    "city": "Guwahati"
  },
  {
    "code": "GDZ",
    "country_code": "RU",
    "city": "Gelendzik"
  },
  {
    "code": "MMU",
    "country_code": "US",
    "city": "Morristown"
  },
  {
    "code": "YGB",
    "country_code": "CA",
    "city": "Gillies Bay"
  },
  {
    "code": "PDU",
    "country_code": "UY",
    "city": "Paysandu"
  },
  {
    "code": "TWN",
    "country_code": "AU",
    "city": "Tewantin"
  },
  {
    "code": "OKS",
    "country_code": "US",
    "city": "Oshkosh"
  },
  {
    "code": "FJR",
    "country_code": "AE",
    "city": "Al-fujairah"
  },
  {
    "code": "MVO",
    "country_code": "TD",
    "city": "Mongo"
  },
  {
    "code": "ALD",
    "country_code": "PE",
    "city": "Alerta"
  },
  {
    "code": "DLM",
    "country_code": "TR",
    "city": "Dalaman"
  },
  {
    "code": "HZA",
    "country_code": "CN",
    "city": "Heze"
  },
  {
    "code": "LGZ",
    "country_code": "CO",
    "city": "Leguizamo"
  },
  {
    "code": "PCK",
    "country_code": "US",
    "city": "Porcupine Creek"
  },
  {
    "code": "LYS",
    "country_code": "FR",
    "city": "Lyon"
  },
  {
    "code": "PLQ",
    "country_code": "LT",
    "city": "Palanga"
  }
];

export default iataCodes