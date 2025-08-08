
export interface KeywordData {
  keyword: string;
  usMsv: number;
  globalMsv: number;
  kd: number;
  intent: string;
  ranking: {
    fortinet: number | null;
    paloalto: number | null;
    hpe: number | null;
    cisco: number | null;
    crowdstrike: number | null;
  };
  serpPosition1: string;
  aiOverview: boolean;
  fortinetInAiOverviewPosition: number | null;
  fortinetUrlOrganic: string | null;
  fortinetUrlAio: string | null;
}
