export const locationData = [{
    countryName: "US",
    countryData: [
        {
            localData: ["Colorado", 624596, 52049666, 195, 3203, 33.33, 220],
            branchData: [["Branch 1", 878269, 73189083, 287, 3060, 33.33, 1148]]
        },
        {
            localData: ["Florida", 600628, 52049666, 195, 3203, 33.33, 220],
            branchData: [["Branch 2", 822775, 68564583, 257, 3201, 33.33, 1028]]
        },
        {
            localData: ["Mississippi", 640596, 51385666, 198, 3114, 33.33, 792],
            branchData: [["Branch 3", 817009, 68084083, 252, 3242, 33.33, 1008]]
        }
    ]
}];
export const colType = [
    { title: "Location", type: "link", showPct: false },
    { title: "Potential Revenue", type: "curr", showPct: true },
    { title: "Competitor Processing Volume", type: "curr", showPct: true },
    { title: "Competitor Merchant", type: "num", showPct: false },
    { title: "Revenue/Account", type: "curr", showPct: false },
    { title: "Market Share", type: "pct", showPct: false },
    { title: "Commercial DDA's", type: "num", showPct: false }
];