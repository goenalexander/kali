// ===================================================================
//  EDIT DATA PAKAN ANDA DI SINI
//  Untuk menambah/mengubah, cukup edit daftar di dalam file ini.
//  Halaman kalkulator akan otomatis diperbarui.
// ===================================================================

const feedData = {
  
  bahanBakuTunggal: [
    {
      "Bahan Pakan": "Jagung Giling",
      "Protein Kasar (%)": "8.7",
      "Energi Metabolisme (kkal/kg)": "3610",
      "Lemak Kasar (%)": "4.5",
      "Serat Kasar (%)": "2.5",
      "Kalsium (%)": "0.009",
      "Fosfor (%)": "0.038"
    },
    {
      "Bahan Pakan": "Dedak Padi",
      "Protein Kasar (%)": "12-14",
      "Energi Metabolisme (kkal/kg)": "1900",
      "Lemak Kasar (%)": "5",
      "Serat Kasar (%)": "10",
      "Kalsium (%)": "0.06",
      "Fosfor (%)": "1.5"
    },
    {
      "Bahan Pakan": "Menir",
      "Protein Kasar (%)": "7.70",
      "Energi Metabolisme (kkal/kg)": "3620",
      "Lemak Kasar (%)": "4.40",
      "Serat Kasar (%)": "0.20",
      "Kalsium (%)": "0.022",
      "Fosfor (%)": "0.272"
    },
    {
      "Bahan Pakan": "Bungkil Kedelai",
      "Protein Kasar (%)": "44-46",
      "Energi Metabolisme (kkal/kg)": "2500-2900",
      "Lemak Kasar (%)": "0.5-2",
      "Serat Kasar (%)": "3-5",
      "Kalsium (%)": "0.2",
      "Fosfor (%)": "0.67"
    },
    {
      "Bahan Pakan": "Tepung Ikan",
      "Protein Kasar (%)": "40-68",
      "Energi Metabolisme (kkal/kg)": "2750",
      "Lemak Kasar (%)": "Max 8",
      "Serat Kasar (%)": "1",
      "Kalsium (%)": "6.5",
      "Fosfor (%)": "2.88"
    },
    {
      "Bahan Pakan": "Tepung Tulang",
      "Protein Kasar (%)": null,
      "Energi Metabolisme (kkal/kg)": null,
      "Lemak Kasar (%)": null,
      "Serat Kasar (%)": null,
      "Kalsium (%)": "24",
      "Fosfor (%)": "12"
    },
    {
      "Bahan Pakan": "Pollard",
      "Protein Kasar (%)": "15",
      "Energi Metabolisme (kkal/kg)": "1700",
      "Lemak Kasar (%)": "4",
      "Serat Kasar (%)": "9",
      "Kalsium (%)": "0.1",
      "Fosfor (%)": "0.9"
    },
    {
      "Bahan Pakan": "Canola (Bungkil Canola)",
      "Protein Kasar (%)": "36",
      "Energi Metabolisme (kkal/kg)": "1876-2345",
      "Lemak Kasar (%)": "1-2",
      "Serat Kasar (%)": "34.53",
      "Kalsium (%)": null,
      "Fosfor (%)": null
    },
    {
      "Bahan Pakan": "Daun Singkong",
      "Protein Kasar (%)": "6.8",
      "Energi Metabolisme (kkal/kg)": null,
      "Lemak Kasar (%)": "1.2",
      "Serat Kasar (%)": "2.4",
      "Kalsium (%)": "0.165",
      "Fosfor (%)": "0.054"
    },
    {
      "Bahan Pakan": "Daun Pepaya",
      "Protein Kasar (%)": "8.0",
      "Energi Metabolisme (kkal/kg)": "790",
      "Lemak Kasar (%)": "2.0",
      "Serat Kasar (%)": null,
      "Kalsium (%)": "0.353",
      "Fosfor (%)": "0.063"
    }
    // Tambahkan bahan baku lainnya di sini...
  ],
  konsentratKomersial: [
    {
      "Merek/Varian Konsentrat": "Konsentrat Protein 32% (Umum)",
      "Protein Kasar (%)": "32",
      "Energi Metabolisme (kkal/kg)": "1800",
      "Lemak Kasar (%)": "4",
      "Serat Kasar (%)": "2",
      "Kalsium (%)": "10",
      "Fosfor (%)": null
    },
    {
      "Merek/Varian Konsentrat": "Konsentrat Protein 37-39% (Hi-Pro-Vite 144 Itik)",
      "Protein Kasar (%)": "37-39",
      "Energi Metabolisme (kkal/kg)": "2538",
      "Lemak Kasar (%)": "Min 2",
      "Serat Kasar (%)": "Max 6",
      "Kalsium (%)": "Min 12",
      "Fosfor (%)": "Min 1.2"
    }
    // Tambahkan konsentrat lainnya di sini...
  ],
  pakanPabrikan: [
    {
      "Merek/Varian Pakan": "Hi-Pro-Vite 511",
      "Protein Kasar (%)": "Min 20",
      "Energi Metabolisme (kkal/kg)": "2950",
      "Lemak Kasar (%)": "Min 5",
      "Serat Kasar (%)": "Max 5",
      "Kalsium (%)": "0.8-1.1",
      "Fosfor (%)": "Min 0.5"
    },
    {
      "Merek/Varian Pakan": "Comfeed BR 1",
      "Protein Kasar (%)": "Min 21",
      "Energi Metabolisme (kkal/kg)": "3000-3200",
      "Lemak Kasar (%)": "4-6",
      "Serat Kasar (%)": "Max 5",
      "Kalsium (%)": "0.9-1.2",
      "Fosfor (%)": "0.45-0.5"
    }
    // Tambahkan pakan pabrikan lainnya di sini...
  ]
};
